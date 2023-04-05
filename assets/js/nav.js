document.addEventListener("DOMContentLoaded", function () {
  var menuToggleButtons = document.querySelectorAll(".js--toggle-nav");

  Array.from(menuToggleButtons).map(function (button) {
    button.addEventListener("click", function () {
      var header = document.querySelector(".header");
      header.classList.toggle("header--nav-expanded");
    });
  });
});
