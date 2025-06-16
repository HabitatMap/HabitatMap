---
layout: page
title: AirBeam FAQ
permalink: /airbeam/faq
section: faq
image: /assets/img/about-airbeam-01.jpg
---

<section class="panel panel--faq-intro u--bg-green">
  <div class="split--50 split--padding-right">
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
      This FAQ section is a way for us to share answers to frequently asked questions with the worldwide AirCasting community. If you have a question and don't see your answer here, please email us at <a href="mailto:info@habitatmap.org">info@habitatmap.org</a> so we can continue to expand and share our knowledge base. You can also connect with us via the <a href="https://www.facebook.com/groups/667717482567030">Facebook AirCasting Community</a>
    </p>
  </div>
</section>

<section class="panel faq">
  {% assign categories = site.faq_categories | sort: "order" %}
  {% for category in categories %}
    <div class="faq__category js--faq-section">
      <h2 class="heading heading--uppercase faq__category-name js--faq-heading">{{ category.name }}</h2>
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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {% assign all_faqs = site.data.faq.faq_items %}
    {% for faq in all_faqs %}
    {
      "@type": "Question",
      "name": {{ faq.question | jsonify }},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": {{ faq.answer | markdownify | strip_html | jsonify }}
      }
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
}
</script>
