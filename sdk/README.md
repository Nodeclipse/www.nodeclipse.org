---
layout: sdk
---

## Nodeclipse SDK (Standard Development Kit)

see <http://www.nodeclipse.org/sdk/README>

This is basically standard Eclipse with Node.js additional plugins
and plugins for Nodeclipse development.

Take a look for [required configuration](https://github.com/Nodeclipse/eclipse-node-ide/#configuration)

or [download workspaces zip](https://sourceforge.net/projects/nodeclipse/files/Standard-Development-Kit/) file with those setting already configured. 

Check for updates and news on [Marketplace entry](http://marketplace.eclipse.org/content/nodeclipse-sdk).

Try <a href="http://www.nodeclipse.org/#support">support options</a>.

### Instructions

0. If you don't have, get latest Node.js <http://www.nodejs.org/download/>

1. If you don't have, download & install latest JDK

 <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
 For example "Java Platform (JDK) 7u25"

2. [Download Nodeclipse SDK](https://sourceforge.net/projects/nodeclipse/files/Standard-Development-Kit/) for your operating system (currently only Windows x64)

3. Extract nodeclipse-SDK-kepler-win64-xxxx-xxxxxxxx.zip into folder where you keep our tools, e.g. D:\Progs\

4. Open `eclipse.exe` from `eclipse` folder, e.g. <code>D:\Progs\nodeclipse-SDK-kepler-win64\eclipse\eclipse.exe</code>

5. If you have error messages like

	....\jre\....
	
	That means you don't have JDK installed (JRE is not enough).
	
	Reinstall JDK (see 1.) or use [hint how to configure Eclipse](https://github.com/Nodeclipse/eclipse-node-ide/blob/master/Hints.md#select-jvm-for-eclipse-instance)

	```	
	-vm  
	C:\Program Files\Java\jdk1.7.0_25\bin\javaw.exe	
	```
	
6. You default Workspace (folder where you keep you projects) is ..\ws, 
 e.g. <code>D:\Progs\nodeclipse-SDK-kepler-win64\ws</code>
 
 To change it to more suitable place, e.g. <code>D:\Workspaces\nodeclipse-SDK-kepler-win64-xxxx</code>,
 copy provided workspace <code>ws</code> as template, or follow [configuration instructions](https://github.com/Nodeclipse/eclipse-node-ide#configuration).
 
### Ideas? Questions?

Try <a href="http://www.nodeclipse.org/#support">support options</a> to connect with us. 
