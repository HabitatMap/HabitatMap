// Donation Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const amountButtons = document.querySelectorAll('.donate-form-amount-button');
  const customAmountInput = document.getElementById('custom-amount');
  const donateButton = document.getElementById('donate-button');

  let selectedAmount = 50;


  // Set initial state
  if (amountButtons[1]) {
    amountButtons[1].classList.add('donate-form-amount-active'); // $50 button
  }
  updateDonateButton();

  // Amount button handlers
  amountButtons.forEach(button => {
    button.addEventListener('click', function() {
      amountButtons.forEach(btn => btn.classList.remove('donate-form-amount-active'));
      this.classList.add('donate-form-amount-active');
      selectedAmount = parseInt(this.dataset.amount, 10);
      if (customAmountInput) {
        customAmountInput.value = '';
      }
      customAmountInput?.classList.remove('error');
      hideValidationError();
      updateDonateButton();
    });
  });

  // Custom amount input handler
  if (customAmountInput) {
    customAmountInput.addEventListener('input', function() {
      const value = normalizeAmount(this.value);
      if (value > 0) {
        amountButtons.forEach(btn => btn.classList.remove('donate-form-amount-active'));
        selectedAmount = value;
        this.classList.remove('error');
        hideValidationError();
      }
      updateDonateButton();
    });

    customAmountInput.addEventListener('blur', function() {
      const value = normalizeAmount(this.value);
      if (this.value && value < 1) {
        this.classList.add('error');
        showValidationError('Please enter a valid donation amount (minimum $1)');
      } else {
        this.classList.remove('error');
        hideValidationError();
      }
    });
  }


  // Donate button click handler
  if (donateButton) {
    donateButton.addEventListener('click', function(e) {
      e.preventDefault();
      handlePayPalDonation();
    });
  }

  // ------ Helpers ------
  function normalizeAmount(input) {
    // Accept "12,34" or "12.34"; always return number (no NaN)
    const n = Number.parseFloat(String(input).replace(',', '.'));
    return Number.isFinite(n) ? Math.round(n * 100) / 100 : 0;
  }

  function currentAmount() {
    return customAmountInput && customAmountInput.value
      ? normalizeAmount(customAmountInput.value)
      : normalizeAmount(selectedAmount);
  }

  function updateDonateButton() {
    if (!donateButton) return;
    const amount = currentAmount();
    const labelAmount = amount >= 1 ? amount.toFixed(2).replace(/\.00$/, '') : selectedAmount;
    donateButton.textContent = `Donate $${labelAmount} Now`;
  }



  function validateForm() {
    const amount = currentAmount();
    if (amount < 1) {
      showValidationError('Please enter a valid donation amount (minimum $1)');
      customAmountInput?.classList.add('error');
      customAmountInput?.focus();
      return false;
    }
    if (amount > 10000) {
      showValidationError('Donation amount cannot exceed $10,000. Please contact us for larger donations.');
      customAmountInput?.classList.add('error');
      customAmountInput?.focus();
      return false;
    }
    hideValidationError();
    return true;
  }

  function showValidationError(message) {
    hideValidationError();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'donate-form-validation-error';
    errorDiv.textContent = message;
    document.querySelector('.donate-form-card')?.prepend(errorDiv);
  }

  function hideValidationError() {
    document.querySelector('.donate-form-validation-error')?.remove();
  }

  function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'donate-form-success-message';
    successDiv.innerHTML = `
      <div class="success-content" style="display:flex;gap:8px;align-items:center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22,4 12,14.01 9,11.01" />
        </svg>
        <p style="margin:0">${message}</p>
      </div>
    `;
    document.querySelector('.donate-form-card')?.prepend(successDiv);
    setTimeout(() => successDiv.remove(), 5000);
  }

  // ------ PayPal integration ------
  function handlePayPalDonation() {
    if (!validateForm()) return;

    const amount = currentAmount();
    const isMonthly = selectedFrequency === 'monthly';

    console.log('PayPal donation attempt:', { amount, isMonthly });

    // Use direct URL method (more reliable)
    let paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=FSZYMS5UZS3KS&currency_code=USD`;

    // Add amount for one-time donations
    if (!isMonthly) {
      paypalUrl += `&amount=${amount}`;
    }

    console.log('Opening PayPal URL:', paypalUrl);
    window.open(paypalUrl, '_blank');
  }
});
