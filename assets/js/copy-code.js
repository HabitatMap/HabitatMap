function copyToClipboard() {
  var copyButton = document.querySelector(".js--copy-button");
  var copyText = document.querySelector(".js--discount-code");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  copyButton.textContent = "COPIED!";
}
