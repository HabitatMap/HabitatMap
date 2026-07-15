// Fires the GA4 `purchase` event from the order stashed by shopping-cart.js
// (the cart is cleared before the confirmation page loads). Attribution links the
// sale back to the A/B banner the buyer last clicked. See docs/analytics-tracking.md.
// Loaded only on /airbeam/confirmation via _includes/confirmation/content.html.
(function () {
  try {
    var p = JSON.parse(localStorage.getItem('hm_last_purchase') || 'null');
    if (!p) return;
    var a = p.attribution || {};
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null }); // clear any previous ecommerce object
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: p.transaction_id,
        value: p.value,
        currency: p.currency || 'USD',
        items: p.items || []
      },
      quantity: p.quantity, // total units, event-scoped (segmentable by banner_variant)
      banner_source: a.source || null,
      banner_campaign: a.campaign || null,
      banner_variant: a.variant || null,
      post_slug: a.post_slug || null
    });
    // Prevent double-counting on refresh, and don't credit a future sale to this click.
    localStorage.removeItem('hm_last_purchase');
    localStorage.removeItem('hm_banner_attribution');
  } catch (e) {}
})();
