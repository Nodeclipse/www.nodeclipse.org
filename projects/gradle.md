---
layout: home
title: Nodeclipse/Enide Gradle for Eclipse - build C/C++, Java, Groovy, Android projects in Eclipse
---

# Gradle for Eclipse (by Nodeclipse/Enide)

<p></p>

GitHub: 
- Main: <https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.enide.gradle> 
- Editor: <https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.enide.editors.gradle> 

Marketplace: <http://marketplace.eclipse.org/content/gradle>

Support: <https://github.com/Nodeclipse/nodeclipse-1/issues>

- Minisite <http://www.nodeclipse.org/enide/gradle/>
( GitHub README has more information )

## Note

Do not confuse with
<a href="http://marketplace.eclipse.org/content/gradle-integration-eclipse">Gradle Integration for Eclipse by Pivotal (feature name is Gradle IDE)</a>.

Both project are included in [Gradle IDE Pack](http://marketplace.eclipse.org/content/gradle-ide-pack).

### Design differences

Pivotal Gradle IDE uses [Gradle Tooling API, see Chapter 62 of User Guide](http://www.gradle.org/docs/current/userguide/embedding.html).
This is recommended integration by GradleWare.
In contrast Enide Gradle launches `gradle` executable similar how you do from command line. (And similar to [Enide Maven](/projects/maven))
The API is simpler, just as what you see from `gradle -h`, but of course it will not give access to underlying model, as Tooling API
Since 0.15 `--daemon` option is enabled by default [see Chapter 19. The Gradle Daemon](http://www.gradle.org/docs/current/userguide/gradle_daemon.html).
And as Tooling API also uses Gradle Deamon, the performance is similar: i.e. a bit longer first run, second run is faster and optimized.
Read also about [incremental builds](http://forums.gradle.org/gradle/topics/faster_incremental_builds).

