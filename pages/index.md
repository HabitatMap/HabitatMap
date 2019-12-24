---
layout: home
permalink: /
section: home
---

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

<section class="slider slider--user-stories">
  <div class="js-slider">
    {% assign stories = site.user_stories | where: 'featured', true | sort: "order" %}
    {% for story in stories %}
      {% unless forloop.index > 6 %}
        <div>
          <div class="panel u--bg-teal slide">
            <div class="split--50 slide__story">
              <h2 class="heading heading--capitilized">Who is using Airbeam?</h2>
              <a href="/airbeam/user-stories/{{story.slug}}">
                <h3 class="heading heading--medium">{{ story.title }}</h3>
                <p class="p--body">
                  {{ story.intro | strip_html }}
                </p>
              </a>
              <a href="/airbeam/user-stories#user-stories" class="button button--ac-on-teal">More User Stories</a>
            </div>
            {% assign image_url = story.image %}
            <div class="split--50 slide__photo">
              <picture>
                <source data-srcset="{{ image_url | append: '?nf_resize=fit&w=767' }}" media="(max-width: 767px)" />
                <source data-srcset="{{ image_url | append: '?nf_resize=fit&w=960' }}" media="(max-width: 1280px)" />
                <source data-srcset="{{ image_url | append: '?nf_resize=fit&w=1080' }}" media="(max-width: 1440px)" />
                <img
                  alt="{{ story.title }}"
                  class="lazyload"
                  data-src="{{ image_url | append: '?nf_resize=fit&w=1875' }}"
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

<section class="panel panel--align-center ac-intro">
  <div class="split--60">
    <img class="logo logo--body" alt="AirCasting" src="assets/img/svg/AirCasting-Logo-Body.svg" />
    <p class="p--large u--gray-text">
      AirCasting is an open-source environmental data visualization platform that consists of an Android app and online mapping system.
    </p>
  </div>
  <div class="split--40 u--align-right">
    <a href="http://aircasting.habitatmap.org/map" class="button button--ac ac-intro__button">AirCasting Maps</a>
    <a href="https://play.google.com/store/apps/details?id=pl.llp.aircasting&hl=en" class="button button--ac ac-intro__button">Download App</a>
  </div>
</section>

<section class="panel">
  {% include map-screenshot.html %}
</section>

<section class="panel panel--quote u--bg-blue-dark arc-background arc-background--left-opacity-15 arc-background--left-quote">
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
