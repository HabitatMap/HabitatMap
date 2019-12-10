document.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(document.querySelectorAll(".js-slider"), function(element) {
    tns({
      container: element,
      autoHeight: true,
      speed: 400,
      autoplay: true
    });
  });
});
