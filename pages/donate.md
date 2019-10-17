---
layout: page
title: Donate
permalink: /donate
section: donate
---

<section class="shop-airbeam">
  <div class="panel panel--leading-text">
    <h1 class="heading heading--large u--gray-text">
      Support us:
      <br />
      donate to HabitatMap
    </h1>
  </div>
  <div class="panel arc-background arc-background--right-teal-light arc-background--right-bottom">
    <div class="split--50 split--padding-right split--order-secondary">
      <h2 class="heading heading--medium u--gray-text">
        Support non-profit organization
      </h2>
      <p class="p--body">
        HabitatMap is a non-profit environmental health justice organization whose goal is to raise awareness about the impact the environment has on human health. We build tools to support grassroots environmental organizing, including HabitatMap.org - our community mapping platform - and AirCasting. Your tax-deductible donation will be used to improve the AirCasting platform and expand the AirCasting community. Support our work by donating through PayPal
      </p>
      <form>
        <label class="label" for="predefined-amount">Donation</label>
        <select class="input input--quantity" name="predefined-amount">
          <option value="0">Choose amount</option>
          <option value="5$">5$</option>
          <option value="5$">10$</option>
          <option value="5$">25$</option>
        </select>
        <label class="label" for="custom-amount">Custom</label>
        <div class="currency-wrapper">
          <input class="input input--full-width input--currency" type="number" name="custom-amount" />
        </div>
        <a href="/airbeam/buy-it-now" class="badge-link badge-link--hm input--submit">
          <span class="u--vertically-centered">Donate <br /> with PayPal</span>
        </a>
      </form>
    </div>
    <div class="split--50 u--align-right">
      <img
        class="img img--alternate-small img--fade-in"
        src="{{ site.produrl | append: '/assets/img/about-habitatmap-02.jpg' }}"
        alt="Airbeam"
      />
    </div>
  </div>
</section>