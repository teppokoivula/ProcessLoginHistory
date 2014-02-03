Process Login History Module
============================

Login history module for ProcessWire CMS/CMF.
Copyright (c) 2012-2013 Teppo Koivula

This module keeps track of login attempts to your site, both successful and
unsuccessful (tracking unsuccessful logins is off by default) in order to offer
better understanding about users' activity and environments they use / favor;
browsers, browser features such as Flash / JavaScript, devices, screen and
window sizes.

Please note that there are solutions much better for tracking general site
usage available -- such as Google Analytics. This module isn't intended to
replace those, it just offers slightly closer integration with specific
ProcessWire feautures.

## Installing

Copy ProcessLoginHistory folder to your /site/modules/, go to Admin > Modules,
hit "Check for new modules" and install Login History. Process Login History
Hooks will be installed automatically with Process Login History.

Note: this module requires ProcessWire 2.2. Automatic cleanup feature requires
LazyCron module, which is included in ProcessWire core distribution. Automatic
cleanup isn't required for this module to work but it's highly recommended to
avoid cluttering custom database table used by Process Login History with
unnecessary / unwanted old rows.

## How to use

During install a new Login History page is created, placed by default under
Admin > Settings. From there you'll find information about each login attempt
since this module was installed. Clicking *more* link at the end of each row
reveals more information about this particular login attempt / user who
initiated it.

## Settings

This module provides couple of settings you should be aware of. Since this
module actually consists of two modules, one of which handles view side and
other data collection, both have their own settings:

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

## Roadmap

These are new features, fixes and improvements to current feature set planned
for later releases:

**1.3**

* support for PHP's native get_browser()
* support for Browser Capabilities PHP Project / phpbrowscap
  (https://github.com/GaretJax/phpbrowscap)
* OS (platform) version sniffing

**1.4**

* usage statistics, possibly even graphs

## Icons

Icons used by this module are part of Blueberry Basic icon set, which is made
freely available for any kind of commercial or non-commercial projects by
Icojam. See http://www.icojam.com/blog/?p=259 for more information.

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
