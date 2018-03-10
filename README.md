Process Login History Module
============================

Login History module for ProcessWire CMS/CMF.
Copyright (c) 2012-2018 Teppo Koivula

This module keeps track of login attempts to your site, both successful and
unsuccessful (though tracking unsuccessful logins is off by default) in order
to offer better understanding about users' activity and environments they use
and/or favor; browsers, browser features such as Flash / JavaScript, devices,
screen and window sizes, etc.

Please note that there are much better solutions -- such as Google Analytics --
for tracking general site usage. This module isn't intended to replace those,
it just offers slightly closer integration with specific ProcessWire features.

## Requirements

The master branch of this module requires ProcessWire 2.3.1+. If you're running
an earlier version of ProcessWire you probably should consider updating it, but
if that's not an option, please check out the legacy branch instead:

https://github.com/teppokoivula/ProcessLoginHistory/tree/legacy

Automatic cleanup (which is recommended) requires that you install the LazyCron
module. While said modue is bundled with the core package, it is not installed
by default. Without automatic cleanup your database can eventually become slow
as more and more changelog data gets stored in it.

## Installing

This module is installed just like any other ProcessWire module: copy or clone
the directory containing this module to your /site/modules/ directory, log in,
go to Admin > Modules, click "Check for new modules", and install "Login
History".

Process Login History Hooks will be automatically installed along with the main
module Process Login History. Installing Process Login History RSS is completely
optional: if installed, it provides you with a publicly viewable RSS feed of the
login history. More details under heading "Login History RSS feed".

## How to use

When you install this module, it creates a new page into the Admin called
Login History (Settings > Login History). This page contains a list of login
attempts to your site since the moment this module was installed. By clicking
the *more* link next to each row reveals more information about that particular
login attempt.

In order to access the Login History page, users need to a) be authenticated and
b) have a role with the "login-history" permission *or* have the superuser role.
While the login-history permission will be added automatically when this module
is installed, it needs to be given to any applicable roles manually.

### Login History RSS feed

This module provides two types of RSS feeds: one that can be accessed only by
authenticated users via the Login History page (/setup/login-history/rss/), and
other which can be enabled by installing the optional Process Login History RSS
module, typing in a key to it's config settings, and accessing the feed via URL
such as this: http://example.com/process-login-history-rss.xml?key=1234567890.

Since the latter feed can be accessed via a public URL, please make sure that
your key is as difficult to guess as possible (and never use key 1234567890).
If you are unsure about whether you really need this feature, please leave
the Process Login History RSS module uninstalled.

## Settings

This module contains a bunch of settings you should be aware of. Settings can
be defined via ProcessWire's native module configuration screen, and each of
the bundled module's has it's own settings.

### Process Login History

**Date Format**

* Defines how dates are formatted on Login History page
* See the PHP date function reference for information on how to customize
  this setting: http://www.php.net/manual/en/function.date.php
* Default: j.n.Y H:i

**Row Limit**

* Defines number of login history rows visible at once on Login History page
* Default: 25

### Process Login History Hooks

**History Max Age**

* Defines how long history is kept before being removed automatically.
* Please note that automatic cleanup requires LazyCron module!
* Default: forever (no automatic cleanup)

**Log Nonexisting Users**

* Defines if attempts to login as nonexisting users should be logged.
* Default: false

### Process Login History RSS

**Key**

* Key required to view the public login history RSS feed; if omitted, the feed
  won't be available. Please note that the key has to be at least 10 characters
  long.
* Default: null (feed not available)

## Roadmap

These are new features, fixes and improvements to current feature set planned
for later releases:

* support for PHP's native get_browser()
* support for Browser Capabilities PHP Project / phpbrowscap
  (https://github.com/GaretJax/phpbrowscap)
* OS (platform) version sniffing
* usage statistics, possibly even graphs

## License

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

(See included LICENSE file for full license text.)
