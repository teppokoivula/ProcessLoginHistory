Process Login History Module
============================

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

This module provides couple of settings you should be aware of. Settings are
defined via Process Login History Hooks module.

**History Max Age**

* Defines how long history is kept before being removed automatically.
* Please note that automatic cleanup requires LazyCron module!
* Default: forever (no automatic cleanup)

**Log Nonexisting Users**

* Defines if attempts to login as nonexisting users should be logged.
* Default: false

## Todo

These are new features, fixes and improvements to current feature set planned
for later releases (probably not in this order though):

* manual removal of rows
* new settings
  * for date format
  * visible row limit
* support for translations
* improved code readability
* alternative view: JSON output
* alternative view: group by user
* proper error catching for SQL queries
* usage statistics, possibly even graphs
* complete separation of view logic and main code
* add latest login info and link to older logins to users profile
* support for PHP's native get_browser()
* support for Browser Capabilities PHP Project / phpbrowscap
  (https://github.com/GaretJax/phpbrowscap)
* filter saved results (real/removed/nonexistent users, failed/successful
  login attempts etc.)

## Icons

Icons used by this module are part of Blueberry Basic icon set, which is made
freely available for any kinds of commercial or non-commercial projects by
Icojam. See http://www.icojam.com/blog/?p=259 for more information.