---
layout: community
title: Nodeclipse - Community - Q & A
---

# {{ page.title }}

> Q: [How to install nodeclipse in myeclipse2013? I have no eclipse.](https://github.com/Nodeclipse/nodeclipse-1/issues/60)

If you don't have Eclipse and you use Windows, you can download Nodeclipse NTS <http://www.nodeclipse.org/nts/>
(quick link <https://sourceforge.net/projects/nodeclipse/files/Node-Tool-Suite/>)

Otherwise follow instructions on <http://www.nodeclipse.org/updates/>

Check also <https://github.com/Nodeclipse/eclipse-node-ide/blob/master/Hints.md#hints>

> Q: [Is there a way to create a nodeclipse project from an existing project (e.g. clone a github nodejs project, and
 get all the nodeclipse functionality when I work on it).](https://groups.google.com/forum/#!topic/nodeclipse/WWLp-p6iaDo)
 
1. Select [File]-[New]-[Node Project] to open New Node Project Wizard.
2. Enter [Project name] and uncheck [Use default location] checkbox.
3. Select location of existing project into [Location].
4. Press [Finish] button. 

Then the existing project will appear in Project Explorer. 
 
> Q: [How to add a new dependency while working with Nodeclipse](https://groups.google.com/forum/#!topic/nodeclipse/FgUci2ZXpoQ)

1. Double-click package.json on the Package Explorer to open it.
2. Add into dependencies section what you want to install, and save it.
3. Select package.json on  the Package Explorer, open context menu by right-clicking, and select [Run As]-[npm install] menu.

 