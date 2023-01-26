window.addEventListener("scroll", function () {
  document
    .querySelector("js--header")
    .classList[window.scrollY > 100 ? "add" : "remove"]("sticky");
});
