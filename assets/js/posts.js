document.addEventListener("DOMContentLoaded", () => {
  const listToggleButton = document.querySelector(".js--posts-grid-toggle");

  listToggleButton.addEventListener("click", () => {
    const postList = document.querySelector(".post-list");
    postList.classList.toggle("post-list--grid-view");
  });
});
