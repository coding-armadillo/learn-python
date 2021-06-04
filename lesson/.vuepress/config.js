module.exports = {
  plugins: [
    "@vuepress/back-to-top",
    [
      "@mr-hope/copy-code",
      {
        selector: `div[class*="language-"] pre`,
      },
    ],
  ],
  title: "Learn Python",
  theme: "@vuepress/theme-default",
  evergreen: true,
  themeConfig: {
    logo:
      "https://raw.githubusercontent.com/coding-armadillo/coding-armadillo-logo/main/coding-armadillo-web.png",
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
