Process Login History Module
============================

Login History module for ProcessWire CMS/CMF.
Copyright (c) 2012-2022 Teppo Koivula

This module keeps track of login attempts to your site, both successful and unsuccessful (though tracking unsuccessful logins is off by default) in order to offer better understanding about users' activity and environments they use and/or favor; browsers, browser features such as Flash / JavaScript, devices, screen and window sizes, etc.

Please note that there are much better solutions -- such as Google Analytics -- for tracking general site usage. This module isn't intended to replace those, it just offers slightly closer integration with specific ProcessWire features.

## Requirements

- ProcessWire 3.x (at least last two master versions will be officially supported)
- PHP 7.1+

Automatic cleanup (which is recommended) requires that you install the LazyCron module. While said module is bundled with the core package, it is not installed by default. Without automatic cleanup your database can eventually become slow as more and more login history data gets stored in it.

## Installing

This module is installed just like any other ProcessWire module: copy or clone the directory containing this module to your /site/modules/ directory, log in, go to Admin > Modules, click "Check for new modules", and install "Login History".

Alternatively you can get module files via Composer:

```
composer require teppokoivula/process-login-history
```

Process Login History Hooks will be automatically installed along with the main module Process Login History. Installing Process Login History RSS is completely optional: if installed, it provides you with a publicly viewable RSS feed of the login history. More details under heading "Login History RSS feed".

## How to use

When you install this module, it creates a new page into the Admin called Login History (Settings > Login History). This page contains a list of login attempts to your site since the moment this module was installed. By clicking the *more* link next to a login history row reveals more information about that particular login attempt.

In order to access the Login History page, users need to a) be authenticated and b) have a role with the "login-history" permission *or* have the superuser role. While the login-history permission will be added automatically when this module is installed, you need to apply it to applicable roles manually.

### API usage

As of version 1.9.0, there are a couple of ways to retrieve user login history via the API:

* `$this->modules->get('ProcessLoginHistoryHooks')->getUserLoginHistory($user, $start, $limit, $login_was_successful)` returns login history data for provided ProcessWire User object. Default values are 0 for "start", 2 for "limit", and 1 for "login_was_successful", which means that by default this method will return latest successful login and the one before that. Return value is always an array; in case there are no results, an empty array is returned.
* `$user->getLoginHistory($start, $limit, $login_was_successful)` does the same as previous command for a specific User object. All arguments are optional. This method returns a single timestamp (when limit is 1), an array of login history, or null in case there are no results. By default timestamps for last two successful logins are returned.

### Login History RSS feed

This module provides two types of RSS feeds: one that can be accessed only by authenticated users via the Login History page (/setup/login-history/rss/), and other which can be enabled by installing the optional Process Login History RSS module, typing in a key to it's config settings, and accessing the feed via URL such as this: https://example.com/process-login-history-rss.xml?key=1234567890.

Since the latter feed can be accessed via a public URL, please make sure that your key is as difficult to guess as possible (and never use key 1234567890). If you are unsure about whether you *really* need this feature, leave the Process Login History RSS module uninstalled.

## Settings

This module contains a bunch of settings you should be aware of. Settings can be defined via ProcessWire's native module configuration screen, and each of the bundled module's has it's own settings.

*See Process Login History, Process Login History Hooks, and Process Login History RSS module config screens for more details.*

## Roadmap

These are new features, fixes, and improvements to current feature set that are being considered for future releases:

* support for PHP's native get_browser()
* support for Browser Capabilities PHP Project (https://github.com/GaretJax/phpbrowscap)
* OS (platform) version sniffing
* usage statistics and graphs

## License

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

(See included LICENSE file for full license text.)
