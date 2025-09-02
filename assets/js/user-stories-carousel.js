// User Stories Carousel JavaScript
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 User stories carousel script loaded!');

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

  // Debug DOM elements
  console.log('DOM elements:', {
    titleElement,
    descriptionElement,
    imageElement,
    dotsContainer,
    prevButton,
    nextButton
  });

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
    console.log('User stories loaded:', userStories);
    console.log('User stories length:', userStories.length);

    // Use fallback data if Jekyll data is empty
    if (userStories.length === 0) {
      console.log('Using fallback stories');
      userStories = fallbackStories;
    }

    if (userStories.length === 0) {
      console.log('No user stories found');
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
    if (nextButton) nextButton.addEventListener('click', goToNext);

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
    console.log('Touch start:', touchStartX, touchStartY);
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

    console.log('Touch end - deltaX:', deltaX, 'deltaY:', deltaY);

    // Check if it's a horizontal swipe (more horizontal than vertical)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      console.log('Valid swipe detected, direction:', deltaX > 0 ? 'left' : 'right');

      // Debounce swipe actions
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        if (deltaX > 0) {
          // Swipe left - go to next story
          console.log('Going to next story');
          goToNext();
        } else {
          // Swipe right - go to previous story
          console.log('Going to previous story');
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

    console.log('updateStory called with currentIndex:', currentIndex);
    console.log('userStories array:', userStories);

    if (!userStories[currentIndex]) {
      console.log('No story at index:', currentIndex);
      return;
    }

    const story = userStories[currentIndex];
    console.log('Updating to story:', story);


    isTransitioning = true;


    // Smooth slide animation like testimonials carousel
    const contentElements = [titleElement, descriptionElement, imageElement].filter(Boolean);

    // Determine slide direction
    const direction = currentIndex > (window.lastUserStoryIndex || 0) ? 'next' : 'prev';
    window.lastUserStoryIndex = currentIndex;

    // Slide out current content
    contentElements.forEach(element => {
      element.style.transition = 'all 0.3s ease-out';
      element.style.opacity = '0';
      if (direction === 'next') {
        element.style.transform = 'translateX(-60px)';
      } else {
        element.style.transform = 'translateX(60px)';
      }
    });

    // Wait for slide out, then update content and slide in
    setTimeout(() => {
      // Update content while invisible
      if (titleElement) {
        titleElement.textContent = story.title || 'Untitled Story';
      }

      if (descriptionElement) {
        descriptionElement.textContent = story.intro || 'No description available';
      }

      if (imageElement && story.image) {
        imageElement.src = story.image;
        imageElement.alt = story.title || 'User Story Image';
        imageElement.style.display = 'block';
        console.log('Image set to:', story.image);
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

      // Set initial position for slide in
      contentElements.forEach(element => {
        if (direction === 'next') {
          element.style.transform = 'translateX(60px)';
        } else {
          element.style.transform = 'translateX(-60px)';
        }
      });

      // Slide in new content
      setTimeout(() => {
        contentElements.forEach(element => {
          element.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
        });

        // End transition
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }, 50);

    }, 300); // Wait for slide out to complete
  }

  function goToSlide(index) {
    if (isTransitioning || index === currentIndex) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      currentIndex = index;
      updateStory();
      resetAutoPlay();
    }, 100);
  }

  function goToPrevious() {
    if (isTransitioning) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      currentIndex = (currentIndex - 1 + userStories.length) % userStories.length;
      updateStory();
      resetAutoPlay();
    }, 100);
  }

  function goToNext() {
    if (isTransitioning) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      currentIndex = (currentIndex + 1) % userStories.length;
      updateStory();
      resetAutoPlay();
    }, 100);
  }

  function startAutoPlay() {
    if (!isAutoPlaying) return;

    stopAutoPlay();

    autoPlayInterval = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 7000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();

    clearTimeout(debounceTimeout);

    setTimeout(() => {
      if (isAutoPlaying) {
        startAutoPlay();
      }
    }, 10000);
  }

  const section = document.querySelector('.user-stories-carousel-section');
  if (section) {
    section.addEventListener('mouseenter', () => {
      isAutoPlaying = false;
      stopAutoPlay();
      clearTimeout(debounceTimeout);
    });

    section.addEventListener('mouseleave', () => {
      isAutoPlaying = true;
      startAutoPlay();
    });
  }

  initCarousel();
});
