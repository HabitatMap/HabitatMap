// User Stories Carousel JavaScript
document.addEventListener('DOMContentLoaded', function() {


  // Get user stories data - this will be populated by Jekyll
  let userStories = window.userStoriesData || [];

  let currentIndex = 0;
  let isAutoPlaying = true;
  let autoPlayInterval;
  let isTransitioning = false;
  let debounceTimeout;

  // DOM elements
  const titleElement = document.getElementById('current-story-title');
  const descriptionElement = document.getElementById('current-story-description');
  const imageElement = document.getElementById('current-story-image');
  const dotsContainer = document.getElementById('story-dots');
  const prevButton = document.getElementById('prev-story');
  const nextButton = document.getElementById('next-story');
  const carouselWrapper = document.getElementById('carousel-wrapper');

  // Touch/swipe variables
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  const minSwipeDistance = 50; // Minimum distance for a swipe to be registered



  // Fallback data in case Jekyll processing fails
  const fallbackStories = [
    {
      title: "Barry Commoner Center for Health & the Environment",
      intro: "The Barry Commoner Center for Health & the Environment (BCCHE) is an environmental and occupational health research institute at Queens College, City University of New York. The mission of the Center is to identify and rectify environmental and occupational threats to human health.",
      image: "/images/uploads/bcche.jpg",
      slug: "barry-commoner-center-for-health-the-environment"
    },
    {
      title: "CleanAIRE NC",
      intro: "CleanAIRE NC, a Charlotte-based non-profit, works to ensure cleaner air quality for all North Carolinians through education and advocacy and by working with their partners to reduce sources of pollution.",
      image: "/images/uploads/cac_cropped.jpg",
      slug: "clean-air-carolina"
    },
    {
      title: "USC Environmental Health Centers",
      intro: "The Community Engagement Program on Health and the Environment (CEPHE) at USC Environmental Health Centers (USCEHC) uses a variety of low-cost air quality instruments and data platforms.",
      image: "/images/uploads/uscehc_cropped.jpg",
      slug: "usc-environmental-health-centers"
    },
    {
      title: "Environmental Law & Policy Center",
      intro: "Chicago residents are hospitalized for asthma at twice the national average. Making matters worse, the rate of asthma hospitalizations is even higher in many of Chicago's predominately working-class African-American and Latinx neighborhoods.",
      image: "/images/uploads/elpc_cropped.jpg",
      slug: "environmental-law-policy-center"
    }
  ];

  // Initialize carousel
  function initCarousel() {


    // Use fallback data if Jekyll data is empty
    if (userStories.length === 0) {

      userStories = fallbackStories;
    }

    if (userStories.length === 0) {

      if (titleElement) titleElement.textContent = 'No user stories available';
      if (descriptionElement) descriptionElement.textContent = 'Please check the user stories configuration.';
      return;
    }

    // Create dots
    createDots();

    // Show first story
    updateStory();

    // Start autoplay
    startAutoPlay();

    // Add event listeners
    if (prevButton) prevButton.addEventListener('click', goToPrevious);
    if (nextButton) nextButton.addEventListener('click', goToNextManual);

    // Add touch/swipe event listeners for mobile
    if (carouselWrapper) {
      carouselWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
      carouselWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
      carouselWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
  }

  // Enhanced touch/swipe handlers for mobile
  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;

  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    touchEndY = event.touches[0].clientY;

    // Prevent default scrolling if this is a horizontal swipe
    const deltaX = Math.abs(touchEndX - touchStartX);
    const deltaY = Math.abs(touchEndY - touchStartY);

    if (deltaX > deltaY && deltaX > 10) {
      event.preventDefault();
    }
  }

  function handleTouchEnd() {
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;



    // Check if it's a horizontal swipe (more horizontal than vertical)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      // Debounce swipe actions
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        if (deltaX > 0) {
          // Swipe left - go to next story
          goToNextManual();
        } else {
          // Swipe right - go to previous story
          goToPrevious();
        }
      }, 100);
    }

    // Reset touch coordinates
    touchStartX = 0;
    touchStartY = 0;
    touchEndX = 0;
    touchEndY = 0;
  }

  function createDots() {
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';
    userStories.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'user-stories-dot';
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

    function updateStory() {
    if (isTransitioning) return;

    if (!userStories[currentIndex]) {
      return;
    }

    const story = userStories[currentIndex];

    isTransitioning = true;

    // Get all content elements
    const contentElements = [titleElement, descriptionElement, imageElement].filter(Boolean);

    // Fade out current content first
    contentElements.forEach(element => {
      element.style.transition = 'opacity 0.25s ease-out';
      element.style.opacity = '0';
    });

    // Wait for fade out, then update content and fade in
    setTimeout(() => {
      // Update content while invisible
      if (titleElement) {
        titleElement.textContent = story.title || 'Untitled Story';
      }

      if (descriptionElement) {
        descriptionElement.textContent = story.intro || 'No description available';
      }

      // Update image immediately to prevent old image flash
      if (imageElement && story.image) {
        imageElement.src = story.image;
        imageElement.alt = story.title || 'User Story Image';
        imageElement.style.display = 'block';
      } else if (imageElement) {
        imageElement.style.display = 'none';
      }

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.user-stories-dot');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }

      // Fade in new content
      setTimeout(() => {
        contentElements.forEach(element => {
          element.style.transition = 'opacity 0.35s ease-in';
          element.style.opacity = '1';
        });

        // End transition
        setTimeout(() => {
          isTransitioning = false;
        }, 350);
      }, 50); // Small delay to ensure content is updated

    }, 250); // Wait for fade out to complete
  }

  function goToSlide(index) {
    if (isTransitioning || index === currentIndex) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      currentIndex = index;
      updateStory();
      resetAutoPlay();
    }, 50);
  }

  function goToPrevious() {
    if (isTransitioning) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      currentIndex = (currentIndex - 1 + userStories.length) % userStories.length;
      updateStory();
      resetAutoPlay();
    }, 50);
  }

  function goToNext() {
    if (isTransitioning) return;

    currentIndex = (currentIndex + 1) % userStories.length;
    updateStory();
    // Don't reset autoplay for automatic advances
  }

  function goToNextManual() {
    if (isTransitioning) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      currentIndex = (currentIndex + 1) % userStories.length;
      updateStory();
      resetAutoPlay();
    }, 50);
  }

  function startAutoPlay() {
    if (!isAutoPlaying) return;

    stopAutoPlay();

    autoPlayInterval = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 4000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

    function resetAutoPlay() {
    stopAutoPlay();

    // Clear any existing debounce timeouts
    clearTimeout(debounceTimeout);

    // Restart autoplay immediately to maintain consistent 4s intervals
    if (isAutoPlaying && !isTransitioning) {
      startAutoPlay();
    }
  }

  // Remove hover pause behavior to ensure consistent autoplay across all browsers

  initCarousel();
});
