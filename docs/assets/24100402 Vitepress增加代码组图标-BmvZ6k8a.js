const r=`---\r
category: '编程'\r
\r
tags: ['vitepress','vue']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
\r
\r
---\r
 \r
###### 24100402\r
 \r
<br/>\r
 \r
# vitepress 代码组增加图标\r
\r
## 1. 说明\r
\r
::: details 参考文章\r
\r
https://vpgi.vercel.app/getting-started.html  \r
\r
\r
::: \r
\r
- 只会在\`代码组\`中生效，普通的\`代码块\`不会  \r
\r
- 不了解二者的区别，参考 **vitepress** 官方文档 [\`enter\`](https://vitepress.dev/zh/guide/markdown){target="_blank"} \r
## 2. 安装依赖\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm install vitepress-plugin-group-icons -D\r
\`\`\`\r
\r
\`\`\`shell [yarn]\r
yarn add vitepress-plugin-group-icons -D\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm add -D vitepress-plugin-group-icons\r
\`\`\`\r
\r
\r
:::\r
## 3. 配置代码\r
\r
::: code-group\r
\r
\`\`\`js:line-numbers{2,7,12} [.vitepress/config.mjs]\r
import { defineConfig } from 'vitepress'\r
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'\r
\r
export default defineConfig({\r
  markdown: {\r
    config(md) {\r
      md.use(groupIconMdPlugin)\r
    },\r
  },\r
  vite: {\r
    plugins: [\r
      groupIconVitePlugin()\r
    ],\r
  }\r
})\r
\`\`\`\r
\r
:::\r
\r
## 4. 配置样式\r
\r
::: code-group\r
\r
\`\`\`js:line-numbers{2} [.vitepress/theme/index.js]\r
import Theme from 'vitepress/theme'\r
import 'virtual:group-icons.css'\r
\r
export default Theme\r
\`\`\`\r
\r
:::`;export{r as default};
