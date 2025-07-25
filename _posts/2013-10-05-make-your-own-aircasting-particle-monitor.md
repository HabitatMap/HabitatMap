---
layout: post
title: Make Your Own AirCasting Particle Monitor
date: "2013-10-05"
featured: false
image: /images/uploads/ShinyeiPPD42NS_Insides_Labeled_600.jpg
category: Sensors & Instruments
tag:
  - instruments
  - open-source
  - education
  - community science
---

<p>Join us Tuesday, October 8th for the third installment of <a href="http://makezine.com/2013/10/08/urban-sensor-hacks-hangout-live-now-3/" target="_blank">Make Magazine's Urban Sensor Hack</a>. The event takes place on Google Hangout and is free and open to the public. During our hack Michael Heimbinder, Tim Dye, Iem Heng, and Raymond Yap will guide you through a step by step process for making your own AirCasting particle monitor, discuss the challenges involved in achieving accurate air quality measurements, and detail our work with community based organizations and schools to conduct environmental monitoring and advance STEAM education. For those who can't make the Urban Sensor Hack, we've published <a href="http://takingspace.org/wp-content/uploads/AirCastingParticleMonitorInstructions.pdf" target="_blank">an illustrated step-by-step guide</a> detailing how to make your own AirCasting particle monitor using the <a href="http://www.sca-shinyei.com/pdf/PPD42NS.pdf" target="_blank">Shinyei PPD42NS</a> optical particle counter.</p>
<p>As those who have been following the AirCasting project know, we've been conducting R&amp;D on different air quality sensors for nearly two years in pursuit of a low-cost instrument appropriate for personal exposure monitoring. The Shinyei PPD42NS was one of the first sensors we evaluated. Our tests indicate that it responds to particles 2 microns in diameter and larger when air flow and light interference issues are addressed and signal filtering algorithms are in place. As you can see in the below test comparing the performance of the Shinyei PPD42NS with the more expensive Shinyei PPD60PV-T2, the <a href="http://www.dylosproducts.com/dcproairqumo.html" target="_blank">Dylos DC1100 Pro</a>, and the <a href="http://www.thermoscientific.com/ecomm/servlet/productsdetail_11152___11961321_-1" target="_blank">Thermo Scientific <em>p</em>DR-1500</a>; the PPD42NS responds in line with the other instruments but the intensity (dynamic range) of it's response is off and it's unfiltered signal is noisy. For these reasons, we're currently focusing our developments efforts on the PPD60PV-T2 which can detect smaller particles with substantially less noise.</p>
<p><a href="http://takingspace.org/wp-content/uploads/ParticulateMatterInstrumentComparisonLarge.png" target="_blank"><img style="text-decoration: underline;" title="Particulate Matter Instrument Comparison" src="{{ site.baseurl }}/assets/ParticulateMatterInstrumentComparison.png" alt="Particulate Matter Instrument Comparison" width="600" height="280" /></a></p>
<p>For those looking to dig deeper on the PPD42NS have a look at this <a href="http://takingspace.org/wp-content/uploads/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf" target="_blank">thorough breakdown of the product</a> compliments of Tracy Allen at <a href="http://www.emesystems.com/" target="_blank">EME Systems</a>. We'd also like to thank Chris Nafis, whose<a href="http://www.howmuchsnow.com/arduino/airquality/grovedust/" target="_blank"> instructions and code</a> for connecting the PPD42NS to an Arduino helped us get started with our own work, and David Holstius, whose blogging also informed our work.</p>
