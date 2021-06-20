module.exports = {
  plugins: [
    "@vuepress/back-to-top",
    [
      "@mr-hope/copy-code",
      {
        selector: `div[class*="language-"] pre`,
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  base: process.env.BASE_URL || "/",
  title: "Learn Python",
  theme: "@vuepress/theme-default",
  evergreen: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "coding-armadillo/learn-python",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "lesson",
    docsBranch: "main",
    logo: "/logo.png",
    sidebar: "auto",
    searchPlaceholder: "Search...",
    smoothScroll: true,
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Lessons",
        link: "/lessons/",
      },
      {
        text: "Tags",
        link: "/tags/",
      },
    ],
  },
};
