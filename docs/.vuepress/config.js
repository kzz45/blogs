module.exports = {
  base: "/blogs/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "walle.png",
      },
    ],
  ],
  title: "OMG运维管理",
  description: "达那蛋",
  theme: "@vuepress/theme-default",
  themeConfig: {
    sidebar: "auto",
    // lastUpdated: "Last Updated",
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "日报",
        link: "/daily/",
      },
        {
          text: "基础",
          link: "/basic/",
        },
      // {
      //   text: "监控",
      //   link: "/monitor/",
      // },
      {
        text: "容器",
        link: "/container/",
      },
      {
        text: "小册",
        link: "/book/",
      },
    ],
  },
};
