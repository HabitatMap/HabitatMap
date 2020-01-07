---
layout: page
title: AirCasting is an open-source environmental data visualization platform.
desctiption: AirCasting is an open-source environmental data visualization platform that consists of an Android app and online mapping system.
permalink: /aircasting
section: aircasting
image: /assets/img/aircasting-map-screenshot.jpg
---

<section>
  <div class="panel panel--leading-text">
    <h1 class="heading heading--large u--gray-text">
      AirCasting is an open-source environmental data visualization platform that consists of an Android app and online mapping system.
    </h1>
  </div>

  <div class="panel">
    <div class="split--60 split--padding-right split--order-secondary">
      <p class="p--body">
        The application collects measurements from HabitatMap’s AirBeam and other health and environmental monitoring devices and relays it to the maps. With thousands of AirBeams measuring particulate matter worldwide and nearly a billion data points, the AirCasting platform is one of the largest open-source databases of community-collected air quality measurements ever created. By documenting and leveraging health and environmental data to inform personal decision-making and public policy, the AirCasting platform empowers community-based organizations, educators, academics, regulators, city managers, and citizen scientists to map air pollution and organize for clean air.
      </p>
    </div>
    <div class="split--40 split--padding-left">
      <img class="logo logo--body" alt="AirCasting" src="assets/img/svg/AirCasting-Logo-Body.svg" />
    </div>
    <div class="split--order-secondary">
      <a href="http://aircasting.habitatmap.org/map" class="button button--ac ac-intro__button">AirCasting Maps</a>
      <a href="https://play.google.com/store/apps/details?id=pl.llp.aircasting&hl=en" class="button button--ac ac-intro__button">Download App</a>
    </div>
  </div>

  <div class="panel u--bg-half-teal-very-light">
    {% include map-screenshot.html %}
  </div>
</section>

<section class="u--bg-teal-very-light arc-background arc-background--left-white arc-background--left-center">
  <div class="panel">
    <div class="split--50 split--padding-right">
      <img
        alt="Airbeam device on bicycle"
        class="img img--alternate-medium lazyload"
        data-src="/assets/img/pages/aircasting/airbeam.jpg?nf_resize=fit&w=750"
        src="/assets/img/pages/aircasting/airbeam.jpg?nf_resize=fit&w=20"
      />
    </div>
    <div class="split--50 split--padding-left">
      <img class="logo logo--body" alt="Airbeam" src="assets/img/svg/AirBeam-Logo-Body.svg" />
      <p class="p--body">
        AirBeam is a low-cost, palm-sized air quality instrument that measures hyperlocal concentrations of harmful microscopic particles in the air, known as particulate matter, as well as humidity and temperature. The AirBeam measures particulate matter with proven accuracy and when used in conjunction with the AirCasting platform - or a custom solution - helps community-based organizations, educators, academics, regulators, city managers, and citizen scientists map air pollution and organize for&nbsp;clean&nbsp;air.
      </p>
      <a href="/airbeam/buy-it-now" class="badge-link badge-link--hm">
        <span class="u--vertically-centered">Get Started with AirBeam</span>
      </a>
    </div>
  </div>

  <div class="panel">
    <div class="split--50 split--padding-right">
      <h2 class="heading heading--medium u--gray-text">How it Works</h2>
      <p class="p--body">
        The AirBeam measures harmful microscopic air particles (particulate matter), humidity, and temperature.  In mobile mode, the AirBeam can be worn to capture personal exposures.  In fixed mode, it can be installed indoors or outdoors - it’s weather resistant and doesn’t need a shelter - to keep tabs on pollution levels in your home, office, backyard, or neighborhood 24/7.
      </p>
      <a href="/airbeam/how-it-works" class="button">Learn more</a>
    </div>
    <img
      alt="AirCasting App on Mobile"
      class="img img--alternate-medium lazyload"
      data-src="/assets/img/pages/aircasting/app-screenshot.jpg?nf_resize=fit&w=750"
      src="/assets/img/pages/aircasting/app-screenshot.jpg?nf_resize=fit&w=20"
    />
    </div>
  </div>
</section>

<section class="panel panel--quote u--bg-blue-very-dark arc-background arc-background--left-opacity-15 arc-background--left-quote">
  <div class="split--40">
    <h2 class="heading heading--medium">
      AirBeam
      <br />
      in the News
    </h2>
  </div>
  {% include news-quotes-slider.html news_quotes = site.news_quotes %}
</section>

{% include slider-init.html %}
