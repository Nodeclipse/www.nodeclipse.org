---
layout: studio
---

Enide 2015

Home page <http://www.nodeclipse.org/enide/2015>

<http://www.nodeclipse.org/enide/2015/README_2015-7>

Check downloaded package sizes:  
07/06/2015  06:18 PM       384,655,028 Enide-2015-7-linux-gtk-x64-20150706.zip  
07/06/2015  06:20 PM       384,022,254 Enide-2015-7-macosx-x64-20150706.zip  
07/06/2015  06:21 PM       382,041,721 Enide-2015-7-windows-x32-20150706.zip  
07/06/2015  06:23 PM       382,498,769 Enide-2015-7-windows-x64-20150706.zip  

## Enide 2015-7 README

Enide 2015 is Eclipse-based Java and JavaScript IDE.
Plugin set was started from Eclipse IDE for Eclipse Committers  (previously known as Eclipse SDK/Standard),
then adding Maven (m2e) and Gradle (Gradle IDE pack) tools,
Nodeclipse and Enide plugins of 0.17 release train,
AngularJS and TernIDE 0.10
and general XML, Web, Servers(), Terminal, Connector to Jenkins and other goodies.

In other words it is Eclipse IDE for Java EE Developers
without old stuff like JSP and others that make it too heavy 
that has new stuff like Gradle, AngularJS and Node.js 

The intention is to speed up downloading (1 big file instead of many small) 
and save you some time.

### Special about 2015-7

1. Again building for Linux, Mac and Windows x62, x32.  

2. On Mac check Eclipse documentation before upgrading this package. 

### Instructions

0. If you don't have, get latest Node.js <http://www.nodejs.org/download/>

1. If you don't have, download & install latest JDK 8

 <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
 For example "Java Platform (JDK) 8u45"

2. [Download Enide 2015 for your operating system](https://sourceforge.net/projects/nodeclipse/files/Enide-2015/)

3. Extract Enide-*.zip into folder where you keep our tools, e.g. `D:\Progs\` or `/usr/local/bin`

4. Start `eclipse.exe` from `eclipse` folder, e.g. <code>D:\Progs\Enide-2015-7-windows-x64\eclipse\eclipse.exe</code>

5.1 If you have error messages like

	....\jre\....
	
	That means you don't have JDK installed (JRE is not enough).
	
	Reinstall JDK (see 1.) or use [hint how to configure Eclipse](https://github.com/Nodeclipse/eclipse-node-ide/blob/master/Hints.md#select-jvm-for-eclipse-instance)
	
You can configure `eclipse.ini` to exact JDK version you have using `-vm` option.
It should go before `-vmargs`. Examples:
	
	-vm
	C:/Program Files (x86)/Java/jdk1.7.0_40/jre/bin/client/jvm.dll
	
	-vm
	C:/Program Files/Java/jdk1.7.0_11/jre/bin/javaw.exe
		
5.2 On Linux don't forget to `sudo chmod -R 7555 eclipse` in folder with Enide.

### Hints

1. Add `-showLocation` to launch shortcut for Enide `eclipse.exe` to display workspace path in window title
 or check in Preferences -> General -> Workspace.
	
