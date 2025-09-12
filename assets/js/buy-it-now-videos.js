// Buy It Now - Videos Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const videoPlaceholders = document.querySelectorAll('.video-placeholder');

  videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
      const videoId = this.dataset.videoId;
      const title = this.dataset.title;
      const container = this.closest('.video-container');

      // Create iframe
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.title = title;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;

      // Replace placeholder with iframe
      container.innerHTML = '';
      container.appendChild(iframe);
      container.classList.add('loaded');
    });
  });
});
