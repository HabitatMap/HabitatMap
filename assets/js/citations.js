function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("DOMContentLoaded", function () {
  var setNumber = getRandomInt(1, 6);
  var randomizedCitations = document.querySelectorAll(
    `[data-set="${setNumber}"]`
  );
  randomizedCitations.forEach(function (el) {
    el.classList.remove("u--hidden");
  });
  randomizedCitations[0].classList.add("split--padding-right");
  randomizedCitations[1].classList.add("split--padding-left");
});
