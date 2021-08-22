/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "806f74f4b9176511d1649fb00e9bc6af"
  },
  {
    "url": "assets/css/0.styles.5816bb88.css",
    "revision": "7236a39899b7e4fff8d6e25ad16890b3"
  },
  {
    "url": "assets/img/centralized-vcs.fc277603.png",
    "revision": "fc2776036da25e7a2af7f41f0aa6460f"
  },
  {
    "url": "assets/img/distributed-vcs.82572b90.png",
    "revision": "82572b90e32fac3ef8736c00dd8b3348"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.440388db.js",
    "revision": "ef730f0f6f062b289795e460c4c46c54"
  },
  {
    "url": "assets/js/11.6da9005d.js",
    "revision": "bd48b792ce3284074086092c739a6c02"
  },
  {
    "url": "assets/js/12.f19e8d0d.js",
    "revision": "3ce0249b051b4f25128eff631892503c"
  },
  {
    "url": "assets/js/13.3af9c0ff.js",
    "revision": "3b3040ca820f7eb90ca927350fa75401"
  },
  {
    "url": "assets/js/14.df371ebd.js",
    "revision": "048c5fc2fe240d8800f41e182b024abe"
  },
  {
    "url": "assets/js/15.881072d0.js",
    "revision": "4b8a9ddb1f56d79451d0a4dc08b96906"
  },
  {
    "url": "assets/js/16.dee2561d.js",
    "revision": "92a2685cd8da5456afd1ce885e74c40e"
  },
  {
    "url": "assets/js/17.409090c6.js",
    "revision": "8d04d7f68ab2eede465d1b959d977ca9"
  },
  {
    "url": "assets/js/18.79620f72.js",
    "revision": "fd6467af1ae1fd9d302199298939ab6f"
  },
  {
    "url": "assets/js/19.a0e1ba90.js",
    "revision": "3cec6d359690791a9b486273097a2893"
  },
  {
    "url": "assets/js/2.23e1e6d1.js",
    "revision": "667f8bc9ab8fe416550609ffefab7249"
  },
  {
    "url": "assets/js/20.3244c3bf.js",
    "revision": "e8d705414862214189fd668e4e5292c6"
  },
  {
    "url": "assets/js/21.8edf00c5.js",
    "revision": "59290ebb3806b636efacf2b7f29f4d86"
  },
  {
    "url": "assets/js/22.970a7496.js",
    "revision": "bffb6abafd1805e37d91db5904d869e9"
  },
  {
    "url": "assets/js/23.96456720.js",
    "revision": "f4b7d464ac49e6758a6ba6810717c2c0"
  },
  {
    "url": "assets/js/24.a200782b.js",
    "revision": "91a6723f0512d2e32e3b4ac8da9a773a"
  },
  {
    "url": "assets/js/25.834b7590.js",
    "revision": "a76ad955b3eccb34897a6f8f0e1b0c02"
  },
  {
    "url": "assets/js/26.983e6ea0.js",
    "revision": "244d745af2a57ad6e0d749b457de6d80"
  },
  {
    "url": "assets/js/3.e8b261f4.js",
    "revision": "21e771a63590a7510c5c55513b2a9789"
  },
  {
    "url": "assets/js/4.8c42d792.js",
    "revision": "97febc4d4a7fb63869f950daccc917b6"
  },
  {
    "url": "assets/js/5.fcf4a249.js",
    "revision": "74d203241ce4b875fdbcf33009c05a5a"
  },
  {
    "url": "assets/js/6.dc6659ac.js",
    "revision": "5249b4d1ef627225637d72e23ec37f3c"
  },
  {
    "url": "assets/js/7.b86000b9.js",
    "revision": "b45a5eebdd45593f2b94226d34bd0cd7"
  },
  {
    "url": "assets/js/8.7c66ca19.js",
    "revision": "35f70c2da5a1f6b0f708e1b2733a5662"
  },
  {
    "url": "assets/js/9.6a28503f.js",
    "revision": "aed9b0ec2d1e59b2e7ac97dba15fc3c8"
  },
  {
    "url": "assets/js/app.b148c577.js",
    "revision": "599233da3d9d30586c0639ccce5b8aca"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "8c75d233692b19d3f6b8762342ebb318"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "44eeb85ead237cfd00bbb8adb61b9cd8"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "813602267567469a5bfba77ceaba5943"
  },
  {
    "url": "index.html",
    "revision": "4d0d1e15f2c4dbec266586a904b5bf98"
  },
  {
    "url": "lessons/comment.html",
    "revision": "83e5ccd9410bed4a6ba7da2183aeef91"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "07566c75d62207e279b0ac07752339b1"
  },
  {
    "url": "lessons/functions.html",
    "revision": "4fbc10cf773b1baa656155ff75c452f7"
  },
  {
    "url": "lessons/index.html",
    "revision": "0c7b457ca8bcbe914798e7ef9784f7f7"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "5b5d8e8d69dc339953d0e47e7b2ceb09"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "9734c8f9ed43e679a32320315e80cc34"
  },
  {
    "url": "lessons/modules.html",
    "revision": "88e3415c40592672ffc4f76a18b6d871"
  },
  {
    "url": "lessons/operator.html",
    "revision": "a689a3435caf09646ea0ab32986a9222"
  },
  {
    "url": "lessons/script.html",
    "revision": "16ef801546992663f77d2fdc9867141a"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "287783e435b24478acf2d1d0084eba7b"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "4dd2b1319580564d927fc5187d0e6b65"
  },
  {
    "url": "lessons/setup.html",
    "revision": "f972a87752d42204b4ad63844141d49f"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "553a8347bfdc1f1aca2ce1954b24ef53"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "55a53b7f2804224176a2327091ea6077"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "836a894db2984c29019b16e3a57077f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
