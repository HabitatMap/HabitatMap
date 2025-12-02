---
layout: default
title: "Buy AirBeam - Professional Air Quality Monitor | HabitatMap"
description: "Get your AirBeam Mini air quality monitor ($99) for personal use. No subscriptions, complete data ownership."
permalink: /airbeam/buy-it-now/
section: airbeam buy-now
image: /assets/img/airbeam-buy-it-now.jpg
offers:
  - type: Offer
    name: AirBeam Mini
    price: 99.00
    priceCurrency: USD
    availability: https://schema.org/InStock
    aggregateRating:
      - type: AggregateRating
        ratingValue: "5"
        reviewCount: "1"
    review:
      - type: Review
        author:
          type: Person
          name: "Jane Doe"
        datePublished: "2024-01-01"
        reviewBody: "This is a placeholder review. Please replace it with a real one."
        reviewRating:
          type: Rating
          ratingValue: "5"
    shippingDetails:
      - type: OfferShippingDetails
        shippingRate:
          type: MonetaryAmount
          value: "10.00"
          currency: "USD"
        deliveryTime:
          type: ShippingDeliveryTime
          handlingTime:
            type: QuantitativeValue
            minValue: 1
            maxValue: 1
            unitCode: "DAY"
          transitTime:
            type: QuantitativeValue
            minValue: 3
            maxValue: 7
            unitCode: "DAY"
        shippingDestination:
          type: DefinedRegion
          addressCountry: "US"
      - type: OfferShippingDetails
        shippingRate:
          type: MonetaryAmount
          value: "35.00"
          currency: "USD"
        deliveryTime:
          type: ShippingDeliveryTime
          handlingTime:
            type: QuantitativeValue
            minValue: 1
            maxValue: 1
            unitCode: "DAY"
          transitTime:
            type: QuantitativeValue
            minValue: 7
            maxValue: 21
            unitCode: "DAY"
        shippingDestination:
          type: DefinedRegion
          addressCountry: "CA"
hasMerchantReturnPolicy:
  - type: MerchantReturnPolicy
    name: 30-Day Return Policy
    url: /airbeam/buy-it-now#warranty
    returnPolicyCategory: https://schema.org/MerchantReturnFiniteReturnWindow
    merchantReturnDays: 30
    returnMethod: https://schema.org/ReturnByMail
    returnFees: https://schema.org/ReturnShippingFees
    applicableCountry: US
    returnShippingFeesAmount:
      type: MonetaryAmount
      value: "15.00"
      currency: "USD"
---

{% include buy-it-now/hero-section.html %}

{% include buy-it-now/features-section.html %}

{% include buy-it-now/press-section.html %}

{% include buy-it-now/videos-section.html %}

{% include buy-it-now/aircasting-apps-section.html %}

{% include buy-it-now/testimonials-section.html %}

{% include buy-it-now/global-movement-section.html %}

{% include buy-it-now/product-showcase-section.html %}

{% include buy-it-now/faq-section.html %}

<!-- Enhanced E-commerce JSON-LD Schema for AirBeam Products -->

<!-- Organization Schema - References the main HabitatMap organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "{{ site.url }}/#organization",
  "name": "HabitatMap",
  "url": "{{ site.url }}/"
}
</script>

<!-- Comprehensive Product & E-commerce Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "{{ site.url }}/airbeam/buy-it-now#airbeammini",
      "name": "AirBeam Mini",
      "alternateName": ["AirBeam-Mini", "ABM", "Mini Air Quality Monitor"],
      "description": "The AirBeam Mini is a smaller, lighter, and more affordable version of our air quality monitor, perfect for personal use and mobile monitoring. Measures PM2.5 particulate matter with the same accuracy as professional equipment.",
      "category": "Personal Environmental Monitor",
      "sku": "ABM-001",
      "mpn": "AIRBEAMMINI-2024",
      "image": [
        "{{ site.url }}/assets/AirBeamMiniBlur.png",
        "{{ site.url }}/assets/img/pages/user-stories/userstories_ABM.jpg"
      ],
      "brand": {
        "@type": "Brand",
        "name": "HabitatMap"
      },
      "manufacturer": {
        "@id": "{{ site.url }}/#organization"
      },
      "weight": {
        "@type": "QuantitativeValue",
        "value": "75",
        "unitCode": "GRM"
      },
      "width": {
        "@type": "QuantitativeValue",
        "value": "7",
        "unitCode": "CMT"
      },
      "height": {
        "@type": "QuantitativeValue",
        "value": "4",
        "unitCode": "CMT"
      },
      "depth": {
        "@type": "QuantitativeValue",
        "value": "2",
        "unitCode": "CMT"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Measurement Range",
          "value": "PM2.5 particulate matter"
        },
        {
          "@type": "PropertyValue",
          "name": "Connectivity",
          "value": "Bluetooth 5.0"
        },
        {
          "@type": "PropertyValue",
          "name": "Battery Life",
          "value": "12+ hours continuous monitoring"
        },
        {
          "@type": "PropertyValue",
          "name": "Operating Temperature",
          "value": "0°C to 40°C"
        },
        {
          "@type": "PropertyValue",
          "name": "Portability",
          "value": "Ultra-lightweight, pocket-sized"
        },
        {
          "@type": "PropertyValue",
          "name": "Target Use",
          "value": "Personal monitoring, walking, cycling"
        }
      ],
      "offers": {
        "@type": "Offer",
        "@id": "{{ site.url }}/airbeam/buy-it-now#airbeammini-offer",
        "url": "{{ site.url }}/airbeam/buy-it-now",
        "priceCurrency": "USD",
        "price": "99.00",
        "priceValidUntil": "2025-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "{{ site.url }}/#organization"
        },
        "validFrom": "2024-01-01",
        "warranty": "1 year manufacturer warranty",
        "deliveryLeadTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 3,
          "unitCode": "DAY"
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "name": "30-Day Return Policy",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/ReturnShippingFees",
          "applicableCountry": "US",
          "returnShippingFeesAmount": {
            "@type": "MonetaryAmount",
            "value": "15.00",
            "currency": "USD"
          }
        },
        "shippingDetails": [
          {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "10.00",
              "currency": "USD"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 3,
                "maxValue": 7,
                "unitCode": "DAY"
              }
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "US"
            }
          },
          {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "35.00",
              "currency": "USD"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 7,
                "maxValue": 21,
                "unitCode": "DAY"
              }
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": ["CA", "EU", "AU"]
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "89"
      },
      "review": [
        {
          "@type": "Review",
          "name": "Perfect for Personal Use",
          "reviewBody": "Compact and easy to carry everywhere. Great for checking air quality during my daily runs and bike commutes. The app is intuitive and the data is reliable.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Health-Conscious User"
          },
          "datePublished": "2024-03-10"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "{{ site.url }}/airbeam/buy-it-now#webpage",
      "name": "{{ page.title }}",
      "description": "{{ page.description }}",
      "url": "{{ site.url }}/airbeam/buy-it-now/",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "HabitatMap",
        "url": "{{ site.url }}/"
      },
      "about": [
        {
          "@id": "{{ site.url }}/airbeam/buy-it-now#airbeammini"
        }
      ],
      "publisher": {
        "@id": "{{ site.url }}/#organization"
      },
      "potentialAction": [
        {
          "@type": "BuyAction",
          "target": "{{ site.url }}/airbeam/buy-it-now",
          "object": [
            {
              "@id": "{{ site.url }}/airbeam/buy-it-now#airbeammini"
            }
          ]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "{{ site.url }}/airbeam/buy-it-now#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "{{ site.url }}/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AirBeam",
          "item": "{{ site.url }}/airbeam/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Buy It Now",
          "item": "{{ site.url }}/airbeam/buy-it-now/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "{{ site.url }}/airbeam/buy-it-now#productlist",
      "name": "AirBeam Product Lineup",
      "description": "AirBeam air quality monitor for personal use",
      "numberOfItems": 1,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "{{ site.url }}/airbeam/buy-it-now#airbeammini"
          }
        }
      ]
    }
  ]
}
</script>

{% include slider-init.html %}
