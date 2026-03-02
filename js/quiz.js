// Quiz Mode - timed practice exams with immediate feedback
const Quiz = (() => {
  let state = {
    phase: 'setup', // setup | active | review | results
    questions: [],
    currentIndex: 0,
    answers: [],     // { questionId, selected, correct, isCorrect }
    domain: 'all',
    count: 20,
    timerEnabled: false,
    timerSeconds: 0,
    timerInterval: null,
    startTime: null,
    answered: false,
    shuffledOrders: {}
  };

  const container = () => document.getElementById('page-quiz');
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  function init() {}

  function show() {
    if (state.phase === 'active') {
      renderQuestion();
    } else {
      showSetup();
    }
  }

  function showSetup() {
    state.phase = 'setup';
    stopTimer();

    const domainOptions = Object.entries(DOMAINS).map(([key, d]) =>
      `<option value="${key}">${d.name} (${d.weight}%)</option>`
    ).join('');

    container().innerHTML = `
      <div class="quiz-setup">
        <h2 style="font-size:1.3rem;margin-bottom:20px;">Practice Quiz</h2>

        <div class="form-group">
          <label>Domain</label>
          <select id="quizDomain">
            <option value="all">All Domains</option>
            ${domainOptions}
          </select>
        </div>

        <div class="form-group">
          <label>Number of Questions</label>
          <div class="count-options">
            <button class="count-btn" data-count="10">10</button>
            <button class="count-btn active" data-count="20">20</button>
            <button class="count-btn" data-count="30">30</button>
            <button class="count-btn" data-count="60">60</button>
          </div>
        </div>

        <div class="form-group">
          <div class="timer-toggle">
            <label class="setting-label">Exam Timer</label>
            <div class="toggle-switch">
              <input type="checkbox" id="quizTimer">
              <span class="toggle-slider"></span>
            </div>
          </div>
        </div>

        <button class="btn-primary mt-16" id="startQuizBtn">Start Quiz</button>
      </div>
    `;

    // Count buttons
    container().querySelectorAll('.count-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container().querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.count = parseInt(btn.dataset.count);
      });
    });

    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
  }

  function startQuiz() {
    state.domain = document.getElementById('quizDomain').value;
    state.timerEnabled = document.getElementById('quizTimer').checked;
    state.currentIndex = 0;
    state.answers = [];
    state.answered = false;
    state.shuffledOrders = {};
    state.startTime = Date.now();

    // Filter and select questions
    let pool = state.domain === 'all' ? [...QUESTIONS] : QUESTIONS.filter(q => q.domain === state.domain);
    pool = Progress.getWeightedQuestions(pool);
    state.questions = pool.slice(0, Math.min(state.count, pool.length));

    if (state.questions.length === 0) {
      container().innerHTML = `<div class="empty-state"><div class="empty-icon">&#128533;</div><p>No questions available for this domain.</p></div>`;
      return;
    }

    // Timer: 1.5 min per question
    if (state.timerEnabled) {
      state.timerSeconds = state.questions.length * 90;
      startTimer();
    }

    state.phase = 'active';
    renderQuestion();
  }

  // Build a shuffled order for a question's options (stable per quiz attempt)
  function getShuffledOrder(qIndex) {
    if (!state.shuffledOrders[qIndex]) {
      const q = state.questions[qIndex];
      const indices = q.options.map((_, i) => i);
      // Fisher-Yates shuffle
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      state.shuffledOrders[qIndex] = indices;
    }
    return state.shuffledOrders[qIndex];
  }

  function renderQuestion() {
    const q = state.questions[state.currentIndex];
    const domain = DOMAINS[q.domain];
    const isMulti = q.type === 'multi';
    const existingAnswer = state.answers[state.currentIndex];
    state.answered = !!existingAnswer;

    // Get shuffled display order for options
    const shuffled = getShuffledOrder(state.currentIndex);

    const timerHtml = state.timerEnabled ? `<div class="quiz-timer" id="quizTimerDisplay">${formatTime(state.timerSeconds)}</div>` : '';
    const progressPct = ((state.currentIndex + 1) / state.questions.length * 100).toFixed(0);

    container().innerHTML = `
      <div class="quiz-header">
        <span class="quiz-progress-text">${state.currentIndex + 1} / ${state.questions.length}</span>
        ${timerHtml}
      </div>
      <div class="quiz-progress-bar"><div class="fill" style="width:${progressPct}%"></div></div>

      <span class="question-domain-tag" style="background:${domain.color}">${domain.name}</span>
      <div class="question-text">${q.question}</div>
      ${isMulti ? '<div class="question-hint">Select all that apply</div>' : ''}

      <div class="options-list" id="optionsList">
        ${shuffled.map((origIdx, displayIdx) => {
          const opt = q.options[origIdx];
          let cls = 'option-btn';
          if (existingAnswer) {
            cls += ' disabled';
            const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
            const selectedArr = Array.isArray(existingAnswer.selected) ? existingAnswer.selected : [existingAnswer.selected];
            if (correctArr.includes(origIdx)) cls += ' correct';
            else if (selectedArr.includes(origIdx)) cls += ' incorrect';
          }
          return `<button class="${cls}" data-orig-index="${origIdx}">
            <span class="option-letter">${letters[displayIdx]}</span>
            <span>${opt}</span>
          </button>`;
        }).join('')}
      </div>

      <div id="explanationArea">${existingAnswer ? renderExplanation(q, existingAnswer.isCorrect) : ''}</div>

      <div class="quiz-nav-buttons">
        ${state.currentIndex > 0 ? '<button class="btn-secondary" id="prevBtn">Previous</button>' : ''}
        ${state.answered
          ? (state.currentIndex < state.questions.length - 1
            ? '<button class="btn-primary" id="nextBtn">Next</button>'
            : '<button class="btn-primary" id="finishBtn">Finish Quiz</button>')
          : `<button class="btn-primary" id="submitBtn" ${isMulti ? '' : 'disabled'}>Submit</button>`
        }
      </div>
    `;

    // Bind option clicks
    if (!existingAnswer) {
      const isMultiSelect = isMulti;
      let selected = [];

      container().querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const origIdx = parseInt(btn.dataset.origIndex);
          if (isMultiSelect) {
            if (selected.includes(origIdx)) {
              selected = selected.filter(s => s !== origIdx);
              btn.classList.remove('selected');
            } else {
              selected.push(origIdx);
              btn.classList.add('selected');
            }
            document.getElementById('submitBtn').disabled = selected.length === 0;
          } else {
            container().querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selected = [origIdx];
            // Auto-submit for single choice
            submitAnswer(selected, q);
          }
        });
      });

      const submitBtn = document.getElementById('submitBtn');
      if (submitBtn && isMulti) {
        submitBtn.addEventListener('click', () => {
          if (selected.length > 0) submitAnswer(selected, q);
        });
      }
    }

    // Nav
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => { state.currentIndex--; renderQuestion(); });

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.addEventListener('click', () => { state.currentIndex++; renderQuestion(); });

    const finishBtn = document.getElementById('finishBtn');
    if (finishBtn) finishBtn.addEventListener('click', showResults);
  }

  function submitAnswer(selected, q) {
    const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
    const isCorrect = arraysEqual(selected.sort(), correctArr.sort());

    state.answers[state.currentIndex] = {
      questionId: q.id,
      selected: q.type === 'multi' ? selected : selected[0],
      correct: q.correct,
      isCorrect
    };
    state.answered = true;

    Progress.recordAnswer(q.id, isCorrect);
    renderQuestion();
  }

  function renderExplanation(q, isCorrect) {
    return `<div class="explanation-box">
      <strong>${isCorrect ? '&#10004; Correct!' : '&#10008; Incorrect'}</strong><br>
      ${q.explanation}
    </div>`;
  }

  function showResults() {
    stopTimer();
    state.phase = 'results';

    const total = state.questions.length;
    const correct = state.answers.filter(a => a?.isCorrect).length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    const timeSpent = Math.round((Date.now() - state.startTime) / 1000);

    Progress.recordQuiz({
      domain: state.domain,
      total,
      correct,
      timeSpent
    });

    const wrongAnswers = state.answers
      .map((a, i) => ({ ...a, question: state.questions[i], qIndex: i }))
      .filter(a => !a.isCorrect);

    // Helper: map original option index to the display letter via shuffle order
    function displayLabel(qIndex, origIdx) {
      const shuffled = state.shuffledOrders[qIndex];
      if (!shuffled) return letters[origIdx];
      const displayPos = shuffled.indexOf(origIdx);
      return letters[displayPos >= 0 ? displayPos : origIdx];
    }

    container().innerHTML = `
      <div class="results-score">
        <div class="score-circle ${passed ? 'pass' : 'fail'}">
          <div class="pct">${pct}%</div>
          <div class="of">${correct}/${total}</div>
        </div>
        <div class="pass-fail" style="color:${passed ? 'var(--success)' : 'var(--error)'}">
          ${passed ? 'PASSED' : 'NEEDS WORK'} ${passed ? '&#127881;' : ''}
        </div>
        <div style="color:var(--text-muted);font-size:0.85rem;margin-top:4px;">70% required to pass</div>
      </div>

      <div class="results-stats">
        <div class="stat"><div class="val">${correct}</div><div class="lbl">Correct</div></div>
        <div class="stat"><div class="val">${total - correct}</div><div class="lbl">Wrong</div></div>
        <div class="stat"><div class="val">${formatTime(timeSpent)}</div><div class="lbl">Time</div></div>
      </div>

      ${wrongAnswers.length > 0 ? `
        <h3 style="font-size:0.9rem;margin:20px 0 12px;color:var(--text-secondary);">Review Wrong Answers (${wrongAnswers.length})</h3>
        <div class="wrong-answers-list">
          ${wrongAnswers.map(a => {
            const q = a.question;
            const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
            const selectedArr = Array.isArray(a.selected) ? a.selected : [a.selected];
            return `<div class="wrong-item">
              <div class="wrong-q">${q.question}</div>
              <div class="wrong-your-answer">Your answer: ${selectedArr.map(i => displayLabel(a.qIndex, i) + ') ' + q.options[i]).join(', ')}</div>
              <div class="wrong-correct-answer">Correct: ${correctArr.map(i => displayLabel(a.qIndex, i) + ') ' + q.options[i]).join(', ')}</div>
              <div class="wrong-explanation">${q.explanation}</div>
            </div>`;
          }).join('')}
        </div>
      ` : ''}

      <div class="quiz-nav-buttons mt-24">
        <button class="btn-secondary" id="retryBtn">Retry Same</button>
        <button class="btn-primary" id="newQuizBtn">New Quiz</button>
      </div>
    `;

    document.getElementById('retryBtn').addEventListener('click', () => {
      state.currentIndex = 0;
      state.answers = [];
      state.answered = false;
      state.shuffledOrders = {};
      state.startTime = Date.now();
      if (state.timerEnabled) {
        state.timerSeconds = state.questions.length * 90;
        startTimer();
      }
      state.phase = 'active';
      renderQuestion();
    });

    document.getElementById('newQuizBtn').addEventListener('click', showSetup);
  }

  // Timer
  function startTimer() {
    stopTimer();
    state.timerInterval = setInterval(() => {
      state.timerSeconds--;
      const display = document.getElementById('quizTimerDisplay');
      if (display) {
        display.textContent = formatTime(state.timerSeconds);
        display.className = 'quiz-timer';
        if (state.timerSeconds < 60) display.classList.add('danger');
        else if (state.timerSeconds < 300) display.classList.add('warning');
      }
      if (state.timerSeconds <= 0) {
        stopTimer();
        showResults();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(Math.abs(seconds) / 60);
    const s = Math.abs(seconds) % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => v === b[i]);
  }

  return { init, show };
})();
