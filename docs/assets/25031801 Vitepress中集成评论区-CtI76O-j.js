const r=`---\r
category: '编程'\r
tags: ['vitepress','vue','Giscus']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
\r
---\r
\r
\r
\r
<br/>\r
\r
# 在 vitepress 中集成评论区\r
 \r
## 1. 集成 Giscus \r
\r
**\`官网\`**： https://giscus.app/zh-CN\r
\r
### 1.1 创建代码仓库\r
\r
> 在 GitHub 上创建或者拥有一个 \`vitepress\` 项目仓库\r
\r
### 1.2 开启 Discussions 功能\r
\r
> 开启 Github 仓库的 Discussions 功能 \r
\r
在仓库的 settings  -> General ->  **勾选 Discussions✅** \r
\r
![](/image/202503190007.png)\r
\r
![](/image/202503190009.png)\r
\r
### 1.3 安装 Giscus app \r
\r
> 在 Github 网页中安装 Giscus app （类似插件）  \r
\r
**\`点击安装\`** ：https://github.com/apps/giscus  \r
\r
\r
- **进入页面安装**\r
\r
![](/image/202503182344.png)\r
\r
- **根据自己情况，选择已建的 \`vitepress\` 的仓库，还是全部仓库**\r
\r
![](/image/202503182346.png)\r
\r
\r
- **后续，也可以通过 Github 网站中的设置随时修改  Giscus 的配置范围**\r
\r
![](/image/202503182353.png)\r
\r
\r
### 1.4 安装依赖\r
\r
在 \`vitepress\` 项目中安装依赖包\r
\r
\`\`\`shell\r
pnpm i @giscus/vue\r
\`\`\`\r
\r
\r
### 1.5 创建评论区组件\r
\r
<br/>\r
\r
#### 1.5.1 获取配置参数\r
\r
**\`官网\`**： https://giscus.app/zh-CN\r
\r
**进入官网后填写配置**  \r
\r
> **请注意：**  \r
> ① 仓库需要公开的  \r
> ② giscus app 已安装  \r
> ③ Discussions 功能已在仓库中启用。  \r
\r
\r
![](/image/202503190046.png)\r
\r
\r
**配置完成后，会得到相关参数数据**  \r
\r
![](/image/202503190047.png)\r
\r
#### 1.5.2 创建组件\r
\r
::: danger **💥常见错误**\r
\r
极有可能出现页面空白的情形   \r
\r
如果报错，把括号去掉  \r
\r
\`import { Giscus } from '@giscus/vue'\`  \r
\r
换为👇\r
\r
\`import Giscus from '@giscus/vue'\`  \r
\r
\r
\r
:::\r
\r
\r
在 \`.vitepress/theme/components\` 目录下新建 \`Comment.vue\`：\r
\r
\`\`\`vue\r
<script setup>\r
import { Giscus } from '@giscus/vue';\r
// 如果报错，把括号去掉\r
// import Giscus  from '@giscus/vue';\r
<\/script>\r
\r
<template>\r
  <div class="comment-container">\r
    <ClientOnly>\r
        <!-- 根据实际生成的数据填写/ -->\r
        <!-- 组件中没有 data 的前缀，但是对应之前生成的参数 -->\r
      <Giscus\r
        repo="your-github/repo"\r
        repoId="your_repo_id"\r
        category="General"\r
        categoryId="your_category_id"\r
        mapping="pathname"\r
        input-position="top"\r
        reactionsEnabled="1"\r
        emitMetadata="0"\r
        theme="preferred_color_scheme"\r
      />\r
    </ClientOnly>\r
  </div>\r
</template>\r
\`\`\`\r
\r
### 1.5 注册组件\r
\r
在 \`.vitepress/theme/index.js\` 中注册组件：\r
\r
\`\`\`js\r
import Comment from './components/Comment.vue'\r
\r
export default {\r
  enhanceApp({ app }) {\r
    app.component('Comment', Comment)\r
  }\r
}\r
\`\`\`\r
\r
### 1.6 使用组件\r
\r
在 \`.vitepress/theme/index.js\` 中使用组件：\r
\r
\`\`\`js\r
// 1. 导入组件\r
import Comment from './components/Comment.vue'\r
export default {\r
  extends: DefaultTheme,\r
  Layout: () => {\r
    return h(DefaultTheme.Layout, null, {\r
      // 2. 在评论区嵌入vitepress的布局插槽中\r
      'doc-after': () => h(Comment),\r
\r
    })\r
  },\r
\`\`\`\r
## 2. 集成 waline\r
\r
https://waline.js.org/\r
\r
\r
### 2.1 使用 \`vercel\` 部署 \r
\r
#### 2.1.1 创建评论服务器\r
\r
> 点击此处快速创建\r
\r
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample\r
\r
\r
::: details 若链接失效时，请参考此处\r
\r
https://waline.js.org/guide/deploy/vercel.html#%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2\r
\r
::: `;export{r as default};
