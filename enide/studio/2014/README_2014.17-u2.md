---
layout: studio
---

see <http://www.nodeclipse.org/enide/studio/2014/README_2014.17-u2>

## Enide Studio 2014.17-u2 README

Enide Studio 2014.17 is eclipse-java-luna-SR2-win32-x86_64 plus
Nodeclipse and Enide plugins of 0.17 release train.

The intention is to let you save some time.

### Special about 2014.17-u2

- includes fixed JSHint-Eclipse issue [#99](https://github.com/eclipsesource/jshint-eclipse/issues/99) (v0.9.10)
- includes [eExplorer - Eclipse Plugin to embed Windows Explorer](https://github.com/culmat/eExplorer)
- example `ws` workspace

### Instructions

0. If you don't have, get latest Node.js <http://www.nodejs.org/download/>

1. If you don't have, download & install latest JDK 7/8

 <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
 For example "Java Platform (JDK) 7u40"

2. [Download Enide Studio 2014 for your operating system](https://sourceforge.net/projects/nodeclipse/files/Enide-Studio-2014/)

3. Extract Enide-*.zip into folder where you keep our tools, e.g. `D:\Progs\` or `/usr/local/bin`

4. Open `eclipse.exe` from `eclipse` folder, e.g. <code>D:\Progs\Enide-Studio-2014.17-luna-SR1-win64\eclipse\eclipse.exe</code>

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

### Hints

1. Archive included workspace `ws` with recommended configuration for example that you can open as `..\ws`.
But you should copy it or create new in folder where you have your workspaces, e.g. 

	D:\Workspaces\Enide-Studio-2014.17\
	
2. Add `-showLocation` to launch shortcut for Enide Studio `eclipse.exe` to display workspace path in window title.
	
