const r=`---\r
title: \r
date: 2025-09-16\r
category: '教程'\r
icon: \r
cover: 'boke2'\r
tags: ['boke主题','vue','ts']\r
pin: 100\r
---\r
\r
\r
## 1. 题外话\r
\r
\r
::: info 💬\r
\r
这是俺开发的 **第四代** 博客，已经完全能够配得上一个 \`独立博客\` 的称号，综合了许多前端知识。\r
\r
::: \r
\r
## 2. 技术选型\r
\r
- 框架：\`Vue\`\r
\r
- 语言：\`Ts\`\r
\r
- 路由：\`Vue-Router\`\r
\r
- 样式：\`Scss\`\r
\r
- 解析：\`Markdown-it\`\r
\r
- 状态：\`Pinia\`\r
\r
\r
## 3. 样式\r
\r
\r
### 3.1 基本的 markdown 的样式\r
\r
因为，通过 \`@/styles/reset.scss\` 文件 **清除了所有标签的默认样式** ，所以，俺对每个标签都进行了个性化处理！具体的样式通过 \`@/styles/markdown.scss\` 文件定义，风格独特！\r
\r
---\r
\r
- **正文样式**\r
\r
在 \`@/styles/markdown.scss\` 文件中设置了合理行高与首行缩进，改变了文本的默认颜色与字体。\r
\r
\`\`\`css\r
// 文本样式\r
p {\r
    // 设置合理的行高\r
    line-height: 1.8;\r
    // 正文文本的颜色\r
    color: #323238;\r
    // 正文文本的字体\r
    font-family: 'Inter';\r
    // 设置段落的首行缩进\r
    text-indent: 2em;\r
}\r
\`\`\`\r
\r
- 标题样式\r
\r
- \r
\r
### 3.1 自定义容器\r
\r
\r
\r
\r
::: info \r
\r
\r
- \`rrr\`: df\r
\r
\`\`\`js\r
const num = 1314\r
num = num + 2\r
\`\`\`\r
\r
\r
:::\r
\r
\r
\r
::: warning\r
\r
\r
- \`rrr\`: df\r
\r
\`\`\`js\r
const num = 1314\r
num = num + 2\r
\`\`\`\r
\r
\r
:::\r
\r
\r
\r
\r
\r
## 4. front-matter \r
\r
|属性名|类型|\r
|:---:|:---:|\r
| title | string |\r
\r
### 4.1 title 标题\r
\r
- 可以为空，在未填写时，默认读取文件名为文章标题\r
\r
## 5. boke-Pro 开发计划\r
\r
### 5.1 功能增强\r
\r
- 代码组功能\r
\r
### 5.2 功能扩展\r
\r
## 6. 更新历史\r
\r
### 0.0.4-20250921\r
\r
- 新增：首页实现 \`tags\` 、\`categories\` 功能并修改相关 \`Tools\`( 工具函数 ) 、\`Pinia\`的逻辑代码\r
\r
- 新增：首页实现分页功能\r
\r
- 新增：**文章详情页** 实现 \`tags\` 跳转并筛选文章功能\r
\r
- 新增：配置项  \`AutoFormatFileName\` ，让文件名中第一个空格前的字符成为排序码， \`AutoFormatFileName:true\` 时，自动删除排序码，当然可以填入 \`false\` ，保留原始文件名\r
\r
- 优化：完善文章元数据逻辑，当 \`AutoFormatFileName:true\` 时，排序码作为时间戳\r
\r
- 优化：重构 Post 部分的类型声明\r
\r
- 删除：剔除部分不需要的 npm 依赖\r
\r
\r
### 0.0.3-20250920\r
\r
- 新增：实现站外搜索功能\r
\r
- 新增：网站动态标题\r
\r
- 新增：网站全局光标指针自定义样式\r
\r
- 优化：文章渲染页设计，加入了许多 \`head\` 要素，例如字数统计、时间\r
\r
\r
\r
### 0.0.2-20250919\r
\r
- 新增：增加置顶属性，实现置顶文章的功能\r
\r
- 新增：【页面大纲】组件\r
\r
- 优化：文档的基本样式: 标题样式\r
\r
\r
### 0.0.1-20250917\r
\r
仿照之前开发的 vitepress-theme-boke 主题 开发脱离 vitepress 的独立博客`;export{r as default};
