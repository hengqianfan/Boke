const r=`---\r
category: '教程'\r
tags: ['运维','面板','1Panel']\r
icon: 'logo'\r
open: false\r
mothbal: true\r
cover: '1panel'\r
\r
---\r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
 \r
## 1. 安装 1Panel\r
\r
### 2.1 阿里云\r
\r
直接在实例中找到插件安装\r
\r
## 2. 登录面板\r
\r
在命令行中输入执行获取基本信息\r
\r
\`\`\`shell\r
1pctl user-info\r
\`\`\`\r
\r
你会得到类似的信息\r
\r
\`\`\`shell\r
[root@iZ7x ~]# 1pctl user-info\r
面板地址: http://$LOCAL_IP:3550/14d7486\r
面板用户:  4a9943\r
面板密码:  57ec4a\r
\`\`\`\r
\r
把\`$LOCAL_IP\`替换为你的公网IP，例如：\`http://4.442.34:3550/14d7486\`  \r
\r
\r
在安全组中放行端口 \`3550\`\r
\r
\r
##  3. 设置镜像加速\r
\r
\r
\r
下载音乐  \r
\r
https://www.xmwav.com/  \r
\r
下载歌词\r
\r
https://www.kugeci.com/\r
\r
修改音乐\r
\r
https://www.mp3tag.de/\r
\r
\r
`;export{r as default};
