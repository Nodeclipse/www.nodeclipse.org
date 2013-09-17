---
layout: share
title: Headless Webkits
date: 2013-09-11
categories: [coffee]
---

Quick way to get functions list of standard node.js modules with coffee REPL:

	coffee> require 'console'
	{ log: [Function],
	  info: [Function],
	  warn: [Function],
	  error: [Function],
	  dir: [Function],
	  time: [Function],
	  timeEnd: [Function],
	  trace: [Function],
	  assert: [Function],
	  Console: [Function: Console] }
	coffee>