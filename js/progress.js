// Progress Tracking Module - localStorage persistence, spaced repetition weighting
const Progress = (() => {
  const STORAGE_KEY = 'snow-csa-progress';

  function getAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createDefault();
    } catch {
      return createDefault();
    }
  }

  function createDefault() {
    return {
      questions: {},    // { [questionId]: { attempts: 0, correct: 0, lastSeen: null, lastCorrect: null, streak: 0 } }
      quizHistory: [],  // { date, domain, total, correct, timeSpent }
      settings: { darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches }
    };
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getQuestionStats(questionId) {
    const data = getAll();
    return data.questions[questionId] || { attempts: 0, correct: 0, lastSeen: null, lastCorrect: null, streak: 0 };
  }

  function recordAnswer(questionId, isCorrect) {
    const data = getAll();
    if (!data.questions[questionId]) {
      data.questions[questionId] = { attempts: 0, correct: 0, lastSeen: null, lastCorrect: null, streak: 0 };
    }
    const q = data.questions[questionId];
    q.attempts++;
    if (isCorrect) {
      q.correct++;
      q.streak++;
      q.lastCorrect = Date.now();
    } else {
      q.streak = 0;
    }
    q.lastSeen = Date.now();
    save(data);
  }

  function recordQuiz(result) {
    const data = getAll();
    data.quizHistory.push({
      date: Date.now(),
      domain: result.domain,
      total: result.total,
      correct: result.correct,
      timeSpent: result.timeSpent || 0
    });
    // Keep last 100 quizzes
    if (data.quizHistory.length > 100) {
      data.quizHistory = data.quizHistory.slice(-100);
    }
    save(data);
  }

  function getDomainAccuracy(domainKey) {
    const data = getAll();
    const domainQuestions = QUESTIONS.filter(q => q.domain === domainKey);
    let totalAttempts = 0, totalCorrect = 0;
    domainQuestions.forEach(q => {
      const stats = data.questions[q.id];
      if (stats) {
        totalAttempts += stats.attempts;
        totalCorrect += stats.correct;
      }
    });
    return totalAttempts === 0 ? null : Math.round((totalCorrect / totalAttempts) * 100);
  }

  function getDomainProgress(domainKey) {
    const data = getAll();
    const domainQuestions = QUESTIONS.filter(q => q.domain === domainKey);
    const attempted = domainQuestions.filter(q => data.questions[q.id]?.attempts > 0).length;
    return { attempted, total: domainQuestions.length, pct: domainQuestions.length === 0 ? 0 : Math.round((attempted / domainQuestions.length) * 100) };
  }

  function getOverallStats() {
    const data = getAll();
    let totalAttempts = 0, totalCorrect = 0, questionsAttempted = 0;
    const totalQuestions = QUESTIONS.length;

    QUESTIONS.forEach(q => {
      const stats = data.questions[q.id];
      if (stats && stats.attempts > 0) {
        questionsAttempted++;
        totalAttempts += stats.attempts;
        totalCorrect += stats.correct;
      }
    });

    const accuracy = totalAttempts === 0 ? 0 : Math.round((totalCorrect / totalAttempts) * 100);
    const coverage = Math.round((questionsAttempted / totalQuestions) * 100);

    // Readiness: weighted combo of coverage and accuracy
    const readiness = Math.round(coverage * 0.4 + accuracy * 0.6);

    // Current streak (consecutive days with activity)
    const streak = calculateStreak(data);

    return { totalQuestions, questionsAttempted, totalAttempts, totalCorrect, accuracy, coverage, readiness, streak, quizCount: data.quizHistory.length };
  }

  function calculateStreak(data) {
    if (data.quizHistory.length === 0) return 0;
    const days = new Set();
    data.quizHistory.forEach(q => {
      days.add(new Date(q.date).toDateString());
    });
    // Also count individual question answers
    Object.values(data.questions).forEach(q => {
      if (q.lastSeen) days.add(new Date(q.lastSeen).toDateString());
    });

    const sortedDays = Array.from(days).map(d => new Date(d)).sort((a, b) => b - a);
    if (sortedDays.length === 0) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const mostRecent = new Date(sortedDays[0]);
    mostRecent.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((today - mostRecent) / (1000 * 60 * 60 * 24));
    if (diffDays > 1) return 0;

    let streak = 1;
    for (let i = 1; i < sortedDays.length; i++) {
      const prev = new Date(sortedDays[i - 1]);
      const curr = new Date(sortedDays[i]);
      prev.setHours(0, 0, 0, 0);
      curr.setHours(0, 0, 0, 0);
      const diff = Math.floor((prev - curr) / (1000 * 60 * 60 * 24));
      if (diff === 1) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  // Spaced repetition weight: higher = more likely to appear
  function getWeight(questionId) {
    const stats = getQuestionStats(questionId);
    if (stats.attempts === 0) return 3; // Unseen questions get high priority
    const accuracy = stats.correct / stats.attempts;
    const daysSinceSeen = stats.lastSeen ? (Date.now() - stats.lastSeen) / (1000 * 60 * 60 * 24) : 30;

    // Low accuracy + not seen recently = highest weight
    let weight = 1;
    if (accuracy < 0.5) weight += 3;
    else if (accuracy < 0.75) weight += 2;
    else if (accuracy < 1) weight += 1;

    if (daysSinceSeen > 7) weight += 2;
    else if (daysSinceSeen > 3) weight += 1;

    if (stats.streak === 0 && stats.attempts > 0) weight += 1;

    return weight;
  }

  function getWeightedQuestions(questions) {
    // Returns questions sorted by weight (highest first) with some randomization
    return questions
      .map(q => ({ question: q, weight: getWeight(q.id), rand: Math.random() }))
      .sort((a, b) => (b.weight + b.rand) - (a.weight + a.rand))
      .map(item => item.question);
  }

  function getRecentQuizzes(count = 10) {
    const data = getAll();
    return data.quizHistory.slice(-count).reverse();
  }

  function getSetting(key) {
    const data = getAll();
    return data.settings?.[key];
  }

  function setSetting(key, value) {
    const data = getAll();
    if (!data.settings) data.settings = {};
    data.settings[key] = value;
    save(data);
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    getAll, getQuestionStats, recordAnswer, recordQuiz,
    getDomainAccuracy, getDomainProgress, getOverallStats,
    getWeight, getWeightedQuestions, getRecentQuizzes,
    getSetting, setSetting, reset
  };
})();
