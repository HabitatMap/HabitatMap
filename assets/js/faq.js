var allHeadings = document.getElementsByClassName("js--faq-heading");
var allSections = document.getElementsByClassName("js--faq-section");

for (i = 0; i < allHeadings.length; i++) {
  allHeadings[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  var wasItemOpen = this.parentNode.classList.contains("open");

  for (i = 0; i < allSections.length; i++) {
    allSections[i].classList.remove("open");
  }

  if (wasItemOpen !== true) {
    this.parentNode.classList.add("open");
  }
}
