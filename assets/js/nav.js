document.addEventListener("DOMContentLoaded", function () {
  var menuToggleButtons = document.querySelectorAll(".js--toggle-nav");

  Array.from(menuToggleButtons).map(function (button) {
    button.addEventListener("click", function () {
      var header = document.querySelector(".header");
      header.classList.toggle("header--nav-expanded");
    });
  });

  // Smooth scroll to product selection
  function scrollToProductSelection(event) {
    event.preventDefault();
    const element = document.getElementById('product-selection');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Add event listeners to "Get AirBeam" buttons on buy-it-now page
  const getAirBeamButtons = document.querySelectorAll('a[href="#product-selection"]');
  getAirBeamButtons.forEach(function(button) {
    button.addEventListener('click', scrollToProductSelection);
  });
});
