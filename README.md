
# Nodeclipse website

Hosted on GitHuh-pages
Uses [jekyll](http://jekyllrb.com/) <https://help.github.com/articles/using-jekyll-with-pages>

[GitHub pages Help](https://help.github.com/categories/20/articles)
[Ruby installer for Windows](http://rubyinstaller.org/downloads/)

https://github.com/github/markup is used when rendering any README.md

GitHub Pages Ruby Gem - A simple Ruby Gem to bootstrap dependencies for setting up and maintaining a local Jekyll environment in sync with GitHub Pages.
https://github.com/github/pages-gem

	gem install github-pages
	
> you can build your site using `jekyll build`, or preview your site using `jekyll serve`.


https://help.github.com/articles/using-jekyll-with-pages

	ruby --version
(	install Ruby and Development-Kit
https://github.com/oneclick/rubyinstaller/wiki/Development-Kit
run “ruby dk.rb init” and “ruby dk.rb install”
)
	
	gem install github-pages

or {
	gem install bundler

Gemfile with 
	source 'https://rubygems.org'
	gem 'github-pages'
	
	bundle install
}

###  invalid byte sequence in GBK (etc)

http://www.cnblogs.com/aleda/articles/Jekyll-in-Windows-following-Chinese-encoding-problem-solutions.html

change C:\Ruby200\lib\ruby\gems\2.0.0\gems\jekyll-1.2.0\lib\jekyll line

	self.content = File.read(File.join(base, name))

into

	self.content = File.read(File.join(base, name),:encoding=>"utf-8")

Solution 2 would be [#201](https://github.com/mojombo/jekyll/issues/201)

try `chcp 65001` before `jekyll` command








# Nodeclipse - Node.js support in Eclipse IDE

![nodeclipse-logo](img/Nodeclipse_logo_light.png)

Moved from [https://github.com/tomotaro1065/nodeclipse](https://github.com/tomotaro1065/nodeclipse)
 to [https://github.com/Nodeclipse/nodeclipse-1](https://github.com/Nodeclipse/nodeclipse-1) .

> [Nodeclipse](http://www.nodeclipse.org/) or [Nodeclipse-1 v0.3](https://github.com/Nodeclipse/nodeclipse-1) is [Eclipse](http://www.eclipse.org/) plugin for the [Node.js](http://www.nodejs.org/). 
The purpose of Nodeclipse is to create environment in 
which Node.js development is easy for any user from beginner to professional. 

Google Forum
<https://groups.google.com/forum/?fromgroups=#!forum/nodeclipse>

## Vision

One-stop shop for Node.js tools.

We can't develop everything at once, but we let you know what are the best things around for Node.js development with Eclipse.

## Features

* Creating default structure for New Node Project and New Node Source File 
* JavaScript Syntax highlighting
* Content Assistant
* NPM support
* Debugging - Breakpoint, Trace, etc... via [Eclipse debugger plugin for V8](http://code.google.com/p/chromedevtools/)
* Generating Express project
* Support for [JSHint](http://www.jshint.com/).<br/>
	Download site: http://github.eclipsesource.com/jshint-eclipse/updates/
* Support for Juno

## Installing
Drag and drop <a href="http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=759140"
 title="Drag and drop into a running Eclipse to install Nodeclipse">
 <img src="http://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png"/></a> into a running Eclipse to install Nodeclipse.  
Download site : http://www.nodeclipse.org/updates  

## Usage

Check out [great article](http://www.tomotaro1065.com/nodeclipse/) and [watch video](http://tomotaro1065.github.com/nodeclipse/index2.htm).    
For debugging check [Using-Eclipse-as-Node-Applications-Debugger]( https://github.com/joyent/node/wiki/Using-Eclipse-as-Node-Applications-Debugger)

For [Markdown](http://daringfireball.net/projects/markdown/dingus): 

1. Window -> Show View -> Other... -> Markdown
2. Click inside "Markdown HTML Preview" view to refresh rendering
3. (Optional, may be useful because double whitespace is hard line break) 
	Show whitespace character via Preferences > General > Editors > Text Editors : checkbox labeled "Show whitespace characters"


## Roadmap

Check also [news](https://github.com/Nodeclipse/nodeclipse-blog#news).

We use [Semantic Versioning](http://semver.org/). Version is MAJOR.MINOR.PATCH, where  

- MAJOR indicates substantially new release, possibly with API change
- MINOR indicates updates, that are fully backward-compatible
- PATCH indicates that is bug-fix

### Ideas, proposals, work-in-progress etc.
- Improving Code Assist
- Debugging features without Chrome developer tools.  In other words, debugging on Node Editor
- Obfuscation and source-level debugging features using Source Maps
- Unit test support
- Easily deployment to Heroku (possibly via [Heroku Eclipse plugin](https://devcenter.heroku.com/articles/getting-started-with-heroku-eclipse))  
	Download site: https://eclipse-plugin.herokuapp.com/install

- Add Jade support	(http://blog.wookets.com/2011/10/how-to-compile-coffeescript-jade-stylus.html Posted 30th October 2011 by Sean Wesenberg)
- Integrate console window (library unknown)
- Add CoffeeScript support via [coffeescript-eclipse plugin](https://github.com/adamschmideg/coffeescript-eclipse)  
	Download site: http://coffeescript-editor.eclipselabs.org.codespot.com/hg/
- [Eclipse Json Editor Plugin](http://sourceforge.net/p/eclipsejsonedit/wiki/Home/) Last Update: 2012-11-07
 (The JSON Editor is a simple plugin for the Eclipse IDE that provides: - Color text highlighting - An Outline Tree view - JSON validation
  - Text formatting - Text folding for the JSON data format.)	
  No Update site.
	
## Developing

Before starting development, please do

1. Carefully read materials
2. Install and give thorough try
3. Contact developers, make friends
4. Say what you are going to do, before you head in. Share and discuss ideas.

### Preparing environment

#### Recommended way

In Eclipse for Java or RCP developers

1. Copy to clipboard git repository URL: <code>https://github.com/Nodeclipse/nodeclipse-1.git</code>
2. File -> Import.. -> Git / Project from git

#### Other way

1. <code>git clone https://github.com/Nodeclipse/nodeclipse-1.git</code>
2. [Download Eclipse](http://www.eclipse.org/downloads/) 
3. File -> Import -> Existing Projects into Workspace
<!--  
4. File -> Import -> Plugins and Fragments - do not use (This creates code copies in current workspace)
	Select Directory  
	Select Projects with source folders
-->	  

## Contributors
LambGao 魔都 https://github.com/Nodeclipse (original creator v0.1.8)   
Scott Elcomb https://github.com/psema4  
Tomoyuki Inagaki https://github.com/tomotaro1065 (debugging integration v0.2) [blog](http://d.hatena.ne.jp/tomotaro1065/)   
Paul Verest https://github.com/PaulVI/  (Vision, readme, reference to plugings) [blog](https://github.com/PaulVI/blog)  
Pushkar Gupte https://github.com/pushkar85 (together for 0.4)

## Contacts
Do not hesitate to contact developers. 
Create issue or send [email to dev group](mailto:dev@nodeclipse.org).
Or skype by ID pverest, QQ 908781544.

## For Bloggers and Users of Twitter, Flickr, LinkedIn, Weibo etc.

In case you plan to blog or tweet about the Nodeclipse plugin, please use the tag "#nodeclipse"
 in order to make it easier to find all the comments and pictures. Thanks a lot for telling the world about the project!  
  | 隸ｷ用#nodeclipse#譬・ｭｾ微博一下。  
  | Por favor, utilizar etiqueta #nodeclipse  
  | ツイートする時は、＃nodeclipseタグを使用してください。  
  | Bitte benutzen Sie tag #nodeclipse um zu twiten.


## Spread the words

Please let others know about this effort. Add links below:  

Sites that reference this project  
http://www.oschina.net/p/nodeclipse  
http://stackoverflow.com/questions/8025825/is-there-a-nodejs-plugin-for-aptana-studio  
http://stackoverflow.com/questions/8179369/debugging-node-js-with-eclipse  
http://stackoverflow.com/questions/7038961/node-js-in-eclipse-which-plugins-are-most-people-using  
https://groups.google.com/forum/#!msg/nodejs/ayLUeUOanzA/et6EEZppVjMJ  
http://stackoverflow.com/questions/15407334/eclipse-rcp-add-optional-dependencies  
http://stackoverflow.com/questions/12641679/nodejs-a-step-by-step-debugger-for-nodejs/15296275#15296275
http://cnodejs.org/topic/5149c795069911196df84af7   

### Hot requests

http://stackoverflow.com/questions/14533885/which-ide-supports-coffeescript-debugging-source-mapping-breakpoints-call-st  
http://stackoverflow.com/questions/10286364/coffeescript-editor-plugin-for-eclipse  
http://stackoverflow.com/questions/7057466/how-to-use-coffeescript-and-eclipse-together-in-windows  
http://stackoverflow.com/questions/3919977/what-ide-to-use-for-node-js-javascript asked Oct 13 '10 [closed] -> Vim, Cloud9 IDE, editors
http://www.iteye.com/news/23933        

### Interesting and useful Links

#### Other Node IDEs

Nide http://coreh.github.com/nide/ v0.2 Last update 2012-04  
JetBrains WebStorm or [IntelliJ IDEA](www.jetbrains.com/idea/features/nodejs.html) (commercial products)  
Microsoft WebMatrix (free) or Visual Studio (commercial product)  
CloudIDE [c9.io](https://c9.io) (cloud service)  
Scripted https://github.com/scripted-editor/scripted  
Eclipse Orion  
komodo-ide http://www.activestate.com/komodo-ide (commercial product)  
Netbeans have a [NodeJS plugin](http://plugins.netbeans.org/plugin/36653/nodejs)  

#### Hints

http://wiki.eclipse.org/Tycho/Reference_Card  
http://stackoverflow.com/questions/10352089/how-do-i-build-an-eclipse-rcp-app-so-that-its-features-can-be-updated-automatica?rq=1  
http://stackoverflow.com/questions/14591472/installing-an-additional-feature-during-product-build-for-some-eclipse-versions  
http://stackoverflow.com/questions/10529859/how-to-include-video-in-jekyll-markdown-blog  
http://stackoverflow.com/questions/2330620/eclipse-i-turned-on-hidden-characters-now-i-cant-turn-off  
[Eclipse JavaScript Development Tools (JSDT)](http://eclipse.org/webtools/jsdt/) has only JS web support.     
add interesting stuff here...

