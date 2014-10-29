---
layout: home
title: Nodeclipse & Enide -- Usage
---

{% include navigation-links.html %}

# Nodeclipse & Enide Usage
<p></p>	

<p>
See 1366x768 introduction video at <a href="/video">/video page</a> or see lower resolution on Youtube.
</p>
<iframe width="560" height="315" src="http://www.youtube.com/embed/8ACnLALdKT8" frameborder="0" allowfullscreen></iframe>
<p>
Read also <a href="https://github.com/Nodeclipse/eclipse-node-ide/blob/master/Hints.md#hints">Hints</a> and
<a href="https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.help/contents#intro">Online Help</a>.
</p>

#### First steps

<p>
<ol>
<li>In Eclipse switch to Node perspective <code>Window -> Open Perspective -> Other... -> Node</code></li>
<li>Select <code>File -> New -> Node Project</code>.</li>
<li>Select "Hello world" template.</li>
<li>Enter [Project name], press [Finish].</li>
<li>Locate <code>hello-world-server.js</code> in newly created project. Right-click and select Run As -> Node Application.</li>
<li>navigate to <code>http://127.0.0.1:1337/</code> in your browser.</li>
<li>Press red icon "Terminate" inside Console View to stop current application.</li>
<li>Double click on <code>hello-world-server.js</code> to open Editor. Right-click inside Editor to Run or Debug your code.</li>
</ol>
</p>

#### Editor Tips

<p>
<ul>
<li>Press <kbd>Ctrl+O</kbd> to go to Outlined variable or function.</li>
<li>Press <Kbd>Ctrl+Shift+P</Kbd> to find matching bracket.</li>
<li>Press <kbd>Alt+Up / Down</kbd> to move selection 1 line up or down.</li>
<li>Press <kbd>Ctrl+Alt+Up / Down</kbd> add the same line above/below.</li>
<li>Press <kbd>Alt+Shift+ Up / Down</kbd> to expand selection.</li>
<li>Press <kbd>Ctrl+Shift+Y / X </kbd> to change to lower case or UPPER CASE.</li>
<li>Press <kbd>Ctrl+Shift+F</kbd> to format code.</li>
<li>Press <kbd>Alt+/</kbd> to call Code Assist (that is greatly improved when using JSDoc). </li>
<li>Press <kbd>Alt+Shift+J</kbd> to add JSDoc, <code>@</code> will give options. </li>
<li>Press <kbd>Alt+r,s,number</kbd> to run current file. </li>					
<li>Press <kbd>Ctrl+3</kbd>, type <kbd>crazy</kbd> to open Crazy Outline (<a href="/enide/tools/pde-tools">PDE Tools</a>). </li>
</ul>
</p>

#### General Tools

<p>
<ul>
<li>Press <kbd>Ctrl+Alt+E</kbd> to open Explorer (<a href="/enide/tools/startexplorer">StartExplorer</a>)</li>
<li>Press <kbd>Ctrl+Alt+D</kbd> to open Shell (<a href="/enide/tools/startexplorer">StartExplorer</a>)</li>
<li>Press <kbd>Ctrl+Alt+A</kbd> to open with default app (e.g. Node.js for .js files) (<a href="/enide/tools/startexplorer">StartExplorer</a>)</li>
<li>Press <kbd>Ctrl+Alt+C</kbd> to copy resource path to clipboard (<a href="/enide/tools/startexplorer">StartExplorer</a>)</li>
<li>Press <kbd>Ctrl+Alt+F</kbd> to search/highlight everywhere in Eclipse (<a href="/enide/tools/glance">Glance</a>)</li>
<li>Press <kbd>Ctrl+3</kbd>, type <kbd>rest</kbd> to open Rest Client (<a href="/restclient-tool/">REST client tool</a>). </li>
</ul>
</p>

#### Generating of Express project

<p>
<ol>
<li>Select <code>File -> New -> Node Express Project</code>.</li>
<li>Enter [Project name], select preferred Template Engine, and press [Finish] button.</li>
<li>Wait for <code>npm</code> to finish dowloading dependencies. Press <kbd>F5</kbd>(refresh)
 for <code>node_modules</code> folder to appear.
 (<a href="https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.help/contents/configuration.md#optional-general-eclipse-configuration">configure autorefresh</a>) </li>
</ol>
</p>

#### Debugging and breakpoints

<p>
<ol>
<li><kbd>F3</kbd> or doundl-click to open Editor for JavaScript file</li>
<li>Double-click on the ruler on the left side of the line you want to set a breakpoint.</li>
<li>If you want to remove a breakpoint, double-click on the ruler again.</li>
<li>Select the main source file of the Node Application in the Project Explorer or anywhere inside Editor,
 open the context menu with right-click,
 select the <code>Debug As -> Node Application</code>.</li>
</ol>
</p>

#### No miracles, just files

<p>
In Project Explorer press trianle to call drop down menu Cutomize View... -> Filter -> uncheck *.resources.
Now you see all files:
.project, .jshnt.rc and .settings folder. Take time to explore files content, it is all under your control.
</p>
<p>LaunchConfigurations can be saved inside project as well, see 
<a href="https://github.com/Nodeclipse/nodeclipse-1/blob/master/org.nodeclipse.help/contents/run.md#run-configuration">Help Run page</a>
</p>

#### More shortcuts

<div>
	<ul>
		<li>Use middle-click on a Editor or View tab to close it</li>
		<li>Press <kbd>Ctrl+3</kbd> quick acceess</li>
		<li>Press <kbd>Ctrl+Shift+R</kbd> to open any file</li>
		<li>Press <kbd>Ctrl+Shift+L</kbd> to search quickly within all files (<a href="/enide/tools/quicksearch">Quick Search</a>)</li>
	</ul>
<p>
<a href="http://rayfd.me/2007/05/20/10-eclipse-navigation-shortcuts-every-java-programmer-should-know/">
10 Eclipse Navigation Shortcuts Every Java Programmer Should Know</a> (2007),<br/> 
<a href="http://shortcutworld.com/en/win/Eclipse.html">93 time-saving Keyboard Shortcuts for Eclipse</a> (2013)
</p>
</div>

Continue reading on [home page](/).
	
