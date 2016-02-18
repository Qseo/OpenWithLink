# OpenLinkPrivate

Auto opening links via 'openwith' HTML attribute with specific application using Open With https://addons.mozilla.org/ru/firefox/addon/open-with/ Firefox extension.

Copyright
------------------------

Author: Alexey Murz Korepov

E-mail: seo@qseo.ru

Description
========================

This script intercept all left clicks on links (<a> tag) and check 'openwith' attribute of this tag. If it is not empty - open link via specified openwith option.

By default, this works on all sites, but you can limit sites via User Script preferences tab » Script Settings » Included Pages - remove "*" and add your custom hosts, for example https://google.com/* http://google.com/search*

You must set the correct id of OpenWith option for select specific action. List of all action id you can see in `about:config` » `extensions.openwith.auto.` and `extensions.openwith.manual.` prefixes.

Also you can create your custom manual actions, here is example for Linux Dolphin file browser:

```
extensions.openwith.manual.dolphin = "/usr/bin/dolphin"
extensions.openwith.manual.dolphin.name = "Dolphin"
```

Examples of working HTML code:
========================

- <a href="http://google.com" openwith="auto:chrome">Open Google in Chrome browser</a>
`<a href="http://google.com" openwith="auto:chrome">Open Google in Chrome browser</a>`

- <a href="http://google.com" openwith="auto:chromium">Open Google in Chromium browser</a>
`<a href="http://google.com" openwith="auto:chromium">Open Google in Chromium browser</a>`

- <a href="ftp://user:pass@example.com/myfolder/" openwith="manual:dolphin">Open ftp with Linux KDE Dolphin file browser</a>
`<a href="ftp://user:pass@example.com/myfolder/" openwith="manual:dolphin">Open ftp with Linux KDE Dolphin file browser</a>`

- <a href="file:///home/" openwith="manual:dolphin">Open /home folder with Linux KDE Dolphin file browser</a>
`<a href="file:///home/" openwith="manual:dolphin">Open /home folder with Linux KDE Dolphin file browser</a>`


Changelog
------------------------

2016-02-18 - version 1.0: Initial release.