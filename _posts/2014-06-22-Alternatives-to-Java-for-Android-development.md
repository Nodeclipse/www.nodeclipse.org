---
layout: share
title: Alternative to Java for Android development
date: 2014-06-22
categories: [android,java,swift,xtend,groovy]
---


## {{ page.title }}

<p class="meta">{{ page.date }}</p> by Paul Verest

Hi All, 

With Apple introducing [Swift programming language](https://developer.apple.com/swift/) for iOS development,
many would wondered what for Android. I did research:


[Stackoverflow question "Alternatives to Java for Android development"](http://stackoverflow.com/questions/2419556/alternatives-to-java-for-android-development)
is closed 1 year ago. Mentioned are C++ (NDK), [Mirah][1] (JRuby), [Xtend][2], C# (abandomed Mono)

Groovy is not mentioned, but now with Gradle that is Groovy based,
it should be listed.

Note about Swift: 

1. Swift is not new language. We live in decade when creating new language is usual stuff.
But much interesting results happens when old language is applied to do new things.
(Like JavaScript for server side and scripting)
2. Swift is more like Java with Lambda, JavaScript and CoffeeScript
3. Swift is in beta now (as XCode IDE with its support) 
4. Swift is closed-source, some alternative application and IDE are unlikely to arrive.
5. You still need to buy Mac, and developer license from Apple.   

## C++

C++ has been long ago via [NDK](https://developer.android.com/tools/sdk/ndk/). It is just not Java/JVM based.

## Xtend

[Xtend][2] is naturally goes well with Eclipse IDE and maven, also there are:

 - <https://github.com/oehme/xtend-gradle-plugin>
 - <https://github.com/svenlange/intellij-xtend-plugin>


  [1]: http://www.mirah.org/
  [2]: http://www.eclipse.org/xtend
  
  
## Groovy

[Groovy](http://groovy.codehaus.org/) on Android 
presentation by Cédric Champeau
<https://speakerdeck.com/melix/groovy-on-android>  
[PDF](https://speakerd.s3.amazonaws.com/presentations/e8e58fc0cdee0131f20616308848c4b8/Groovy_on_Android.pdf)


And blog 
[Groovy on Android](http://melix.github.io/blog/2014/06/grooid.html), 
[Groovy on Android, technical details](http://melix.github.io/blog/2014/06/grooid2.html)

GitHub: <https://github.com/melix/groovy-android-gradle-plugin>  

Quotes from blog:  
"Some people are already asking for a {swift} alternative for Android."

## Scala

[Scala](http://www.scala-lang.org/) was mentioned in comment.

## Final word

Note that final word will be by Google. (Just like it was for Maven vs Gradle).  
It has now deep pockets with [Go](http://golang.org/) and [Dart](https://www.dartlang.org/), and actually Java 8 would give different taste to Android evelopment.
 
