// Shopping Cart JavaScript

// ISO 3166-1 country/territory list for the cart's "Ship to country" dropdown.
// Includes every destination USPS/UPS ship to: full ISO set minus the
// destinations neither carrier accepts (per Pirate Ship's list), minus
// uninhabited regions and deprecated ISO codes. 212 entries.
// US and its territories (see DOMESTIC_SHIPPING_CODES) use the domestic
// shipping tier; everything else is international.
const COUNTRIES = [
  { code: 'US', name: "United States" },
  { code: 'AX', name: "Åland Islands" },
  { code: 'AL', name: "Albania" },
  { code: 'DZ', name: "Algeria" },
  { code: 'AD', name: "Andorra" },
  { code: 'AO', name: "Angola" },
  { code: 'AI', name: "Anguilla" },
  { code: 'AG', name: "Antigua & Barbuda" },
  { code: 'AR', name: "Argentina" },
  { code: 'AM', name: "Armenia" },
  { code: 'AW', name: "Aruba" },
  { code: 'AU', name: "Australia" },
  { code: 'AT', name: "Austria" },
  { code: 'AZ', name: "Azerbaijan" },
  { code: 'BS', name: "Bahamas" },
  { code: 'BH', name: "Bahrain" },
  { code: 'BD', name: "Bangladesh" },
  { code: 'BB', name: "Barbados" },
  { code: 'BY', name: "Belarus" },
  { code: 'BE', name: "Belgium" },
  { code: 'BZ', name: "Belize" },
  { code: 'BJ', name: "Benin" },
  { code: 'BM', name: "Bermuda" },
  { code: 'BO', name: "Bolivia" },
  { code: 'BA', name: "Bosnia & Herzegovina" },
  { code: 'BW', name: "Botswana" },
  { code: 'BR', name: "Brazil" },
  { code: 'VG', name: "British Virgin Islands" },
  { code: 'BN', name: "Brunei" },
  { code: 'BG', name: "Bulgaria" },
  { code: 'BF', name: "Burkina Faso" },
  { code: 'BI', name: "Burundi" },
  { code: 'CM', name: "Cameroon" },
  { code: 'CA', name: "Canada" },
  { code: 'CV', name: "Cape Verde" },
  { code: 'BQ', name: "Caribbean Netherlands" },
  { code: 'KY', name: "Cayman Islands" },
  { code: 'TD', name: "Chad" },
  { code: 'CL', name: "Chile" },
  { code: 'CN', name: "China" },
  { code: 'CX', name: "Christmas Island" },
  { code: 'CC', name: "Cocos (Keeling) Islands" },
  { code: 'CO', name: "Colombia" },
  { code: 'KM', name: "Comoros" },
  { code: 'CG', name: "Congo - Brazzaville" },
  { code: 'CD', name: "Congo - Kinshasa" },
  { code: 'CR', name: "Costa Rica" },
  { code: 'CI', name: "Côte d’Ivoire" },
  { code: 'HR', name: "Croatia" },
  { code: 'CU', name: "Cuba" },
  { code: 'CW', name: "Curaçao" },
  { code: 'CY', name: "Cyprus" },
  { code: 'CZ', name: "Czechia" },
  { code: 'DK', name: "Denmark" },
  { code: 'DJ', name: "Djibouti" },
  { code: 'DM', name: "Dominica" },
  { code: 'DO', name: "Dominican Republic" },
  { code: 'EC', name: "Ecuador" },
  { code: 'EG', name: "Egypt" },
  { code: 'SV', name: "El Salvador" },
  { code: 'GQ', name: "Equatorial Guinea" },
  { code: 'EE', name: "Estonia" },
  { code: 'SZ', name: "Eswatini" },
  { code: 'ET', name: "Ethiopia" },
  { code: 'FK', name: "Falkland Islands" },
  { code: 'FJ', name: "Fiji" },
  { code: 'FI', name: "Finland" },
  { code: 'FR', name: "France" },
  { code: 'GF', name: "French Guiana" },
  { code: 'PF', name: "French Polynesia" },
  { code: 'GA', name: "Gabon" },
  { code: 'GM', name: "Gambia" },
  { code: 'GE', name: "Georgia" },
  { code: 'DE', name: "Germany" },
  { code: 'GH', name: "Ghana" },
  { code: 'GI', name: "Gibraltar" },
  { code: 'GR', name: "Greece" },
  { code: 'GD', name: "Grenada" },
  { code: 'GP', name: "Guadeloupe" },
  { code: 'GU', name: "Guam" },
  { code: 'GT', name: "Guatemala" },
  { code: 'GG', name: "Guernsey" },
  { code: 'GN', name: "Guinea" },
  { code: 'GW', name: "Guinea-Bissau" },
  { code: 'GY', name: "Guyana" },
  { code: 'HT', name: "Haiti" },
  { code: 'HN', name: "Honduras" },
  { code: 'HK', name: "Hong Kong SAR China" },
  { code: 'HU', name: "Hungary" },
  { code: 'IS', name: "Iceland" },
  { code: 'IN', name: "India" },
  { code: 'ID', name: "Indonesia" },
  { code: 'IQ', name: "Iraq" },
  { code: 'IE', name: "Ireland" },
  { code: 'IM', name: "Isle of Man" },
  { code: 'IL', name: "Israel" },
  { code: 'IT', name: "Italy" },
  { code: 'JM', name: "Jamaica" },
  { code: 'JP', name: "Japan" },
  { code: 'JE', name: "Jersey" },
  { code: 'JO', name: "Jordan" },
  { code: 'KZ', name: "Kazakhstan" },
  { code: 'KE', name: "Kenya" },
  { code: 'XK', name: "Kosovo" },
  { code: 'KG', name: "Kyrgyzstan" },
  { code: 'LV', name: "Latvia" },
  { code: 'LS', name: "Lesotho" },
  { code: 'LR', name: "Liberia" },
  { code: 'LY', name: "Libya" },
  { code: 'LI', name: "Liechtenstein" },
  { code: 'LT', name: "Lithuania" },
  { code: 'LU', name: "Luxembourg" },
  { code: 'MO', name: "Macao SAR China" },
  { code: 'MG', name: "Madagascar" },
  { code: 'MW', name: "Malawi" },
  { code: 'MY', name: "Malaysia" },
  { code: 'MV', name: "Maldives" },
  { code: 'ML', name: "Mali" },
  { code: 'MT', name: "Malta" },
  { code: 'MQ', name: "Martinique" },
  { code: 'MR', name: "Mauritania" },
  { code: 'MU', name: "Mauritius" },
  { code: 'MX', name: "Mexico" },
  { code: 'MD', name: "Moldova" },
  { code: 'MC', name: "Monaco" },
  { code: 'MN', name: "Mongolia" },
  { code: 'ME', name: "Montenegro" },
  { code: 'MS', name: "Montserrat" },
  { code: 'MA', name: "Morocco" },
  { code: 'MZ', name: "Mozambique" },
  { code: 'MM', name: "Myanmar (Burma)" },
  { code: 'NA', name: "Namibia" },
  { code: 'NR', name: "Nauru" },
  { code: 'NP', name: "Nepal" },
  { code: 'NL', name: "Netherlands" },
  { code: 'NZ', name: "New Zealand" },
  { code: 'NI', name: "Nicaragua" },
  { code: 'NE', name: "Niger" },
  { code: 'NG', name: "Nigeria" },
  { code: 'NU', name: "Niue" },
  { code: 'NF', name: "Norfolk Island" },
  { code: 'KP', name: "North Korea" },
  { code: 'MK', name: "North Macedonia" },
  { code: 'MP', name: "Northern Mariana Islands" },
  { code: 'NO', name: "Norway" },
  { code: 'OM', name: "Oman" },
  { code: 'PK', name: "Pakistan" },
  { code: 'PS', name: "Palestinian Territories" },
  { code: 'PA', name: "Panama" },
  { code: 'PY', name: "Paraguay" },
  { code: 'PE', name: "Peru" },
  { code: 'PH', name: "Philippines" },
  { code: 'PL', name: "Poland" },
  { code: 'PT', name: "Portugal" },
  { code: 'PR', name: "Puerto Rico" },
  { code: 'QA', name: "Qatar" },
  { code: 'RE', name: "Réunion" },
  { code: 'RO', name: "Romania" },
  { code: 'RU', name: "Russia" },
  { code: 'RW', name: "Rwanda" },
  { code: 'SM', name: "San Marino" },
  { code: 'ST', name: "São Tomé & Príncipe" },
  { code: 'SA', name: "Saudi Arabia" },
  { code: 'SN', name: "Senegal" },
  { code: 'RS', name: "Serbia" },
  { code: 'SL', name: "Sierra Leone" },
  { code: 'SG', name: "Singapore" },
  { code: 'SX', name: "Sint Maarten" },
  { code: 'SK', name: "Slovakia" },
  { code: 'SI', name: "Slovenia" },
  { code: 'SO', name: "Somalia" },
  { code: 'ZA', name: "South Africa" },
  { code: 'KR', name: "South Korea" },
  { code: 'SS', name: "South Sudan" },
  { code: 'ES', name: "Spain" },
  { code: 'LK', name: "Sri Lanka" },
  { code: 'BL', name: "St. Barthélemy" },
  { code: 'SH', name: "St. Helena" },
  { code: 'KN', name: "St. Kitts & Nevis" },
  { code: 'LC', name: "St. Lucia" },
  { code: 'MF', name: "St. Martin" },
  { code: 'PM', name: "St. Pierre & Miquelon" },
  { code: 'VC', name: "St. Vincent & Grenadines" },
  { code: 'SD', name: "Sudan" },
  { code: 'SR', name: "Suriname" },
  { code: 'SJ', name: "Svalbard & Jan Mayen" },
  { code: 'SE', name: "Sweden" },
  { code: 'CH', name: "Switzerland" },
  { code: 'SY', name: "Syria" },
  { code: 'TW', name: "Taiwan" },
  { code: 'TJ', name: "Tajikistan" },
  { code: 'TZ', name: "Tanzania" },
  { code: 'TH', name: "Thailand" },
  { code: 'TG', name: "Togo" },
  { code: 'TK', name: "Tokelau" },
  { code: 'TT', name: "Trinidad & Tobago" },
  { code: 'TN', name: "Tunisia" },
  { code: 'TR', name: "Türkiye" },
  { code: 'TC', name: "Turks & Caicos Islands" },
  { code: 'VI', name: "U.S. Virgin Islands" },
  { code: 'UG', name: "Uganda" },
  { code: 'UA', name: "Ukraine" },
  { code: 'AE', name: "United Arab Emirates" },
  { code: 'GB', name: "United Kingdom" },
  { code: 'UY', name: "Uruguay" },
  { code: 'UZ', name: "Uzbekistan" },
  { code: 'VA', name: "Vatican City" },
  { code: 'VN', name: "Vietnam" },
  { code: 'EH', name: "Western Sahara" },
  { code: 'YE', name: "Yemen" },
  { code: 'ZM', name: "Zambia" },
  { code: 'ZW', name: "Zimbabwe" }
];

// Destinations billed at the domestic USPS rate: the US plus its territories.
const DOMESTIC_SHIPPING_CODES = new Set(['US', 'PR', 'GU', 'VI', 'MP']);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    this.populateCountrySelect();
    this.bindEvents();
    this.loadFromStorage();
    this.updateCartDisplay();
    // Refine the default from the visitor's actual location (async, non-blocking).
    this.applyGeoCountryDefault();
  }

  // Override the locale-based default with the visitor's real country from
  // Netlify's edge geolocation (physical location, unlike browser locale).
  // Best-effort: skips silently if unavailable, and never overrides a country
  // the buyer has already picked. Not sent to PayPal — display/shipping only.
  async applyGeoCountryDefault() {
    const select = document.getElementById('cart-shipping-country');
    if (!select) return;
    try {
      const res = await fetch('/geo-country');
      if (!res.ok) return;
      const { country } = await res.json();
      if (!this._countryTouched && country && COUNTRIES.some(c => c.code === country)) {
        select.value = country;
        this.updateCartDisplay();
      }
    } catch (e) {
      // Keep the locale/US default.
    }
  }

  // Fill the "Ship to country" dropdown from COUNTRIES and preselect the
  // buyer's own country when we can detect it, so they don't have to hunt
  // for it. Falls back to United States (the first option) otherwise.
  populateCountrySelect() {
    const select = document.getElementById('cart-shipping-country');
    if (!select) return;
    select.innerHTML = COUNTRIES
      .map(c => `<option value="${c.code}">${c.name}</option>`)
      .join('');
    const detected = this.detectCountryCode();
    if (detected && COUNTRIES.some(c => c.code === detected)) {
      select.value = detected;
    }
  }

  // Best-effort default from the browser's locale region (e.g. "en-GB" -> GB,
  // "pl" -> PL). Purely a UX convenience — the buyer can still change it, and
  // it is not sent to PayPal. Returns null when the region is unknown or not
  // a shippable destination, leaving the US default in place.
  detectCountryCode() {
    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language];
    for (const lang of langs) {
      if (!lang) continue;
      try {
        const region = new Intl.Locale(lang).maximize().region;
        if (region) return region.toUpperCase();
      } catch (e) {
        // Ignore malformed locale tags and try the next one.
      }
    }
    return null;
  }

  // Domestic pricing for the US and its territories, international elsewhere.
  getShippingOption() {
    const select = document.getElementById('cart-shipping-country');
    const country = select ? select.value : 'US';
    return DOMESTIC_SHIPPING_CODES.has(country) ? 'domestic' : 'international';
  }

    bindEvents() {
    // Close cart events
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    if (closeCartBtn) {
      closeCartBtn.addEventListener('click', () => this.closeCart());
    }

    if (cartOverlay) {
      cartOverlay.addEventListener('click', () => this.closeCart());
    }

    // Open cart event
    const cartToggle = document.getElementById('cart-toggle');
    const cartToggleMobile = document.getElementById('cart-toggle-mobile');

    if (cartToggle) {
      cartToggle.addEventListener('click', () => this.openCart());
    }

    if (cartToggleMobile) {
      cartToggleMobile.addEventListener('click', () => this.openCart());
    }

    // Country change recomputes shipping + totals. Mark it as user-chosen so
    // the async geo default won't overwrite a deliberate selection.
    const countrySelect = document.getElementById('cart-shipping-country');
    if (countrySelect) {
      countrySelect.addEventListener('change', () => {
        this._countryTouched = true;
        this.updateCartDisplay();
      });
    }

    // ESC key to close cart
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeCart();
      }
    });
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(item =>
      item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      });
    }

    this.saveToStorage();
    this.updateCartDisplay();
    this.showNotification('Item added to bag');
  }

  removeItem(itemId) {
    this.items = this.items.filter(item =>
      item.id !== itemId
    );
    this.saveToStorage();
    this.updateCartDisplay();
  }

  updateQuantity(itemId, newQuantity) {
    const item = this.items.find(item =>
      item.id === itemId
    );
    if (item) {
      item.quantity = Math.max(1, newQuantity);
      this.saveToStorage();
      this.updateCartDisplay();
    }
  }

  openCart() {
    this.isOpen = true;
    const modal = document.getElementById('shopping-cart-modal');
    if (modal) {
      modal.classList.add('open');
    }
    document.body.style.overflow = 'hidden';
  }

  closeCart() {
    this.isOpen = false;
    const modal = document.getElementById('shopping-cart-modal');
    if (modal) {
      modal.classList.remove('open');
    }
    document.body.style.overflow = '';
  }

  updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartSummary = document.getElementById('cart-summary');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartSubtotal = document.getElementById('cart-subtotal');

    if (!cartItems || !cartEmpty || !cartSummary || !cartItemCount || !cartSubtotal) {
      return;
    }

    // Update item count
    const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
    cartItemCount.textContent = totalItems;

    // Update header cart count
    const headerCartCount = document.getElementById('header-cart-count');
    const headerCartCountMobile = document.getElementById('header-cart-count-mobile');

    if (headerCartCount) {
      headerCartCount.textContent = totalItems;
    }

    if (headerCartCountMobile) {
      headerCartCountMobile.textContent = totalItems;
    }

    if (this.items.length === 0) {
      cartEmpty.style.display = 'block';
      cartSummary.style.display = 'none';
      cartItems.innerHTML = '';

      // Hide the cart header when empty
      const cartHeader = document.querySelector('.cart-header');
      if (cartHeader) {
        cartHeader.style.display = 'none';
      }
    } else {
      cartEmpty.style.display = 'none';
      cartSummary.style.display = 'block';

      // Show the cart header when there are items
      const cartHeader = document.querySelector('.cart-header');
      if (cartHeader) {
        cartHeader.style.display = 'flex';
      }

      // Render cart items
      cartItems.innerHTML = this.items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <h3 class="cart-item-name">${item.name}</h3>
            <p class="cart-item-price">$${item.price.toFixed(2)} each</p>
            <div class="cart-item-controls">
              <input type="number" min="1" value="${item.quantity}"
                     class="cart-quantity-input"
                     onchange="window.shoppingCart.updateQuantity('${item.id}', parseInt(this.value))">
              <button class="remove-item-btn"
                      onclick="window.shoppingCart.removeItem('${item.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3,6 5,6 21,6"></polyline>
                  <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `).join('');

            // Calculate subtotal and shipping
      const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const shippingCost = this.calculateShippingCost(subtotal);
      const total = subtotal + shippingCost;

      // Update display
      cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

      const cartTotal = document.getElementById('cart-total');
      if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
      }

      // Initialize PayPal buttons if cart has items
      this.initializePayPalButtons();
    }
  }

  async initializePayPalButtons() {
    // SDK already loaded: just (re)render the buttons.
    if (typeof paypal !== 'undefined') {
      this.createPayPalButtons();
      return;
    }
    // Guard against updateCartDisplay firing repeatedly before the async
    // SDK load resolves — otherwise we'd inject the script multiple times.
    if (this._sdkLoading) return;
    this._sdkLoading = true;

    const clientId = await this.getPayPalClientId();
    // Fail closed: never guess the environment. Without a client-id from the
    // server we don't know if we're sandbox or live, so we surface the error
    // instead of silently loading a hardcoded (possibly wrong-env) id.
    if (!clientId) {
      this._sdkLoading = false;
      this.showNotification('Payment temporarily unavailable. Please try again.', 'error');
      return;
    }
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=USD&commit=false`;
    script.onload = () => this.createPayPalButtons();
    document.head.appendChild(script);
  }

  // Fetch the PayPal client-id from the Netlify function so the SDK always
  // matches the environment the server creates orders in (sandbox vs live).
  // A mismatched client-id makes PayPal's card form fail with
  // INVALID_RESOURCE_ID. Returns null on failure — the caller fails closed
  // rather than fall back to a hardcoded id and risk the wrong environment.
  async getPayPalClientId() {
    if (this._clientId) return this._clientId;
    try {
      const res = await fetch('/.netlify/functions/paypal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'config' }),
      });
      if (!res.ok) throw new Error(`config request failed: ${res.status}`);
      const { clientId } = await res.json();
      if (!clientId) throw new Error('no PayPal client-id configured');
      this._clientId = clientId;
      return clientId;
    } catch (e) {
      console.error('PayPal config load failed', e);
      return null;
    }
  }

    createPayPalButtons() {
    const paypalContainer = document.getElementById('cart-paypal-button');

    if (!paypalContainer) return;

    // Clear existing buttons
    paypalContainer.innerHTML = '';

    // Create PayPal button that includes both PayPal and credit card options
    paypal.Buttons({
      createOrder: async (data, actions) => {
        const shippingOption = this.getShippingOption();

        const cartItems = this.items.map(item => ({
          name: item.name,
          sku: item.id === 'mini' ? 'ab-mini' : 'ab3',
          quantity: item.quantity,
          unit_amount: {
            currency_code: 'USD',
            value: item.price.toString()
          }
        }));

        const response = await fetch("/.netlify/functions/paypal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "create",
            cart: cartItems,
            shippingOption: shippingOption,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const details = await response.json();
        return details.id;
      },

      onApprove: async (data, actions) => {
        try {
          const response = await fetch("/.netlify/functions/paypal", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              action: "capture",
              orderID: data.orderID,
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const orderData = await response.json();

          // Check if this is a preview mode response
          if (orderData.preview_mode) {
            this.stashPurchaseForAnalytics(orderData, data.orderID);
            this.clearCart();
            window.location.href = '/airbeam/confirmation';
            return;
          }

          const error = Array.isArray(orderData.details) && orderData.details[0];

          if (error) {
            this.showNotification(`Transaction failed: ${error?.description}`, 'error');
          } else {
            this.stashPurchaseForAnalytics(orderData, data.orderID);
            this.clearCart();
            window.location.href = '/airbeam/confirmation';
          }
        } catch (error) {
          console.error('Payment capture error:', error);
          this.showNotification('Payment error occurred. Please try again.', 'error');
        }
      },

      onError: (err) => {
        console.error('PayPal error:', err);
        this.showNotification('Payment error occurred. Please try again.', 'error');
      }
    }).render(paypalContainer);
  }

  calculateShippingCost(subtotal) {
    const shippingOption = this.getShippingOption();
    const totalQuantity = this.items.reduce((sum, item) => sum + item.quantity, 0);

    let firstUnitPrice, additionalUnitPrice;

    if (shippingOption === 'domestic') {
      firstUnitPrice = 10;
      additionalUnitPrice = 5;
    } else if (shippingOption === 'international') {
      firstUnitPrice = 35;
      additionalUnitPrice = 10;
    } else {
      return 0;
    }

    if (totalQuantity === 1) {
      return firstUnitPrice;
    } else if (totalQuantity >= 2) {
      return firstUnitPrice + (totalQuantity - 1) * additionalUnitPrice;
    }

    return 0;
  }

  clearCart() {
    this.items = [];
    this.saveToStorage();
    this.updateCartDisplay();
  }

  // Stash the completed order for the analytics `purchase` event fired on
  // /airbeam/confirmation. MUST run before clearCart() — the cart is emptied
  // before the redirect, so the confirmation page can't read it otherwise.
  // See docs/analytics-tracking.md.
  stashPurchaseForAnalytics(orderData, fallbackId) {
    try {
      // Single-SKU store: value = product revenue only (shipping is intentionally ignored).
      const value = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const quantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
      let attribution = null;
      try { attribution = JSON.parse(localStorage.getItem('hm_banner_attribution') || 'null'); } catch (e) {}
      const txId = (orderData && (orderData.id || orderData.orderID)) || fallbackId || null;
      localStorage.setItem('hm_last_purchase', JSON.stringify({
        transaction_id: txId,
        value: Number(value.toFixed(2)),
        currency: 'USD',
        quantity: quantity,
        items: this.items.map(item => ({
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        attribution: attribution
      }));
    } catch (e) {
      console.error('stashPurchaseForAnalytics failed', e);
    }
  }

  saveToStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(this.items));
  }

  loadFromStorage() {
    const saved = localStorage.getItem('shoppingCart');
    if (saved) {
      this.items = JSON.parse(saved);
    }
  }

  showNotification(message, type = 'info') {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = `cart-notification cart-notification--${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Initialize shopping cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.shoppingCart = new ShoppingCart();
});

// Function to add items to cart from product cards
function addToCart(productId, productName, productPrice, productImage) {
  const quantity = 1; // Default quantity since we removed quantity inputs from cards

  const product = {
    id: productId,
    name: productName,
    price: productPrice,
    image: productImage
  };

  if (window.shoppingCart) {
    window.shoppingCart.addItem(product, quantity);
    window.shoppingCart.openCart();
  }
}
