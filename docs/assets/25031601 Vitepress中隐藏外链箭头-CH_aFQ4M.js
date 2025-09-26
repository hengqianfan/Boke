const n=`---\r
category: '编程'\r
tags: ['vitepress','vue']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
\r
---\r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
 \r
\r
\r
\r
# 在 vitepress 中 隐藏外链自带的箭头\r
\r
## 1. 解决办法\r
\r
**原理是通过覆盖css样式，去除预设的链接样式**  \r
\r
在自己的主题样式的CSS文件中加入如下代码\r
\r
> \`文件路径\`：\`\\.vitepress\\theme\\style\\index.scss\`   \r
>     （ 我项目的路径被自己重构过，**只要写在全局样式的文件中就行** ）  \r
\r
👇👇👇\r
\r
\`\`\`css \r
\r
:is(.vp-external-link-icon, .vp-doc a[href*='://'], .vp-doc a[target='_blank']):not(.no-icon)::after {\r
    display: none;\r
}\r
\`\`\`\r
\r
\r
## 2. 补充信息\r
\r
原始样式的路径地址：  \r
\r
\`\\node_modules\\vitepress\\dist\\client\\theme-default\\styles\\components\\vp-doc.css\`  \r
\r
\r
相关组件的路径地址：  \r
\r
\`\\node_modules\\vitepress\\dist\\client\\theme-default\\components\\VPLink.vue\`\r
\r
\`\`\`css\r
/* 原来的样式如下 */\r
\r
/**\r
 * External links\r
 * -------------------------------------------------------------------------- */\r
\r
/* prettier-ignore */\r
:is(.vp-external-link-icon, .vp-doc a[href*='://'], .vp-doc a[target='_blank']):not(.no-icon)::after {\r
  display: inline-block;\r
  margin-top: -1px;\r
  margin-left: 4px;\r
  width: 11px;\r
  height: 11px;\r
  background: currentColor;\r
  color: var(--vp-c-text-3);\r
  flex-shrink: 0;\r
  --icon: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath d='M0 0h24v24H0V0z' fill='none' /%3E%3Cpath d='M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' /%3E%3C/svg%3E");\r
  -webkit-mask-image: var(--icon);\r
  mask-image: var(--icon);\r
}\r
\r
.vp-external-link-icon::after {\r
  content: '';\r
}\r
\r
/* prettier-ignore */\r
.external-link-icon-enabled :is(.vp-doc a[href*='://'], .vp-doc a[target='_blank'])::after {\r
  content: '';\r
  color: currentColor;\r
}\r
\r
\`\`\`\r
\r
\r
`;export{n as default};
