---
layout: post
title: Adding an NO2 sensor to the AirBeam
date: "2017-12-04"
featured: false
author: Remi Pincent
image: /images/uploads/MobicitairExperimentReport.jpg
category: Sensors & Instruments
tag:
  - community science
  - instruments
  - open-source
---

<p>Some months ago, I took part in the <a href="http://www.air-rhonealpes.fr/sites/ra/files/atoms/files/atmo_mobicitair_dp_bat_def.pdf" target="_blank">Mobicitair experiment</a> led by <a href="http://www.atmo-auvergnerhonealpes.fr/" target="_blank">ATMO Auvergne Rhône Alpes</a>, an agency that monitors air quality in southeastern France. <a href="http://www.mobicitair.fr/" target="_blank">Mobitcitair</a> uses the AirBeam and the AirCasting platform to enable citizen scientists to take air quality measurements and crowdsource the results.</p>

<p>I live and work in Grenoble, France, a city surrounded by mountains. Pollution from industrial activity, traffic congestion, and the burning of wood for home heating combined with frequent temperature inversions can lead to long bouts of dirty air. Equipped with an <a href="https://www.habitatmap.org/airbeam" target="_blank">AirBeam</a> and the <a href="https://play.google.com/store/apps/details?id=pl.llp.aircasting&amp;hl=en" target="_blank">AirCasting app</a> by <a href="http://www.air-rhonealpes.fr/" target="_blank">ATMO Auvergne Rhône-Alpes</a>, I could observe these phenomena in real time as I went about my daily routine. This helped me understand how dramatically fine particulate matter (PM2.5) can vary over space and time. After several days with the AirBeam, I could intuit what the PM2.5 concentrations would be at certain locales based on previous observations and current weather.</p>
<p>However, I felt I was missing a piece of the puzzle; PM2.5 is just one of many air pollutants I’m exposed to everyday. During my commute to and from work along a highway, the AirBeam frequently indicated that my exposure to PM2.5 was minimal, but the air didn’t seem very clean to me. After discussing this with the scientists and engineers at ATMO, they suggested I add a nitrogen dioxide (NO2) sensor to the AirBeam.  They explained that vehicles are a major source of NO2 and the probable culprit in dirtying the air during my commute.</p>
<p>As I work at <a href="https://www.inria.fr/" target="_blank">INRIA</a> in the <a href="http://amiqual4home.inria.fr/home/" target="_blank">Amiqual4Home</a> project, I am fortunate to have the tools and knowledge necessary to add new sensors to the AirBeam. My first step was to dig into the AirBeam <a href="https://github.com/cloudformdesign/Airbeam" target="_blank">schematic</a> and <a href="https://github.com/HabitatMap/AirCastingAndroidClient/blob/master/arduino/aircasting/AirBeamFirmware_11_14_15" target="_blank">firmware</a>. The AirBeam is built on top of the Arduino Leonardo microcontroller and development environment and is entirely open source. This made modifying the hardware and firmware fairly straightforward. Before modifying it I gathered all needed files and code in an <a href="https://github.com/Lahorde/airbeam/tree/AirBeam_CairsensN02" target="_blank">AirBeam repo</a> I created.</p>
<p>The second step was to choose an adequate NO2 sensor. ATMO Auvergne Rhône-Alpes suggested the Cairsens NO2 sensor, which they had <a href="http://www.mdpi.com/2504-3900/1/4/473/pdf" target="_blank">previously evaluated</a> and found to have favorable performance versus a reference instrument. I was time limited and wanted to avoid modifying the AirBeam enclosure so I decided to add the NO2 sensor externally and make a few modifications to the circuit board. After some soldering, 3D printing, software implementation, and testing, we ended up with this:</p>

![NO2 AirBeam](/images/uploads/NO2AirBeam.jpg)

<p>In total, I made four NO2 AirBeams which were used during an <a href="https://www.flickr.com/photos/la-peniche/sets/72157689561120795/" target="_blank">“Explore Air Quality Workshop”</a> that took place in Grenoble over the summer.</p>

![Explore Air Quality Workshop](/images/uploads/ExploreAirQualityWorkshop.jpg)

<p><em>Remi Pincent works as a research and design engineer at </em><a href="https://www.inria.fr/" target="_blank"><em>INRIA</em></a><em>, a French public research agency dedicated to digital science and technology. Currently, Remi is engaged in the <a href="https://amiqual4home.inria.fr/" target="_blank"><span style="text-decoration: underline;">Amiqual4Home project</span></a> where he fabricates IoT prototypes for researchers and private companies.</em></p>
