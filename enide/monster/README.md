---
layout: studio
---

## Enide Monst(e)r README

see <http://www.nodeclipse.org/enide/monster/README>

This is [Enide Studio](http://www.nodeclipse.org/enide/studio) with [Aptana Studio](http://aptana.com/) together.

Check for updates and news on [Marketplace entry](http://marketplace.eclipse.org/content/enide-monster)
and [solution page](http://www.nodeclipse.org/enide/monster).

### Instructions

0. If you don't have, get latest Node.js <http://www.nodejs.org/download/>

1. If you don't have, download & install latest JDK

 <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
 For example "Java Platform (JDK) 7u40"

2. [Download Enide Studio for your operating system (currently Windows x64 & x32, Linux x64)](https://sourceforge.net/projects/nodeclipse/files/Enide-Studio/)

3. Extract Enide.zip into folder where you keep our tools, e.g. `D:\Progs\` or `/usr/local/bin`

4. Open `eclipse.exe` from `eclipse` folder, e.g. <code>D:\Progs\Enide-Studio-05-kepler-win64\eclipse\eclipse.exe</code>

5. If you have error messages like

	....\jre\....
	
	That means you don't have JDK installed (JRE is not enough).
	
	Reinstall JDK (see 1.) or use [hint how to configure Eclipse](https://github.com/Nodeclipse/eclipse-node-ide/blob/master/Hints.md#select-jvm-for-eclipse-instance)
	
6. Your default Workspace (folder where you keep you projects) is ..\ws, 
 e.g. <code>D:\Progs\Enide-Studio-05-kepler-win64\ws</code>
 
 To change it to more suitable place, e.g. <code>D:\Workspaces\Enide-Studio-05-workspace</code>,
 copy provided workspace <code>ws</code> as template, or follow [configuration instructions](https://github.com/Nodeclipse/eclipse-node-ide#configuration).
 
### Warning

- [![InstallLink][1]](http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=687236)
[Overview plugin for Eclipse (code birdview)](http://marketplace.eclipse.org/node/687236) (has some bugs in standard perspectives)

If you debug a lot, it is recommended to uninstall it, as it causes a lot of Errors and Warnings ([issue #13](https://code.google.com/p/sandipchitaleseclipseplugins/issues/detail?id=13)).

To uninstall any plugin in Eclipse go to Help -> About Eclipse -> Installation details, select plugin, then press <kbd>Uninstall..</kbd> button

  [1]: http://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png

### Ideas? Questions?

Try <a href="http://www.nodeclipse.org/#support">support options</a> to connect with us. 
 