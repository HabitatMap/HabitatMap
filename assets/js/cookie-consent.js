(function () {
  const STORAGE_KEY = 'cookie_consent';
  const banner = document.getElementById('cookie-consent-banner');
  const modal = document.getElementById('cookie-settings-modal');
  if (!banner || !modal) return;

  const analyticsToggle = document.getElementById('cookie-analytics');
  const marketingToggle = document.getElementById('cookie-marketing');

  function gtagUpdate(prefs) {
    if (typeof gtag !== 'function') return;
    gtag('consent', 'update', {
      'analytics_storage': prefs.analytics ? 'granted' : 'denied',
      'ad_storage': prefs.marketing ? 'granted' : 'denied',
      'ad_user_data': prefs.marketing ? 'granted' : 'denied',
      'ad_personalization': prefs.marketing ? 'granted' : 'denied'
    });
  }

  function saveAndClose(prefs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    gtagUpdate(prefs);
    hideBanner();
    hideModal();
  }

  function showBanner() {
    banner.classList.add('cookie-banner--visible');
    banner.setAttribute('aria-hidden', 'false');
  }

  function hideBanner() {
    banner.classList.remove('cookie-banner--visible');
    banner.setAttribute('aria-hidden', 'true');
  }

  function showModal() {
    hideBanner();
    modal.classList.add('cookie-modal--visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modal.classList.remove('cookie-modal--visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.getElementById('cookie-accept-btn').addEventListener('click', function () {
    saveAndClose({ analytics: true, marketing: true });
  });

  document.getElementById('cookie-reject-btn').addEventListener('click', function () {
    saveAndClose({ analytics: false, marketing: false });
  });

  document.getElementById('cookie-manage-btn').addEventListener('click', showModal);

  document.getElementById('cookie-modal-accept-btn').addEventListener('click', function () {
    saveAndClose({ analytics: true, marketing: true });
  });

  document.getElementById('cookie-modal-reject-btn').addEventListener('click', function () {
    saveAndClose({ analytics: false, marketing: false });
  });

  document.getElementById('cookie-save-btn').addEventListener('click', function () {
    saveAndClose({
      analytics: analyticsToggle.checked,
      marketing: marketingToggle.checked
    });
  });

  document.getElementById('cookie-modal-close').addEventListener('click', function () {
    hideModal();
    showBanner();
  });

  document.querySelector('.cookie-modal__overlay').addEventListener('click', function () {
    hideModal();
    showBanner();
  });

  if (!localStorage.getItem(STORAGE_KEY)) {
    showBanner();
  }
})();
