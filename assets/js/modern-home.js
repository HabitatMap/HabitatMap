// Modern Home Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


});

// Add CSS for basic styling
const style = document.createElement('style');
style.textContent = `
  /* Ensure proper stacking context for hero section */
  .relative {
    position: relative;
  }

  /* Hero section adjustments */
  .min-h-screen {
    min-height: 100vh !important;
  }

  /* Ensure proper button styling */
  .button, button {
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* Ensure proper link styling */
  a {
    text-decoration: none;
  }

  /* Ensure proper image sizing */
  img {
    max-width: 100%;
    height: auto;
  }
`;
document.head.appendChild(style);
