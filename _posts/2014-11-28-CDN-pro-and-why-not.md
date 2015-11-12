---
layout: share
title: CDN pro and why not
date: 2014-11-28
categories: [hardware,2014]
---


## {{ page.title }}

<p class="meta">{{ page.date }}</p> by Paul Verest

While residing in China I constantly run into websites issues,
that rely on some CDN, that are not present in China.
Particularly Google has no servers in China.
That makes non-optimized pages to load 40s, 70, and up to several minutes.
(While other far sites can be opened within 2-5 seconds.)

pro ad: <http://www.sitepoint.com/7-reasons-to-use-a-cdn/>
why not yet:  <http://zoompf.com/blog/2010/01/should-you-use-javascript-library-cdns>

Solutions:

- <http://css-tricks.com/snippets/jquery/run-javascript-only-after-entire-page-has-loaded/>
- <http://lyncd.com/2009/03/better-google-analytics-javascript/>

Raised issues:

- <https://bugs.eclipse.org/bugs/show_bug.cgi?id=437568>
- <https://github.com/codenvy/sdk/issues/45>