const r=`---\r
category: '编程'\r
tags: ['报错','vitepress','vue']\r
icon: 'vitepress'\r
aside: left\r
cover: 'vitepress'\r
\r
---\r
\r
 \r
\r
<!-- ## 报错 -->\r
\r
## 1. 不生成链接\r
\r
- markdown 文件中使用链接语法无法正常生成链接\r
\r
<Badge type='danger'>错误示范</Badge>\r
\r
\`\`\`md\r
[VScode下载与使用](/zo-repo/vscode/00 简述.md){target='_blank'}\r
\`\`\`\r
\r
<Badge type='tip'>解决办法</Badge>\r
\r
💡 **空格符号需要用 \`%20\`代替**\r
\r
\`\`\`md\r
[VScode下载与使用](/zo-repo/vscode//00%20简述.md){target='_blank'}\r
\`\`\`\r
\r
## 2. 自定义背景后，文章侧边目录底部出现白边\r
\r
\r
![](/image/202408200203.png)\r
\r
\r
\r
\r
\`解决\`：样式冲突，需要单独适配这个区域的css\r
\r
\`\`\`scss\r
\r
#app {\r
    // 文档大纲需要补充设置\r
    // 这部分是底部的一小部分\r
    // 根据这个类名适配就行\r
    .aside-curtain {\r
        background: $yourcolor;\r
    }\r
\r
}\r
\r
\r
\`\`\`\r
\r
\r
## 报错 | SyntaxError: Invalid or unexpected token\r
\r
⭐**你的文章标签中存在中文字符**  \r
> \\-\\-\\-  \r
> tag: ['AI', '绘画', 'AI绘画']  \r
> \\-\\-\\-  \r
例如：上述\`[]\`内不应该存在中文逗号、中文引号   \r
<Badge type='danger'>[ &nbsp;,&nbsp; ] &nbsp;👈 &nbsp;是非常容易混淆的</Badge>\r
\r
\r
## 报错 | TypeError: Cannot read properties of undefined (reading 'getSSRProps')\r
\r
- vitepress项目中的某段代码不具备SSR的兼容性\r
\r
- 需要用 \`<ClientOnly>\` 包裹 \r
`;export{r as default};
