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
    "revision": "e43e797c03c2eed146ca703074227078"
  },
  {
    "url": "assets/css/0.styles.5816bb88.css",
    "revision": "7236a39899b7e4fff8d6e25ad16890b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be2d0ec9.js",
    "revision": "1600e5cdb961d76db9c45817517744c7"
  },
  {
    "url": "assets/js/11.722d7567.js",
    "revision": "81b9f84d2c9ed84f28e56e502193e21f"
  },
  {
    "url": "assets/js/12.e5da63ff.js",
    "revision": "5629d5484470b2768fdd593a651785b4"
  },
  {
    "url": "assets/js/13.a4bd74e0.js",
    "revision": "b394c10fa4e15340e894e4d06b32aa77"
  },
  {
    "url": "assets/js/14.b1cb0d78.js",
    "revision": "ec12c556fc881542e012dc0548914138"
  },
  {
    "url": "assets/js/15.2cf00ad3.js",
    "revision": "3a3fdb1ad2097f462c6b4a21c668ddeb"
  },
  {
    "url": "assets/js/16.b98ad7af.js",
    "revision": "222dc10d5e506f46eaeaf4f8fc8aa88e"
  },
  {
    "url": "assets/js/17.9d1f45f6.js",
    "revision": "47ba3b88d17ed0aaac1bc1b6ae0e122f"
  },
  {
    "url": "assets/js/18.f396bc98.js",
    "revision": "b214e25d4c67e5e7c1f2d60aa4603151"
  },
  {
    "url": "assets/js/19.7c35a4a6.js",
    "revision": "965b0172331f5f8c9be3a1034ae5ce3f"
  },
  {
    "url": "assets/js/2.dae5834e.js",
    "revision": "63195b20089e9064ebdb4c411c9a6d25"
  },
  {
    "url": "assets/js/20.794276a5.js",
    "revision": "c26264b52889fcdc2621ca7f1499d579"
  },
  {
    "url": "assets/js/3.76401cf9.js",
    "revision": "240a912cc9ec2702294e3087d30c961d"
  },
  {
    "url": "assets/js/4.f23fa452.js",
    "revision": "3de73e9a411bd84c1eff4c356775a864"
  },
  {
    "url": "assets/js/5.0af50bf2.js",
    "revision": "59805aadb0af02129848af5de71cab6e"
  },
  {
    "url": "assets/js/6.7fb4c753.js",
    "revision": "d9237fb1ba7b5c3b9b74f31b1ed8e762"
  },
  {
    "url": "assets/js/7.69114d76.js",
    "revision": "6f8ab81d0a2470397b8c08045b8e2402"
  },
  {
    "url": "assets/js/8.2bd7f8cc.js",
    "revision": "adc548d7433616ab4d5c09d8e30bceca"
  },
  {
    "url": "assets/js/9.84ffb8c2.js",
    "revision": "15f698d63cf5fab0dbe29a55149f8c68"
  },
  {
    "url": "assets/js/app.e448ba8c.js",
    "revision": "e67ef449d95c6540ff167da31c5e8fb3"
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
    "revision": "3be982eb94d90bb2bb3032d55b5bb9b6"
  },
  {
    "url": "lessons/comment.html",
    "revision": "79a678f3fb7630fc847da7f4e5555c7e"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "b4ad1008b3ab54fc92ad59768ff6e3f7"
  },
  {
    "url": "lessons/index.html",
    "revision": "5288d1d312572ea22dd536869a0c4f0f"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "8d4409b3601e31ce128a869fda0ad494"
  },
  {
    "url": "lessons/operator.html",
    "revision": "019199d7029b2f3d1b3addb504e473c8"
  },
  {
    "url": "lessons/script.html",
    "revision": "2a0f76b86ba3a6c6a6069a3e87b4e22d"
  },
  {
    "url": "lessons/setup.html",
    "revision": "a3ceb62b408ac8f9edad33cc05111817"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "227cf5dd78a60d0c443ec2e6faadd840"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "2c3c781fe629bf7a749716f38af35305"
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
