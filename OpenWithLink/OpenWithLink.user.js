// ==UserScript==
// @name          OpenWithLinks
// @namespace     http://qseo.ru
// @description   Auto opening links via 'openwith' HTML attribute with specific application using Open With https://addons.mozilla.org/ru/firefox/addon/open-with/ Firefox extension.
// @icon          http://qseo.ru/logo/logo_q.svg
// @version       1.0
// @updateURL     https://github.com/Qseo/OpenWithLinks/raw/master/OpenWithLinks/OpenWithLinks.user.js
// @downloadURL   https://github.com/Qseo/OpenWithLinks/raw/master/OpenWithLinks/OpenWithLinks.user.js
// @include       *
// @grant         GM_openInTab
// ==/UserScript==

/**
Opens the link in a private tab
*/
function handler(event) {
  // Only left clicks and <a> with non-empty attribute 'openwith'
  if(event.button === 0 && event.target.tagName === "A" && event.target.getAttribute('openwith')){
//     window.location = "openwith:" + event.target.getAttribute('openwith') + ":" + event.target.href;
//     window.location.replace("openwith:" + event.target.getAttribute('openwith') + ":" + event.target.href);
    GM_openInTab("openwith:" + event.target.getAttribute('openwith') + ":" + event.target.href);
//     alert("openwith:" + event.target.getAttribute('openwith') + ":" + event.target.href);
    event.preventDefault();
  }
}

document.addEventListener("click", handler, true);