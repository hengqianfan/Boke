const r=`---\r
title: Alist的使用指南\r
date: 2025-09-16\r
category: '教程'\r
cover: 'alist'\r
icon: 'alist'\r
tags: ['网盘','软件','开源项目','电脑知识','github']\r
---\r
\r
\r
\r
\r
---\r
\r
\r
## 1. 基本信息\r
\r
::: warning \r
\r
其实，\`Alist\` 的官方文档已经很详细了，阅读能力强的朋友，可以自行前往阅读与学习。\r
\r
:::\r
\r
\r
\r
\`项目官网\`：https://alist.nn.ci/zh/\r
\r
\`项目仓库\` : https://github.com/alist-org/alist\r
\r
## 2 在 windows 端的使用 \r
\r
### 2.1 在开源仓库下载软件\r
\r
::: info 步骤\r
\r
去 \`alist\` 的 [\`开源仓库\`](https://github.com/alist-org/alist/releases)下载适用的软件版本 ，大多数人是它 👉  \`alist-windows-amd64.zip\`，**解压这个文件后** 会得到一个 \`.exe\` 文件，把它放在你喜欢的文件夹中，例如：D:/alist/alist.exe\r
\r
::: \r
### 2.2 启动项目\r
\r
- 在该文件目录下，打开 CMD \r
\r
\`\`\`shell\r
alist server\r
\`\`\`\r
![](/image/202403192103.png)\r
\r
### 2.3 登陆项目\r
\r
1. 打开浏览器\r
\r
2. 进入 \`Alist\` 的本地网址：https://localhost:5244\r
\r
3. 输入用户名与密码\r
\r
> 用户名为 admin ，密码在启动项目时，在命令行窗口有出现。\r
\r
\r
\r
👉 Successfully created the admin user and the initial password is XcEFOwbl\r
\r
(找到这行，\`XcEFOwbl\` 就是初始密码，每个人是不一样的)  \r
\r
\r
![](/image/202403192103.png)\r
\r
\r
### 2.4 关联网盘\r
\r
::: danger 提示\r
\r
因为每个网盘获取权限的区别很大，而且规则时常变化，建议去B站搜索 \`alist挂载XX网盘\` 的视频，以避免浪费时间。 \r
\r
:::\r
\r
#### 2.4.1 迅雷网盘\r
\r
首先填写以下信息\r
\r
- 驱动：迅雷  \r
\r
- 用户名：手机号或者邮箱\r
\r
- 密码：密码\r
\r
- 根文件夹ID：通过F12找到 parent_id\r
\r
\r
然后不管其它，不管报错，保存后，查看是否需要验证码  \r
\r
如果不需要，应该就直接挂载成功了，需要的话，点击click去获取验证码，然后保存。\r
\r
#### 2.4.2 123网盘\r
\r
\r
\r
\r
## 3 推荐视频教程\r
\r
::: details\r
\r
> 具体流程建议看视频教程\r
\r
\r
<xVideo  xSrc='//player.bilibili.com/player.html?isOutside=true&aid=402266611&bvid=BV1mo4y1N7EP&cid=1162341341&p=1' xTitle="天下网盘为我所用！Alist全平台安装教程"/>\r
\r
:::\r
\r
`;export{r as default};
