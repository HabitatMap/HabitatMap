---
layout: page
title: HabitatMap makes environmental technology accessible.
description: HabitatMap's tools empower organizations and citizen scientists to measure pollution and advocate for equity and improved quality of life.
permalink: /about
section: about
---

{% assign hero_image_url = site.produrl | append: "/assets/img/about-habitatmap-01.jpg" %}
{% assign hero_image_mobile_url = site.produrl | append: "/assets/img/about-habitatmap-01.jpg?nf_resize=fit&w=720" %}
{% assign hero_image_tablet_url = site.produrl | append: "/assets/img/about-habitatmap-01.jpg?nf_resize=fit&w=1536" %}
{% assign hero_image_medium_desktop_url = site.produrl | append: "/assets/img/about-habitatmap-01.jpg?nf_resize=fit&w=2050" %}

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
        class="img img--alternate-small img--fade-in"
        src="{{ site.produrl | append: '/assets/img/about-habitatmap-02.jpg' }}"
        alt="Airbeam"
      />
    </div>
  </div>

  <div class="panel">
    <div class="split--60 split--padding-right split--order-secondary">
      <img
        class="img img--alternate-medium img--fade-in"
        src="{{ site.produrl | append: '/assets/img/about-habitatmap-02.jpg' }}"
        alt="Airbeam"
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
      <a href="#" class="button">Learn more</a>
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
  <div class="split--60 quote">
    <p class="heading u--capitalized quote__heading">From WNYC:</p>
    <blockquote class="quote__body">
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque dolor orci, vitae porta ante suscipit ut. Donec cursus nibh id tellus fringilla, nec dictum mi viverra. Ut posuere magna non tellus mollis, ac fermentum nulla efficitur. Fusce libero nulla, ornare ac risus non, posuere bibendum nisi.”
    </blockquote>
  </div>
</section>

<section class="panel panel--big-padding">
  <div class="split--50 split--padding-right">
    <img class="logo logo--body" alt="Airbeam" src="/assets/img/svg/Airbeam-Logo-Body.svg" />
    <p class="p--body">
      The AirBeam measures particulate matter with proven accuracy and when used in conjunction with the AirCasting platform - or a custom solution - helps community-based organizations, educators, academics, regulators, city managers, and citizen scientists map air pollution and organize for clean air.
    </p>
    <a href="/airbeam" class="button button--hm">Learn more</a>

  </div>
  <div class="split--50 split--padding-left">
    <img class="logo logo--body" alt="AirCasting" src="/assets/img/svg/AirCasting-Logo-Body.svg" />
    <p class="p--body">
      AirCasting is an open-source environmental data visualization platform that consists of an Android app and online mapping system and is one of the largest open-source databases of community-collected air quality measurements ever created.
    </p>
    <a href="#" class="button button--ac">AirCasting Maps</a>
  </div>
</section>
