---
layout: studio
---

see <http://www.nodeclipse.org/enide/studio/2014/README>

## Enide Studio 2014 README

Enide Studio 2014 is preview release based on Eclipse 4.4M4. 
While I use it myself daily since January 2014, some bugs in Eclipse newer features are possible.
Nodeclipse and Enide plugins are the same released versions.

The intention is to let you try this Eclipse package (that has a lot of improvements)
without separate step of installing needed plugins.

### Instructions

0. If you don't have, get latest Node.js <http://www.nodejs.org/download/>

1. If you don't have, download & install latest JDK 7

 <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
 For example "Java Platform (JDK) 7u40"

2. [Download Enide Studio 2014 for your operating system](https://sourceforge.net/projects/nodeclipse/files/Enide-Studio-2014/)

3. Extract Enide-*.zip into folder where you keep our tools, e.g. `D:\Progs\` or `/usr/local/bin`

4. Open `eclipse.exe` from `eclipse` folder, e.g. <code>D:\Progs\Enide-Studio-05-kepler-win64\eclipse\eclipse.exe</code>

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
		
5.2 On Linux don't forget to `sudo chmod -R 7555 eclipse` in folder with Enide Studio
