document.addEventListener("DOMContentLoaded", function() {
  var listToggleButton = document.querySelector(".js--post-view-toggle");
  var postsContainer = document.querySelector(".js--posts-index");

  listToggleButton.addEventListener("click", function() {
    var postList = document.querySelector(".post-list");
    postList.classList.toggle("post-list--grid-view");
    postsContainer.classList.toggle("posts-index--with-arc");
    listToggleButton.classList.toggle("post-view-toggle--grid");
  });
});
