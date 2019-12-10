---
layout: page
title: HabitatMap - Press
permalink: /about/press
section: about
---

<section class="panel panel--history-intro u--bg-teal">
  <div class="split--50 split--padding-right">
    <h1 class="heading heading--large">
      Press
    </h1>
  </div>
</section>

<section class="panel panel--history arc-background arc-background--history arc-background--left-teal-light">
  <ul>
    {% for article in site.data.press.press_articles %}
      <li class="press-article">
        <a href="{{ article.link }}" class="press-article__link" target="_blank">
          <h2 class="heading heading--small heading--body">
            {{ article.title }}
          </h2>
        </a>
        <time datetime="{{ article.date }}">
          {{ article.date | date_to_string }}
        </time>
        |
        <span>{{ article.publication }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
