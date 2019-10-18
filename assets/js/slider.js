document.addEventListener("DOMContentLoaded", () => {
  tns({
    container: ".js-slider",
    autoHeight: true,
    speed: 400,
    lazyload: true,
    lazyloadSelector: ".slide__photo"
  });
});
