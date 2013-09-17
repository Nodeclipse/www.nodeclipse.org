---
layout: share
title: CoffeeScript Spaces and Tabs
date: 2013-09-17
categories: [coffee, eclipse, nodeclipse, inide, studio, monster]
---

### {{ page.title }}

<p class="meta">17 September 2013</p> by Paul Verest

Do you see any problem with CoffeeScript code in this snippet?

![](/img/share/monster/Coffee-SpacesTabs.PNG)

Any catches?

	class SpacesTabs
	 constructor: (@name) ->
	 hi: ->
		hi2: ->
	 
	 say: ->
	  say2: ->

Well you might if you look at resulting JavaScript.

![](/img/share/monster/Coffee-SpacesTabs-Coffee_vs_JS_comparison_underlined.PNG)

`hi2` and `say2` produced quite different result, though at the same second level.

The reason is that coffeescript compiler treats spaces and tabs in the same way.
And it just counts number of spaces or tabs to define level within object. 

Hopefully now on you will never spend time on such strange behavior.

![](/img/share/monster/Eclipse-Preferences-Editors-TextEditors.PNG)

### Resources

[Enide Monst(e)r](/enide/monster) is not yet released.

See sources as <https://github.com/Nodeclipse/org.nodeclipse.examples>

