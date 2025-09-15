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

    console.log('Opening PayPal URL:', paypalUrl);

    // Always try to open in new window/tab first
    const newWindow = window.open(paypalUrl, '_blank', 'noopener,noreferrer');

    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
      console.error('Popup blocked! Trying alternative method...');
      // If popup is blocked, try redirecting in same window
      if (confirm('Popup was blocked. Would you like to be redirected to PayPal in this window?')) {
        window.location.href = paypalUrl;
      }
    } else {
      console.log('PayPal window opened successfully');
    }
  }
});
