(function() {
  const config = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  };

  const revealSelectors = [
    '.reveal-section',
    '.reveal-fade',
    '.reveal-left',
    '.reveal-right',
    '.reveal-scale',
    '.reveal-stagger',
    '.reveal-content',
    '.reveal-header'
  ].join(',');

  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(revealSelectors).forEach(el => {
        el.classList.add('is-visible');
      });
      document.querySelectorAll('.reveal-header').forEach(el => {
        if (!el.closest('.reveal-content')) {
          el.classList.add('is-visible');
        }
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, config);

    document.querySelectorAll(revealSelectors).forEach(el => {
      observer.observe(el);
    });

    document.querySelectorAll('.reveal-header').forEach(el => {
      if (!el.closest('.reveal-content')) {
        observer.observe(el);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
