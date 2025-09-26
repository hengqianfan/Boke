const n=`---\r
category: '编程'\r
tags: ['vitepress','elementPlus','vue']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
\r
---\r
\r
\r
\r
<br/>\r
\r
# vitepress 中使用 ElementPlus\r
\r
\r
\`ElementPlus官网\` :  https://element-plus.org/zh-CN/\r
\r
\r
## 1. 不使用配套图标\r
\r
::: warning <Badge type='warning'>提示</Badge>\r
\r
**如果你对 ElementPlus 不太熟悉，可以不安装图标，然后注意查看说明版代码**\r
\r
:::\r
\r
### 1.1 安装 element-plus\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm install element-plus --save\r
\`\`\`\r
\r
\`\`\`shell [yarn]\r
yarn add element-plus\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm install element-plus\r
\`\`\`\r
\r
:::\r
\r
### 1.2. 配置代码 \r
\r
\r
\r
\r
---\r
\r
**配置文件**： \`docs/.vitepress/theme/index.js\` 👈    \r
\r
::: code-group\r
\r
\`\`\`js:line-numbers{3,4,8} [纯净版]\r
import { h } from 'vue'\r
import DefaultTheme from 'vitepress/theme'\r
import ElementPlus from 'element-plus'\r
import 'element-plus/dist/index.css'\r
export default {\r
  extends: DefaultTheme,\r
  enhanceApp({ app }) {\r
    app.use(ElementPlus)\r
  },\r
}\r
\`\`\`\r
\r
\r
\r
\`\`\`js{3-6,10-11} [说明版]\r
import { h } from 'vue'\r
import DefaultTheme from 'vitepress/theme'\r
// ⭐1. 导入 elementplus \r
import ElementPlus from 'element-plus'\r
// ⭐2. 导入 elementplus 的样式\r
import 'element-plus/dist/index.css'\r
export default {\r
  extends: DefaultTheme,\r
  enhanceApp({ app }) {\r
    // ⭐3. 注册 elementplus\r
    app.use(ElementPlus)\r
  },\r
}\r
\`\`\`\r
\r
:::\r
\r
\r
### 1.3 使用\r
\r
- 因为全局注册，你可以直接在项目中的 \`vue\` 文件中使用\r
\r
 \r
<br/>\r
 \r
<hr class="hr-twill-colorful">\r
 \r
<br/>\r
 \r
\r
## 2. 使用配套图标 \r
\r
<br/>\r
\r
### 2.1 安装依赖\r
\r
- **安装 element-plus** \r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm install element-plus --save\r
\`\`\`\r
\r
\`\`\`shell [yarn]\r
yarn add element-plus\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm install element-plus\r
\`\`\`\r
\r
:::\r
\r
\r
- **安装 图标依赖** <Badge type='danger'>注意图标是单独的包，所以要另外安装它</Badge>  \r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm install @element-plus/icons-vue\r
\`\`\`\r
\r
\`\`\`shell [yarn]\r
yarn add @element-plus/icons-vue\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm install @element-plus/icons-vue\r
\`\`\`\r
\r
:::\r
\r
### 2.2 配置代码 \r
\r
\r
---\r
\r
::: code-group\r
\r
\`\`\`js [纯净版]\r
import { h } from 'vue'\r
import DefaultTheme from 'vitepress/theme'\r
import ElementPlus from 'element-plus'\r
import 'element-plus/dist/index.css'\r
import * as ElementPlusIconsVue from '@element-plus/icons-vue'\r
export default {\r
  extends: DefaultTheme,\r
  enhanceApp({ app }) {\r
    app.use(ElementPlus)\r
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {\r
      app.component(key, component)\r
    }\r
  },\r
}\r
\`\`\`\r
\r
\r
\r
\r
\`\`\`js:line-numbers{7-8,14-16} [说明版]\r
import { h } from 'vue'\r
import DefaultTheme from 'vitepress/theme'\r
//  1. 导入 elementplus \r
import ElementPlus from 'element-plus'\r
//  2. 导入 elementplus 的样式\r
import 'element-plus/dist/index.css'\r
// ⭐ 4. 导入 elementplus-icon\r
import * as ElementPlusIconsVue from '@element-plus/icons-vue'\r
export default {\r
  extends: DefaultTheme,\r
  enhanceApp({ app }) {\r
    // 3. 注册 elementplus\r
    app.use(ElementPlus)\r
    // ⭐ 5. 注册 elementplus 图标\r
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {\r
      app.component(key, component)\r
    }\r
  },\r
}\r
\`\`\`\r
\r
:::\r
\r
\r
\r
\r
\r
\r
`;export{n as default};
