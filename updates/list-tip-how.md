---
layout: nil
title: Nodeclipse -- Plugin List How To
---

<p></p>

{% include navigation-links.html %}

# Plugin List How to

![](/img/how-drap-an-drop-to-install.png)


### Note mpc

Drag-and-drop installing depends on [Marketplace client (mpc)](http://eclipse.org/mpc/) (usually in <kbd>Help</kbd> -> <kbd>Eclipse Marketplace ...</kbd> menu).
If you don't have it, just install it from Kepler update site `http://download.eclipse.org/releases/kepler/` , check `General Purpose Tools` group.
( [bug 411752](https://bugs.eclipse.org/bugs/show_bug.cgi?id=411752) fixed with 4.3.1).
mpc before 4.3.1 had no dependencies, now it seems to have JDT dependency.
It is possible to install the latest mpc on any Eclipse version. 

## Using Nodeclipse Updates site

If you don't know how to use Eclipse update site (aka p2 repositories), read at <http://www.nodeclipse.org/updates/>.

## Using Nodeclipse CLI Installer

Make your own Eclipse! Start from folder with older Eclipse,
then with Nodeclipse CLI (<code>npm i nodeclipse -g</code>) specify new folder to put Eclipse in:
<pre>
nodeclipse new from luna to your/destination/folder
</pre>
This can take a while. Then when Noclipse CLI Installer finished, cd to folder and run Eclipse:
<pre>
cd your/destination/folder
eclipse
</pre>
You can continue installing plugins. (Even if Eclipse is running, but you will need to restart afterwards):
<pre>
nodeclipse install egit
nodeclipse install markdown gfm startexplorer jshint
</pre>
Note that installing this way plugin with dependencies (e.g. Nodeclipse plugin) is not yet possible, so use GUI.
 
<a href="https://github.com/Nodeclipse/nodeclipse-1/issues/new">Wanna ask?</a>
