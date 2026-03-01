// App Shell - Navigation, routing, dashboard rendering
const App = (() => {
  let currentPage = 'home';

  function init() {
    // Theme
    const dark = Progress.getSetting('darkMode');
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('darkModeToggle').checked = true;
    }

    // Nav
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => navigate(btn.dataset.page));
    });

    // Theme toggle (header)
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);

    // Settings
    document.getElementById('settingsBtn').addEventListener('click', openSettings);
    document.getElementById('settingsOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeSettings();
    });
    document.getElementById('darkModeToggle').addEventListener('change', (e) => {
      setDarkMode(e.target.checked);
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
      if (confirm('Reset all progress? This cannot be undone.')) {
        Progress.reset();
        renderHome();
        closeSettings();
      }
    });

    // Export
    document.getElementById('exportBtn').addEventListener('click', () => {
      const json = Progress.exportData();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const date = new Date().toISOString().slice(0, 10);
      a.download = `csa-progress-${date}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    // Import
    const importFileInput = document.getElementById('importFileInput');
    document.getElementById('importBtn').addEventListener('click', () => {
      importFileInput.click();
    });
    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          Progress.importData(ev.target.result);
          renderHome();
          alert('Progress imported successfully.');
        } catch (err) {
          alert('Import failed: ' + err.message);
        }
        importFileInput.value = '';
      };
      reader.readAsText(file);
    });

    document.getElementById('questionCount').textContent = QUESTIONS.length + ' total';

    // Init modules
    Quiz.init();
    Flashcards.init();
    Review.init();

    renderHome();

    // Register SW
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  function navigate(page) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    document.getElementById('page-' + page).classList.add('active');
    document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');

    if (page === 'home') renderHome();
    if (page === 'quiz') Quiz.show();
    if (page === 'flashcards') Flashcards.show();
    if (page === 'review') Review.show();

    window.scrollTo(0, 0);
  }

  function renderHome() {
    const stats = Progress.getOverallStats();

    // Readiness ring
    const circumference = 2 * Math.PI * 52; // ~326.73
    const offset = circumference - (stats.readiness / 100) * circumference;
    const ring = document.getElementById('readinessRing');
    ring.style.strokeDashoffset = offset;
    document.getElementById('readinessNumber').textContent = stats.readiness;

    // Stats
    document.getElementById('statAttempted').textContent = stats.questionsAttempted;
    document.getElementById('statAccuracy').textContent = stats.accuracy + '%';
    document.getElementById('statQuizzes').textContent = stats.quizCount;
    document.getElementById('statStreak').textContent = stats.streak;

    // Domain bars
    const barsContainer = document.getElementById('domainBars');
    barsContainer.innerHTML = '';
    Object.entries(DOMAINS).forEach(([key, domain]) => {
      const progress = Progress.getDomainProgress(key);
      const accuracy = Progress.getDomainAccuracy(key);
      const bar = document.createElement('div');
      bar.className = 'domain-bar';
      bar.innerHTML = `
        <div class="domain-bar-header">
          <span class="domain-bar-name">${domain.name}</span>
          <span class="domain-bar-pct">${progress.attempted}/${progress.total} ${accuracy !== null ? '(' + accuracy + '%)' : ''}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${progress.pct}%; background: ${domain.color}"></div>
        </div>
      `;
      barsContainer.appendChild(bar);
    });

    // Recent quizzes
    const recent = Progress.getRecentQuizzes(5);
    const recentEl = document.getElementById('recentQuizzes');
    if (recent.length > 0) {
      recentEl.innerHTML = `<h3 style="font-size:0.85rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;">Recent Quizzes</h3>`;
      recent.forEach(q => {
        const pct = Math.round((q.correct / q.total) * 100);
        const domainName = q.domain === 'all' ? 'All Domains' : (DOMAINS[q.domain]?.name || q.domain);
        const date = new Date(q.date).toLocaleDateString();
        const item = document.createElement('div');
        item.className = 'quiz-history-item';
        item.innerHTML = `
          <div>
            <div>${domainName}</div>
            <div class="quiz-history-date">${date}</div>
          </div>
          <div class="quiz-history-score" style="color: ${pct >= 70 ? 'var(--success)' : 'var(--error)'}">${pct}% (${q.correct}/${q.total})</div>
        `;
        recentEl.appendChild(item);
      });
    } else {
      recentEl.innerHTML = '';
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setDarkMode(!isDark);
  }

  function setDarkMode(dark) {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    Progress.setSetting('darkMode', dark);
    document.getElementById('darkModeToggle').checked = dark;
  }

  function openSettings() {
    document.getElementById('settingsOverlay').classList.add('active');
  }

  function closeSettings() {
    document.getElementById('settingsOverlay').classList.remove('active');
  }

  document.addEventListener('DOMContentLoaded', init);

  return { navigate, closeSettings };
})();
