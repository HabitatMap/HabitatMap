---
layout: home
title: HabitatMap
permalink: /
section: home
---

{% assign hero_image_url = site.produrl | append: "/assets/img/habitatmap-home-airbeam-aircasting.jpg" %}
{% assign hero_image_mobile_url = site.produrl | append: "/assets/img/habitatmap-home-airbeam-aircasting.jpg?nf_resize=fit&w=720" %}

<style scoped>
  .panel--hero {
    background-image: url("{{ hero_image_url }}");
  }

  @media screen and (max-width: 480px) {
    .panel--hero {
      background-image: url("{{ hero_image_mobile_url }}");
    }
  }
</style>

<section class="panel panel--hero u--bg-teal-light">
  <div class="split--50">
    <h1 class="heading heading--large u--accent-hm panel__heading">
      Harnessing the Power&nbsp;of&nbsp;People and&nbsp;Technology&nbsp;to Improve the Quality&nbsp;of&nbsp;Lives
    </h1>
  </div>
</section>

<section class="panel panel--airbeam panel--align-center arc-background arc-background--right-opacity-50 arc-background--right-bottom">
  <div class="split--60">
    <img class="logo logo--body" alt="Airbeam" src="assets/img/svg/AirBeam-Logo-Body.svg" />
    <p class="p--large u--gray-text">
      AirBeam is a low-cost, palm-sized air quality instrument that measures hyperlocal concentrations of harmful microscopic particles in the air, known as particulate matter, as well as humidity and temperature.
    </p>
  </div>
  <div class="split--40 u--align-center">
    <a href="/airbeam/buy-it-now" class="badge-link badge-link--hm">
      <span class="u--vertically-centered">Get Airbeam</span>
    </a>
  </div>
</section>

<section class="slider">
  <div class="js-slider">
    {% assign slides = site.slides | where: 'featured', true | sort: 'order' %}
    {% for slide in slides %}
      {% unless forloop.index > 4 %}
        <div>
          <div class="panel u--bg-teal slide">
            <div class="split--50 slide__story">
              <h2 class="heading heading--capitilized">Who is using Airbeam?</h2>
                <h3 class="heading heading--medium">{{ slide.organization_name }}</h3>
                <p class="p--body">
                  {{ slide.description }}
                </p>
              <a href="#" class="button button--ac-on-teal">More User Stories</a>
            </div>
            {% assign image_url = site.produrl | append: slide.image %}
            <img src="{{ image_url }}" data-src="{{ image_url }}" class="slide__photo" />
          </div>
        </div>
      {% endunless %}
    {% endfor %}
  </div>
</section>

<section class="panel panel--align-center ac-intro">
  <div class="split--60">
    <img class="logo logo--body" alt="AirCasting" src="assets/img/svg/AirCasting-Logo-Body.svg" />
    <p class="p--large u--gray-text">
      AirCasting is an open-source environmental data visualization platform that consists of an Android app and online mapping system.
    </p>
  </div>
  <div class="split--40 u--align-right">
    <a href="#" class="button button--ac ac-intro__button">AirCasting Maps</a>
    <a href="#" class="button button--ac ac-intro__button">Download App</a>
  </div>
</section>

<section class="panel">
  <div>
    <img src="{{ site.produrl | append: '/assets/img/habitatmap-aircasting-map-placeholder.png' }}" alt="AirCasting Map" />
  </div>
</section>

<section class="panel panel--quote u--bg-blue-dark arc-background arc-background--left-opacity-15 arc-background--left-quote">
  <div class="split--40">
    <h2 class="heading heading--medium">
      AirBeam
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

<script defer type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
<script defer type="text/javascript" src="/assets/js/slider.js"></script>
