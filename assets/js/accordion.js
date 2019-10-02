const accItem = document.getElementsByClassName("faq__category");
const accHD = document.getElementsByClassName("js--faq-heading");

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  const itemClass = this.parentNode.className;

  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "faq__category close";
  }

  if (itemClass == "faq__category close") {
    this.parentNode.className = "faq__category open";
  }
}
