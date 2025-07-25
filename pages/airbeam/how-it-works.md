---
layout: page
title: Airbeam - How It Works
permalink: /airbeam/how-it-works
section: airbeam
---

<section class="panel arc-background arc-background--right-teal-light arc-background--how-it-works">
  <div class="split--50 split--padding-right split--order-secondary">
    <h1 class="heading heading--large u--gray-text u--mobile-hidden">
      The AirBeam measures harmful microscopic air particles (particulate matter), humidity, and temperature.
    </h1>
    <br>
    <br>
    <p class="p--body u--mobile-hidden">
      In mobile mode, the AirBeam can be worn to capture personal exposures.  In fixed mode, it can be installed indoors or outdoors - it’s weather resistant and doesn’t need a shelter - to keep tabs on pollution levels in your home, office, backyard, or neighborhood 24/7.
    </p>
    <article class="container--narrow u--margin-top-huge">
      <h2 class="heading heading--medium">
        <span class="heading--underlined">1</span>
        <span class="heading--uppercase">Collect</span>
      </h2>
      <img class="logo logo--body" alt="Airbeam logo" src="/assets/img/svg/Airbeam-Logo-Body.svg" />
      <p class="p--body">
        The AirBeam measures particulate matter by drawing in air and measuring the concentration and size of particles using a light scattering method.
      </p>
    </article>

  </div>

  <div class="split--50 u--align-right">
    <h1 class="heading heading--large u--gray-text page-title u--tablet-min-hidden">
      The AirBeam measures harmful microscopic air particles (particulate matter), humidity, and temperature.
    </h1>
    <p class="p--body u--tablet-min-hidden">
      In mobile mode, the AirBeam can be worn to capture personal exposures.  In fixed mode, it can be installed indoors or outdoors - it’s weather resistant and doesn’t need a shelter - to keep tabs on pollution levels in your home, office, backyard, or neighborhood 24/7.
    </p>
    <img
      alt="Airbeam on a desk"
      class="img lazyload"
      data-src="/assets/img/pages/how-it-works/how-it-works_1_crop.jpg?nf_resize=fit&w=750"
      src="/assets/img/pages/how-it-works/how-it-works_1_crop.jpg?nf_resize=fit&w=20"
    />
  </div>
</section>

<section class="panel">
  <div class="split--50 split--padding-right">
    <img
      alt="Airbeam attached to a handbag"
      class="img lazyload"
      data-src="/assets/img/pages/how-it-works/how-it-works_2.jpg?nf_resize=fit&w=750"
      src="/assets/img/pages/how-it-works/how-it-works_2.jpg?nf_resize=fit&w=20"
    />
  </div>

  <div class="split--50">
    <article class="container--narrow container--centered">
      <h2 class="heading heading--medium">
        <span class="heading--underlined">2</span>
        <span class="heading--uppercase">Measure</span>
      </h2>
      <p class="p--body">
        The AirBeam communicates these measurements to the AirCasting App (available from the <a href="https://play.google.com/store/apps/details?id=pl.llp.aircasting&hl=en_US">Google Play Store</a> & <a href="https://apps.apple.com/us/app/aircasting/id1587685281#?platform=iphone">Apple App Store</a>) where your measurements are mapped and graphed in real-time on your smartphone.
      </p>
    </article>
  </div>
</section>

<section class="panel">
  <div class="split--50 split--padding-right split--order-secondary">
    <article class="container--narrow">
      <h2 class="heading heading--medium">
        <span class="heading--underlined heading--underlined--ac">3</span>
        <span class="heading--uppercase">Beam</span>
      </h2>
      <img class="logo logo--body" alt="AirCasting logo" src="/assets/img/svg/Aircasting-Logo-Body.svg" />
      <p class="p--body">
        In mobile mode, the AirBeam communicates measurements to the Android or iOS device every second via Bluetooth. In fixed mode, the AirBeam communicates measurements directly to the AirCasting website every minute via either the WiFi or cellular network. AirBeam also includes an onboard GPS, clock, and SD card so it can operate in standalone mode and log data without being connected to a smartphone, WiFi, or cellular network.
      </p>
    </article>
    <article class="container--narrow u--margin-top-big">
      <h2 class="heading heading--medium">
        <span class="heading--underlined heading--underlined--ac">4</span>
        <span class="heading--uppercase">Visualize</span>
      </h2>
      <p class="p--body">
        AirBeam data is then aggregated and crowdsourced on the AirCasting website, allowing AirCasters to visualize areas where air pollutant concentrations are highest and lowest and share their data with their community.
      </p>
    </article>
  </div>
  <div class="split--50">
    <img
      alt="AirCasting Mobile App"
      class="img img--margin-top lazyload"
      data-src="/assets/img/pages/how-it-works/app-new.png?nf_resize=fit&w=750"
      src="/assets/img/pages/how-it-works/app-new.png?nf_resize=fit&w=20"
    />
  </div>
</section>

<section class="panel">
  <div class="split--50 split--padding-right">
    <img
      alt="Airbeam on a blanket "
      class="img lazyload"
      data-src="/assets/img/pages/how-it-works/how-it-works_3_crop.jpg?nf_resize=fit&w=750"
      src="/assets/img/pages/how-it-works/how-it-works_3_crop.jpg?nf_resize=fit&w=20"
    />
  </div>
  <div class="split--50">
    <article class="container--narrow container--centered">
      <h2 class="heading heading--medium">
        <span class="heading--underlined">5</span>
        <span class="heading--uppercase">Stay informed</span>
      </h2>
      <p class="p--body">
        Good decisions are informed decisions. Integrating the AirCasting platform into your daily routine can guide healthier day-to-day decisions and help collect quality data to support environmental campaigns or research aimed at cleaner and healthier environments.
      </p>
      <div class="u--align-center">
        <a href="/airbeam/buy-it-now" class="badge-link badge-link--hm">
          <span class="u--vertically-centered">Get Started with AirBeam</span>
        </a>
        <a href="https://aircastingactions.org" class="badge-link badge-link--hm">
          <span class="u--vertically-centered">Breathe Better with AirCasting Actions</span>
        </a>
      </div>
    </article>
  </div>
</section>

<section class="slider slider--user-stories">
  <div class="js-slider">
    {% assign stories = site.user_stories | where: 'featured', true | sort: "order" %}
    {% for story in stories %}
      {% unless forloop.index > 6 %}
        <div>
          <div class="panel panel--user-stories u--bg-teal slide">
            <div class="split--50 slide__story">
              <h2 class="heading heading--uppercase">Who is using Airbeam?</h2>
              <a href="/airbeam/user-stories/{{story.slug}}">
                <h3 class="heading heading--medium">{{ story.title }}</h3>
                <p class="p--body">
                  {{ story.intro | strip_html }}
                </p>
              </a>
              <a href="/airbeam/user-stories#user-stories" class="button button--ac-on-teal">More User Stories</a>
            </div>
            {% assign image_url = story.image %}
            <div class="split--50 slide__image">
              <picture>
                <source data-srcset="{{ image_url | append: '?nf_resize=fit&w=767' }}" media="(max-width: 767px)" />
                <source data-srcset="{{ image_url | append: '?nf_resize=fit&w=1024' }}" media="(max-width: 1024px)" />
                <source data-srcset="{{ image_url | append: '?nf_resize=smartcrop&w=640&h=602' }}" media="(max-width: 1280px)" />
                <source data-srcset="{{ image_url | append: '?nf_resize=smartcrop&w=720&h=602' }}" media="(max-width: 1440px)" />
                <img
                  alt="{{ story.title }}"
                  class="lazyload"
                  data-src="{{ image_url | append: '?nf_resize=smartcrop&w=960&h=600' }}"
                  src="{{ image_url | append: '?nf_resize=fit&w=20' }}"
                />
              </picture>
            </div>
          </div>
        </div>
      {% endunless %}
    {% endfor %}
  </div>
</section>

{% include slider-init.html %}
