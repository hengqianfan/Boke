const n=`---\r
category: '编程'\r
tags: ['vitepress','vue','medium-zoom']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
\r
\r
---\r
\r
\r
 \r
<br/>\r
\r
# vitepress 中集成图片预览\r
\r
\r
\r
## 1. 使用 medium-zoom 实现\r
\r
::: info <Badge type='tip'>简述</Badge>\r
**这个办法比较简单，只需要在安装依赖包后，配置两个主题文件即可：**  \r
\r
\`theme\\index.css\` 和 \`theme\\index.js\` \r
\r
---\r
\r
\r
<!-- |\`维度\`|\`评分\`|\r
|:---:|:---:|\r
|**快捷集成**| ❤❤❤❤🤍|\r
|**实用程度**| ❤❤❤❤🤍|\r
|**推荐指数**| ❤❤❤❤❤| -->\r
\r
\r
:::\r
\r
\r
### 1.1 安装依赖\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm i medium-zoom\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm i medium-zoom\r
\`\`\`\r
\r
:::\r
\r
\r
---\r
\r
### 1.2 添加样式\r
\r
文件位置：\`\\.vitepress\\theme\\index.css\`\r
\r
\`\`\`css\r
.medium-zoom-overlay {\r
  z-index: 20;\r
}\r
.medium-zoom-image {\r
  z-index: 21;\r
}\r
\r
\`\`\`\r
\r
---\r
\r
### 1.3 配置代码\r
\r
\r
> 有两种可选配置方法：\r
\r
- **\`全局生效\`** <Badge type='warning'>⭐推荐</Badge> \r
- **\`部分生效\`** <Badge type='danger'>不建议</Badge>\r
\r
\r
\r
\r
文件位置： \`\\.vitepress\\theme\\index.js\`\r
\r
\r
::: code-group\r
\r
\`\`\`js [1️⃣ 全局生效]\r
import DefaultTheme from 'vitepress/theme'\r
import { onMounted, watch, nextTick } from 'vue'\r
import { useRoute } from 'vitepress'\r
import mediumZoom from 'medium-zoom'\r
import './index.css'\r
\r
export default {\r
  ...DefaultTheme,\r
  setup() {\r
    const route = useRoute()\r
    const initZoom = () => {\r
        // 1. 【选择一】对全局图片生效\r
        // ❌警告：如果你自定义了vitepress主题布局，可能会缺失 .main 类名，\r
        // 所以根据你的实际布局类名来填写，\r
        // 如果你不懂上述的话，且运行后项目并未实现放大功能\r
        // 请将 '.main img' 改为 'img' 或许能够解决你的问题\r
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })\r
    };\r
    onMounted(() => {\r
      initZoom()\r
    })\r
    watch(\r
      () => route.path,\r
      () => nextTick(() => initZoom())\r
    )\r
  }\r
}\r
\`\`\`\r
\r
\r
\r
\`\`\`js [2️⃣ 特定生效]\r
import DefaultTheme from 'vitepress/theme'\r
import { onMounted, watch, nextTick } from 'vue'\r
import { useRoute } from 'vitepress'\r
import mediumZoom from 'medium-zoom'\r
import './index.css'\r
\r
export default {\r
  ...DefaultTheme,\r
  setup() {\r
    const route = useRoute()\r
    const initZoom = () => {\r
        // 2. 【选择二】对具有特定css类名的图片生效（ 见后文提示 ）\r
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })\r
    };\r
    onMounted(() => {\r
      initZoom()\r
    })\r
    watch(\r
      () => route.path,\r
      () => nextTick(() => initZoom())\r
    )\r
  }\r
}\r
\`\`\`\r
\r
\r
\`\`\`md:line-numbers{2} [特定生效的演示]\r
👇\r
![你的图片](logo.png){data-zoomable}\r
<!-- 在基本的图片语法后加上 {data-zoomable}  即可-->\r
<!-- 考虑到和别的项目冲突，建议用全局的，省事，还不用特意去记-->\r
\`\`\`\r
\r
\r
\`\`\`js [快捷更改]\r
// 1. 全局生效\r
mediumZoom('.main img', { background: 'var(--vp-c-bg)' })\r
\r
// 2. 特定生效\r
mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })\r
\`\`\`\r
---\r
\r
\r
:::\r
\r
\r
\r
\r
\r
\r
### 1.4 演示效果\r
\r
::: info <Badge type='warning'>提示</Badge>\r
**当鼠标指针悬浮在图片上时，会显示放大镜**\r
:::\r
\r
\r
![](/others/24082801.png)\r
\r
\r
### 1.5 踩坑点\r
\r
::: info <Badge type='warning'>提示</Badge>\r
\r
在重构我的 \`vitepress\` 博客后，我放弃了系统的默认布局，基本上重写了项目中的每一个的组件，  \r
当我利用 \`mediumZoom\` 重新实现新博客的放大功能时，发现放大功能无法生效，  \r
**排错后，发现是因为重写组件后我的博客没有了\`.main\`这个类名，这导致原来的配置失效，**   \r
所以，如果你出现了同样的问题，可以在自己的布局组件中合适位置加上 \`.main\`，  \r
或者将 \`'.main img'\`替换为自己的布局类名，例如 \`'.myDoc img'\` ，  \r
亦或者直接让全部图片生效，将 \`'.main img'\` 替换为 \`'img'\` 。\r
\r
:::\r
\r
\r
\r
\`\`\`js\r
// 省略...\r
export default {\r
  ...DefaultTheme,\r
  setup() {\r
    const initZoom = () => {\r
    // 省略...\r
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })\r
    };\r
   // 省略...\r
  }\r
}\r
\`\`\``;export{n as default};
