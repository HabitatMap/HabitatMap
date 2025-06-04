---
layout: page
title: AirBeam is a low-cost, palm-sized air quality instrument.
description: AirBeam is a low-cost, palm-sized air quality instrument that measures hyper local concentrations of harmful microscopic particles in the air.
permalink: /airbeam
section: airbeam
image: /assets/img/product-shot_crop.jpg
---

<section>
  <div class="panel panel--leading-text">
    <h1 class="heading heading--large u--gray-text">
      Taking Matter into Your Own Hands:
      <span class="u--accent-hm u--block">About AirBeam</span>
    </h1>
  </div>
  <div class="arc-background arc-background--right-teal-light arc-background--right-center">
    <div class="panel">
      <div class="split--50 split--padding-right">
        <img
          alt="Airbeam device"
          class="img img--alternate-medium lazyload"
          data-src="/assets/img/product-shot_crop.jpg?nf_resize=fit&w=750"
          src="/assets/img/product-shot_crop.jpg?nf_resize=fit&w=20"
        />
      </div>
      <div class="split--50 split--padding-left">
        <img
          class="logo logo--body"
          alt="Airbeam"
          src="/assets/img/svg/AirBeam-Logo-Body.svg"
        />
        <p class="p--body">
          AirBeam is a low-cost, palm-sized air quality instrument that measures hyperlocal concentrations of harmful microscopic particles in the air, known as particulate matter, as well as humidity and temperature. The AirBeam measures particulate matter with proven accuracy and when used in conjunction with the AirCasting platform - or a custom solution - helps community-based organizations, educators, academics, regulators, city managers, and community scientists map air pollution and organize for&nbsp;clean&nbsp;air.
        </p>
        <a href="/airbeam/buy-it-now" class="badge-link badge-link--hm">
          <span class="u--vertically-centered">Get AirBeam</span>
        </a>
      </div>
    </div>
    <div class="panel">
      <div class="split--50 split--padding-right split--order-secondary">
        <h2 class="heading heading--medium u--gray-text">Why AirBeam?</h2>
        <p class="p--body">
          The AirBeam was designed by HabitatMap to raise awareness of the disproportionate environmental burdens borne by low-income communities and communities of color and equip these communities with tools to advocate for equity and improved quality of life.
        </p>
        <a href="/airbeam/how-it-works" class="button button--ac">Learn More</a>
      </div>
      <div class="split--50 split--padding-left u--align-right">
        <img
          alt="HabitatMap Team"
          class="img img--alternate-medium lazyload"
          data-src="/assets/img/about-airbeam-02.jpg?nf_resize=fit&w=750"
          src="/assets/img/about-airbeam-02.jpg?nf_resize=fit&w=20"
        />
      </div>
    </div>
  </div>
</section>

<section class="u--bg-teal-very-light">
  <div class="panel panel--align-center ac-intro">
    <div class="split--60">
      <img
        class="logo logo--body"
        alt="AirCasting"
        src="/assets/img/svg/AirCasting-Logo-Body.svg"
      />
      <p class="p--large u--gray-text">
        Measure, visualize, and share environmental data via AirCasting Maps.
      </p>
    </div>
    <div class="split--80 u--align-left">
      <a href="https://aircasting.org" class="button button--ac-on-light-teal ac-intro__button">See the Maps</a>
      <a href="https://play.google.com/store/apps/details?id=pl.llp.aircasting&hl=en" class="button button--ac-on-light-teal ac-intro__button">Android App</a>
      <a href="https://apps.apple.com/us/app/aircasting/id1587685281#?platform=iphone" class="button button--ac-on-light-teal ac-intro__button">iOS App</a>
    </div>
  </div>

  <div class="panel">
    {% include map-screenshot.html %}
  </div>
</section>

<section class="panel panel--testimonial u--bg-teal arc-background arc-background--right-opacity-15 arc-background--right-quote">
  <div class="split--40">
    <h2 class="heading heading--medium">
      What Our Community
      <br />
      is Saying
    </h2>
  </div>

{% include testimonials-slider.html testimonials = site.testimonials %}

  <a href="/airbeam/faq" class="badge-link badge-link--light-hm">
    <span class="u--vertically-centered">Questions? Check out our FAQ</span>
  </a>
</section>

{% include slider-init.html %}
