---
layout: gradle
title: Nodeclipse/Enide Gradle for Eclipse - Android
---

# Gradle for Eclipse - Android

<p></p>

Back to [Android](./) page

#### Start with Android

You can start by downloading Android SDK, but you would be better off by asking your friends who have been developing
for some years to get Android SDK with all Android images and sources downloaded.
A full pack will be around 10GB of data, it may be too long and troublesome to download it.  

### Command line

Android SDK is enough to create and build Android app. No GUI, just CLI:

	android create project -p AppPAKT -a MainActivity -k com.example.apppaktgv -t android-19

or with new (Maven) layout and gradle files:

	android create project -p AppPAKTGV -a MainActivity -k com.example.apppaktgv -t android-19 -g -v 0.12.+

### Download Eclipse ADT

see [developer.android.com - Installing the Eclipse Plugin](https://developer.android.com/sdk/installing/installing-adt.html)

use URL  
`https://dl-ssl.google.com/android/eclipse/`    
or use offline installing from zip archive 
 e.g. [ADT-23.0.4.zip](https://dl.google.com/android/ADT-23.0.4.zip)
(or older [ADT-22.6.3.zip](https://dl.google.com/android/ADT-22.6.3.zip))

### Understanding

Read books, docs, sources, examples.

Take a look at [Android 1.0 docs](http://www.cs.cmu.edu/~srini/15-446/android/android-sdk-linux_x86-1.0_r2/docs/documentation.html).
In the beginning it was amazingly simple to grasp.

Copied [what-is-android.html](docs/what-is-android.html) 1.0b 19 Nov 2008

![](docs/what-is-android_files/system-architecture.jpg)

Refs: [1](https://developer.android.com/sdk/installing/installing-adt.html)