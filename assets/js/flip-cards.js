/**
 * Flip Cards - Smooth hover and tap animation
 * Simple approach: just toggle class, let CSS handle transitions
 */

(function() {
  'use strict';

  // Detect if device supports touch
  const isTouchDevice = () => {
    return ('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (window.matchMedia('(pointer: coarse)').matches);
  };

  /**
   * Initialize flip cards
   */
  function initFlipCards() {
    const cards = document.querySelectorAll('.technical-card-wrapper');

    if (!cards.length) return;

    const isTouch = isTouchDevice();

    cards.forEach(card => {
      if (isTouch) {
        // MOBILE: Toggle on tap
        card.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          // Close other flipped cards
          cards.forEach(otherCard => {
            if (otherCard !== card) {
              otherCard.classList.remove('is-flipped');
            }
          });

          // Toggle current card
          this.classList.toggle('is-flipped');
        });
      } else {
        // DESKTOP: Simple mouseenter/mouseleave
        card.addEventListener('mouseenter', function() {
          this.classList.add('is-flipped');
        });

        card.addEventListener('mouseleave', function() {
          this.classList.remove('is-flipped');
        });
      }

      // Keyboard accessibility
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.classList.toggle('is-flipped');
        }
        if (e.key === 'Escape') {
          this.classList.remove('is-flipped');
        }
      });
    });

    // Close flipped cards when clicking outside (mobile)
    if (isTouch) {
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.technical-card-wrapper')) {
          cards.forEach(card => {
            card.classList.remove('is-flipped');
          });
        }
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlipCards);
  } else {
    initFlipCards();
  }
})();
