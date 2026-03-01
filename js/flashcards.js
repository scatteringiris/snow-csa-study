// Flashcard Mode - tap to flip, swipe gestures, spaced repetition
const Flashcards = (() => {
  let state = {
    domain: 'all',
    cards: [],
    currentIndex: 0,
    flipped: false,
    gotIt: 0,
    needReview: 0,
    touchStartX: 0,
    touchStartY: 0,
    dragging: false
  };

  const container = () => document.getElementById('page-flashcards');

  function init() {}

  function show() {
    showSetup();
  }

  function showSetup() {
    const domainOptions = Object.entries(DOMAINS).map(([key, d]) =>
      `<option value="${key}">${d.name}</option>`
    ).join('');

    container().innerHTML = `
      <h2 style="font-size:1.3rem;margin-bottom:20px;">Flashcards</h2>

      <div class="form-group">
        <label>Domain</label>
        <select id="fcDomain">
          <option value="all">All Domains</option>
          ${domainOptions}
        </select>
      </div>

      <div class="form-group">
        <div class="timer-toggle">
          <label class="setting-label">Prioritize weak questions</label>
          <div class="toggle-switch">
            <input type="checkbox" id="fcWeighted" checked>
            <span class="toggle-slider"></span>
          </div>
        </div>
      </div>

      <button class="btn-primary mt-16" id="startFcBtn">Start Flashcards</button>
    `;

    document.getElementById('startFcBtn').addEventListener('click', startDeck);
  }

  function startDeck() {
    state.domain = document.getElementById('fcDomain').value;
    const weighted = document.getElementById('fcWeighted').checked;

    let pool = state.domain === 'all' ? [...QUESTIONS] : QUESTIONS.filter(q => q.domain === state.domain);

    if (weighted) {
      state.cards = Progress.getWeightedQuestions(pool);
    } else {
      state.cards = shuffleArray(pool);
    }

    state.currentIndex = 0;
    state.flipped = false;
    state.gotIt = 0;
    state.needReview = 0;

    if (state.cards.length === 0) {
      container().innerHTML = `<div class="empty-state"><div class="empty-icon">&#128533;</div><p>No questions available.</p></div>`;
      return;
    }

    renderCard();
  }

  function renderCard() {
    if (state.currentIndex >= state.cards.length) {
      showSummary();
      return;
    }

    const q = state.cards[state.currentIndex];
    const domain = DOMAINS[q.domain];
    const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const answerText = correctArr.map(i => letters[i] + ') ' + q.options[i]).join(', ');

    container().innerHTML = `
      <div class="flashcard-progress">
        ${state.currentIndex + 1} / ${state.cards.length}
        &nbsp;&middot;&nbsp;
        <span style="color:var(--success)">${state.gotIt} got it</span> &middot;
        <span style="color:var(--warning)">${state.needReview} review</span>
      </div>

      <div class="flashcard-container" id="fcContainer">
        <div class="flashcard ${state.flipped ? 'flipped' : ''}" id="flashcard">
          <div class="flashcard-face flashcard-front">
            <span class="flashcard-domain" style="background:${domain.color}">${domain.name}</span>
            <div class="flashcard-question">${q.question}</div>
            <div class="flashcard-tap-hint">Tap to reveal answer</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <span class="flashcard-domain" style="background:${domain.color}">${domain.name}</span>
            <div class="flashcard-answer-label">Answer</div>
            <div class="flashcard-answer">${answerText}</div>
            <div class="flashcard-explanation">${q.explanation}</div>
          </div>
        </div>
      </div>

      <div class="flashcard-actions" id="fcActions" style="${state.flipped ? '' : 'visibility:hidden'}">
        <button class="fc-btn review" id="fcReview">&#128260; Review</button>
        <button class="fc-btn got-it" id="fcGotIt">&#10004; Got It</button>
      </div>

      <div class="text-center mt-16">
        <button class="btn-secondary" style="display:inline-block;width:auto;padding:8px 20px;" id="fcBackBtn">Back to Setup</button>
      </div>
    `;

    // Flip on tap
    const card = document.getElementById('flashcard');
    card.addEventListener('click', () => {
      if (!state.flipped) {
        flipCard();
      }
    });

    // Touch/swipe
    const fcContainer = document.getElementById('fcContainer');
    fcContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    fcContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    fcContainer.addEventListener('touchend', handleTouchEnd);

    // Buttons
    document.getElementById('fcGotIt').addEventListener('click', () => handleResponse(true));
    document.getElementById('fcReview').addEventListener('click', () => handleResponse(false));
    document.getElementById('fcBackBtn').addEventListener('click', showSetup);
  }

  function flipCard() {
    state.flipped = true;
    const card = document.getElementById('flashcard');
    card.classList.add('flipped');
    document.getElementById('fcActions').style.visibility = 'visible';
  }

  function handleResponse(gotIt) {
    const q = state.cards[state.currentIndex];
    if (gotIt) {
      state.gotIt++;
      Progress.recordAnswer(q.id, true);
    } else {
      state.needReview++;
      Progress.recordAnswer(q.id, false);
    }

    // Animate out
    const card = document.getElementById('flashcard');
    card.classList.add(gotIt ? 'swipe-right' : 'swipe-left');

    setTimeout(() => {
      state.currentIndex++;
      state.flipped = false;
      renderCard();
    }, 300);
  }

  // Touch handling for swipe
  function handleTouchStart(e) {
    state.touchStartX = e.touches[0].clientX;
    state.touchStartY = e.touches[0].clientY;
    state.dragging = true;
  }

  function handleTouchMove(e) {
    if (!state.dragging || !state.flipped) return;
    const dx = e.touches[0].clientX - state.touchStartX;
    const card = document.getElementById('flashcard');
    if (Math.abs(dx) > 20) {
      card.style.transform = `rotateY(180deg) translateX(${dx}px) rotate(${dx * 0.05}deg)`;
      card.style.transition = 'none';
    }
  }

  function handleTouchEnd(e) {
    if (!state.dragging) return;
    state.dragging = false;

    const dx = e.changedTouches[0].clientX - state.touchStartX;
    const dy = e.changedTouches[0].clientY - state.touchStartY;

    // Only register horizontal swipes (not vertical scrolling)
    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) && state.flipped) {
      handleResponse(dx > 0);
    } else {
      // Reset position
      const card = document.getElementById('flashcard');
      if (card) {
        card.style.transition = 'transform 0.3s ease';
        card.style.transform = state.flipped ? 'rotateY(180deg)' : '';
      }
      // If not flipped and it was a tap (small movement), flip
      if (!state.flipped && Math.abs(dx) < 10 && Math.abs(dy) < 10) {
        flipCard();
      }
    }
  }

  function showSummary() {
    const total = state.cards.length;
    const pct = total > 0 ? Math.round((state.gotIt / total) * 100) : 0;

    container().innerHTML = `
      <div class="results-score">
        <div class="score-circle ${pct >= 70 ? 'pass' : 'fail'}">
          <div class="pct">${pct}%</div>
          <div class="of">${state.gotIt}/${total}</div>
        </div>
        <div class="pass-fail" style="color:${pct >= 70 ? 'var(--success)' : 'var(--error)'}">
          ${pct >= 70 ? 'Great session!' : 'Keep practicing!'}
        </div>
      </div>

      <div class="results-stats">
        <div class="stat"><div class="val" style="color:var(--success)">${state.gotIt}</div><div class="lbl">Got It</div></div>
        <div class="stat"><div class="val" style="color:var(--warning)">${state.needReview}</div><div class="lbl">Need Review</div></div>
        <div class="stat"><div class="val">${total}</div><div class="lbl">Total</div></div>
      </div>

      <div class="quiz-nav-buttons mt-24">
        <button class="btn-secondary" id="fcRetryBtn">Review Weak</button>
        <button class="btn-primary" id="fcNewBtn">New Deck</button>
      </div>
    `;

    document.getElementById('fcRetryBtn').addEventListener('click', () => {
      // Restart with only the "need review" questions re-weighted
      state.currentIndex = 0;
      state.flipped = false;
      state.gotIt = 0;
      state.needReview = 0;
      state.cards = Progress.getWeightedQuestions(
        state.domain === 'all' ? [...QUESTIONS] : QUESTIONS.filter(q => q.domain === state.domain)
      );
      renderCard();
    });

    document.getElementById('fcNewBtn').addEventListener('click', showSetup);
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return { init, show };
})();
