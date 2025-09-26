const r=`---\r
category: '编程'\r
tags: ['mermaid','markdown','js','修改中']\r
icon: 'mermaid'\r
cover: 'mermaid'\r
---\r
 \r
###### 24091202\r
 \r
<br/>\r
 \r
::: danger <Badge type='warning'>警告</Badge>\r
该文章内容正在建设中......\r
:::\r
\r
\r
## 1. 官网\r
\r
**Mermaid**： https://mermaid.js.org/intro/ <Badge type='tip'>霍格沃茨环境</Badge>\r
\r
\r
## 2. 基本示例\r
\r
\r
\`\`\`markdown\r
---\r
title: 我是标题\r
---\r
flowchart LR\r
    A[家] -->|走路去|B[学校]\r
\`\`\`\r
\r
\r
<Badge type='info'>效果演示</Badge>\r
\r
<br/>\r
\r
\r
\`\`\`mermaid\r
---\r
title: 我是标题\r
---\r
flowchart LR\r
    A[家] -->|走路去|B[学校]\r
\`\`\`\r
\r
## 3. flowchart \r
\r
### 3.？ 样式改变\r
\r
\`\`\`markdown\r
flowchart LR\r
    id1(Start)-->id2(Stop)\r
    style id1 fill:#f9f,stroke:#333,stroke-width:4px\r
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\r
\`\`\`\r
\r
<Badge type='warning'>效果演示</Badge>\r
\r
\`\`\`mermaid\r
flowchart LR\r
    id1(Start)-->id2(Stop)\r
    style id1 fill:#f9f,stroke:#333,stroke-width:4px\r
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\r
\`\`\`\r
\r
`;export{r as default};
