document.addEventListener("DOMContentLoaded", () => {
  const searchOpen = document.querySelector(".js--search-open");
  const searchClose = document.querySelector(".js--search-close");
  const searchForm = document.querySelector(".js--search-form");

  searchOpen.addEventListener("click", () => {
    searchForm.classList.toggle("search-form--open");
  });

  searchClose.addEventListener("click", () => {
    searchForm.classList.remove("search-form--open");
  });
});
