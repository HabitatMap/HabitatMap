const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    console.log("form", emailForm);
    sendEmail();
  })
}
