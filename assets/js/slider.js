document.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(document.querySelectorAll(".js-slider"), function(element) {
    tns({
      container: element,
      speed: 400,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 8000
    });
  });
});
