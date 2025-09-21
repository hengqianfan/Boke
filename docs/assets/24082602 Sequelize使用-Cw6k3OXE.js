const n=`---\r
category: '编程'\r
tags: ['数据库','修改中']\r
cover: 'sequelize'\r
icon: 'sequelize'\r
---\r
\r
\r
\r
<br/>\r
\r
::: danger <Badge type='warning'>警告</Badge>\r
该文章内容正在建设中......\r
:::\r
\r
## 1. 官方文档\r
\r
官网地址 ：https://www.sequelize.cn/\r
\r
## 2. 安装\r
\r
## 2.1 安装全局包\r
\r
\`\`\`shell\r
npm i -g sequelize-cli\r
\`\`\`\r
## 2.2 安装项目依赖\r
\r
\`\`\`shell\r
npm i sequelize mysql2\r
\`\`\`\r
\r
## 3. 创建数据表\r
\r
\r
\r
\`\`\`shell\r
sequelize model:generate --name Article --attributes title:string,content:text\r
\`\`\``;export{n as default};
