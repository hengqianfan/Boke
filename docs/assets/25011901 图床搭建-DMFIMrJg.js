const r=`---\r
category: '教程'\r
tags: ['图床','cloudfare']\r
icon: 'img'\r
cover: 'momo'\r
---\r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
\r
## 前言\r
\r
搭建图床常常有以下几种方式：\r
\r
- 利用 Github Page 来搭建 <Badge type='info'>最简单</Badge>\r
\r
- 利用 七牛云 \\ cloudfare \r
\r
- 利用 阿里云对象存储\r
\r
- 自建图床服务器\r
\r
## 利用 cloudfare\r
\r
### 0. 准备 paypal 账号\r
\r
### 1. 登录 cloudfare \r
\r
https://dash.cloudflare.com/\r
\r
\r
- 建议通过谷歌账号登录（如果有），可以一键登录。\r
\r
\r
### 2. 找到 r2 对象存储\r
\r
\r
- 在网站的侧边菜单中找到 \`R2 object stroage\`\r
\r
![](/image/202501200017.png)\r
\r
\r
`;export{r as default};
