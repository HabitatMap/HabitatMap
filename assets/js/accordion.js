const accItem = document.getElementsByClassName("faq__category");
const accHD = document.getElementsByClassName("js--faq-heading");

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  const wasItemOpen = this.parentNode.classList.contains("open");

  for (i = 0; i < accItem.length; i++) {
    accItem[i].classList.remove("open");
  }

  if (wasItemOpen !== true) {
    this.parentNode.classList.add("open");
  }
}
