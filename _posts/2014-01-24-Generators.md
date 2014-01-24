---
layout: share
title: Generators
date: 2014-01-24
categories: [koa,javascript,harmony,generators]
---


## {{ page.title }}

<p class="meta">{{ page.date }}</p> by Paul Verest

When looking at [Koa](https://github.com/koajs/koa) I stumbled upon installation:

```
$ npm install koa
```

  To use Koa you must be running __node 0.11.9__ or higher for generator support, and must run node(1)
  with the `--harmony` flag. If you don't like typing this, add an alias to your shell profile:

```
alias node='node --harmony'
```

That lead me to research [generators](http://wingolog.org/archives/2013/05/08/generators-in-v8).

And discover great site like <http://callbackhell.com/> that advises to

- Name your functions
- Keep your code shallow
- Modularize!

More links :

[What are Promises?](http://domenic.me/2012/10/14/youre-missing-the-point-of-promises/)

[Harmony generators and promises for Node.js async fun and profit](http://blogs.atlassian.com/2013/11/harmony-generators-and-promises-for-node-js-async-fun-and-profit/)


<http://wiki.ecmascript.org/doku.php?id=harmony:generators#references>

<!-- 
![](http://wiki.ecmascript.org/lib/exe/fetch.php?w=&h=&cache=cache&media=harmony:es6_generator_object_model_3-29-13.png)
-->

<a href="http://wiki.ecmascript.org/lib/exe/fetch.php?w=&h=&cache=cache&media=harmony:es6_generator_object_model_3-29-13.png">
<img src="http://wiki.ecmascript.org/lib/exe/fetch.php?w=&h=&cache=cache&media=harmony:es6_generator_object_model_3-29-13.png" width="600" height="800" /></a>            	

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7>
