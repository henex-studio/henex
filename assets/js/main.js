/* HENEX site interactions */
(function () {
  const root = document.documentElement;
  const navToggle = document.querySelector('[data-nav-toggle]');
  const siteNav = document.querySelector('[data-site-nav]');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const backToTop = document.querySelector('[data-back-to-top]');
  const storageKey = 'henex-theme';
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  const savedTheme = window.localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (navToggle && siteNav) {
    function closeNav() {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }

    navToggle.addEventListener('click', function () {
      const isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.addEventListener('click', function (event) {
      if (event.target instanceof HTMLAnchorElement && document.body.classList.contains('nav-open')) {
        closeNav();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeNav();
      }
    });

    /* Reset nav state when viewport expands to desktop width. */
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900 && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }, { passive: true });
  }

  if (backToTop) {
    function updateBackToTopVisibility() {
      backToTop.classList.toggle('is-visible', window.scrollY > 600);
    }

    updateBackToTopVisibility();
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ── Recipe library — fold/expand + hash-based auto-expansion ── */
  var recipeGrid = document.querySelector('.recipe-grid');
  var expandBtn  = document.querySelector('[data-recipe-expand]');

  if (recipeGrid && expandBtn) {
    function expandRecipes() {
      recipeGrid.classList.add('is-expanded');
      expandBtn.textContent = 'Show fewer recipes';
      expandBtn.setAttribute('aria-expanded', 'true');
    }

    function collapseRecipes() {
      recipeGrid.classList.remove('is-expanded');
      expandBtn.textContent = 'Show all 27 recipes';
      expandBtn.setAttribute('aria-expanded', 'false');
    }

    expandBtn.addEventListener('click', function () {
      if (recipeGrid.classList.contains('is-expanded')) {
        collapseRecipes();
        document.querySelector('.recipe-library')
          ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      } else {
        expandRecipes();
      }
    });

    /* If URL hash targets r10-r27, auto-expand then scroll to that card. */
    function handleRecipeHash() {
      var hash = window.location.hash;
      if (!hash) return;
      var match = hash.match(/^#r(\d+)$/);
      if (!match) return;
      var num = parseInt(match[1], 10);
      if (num >= 10 && num <= 27) {
        expandRecipes();
        setTimeout(function () {
          var target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({
              behavior: reduceMotion ? 'auto' : 'smooth',
              block: 'center'
            });
          }
        }, 80);
      }
    }

    handleRecipeHash();
    window.addEventListener('hashchange', handleRecipeHash);
  }

})();
