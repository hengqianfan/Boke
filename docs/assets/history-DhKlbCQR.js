const r=`---\r
title: 更新历史\r
date: 2025-10-01\r
category: '教程'\r
cover: 'boke2'\r
tags: ['boke主题','开源','博客','web','vue','ts']\r
pin: 1000\r
---\r
\r
\r
### 0.0.9-20251018\r
\r
- 新增：回到顶部组件\r
\r
- 新增：嵌入式外链网页\r
\r
- 新增：部分组件、页面适配移动端\r
\r
---\r
\r
\r
### 0.0.8-20251004\r
\r
- 重构：大纲组件的逻辑\r
\r
- 优化：侧边栏的显示逻辑\r
\r
- 新增：文本编辑器组件\r
\r
---\r
\r
\r
### 0.0.7-20251002\r
\r
- 优化：默认 table 的样式\r
- 优化：搜索框的界面效果\r
- 修复: Doc组件渲染文章时 头部数据中的时间显示错误\r
\r
> 因为启动 **Config.AutoFormatFileName** 文件名自动处理配置后,关于 **FileTime（date）** ，\`extractTimestamp\` 函数 的优先级高于文章 **front-matter** 的数据，所以，应先判断 **front-matter** 是否存在 **FileTime（date）** 后再通过 \`extractTimestamp\` 处理文件名获取时间。\r
\r
\`\`\`ts\r
let fileNameByFormat: string = fileName\r
let fileTime: number | undefined = parsed.attributes.date ? new Date(parsed.attributes.date).getTime() : 0\r
if (Config.AutoFormatFileName) {\r
    fileNameByFormat = formatFileName(fileName)\r
    // ❌废弃\r
    // fileTime = extractTimestamp(fileName)\r
    // ✔ 改写：\r
    if (!parsed.attributes.date) {\r
        fileTime = extractTimestamp(fileName)\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
\r
### 0.0.6-20251001\r
\r
- 优化：doc组件进行深度优化\r
\r
- 优化：部分全局 SCSS 样式的修改\r
\r
- 优化：整理了部分文章和笔记的内容，适配博客的代码风格\r
\r
- 优化：自定义MD语法图片组件的代码逻辑，更新相应的工具函数\r
\r
- 新增：Base 逻辑，并修改对应的代码，例如图片请求时需要拼接 base \r
\r
\r
---\r
\r
\r
### 0.0.5-20250926\r
\r
- 迁移了原博客的笔记内容 \r
\r
- 新增：笔记模块 🔥\r
\r
- 新增：主题模块 \r
\r
- 新增：doc组件，负责文章、笔记详情页的渲染\r
\r
- 新增：自定义 MD 扩展语法：图片、卡片语法\r
\r
- 优化：主页样式美化\r
\r
- 优化：因为涉及到对 \`markdown\` 文件的处理，对项目中很多代码进行改造和优化，不一一例举了\r
\r
---\r
\r
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
---\r
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
---\r
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
---\r
\r
\r
### 0.0.1-20250917\r
\r
仿照之前开发的 vitepress-theme-boke 主题 开发脱离 vitepress 的独立博客\r
\r
\r
`;export{r as default};
