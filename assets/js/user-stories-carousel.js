// User Stories Carousel JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Error tracking and logging
  const errorLogger = {
    log: function(error, context) {
      console.warn(`[UserStoriesCarousel] ${context}:`, error);
      // In production, you might send this to an error tracking service
    }
  };

  // Loading state management
  const loadingStates = {
    LOADING: 'loading',
    LOADED: 'loaded',
    ERROR: 'error'
  };

  let currentLoadingState = loadingStates.LOADING;

  // Get user stories data - this will be populated by Jekyll
  let userStories = [];

  try {
    userStories = window.userStoriesData || [];
  } catch (error) {
    errorLogger.log(error, 'Failed to load user stories data');
    currentLoadingState = loadingStates.ERROR;
  }

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
  const minSwipeDistance = 50;



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

  function initCarousel() {
    try {
      // Show loading state
      showLoadingState();

      // Use fallback data if Jekyll data is empty
      if (userStories.length === 0) {
        userStories = fallbackStories;
        errorLogger.log('Using fallback stories', 'Data loading');
      }

      if (userStories.length === 0) {
        showErrorState('No user stories available', 'Please check the user stories configuration.');
        return;
      }

      // Validate DOM elements
      if (!titleElement || !descriptionElement || !imageElement) {
        errorLogger.log('Missing required DOM elements', 'DOM validation');
        showErrorState('Configuration Error', 'Missing required page elements.');
        return;
      }

      createDots();
      updateStory();
      startAutoPlay();
      bindEventListeners();

      currentLoadingState = loadingStates.LOADED;
      hideLoadingState();

    } catch (error) {
      errorLogger.log(error, 'Carousel initialization failed');
      currentLoadingState = loadingStates.ERROR;
      showErrorState('Loading Error', 'Unable to load user stories. Please try refreshing the page.');
    }
  }

  function bindEventListeners() {
    try {
      if (prevButton) {
        prevButton.addEventListener('click', goToPrevious);
      } else {
        errorLogger.log('Previous button not found', 'Event binding');
      }

      if (nextButton) {
        nextButton.addEventListener('click', goToNextManual);
      } else {
        errorLogger.log('Next button not found', 'Event binding');
      }

      if (carouselWrapper) {
        carouselWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
        carouselWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
        carouselWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
      } else {
        errorLogger.log('Carousel wrapper not found', 'Event binding');
      }
    } catch (error) {
      errorLogger.log(error, 'Event listener binding failed');
    }
  }

  function showLoadingState() {
    if (titleElement) titleElement.textContent = 'Loading stories...';
    if (descriptionElement) descriptionElement.textContent = 'Please wait while we load the user stories.';
    if (imageElement) imageElement.style.display = 'none';
  }

  function hideLoadingState() {
    // Loading state will be replaced by actual content in updateStory()
  }

  function showErrorState(title, description) {
    if (titleElement) titleElement.textContent = title;
    if (descriptionElement) descriptionElement.textContent = description;
    if (imageElement) imageElement.style.display = 'none';
    currentLoadingState = loadingStates.ERROR;
  }

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;

  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    touchEndY = event.touches[0].clientY;

    const deltaX = Math.abs(touchEndX - touchStartX);
    const deltaY = Math.abs(touchEndY - touchStartY);

    if (deltaX > deltaY && deltaX > 10) {
      event.preventDefault();
    }
  }

  function handleTouchEnd() {
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;



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

    touchStartX = 0;
    touchStartY = 0;
    touchEndX = 0;
    touchEndY = 0;
  }

  function createDots() {
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';
    userStories.forEach((story, index) => {
      const dot = document.createElement('button');
      dot.className = 'user-stories-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      dot.setAttribute('aria-label', `View user story ${index + 1}: ${story.title || 'Untitled'}`);
      dot.setAttribute('aria-controls', 'current-story-title current-story-description current-story-image');
      dot.setAttribute('tabindex', index === 0 ? '0' : '-1');
      dot.addEventListener('click', () => goToSlide(index));

      // Keyboard navigation
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && index > 0) {
          goToSlide(index - 1);
          dotsContainer.children[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < userStories.length - 1) {
          goToSlide(index + 1);
          dotsContainer.children[index + 1].focus();
        }
      });

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

    const gridElement = document.querySelector('.user-stories-grid');

    if (gridElement) {
      // Preload the new image first to prevent delayed loading
      if (story.image) {
        const newImage = new Image();

        // Set a timeout for image loading
        const imageTimeout = setTimeout(() => {
          errorLogger.log(`Image load timeout for: ${story.image}`, 'Image loading');
          performTransition(true); // Continue without image
        }, 5000); // 5 second timeout

        newImage.onload = () => {
          clearTimeout(imageTimeout);
          performTransition(false); // Image loaded successfully
        };

        newImage.onerror = () => {
          clearTimeout(imageTimeout);
          errorLogger.log(`Failed to load image: ${story.image}`, 'Image loading');
          performTransition(true); // Continue without image
        };

        newImage.src = story.image;
      } else {
        // No image to load, start transition immediately
        performTransition(true);
      }

      function performTransition(hasImageError = false) {
        try {
          gridElement.style.transition = 'opacity 0.25s ease-out';
          gridElement.style.opacity = '0';

          setTimeout(() => {
            if (titleElement) {
              titleElement.textContent = story.title || 'Untitled Story';
            }

            if (descriptionElement) {
              descriptionElement.textContent = story.intro || 'No description available';
            }

            // Update image with error handling
            if (imageElement) {
              if (story.image && !hasImageError) {
                imageElement.src = story.image;
                imageElement.alt = story.title ? `Image for ${story.title}` : 'User Story Image';
                imageElement.style.display = 'block';
                imageElement.setAttribute('aria-label', `Image for user story: ${story.title || 'Unknown story'}`);
              } else {
                // Hide image if there's an error or no image
                imageElement.style.display = 'none';
                imageElement.src = '';
                imageElement.alt = '';
              }
            }

          if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.user-stories-dot');
            dots.forEach((dot, index) => {
              const isActive = index === currentIndex;
              dot.classList.toggle('active', isActive);
              dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
              dot.setAttribute('tabindex', isActive ? '0' : '-1');
            });
          }

            setTimeout(() => {
              try {
                gridElement.style.transition = 'opacity 0.35s ease-in';
                gridElement.style.opacity = '1';

                setTimeout(() => {
                  isTransitioning = false;
                }, 350);
              } catch (error) {
                errorLogger.log(error, 'Transition animation failed');
                isTransitioning = false;
              }
            }, 50);
          }, 250);
        } catch (error) {
          errorLogger.log(error, 'Content update failed');
          isTransitioning = false;
        }
      }
    } else {
      errorLogger.log('Grid element not found', 'DOM validation');
      isTransitioning = false;
    }
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
      // Performance: Check if page is visible before auto-advancing
      if (!document.hidden && !isTransitioning) {
        goToNext();
      }
    }, 5350); // 5.35s interval + 650ms animation = exactly 6s total
  }

  // Pause autoplay when page is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else if (isAutoPlaying && currentLoadingState === loadingStates.LOADED) {
      startAutoPlay();
    }
  });

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

    function resetAutoPlay() {
    stopAutoPlay();

    clearTimeout(debounceTimeout);

    if (isAutoPlaying && !isTransitioning) {
      startAutoPlay();
    }
  }

  // Global error handler for the carousel
  window.addEventListener('error', function(event) {
    if (event.target && event.target.closest && event.target.closest('.user-stories-carousel-section')) {
      errorLogger.log(event.error || event.message, 'Global carousel error');
      event.preventDefault();
    }
  });

  // Performance optimization: Only initialize when carousel is visible
  const carouselSection = document.querySelector('.user-stories-carousel-section');

  if (carouselSection) {
    // Use intersection observer for lazy initialization
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.disconnect(); // Stop observing once initialized

          // Initialize carousel with error handling
          try {
            initCarousel();
          } catch (error) {
            errorLogger.log(error, 'Critical initialization failure');
            showErrorState('System Error', 'The user stories feature is temporarily unavailable.');
          }
        }
      });
    }, {
      // Initialize when 20% of the carousel is visible
      threshold: 0.2,
      // Add some margin to start loading slightly before it's visible
      rootMargin: '50px'
    });

    observer.observe(carouselSection);
  } else {
    errorLogger.log('Carousel section not found', 'DOM validation');
  }
});
