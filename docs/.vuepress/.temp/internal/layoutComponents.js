import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/lilithgames/Desktop/kongzz/src/blogs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/lilithgames/Desktop/kongzz/src/blogs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
