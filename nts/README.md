---
layout: nts
---

## Nodeclipse NTS (Node Tool Suite)

see [http://www.nodeclipse.org/nts/README](http://www.nodeclipse.org/nts/README)

This is basically standard Eclipse with Node.js additional plugins.

Take a look for [required configuration](https://github.com/Nodeclipse/eclipse-node-ide/#configuration)

or [download workspaces zip](https://sourceforge.net/projects/nodeclipse/files/Node-Tool-Suite/) file with those setting already configured. 

Check for updates and news on [Marketplace entry](http://marketplace.eclipse.org/content/nodeclipse-nts).

### Instructions

0. If you don't have, get latest Node.js <http://www.nodejs.org/download/>

1. If you don't have, download & install latest JDK

 <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
 For example "Java Platform (JDK) 7u25"

2. Download Node Tool Suite (NTS) for your operating system (currently only Windows x64 & x32)

3. Extract NTS.zip into folder where you keep our tools, e.g. D:\Progs\

4. Open eclipse.exe from Eclipse folder, e.g. <code>D:\Progs\Node-Tool-Suite-03-win64\eclipse\eclipse.exe</code>

5. If you have error messages like

	....\jre\....
	
	That means you don't have JDK installed (JRE is not enough).
	
	Reinstall JDK (see 1.) or use [hint how to configure Eclipse](https://github.com/Nodeclipse/eclipse-node-ide/blob/master/Hints.md#select-jvm-for-eclipse-instance)
	
6. You default Workspace (folder where you keep you projects) is ..\ws, 
 e.g. <code>D:\Progs\nodeclipse-NTS-jee-kepler-win64\ws</code>
 
 To change it to more suitable place, e.g. <code>D:\Workspaces\nodeclipse-NTS-0410</code>
 copy provided workspace ws as template, or follow [configuration instructions](https://github.com/Nodeclipse/eclipse-node-ide#configuration).