export const siteData = {
  "base": "/blogs/",
  "lang": "en-US",
  "title": "OMG运维管理",
  "description": "达那蛋",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "walle.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
