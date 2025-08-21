// Scroll Animations for Main Page Sections
// Pure JavaScript solution - no external libraries needed

document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with scroll-animate class
  const animatedElements = document.querySelectorAll('.scroll-animate');

    // Create intersection observer for smooth animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When element comes into view
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');

        // Optional: Add staggered animations for child elements
        const staggeredElements = entry.target.querySelectorAll('.scroll-animate-stagger');
        if (staggeredElements.length > 0) {
          staggeredElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-in');
            }, index * 100); // 100ms delay between each element
          });
        }
      } else {
        // When element goes out of view, remove animation class to reset it
        entry.target.classList.remove('animate-in');

        // Also reset staggered elements
        const staggeredElements = entry.target.querySelectorAll('.scroll-animate-stagger');
        if (staggeredElements.length > 0) {
          staggeredElements.forEach((el) => {
            el.classList.remove('animate-in');
          });
        }
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully in view
  });

  // Observe all animated elements
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Optional: Re-trigger animations on scroll for better performance
  let ticking = false;

    function updateAnimations() {
    if (!ticking) {
      requestAnimationFrame(() => {
        animatedElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // If element is in viewport, add animation class
          if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            element.classList.add('animate-in');
          } else {
            // If element is out of viewport, remove animation class to reset it
            element.classList.remove('animate-in');

            // Also reset staggered elements
            const staggeredElements = element.querySelectorAll('.scroll-animate-stagger');
            if (staggeredElements.length > 0) {
              staggeredElements.forEach((el) => {
                el.classList.remove('animate-in');
              });
            }
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', updateAnimations, { passive: true });

  // Initial check for elements already in view
  updateAnimations();
});

// Optional: Add smooth scroll behavior for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
