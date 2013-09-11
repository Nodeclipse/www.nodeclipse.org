---
layout: share
title: Headless Webkits
---

### {{ page.title }}

<p class="meta">31 August 2013</p> by Paul Verest

NOTE: This is [open-source article, that you can extend](https://github.com/Nodeclipse/www.nodeclipse.org/tree/gh-pages/_posts).

Node.js is not the only software that uses Google Chrome V8 engine.

[PhantomJS](<http://phantomjs.org/) is a headless WebKit scriptable with a JavaScript API.
 It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.

<http://phantomjs.org/>

```javascript
	console.log('Loading a web page');
	var page = require('webpage').create();
	var url = 'http://www.phantomjs.org/';
	page.open(url, function (status) {
	    //Page is loaded!
	    phantom.exit();
	});
```	
	
	