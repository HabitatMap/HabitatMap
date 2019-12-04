document.addEventListener("DOMContentLoaded", function() {
  var menuToggleButton = document.querySelector(".js--toggle-nav");

  menuToggleButton.addEventListener("click", function() {
    var header = document.querySelector(".header");
    header.classList.toggle("header--nav-expanded");
  });
});
