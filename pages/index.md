---
layout: home
permalink: /
section: home
title: "AirBeam Air Quality Monitor - Know What You Breathe"
description: "Professional-grade air quality monitoring tools that put environmental health data directly in your hands. Measure air quality in your neighborhood with real-time pollution data."
image: /assets/img/pages/home/home.jpg
keywords: "air quality monitor, air pollution, environmental monitoring, AirBeam, real-time air quality, community health, portable air sensor"
og_type: website
---

{% include home-sections/hero-main-banner.html %}
{% include home-sections/problem-solution-comparison.html %}
{% include home-sections/airbeam-aircasting-ecosystem.html %}
{% include home-sections/community-feature-cards.html %}
{% include home-sections/final-donation-cta.html %}
{% include buy-it-now/consultation-section.html %}
{% include home-sections/user-stories-carousel.html %}
{% include home-sections/press-section.html %}

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

<!-- Comprehensive JSON-LD Structured Data for SEO -->

<!-- Organization Schema - Defines HabitatMap as a non-profit organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "{{ site.url }}/#organization",
  "name": "HabitatMap",
  "legalName": "HabitatMap",
  "alternateName": ["Habitat Map", "HabitatMap.org"],
  "description": "HabitatMap's AirBeam and AirCasting tools empower people to measure air pollution and advocate for equitable solutions to environmental health issues.",
  "url": "{{ site.url }}/",
  "logo": {
    "@type": "ImageObject",
    "url": "{{ site.url }}/assets/img/habitatmap-logo.png",
    "width": 200,
    "height": 60
  },
  "image": "{{ site.url }}/assets/img/pages/home/home.jpg",
  "foundingDate": "2007",
  "nonprofitStatus": "501(c)(3)",
  "taxID": "26-1264394",
  "knowsAbout": [
    "Air Quality Monitoring",
    "Environmental Health",
    "Community Science",
    "Environmental Justice",
    "Open Source Technology",
    "Citizen Science"
  ],
  "location": {
    "@type": "PostalAddress",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@habitatmap.org",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "url": "{{ site.url }}/airbeam/buy-it-now",
      "availableLanguage": "English"
    }
  ],
  "sameAs": [
    "https://twitter.com/habitatmap",
    "https://www.facebook.com/HabitatMap",
    "https://www.linkedin.com/company/habitatmap",
    "https://github.com/HabitatMap"
  ],
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "AirBeam Air Quality Monitor"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AirBeam Products",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "AirBeam3"
      }
    ]
  },
  "award": [
    "Featured in The New York Times",
    "Featured in Fast Company",
    "Featured in Popular Science",
    "Featured in Wired Magazine"
  ]
}
</script>

<!-- WebSite Schema - Defines the website structure and search functionality -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "{{ site.url }}/#website",
  "name": "HabitatMap | Environmental Tech & AirBeam",
  "alternateName": "HabitatMap.org",
  "description": "{{ site.description }}",
  "url": "{{ site.url }}/",
  "inLanguage": "en-US",
  "copyrightYear": "2024",
  "copyrightHolder": {
    "@id": "{{ site.url }}/#organization"
  },
  "publisher": {
    "@id": "{{ site.url }}/#organization"
  },
  "mainEntity": {
    "@id": "{{ site.url }}/#product"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "{{ site.url }}/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "BuyAction",
      "target": "{{ site.url }}/airbeam/buy-it-now",
      "object": {
        "@id": "{{ site.url }}/#product"
      }
    }
  ],
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "AirBeam Products",
      "url": "{{ site.url }}/airbeam/"
    },
    {
      "@type": "WebPage",
      "name": "User Stories",
      "url": "{{ site.url }}/airbeam/user-stories/"
    },
    {
      "@type": "WebPage",
      "name": "Blog",
      "url": "{{ site.url }}/blog/"
    },
    {
      "@type": "WebPage",
      "name": "About HabitatMap",
      "url": "{{ site.url }}/about/"
    }
  ]
}
</script>

<!-- Product Schema - Defines the AirBeam air quality monitor -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "{{ site.url }}/#product",
  "name": "AirBeam Air Quality Monitor",
  "alternateName": ["AirBeam3", "AirBeam Sensor", "Portable Air Quality Monitor"],
  "description": "A portable and easy to use air quality monitor that lets you see the pollution around you in real time. Measure air quality in your neighborhood, at your kid's school, or on your daily run.",
  "category": "Environmental Monitoring Equipment",
  "productID": "airbeam-3",
  "brand": {
    "@id": "{{ site.url }}/#organization"
  },
  "manufacturer": {
    "@id": "{{ site.url }}/#organization"
  },
  "image": [
    "{{ site.url }}/assets/img/pages/home/home.jpg",
    "{{ site.url }}/assets/img/airbeam(new).jpg",
    "{{ site.url }}/assets/img/pages/how-it-works/how-it-works_1.jpg"
  ],
  "url": "{{ site.url }}/airbeam/",
  "offers": {
    "@type": "Offer",
    "url": "{{ site.url }}/airbeam/buy-it-now",
    "priceCurrency": "USD",
    "price": "99.00",
    "lowPrice": "99.00",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "{{ site.url }}/#organization"
    },
    "validFrom": "2024-01-01",
    "priceValidUntil": "2024-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "warranty": "1 year manufacturer warranty",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "150"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": [
      "Environmental Researchers",
      "Community Organizations",
      "Educators",
      "Health Advocates",
      "Citizens"
    ]
  },
  "applicationCategory": "Environmental Monitoring",
  "operatingSystem": "Cross-platform",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Measurement Range",
      "value": "PM1, PM2.5, PM10"
    },
    {
      "@type": "PropertyValue",
      "name": "Connectivity",
      "value": "Bluetooth, WiFi"
    },
    {
      "@type": "PropertyValue",
      "name": "Battery Life",
      "value": "24+ hours"
    },
    {
      "@type": "PropertyValue",
      "name": "Data Storage",
      "value": "Local + Cloud"
    },
    {
      "@type": "PropertyValue",
      "name": "Accuracy",
      "value": "Research-grade"
    },
    {
      "@type": "PropertyValue",
      "name": "Portability",
      "value": "Handheld, lightweight"
    }
  ],
  "isRelatedTo": [
    {
      "@type": "SoftwareApplication",
      "name": "AirCasting App",
      "applicationCategory": "Environmental Monitoring",
      "operatingSystem": ["iOS", "Android", "Web"],
      "url": "https://aircasting.org/",
      "downloadUrl": [
        "https://apps.apple.com/us/app/aircasting-air-quality/id1587685281",
        "https://play.google.com/store/apps/details?id=pl.llp.aircasting"
      ]
    }
  ],
  "review": [
    {% for story in stories limit: 3 %}
    {
      "@type": "Review",
      "name": "{{ story.title }}",
      "reviewBody": "{{ story.intro | strip_html | truncate: 200 }}",
      "url": "{{ site.url }}/airbeam/user-stories/{{ story.slug }}",
      "author": {
        "@type": "Organization",
        "name": "{{ story.title }}"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ],
  "hasEnergyConsumptionDetails": {
    "@type": "EnergyConsumptionDetails",
    "energyEfficiencyScaleMin": "A",
    "energyEfficiencyScaleMax": "G",
    "hasEnergyEfficiencyCategory": "A"
  },
  "keywords": [
    "air quality monitor",
    "air pollution sensor",
    "environmental monitoring",
    "portable air quality",
    "real-time air quality",
    "community health",
    "environmental justice",
    "citizen science"
  ]
}
</script>

<!-- WebPage Schema - Defines this specific homepage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "{{ site.url }}/#webpage",
  "name": "{{ page.title }}",
  "description": "{{ page.description }}",
  "url": "{{ site.url }}/",
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "{{ site.url }}/#website"
  },
  "about": {
    "@id": "{{ site.url }}/#product"
  },
  "publisher": {
    "@id": "{{ site.url }}/#organization"
  },
  "datePublished": "2024-01-01",
  "dateModified": "{{ site.time | date_to_xmlschema }}",
  "mainEntity": {
    "@id": "{{ site.url }}/#product"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "{{ site.url }}/"
      }
    ]
  },
  "potentialAction": [
    {
      "@type": "ViewAction",
      "target": "{{ site.url }}/"
    },
    {
      "@type": "BuyAction",
      "target": "{{ site.url }}/airbeam/buy-it-now"
    }
  ]
}
</script>

<script defer type="text/javascript" src="/assets/js/citations.js"></script>
