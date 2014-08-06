---
layout: share
title: Eclipse process seems too heavy? Here is the case you wish there was one.md
date: 2014-08-06
categories: [android,java,swift,xtend,groovy]
---


## {{ page.title }}

<p class="meta">{{ page.date }}</p> by Paul Verest

Hi All, 

Eclipse process is generally considered to be heavy. That causes Eclipse leaders,
 who have worked with it for 10 year, to raise eyebrows. For them it is not,
 or at least there are historical reason for every detail. 
 
Like any open source project, that grows while there are contributors to it,
 [Eclipse](http://www.apache.org/) is interested in [attracting](https://www.eclipse.org/community/eclipse_newsletter/2014/july/article3.php)
 new [contributors](https://www.eclipse.org/community/eclipse_newsletter/2014/july/article2.php), so are every team leaders.
 Eclipse as organization is promoting openness and [measuring project health](https://www.eclipse.org/community/eclipse_newsletter/2014/july/article1.php).
 
There are books that teaches how like [Contributing to Eclipse: Principles, Patterns, and Plug-Ins](http://www.amazon.com/Contributing-Eclipse-Principles-Patterns-Plug-Ins/dp/0321205758)
 and [New book: Contributing to the Eclipse project: Principles, Plug-ins and Gerrit Code Review](http://blog.vogella.com/2014/06/05/new-book-contributing-to-the-eclipse-project-principles-plug-ins-and-gerrit-code-review/)
 But the best class of course would be just doing it.

The alternative to process is just having code on GitHub (or other hosting like Google Code, BitBucket).
 Pull Request (PR) is actually doing as code review where proposed changes are discussed before merged.
 
While there are teams that use GitHub quite efficiently, there are projects were authors 

- don't actually in mood of doing any more work on it (including looking on issues)
- don't like other people's ideas and code (well we can't make them like others)
- but some even while enjoying free code hosting (that became very ordinary for open source)
 do frown upon others making derivative work or continuing put aside project.

Comparing to this Eclipse (and [Apache Foundation](http://www.apache.org/)) at least has

- ensuring that project has active maintainer (e.g. Eclipse member company employee devoting part time to open source)
- known time table for release (at least once a year with Eclipse release train, that I personally believe is too slow tempo)
- monitoring and question resolution
- clear criteria and process to retire a project

With [ECT](https://github.com/eclipse-color-theme/eclipse-color-theme) lack of process or agreements
 became issue [#201](https://github.com/eclipse-color-theme/eclipse-color-theme/issues/201#issuecomment-51036576):

Timeline <https://github.com/Nodeclipse/eclipse-color-theme/releases/> , <https://github.com/eclipse-color-theme/eclipse-color-theme/releases>
also seen in [/history page](/history)

```
0.14.0 (2014-05-04) new features by Paul Verest were sent as PR as released on the same day
0.15.0 (2014-05-27) PRs by Pei-Tang Huang merged but were not released, so Paul Verest released again as next version number
0.14.0 (2014-07-15) finally released by @fhd as again 0.14.0, though PR #186 had all documentation files updated
``` 

What was release became labeled as fork.
As earlier release it kept all attributes: id and logo (with added 0.14). 
Once @fhd Felix pretended the release did not exist and released with the same version number, the mess started.
While 0.14.0 had the same feature set as 0.15.0, some users thought of it as being newer, but could update to it.

If you think it was wrong and preferred waiting unknown time for maintainer to do release, 
than you should not have installed "fork" that you don't like.

PR [#186 (fresher PR: 0.14 changes Gradle, Jade, Chromium debugger Editors, bundle RainbowDrops theme)](https://github.com/eclipse-color-theme/eclipse-color-theme/pull/186)
 is merged. The marketplace entry <http://marketplace.eclipse.org/content/eclipse-color-theme-nodeclipse> is already removed.
 And both owners have resurrected from being on silent side.  
Whatever people say, I am satisfied with results (I would do less or nothing at all in such situation in future).
I believe several thousands of users enjoyed new features coming earlier too
and hope ECT owner will release [new features earlier](https://github.com/eclipse-color-theme/eclipse-color-theme/issues/201#issuecomment-51023338). 

> I'm thinking of having a separate nightly build that is continuously released though.

For Nodeclipse users: as ECT 0.14.0 has identical Nodeclipse support as 0.15.0, there is no need for anything.





  