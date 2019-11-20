---
layout: page
title: AirBeam FAQ
permalink: /airbeam/faq
section: faq
---

<section class="panel panel--faq-intro u--bg-green">
  <div class="split--50 split--paddding-right">
    <h1 class="heading heading--large">
      Frequently
      <br />
      Asked
      <br />
      Questions
    </h1>
  </div>

  <div class="split--50">
    <p class="heading heading--small">
      Mauris interdum libero non ultricies fringilla. Pellentesque tincidunt nisi non massa consequat, at ornare dui hendrerit. Curabitur euismod nec velit nec consectetur. Etiam et auctor tellus. Sed et ipsum nisi. Pellentesque nec nisl mi.
    </p>
  </div>
</section>

<section class="panel faq">
  {% assign categories = site.faq_categories | sort: "order" %}
  {% for category in categories %}
    <div class="faq__category js--faq-section">
      <h2 class="heading heading--capitilized faq__category-name js--faq-heading">{{ category.name }}</h2>
      {% assign faqs = site.data.faq.faq_items | where: "category", category.name %}
      {% for faq in faqs %}
        <h3 class="heading heading--small faq__question">{{ faq.question }}</h3>
        <p class="p--body">
          {{ faq.answer }}
        </p>
      {% endfor %}
    </div>
  {% endfor %}
</section>

<script defer type="text/javascript" src="/assets/js/faq.js"></script>
