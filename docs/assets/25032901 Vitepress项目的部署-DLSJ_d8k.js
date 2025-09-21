const n=`---\r
aside: left\r
tags: ['web','centos','服务器','vitepress','vue']\r
icon: 'vitepress'\r
open: false\r
id: 25032901\r
cover: 'vitepress2'\r
\r
---\r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
 \r
# 部署 VitePress 项目\r
\r
## 1. Github page\r
\r
> 有空再写\r
\r
## 2. 服务器 - centos - nginx\r
\r
\r
::: info <Badge type='info'>info</Badge>\r
\r
- 在服务器上部署\r
- 使用 \`centOS\` 操作系统\r
- 利用 \`nginx\` 提供web服务\r
\r
:::\r
\r
\r
### 2.1 购买服务器\r
\r
> 暂时省略\r
\r
\r
### 2.2 安装 nginx\r
\r
- **安装软件**\r
\r
::: code-group\r
\r
\`\`\`shell [AI]\r
sudo yum install nginx -y\r
\`\`\`\r
\r
\`\`\`shell [尚硅谷]\r
yum install nginx -y\r
\`\`\`\r
\r
:::\r
\r
\r
- **启动服务**\r
\r
\r
::: code-group\r
\r
\`\`\`shell [AI]\r
sudo systemctl start nginx\r
\`\`\`\r
\r
\`\`\`shell [尚硅谷]\r
service nginx start\r
\`\`\`\r
\r
:::\r
\r
\r
\r
- **设置自启**\r
\r
\r
\r
\`\`\`shell\r
sudo systemctl enable nginx\r
\`\`\`\r
\r
\r
\r
- **重启服务**\r
\r
\`\`\`shell\r
sudo systemctl restart nginx\r
\`\`\`\r
\r
\r
### 2.3 将打包好的网站源代码上传到服务器\r
\r
在 \`var\` 下新建文件夹 \`myweb\` (可自定义文件夹名)\r
\r
- 建议放在 \`var/myweb\`\r
\r
\r
\r
### 2.4 配置 nginx \r
\r
在 \`etc/nginx/nginx.conf\` 文件中修改配置\r
\r
\r
\`\`\`text\r
http {\r
    server {\r
        listen       80;\r
        listen       [::]:80;\r
        server_name  _;\r
        root         /usr/share/nginx/html;\r
\r
        # Load configuration files for the default server block.\r
        include /etc/nginx/default.d/*.conf;\r
\r
        location / {\r
            root /var/myweb/notes\r
            index index.html\r
        }\r
\r
        error_page 404 /404.html;\r
        location = /404.html {\r
        }\r
        error_page 500 502 503 504 /50x.html;\r
        location = /50x.html {\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\r
### 2.5 配置 nginx - 二级域名\r
\r
- 提示：即是 \`api.your.com\` (根据域名规范是三级域名，但是实际交流上称二级域名)`;export{n as default};
