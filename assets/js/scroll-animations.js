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
            }, index * 150); // Increased delay for smoother stagger effect
          });
        }
      }
      // Note: Removed the else clause that was resetting animations
      // This prevents elements from disappearing when they go out of view
    });
  }, {
    threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: '0px 0px -100px 0px' // Start animation when element is well into view
  });

  // Observe all animated elements
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Initial check for elements already in view on page load
  const checkInitialVisibility = () => {
    animatedElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If element is already in viewport on page load, animate it
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        element.classList.add('animate-in');

        // Handle staggered elements
        const staggeredElements = element.querySelectorAll('.scroll-animate-stagger');
        if (staggeredElements.length > 0) {
          staggeredElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-in');
            }, index * 150);
          });
        }
      }
    });
  };

  // Run initial check after a brief delay
  setTimeout(checkInitialVisibility, 100);
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
