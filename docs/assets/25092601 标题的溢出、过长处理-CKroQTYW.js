const n=`---\r
title: \r
date: 2025-09-26\r
category: '编程'\r
icon: \r
cover: 'scss'\r
tags: ['js','css','文本处理']\r
pin: 0\r
---\r
\r
::: info 标题溢出、过长问题\r
\r
在项目开发中，特别是对于一些卡片组件，我们需要限制标题的字符数，并以 \`...\` 表示省略的标题。\r
\r
这个问题可以通过 \`CSS\` 样式解决\r
\r
:::\r
\r
## 单行文本溢出处理\r
\r
- 代码示例\r
\r
\`\`\`css\r
// 防止标题溢出\r
.title{\r
    /* 防止文本换行 */\r
    white-space: nowrap;\r
    /* 溢出部分的以...显示 */\r
    text-overflow: ellipsis;\r
        /* 溢出隐藏 */\r
    overflow: hidden;\r
}\r
\`\`\`\r
## 多行文本溢出处理\r
\r
\`\`\`css\r
.text{\r
    /* 弹性伸缩盒 */\r
    display: -webkit-box;        \r
    /* 限制显示 3 行 */\r
    line-clamp: 3;\r
    -webkit-line-clamp: 3;       \r
    -webkit-box-orient: vertical;\r
    /* 溢出隐藏 */\r
    overflow: hidden;\r
}\r
\`\`\``;export{n as default};
