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
 Currently it JavaScript and Java, and has much more Eclipse plugins (JavaScript: PhantomJS, Java 8 Nashorn, Vert.x, MongoDB Shell integration,
 CoffeeScript, Maven, Gradle)
 and Node.js based utils like Nodeclipse CLI to prepare import project or install eclipse plugins from command line.
 Nodeclipse became #1 [Top 10 NEW Plugins for 2013](http://www.eclipse.org/community/eclipse_newsletter/2013/december/article2.php)  
 And now has [Enide Studio](http://www.nodeclipse.org/enide/studio/2014/) -
 stand alone IDE with around 5000 monthly [downloads](https://sourceforge.net/projects/nodeclipse/).
 We are looking for sponsors or co-founders to join forces and move the project into something bigger, that Nodeclipse can help with. 

All that was enabled by [Bintray](https://bintray.com/) reliable binaries distribution service.
Once we started using Bintray, we got that updates issues solved. (And started caring more about other things.)
 
Initially in [@Nodeclipse](https://github.com/nodeclipse/) we had binaries just together
 with site content of <http://www.nodeclipse.org>,
that were making the [git repository](https://github.com/Nodeclipse/www.nodeclipse.org/tree/gh-pages/updates-050)
heavier every releases.

Then I think it was while communicating with [@satyagraha](https://github.com/satyagraha/gfm_viewer)
 over [GitHub Flavored Markdown Viewer](https://github.com/satyagraha/gfm_viewer) project,
 I heard about [Bintray](https://bintray.com/),
 that was at that time in beta. But the core, the serving file was of cause done and stable.
 
While uploading required using command line (and there were several dozen files to be uploaded), it was laborious.
But why do that upload then check all files are in place etc?

The speed. I am currently in China where Internet is different: there is no Google server (google search take 5-10 seconds, 
and they are often time-outed; there are no Facebook and Twitter as well), but most importantly for software development topics
is that 

1. SourceForge http://sourceforge.net/ is very slow, some projects can't be even open (guess they are phisically on different servers),
the speed can be 0 to 6KB/s  
2. GitHub http://github.com/ is quicker ~10KB/s, very rarely unavailable, but there is problem with big file.
[GitHub Flavored Markdown Viewer](https://github.com/satyagraha/gfm_viewer) has 6MB file which download was almost always lost,
Eclipse seems to be able to continue install, but it can't resume file download.
(From very early GitHub have been saying that they  are optimized for small files. And for 2-3 years
they had their binary download service just closed)
3. Bintray https://bintray.com/ is 15-30KB/s, that is almost 3 times quicker than GitHub 

I would be glad to get other numbers from other regions,
 but nobody from Nodeclipse users have yet complained about speed or shared download speed numbers.
 
Nodeclipse repository <https://bintray.com/nodeclipse/nodeclipse/nodeclipse-1> combines other Nodeclipse project as well
like Markdown Editor (Markdown is standard for Node.js docs), GFM Viewer, JSHint Integration, Restful client, ANSI console, Icons Editor.
See [history](http://www.nodeclipse.org/history) to learn more.

Nodeclipse Updates repository `http://www.nodeclipse.org/updates/` (that is the same URL as [download page](http://www.nodeclipse.org/updates/))
is actually composite repository that includes Eclipse Mylyn, Eclipse EGit, Eclipse m2e Maven Integration and Pivotal Gradle Integration.

Having all required plugins in one p2 repository makes it quicker/convenient for end users and enables
guaranteed/stable build for [Enide Studio](http://www.nodeclipse.org/enide/studio/2014/) (Eclipse-based stand-alone distribution).

However composite repositories are slower, as Eclipse is doing sequential reading of repositories.
(You as user can notice `fetching children from...` message in Status bar.
If that is problem, you can always install directly from Bintray URL that varies with release
and is mentioned at <http://www.nodeclipse.org/updates/>).
Note: Eclipse has its own CDN from old times, and their repositories are huge, e.g.
Eclipse repository index file can be as big as several MB.

For several months Bintray has UI for new version upload, that lets drag-and-drop repository zip file and explode it afterwards. 
(no more need to check that all files are in place)

On top of base binaries serving Bintray has nice services:

- you can follow interesting projects and user, thus you can be notified about [Nodeclipse releases](https://bintray.com/nodeclipse)
even before it is announced on <http://www.nodeclipse.org/>
- great [stats for downloads](https://bintray.com/nodeclipse/nodeclipse/nodeclipse-1/view/statistics) per version, downloads per country view.
