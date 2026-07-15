// AirBeam Mini blog CTA — A/B assignment + funnel tracking.
// Loaded by _includes/airbeam-mini-ab.html. Schema: docs/analytics-tracking.md
//
// Model: random 50/50 on first exposure, then REMEMBERED FOR 1 DAY (re-randomizes
// after that). Conversion is attributed to the last banner the visitor clicked.
(function () {
  var VARIANTS = ['cart', 'learn_more']; // 50/50
  var STORE_KEY = 'hm_banner_variant';   // { v: <variant>, exp: <ms timestamp> }
  var ATTR_KEY = 'hm_banner_attribution';
  var TTL_MS = 24 * 60 * 60 * 1000;      // 1 day of memory

  function pick() { return VARIANTS[Math.floor(Math.random() * VARIANTS.length)]; }

  function resolveVariant() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
      if (saved && saved.exp > Date.now() && VARIANTS.indexOf(saved.v) !== -1) {
        return saved.v;
      }
    } catch (e) {}
    var v = pick();
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ v: v, exp: Date.now() + TTL_MS }));
    } catch (e) {}
    return v;
  }

  function initBanner(root) {
    if (root.getAttribute('data-ab-done') === '1') return; // guard against double init
    root.setAttribute('data-ab-done', '1');

    var source = root.getAttribute('data-source');
    var campaign = root.getAttribute('data-campaign');
    var postSlug = root.getAttribute('data-post-slug');
    var variant = resolveVariant();

    // Reveal the chosen variant; remove the other (drops its scoped <style> too).
    var chosen = null;
    var variants = root.querySelectorAll('.airbeam-ab__variant');
    for (var i = 0; i < variants.length; i++) {
      if (variants[i].getAttribute('data-variant') === variant) {
        variants[i].hidden = false;
        chosen = variants[i];
      } else {
        variants[i].parentNode.removeChild(variants[i]);
      }
    }
    if (!chosen) return;

    function push(eventName) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        banner_source: source,
        banner_campaign: campaign,
        banner_variant: variant,
        post_slug: postSlug
      });
    }

    // banner_shown — fire once when the banner actually scrolls into view.
    var shown = false;
    function markShown() { if (!shown) { shown = true; push('banner_shown'); } }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        for (var j = 0; j < entries.length; j++) {
          if (entries[j].isIntersecting) { markShown(); io.disconnect(); break; }
        }
      }, { threshold: 0.5 });
      io.observe(chosen);
    } else {
      markShown();
    }

    // banner_clicked — any click on a link/button in the banner. Attribution is
    // written synchronously so a later purchase (even after navigating to /airbeam)
    // is credited to the last banner the visitor clicked.
    chosen.addEventListener('click', function (e) {
      if (!e.target.closest('a, button')) return;
      try {
        localStorage.setItem(ATTR_KEY, JSON.stringify({
          source: source, campaign: campaign, variant: variant, post_slug: postSlug, ts: Date.now()
        }));
      } catch (e2) {}
      push('banner_clicked');
    });
  }

  function init() {
    var roots = document.querySelectorAll('.airbeam-ab');
    for (var i = 0; i < roots.length; i++) { initBanner(roots[i]); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
