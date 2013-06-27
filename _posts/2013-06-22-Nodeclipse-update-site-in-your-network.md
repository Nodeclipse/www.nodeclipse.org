---
layout: share
title: Nodeclipse update site in your local network
---

{{ page.title }}
================

<p class="meta">22 June 2013</p>

## Install Nodeclipse quicker

If you are starting using Nodeclipse in a [big] team, you may have problem, that every developer needs
 to update Eclipse over [possibly] limited or unstable Internet connection. In this case you can:
 
1. `git clone --depth 1 https://github.com/Nodeclipse/www.nodeclipse.org` to get all needed files on your device.
 You can copy `www.nodeclipse.org` folder on USB stick or other devices. You also have this article
 as `_posts\2013-06-22-Nodeclipse-update-site-in-your-network.md` file.
2. `npm install http-server -g` to get [simple HTTP file server](https://github.com/nodeapps/http-server),
 you may want to use Apache or any other
3. `http-server www.nodeclipse.org -p 8010`
4. Open `http://localhost:8010/` to check if you see home page
5. On every team device Start Eclipse, open Help -> Install New Software ... Dialog, enter `http://yourhostname:8010/updates/`
 where `yourhostname` is name of you device inside your local network.
3. <b>Uncheck "Contact all updates site during install to find required software"</b> to make installation quicker.
7. Follow standard Eclipse plugin installation instructions
 (that also can be seen on `http://localhost:8010/updates/index.html#update-site`) 