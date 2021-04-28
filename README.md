### [Crackle](https://github.com/warren-bank/crx-Crackle/tree/webmonkey-userscript/es5)

[Userscript](https://github.com/warren-bank/crx-Crackle/raw/webmonkey-userscript/es5/webmonkey-userscript/Crackle.user.js) for [crackle.com](https://www.crackle.com/) to run in both:
* the [WebMonkey](https://github.com/warren-bank/Android-WebMonkey) application for Android
* the [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) web browser extension for Chrome/Chromium

It addresses the problem that:
* the [crackle.com](https://www.crackle.com/) website requires ES6
  - none of its pages will load in an old browser that only supports ES5

Its purpose is to:
* redirect all pages on the [crackle.com](https://www.crackle.com/) website to a single target page
  - [this page](https://www.crackle.com/tos) was chosen because it contains a minimal amount of script and style
* after the target page has been loaded
  - replace the page's content with a new single-page app (SPA) that only requires ES5
  - this SPA provides access to all movies and TV series
  - videos for a chosen movie or TV episode can be transferred to an external video player

#### Notes:

* depending on your device and internet connection, the SPA may take a few seconds (or more) to load
  - rather than lazy loading 20 shows/movies at a time as the user scrolls down, the SPA preloads metadata about _all_ shows and movies beforehand
  - the SPA uses a persistent cache to prevent the need to download this data more than once during the initial load
  - lists of episodes in TV series are _not_ cached

#### Changelog:

* v1.x
  - works on deep links to the [crackle.com](https://www.crackle.com/) website
    * `/watch/movie_id`
    * `/watch/series_id`
    * `/watch/series_id/episode_id`
  - does _not_ provide any way to navigate through the site to reach these pages

* v2.x
  - redirects all pages to the SPA
  - does _not_ support deep links

* v3.x
  - works on deep links to the [crackle.com](https://www.crackle.com/) website
    * `/watch/movie_id`
    * `/watch/series_id`
    * `/watch/series_id/episode_id`
  - redirects all _other_ pages to the SPA
  - code combines _v1.x_ with _v2.x_
    * refactors both to share common bits

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
