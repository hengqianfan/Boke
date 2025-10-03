const r=`---\r
category: '编程'\r
tags: ['vitepress','vue']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
---\r
\r
\r
## 使用 useRouter 钩子\r
\r
VitePress 提供 useRouter 钩子获取路由实例，支持 SPA 风格的无刷新跳转。\r
\r
\r
> 说明：   \r
> - <small>router.go(path: string)：跳转到指定路径。</small>    \r
> - <small>路径需为绝对路径（如 /about），若项目配置了 base，需包含 base 前缀（如 /docs/about）</small> 。  \r
\r
\`\`\`vue\r
<!-- 在 .md 文件或 Vue 组件中 -->\r
<template>\r
  <button @click="navigate">跳转到关于页</button>\r
</template>\r
\r
<script setup>\r
import { useRouter } from 'vitepress'\r
\r
const router = useRouter()\r
\r
const navigate = () => {\r
  // 使用绝对路径（需包含 VitePress 的 base 配置，如存在）\r
  router.go('/about')\r
}\r
<\/script>\r
\`\`\`\r
`;export{r as default};
