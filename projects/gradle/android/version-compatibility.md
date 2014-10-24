---
layout: gradle
title: Nodeclipse/Enide Gradle for Eclipse - Android
---

# Gradle for Eclipse - Android

<p></p>

Back to [Android](./) page

####  Android Gradle Plugin and	 Gradle Version Compatibility

Android Gradle Plugin requires certain Gradle version (as of October 2014):

<!--
 Android Studio	 Android Gradle Plugin	 Gradle
 0.9.+ (still in development)	 0.14+ (still in development)	 2.1
 0.8.11+	 0.13+, 0.12+	 2.1 (for plugin 0.13; for 0.12 use 1.10-1.12)
 0.8.0 - 0.8.10	 0.12+	 1.10 - 1.12
 0.6.0, 0.6.1+	 0.11+	 1.10 - 1.12
 0.5.8 - 0.5.9	 0.9, 0.10	 1.10 - 1.12 (1.12 requires plugin 0.10)
 0.5.0 - 0.5.7	 0.9	 1.10, 1.11
 0.4.3 - 0.4.6	 0.7, 0.8	 1.9, 1.10 (required for plugin 0.8)
 0.4.0 - 0.4.2	 0.7	 1.9
 0.3.0 - 0.3.7	 0.6 	 1.8
 0.2.0 - 0.2.13	 0.5	 1.7
-->

<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">
<tbody><tr><td style="text-align:center;width:262px;height:26px">&nbsp;<b>Android Studio</b></td><td style="text-align:center;width:210px;height:26px"><b>&nbsp;Android Gradle Plugin</b></td><td style="text-align:center;width:299px;height:26px"><b>&nbsp;Gradle</b></td></tr>
<tr><td><i>&nbsp;0.9.+ (still&nbsp;in development)</i></td><td><i>&nbsp;0.14+ (still&nbsp;in development)</i></td><td><i>&nbsp;2.1</i></td></tr>
<tr><td>&nbsp;<b>0.8.11+</b></td><td><b>&nbsp;0.13+</b></td><td><b>&nbsp;2.1</b></td></tr>
<tr><td>&nbsp;0.8.0 - 0.8.11+</td><td><b>&nbsp;0.12+</b></td><td><b>&nbsp;1.10 - 1.12</b></td></tr>
<tr><td style="text-align:left;width:262px;height:19px">&nbsp;0.6.0, 0.6.1+</td><td style="width:210px;height:19px">&nbsp;0.11+</td><td style="width:299px;height:19px">&nbsp;1.10 - 1.12</td></tr>
<tr><td>&nbsp;0.5.8 - 0.5.9</td><td>&nbsp;0.10</td><td>&nbsp;1.12</td></tr>
<tr><td>&nbsp;0.5.8 - 0.5.9</td><td>&nbsp;0.9</td><td>&nbsp;1.10 - 1.12</td></tr>
<tr><td style="width:262px;height:19px">&nbsp;0.5.0 - 0.5.7</td><td style="width:210px;height:19px">&nbsp;0.9</td><td style="width:299px;height:19px">&nbsp;1.10, 1.11</td></tr>
<tr><td style="width:262px;height:19px">&nbsp;0.4.3 - 0.4.6</td><td style="width:210px;height:19px">&nbsp;0.8</td><td style="width:299px;height:19px">&nbsp;1.10</td></tr>
<tr><td style="width:262px;height:19px">&nbsp;0.4.3 - 0.4.6</td><td style="width:210px;height:19px">&nbsp;0.7</td><td style="width:299px;height:19px">&nbsp;1.9, 1.10</td></tr>
<tr><td style="width:262px;height:19px">&nbsp;0.4.0 - 0.4.2</td><td style="width:210px;height:19px">&nbsp;0.7</td><td style="width:299px;height:19px">&nbsp;1.9</td></tr>
<tr><td style="width:262px;height:19px">&nbsp;0.3.0 - 0.3.7</td><td style="width:210px;height:19px">&nbsp;0.6&nbsp;</td><td style="width:299px;height:19px">&nbsp;1.8</td></tr>
<tr><td style="width:262px;height:19px">&nbsp;0.2.0 - 0.2.13</td><td style="width:210px;height:19px">&nbsp;0.5</td><td style="width:299px;height:19px">&nbsp;1.7</td></tr>
</tbody></table>

Refs: [1](http://tools.android.com/tech-docs/new-build-system/version-compatibility)