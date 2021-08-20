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
    "revision": "bcb90a100c5800ff0a8d85d6676d55c9"
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
    "url": "assets/js/11.5f1f143d.js",
    "revision": "5c72713622476123d72c03a740c787d1"
  },
  {
    "url": "assets/js/12.900d9a1e.js",
    "revision": "aaefd89fb68a0934669dc48719c4673b"
  },
  {
    "url": "assets/js/13.09bca41f.js",
    "revision": "41699f9f5293ba56c49467d7018645d2"
  },
  {
    "url": "assets/js/14.7c0e40b7.js",
    "revision": "a2f2517594877fd7d9e4aa5ed40c9541"
  },
  {
    "url": "assets/js/15.37e76d9c.js",
    "revision": "222b73c49ae0f9e2e62034a5708a49b7"
  },
  {
    "url": "assets/js/16.0cb0e974.js",
    "revision": "1a1117759cddbd1dedc5a09ce5aa6fe2"
  },
  {
    "url": "assets/js/17.9f6223cf.js",
    "revision": "d4dd622f81a7e6f4f7c3392c4b4fcc23"
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
    "url": "assets/js/21.3677324b.js",
    "revision": "86fd2fcf6d8847860335b8a2ba96ab9e"
  },
  {
    "url": "assets/js/22.4d9cc59b.js",
    "revision": "ef7ce4aa9a206af3c4e76b129f7482ce"
  },
  {
    "url": "assets/js/23.59830cbe.js",
    "revision": "c9f200562ea1f2b66472aa4ff2515e81"
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
    "url": "assets/js/app.cd62e12e.js",
    "revision": "396f49c4aba30b315bd30af89e926593"
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
    "revision": "772a7090c0bb004166e87bf099136fd4"
  },
  {
    "url": "lessons/comment.html",
    "revision": "086a9a07fc72adaf3d214ee58ba23b10"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "bcda12cbc83e3a9e8993b5e7404c2f81"
  },
  {
    "url": "lessons/functions.html",
    "revision": "26a685de63e6b589dde939f565be254d"
  },
  {
    "url": "lessons/index.html",
    "revision": "b924b739196a716f0f0a90f2f22a3443"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "5cd2467da00c299391ba734d3cbb131c"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "f679deecc427759c28ac24dfca05f411"
  },
  {
    "url": "lessons/modules.html",
    "revision": "d83219282b1cc0df272d1e330e767c3c"
  },
  {
    "url": "lessons/operator.html",
    "revision": "0f5bab604d081591c3d224ed5363197a"
  },
  {
    "url": "lessons/script.html",
    "revision": "79239729e44e45287ed3c3c85d6dbfd8"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "3c541efbafc0c1c855de9c75e7340075"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "35469c45a23d0d5c2e3465c8ea85bdc0"
  },
  {
    "url": "lessons/setup.html",
    "revision": "c0f0247412b6b9bf4f30be6821dcaf66"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "539e8bbfb2afa8d565c44d98a63062b7"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "f1ad2416764cbe04ca414fae17496b85"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "55f97246d6910f03d7eeffa160e374c3"
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
