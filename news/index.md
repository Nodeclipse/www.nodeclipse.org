---
layout: home
title: Nodeclipse -- News
---

# Nodeclipse news

<p></p>

<p>	
	2014-01-05<br/>
	Enide & Nodeclipse version 0.9.0 are released. New update site is 
	<pre>http://dl.bintray.com/nodeclipse/nodeclipse/0.9.05/</pre>
	{% include nodeclipse_install_button.html %}</br>
	There is also update site archive on <a href="http://sourceforge.net/projects/nodeclipse">SourceForge</a>.<br/>
	Check <a href="/history">What's new</a>.
	<a href="/enide/tools/markdowneditor">Markdonw Editor</a> can be installed from
	<pre>http://dl.bintray.com/enide/Markdown/1.0.0/</pre>
</p>
<p>	
	2014-01-03<br/>
</p>
Don't miss posts on [Node.js blog](http://blog.nodejs.org/):

- [DoS Vulnerability (fixed in Node v0.8.26 and v0.10.21)](http://blog.nodejs.org/2013/10/22/cve-2013-4450-http-server-pipeline-flood-dos/)
 if you are using 0.8 or 0.10 servers in production, update to the latest on that branch is critical.
 
- [Keeping The npm Registry Awesome](http://blog.nodejs.org/2013/11/26/npm-post-mortem/) 
 After several downtime in November (npm usage grew 10x in 2013), technical work is in progress.
 ALso donation campaign was launched at <https://scalenpm.org/>.
 
 
Node package server as proxy or cache.
<https://github.com/Nodeclipse/npm-proxy/blob/master/README.md>


<p>
	2013-12-27<br/>
	Finally 
	<a href="https://github.com/satyagraha/gfm_viewer/issues/47">GFMV#47</a>				
	with <a href="/enide/tools/gfmv">GitHub Flavored Markdown Viewer plugin</a> 1.8 
	( <code>Update p2 repository: http://dl.bintray.com/satyagraha/generic/1.8.0</code> )
	you are  able to right-click 
	<code>node_modules</code> folder <code>Generate Markdown Preview</code>					
	and after that open any .md file with <code>Show in GFM View</code> instantly, any time, 
	even when offline, and it will look exactly like on GitHub.
	( HTMLs are saved into <code>.*.md.html</code> filenames.
	They will not be commited when project
	<code>.gitignore</code> file has <code>.*.md.html</code>.
	.* files are hidden in Eclipse by default, but see "No miracles, just files" <a href="/#usage">below</a>. )
</p>
<p>
	2013-12-20<br/>
	<a href="/demos/navigation">Navigation Demo</a>.
</p>
<p>
	2013-12-20<br/>
	Nodeclipse is #1 in Eclipse
	<a href="http://www.eclipse.org/community/eclipse_newsletter/2013/december/article2.php">Top 10 NEW Plugins for 2013</a>,
	together with <a href="/enide/tools/startexplorer">StartExplorer</a>, GitHub Flavored Markdown viewer plugin.
	<a href="/enide">Enide - Eclipse Node.JS IDE</a> also made into Top 10 NEW. There may be general confusion 
	as Enide is set/collection of plugins including Nodeclipse available in the same 
	<a href="http://www.nodeclipse.org/updates/">update site</a>
	or via <a href="http://marketplace.eclipse.org/content/enide-eclipse-nodejs-ide">.p2f file</a>.
</p>
<p>
	2013-12-11<br/>
	<a href="https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.ui/templates">Nodeclipse CLI</a> is published with npm  
	<a href="https://npmjs.org/package/nodeclipse">registry</a>.
	Install it with <pre>$ npm install -g nodeclipse</pre>
	Now create new project in any way, then <pre>$ nodeclipse -p</pre> to make it Eclipse project ready for import
	via <code>File -> Import -> General / Existing Projects into Workspace</code>.</br>
	CLI util also allows to create new Node.js projects like <pre>$ nodeclipse -c project1 -u hellow-world</pre>.
	And that is great because it uses 
	<a href="https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.ui/templates">the same templates as Nodeclipse plugin</a>.
	So if you have an idea for new wizard, propose your additions with pull request as new_folder,
	then it will be immediately available as <pre>$ nodeclipse -c new_project1 -u new_folder</pre>,
	and after a while as Wizard option in Eclipse/Enide. 
</p>
<p>
	2013-12-06<br/>
	<a href="/enide/monster/">Enide Monstr</a> 0.8.1 for Windows x32 is published on 
	<a href="https://sourceforge.net/projects/nodeclipse/files/Enide-Monstr/">SourceForge</a>.
	It is based on <a href="/enide/studio/">Enide Studio</a> (Java/DSL)
	and includes Nodeclipse 0.8.1, CoffeeScript 0.3, TypeScript and other plugins for Node.js, JavaScript,
	Java and Eclipse development with git and GitHub.<br/>
	<br/>
	32bit stack (JDK+Eclipse) is recommended now as <a href="https://github.com/Nodeclipse/nodeclipse-1/issues/71">issue #71</a>
	seems to appear on 64bit stack only. Contribute for other OSes by creating new
	<a href="https://github.com/Nodeclipse/nodeclipse-1/issues">issue</a>. 
	A community feedback is needed to analyze why
	some known (and unknown) bugs appear in different environments, so be talky, when you notice bad things. 
	For me Windows 7 with JDK7_40 32bit seems to be the best combination for now. 
	Stay tuned and updated.
</p>
<p>	
	2013-12-02<br/>
	Welcome to DemoDays Beijing on December 14th 2pm</br>
	Free event in English/Chinese on Java, JavaScript, MongoDB, Eclipse topics.
	Welcome to share and present, just contact via 
	<a href="callto://pverest">Skype</a> or QQ 908781544. 
	Guests are to <a href="https://yoopay.cn/event/76967677">register and check updates</a>.
	Let your friends know. 
</p>
<p>	
	2013-12-02<br/>
	Enide & Nodeclipse version 0.8 are released. New update site is 
	<pre>http://dl.bintray.com/nodeclipse/nodeclipse/0.8.0/</pre>
	{% include nodeclipse_install_button.html %}</br>
	There is also update site archive on <a href="http://sourceforge.net/projects/nodeclipse/files">SourceForge</a>.
  			<br/>
	Check <a href="/history">What's new</a>.
</p>
<p>	
	2013-11-01<br/>
	Nodeclipse & Enide version 0.7 are released. New update site is 
	<pre>http://dl.bintray.com/nodeclipse/nodeclipse/0.7.0/</pre>
	{% include nodeclipse_install_button.html %}
  			<br/>
	Check <a href="/history">What's new</a>.
</p>
<p>	
	2013-10-31<br/>
	Welcome to organize and give a talk on 
	<a href="http://demodays.github.io">Software Development<img alt="DemoDays" src="http://demodays.github.io/img/logo.png"></a>
	and <a href="http://wiki.eclipse.org/Eclipse_DemoCamps_November_2013">
	<img alt="Eclipse DemoCamps" src="http://wiki.eclipse.org/images/b/b7/Eclipse_DemoCamp_New.jpg" height="40" width="50">
	Eclipse DemoCamps</a> around 
	<a href="http://events.eclipse.org/">the world</a> in November.
</p>
<p>	
	2013-10-06<br/>
	Nodeclipse & Enide version 0.6 released. New update site is 
	<pre>http://dl.bintray.com/nodeclipse/nodeclipse/0.6.0/</pre>
	{% include nodeclipse_install_button.html %}
  			<br/>
	Check <a href="/history">What's new</a>.
</p>
<p>
	2013-09-12<br/>
	<a href="/enide/studio/">Enide Studio</a> 0.5 for Windows x64 and x32 is published on 
	<a href="https://sourceforge.net/projects/nodeclipse/files/Enide-Studio/">SourceForge</a>.
	It is based on <a href="http://www.eclipse.org/kepler/">Eclipse Kepler</a> Java/DSL
	and includes Nodeclipse 0.5 and other plugins for Node.js, JavaScript,
	Java and Eclipse development with git and GitHub.
</p>
<p>
	2013-09-11<br/>
	ATTENTION: There was reported issue of 
	<a href="https://github.com/Nodeclipse/nodeclipse-1/issues/72">"#72 All nodejs apps fail to run after upgrade to 0.5"</a>.
	<br/>
	If you have already run into the problem. 1) let us know by confirming or raising new issue (we need to know exactly
	 what OS, Java version, Eclipse version is affected. Currently only x32 Windows on Java 6 is confirmed.)
	2) Uninstall Nodeclipse 0.5 (only 1 feature entry) via 
	Help -> About Eclipse -> Installation details, select Nodeclipse, then <kbd>Uninstall..</kbd> button 
	3) install 0.4 from update site 
	<code>http://nodeclipse-1.github.io/updates</code>
</p>
<p>	
	2013-09-08<br/>
	<img src="/img/0.5.jpg"/><br/>
	Nodeclipse-1 version 0.5.0 released. <a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=759140"
         title="Drag and drop into a running Eclipse to install Nodeclipse">
  			<img src="/img/installbutton.png"/>
  			</a><br/>
	Check <a href="/history">What's new</a>.
</p>
<p>
	2013-09-01<br/>
	Nodeclipse-1 version 0.5.0 goes into staging repository for testing. Update site is
	<pre>http://nodeclipse.github.io/nodeclipse-1/repository/</pre>
	If you notice any bug, please <a href="https://github.com/Nodeclipse/nodeclipse-1/issues">report as issue</a>
	against 0.5 milestone. The list of new features is still as opened and closed issues in        		
	<a href="https://github.com/Nodeclipse/nodeclipse-1/issues?milestone=3">0.5 milestone</a>.
</p>
<p>
	2013-08-22<br/>
	<a href="/coffeescript">Nodeclipse CoffeeScript Editor 0.3.0</a>
	<a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1097343" title="Drag and drop into a running Eclipse to install Nodeclipse CoffeeScript Editor">
	  <img src="/img/installbutton.png"/></a>,
	  <a href="/git/addon/">Nodeclipse Git Addon 0.1.0</a>
	  <a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1076754">
	<img src="/img/installbutton.png"></a> are released.
	All of them can be quickly accessed via <a href="/updates/list">Nodeclipse Plugins List</a> plugin <a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1084253">
	<img src="/img/installbutton.png"></a>,
	that now has almost 20 plugins, including TypeScript, jQuery Integration, Start Explorer or shell.
</p>
<p>
	2013-07-31<br/>
	Be first to suggest new <a href="http://nodeclipse.uservoice.com/forums/216804-general">ideas for Nodeclipse</a>.
</p>
<p>
	2013-07-26<br/>
	Nodeclipse SDK (Standard Development Toolkit) 0.4.14 for Windows x64 is released on <a href="https://sourceforge.net/projects/nodeclipse/files/Standard-Development-Kit/">SourceForge</a>.
	It is based on <a href="http://www.eclipse.org/kepler/">Eclipse Kepler</a> Standard
	 and includes Nodeclipse 0.4 and other plugins for Node.js & Eclipse development. <a href="/sdk/">Read more..</a>
</p>
<p>
	2013-06-27<br/>
	Nodeclipse NTS 0.4.10 for Windows x64 and x32 is released on <a href="https://sourceforge.net/projects/nodeclipse/files/Node-Tool-Suite/">SourceForge</a>.
	It is based on <a href="http://www.eclipse.org/kepler/">Eclipse Kepler</a>
	 and includes Nodeclipse 0.4 and other plugins. <a href="/nts/">Read more..</a>
</p>
<p>
	2013-06-11<br/>
	Welcome to share your Eclipse, Node.js or GitHub experience with
	 <a href="http://www.nodeclipse.org/share.html" class="docs">SHARE</a>,
	discuss and comment.
</p>
<p>
	2012-05-22<br/>
	<font size="2">There was slow Internet connection, and deny of service
	("No repository found" message in Eclipse)
	around period from 2012-05-22 21:00 UTC to 2012-05-23 9:30 UTC. 
	Reported as <a href="https://github.com/Nodeclipse/nodeclipse-1/issues/47">#47</a>
	This should be related to cloud provider hosting GitHub pages.
	Please report if you are unable to install. We look carefully.</font></br>
	Take a look at <a href="https://status.github.com/messages">GitHub System Status</a> before reporting issue.
</p>
<p>
	2013-05-19<br/>
	We have released version 0.4 . Now, you can try it. And enjoy!
</p>			

<p><a href="community/newsletter">Subscribe for news letter.</a></p>