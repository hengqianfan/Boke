const r=`---\r
category: '编程'\r
tags: ['vitepress','mermaid','vue']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
\r
---\r
 \r
\r
 \r
<br/>\r
 \r
# vitepress 中使用 mermaid 流程图\r
\r
## 原文参考\r
\r
::: info <Badge type='info'>参考文章</Badge>\r
\r
**链接：** https://whlit.github.io/blog/vitepress-mermaid.html  \r
\r
**介绍：** 原作者是用ts语法写的，非常简洁，水平高的朋友可以直接去原文阅览\r
\r
:::\r
\r
👆\r
**建议先看原文，看不懂，或者迷惑了再看下文，因为本文比较啰嗦**\r
\r
## 0. 前置基础\r
\r
::: details 你可能需掌握的知识\r
- 掌握基本的 es6 语法\r
- 会，或者想用 markdown 语法来实现流程图\r
- 了解基本的vue组件知识\r
:::\r
\r
## 1. 实现方式\r
\r
\r
::: info\r
🔘 **vitepress** 是基于 \`markdown-it\` 实现的MD代码样式的渲染，所以可以通过编写插件的方式引入与集成 \`mermaid\` 来实现流程图的功能。  \r
🔘 **mermaid** 简而言之，是 \`markdown\` 的一种扩展语法  \r
\r
:::\r
\r
<br/>\r
\r
<Badge type='info'>本文的实现思路</Badge>  \r
\r
<br/>\r
\r
<br/>\r
\r
\r
\`\`\`mermaid\r
---\r
title: 实现流程\r
---\r
flowchart LR\r
  A[myMermaid.js] -->|提供渲染的函数| B[Mermaid.vue]\r
  A -->|作为插件导入VP项目中| C[config.js]\r
  B -->|注册组件| D[theme/index.js] \r
  E([安装mermaid])\r
  E --> |提供流程图支持|A\r
\`\`\`\r
<br/>\r
\r
\r
\r
---\r
\r
::: details 相关\r
- [vitepress 的相关说明与插件配置](https://vitepress.dev/zh/guide/markdown#advanced-configuration){target="_blank"}  \r
- [mermaid 文档](https://mermaid.js.org/){target="_blank"}\r
:::\r
\r
\r
\r
## 2. 安装依赖\r
\r
因为 \`vitepress\` 自带 \`markdown-it\` 所以只需要额外安装 \`mermaid\` 的依赖\r
\r
::: code-group\r
\r
\`\`\`js [npm]\r
npm i mermaid\r
\`\`\`\r
\`\`\`js [pnpm]\r
pnpm i mermaid\r
\`\`\`\r
:::\r
\r
## 3. 自定义插件脚本\r
\r
你可以在 \`.vitepress\` 目录下新建一个 \`myscript\` 文件夹  \r
\r
当然，你可以放在任何你喜欢的位置，但请记住它的位置\r
\r
然后新建插件脚本 \`myMermaid.js\`\r
\r
<br/>\r
\r
\`\`\`mermaid\r
---\r
title: 实现流程\r
---\r
flowchart LR\r
  A[myMermaid.js] -->|提供渲染的函数| B[Mermaid.vue]\r
  A -->|作为插件导入VP项目中| C[config.js]\r
  B -->|注册组件| D[theme/index.js] \r
  E([安装mermaid])\r
  E --> |提供流程图支持|A\r
\`\`\`\r
\r
\r
\r
\`\`\`js\r
// 使用安装的依赖 mermaid \r
import mermaid from 'mermaid'\r
\r
// 这个函数是拿给我们自定义的组件调用的：（ mermaid.vue 中调用）\r
// 将符合 mermaid 语法的代码转化为可视化的流程图\r
export async function render(id, code) {\r
    mermaid.initialize({ startOnLoad: false })\r
    const { svg } = await mermaid.render(id, code)\r
    return svg\r
}\r
\r
// 这个函数是就是我们的插件逻辑 ：（ config.js/ts 中调用）\r
export default function mermaidPlugin(md) {\r
\r
    const fence = md.renderer.rules.fence?.bind(md.renderer.rules)\r
\r
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {\r
        const token = tokens[idx]\r
        const language = token.info.trim()\r
\r
        // 当代码块语言为 mermaid 时 ，让我们的自定义组件成渲染流程图\r
        if (language.startsWith('mermaid')) {\r
            return \`<Mermaid id="mermaid-\${idx}" code="\${encodeURIComponent(token.content)}"></Mermaid>\`\r
        }\r
\r
        return fence(tokens, idx, options, env, self)\r
    }\r
}\r
\r
\`\`\`\r
\r
## 4. 自定义组件\r
\r
注意：  \r
① 组件中通过导入的脚本，实现转化与渲染，一定别弄错位置  \r
② 因为组件中使用了 \`async\`  ，注册组件时的那个函数也需要 \`async\`  \r
\r
- 在 \`components\` 文件中 新建 \`Mermaid.vue\`\r
\r
::: code-group\r
\r
\`\`\`vue [示例版本]\r
<template>\r
    <div v-html="svgRef"></div>\r
</template>\r
\r
<script setup ts>\r
import { ref, onMounted } from 'vue'\r
// 调用我们写好的脚本，利用它实现将代码转换为流程图的功能\r
import { render } from '../../../myscript/myMermaid'\r
\r
const props = defineProps({\r
    id: String,\r
    code: String,\r
})\r
//  注意此处的 async \r
onMounted(async () => {\r
    svgRef.value = await render(props.id, decodeURIComponent(props.code))\r
})\r
\r
const svgRef = ref('')\r
<\/script>\r
<style scoped></style>\r
\r
\`\`\`\r
\r
\`\`\`vue [实验版本]\r
<!-- 这个是带放大功能的组件，但是代码未优化 -->\r
<template>\r
    <div class="zm-all">\r
        <div v-html="svgRef" class="zm-svg"></div>\r
        <div class="zm-button" @click.self="bigSvg(e)">\r
        </div>\r
    </div>\r
</template>\r
<script setup ts>\r
import { ref, onMounted } from 'vue'\r
import { render } from '../../../myscript/myMermaid'\r
const props = defineProps({\r
    id: String,\r
    code: String,\r
})\r
onMounted(async () => {\r
    svgRef.value = await render(props.id, decodeURIComponent(props.code))\r
})\r
const svgRef = ref('')\r
const bigSvg = (e) => {\r
    // 获取 svg 的元素\r
    let item = document.getElementById(\`\${props.id}\`)\r
    // 找到它的父级，因为直接作用在它的上面样式不生效\r
    let itemP = item.parentNode\r
    // 判断父级中是否已存在\r
    let hasBig = ref(itemP.classList.contains('big'))\r
    // 如果已经存在 放大 那么点击事件会回复组件原本大小\r
    if (hasBig.value == true) {\r
        // 允许滚动\r
        document.body.style.overflow = 'visible'\r
        itemP.classList.remove('big')\r
        // 如果不存在 放大 那么点击事件会放大展示组件\r
    } else if (hasBig.value == false) {\r
        // 放大时，静止页面滚动\r
        document.body.style.overflow = 'hidden'\r
        itemP.classList.add('big')\r
    }\r
}\r
<\/script>\r
<style lang="scss" scoped>\r
.zm-all {\r
    padding: 10px;\r
    border: 2px dashed rebeccapurple;\r
    position: relative;\r
\r
    .zm-svg {\r
        transition: 1s ease;\r
    }\r
\r
    .big {\r
        transition: 1s ease;\r
        position: fixed;\r
        right: 10px;\r
        top: 10px;\r
        min-width: 80%;\r
        min-height: 80vh;\r
        padding: 20px;\r
        // background-color: blue;\r
        background-color: #e5cffb;\r
        z-index: 1000;\r
        border-radius: 10px;\r
        border: 2px dashed black;\r
\r
        .zm-button {\r
            right: 20px;\r
            top: 20px;\r
            position: fixed;\r
            background-color: red;\r
            z-index: 1001;\r
        }\r
    }\r
\r
    .zm-button {\r
        right: 10px;\r
        // left: 10px;\r
        top: 10px;\r
        // bottom: 10px;\r
        position: absolute;\r
        min-width: 16px;\r
        min-height: 16px;\r
        line-height: 16px;\r
        text-align: center;\r
        background-color: #67319c;\r
        z-index: 1001;\r
        color: white;\r
        border-radius: 8px;\r
    }\r
}\r
</style>\r
\`\`\`\r
\r
\r
:::\r
\r
## 5. 注册组件\r
\r
- 全局注册\r
\r
::: code-group\r
\r
\`\`\`js [js语法]\r
import DefaultTheme from 'vitepress/theme'\r
// 根据你的路径来\r
import Mermaid from '../../../components/Mermaid.vue'\r
export default {\r
  extends: DefaultTheme,\r
  // 注意此处的 async\r
  enhanceApp: async ({ app }) => {\r
    app.component('Mermaid', Mermaid)\r
  },\r
}\r
\`\`\`\r
\r
\r
\`\`\`ts [ts语法]\r
import type { Theme } from 'vitepress'\r
import DefaultTheme from 'vitepress/theme'\r
// 根据你的路径来\r
import Mermaid from '../../../components/Mermaid.vue'\r
\r
export default <Theme>{\r
  extends: DefaultTheme,\r
  // 注意此处的 async\r
  enhanceApp: async ({ app }) => {\r
    app.component('Mermaid', Mermaid)\r
  },\r
}\r
\r
\`\`\`\r
\r
:::\r
\r
## 6. 使用插件\r
\r
::: danger <Badge type='warning'>踩坑点</Badge>\r
记住！在 \`defineConfig\` 配置，不要写在 \`themeConfig\` 里面\r
:::\r
\r
- \`./vitepress/config.js\`中使用插件\r
\r
\r
\`\`\`js \r
// 导入我们之前插件中的另外一个函数\r
// 来使用插件功能\r
import mermaidPlugin from './script/myMermaid'\r
export default defineConfig({\r
  markdown: {\r
    config: (md) => {\r
      md.use(mermaidPlugin)\r
    },\r
  },\r
})\r
\`\`\`\r
\r
## 7. 效果演示\r
\r
::: info 演示\r
\r
---\r
<Badge type='info'>markdown代码块</Badge>\r
<pre>\r
\r
\`\`\`mermaid\r
flowchart LR\r
  Start --> Stop\r
\`\`\`\r
</pre>\r
\r
---\r
\r
<Badge type='info'>渲染效果</Badge>\r
\r
\`\`\`mermaid\r
flowchart LR\r
  Start --> Stop\r
\`\`\`\r
\r
\r
\r
\r
:::`;export{r as default};
