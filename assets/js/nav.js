document.addEventListener("DOMContentLoaded", () => {
  const menuToggleButton = document.querySelector(".js--toggle-nav");

  menuToggleButton.addEventListener("click", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("header--nav-expanded");
  });
});
