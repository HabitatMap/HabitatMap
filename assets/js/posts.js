document.addEventListener("DOMContentLoaded", () => {
  const listToggleButton = document.querySelector(".js--post-view-toggle");
  const postsContainer = document.querySelector(".js--posts-index");

  listToggleButton.addEventListener("click", () => {
    const postList = document.querySelector(".post-list");
    postList.classList.toggle("post-list--grid-view");
    postsContainer.classList.toggle("posts-index--with-arc");
    listToggleButton.classList.toggle("post-view-toggle--grid");
  });
});
