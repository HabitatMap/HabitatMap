---
layout: default
title: "AirBeam for Research, Classrooms & Campaigns | HabitatMap"
description: "Clean, timestamped, exportable air quality data from a low-cost sensor built for real deployments. Order AirBeam Mini units for your team, classroom, or campaign."
permalink: /airbeam/institutional/
section: airbeam
image: /assets/img/airbeam-buy-it-now.jpg
---

{% include institutional/hero.html %}

<script src="/assets/js/scroll-reveal.js"></script>

{% include home-sections/user-stories-carousel.html hide_cta=true %}

<script>
  {% assign stories = site.user_stories | where: 'featured', true | sort: "order" %}
  window.userStoriesData = [
    {% for story in stories limit: 6 %}
    {
      title: {{ story.title | jsonify }},
      intro: {{ story.intro | strip_html | jsonify }},
      image: {{ story.image | jsonify }},
      slug: {{ story.slug | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>

{% include institutional/features-scroll.html %}

{% include institutional/classrooms.html %}

{% include institutional/specifications.html %}

{% include institutional/data-to-case.html %}

{% include institutional/credibility.html %}

{% include institutional/consultation-cta.html %}

{% include institutional/resources.html %}

{% include shared/faq.html data_key="faq-institutional" modifier="inst-faq" eyebrow="Support" subtitle="Procurement, data, and accuracy — the questions institutions ask first." id_prefix="faq-inst-a" %}

{% include slider-init.html %}
