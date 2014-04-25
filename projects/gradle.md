---
layout: home
title: Nodeclipse/Enide Gradle for Eclipse - build C/C++, Java, Groovy, Android projects in Eclipse
---

# Gradle for Eclipse (by Nodeclipse/Enide)

<p></p>

<a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1512180" 
title="Drag and drop into a running Eclipse/Enide Studio menu area to install/update Nodeclipse/Enide Gradle">
  <img src="http://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png"/>
</a>

Marketplace: <http://marketplace.eclipse.org/content/gradle>

GitHub: 

- Main: <https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.enide.gradle> 
- Editor: <https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.enide.editors.gradle> 

Support: <https://github.com/Nodeclipse/nodeclipse-1/issues>

Minisite: <http://www.nodeclipse.org/projects/gradle>
( GitHub README has some more information )

<script type="text/javascript">
       url_site = 'http://marketplace.eclipse.org/node/1512180';
</script>
<script src="http://marketplace.eclipse.org/sites/all/modules/custom/eclipse_drigg_external/js/button.js" type="text/javascript"></script>

## Note

Do not confuse with
<a href="http://marketplace.eclipse.org/content/gradle-integration-eclipse">Gradle Integration for Eclipse by Pivotal (feature name is Gradle IDE)</a>.

Both project are included in [Gradle IDE Pack](http://marketplace.eclipse.org/content/gradle-ide-pack).

### Design differences

Pivotal Gradle IDE uses [Gradle Tooling API, see Chapter 62 of User Guide](http://www.gradle.org/docs/current/userguide/embedding.html).
This is recommended integration by GradleWare.
In contrast Enide Gradle launches `gradle` executable similar how you do from command line. (And like in [Enide Maven](/projects/maven))
The API is simpler, just as what you see from `gradle -h`, but of course it will not give access to underlying model as with Tooling API.

Since 0.15 `--daemon` option is enabled by default [see Chapter 19. The Gradle Daemon](http://www.gradle.org/docs/current/userguide/gradle_daemon.html).
And as Tooling API also uses Gradle Deamon, the performance is similar: i.e. a bit longer first run, second run is faster and optimized.
Read also about [incremental builds](http://forums.gradle.org/gradle/topics/faster_incremental_builds).

### Using together

With Pivotal Gradle IDE .project file is to have 
<pre><code>    &lt;nature&gt;org.springsource.ide.eclipse.gradle.core.nature&lt;/nature&gt;
</code></pre>
that you get with File -> New -> Project -> Gradle / Gradle Project
or File -> Import -> Gradle / Gradle Project

With Enide Gradle build.gradle file inside project would be enough.
It can be created  with Pivotal Gradle IDE; or by adding build.gradle file to other project (e.g. Maven or C/C++) or even outside of Eclipse, e.g. with command line 

<pre><code>    $ gradle eclipse
</code></pre>

<strong>Hints</strong>:
When the same Gradle version is configured in Pivotal Gradle IDE, Enide Gradle and/or on system PATH, then daemon is reused. That will make build and task execution faster. <a href="http://stackoverflow.com/questions/23259385/is-there-way-to-connect-to-gradle-daemon-launched-by-gradle-tooling-apis-from-co">Stackoverflow question</a> -> <a href="http://www.gradle.org/docs/current/userguide/gradle_daemon.html#reusing_daemons">Chapter 19</a>.

Example:
<pre> 
Preferences ->
  Gradle ->
    Gradle distribution - Folder D:\Progs\gradle\gradle-1.11
  Gradle Enide->
    Gradle home to use D:\Progs\gradle\gradle-1.11
</pre>

