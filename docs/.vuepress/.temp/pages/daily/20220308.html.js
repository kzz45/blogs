export const data = {
  "key": "v-89aa47be",
  "path": "/daily/20220308.html",
  "title": "VuePress搭建个人Blog",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装配置",
      "slug": "安装配置",
      "children": []
    },
    {
      "level": 2,
      "title": "部署",
      "slug": "部署",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1646737020000,
    "contributors": [
      {
        "name": "kongzZ",
        "email": "kongzz45@foxmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "daily/20220308.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
