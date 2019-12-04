window.addEventListener("DOMContentLoaded", function() {
  Array.prototype.slice
    .call(document.getElementsByClassName("js--show-next"))
    .forEach(function(button) {
      button.addEventListener("click", function() {
        button.style.display = "none";
        button.nextElementSibling.style.display = "block";
      });
    });
});
