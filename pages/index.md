---
layout: home
permalink: /
section: home
image: /assets/img/pages/home/home.jpg
---

<section class="panel panel--hero u--bg-cyan lazyload">
  <div class="split--40">
    <h1 class="heading heading--large heading--hero">
      Breathe Smarter with AirBeam
    </h1>
      <p class="p--hero">
        A portable and easy to use air quality monitor that lets you see the pollution around you in real time.
        Empower your community, protect your health, and take action with data you can trust.</p>
    <br>
    <a href="/airbeam/buy-it-now">
      <button class="button button--cta">Get AirBeam</button>
    </a>
  </div>
</section>

<img
  data-src="/assets/img/pages/home/home.jpg?nf_resize=fit&w=1200"
  src="/assets/img/pages/home/home.jpg?nf_resize=fit&w=100"
  class="u--tablet-min-hidden"
  width="1200"
  height="800"
  alt="AirBeam sensor"
  loading="lazy"
/>

<section class="panel highlights">
  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      No Subscriptions or Hidden Fees
    </h2>
    <p>
      Rest assured there won't ever be hidden fees or
      subscriptions. We won't sell your data or charge you
      to access yours.
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      Easy Setup in 5 Minutes or Less!
    </h2>
    <p>
      App walks you through step by step + access
      to video tutorial library.
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      Easy to Understand & Digest Data
    </h2>
    <p>
      User-friendly dashboard makes seeing and
      presenting trends and patterns easy.
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      Recommended by Top Institutions
    </h2>
    <p>
      Trusted by Educators and Researchers at Top Educational
      Institutions and Backed by the Clean Air Fund.
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      Automatic Data Back-ups
    </h2>
    <p>
      On-board storage saves measurements so you'll never lose data.
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      Transparency & Our Non-Profit Ethos
    </h2>
    <p>
      Easy and Free Access to Data, no restrictions.
      Always Open Source Built!
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      Free Research Design Tools, Download Toolkits & Curriculums
    </h2>
    <p>
      AirCasting Actions has everything you need to get started
      with air monitoring, whether you're an individual,
      an educator, or part of an organized community effort.
      <br>
      <a href="https://aircastingactions.org" target="_blank" class="link--underlined">Explore Tools and Curriculum</a>
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      Designed for Mobile Monitoring
    </h2>
    <p>
      Lightweight & Portable. Designed to withstand the elements
      with weather resistant shell and Sturdy Design.
    </p>
  </div>

  <div class="highlights__item">
    <h2 class="heading heading--small heading--body">
      FREE to Use
    </h2>
    <p>
      The AirCasting platform (including app) are free to use.
    </p>
  </div>

  <div class="highlights__item">
    <p class="download-links">
      <a
        href="https://apps.apple.com/us/app/aircasting/id1587685281#?platform=iphone"
        target="_blank"
        class="download-links__item"
      >
        <img
          data-src="/assets/img/pages/home/download-on-the-app-store-badge.png"
          src="/assets/img/pages/home/download-on-the-app-store-badge.png?nf_resize=fit&w=20"
          class="lazyload"
          alt="Download on the App Store badge"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=pl.llp.aircasting&hl=en_US"
        target="_blank"
        class="download-links__item"
      >
        <img
          data-src="/assets/img/pages/home/google-play-badge.png"
          src="/assets/img/pages/home/google-play-badge.png?nf_resize=fit&w=20"
          class="lazyload"
          alt="Google Play badge"
        />
      </a>
    </p>
  </div>
</section>

<section class="panel panel--big-padding u--bg-blue-dark logos">
  <div class="logos__item">
    <img
      data-src="/assets/img/pages/home/logos/the-new-york-times.png"
      src="/assets/img/pages/home/logos/the-new-york-times.png?nf_resize=fit&w=20"
      alt="The New York Times logo"
      class="lazyload"
    />
  </div>
  <div class="logos__item">
    <img
      data-src="/assets/img/pages/home/logos/fast-company.png"
      src="/assets/img/pages/home/logos/fast-company.png?nf_resize=fit&w=20"
      alt="Fast Company logo"
      class="lazyload"
    />
  </div>
  <div class="logos__item">
    <img
      data-src="/assets/img/pages/home/logos/daily-news.png"
      src="/assets/img/pages/home/logos/daily-news.png?nf_resize=fit&w=20"
      alt="Daily News logo"
      class="lazyload"
    />
  </div>
  <div class="logos__item">
    <img
      data-src="/assets/img/pages/home/logos/popular-science.png"
      src="/assets/img/pages/home/logos/popular-science.png?nf_resize=fit&w=20"
      alt="Popular Science logo"
      class="lazyload"
    />
  </div>
  <div class="logos__item">
    <img
      data-src="/assets/img/pages/home/logos/wired.png"
      src="/assets/img/pages/home/logos/wired.png?nf_resize=fit&w=20"
      alt="Wired logo"
      class="lazyload"
    />
  </div>
</section>

<section class="for-teams u--align-center">
  <h2 class="for-teams__heading heading">Need AirBeams for Your Team or Classroom?</h2>
  <p class="for-teams__get-help">Get One-on-One Research Design and Implementation Help</p>
  <a href="/airbeam/get-consultation" class="button button--cta">Schedule a Free Consultation</a>
</section>

<section class="quote panel panel--big-padding">
  {% assign citations = site.data.citations.citations %}
  {% for citation in citations %}
    <figure class="split--50 quote u--hidden" data-set="{{citation.set}}">
      <blockquote class="quote__body">
        <em>"{{ citation.quote }}"</em>
      </blockquote>
      <figcaption class="quote__name">
        - {{ citation.author }}
      </figcaption>
    </figure>
  {% endfor %}
</section>

{% include get-started-modal.html %}

<script defer type="text/javascript" src="/assets/js/citations.js"></script>
