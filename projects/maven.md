---
layout: home
title: Nodeclipse/Enide Maven for Eclipse - launch build for that `pom.xml`
---

# Maven for Eclipse (by Nodeclipse/Enide)

<p></p>

GitHub: <https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.enide.maven> 

Read description on  
Marketplace: <http://marketplace.eclipse.org/content/maven>

Support: <https://github.com/Nodeclipse/nodeclipse-1/issues>

Maven lives at <http://maven.apache.org/>

## Tomcat, Jetty

TODO: Tomcat, Jetty configuration example, see GitHub README for links

## Android with Maven build

1. Make sure you have Maven 3.1.1+ `mvn -v`
2. and Android SDK is installed. (`android` should launch SDK Manager.)
3. add following pom.xml, change `groupId`, `artifactId`

	<?xml version="1.0" encoding="UTF-8"?>
	<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
	
	    <modelVersion>4.0.0</modelVersion>
	    <groupId>com.android.example</groupId>
	    <artifactId>greeting</artifactId>
	    <version>1.0-SNAPSHOT</version>
	    <packaging>apk</packaging>
	
	    <dependencies>
	        <!--  from Maven Central
	        <dependency>
	            <groupId>com.google.android</groupId>
	            <artifactId>android</artifactId>
	            <version>4.2.2</version>
	            <scope>provided</scope>
	        </dependency>
	        -->
	        <!--  from local Maven repository using maven-android-sdk-deployer -->
	        <dependency>
	            <groupId>android</groupId>
	            <artifactId>android</artifactId>
	            <version>4.4.2_r3</version>
	            <scope>provided</scope>
	        </dependency>
	        </dependencies>
	
	    <build>
	        <finalName>${project.artifactId}</finalName>
	        <sourceDirectory>src</sourceDirectory>
	        <pluginManagement>
	            <plugins>
	                <plugin>
	                    <groupId>com.jayway.maven.plugins.android.generation2</groupId>
	                    <artifactId>android-maven-plugin</artifactId>
	                    <version>3.8.2</version>
	                    <extensions>true</extensions>
	                </plugin>
	            </plugins>
	        </pluginManagement>
	        <plugins>
	            <plugin>
	                <groupId>com.jayway.maven.plugins.android.generation2</groupId>
	                <artifactId>android-maven-plugin</artifactId>
	                <configuration>
	                    <sdk>
	                        <platform>19</platform>
	                    </sdk>
	                </configuration>
	            </plugin>
	        </plugins>
	    </build>
	</project>
	 
4. Right-click pom.xml, select Run As -> mvn package  
or run `mvn package` from command line
5. If build fails over missing android.jar

``` 
git clone https://github.com/mosabua/maven-android-sdk-deployer.git
mvn install -P 4.4
```

Need to change `<groupId>com.google.android</groupId>` into `<groupId>android</groupId>`  
read more at <https://github.com/mosabua/maven-android-sdk-deployer>

### Links

1. <https://code.google.com/p/maven-android-plugin/wiki/GettingStarted>
2. <http://www.vogella.com/tutorials/AndroidBuildMaven/article.html>
3. <http://books.sonatype.com/mvnref-book/reference/android-dev.html>

[Edit this page](https://github.com/Nodeclipse/www.nodeclipse.org/blob/gh-pages/projects/maven.md)
