---
layout: share
title: Read Node.js JavaScript sources
date: 2013-10-10
categories: [nodejs, javascript, sources, books]
---

Just it

# Read Node.js JavaScript sources

From [Node: Up and Running book](http://chimera.labs.oreilly.com/books/1234000001808/ch04.html#chap6_id35942512)
 (that is nice book):

	var http = require('http');
	
	var opts = {
	  host: 'www.google.com'
	  port: 80,
	  path: '/',
	  method: 'GET'
	};
	
	var req = http.request(opts, function(res) {
	  console.log(res);
	  res.on('data', function(data) {
	    console.log(data);
	  });
	});
	
	req.end();
	
Then talking about `http.get()`... Well, looking at `http` module sources makes explaining verbose. 	

	exports.get = function(options, cb) {
	  var req = exports.request(options, cb);
	  req.end();
	  return req;
	};
	
Check Nodeclispe built-in Help (press <kbd>F1</kbd>) or [Online Help](https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.help/contents/nodejs.md#nodejs-sources)
on how to get Node.js sources inside Eclipse.

	