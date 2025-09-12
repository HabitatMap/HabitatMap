// Donation Form JavaScript - Simplified
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

  // ------ Simple PayPal Integration ------
  function handlePayPalDonation() {
    console.log('Opening PayPal donation page');

    // Simple PayPal URL - no amount pre-filling
    const paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=FSZYMS5UZS3KS&currency_code=USD`;

    console.log('Opening PayPal URL:', paypalUrl);

    // Try to open PayPal in new window
    const newWindow = window.open(paypalUrl, '_blank', 'width=600,height=700,scrollbars=yes,resizable=yes');

    if (!newWindow) {
      console.error('Popup blocked! Trying alternative method...');
      // If popup is blocked, try redirecting in same window
      window.location.href = paypalUrl;
    } else {
      console.log('PayPal window opened successfully');
    }
  }
});
