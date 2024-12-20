---
layout: page
title: AirBeam - Buy It Now
permalink: /airbeam/buy-it-now
section: airbeam buy-now
image: /assets/img/airbeam-buy-it-now.jpg
---

<section class="shop-airbeam">
  <div class="notification-container">
    <div class="notification-text" id="notification"></div>
  </div>
  <div class="notification-container">
    <div class="notification-text" id="ab-mini-notification"></div>
  </div>
  <div class="panel panel--leading-text">
    <h1 class="shop-airbeam__heading heading heading--large u--accent-cyan">
      Buy the Best! Results are in: AirBeam3 Found to be the Most Accurate and Versatile Portable Air Quality Monitor*
    </h1>
    <p class="shop-airbeam__caption heading u--gray-text">
      AirBeam is a low-cost, palm-sized air quality instrument that measures hyperlocal concentrations of harmful microscopic particles in the air, known as particulate matter.
    </p>
  </div>

  <h1 class="panel panel--buy-now heading heading--medium u--accent-cyan">Buy Now!</h1>
  <div class="panel">
    <div class="split--30 split--order-secondary">
      <h2 class="heading heading--small u--margin-bottom-tiny">AirBeam3</h2>
      <div class="order-details-container">
        <span>Price per unit: $199</span>
        <div>
          <label for="quantity">Quantity:</label>
          <input class="quantity-input" id="quantity" type="number" min='1' value='1'>
        </div>
        <div class="shipping-options-container">
          <label for="shipping-options">Shipping:</label>
          <select name="shipping-options" id="shipping-options">
            <option value="domestic">Domestic US</option>
            <option value="international">Outside the US</option>
          </select>
        </div>
        <div id="cost-info" class="cost-info">Shipping costs will be calculated at checkout.</div>
      </div>
      <div class="shop-airbeam__buy-button">
        {% include paypal-button.html %}
      </div>
      <a href="/airbeam/get-consultation" class="get-consult-button button button--secondary">
        HAVE QUESTIONS?
      </a>
    </div>
    <div class="split--65 u--align-right">
      <img
        alt="Airbeam"
        class="img lazyload shop-airbeam-image"
        data-src="/assets/img/airbeam-buy-it-now.jpg?nf_resize=fit&w=750"
        src="/assets/img/airbeam-buy-it-now.jpg?nf_resize=fit&w=20"
      />
    </div>

  </div>

  <div class="panel arc-background arc-background--right-teal-light">
    <div class="split--30 split--order-secondary">
      <h2 class="heading heading--small u--margin-bottom-tiny">AirBeam Mini</h2>
      <div class="order-details-container">
        <span>Price per unit: $99</span>
        <div>
          <label for="quantity">Quantity:</label>
          <input class="quantity-input" id="ab-mini-quantity" type="number" min='1' value='1' onchange="validateQuantityABMini(this)">
        </div>
         <div class="quantity-notification-container">
          <div class="quantity-notification-text" id="ab-mini-quantity-notification"></div>
        </div>
        <div class="shipping-options-container">
          <label for="shipping-options">Shipping:</label>
          <select name="shipping-options" id="ab-mini-shipping-options">
            <option value="domestic">Domestic US</option>
            <option value="international">Outside the US</option>
          </select>
        </div>
        <div id="ab-mini-cost-info" class="cost-info">Shipping costs will be calculated at checkout.</div>
      </div>
      <div class="shop-airbeam__buy-button">
        {% include paypal-button-ab-mini.html %}
      </div>
      <a href="/airbeam/get-consultation" class="get-consult-button button button--secondary">
        HAVE QUESTIONS?
      </a>
    </div>
    <div class="split--65 u--align-right">
      <img
        alt="Airbeam Mini"
        class="img lazyload shop-airbeam-image"
        data-src="/assets/AirBeamMiniBlur.png?nf_resize=fit&w=750"
        src="/assets/AirBeamMiniBlur.png?nf_resize=fit&w=20"
      />
    </div>
  </div>

  <div class="panel">
    <img
      alt="AB3 vs AB Mini chart"
      class="img lazyload shop-airbeam-image"
      data-src="/assets/ABMvAB3_Chart.png?nf_resize=fit&w=750"
      src="/assets/AB3vsABMini.png?nf_resize=fit&w=20"
    />
  </div>

  <hr class="panel-separator">

  <div class="panel shop-airbeam-information">
    <div class="shop-airbeam-information__item">
      <h2 class="heading heading--medium u--gray-text">
        Payment Methods
      </h2>
      <p class="p--body">
        HabitatMap accepts credit card payments via PayPal. If you prefer to make payment via check or wire transfer, please email us at <a href="mailto:info@habitatmap.org">info@habitatmap.org</a> with your shipping address and the number of AirBeams you’d like to purchase. Note that we do not accept purchase orders.
      </p>
       <h2 class="heading heading--medium u--gray-text">
        Warranty
      </h2>
      <p class="p--body">
        AirBeam is guaranteed to be operating properly at time of receipt. AirBeams that are not operating properly at time of receipt can be sent back for replacement within 30 days. All sales are final.
      </p>
    </div>
    <div class="shop-airbeam-information__item">
      <h2 class="heading heading--medium u--gray-text">
        Shipping
      </h2>
      <p class="p--body">
        Domestic US shipping via USPS is $8 for the first unit and $4 for each additional unit. Shipping outside the United States via USPS is $30 for the first unit and $10 for each additional unit. If you need faster shipping, better tracking, or insurance please email info@habitatmap.org with your shipping address and the number of AirBeams you would like to order. We are not responsible for the loss or damage of AirBeams mailed internationally via USPS First Class mail. If your national
        postal service is unreliable, please contact us to upgrade your shipping and insure your package. AirBeams are shipped the next business day after payment is received.
      </p>
            <h2 class="heading heading--medium u--gray-text">
        FAQ
      </h2>
      <p class="p--body">
        To learn more about the AirBeam and AirCasting apps have a look at the <a href="/airbeam/users-guide">AirBeam3 User's Guide</a>, <a href="/airbeam/users-guide-airbeammini">AirBeam Mini User's Guide</a> or visit our <a href="/airbeam/FAQ">FAQ page</a>.
      </p>
    </div>
  </div>

  <hr class="panel-separator">

  <p class="shop-airbeam__sub p--body">
    *Of the 75 PM2.5 measuring instruments evaluated by the <a href="http://www.aqmd.gov/aq-spec/sensordetail/habitatmap---airbeam3" class="link" target="_blank">SCAQMD AQ-SPEC program</a>, AirBeam3 is the most accurate when both the field and lab evaluations are considered.
  </p>

{% include inputValidate.html %}

</section>
