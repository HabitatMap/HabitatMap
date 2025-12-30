/**
 * Flip Cards - Simple fade flip animation on click/hover
 */

(function() {
  'use strict';

  // Detect mobile breakpoint
  const isMobile = () => {
    return window.matchMedia('(max-width: 767px)').matches;
  };

  // Detect if device supports touch
  const isTouchDevice = () => {
    return ('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (window.matchMedia('(pointer: coarse)').matches);
  };

  function initFlipCards() {
    const cards = document.querySelectorAll('.technical-card-wrapper');

    if (!cards.length) return;

    const mobile = isMobile();
    const isTouch = isTouchDevice();

    // Helper function to toggle card
    const toggleCard = (card, chevron) => {
      const wasFlipped = card.classList.contains('is-flipped');

      if (wasFlipped) {
        card.classList.remove('is-flipped');
        if (chevron) chevron.classList.remove('is-open');
      } else {
        card.classList.add('is-flipped');
        if (chevron) chevron.classList.add('is-open');
      }
    };

    cards.forEach(card => {
      const chevron = card.querySelector('.card-chevron');

      if (mobile && isTouch) {
        // MOBILE: Click to flip
        card.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          toggleCard(this, chevron);
        });
      } else {
        // DESKTOP: Hover to flip
        card.addEventListener('mouseenter', function() {
          this.classList.add('is-flipped');
          if (chevron) chevron.classList.add('is-open');
        });

        card.addEventListener('mouseleave', function() {
          this.classList.remove('is-flipped');
          if (chevron) chevron.classList.remove('is-open');
        });
      }

      // Keyboard accessibility
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCard(this, chevron);
        }
        if (e.key === 'Escape') {
          this.classList.remove('is-flipped');
          if (chevron) chevron.classList.remove('is-open');
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlipCards);
  } else {
    initFlipCards();
  }
})();
