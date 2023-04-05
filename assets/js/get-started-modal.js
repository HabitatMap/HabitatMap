document.addEventListener("DOMContentLoaded", function () {
  var openButtons = document.querySelectorAll(".js--open-get-started-modal");
  var closeButtons = document.querySelectorAll(".js--close-get-started-modal");

  openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modal = document.querySelector(".get-started-modal");
      modal.classList.remove("u--hidden");
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modal = document.querySelector(".get-started-modal");
      modal.classList.add("u--hidden");
    });
  });
});
