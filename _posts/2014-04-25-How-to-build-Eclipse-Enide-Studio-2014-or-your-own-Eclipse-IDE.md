---
layout: share
title: How to build Eclipse, Enide Studio 2014 or your own Eclipse IDE
date: 2014-04-25
categories: [eclipse,enide,studio,2014,build]
---


## {{ page.title }}

<p class="meta">{{ page.date }}</p> by Paul Verest

Hi All

(Note: If you are looking for released versions, check <http://www.nodeclipse.org/updates/>)

You can get all Eclipse distribution from <http://download.eclipse.org/eclipse/downloads/>.  
They are result of EPP Eclipse Packaging Project <http://www.eclipse.org/epp/>.  
While the project page is not updated for 3 years, earlier in 2014 they made maven-based [CI build](https://hudson.eclipse.org/hudson/) for all Eclipse distribution.

Here is repo that was used to build Enide Studio 2014
<https://github.com/Nodeclipse/org.nodeclipse.epp.packages>.
Get it with 

`$ git clone https://github.com/Nodeclipse/org.nodeclipse.epp.packages.git`
		
It is clone of `http://git.eclipse.org/gitroot/epp/org.eclipse.epp.packages.git` Eclipse repository as you can see from README.
And it can be updated any time

`$ git remote add eclipse http://git.eclipse.org/gitroot/epp/org.eclipse.epp.packages.git`
`$ git pull eclipse`

Check with

`$ git remote --verbose`

I Added:

`- enide.package.standard`

that is command to build is  

`mvn clean package -Penide.package.standard`

If you have time to play with this heavy build, take a look around.

Once again I am going to look inside after 0.15.
And actually better wait for Eclipse 4.4.0.RC0 will come soon,
that would be Enide Studio prerelease version.

The build is not 100% successful on Windows  (see <https://bugs.eclipse.org/bugs/show_bug.cgi?id=426416>)

After build packages are not zipped, so you can run directly.

Actually you can get similar result by running [Nodeclipse CLI Installer](http://marketplace.eclipse.org/content/nodeclipse-cli-installer)

`nci new from luna to /progs/eclipse-diy-luna/`

But with maven build you can get more configuration option, e.g. what plugins to be bundled.
Do your own, or make one more distribution for Nodeclipse/Enide.

