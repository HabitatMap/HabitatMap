// Donation Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const donateButton = document.getElementById('donate-button');

  // Donate button click handler
  if (donateButton) {
    donateButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Donate button clicked');
      handlePayPalDonation();
    });
  } else {
    console.error('Donate button not found!');
  }

  // ------ PayPal Donation ------
  function handlePayPalDonation() {
    console.log('PayPal donation called');

    // Simple PayPal URL without amount pre-fill
    const paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=FSZYMS5UZS3KS&currency_code=USD`;

    // Open PayPal in new tab/page
    window.open(paypalUrl, '_blank');
  }
});
