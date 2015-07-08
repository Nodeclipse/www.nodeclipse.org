---
layout: nil
title: Nodeclipse -- Java Start
---

<p></p>

{% include navigation-links.html %}

# Java Start

Once you got JDK, you usally need to get Maven and/or Gradle as well as Tomcat server.

[Download Maven](http://maven.apache.org/download.cgi) and extract into a folder, e.g. `D:\Progs\maven\apache-maven-3.3.3\`

[Download Gradle](http://gradle.org/) and extract into a folder, e.g. `D:\Progs\gradle\gradle-2.5\`

[Download Tomcat version](http://tomcat.apache.org/whichversion.html) you need. 

Update environment variables. Create

- `JAVA_HOME`
- `MAVEN_HOME`
- `GRADLE_HOME`
- `TOMCAT_HOME`

and mofidy

`Path` - put somewhere inbetween (e.g. after system tools) `bin` folders for all needed. 

`%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%GRADLE_HOME%\bin;%TOMCAT_HOME%\bin;`
