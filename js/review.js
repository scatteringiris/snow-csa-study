// Review Mode - browse questions by domain with search/filter
const Review = (() => {
  let state = {
    domain: 'all',
    searchQuery: '',
    openCards: new Set()
  };

  const container = () => document.getElementById('page-review');
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  function init() {}

  function show() {
    render();
  }

  function render() {
    const domainTabs = `
      <button class="domain-tab ${state.domain === 'all' ? 'active' : ''}" data-domain="all">All</button>
      ${Object.entries(DOMAINS).map(([key, d]) =>
        `<button class="domain-tab ${state.domain === key ? 'active' : ''}" data-domain="${key}">${d.name.split(' ')[0]}</button>`
      ).join('')}
    `;

    let filtered = state.domain === 'all' ? QUESTIONS : QUESTIONS.filter(q => q.domain === state.domain);

    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(q =>
        q.question.toLowerCase().includes(query) ||
        q.options.some(o => o.toLowerCase().includes(query)) ||
        q.explanation.toLowerCase().includes(query)
      );
    }

    container().innerHTML = `
      <h2 style="font-size:1.3rem;margin-bottom:16px;">Review Questions</h2>

      <div class="search-box">
        <span class="search-icon">&#128269;</span>
        <input type="text" id="reviewSearch" placeholder="Search questions..." value="${escapeHtml(state.searchQuery)}">
      </div>

      <div class="domain-tabs" id="domainTabs">${domainTabs}</div>

      <div class="review-question-count">${filtered.length} question${filtered.length !== 1 ? 's' : ''}</div>

      <div id="reviewCards">
        ${filtered.map(q => renderReviewCard(q)).join('')}
      </div>
    `;

    // Search
    const searchInput = document.getElementById('reviewSearch');
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.searchQuery = e.target.value;
        renderCards(filtered);
      }, 200);
    });

    // Domain tabs
    container().querySelectorAll('.domain-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        state.domain = tab.dataset.domain;
        state.openCards.clear();
        render();
      });
    });

    // Card toggles
    bindCardToggles();
  }

  function renderCards() {
    let filtered = state.domain === 'all' ? QUESTIONS : QUESTIONS.filter(q => q.domain === state.domain);

    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(q =>
        q.question.toLowerCase().includes(query) ||
        q.options.some(o => o.toLowerCase().includes(query)) ||
        q.explanation.toLowerCase().includes(query)
      );
    }

    const cardsEl = document.getElementById('reviewCards');
    cardsEl.innerHTML = filtered.map(q => renderReviewCard(q)).join('');
    document.querySelector('.review-question-count').textContent = `${filtered.length} question${filtered.length !== 1 ? 's' : ''}`;
    bindCardToggles();
  }

  function renderReviewCard(q) {
    const domain = DOMAINS[q.domain];
    const stats = Progress.getQuestionStats(q.id);
    const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
    const isOpen = state.openCards.has(q.id);

    // Accuracy dot
    let dotClass = 'unseen';
    if (stats.attempts > 0) {
      const acc = stats.correct / stats.attempts;
      if (acc >= 0.75) dotClass = 'good';
      else if (acc >= 0.5) dotClass = 'medium';
      else dotClass = 'bad';
    }

    return `
      <div class="review-card ${isOpen ? 'open' : ''}" data-id="${q.id}">
        <div class="review-card-header">
          <span class="review-accuracy-dot ${dotClass}"></span>
          <span class="review-card-question">${q.question}</span>
          <span class="review-card-toggle">&#9660;</span>
        </div>
        <div class="review-card-body">
          <div class="review-options">
            ${q.options.map((opt, i) => `
              <div class="review-option ${correctArr.includes(i) ? 'correct-option' : ''}">
                <span>${letters[i]})</span>
                <span>${opt} ${correctArr.includes(i) ? '&#10004;' : ''}</span>
              </div>
            `).join('')}
          </div>
          <div class="review-explanation">${q.explanation}</div>
          ${stats.attempts > 0 ? `<div style="margin-top:8px;font-size:0.75rem;color:var(--text-muted)">Your accuracy: ${Math.round((stats.correct/stats.attempts)*100)}% (${stats.attempts} attempts)</div>` : ''}
        </div>
      </div>
    `;
  }

  function bindCardToggles() {
    container().querySelectorAll('.review-card-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.review-card');
        const id = parseInt(card.dataset.id);
        if (state.openCards.has(id)) {
          state.openCards.delete(id);
          card.classList.remove('open');
        } else {
          state.openCards.add(id);
          card.classList.add('open');
        }
      });
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  return { init, show };
})();
