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
    "revision": "b8b4d519af2f3efc5ad304ef11c23bc3"
  },
  {
    "url": "assets/css/0.styles.56831745.css",
    "revision": "1ce6b9d49cd972cf97556468c9eb34c0"
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
    "url": "assets/img/screen-green.2e380c8e.png",
    "revision": "2e380c8e3d50474a1db56ad7af63a45c"
  },
  {
    "url": "assets/img/screen.e2f5d6c4.png",
    "revision": "e2f5d6c42f7ecdb9e024e49aa19a4a07"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/turtle-backward.6f157056.png",
    "revision": "6f157056e85ca7dde14722fdc91f41e6"
  },
  {
    "url": "assets/img/turtle-circle.c1ee919a.png",
    "revision": "c1ee919ab9068f7f255df94ef4a6d684"
  },
  {
    "url": "assets/img/turtle-fill.cb2e7e27.png",
    "revision": "cb2e7e270fd29b182e62ce31e915ffef"
  },
  {
    "url": "assets/img/turtle-forward-again.cfd34756.png",
    "revision": "cfd34756fbe301b553f810788ad4c02b"
  },
  {
    "url": "assets/img/turtle-forward.1382a457.png",
    "revision": "1382a457cafba913400522b39791c49c"
  },
  {
    "url": "assets/img/turtle-goto.0d6be904.png",
    "revision": "0d6be90469a5a03b9d868a1e40ea5e65"
  },
  {
    "url": "assets/img/turtle-home.06e174fe.png",
    "revision": "06e174fefc3c041e7b289556eaf1ea46"
  },
  {
    "url": "assets/img/turtle-left.2aae5442.png",
    "revision": "2aae54423f639f6830d86a917ed09ed9"
  },
  {
    "url": "assets/img/turtle-multiple.5d643a31.png",
    "revision": "5d643a319f0f594880118f6ca2a411d1"
  },
  {
    "url": "assets/img/turtle-pen-up-down.f8294a91.png",
    "revision": "f8294a91cced266a4623e71a4e1eb5b1"
  },
  {
    "url": "assets/img/turtle-pensize.169c157e.png",
    "revision": "169c157e88e6906545d5dde59b6a760c"
  },
  {
    "url": "assets/img/turtle-race.e9d00e3f.png",
    "revision": "e9d00e3f3996940f8805e147462d26a3"
  },
  {
    "url": "assets/img/turtle-red-white.1f74986f.png",
    "revision": "1f74986f39df58769d419e6576c884cf"
  },
  {
    "url": "assets/img/turtle-right.c8cd2a98.png",
    "revision": "c8cd2a98e5568a70fc3fd64fbc8ed136"
  },
  {
    "url": "assets/img/turtle-speed.e79a5321.png",
    "revision": "e79a53210e709482638903df176c6f4e"
  },
  {
    "url": "assets/img/turtle-square.a457510b.png",
    "revision": "a457510b4efdbb2847be5d38ac53a05d"
  },
  {
    "url": "assets/img/turtle-triangle.9a3c1c4a.png",
    "revision": "9a3c1c4aa28943c40dbb377b997a2387"
  },
  {
    "url": "assets/img/turtle.88630085.png",
    "revision": "886300853f8bc6429239c1c431896fa5"
  },
  {
    "url": "assets/js/10.18add3a3.js",
    "revision": "ee2eb880bc1da4b455a27bb59b5045c1"
  },
  {
    "url": "assets/js/11.9745c4cc.js",
    "revision": "aa934b33c5edea8becc49a9ce6636225"
  },
  {
    "url": "assets/js/12.e37269b6.js",
    "revision": "40b1c1e9de35a17643e0a2e93f80acc1"
  },
  {
    "url": "assets/js/13.25108511.js",
    "revision": "f77087861e90136f152409664f4d2781"
  },
  {
    "url": "assets/js/14.3c078c83.js",
    "revision": "e0fa0f9dbb0a18682fd702072f9c60a8"
  },
  {
    "url": "assets/js/15.08bbbbfb.js",
    "revision": "3dac9bb04f28c97c981687ddc348bdfe"
  },
  {
    "url": "assets/js/16.74417193.js",
    "revision": "2fc073e9131f8d6d76809224baf4d866"
  },
  {
    "url": "assets/js/17.38f90c48.js",
    "revision": "fa18b0978efa8fd2e809fdcaa3868e63"
  },
  {
    "url": "assets/js/18.b3801f26.js",
    "revision": "6a27ff9763765956088b45f5c14594a2"
  },
  {
    "url": "assets/js/19.7e868929.js",
    "revision": "edd66f55418ffc51cca96ec2bb613a6b"
  },
  {
    "url": "assets/js/2.8f21abc3.js",
    "revision": "79ed7f2502a8546be22602e96bb282a5"
  },
  {
    "url": "assets/js/20.36b3c8a0.js",
    "revision": "5305ae1fc9f37d5a71dfc471e7867f19"
  },
  {
    "url": "assets/js/21.7650d290.js",
    "revision": "c2b90b2e859e1aeea491dc26916c184a"
  },
  {
    "url": "assets/js/22.b95d2cf9.js",
    "revision": "136e6bb19530856783d30e554afbc6f3"
  },
  {
    "url": "assets/js/23.12ce5b72.js",
    "revision": "13bcdcd1a4fbcafa49a6d4d48b1b9aaf"
  },
  {
    "url": "assets/js/24.be7765ff.js",
    "revision": "08aea1bc9482ddaf5553fab94b42dfe0"
  },
  {
    "url": "assets/js/25.2fd5c2b2.js",
    "revision": "f74acec36c944cb3c0e76ce97b244aa9"
  },
  {
    "url": "assets/js/26.23c47d12.js",
    "revision": "9b42035196ea6451576cafd8c4472d66"
  },
  {
    "url": "assets/js/27.5fdade8b.js",
    "revision": "36236071143260cfb7e84d9eeeb43704"
  },
  {
    "url": "assets/js/28.521a8073.js",
    "revision": "f722a4afa230edbb52d903b6404ea286"
  },
  {
    "url": "assets/js/29.ffaf89d5.js",
    "revision": "f5919b505a57b6cccfdb4de45141a32a"
  },
  {
    "url": "assets/js/3.2ab2ef6a.js",
    "revision": "a631b314f9760710f42472e83902b751"
  },
  {
    "url": "assets/js/30.db4fdc2d.js",
    "revision": "4dc3ac52a8e2f0306ef04c6212149c6e"
  },
  {
    "url": "assets/js/31.6276f6e8.js",
    "revision": "107c0b7885aa46a1cd8a84aa1a6e61f9"
  },
  {
    "url": "assets/js/32.619fd7b0.js",
    "revision": "d2f4a4d3d47632944cc4fbe0ff1c94c1"
  },
  {
    "url": "assets/js/33.26e4eacf.js",
    "revision": "12fcd0ecc281a8556b1ce14e857ad132"
  },
  {
    "url": "assets/js/34.943769d9.js",
    "revision": "58b5a9370380b140406283538ad972ca"
  },
  {
    "url": "assets/js/4.bd65bb8c.js",
    "revision": "35ed41dd4884a3da71064358309a1f31"
  },
  {
    "url": "assets/js/5.da9de97f.js",
    "revision": "26cb3cb28dd6374ede4fdc88bc619816"
  },
  {
    "url": "assets/js/6.3a0e72c1.js",
    "revision": "2e083f56918040b0354809aaa02e670b"
  },
  {
    "url": "assets/js/7.247fd765.js",
    "revision": "abdcf08181eea9293063fcec528f68c0"
  },
  {
    "url": "assets/js/8.e723193c.js",
    "revision": "338271bc8dba72f0121734de95be35c1"
  },
  {
    "url": "assets/js/9.2d80030a.js",
    "revision": "cecc13a7b00ef3ead61e79374c96bb3a"
  },
  {
    "url": "assets/js/app.d2d54f5b.js",
    "revision": "307f9f9477db68ebfbc781ac1c6f01be"
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
    "revision": "ebf7febd387a0cc4609920a63930bb6d"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "674525510f81e9a5eaafa49fce9a0e22"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "fd64e174ef5d9b64a3526597c66fe4e9"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "0e3a759f0eb93429bfa1c48c2d54108b"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "1a9cb09323d168ec28a42695dbe78c8f"
  },
  {
    "url": "lessons/comment.html",
    "revision": "9b8e6a6ecf623b1c0bb0b0aee0827d03"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "6ff23c92bb3dac9a1264b4f451282bac"
  },
  {
    "url": "lessons/functions.html",
    "revision": "b642dbfb412ce47279c1e99ff518c015"
  },
  {
    "url": "lessons/index.html",
    "revision": "8f31d4d81acbf3811ec8c8106df06685"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "09a28c76e61ef1ce99af47500f1c3a65"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "cb286b77cf9781c238d3918dc2085a77"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "071fdab670575a1bcda19e1093aa3a00"
  },
  {
    "url": "lessons/modules.html",
    "revision": "60eb7255c4722c2e412992258a56cc90"
  },
  {
    "url": "lessons/operator.html",
    "revision": "e5ecabd40d9a92e7efcf0125623c8e6a"
  },
  {
    "url": "lessons/script.html",
    "revision": "828b7ef606f395bfd2a82105c72c7535"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "314362e4ae18a35bcedfbd9eb22768f6"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "b3bd13302e329733c3e703a85cdb428c"
  },
  {
    "url": "lessons/setup.html",
    "revision": "368820ad14b42fe21388b7627c3c3e2f"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "fa66b30ec3282fc5cda3f4c2103a1ad0"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "17ffe5fd4b370527bd107c3ea5ab7157"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "477e025d7d1352912778f50aa44319a3"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "3638eaa08b424076dc922c970f343f53"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "4d876aa1ab75ab31401f8ec58766fb05"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "0cd739d769fe3d4ec2281cf9fb8e6677"
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
