/**
 * Scroll Reveal Animation
 * Triggers smooth fade-in and slide-up animations when sections enter the viewport
 * Inspired by Cowboy.com's elegant scroll transitions
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    threshold: 0.15,      // Trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters
  };

  // Selectors for elements to animate
  const revealSelectors = [
    '.reveal-section',
    '.reveal-fade',
    '.reveal-left',
    '.reveal-right',
    '.reveal-scale',
    '.reveal-stagger',
    '.reveal-content'
  ].join(',');

  /**
   * Initialize Intersection Observer for reveal animations
   */
  function initScrollReveal() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Show all elements immediately
      document.querySelectorAll(revealSelectors).forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add visible class with a small delay for smoothness
          requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
          });

          // Stop observing once revealed (one-time animation)
          observer.unobserve(entry.target);
        }
      });
    }, config);

    // Observe all reveal elements
    document.querySelectorAll(revealSelectors).forEach(el => {
      observer.observe(el);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
