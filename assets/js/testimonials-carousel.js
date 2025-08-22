class TestimonialsCarousel {
  constructor(container, options = {}) {
    this.container = container;
    this.currentIndex = 0;
    this.testimonials = options.testimonials || [];
    this.autoplay = options.autoplay || true;
    this.autoplayTimeout = options.autoplayTimeout || 8000;
    this.autoplayInterval = null;
    this.isTransitioning = false;
    this.previousIndex = null; // Added for slide direction tracking

    this.init();
  }

  init() {
    this.createCarouselStructure();
    this.bindEvents();
    this.updateCarousel();
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  createCarouselStructure() {
    // Create main carousel container
    this.carouselContainer = document.createElement('div');
    this.carouselContainer.className = 'testimonials-carousel-container';

    // Create the main carousel wrapper
    this.carouselWrapper = document.createElement('div');
    this.carouselWrapper.className = 'testimonials-carousel-wrapper';

    // Create side preview containers
    this.prevContainer = document.createElement('div');
    this.prevContainer.className = 'testimonial-preview prev';

    this.nextContainer = document.createElement('div');
    this.nextContainer.className = 'testimonial-preview next';

    // Create main testimonial container
    this.mainContainer = document.createElement('div');
    this.mainContainer.className = 'testimonial-main';

    // Create navigation buttons
    this.prevButton = document.createElement('button');
    this.prevButton.className = 'carousel-nav-btn prev-btn';
    this.prevButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15,18 9,12 15,6"></polyline>
      </svg>
    `;

    this.nextButton = document.createElement('button');
    this.nextButton.className = 'carousel-nav-btn next-btn';
    this.nextButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9,18 15,12 9,6"></polyline>
      </svg>
    `;

    // Create dots indicator
    this.dotsContainer = document.createElement('div');
    this.dotsContainer.className = 'carousel-dots';

    // Assemble the carousel with proper centering
    this.carouselWrapper.appendChild(this.prevContainer);
    this.carouselWrapper.appendChild(this.mainContainer);
    this.carouselWrapper.appendChild(this.nextContainer);

    // Ensure main container is always centered
    this.carouselWrapper.style.justifyContent = 'center';
    this.carouselWrapper.style.alignItems = 'center';

    this.carouselContainer.appendChild(this.carouselWrapper);
    this.carouselContainer.appendChild(this.prevButton);
    this.carouselContainer.appendChild(this.nextButton);
    this.carouselContainer.appendChild(this.dotsContainer);

    // Replace the original content with our carousel
    this.container.innerHTML = '';
    this.container.appendChild(this.carouselContainer);
  }

  createTestimonialCard(testimonial, isMain = false) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    // Category section
    const categorySection = document.createElement('div');
    categorySection.className = 'testimonial-category';

    const iconContainer = document.createElement('div');
    iconContainer.className = 'category-icon';

    const icon = document.createElement('div');
    icon.innerHTML = testimonial.icon || `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>
    </svg>`;

    const categoryText = document.createElement('div');
    categoryText.className = 'category-text';
    categoryText.textContent = testimonial.category;

    iconContainer.appendChild(icon);
    categorySection.appendChild(iconContainer);
    categorySection.appendChild(categoryText);

    // Quote content - truncate preview quotes to first sentence
    const quote = document.createElement('blockquote');
    quote.className = 'testimonial-quote';

    if (isMain) {
      // Full quote for main testimonial
      quote.textContent = `"${testimonial.content}"`;
    } else {
      // Truncate to first sentence for preview cards
      const firstSentence = testimonial.content.split(/[.!?]/)[0];
      quote.textContent = `"${firstSentence}..."`;
    }

    // Author section
    const authorSection = document.createElement('div');
    authorSection.className = 'testimonial-author';

    const authorInfo = document.createElement('div');
    authorInfo.className = 'testimonial-author-info';

    const authorName = document.createElement('div');
    authorName.className = 'testimonial-author-name';
    authorName.textContent = testimonial.name;

    const authorRole = document.createElement('div');
    authorRole.className = 'testimonial-author-role';
    authorRole.textContent = testimonial.role;

    authorInfo.appendChild(authorName);
    authorInfo.appendChild(authorRole);
    authorSection.appendChild(authorInfo);

    // Assemble card
    card.appendChild(categorySection);
    card.appendChild(quote);
    card.appendChild(authorSection);

    return card;
  }

  async updateCarousel() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    // Determine slide direction based on previous index
    const direction = this.getSlideDirection();

    // Fade out current content with slide effect
    const currentCards = [
      this.mainContainer.querySelector('.testimonial-card'),
      this.prevContainer.querySelector('.testimonial-card'),
      this.nextContainer.querySelector('.testimonial-card')
    ].filter(card => card);

    // Slide out current cards
    currentCards.forEach(card => {
      card.style.transition = 'all 0.3s ease-out';
      card.style.opacity = '0';
      if (direction === 'next') {
        card.style.transform = 'translateX(-100px)';
      } else {
        card.style.transform = 'translateX(100px)';
      }
    });

    // Wait for slide out to complete
    await new Promise(resolve => setTimeout(resolve, 300));

    // Clear containers
    this.mainContainer.innerHTML = '';
    this.prevContainer.innerHTML = '';
    this.nextContainer.innerHTML = '';

    // Add main testimonial
    const currentTestimonial = this.testimonials[this.currentIndex];
    if (currentTestimonial) {
      const mainCard = this.createTestimonialCard(currentTestimonial, true);
      mainCard.style.opacity = '0';
      mainCard.style.transform = direction === 'next' ? 'translateX(60px) scale(0.95)' : 'translateX(-60px) scale(0.95)';
      this.mainContainer.appendChild(mainCard);

      // Ensure initial state is applied before starting transition
      setTimeout(() => {
        mainCard.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        mainCard.style.opacity = '1';
        mainCard.style.transform = 'translateX(0) scale(1)';
      }, 50); // Small delay to ensure initial state is rendered
    }

    // Check if we're on mobile
    const isMobile = window.innerWidth <= 767;

    // Only add preview testimonials on desktop
    if (!isMobile) {
      // Add previous testimonial preview
      const prevIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.testimonials.length - 1;
      const prevTestimonial = this.testimonials[prevIndex];
      const prevCard = this.createTestimonialCard(prevTestimonial, false);
      prevCard.style.opacity = '0';
      prevCard.style.transform = direction === 'next' ? 'translateX(-50px)' : 'translateX(50px)';
      this.prevContainer.appendChild(prevCard);
      this.prevContainer.style.display = 'block';

      // Add next testimonial preview
      const nextIndex = this.currentIndex < this.testimonials.length - 1 ? this.currentIndex + 1 : 0;
      const nextTestimonial = this.testimonials[nextIndex];
      const nextCard = this.createTestimonialCard(nextTestimonial, false);
      nextCard.style.opacity = '0';
      nextCard.style.transform = direction === 'next' ? 'translateX(50px)' : 'translateX(-50px)';
      this.nextContainer.appendChild(nextCard);
      this.nextContainer.style.display = 'block';

      // Slide in preview cards with slight delay
      setTimeout(() => {
        prevCard.style.transition = 'all 0.4s ease-out';
        prevCard.style.opacity = '1';
        prevCard.style.transform = 'translateX(0)';
      }, 100);

      setTimeout(() => {
        nextCard.style.transition = 'all 0.4s ease-out';
        nextCard.style.opacity = '1';
        nextCard.style.transform = 'translateX(0)';
      }, 200);
    } else {
      // Hide preview containers on mobile
      this.prevContainer.style.display = 'none';
      this.nextContainer.style.display = 'none';
    }

    // Update dots
    this.updateDots();

    // Reset transition state
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  getSlideDirection() {
    // Store previous index to determine direction
    if (!this.previousIndex) {
      this.previousIndex = this.currentIndex;
      return 'next'; // Default direction for first load
    }

    const direction = this.currentIndex > this.previousIndex ? 'next' : 'prev';
    this.previousIndex = this.currentIndex;
    return direction;
  }

  updateDots() {
    this.dotsContainer.innerHTML = '';

    this.testimonials.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${index === this.currentIndex ? 'active' : ''}`;

      dot.addEventListener('click', () => {
        this.goToIndex(index);
      });

      this.dotsContainer.appendChild(dot);
    });
  }

  goToNext() {
    if (this.isTransitioning) return;
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateCarousel();
  }

  goToPrevious() {
    if (this.isTransitioning) return;
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateCarousel();
  }

  goToIndex(index) {
    if (this.isTransitioning || index === this.currentIndex) return;
    this.currentIndex = index;
    this.updateCarousel();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.goToNext();
    }, this.autoplayTimeout);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  bindEvents() {
    this.prevButton.addEventListener('click', () => this.goToPrevious());
    this.nextButton.addEventListener('click', () => this.goToNext());

    // Touch/swipe support for mobile devices
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let isSwiping = false;

    this.carouselContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    this.carouselContainer.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;

      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;

      // Prevent default scrolling if this is a horizontal swipe
      const deltaX = Math.abs(endX - startX);
      const deltaY = Math.abs(endY - startY);

      if (deltaX > deltaY && deltaX > 10) {
        e.preventDefault();
      }
    }, { passive: false });

    this.carouselContainer.addEventListener('touchend', (e) => {
      if (!isSwiping) return;

      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const minSwipeDistance = 50;

      // Only trigger swipe if it's more horizontal than vertical and meets minimum distance
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          this.goToPrevious(); // Swipe right = previous
        } else {
          this.goToNext(); // Swipe left = next
        }
      }

      isSwiping = false;
    }, { passive: true });

    // Pause autoplay on hover
    this.carouselContainer.addEventListener('mouseenter', () => {
      if (this.autoplay) {
        this.stopAutoplay();
      }
    });

    this.carouselContainer.addEventListener('mouseleave', () => {
      if (this.autoplay) {
        this.startAutoplay();
      }
    });

    // Handle window resize for responsive behavior
    window.addEventListener('resize', () => {
      this.updateCarousel();
    });

    // Button hover effects are handled by CSS
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const testimonialsData = [
    {
      category: "Data Visualization Power",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>
      </svg>`,
      name: "Dawn Roberts-Semple",
      role: "York College CUNY",
      content: "The AirBeam increases visibility of what's invisible.",
    },
    {
      category: "Educational Excellence",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>`,
      name: "East Bay Academy",
      role: "for Young Scientists",
      content: "AirBeam is affordable, accurate, and easy to transport. Students love that they get to use scientific technology and can make sense of what it's saying.",
    },
    {
      category: "Community Empowerment",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>`,
      name: "Jen Chantrtanapichate",
      role: "Cleanup North Brooklyn",
      content: "AirCasting puts air quality data collection in the hands of ordinary people and under-resourced organizations. It has been a powerful experience for people impacted by poor air quality to measure air quality first hand.",
    },
    {
      category: "Accessibility & Impact",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>`,
      name: "Wendy Gutschow",
      role: "USC Environmental Health Centers",
      content: "The AirBeam is a low-cost and very accessible way to put hyperlocal air quality data in the hands of community members who need it the most, who are most affected by poor air quality.",
    },
    {
      category: "Real-time Advocacy",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 11H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-4"></path><path d="M16 7h4"></path><path d="M16 11V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7"></path><path d="M8 7h8"></path>
      </svg>`,
      name: "Sadie Coughlin-Prego",
      role: "Queensbridge Tech Lab",
      content: "Being able to see how a truck passing by impacts our air inspires folks to advocate for themselves and their community.",
    },
  ];

  // Find testimonials containers and initialize carousels
  const testimonialsContainers = document.querySelectorAll('.testimonials-section .js-slider');

  testimonialsContainers.forEach(container => {
    new TestimonialsCarousel(container, {
      testimonials: testimonialsData,
      autoplay: true,
      autoplayTimeout: 8000
    });
  });
});
