document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.querySelector(".js--close-banner");
  var bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.classList.add("js--with-banner");

  closeButton.addEventListener("click", function () {
    var banner = document.querySelector(".header__banner");
    banner.remove();
    document
      .querySelector(".js--with-banner")
      .classList.remove("js--with-banner");
  });
});
