---
layout: home
permalink: /
section: home
image: /assets/img/habitatmap-home-airbeam-aircasting.png
---

<section class="panel panel--hero u--bg-cyan lazyload">
  <div class="split--50">
    <h1 class="heading heading--large panel__heading">
      Know&nbsp;What&nbsp;is Really in&nbsp;Your&nbsp;Air
    </h1>
    <p class="p--hero">
      Portable&nbsp;Realtime Air&nbsp;Quality Visualization&nbsp;Tools&nbsp;for
      <br>
      <b>Researchers</b>
    </p>
    <button class="button button--cta">Get started</button>
  </div>
</section>

<img
  data-src="/assets/img/pages/home/airbeam.jpg"
  src="/assets/img/pages/home/airbeam.jpg?nf_resize=fit&w=20"
  class="u--tablet-min-hidden lazyload"
/>

<section class="slider slider--user-stories">
  <div class="js-slider">
    {% assign stories = site.user_stories | where: 'featured', true | sort: "order" %}
    {% for story in stories %}
      {% unless forloop.index > 6 %}
        <div>
          <div class="panel panel--user-stories u--bg-teal slide">
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

<section class="panel panel--align-center ac-intro">
  <div class="split--60">
    <img class="logo logo--body" alt="AirCasting" src="assets/img/svg/AirCasting-Logo-Body.svg" />
    <p class="p--large u--gray-text">
      AirCasting is an open-source environmental data visualization platform that consists of an Android app and online mapping system.
    </p>
  </div>
  <div class="split--80 u--align-left">
    <a href="http://aircasting.habitatmap.org/map" class="button button--ac ac-intro__button">See the Maps</a>
    <a href="https://play.google.com/store/apps/details?id=pl.llp.aircasting&hl=en" class="button button--ac ac-intro__button">Android App</a>
    <a href="https://apps.apple.com/us/app/aircasting/id1587685281#?platform=iphone" class="button button--ac ac-intro__button">iOS App</a>
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
