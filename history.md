---
layout: home
title: Nodeclipse -- Version History
---

# Version History

<p></p>

Suggest new and vote for <a href="http://nodeclipse.uservoice.com/forums/216804-general">ideas for Nodeclipse</a>.
	
### Version 0.6, 2013-10-06

- Option to launch Node debug without -brk (disable interruption of Node.js app on the first line).
 Check Help (<kbd>F1</kbd>) Debug page on debug-brk option.
- [Extended Help with examples and links](https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.help/contents#intro). 
 Ready for contribution: just edit online with GitHub.
- [#61](https://github.com/Nodeclipse/nodeclipse-1/issues/61) set debugging port in Preferences.
 Now you can debug several Node.js apps in the same time (but in different Eclipse instances).
- [#49](https://github.com/Nodeclipse/nodeclipse-1/issues/49) support black background color schemes
 for Chromium JS Editor (used in debug mode). That is good for Aptana users where default theme is dark.
 Also now Chromium JS Editor has Outline support.
- TODO: 2 items below have ran into problem <http://stackoverflow.com/questions/19157302/eclipse-plugin-development-saved-launchconfiguration-overrides-launchtype> ,
 that limits their usability (also warning in Help). Decision was made not to postpone release of features above
 and have more frequent releases
	- more support for [CoffeeScript][1] (launch `coffee` util in RUN or DEBUG mode) & [TypeScript][2] (`tsc` compiler).
	 Note that full featured CoffeeScript debugging [#12][12] is not yet implemented.
	 Do you know Java library for parsing `coffee`-generated SourceMaps? [#12][12]
	- [#57](https://github.com/Nodeclipse/nodeclipse-1/issues/57) running app.js with node-dev, forever, supervisor, nodemon etc.
	 Default preferences to `node-dev`.
- Integrate [Github Flavored Markdown Viewer][3] by Satyagraha, [RestClient Tool](/restclient-tool) by Yadu Vendra,
 [StartExplorer][4] by Bastian Krol,
 Nodeclipse [Git Addon][6] & [Plugins List][7] by Paul Verest 

  [1]: http://coffeescript.org/
  [2]: http://www.typescriptlang.org/
  [3]: https://github.com/satyagraha/gfm_viewer
  [4]: http://basti1302.github.io/startexplorer/
  [6]: http://www.nodeclipse.org/git/addon/
  [7]: https://marketplace.eclipse.org/content/nodeclipse-plugins-list
  [12]: https://github.com/Nodeclipse/nodeclipse-1/issues/12
  
   
### Version 0.5, 2013-09-08

- [#59](https://github.com/Nodeclipse/nodeclipse-1/issues/59) setting environment variables in Launch (Run/Debug Configuration)
- [#26](https://github.com/Nodeclipse/nodeclipse-1/issues/26) [CoffeeScript support](http://coffeescript.org): run `*.coffee` files 
<!-- 
and `*.litcoffee` files,
 associate `*.litcoffee` ( [Literate CoffeeScript](http://coffeescript.org/#literate) ) with Markdown Editor.
 Check for [letarate programming](http://www.google.com.hk/search?q=letarate+programming).
 -->
- [#17](https://github.com/Nodeclipse/nodeclipse-1/issues/17) bundle [Express](http://expressjs.org/) and CoffeeScript into jar files.
 This lets you install them even if you don't have admin permission on computer that you use, or if you want play quickly with Node.js 
 and don't remember how to do `npm install express -g`. Note this bundle is of current Express/CoffeeScript versions, and doesn't
 check for your Node.js version compatibility (the latest version is assumed).
- [#66](https://github.com/Nodeclipse/nodeclipse-1/issues/66) built-in (Help -> Help Contents) and
 [online help](https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.help/contents). It is open-sourced and written in Markdown.
 [Welcome to contribute](https://github.com/Nodeclipse/nodeclipse-1/tree/master/org.nodeclipse.help/contents):
 just edit Markdown files online, then send pull request.
- [#40](https://github.com/Nodeclipse/nodeclipse-1/issues/40) [maven](http://maven.apache.org/) build.
 Building Nodeclipse is now the easiest `mvn package` from command line. [Check README](https://github.com/Nodeclipse/nodeclipse-1#maven-build)

<h3>Version 0.4, 2013-05-19</h3>
<ul>
<li>Integration with JSDT (Code Assist and Outline)<br/>
<a href="https://github.com/Nodeclipse/nodeclipse-1/issues/11">#11 [Feature request] Outlines and other things for class-y structure?</a><br/>
<img src="img/CodeAssist.png" />
</li>
<li>Integration with Markdown viewer<br/>
<a href="https://github.com/Nodeclipse/nodeclipse-1/issues/29">29 Integrate Markdown Editor, add Markdown HTML preview to Node perspective</a><br/>
<img src="img/Markdown.png" />
</li>
<li><a href="https://github.com/Nodeclipse/nodeclipse-1/issues/37">#37 Enhancement: Ability to set a working directory</a><br/>
<img src="img/WorkingDirectory.png" />
</li>
<li><a href="https://github.com/Nodeclipse/nodeclipse-1/issues/36">#36 Associate *.json files with JS Editor</a></li>
<li><a href="https://github.com/Nodeclipse/nodeclipse-1/issues/25">#25 Node perspective doesn't support working sets</a></li>
</ul>

### Version ver 0.3, 2013-04

- Add support for [JSHint](http://www.jshint.com/) integration for Eclipse, [developed by EclipseSource](https://github.com/eclipsesource/jshint-eclipse)  
	You had to set project property for JSHint for each project creating. It was boring task.<br/>
	Nodeclipse 0.3 will set them automatically when generating Node project and Express project.<br/>
	You should install JSHint integration for Eclipse.<br/>
	Update site: http://github.eclipsesource.com/jshint-eclipse/updates/
- Update template for new project
	* Add README.md template
	* Add hello-world-server.js
	* Add package.json (This is good practice)
* [Publish](http://marketplace.eclipse.org/quickstart) on Eclipse marketplace
* [t#3 [Feature Request] allow passing arguments](https://github.com/tomotaro1065/nodeclipse/issues/3)
	You can pass arguments to application and node.js setting on [Debug configration...]-[Node Application]-[&ltyour configration name&gt]-[Arguments].<br/>
	You can also set arguments on [Run configuration...].<br/>
	![Screen shot](img/Arguments.png)
* [n#2 on x64 windows doesn't find NodeJS dir automatically](https://github.com/Nodeclipse/nodeclipse/issues/2)
* [#5 When creating Node project and folder already exists, then add only .project file and don't add 3 files (README.md, hello-world-server.js, package.json)](https://github.com/Nodeclipse/nodeclipse-1/issues/5)
* [#6 Add Express Project in main menu under File -> New (in Node perspective)](https://github.com/Nodeclipse/nodeclipse-1/issues/6)<br/>
	If [Node Express Project] menu does not appear under File->New, reset [Node] perspective by right-clicking on the [Node] button, which is located perspective switching area.<br/>
	![ResetPerspective](img/ResetPerspective.png)
	
### Version ver 0.2

- Integrating Chromium Development Tools & Debugger.

### Version ver 0.1

- Node perspective
- Run as Node application
- Console integration
- npm operations	
- ...
