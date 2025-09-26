const r=`---\r
category: '教程'\r
tags: ['运维','googleAnalytics']\r
icon: 'logo'\r
\r
---\r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
 \r
::: danger <Badge type='warning'>警告</Badge>\r
该文章内容正在建设中......\r
:::\r
 `;export{r as default};
