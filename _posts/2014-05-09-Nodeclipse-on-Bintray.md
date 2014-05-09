---
layout: share
title: Nodeclipse on Bintray
date: 2014-05-09
categories: [nodeclipse,binaries,bintray]
---


## {{ page.title }}

<p class="meta">{{ page.date }}</p> by Paul Verest

Hi All, 

*This is work in progress. Content will be changed*

[Nodeclipse](http://www.nodeclipse.org/) started in 2012 as effort to make tools for [Node.js](http://www.nodejs.org/)
 development in [Eclipse](http://www.eclipse.org/).
 Currently it has much more Eclipse plugins (CoffeeScript, PhantomJS, Java 8 Nashorn, Maven, Gradle)
 and Node.js based utils like Nodeclipse CLI to prepare import project or install eclipse plugins from command line.
 Nodeclipse became #1 [Top 10 NEW Plugins for 2013](http://www.eclipse.org/community/eclipse_newsletter/2013/december/article2.php)  
 And now has [Enide Studio](http://www.nodeclipse.org/enide/studio/2014/) -
 stand alone IDE with around 5000 monthly [downloads](https://sourceforge.net/projects/nodeclipse/).
 We are looking for sponsors or co-founders to join forces and move the project into something bigger, that Nodeclipse can help with. 

 All that was enabled by [Bintray](https://bintray.com/) reliable binaries distribution service.
 Once we started using Bintray, we got that updates issues solved.
 
<!-- 
When I joined Nodeclipse effort
-->

Initially in [@Nodeclipse](https://github.com/nodeclipse/) we had binaries just together with site content of <www.nodeclipse.org>,
that were making that [git repository](https://github.com/Nodeclipse/www.nodeclipse.org/tree/gh-pages/updates-050) heavier every releases.

Then I think it was that while communicating with [@satyagraha](https://github.com/satyagraha/gfm_viewer)
 over [GitHub Flavored Markdown Viewer](https://github.com/satyagraha/gfm_viewer) project, I heard about [Bintray](https://bintray.com/),
 that was at that time in beta.

Having all required plugins in one p2 repository makes it quicker for end users and enables
guaranteed/stable build for Enide Studio (Eclipse-based stand-alone distribution).

...


