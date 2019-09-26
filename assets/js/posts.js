document.addEventListener("DOMContentLoaded", () => {
  const listToggleButton = document.querySelector(".js--posts-toggle");

  listToggleButton.addEventListener("click", () => {
    const postList = document.querySelector(".post-list");
    postList.classList.toggle("post-list--grid-view");
    listToggleButton.classList.toggle("post-toggle--list-view");
  });
});
