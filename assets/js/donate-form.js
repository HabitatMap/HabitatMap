// Donation Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const amountButtons = document.querySelectorAll('.donate-form-amount-button');
  const customAmountInput = document.getElementById('custom-amount');
  const frequencyButtons = document.querySelectorAll('.donate-form-frequency-button');
  const donateButton = document.getElementById('donate-button');
  const impactMessage = document.getElementById('impact-message');
  const monthlyBenefits = document.getElementById('monthly-benefits');
  const impactDescription = document.getElementById('impact-description');

  let selectedAmount = 50;
  let selectedFrequency = 'one-time';

  const impactMessages = {
    25: "Provides air quality monitoring data for 1 household for 3 months",
    50: "Supports community training workshop for 10 environmental justice advocates",
    100: "Funds mobile app development features for better community data access",
    250: "Sponsors complete AirBeam device setup for a community organization"
  };

  // Set initial state
  if (amountButtons[1]) {
    amountButtons[1].classList.add('donate-form-amount-active'); // $50 button
  }
  updateImpactMessage();
  updateMonthlyDisplay();
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
      updateImpactMessage();
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
      updateImpactMessage();
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

  // Frequency button handlers
  frequencyButtons.forEach(button => {
    button.addEventListener('click', function() {
      frequencyButtons.forEach(btn => btn.classList.remove('donate-form-frequency-active'));
      this.classList.add('donate-form-frequency-active');
      selectedFrequency = this.dataset.frequency;
      updateDonateButton();
      updateMonthlyDisplay();
    });
  });

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
    const suffix = selectedFrequency === 'monthly' ? '/month' : '';
    const labelAmount = amount >= 1 ? amount.toFixed(2).replace(/\.00$/, '') : selectedAmount;
    donateButton.textContent = `Donate $${labelAmount}${suffix} Now`;
  }

  function updateImpactMessage() {
    if (!impactMessage || !impactDescription) return;
    const amount = currentAmount();
    if (amount > 0) {
      impactMessage.style.display = 'block';
      impactDescription.textContent =
        impactMessages[amount] ||
        "Supports our mission to empower communities with cutting-edge environmental monitoring and data-driven advocacy.";
    } else {
      impactMessage.style.display = 'none';
    }
  }

  function updateMonthlyDisplay() {
    if (!monthlyBenefits) return;
    const monthly = selectedFrequency === 'monthly';
    monthlyBenefits.style.display = monthly ? 'block' : 'none';

    // show/hide "/mo" badges on preset buttons
    amountButtons.forEach(btn => {
      const tag = btn.querySelector('.donate-form-amount-monthly');
      if (tag) tag.style.display = monthly ? 'inline' : 'none';
    });
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
