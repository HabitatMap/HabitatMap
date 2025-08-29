// User Stories Carousel JavaScript
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 User stories carousel script loaded!');

  // Get user stories data - this will be populated by Jekyll
  let userStories = window.userStoriesData || [];

  let currentIndex = 0;
  let isAutoPlaying = true;
  let autoPlayInterval;

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
      carouselWrapper.addEventListener('touchmove', handleTouchMove, { passive: true });
      carouselWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
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
    console.log('updateStory called with currentIndex:', currentIndex);
    console.log('userStories array:', userStories);

    if (!userStories[currentIndex]) {
      console.log('No story at index:', currentIndex);
      return;
    }

    const story = userStories[currentIndex];
    console.log('Updating to story:', story);

    if (titleElement) {
      titleElement.textContent = story.title || 'Untitled Story';
    } else {
      console.error('titleElement not found');
    }

    if (descriptionElement) {
      descriptionElement.textContent = story.intro || 'No description available';
    } else {
      console.error('descriptionElement not found');
    }

    if (imageElement && story.image) {
      imageElement.src = story.image;
      imageElement.alt = story.title || 'User Story Image';
      imageElement.style.display = 'block';
      console.log('Image set to:', story.image);
    } else {
      if (imageElement) {
        imageElement.style.display = 'none';
      }
      console.log('No image element or no image for story:', story.title);
    }

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.user-stories-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateStory();
    resetAutoPlay();
  }

  function goToPrevious() {
    currentIndex = (currentIndex - 1 + userStories.length) % userStories.length;
    updateStory();
    resetAutoPlay();
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % userStories.length;
    updateStory();
    resetAutoPlay();
  }

  function startAutoPlay() {
    if (!isAutoPlaying) return;
    autoPlayInterval = setInterval(() => {
      goToNext();
    }, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    setTimeout(() => {
      isAutoPlaying = true;
      startAutoPlay();
    }, 10000);
  }

  // Pause autoplay on hover
  const section = document.querySelector('.user-stories-carousel-section');
  if (section) {
    section.addEventListener('mouseenter', () => {
      isAutoPlaying = false;
      stopAutoPlay();
    });

    section.addEventListener('mouseleave', () => {
      isAutoPlaying = true;
      startAutoPlay();
    });
  }

  // Touch/swipe handlers for mobile
  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    touchEndY = event.touches[0].clientY;
  }

  function handleTouchEnd() {
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;

    // Check if it's a horizontal swipe (more horizontal than vertical)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe left - go to next story
        goToNext();
      } else {
        // Swipe right - go to previous story
        goToPrevious();
      }
    }

    // Reset touch coordinates
    touchStartX = 0;
    touchStartY = 0;
    touchEndX = 0;
    touchEndY = 0;
  }

  // Initialize
  initCarousel();
});
