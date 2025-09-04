---
layout: home
permalink: /
section: home
image: /assets/img/pages/home/home.jpg
---

{% include home-sections/01-hero-main-banner.html %}
{% include home-sections/02-problem-solution-comparison.html %}
{% include home-sections/04-airbeam-aircasting-ecosystem.html %}
{% include home-sections/03-community-feature-cards.html %}
{% include home-sections/08-final-donation-cta.html %}
{% include buy-it-now/consultation-section.html %}
{% include home-sections/09-user-stories-carousel.html %}
{% include home-sections/08-press-section.html %}

<!-- Include existing modal and scripts -->

{% include get-started-modal.html %}

<!-- User Stories Data for Carousel -->
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

<script defer type="text/javascript" src="/assets/js/citations.js"></script>
