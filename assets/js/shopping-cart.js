// Shopping Cart JavaScript
class ShoppingCart {
  constructor() {
    this.items = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.loadFromStorage();
    this.updateCartDisplay();
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

    // Shipping options change
    const shippingSelect = document.getElementById('cart-shipping-options');
    if (shippingSelect) {
      shippingSelect.addEventListener('change', () => this.updateCartDisplay());
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

  initializePayPalButtons() {
    // Load PayPal SDK if not already loaded
    if (typeof paypal === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=AU7621qddj4yLzUySUUbk0XDBNZH04GScHgtABUPnY-C1eVyl9mZu3CSoMY8FgNIf8G68qjCAFrp6Fu3&currency=USD&commit=false';
      script.onload = () => this.createPayPalButtons();
      document.head.appendChild(script);
    } else {
      this.createPayPalButtons();
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
        const shippingSelect = document.getElementById('cart-shipping-options');
        const shippingOption = shippingSelect ? shippingSelect.value : 'domestic';

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
<<<<<<< HEAD
=======
            this.closeCart();
>>>>>>> master
            this.showNotification('Preview mode: Payment simulation successful!', 'success');
            this.clearCart();
            return;
          }

          const error = Array.isArray(orderData.details) && orderData.details[0];

          if (error) {
            this.showNotification(`Transaction failed: ${error?.description}`, 'error');
          } else {
            this.closeCart();
            this.showNotification('Payment successful! Thank you for your order.', 'success');
            this.clearCart();
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
    const shippingSelect = document.getElementById('cart-shipping-options');
    if (!shippingSelect) return 0;

    const shippingOption = shippingSelect.value;
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
