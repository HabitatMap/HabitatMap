---
layout: post
title: Raspberry Pi AirBeam Data Logger
date: "2018-05-21"
featured: false
author: Sam Groveman and Jin Y Shin
image: /images/uploads/raspberrypiairbeam2datalogger_exacto.jpg
category: Sensors & Instruments
tag:
  - education
  - instruments
  - open-source
---

<p>Every semester I tell my students at Medgar Evers College that to be a great research chemist, you need to be a bit of everything: a bit plumber, a bit electrician, and especially a bit coder. Environmental research chemists rely on equipment and tools that are essential to their work. The better you can use, maintain, and understand those tools the better and more effective you will be as a researcher. Our research project deploying AirBeam2s provides another excellent example of why this is the case.</p>
<p>The goal of our project is to analyze air quality at various locations around New York City. Students will analyze PM1, PM2.5, and PM10 concentrations around their homes, the buildings here at Medgar Evers College, near airports, in subway stations, and anywhere else of interest. We will then aggregate the air quality data and combine it with data on weather and traffic patterns to see what conclusions can be drawn.</p>
<p>While we believe compelling data will be obtained, our project is focused more on educating students in proper environmental science techniques than groundbreaking results. As such, finding an appropriate air quality sampler was our first concern. The <a href="https://www.habitatmap.org/airbeam" target="_blank">AirBeam2</a> coupled with the <a href="http://aircasting.org/" target="_blank">AirCasting platform</a> matched nearly all our criteria: it was inexpensive, durable, and easy to use. Unfortunately, AirBeam2 had one major drawback for our application, it requires a cellular or Wi-Fi connection to publish measurements to the cloud. Given that our project calls for placing AirBeam2s at locations that may not have Wi-Fi or cellular network connectivity and leaving them for days or weeks at a time, this was a problem.</p>

<p>This is where being a little bit of everything comes in handy. Instead of purchasing a significantly more expensive air quality monitoring system that included methods for logging data locally, we developed a simple and inexpensive way to extend local data logging options to the AirBeam2. <a href="https://github.com/ShVerni/AirBeamLogger" target="_blank">We plugged the AirBeam2 into a Raspberry Pi single board computer</a>—specifically the Raspberry Pi Zero W which costs $35 for a complete bundle—and used the Raspberry Pi to log and store readings from the AirBeam2. The Raspberry Pi also broadcasts a Wi-Fi network, which will enable our students to retrieve the data and control the data logging system.</p>
<p>We were able to save hundreds if not thousands of dollars in equipment costs by customizing the AirBeam2 to meet our specific needs. Science and technology depend heavily on one another, this experience could apply to literally any device we use. Diversifying your skillset has real, tangible benefits as exemplified here, where a little Python coding knowledge allowed us to stretch our budget further, conduct our research more efficiently, and be more effective educators and scientists.</p>
<p><em>Dr. Sam Groveman is a research associate and adjunct professor at Medgar Evers College in the Department of Chemistry and Environmental Science where he engages in research with faculty and students focusing on chemistry and the environment. Even so, he still finds time to indulge his interests in computers and hobby electronics.</em></p>
<p><em>Dr. Jin Y. Shin is an associate professor in the Department of Chemistry and Environmental Science at Medgar Evers College where he is exploring greenhouse gas emissions associated with the nitrogen and carbon cycle by baselining the emissions of carbon dioxide and nitrous oxide in marsh tidal wetlands to see the effect of sea level change.</em></p>
