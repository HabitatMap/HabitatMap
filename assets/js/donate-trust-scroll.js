// Donate Trust Section Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
  const trustSection = document.querySelector('.donate-trust-section');
  const trustContainer = document.querySelector('.donate-trust-container');
  const trustCards = document.querySelectorAll('.donate-trust-card');

  if (!trustSection) return;

  let isScrolling = false;
  let scrollTimeout;

  function handleScroll() {
    if (isScrolling) return;

    isScrolling = true;
    requestAnimationFrame(updateScrollEffects);
  }

  function updateScrollEffects() {
    const rect = trustSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;

    // Calculate scroll progress (0 to 1)
    const scrollProgress = Math.max(0, Math.min(1,
      (windowHeight - rect.top) / (windowHeight + sectionHeight)
    ));

    // Remove existing classes
    trustSection.classList.remove('scroll-start', 'scrolled');

    // Apply classes based on scroll position
    if (scrollProgress < 0.1) {
      trustSection.classList.add('scroll-start');
    } else if (scrollProgress > 0.3) {
      trustSection.classList.add('scrolled');
    }

    // Cards remain static - no individual animations

    // Animate container
    const containerTranslateY = (1 - scrollProgress) * 10 - scrollProgress * 5;
    trustContainer.style.transform = `translateY(${containerTranslateY}px)`;

    isScrolling = false;
  }

  // Throttled scroll event
  function throttledScroll() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
  }

  // Initial call
  handleScroll();

  // Add scroll event listener
  window.addEventListener('scroll', throttledScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });

  // Cleanup
  window.addEventListener('beforeunload', function() {
    window.removeEventListener('scroll', throttledScroll);
    window.removeEventListener('resize', handleScroll);
  });
});
