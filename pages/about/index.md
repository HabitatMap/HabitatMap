---
layout: page
title: HabitatMap makes environmental technology accessible.
description: HabitatMap's tools empower organizations and citizen scientists to measure pollution and advocate for equity and improved quality of life.
permalink: /about
section: about
---

{% assign hero_image_url = "/assets/img/pages/about-habitatmap/hero.jpg" %}
{% assign hero_image_mobile_url = "/assets/img/pages/about-habitatmap/hero.jpg?nf_resize=fit&w=720" %}
{% assign hero_image_tablet_url = "/assets/img/pages/about-habitatmap/hero.jpg?nf_resize=fit&w=1536" %}
{% assign hero_image_medium_desktop_url = "/assets/img/pages/about-habitatmap/hero.jpg?nf_resize=fit&w=2050" %}

<style scoped>
  .img-full-width {
    background-image: url("{{ hero_image_url }}");
  }

  @media screen and (max-width: 1366px) {
    .img-full-width {
      background-image: url("{{ hero_image_medium_desktop_url }}");
    }
  }

  @media screen and (max-width: 1024px) {
    .img-full-width {
      background-image: url("{{ hero_image_tablet_url }}");
    }
  }

  @media screen and (max-width: 480px) {
    .img-full-width {
      background-image: url("{{ hero_image_mobile_url }}");
    }
  }

</style>

<section class="panel panel--about-intro u--bg-teal">
  <div class="split--50 split--padding-right">
    <h1 class="heading heading--large">
      About
      <br />
      HabitatMap
    </h1>
  </div>

  <div class="split--50 split--padding-left">
    <p class="heading heading--small">
      HabitatMap is an environmental technology non-profit building open-source, free, and low-cost environmental monitoring and data visualization solutions. Our tools empower organizations and citizen scientists to measure pollution and advocate for equitable solutions to environmental health issues. We focus on low-income communities and communities of color living with disproportionate environmental burdens.
    </p>

    <button class="read-more-button js--show-next">Read more</button>

    <p style="display: none" class="heading heading--small">
      Our central data visualization platform - AirCasting - and its companion palm-sized air quality measurement device - AirBeam - support schools, researchers, community-based organizations, municipalities, and regulatory agencies in obtaining valid environmental data that can be used to make decisions in real-time and craft data-informed policy.
    </p>

  </div>
</section>

<section class="img-full-width"></section>

<section class="arc-background arc-background--left-teal-light arc-background--left-center u--vertical-padding">
  <div class="panel">
    <div class="split--60 split--padding-right">
      <h2 class="heading heading--capitilized">Our mission</h2>
      <p class="p--xlarge u--gray-text">
        We make technologies accessible so communities facing disproportionate environmental burdens can advocate for equity and improved quality&nbsp;of life.
      </p>
    </div>
    <div class="split--40 split--padding-left u--align-right">
      <img
        alt="Airbeam"
        class="img img--alternate-small lazyload"
        data-src="/assets/img/pages/about-habitatmap/airbeam.jpg?nf_resize=fit&w=570"
        src="/assets/img/pages/about-habitatmap/airbeam.jpg?nf_resize=fit&w=20"
      />
    </div>
  </div>

  <div class="panel">
    <div class="split--60 split--padding-right split--order-secondary">
      <img
        alt="Michael Heimbinder"
        class="img img--alternate-medium lazyload"
        data-src="/assets/img/pages/about-habitatmap/MichaelHeimbinder.jpg?nf_resize=fit&w=750"
        src="/assets/img/pages/about-habitatmap/MichaelHeimbinder.jpg?nf_resize=fit&w=20"
      />
    </div>
    <div class="split--40 split--padding-left">
      <h2 class="heading heading--capitilized">Founder & Executive Director</h2>
      <p class="p--body heading heading--small">
        Michael Heimbinder is an information designer, community organizer, and educator.
      </p>
      <p class="p--body">
        Since launching HabitatMap in 2006, he has worked with dozens of community-based organizations and schools to create planning and advocacy maps that publicize the issues they care about most.
      </p>
      <a href="/about/history" class="button button--ac">Learn more</a>
    </div>
  </div>
</section>

<section class="panel panel--quote u--bg-cyan arc-background arc-background--right-opacity-15 arc-background--right-bottom-quote">
  <div class="split--40">
    <h2 class="heading heading--medium">
      HabitatMap
      <br />
      in the News
    </h2>
  </div>
  {% include news-quotes-slider.html news_quotes = site.news_quotes %}
</section>

<section class="panel panel--big-padding">
  <div class="split--50 split--padding-right">
    <img class="logo logo--body logo--airbeam" alt="Airbeam logo" src="/assets/img/svg/Airbeam-Logo-Body.svg" />
    <p class="p--body">
      The AirBeam measures particulate matter with proven accuracy and when used in conjunction with the AirCasting platform - or a custom solution - helps community-based organizations, educators, academics, regulators, city managers, and citizen scientists map air pollution and organize for clean air.
    </p>
    <a href="/airbeam" class="button button--hm">Learn more</a>
  </div>

  <div class="split--50 split--padding-left">
    <img class="logo logo--body logo--aircasting" alt="AirCasting logo" src="/assets/img/svg/AirCasting-Logo-Body.svg" />
    <p class="p--body">
      AirCasting is an open-source environmental data visualization platform that consists of an Android app and online mapping system and is one of the largest open-source databases of community-collected air quality measurements ever created.
    </p>
    <a href="http://aircasting.habitatmap.org/map" class="button button--ac button--ac-about">AirCasting Maps</a>
  </div>
</section>

{% include slider-init.html %}

<script defer type="text/javascript" src="/assets/js/show-next.js"></script>
