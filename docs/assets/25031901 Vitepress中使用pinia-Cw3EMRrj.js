const n=`---\r
aside: left\r
tags: ['修改中','pinia']\r
icon: 'vitepress'\r
open: true\r
id: 25031901\r
cover: 'vitepress'\r
\r
\r
\r
---\r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
 \r
# Vitepress中使用 pinia\r
\r
**\`官网\`**：https://pinia.vuejs.org/zh/\r
\r
## 1. 安装依赖\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm install pinia\r
\`\`\`\r
\r
\`\`\`shell [yarn]\r
yarn add pinia\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm install pinia\r
\`\`\`\r
\r
:::\r
\r
\r
## 2. 配置代码\r
\r
在 \`.vitepress/theme/index.js\` 中设置 Pinia：\r
\r
\`\`\`js\r
import { createPinia } from 'pinia'\r
import DefaultTheme from 'vitepress/theme'\r
\r
export default {\r
  extends: DefaultTheme,\r
  enhanceApp({ app }) {\r
    const pinia = createPinia()\r
    app.use(pinia)\r
  }\r
}\r
\`\`\`\r
\r
\r
## 3. 创建 store \r
\r
在 \`.vitepress/stores/counter.js\` 中创建示例 store：\r
\r
\`\`\`js\r
import { defineStore } from 'pinia'\r
export const useCounterStore = defineStore('counter', {\r
  state: () => ({ count: 0 }),\r
  actions: {\r
    increment() {\r
      this.count++\r
    }\r
  }\r
})\r
\`\`\`\r
\r
## 4. 组件中使用\r
\r
\r
\`\`\`vue\r
<script setup>\r
import { useCounterStore } from '../.vitepress/stores/counter'\r
const counter = useCounterStore()\r
<\/script>\r
\r
<template>\r
  <div>\r
    <p>Count: {{ counter.count }}</p>\r
    <button @click="counter.increment()">+1</button>\r
  </div>\r
</template>\r
\`\`\`\r
## 5. 持久化\r
\r
\r
- 安装持久化插件\r
\r
\`\`\`shell\r
pnpm install pinia pinia-plugin-persistedstate\r
\`\`\`\r
`;export{n as default};
