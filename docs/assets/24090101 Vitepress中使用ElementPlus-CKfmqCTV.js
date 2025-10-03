const n=`---\r
category: '编程'\r
tags: ['vitepress','elementplus','vue']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
---\r
\r
!img[ElementPlus](elementplus)\r
\r
\r
> **ElementPlus** 是 **vue** 生态中非常出名的组件库，实际开发中会用来了开发一些后端管理页面。  \r
> \`ElementPlus官网\` :  https://element-plus.org/zh-CN/ 🔥\r
\r
<br/>\r
\r
> **下面提供两种方案:**    \r
> ① 集成图标  \r
> ② 不集成图标  \r
\r
---\r
\r
\r
## 1. 不使用配套图标\r
\r
::: info 提示💡\r
\r
**如果你对 \`ElementPlus\` 不太熟悉，可以不安装图标，然后注意查看代码注释**\r
\r
:::\r
\r
### 1.1 安装 element-plus\r
\r
> 安装依赖包\r
\r
\`\`\`shell [npm]\r
npm install element-plus --save\r
\`\`\`\r
\r
\r
### 1.2. 配置代码 \r
\r
> 找到 vitepress 项目的配置文件，然后修改对应代码：\r
\r
**配置文件**： \`docs/.vitepress/theme/index.js\` 👈    \r
\r
\r
\`\`\`js [说明版]\r
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
\r
### 1.3 使用\r
\r
**因为全局注册，你可以直接在项目中的 \`vue\` 文件中使用**\r
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
\`\`\`shell [npm]\r
npm install element-plus --save\r
\`\`\`\r
\r
- **安装 图标依赖** <Badge type='danger'>注意图标是单独的包，所以要另外安装它</Badge>  \r
\r
\`\`\`shell [npm]\r
npm install @element-plus/icons-vue\r
\`\`\`\r
\r
### 2.2 配置代码 \r
\r
\`\`\`js [说明版]\r
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
\r
\r
\r
\r
\r
\r
\r
`;export{n as default};
