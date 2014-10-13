---
layout: gradle
title: Nodeclipse/Enide Gradle for Eclipse - build C/C++, Java, Groovy, Android projects in Eclipse
---

# Gradle for Eclipse (by Nodeclipse/Enide)

<p></p>

Gradle lives at <http://www.gradle.org/>.

This page introduces to Gradle for Eclipse (Enide Gradle), shows other solutions
gives help and hints links.

<a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1512180" 
title="Drag and drop into a running Eclipse/Enide Studio menu area to install/update Nodeclipse/Enide Gradle">
  <img src="http://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png"/>
</a>

Minisite: <http://www.nodeclipse.org/projects/gradle>
( GitHub READMEs and Marketplace entries have some additional information. )

Marketplace: <http://marketplace.eclipse.org/content/gradle>

GitHub: 

- Main: <https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.enide.gradle> 
- Editor: <https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.enide.editors.gradle> 

Support: 
 - <https://github.com/Nodeclipse/nodeclipse-1/issues>
 - <http://stackoverflow.com/questions/tagged/android+eclipse+gradle>

<script type="text/javascript">
       url_site = 'http://marketplace.eclipse.org/node/1512180';
</script>
<script src="http://marketplace.eclipse.org/sites/all/modules/custom/eclipse_drigg_external/js/button.js" type="text/javascript"></script>

## Gradle Editor

[Editor page](/enide/editors/gradle)

<a href="/enide/editors/gradle">
<img alt="Minimalist Gradle Editor with Nodeclipse EditBx" src="http://marketplace.eclipse.org/sites/default/files/eclipse-color-theme-with-rainbowdrops.png" width="350" height="200" /></a>            	

## Style

[Style](style)

## Android

[Android page](android)

<h4><a name="Importing-from-Android-Studio-into-Eclipse" class="anchor" href="#Importing-from-Android-Studio-into-Eclipse"></a>
Importing from Android Studio into Eclipse</h4>

see dedicated page [Importing from Android Studio into Eclipse](android/Importing-from-Android-Studio-into-Eclipse)

## Templates/dropins

<strong>Templates</strong> (just add build.gradle file to project):

- Naturally <a href="http://marketplace.eclipse.org/content/android-development-tools-eclipse">Android Development Tools for Eclipse</a> are required for Android Development.
 For the latest <code>build.gradle</code> template for classic Android project check
 <a href="https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.enide.editors.gradle/docs/android/build.gradle">gh.c/N/n-1/b/m/o.n.e.e.g/docs/android/build.gradle</a>.
- For the latest <code>build.gradle</code> template for basic Java project check
 <a href="https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.enide.editors.gradle/docs/java/basic/build.gradle">gh.c/N/n-1/b/m/o.n.e.e.g/docs/java/basic/build.gradle</a>.
- [Template for classic Eclipse project](https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.enide.editors.gradle/docs/java/classic/build.gradle)
 (that you create with File -> New -> Java Project)
- For the latest <code>build.gradle</code> template for Node.js/Avatar.js project check
 <a href="https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.ui/templates/hello-world/build.gradle">gh.c/N/n-1/b/m/o.n.ui/templates/hello-world/build.gradle</a>.

## Note Gradle IDE

Do not confuse with
<a href="http://marketplace.eclipse.org/content/gradle-integration-eclipse">Gradle Integration for Eclipse by Pivotal (feature name is Gradle IDE)</a>.
( [Sources on GitHub](https://github.com/spring-projects/eclipse-integration-gradle),
[JIRA tickets for GRADLE component](https://issuetracker.springsource.com/issues/?jql=project+%3D+STS+AND+resolution+%3D+Unresolved+AND+component+%3D+GRADLE+ORDER+BY+priority+DESC) )

Both project are included in [Gradle IDE Pack](http://marketplace.eclipse.org/content/gradle-ide-pack).

<a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1640500" 
title="Drag and drop into a running Eclipse menu area to install/update Gradle IDE Pack">
  <img src="http://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png"/>
</a>

While Enide Gradle let you execute Gradle build and task from `build.gradle` for any project (Gradle, Maven, C/C++)
 [mp](http://marketplace.eclipse.org/content/gradle),
With Pivotal Gradle IDE .project file is to have

    <nature>org.springsource.ide.eclipse.gradle.core.nature</nature>


Result of using together:

<a href="http://marketplace.eclipse.org/sites/default/files/Gradle-IDE-pack1.png">
<img alt="Gradle IDE Pack project" src="http://marketplace.eclipse.org/sites/default/files/Gradle-IDE-pack1.png" width="350" height="200" /></a>            	

On the other hand, some prefer the stability and predictability of generating Eclipse settings over having them managed inside Eclipse with a plugin.

<a href="http://marketplace.eclipse.org/sites/default/files/JavaClassicWithGradle.PNG">
<img alt="Java Classic project with Gradle" src="http://marketplace.eclipse.org/sites/default/files/JavaClassicWithGradle.PNG" width="350" height="200" /></a>            	

### Design differences

Pivotal Gradle IDE uses [Gradle Tooling API, see Chapter 62 of User Guide](http://www.gradle.org/docs/current/userguide/embedding.html).
This is recommended integration by GradleWare.
In contrast Enide Gradle launches `gradle` executable similar how you do from command line. (And like in [Enide Maven](/projects/maven))
The API is simpler, just as what you see from `gradle -h`, but of course it will not give access to underlying model as with Tooling API.

Since 0.15 `--daemon` option is enabled by default [see Chapter 19. The Gradle Daemon](http://www.gradle.org/docs/current/userguide/gradle_daemon.html).
And as Tooling API also uses Gradle Deamon, the performance is similar: i.e. a bit longer first run, second run is faster and optimized.
Daemon can be shared, see below.

Read also about [incremental builds](http://forums.gradle.org/gradle/topics/faster_incremental_builds). 
Since [Gradle 2.1](http://www.gradle.org/docs/current/release-notes#incremental-java-compilation)
there is [Incremental Java compilation](http://www.gradle.org/docs/current/userguide/java_plugin.html#sec:incremental_compile)
that is enabled `options.incremental` (see below). When enabled the first full build will be longer but recompiling should be comparable
to that of IDE. 

	allprojects {
	    tasks.withType(JavaCompile) {
	        options.incremental = true
	    }
	}

### Using together

With Pivotal Gradle IDE `.project` file is to have 
<pre><code>    &lt;nature&gt;org.springsource.ide.eclipse.gradle.core.nature&lt;/nature&gt;
</code></pre>
that you get with File -> New -> Project -> Gradle / Gradle Project
or File -> Import -> Gradle / Gradle Project

With Enide Gradle `build.gradle` file inside project would be enough.
It can be created  with Pivotal Gradle IDE; or by adding build.gradle file to other project (e.g. Maven or C/C++) or even outside of Eclipse, e.g. with command line 

	$ gradle eclipse

<strong>Hints</strong>:
When the same Gradle version is configured in Pivotal Gradle IDE, Enide Gradle and/or on system PATH, then daemon is reused. 
That will make build and task execution faster. 
<a href="http://stackoverflow.com/questions/23259385/is-there-way-to-connect-to-gradle-daemon-launched-by-gradle-tooling-apis-from-co">Stackoverflow question</a> 
-> <a href="http://www.gradle.org/docs/current/userguide/gradle_daemon.html#reusing_daemons">Chapter 19</a>.

Example 1:

	Preferences ->
	  Gradle ->
	    Gradle distribution - Folder D:\Progs\gradle\gradle-1.11
	  Gradle Enide->
	    Gradle home to use D:\Progs\gradle\gradle-1.11

Example 2:

	Preferences ->
	  Gradle ->
	    o Use Gradle wrapper's defaults
	  Gradle Enide->
	    v use wrapper if `gradlew[.bat]` is present (appears after `gradle wrapper`)

In Android Studio <kbd>Ctrl+Alt+Shift+S</kbd> or File -> Project Structure,  
on Project tab check/edit Gradle version. (Yes, of cause Android Studio is using daemon/Tooling API too)

From command line use `--daemon` option
```
gradle build --daemon
```

## Gradle for C/C++

[Edit this page](https://github.com/Nodeclipse/www.nodeclipse.org/blob/gh-pages/projects/gradle/index.md)
	    