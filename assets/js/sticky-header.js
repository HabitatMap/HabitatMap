window.addEventListener("scroll", function() {
  document
    .getElementById("js-header")
    .classList[window.scrollY > 100 ? "add" : "remove"]("sticky");
});
