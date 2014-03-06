---
layout: share
title: Android on PC
date: 2014-03-04
categories: [android,windows,pc,run,test]
---


## {{ page.title }}

<p class="meta">{{ page.date }}</p> by Paul Verest


Blue stack was the first to make software to run Android apps on Windows.
Now they have grown big, have partner like Intel, big investors.

I could not install App Player, and as researched further I looked for alternatives:

<http://alternativeto.net/software/bluestacks--alpha-/>

- Android SDK
- Android-x86, read on the site
- [AndroVM](http://androvm.org) and [Genymotion](http://www.genymotion.com/) are related.
- Windroy, tried
- YouWave, read on the site (not free, 15-20$)

<http://www.makeuseof.com/tag/emulate-android-on-your-desktop-using-windroy/>  
<http://www.makeuseof.com/tag/how-to-manually-install-side-load-apps-on-your-android-device/>

### BlueStacks

![](http://www.bluestacks.com/images/pic_c_13.png)

from <http://www.bluestacks.com/technology.html>

Yes, second day I finally managed to get distribution from official site, not from a row of of unknown Chinese companies
 that budle it together with their soft and advertisements. 
I am in China, so links like <http://bit.ly/bstkdnldpage> are blocked (along with Youtube, Facebook, Twitter, and occasionally Google).

Direct link: <http://cdn.bluestacks.com/public/beta-1/China/BlueStacks_HD_AppPlayerICS_setup.msi>

Very mature software. But it is only game oriented. And [self-opinionated](http://dictionary.cambridge.org/dictionary/british/self-opinionated).
The first day it started self-update without asking me, and froze for 30+ minutes. (Meanwhile I continued looking around.)
I needed to restart, but then the same. On other PC it required to update Intel driver, which failed to install.

C'est la vie, very popular software (they already have 12 millions downloads) commands you, does not listen to you.
No configurations. All Android files in some [for me] unknown formats: `.elf`, `.fs`.

Quote:
> Download App Player for free while it remains in beta.

### Android SDK

<http://developer.android.com/sdk/index.html>

Is used by developers by maybe a little sophisticated task to install for QA engineer
 (e.g. installing JDK and Apache Ant)

### Android-x86

<http://www.android-x86.org/>

Popular open source project. 40k weekly downloads from [Sourceforge](https://sourceforge.net/projects/android-x86).

Latest version Android-x86 4.4-RC1 (KitKat-x86)   2014/02/14

Download is `.iso`  image and you need virtual machine supervisor like VirtualBox, VMware, or install on real PC/notebook.

### AndroVM

<http://androvm.org>

Latest news (from  June 18, 2013 by Dan) asks you to download from genymotion.com
Sources are at <https://github.com/androvm> (check brenches other than `master`).

### Genymotion

<http://www.genymotion.com/> is part of <http://www.genymobile.com/en/> offerings.

> Genymotion is the next generation of the AndroVM open source project, already trusted by 900,000 developers.
Free, 99 €, 299 €. requires registration.

Requires VirtualBox or comes with it bundled. 

User must register to download Genymotion software,
Within Genymotion must to login to see images (it took me 1 hour
 to [download](https://cloud.genymotion.com/page/launchpad/download/) 200MB image in China).

There is Eclipse plugin, that I could not install (network time-outs).

<a href="/img/android/genymotion-overview.PNG">
<img src="/img/android/genymotion-overview.PNG" width="700" height="600" /></a>            	

### Windroy

<http://windroy.com/>

Very rough, not open source, support seems to be only through Chinese forum.
Setting resolution is half year old feature. 

However your apk become Windows exe process. It is not emulation. It is execution.

<a href="/img/android/windroy-overview.PNG">
<img src="/img/android/windroy-overview.PNG" width="700" height="300" /></a>            	

**Windroy Usage**

copy .apk to `windroy_root\system\app` 
	
	set WINDROY_RESOLUTION=800x600
	set WINDROY_RESOLUTION=800x1000
	android.exe
	android-stop.exe

  	