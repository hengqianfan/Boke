const r=`---\r
category: '编程'\r
tags: ['运维','面板','1Panel']\r
icon: 'logo'\r
open: false\r
mothbal: true\r
cover: 'monorepo'\r
\r
---\r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
 \r
# monorepo`;export{r as default};
