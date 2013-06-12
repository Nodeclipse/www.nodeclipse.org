---
layout: share
title: JavaScript Annotations
---

{{ page.title }}
================

<p class="meta">12 June 2013</p>

# Improving Code Assist

https://github.com/Nodeclipse/nodeclipse-1/issues/7 

You know, [one of the](https://github.com/Nodeclipse/nodeclipse-1/issues) big problem we have in Nodeclipse
 is #7 Improving Code Assist. But this is actually problem of JavaScript language itself.
In statically typed language you already have all needed information right in the code.
Personally I believed that Java is superior language (though I very often used scripting Windows batch, Groovy,
 and recently Node.js utils installed via `npm`), until I read this today

Quote from ["Hackers & Painters" essay by Paul Graham](http://www.paulgraham.com/hp.html)

>	Realizing this has real implications for software design. It means that a programming language should, above all, be malleable. A programming language is for thinking of programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. Static typing would be a fine idea if people actually did write programs the way they taught me to in college. But that's not how any of the hackers I know write programs. We need a language that lets us scribble and smudge and smear, not a language where you have to sit with a teacup of types balanced on your knee and make polite conversation with a strict old aunt of a compiler. 
 
That maid me think "well, maybe it is so. Scripting helps me get results quickly, however the bigger the software,
 the worser is the idea to use non-typed languages".
 
So what for JavaScript?

# JavaScript Annotations

JavaScript already has them in JSDoc, though for JavaScript it is not as standard thing as in Java JavaDoc.

However searching the web, eventhough I found some links they give me impression that there are no such things as JavaScript Annotations

[JSDoc 3](http://usejsdoc.org/) is continuation of JSDoc that died. (There is also [jsdox util](http://jsdox.org/) that compiles JSDoc 3
 into [markdown](http://daringfireball.net/projects/markdown/), that I like:

	$ npm install -g jsdox

)

Most of the JSDoc annotations are for documentation purposes. What could help solve #7 is 
`@param [type] name [description]` and `@returns [{type}] text`

If those `type` values are just basic JavaScript types, there's no big help,
but what if to reference other classes in JavaScript by using relative file name, for example.

Dear Nodeclipse users, just use JSdoc more. Any way it is good practice to document your code any way, and

Wish us good luck!

[Paul Verest](https://github.com/PaulVI), [Nodeclipse team](https://github.com/Nodeclipse)
