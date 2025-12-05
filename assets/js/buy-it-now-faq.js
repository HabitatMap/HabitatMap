// Buy It Now - FAQ Section JavaScript
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.faq-icon');
  const isOpen = content.classList.contains('show');

  if (!isOpen) {
    content.classList.add('show');
    icon.style.transform = 'rotate(180deg)';
    button.style.backgroundColor = '#f9fafb';
    button.style.borderRadius = 'inherit';
  } else {
    content.classList.remove('show');
    icon.style.transform = 'rotate(0deg)';
    button.style.backgroundColor = 'transparent';
  }
}
