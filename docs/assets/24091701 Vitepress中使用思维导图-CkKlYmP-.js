const r=`---\r
category: '编程'\r
\r
tags: ['xmind','思维导图','G6','可视化','mermaid','vue','vitepress']\r
icon: 'vitepress'\r
cover: 'vitepress'\r
\r
\r
---\r
 \r
###### 24091701\r
 \r
<br/>\r
 \r
# vitepress中使用思维导图\r
\r
\r
## 1. 集成 mermaid \r
\r
### 1.1 使用参考\r
\r
这个比较简单，\`mermaid.js\` 也支持思维导图，但是非常的简陋  \r
\r
可以参考 👉 [vitepress中使用流程图](./24090601%20Vitepress中使用流程图.md){target="_blank"}\r
\r
不重复编写了，原理一模一样，用 \`mindmap\` 替代 \`flowchart\`即可\r
\r
**然后使用思维导图的语法就行**  \r
\r
语法文档： https://mermaid.js.org/\r
\r
### 1.2. 示例用法\r
\r
--- \r
\r
<pre>\r
\`\`\`mermaid\r
mindmap\r
  root((web))\r
    基础\r
      html\r
      css\r
      javascript\r
    进阶\r
      node\r
      express\r
    应用\r
      uniapp\r
      electron\r
\`\`\`\r
</pre>\r
\r
--- \r
\r
### 1.3 效果演示\r
\r
- 可以明显地看出，虽然集成简单，但是不怎么实用\r
- \`mermaid\` 还是合适简单的可视化需求\r
\r
\`\`\`mermaid\r
mindmap\r
  root((web))\r
    基础\r
      html\r
      css\r
      javascript\r
    进阶\r
      node\r
      express\r
    应用\r
      uniapp\r
      electron\r
\`\`\`\r
\r
## 2. 集成 xmind 预览\r
\r
### 2.1 参考文章\r
\r
可以参考这篇大佬的文章\r
\r
https://juejin.cn/post/7265112695837655080\r
\r
> \`xmind官网\` https://xmind.cn/\r
\r
### 2.2 题外话\r
\r
这个看上去不错，很合适正在使用 **xmind** 的用户  \r
\r
但我没用过，专门为思维导图去使用它，  \r
\r
会增加了我笔记库的维护成本  \r
\r
类似的效果，对于我这种WPS用户完全可以靠嵌入网页来实现 👇  \r
\r
\`\`\`html\r
<iframe src="你的WPS文档的分享链接"></iframe>\r
\`\`\`\r
不过，我更想通过 \`js库 \`来实现它 \r
\r
\r
\r
## 3. 集成 G6   \r
\r
::: danger <Badge type='warning'>警告</Badge>\r
尝试失败，期盼有大佬出手解决\r
:::\r
\r
https://g6.antv.antgroup.com/manual/getting-started\r
\r
### 3.1 安装依赖\r
\r
\`\`\`shell\r
pnpm install --save @antv/g6 \r
\`\`\`\r
\r
\r
\r
`;export{r as default};
