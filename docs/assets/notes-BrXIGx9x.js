import{K as c,L as u,N as h}from"./index-7ZNq7-mY.js";const v=`::: info <Badge type='warning'>提示</Badge>\r
\r
**本部分笔记是个人重装系统后的常规步骤，具有强烈的主观性，请勿模仿**\r
\r
:::\r
\r
\r
\r
\r
`,_=`\r
## 1. 工作类备份\r
\r
### 1.1  上传或备份 \`E:codes\` 中的项目代码\r
\r
> 💡 如果项目中有隐藏或本地文件夹记得备份\r
\r
|项目|文件夹|\r
|:---:|:---:|\r
|zo-notes|me-repo|\r
\r
### 1.2  检查 \`vscode\` 中的用户片段（snippets） 是否备份。\r
\r
> 同步账号为 hengqianfan <Badge type='info'>Github</Badge>\r
\r
::: details 将最新的复制在此处 \`snippets\` 代码\r
\r
\`\`\`\r
{\r
	// vitepress 代码提示\r
	//  徽章\r
	"fans-badge-github": {\r
		"prefix": "vp-badge-github",\r
		"body": [\r
			"<Badge type='info'>Github</Badge>",\r
		],\r
		"description": "表示Github的徽章"\r
	},\r
	//  代码块\r
	"代码块_命令行": {\r
		"prefix": "code-block_shell",\r
		"body": [\r
			"\`\`\`shell",\r
			"$1",\r
			"\`\`\`"\r
		],\r
		"description": "代码块 - shell命令"\r
	},\r
	"代码块_md": {\r
		"prefix": "code-block_md",\r
		"body": [\r
			"\`\`\`md",\r
			"$1",\r
			"\`\`\`"\r
		],\r
		"description": "代码块 - markdown代码"\r
	},\r
	"代码块_美人鱼": {\r
		"prefix": "code-block_mermaid",\r
		"body": [\r
			"\`\`\`mermaid",\r
			"$1",\r
			"\`\`\`"\r
		],\r
		"description": "需要项目中集成mermai才可以正常渲染为流程图"\r
	},\r
	"代码块_美人鱼示例代码": {\r
		"prefix": "code-block_mermaid_demo",\r
		"body": [\r
			"\`\`\`mermaid",\r
			"---",\r
			"title: 我是标题",\r
			"---",\r
			"flowchart LR",\r
			" A --> B",\r
			"$1",\r
			"\`\`\`"\r
		],\r
		"description": "需要项目中集成mermai才可以正常渲染为流程图"\r
	},\r
	"自定义容器_danger": {\r
		"prefix": "container_danger",\r
		"body": [\r
			"::: danger <Badge type='danger'>$1</Badge>",\r
			"$2",\r
			":::"\r
		],\r
	},\r
	"自定义容器_info": {\r
		"prefix": "container_info",\r
		"body": [\r
			"::: info <Badge type='info'>$1</Badge>",\r
			"$2",\r
			":::"\r
		],\r
	},\r
	"自定义容器_warning": {\r
		"prefix": "container_warning",\r
		"body": [\r
			"::: warning <Badge type='warning'>$1</Badge>",\r
			"$2",\r
			":::"\r
		],\r
	},\r
	"自定义容器_tip": {\r
		"prefix": "container_tip",\r
		"body": [\r
			"::: tip <Badge type='tip'>$1</Badge>",\r
			"$2",\r
			":::"\r
		],\r
	},\r
	"自定义容器_网站小卡片": {\r
		"prefix": "code-container_site",\r
		"body": [\r
			"::: info <Badge type='tip'>**$1**</Badge>",\r
			"",\r
			"![alt](/webPic/site001.png)",\r
			"",\r
			"\`简介\`：$2  ",\r
			"",\r
			"\`网址\`：$3  ",\r
			"",\r
			":::"\r
		],\r
		"description": "网站的小卡片格式"\r
	},\r
	"容器_详情_原文链接": {\r
		"prefix": "container_details_original",\r
		"body": [\r
			"::: details 原文链接",\r
			"",\r
			"$1",\r
			"",\r
			":::"\r
		],\r
		"description": "网站的小卡片格式"\r
	},\r
	// 文章 头部\r
	"fans-vp-article-head": {\r
		"prefix": "fans-vp-article-head",\r
		"body": [\r
			"---",\r
			"aside: left",\r
			"tags: ['修改中','$1']",\r
			"icon: ''",\r
			"open: false",\r
			"id: $2",\r
			"---",\r
			" ",\r
			"######  {{ \\\\$frontmatter.id? \\\\$frontmatter.id : \\\\$frontmatter.zoid }}",\r
			" ",\r
			"<br/>",\r
			" ",\r
			"::: danger <Badge type='warning'>警告</Badge>",\r
			"该文章内容正在建设中......",\r
			":::",\r
			" "\r
		],\r
		"description": "文章头部信息"\r
	},\r
	"fans-vp-zo-video": {\r
		"prefix": "fans-vp-zo-video",\r
		"body": [\r
			"<zo-video  z_src='$1'/>"\r
		],\r
		"description": "视频组件"\r
	},\r
	"fans-vp-zo-iframe": {\r
		"prefix": "fans-vp-zo-iframe",\r
		"body": [\r
			"<zo-iframe src='https://kdocs.cn/l/chkqXVW2zjJd' />"\r
		],\r
		"description": "网页组件"\r
	},\r
	"fans-div": {\r
		// "scope": "javascript,typescript",\r
		"prefix": "div",\r
		"body": [\r
			"<div>$1</div>",\r
		],\r
		"description": "一个普通的div"\r
	},\r
	"fans-div-class": {\r
		// "scope": "javascript,typescript",\r
		"prefix": "div-class",\r
		"body": [\r
			"<div class=\\"$2\\">$1</div>",\r
		],\r
		"description": "一个带class的div"\r
	},\r
	"fans-vue-base": {\r
		// "scope": "javascript,typescript",\r
		"prefix": "fans-vbase",\r
		"body": [\r
			"<template>",\r
			"$1",\r
			"</template>",\r
			"",\r
			"<script setup>",\r
			"<\/script>",\r
			"",\r
			"<style lang=\\"scss\\" scoped></style>"\r
		],\r
		"description": "一个带class的div"\r
	},\r
	// 文档通用\r
	"阿里巴巴图标": {\r
		"prefix": "iconfont",\r
		"body": [\r
			"<i class=\\"iconfont icon-$1\\"></i>",\r
		],\r
	},\r
	"hr分割线-彩色斜纹": {\r
		"prefix": "hr-twill-colorful",\r
		"body": [\r
			" ",\r
			"<br/>",\r
			" ",\r
			"<hr class=\\"hr-twill-colorful\\">",\r
			" ",\r
			"<br/>",\r
			" "\r
		],\r
	},\r
}\r
\`\`\`\r
:::\r
\r
### 1.3  检查 \`WPS\` 的同步文件夹\r
\r
\r
## 2. 其他类备份\r
\r
\r
### 2.1  \`v2\` 订阅地址备份\r
\r
### 2.2 资源文件夹备份（\`E:resource\`）\r
\r
> <i class="iconfont icon-download"></i> [\`123pan\`](https://www.baidu.com){target="_blank"}  \r
> <small><small>我的文件 - resource</small></small>\r
\r
### 2.3 游戏数据备份\r
\r
- 及时备份戴森球的存档\r
\r
## 3. 相关备注\r
\r
- 磁盘分区 200G = 205824 \r
\r
\r
`,b=`## 网络资源\r
\r
- \`官方 WIN11 镜像\` [enter](https://www.microsoft.com/zh-cn/software-download/windows11){target="_blank"}\r
\r
- \`我告诉你网站\` [enter](https://next.itellyou.cn/Original/){target="_blank"}\r
\r
## 本地镜像资源\r
\r
> 存储在 \`PE启动U盘\` 中\r
\r
|系统|版本|大小|\r
|---|---|---|\r
|win|Win10_22H2_Chinese_Simplified_x64v1|5.67G|\r
|win|tiny10 23h1 x64|3.67G|\r
|win|zh-cn_windows_11_enterprise_ltsc_2024_x64|4.92G|\r
\r
- 目前 win11 版本的 ISO 文件似乎存在无法安装的问题`,y="查看相关文章",f=`## KMS 激活\r
\r
> 📌更新地址 [enter](https://kms.cx/){target="_blank"}\r
\r
---\r
\r
> 使用管理员权限的shell\r
\r
\`\`\`shell\r
slmgr /skms s1.kms.cx\r
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX\r
slmgr /ato\r
slmgr /xpr\r
\`\`\`\r
## 电脑本地密保\r
\r
- 经典参数，写代码爱用\r
\r
\r
\r
`,w=`- 电脑自定义主题与资源: [enter](https://www.123pan.com/s/RRRYjv-uOS0A.html){target="_blank"}\r
`,j=`## 网络连接\r
\r
- LG：A-z-1`,k=`---\r
aside: false\r
---\r
\r
## 软件目录\r
\r
\r
|软件名称|软件类型|官网地址|备份地址|备注|\r
|:---:|:---:|:---:|:---:|:---:|\r
| V2 | 网络服务 | [enter](https://github.com/2dust/v2rayN/releases){target="_blank"} | [\`① 蓝奏网盘\`](https://hqz1874.lanzouo.com/iYClo32nc3la){target="_blank"} <br/> [\`② 123pan\`](https://www.123865.com/s/RRRYjv-iTi0A){target="_blank"} | 版本： \`v2rayN-windows-64-desktop.zip\`|\r
| winrar | 文件处理 | [enter](https://www.win-rar.com/){target="_blank"} |-|-|\r
| Geek | 软件卸载 | [enter](https://geekuninstaller.com/download){target="_blank"}| - | -|\r
| VSCode | 代码编辑 | [enter](https://code.visualstudio.com/){target="_blank"} |-| 裸连下载更快，别用加速器！ <br/> 及时同步 \`Github\` 账户 |\r
| Git | 版本管理 | [enter](https://git-scm.com/download){target="_blank"}|-| 先安装 vsc 再安装 Git <br/> Git 安装时会选择默认代码编辑器 |\r
| Node | 代码运行 | [enter](https://nodejs.org/en){target="_blank"} |-|安装后请注意必要的配置：<br/>  ① 脚本权限 <br/> ② 镜像源 <br/> ③ 全局包 <br/> 可以看 node 的笔记|\r
| Desktop | 代码上传 | [enter](https://desktop.github.com/){target="_blank"} |-|注意，它是强制安装C盘|\r
| heidisql | 数据库类 | [enter](https://www.heidisql.com/){target="_blank"} |-|-|\r
| mobaxterm | 网络运维 | [enter](https://mobaxterm.mobatek.net/){target="_blank"} |-|-|\r
| PS2024 | 图片处理 | - | [\`123pan\`](https://www.123pan.com/?homeFilePath=4418600,11874630){target="_blank"} | - | \r
| umi-OCR | 图片处理 | [enter](https://github.com/hiroi-sora/Umi-OCR){target="_blank"} | - | - |\r
| snipaste | 图片处理 |  [\`enter\`](https://zh.snipaste.com/){target="_blank"} | [\`蓝奏网盘\`](https://hqz1874.lanzouo.com/iT73V2k0ku9c){target="_blank"}|-|\r
\r
`,x=`## 2025-08-04\r
\r
理由：傻逼维修小哥给我下了鲁大师和360\r
\r
## 2025-01-05\r
\r
理由：闲的 \r
\r
\r
## 2024-03-31\r
\r
理由：闲的，顺便把流氓软件从宿主机放进虚拟机\r
\r
`,z=`---\r
title: '重装系统'\r
cover: 'computer'\r
description: '暂无描述'\r
---`,B=`<!-- ## 本项目基于 -->\r
\r
## 1. 编辑器下载\r
\r
推荐使用 \`VSCode\` \r
\r
!img[前端真神](vscode)\r
\r
具体的\r
\r
## 仓库地址\r
\r
https://github.com/hengqianfan/Boke\r
\r
\r
## 测试\r
\r
推荐文章\r
\r
!card[post](25092101 博客开发日志)\r
`,q=`## 网站元数据配置\r
\r
- 博客名称\r
- 博客LOGO\r
- 个人头像\r
- 座右铭\r
- 社交链接\r
\r
\r
`,S="## 图片语法\r\n\r\n```markdown\r\n!img[desc](name)\r\n```\r\n\r\n## 卡片语法\r\n\r\n```markdown\r\n!card[type](key)\r\n```\r\n```markdown\r\n!card[note](name)\r\n```\r\n```markdown\r\n!card[post](name)\r\n```",T=`**备注信息**\r
\r
- 配置文章标签时，将最重要的放在前面，文章预览页只显示前三个`,E=`---\r
title: 'Boke使用指南'\r
cover: 'boke2'\r
desc: 'Boko 是个人独立开发的博客系统，采用Vue + MarkdownIt 作为主要的技术框架，简约现代的设计风格，'\r
pin: 5\r
---`,P=`---\r
\r
---\r
\r
\r
\r
\r
\r
`,O=`---\r
\r
---\r
\r
# 建站避坑指引\r
\r
## 1. 请先确认自己的需求\r
\r
::: warning  <Badge type='danger'>提示</Badge>\r
**不同人的需求与学习能力有所差异**，关于建站，应根据个人的具体情形来选择方法。**切勿，脑子一热，就去购买域名和服务器**，然后发现，弄不来，懒得弄，和没必要弄。 \r
\r
:::\r
\r
\r
\r
\r
\r
##  2. 避坑小杂平台\r
\r
\r
如果你使用的百度引擎，你搜索建站会出来很多建站广告  \r
\r
这些都是中小公司花钱买的广告  \r
\r
这些所谓的建站平台不仅广告繁杂，你做出的网站也会限制许多  \r
\r
如果，你只是搭建静态页面   \r
\r
虽然把网站放在 \`github\` 等类似的网页托管平台   \r
\r
依然是寄人篱下，但二者区别还是挺大的  \r
\r
\r
\r
\r
`,C=`\r
# 建站途径\r
\r
\r
## 1. 宏观视角\r
\r
::: danger <Badge type='danger'>提示</Badge>\r
**一般而言，网站分为\`静态网站\`与\`动态网站\`两种。**  \r
\r
其实静态与动态的差别就是：**有无与数据库的数据交互**。   \r
\r
:::\r
\r
<small>实际上，是根据有没有复杂的业务需求来确定的，若只是展示个人简历或作品，静态建站就足够，但是，若需求是一个购物网站，那么动态建站更好，因为大概率是需要复杂的数据交互的。</small>\r
\r
\`\`\`mermaid\r
---\r
title: 网址搭建途径演示\r
---\r
flowchart LR\r
  A[编辑网页] -->|部署代码|B[购买服务器]      \r
  B --> |有编程基础可命令行部署|C[部署网站]\r
  C --> D[购买域名]\r
  D -->|备案域名、备案服务器、域名解析|E[上线、可访问]\r
  A --> |将前台代码上传平台|F[平台托管] -->|开启对应的上线功能：page|E\r
  B --> H[面板程序] --> |例如：宝塔面板|C\r
\`\`\`\r
\r
搭建一个可访问的网站的方式多种多样，但其实就两个大方向：\r
\r
**一是，通过自购服务器搭建（动态建站）**  \r
\r
::: details\r
\r
> 自己买服务器、搭建网站、部署后台  \r
\r
> \`编辑网页\` - \`购买服务器\`- \`部署网站\`- \`购买域名\` - \`备案、解析、上线\`\r
\r
- 建站相当于发售自己写的书  \r
\r
编辑网页 --> 写书过程  \r
\r
服务器 --> 印刷过程  \r
\r
域名 --> 售卖过程  \r
\r
:::\r
\r
**二是，通过第三方进行静态网页托管 （静态建站）**  \r
\r
::: details \r
\r
> 把自己静态网站托管到第三方平台，例如本站是托管在Github上  \r
\r
> \`编辑网页\` - \`上传平台\` - \`打开对应的功能上线\`\r
\r
:::\r
\r
<br/>\r
\r
\r
\r
\r
\r
\r
\r
\r
<br/>\r
\r
\r
<Badge type='info'>对比如下</Badge>\r
\r
||自购服务器|静态网页托管|\r
|---|:---|:---|\r
|**代表平台**|\`国内\`：<br/> 阿里云、华为云、腾讯云 <br/> <br/> \`国际\`： <br/> cloudflare| \`国内\`： <br/> Gitee  <br/> <br/> \`国际\`：<br/> Github <br/> |\r
|**相关优势**|有后台、可以数据交互|搭建方便、快速建站|\r
|**相关劣势**|① 金钱成本（域名、服务器费用）。<br/> ② 技术成本 （后台搭建、服务器运维）|只是静态页面（但个人博客足以）|\r
|**适合人群**|不差钱且爱折腾、技术党| 学生、白嫖党|\r
|**备注说明**|其实就是有后台和没后台的区别|\r
\r
<br/>\r
\r
<br/>\r
\r
::: danger <Badge type='warning'>个人建议</Badge>\r
\r
- 当网站不需要进行数据交互，比如：\`评论\`、\`会员体系\`等功能时，静态网站托管是一个很好的选择，只需要把网站代码提交给托管平台，就能拥有自己的网站。  \r
\r
- 一般而言，实现静态页面托管，主流是\`Github Page\`，但因为不能言述的原因，大多数人无法访问，所以 \`Gitee\` 也是不错的选择。 \r
\r
- 尽管，\`Gitee\`存在内容审查和实名认证，但是，只要你的博客网站符合社会核心价值观自然是无惧审查。  \r
\r
:::\r
\r
\r
::: danger <Badge type='danger'>重要提示-关于Github</Badge>\r
\r
- 如果你无法访问\`Github\`，就不必考虑通过Github部署静态页面，当然，你也可以自行百度搜索解决方案。\r
\r
- 网络不是法外之地，过分的激进不代表清醒，极端的保守也并不是忠诚。\r
\r
:::\r
\r
\r
::: danger <Badge type='danger'>重要提示-关于Gitee的吐槽</Badge>\r
\r
- 审核太费劲，居然要手持身份证，和贷款似的。  \r
\r
- 都提交实名了，肯定是不折不扣的良民，审核时间十分漫长，不理解为啥这么恶心。  \r
\r
:::\r
\r
\r
## 2. 实现视角 \r
\r
### 2.1 主流建站\r
\r
对于大众而言，就两种：  \r
\r
\`纯代码开发 \` 或者 \`wordpress\`  \r
\r
前者显然难度大，需要了解基本网页知识的同时，还可能要掌握一门编程语言作为后端开发语言。  \r
\r
因此，就只剩下\` wordpress\`  \r
\r
\r
### 2.2 博客建站\r
\r
如果，只是想建一个博客，那么你的选择将会丰富一些。\r
\r
\r
### 2.2.1 wordpress\r
\r
### 2.2.2 vitepress\r
\r
### 2.2.3 vuepress\r
\r
### 2.2.4 hexo\r
\r
### 2.2.5 halo\r
\r
### 2.2.6 docus\r
\r
### 2.2.7 tych\r
\r
### 2.2.8 NotionNext\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`,F=`::: danger 提示\r
\r
\r
\r
:::`,D=`::: info 相关教程\r
\r
\r
- \`24082701\`：**《hexo 指南》**  [ enter](/zo-articles/24082701%20Hexo指南.md){target="_blank"}\r
\r
:::\r
`,I="",A="",M=`基本是部署网站我们是通过Linux服务器\r
其实就是装载linux系统的云电脑\r
\r
\r
## 相关教程\r
\r
- 禹神：前端项目部署指南，前端项目打包上线\r
\r
::: details\r
\r
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1054906267&bvid=BV19n4y1d7Gr&cid=1555850566&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>\r
\r
:::`,G="",N=`## 搭建 nodejs 后台\r
\r
# 安装node\r
\r
在服务器中安装node有许多方式，\r
\r
## 简易安装\r
\r
## 最新安装\r
\r
### :one:前往node官网获取最新版本的下载链接\r
::: tip 步骤演示\r
-  **前往官网** https://nodejs.org/en/download (英文)  \r
-  **点击下载**  \r
---\r
![img](/image/202401171446.png)  \r
-  **出现下载**  \r
---\r
![img](/image/202401171448.png)  \r
-  **复制下载链接**  \r
---\r
![img](/image/202401171449.png)  \r
:::\r
::: warning 提示\r
:star:在本步骤中，自己电脑下载的该文件，\`可以删除\`，因为我们只是需要下载该文件的\`下载地址\`而已，你手速快，甚至可以在下载的时候，快速暂停掉，然而，没有必要，文件很小，而且获取下载连接后，可以右键删除文件。\r
:::\r
### :two:服务器上通过下载连接下载node安装包\r
::: tip  步骤演示\r
- **服务器上进入下载目录**\r
- 在该文件中下载安装包\r
\`\`\`\r
wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz\r
\`\`\`\r
\r
\`\`\`shell\r
sudo mkdir -p /root/appdata/nodejs\r
\`\`\`\r
\r
\`\`\`shell\r
sudo tar -xJvf node-v20.11.0-linux-x64.tar.xz -C /root/appdata/nodejs\r
\`\`\`\r
\r
配置环境变量\r
\r
- 解压\r
:::\r
### :three:安装node\r
### :four:后台运行node`,L=`\r
## 1. 在 centOS 配置 nginx\r
\r
## 1.1 下载 nginx\r
\r
\`\`\`shell\r
yum install nginx\r
\`\`\`\r
## 1.2 配置 nginx\r
\r
- 在 etc 中找到 \r
\r
\`\`\`shell\r
service nginx start\r
\`\`\`\r
\`\`\`shell\r
service nginx restart\r
\`\`\`\r
\r
## 2. 在Ubuntu配置Nginx\r
\r
\r
\r
### 2.1 下载\r
\r
\r
\r
\`\`\`shell\r
# 更新 apt-get 源\r
sudo apt-get update\r
# 安装 nginx\r
sudo apt-get install nginx\r
# 安装后，将会自动开启 nginx 服务，\r
# 浏览器输入服务器IP即可查看初始页面\r
\`\`\`\r
\r
http://aniu.website/  \r
https://aniu.website/`,J=`## 无法备案的域名\r
\r
①根据工信部有关规定，域名须完成实名认证，否则会被Serverhold，无法正常使用。  \r
②无资质批复的域名后缀（如\r
.org/\r
.name/\r
.so/\r
.hk/\r
.tel/\r
.bid/\r
.loan/\r
.men/\r
.win/\r
.party/\r
.date/\r
.trade/\r
.science/\r
.click/\r
.gift/\r
.pics/\r
.photo/\r
.pw/\r
.rocks/\r
.engineer/\r
.software/\r
.lawyer/\r
.mom/\r
.lol/\r
.game/\r
.help等）不能实名认证和备案。  \r
③.pro/.kim/.red/.asia/.social/.icu等后缀域名暂不能在北京备案。  \r
④.cn/.中国后缀域名若命名审核不通过，待注册局删除域名并退款后系统会自动退款；其他后缀域名若命名审核不通过，请转移域名到海外注册商。  \r
⑤.cn/.中国/.公司/.网络域名仅限中国内地个人、企业/组织用户和中国香港、中国澳门企业/组织用户申请注册，否则不能通过实名认证。  \r
\r
\r
## 注册最低价格\r
\r
\r
- 阿里云\r
\r
![](/image/202411092056.png)\r
\r
- 腾讯云\r
\r
![](/image/202411092130.png)\r
\r
\r
`,R=`## 二级域名\r
\r
`,U="",V=`---\r
cover: 'site'\r
text: '建站笔记'\r
desc: '我的建站笔记'\r
---`,X="# C\\#",Q="官网 [enter](https://visualstudio.microsoft.com/zh-hans/downloads/){target='_blank'}",W=`::: danger \r
\r
\`VS\`　和　\`VSC\` 属于二选一，已经安装 VS2022 就没必要配置 VSC 的环境\r
\r
:::\r
\r
## 安装 .NET SDK \r
\r
官网 [enter](https://dotnet.microsoft.com/zh-cn/download/){target="_blank"}\r
\r
- 查看自己是否已经安装\r
\r
\`\`\`shell\r
dotnet --list-sdks\r
\`\`\`\r
\r
或者\r
\r
\`\`\`shell\r
dotnet --version\r
\`\`\`\r
\r
## 安装 VSC\r
\r
## 插件\r
\r
名称: C# Dev Kit\r
ID: ms-dotnettools.csdevkit\r
说明: Official C# extension from Microsoft\r
版本: 1.3.10\r
发布者: Microsoft\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit`,H=`## 简介\r
\r
- C#是微软公司发布的一种面向对象的，运行于.NET Framework 和 .NET Core 的编程语言\r
- C#由C和C++衍生的面向对象的编程语言\r
\r
## .NET Framework 和 .NET Core \r
\r
## 文件结构\r
\r
using  \r
namespace`,Y=`- 区别字母的大小写\r
- 语句与表达式必须以分号结尾`,K="",Z=`## 下载\r
\r
cocos dashboard [enter](https://www.cocos.com/creator-download){target="_blank"}\r
\r
安装到D盘\r
\r
## 下载编辑器\r
\r
\`\`\`js\r
\r
\r
\r
\`\`\``,$="",rr=`## 常见的组件库\r
\r
|组件库|地址|备注|\r
|---|---|---|\r
|Element-plus|[\`enter\`](https://element-plus.org/zh-CN/#/zh-CN){target="_blank"}|简约、流行的vue3组件库|\r
\r
`,nr=`## 简述\r
\r
官网链接：[\`👉 enter\`](https://element-plus.org/zh-CN/#/zh-CN){target="_blank"}\r
\r
## vue3 项目中导入\r
\r
配置：\`/src/main.js\` or \`/src/main.ts\`\r
\r
::: code-group\r
\r
\`\`\`js [main.ts]\r
// main.ts\r
import { createApp } from 'vue'\r
import ElementPlus from 'element-plus'\r
import 'element-plus/dist/index.css'\r
import App from './App.vue'\r
\r
const app = createApp(App)\r
\r
app.use(ElementPlus)\r
app.mount('#app')\r
\`\`\`\r
\r
:::\r
\r
## vitepress 项目中导入\r
\r
\r
\r
\r
详见 -> [\`vitepress中使用element-plus\`](/zo-articles/24090101%20Vitepress中使用element-plus.md){target="_blank"}`,er=`\r
\r
`,tr=`## win10\r
\r
### 官方镜像\r
\r
`,sr=`---\r
# aside: false\r
---\r
# 系统重装\r
\r
::: danger **:warning:风险提醒**\r
\r
**安装系统属于风险性比较高的行为**  \r
\r
**建议参考视频教程来操作**  \r
\r
<iframe src="//player.bilibili.com/player.html?aid=77344372&bvid=BV1DJ411D79y&cid=132482858&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>\r
\r
:::\r
\r
## 准备工作\r
\r
**\`本笔记选用方式\`：通过\`微PE\`软件制作一个装系统的U盘，通过U盘重装系统**   \r
\r
wepe官网 [enter](https://www.wepe.com.cn/){target="_blank"}\r
\r
\r
::: info  制作装系统的U盘\r
\r
- **:one: 备份原U盘数据**\r
\r
> 制作PE启动盘，会清空原U盘的数据，请注意备份\r
\r
- **:two: 安装 wepe 软件**\r
\r
> 双击下载好的wepe安装包，选择安装到U盘\r
\r
![](/image/202402292049.png)\r
\r
> 基本配置参考\r
\r
![](/image/202402292050.png)\r
\r
- **:three: 下载ISO文件**\r
\r
> 这个ISO相当于安装包，用来安装windows系统，放在U盘的空白分区里即可，位置可随意。\r
\r
**<small><small>制作好的U盘会有两个分区，一个是EFI分区（别动他），一个是空白分区（各种系统的ISO放这里），EFI有时候会自动隐藏，不用管，这很好。</small></small>**\r
\r
:::\r
\r
## 安装系统`,or=`\r
#### windows11系统\r
\r
::: tip 步骤  \r
\r
---\r
<Badge type='danger'>演示课件</Badge>\r
\r
>  https://www.123pan.com/s/RRRYjv-h9S0A.html  \r
>  \`这是本次演示所使用的ISO\`  \`提取码\`：momo  \r
>  **可以用自己准备的ISO文件**  \r
<Badge type='danger'>常见错误</Badge>\r
\r
> 界面黑屏并显示 **time out**  \r
> 这是因为你手速不够快，进入虚拟机后，请快速点击一下屏幕，然后按 \`enter\` 键\r
\r
<Badge type='danger'>开始安装</Badge>\r
![img](/image/202401191142.png)\r
![img](/image/202401191143.png)\r
\r
<Badge type='danger'>安装以后再激活</Badge>\r
![img](/image/202401191144.png)\r
<Badge type='danger'>选择系统版本，建议专业版</Badge>\r
![img](/image/202401191145.png)\r
<Badge type='danger'>接受许可</Badge>\r
![img](/image/202401191146.png)\r
<Badge type='danger'>选择自定义</Badge>\r
![img](/image/202401191147.png)\r
<Badge type='danger'>选择安装位置</Badge>\r
![img](/image/202401191148.png)\r
<Badge type='danger'>最初的等待</Badge>\r
![img](/image/202401191149.png)\r
<Badge type='danger'>再度的等待</Badge>\r
![img](/image/202401191150.png)\r
<Badge type='danger'>正式安装开始，选择地区</Badge>\r
![img](/image/202401191200.png)\r
<Badge type='danger'>选择输入法</Badge>\r
![img](/image/202401191201.png)\r
<Badge type='danger'>键盘布局</Badge>\r
![img](/image/202401191202.png)\r
<Badge type='danger'>全新的等待</Badge>\r
![img](/image/202401191203.png)\r
<Badge type='danger'>命名电脑</Badge>\r
![img](/image/202401191204.png)\r
<Badge type='danger'>熟悉的等待</Badge>\r
![img](/image/202401191205.png)\r
<Badge type='danger'>选择个人使用</Badge>\r
![img](/image/202401191206.png)\r
<Badge type='danger'>开始登陆微软账号</Badge>  \r
\r
> 如果，你没有微软账户，请先在虚拟机软件外申请微软账户  \r
> 在安装步骤中申请微软账号，网络容易出现问题  \r
> 申请链接：https://account.microsoft.com/\r
\r
![img](/image/202401191207.png)\r
<Badge type='danger'>登录账户</Badge>\r
![img](/image/202401191208.png)\r
<Badge type='danger'>创建电脑密码</Badge>\r
![img](/image/202401191209.png)\r
<Badge type='danger'>设置密码</Badge>\r
![img](/image/202401191210.png)\r
<Badge type='danger'>隐私设置</Badge>\r
![img](/image/202401191211.png)\r
<Badge type='danger'>个性化广告</Badge>\r
![img](/image/202401191212.png)  \r
\r
\r
<Badge type='danger'>浏览器数据同步</Badge>\r
![img](/image/202401191213.png)  \r
\r
\r
---\r
\r
> :warning: :warning: :warning:  \r
> 请注意，之后两步，一般大概率会弹出 \`为你推荐某某优惠\`   \r
> **请不要查看，请不要同意，直接跳过**  \r
> 如果网络不好，会卡很久很久  \r
> 并且，这个不取决我们自己宽带的网速  \r
\r
---\r
\r
<Badge type='danger'>不查看，避免卡顿</Badge>\r
![img](/image/202402020052.png)  \r
\r
\r
<Badge type='danger'>最后的等待</Badge>  \r
\r
> 会跳转几个页面，不用管，看着就行，或者去上个厕所，回来就显示win11界面了 :joy:\r
\r
![img](/image/202401191214.png)\r
<Badge type='danger'>成功，但是一般建议优化两个东西</Badge>  \r
![img](/image/202401191220.png)  \r
<Badge type='danger'>①屏幕显示优化。②安装tools方便宿主机与虚拟机的交互</Badge>  \r
<Badge type='danger'>先优化屏幕显示</Badge>  \r
![img](/image/202401191221.png)\r
<Badge type='danger'>调整尺寸</Badge>  \r
\r
> **根据自己电脑的实际尺寸来配置**  \r
\r
![img](/image/202401191223.png)  \r
<Badge type='danger'>平时使用时，点击放大，便能完美适配电脑，但考虑到下一步安装tools，先不全屏</Badge>  \r
![img](/image/202401191224.png)  \r
<Badge type='danger'>安装tools</Badge>\r
![img](/image/202401191226.png)\r
<Badge type='danger'>点击安装，然后等待</Badge>\r
![img](/image/202401191227.png)\r
<Badge type='danger'>在虚拟机中找到下载好的文件</Badge>\r
![img](/image/202401191228.png)\r
<Badge type='danger'>选择典型安装</Badge>\r
![img](/image/202401191229.png)\r
<Badge type='danger'>现在，你可以愉快的使用虚拟机了</Badge>\r
\r
:::`,ir=`## vmware tools\r
\r
`,ar=`# Docker\r
\r
- 快速构建、运行、管理应用的工具\r
\r
- 运维工具\r
\r
## 参考教程\r
\r
::: tip <Badge type='info'>信息</Badge>\r
\r
|key|value|\r
|---|---|\r
|\`视频名称\`|黑马程序员Docker快速入门到项目部署|\r
|\`播放平台\`|bilibili|\r
|\`全部时长\`|3小时+|\r
|\`视频链接\`| [enter](https://www.bilibili.com/video/BV1HP4118797/?share_source=copy_web&vd_source=208ad8437d7a696e8bb3807400e31301){target="_blank"}|\r
|\`配套文档\`| [enter](https://b11et3un53m.feishu.cn/wiki/MWQIw4Zvhil0I5ktPHwcoqZdnec){target="_blank"}|\r
|\`课程评价\`|还没看完|\r
\r
\r
\r
:::`,dr=`## 1️⃣ docker的预先移除\r
\r
> 如果不确定服务器电脑是否已经安装docker，先预先移除docker\r
\r
\`\`\`shell\r
yum remove docker\r
\`\`\`\r
\r
## 配置docker的yum库\r
\r
\`\`\`shell\r
yum install -y yum-utils\r
\`\`\`\r
\r
## 配置Docker的yum源\r
\`\`\`shell\r
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\r
\`\`\`\r
## 安装 docker\r
\r
\`\`\`shell\r
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\r
\`\`\`\r
\r
## 检查是否安装完成\r
\r
\`\`\`shell\r
docker -v\r
\`\`\`\r
\r
\`\`\`shell\r
docker images\r
\`\`\`\r
\r
## 启动 docker\r
\r
\`\`\`shell\r
# 启动Docker\r
systemctl start docker\r
\r
# 停止Docker\r
systemctl stop docker\r
\r
# 重启\r
systemctl restart docker\r
\r
# 设置开机自启\r
systemctl enable docker\r
\r
# 执行docker ps命令，如果不报错，说明安装启动成功\r
docker ps\r
\`\`\`\r
\r
## 镜像加速\r
\r
创建目录\r
\r
\`\`\`shell\r
sudo mkdir -p /etc/docker\r
\`\`\`\r
\r
进入目录\r
\`\`\`shell\r
cd /etc/docker\r
\`\`\`\r
\r
创建文件\r
\r
\`\`\`shell\r
sudo tee /etc/docker/daemon.json <<-'EOF'\r
{\r
  "registry-mirrors": ["https://这是你的地址.mirror.aliyuncs.com"]\r
}\r
EOF\r
\`\`\`\r
\r
重启配置\r
\`\`\`shell\r
sudo systemctl daemon-reload\r
\`\`\``,lr=`## 1.安装文档\r
\r
官方文档 👇\r
\r
https://docs.docker.com/desktop/install/windows-install/\r
\r
\r
- 在任务栏选择启用或关闭功能\r
\r
\r
<zo-img momo='/image/202408260541.png'></zo-img>\r
\r
\r
- 勾选 子系统 和 虚拟机\r
\r
\r
\r
<zo-img momo='/image/202408260544.png'></zo-img>\r
\r
\r
## 2. 配置镜像设置\r
\r
> 在 \`setting\` - \`Docker Engine\` 中\r
\r
\`\`\`json\r
{\r
  "builder": {\r
    "gc": {\r
      "defaultKeepStorage": "20GB",\r
      "enabled": true\r
    }\r
  },\r
  "experimental": false,\r
  "registry-mirrors": [\r
  "https://dockerhub.icu"\r
  ]\r
\r
}\r
\r
\`\`\`\r
::: danger <Badge type='warning'>注意</Badge>\r
如果你使用的是阿里云服务器，你有自己的镜像加速地址\r
\r
- 1. 打开阿里云官网\r
- 2. 搜索【容器镜像服务】\r
- 3. 在【镜像工具】-【镜像加速器】中，可以看见自己加速地址\r
:::`,gr=`## 预先移除\r
\r
\`\`\`shell\r
yum remove docker\r
\`\`\`\r
\r
## 配置docker的yum库\r
\r
\`\`\`shell\r
yum install -y yum-utils\r
\`\`\`\r
\r
## 配置Docker的yum源\r
\`\`\`shell\r
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\r
\`\`\`\r
## 安装 docker\r
\r
\`\`\`shell\r
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\r
\`\`\`\r
\r
## 检查是否安装完成\r
\r
\`\`\`shell\r
docker -v\r
\`\`\`\r
\r
\`\`\`shell\r
docker images\r
\`\`\`\r
\r
## 启动 docker\r
\r
\`\`\`shell\r
# 启动Docker\r
systemctl start docker\r
\r
# 停止Docker\r
systemctl stop docker\r
\r
# 重启\r
systemctl restart docker\r
\r
# 设置开机自启\r
systemctl enable docker\r
\r
# 执行docker ps命令，如果不报错，说明安装启动成功\r
docker ps\r
\`\`\`\r
\r
## 镜像加速\r
\r
创建目录\r
\r
\`\`\`shell\r
sudo mkdir -p /etc/docker\r
\`\`\`\r
\r
进入目录\r
\`\`\`shell\r
cd /etc/docker\r
\`\`\`\r
\r
创建文件\r
\r
\`\`\`shell\r
sudo tee /etc/docker/daemon.json <<-'EOF'\r
{\r
  "registry-mirrors": ["https://这是你的地址.mirror.aliyuncs.com"]\r
}\r
EOF\r
\`\`\`\r
\r
重启配置\r
\`\`\`shell\r
sudo systemctl daemon-reload\r
\`\`\``,pr=`\`\`\`shell\r
# 创建一个容器 并让其在后台运行\r
docker run -d \\\r
    # 给容器命名（唯一、不重复） \r
  --name mysql \\\r
    # 端口映射 （宿主机端口: 容器内端口）\r
  -p 3306:3306 \\\r
    # 环境变量 (不同应用有所不同)\r
  -e TZ=Asia/Shanghai \\\r
  -e MYSQL_ROOT_PASSWORD=123 \\\r
    # 镜像名字\r
  mysql:latest\r
\`\`\`\r
\r
## 查看本地镜像\r
\r
\`\`\`shell\r
docker images\r
\`\`\`\r
\r
## 进入容器\r
\r
\`\`\`shell\r
docker exec -it [容器名称或ID] bash\r
\`\`\`\r
示例\r
\r
\`\`\`shell\r
docker exec -it nginx bash\r
\`\`\`\r
\r
##  数据卷\r
\r
- volume是一个虚拟目录\r
\r
|命令|说明|文档地址|\r
|---|---|---|\r
|docker volume create|创建数据卷|docker volume create|\r
|docker volume ls|查看所有数据卷|docs.docker.com|\r
|docker volume rm|删除指定数据卷|docs.docker.com|\r
|docker volume inspect|查看某个数据卷的详情|docs.docker.com|\r
|docker volume prune|清除数据卷|docker volume prune|`,mr="",cr="## 删除容器\r\n```shell\r\ndocker rm\r\n```\r\n\r\n## 查看容器是否绑定数据卷\r\n\r\n```shell\r\ndocker inspect [容器名称]\r\n```",ur="",hr="",vr="",_r=`\r
\r
::: danger  <Badge type='danger'>重要警示</Badge>\r
本部分笔记内容，为简化代码量，笔记中涉及的代码不会考虑对 MAC 的兼容性  \r
:::\r
\r
https://www.electronjs.org/`,br=`# 前置准备\r
\r
## 知识基础\r
\r
- node.js\r
\r
- vue 或者其他框架\r
\r
- 数据库\r
\r
## 安装node\r
\r
## 安装vsc`,yr=`## 新建文件夹\r
\r
> 在你喜欢的位置创建一个项目文件夹\r
\r
> 然后用你喜欢的方式打开该位置下的终端\r
\r
> 什么？你不知道什么是终端！额，**尽管你是老司机，但请勿无证驾驶**\r
\r
\r
## 初始化项目\r
\r
> **二选一**\r
\r
> **<small><small>如果是结合Vue3，没必要初始化，直接在vue3项目中安装electron即可</small></small>**\r
\r
<br>\r
\r
- 快速 <Badge type='warning'>新老优选</Badge>\r
\r
\`\`\`shell\r
npm init -y\r
\`\`\`\r
\r
<br>\r
\r
- 自定义 <Badge type='warning'>专业严谨</Badge>\r
\r
\`\`\`shell\r
npm init\r
\`\`\`\r
\r
\r
\r
## 安装项目依赖\r
\r
- 安装 \`electron\`\r
\r
\`\`\`shell\r
npm i electron -D\r
\`\`\`\r
\r
- 若是你没有安装人人都早已安装的 \`nodemon\` ，记得全局安装一下  \r
\r
::: code-group\r
\`\`\`shell [npm]\r
npm i nodemon -g\r
\`\`\`\r
\`\`\`shell [cnpm]\r
cnpm i nodemon -g\r
\`\`\`\r
:::\r
\r
## 创建入口文件\r
> **<small>electron 规范的入口文件为 \`main.js\`</small>**\r
\r
<br>\r
\r
在项目根目录下中新建一个 **main.js** 文件  \r
\r
并将下述示例代码复制到文件内  \r
\r
<br>\r
\r
\`\`\`javascript\r
const { app, BrowserWindow } = require('electron')\r
\r
const createWindow = () => {\r
    const win = new BrowserWindow({\r
        width: 520,\r
        height: 520\r
    })\r
}\r
\r
app.whenReady().then(createWindow)\r
\`\`\`\r
\r
## 合规修改与自定义调试指令\r
\r
打开 **package.json** 文件，修改配置\r
\r
::: info  <Badge type='danger'>package.json</Badge>\r
\r
- \`electron\` 要求 \`entry point\` 为 \`main.js\`\r
\r
- \`author\` 与 \`description\` 可为任意值，但对于应用打包是必填项\r
\r
\`\`\`json\r
{\r
  "name": "client",\r
  "version": "1.0.0",\r
  "description": "",\r
  "main": "index.js",  // [!code --]\r
  "main": "main.js",  // [!code ++]\r
  "scripts": {\r
    "start": "nodemon --exec electron . --watch ./ --ext .js,.html,.css,.vue",   // [!code ++]\r
\r
  },\r
  "keywords": [],\r
  "author": "",\r
  "license": "ISC"\r
}\r
\r
\`\`\`\r
- 快捷复制\r
\r
\`\`\`json\r
"start": "nodemon --exec electron . --watch ./ --ext .js,.html,.css,.vue",\r
\`\`\`\r
\r
:::\r
\r
- 输入指令，即可运行项目\r
\r
\r
\`\`\`shell\r
npm start\r
\`\`\`\r
\r
\r
\r
\r
\r
\r
\r
\r
`,fr="",wr="",jr=`\r
> 应用的生命周期\r
\r
## `,kr=`\r
\r
## 关闭默认菜单栏\r
\r
> :pushpin: 通过传入空数组实现关闭菜单栏的效果\r
\r
::: code-group \r
\r
\`\`\`javascript [main.js]\r
const { Menu } = require('electron')\r
Menu.setApplicationMenu(null)\r
\`\`\`\r
\r
:::\r
\r
> :pushpin: 类似的，也可以通过 \`BrowserWindow\` 里的 \`setMenu\` 实现 \r
\r
::: code-group\r
\r
\`\`\`javascript [main.js]\r
const { BrowserWindow } = require('electron')\r
\r
const win = new BrowserWindow()\r
\r
win.setMenu(null)\r
\r
\r
\`\`\`\r
\r
:::\r
\r
\r
\r
## 设置菜单栏\r
\r
::: code-group\r
\`\`\`javascript [main.js]\r
const { Menu } = require('electron')\r
let yourmenu = [\r
    // 这是一个菜单数组，书写规则后文查看\r
]\r
Menu.setApplicationMenu(yourmenu)\r
\r
\`\`\`\r
:::\r
\r
\r
\r
## 菜单数据的格式\r
\r
\`\`\`javascript\r
\r
\`\`\``,xr="```javascript\r\nconst {Tray} = require('electron')\r\n\r\nlet tray = new Tray('logo.png')\r\n```",zr="",Br=`## 建立项目文件夹\r
\r
<!-- > 一般 express 是在后端项目中，作为项目的大框架的使用  -->\r
\r
<br/>\r
\r
> 创建并命名：一个 \`server\` 的文件夹作为后端项目的根目录\r
\r
## 初始化项目\r
\r
<br/>\r
\r
> 使用命令行窗口进入 server 目录下，运行初始化代码 \r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm init\r
\`\`\`\r
\`\`\`shell [pnpm]\r
pnpm init\r
\`\`\`\r
\r
:::\r
\r
\r
## 安装\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm i express -D\r
\`\`\`\r
\`\`\`shell [pnpm]\r
pnpm i express -D\r
\`\`\`\r
\r
:::\r
\r
## 使用\r
\r
\`\`\`js\r
// 导入包\r
const express = require('express')\r
// 实例化\r
const app = express()\r
// 定义端口号\r
const port = 8080\r
\r
// 创建路由\r
app.get('/home', (req, res) => {\r
    res.end('已接受')\r
})\r
// 监听（启动服务）\r
app.listen(port, () => {\r
    console.log(\`服务已经启动.....http://127.0.0.1:\${port}\`);\r
})\r
\`\`\`\r
\r
## 响应\r
\r
\`\`\`js\r
app.get('/home',(req,res)=>{\r
    // 重定向\r
    res.redirect('https://baidu.com')\r
    // 下载\r
    res.download('文件的路径')\r
    // 字符串\r
    res.json({\r
        name:'mo',\r
        age:18\r
    })\r
    // 文件内容\r
    res.sendFile('文件的路径')\r
})\r
\r
\`\`\`\r
\r
## 中间件\r
\r
- 是一个回调函数\r
\r
### 全局中间件\r
\r
## 2. 快速创建 express 项目\r
\r
> 相关网址\r
\r
https://www.expressjs.com.cn/starter/generator.html\r
\r
\r
### 2.1 利用工具包生成项目\r
\r
- **以下代码含注释，请自行选择复制范围** 👇\r
\r
::: code-group\r
\r
\r
\`\`\`shell [Node.js 8.2.0 以上]\r
#   基本使用\r
npx express-generator\r
\r
\r
\`\`\`\r
\r
\`\`\`shell [Node.js 8.2.0 以下]\r
# 1. 全局安装 express-generator 包\r
npm install -g express-generator\r
# 2. 创建项目\r
express [yourProjectName]\r
# 示例代码 👇\r
express --no-view myserver\r
# 表示：创建一个名为 myserver 且 无需视图 的 express 项目\r
\r
\`\`\`\r
\r
\r
\`\`\`shell [相关参数]\r
# 获取帮助\r
$ express -h\r
# 用法逻辑 👇\r
  Usage: express [options] [dir]\r
# 示例：express --no-view myserver\r
# 表示：创建一个名为 myserver 且 无需视图 的 express 项目\r
\r
  Options:\r
\r
    -h, --help          输出使用方法\r
        --version       输出版本号\r
    -e, --ejs           添加对 ejs 模板引擎的支持\r
        --hbs           添加对 handlebars 模板引擎的支持\r
        --pug           添加对 pug 模板引擎的支持\r
    -H, --hogan         添加对 hogan.js 模板引擎的支持\r
        --no-view       创建不带视图引擎的项目\r
    -v, --view <engine> 添加对视图引擎（view） <engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）\r
    -c, --css <engine>  添加样式表引擎 <engine> 的支持 (less|stylus|compass|sass) （默认是普通的 css 文件）\r
        --git           添加 .gitignore\r
    -f, --force         强制在非空目录下创建\r
\r
\`\`\`\r
\r
:::\r
\r
### 2.2 安装项目依赖\r
\r
\r
\`\`\`shell\r
# 进入项目目录\r
cd myserver\r
# 安装项目依赖\r
npm install\r
\`\`\`\r
\r
### 2.3 项目的目录结构\r
\r
\`\`\`shell\r
.\r
├── app.js\r
├── bin\r
│   └── www\r
├── package.json\r
├── public\r
│   ├── images\r
│   ├── javascripts\r
│   └── stylesheets\r
│       └── style.css\r
├── routes\r
│   ├── index.js\r
│   └── users.js\r
└── views\r
    ├── error.pug\r
    ├── index.pug\r
    └── layout.pug\r
\r
\`\`\`\r
\r
<hr/>\r
\r
### 2.4 项目的启动\r
\r
- **使用 \`npm start\` 命令启动项目**\r
\r
\`\`\`shell\r
npm start\r
\`\`\`\r
\r
::: tip 提示：建议安装  \`nodemon\` ⭐\r
\r
\r
> **这是一个可以让node项目热更新的包**  \r
> 即是说 :  可以不用频繁启动项目\r
\r
- 全局安装\r
\r
\`\`\`shell\r
npm i -g nodemon\r
\`\`\`\r
\r
- 然后，修改项目的命令脚本\r
\r
> 在 \`package.json\` 文件中\r
\r
> 将 \`node ./bin/www\` -> \`nodemon ./bin/www\`\r
\r
\r
\r
\`\`\`json:line-numbers{6}\r
{\r
  "name": "myserver",\r
  "version": "0.0.0",\r
  "private": true,\r
  "scripts": {\r
    "start": "node./bin/www"  ,  // [!code --]\r
    "start": "nodemon ./bin/www"   // [!code ++]\r
\r
  },\r
  "dependencies": {\r
    "cookie-parser": "~1.4.4",\r
    "debug": "~2.6.9",\r
    "express": "~4.16.1",\r
    "morgan": "~1.9.1"\r
  }\r
}\r
\`\`\`\r
\r
\r
\r
:::\r
`,qr=`## 1. 安装依赖 - sqlite3\r
\r
- 打开项目根目录的命令行\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm i sqlite3\r
\`\`\`\r
\`\`\`shell [pnpm]\r
pnpm i sqlite3\r
\`\`\`\r
\r
\r
:::`,Sr="",Tr="",Er="",Pr=`\`\`\`js\r
\r
/**\r
"multer"\r
"sqlite3"\r
"uuid"\r
 */\r
const express = require("express")\r
const multer = require("multer")\r
const path = require("path")\r
const app = express();\r
const { db, genid } = require("./db/DbUtils")\r
const port = 8080\r
\r
//开放跨域请求\r
app.use(function (req, res, next) {\r
    //设置允许跨域的域名，*代表允许任意域名跨域\r
    res.header("Access-Control-Allow-Origin", "*");\r
    //允许的header类型\r
    res.header("Access-Control-Allow-Headers", "*");\r
    //跨域允许的请求方式\r
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");\r
    if (req.method == "OPTIONS") res.sendStatus(200); //让options尝试请求快速结束\r
    else next();\r
});\r
\r
app.use(express.json())\r
const update = multer({\r
    dest: "./public/upload/temp"\r
})\r
app.use(update.any())\r
//指定静态资源路径\r
app.use(express.static(path.join(__dirname, "public")))\r
\r
//category/_token/add\r
const ADMIN_TOKEN_PATH = "/_token"\r
app.all("*", async (req, res, next) => {\r
    if (req.path.indexOf(ADMIN_TOKEN_PATH) > -1) {\r
\r
        let { token } = req.headers;\r
\r
        let admin_token_sql = "SELECT * FROM \`admin\` WHERE \`token\` = ?"\r
        let adminResult = await db.async.all(admin_token_sql,[token])\r
        if(adminResult.err != null || adminResult.rows.length == 0){\r
            res.send({\r
                code: 403,\r
                msg: "请先登录"\r
            })\r
            return \r
        }else{\r
            next()\r
        }\r
    }else{\r
        next()\r
    }\r
})\r
\r
app.use("/test", require("./routers/TestRouter"))\r
app.use("/admin", require("./routers/AdminRouter"))\r
app.use("/category", require("./routers/CategoryRouter"))\r
app.use("/blog", require("./routers/BlogRouter"))\r
app.use("/upload", require("./routers/UploadRouter"))\r
\r
app.get("/", (req, res) => {\r
    res.send("hello world");\r
})\r
\r
app.listen(port, () => {\r
    console.log(\`启动成功 : http://localhost:\${port}/\`)\r
})\r
\r
\r
\r
\`\`\``,Or="",Cr=`\`\`\`js\r
\r
const sqlite3 = require("sqlite3").verbose()\r
const path = require("path")\r
const GenId = require("../utils/SnowFlake")\r
\r
var db = new sqlite3.Database(path.join(__dirname, "blog.sqlite3"))\r
const genid = new GenId({ WorkerId: 1 })\r
\r
db.async = {}\r
\r
db.async.all = (sql, params) => {\r
    return new Promise((resolve, reject) => {\r
        db.all(sql, params, (err, rows) => {\r
            resolve({ err, rows })\r
        })\r
    })\r
}\r
\r
db.async.run = (sql, params) => {\r
    return new Promise((resolve, reject) => {\r
        db.run(sql, params, (err, rows) => {\r
            resolve({ err, rows })\r
        })\r
    })\r
}\r
\r
module.exports = { db, genid }\r
\r
\`\`\``,Fr=`\`\`\`json\r
{\r
  "name": "server",\r
  "lockfileVersion": 2,\r
  "requires": true,\r
  "packages": {\r
    "": {\r
      "dependencies": {\r
        "express": "^4.18.1",\r
        "multer": "^1.4.5-lts.1",\r
        "sqlite3": "^5.0.9",\r
        "uuid": "^8.3.2"\r
      }\r
    },\r
    "node_modules/@gar/promisify": {\r
      "version": "1.1.3",\r
      "resolved": "https://registry.npmjs.org/@gar/promisify/-/promisify-1.1.3.tgz",\r
      "integrity": "sha512-k2Ty1JcVojjJFwrg/ThKi2ujJ7XNLYaFGNB/bWT9wGR+oSMJHMa5w+CUq6p/pVrKeNNgA7pCqEcjSnHVoqJQFw==",\r
      "optional": true\r
    },\r
    "node_modules/@mapbox/node-pre-gyp": {\r
      "version": "1.0.9",\r
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.9.tgz",\r
      "integrity": "sha512-aDF3S3rK9Q2gey/WAttUlISduDItz5BU3306M9Eyv6/oS40aMprnopshtlKTykxRNIBEZuRMaZAnbrQ4QtKGyw==",\r
      "dependencies": {\r
        "detect-libc": "^2.0.0",\r
        "https-proxy-agent": "^5.0.0",\r
        "make-dir": "^3.1.0",\r
        "node-fetch": "^2.6.7",\r
        "nopt": "^5.0.0",\r
        "npmlog": "^5.0.1",\r
        "rimraf": "^3.0.2",\r
        "semver": "^7.3.5",\r
        "tar": "^6.1.11"\r
      },\r
      "bin": {\r
        "node-pre-gyp": "bin/node-pre-gyp"\r
      }\r
    },\r
    "node_modules/@npmcli/fs": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-1.1.1.tgz",\r
      "integrity": "sha512-8KG5RD0GVP4ydEzRn/I4BNDuxDtqVbOdm8675T49OIG/NGhaK0pjPX7ZcDlvKYbA+ulvVK3ztfcF4uBdOxuJbQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "@gar/promisify": "^1.0.1",\r
        "semver": "^7.3.5"\r
      }\r
    },\r
    "node_modules/@npmcli/move-file": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.1.2.tgz",\r
      "integrity": "sha512-1SUf/Cg2GzGDyaf15aR9St9TWlb+XvbZXWpDx8YKs7MLzMH/BCeopv+y9vzrzgkfykCGuWOlSu3mZhj2+FQcrg==",\r
      "optional": true,\r
      "dependencies": {\r
        "mkdirp": "^1.0.4",\r
        "rimraf": "^3.0.2"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/@npmcli/move-file/node_modules/mkdirp": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",\r
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",\r
      "optional": true,\r
      "bin": {\r
        "mkdirp": "bin/cmd.js"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/@tootallnate/once": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",\r
      "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">= 6"\r
      }\r
    },\r
    "node_modules/abbrev": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",\r
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="\r
    },\r
    "node_modules/accepts": {\r
      "version": "1.3.8",\r
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",\r
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",\r
      "dependencies": {\r
        "mime-types": "~2.1.34",\r
        "negotiator": "0.6.3"\r
      },\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/agent-base": {\r
      "version": "6.0.2",\r
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",\r
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",\r
      "dependencies": {\r
        "debug": "4"\r
      },\r
      "engines": {\r
        "node": ">= 6.0.0"\r
      }\r
    },\r
    "node_modules/agent-base/node_modules/debug": {\r
      "version": "4.3.4",\r
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
      "dependencies": {\r
        "ms": "2.1.2"\r
      },\r
      "engines": {\r
        "node": ">=6.0"\r
      },\r
      "peerDependenciesMeta": {\r
        "supports-color": {\r
          "optional": true\r
        }\r
      }\r
    },\r
    "node_modules/agent-base/node_modules/ms": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="\r
    },\r
    "node_modules/agentkeepalive": {\r
      "version": "4.2.1",\r
      "resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.2.1.tgz",\r
      "integrity": "sha512-Zn4cw2NEqd+9fiSVWMscnjyQ1a8Yfoc5oBajLeo5w+YBHgDUcEBY2hS4YpTz6iN5f/2zQiktcuM6tS8x1p9dpA==",\r
      "optional": true,\r
      "dependencies": {\r
        "debug": "^4.1.0",\r
        "depd": "^1.1.2",\r
        "humanize-ms": "^1.2.1"\r
      },\r
      "engines": {\r
        "node": ">= 8.0.0"\r
      }\r
    },\r
    "node_modules/agentkeepalive/node_modules/debug": {\r
      "version": "4.3.4",\r
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "ms": "2.1.2"\r
      },\r
      "engines": {\r
        "node": ">=6.0"\r
      },\r
      "peerDependenciesMeta": {\r
        "supports-color": {\r
          "optional": true\r
        }\r
      }\r
    },\r
    "node_modules/agentkeepalive/node_modules/depd": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",\r
      "integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/agentkeepalive/node_modules/ms": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",\r
      "optional": true\r
    },\r
    "node_modules/aggregate-error": {\r
      "version": "3.1.0",\r
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",\r
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",\r
      "optional": true,\r
      "dependencies": {\r
        "clean-stack": "^2.0.0",\r
        "indent-string": "^4.0.0"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/ansi-regex": {\r
      "version": "5.0.1",\r
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",\r
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/append-field": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",\r
      "integrity": "sha512-klpgFSWLW1ZEs8svjfb7g4qWY0YS5imI82dTg+QahUvJ8YqAY0P10Uk8tTyh9ZGuYEZEMaeJYCF5BFuX552hsw=="\r
    },\r
    "node_modules/aproba": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",\r
      "integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ=="\r
    },\r
    "node_modules/are-we-there-yet": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-2.0.0.tgz",\r
      "integrity": "sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==",\r
      "dependencies": {\r
        "delegates": "^1.0.0",\r
        "readable-stream": "^3.6.0"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/are-we-there-yet/node_modules/readable-stream": {\r
      "version": "3.6.0",\r
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",\r
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",\r
      "dependencies": {\r
        "inherits": "^2.0.3",\r
        "string_decoder": "^1.1.1",\r
        "util-deprecate": "^1.0.1"\r
      },\r
      "engines": {\r
        "node": ">= 6"\r
      }\r
    },\r
    "node_modules/array-flatten": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",\r
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="\r
    },\r
    "node_modules/balanced-match": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",\r
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="\r
    },\r
    "node_modules/body-parser": {\r
      "version": "1.20.0",\r
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.0.tgz",\r
      "integrity": "sha512-DfJ+q6EPcGKZD1QWUjSpqp+Q7bDQTsQIF4zfUAtZ6qk+H/3/QRhg9CEp39ss+/T2vw0+HaidC0ecJj/DRLIaKg==",\r
      "dependencies": {\r
        "bytes": "3.1.2",\r
        "content-type": "~1.0.4",\r
        "debug": "2.6.9",\r
        "depd": "2.0.0",\r
        "destroy": "1.2.0",\r
        "http-errors": "2.0.0",\r
        "iconv-lite": "0.4.24",\r
        "on-finished": "2.4.1",\r
        "qs": "6.10.3",\r
        "raw-body": "2.5.1",\r
        "type-is": "~1.6.18",\r
        "unpipe": "1.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 0.8",\r
        "npm": "1.2.8000 || >= 1.4.16"\r
      }\r
    },\r
    "node_modules/brace-expansion": {\r
      "version": "1.1.11",\r
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",\r
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",\r
      "dependencies": {\r
        "balanced-match": "^1.0.0",\r
        "concat-map": "0.0.1"\r
      }\r
    },\r
    "node_modules/buffer-from": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",\r
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="\r
    },\r
    "node_modules/busboy": {\r
      "version": "1.6.0",\r
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",\r
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",\r
      "dependencies": {\r
        "streamsearch": "^1.1.0"\r
      },\r
      "engines": {\r
        "node": ">=10.16.0"\r
      }\r
    },\r
    "node_modules/bytes": {\r
      "version": "3.1.2",\r
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",\r
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/cacache": {\r
      "version": "15.3.0",\r
      "resolved": "https://registry.npmjs.org/cacache/-/cacache-15.3.0.tgz",\r
      "integrity": "sha512-VVdYzXEn+cnbXpFgWs5hTT7OScegHVmLhJIR8Ufqk3iFD6A6j5iSX1KuBTfNEv4tdJWE2PzA6IVFtcLC7fN9wQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "@npmcli/fs": "^1.0.0",\r
        "@npmcli/move-file": "^1.0.1",\r
        "chownr": "^2.0.0",\r
        "fs-minipass": "^2.0.0",\r
        "glob": "^7.1.4",\r
        "infer-owner": "^1.0.4",\r
        "lru-cache": "^6.0.0",\r
        "minipass": "^3.1.1",\r
        "minipass-collect": "^1.0.2",\r
        "minipass-flush": "^1.0.5",\r
        "minipass-pipeline": "^1.2.2",\r
        "mkdirp": "^1.0.3",\r
        "p-map": "^4.0.0",\r
        "promise-inflight": "^1.0.1",\r
        "rimraf": "^3.0.2",\r
        "ssri": "^8.0.1",\r
        "tar": "^6.0.2",\r
        "unique-filename": "^1.1.1"\r
      },\r
      "engines": {\r
        "node": ">= 10"\r
      }\r
    },\r
    "node_modules/cacache/node_modules/mkdirp": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",\r
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",\r
      "optional": true,\r
      "bin": {\r
        "mkdirp": "bin/cmd.js"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/call-bind": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",\r
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",\r
      "dependencies": {\r
        "function-bind": "^1.1.1",\r
        "get-intrinsic": "^1.0.2"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/ljharb"\r
      }\r
    },\r
    "node_modules/chownr": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",\r
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/clean-stack": {\r
      "version": "2.2.0",\r
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",\r
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">=6"\r
      }\r
    },\r
    "node_modules/color-support": {\r
      "version": "1.1.3",\r
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",\r
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",\r
      "bin": {\r
        "color-support": "bin.js"\r
      }\r
    },\r
    "node_modules/concat-map": {\r
      "version": "0.0.1",\r
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",\r
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="\r
    },\r
    "node_modules/concat-stream": {\r
      "version": "1.6.2",\r
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",\r
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",\r
      "engines": [\r
        "node >= 0.8"\r
      ],\r
      "dependencies": {\r
        "buffer-from": "^1.0.0",\r
        "inherits": "^2.0.3",\r
        "readable-stream": "^2.2.2",\r
        "typedarray": "^0.0.6"\r
      }\r
    },\r
    "node_modules/console-control-strings": {\r
      "version": "1.1.0",\r
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",\r
      "integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ=="\r
    },\r
    "node_modules/content-disposition": {\r
      "version": "0.5.4",\r
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",\r
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",\r
      "dependencies": {\r
        "safe-buffer": "5.2.1"\r
      },\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/content-type": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",\r
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/cookie": {\r
      "version": "0.5.0",\r
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",\r
      "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/cookie-signature": {\r
      "version": "1.0.6",\r
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",\r
      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="\r
    },\r
    "node_modules/core-util-is": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",\r
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="\r
    },\r
    "node_modules/debug": {\r
      "version": "2.6.9",\r
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",\r
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",\r
      "dependencies": {\r
        "ms": "2.0.0"\r
      }\r
    },\r
    "node_modules/delegates": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",\r
      "integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ=="\r
    },\r
    "node_modules/depd": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",\r
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/destroy": {\r
      "version": "1.2.0",\r
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",\r
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",\r
      "engines": {\r
        "node": ">= 0.8",\r
        "npm": "1.2.8000 || >= 1.4.16"\r
      }\r
    },\r
    "node_modules/detect-libc": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.1.tgz",\r
      "integrity": "sha512-463v3ZeIrcWtdgIg6vI6XUncguvr2TnGl4SzDXinkt9mSLpBJKXT3mW6xT3VQdDN11+WVs29pgvivTc4Lp8v+w==",\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/ee-first": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",\r
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="\r
    },\r
    "node_modules/emoji-regex": {\r
      "version": "8.0.0",\r
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",\r
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="\r
    },\r
    "node_modules/encodeurl": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",\r
      "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/encoding": {\r
      "version": "0.1.13",\r
      "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",\r
      "integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",\r
      "optional": true,\r
      "dependencies": {\r
        "iconv-lite": "^0.6.2"\r
      }\r
    },\r
    "node_modules/encoding/node_modules/iconv-lite": {\r
      "version": "0.6.3",\r
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",\r
      "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",\r
      "optional": true,\r
      "dependencies": {\r
        "safer-buffer": ">= 2.1.2 < 3.0.0"\r
      },\r
      "engines": {\r
        "node": ">=0.10.0"\r
      }\r
    },\r
    "node_modules/env-paths": {\r
      "version": "2.2.1",\r
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",\r
      "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">=6"\r
      }\r
    },\r
    "node_modules/err-code": {\r
      "version": "2.0.3",\r
      "resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",\r
      "integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",\r
      "optional": true\r
    },\r
    "node_modules/escape-html": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",\r
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="\r
    },\r
    "node_modules/etag": {\r
      "version": "1.8.1",\r
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",\r
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/express": {\r
      "version": "4.18.1",\r
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.1.tgz",\r
      "integrity": "sha512-zZBcOX9TfehHQhtupq57OF8lFZ3UZi08Y97dwFCkD8p9d/d2Y3M+ykKcwaMDEL+4qyUolgBDX6AblpR3fL212Q==",\r
      "dependencies": {\r
        "accepts": "~1.3.8",\r
        "array-flatten": "1.1.1",\r
        "body-parser": "1.20.0",\r
        "content-disposition": "0.5.4",\r
        "content-type": "~1.0.4",\r
        "cookie": "0.5.0",\r
        "cookie-signature": "1.0.6",\r
        "debug": "2.6.9",\r
        "depd": "2.0.0",\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "etag": "~1.8.1",\r
        "finalhandler": "1.2.0",\r
        "fresh": "0.5.2",\r
        "http-errors": "2.0.0",\r
        "merge-descriptors": "1.0.1",\r
        "methods": "~1.1.2",\r
        "on-finished": "2.4.1",\r
        "parseurl": "~1.3.3",\r
        "path-to-regexp": "0.1.7",\r
        "proxy-addr": "~2.0.7",\r
        "qs": "6.10.3",\r
        "range-parser": "~1.2.1",\r
        "safe-buffer": "5.2.1",\r
        "send": "0.18.0",\r
        "serve-static": "1.15.0",\r
        "setprototypeof": "1.2.0",\r
        "statuses": "2.0.1",\r
        "type-is": "~1.6.18",\r
        "utils-merge": "1.0.1",\r
        "vary": "~1.1.2"\r
      },\r
      "engines": {\r
        "node": ">= 0.10.0"\r
      }\r
    },\r
    "node_modules/finalhandler": {\r
      "version": "1.2.0",\r
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",\r
      "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",\r
      "dependencies": {\r
        "debug": "2.6.9",\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "on-finished": "2.4.1",\r
        "parseurl": "~1.3.3",\r
        "statuses": "2.0.1",\r
        "unpipe": "~1.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/forwarded": {\r
      "version": "0.2.0",\r
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",\r
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/fresh": {\r
      "version": "0.5.2",\r
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",\r
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/fs-minipass": {\r
      "version": "2.1.0",\r
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",\r
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",\r
      "dependencies": {\r
        "minipass": "^3.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 8"\r
      }\r
    },\r
    "node_modules/fs.realpath": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",\r
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw=="\r
    },\r
    "node_modules/function-bind": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",\r
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="\r
    },\r
    "node_modules/gauge": {\r
      "version": "3.0.2",\r
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-3.0.2.tgz",\r
      "integrity": "sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==",\r
      "dependencies": {\r
        "aproba": "^1.0.3 || ^2.0.0",\r
        "color-support": "^1.1.2",\r
        "console-control-strings": "^1.0.0",\r
        "has-unicode": "^2.0.1",\r
        "object-assign": "^4.1.1",\r
        "signal-exit": "^3.0.0",\r
        "string-width": "^4.2.3",\r
        "strip-ansi": "^6.0.1",\r
        "wide-align": "^1.1.2"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/get-intrinsic": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.2.tgz",\r
      "integrity": "sha512-Jfm3OyCxHh9DJyc28qGk+JmfkpO41A4XkneDSujN9MDXrm4oDKdHvndhZ2dN94+ERNfkYJWDclW6k2L/ZGHjXA==",\r
      "dependencies": {\r
        "function-bind": "^1.1.1",\r
        "has": "^1.0.3",\r
        "has-symbols": "^1.0.3"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/ljharb"\r
      }\r
    },\r
    "node_modules/glob": {\r
      "version": "7.2.3",\r
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",\r
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",\r
      "dependencies": {\r
        "fs.realpath": "^1.0.0",\r
        "inflight": "^1.0.4",\r
        "inherits": "2",\r
        "minimatch": "^3.1.1",\r
        "once": "^1.3.0",\r
        "path-is-absolute": "^1.0.0"\r
      },\r
      "engines": {\r
        "node": "*"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/isaacs"\r
      }\r
    },\r
    "node_modules/graceful-fs": {\r
      "version": "4.2.10",\r
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz",\r
      "integrity": "sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA==",\r
      "optional": true\r
    },\r
    "node_modules/has": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",\r
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",\r
      "dependencies": {\r
        "function-bind": "^1.1.1"\r
      },\r
      "engines": {\r
        "node": ">= 0.4.0"\r
      }\r
    },\r
    "node_modules/has-symbols": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",\r
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",\r
      "engines": {\r
        "node": ">= 0.4"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/ljharb"\r
      }\r
    },\r
    "node_modules/has-unicode": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",\r
      "integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ=="\r
    },\r
    "node_modules/http-cache-semantics": {\r
      "version": "4.1.0",\r
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",\r
      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",\r
      "optional": true\r
    },\r
    "node_modules/http-errors": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",\r
      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",\r
      "dependencies": {\r
        "depd": "2.0.0",\r
        "inherits": "2.0.4",\r
        "setprototypeof": "1.2.0",\r
        "statuses": "2.0.1",\r
        "toidentifier": "1.0.1"\r
      },\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/http-proxy-agent": {\r
      "version": "4.0.1",\r
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",\r
      "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",\r
      "optional": true,\r
      "dependencies": {\r
        "@tootallnate/once": "1",\r
        "agent-base": "6",\r
        "debug": "4"\r
      },\r
      "engines": {\r
        "node": ">= 6"\r
      }\r
    },\r
    "node_modules/http-proxy-agent/node_modules/debug": {\r
      "version": "4.3.4",\r
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "ms": "2.1.2"\r
      },\r
      "engines": {\r
        "node": ">=6.0"\r
      },\r
      "peerDependenciesMeta": {\r
        "supports-color": {\r
          "optional": true\r
        }\r
      }\r
    },\r
    "node_modules/http-proxy-agent/node_modules/ms": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",\r
      "optional": true\r
    },\r
    "node_modules/https-proxy-agent": {\r
      "version": "5.0.1",\r
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",\r
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",\r
      "dependencies": {\r
        "agent-base": "6",\r
        "debug": "4"\r
      },\r
      "engines": {\r
        "node": ">= 6"\r
      }\r
    },\r
    "node_modules/https-proxy-agent/node_modules/debug": {\r
      "version": "4.3.4",\r
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
      "dependencies": {\r
        "ms": "2.1.2"\r
      },\r
      "engines": {\r
        "node": ">=6.0"\r
      },\r
      "peerDependenciesMeta": {\r
        "supports-color": {\r
          "optional": true\r
        }\r
      }\r
    },\r
    "node_modules/https-proxy-agent/node_modules/ms": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="\r
    },\r
    "node_modules/humanize-ms": {\r
      "version": "1.2.1",\r
      "resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",\r
      "integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "ms": "^2.0.0"\r
      }\r
    },\r
    "node_modules/iconv-lite": {\r
      "version": "0.4.24",\r
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",\r
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",\r
      "dependencies": {\r
        "safer-buffer": ">= 2.1.2 < 3"\r
      },\r
      "engines": {\r
        "node": ">=0.10.0"\r
      }\r
    },\r
    "node_modules/imurmurhash": {\r
      "version": "0.1.4",\r
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",\r
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">=0.8.19"\r
      }\r
    },\r
    "node_modules/indent-string": {\r
      "version": "4.0.0",\r
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",\r
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/infer-owner": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",\r
      "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",\r
      "optional": true\r
    },\r
    "node_modules/inflight": {\r
      "version": "1.0.6",\r
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",\r
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",\r
      "dependencies": {\r
        "once": "^1.3.0",\r
        "wrappy": "1"\r
      }\r
    },\r
    "node_modules/inherits": {\r
      "version": "2.0.4",\r
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",\r
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="\r
    },\r
    "node_modules/ip": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/ip/-/ip-2.0.0.tgz",\r
      "integrity": "sha512-WKa+XuLG1A1R0UWhl2+1XQSi+fZWMsYKffMZTTYsiZaUD8k2yDAj5atimTUD2TZkyCkNEeYE5NhFZmupOGtjYQ==",\r
      "optional": true\r
    },\r
    "node_modules/ipaddr.js": {\r
      "version": "1.9.1",\r
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",\r
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",\r
      "engines": {\r
        "node": ">= 0.10"\r
      }\r
    },\r
    "node_modules/is-fullwidth-code-point": {\r
      "version": "3.0.0",\r
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",\r
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/is-lambda": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",\r
      "integrity": "sha512-z7CMFGNrENq5iFB9Bqo64Xk6Y9sg+epq1myIcdHaGnbMTYOxvzsEtdYqQUylB7LxfkvgrrjP32T6Ywciio9UIQ==",\r
      "optional": true\r
    },\r
    "node_modules/isarray": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",\r
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ=="\r
    },\r
    "node_modules/isexe": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",\r
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",\r
      "optional": true\r
    },\r
    "node_modules/lru-cache": {\r
      "version": "6.0.0",\r
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",\r
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",\r
      "dependencies": {\r
        "yallist": "^4.0.0"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/make-dir": {\r
      "version": "3.1.0",\r
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",\r
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",\r
      "dependencies": {\r
        "semver": "^6.0.0"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/sindresorhus"\r
      }\r
    },\r
    "node_modules/make-dir/node_modules/semver": {\r
      "version": "6.3.0",\r
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",\r
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",\r
      "bin": {\r
        "semver": "bin/semver.js"\r
      }\r
    },\r
    "node_modules/make-fetch-happen": {\r
      "version": "9.1.0",\r
      "resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",\r
      "integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",\r
      "optional": true,\r
      "dependencies": {\r
        "agentkeepalive": "^4.1.3",\r
        "cacache": "^15.2.0",\r
        "http-cache-semantics": "^4.1.0",\r
        "http-proxy-agent": "^4.0.1",\r
        "https-proxy-agent": "^5.0.0",\r
        "is-lambda": "^1.0.1",\r
        "lru-cache": "^6.0.0",\r
        "minipass": "^3.1.3",\r
        "minipass-collect": "^1.0.2",\r
        "minipass-fetch": "^1.3.2",\r
        "minipass-flush": "^1.0.5",\r
        "minipass-pipeline": "^1.2.4",\r
        "negotiator": "^0.6.2",\r
        "promise-retry": "^2.0.1",\r
        "socks-proxy-agent": "^6.0.0",\r
        "ssri": "^8.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 10"\r
      }\r
    },\r
    "node_modules/media-typer": {\r
      "version": "0.3.0",\r
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",\r
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/merge-descriptors": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",\r
      "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="\r
    },\r
    "node_modules/methods": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",\r
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/mime": {\r
      "version": "1.6.0",\r
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",\r
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",\r
      "bin": {\r
        "mime": "cli.js"\r
      },\r
      "engines": {\r
        "node": ">=4"\r
      }\r
    },\r
    "node_modules/mime-db": {\r
      "version": "1.52.0",\r
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",\r
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/mime-types": {\r
      "version": "2.1.35",\r
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",\r
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",\r
      "dependencies": {\r
        "mime-db": "1.52.0"\r
      },\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/minimatch": {\r
      "version": "3.1.2",\r
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",\r
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",\r
      "dependencies": {\r
        "brace-expansion": "^1.1.7"\r
      },\r
      "engines": {\r
        "node": "*"\r
      }\r
    },\r
    "node_modules/minimist": {\r
      "version": "1.2.6",\r
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.6.tgz",\r
      "integrity": "sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q=="\r
    },\r
    "node_modules/minipass": {\r
      "version": "3.3.4",\r
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.4.tgz",\r
      "integrity": "sha512-I9WPbWHCGu8W+6k1ZiGpPu0GkoKBeorkfKNuAFBNS1HNFJvke82sxvI5bzcCNpWPorkOO5QQ+zomzzwRxejXiw==",\r
      "dependencies": {\r
        "yallist": "^4.0.0"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/minipass-collect": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",\r
      "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",\r
      "optional": true,\r
      "dependencies": {\r
        "minipass": "^3.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 8"\r
      }\r
    },\r
    "node_modules/minipass-fetch": {\r
      "version": "1.4.1",\r
      "resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-1.4.1.tgz",\r
      "integrity": "sha512-CGH1eblLq26Y15+Azk7ey4xh0J/XfJfrCox5LDJiKqI2Q2iwOLOKrlmIaODiSQS8d18jalF6y2K2ePUm0CmShw==",\r
      "optional": true,\r
      "dependencies": {\r
        "minipass": "^3.1.0",\r
        "minipass-sized": "^1.0.3",\r
        "minizlib": "^2.0.0"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      },\r
      "optionalDependencies": {\r
        "encoding": "^0.1.12"\r
      }\r
    },\r
    "node_modules/minipass-flush": {\r
      "version": "1.0.5",\r
      "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",\r
      "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",\r
      "optional": true,\r
      "dependencies": {\r
        "minipass": "^3.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 8"\r
      }\r
    },\r
    "node_modules/minipass-pipeline": {\r
      "version": "1.2.4",\r
      "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",\r
      "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",\r
      "optional": true,\r
      "dependencies": {\r
        "minipass": "^3.0.0"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/minipass-sized": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",\r
      "integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",\r
      "optional": true,\r
      "dependencies": {\r
        "minipass": "^3.0.0"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/minizlib": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",\r
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",\r
      "dependencies": {\r
        "minipass": "^3.0.0",\r
        "yallist": "^4.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 8"\r
      }\r
    },\r
    "node_modules/mkdirp": {\r
      "version": "0.5.6",\r
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",\r
      "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",\r
      "dependencies": {\r
        "minimist": "^1.2.6"\r
      },\r
      "bin": {\r
        "mkdirp": "bin/cmd.js"\r
      }\r
    },\r
    "node_modules/ms": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",\r
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="\r
    },\r
    "node_modules/multer": {\r
      "version": "1.4.5-lts.1",\r
      "resolved": "https://registry.npmjs.org/multer/-/multer-1.4.5-lts.1.tgz",\r
      "integrity": "sha512-ywPWvcDMeH+z9gQq5qYHCCy+ethsk4goepZ45GLD63fOu0YcNecQxi64nDs3qluZB+murG3/D4dJ7+dGctcCQQ==",\r
      "dependencies": {\r
        "append-field": "^1.0.0",\r
        "busboy": "^1.0.0",\r
        "concat-stream": "^1.5.2",\r
        "mkdirp": "^0.5.4",\r
        "object-assign": "^4.1.1",\r
        "type-is": "^1.6.4",\r
        "xtend": "^4.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 6.0.0"\r
      }\r
    },\r
    "node_modules/negotiator": {\r
      "version": "0.6.3",\r
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",\r
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/node-addon-api": {\r
      "version": "4.3.0",\r
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-4.3.0.tgz",\r
      "integrity": "sha512-73sE9+3UaLYYFmDsFZnqCInzPyh3MqIwZO9cw58yIqAZhONrrabrYyYe3TuIqtIiOuTXVhsGau8hcrhhwSsDIQ=="\r
    },\r
    "node_modules/node-fetch": {\r
      "version": "2.6.7",\r
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.7.tgz",\r
      "integrity": "sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==",\r
      "dependencies": {\r
        "whatwg-url": "^5.0.0"\r
      },\r
      "engines": {\r
        "node": "4.x || >=6.0.0"\r
      },\r
      "peerDependencies": {\r
        "encoding": "^0.1.0"\r
      },\r
      "peerDependenciesMeta": {\r
        "encoding": {\r
          "optional": true\r
        }\r
      }\r
    },\r
    "node_modules/node-gyp": {\r
      "version": "8.4.1",\r
      "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-8.4.1.tgz",\r
      "integrity": "sha512-olTJRgUtAb/hOXG0E93wZDs5YiJlgbXxTwQAFHyNlRsXQnYzUaF2aGgujZbw+hR8aF4ZG/rST57bWMWD16jr9w==",\r
      "optional": true,\r
      "dependencies": {\r
        "env-paths": "^2.2.0",\r
        "glob": "^7.1.4",\r
        "graceful-fs": "^4.2.6",\r
        "make-fetch-happen": "^9.1.0",\r
        "nopt": "^5.0.0",\r
        "npmlog": "^6.0.0",\r
        "rimraf": "^3.0.2",\r
        "semver": "^7.3.5",\r
        "tar": "^6.1.2",\r
        "which": "^2.0.2"\r
      },\r
      "bin": {\r
        "node-gyp": "bin/node-gyp.js"\r
      },\r
      "engines": {\r
        "node": ">= 10.12.0"\r
      }\r
    },\r
    "node_modules/node-gyp/node_modules/are-we-there-yet": {\r
      "version": "3.0.0",\r
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-3.0.0.tgz",\r
      "integrity": "sha512-0GWpv50YSOcLXaN6/FAKY3vfRbllXWV2xvfA/oKJF8pzFhWXPV+yjhJXDBbjscDYowv7Yw1A3uigpzn5iEGTyw==",\r
      "optional": true,\r
      "dependencies": {\r
        "delegates": "^1.0.0",\r
        "readable-stream": "^3.6.0"\r
      },\r
      "engines": {\r
        "node": "^12.13.0 || ^14.15.0 || >=16"\r
      }\r
    },\r
    "node_modules/node-gyp/node_modules/gauge": {\r
      "version": "4.0.4",\r
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-4.0.4.tgz",\r
      "integrity": "sha512-f9m+BEN5jkg6a0fZjleidjN51VE1X+mPFQ2DJ0uv1V39oCLCbsGe6yjbBnp7eK7z/+GAon99a3nHuqbuuthyPg==",\r
      "optional": true,\r
      "dependencies": {\r
        "aproba": "^1.0.3 || ^2.0.0",\r
        "color-support": "^1.1.3",\r
        "console-control-strings": "^1.1.0",\r
        "has-unicode": "^2.0.1",\r
        "signal-exit": "^3.0.7",\r
        "string-width": "^4.2.3",\r
        "strip-ansi": "^6.0.1",\r
        "wide-align": "^1.1.5"\r
      },\r
      "engines": {\r
        "node": "^12.13.0 || ^14.15.0 || >=16.0.0"\r
      }\r
    },\r
    "node_modules/node-gyp/node_modules/npmlog": {\r
      "version": "6.0.2",\r
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-6.0.2.tgz",\r
      "integrity": "sha512-/vBvz5Jfr9dT/aFWd0FIRf+T/Q2WBsLENygUaFUqstqsycmZAP/t5BvFJTK0viFmSUxiUKTUplWy5vt+rvKIxg==",\r
      "optional": true,\r
      "dependencies": {\r
        "are-we-there-yet": "^3.0.0",\r
        "console-control-strings": "^1.1.0",\r
        "gauge": "^4.0.3",\r
        "set-blocking": "^2.0.0"\r
      },\r
      "engines": {\r
        "node": "^12.13.0 || ^14.15.0 || >=16.0.0"\r
      }\r
    },\r
    "node_modules/node-gyp/node_modules/readable-stream": {\r
      "version": "3.6.0",\r
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",\r
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",\r
      "optional": true,\r
      "dependencies": {\r
        "inherits": "^2.0.3",\r
        "string_decoder": "^1.1.1",\r
        "util-deprecate": "^1.0.1"\r
      },\r
      "engines": {\r
        "node": ">= 6"\r
      }\r
    },\r
    "node_modules/nopt": {\r
      "version": "5.0.0",\r
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",\r
      "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",\r
      "dependencies": {\r
        "abbrev": "1"\r
      },\r
      "bin": {\r
        "nopt": "bin/nopt.js"\r
      },\r
      "engines": {\r
        "node": ">=6"\r
      }\r
    },\r
    "node_modules/npmlog": {\r
      "version": "5.0.1",\r
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-5.0.1.tgz",\r
      "integrity": "sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==",\r
      "dependencies": {\r
        "are-we-there-yet": "^2.0.0",\r
        "console-control-strings": "^1.1.0",\r
        "gauge": "^3.0.0",\r
        "set-blocking": "^2.0.0"\r
      }\r
    },\r
    "node_modules/object-assign": {\r
      "version": "4.1.1",\r
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",\r
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",\r
      "engines": {\r
        "node": ">=0.10.0"\r
      }\r
    },\r
    "node_modules/object-inspect": {\r
      "version": "1.12.2",\r
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",\r
      "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ==",\r
      "funding": {\r
        "url": "https://github.com/sponsors/ljharb"\r
      }\r
    },\r
    "node_modules/on-finished": {\r
      "version": "2.4.1",\r
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",\r
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",\r
      "dependencies": {\r
        "ee-first": "1.1.1"\r
      },\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/once": {\r
      "version": "1.4.0",\r
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",\r
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",\r
      "dependencies": {\r
        "wrappy": "1"\r
      }\r
    },\r
    "node_modules/p-map": {\r
      "version": "4.0.0",\r
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",\r
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "aggregate-error": "^3.0.0"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/sindresorhus"\r
      }\r
    },\r
    "node_modules/parseurl": {\r
      "version": "1.3.3",\r
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",\r
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/path-is-absolute": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",\r
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",\r
      "engines": {\r
        "node": ">=0.10.0"\r
      }\r
    },\r
    "node_modules/path-to-regexp": {\r
      "version": "0.1.7",\r
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",\r
      "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="\r
    },\r
    "node_modules/process-nextick-args": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",\r
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="\r
    },\r
    "node_modules/promise-inflight": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",\r
      "integrity": "sha512-6zWPyEOFaQBJYcGMHBKTKJ3u6TBsnMFOIZSa6ce1e/ZrrsOlnHRHbabMjLiBYKp+n44X9eUI6VUPaukCXHuG4g==",\r
      "optional": true\r
    },\r
    "node_modules/promise-retry": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",\r
      "integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",\r
      "optional": true,\r
      "dependencies": {\r
        "err-code": "^2.0.2",\r
        "retry": "^0.12.0"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/proxy-addr": {\r
      "version": "2.0.7",\r
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",\r
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",\r
      "dependencies": {\r
        "forwarded": "0.2.0",\r
        "ipaddr.js": "1.9.1"\r
      },\r
      "engines": {\r
        "node": ">= 0.10"\r
      }\r
    },\r
    "node_modules/qs": {\r
      "version": "6.10.3",\r
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.3.tgz",\r
      "integrity": "sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==",\r
      "dependencies": {\r
        "side-channel": "^1.0.4"\r
      },\r
      "engines": {\r
        "node": ">=0.6"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/ljharb"\r
      }\r
    },\r
    "node_modules/range-parser": {\r
      "version": "1.2.1",\r
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",\r
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/raw-body": {\r
      "version": "2.5.1",\r
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",\r
      "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",\r
      "dependencies": {\r
        "bytes": "3.1.2",\r
        "http-errors": "2.0.0",\r
        "iconv-lite": "0.4.24",\r
        "unpipe": "1.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/readable-stream": {\r
      "version": "2.3.7",\r
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",\r
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",\r
      "dependencies": {\r
        "core-util-is": "~1.0.0",\r
        "inherits": "~2.0.3",\r
        "isarray": "~1.0.0",\r
        "process-nextick-args": "~2.0.0",\r
        "safe-buffer": "~5.1.1",\r
        "string_decoder": "~1.1.1",\r
        "util-deprecate": "~1.0.1"\r
      }\r
    },\r
    "node_modules/readable-stream/node_modules/safe-buffer": {\r
      "version": "5.1.2",\r
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",\r
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="\r
    },\r
    "node_modules/retry": {\r
      "version": "0.12.0",\r
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",\r
      "integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">= 4"\r
      }\r
    },\r
    "node_modules/rimraf": {\r
      "version": "3.0.2",\r
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",\r
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",\r
      "dependencies": {\r
        "glob": "^7.1.3"\r
      },\r
      "bin": {\r
        "rimraf": "bin.js"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/isaacs"\r
      }\r
    },\r
    "node_modules/safe-buffer": {\r
      "version": "5.2.1",\r
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",\r
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",\r
      "funding": [\r
        {\r
          "type": "github",\r
          "url": "https://github.com/sponsors/feross"\r
        },\r
        {\r
          "type": "patreon",\r
          "url": "https://www.patreon.com/feross"\r
        },\r
        {\r
          "type": "consulting",\r
          "url": "https://feross.org/support"\r
        }\r
      ]\r
    },\r
    "node_modules/safer-buffer": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",\r
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="\r
    },\r
    "node_modules/semver": {\r
      "version": "7.3.7",\r
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.7.tgz",\r
      "integrity": "sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==",\r
      "dependencies": {\r
        "lru-cache": "^6.0.0"\r
      },\r
      "bin": {\r
        "semver": "bin/semver.js"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/send": {\r
      "version": "0.18.0",\r
      "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",\r
      "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",\r
      "dependencies": {\r
        "debug": "2.6.9",\r
        "depd": "2.0.0",\r
        "destroy": "1.2.0",\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "etag": "~1.8.1",\r
        "fresh": "0.5.2",\r
        "http-errors": "2.0.0",\r
        "mime": "1.6.0",\r
        "ms": "2.1.3",\r
        "on-finished": "2.4.1",\r
        "range-parser": "~1.2.1",\r
        "statuses": "2.0.1"\r
      },\r
      "engines": {\r
        "node": ">= 0.8.0"\r
      }\r
    },\r
    "node_modules/send/node_modules/ms": {\r
      "version": "2.1.3",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",\r
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="\r
    },\r
    "node_modules/serve-static": {\r
      "version": "1.15.0",\r
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",\r
      "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",\r
      "dependencies": {\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "parseurl": "~1.3.3",\r
        "send": "0.18.0"\r
      },\r
      "engines": {\r
        "node": ">= 0.8.0"\r
      }\r
    },\r
    "node_modules/set-blocking": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",\r
      "integrity": "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw=="\r
    },\r
    "node_modules/setprototypeof": {\r
      "version": "1.2.0",\r
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",\r
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="\r
    },\r
    "node_modules/side-channel": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",\r
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",\r
      "dependencies": {\r
        "call-bind": "^1.0.0",\r
        "get-intrinsic": "^1.0.2",\r
        "object-inspect": "^1.9.0"\r
      },\r
      "funding": {\r
        "url": "https://github.com/sponsors/ljharb"\r
      }\r
    },\r
    "node_modules/signal-exit": {\r
      "version": "3.0.7",\r
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",\r
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="\r
    },\r
    "node_modules/smart-buffer": {\r
      "version": "4.2.0",\r
      "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",\r
      "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",\r
      "optional": true,\r
      "engines": {\r
        "node": ">= 6.0.0",\r
        "npm": ">= 3.0.0"\r
      }\r
    },\r
    "node_modules/socks": {\r
      "version": "2.7.0",\r
      "resolved": "https://registry.npmjs.org/socks/-/socks-2.7.0.tgz",\r
      "integrity": "sha512-scnOe9y4VuiNUULJN72GrM26BNOjVsfPXI+j+98PkyEfsIXroa5ofyjT+FzGvn/xHs73U2JtoBYAVx9Hl4quSA==",\r
      "optional": true,\r
      "dependencies": {\r
        "ip": "^2.0.0",\r
        "smart-buffer": "^4.2.0"\r
      },\r
      "engines": {\r
        "node": ">= 10.13.0",\r
        "npm": ">= 3.0.0"\r
      }\r
    },\r
    "node_modules/socks-proxy-agent": {\r
      "version": "6.2.1",\r
      "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.1.tgz",\r
      "integrity": "sha512-a6KW9G+6B3nWZ1yB8G7pJwL3ggLy1uTzKAgCb7ttblwqdz9fMGJUuTy3uFzEP48FAs9FLILlmzDlE2JJhVQaXQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "agent-base": "^6.0.2",\r
        "debug": "^4.3.3",\r
        "socks": "^2.6.2"\r
      },\r
      "engines": {\r
        "node": ">= 10"\r
      }\r
    },\r
    "node_modules/socks-proxy-agent/node_modules/debug": {\r
      "version": "4.3.4",\r
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "ms": "2.1.2"\r
      },\r
      "engines": {\r
        "node": ">=6.0"\r
      },\r
      "peerDependenciesMeta": {\r
        "supports-color": {\r
          "optional": true\r
        }\r
      }\r
    },\r
    "node_modules/socks-proxy-agent/node_modules/ms": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",\r
      "optional": true\r
    },\r
    "node_modules/sqlite3": {\r
      "version": "5.0.9",\r
      "resolved": "https://registry.npmjs.org/sqlite3/-/sqlite3-5.0.9.tgz",\r
      "integrity": "sha512-e2lEKevUF65UJu4IIuuFytgW7yNMkmCkfyn66jXWeb7OcdHvRo7nXhF+IQ25iW6x2grB0DyKdGCpx8Rd8EkA2Q==",\r
      "hasInstallScript": true,\r
      "dependencies": {\r
        "@mapbox/node-pre-gyp": "^1.0.0",\r
        "node-addon-api": "^4.2.0",\r
        "tar": "^6.1.11"\r
      },\r
      "optionalDependencies": {\r
        "node-gyp": "8.x"\r
      },\r
      "peerDependencies": {\r
        "node-gyp": "8.x"\r
      },\r
      "peerDependenciesMeta": {\r
        "node-gyp": {\r
          "optional": true\r
        }\r
      }\r
    },\r
    "node_modules/ssri": {\r
      "version": "8.0.1",\r
      "resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.1.tgz",\r
      "integrity": "sha512-97qShzy1AiyxvPNIkLWoGua7xoQzzPjQ0HAH4B0rWKo7SZ6USuPcrUiAFrws0UH8RrbWmgq3LMTObhPIHbbBeQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "minipass": "^3.1.1"\r
      },\r
      "engines": {\r
        "node": ">= 8"\r
      }\r
    },\r
    "node_modules/statuses": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",\r
      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/streamsearch": {\r
      "version": "1.1.0",\r
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",\r
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",\r
      "engines": {\r
        "node": ">=10.0.0"\r
      }\r
    },\r
    "node_modules/string_decoder": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",\r
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",\r
      "dependencies": {\r
        "safe-buffer": "~5.1.0"\r
      }\r
    },\r
    "node_modules/string_decoder/node_modules/safe-buffer": {\r
      "version": "5.1.2",\r
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",\r
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="\r
    },\r
    "node_modules/string-width": {\r
      "version": "4.2.3",\r
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",\r
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",\r
      "dependencies": {\r
        "emoji-regex": "^8.0.0",\r
        "is-fullwidth-code-point": "^3.0.0",\r
        "strip-ansi": "^6.0.1"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/strip-ansi": {\r
      "version": "6.0.1",\r
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",\r
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",\r
      "dependencies": {\r
        "ansi-regex": "^5.0.1"\r
      },\r
      "engines": {\r
        "node": ">=8"\r
      }\r
    },\r
    "node_modules/tar": {\r
      "version": "6.1.11",\r
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.1.11.tgz",\r
      "integrity": "sha512-an/KZQzQUkZCkuoAA64hM92X0Urb6VpRhAFllDzz44U2mcD5scmT3zBc4VgVpkugF580+DQn8eAFSyoQt0tznA==",\r
      "dependencies": {\r
        "chownr": "^2.0.0",\r
        "fs-minipass": "^2.0.0",\r
        "minipass": "^3.0.0",\r
        "minizlib": "^2.1.1",\r
        "mkdirp": "^1.0.3",\r
        "yallist": "^4.0.0"\r
      },\r
      "engines": {\r
        "node": ">= 10"\r
      }\r
    },\r
    "node_modules/tar/node_modules/mkdirp": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",\r
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",\r
      "bin": {\r
        "mkdirp": "bin/cmd.js"\r
      },\r
      "engines": {\r
        "node": ">=10"\r
      }\r
    },\r
    "node_modules/toidentifier": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",\r
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",\r
      "engines": {\r
        "node": ">=0.6"\r
      }\r
    },\r
    "node_modules/tr46": {\r
      "version": "0.0.3",\r
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",\r
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw=="\r
    },\r
    "node_modules/type-is": {\r
      "version": "1.6.18",\r
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",\r
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",\r
      "dependencies": {\r
        "media-typer": "0.3.0",\r
        "mime-types": "~2.1.24"\r
      },\r
      "engines": {\r
        "node": ">= 0.6"\r
      }\r
    },\r
    "node_modules/typedarray": {\r
      "version": "0.0.6",\r
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",\r
      "integrity": "sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA=="\r
    },\r
    "node_modules/unique-filename": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",\r
      "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",\r
      "optional": true,\r
      "dependencies": {\r
        "unique-slug": "^2.0.0"\r
      }\r
    },\r
    "node_modules/unique-slug": {\r
      "version": "2.0.2",\r
      "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",\r
      "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",\r
      "optional": true,\r
      "dependencies": {\r
        "imurmurhash": "^0.1.4"\r
      }\r
    },\r
    "node_modules/unpipe": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",\r
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/util-deprecate": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",\r
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="\r
    },\r
    "node_modules/utils-merge": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",\r
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",\r
      "engines": {\r
        "node": ">= 0.4.0"\r
      }\r
    },\r
    "node_modules/uuid": {\r
      "version": "8.3.2",\r
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",\r
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",\r
      "bin": {\r
        "uuid": "dist/bin/uuid"\r
      }\r
    },\r
    "node_modules/vary": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",\r
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",\r
      "engines": {\r
        "node": ">= 0.8"\r
      }\r
    },\r
    "node_modules/webidl-conversions": {\r
      "version": "3.0.1",\r
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",\r
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ=="\r
    },\r
    "node_modules/whatwg-url": {\r
      "version": "5.0.0",\r
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",\r
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",\r
      "dependencies": {\r
        "tr46": "~0.0.3",\r
        "webidl-conversions": "^3.0.0"\r
      }\r
    },\r
    "node_modules/which": {\r
      "version": "2.0.2",\r
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",\r
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",\r
      "optional": true,\r
      "dependencies": {\r
        "isexe": "^2.0.0"\r
      },\r
      "bin": {\r
        "node-which": "bin/node-which"\r
      },\r
      "engines": {\r
        "node": ">= 8"\r
      }\r
    },\r
    "node_modules/wide-align": {\r
      "version": "1.1.5",\r
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",\r
      "integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",\r
      "dependencies": {\r
        "string-width": "^1.0.2 || 2 || 3 || 4"\r
      }\r
    },\r
    "node_modules/wrappy": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",\r
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ=="\r
    },\r
    "node_modules/xtend": {\r
      "version": "4.0.2",\r
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",\r
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",\r
      "engines": {\r
        "node": ">=0.4"\r
      }\r
    },\r
    "node_modules/yallist": {\r
      "version": "4.0.0",\r
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",\r
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="\r
    }\r
  },\r
  "dependencies": {\r
    "@gar/promisify": {\r
      "version": "1.1.3",\r
      "resolved": "https://registry.npmjs.org/@gar/promisify/-/promisify-1.1.3.tgz",\r
      "integrity": "sha512-k2Ty1JcVojjJFwrg/ThKi2ujJ7XNLYaFGNB/bWT9wGR+oSMJHMa5w+CUq6p/pVrKeNNgA7pCqEcjSnHVoqJQFw==",\r
      "optional": true\r
    },\r
    "@mapbox/node-pre-gyp": {\r
      "version": "1.0.9",\r
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.9.tgz",\r
      "integrity": "sha512-aDF3S3rK9Q2gey/WAttUlISduDItz5BU3306M9Eyv6/oS40aMprnopshtlKTykxRNIBEZuRMaZAnbrQ4QtKGyw==",\r
      "requires": {\r
        "detect-libc": "^2.0.0",\r
        "https-proxy-agent": "^5.0.0",\r
        "make-dir": "^3.1.0",\r
        "node-fetch": "^2.6.7",\r
        "nopt": "^5.0.0",\r
        "npmlog": "^5.0.1",\r
        "rimraf": "^3.0.2",\r
        "semver": "^7.3.5",\r
        "tar": "^6.1.11"\r
      }\r
    },\r
    "@npmcli/fs": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-1.1.1.tgz",\r
      "integrity": "sha512-8KG5RD0GVP4ydEzRn/I4BNDuxDtqVbOdm8675T49OIG/NGhaK0pjPX7ZcDlvKYbA+ulvVK3ztfcF4uBdOxuJbQ==",\r
      "optional": true,\r
      "requires": {\r
        "@gar/promisify": "^1.0.1",\r
        "semver": "^7.3.5"\r
      }\r
    },\r
    "@npmcli/move-file": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.1.2.tgz",\r
      "integrity": "sha512-1SUf/Cg2GzGDyaf15aR9St9TWlb+XvbZXWpDx8YKs7MLzMH/BCeopv+y9vzrzgkfykCGuWOlSu3mZhj2+FQcrg==",\r
      "optional": true,\r
      "requires": {\r
        "mkdirp": "^1.0.4",\r
        "rimraf": "^3.0.2"\r
      },\r
      "dependencies": {\r
        "mkdirp": {\r
          "version": "1.0.4",\r
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",\r
          "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",\r
          "optional": true\r
        }\r
      }\r
    },\r
    "@tootallnate/once": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",\r
      "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==",\r
      "optional": true\r
    },\r
    "abbrev": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",\r
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="\r
    },\r
    "accepts": {\r
      "version": "1.3.8",\r
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",\r
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",\r
      "requires": {\r
        "mime-types": "~2.1.34",\r
        "negotiator": "0.6.3"\r
      }\r
    },\r
    "agent-base": {\r
      "version": "6.0.2",\r
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",\r
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",\r
      "requires": {\r
        "debug": "4"\r
      },\r
      "dependencies": {\r
        "debug": {\r
          "version": "4.3.4",\r
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
          "requires": {\r
            "ms": "2.1.2"\r
          }\r
        },\r
        "ms": {\r
          "version": "2.1.2",\r
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="\r
        }\r
      }\r
    },\r
    "agentkeepalive": {\r
      "version": "4.2.1",\r
      "resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.2.1.tgz",\r
      "integrity": "sha512-Zn4cw2NEqd+9fiSVWMscnjyQ1a8Yfoc5oBajLeo5w+YBHgDUcEBY2hS4YpTz6iN5f/2zQiktcuM6tS8x1p9dpA==",\r
      "optional": true,\r
      "requires": {\r
        "debug": "^4.1.0",\r
        "depd": "^1.1.2",\r
        "humanize-ms": "^1.2.1"\r
      },\r
      "dependencies": {\r
        "debug": {\r
          "version": "4.3.4",\r
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
          "optional": true,\r
          "requires": {\r
            "ms": "2.1.2"\r
          }\r
        },\r
        "depd": {\r
          "version": "1.1.2",\r
          "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",\r
          "integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",\r
          "optional": true\r
        },\r
        "ms": {\r
          "version": "2.1.2",\r
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",\r
          "optional": true\r
        }\r
      }\r
    },\r
    "aggregate-error": {\r
      "version": "3.1.0",\r
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",\r
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",\r
      "optional": true,\r
      "requires": {\r
        "clean-stack": "^2.0.0",\r
        "indent-string": "^4.0.0"\r
      }\r
    },\r
    "ansi-regex": {\r
      "version": "5.0.1",\r
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",\r
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="\r
    },\r
    "append-field": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",\r
      "integrity": "sha512-klpgFSWLW1ZEs8svjfb7g4qWY0YS5imI82dTg+QahUvJ8YqAY0P10Uk8tTyh9ZGuYEZEMaeJYCF5BFuX552hsw=="\r
    },\r
    "aproba": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",\r
      "integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ=="\r
    },\r
    "are-we-there-yet": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-2.0.0.tgz",\r
      "integrity": "sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==",\r
      "requires": {\r
        "delegates": "^1.0.0",\r
        "readable-stream": "^3.6.0"\r
      },\r
      "dependencies": {\r
        "readable-stream": {\r
          "version": "3.6.0",\r
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",\r
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",\r
          "requires": {\r
            "inherits": "^2.0.3",\r
            "string_decoder": "^1.1.1",\r
            "util-deprecate": "^1.0.1"\r
          }\r
        }\r
      }\r
    },\r
    "array-flatten": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",\r
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="\r
    },\r
    "balanced-match": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",\r
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="\r
    },\r
    "body-parser": {\r
      "version": "1.20.0",\r
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.0.tgz",\r
      "integrity": "sha512-DfJ+q6EPcGKZD1QWUjSpqp+Q7bDQTsQIF4zfUAtZ6qk+H/3/QRhg9CEp39ss+/T2vw0+HaidC0ecJj/DRLIaKg==",\r
      "requires": {\r
        "bytes": "3.1.2",\r
        "content-type": "~1.0.4",\r
        "debug": "2.6.9",\r
        "depd": "2.0.0",\r
        "destroy": "1.2.0",\r
        "http-errors": "2.0.0",\r
        "iconv-lite": "0.4.24",\r
        "on-finished": "2.4.1",\r
        "qs": "6.10.3",\r
        "raw-body": "2.5.1",\r
        "type-is": "~1.6.18",\r
        "unpipe": "1.0.0"\r
      }\r
    },\r
    "brace-expansion": {\r
      "version": "1.1.11",\r
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",\r
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",\r
      "requires": {\r
        "balanced-match": "^1.0.0",\r
        "concat-map": "0.0.1"\r
      }\r
    },\r
    "buffer-from": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",\r
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="\r
    },\r
    "busboy": {\r
      "version": "1.6.0",\r
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",\r
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",\r
      "requires": {\r
        "streamsearch": "^1.1.0"\r
      }\r
    },\r
    "bytes": {\r
      "version": "3.1.2",\r
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",\r
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg=="\r
    },\r
    "cacache": {\r
      "version": "15.3.0",\r
      "resolved": "https://registry.npmjs.org/cacache/-/cacache-15.3.0.tgz",\r
      "integrity": "sha512-VVdYzXEn+cnbXpFgWs5hTT7OScegHVmLhJIR8Ufqk3iFD6A6j5iSX1KuBTfNEv4tdJWE2PzA6IVFtcLC7fN9wQ==",\r
      "optional": true,\r
      "requires": {\r
        "@npmcli/fs": "^1.0.0",\r
        "@npmcli/move-file": "^1.0.1",\r
        "chownr": "^2.0.0",\r
        "fs-minipass": "^2.0.0",\r
        "glob": "^7.1.4",\r
        "infer-owner": "^1.0.4",\r
        "lru-cache": "^6.0.0",\r
        "minipass": "^3.1.1",\r
        "minipass-collect": "^1.0.2",\r
        "minipass-flush": "^1.0.5",\r
        "minipass-pipeline": "^1.2.2",\r
        "mkdirp": "^1.0.3",\r
        "p-map": "^4.0.0",\r
        "promise-inflight": "^1.0.1",\r
        "rimraf": "^3.0.2",\r
        "ssri": "^8.0.1",\r
        "tar": "^6.0.2",\r
        "unique-filename": "^1.1.1"\r
      },\r
      "dependencies": {\r
        "mkdirp": {\r
          "version": "1.0.4",\r
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",\r
          "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",\r
          "optional": true\r
        }\r
      }\r
    },\r
    "call-bind": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",\r
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",\r
      "requires": {\r
        "function-bind": "^1.1.1",\r
        "get-intrinsic": "^1.0.2"\r
      }\r
    },\r
    "chownr": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",\r
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ=="\r
    },\r
    "clean-stack": {\r
      "version": "2.2.0",\r
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",\r
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",\r
      "optional": true\r
    },\r
    "color-support": {\r
      "version": "1.1.3",\r
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",\r
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg=="\r
    },\r
    "concat-map": {\r
      "version": "0.0.1",\r
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",\r
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="\r
    },\r
    "concat-stream": {\r
      "version": "1.6.2",\r
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",\r
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",\r
      "requires": {\r
        "buffer-from": "^1.0.0",\r
        "inherits": "^2.0.3",\r
        "readable-stream": "^2.2.2",\r
        "typedarray": "^0.0.6"\r
      }\r
    },\r
    "console-control-strings": {\r
      "version": "1.1.0",\r
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",\r
      "integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ=="\r
    },\r
    "content-disposition": {\r
      "version": "0.5.4",\r
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",\r
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",\r
      "requires": {\r
        "safe-buffer": "5.2.1"\r
      }\r
    },\r
    "content-type": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",\r
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="\r
    },\r
    "cookie": {\r
      "version": "0.5.0",\r
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",\r
      "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw=="\r
    },\r
    "cookie-signature": {\r
      "version": "1.0.6",\r
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",\r
      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="\r
    },\r
    "core-util-is": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",\r
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="\r
    },\r
    "debug": {\r
      "version": "2.6.9",\r
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",\r
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",\r
      "requires": {\r
        "ms": "2.0.0"\r
      }\r
    },\r
    "delegates": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",\r
      "integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ=="\r
    },\r
    "depd": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",\r
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="\r
    },\r
    "destroy": {\r
      "version": "1.2.0",\r
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",\r
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg=="\r
    },\r
    "detect-libc": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.1.tgz",\r
      "integrity": "sha512-463v3ZeIrcWtdgIg6vI6XUncguvr2TnGl4SzDXinkt9mSLpBJKXT3mW6xT3VQdDN11+WVs29pgvivTc4Lp8v+w=="\r
    },\r
    "ee-first": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",\r
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="\r
    },\r
    "emoji-regex": {\r
      "version": "8.0.0",\r
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",\r
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="\r
    },\r
    "encodeurl": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",\r
      "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w=="\r
    },\r
    "encoding": {\r
      "version": "0.1.13",\r
      "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",\r
      "integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",\r
      "optional": true,\r
      "requires": {\r
        "iconv-lite": "^0.6.2"\r
      },\r
      "dependencies": {\r
        "iconv-lite": {\r
          "version": "0.6.3",\r
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",\r
          "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",\r
          "optional": true,\r
          "requires": {\r
            "safer-buffer": ">= 2.1.2 < 3.0.0"\r
          }\r
        }\r
      }\r
    },\r
    "env-paths": {\r
      "version": "2.2.1",\r
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",\r
      "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",\r
      "optional": true\r
    },\r
    "err-code": {\r
      "version": "2.0.3",\r
      "resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",\r
      "integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",\r
      "optional": true\r
    },\r
    "escape-html": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",\r
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="\r
    },\r
    "etag": {\r
      "version": "1.8.1",\r
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",\r
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg=="\r
    },\r
    "express": {\r
      "version": "4.18.1",\r
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.1.tgz",\r
      "integrity": "sha512-zZBcOX9TfehHQhtupq57OF8lFZ3UZi08Y97dwFCkD8p9d/d2Y3M+ykKcwaMDEL+4qyUolgBDX6AblpR3fL212Q==",\r
      "requires": {\r
        "accepts": "~1.3.8",\r
        "array-flatten": "1.1.1",\r
        "body-parser": "1.20.0",\r
        "content-disposition": "0.5.4",\r
        "content-type": "~1.0.4",\r
        "cookie": "0.5.0",\r
        "cookie-signature": "1.0.6",\r
        "debug": "2.6.9",\r
        "depd": "2.0.0",\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "etag": "~1.8.1",\r
        "finalhandler": "1.2.0",\r
        "fresh": "0.5.2",\r
        "http-errors": "2.0.0",\r
        "merge-descriptors": "1.0.1",\r
        "methods": "~1.1.2",\r
        "on-finished": "2.4.1",\r
        "parseurl": "~1.3.3",\r
        "path-to-regexp": "0.1.7",\r
        "proxy-addr": "~2.0.7",\r
        "qs": "6.10.3",\r
        "range-parser": "~1.2.1",\r
        "safe-buffer": "5.2.1",\r
        "send": "0.18.0",\r
        "serve-static": "1.15.0",\r
        "setprototypeof": "1.2.0",\r
        "statuses": "2.0.1",\r
        "type-is": "~1.6.18",\r
        "utils-merge": "1.0.1",\r
        "vary": "~1.1.2"\r
      }\r
    },\r
    "finalhandler": {\r
      "version": "1.2.0",\r
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",\r
      "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",\r
      "requires": {\r
        "debug": "2.6.9",\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "on-finished": "2.4.1",\r
        "parseurl": "~1.3.3",\r
        "statuses": "2.0.1",\r
        "unpipe": "~1.0.0"\r
      }\r
    },\r
    "forwarded": {\r
      "version": "0.2.0",\r
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",\r
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="\r
    },\r
    "fresh": {\r
      "version": "0.5.2",\r
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",\r
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q=="\r
    },\r
    "fs-minipass": {\r
      "version": "2.1.0",\r
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",\r
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",\r
      "requires": {\r
        "minipass": "^3.0.0"\r
      }\r
    },\r
    "fs.realpath": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",\r
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw=="\r
    },\r
    "function-bind": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",\r
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="\r
    },\r
    "gauge": {\r
      "version": "3.0.2",\r
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-3.0.2.tgz",\r
      "integrity": "sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==",\r
      "requires": {\r
        "aproba": "^1.0.3 || ^2.0.0",\r
        "color-support": "^1.1.2",\r
        "console-control-strings": "^1.0.0",\r
        "has-unicode": "^2.0.1",\r
        "object-assign": "^4.1.1",\r
        "signal-exit": "^3.0.0",\r
        "string-width": "^4.2.3",\r
        "strip-ansi": "^6.0.1",\r
        "wide-align": "^1.1.2"\r
      }\r
    },\r
    "get-intrinsic": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.2.tgz",\r
      "integrity": "sha512-Jfm3OyCxHh9DJyc28qGk+JmfkpO41A4XkneDSujN9MDXrm4oDKdHvndhZ2dN94+ERNfkYJWDclW6k2L/ZGHjXA==",\r
      "requires": {\r
        "function-bind": "^1.1.1",\r
        "has": "^1.0.3",\r
        "has-symbols": "^1.0.3"\r
      }\r
    },\r
    "glob": {\r
      "version": "7.2.3",\r
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",\r
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",\r
      "requires": {\r
        "fs.realpath": "^1.0.0",\r
        "inflight": "^1.0.4",\r
        "inherits": "2",\r
        "minimatch": "^3.1.1",\r
        "once": "^1.3.0",\r
        "path-is-absolute": "^1.0.0"\r
      }\r
    },\r
    "graceful-fs": {\r
      "version": "4.2.10",\r
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz",\r
      "integrity": "sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA==",\r
      "optional": true\r
    },\r
    "has": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",\r
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",\r
      "requires": {\r
        "function-bind": "^1.1.1"\r
      }\r
    },\r
    "has-symbols": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",\r
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A=="\r
    },\r
    "has-unicode": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",\r
      "integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ=="\r
    },\r
    "http-cache-semantics": {\r
      "version": "4.1.0",\r
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",\r
      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",\r
      "optional": true\r
    },\r
    "http-errors": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",\r
      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",\r
      "requires": {\r
        "depd": "2.0.0",\r
        "inherits": "2.0.4",\r
        "setprototypeof": "1.2.0",\r
        "statuses": "2.0.1",\r
        "toidentifier": "1.0.1"\r
      }\r
    },\r
    "http-proxy-agent": {\r
      "version": "4.0.1",\r
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",\r
      "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",\r
      "optional": true,\r
      "requires": {\r
        "@tootallnate/once": "1",\r
        "agent-base": "6",\r
        "debug": "4"\r
      },\r
      "dependencies": {\r
        "debug": {\r
          "version": "4.3.4",\r
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
          "optional": true,\r
          "requires": {\r
            "ms": "2.1.2"\r
          }\r
        },\r
        "ms": {\r
          "version": "2.1.2",\r
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",\r
          "optional": true\r
        }\r
      }\r
    },\r
    "https-proxy-agent": {\r
      "version": "5.0.1",\r
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",\r
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",\r
      "requires": {\r
        "agent-base": "6",\r
        "debug": "4"\r
      },\r
      "dependencies": {\r
        "debug": {\r
          "version": "4.3.4",\r
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
          "requires": {\r
            "ms": "2.1.2"\r
          }\r
        },\r
        "ms": {\r
          "version": "2.1.2",\r
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="\r
        }\r
      }\r
    },\r
    "humanize-ms": {\r
      "version": "1.2.1",\r
      "resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",\r
      "integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",\r
      "optional": true,\r
      "requires": {\r
        "ms": "^2.0.0"\r
      }\r
    },\r
    "iconv-lite": {\r
      "version": "0.4.24",\r
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",\r
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",\r
      "requires": {\r
        "safer-buffer": ">= 2.1.2 < 3"\r
      }\r
    },\r
    "imurmurhash": {\r
      "version": "0.1.4",\r
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",\r
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",\r
      "optional": true\r
    },\r
    "indent-string": {\r
      "version": "4.0.0",\r
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",\r
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",\r
      "optional": true\r
    },\r
    "infer-owner": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",\r
      "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",\r
      "optional": true\r
    },\r
    "inflight": {\r
      "version": "1.0.6",\r
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",\r
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",\r
      "requires": {\r
        "once": "^1.3.0",\r
        "wrappy": "1"\r
      }\r
    },\r
    "inherits": {\r
      "version": "2.0.4",\r
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",\r
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="\r
    },\r
    "ip": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/ip/-/ip-2.0.0.tgz",\r
      "integrity": "sha512-WKa+XuLG1A1R0UWhl2+1XQSi+fZWMsYKffMZTTYsiZaUD8k2yDAj5atimTUD2TZkyCkNEeYE5NhFZmupOGtjYQ==",\r
      "optional": true\r
    },\r
    "ipaddr.js": {\r
      "version": "1.9.1",\r
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",\r
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="\r
    },\r
    "is-fullwidth-code-point": {\r
      "version": "3.0.0",\r
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",\r
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="\r
    },\r
    "is-lambda": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",\r
      "integrity": "sha512-z7CMFGNrENq5iFB9Bqo64Xk6Y9sg+epq1myIcdHaGnbMTYOxvzsEtdYqQUylB7LxfkvgrrjP32T6Ywciio9UIQ==",\r
      "optional": true\r
    },\r
    "isarray": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",\r
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ=="\r
    },\r
    "isexe": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",\r
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",\r
      "optional": true\r
    },\r
    "lru-cache": {\r
      "version": "6.0.0",\r
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",\r
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",\r
      "requires": {\r
        "yallist": "^4.0.0"\r
      }\r
    },\r
    "make-dir": {\r
      "version": "3.1.0",\r
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",\r
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",\r
      "requires": {\r
        "semver": "^6.0.0"\r
      },\r
      "dependencies": {\r
        "semver": {\r
          "version": "6.3.0",\r
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",\r
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="\r
        }\r
      }\r
    },\r
    "make-fetch-happen": {\r
      "version": "9.1.0",\r
      "resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",\r
      "integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",\r
      "optional": true,\r
      "requires": {\r
        "agentkeepalive": "^4.1.3",\r
        "cacache": "^15.2.0",\r
        "http-cache-semantics": "^4.1.0",\r
        "http-proxy-agent": "^4.0.1",\r
        "https-proxy-agent": "^5.0.0",\r
        "is-lambda": "^1.0.1",\r
        "lru-cache": "^6.0.0",\r
        "minipass": "^3.1.3",\r
        "minipass-collect": "^1.0.2",\r
        "minipass-fetch": "^1.3.2",\r
        "minipass-flush": "^1.0.5",\r
        "minipass-pipeline": "^1.2.4",\r
        "negotiator": "^0.6.2",\r
        "promise-retry": "^2.0.1",\r
        "socks-proxy-agent": "^6.0.0",\r
        "ssri": "^8.0.0"\r
      }\r
    },\r
    "media-typer": {\r
      "version": "0.3.0",\r
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",\r
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ=="\r
    },\r
    "merge-descriptors": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",\r
      "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="\r
    },\r
    "methods": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",\r
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w=="\r
    },\r
    "mime": {\r
      "version": "1.6.0",\r
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",\r
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="\r
    },\r
    "mime-db": {\r
      "version": "1.52.0",\r
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",\r
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="\r
    },\r
    "mime-types": {\r
      "version": "2.1.35",\r
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",\r
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",\r
      "requires": {\r
        "mime-db": "1.52.0"\r
      }\r
    },\r
    "minimatch": {\r
      "version": "3.1.2",\r
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",\r
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",\r
      "requires": {\r
        "brace-expansion": "^1.1.7"\r
      }\r
    },\r
    "minimist": {\r
      "version": "1.2.6",\r
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.6.tgz",\r
      "integrity": "sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q=="\r
    },\r
    "minipass": {\r
      "version": "3.3.4",\r
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.4.tgz",\r
      "integrity": "sha512-I9WPbWHCGu8W+6k1ZiGpPu0GkoKBeorkfKNuAFBNS1HNFJvke82sxvI5bzcCNpWPorkOO5QQ+zomzzwRxejXiw==",\r
      "requires": {\r
        "yallist": "^4.0.0"\r
      }\r
    },\r
    "minipass-collect": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",\r
      "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",\r
      "optional": true,\r
      "requires": {\r
        "minipass": "^3.0.0"\r
      }\r
    },\r
    "minipass-fetch": {\r
      "version": "1.4.1",\r
      "resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-1.4.1.tgz",\r
      "integrity": "sha512-CGH1eblLq26Y15+Azk7ey4xh0J/XfJfrCox5LDJiKqI2Q2iwOLOKrlmIaODiSQS8d18jalF6y2K2ePUm0CmShw==",\r
      "optional": true,\r
      "requires": {\r
        "encoding": "^0.1.12",\r
        "minipass": "^3.1.0",\r
        "minipass-sized": "^1.0.3",\r
        "minizlib": "^2.0.0"\r
      }\r
    },\r
    "minipass-flush": {\r
      "version": "1.0.5",\r
      "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",\r
      "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",\r
      "optional": true,\r
      "requires": {\r
        "minipass": "^3.0.0"\r
      }\r
    },\r
    "minipass-pipeline": {\r
      "version": "1.2.4",\r
      "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",\r
      "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",\r
      "optional": true,\r
      "requires": {\r
        "minipass": "^3.0.0"\r
      }\r
    },\r
    "minipass-sized": {\r
      "version": "1.0.3",\r
      "resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",\r
      "integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",\r
      "optional": true,\r
      "requires": {\r
        "minipass": "^3.0.0"\r
      }\r
    },\r
    "minizlib": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",\r
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",\r
      "requires": {\r
        "minipass": "^3.0.0",\r
        "yallist": "^4.0.0"\r
      }\r
    },\r
    "mkdirp": {\r
      "version": "0.5.6",\r
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",\r
      "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",\r
      "requires": {\r
        "minimist": "^1.2.6"\r
      }\r
    },\r
    "ms": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",\r
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="\r
    },\r
    "multer": {\r
      "version": "1.4.5-lts.1",\r
      "resolved": "https://registry.npmjs.org/multer/-/multer-1.4.5-lts.1.tgz",\r
      "integrity": "sha512-ywPWvcDMeH+z9gQq5qYHCCy+ethsk4goepZ45GLD63fOu0YcNecQxi64nDs3qluZB+murG3/D4dJ7+dGctcCQQ==",\r
      "requires": {\r
        "append-field": "^1.0.0",\r
        "busboy": "^1.0.0",\r
        "concat-stream": "^1.5.2",\r
        "mkdirp": "^0.5.4",\r
        "object-assign": "^4.1.1",\r
        "type-is": "^1.6.4",\r
        "xtend": "^4.0.0"\r
      }\r
    },\r
    "negotiator": {\r
      "version": "0.6.3",\r
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",\r
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="\r
    },\r
    "node-addon-api": {\r
      "version": "4.3.0",\r
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-4.3.0.tgz",\r
      "integrity": "sha512-73sE9+3UaLYYFmDsFZnqCInzPyh3MqIwZO9cw58yIqAZhONrrabrYyYe3TuIqtIiOuTXVhsGau8hcrhhwSsDIQ=="\r
    },\r
    "node-fetch": {\r
      "version": "2.6.7",\r
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.7.tgz",\r
      "integrity": "sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==",\r
      "requires": {\r
        "whatwg-url": "^5.0.0"\r
      }\r
    },\r
    "node-gyp": {\r
      "version": "8.4.1",\r
      "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-8.4.1.tgz",\r
      "integrity": "sha512-olTJRgUtAb/hOXG0E93wZDs5YiJlgbXxTwQAFHyNlRsXQnYzUaF2aGgujZbw+hR8aF4ZG/rST57bWMWD16jr9w==",\r
      "optional": true,\r
      "requires": {\r
        "env-paths": "^2.2.0",\r
        "glob": "^7.1.4",\r
        "graceful-fs": "^4.2.6",\r
        "make-fetch-happen": "^9.1.0",\r
        "nopt": "^5.0.0",\r
        "npmlog": "^6.0.0",\r
        "rimraf": "^3.0.2",\r
        "semver": "^7.3.5",\r
        "tar": "^6.1.2",\r
        "which": "^2.0.2"\r
      },\r
      "dependencies": {\r
        "are-we-there-yet": {\r
          "version": "3.0.0",\r
          "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-3.0.0.tgz",\r
          "integrity": "sha512-0GWpv50YSOcLXaN6/FAKY3vfRbllXWV2xvfA/oKJF8pzFhWXPV+yjhJXDBbjscDYowv7Yw1A3uigpzn5iEGTyw==",\r
          "optional": true,\r
          "requires": {\r
            "delegates": "^1.0.0",\r
            "readable-stream": "^3.6.0"\r
          }\r
        },\r
        "gauge": {\r
          "version": "4.0.4",\r
          "resolved": "https://registry.npmjs.org/gauge/-/gauge-4.0.4.tgz",\r
          "integrity": "sha512-f9m+BEN5jkg6a0fZjleidjN51VE1X+mPFQ2DJ0uv1V39oCLCbsGe6yjbBnp7eK7z/+GAon99a3nHuqbuuthyPg==",\r
          "optional": true,\r
          "requires": {\r
            "aproba": "^1.0.3 || ^2.0.0",\r
            "color-support": "^1.1.3",\r
            "console-control-strings": "^1.1.0",\r
            "has-unicode": "^2.0.1",\r
            "signal-exit": "^3.0.7",\r
            "string-width": "^4.2.3",\r
            "strip-ansi": "^6.0.1",\r
            "wide-align": "^1.1.5"\r
          }\r
        },\r
        "npmlog": {\r
          "version": "6.0.2",\r
          "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-6.0.2.tgz",\r
          "integrity": "sha512-/vBvz5Jfr9dT/aFWd0FIRf+T/Q2WBsLENygUaFUqstqsycmZAP/t5BvFJTK0viFmSUxiUKTUplWy5vt+rvKIxg==",\r
          "optional": true,\r
          "requires": {\r
            "are-we-there-yet": "^3.0.0",\r
            "console-control-strings": "^1.1.0",\r
            "gauge": "^4.0.3",\r
            "set-blocking": "^2.0.0"\r
          }\r
        },\r
        "readable-stream": {\r
          "version": "3.6.0",\r
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",\r
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",\r
          "optional": true,\r
          "requires": {\r
            "inherits": "^2.0.3",\r
            "string_decoder": "^1.1.1",\r
            "util-deprecate": "^1.0.1"\r
          }\r
        }\r
      }\r
    },\r
    "nopt": {\r
      "version": "5.0.0",\r
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",\r
      "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",\r
      "requires": {\r
        "abbrev": "1"\r
      }\r
    },\r
    "npmlog": {\r
      "version": "5.0.1",\r
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-5.0.1.tgz",\r
      "integrity": "sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==",\r
      "requires": {\r
        "are-we-there-yet": "^2.0.0",\r
        "console-control-strings": "^1.1.0",\r
        "gauge": "^3.0.0",\r
        "set-blocking": "^2.0.0"\r
      }\r
    },\r
    "object-assign": {\r
      "version": "4.1.1",\r
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",\r
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg=="\r
    },\r
    "object-inspect": {\r
      "version": "1.12.2",\r
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",\r
      "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ=="\r
    },\r
    "on-finished": {\r
      "version": "2.4.1",\r
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",\r
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",\r
      "requires": {\r
        "ee-first": "1.1.1"\r
      }\r
    },\r
    "once": {\r
      "version": "1.4.0",\r
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",\r
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",\r
      "requires": {\r
        "wrappy": "1"\r
      }\r
    },\r
    "p-map": {\r
      "version": "4.0.0",\r
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",\r
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",\r
      "optional": true,\r
      "requires": {\r
        "aggregate-error": "^3.0.0"\r
      }\r
    },\r
    "parseurl": {\r
      "version": "1.3.3",\r
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",\r
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="\r
    },\r
    "path-is-absolute": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",\r
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg=="\r
    },\r
    "path-to-regexp": {\r
      "version": "0.1.7",\r
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",\r
      "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="\r
    },\r
    "process-nextick-args": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",\r
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="\r
    },\r
    "promise-inflight": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",\r
      "integrity": "sha512-6zWPyEOFaQBJYcGMHBKTKJ3u6TBsnMFOIZSa6ce1e/ZrrsOlnHRHbabMjLiBYKp+n44X9eUI6VUPaukCXHuG4g==",\r
      "optional": true\r
    },\r
    "promise-retry": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",\r
      "integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",\r
      "optional": true,\r
      "requires": {\r
        "err-code": "^2.0.2",\r
        "retry": "^0.12.0"\r
      }\r
    },\r
    "proxy-addr": {\r
      "version": "2.0.7",\r
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",\r
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",\r
      "requires": {\r
        "forwarded": "0.2.0",\r
        "ipaddr.js": "1.9.1"\r
      }\r
    },\r
    "qs": {\r
      "version": "6.10.3",\r
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.3.tgz",\r
      "integrity": "sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==",\r
      "requires": {\r
        "side-channel": "^1.0.4"\r
      }\r
    },\r
    "range-parser": {\r
      "version": "1.2.1",\r
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",\r
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="\r
    },\r
    "raw-body": {\r
      "version": "2.5.1",\r
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",\r
      "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",\r
      "requires": {\r
        "bytes": "3.1.2",\r
        "http-errors": "2.0.0",\r
        "iconv-lite": "0.4.24",\r
        "unpipe": "1.0.0"\r
      }\r
    },\r
    "readable-stream": {\r
      "version": "2.3.7",\r
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",\r
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",\r
      "requires": {\r
        "core-util-is": "~1.0.0",\r
        "inherits": "~2.0.3",\r
        "isarray": "~1.0.0",\r
        "process-nextick-args": "~2.0.0",\r
        "safe-buffer": "~5.1.1",\r
        "string_decoder": "~1.1.1",\r
        "util-deprecate": "~1.0.1"\r
      },\r
      "dependencies": {\r
        "safe-buffer": {\r
          "version": "5.1.2",\r
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",\r
          "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="\r
        }\r
      }\r
    },\r
    "retry": {\r
      "version": "0.12.0",\r
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",\r
      "integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",\r
      "optional": true\r
    },\r
    "rimraf": {\r
      "version": "3.0.2",\r
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",\r
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",\r
      "requires": {\r
        "glob": "^7.1.3"\r
      }\r
    },\r
    "safe-buffer": {\r
      "version": "5.2.1",\r
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",\r
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="\r
    },\r
    "safer-buffer": {\r
      "version": "2.1.2",\r
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",\r
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="\r
    },\r
    "semver": {\r
      "version": "7.3.7",\r
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.7.tgz",\r
      "integrity": "sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==",\r
      "requires": {\r
        "lru-cache": "^6.0.0"\r
      }\r
    },\r
    "send": {\r
      "version": "0.18.0",\r
      "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",\r
      "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",\r
      "requires": {\r
        "debug": "2.6.9",\r
        "depd": "2.0.0",\r
        "destroy": "1.2.0",\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "etag": "~1.8.1",\r
        "fresh": "0.5.2",\r
        "http-errors": "2.0.0",\r
        "mime": "1.6.0",\r
        "ms": "2.1.3",\r
        "on-finished": "2.4.1",\r
        "range-parser": "~1.2.1",\r
        "statuses": "2.0.1"\r
      },\r
      "dependencies": {\r
        "ms": {\r
          "version": "2.1.3",\r
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",\r
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="\r
        }\r
      }\r
    },\r
    "serve-static": {\r
      "version": "1.15.0",\r
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",\r
      "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",\r
      "requires": {\r
        "encodeurl": "~1.0.2",\r
        "escape-html": "~1.0.3",\r
        "parseurl": "~1.3.3",\r
        "send": "0.18.0"\r
      }\r
    },\r
    "set-blocking": {\r
      "version": "2.0.0",\r
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",\r
      "integrity": "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw=="\r
    },\r
    "setprototypeof": {\r
      "version": "1.2.0",\r
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",\r
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="\r
    },\r
    "side-channel": {\r
      "version": "1.0.4",\r
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",\r
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",\r
      "requires": {\r
        "call-bind": "^1.0.0",\r
        "get-intrinsic": "^1.0.2",\r
        "object-inspect": "^1.9.0"\r
      }\r
    },\r
    "signal-exit": {\r
      "version": "3.0.7",\r
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",\r
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="\r
    },\r
    "smart-buffer": {\r
      "version": "4.2.0",\r
      "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",\r
      "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",\r
      "optional": true\r
    },\r
    "socks": {\r
      "version": "2.7.0",\r
      "resolved": "https://registry.npmjs.org/socks/-/socks-2.7.0.tgz",\r
      "integrity": "sha512-scnOe9y4VuiNUULJN72GrM26BNOjVsfPXI+j+98PkyEfsIXroa5ofyjT+FzGvn/xHs73U2JtoBYAVx9Hl4quSA==",\r
      "optional": true,\r
      "requires": {\r
        "ip": "^2.0.0",\r
        "smart-buffer": "^4.2.0"\r
      }\r
    },\r
    "socks-proxy-agent": {\r
      "version": "6.2.1",\r
      "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.1.tgz",\r
      "integrity": "sha512-a6KW9G+6B3nWZ1yB8G7pJwL3ggLy1uTzKAgCb7ttblwqdz9fMGJUuTy3uFzEP48FAs9FLILlmzDlE2JJhVQaXQ==",\r
      "optional": true,\r
      "requires": {\r
        "agent-base": "^6.0.2",\r
        "debug": "^4.3.3",\r
        "socks": "^2.6.2"\r
      },\r
      "dependencies": {\r
        "debug": {\r
          "version": "4.3.4",\r
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",\r
          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",\r
          "optional": true,\r
          "requires": {\r
            "ms": "2.1.2"\r
          }\r
        },\r
        "ms": {\r
          "version": "2.1.2",\r
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",\r
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",\r
          "optional": true\r
        }\r
      }\r
    },\r
    "sqlite3": {\r
      "version": "5.0.9",\r
      "resolved": "https://registry.npmjs.org/sqlite3/-/sqlite3-5.0.9.tgz",\r
      "integrity": "sha512-e2lEKevUF65UJu4IIuuFytgW7yNMkmCkfyn66jXWeb7OcdHvRo7nXhF+IQ25iW6x2grB0DyKdGCpx8Rd8EkA2Q==",\r
      "requires": {\r
        "@mapbox/node-pre-gyp": "^1.0.0",\r
        "node-addon-api": "^4.2.0",\r
        "node-gyp": "8.x",\r
        "tar": "^6.1.11"\r
      }\r
    },\r
    "ssri": {\r
      "version": "8.0.1",\r
      "resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.1.tgz",\r
      "integrity": "sha512-97qShzy1AiyxvPNIkLWoGua7xoQzzPjQ0HAH4B0rWKo7SZ6USuPcrUiAFrws0UH8RrbWmgq3LMTObhPIHbbBeQ==",\r
      "optional": true,\r
      "requires": {\r
        "minipass": "^3.1.1"\r
      }\r
    },\r
    "statuses": {\r
      "version": "2.0.1",\r
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",\r
      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ=="\r
    },\r
    "streamsearch": {\r
      "version": "1.1.0",\r
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",\r
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg=="\r
    },\r
    "string_decoder": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",\r
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",\r
      "requires": {\r
        "safe-buffer": "~5.1.0"\r
      },\r
      "dependencies": {\r
        "safe-buffer": {\r
          "version": "5.1.2",\r
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",\r
          "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="\r
        }\r
      }\r
    },\r
    "string-width": {\r
      "version": "4.2.3",\r
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",\r
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",\r
      "requires": {\r
        "emoji-regex": "^8.0.0",\r
        "is-fullwidth-code-point": "^3.0.0",\r
        "strip-ansi": "^6.0.1"\r
      }\r
    },\r
    "strip-ansi": {\r
      "version": "6.0.1",\r
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",\r
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",\r
      "requires": {\r
        "ansi-regex": "^5.0.1"\r
      }\r
    },\r
    "tar": {\r
      "version": "6.1.11",\r
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.1.11.tgz",\r
      "integrity": "sha512-an/KZQzQUkZCkuoAA64hM92X0Urb6VpRhAFllDzz44U2mcD5scmT3zBc4VgVpkugF580+DQn8eAFSyoQt0tznA==",\r
      "requires": {\r
        "chownr": "^2.0.0",\r
        "fs-minipass": "^2.0.0",\r
        "minipass": "^3.0.0",\r
        "minizlib": "^2.1.1",\r
        "mkdirp": "^1.0.3",\r
        "yallist": "^4.0.0"\r
      },\r
      "dependencies": {\r
        "mkdirp": {\r
          "version": "1.0.4",\r
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",\r
          "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw=="\r
        }\r
      }\r
    },\r
    "toidentifier": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",\r
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="\r
    },\r
    "tr46": {\r
      "version": "0.0.3",\r
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",\r
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw=="\r
    },\r
    "type-is": {\r
      "version": "1.6.18",\r
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",\r
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",\r
      "requires": {\r
        "media-typer": "0.3.0",\r
        "mime-types": "~2.1.24"\r
      }\r
    },\r
    "typedarray": {\r
      "version": "0.0.6",\r
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",\r
      "integrity": "sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA=="\r
    },\r
    "unique-filename": {\r
      "version": "1.1.1",\r
      "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",\r
      "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",\r
      "optional": true,\r
      "requires": {\r
        "unique-slug": "^2.0.0"\r
      }\r
    },\r
    "unique-slug": {\r
      "version": "2.0.2",\r
      "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",\r
      "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",\r
      "optional": true,\r
      "requires": {\r
        "imurmurhash": "^0.1.4"\r
      }\r
    },\r
    "unpipe": {\r
      "version": "1.0.0",\r
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",\r
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ=="\r
    },\r
    "util-deprecate": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",\r
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="\r
    },\r
    "utils-merge": {\r
      "version": "1.0.1",\r
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",\r
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="\r
    },\r
    "uuid": {\r
      "version": "8.3.2",\r
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",\r
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg=="\r
    },\r
    "vary": {\r
      "version": "1.1.2",\r
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",\r
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="\r
    },\r
    "webidl-conversions": {\r
      "version": "3.0.1",\r
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",\r
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ=="\r
    },\r
    "whatwg-url": {\r
      "version": "5.0.0",\r
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",\r
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",\r
      "requires": {\r
        "tr46": "~0.0.3",\r
        "webidl-conversions": "^3.0.0"\r
      }\r
    },\r
    "which": {\r
      "version": "2.0.2",\r
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",\r
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",\r
      "optional": true,\r
      "requires": {\r
        "isexe": "^2.0.0"\r
      }\r
    },\r
    "wide-align": {\r
      "version": "1.1.5",\r
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",\r
      "integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",\r
      "requires": {\r
        "string-width": "^1.0.2 || 2 || 3 || 4"\r
      }\r
    },\r
    "wrappy": {\r
      "version": "1.0.2",\r
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",\r
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ=="\r
    },\r
    "xtend": {\r
      "version": "4.0.2",\r
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",\r
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="\r
    },\r
    "yallist": {\r
      "version": "4.0.0",\r
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",\r
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="\r
    }\r
  }\r
}\r
\`\`\``,Dr=`\`\`\`json\r
{\r
  "dependencies": {\r
    "express": "^4.18.1",\r
    "multer": "^1.4.5-lts.1",\r
    "sqlite3": "^5.0.9",\r
    "uuid": "^8.3.2"\r
  }\r
}\r
\`\`\``,Ir=`\`\`\`js\r
const express = require("express")\r
const router = express.Router()\r
const { v4: uuidv4 } = require("uuid")\r
const { db, genid } = require("../db/DbUtils")\r
\r
router.post("/login", async (req, res) => {\r
\r
    let { account, password } = req.body;\r
    let { err, rows } = await db.async.all("select * from \`admin\` where \`account\` = ? AND \`password\` = ?", [account, password])\r
\r
    if (err == null && rows.length > 0) {\r
\r
        let login_token = uuidv4();\r
        let update_token_sql = "UPDATE \`admin\` SET \`token\` = ? where \`id\` = ?"\r
\r
        await db.async.run(update_token_sql,[login_token,rows[0].id])\r
\r
        let admin_info = rows[0]\r
        admin_info.token = login_token\r
        admin_info.password = ""\r
\r
        res.send({\r
            code: 200,\r
            msg: "登录成功",\r
            data:admin_info\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "登录失败"\r
        })\r
    }\r
\r
})\r
\r
module.exports = router\r
\`\`\``,Ar=`\`\`\`js\r
const express = require("express")\r
const router = express.Router()\r
const { db, genid } = require("../db/DbUtils")\r
\r
\r
router.get("/detail", async (req, res) => {\r
\r
    let { id } = req.query\r
    let detail_sql = "SELECT * FROM \`blog\` WHERE \`id\` = ? "\r
    let { err, rows } = await db.async.all(detail_sql, [id]) ;\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "获取成功",\r
            rows\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "获取失败"\r
        })\r
    }\r
\r
})\r
\r
//查询博客\r
router.get("/search", async (req, res) => {\r
\r
\r
    /**\r
     * keyword 关键字\r
     * categoryId 分类编号\r
     * \r
     * 分页：\r
     * page 页码\r
     * pageSize 分页大小\r
     * \r
     */\r
    let { keyword, categoryId, page, pageSize } = req.query\r
\r
    page = page == null ? 1 : page;\r
    pageSize = pageSize == null ? 10 : pageSize\r
    categoryId = categoryId == null ? 0 : categoryId\r
    keyword = keyword == null ? "" : keyword\r
\r
    let params = []\r
    let whereSqls = []\r
    if (categoryId != 0) {\r
        whereSqls.push(" \`category_id\` = ? ")\r
        params.push(categoryId)\r
    }\r
\r
    if (keyword != "") {\r
        whereSqls.push(" (\`title\` LIKE ? OR \`content\` LIKE ?) ")\r
        params.push("%" + keyword + "%")\r
        params.push("%" + keyword + "%")\r
    }\r
\r
    let whereSqlStr = ""\r
    if (whereSqls.length > 0) {\r
        whereSqlStr = " WHERE " + whereSqls.join(" AND ")\r
    }\r
\r
    //查分页数据\r
    let searchSql = " SELECT \`id\`,\`category_id\`,\`create_time\`,\`title\`,substr(\`content\`,0,50) AS \`content\` FROM \`blog\` " + whereSqlStr + " ORDER BY \`create_time\` DESC LIMIT ?,? "\r
    // 1 10  2,10    3,5\r
    // 0,10  10,10   10,5\r
    let searchSqlParams = params.concat([(page - 1) * pageSize, pageSize])\r
\r
    //查询数据总数\r
    let searchCountSql = " SELECT count(*) AS \`count\` FROM \`blog\` " + whereSqlStr;\r
    let searchCountParams = params\r
\r
    //分页数据\r
    let searchResult = await db.async.all(searchSql, searchSqlParams)\r
    let countResult = await db.async.all(searchCountSql, searchCountParams)\r
\r
    console.log(searchSql, countResult)\r
\r
    if (searchResult.err == null && countResult.err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "查询成功",\r
            data: {\r
                keyword,\r
                categoryId,\r
                page,\r
                pageSize,\r
                rows: searchResult.rows,\r
                count: countResult.rows[0].count\r
            }\r
        })\r
\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "查询失败",\r
        })\r
    }\r
\r
})\r
\r
// 删除接口 /blog/delete?id=xxx\r
router.delete("/_token/delete", async (req, res) => {\r
    let id = req.query.id\r
    const delete_sql = "DELETE FROM \`blog\` WHERE \`id\` = ?"\r
    let { err, rows } = await db.async.run(delete_sql, [id])\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "删除成功"\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "删除失败"\r
        })\r
    }\r
\r
})\r
\r
//修改博客\r
router.put("/_token/update", async (req, res) => {\r
\r
    let { id, title, categoryId, content } = req.body;\r
    let create_time = new Date().getTime();\r
\r
    const update_sql = "UPDATE \`blog\` SET \`title\` = ?,\`content\` = ?,\`category_id\` = ? WHERE \`id\` = ?"\r
    let params = [title, content, categoryId, id]\r
\r
    let { err, rows } = await db.async.run(update_sql, params)\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "修改成功"\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "修改失败"\r
        })\r
    }\r
\r
})\r
\r
//添加博客\r
router.post("/_token/add", async (req, res) => {\r
\r
    let { title, categoryId, content } = req.body;\r
    let id = genid.NextId();\r
    let create_time = new Date().getTime();\r
\r
    const insert_sql = "INSERT INTO \`blog\`(\`id\`,\`title\`,\`category_id\`,\`content\`,\`create_time\`) VALUES (?,?,?,?,?)"\r
    let params = [id, title, categoryId, content, create_time]\r
\r
    let { err, rows } = await db.async.run(insert_sql, params)\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "添加成功"\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "添加失败"\r
        })\r
    }\r
\r
})\r
\r
\r
module.exports = router\r
\r
\`\`\``,Mr=`\`\`\`js\r
const express = require("express")\r
const router = express.Router()\r
const { db, genid } = require("../db/DbUtils")\r
\r
// 列表接口\r
router.get("/list", async (req, res) => {\r
    const search_sql = "SELECT * FROM \`category\`"\r
\r
    let { err, rows } = await db.async.all(search_sql, [])\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "查询成功",\r
            rows //rows:rows\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "查询失败"\r
        })\r
    }\r
\r
})\r
\r
// 删除接口 /category/_token/delete?id=xxx\r
router.delete("/_token/delete", async (req, res) => {\r
\r
    let id = req.query.id\r
    const delete_sql = "DELETE FROM \`category\` WHERE \`id\` = ?"\r
    let { err, rows } = await db.async.run(delete_sql, [id])\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "删除成功"\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "删除失败"\r
        })\r
    }\r
\r
})\r
\r
\r
// 修改接口\r
router.put("/_token/update", async (req, res) => {\r
\r
    let { id, name } = req.body\r
    const update_sql = "UPDATE \`category\` SET \`name\` = ? WHERE \`id\` = ? "\r
    let { err, rows } = await db.async.run(update_sql, [name, id])\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "修改成功"\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "修改失败"\r
        })\r
    }\r
\r
})\r
\r
// 添加接口\r
router.post("/_token/add", async (req, res) => {\r
\r
    let { name } = req.body\r
    const insert_sql = "INSERT INTO \`category\` (\`id\`,\`name\`) VALUES (?,?)"\r
    let { err, rows } = await db.async.run(insert_sql, [genid.NextId(), name])\r
\r
    if (err == null) {\r
        res.send({\r
            code: 200,\r
            msg: "添加成功"\r
        })\r
    } else {\r
        res.send({\r
            code: 500,\r
            msg: "添加失败"\r
        })\r
    }\r
\r
})\r
\r
\r
module.exports = router\r
\r
\`\`\``,Gr=`\`\`\`js\r
const express = require("express")\r
const router = express.Router()\r
const { db, genid } = require("../db/DbUtils")\r
\r
router.get("/test", async (req, res) => {\r
    // db.all("select * from \`admin\`", [], (err, rows) => {\r
    //     console.log(rows)\r
    // })\r
\r
    // db.async.all("select * from \`admin\`", []).then((res) => {\r
    //     console.log(res)\r
    // })\r
\r
    let out = await db.async.all("select * from \`admin\`",[]);\r
\r
    res.send({\r
        id: genid.NextId(),\r
        out //相当于 out:out\r
    })\r
})\r
\r
\r
module.exports = router\r
\`\`\``,Nr=`\`\`\`js\r
const express = require("express")\r
const router = express.Router()\r
const fs = require("fs")\r
const { db, genid } = require("../db/DbUtils")\r
\r
router.post("/rich_editor_upload", async (req, res) => {\r
\r
    if (!req.files) {\r
        res.send({\r
            "errno": 1, // 只要不等于 0 就行\r
            "message": "失败信息"\r
        })\r
        return;\r
    }\r
\r
    let files = req.files;\r
    let ret_files = [];\r
\r
    for (let file of files) {\r
        //获取文件名字后缀\r
        let file_ext = file.originalname.substring(file.originalname.lastIndexOf(".") + 1)\r
        //随机文件名字\r
        let file_name = genid.NextId() + "." + file_ext\r
\r
        //修改名字加移动文件\r
        fs.renameSync(\r
            process.cwd() + "/public/upload/temp/" + file.filename,\r
            process.cwd() + "/public/upload/" + file_name\r
        )\r
        ret_files.push("/upload/" + file_name)\r
    }\r
\r
    res.send({\r
        "errno": 0, // 注意：值是数字，不能是字符串\r
        "data": {\r
            "url":ret_files[0], // 图片 src ，必须\r
        }\r
    })\r
\r
})\r
\r
\r
module.exports = router\r
\`\`\``,Lr=`\`\`\`js\r
/**\r
 * @description: \r
 * @author: bubao\r
 */\r
 class Genid {\r
    /**\r
     *Creates an instance of Genid.\r
     * @author bubao\r
     * @param {{\r
     *     Method: 1, // 雪花计算方法，（1-漂移算法|2-传统算法），默认 1\r
     *     BaseTime: 1577836800000,  // 基础时间（ms 单位），不能超过当前系统时间\r
     *     WorkerId: Number, // 机器码，必须由外部设定，最大值 2^WorkerIdBitLength-1\r
     *     WorkerIdBitLength: 6,   // 机器码位长，默认值 6，取值范围 [1, 15](要求：序列数位长+机器码位长不超过 22)\r
     *     SeqBitLength: 6,   // 序列数位长，默认值 6，取值范围 [3, 21](要求：序列数位长+机器码位长不超过 22)\r
     *     MaxSeqNumber: 5, // 最大序列数（含），设置范围 [MinSeqNumber, 2^SeqBitLength-1]，默认值 0，表示最大序列数取最大值（2^SeqBitLength-1]）\r
     *     MinSeqNumber: 5, // 最小序列数（含），默认值 5，取值范围 [5, MaxSeqNumber]，每毫秒的前 5 个序列数对应编号 0-4 是保留位，其中 1-4 是时间回拨相应预留位，0 是手工新值预留位\r
     *     TopOverCostCount: 2000// 最大漂移次数（含），默认 2000，推荐范围 500-10000（与计算能力有关）\r
     * }} options\r
     * @memberof Genid\r
     */\r
    constructor(options) {\r
        if (options.WorkerId === undefined) {\r
            throw new Error("lost WorkerId");\r
        }\r
        // 1.BaseTime\r
        const BaseTime = 1577836800000;\r
        if (!options.BaseTime || options.BaseTime < 0) {\r
            options.BaseTime = BaseTime;\r
        }\r
        // 2.WorkerIdBitLength\r
        const WorkerIdBitLength = 6;\r
        if (!options.WorkerIdBitLength || options.WorkerIdBitLength < 0) {\r
            options.WorkerIdBitLength = WorkerIdBitLength;\r
        }\r
\r
        // 4.SeqBitLength\r
        const SeqBitLength = 6;\r
        if (!options.SeqBitLength || options.SeqBitLength < 0) {\r
            options.SeqBitLength = SeqBitLength;\r
        }\r
        // 5.MaxSeqNumber\r
        const MaxSeqNumber = (1 << SeqBitLength) - 1;\r
        if (options.MaxSeqNumber <= 0 || options.MaxSeqNumber === undefined) {\r
            options.MaxSeqNumber = MaxSeqNumber;\r
        }\r
        // 6.MinSeqNumber\r
        const MinSeqNumber = 5;\r
        if (!options.MinSeqNumber || options.MinSeqNumber < 0) {\r
            options.MinSeqNumber = MinSeqNumber;\r
        }\r
        // 7.Others\r
        const topOverCostCount = 2000;\r
        if (!options.TopOverCostCount || options.TopOverCostCount < 0) {\r
            options.TopOverCostCount = topOverCostCount;\r
        }\r
\r
        if (options.Method !== 2) {\r
            options.Method = 1;\r
        } else {\r
            options.Method = 2;\r
        }\r
\r
        this.Method = BigInt(options.Method);\r
        this.BaseTime = BigInt(options.BaseTime);\r
        this.WorkerId = BigInt(options.WorkerId);\r
        this.WorkerIdBitLength = BigInt(options.WorkerIdBitLength);\r
        this.SeqBitLength = BigInt(options.SeqBitLength);\r
        this.MaxSeqNumber = BigInt(options.MaxSeqNumber);\r
        this.MinSeqNumber = BigInt(options.MinSeqNumber);\r
        this.TopOverCostCount = BigInt(options.TopOverCostCount);\r
\r
        const timestampShift = this.WorkerIdBitLength + this.SeqBitLength;\r
        const currentSeqNumber = this.MinSeqNumber;\r
\r
        this._TimestampShift = timestampShift;\r
        this._CurrentSeqNumber = currentSeqNumber;\r
\r
        this._LastTimeTick = 0;\r
        this._TurnBackTimeTick = 0;\r
        this._TurnBackIndex = 0;\r
        this._IsOverCost = false;\r
        this._OverCostCountInOneTerm = 0;\r
    }\r
\r
    // DoGenIDAction .\r
    DoGenIdAction(OverCostActionArg) { }\r
\r
    BeginOverCostAction(useTimeTick) { }\r
\r
    EndOverCostAction(useTimeTick) {\r
        // if m1._TermIndex > 10000 {\r
        //     m1._TermIndex = 0\r
        // }\r
    }\r
\r
    BeginTurnBackAction(useTimeTick) { }\r
\r
    EndTurnBackAction(useTimeTick) { }\r
\r
    NextOverCostId() {\r
        const currentTimeTick = this.GetCurrentTimeTick();\r
        if (currentTimeTick > this._LastTimeTick) {\r
            // this.EndOverCostAction(currentTimeTick)\r
            this._LastTimeTick = currentTimeTick;\r
            this._CurrentSeqNumber = this.MinSeqNumber;\r
            this._IsOverCost = false;\r
            this._OverCostCountInOneTerm = 0;\r
            // this._GenCountInOneTerm = 0\r
            return this.CalcId(this._LastTimeTick);\r
        }\r
        if (this._OverCostCountInOneTerm >= this.TopOverCostCount) {\r
            // this.EndOverCostAction(currentTimeTick)\r
            this._LastTimeTick = this.GetNextTimeTick();\r
            this._CurrentSeqNumber = this.MinSeqNumber;\r
            this._IsOverCost = false;\r
            this._OverCostCountInOneTerm = 0;\r
            // this._GenCountInOneTerm = 0\r
            return this.CalcId(this._LastTimeTick);\r
        }\r
        if (this._CurrentSeqNumber > this.MaxSeqNumber) {\r
            this._LastTimeTick++;\r
            this._CurrentSeqNumber = this.MinSeqNumber;\r
            this._IsOverCost = true;\r
            this._OverCostCountInOneTerm++;\r
            // this._GenCountInOneTerm++\r
\r
            return this.CalcId(this._LastTimeTick);\r
        }\r
\r
        // this._GenCountInOneTerm++\r
        return this.CalcId(this._LastTimeTick);\r
    }\r
\r
    NextNormalId() {\r
        const currentTimeTick = this.GetCurrentTimeTick();\r
        if (currentTimeTick < this._LastTimeTick) {\r
            if (this._TurnBackTimeTick < 1) {\r
                this._TurnBackTimeTick = this._LastTimeTick - 1;\r
                this._TurnBackIndex++;\r
                // 每毫秒序列数的前 5 位是预留位，0 用于手工新值，1-4 是时间回拨次序\r
                // 支持 4 次回拨次序（避免回拨重叠导致 ID 重复），可无限次回拨（次序循环使用）。\r
                if (this._TurnBackIndex > 4) {\r
                    this._TurnBackIndex = 1;\r
                }\r
                this.BeginTurnBackAction(this._TurnBackTimeTick);\r
            }\r
            return this.CalcTurnBackId(this._TurnBackTimeTick);\r
        }\r
        // 时间追平时，_TurnBackTimeTick 清零\r
        if (this._TurnBackTimeTick > 0) {\r
            this.EndTurnBackAction(this._TurnBackTimeTick);\r
            this._TurnBackTimeTick = 0;\r
        }\r
\r
        if (currentTimeTick > this._LastTimeTick) {\r
            this._LastTimeTick = currentTimeTick;\r
            this._CurrentSeqNumber = this.MinSeqNumber;\r
            return this.CalcId(this._LastTimeTick);\r
        }\r
\r
        if (this._CurrentSeqNumber > this.MaxSeqNumber) {\r
            this.BeginOverCostAction(currentTimeTick);\r
            // this._TermIndex++\r
            this._LastTimeTick++;\r
            this._CurrentSeqNumber = this.MinSeqNumber;\r
            this._IsOverCost = true;\r
            this._OverCostCountInOneTerm = 1;\r
            // this._GenCountInOneTerm = 1\r
\r
            return this.CalcId(this._LastTimeTick);\r
        }\r
\r
        return this.CalcId(this._LastTimeTick);\r
    }\r
\r
    CalcId(useTimeTick) {\r
        const result = BigInt(useTimeTick << this._TimestampShift) + BigInt(this.WorkerId << this.SeqBitLength) + BigInt(this._CurrentSeqNumber);\r
        this._CurrentSeqNumber++;\r
        return result;\r
    }\r
\r
    CalcTurnBackId(useTimeTick) {\r
        const result = BigInt(useTimeTick << this._TimestampShift) + BigInt(this.WorkerId << this.SeqBitLength) + BigInt(this._TurnBackIndex);\r
        this._TurnBackTimeTick--;\r
        return result;\r
    }\r
\r
    GetCurrentTimeTick() {\r
        const millis = BigInt((new Date()).valueOf());\r
        return millis - this.BaseTime;\r
    }\r
\r
    GetNextTimeTick() {\r
        let tempTimeTicker = this.GetCurrentTimeTick();\r
        while (tempTimeTicker <= this._LastTimeTick) {\r
            tempTimeTicker = this.GetCurrentTimeTick();\r
        }\r
        return tempTimeTicker;\r
    }\r
\r
    NextId() {\r
        if (this._IsOverCost) {\r
            return parseInt(this.NextOverCostId());\r
        } else {\r
            return parseInt(this.NextNormalId());\r
        }\r
    }\r
}\r
\r
module.exports = Genid;\r
\r
\`\`\``,Jr="",Rr=`::: danger <Badge type='warning'>特别注意</Badge>\r
\r
**本笔记内容的游戏仅指 \`PC端 - win - steam游戏\`**\r
\r
:::\r
\r
## 平台绑定备注\r
\r
### 育碧平台\r
\r
- 账号：\r
- 绑定游戏：《纪元1800》\r
\r
### EA平台\r
\r
### 科乐美\r
\r
<!-- ## 游玩排序表\r
\r
为了保证游戏稳定地游玩，避免出现电子阳痿的状况。 -->\r
\r
<!-- ### 平面游戏位\r
- 《游戏王：大师决斗》 -->\r
<!-- - 《饥荒》 -->\r
<!-- ### 种植养成位\r
- 《模拟农场22》 -->\r
<!-- - 《一起玩农场》 -->\r
<!-- - 《幻兽帕鲁》 -->\r
<!-- ### 模拟经营位\r
- 《戴森球》 -->\r
<!-- - 《监狱建筑师》 -->\r
<!-- ### 开放世界位 -->\r
<!-- - 《幻兽帕鲁》 -->\r
<!-- - 《中土世界：暗影摩多》 -->\r
<!-- - 《中土世界：战争之影》 -->\r
<!-- ### 自由位\r
- 暂无 -->\r
<!-- - 《无人深空》 -->\r
<!-- - 《极品飞车：热度》 -->\r
\r
## 备份等级\r
\r
普通备份 - 备份在123   \r
多端备份 - 多平台备份   \r
物理备份 - 多端备份 + 物理存储介质备份   `,Ur=`\r
::: danger <Badge type='warning'>特别注意</Badge>\r
\r
**本笔记内容的游戏仅指 \`PC端 - win - steam游戏\`**\r
\r
:::\r
\r
## 1. 注册与下载\r
\r
<br/>\r
\r
**:star:官网直达** [\`https://store.steampowered.com/\`](https://store.steampowered.com/){target="_blank"}\r
\r
::: warning <Badge type='warning'>重要提示</Badge>\r
\r
注册地区请选择 \`地区-中国\` ，同一个游戏每个国家的价格不同，中国是低价区。\r
\r
:::\r
\r
<br/>\r
\r
**<Badge type='danger'>注册提示:</Badge>**   \r
\r
- **网络环境比较全面的** 可直接全局联网点击上面官网注册 \r
\r
---\r
\r
- 没有网络条件的，**上Bilibili找个教程看** [\`👉 enter\`](https://search.bilibili.com/all?keyword=steam%E6%B3%A8%E5%86%8C){target="_blank"}\r
\r
---\r
\r
- **动手能力差的直接去下面的蒸汽平台**（\`阉割版\`）注册 \r
\r
---\r
\r
- https://store.steamchina.com/ （账号是互通的，但是需要实名制）  <Badge type='warning'>不推荐</Badge>  \r
\r
## 2. 游戏购买相关\r
\r
### 2.1 steam平台上购买\r
\r
<br/>\r
\r
#### 2.1.1. 普通购买\r
\r
<br/>\r
\r
---\r
\r
- \`商店\`\r
    > 左上角商店点击精选\r
- \`精选\`\r
    > 右侧搜索框输入游戏名\r
- \`搜索框\`\r
    > 中文搜索不到，就用英文  \r
    > 被系统排除，就去设置里允许18+  \r
    > 直接点击展开排除项也行  \r
- \`游戏名\`\r
    > 选择想买的版本\r
- \`添加到购物车\`\r
    > 核对下金额有无错误\r
    > 跳转支付前看一眼国家是不是中国\r
- \`结算\`\r
    > 支持支付宝、微信、steam余额\r
- \`购买成功\`\r
\r
 \r
<br/>\r
 \r
<hr class="hr-twill-colorful">\r
 \r
<br/>\r
 \r
\r
<br/>\r
\r
#### 2.1.2. 锁区游戏购买\r
\r
<br/>\r
\r
- **锁 IP 的**\r
\r
> 退出steam客户端，然后挂加速器\r
\r
- **锁国区**\r
\r
> 没办法，或者注册一个外区通过家庭共享？（不确定政策是否会改变）\r
\r
\r
 \r
<br/>\r
 \r
<hr class="hr-twill-colorful">\r
 \r
<br/>\r
 \r
 \r
\r
#### 2.1.3. 倒余额\r
\r
<br/>\r
\r
> 简而言之，就是在拼多多（饰品平台）进货，然后在京东（steam）卖\r
\r
---\r
\r
常见的第三方饰品交易平台：\r
\r
① **悠悠有品**  （买方暂时没手续费：我们是买方）\r
\r
② **网易buff** <Badge type='info'>不推荐</Badge>\r
\r
<br/>\r
\r
**具体流程:**\r
\r
- \`查看行情\`\r
    > 在挂刀行情网查看大致的折扣比例 [\`enter\`](https://www.iflow.work/steam/){target="_blank"}   \r
    > 尽量选择交易量1000+的   \r
    > 新手直接选择箱子练手：千瓦、梦魇、反冲\r
- \`饰品平台购买物品\`\r
    > 根据当天的价格趋势，自行判断  \r
    > 不发货的直接取消订单，箱子一般都是10分钟之内发货正常   \r
    > 建议充值在平台上，因为方便计算，当然也可以直接用支付宝，但后续计算麻烦 \r
- \`在steam上出售\`\r
    > 社区 - 市场 - 出售物品  \r
    > 根据市场报价买（注意出售价格与到手价格别弄错）  \r
    > (在饰品平台购买的价格) ➗ （到手的余额） = 实际折扣比例  \r
- \`结束\`\r
\r
<br/>\r
\r
#### 2.1.4 更换厂商绑定账号\r
\r
\r
\r
### 2.2 第三方平台\r
\r
第三方平台购买游戏的方式：\r
\r
- \`CDK\`： 即是游戏激活码，例如: \`TOKFC-FKXQ4-VW50Y\`这种形式  \r
    > \`左上角菜单栏\` -> \`游戏\` -> \`在steam上激活游戏\` -> \`输入激活码\`  \r
    >  <br/>\r
    > <small>注意不要在（ \`-\` ）前后留空格</small>  \r
- \`礼物\`：   \r
- \`买余额\`：\r
\r
## 3. 游戏下载`,Vr="",Xr=`# 修改器\r
\r
> 亦称游戏作弊器\r
\r
## wemod <Badge type='info'>推荐</Badge>\r
\r
## 风灵月影 \r
\r
没有用过`,Qr="",Wr=`---\r
outline: [2,3] \r
---\r
# 戴森球\r
\r
\r
## 1. 游戏简介与评价\r
\r
\r
## 2. 相关网址\r
\r
- 戴森球量化计算器 [\`enter\`](https://github.com/DSPCalculator/dsp-calc){target="_blank"} <Badge type='info'>Github</Badge>\r
\r
## 3. 基本操作\r
\r
### 3.1 初始设置\r
\r
- 如果电脑的配置不行，建议关掉画面的复杂渲染\r
\r
### 3.2 快捷键\r
|键位|功能|\r
|:---:|:---:|\r
|esc|主菜单|\r
|T|科技树|\r
\r
\r
## 4. 存档问题\r
\r
<br/>\r
\r
### 4.1. 备份指南\r
\r
- 戴森球目前没有云存档，**\`数据与存档\`** 在电脑中的如下路径：\r
\r
> \`此电脑 - 文档 - Dyson Sphere Program\`\r
\r
- 建议备份完整的【Dyson Sphere Program】文件夹\r
\r
> \`直接压缩整个文件夹\`\r
\r
> \`下次使用，解压它后直接把整个文件夹替换，快速简单而且数据不易冲突\`\r
\r
::: warning <Badge type='warning'>图示位置</Badge>\r
\r
---\r
\r
![](/image/202405071323.png)\r
\r
---\r
\r
:::\r
\r
---\r
\r
### 4.2. 备份记录\r
\r
<br/>\r
\r
::: info <Badge type='info'>240606</Badge>\r
\r
- **备份形式**：多端备份\r
- **备份位置**：\`123\` 、\`阿里云\`\r
- **备注信息**： 累了，等更新空间站吧\r
\r
:::\r
\r
## 5. MOD 相关\r
\r
r2modman \r
\r
## 6. 蓝图\r
### 6.1 戴森壳蓝图\r
### 6.2 戴森云蓝图\r
### 6.3 建筑蓝图\r
### 6.4 超市蓝图`,Hr=`# 中土世界：暗影摩多\r
\r
## 游戏汉化\r
\r
- **\`来源\`**：百度贴吧\r
> 原文链接 [\`enter\`](https://tieba.baidu.com/p/7976487071?pid=148679163623&cid=148842462258#148842462258){target="_blank"}\r
- **\`个人备份\`**： \r
> 备份位置1： [\`enter\`](https://www.123pan.com/s/RRRYjv-lT70A.html){target="_blank"}   <Badge type='danger'>123网盘</Badge>  <Badge type='warning'>提取码：fans</Badge>     \r
> 备份位置2： [\`enter\`](https://hqz1874.lanzouo.com/ifXWy1zhrk0b){target="_blank"}   <Badge type='danger'>蓝奏云</Badge> \r
\r
- **\`使用\`**：\r
> 解压文件后将\`x64\`、\`cn\`两个文件夹复制粘贴到**游戏根目录**下\r
\r
`,Yr=`# Farm Together\r
\r
> 中文名：《一起玩农场》\r
\r
## 1. 存档问题\r
\r
<br/>\r
\r
> **💡 游戏退出后，会自动进行存档**，所以不像大多数游戏那样需要存档。\r
\r
<br/>\r
\r
### 存档备份\r
\r
<br/>\r
\r
- **存档路径**： \`D:\\steam\\userdata\\你自己的用户数字\\673950\\remote\`\r
\r
- **备份位置**： \`123网盘\`\r
\r
---\r
\r
<br/>\r
\r
### 使用他人存档\r
\r
\r
\r
## 2. 修改器\r
\r
<br/>\r
\r
###  2.1. **WeMod**\r
\r
**\`wemod\` 是比较正规的修改器，支持的游戏多，但是只支持正版游戏**  [\`enter\`](https://www.wemod.com/zh){target="_blank"}   \r
\r
 > 仅支持以下功能\r
\r
- 植物无需浇水\r
- 快速生长\r
- 设置金币\r
- 设置钻石\r
- 设置奖章\r
- 设置门票\r
\r
---\r
\r
<br/>\r
\r
### 2.2. **匿名修改器**\r
\r
> 功能强大\r
\r
\`存储位置\`： \`123网盘\`   \r
\`存储路径\`： \`我的文件 - game - 一起玩农场\`    \r
\`存储状态\`： \`因涉及版权纠纷，无法分享，仅个人使用\`   \r
\r
不要直接解压，新建文件夹 或者 解压时选择 '解压到XXX(与压缩包同名)' \r
\r
\r
`,Kr=`## \r
\r
存档使用\r
\r
\r
\r
<xVideo xSrc="//player.bilibili.com/player.html?isOutside=true&aid=872455192&bvid=BV1LN4y1d73u&cid=1238932042&p=1" scrolling="no" border="0" frameborder="no" framespacing="0"  xTitle="《无人深空》存档使用"/>\r
\r
`,Zr=`## 1. 游戏简介与评价\r
## 2. 资源与论坛\r
## 3. 存档问题\r
### 3.1 云存档错误\r
### 3.2 存档位置\r
## 4.服务器搭建\r
### 4.1 阿里云\r
\r
- **服务器购买**：幻兽帕鲁多人联机服务器 [\`👉 enter\`](https://developer.aliyun.com/topic/ecs/huanshou?spm=a2c6h.12873639.0.0.41ae5e3f9FGvIl#J_7700749260){target="_blank"}   \r
- **搭建的教程**：阿里云上1分钟搞定幻兽帕鲁联机服务器搭建  [\`👉 enter\`](https://developer.aliyun.com/article/1426298?spm=a2c6h.28932594.J_6523138820.1.2560410a6hOSV7){target="_blank"}\r
\r
### 4.2 腾讯云\r
### 4.3 `,$r=`## 1. 游戏简介与评价\r
## 2. 资源与论坛\r
## 3. 存档问题\r
### 3.1 云存档错误\r
### 3.2 存档位置\r
## 4. 攻略笔记\r
\r
- 开局的生日选择`,rn=`## 1.2 美化教程\r
\r
- 打开 N 网 `,nn="",en=`## 盖世小鸡启明星\r
\r
### 叠卷购买指南\r
### 使用指南（接受器）\r
\r
官方说明书：[\`enter\`](https://doc.xiaoji.com/zh/t4nlite/detail/1188.html){target="_blank"}\r
\r
- 接受器\r
> 顶部有按钮   \r
- 指示灯状态   \r
\r
\`常亮\` - 已经连接的状态   \r
\`快闪\` - 配对模式   \r
\`短闪\` - 回连等待状态 （就是等待上次已经连接配对过的手柄连接）   \r
\r
![](/image/202410272311.png)`,tn="",sn="",on="",an=`## 用户设置\r
### 全局\r
\r
---\r
\r
#### 查询全局用户名\r
\`\`\`bash\r
git config --global user.name\r
\`\`\`\r
---\r
\r
#### 修改全局用户名\r
\`\`\`bash\r
git config --global user.name yourName\r
\`\`\`\r
\r
---\r
\r
#### 查询全局邮箱\r
\`\`\`bash\r
git config --global user.email\r
\r
\`\`\`\r
\r
---\r
\r
#### 修改全局邮箱\r
\`\`\`bash\r
git config --global user.email yourEmail@example.com\r
\r
\`\`\`\r
### 项目\r
\r
---\r
\r
#### 查询当前项目用户名\r
\r
\`\`\`bash\r
git config user.name\r
\r
\`\`\`\r
---\r
\r
#### 修改当前项目用户名\r
\r
\`\`\`bash\r
git config user.name yourName\r
\r
\`\`\`\r
---\r
\r
#### 查询当前项目邮箱\r
\r
\`\`\`bash\r
git config user.email\r
\r
\`\`\`\r
---\r
\r
#### 修改当前项目邮箱\r
\r
\`\`\`bash\r
git config user.email yourEmail@example.com\r
\r
\`\`\`\r
`,dn=`## 2FA 设置\r
\r
下载微软的\r
\r
::: details 个人备注\r
\r
\`github-recovery-codes.txt\` 文件已存 \`123网盘\`\r
\r
:::`,ln=`## 仓库的容量\r
\r
https://github.com/settings/repositories`,gn=`\r
`,pn="## 已经追踪的文件的忽略\r\n\r\n> `不清除缓存，可能无法忽略一些已跟踪的文件。`\r\n\r\n- 忽略已跟踪的文件\r\n\r\n```shell\r\ngit rm --cached test.js\r\n```\r\n\r\n- 忽略已跟踪的文件目录（文件夹）\r\n\r\n```shell\r\n git rm --cached test -r\r\n```",mn=`## 创建同名仓库\r
\r
> github的个人主页的自定义，需要对应的仓库\r
\r
> 例如用户名为 jack 仓库名对应的就是 jack \r
\r
## quine 小组件`,cn="# software 报错\r\n\r\n> 这里的软件报错，特指 Github 的 工作台软件 `desktop` \r\n\r\n## This diff contains a change in line endings from 'LF' to 'CRLF'\r\n- **解决办法**  \r\n> 在项目根目录下的`.gitattributes`文件中添加一行代码。（没有这个文件就创建）\r\n```\r\n* text eol=lf\r\n```",un="",hn=`# HTML\r
\r
\r
##  前置基础\r
\r
<br/>\r
\r
::: info  <Badge type='info'>简述</Badge>\r
\r
---\r
\r
**虽说， \`HTML\` 是很简单的标记语言，但仍然需要一点点电脑基础。<br/> 如果文件后缀名的更改、软件的下载与安装这些电脑常识都不懂，可以先补充下电脑常识。**\r
\r
\r
::: \r
\r
- <i class="iconfont icon-bilibili"></i> [【准大一电脑小白】七天入门电脑基础知识训练营第一课之认识电脑](https://www.bilibili.com/video/BV1mN411h7md/?spm_id_from=333.788&vd_source=e69282b186363aa56c436669fa5b11e8)\r
\r
\r
<br/>\r
\r
---\r
\r
\r
**如果对计算机有兴趣，可以看下类似的视频，打打基础：**\r
\r
- <i class="iconfont icon-bilibili"></i>  [真小白福利，完全从零带你掌握计算机与程序员基础知识](https://www.bilibili.com/video/BV1YA411871j/?p=4&spm_id_from=pageDriver&vd_source=e69282b186363aa56c436669fa5b11e8)\r
\r
\r
\r
\r
\r
\r
<br>\r
\r
::: warning  <Badge type='warning'>补课须知</Badge>\r
\r
\r
- 如果对电脑的基础使用存在问题，建议一定要去看类似上面的 \`科普课\` ，不然学习编程会很痛苦。\r
\r
:::\r
\r
\r
\r
\r
`,vn=`# 浏览器选择\r
\r
<br/>\r
\r
学习 \`HTML\` , 首先要选择一款好用的浏览器来运行与调试 \`HTML\` 文件，当然，这并不复杂，一般而言，技术开发者们都喜爱使用 **谷歌浏览器(\`chrome\`)** 来开发web项目， 不过，\`windows\`电脑自带的 **微软浏览器（\`edge\`）** 也足够正常的开发需求。  \r
\r
<br/>\r
\r
> 若无能力用谷歌，直接用 edge   \r
> 其他的浏览器也能用，但是不建议  \r
\r
<br/>\r
\r
<i class="iconfont icon-chrome-black"></i> 谷歌浏览器下载： https://www.google.com/intl/zh-CN/chrome/  \r
<i class="iconfont icon-edge-black"></i> 微软浏览器下载： https://www.microsoft.com/zh-cn/edge/download  \r
\r
\r
\r
`,_n=`# 编辑器准备\r
\r
<br/>\r
\r
代码编辑器有很多，一般而言，**不同的编程语言都有着更适配自身的代码编辑器**，对于 **\`javasrcipt\`** 、**前端（web）领域** 来说，目前主流使用的是 **vscode**  \r
\r
<!-- ![](/image/202401071432.png) -->\r
\r
<br/>\r
\r
\r
\r
**官网链接**： [\`https://code.visualstudio.com/\`](https://code.visualstudio.com/){target="_blank"}  \r
\r
<small>若下载与使用存在问题，可以参考下面的笔记</small>\r
\r
**相关笔记**：  [💡\`VScode使用笔记\`](../../vscode/00%20简述){target="_blank"}\r
\r
\r
`,bn=`## 1.  \`<div>\`\r
\r
> - \`<div>\` 标签是 \` HTML\` 文档中的定义一个分隔区块或者一个区域部分。\r
> - 它是一个块级元素  \r
\r
<br/>\r
\r
**最基本的布局手段**，通常用它来规划网页的布局骨架。某种意义上，其它的标签都可以视为特殊的 \`<div>\` 标签。  \r
\r
\r
\r
## 2.  \`<span>\`\r
\r
\r
## 3.  \`<iframe>\`\r
\r
### 简述\r
\r
可以利用 \`<iframe>\`标签嵌入网页，例如可以通过它，在自己的网页中嵌入bilibili的视频。\r
\r
### 示例\r
\r
\`\`\`html\r
<iframe></iframe>\r
\`\`\`\r
\r
### 属性\r
\r
|attribute|value|desc|\r
|---|---|---|\r
|allowfullscreen|true / flase|-|\r
|src|url|嵌入网页的网络地址|\r
`,yn="",fn=`\r
\`\`\`html\r
<video width="320" height="240" controls>\r
  <source src="movie.mp4" type="video/mp4">\r
  <source src="movie.ogg" type="video/ogg">\r
您的浏览器不支持Video标签。\r
</video>\r
\`\`\`\r
\r
<video width="320" height="240" controls>\r
  <source src="https://www.bilibili.com/video/BV1bW411n7fY/?spm_id_from=333.337.search-card.all.click" type="video/mp4">\r
  <!-- <source src="movie.ogg" type="video/ogg"> -->\r
您的浏览器不支持Video标签。\r
</video>\r
\r
\r
也可以通过\`<iframe>\`标签  \r
\r
::: info  <Badge type='info'>代码演示</Badge>\r
\r
\`\`\`html\r
<iframe \r
  src="//player.bilibili.com/player.html?aid=19390801&bvid=BV1bW411n7fY&cid=31621681&p=1" \r
  scrolling="no" border="0" \r
  frameborder="no" \r
  framespacing="0" \r
  allowfullscreen="true">\r
</iframe>\r
\`\`\`\r
\r
:::\r
\r
::: info  <Badge type='info'>效果演示</Badge>\r
\r
---\r
\r
<iframe \r
  src="//player.bilibili.com/player.html?aid=19390801&bvid=BV1bW411n7fY&cid=31621681&p=1" \r
  scrolling="no" border="0" \r
  frameborder="no" \r
  framespacing="0" \r
  allowfullscreen="true">\r
</iframe>\r
\r
---\r
\r
:::\r
`,wn=`\r
\r
## 1. 字体\r
\r
## 2. 图标\r
\r
### 2.1 使用阿里旗下的 \`iconfon\` 图标\r
\r
\r
#### 2.1.1 font-class 引入\r
\r
- 引入资源\r
\r
\`\`\`css\r
@import url("//at.alicdn.com/t/c/font_4781406_6fual18laj5.css");\r
\`\`\`\r
\r
- 使用\r
\r
\`\`\`html\r
<i class="iconfont icon-XX"></i>\r
\`\`\`\r
\r
### 2.2 使用组件库\r
\r
例如可以使用 Element-ui 的 icon 组件实现。`,jn=`---\r
aside: false\r
---\r
\r
\r
\r
> \`js\` 对于 \`web\` 而言就是鱼儿的水，\`js\` 赋予了网页生命，当然全球变暖也深受 \`js\` 的影响\r
\r
\r
<br/>\r
\r
::: danger <Badge type='warning'>温馨提示</Badge>\r
\r
- 该 JS 的笔记内容，是个人的 **碎片化知识** 笔记。\r
\r
- **遇到笔记中没有记载的知识点，请速速查阅官方文档。** [官方文档 💬](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)\r
\r
- 想要学习JS，建议去B站看网课，**本笔记不具备教程性质** 。\r
\r
\r
:::`,kn=`## 书写位置\r
- JS的书写位置是指：JS代码应该写在哪里？\r
\r
- **简而言之就是写在 \`<script>\` 标签中。**\r
\r
-  至于专门写 js 代码的\`.js\` 文件也是通过\`<script>\`引入其中的代码逻辑（代码片段）\r
\r
### 1. 在 \`HTML\` 中\r
#### 1.1 内部书写\r
\`javascript\` 语言写在 \`<script>\` 标签内，在html页面中使用： \r
<Badge type='info'>示例：</Badge>\r
\`\`\`html{10-12}\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <meta charset="UTF-8" />\r
    <title>title</title>\r
</head>\r
<body>\r
    <!-- 此处省略各种标签 -->\r
    ...\r
    <script>\r
        alert('这是一个简单的js示例')\r
    <\/script>\r
</body>\r
</html>\r
\`\`\`\r
\r
- **通常，这个位置是固定的，放在 \`</body>\`的前面。这是因为，代码从上至下执行，许多页面逻辑\`JS\`代码，需要先等body标签里的各种标签元素加载后才能正常运行**\r
\r
<br>\r
\r
> 有时候，我们会看见： \`<head>\` 标签之中会存在 \`<script>\` 标签  \r
> **这往往是用于实现额外功能而引入JS库（大佬们的代码）**  \r
> 下面是引入vue语法的在线JS资源的示例。  \r
\r
<small><small>🧿这种使用资源的方式也叫 CDN 引用</small></small>\r
\r
\`\`\`html{6}\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <meta charset="UTF-8" />\r
    <title>title</title>\r
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\r
</head>\r
<body>\r
    <!-- 此处省略各种标签 -->\r
    ...\r
</body>\r
</html>\r
\`\`\`\r
\r
---\r
\r
<br>\r
\r
<br>\r
\r
#### 1.2 外部书写\r
\r
- 即是，引用外部 \`JS\` 资源（本地的、网络的都可以）\r
- **\`src\` 中写资源的位置。** \r
- 具体内容还是在引入外部的\`.js\`文件中书写。 \r
\r
<Badge type='info'>示例：</Badge>\r
\`\`\`html\r
<!-- 本地JS资源引入 -->\r
\r
<script src='./yourjs.js'>\r
    // 标签内不要写内容，写了也会被忽略\r
<\/script>\r
\r
<!-- 网络JS资源引入 -->\r
\r
<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\r
\`\`\`\r
\r
::: tip 防呆赘述\r
- 关于\`src\`中资源的本地位置的填写规则，可以参考这部分内容[enter](/zo-repo/vitepress/04%20文档编辑/01%20文件路径.md){target='_blank'}\r
:::\r
\r
#### 1.3 行内书写\r
\r
- 这属于进阶的内容了，一般是在Vue会遇到，简化了JS的代码量，基础阶段不需要接触这个。\r
\r
- 其实都融在后面的框架使用中，并不会单独作为知识点，也不会强调行内书写这个概念。\r
\r
\r
### 2. 在 vue 中\r
\r
vue 文件往往是由三部分组成：  \r
\r
> 写在\`<script>\`标签内就行\r
\r
\r
\`\`\`vue\r
<template>\r
</template>\r
\r
<script setup>\r
// 代码写在这里就行\r
<\/script>\r
\r
<style scoped>\r
</style>\r
\`\`\`\r
\r
\r
当然，也可以将\`<script>\`放在文件头部  \r
\r
\`\`\`vue\r
<script setup>\r
// 代码写在这里就行\r
<\/script>\r
\r
<template>\r
</template>\r
\r
<style scoped>\r
</style>\r
\`\`\`\r
\r
## 注释\r
\r
- 注释（comment）单词的意思是：评论、注释\r
\r
- 其实换个词汇就能瞬间理解  -- **注解** \r
\r
- 就是用来标注、解释你代码是干嘛用的\r
\r
<br/>\r
\r
\r
::: danger <Badge type='warning'>注意</Badge>\r
\r
- 在注释范围的有效范围内，你可以为所欲为，写中文、英文、鸟语都可以。\r
\r
- **注释的颜色在编辑器中默认绿色的，一般而言，它不会被执行，也不影响项目运行。**\r
\r
![](/image/202403080305.png)\r
\r
:::\r
\r
### 单行注释\r
\r
- **简述**\r
\r
> **在一行代码内  \`//\` （两个斜杠号）后面的代码的会被注释（不执行、不影响代码逻辑）**  \r
> 作用就是写备注信息，提醒自己这段代码是干嘛的\r
\r
\`\`\`javascript\r
// 比如这样\r
let num = 0 //或者这样\r
\`\`\`\r
\r
\r
- **快捷键**\r
\r
> \`ctrl\` + \`/\` \r
\r
<small>可选中多行，一起注释，但是本质上还是叫单行注释，因为只是对每行都加了单行注释</small>\r
\r
<Badge type='danger'>注意</Badge>\r
\r
- 第一，\`//\` 最多注释本行代码，不会影响下一行。\r
- 第二，\`//\` 只注释后面，前面的内容不受影响。\r
\r
\r
### 多行注释\r
\r
- **简述**\r
\r
> **用 \`/*\` 和 \`*/\` 包裹的多行代码会被注释**\r
\r
\`\`\`javascript\r
/*\r
从这里开始\r
let num = 0\r
let name = 'jack'\r
一直到这里的内容都不会被执行\r
*/\r
let age = 18\r
\`\`\`\r
- **快捷键** \r
\r
> 多行注释快捷键是：\`alt\` + \`shift\` + \`a\`\r
\r
### 函数注释\r
\r
- **简述**\r
\r
> 函数注释，亦称方法注释。**这种注释方式是非常有用**，大多数封装的JS代码都会采用这样的注释，在使用（调用）函数时，配合编辑器，能够清晰地获取注释信息。\r
\r
- **快捷键**\r
\r
> ① 在 vscode 中 输入 \`/**\` 会自动补全  \r
> ② 也可以安装插件 \`koroFileHeader\`\r
\r
\`\`\`javascript\r
    /**\r
     * 这是一个获取列表的函数\r
     * @param {参数一的描述} mo1 \r
     * @param {参数二的描述} mo2 \r
     * @param {参数三的描述} mo3 \r
     */\r
    const getList = (mo1,mo2,mo3) => {}\r
\r
\`\`\`\r
\r
## 结束符\r
\r
- 在每行代码后加 \`;\`，表示此行代码结束   \r
- **可加可不加，一般不用加，除非你比较勤奋（但这没必要）**\r
- 从实际出发，不加，你一眼可以看见多加的符号，加了，你分不清，那行有没有漏加，当然插件可以解决这类问题\r
\r
<br/>\r
\r
<br/>\r
\r
`,xn="<Badge type='danger'>该页面未完善</Badge>\r\n\r\n## 字面量\r\n\r\n> 其实专业的说法蛮抽象的\r\n\r\n> 功利的角度来看， `=` 后面的具体代码就是字面量\r\n\r\n```javascript\r\n// 120 就是字面量\r\nlet x = 120\r\n```\r\n\r\n## 输入\r\n\r\n```javascript\r\nprompt()\r\n```\r\n\r\n## 输出\r\n\r\n```javascript\r\nconsole.log();\r\n```\r\n\r\n```javascript\r\nalert()\r\n```\r\n\r\n```javascript\r\ndocument.write()\r\n```",zn=`\r
# 变量与常量\r
\r
## 声明变量与赋值\r
\r
\`\`\`javascript\r
var x; // 第一步，声明变量\r
x = 5; // 第二步，赋值\r
\`\`\`\r
<br/>\r
\r
:star:但实际中不使用\`var\`来声明（已淘汰），往往使用的是\`let\`，且声明与赋值同时进行    \r
\r
\`\`\`javascript\r
let x = 5\r
\`\`\`\r
\r
## 更新变量\r
\r
> 更新变量(即是改变数据、数据更新)\r
- 更新数据不需要再次声明变量，因为已经声明过了\r
- 并且也不允许**重复声明的同一变量**（变量重名）。  \r
> （但有例外，这是后面作用域的知识）\r
\r
\r
\`\`\`javascript\r
let x = 5\r
x = 6\r
// 此时 x 的值为6\r
\r
x = 10\r
// 此时 x 的值为10\r
\`\`\`\r
\r
## 变量的本质\r
\r
- 变量是一个容器，一个存储空间，它不是数据，而是'存数据'的。\r
\r
\r
## 命名规则\r
\r
- **不能和 \`Javascript\` 的一些固定词汇冲突**\r
- 亦称保留关键词，关键词不可用。\r
\r
\`\`\`javascript\r
// 不能这样\r
let let = 0\r
let if = 0\r
// if 是 后面条件语法的固定词\r
\`\`\`\r
\r
- **不能以数字开头**\r
\r
- **变量名只支持：英文字母、数字、下划线、$的组合。**\r
\r
- **\`javascript\`中区分字母的大小写。**\r
\r
## 常量\r
\r
- 用const声明\r
\r
- 常量声明时，必须赋值，而且，常量不允许重新赋值。\r
\r
\`\`\`javascript\r
const week = 7\r
\`\`\``,Bn=`<Badge type='danger'>该页面未完善</Badge>\r
\r
\r
# 数据类型\r
\r
\r
## 1. 数据的类型分类\r
\r
> JS是弱数据类型，一般都是赋值后才确定变量的数据类型  \r
\r
### 数字（Number）:star:  \r
\r
\`\`\`javascript\r
let num = 2024\r
\`\`\`\r
::: info <Badge type='warning'>补充知识</Badge>\r
\r
> 算术运算符（数字运算）\r
\r
|名称|亦称|符号|\r
|---|---|---|\r
|加|求和|\`+\`|\r
|减|求差|\`-\`|\r
|乘|求积|\`*\`|\r
|除|求商|\`/\`|\r
|余|取余|\`%\`|\r
\r
> 示例\r
\r
\`\`\`js\r
let res = 2024 * 2 \r
// 此时 res 的结果为 4048\r
let res = 37 % 6\r
// 此时 res 的结果为 1\r
\`\`\`\r
:::\r
### 字符串（String）:star: \r
\r
> 用 \`\`(反引号) ""（双引号） ''（单引号）包裹的数据都是字符串\r
\r
\`\`\`javascript\r
let string = '2024年'\r
\`\`\`\r
::: info <Badge type='warning'>补充知识</Badge>\r
\r
- **拼接字符串**\r
\r
> 加号（ + ）可以拼接字符串\r
\r
\`\`\`js\r
let str1 = '我是'\r
let str2 = '帅哥'\r
\r
console.log(str1 + str2);\r
// 结果为 我是帅哥\r
\r
\`\`\`\r
\r
- **模板字符串**\r
\r
① 反引号包裹而不是单引号或者双引号\r
\r
② 变量要使用\`\${}\`包裹它\r
\r
\`\`\`javascript\r
\r
let age = 18\r
console.log(\`我今年\${age}岁了\`);\r
\`\`\`\r
:::\r
\r
### 布尔值（Boolean）:star:  \r
\r
> 描述真与假：true 和 false\r
\r
\r
### 数组（Array）:star:  \r
\r
- 用\`[ ]\`包裹数据，用\`,\`逗号分隔数据\r
\r
\`\`\`javascript\r
let arr = ['aa','bb','cc','dd']\r
let arr2 = [11 , 12 , 13 , 14]\r
\`\`\`\r
- **arr[i] 表示每一项，第一项为arr[0]**\r
\r
> 从0开始索引，arr[0]表示数组中第一项的数据\r
\r
> 这里的i（index）表示索引。\r
\r
\`\`\`javascript\r
arr[0]\r
// 它表示arr数组中的第一项 'aa'\r
\r
\`\`\`\r
\r
- 数组长度\r
\r
- 可以通过 \`arr.length\` 获取数组的长度\r
\r
\`\`\`javascript\r
let arr = ['aa','bb','cc','dd']\r
\r
let res = arr.length\r
\r
// res = 4  \r
\`\`\`\r
\r
\r
### 对象（Object）:star:  \r
\r
### 空（null）:star:\r
\r
### 未定义（define）:star:\r
\r
## 2.数据的类型检测\r
\r
\`\`\`javascript\r
let num = 2024\r
typeof(num)\r
\`\`\`\r
\r
## 3.数据的类型转换\r
\r
\r
### 转布尔\r
\r
- Boolean()\r
\r
- \`0\`、\`''\`、\`undefined\`、\`null\`、\`false\`、\`NaN\`、 转换为false\r
\r
### 转数字\r
\r
### 显示转换\r
\r
- Number()\r
\r
\`\`\`javascript\r
let str = '2024'\r
console.log(Number(str));\r
// 此时的打印的结果为 2024\r
\`\`\`\r
\r
- parseInt() 只保留整数\r
\r
- parseFloat() 可保留浮点数（小数）\r
\r
### 隐式转换\r
\r
- 字符串用 \`+\` 拼接数字，会把数字转换成字符串\r
\r
\`\`\`javascript\r
// 注意，这是数字类型\r
let mo = 123\r
//  这是字符串类型\r
let no = '123'\r
\r
let ko = '测试'\r
\r
let res1 = ko + mo\r
// res1 的值是 '测试123'\r
let res2 = mo + no\r
// res2 的值为 '123123'\r
\`\`\`\r
\r
- 但是其他运算会转回数字\r
\r
\`\`\`javascript\r
let res3 = mo - no\r
// res3 的值为 0\r
\`\`\`\r
\r
- 在字符串前使用加号，若是可以转换，可以转换成数字\r
\r
\`\`\`javascript\r
let no = '2024'\r
console.log(+no);\r
//  +no 的值为 2024 不再是'2024'\r
\`\`\`\r
\r
`,qn=`## 一元运算符\r
\r
- 正号、负号\r
\r
## 自增运算符\r
\r
- 前置自增 \`++i\`\r
- 后置自增 \`i++\` (参与运算后再加一)\r
\r
\`\`\`javascript\r
let num = 1\r
num ++\r
\`\`\`\r
\r
## 赋值运算符\r
\r
> 给变量赋值的运算符\r
\r
- \`=\`\r
\r
- \`+=\`\r
\r
\`\`\`javascript\r
let num = 1\r
num = num + 1\r
// 等价于\r
num += 1\r
\`\`\`\r
## 比较运算符号\r
\r
- \`>\` 大于\r
- \`<\` 小于\r
- \`>=\` 大于或等于\r
- \`<=\` 小于或等于\r
- \`==\` 值等于\r
- \`===\` 全等于 \r
- \`!=\` 不等于\r
- \`!==\` 是否不全等  \r
\r
- 注意字符串可以通过编码比较\r
\r
## 逻辑运算符\r
\r
- 与  \`&&\`\r
- 或  \`||\`\r
- 非  \`!\`\r
\r
- 逻辑中断\r
\r
> 如果前面的满足，不再执行后面的代码\r
\r
## 运算符优先级\r
\r
- 小括号 \`()\`\r
- 一元运算符 \`!\` \`++\`\r
- 算术运算符  先乘除、后加减\r
- 比较运算符  \`>\` \`<=\`\r
- 相等运算符  \`==\` \`!=\` \`===\` \`!==\`\r
- 逻辑运算符 先 \`&&\` 后 \`||\`\r
- 赋值运算符 \`=\`\r
- 逗号运算符 ，\r
\r
\r
## 展开运算符\r
\r
- 不会修改原数组\r
\r
- 注意和剩余参数有点像\r
\r
\`\`\`js\r
\r
let arr = [2,4,6,8]\r
\r
console.log(...arr);\r
\r
// ...arr === 2,4,6,8\r
\r
\`\`\`\r
\r
- 可以用来合并数组\r
\r
\`\`\`js\r
\r
let arr1 = [1,2,3]\r
let arr2 = [4,5,6]\r
let arr3 = [...arr1,...arr2]\r
\`\`\`\r
`,Sn=` 表达式有计算结果，是可以求值的代码\r
- 语句是可以被执行，不一定有值\r
\r
- 也是分支结构\r
\r
## if 语句\r
\r
### 单分支\r
\r
\`\`\`javascript\r
// 条件满足就执行\r
if(条件){\r
\r
}\r
\`\`\`\r
\r
## 双分支\r
\r
\`\`\`javascript\r
if(条件一){\r
    // 代码一\r
}else{\r
    // 代码二\r
}\r
\`\`\`\r
\r
## 三元运算符\r
\r
> 条件 ？ 满足执行的代码 : 不满足执行的代码\r
\r
## switch 语句\r
\r
\`\`\`javascript\r
switch (key) {\r
    case value:\r
        // 代码一\r
        break;\r
    case value:\r
        // 代码二\r
        break;\r
    default:\r
        // 默认执行的代码\r
        break;\r
}\r
\`\`\`\r
\r
\r
## while 循环\r
\r
\`\`\`javascript\r
// 条件为真时，一直循环，条件为假时，循环结束\r
while (condition) {\r
    // 循环的代码\r
}\r
\`\`\`\r
\r
\r
## for 循环\r
\r
\`\`\`javascript\r
for(起始条件; 终止条件; 变量变化量){\r
    // 循环的代码\r
}\r
\`\`\`\r
\r
>  退出循环\r
\r
- continue 退出本次循环\r
- break 退出循环`,Tn=`- F12 - sources - 行号打断点 - 刷新浏览器\r
\r
\r
## throw\r
\r
## try\r
\r
## debugger`,En="- 单线程",Pn="",On="",Cn=`\r
## 获取字符串\r
\r
## 拼接字符串\r
\r
\r
\r
\r
## 拆分字符串 \r
\r
- \`str.split('分割符号')\`\r
\r
将\`字符串\`按照分割符拆分成\`数组\`\r
\r
例如：\`'20240801-今日新闻'\` -> \`['20240801' , '今日新闻']\`\r
\r
\`\`\`js\r
\r
let str = '20240801-今日新闻'\r
\r
let arr = str.split('-')\r
\r
console.log(arr);\r
\r
\`\`\`\r
::: danger <Badge type='warning'>注意</Badge>\r
**空格也可以作为分割符号**\r
\r
\`\`\`js\r
\r
let str = '20240801 今日新闻'\r
// 注意里面有空格，没有空格就按字拆分👇\r
let arr = str.split(' ')\r
\r
console.log(arr);\r
\r
\`\`\`\r
:::\r
\r
\r
1.实例属性1ength用来获取字符串的度长（重点）  \r
2.实例方法split（‘分隔符'）用来将字符串拆分成数组（重点）  \r
3.实例方法substring（需要截取的第一个字符的索引l[，结束的素引号]）用于字符串截取（重点）  \r
4.实例方法startsWith（检测字符串[，检测位置素引号]）检测是否以某字符开头（重点)  \r
5.实例方法includes（搜索的字符申[，检测位置索引号]）判断一个字符串是否包含在另一个字符串中，根据情况返回  \r
true或false(重点)\r
6.实例方法toUpperCase用于将字母转换成大写\r
7.实例方法toLowerCase用于将就转换成小写\r
8.实例方法indexof检测是否包含某字符\r
9.实例方法endsWith检测是否以某字符结尾\r
10.实例方法replace用于替换字符串，支持正则匹配\r
11.实例方法match用于\r
\r
\r
\r
\r
## 去除字符串前后的空格\r
\r
\`\`\`js\r
\r
\r
\r
\`\`\`\r
\r
`,Fn=`## IndexOf 方法\r
\r
- \`indexOf()\` 是 \`Javascript\` 中最常用的字符串查找方法之一。\r
-  它的返回值是在字符串中首次出现的索引位置，**如果未找到则返回 \`-1\`** 。\r
\r
::: code-group\r
\r
\`\`\`js []\r
let str = '忽然如一夜春风来'\r
let index = str.indexOf('一')\r
// index = 3 \r
// index 的值，是该字符在索引位置\r
\r
\`\`\`\r
\r
\r
:::\r
\r
## 待整理\r
1. IndexOf() 方法\r
\r
\r
\r
示例：\r
\r
let str = 'Hello, world!';\r
let index = str.indexOf('world'); // 返回 7\r
2. Search() 方法\r
\r
search() 方法与 indexOf() 类似，也是返回指定值在字符串中首次出现的位置。但 search() 可以使用正则表达式作为参数。\r
\r
示例：\r
\r
let str = 'Hello, world!';\r
let index = str.search(/world/); // 返回 7\r
3. Match() 方法\r
\r
match() 方法使用正则表达式在字符串中进行查找，并返回一个包含结果的数组。如果没有匹配项，则返回 null。\r
\r
示例：\r
\r
let str = 'Hello, world!';\r
let result = str.match(/world/); // 返回 ['world']\r
4. Includes() 方法\r
\r
includes() 方法用于判断一个字符串是否包含在另一个字符串中，返回布尔值。这个方法对大小写敏感。\r
\r
示例：\r
\r
let str = 'Hello, world!';\r
let found = str.includes('world'); // 返回 true\r
5. LastIndexOf() 方法\r
\r
lastIndexOf() 方法返回指定值在字符串中最后一次出现的位置，如果未找到则返回-1。\r
\r
示例：\r
\r
let str = 'world, Hello world!';\r
let index = str.lastIndexOf('world'); // 返回 13\r
6. Split() 方法与 IndexOf() 组合使用\r
\r
虽然 Split() 方法本身不是用来查找字符串的，但我们可以将其与 indexOf() 组合使用，来实现字符串查找的功能。具体做法是先使用 split() 将字符串分割成数组，然后遍历数组查找目标字符串的位置。\r
\r
示例：\r
\r
let str = 'Hello, world!';\r
let words = str.split(' ');\r
let index = words.indexOf('world'); // 返回 1\r
性能测试：\r
\r
为了比较这些方法的性能，我们可以编写一个简单的性能测试脚本。脚本将生成一个包含大量文本的字符串，并使用不同的查找方法重复查找相同的子字符串。通过测量每种方法的执行时间，我们可以得出它们的性能差异。\r
\r
性能测试的结果可能因浏览器和硬件环境的不同而有所差异，但一般来说，indexOf() 和 search() 方法的性能最好，因为它们直接由Javascript引擎优化。Match() 和 Split() 方法由于涉及到正则表达式或数组操作，性能稍差。而 Includes() 方法虽然语法简洁，但在性能上可能不如其他方法。因此，在选择字符串查找方法时，应根据具体需求和性能要求来选择合适的方法。`,Dn=`substring() 方法；\r
substr() 方法；\r
slice() 方法；`,In=`- 数组是一个对象，也叫对象数组\r
\r
## 声明\r
\r
\`\`\`javascript\r
let arr = [ 1 , 2 , 3 , 4]\r
// 也可以用这种方式声明数组\r
let arr2 = new Array(1 , 2 , 3 , 4) //构造函数\r
\`\`\`\r
\r
## 数组的索引\r
\r
- 数据中的编号顺序为索引（或叫下标），从零开始。\r
\r
- 取值方式 \`数组名[索引]\`\r
\r
\`\`\`javascript\r
let arr = [ 8 , 58 , 35 , 49]\r
\r
// arr[0] 表示数组中第一个位置的值， 8\r
// arr[1] 表示数组中第二个位置的值， 58\r
\r
\`\`\`\r
\r
- 重新赋值\r
\r
\`\`\`javascript\r
let arr = [ 1, 52]\r
\`\`\`\r
\r
## arr.push() \r
\r
> 添加到数组的尾部，并返回数组的新长度 \r
\r
## arr.unshift()\r
\r
> 一个或多个元素添加到数组的头部，并返回数组的新长度\r
\r
## arr.pop()\r
\r
> 删除数组中的最后一个元素，并返回该元素的值\r
\r
## arr.shift()\r
\r
> 删除数组中的第一个元素，并返回该元素的值\r
\r
## arr.splice()\r
\r
> arr.splice(起始位置，删除个数) \r
\r
- 起始位置是从零开始，按照索引值\r
\r
## 删除指定项`,An=`\`\`\`js\r
let arr = [100,200,300]\r
let [a,b,c] = arr\r
console.log(a);\r
\`\`\`\r
\r
- 数据交换\r
\r
\`\`\`js\r
\r
let a = 1\r
let b = 0\r
\r
;[a,b] = [b,a]\r
\r
// 立即执行函数也是需要加；\r
\`\`\`\r
\r
## 默认值\r
\`\`\`js\r
let arr = [100,200,300]\r
let [a=0,b=0,c] = arr\r
console.log(a);\r
\`\`\`\r
\r
## 忽略\r
\r
\`\`\`js\r
let arr = [100,200,300]\r
let [a,,c] = arr\r
console.log(a);\r
console.log(c);\r
\`\`\`\r
## 多维解构\r
\r
\`\`\`js\r
let [a,b,[c,d]] = [100,200,[300,400]]\r
\r
\`\`\``,Mn="## 一行代码解决\r\n\r\n```js\r\nlet arr = []\r\nconst result = Array.from(new Set(arr))\r\n```\r\n",Gn=`- 返回的是新数组\r
\r
\`\`\`js\r
\r
let arr = [1,2,3]\r
\r
let newarr = arr.map(function(item,index){\r
    return item + 10\r
})\r
\`\`\``,Nn="把数组转换成字符串\r\n\r\n```js\r\n// 默认为逗号分隔\r\narr.join() \r\n\r\n```",Ln=`- 遍历数组，不返回数组\r
\r
\`\`\`js\r
\r
arr.forEach(function(当前数组元素，当前元素索引){\r
    // 逻辑\r
})\r
\r
\`\`\``,Jn="- 过滤数组",Rn=`\`\`\`js\r
\r
let arr = [1,2,3,4]\r
\r
let total = arr.reduce(function (prev,currrent) {\r
    return prev + currrent\r
})\r
\r
\`\`\``,Un=`5.实例方法join数组元素拼接为字符串，返回字符串（重点）\r
6.实例方法find查找元素，返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回undefined（重点）\r
7.实例方法every检测数组所有元素是否都符合指定条件，如果所有元素都通过检测返回true，否则返回false（重点）\r
8.实例方法some检测数组中的元素是否满足指定条件如果数组中有元素满足条件返回true，否则返回false\r
9.实例方法concat合并两个数组，返回生成新数组\r
10.实例方法sort对原数组单元值排序\r
11.实例方法splice删除或替换原数组单元\r
12.实例方法reverse反转数组\r
13.实例方法findIndex查找元素的索引l值`,Vn="",Xn="",Qn=`- 对象是一个数据类型\r
- 是无序的数据集合\r
\r
\`\`\`js\r
\r
let obj = {\r
    // 属性名：属性值\r
    // 方法名：函数\r
}\r
\r
\`\`\`\r
\r
对象的创建\r
\r
\`\`\`js\r
// 第一种\r
let obj = {\r
    name:'momo',\r
    age:18\r
}\r
// 第二种\r
let obj = new Object( { name:'momo', age:18 } )\r
// 第三种 自定义的构造函数\r
\`\`\``,Wn=`## 特殊查询\r
\r
\`\`\`js\r
\r
let obj = {\r
    'mo-name':'momo',\r
    age:18\r
}\r
\r
console.log(obj['mo-name']);\r
\r
\`\`\`\r
\r
## 增加\r
\r
### 静态添加\r
\r
> \`对象.添加的属性 = 属性值\`\r
\r
\`\`\`javascript\r
let obj = {}\r
\r
obj.name = 'momo'\r
\r
console.log(obj);\r
\`\`\`\r
\r
### 动态添加\r
\r
> 可以结合变量来实现动态添加\r
\r
\`\`\`javascript\r
let obj = {}\r
let key = 'name'\r
let value = 'momo'\r
obj[key] = value\r
\`\`\`\r
\r
## 删除\r
\r
> 已经废除\r
\r
\`\`\`js\r
let obj = {\r
    name:'momo',\r
    age: 18,\r
}\r
\r
delete obj.name\r
\r
\`\`\``,Hn=`\`\`\`js\r
\r
let obj = {\r
    moname:'momo',\r
    age: 18\r
}\r
\r
for(let key in obj){\r
\r
    console.log(key);\r
    \r
    console.log(obj[key]);\r
}\r
\r
\`\`\``,Yn=`\`\`\`js\r
// 取整 (向上取整) \r
Math.ceil(num)\r
\r
// 向下取整\r
\r
Math.floor(num)\r
\r
// 四舍五入\r
Math.round()\r
\r
// 最小值\r
Math.min(arr)\r
\r
// 最大值\r
Math.max(arr)\r
\`\`\`\r
\r
## 随机数\r
\r
- \`Math.random()\`\r
- 包括零，不包括一的随机小数\r
\r
- 0 - 10\r
\`\`\`js\r
\r
Math.floor(Math.random()*(10 + 1)) \r
\r
\`\`\`\r
\r
- N - M\r
\r
\`\`\`js\r
\r
Math.floor(Math.random()*( M - N + 1)) + N \r
\r
\`\`\``,Kn=`- 对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法\r
\r
\`\`\`js\r
// 变量名称应和属性名称相同\r
const { name , age } = { name:'momo' ,  age:18 }\r
// 自定义变量名时，原对象的属性放在前面\r
const { name:newname , age:newage } = { name:'momo' ,  age:18 }\r
\`\`\`\r
\r
- 数组对象的解构\r
\r
\`\`\`js\r
\r
const person = [{\r
    name:'momo',\r
    age:18\r
}]\r
\r
const [{ name , age }] = person\r
\r
\`\`\`\r
\r
- 多级对象解构\r
\r
\`\`\`js\r
\r
const person = {\r
    name:'momo',\r
    age:18,\r
    like:{\r
        color:'blue',\r
        music:'pop'\r
    }\r
}\r
\r
const {name, age , like:{color,music}} = person\r
\r
\`\`\`\r
- 数组多级对象的解构\r
\r
\`\`\`js\r
\r
const person = [{\r
    name:'momo',\r
    age:18,\r
    like:{\r
        color:'blue',\r
        music:'pop'\r
    }\r
}]\r
\r
const [{name, age , like:{color,music}}] = person\r
\r
\`\`\``,Zn=`\`\`\`js\r
let person = {\r
    name:'momo',\r
    age:18\r
}\r
// 获取对象的所有键名（属性名）\r
let arr = Object.keys(person)\r
// 获取对象的所有属性值\r
let arr = Object.values(person)\r
// 对象拷贝（复制、备份）\r
let newobj = {}\r
Object.assign( newarr, person )\r
\`\`\``,$n=`## 深拷贝的实现方式\r
\r
- 递归\r
- lodash / cloneDeep\r
- JSON.stringify()`,re=`- 小驼峰\r
- 前缀为动词\r
\r
\`\`\`javascript\r
function name(params) {\r
    \r
}\r
\`\`\`\r
## 命名规范\r
\r
- 采用小驼峰 例如\`setMenu\`\r
- 一般前缀为动词\r
\r
|前缀|含义|\r
|---|---|\r
|get|获取某个值|\r
|set|设置某个值|\r
|can|判断是否可执行某个动作|\r
|has|判断是否含义某个值|\r
|is|判断是否为某个值|\r
|load|加载某些数据|`,ne=`## 形参 实参 默认参数\r
\r
\`\`\`javascript\r
function getRes( x = 5 , y = 10) {\r
    return x + y\r
}\r
\`\`\`\r
\r
## 动态参数\r
\r
\`\`\`javascript\r
function getSum() {\r
    // arguments 动态参数 是一个伪数组\r
    console.log(arguments);\r
}\r
\`\`\`\r
## 剩余参数\r
\r
\`\`\`javascript\r
function getSum(...mo) {\r
    // mo 剩余参数 可以自定义参数名 是一个真数组\r
    console.log(mo);  // 使用时，不需要加...\r
}\r
\`\`\``,ee="",te=`> 代码的可用范围\r
\r
- 作用域（scope）规定了变量能够被访问的范围，离开了这个范围变量便不能被访问（使用）。\r
\r
## 局部作用域\r
\r
- 局部作用域分为函数作用域和块作用域。\r
\r
- 函数作用域\r
\r
- 在函数内部声明的变量只能在函数内部被访问，外部无法直接访问。\r
\r
1.函数内部声明的变量，在函数外部无法被访问\r
2.函数的参数也是函数内部的局部变量\r
3.不同函数内部声明的变量无法互相访问\r
4.函数执行完毕后，函数内部的变量实际被清空了\r
\r
- 块级作用域\r
\r
在JavaScript中使用{}包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问。\r
\r
- var是例外\r
\r
## 全局作用域\r
\r
- 最外层的变量\r
\r
## 作用域链\r
\r
作用域链本质上是底层的变量查找机制。\r
》在函数被执行时，会优先查找当前函数作用域中查找变量\r
》如果当前作用域查找不到则会依次逐级\r
\r
\r
1.嵌套关系的作用域串联起来形成了作用域链\r
2.相同作用域链中按着从小到大的规则查找变量\r
3.子作用域能够访问父作用域，父级作用域无法访问子级作用域\r
\r
## 垃圾回收机制\r
\r
垃圾回收机制（GarbageCollection）简称GC\r
\r
内存的生命周期\r
JS环境中分配的内存，一般有如下生命周期：\r
1．内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存\r
2.内存使用：即读写内存，也就是使用变量、函数等\r
3.内存回收：使用完毕，由垃圾回收器自动回收不再使用的内存\r
\r
\r
》全局变量一般不会回收(关闭页面回收)\r
》一般情况下局部变量的值，不用了，会被自动回收掉\r
\r
内存泄漏：程序中分配的内存由于某种原因程序未释放或无法释放叫做内存泄漏\r
\r
- 算法说明\r
\r
堆栈空间分配区别：\r
1.栈（操作系统）：由操作系统自动分配释放函数的参数值、局部变量等，基本数据类型放到栈里面。\r
2.堆（操作系统）：一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。复杂数据类型放到堆里面。\r
\r
\r
·引用计数 (不再使用)\r
IE采用的引用计数算法，定义“内存不再使用”，就是看一个对象是否有指向它的引用，没有引用了就回收对象\r
算法：\r
1. 跟踪记录被引用的次数\r
2. 如果被引用了一次，那么就记录次数1，多次引用会累加++\r
3. 如果减少一个引用就减1-\r
如果引用次数是0，则释放内存\r
\r
拓展-JS垃圾回收机制-算法说明\r
下面介绍两种常见的浏览器垃圾回收算法：引用计数法和标记清除法\r
·标记清除法\r
现代的浏览器已经不再使用引用计数算法了。\r
现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。\r
核心：\r
1．标记清除算法将“不再使用的对象”定义为“无法达到的对象”。\r
2.就是从根部（在JS中就是全局对象）出发定时扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的。\r
3.那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。\r
\r
## 闭包\r
\r
1.5闭包\r
目标：能说出什么是闭包，闭包的作用以及注意事项\r
概念：一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域\r
简单理解：闭包=内层函数+外层函数的变量\r
先看个简单的代码：\r
\r
## 变量提升\r
\r
- 是一种缺陷\r
\r
- 只是提升当前作用域内的最前面 \r
\r
- 只提升声明，不提示赋值`,se=`- 没有命名的函数就是匿名函数\r
\r
- 没有名字的函数无法直接使用\r
\r
- 函数表达式\r
\r
\`\`\`javascript\r
let mo = function (params) {\r
    // 代码\r
}\r
\`\`\`\r
> 常见是和回调函数结合\r
\r
\`\`\`js\r
let mo = (params) => {\r
    // 代码\r
}\r
\`\`\`\r
\r
- 函数调用必须在匿名函数后\r
\r
- 立即执行函数\r
\r
- 立即执行函数必须加分号\`;\`\r
\r
\`\`\`javascript\r
(function () {})()\r
(function () {}())\r
\`\`\``,oe="",ie=`变量this\r
\r
每个函数中都存在this\r
\r
this指向的是函数的调用者`,ae="会把所有函数的声明提升到作用域的最前面",de=`## 基本语法\r
\r
- 没有动态参数\r
\r
- 箭头函数不会创建自己的this，它只会从自己的作用域链的上一层沿用this。\r
\r
\`\`\`js\r
\r
const getData = (mo) => {\r
    console.log(mo);\r
}\r
\r
\`\`\`\r
\r
- 只有一个形参的时候，小括号可以省略\r
\r
\`\`\`js\r
const getData = mo => {\r
    console.log(mo);\r
}\r
\r
\`\`\`\r
- 只有一行代码时，可以省略大括号，而且不需要return 直接返回结果\r
\r
\`\`\`js\r
const getData = mo => console.log(mo);\r
\`\`\`\r
\r
## 直接返回对象\r
\r
\`\`\`js\r
const getData = mo => ({name:mo}) // 因为对象的{}和函数的{}冲突，需要用()包裹\r
\`\`\``,le=`- 主要用于初始化对象的函数\r
\r
- 两个约定\r
1. 函数名以大写字母开头\r
2. 使用new来执行\r
\r
## 实例成员 静态成员\r
\r
通过构造函数创建的对象，叫做实例对象\r
在实例对象中的属性和方法叫做实例成员\r
\r
构造函数内本身的属性，为静态属性，本身的方法，叫静态方法\r
\r
## 原型对象\r
\r
- 公共的属性放在构造函数内\r
\r
- 公共的方法放在原型\r
\r
## 原型继承\r
\r
## 原型链\r
\r
`,ge=`## 改变this指向\r
\r
- call()\r
\r
- apply()\r
\r
- bind()`,pe="- DOM（Document Object Model - 文档对象模型）是用来呈现以及与任意 `HTML` 或 `XML`文档交互的 `API`\r\n- DOM 是浏览器提供的一套专门用来操作网页内容的功能 \r\n- DOM 树 就是 html 界面的元素的嵌套关系",me=`- 获取DOM元素，也称为获取DOM对象\r
\r
## 通过CSS选择器 <Badge type='warning'>推荐</Badge>\r
\r
\`\`\`js\r
// 选择一个\r
document.querySelector('css选择器')      //返回（获取）的是一个对象\r
// 选择多个\r
document.querySelectorAll('css选择器')   //返回（获取）的是一个数组\r
\`\`\`\r
- **<small>注意\`querySelectorAll\`方法获取的是伪数组，不能执行push()等数组方法</small>**\r
\r
<br/>\r
\r
<br/>\r
\r
> 实例 - class选择器\r
\r
::: code-group\r
\r
\`\`\`js [JS代码]\r
let my_name = document.querySelector('.my_name')\r
\`\`\`\r
\r
\`\`\`html [H5页面]\r
<div class="my_name">momo</div>\r
\`\`\`\r
\r
<br/>\r
\r
:::\r
\r
> 实例 - id选择器\r
\r
::: code-group\r
\r
\`\`\`js [JS代码]\r
let my_age = document.querySelector('#my_age')\r
\`\`\`\r
\r
\`\`\`html [H5页面]\r
<div id="my_age">18</div>\r
\`\`\`\r
\r
:::\r
\r
\r
## 传统的方式\r
\r
- 具有局限性，不能用\`ul>li\`这样的方式获取，没有 \`querySelector\` 实用\r
\r
\`\`\`js\r
//  通过标签名称获取对应的所有标签\r
document.getElementsByTagName('div')\r
\r
//  通过id\r
document.getElementById('app')\r
\r
//  通过类名\r
document.getElementsByClassName('mybutton')\r
\`\`\``,ce=`## innerText 属性\r
\r
\`\`\`js\r
let box = document.querySelector('.box')\r
\r
box.innerText = 'momo'\r
\r
\`\`\`\r
\r
## innerHTML 属性\r
\r
## 修改属性`,ue=`# 定时器\r
## 间歇函数\r
\r
\`\`\`js\r
// 如果是有名函数，直接写函数名（不用加小括号）\r
\r
setInterval(执行的函数, 间隔时间);\r
\r
// 非要加括号\r
\r
setInterval('Fn()', 1000)\r
\r
\`\`\`\r
> 关闭\r
\r
\`\`\`js\r
\r
let timer = setInterval(()=>{console.log('mo');}, 1000)\r
\r
clearInterval(timer)\r
\r
\`\`\`\r
\r
## 延时函数\r
\r
\`\`\`js\r
let timer = setTimeout(回调函数, 等待的毫秒数);\r
clearTimeout(timer)\r
\`\`\``,he=`::: code-group\r
\r
\`\`\`js [js]\r
let btn = document.querySelector('css选择器')\r
console.log(btn.dateset.my);\r
\`\`\`\r
\r
\`\`\`html\r
\r
<div data-my="momo">111</div>\r
\r
\`\`\`\r
\r
\r
:::`,ve=`# 事件监听\r
\r
> 亦称事件绑定、注册事件。\r
\r
## 事件监听三要数\r
\r
事件源、事件类型、执行函数\r
\r
## 使用\r
\r
\`\`\`js\r
\r
let obj = {获取的DOM对象}\r
\r
obj.addEventListener('事件名称'，要执行的函数)\r
\r
\`\`\`\r
\r
## 点击事件\r
\r
## 键盘事件\r
\r
## 历史版本\r
\r
\`\`\`js\r
let obj = {获取的DOM对象}\r
// 会被后面的相同类型的事件覆盖，addEventListener()可以多次的绑定\r
obj.onclick = function () {\r
    \r
}\r
\r
\`\`\`\r
\r
## 焦点事件`,_e="冒泡与捕获",be="",ye=`\`\`\`js\r
\r
let obj = {页面元素}\r
\r
obj.addEventListener('submit' , function (e) {\r
    e.preventDefault()\r
})\r
\r
\`\`\``,fe="load",we=`\`\`\`js\r
// 得到当前时间\r
let date = new Date()\r
// 得到目标时间\r
let date_target = new Date('2020-01-01 12:00:00')\r
\`\`\`\r
\r
## 时间戳\r
\r
\`\`\`js\r
// 得到当前时间\r
let date = new Date()\r
// 得到当前的时间戳\r
date.getTime()\r
\r
// 或者\r
\r
date.now()\r
\r
// 或者\r
\r
let date = +new Date()\r
\r
\`\`\``,je="",ke="",xe="window是顶级对象",ze="",Be="",qe="```js\r\n\r\nwindow.location\r\n\r\n```",Se=`> 数据以字符串类型保存\r
\r
## 基本用法\r
\r
\`\`\`js\r
// 存数据\r
localStorage.setItem(键，键值)\r
\r
// 获取数据\r
localStorage.getItem(键名)\r
\`\`\`\r
\r
\r
\r
## 相关流程 \r
\r
\`\`\`js \r
// 装成字符串json文件\r
JOSN.stringify\r
\`\`\`\r
\r
\`\`\`js \r
// json转\r
JOSN.parse\r
\`\`\`\r
\r
`,Te="```js\r\n\r\nconst mo = /表达式/\r\nmo.test(检测的字符串)   //返回布尔值\r\nmo.exec(检测的字符串)   //返回数组\r\n```",Ee=`## 边界符\r
\`^\`以什么开头\r
\`$\`以什么结尾\r
## 量词\r
\r
{n} 重复n次\r
{n,} 重复n次或更多\r
{n,m} 重复n到次（逗号前后不能有空格）\r
\r
## 字符类\r
\r
[abc] \r
\r
[a-z]\r
\r
## 预定义\r
就是常见的模式的简写\r
\r
## 修饰符\r
\r
\`\`\`js\r
const mo = /表达式/修饰符\r
// i 忽略大小写\r
// g 找到全局中所有匹配的项\r
\`\`\`\r
\r
## 替换\r
\r
\`\`\`js\r
\r
str.replace(/正则表达式/,'替换的文本')\r
console.log();\r
\r
\`\`\``,Pe="",Oe="",Ce=`## 简介\r
\r
> 生成随机数`,Fe=`## 安装\r
\r
\`\`\`shell\r
npm i axios\r
\`\`\`\r
\r
## 基本使用\r
\r
\`\`\`javascript\r
import { axios } from "axios";\r
\`\`\`\r
\r
\`\`\`javascript\r
const axios = require('axios');\r
\r
// 向给定ID的用户发起请求\r
axios.get('/user?ID=12345')\r
  .then(function (response) {\r
    // 处理成功情况\r
    console.log(response);\r
  })\r
  .catch(function (error) {\r
    // 处理错误情况\r
    console.log(error);\r
  })\r
  .finally(function () {\r
    // 总是会执行\r
  });\r
\r
// 上述请求也可以按以下方式完成（可选）\r
axios.get('/user', {\r
    params: {\r
      ID: 12345\r
    }\r
  })\r
  .then(function (response) {\r
    console.log(response);\r
  })\r
  .catch(function (error) {\r
    console.log(error);\r
  })\r
  .finally(function () {\r
    // 总是会执行\r
  });  \r
\r
// 支持async/await用法\r
async function getUser() {\r
  try {\r
    const response = await axios.get('/user?ID=12345');\r
    console.log(response);\r
  } catch (error) {\r
    console.error(error);\r
  }\r
}\r
\`\`\``,De=`---\r
title: 'JavaScript'\r
cover: 'javascript'\r
desc: '个人学习 JavaScript 产生的碎片化笔记，目前在积极整理中。'\r
---`,Ie="",Ae=`\r
![](https://raw.githubusercontent.com/hengqianfan/nCover/refs/heads/main/repo/nestjs.png)\r
\r
https://docs.nestjs.com/\r
\r
## 已刷课程\r
\r
- 【Node.js框架之Nest JS基础学习】 https://www.bilibili.com/video/BV14fDGYUEip/?p=2&share_source=copy_web&vd_source=2054f2777a85b4fcf0ba8997a3b25bd9\r
\r
- https://www.bilibili.com/video/BV1LEtHeEEik?spm_id_from=333.788.videopod.episodes&vd_source=313c2d1fcdb029e7be4f0528a5b20eb9\r
\r
## 开发环境\r
\r
- node\r
\r
- VSC \r
\r
用 nvm 管理 node 版本\r
\r
https://github.com/coreybutler/nvm-windows\r
\r
\r
https://www.bilibili.com/video/BV14fDGYUEip?spm_id_from=333.788.player.switch&vd_source=313c2d1fcdb029e7be4f0528a5b20eb9&p=6\r
\r
\r
\r
https://www.bilibili.com/video/BV12p4y1Z7UR/?spm_id_from=333.337.search-card.all.click&vd_source=313c2d1fcdb029e7be4f0528a5b20eb9\r
\r
\r
\r
https://www.bilibili.com/video/BV1NG41187Bs/?spm_id_from=333.337.search-card.all.click&vd_source=313c2d1fcdb029e7be4f0528a5b20eb9\r
\r
\r
https://www.bilibili.com/video/BV1rP4y1u7BJ/?spm_id_from=333.1387.collection.video_card.click&vd_source=313c2d1fcdb029e7be4f0528a5b20eb9\r
\r
大佬的博客：\r
https://lijing-2008.gitlab.io/coderli-vitepress/`,Me=`## 安装\r
\r
- 安装脚手架\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm i -g @nestjs/cli\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm i -g @nestjs/cli\r
\`\`\`\r
\r
:::\r
\r
\r
\r
## 创建项目\r
\r
- 请使用自定义自己的项目名称\r
\r
\`\`\`shell\r
nest new [project-name]\r
\`\`\`\r
\`\`\`shell\r
nest new MyNestProject\r
\`\`\`\r
一般是搭建后端，我会这样\r
\r
\`\`\`shell\r
nest new server\r
\`\`\`\r
\r
- 会让你选择自己的包管理器（不懂就用默认）\r
\r
## 项目结构\r
\r
## 启动项目\r
\r
\r
\r
\`\`\`shell\r
npm run start:dev\r
\`\`\`\r
\r
\r
## orm\r
\r
`,Ge=`::: danger <Badge type='warning'>温馨提示</Badge>\r
本部分内容是将，**网络请求** 的相关知识集合在一起，进行整理和归纳   \r
包括：\r
- axios \r
:::`,Ne="",Le="",Je="web服务器",Re=`## 1. centOS\r
\r
\r
## 1.1 下载\r
\r
\`\`\`shell\r
sudo yum install nginx -y\r
\`\`\`\r
\r
## 1.2 运行并设置自启\r
\r
- 启动 Nginx\r
\r
\r
\`\`\`shell\r
sudo systemctl start nginx\r
\`\`\`\r
\r
- 设置开机自启\r
\r
\`\`\`shell\r
sudo systemctl enable nginx\r
\`\`\``,Ue="",Ve=`\r
\r
- 开源的JS的运行环境\r
\r
node是一种运行环境，它让js更多功能  \r
\r
\r
## 参考课程\r
\r
::: danger  <Badge type='warning'>重要警示</Badge>\r
\r
- 以下课程与本人毫无关系，唯一的关系：**我是这些视频的受益者，因为我学到了知识**\r
\r
- 真心地感谢每一个做免费教程的个人、组织。\r
\r
- 无论是出于实现自我价值，还是卖机构精品课，你们都为社会做出了贡献\r
\r
:::\r
\r
::: tip 课程：尚硅谷的NODE基础课\r
\r
| | |\r
|---|---|\r
|\`视频名称\`| <i class="iconfont icon-bilibili"></i> [尚硅谷 **Node.js** 零基础视频教程，nodejs新手到高手](https://www.bilibili.com/video/BV1gM411W7ex/?share_source=copy_web&vd_source=208ad8437d7a696e8bb3807400e31301)|\r
| \`播放平台\` |Bilibili|\r
| \`全部时长\` |18小时+|\r
|\`课程评价\`|属于质量比较高的教程视频，没有灌水，讲解也是到位。|\r
\r
\r
\r
:::`,Xe=`## 1. 下载与安装\r
\r
![img](/image/202402180030.png)\r
\r
---\r
\r
💡 **官网地址**： [enter](https://nodejs.org/en){target='_blank'}\r
\r
## 2. 开放脚本权限\r
\r
> 使用管理员权限的 \`shell\` 选择 Y 或者 A\r
\r
\`\`\`shell\r
set-ExecutionPolicy RemoteSigned\r
\`\`\`\r
\r
## 3. 更换镜像源\r
\r
\`\`\`shell\r
npm config set registry https://registry.npmmirror.com\r
\`\`\`\r
\r
## 4. 必装的全局包\r
\r
\`\`\`shell\r
npm i nodemon -g\r
\`\`\`\r
\r
\`\`\`shell\r
npm i pnpm -g\r
\`\`\``,Qe=`## 打开命令行\r
\r
> win + R \r
\r
## 命令的结构\r
\r
命令的名称 + 参数\r
\r
## 常用命令\r
\r
|含义|指令|\r
|---|---|\r
|切换盘符|\`C:\` 、 \`D:\`|\r
|进入目录（文件夹）|\`cd ./文件夹名\`|\r
|查看目录内容清单|\`dir\`|`,We=`- 不能使用BOM和DOM的api\r
\r
- 顶级对象\r
\r
不再是 js 中的 window\r
\r
而是 global / globalThis\r
\r
- buffer`,He=`# buffer\r
\r
- 缓冲器\r
\r
## 创建 \r
\r
### alloc\r
\r
\`\`\`js\r
\r
let buf = Buffer.alloc(10)\r
\r
\`\`\`\r
\r
### allocUnsafe\r
\r
### from `,Ye=`## 0. 前言\r
::: warning <Badge type='danger'>提示</Badge>\r
\r
---\r
\r
  **一般我们常用的 \`node\` 是最新的LTS版本 ，但某些时候我们需要安装不同版本得 \`node\`，这个时候，我们需要进行 \`node\` 的版本管理**\r
\r
- 查看当前的node版本\r
\r
\r
\`\`\`sh \r
node -v\r
\`\`\`\r
\r
> <small>① 如果没安装\`nodejs\`就别试了，通过nvm安装后再测试</small>  \r
> <small>② 如果安装了\`nodejs\`建议先卸载它，不然可能会冲突</small>\r
\r
:::\r
\r
\r
\r
\r
\r
通过 nvm 管理 node 的版本\r
\r
## 1. 下载 nvm\r
\r
下载这个文件 👉\`nvm-setup.exe\`\r
\r
\`下载地址\` :  [\`enter\`](https://github.com/coreybutler/nvm-windows/releases){target="_blank"} <Badge type='info'>Github</Badge>  \r
\r
<zo-img momo='/image/202408140025.png'></zo-img>\r
\r
## 2. 安装步骤\r
\r
---\r
\r
- **1️⃣ 同意协议**\r
\r
<br/>\r
\r
<zo-img momo='/image/202408132330.png'></zo-img>\r
\r
---\r
\r
- **2️⃣ 择 nvm 的安装目录**\r
\r
<br/>\r
\r
<zo-img momo='/image/202408132336.png'></zo-img>\r
\r
\r
---\r
\r
- **3️⃣ 选择之后 node 的安装目录** ⭐\r
\r
<br/>\r
\r
<zo-img momo='/image/202408132338.png'></zo-img>\r
\r
---\r
\r
\r
## 3. nvm 的基本操作\r
\r
- 查看nvm的版本\r
\r
\`\`\`sh\r
\r
nvm v\r
\r
\`\`\`\r
\r
- 其他\r
\r
\`\`\`sh\r
\r
# 显示已经安装的nodejs版本\r
nvm list\r
# 或者简写\r
nvm ls\r
# 显示可安装的nodejs版本\r
nvm list available\r
\r
# 安装指定版本 node\r
nvm install [version]\r
# 卸载指定版本 node\r
nvm uninstall [version]\r
# 使用指定版本 node\r
nvm use [version]\r
\r
# 最后记得打开，不然node可能会报错\r
nvm on\r
# 如果需要关闭\r
nvm off\r
\r
\r
\`\`\`\r
\r
\r
\`nvm install [version]\` -> \`nvm on\``,Ke=`\r
::: danger <Badge type='warning'>提示信息</Badge>\r
\r
- \`npm\` 是跟随 \`node\` 一起安装的，不需要再额外安装它  \r
- 查看是否已安装 \`npm\` ，命令行输入  \r
\`\`\`shell\r
npm -v\r
\`\`\`\r
- 若未安装 \`node\` , 参考前面 \`node\` 的安装篇\r
\r
- npm 以外的包管理工具是通过 npm 安装 😂 额、因为其他包管理的工具也是包\r
\r
::: code-group\r
\r
\`\`\`shell [pnpm]\r
npm i pnpm -g\r
\`\`\`\r
\r
\`\`\`shell [cnpm]\r
npm i cnpm -g\r
\`\`\`\r
\`\`\`shell [yarn]\r
npm i yarn -g\r
\`\`\`\r
:::\r
\r
\r
\r
\r
\r
\r
## 查看包管理工具版本\r
::: code-group\r
\r
\r
\`\`\`shell [npm]\r
npm -v\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm -v\r
\`\`\`\r
\r
:::\r
\r
\r
## 查看源地址\r
\r
::: code-group\r
\r
\r
\`\`\`shell [npm]\r
npm config get registry\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm config get registry\r
\`\`\`\r
\r
:::\r
\r
\r
## 改为官方源地址\r
\r
\r
\r
::: code-group\r
\r
\r
\`\`\`shell\r
npm config set registry https://registry.npmjs.org\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm\r
\`\`\`\r
\r
:::\r
\r
\r
## 改为淘宝源\r
\r
> **✔新淘宝源**\r
\r
\`\`\`shell\r
npm config set registry https://registry.npmmirror.com\r
\`\`\`\r
<br/>\r
\r
> ❌旧淘宝源（已停止维护） <Badge type='danger'>请勿再使用下述地址</Badge>\r
\r
\`\`\`shell\r
npm config set registry https://registry.npm.taobao.org\r
\`\`\`\r
## 一键安装\r
\r
\r
::: code-group\r
\r
\r
\`\`\`shell [npm]\r
npm i \r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm i \r
\`\`\`\r
\r
:::\r
\r
## 安装指定包\r
\r
::: code-group\r
\r
\r
\`\`\`shell [npm]\r
npm i \r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm add  \r
\`\`\`\r
\r
:::\r
\r
## 参数解读\r
\r
- 生产环境\r
\r
\`\`\`shell\r
npm i \r
# 等价于\r
npm i -S\r
# 等价于\r
npm i --save\r
\`\`\`\r
- 仅开发环境\r
\r
\`\`\`shell\r
npm i \r
# 等价于\r
npm i -D\r
# 等价于\r
npm i --save-dev\r
\`\`\`\r
\r
> 卸载（删除）包\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm r\r
# 等价于\r
npm remove\r
\`\`\`\r
\`\`\`shell [pnpm]\r
pnpm remove\r
\`\`\`\r
\r
\r
:::\r
\r
\r
## 查看全局包\r
\r
\`\`\`shell\r
npm ls -g\r
\`\`\`\r
`,Ze="```shell\r\nnpm login\r\n```",$e=`\r
\r
::: danger <Badge type='warning'>重要的提示</Badge>\r
\r
**使用每一个模块的语法（函数方法）前，需要先在JS文件的头部，导入该模块**\r
\r
:::\r
\r
\r
::: code-group\r
\r
\`\`\`js [演示1]\r
// 如果要使用文件模块的语法（函数）\r
\r
// 1.先导入文件模块（fs)\r
// 提示: 有些项目中这种导入语法不被支持, 可参考演示2\r
const fs = require('fs')\r
\r
\r
// 2.然后，再使用fs模块的方法\r
fs.writeFile('./test.txt', 'hello momo',err => {\r
    if(err){\r
        console.log('出错了');\r
        return\r
    }\r
    console.log('OK');\r
})\r
\r
// 这段代码的含义是在该JS文件的文件夹下新建一个名为【text.txt】的文件\r
// 里面的内容是【hello momo】\r
\`\`\`\r
\r
\`\`\`js [演示2]\r
// 如果要使用文件模块的语法（函数）\r
\r
// 1.先导入文件模块（fs)\r
import fs from 'node:fs'\r
\r
\r
// 2.然后，再使用fs模块的方法\r
fs.writeFile('./test.txt', 'hello momo',err => {\r
    if(err){\r
        console.log('出错了');\r
        return\r
    }\r
    console.log('OK');\r
})\r
\r
// 这段代码的含义是在该JS文件的文件夹下新建一个名为【text.txt】的文件\r
// 里面的内容是【hello momo】\r
\`\`\`\r
\r
:::\r
\r
\r
## 补充知识 \r
\r
- 使用新语法导入JSON文件会自动将字符串转换为数据\r
\r
- 一般是\`JOSN.parse\`进行解析\r
\r
\`\`\`js\r
import data from '/articlesDatabase.json'\r
\r
\`\`\``,rt=`\r
## writeFile()\r
\r
- **默认是覆盖写入，如果原文件中有内容，会被覆盖。**  \r
\r
\`\`\`js\r
\r
fs.writeFile('./test.txt', 'hello momo',err => {\r
    if(err){\r
        console.log('no no no');\r
        return\r
    }\r
    console.log('OK');\r
})\r
\r
\`\`\`\r
\r
- 填写参数，阻止覆盖写入（即是实现追加写入）\r
\r
\`\`\`js\r
\r
fs.writeFile('./test.txt', 'hello momo', {flag:'a'} ，err => {\r
    if(err){\r
        console.log('no no no');\r
        return\r
    }\r
    console.log('OK');\r
})\r
\r
\`\`\`\r
\r
\r
\r
## writeFileSync()\r
\r
\`\`\`js\r
\r
fs.writeFileSync('./test.txt', 'hello momo',err => {\r
    if(err){\r
        console.log('no no no');\r
        return\r
    }\r
    console.log('OK');\r
})\r
\r
\`\`\`\r
\r
## appendFile()\r
\r
- fs 的追加写入\r
\r
- 换行加\`\\r\\n\`\r
\r
\`\`\`js\r
\r
fs.appendFile('./test.txt', '追加的内容',err => {\r
    if(err){\r
        console.log('no no no');\r
        return\r
    }\r
    console.log('OK');\r
})\r
\r
\`\`\`\r
\r
## appendFileSync()\r
\r
- fs 的追加写入\r
\r
\`\`\`js\r
\r
fs.appendFileSync('./test.txt', '追加的内容',err => {\r
    if(err){\r
        console.log('no no no');\r
        return\r
    }\r
    console.log('OK');\r
})\r
\r
\`\`\`\r
\r
## 流式写入\r
\r
\`\`\`js\r
\r
const fs = require('fs')\r
\r
const ws = fs.createWriteStream('./test.txt')\r
\r
ws.write('想要写入的内容')\r
\r
ws.close()\r
\r
\`\`\``,nt=`\`\`\`js\r
const fs = require('fs')\r
// 参数一：错误信息  参数二：读取的数据\r
fs.readFile('./test.txt', ( err, data ) => {\r
    if(err){\r
        console.log('no no no');\r
        return\r
    }\r
    console.log(data.toString());\r
})\r
\r
\`\`\`\r
\r
## createReadStream()\r
\r
\`\`\`js\r
const fs = require('fs')\r
// 创建读取流对象\r
const rs = fs.createReadStream()\r
// 绑定 data 事件\r
rs.on('data', chunk => {\r
    // 每次读取 64KB的数据\r
    console.log(chunk);\r
})\r
\r
rs.on('end', ()=>{\r
    console.log('读取完成');\r
})\r
\r
\`\`\`\r
\r
## 案例文件复制\r
\r
\`\`\`js\r
const fs = require('fs')\r
\r
const rs = fs.createReadStream('./test.mp4')\r
\r
const ws = fs.createWriteStream('./test2.mp4')\r
\r
rs.on('data', chunk => {\r
    ws.write(chunk)\r
})\r
\r
// 或者\r
\r
rs.pipe(ws)\r
\r
\r
\`\`\``,et=`\`\`\`js\r
\r
const fs = require('fs')\r
\r
fs.rename('原文件路径', '新路径', (err)=>{\r
\r
})\r
\r
\`\`\`\r
\r
重命名和移动的原理都是修改路径来实现`,tt=`\`\`\`js\r
\r
const fs = require('fs')\r
\r
fs.unlink('删除的文件路径', (err)=>{\r
\r
})\r
\r
\`\`\`\r
\r
- rm\r
\r
\`\`\`js\r
\r
const fs = require('fs')\r
\r
fs.rm('删除的文件路径', (err)=>{\r
\r
})\r
\r
\`\`\``,st=`## 创建文件夹\r
\`\`\`js\r
\r
const fs = require('fs')\r
\r
fs.mkdir('文件夹路径', err => {\r
\r
})\r
\r
\`\`\`\r
- 递归创建\r
\r
\`\`\`js\r
\r
const fs = require('fs')\r
\r
fs.mkdir('a/b/c', {recursive: true}, err => {\r
\r
})\r
\r
\r
\`\`\`\r
\r
## 文件夹读取\r
\r
\`\`\`js\r
const fs = require('fs')\r
\r
fs.readdir('文件夹路径', (err , data)=>{\r
    console.log(data);\r
} )\r
\r
\`\`\`\r
\r
## 删除文件夹\r
\r
\`\`\`js\r
const fs = require('fs')\r
// 只能删除空文件夹\r
fs.rmdir('文件夹路径', (err)=>{\r
} )\r
\r
// 递归删除 也不推荐使用\r
fs.rmdir('文件夹路径', {recursive:true} , (err)=>{\r
} )\r
// 推荐使用\r
fs.rm()\r
\r
\`\`\``,ot=`\`\`\`js\r
const fs = require('fs')\r
\r
fs.stat('文件路径', ( err,  data ) => {\r
\r
})\r
\r
\`\`\``,it=`\`\`\`js\r
\r
// 拼接规范的路径\r
\r
const path = require('path')\r
\r
path.resolve(__dirname,'index.html')\r
\r
\`\`\`\r
\r
## 获取操作系统下的路径分割符号\r
\r
\`\`\`js\r
const path = require('path')\r
\r
path.sep()\r
\r
\`\`\`\r
\r
## 解析路径信息\r
\r
\`\`\`js\r
const path = require('path')\r
\r
let str = '一个文件的路径'\r
// 返回一个对象（文件路径、文件名称、文件后缀）\r
path.parse(str)\r
// 获得文件名\r
path.basename(str)\r
// 获得所在的文件夹路径\r
path.dirname(str)\r
// 获得文件类型（文件后缀）\r
path.extname(str)\r
\r
\`\`\`\r
\r
\r
`,at=`## 请求头\r
\r
## 状态码\r
\r
> 全部的状态码 [enter](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/100){target="_blank"}\r
\r
| 状态码 |状态描述| 含义| \r
|---|---|---|\r
|200|OK|请求成功|\r
|403|Forbidden|禁止请求|\r
|404|Not Found|找不到资源|\r
|503|Internal Server Error|服务器内部错误|\r
\r
## 端口\r
\r
0-65535\r
\r
端口是应用程序的数字标识\r
主要作用是实现了不同主机应用程序之间的通信\r
\r
80 http\r
443 https\r
\r
## 浏览器查看请求报文`,dt=`## 简易示例\r
\r
## 创建服务\r
\r
\`\`\`js\r
// 导入 http 模块\r
const http = require('http')\r
\r
// 创建服务对象\r
const server = http.createServer((req,res)=>{\r
    // 如果中文乱码，设置如下响应头\r
    // res.setHeader('content-type','text/html;charset=utf-8')\r
    res.end('已收到请求')\r
})\r
\r
// 端口监听，服务启动\r
server.listen(8080,()=>{console.log('启动成功');})\r
\r
\`\`\`\r
\r
## 请求报文处理\r
\r
\`\`\`js\r
const server = http.createServer((req,res)=>{\r
    // 获取 请求的方法\r
    console.log(req.method);\r
    // 获取 URL\r
    console.log(req.url);\r
    // 获取 http协议的版本\r
    console.log(req.httpVersion);\r
    // 获取 请求头\r
    console.log(req.headers);\r
    res.end('已收到请求')\r
})\r
\`\`\`\r
\r
- 请求体的处理\r
\r
\`\`\`js\r
const server = http.createServer((req,res)=>{\r
    // 声明变量\r
    let body = ''\r
    // 事件绑定、事件监听\r
    req.on('data', (chunk)=>{\r
        body += chunk.toString()\r
    })\r
    req.end('end',()=>{\r
        console.log(body);\r
\r
        res.end('已收到请求')\r
    })\r
    \r
})\r
\`\`\`\r
- 请求路径与查询字符串 (通过url模块)\r
\r
\`\`\`js\r
const http = require('http')\r
// 导入 url模块\r
const url = require('url')\r
\r
const server = http.createServer((req,res)=>{\r
    // 第二个参数 true 是让查询字符串转为对象 不需要可以不填写\r
    let res_url = url.parse(req.url,true)\r
    // 这是解析后是一个含有各种信息的对象\r
    console.log(res_url);\r
    // 路径\r
    let pathname = res_url.pathname\r
    // 查询字符串（关键字）\r
    let keyword = res_url.query.keyword\r
})\r
\`\`\`\r
\r
- 请求路径与查询字符串 (通过URL)\r
\r
\`\`\`js\r
const http = require('http')\r
\r
const server = http.createServer((req,res)=>{\r
    let url = new URL(req.url,'http://127.0.0.1')\r
        // 路径\r
    let pathname = url.pathname\r
    // 查询字符串（关键字）\r
    let keyword = url.searchParams.get('keyword')\r
})\r
\`\`\`\r
\r
## 响应报文设置\r
\r
\`\`\`js\r
const http = require('http')\r
\r
const server = http.createServer((req,res)=>{\r
    // 设置响应状态码 默认200\r
    res.statusCode = 200\r
    // 响应状态描述 但是一般不会特意设置它，默认即可\r
    res.statusMessage = '随意'\r
    // 设置响应头 自定义响应头不能使用中文\r
    // res.setHeader(key,value) \r
    res.setHeader('content-type','text/html;charset=utf-8')\r
    // 设置多个同名的响应头\r
    res.setHeader('test',[a,b,c])\r
    // 响应体设置\r
    res.write('part1')   \r
    res.write('part2')   \r
    // 如果已经使用write,不建议再在end()里面传参\r
    // end 一次回调逻辑中只允许存在一个执行（可以使用多个end组成选择的逻辑,但是不能存在同时执行的逻辑）\r
    res.end('')\r
\r
})\r
\`\`\`\r
\r
\r
## 静态资源服务\r
\r
\`\`\`js\r
const http = require('http')\r
const fs = require('fs')\r
\r
const server = http.createServer((req,res)=>{\r
    let {pathname} = new URL(req.url,'http://127.0.0.1')\r
    let root = __dirname + '/public'\r
    let filePath = root + pathname\r
    fs.readFile(filePath,(err,data)=>{\r
        if(err){\r
            res.statusCode = 500\r
            res.end('失败')\r
        }\r
        res.end(data)\r
    })\r
})\r
\`\`\``,lt="",gt=`## 导出模块（暴露模块）\r
\r
> 参考写法1\r
\r
\`\`\`js\r
function test(mo) {\r
    console.log('我是测试方法');\r
}\r
module.exports = test\r
\`\`\`\r
\r
> 参考写法2\r
\r
\r
\`\`\`js\r
function test_one(mo) {\r
    console.log('我是测试方法one');\r
}\r
\r
function test_two(mo) {\r
    console.log('我是测试方法two');\r
}\r
\r
module.exports = { test_one , test_two }\r
\`\`\`\r
\r
> 参考写法3\r
\r
\r
\`\`\`js\r
function test_one(mo) {\r
    console.log('我是测试方法one');\r
}\r
\r
function test_two(mo) {\r
    console.log('我是测试方法two');\r
}\r
\r
module.exports = { test_one , test_two }\r
\`\`\`\r
> 参考写法4\r
\r
\`\`\`js\r
function test_one(mo) {\r
    console.log('我是测试方法one');\r
}\r
\r
function test_two(mo) {\r
    console.log('我是测试方法two');\r
}\r
\r
exports.test_one = test_one\r
\r
exports.test_two = test_two\r
\r
\`\`\``,pt="",mt=`> 安装\r
\r
::: code-group\r
 \r
\`\`\`shell [npm]\r
npm i -g node-windows\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm i -g node-windows\r
\`\`\`\r
 \r
:::\r
\r
> 新建一个安装文件nw.js\r
\r
\`\`\`javascript\r
let Service = require('node-windows').Service;\r
\r
let svc = new Service({\r
name: 'ele4React',    //服务名称\r
        description: 'ele4React', //描述\r
        script: 'E:/mykoa/index.js' //nodejs项目要启动的文件路径\r
    });\r
\r
    svc.on('install', () => {\r
        svc.start();\r
    });\r
\r
    svc.install();\r
\`\`\`\r
\r
> 新建一个卸载文件nw-uninstall.js\r
\r
\`\`\`javascript\r
    let Service = require('node-windows').Service;\r
    let svc = new Service({\r
        name: 'ele4React',    //服务名称\r
        description: 'ele4React', //描述\r
        script: 'E:\\mykoa\\index.js' //nodejs项目要启动的文件路径\r
    });\r
\r
  svc.on('uninstall',function(){\r
      console.log('Uninstall complete.');\r
      console.log('The service exists: ',svc.exists);\r
    });\r
\r
  svc.uninstall();\r
\`\`\`\r
\r
> 执行命令\r
\r
\`\`\`shell\r
node nw.js //安装服务\r
node nw-uninstall //卸载服务\r
\`\`\``,ct="",ut=`## npm 无法安装 sqlite3 \r
\r
解决办法：开全局魔法\r
\r
## 中文乱码`,ht="\r\n\r\n\r\n|解释型语言|编译型语言|\r\n|---|---|\r\n|运行时，才被翻译运行|写完代码后，先编译，编译后运行|\r\n| `python` 、 `php` 、 `javasrcipt` | `C语言` 、 `java` 、 `go` |",vt=`\r
\r
## :one: 下载 VScode (VSC)\r
\r
- 代码编辑器，用来编写代码的\r
\r
> 相关笔记 ：[enter](/zo-repo/vscode/00%20简述.md){target="_blank"}\r
\r
\r
`,_t=`## :two: 安装 python (解释器)\r
\r
- 安装教程 ：[enter](https://www.bilibili.com/video/BV1TN411K7sn?p=2&vd_source=e69282b186363aa56c436669fa5b11e8){target="_blank"}\r
\r
- 多版本共存\r
\r
- 官网 ：[enter](https://www.python.org/downloads/){target="_blank"}\r
\r
![](/image/202402271419.png)  \r
\r
![](/image/202402271426.png)  \r
\r
![](/image/202402271436.png)\r
\r
- 环境变量解释\r
\r
> python 有两个环境变量\r
\r
\`\`\`shell\r
D:\\python\\python312\\Scripts\\\r
D:\\python\\python312\\\r
\`\`\`\r
\r
\r
## :three:  虚拟环境搭建\r
\r
\`\`\`shell\r
python -m venv .venv\r
\`\`\`\r
`,bt="```py\r\n# 用井号\r\n```",yt="",ft="```python\r\nname = 'momo'\r\n```",wt="# React",jt=`\r
\r
> 你需要具备\r
\r
- \`HTML\` 、 \`CSS\` 知识\r
\r
- \`Javascript\` 知识\r
\r
- 基本的 \`node.js\` 知识\r
\r
\r
`,kt="## 项目创建\r\n\r\n```shell\r\nnpx create-react-app\r\n```\r\n\r\n> 通常会加上项目的名称\r\n\r\n```shell\r\nnpx create-react-app your_project_name\r\n```\r\n\r\n## 项目启动\r\n\r\n> 根据提示信息，进入项目文件夹中然后启动\r\n\r\n```shell\r\ncd your_project_name\r\n```\r\n\r\n```shell\r\nnpm start\r\n```\r\n\r\n## 数据处理\r\n```shell\r\nnpm i lodash\r\n```\r\n## classnames",xt=`\`\`\`jsx\r
import { useState } from "react";\r
function appp() {\r
    const [value ,setValue] = useState('')\r
    return (\r
        <div>\r
            <input \r
            type="text" \r
            value={value} \r
            onChange={(e)=>setValue(e.target.value)}\r
            />\r
        </div>\r
    )\r
}\r
\`\`\``,zt=`\`\`\`jsx\r
import { useRef } from "react";\r
function appp() {\r
    const inputRef = useRef(null)\r
    const getdom = ()=>{\r
        console.log(inputRef.current);\r
    }\r
    return (\r
        <div>\r
            <input type="text" ref={inputRef}\r
            />\r
        </div>\r
    )\r
}\r
\r
\`\`\``,Bt=`## 父传子\r
\r
1. 父组件传递数值 子组件绑定属性\r
2. 子组件接收数据 props\r
\r
::: info  <Badge type='info'>props</Badge>\r
\r
- props 可以传递任意数据\r
\r
- props 是只读对象，子组件只读取，数据要在父组件中修改\r
:::\r
\r
## 插槽\r
\r
\`\`\`javascript\r
function son(props) {\r
    return (\r
        <div>this is son,{props.children}</div>\r
    )\r
}\r
\r
function appp() {\r
\r
    return (\r
        <div>\r
            <son>\r
                <span>插槽</span>\r
            </son>\r
        </div>\r
    )\r
}\r
\`\`\`\r
\r
\r
## 子传父\r
\r
> 在子组件中调用父组件的函数并传递参数\r
\r
![img](/image/202402141345.png)`,qt="```javascript\r\nconst useEffect(()=>{},[])\r\n```",St=`## 安装\r
\r
::: code-group\r
\r
\`\`\`shell\r
npm i redux --save\r
\`\`\`\r
\r
:::\r
\r
\r
## 示例\r
\r
\`\`\`javascript\r
// 导入脚本\r
import { createStore } from 'redux';\r
\r
// 函数名可自定义\r
function counter(state = 0, action) {\r
  switch (action.type) {\r
  case 'INCREMENT':\r
    return state + 1;\r
  case 'DECREMENT':\r
    return state - 1;\r
  default:\r
    return state;\r
  }\r
}\r
\r
// 创建 Redux store 来存放应用的状态。\r
// API 是 { subscribe, dispatch, getState }。\r
let store = createStore(counter);\r
\r
// 可以手动订阅更新，也可以事件绑定到视图层。\r
store.subscribe(() =>\r
  console.log(store.getState())\r
);\r
\r
// 改变内部 state 惟一方法是 dispatch 一个 action。\r
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行\r
store.dispatch({ type: 'INCREMENT' });\r
// 1\r
store.dispatch({ type: 'INCREMENT' });\r
// 2\r
store.dispatch({ type: 'DECREMENT' });\r
// 1\r
\`\`\``,Tt=`## 安装依赖\r
\r
> react-redux\r
\r
\`\`\`shell\r
npx react-redux\r
\`\`\`\r
\r
> redux toolkit 简化代码书写\r
\r
\`\`\`shell\r
npm i @reduxjs/toolkit react-redux\r
\`\`\`\r
\r
> \r
\r
![img](/image/202402141811.png)`,Et=`# SCSS\r
\r
👇 **重要说明与提示**\r
\r
::: danger <Badge type='warning'>重要说明</Badge>\r
- **\`SCSS\` 简而言之是 \`css\` 的升级版**（不准确，但贴切），它的功能更强大，**本人不想耗费精力去拆开 css 和 scss 二者来做笔记**，笔记以 scss 为主，关于web样式的知识都会整合在这里，**如果你是【求真主义者】，建议谨慎决定是否继续阅览该部分内容，不然可能无法区别，css、scss 之间的差异性**。 \r
<!-- - sass、scss往往是指 -->\r
:::`,Pt="",Ot=`## 在scss文件中导入其他scss文件\r
\r
同级目录下的文件名\r
\r
> 例如一个\`reset.scss\`的文件\r
\r
::: code-group\r
\r
\`\`\`scss[例1]\r
@import "reset.scss"\r
\`\`\`\r
\r
\r
\`\`\`scss[例2]\r
@import "reset"\r
/* 也可以省略后缀名 */\r
\`\`\`\r
\r
:::`,Ct=`## vue 项目中\r
\r
\`vue.config.js\`\r
\r
\`\`\`\r
module.exports = {\r
  css: {\r
    loaderOptions: {\r
      scss: {\r
        additionalData: \`@import "~@/assets/scss/variables.scss";\`\r
      }\r
    }\r
  }\r
};\r
\`\`\``,Ft="",Dt=`::: code-group\r
\r
\`\`\`css [示例1]\r
/* 1. 导入字体 */\r
@font-face {\r
    /* 自定义名称 */\r
    font-family: "zqk英文";\r
    /* 确认引入字体的文件路径 */\r
    src: url("/font/ZQKfreefont.ttf");\r
}\r
/* 2. 使用字体 */\r
.yourdiv{\r
    /* 直接使用 */\r
     font-family: "zqk英文";\r
}\r
\`\`\`\r
\r
\r
\`\`\`css [示例2]\r
\r
@font-face {\r
    font-family: "zqk英文";\r
    src: url("/font/ZQKfreefont.ttf");\r
}\r
\r
.yourdiv{\r
     font-family: "zqk英文";\r
}\r
\`\`\`\r
\r
\r
:::`,It=`https://www.fonts.net.cn/\r
\r
\r
https://www.100font.com/\r
\r
`,At=`<style>\r
    .text1{\r
    background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    color: transparent;\r
    transition: background 0.5s;\r
    font-weight: 800;\r
    font-family: '剑豪体';\r
}\r
</style>\r
\r
# 渐变字体\r
\r
## 示例\r
\r
### 风格01\r
\r
\r
\r
\r
---\r
\r
《 <text class='text1'>我是渐变字体</text> 》\r
\r
---\r
\r
\r
\r
\`源代码\` 👇\r
\r
::: code-group\r
\r
\`\`\`css [有类名]\r
.text{\r
    background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    color: transparent;\r
    transition: background 0.5s;\r
    font-weight: 800;\r
}\r
\`\`\`\r
\r
\`\`\`css [纯享版]\r
    background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    color: transparent;\r
    transition: background 0.5s;\r
    font-weight: 800;\r
\`\`\`\r
\r
:::\r
\r
\r
\r
`,Mt=`\`\`\`css\r
a{\r
    text-decoration-thickness: 10px;\r
    /* 下划线的位置 */\r
    text-decoration-line: underline;\r
    /* 避免和文本重叠 */\r
    text-decoration-skip-ink: all;\r
}\r
\`\`\``,Gt="",Nt=`## 隐藏滚动条\r
\`\`\`css\r
::-webkit-scrollbar {\r
  display: none;\r
}\r
\`\`\`\r
## 滚动条美化\r
\r
\`\`\`css\r
// 美化滚动条\r
::-webkit-scrollbar {\r
  width: 10px;\r
  height: 10px;\r
}\r
\r
::-webkit-scrollbar-track {\r
  width: 6px;\r
  background: rgba(#101F1C, 0.1);\r
  -webkit-border-radius: 2em;\r
  -moz-border-radius: 2em;\r
  border-radius: 2em;\r
}\r
\r
::-webkit-scrollbar-thumb {\r
  background-color: rgba(144,147,153,.5);\r
  background-clip: padding-box;\r
  min-height: 28px;\r
  -webkit-border-radius: 2em;\r
  -moz-border-radius: 2em;\r
  border-radius: 2em;\r
  transition: background-color .3s;\r
  cursor: pointer;\r
}\r
\r
::-webkit-scrollbar-thumb:hover {\r
  background-color: rgba(144,147,153,.3);\r
}\r
\r
\`\`\`\r
\r
\r
`,Lt=`> 清楚默认样式\r
\r
\`\`\`scss\r
*,\r
*:after,\r
*:before {\r
    box-sizing: border-box;\r
\r
    outline: none;\r
}\r
\r
html,\r
body,\r
div,\r
span,\r
applet,\r
object,\r
iframe,\r
h1,\r
h2,\r
h3,\r
h4,\r
h5,\r
h6,\r
p,\r
blockquote,\r
pre,\r
a,\r
abbr,\r
acronym,\r
address,\r
big,\r
cite,\r
code,\r
del,\r
dfn,\r
em,\r
img,\r
ins,\r
kbd,\r
q,\r
s,\r
samp,\r
small,\r
strike,\r
strong,\r
sub,\r
sup,\r
tt,\r
var,\r
b,\r
u,\r
i,\r
center,\r
dl,\r
dt,\r
dd,\r
ol,\r
ul,\r
li,\r
fieldset,\r
form,\r
label,\r
legend,\r
table,\r
caption,\r
tbody,\r
tfoot,\r
thead,\r
tr,\r
th,\r
td,\r
article,\r
aside,\r
canvas,\r
details,\r
embed,\r
figure,\r
figcaption,\r
footer,\r
header,\r
hgroup,\r
menu,\r
nav,\r
output,\r
ruby,\r
section,\r
summary,\r
time,\r
mark,\r
audio,\r
video {\r
    font: inherit;\r
    font-size: 100%;\r
\r
    margin: 0;\r
    padding: 0;\r
\r
    vertical-align: baseline;\r
\r
    border: 0;\r
}\r
\r
article,\r
aside,\r
details,\r
figcaption,\r
figure,\r
footer,\r
header,\r
hgroup,\r
menu,\r
nav,\r
section {\r
    display: block;\r
}\r
\r
body {\r
    line-height: 1;\r
}\r
\r
ol,\r
ul {\r
    list-style: none;\r
}\r
\r
blockquote,\r
q {\r
    quotes: none;\r
\r
    &:before,\r
    &:after {\r
        content: '';\r
        content: none;\r
    }\r
}\r
\r
sub,\r
sup {\r
    font-size: 75%;\r
    line-height: 0;\r
\r
    position: relative;\r
\r
    vertical-align: baseline;\r
}\r
\r
sup {\r
    top: -.5em;\r
}\r
\r
sub {\r
    bottom: -.25em;\r
}\r
\r
table {\r
    border-spacing: 0;\r
    border-collapse: collapse;\r
}\r
\r
input,\r
textarea,\r
button {\r
    font-family: inhert;\r
    font-size: inherit;\r
\r
    color: inherit;\r
}\r
\r
select {\r
    text-indent: .01px;\r
    text-overflow: '';\r
\r
    border: 0;\r
    border-radius: 0;\r
\r
    appearance: none;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
}\r
\r
select::-ms-expand {\r
    display: none;\r
}\r
\r
code,\r
pre {\r
    font-family: monospace, monospace;\r
    font-size: 1em;\r
}\r
\`\`\``,Jt="",Rt=`::: code-group\r
\r
\`\`\`css []\r
.momo{\r
    box-shadow: 2px 2px 5px #a8a8a8,\r
    -2px -2px 5px #ffffff;\r
}\r
\r
\`\`\`\r
\r
:::`,Ut=`\r
## 代码演示 \r
\r
\`\`\`css\r
.grid-container {\r
  // 背景色\r
  background-color: #ffffff;\r
  // 网格样式\r
  background-image:\r
    // 水平线\r
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),\r
    // 垂直线\r
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px);\r
  // 网格间距20px \r
  background-size: 100% 20px, 20px 100%;\r
  // 对齐起点\r
  background-position: 0 0;\r
}\r
\`\`\``,Vt=`\r
\r
::: code-group\r
\r
\r
\r
\`\`\`css [上下]\r
.test{\r
background-image: linear-gradient(180deg, #E02020 0%, #FA6400 17%, #F7B500 33%, #6DD400 50%, #0091FF 67%, #6236FF 83%, #B620E0 100%);\r
}\r
\`\`\`\r
\r
\`\`\`css [左右]\r
.test{\r
background-image: linear-gradient(90deg, #E02020 0%, #FA6400 17%, #F7B500 33%, #6DD400 50%, #0091FF 67%, #6236FF 83%, #B620E0 100%);\r
}\r
\`\`\`\r
\r
:::\r
`,Xt=`::: code-group\r
\r
\`\`\`css []\r
            background: rgba(255, 255, 255, 0.15);\r
            border-radius: 16px;\r
            padding: 30px;\r
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\r
            backdrop-filter: blur(8px);\r
            -webkit-backdrop-filter: blur(8px);\r
            border: 1px solid rgba(255, 255, 255, 0.18);\r
            transition: transform 0.3s ease;\r
\`\`\`\r
\r
:::`,Qt="",Wt='## 数据库管理工具\r\n\r\nheidisql [`👉 enter`](https://www.heidisql.com/download.php?download=portable-64){target="_blank"}  ',Ht="",Yt=`\r
## 介绍\r
\r
1.\`TypeScript\`由微软开发，是基于\`JavaScript\` 的一个扩展语言。  \r
2.\`TypeScript\` 包含了 \`JavaScript\` 的所有内容，即：\`TypeScript\` 是 \`JavaScript\` 的**超集**。  \r
3.\`TypeScript\`增加了：静态类型检查、接口、泛型等很多现代开发特性，因此更适合大型项目的开发。  \r
4.\`TypeScript\` 需要编译为 \`JavaScript\`，然后交给浏览器或其他 \`JavaScript\` 运行环境执行。\r
\r
\r
\r
## 相关教程\r
\r
- **尚硅谷：《禹神：三小时快速上手TypeScript，TS速通教程》**\r
\r
::: details\r
\r
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1906270640&bvid=BV1YS411w7Bf&cid=1646924450&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>\r
\r
\r
- 中篇: 50:00 - end 没看懂\r
\r
::: \r
\r
\r
## ts的编译\r
\r
- 命令行编译\r
\r
\`\`\`shell\r
npm i typescript -g\r
\`\`\`\r
\r
- 自动化编译\r
\r
\r
\r
复习类相关的知识\r
\r
属性修饰符\r
\r
- public \r
\r
内部、 子类 、 外部\r
\r
- protected\r
\r
内部 、 子类\r
\r
\r
- private \r
\r
内部\r
\r
\r
- readonly\r
\r
只读\r
\r
\r
接口 - interface \r
\r
只能定义格式，不能包含任何实现\r
\r
\r
- 定义类\r
\r
\`\`\`ts\r
// PersonInterface 接口\r
interface PersonInterface {\r
    name: string \r
    age: number\r
    speak(n:number):void \r
}\r
\r
class Person implements PersonInterface{\r
    constructor(\r
        public name:string,\r
        public age :number,\r
    ) {}\r
    speak( n:number):void{\r
\r
    }\r
}\r
\`\`\`\r
\r
- 定义对象\r
\r
\r
\`\`\`ts\r
interface Userinterface {\r
    name:string\r
    readonly gender:string \r
    age?:number \r
    run:(N:number) => void\r
}\r
\r
const user:Userinterface = {\r
\r
}\r
\`\`\`\r
\r
\r
- 定义函数\r
\r
\r
## 装饰器\r
\r
本质上是一个特殊的函数`,Kt=`# TypeScript\r
\r
- typescript 是 javascript 的超集\r
\r
> 安装\r
\r
\`\`\`shell\r
npm i typescript -g\r
\`\`\`\r
\r
> 查看已安装的版本\r
\r
\`\`\`shell\r
tsc -v\r
\`\`\``,Zt="## 初始化ts项目\r\n\r\n```shell\r\ntsc -init\r\n```\r\n\r\n```ts\r\n// 初始赋值会推导数据类型，且后续该类型不能改变\r\nlet str = 'koko'\r\n```\r\n\r\n## 指定输出目录\r\n\r\n- 根目录中新建`js`文件夹用来存放编译好的js代码\r\n\r\n- 进入`tsconfig.json`文件中\r\n\r\n- `ctrl+ F`:`'outDir'`\r\n\r\n- 指定输出目录为 `./js`\r\n\r\n",$t="8 + 6",rs=`\`\`\`ts\r
let mo1:number = 0\r
let mo2:string = ''\r
let mo3:boolen = true\r
let mo4:undefined = undefined\r
let mo4:null = null\r
\`\`\`\r
\r
### any\r
\r
\`\`\`ts\r
// 可以限定返回值\r
function count(x:number,y:number):number{\r
    return x + y\r
}\r
\`\`\`\r
\r
 新类型\r
\r
 - any \r
\r
\`\`\`ts\r
// 显式类型声明\r
let a:any \r
// 隐式类型声明(默认为any)\r
let b \r
\`\`\`\r
\r
any 可能会破坏类型声明,因为它可以作为赋值,unknow不能\r
 - unknown\r
\r
 - never\r
\r
 不能有返回值\r
\r
 - void \r
\r
- 函数返回值为空,隐式返回值\`undefined\`,调用者也不能依赖返回值做任何操作\r
\r
 - tuple\r
\r
元组\r
\r
是特殊的数组类型\r
\r
\`\`\`ts\r
let arr : [string ,number]\r
// 数组里可包含任意多个字符串,包括0个\r
let arr2 :[number , ...string[]]\r
\`\`\`\r
\r
 - enum \r
\r
枚举.可以定义一组命名常量\r
\r
数字枚举\r
\r
\`\`\`ts\r
enum Direction{\r
    Up,\r
    Down,\r
    Left,\r
    Right\r
}\r
\`\`\`\r
\r
字符串枚举 (丢失了反向映射)\r
\r
\`\`\`ts\r
enum Direction{\r
    Up = "up",\r
    Down = "down",\r
    Left = "left",\r
    Right = "right"\r
}\r
\`\`\`\r
\r
常量枚举\r
\r
\`\`\`ts\r
const enum Direction{\r
    Up,\r
    Down,\r
    Left,\r
    Right\r
}\r
\`\`\`\r
\r
\r
\r
 自定义类型的方式\r
\r
 - type\r
\r
\r
 \r
\r
 - interface\r
\r
\r
\r
## 声明对象类型\r
\r
\`\`\`ts\r
let person: {name: string , age:number}\r
// 加上问号表示属性可选\r
let person: {name: string , age?:number}\r
// 允许追加属性\r
let person: {name: string , age?:number , [key:string]:any}\r
\r
\`\`\`\r
\r
## 声明数组类型\r
\r
\r
\`\`\`ts\r
// 写法一\r
let arr: string[]\r
// 写法二 (泛型)\r
let arr2:Array<number>\r
arr = [ 'a' , 'b']\r
arr2 = [ 111 , 222]\r
\r
\r
\`\`\``,ns=`[] 001  \r
[] 002  `,es='官网\r\n[`👉 enter`](https://uniapp.dcloud.net.cn/){target="_blank"}',ts=`## 1. 编辑器下载\r
\r
- 一般使用 uniapp 捆绑推出的 \`HBuilderX\` 编辑器\r
\r
HBuilderX官网下载 [enter](https://www.dcloud.io/hbuilderx.html){target="_blank"}  \r
\r
::: danger <Badge type='warning'>24-03-31</Badge>\r
\r
- 目前存在一个bug？如果桌面不保留它的快捷方式，退出该编辑器它会卡住。\r
\r
:::\r
\r
## 2. 配置云服务\r
\r
> 如果不打算使用【unicloud】可以不用管\r
\r
\r
## 3. 运行调试环境配置\r
\r
\r
\r
\r
一般是通过浏览器预览，即是edge 或者 chrome\r
\r
\r
\r
- 微信开发者工具\r
\r
\`下载地址\`：[enter](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html){target="_blank"}\r
\r
::: danger <Badge type='warning'>常见问题</Badge>\r
\r
无法启动微信小程序开发工具\r
\r
开启服务端口\r
\r
![alt](/image/202411121332.png)\r
\r
:::\r
\r
\r
\r
`,ss=`## 创建\r
\r
## 项目目录解读\r
\r
## 项目运行调试\r
\r
### 在手机上运行\r
\r
\r
\r
## 软件常见配置\r
\r
- 自动保存\r
> 失去焦点后自动保存\r
- \`Tab\` 键自动补全`,os=`## 建立\r
\r
\`pages.json\`\r
\r
[\`👉 enter\`](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar){target="_blank"}\r
\r
\`\`\`json\r
"tabBar": {\r
	"color": "#7A7E83",\r
	"selectedColor": "#3cc51f",\r
	"borderStyle": "black",\r
	"backgroundColor": "#ffffff",\r
	"list": [{\r
		"pagePath": "pages/component/index",\r
		"iconPath": "static/image/icon_component.png",\r
		"selectedIconPath": "static/image/icon_component_HL.png",\r
		"text": "组件"\r
	}, {\r
		"pagePath": "pages/API/index",\r
		"iconPath": "static/image/icon_API.png",\r
		"selectedIconPath": "static/image/icon_API_HL.png",\r
		"text": "接口"\r
	}]\r
}\r
\`\`\`\r
\r
## 图标设置\r
\r
`,is="启动界面的制作",as=`\r
::: info intro\r
- **VitePress** 是一个静态网页生成器（SSG），可以理解能 **快速生成网页源代码** 的技术项目  \r
- 理论上无需掌握编程语言，**只要会markdown语法就可生成网站**  \r
- 但是，实际使用上，还是面向前端技术人员，因为本质上，使用 vitepress 是一个创建基于 vue 的 web 项目模板\r
:::\r
\r
> **🔥 个人体验：** 我曾高强度使用了1年以上的 \`vitepress\` ，我觉得对 **前端** 、以及 **代码业余爱好者** 来说，这应该是优先采用的博客、知识库选型，它可以极致简约，也可以高度自定义，而且项目本身也有学习、借鉴的价值。\r
\r
- \`官网地址\`  https://vitepress.dev/zh/guide/getting-started\r
- \`代码仓库\`  https://github.com/vuejs/vitepress <i class="iconfont icon-github"></i>\r
\r
## 使用的前置要求\r
\r
::: danger  ✅ 硬性前置要求  \r
\r
- 1️⃣ 已安装 \`代码编辑器软件\`\r
\r
- 2️⃣ 已安装 \`nodejs\` ( \`18.0\` 及以上版本)\r
\r
- 3️⃣ 已掌握 \`markdown\` 语法 \r
\r
:::\r
\r
::: info 掌握以下加分项，网站更丝滑\r
\r
- \`HTML\`\r
> md 文档中支持许多 \`html标签\`，可以让博客的内容更丰富，不过，书写\`html标签\`不如原生MD语法简洁，这点可以通过在VScode之中设置\`用户代码片段\`改善。  \r
\r
- \`CSS\`\r
> 同上，可以丰富页面格式，但是不建议过度使用，本末倒置。  \r
\r
- \`Javascript\`\r
> 高度自定义博客，实现更多功能，比如现在 \`vitepress\` 不支持自动化配置目录 通过\`js\`可以实现。  \r
\r
- \`Vue\`\r
> vitepress 本质上是一个vue3项目。  \r
\r
:::\r
\r
\r
\r
\r
\r
`,ds=`## 编辑环境 - vscode\r
\r
> vscode 是用来写的 **md笔记** 和 **网站代码** 的软件，你可以理解为代码界的 \`WPS\` \r
\r
!img[vscode](vscode)\r
\r
::: info  唯一真神 + 前端主宰\r
\r
- vscode官网  [enter](https://code.visualstudio.com)  \r
\r
- 本站笔记文档 [enter](/zo-repo/vscode/00%20简述.md)  \r
\r
\r
:::\r
\r
## 运行环境 - node\r
\r
<br/>\r
\r
- **说人话：就是下载一个叫 \`node\` 的软件**  \r
\r
> 📖<Badge type='info'>参考文档</Badge> [enter](/zo-repo/nodejs/00%20简述.md)\r
\r
<br/>\r
\r
::: danger <Badge type='danger'>请注意</Badge>\r
- **单纯使用\`vitepress\`，只需看参考文档-安装部分**\r
- 文档中 \`node\` 的其他内容，会的自然会、非相关从业者**不会的也不必学**\r
:::`,ls=`\r
::: danger  <Badge type='warning'>警示</Badge>\r
> **请确保已安装 \`18.0\` 及以上版本的 \`node\`！！！**\r
:::\r
\r
## 安装 vitepress\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm add -D vitepress\r
\`\`\`\r
\`\`\`shell [pnpm]\r
pnpm add -D vitepress\r
\`\`\`\r
\r
:::\r
\r
\r
## 初始化 vitepress 项目\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npx vitepress init\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm vitepress init\r
\`\`\`\r
\r
\r
:::\r
\r
然后依次按需求设置:\r
- 项目的根目录：建议填写\`./doc\` ，和官方保持一致  \r
- 站点的名字\r
- 站点的描述\r
- 主题选择 \r
\r
\`\`\`\r
┌  Welcome to VitePress!\r
│\r
◇  Where should VitePress initialize the config?\r
│  ./docs\r
│\r
◇  Site title:\r
│  My Awesome Project\r
│\r
◇  Site description:\r
│  A VitePress Site\r
│\r
◆  Theme:\r
│  ● Default Theme (Out of the box, good-looking docs)\r
│  ○ Default Theme + Customization\r
│  ○ Custom Theme\r
└\r
\`\`\``,gs="",ps="",ms=`::: danger <Badge type='danger'>注意</Badge>\r
\r
**本部分内容只是私人代码习惯，请忽视！或者谨慎使用！**\r
\r
:::\r
\r
\r
## \`.gitignore\`文件\r
\r
\`\`\`\r
node_modules\r
root-docs/.vitepress/dist\r
root-docs/.vitepress/cache\r
root-docs/.vitepress/.temp\r
root-docs/history\r
root-docs/xrepo\r
\r
\r
# 私人的文件库 【本地】\r
root-docs/me-repo\r
root-docs/me-pages\r
root-docs/me-articles\r
root-docs/zo-repo/myDiary\r
\r
\r
# Logs\r
logs\r
*.log\r
npm-debug.log*\r
yarn-debug.log*\r
yarn-error.log*\r
lerna-debug.log*\r
.pnpm-debug.log*\r
\r
# Diagnostic reports (https://nodejs.org/api/report.html)\r
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json\r
\r
# Runtime data\r
pids\r
*.pid\r
*.seed\r
*.pid.lock\r
\r
# Directory for instrumented libs generated by jscoverage/JSCover\r
lib-cov\r
\r
# Coverage directory used by tools like istanbul\r
coverage\r
*.lcov\r
\r
# nyc test coverage\r
.nyc_output\r
\r
# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)\r
.grunt\r
\r
# Bower dependency directory (https://bower.io/)\r
bower_components\r
\r
# node-waf configuration\r
.lock-wscript\r
\r
# Compiled binary addons (https://nodejs.org/api/addons.html)\r
build/Release\r
\r
# Dependency directories\r
node_modules/\r
jspm_packages/\r
\r
# Snowpack dependency directory (https://snowpack.dev/)\r
web_modules/\r
\r
# TypeScript cache\r
*.tsbuildinfo\r
\r
# Optional npm cache directory\r
.npm\r
\r
# Optional eslint cache\r
.eslintcache\r
\r
# Optional stylelint cache\r
.stylelintcache\r
\r
# Microbundle cache\r
.rpt2_cache/\r
.rts2_cache_cjs/\r
.rts2_cache_es/\r
.rts2_cache_umd/\r
\r
# Optional REPL history\r
.node_repl_history\r
\r
# Output of 'npm pack'\r
*.tgz\r
\r
# Yarn Integrity file\r
.yarn-integrity\r
\r
# dotenv environment variable files\r
.env\r
.env.development.local\r
.env.test.local\r
.env.production.local\r
.env.local\r
\r
# parcel-bundler cache (https://parceljs.org/)\r
.cache\r
.parcel-cache\r
\r
# Next.js build output\r
.next\r
out\r
\r
# Nuxt.js build / generate output\r
.nuxt\r
dist\r
\r
# Gatsby files\r
.cache/\r
# Comment in the public line in if your project uses Gatsby and not Next.js\r
# https://nextjs.org/blog/next-9-1#public-directory-support\r
# public\r
\r
# vuepress build output\r
.vuepress/dist\r
\r
# vuepress v2.x temp and cache directory\r
.temp\r
.cache\r
\r
# Docusaurus cache and generated files\r
.docusaurus\r
\r
# Serverless directories\r
.serverless/\r
\r
# FuseBox cache\r
.fusebox/\r
\r
# DynamoDB Local files\r
.dynamodb/\r
\r
# TernJS port file\r
.tern-port\r
\r
# Stores VSCode versions used for testing VSCode extensions\r
.vscode-test\r
\r
# yarn v2\r
.yarn/cache\r
.yarn/unplugged\r
.yarn/build-state.yml\r
.yarn/install-state.gz\r
.pnp.*\r
\r
\`\`\``,cs=`# 站点元数据\r
## title \r
### 介绍\r
::: info \r
- 类型：\`string\`  \r
- 默认值： \`vitepress\`  \r
- 可被页面配置覆盖：见 \`frontmatter配置\`\r
- 如果使用默认主题，则 **title** 会显示在导航栏中 如下图示：\r
![img](/image/202401081154.png)\r
- 如果使用默认主题，且不存在**titleTemplates**  \r
在非 **home** 页面，**title** 会作为站点 \`页面标题\` 的后缀存在，如下图示：\r
![img](/image/202401081215.png)\r
    ::: danger 踩坑提示\r
    - \`注意站点的页面标题是由.md文件的一级标题定义\`\r
    - \`若不存在一级标题则只显示title\`\r
    :::\r
:::\r
\r
### 配置\r
\r
:star: 在 config 文件中修改，默认文件是\`config.mjs\`\r
\r
\`\`\`js\r
export default defineConfig({\r
  title: "vitepress" // 修改此处\r
})\r
\`\`\`\r
---\r
**补充笔记**\r
- 一般\`.md\`文件中只设定一个\`H1\`，作为页面标题  \r
\`所以，在vitepress中 outline（页面大纲）中默认只显示二级标题\`  \r
\`\`\`markdown\r
# 测试的一级标题\r
\`\`\`\r
- 最终浏览器标签页显示的标题为：  \r
> 测试的一级标题 | vitepress\r
\r
## 标签页logo\r
\r
\`\`\`js\r
export default{\r
    //...\r
    head:[\r
        ['link', { rel: 'icon', href: './favicon.ico' }]\r
    ]\r
    //...\r
}\r
\`\`\``,us=`# 网站编辑\r
---\r
\r
::: danger <Badge type='warning'>**重大提示**</Badge>\r
\r
- **\`vitepress\` 官方文档面向的是程序员，非从业者视角阅览还是蛮诡异的**\r
\r
- **我把主题配置、页面配置、自定义主题合并同类项，以"一个东西对多个答案的方式"总结**\r
\r
- **如果你喜欢官方的整理方式，点此前往:** [enter](https://vitepress.dev/zh/guide/getting-started){target="_blank"}\r
\r
:::\r
\r
按照官方来说，称为主题配置\r
\r
<Badge type='info'>文档定位示意</Badge>\r
\r
\`\`\`\r
.\r
├─ docs\r
│  ├─ .vitepress\r
│  │  └─ config.js // [!code warning]\r
│  ├─ api-examples.md\r
│  ├─ markdown-examples.md\r
│  └─ index.md\r
└─ package.json\r
\r
\`\`\`\r
---\r
::: tip 提示\r
\`config.js\`是很重要的文件\r
基本上的大部分的配置都在这个文件里配置与编辑  \r
此外文件本身支持多种格式，如：\`.mjs\` 等\r
:::\r
`,hs=`---\r
# aside: left\r
# sidebar: false\r
---\r
\r
\r
# 全局配置\r
\r
## 站点标题\r
\r
## LOGO\r
\r
## 顶部导航菜单 - nav\r
\r
## 侧边栏 - sidebar\r
\r
\r
\r
\r
## 页脚 - foot\r
\r
\r
\r
\r
<style>\r
    .red{\r
        color: red\r
    }\r
</style>\r
\r
`,vs="",_s=`## 自定义导航菜单\r
\r
`,bs=`## 默认配置\r
\r
## 固定式侧边栏\r
\r
> 默认的样式\r
\r
\`\`\`js\r
  ...\r
    sidebar: [\r
      {\r
        text: 'Examples',\r
        items: [\r
          { text: 'Markdown Examples', link: '/markdown-examples' },\r
          { text: 'Runtime API Examples', link: '/api-examples' }\r
        ]\r
      }\r
    ],\r
  ...\r
\r
\r
\`\`\`\r
\r
## 自动化脚本\r
\r
## 自定义主题\r
\r
## 侧边栏的导航条的隐藏\r
\r
> 当侧边栏内容变多，会出现浏览器默认的滚动条，这并不美观  \r
\r
进入 \`.virepress/theme/style.css\`\r
\r
\`\`\`css\r
::-webkit-scrollbar {\r
  display: none;\r
}\r
\`\`\`\r
\r
> 如果要修改样式，请自行学习 css `,ys=`## 位置\r
::: tip 默认位置\r
![img](/image/202401071931.png)\r
:::\r
\r
---\r
\r
<br>\r
\r
## 信息\r
\r
- **介绍**：outline（大纲）由页面的内容的各级标题组成。\r
- **注意**：默认 \`只显示\` MD文件中的 \`二级标题\` 。\r
\r
## 配置\r
\r
### 改变展示位置\r
\r
### 改变outline标题\r
\r
### 改变显示层级\r
`,fs="",ws="",js=`\r
##  默认搜索 \r
\r
<Badge type='danger'>存在问题</Badge> \r
\r
① vitepress 自带的搜索**不能检索MD文档中的所有内容**，只能搜索到各级标题的内容 <br/> 即是说，**关键词必须写在各级标题中**。  \r
\r
> 根据个人测试，只能搜索到各级标题的内容  \r
说人话就是，关键词你不放在各级标题中，是搜索不到的  \r
比如你整篇文章都在写李白的个人简介，文章中有很多李白的字段  \r
但是该文档没有任何标题带李白，在搜索框搜李白是检索不到该文章的  \r
\r
<!-- ② 各级标题若是写在 **自定义容器** 内，也不会被检索到。如下实例：\`tip容器\`  \r
\r
\`--- 自定义容器语法和解释，可参考 本笔记对应的部分 或者 官方文档 \` [enter](https://vitepress.dev/zh/guide/markdown#custom-containers){target="_blank"} \r
\r
\r
\r
\`\`\`markdown [示例]\r
 ::: tip\r
\r
 #### 该四级标题的内容不会被检索\r
\r
 :::\r
\r
\`\`\` -->\r
\r
\r
##  Algolia\r
\r
\r
##  插件生态\r
\r
> 目前有两款插件，但是使用文档比较简略  \r
\r
---\r
\r
- \`vitepress-plugin-search\` :  \r
\r
https://www.npmjs.com/package/vitepress-plugin-search   \r
\r
---\r
\r
- \`vitepress-plugin-pagefind\` :  \r
\r
https://www.npmjs.com/package/vitepress-plugin-pagefind。  \r
\r
---`,ks=`---\r
# lastUpdated: true\r
---\r
\r
# 徽章\r
\r
## 配置\r
\r
### 单标签写法\r
badge\r
\r
### 双标签写法\r
\r
<br>\r
\r
::: info  <Badge type='info'>代码演示</Badge>\r
\r
\`\`\`md\r
\r
<Badge type='info'>我是badge1</Badge>\r
\r
<Badge type='tip'>我是badge2</Badge>\r
\r
<Badge type='warning'>我是badge3</Badge>\r
\r
\`\`\`\r
\r
:::\r
\r
---\r
\r
::: info  <Badge type='info'>效果演示</Badge>  \r
\r
---\r
\r
<Badge type='info'>我是badge1</Badge><Badge type='tip'>我是badge2</Badge><Badge type='warning'>我是badge3</Badge>\r
\r
:::\r
\r
\r
\r
\r
\r
`,xs="",zs=`---\r
aside: false\r
---\r
\r
\r
# frontmatter 配置\r
::: tip 介绍\r
\r
---\r
\r
:one:  &nbsp; \`vitepress\` 把页面级别的配置称为 frontmatter 配置。  \r
\r
:two:  &nbsp; 默认主题的配置是在 \`config\` 文件中配置，但\`frontmatter配置\`是在每个页面中自行配置，也可以不配置。  \r
\r
:three:  &nbsp; **需要注意的是**：  \r
>  frontmatter 配置要写在文档的最顶部，用 " --- " 包裹配置的内容。  \r
:::\r
\r
> <Badge type='warning'>代码演示</Badge>  \r
\`\`\`md\r
---\r
\r
<!-- 页面布局 -->\r
layout: page \r
\r
---\r
\`\`\`\r
\r
> <Badge type='warning'>防呆演示</Badge>  \r
\r
![img](/image/202401201959.png)\r
\r
---\r
aside: false\r
---\r
\r
页面配置中  \`layout\`(布局)  \r
\r
提供三种模式\r
\r
> \`home\`   &nbsp; 提供固定的主页样式，以快速构建主页，但是单调  \r
> \`doc\`   &nbsp;  &nbsp; 这是所有页面的**默认布局**，自动将默认样式应用在markdown文档中  \r
> \`page\`   &nbsp; 去除默认样式，用于需要自定义页面样式的页面，自由度高  \r
\r
---\r
\r
::: info  <Badge type='info'>代码演示</Badge>\r
\r
> \`请在文档的最顶部配置\`\r
\r
\`\`\`md\r
---\r
\r
layout: page\r
\r
--- \r
\`\`\`\r
\r
:::\r
\r
\r
\r
\r
\r
`,Bs="- 虽说 `vitepress` 强调使用的是 `markdown` 语法  \r\n- 但是，但是不要忘记，**markdown**文件中是可以使用 **html** 语法的  \r\n- 当然，必要时，也可以用 **vue** 语法， ",qs=`## 重要性\r
\r
<br>\r
\r
**文件路径的概念很重要，文档编辑中一定会接触它，特别是涉及到资源引用的时候。**\r
\r
## 绝对路径\r
\r
\r
- 假设存在一个文件\`小帅.md\` 它存储在下述位置  \r
\r
<Badge type='info' class='center_txt'>/中国/广东省/广州市/白云区/小帅.md</Badge>\r
  \r
\r
<!-- > \`/中国/广东省/广州市/白云区/小帅.md\`   -->\r
\r
- 那么它的绝对路径是：(以 \`/\` 或者 \`@/\` 开头)\r
\r
\`\`\`txt\r
\r
/中国/广东省/广州市/白云区/小帅.md  \r
\r
或者  \r
\r
@/中国/广东省/广州市/白云区/小帅.md  \r
\r
\`\`\`\r
\r
**<small><small>\`@\` 表示根目录</small></small>**\r
\r
\r
## 相对路径\r
\r
- **比较难讲，有人一看就懂，有人觉得很蒙**  \r
\r
- \`./\` 和 \`/\` 表示进入目录， \`../\` 表示回到上一级，由此组成相对路径。\r
\r
- 相对路径必须是以 \`./\` 或者 \`../\` 开头\r
\r
<br>\r
\r
::: info  <Badge type='warning'>案例一</Badge>\r
\r
假设存在一个文件\`小帅.md\` 它存储在下述位置  \r
\r
\`/中国/广东省/广州市/白云区/小帅.md\`  \r
\r
<br>\r
\r
假设存在一个文件\`小帅的衣服.png\` 它存储在下述位置  \r
\r
\`/中国/广东省/广州市/白云区/小帅的衣服.png\`  \r
\r
<br>\r
\r
> 若是想要在 \`小帅.md \`中引用 \`小帅的衣服.png \`，其引用相对路径是\r
\r
\`\`\`txt\r
./小帅的衣服.png\r
\`\`\`\r
\r
:::\r
\r
::: info  <Badge type='warning'>案例二</Badge>\r
\r
假设存在一个文件\`小帅.md\` 它存储在下述位置  \r
\r
\`/中国/广东省/广州市/白云区/小帅.md\`  \r
\r
<br>\r
\r
假设存在一个文件\`小帅的裤子.png\` 它存储在下述位置  \r
\r
\`/中国/广东省/广州市/白云区/白云街道/小帅的裤子.png\`  \r
\r
<br>\r
\r
> 若是想要在 \`小帅.md \`中引用 \`小帅的裤子.png \`，其引用相对路径是\r
\r
\`\`\`txt\r
./白云街道/小帅的裤子.png\r
\`\`\`\r
\r
:::\r
\r
\r
::: info  <Badge type='warning'>案例三</Badge>\r
\r
假设存在一个文件\`小帅.md\` 它存储在下述位置  \r
\r
\`/中国/广东省/广州市/白云区/小帅.md\`  \r
\r
<br>\r
\r
假设存在一个文件\`小帅的帽子.png\` 它存储在下述位置  \r
\r
\`/中国/广东省/广州市/越秀区/小帅的帽子.png\`  \r
\r
<br>\r
\r
> 若是想要在 \`小帅.md \`中引用 \`小帅的帽子.png \`，其引用相对路径是\r
\r
\`\`\`txt\r
../越秀区/小帅的帽子.png\r
\`\`\`\r
\r
:::\r
\r
::: info  <Badge type='warning'>案例四</Badge>\r
\r
假设存在一个文件\`小帅.md\` 它存储在下述位置  \r
\r
\`/中国/广东省/广州市/白云区/小帅.md\`  \r
\r
<br>\r
\r
假设存在一个文件\`小帅的眼镜.png\` 它存储在下述位置  \r
\r
\`/中国/广东省/小帅的眼镜.png\`  \r
\r
<br>\r
\r
> 若是想要在 \`小帅.md \`中引用 \`小帅的眼镜.png \`，其引用相对路径是\r
\r
\`\`\`txt\r
../../小帅的眼镜.png\r
\`\`\`\r
\r
:::\r
\r
`,Ss=`# 标题\r
\r
## markdown语法\r
\r
> 用 \`#\` 后，空一格加内容表示标题\r
\r
<br>\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\`\`\`markdown\r
## 二级标题\r
### 三级标题\r
#### 四级标题\r
\`\`\`\r
:::\r
\r
<br>\r
\r
> 一级标题在\`vitepress\`中会默认显示为网址的动态副标题\r
\r
> 所以，一级标题，请当作文章的总标题使用，只保留一个一级标题。\r
\r
`,Ts=`---\r
outline: 2\r
---\r
\r
# 强调语法\r
\r
## 斜体\r
\r
### markdown语法\r
\r
> 用 \`*\` 首尾包裹文字内容\r
\r
<br>\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\`\`\`markdown\r
*我是斜体文字*\r
\`\`\`\r
:::\r
\r
::: info  <Badge type='info'>效果演示</Badge>\r
\r
*我是斜体文字*\r
\r
:::\r
\r
<br>\r
\r
\r
## 加粗\r
\r
### markdown语法\r
\r
> 用 \`**\` 首尾包裹文字内容\r
\r
<br>\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\`\`\`markdown\r
**我是加粗文字**\r
\`\`\`\r
:::\r
\r
::: info  <Badge type='info'>效果演示</Badge>\r
\r
**我是加粗文字**\r
\r
:::\r
\r
<br>\r
\r
## 粗斜体\r
\r
### markdown语法\r
\r
> 用 \`***\` 首尾包裹文字内容\r
\r
<br>\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\`\`\`markdown\r
***我是粗斜体文字***\r
\`\`\`\r
:::\r
\r
::: info  <Badge type='info'>效果演示</Badge>\r
\r
***我是粗斜体文字***\r
\r
:::\r
\r
<br>\r
\r
## 小代码块\r
\r
> 其实就叫代码块，但为了区分后文的代码块，起个昵称，以免混淆\r
\r
> 这个小代码块的作用，通常也是用于突出文本。和加粗文本的应用场景类似\r
\r
> 一些仅供展示的代码（通常是标签），比如这样 \`<br>\`，只会展示它但不会执行它。\r
\r
> 复杂的代码，通常用后文中的代码块，请自行阅览\r
\r
### 用法\r
\r
> 用 \` 首尾包裹文字内容 <small><small><small>(它叫反引号)</small></small></small>\r
\r
<br>\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\`\`\`markdown\r
\`我是代码\`\r
\`\`\`\r
:::\r
\r
::: info  <Badge type='info'>效果演示</Badge>\r
\r
\`我是代码\`\r
\r
:::\r
\r
<br>`,Es=`**原生markdown语法不支持下划线**  \r
\r
可以用\`html\`语法中的\`<u>\`标签代替\r
\r
::: info  代码演示\r
\r
\`\`\`markdown\r
<u> test </u>\r
\`\`\`\r
\r
:::\r
\r
\r
::: info  效果演示\r
<u> test </u>\r
:::\r
\r
---\r
\r
> 但通常也不建议使用下划线，会被误认为是超链接\r
\r
---`,Ps=`**原生markdown语法不支持字体**  \r
\r
## :one:  &nbsp; 通过 \`<font>\` 标签\r
可以通过\`html\`中的\`<font>\`字体标签改变字体  \r
\`h5\` 已经废弃 \`<font>\` 标签，被 \`css\` 代替，一般来说不建议使用  \r
但是，目前主流浏览器还是支持的  \r
**如果项目要商业使用或在正式场合使用请谨慎考虑**  \r
\r
\r
::: info  <Badge type='info'>代码演示</Badge>\r
\r
\`\`\`html\r
\r
<font face='楷体'>我是楷体</font>  我是默认  \r
\r
<font face='宋体'>我是宋体</font>  我是默认  \r
\r
<font face='黑体'>我是黑体</font>  我是默认  \r
\r
\`\`\`\r
\r
:::\r
\r
::: info  <Badge type='info'>效果演示</Badge>\r
\r
---\r
\r
 &nbsp;  &nbsp;  &nbsp; <font face='楷体'>我是楷体</font>  &nbsp;  &nbsp;  &nbsp;我是默认  \r
\r
---\r
\r
 &nbsp;  &nbsp;  &nbsp; <font face='宋体'>我是宋体</font>  &nbsp;  &nbsp;  &nbsp;我是默认  \r
\r
---\r
\r
 &nbsp;  &nbsp;  &nbsp; <font face='黑体'>我是黑体</font>  &nbsp;  &nbsp;  &nbsp;我是默认  \r
\r
---\r
\r
:::\r
\r
::: warning <Badge type='warning'>注意</Badge>\r
\r
- 上述这些字体主要还是看浏览器是否内置  \r
\r
- 此方法在手机端仍然是默认字体  \r
\r
- 使用其他字体，比较花哨的那种，还是得通过css引入  \r
\r
:::\r
\r
## :two:  &nbsp; 通过 \`CSS\` `,Os="",Cs="",Fs="",Ds=`---\r
baseurl: 'http://localhost:19972/icon/bing.png'\r
outline: 2\r
---\r
\r
## 1. markdown 语法\r
\r
> 书写格式 ：\`![随意文字也可以不写](图片的地址)\`\r
\r
::: info  <Badge type='info'>代码示例：</Badge>  <Badge type='warning'>非实际链接，仅为演示</Badge>\r
\r
\`\`\`markdown\r
![](/favicon.ico)\r
\r
![](https://yoursite.com/icon/logo.png)\r
\`\`\`\r
:::\r
\r
> 第一个是\`本地路径\`示例、第二个是\`网络地址\`示例 \r
\r
**<small><small>防呆说明：网络地址不是随便用的，大多数网站都会设置防盗链，所以图片是来自你自己的服务器提供的直链</small></small>**\r
\r
\r
\r
---\r
\r
\r
<!-- ::: danger <Badge type='warning'></Badge>\r
\r
- **请注意\`绝对路径\`是省略\`资源目录(公共目录)\`本身的**\r
\r
- 上面图片示例中原本的绝对路径是 \`/public/favicon.ico\` \r
\r
- 网站的图片一般都是统一放在**根目录**下的 \`public\`文件夹中\r
\r
- 而引用图片地址，会把 \`public\`去除，这也属于处理静态资源的行业惯例。 \r
\r
[此处速览官方文档](https://vitepress.dev/zh/guide/asset-handling#referencing-static-assets)\r
\r
![](/image/202402282132.png)\r
\r
\r
::: -->\r
\r
\r
\r
\r
\r
\r
## 2. html 标签语法\r
\r
<br>\r
\r
::: info  <Badge type='info'>代码示例：</Badge>\r
\r
> 图片地址支持 \`直链网址\` 、\`绝对路径\`、\`相对路径\`\r
\r
> 具体规则和上面的 \`markdown\` 语法一样，不赘述了\r
\r
\`\`\`html\r
<img src="图片地址">\r
\`\`\`\r
\r
:::\r
\r
**<small><small>如果你会CSS语法，可以添加样式，如果不会，建议使用前面的 \`markdown\` 语法，时间充裕也可以学学CSS，入门很简单的</small></small>**\r
\r
\r
## 3. 自定义的全局组件（进阶）\r
\r
---\r
\r
::: info 没有编程基础的小白们别看，会vue语法的大佬继续\r
\r
---\r
\r
<br/>\r
\r
<Badge type='tip'>优点</Badge>  \r
\r
- **具有极高的自由度**  \r
\r
- **通过 \`vue.js\` 语法可动态设置图片源的 \`url\` 地址，方便图床的迁移**  \r
\r
- **展示图库时，可以通过 \`v-for\` 减少代码量**  **<small><small><small>虽然可能没这个需求</small></small></small>**\r
\r
<br/>\r
\r
<Badge type='danger'>缺点</Badge>  \r
\r
- **但\`vue.js\`，对于小白来说需要一定的学习成本，而且组件这块知识有点绕**  \r
\r
- **而且图片动态路径不完全是vue3的写法，还要引入vitepress的函数来处理数据**\r
\r
:::\r
\r
<!-- <img src="http://localhost:19972/icon/bing.png" alt="" class="searchEngineIcon"> -->\r
\r
::: code-group\r
\r
\`\`\`js [需要]\r
import { withBase, useData } from 'vitepress'\r
\`\`\`\r
\r
:::\r
`,Is=`\r
\r
\r
##  \`emoji\` 的使用方法\r
\r
- **文档中用 \`:\` 包裹对应的 emoji 的名称，即可输出为 emoji 表情**  \r
- **代码格式：\`:name:\`**  \r
\r
---\r
\r
**<small><small>防呆提示：请用英文冒号</small></small>**\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\`\`\`markdown\r
:boom:  \r
:star:  \r
:heart:\r
\`\`\`\r
:::\r
\r
\r
\r
::: info  <Badge type='info'>效果演示</Badge>\r
\r
:boom:  \r
:star:  \r
:heart:  \r
\r
:::\r
\r
## 支持的 emoji 代码列表\r
\r
> **这里的支持是指以\`:code:\`方式生成的表情，未支持的表情可直接嵌入代码中来实现**\r
\r
- 前往查看列表[\`markdown-it-emoji\`](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)  <Badge type='danger'>Github</Badge>\r
\r
- 目前总计 1903 个表情  \r
\r
- **emoji 表情因为平台、设备、软件环境的不同，图案是有差异的，甚至有些表情代码会失效**\r
\r
- 关于 emoji 表情更多知识，可以自行搜索了解\r
\r
\r
## 使用须知\r
\r
::: info  <Badge type='info'>提示</Badge>\r
\r
- 其实通过 \`:code:\` 的方式，是为了减少使用emoji的表情的步骤  \r
\r
- 常规使用emoji：我们需要点开输入法的表情菜单，然后进行选择  \r
\r
- 而通过 \`:code:\` 不影响我们正常键入文本，缺点就是有些表情的单词过长，记忆成本高  \r
\r
- 对此，请灵活使用，简单的 \`:one:\` , \`:star:\` , \`:+1:\` 可以的选择此方式键入  \r
\r
- 复杂表情则按照自己喜欢的方式使用  \r
:::\r
\r
\r
`,As=`::: danger \r
12121\r
:::\r
\r
::: tip \r
12121\r
配置位置：\`.vitepress/theme/index.js\`\r
\r
\`\`\`js\r
import DefaultTheme from 'vitepress/theme'\r
import yourComponent from './yourComponent.vue' //注册组件的位置\r
\r
export default {\r
  extends: DefaultTheme,\r
  enhanceApp({app}) {\r
    app.component('yourComponent', yourComponent)\r
  }\r
}\r
\r
\`\`\`\r
:::\r
\r
::: warning \r
12121\r
:::\r
\r
::: info \r
12121\r
:::\r
\r
\r
::: details\r
12121\r
:::\r
\r
\r
`,Ms=`## 使用代码块\r
\r
---\r
\r
> **:one:在文档中用 \`\`\` 首尾标记的内容会转化为代码块**  \r
\r
<Badge type='info'>代码示例：</Badge>  \r
\r
\`\`\`md\r
    \`\`\`\r
    let username = 'mo'\r
    let password = 123456\r
    \`\`\`\r
\`\`\`\r
\r
<Badge type='info'>效果演示：</Badge>  \r
\r
\`\`\`\r
let username = 'mo'\r
let password = 123456\r
\r
\`\`\`\r
---\r
\r
<br>\r
\r
> **:two:添加代码语言，会有对应高亮显示**  \r
\r
\r
<Badge type='info'>代码示例：</Badge>  \r
\r
\`\`\`md\r
    \`\`\`js\r
    let username = 'mo'\r
    let password = 123456\r
    \`\`\`\r
\`\`\`\r
\r
<Badge type='info'>效果演示：</Badge>  \r
\r
\`\`\`js\r
let username = 'mo'\r
let password = 123456\r
\r
\`\`\`\r
\r
##  行号\r
\r
- 通过config  \r
\r
- 具体代码块  \r
代码语言后加上\`:line-numbers\` 或者 \`:no-line-numbers\` 进行设置  \r
\r
<Badge type='info'>代码示例</Badge>  \r
\r
\`\`\`md\r
    \`\`\`js:line-numbers\r
    let username = 'mo'\r
    let password = 123456\r
    \`\`\`\r
\`\`\`\r
\r
<Badge type='info'>效果演示</Badge>\r
\r
\`\`\`js:line-numbers\r
let username = 'mo'\r
let password = 123456\r
\`\`\`\r
<br>\r
<br>\r
\r
---\r
\r
> 如果想指定行号的起始数字，格式为：\`:line-numbers=2\`  \r
\r
---\r
\r
<Badge type='info'>代码示例</Badge>  \r
\r
\`\`\`md\r
    \`\`\`js:line-numbers=5\r
    let username = 'mo'\r
    let password = 123456\r
    \`\`\`\r
\`\`\`\r
\r
<Badge type='info'>效果演示</Badge>\r
\r
\`\`\`js:line-numbers=5\r
let username = 'mo'\r
let password = 123456\r
\`\`\`\r
\r
##  行高亮\r
\r
> 代码语言后加上\`{x}\`表示第 x 行高亮\r
\r
<Badge type='info'>代码示例</Badge>  \r
\r
\`\`\`md\r
    \`\`\`js:line-numbers{4}\r
    let username = 'mo'\r
    let password = 123456\r
    let lv = 5\r
    let age = 100\r
    let color = 'red'\r
    \`\`\`\r
\`\`\`\r
<Badge type='info'>效果演示</Badge>  \r
\r
\`\`\`js:line-numbers{4}\r
let username = 'mo'\r
let password = 123456\r
let lv = 5\r
let age = 100\r
let color = 'red'\r
\`\`\`\r
**除了单行之外，还可以指定多个单行、多行，或两者均指定：** \r
\r
> 多行：例如 \`{5-8}\`、\`{3-10}\`、\`{10-17}\`  \r
多个单行：例如 \`{4,7,9}\`  \r
多行与单行：例如 \`{4,7-13,16,23-27,40}\`  \r
\r
## 行高亮：错误与警告\r
> 在某一行添加 **\`// [!code warning]\`** 或 **\`// [!code error]\`** 的注释将会为该行相应的着色。\r
\r
<Badge type='info'>代码示例</Badge>  \r
\r
<pre>\r
\`\`\`js\r
let username = 'mo'\r
let password = 123456 \r
let lv = 5  // [!code warning]\r
let age = 100 // [!code error]\r
let color = 'red'\r
\`\`\`\r
</pre>\r
\r
<Badge type='info'>效果演示</Badge>  \r
\r
\`\`\`js\r
let username = 'mo'\r
let password = 123456\r
let lv = 5  // [!code warning]\r
let age = 100 // [!code error]\r
let color = 'red'\r
\`\`\`\r
\r
## 行聚焦\r
> 在某一行上添加 **\`// [!code focus]\`** 的注释，将会聚焦它并模糊其他代码  \r
> 可以使用 **\`// [!code focus:<lines>]\`** 定义要聚焦的行数。\r
\r
<Badge type='info'>代码示例</Badge>  \r
\r
<pre>\r
\`\`\`js\r
let username = 'mo'\r
let password = 123456 \r
let lv = 5  // [!code focus:2]\r
let age = 100\r
let color = 'red'\r
\`\`\`\r
</pre>\r
\r
<Badge type='info'>效果演示</Badge>  \r
\r
\`\`\`js\r
let username = 'mo'\r
let password = 123456\r
let lv = 5  // [!code focus:2]\r
let age = 100\r
let color = 'red'\r
\`\`\`\r
\r
## 行加减效果\r
\r
\`\`\`markdown\r
// [!code --]\r
\`\`\``,Gs=`## 语法\r
\r
> 用 \`code-group\` 容器包裹着你的代码块\r
\r
> ****<small>代码块的代码语言后加\`[your_title]\`可自定义该代码块的标题</small>****\r
\r
<br>\r
\r
\`\`\`\r
    ::: code-group\r
\r
    代码块01\r
\r
    代码块02\r
\r
    :::\r
\`\`\`\r
\r
\r
\r
## 演示\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\`\`\`markdown\r
    ::: code-group\r
\r
    \`\`\`html [我是：html]\r
    <div class="txt">hello<div>\r
    \`\`\`\r
    \r
    \`\`\`css [我是：css]\r
    .txt{\r
        color: red;\r
    }\r
    \`\`\`\r
    :::\r
\`\`\`\r
:::\r
\r
---\r
\r
<Badge type='info'>效果演示</Badge>\r
\r
::: code-group\r
\r
\`\`\`html [我是：html]\r
<div class="txt">hello<div>\r
\`\`\`\r
\r
\`\`\`css [我是：css]\r
.txt{\r
    color: red\r
}\r
\`\`\`\r
:::\r
\r
`,Ns=`# 脚注\r
\r
::: info <Badge type='warning'>说明</Badge>\r
- **vitepress** 不支持脚注语法，但因为 **vitepress** 采用 **markdown-it** 作为解析器，故此可安装 \`markdown-it-footnote\` 插件实现脚注功能\r
\r
:::\r
\r
## 1. 安装插件\r
\r
[\`插件的源代码仓库\`](https://github.com/markdown-it/markdown-it-footnote) <Badge type='info'>Github</Badge>\r
\r
- 项目中安装 \`markdown-it-footnote\` 依赖\r
\r
\`\`\`shell\r
npm install markdown-it-footnote --save\r
\`\`\`\r
\r
## 2. 配置插件\r
\r
在 \`.vitepress/config.js\` 文件中  \r
\r
\`\`\`js\r
// vitepress 的配置项\r
import { defineConfig } from 'vitepress'\r
// 导入 markdown-it 插件\r
import markdownItFootnote from 'markdown-it-footnote'\r
\r
export default defineConfig({\r
  //  请注意层级！不要将配置代码写在 themeConfig 中 ！💥\r
  markdown: {\r
    config: (md) => {\r
      md.use(markdownItFootnote)\r
    }\r
  },\r
\r
})\r
\r
\r
\`\`\`\r
\r
## 3. 使用语法\r
\r
用 \`[^自定义名称]\` 标记位置 , 在 \`[^自定义名称]: \`解释脚注\r
\r
<Badge type='warning'>示例</Badge>\r
\r
\`\`\`md\r
Here is a footnote reference,[^1] and another.[^longnote]\r
\r
[^1]: Here is the footnote.\r
\r
[^longnote]: Here's one with multiple blocks.\r
\r
    Subsequent paragraphs are indented to show that they\r
belong to the previous footnote.\r
\`\`\``,Ls="",Js=`## 1. markdown 语法\r
\r
\`\`\`md\r
\r
---\r
\r
\`\`\`\r
\r
 \r
 \r
<br/>\r
 \r
\r
## 2. html 标签语法\r
\r
\`\`\`md\r
\r
<hr>\r
\r
\`\`\`\r
\r
 \r
\r
 \r
\r
\r
## 3. 进阶\r
\r
**可以参考这篇文章，通过基础代码实现各种分割线功能**\r
\r
https://www.zhangxinxu.com/wordpress/2021/05/css-html-hr/\r
`,Rs=`## 在文档中嵌入 markdown 文档\r
\r
<br>\r
\r
- **绝对路径**\r
\r
> 格式如下所示，像是注释，但实现导入该文件的功能\r
\r
<br>\r
\r
\`\`\`markdown\r
<!--@include: @/文件夹/文件.md-->\r
\`\`\`\r
\r
<br>\r
\r
> **<small><small>防呆说明：第一个 \`@\` 含义是导入，第二个 \`@\` 含义是根目录，同时也表示\`绝对路径\`</small></small>**\r
\r
---\r
\r
<br>\r
\r
<br>\r
\r
- **相对路径**\r
\r
> 格式如下\r
\r
**<small><small>防呆说明：相对路径与绝对路径不懂一定要看相关的文档，很重要的</small></small>**\r
\r
\r
\`\`\`markdown\r
<!--@include: ./文件夹/文件.md-->\r
\`\`\`\r
\r
\r
## 在文档中嵌入 代码片段\r
\r
- 语法比较简单\r
\r
\`\`\`\r
<<< @/filepath\r
\`\`\``,Us="",Vs=`\r
配置位置：\`.vitepress/theme/index.js\`\r
\r
\`\`\`js\r
import DefaultTheme from 'vitepress/theme'\r
import yourComponent from './yourComponent.vue' //注册组件的位置\r
\r
export default {\r
  extends: DefaultTheme,\r
  enhanceApp({app}) {\r
    app.component('yourComponent', yourComponent)\r
  }\r
}\r
\r
\`\`\``,Xs="https://www.bilibili.com/video/BV1YW4y1F7uJ/?spm_id_from=333.1007.tianma.1-1-1.click",Qs=`::: danger  <Badge type='danger'>易错警告</Badge>\r
\r
> **很多人经常忽略此步，部署之前，一定要按照自己的仓库名称配置\`base\`**\r
\r
![img](/image/202402061715.png)\r
\r
> **但是如果你是打算部署到根目录\r
\r
\r
:::\r
\r
`,Ws=`---\r
outline: [2,3]\r
---\r
\r
\r
下述为自动化部署\r
\r
## 开启actions功能\r
\r
::: info  <Badge type='info'>步骤演示</Badge>\r
\r
---\r
\r
**:one: 在Github仓库中找到page设置**\r
\r
![](/image/202401071805.png)\r
\r
---\r
\r
**:two: 开启actions功能**\r
\r
![](/image/202401071810.png)\r
\r
:::\r
\r
\r
\r
## 添加配置动化文件\r
\r
> 其实自动化部署，就是在项目中添加一个yml文件  \r
> 你可以直接在云端添加，也可以在本地创建该文件后，随代码提交。\r
\r
\r
### 在线添加\r
\r
::: info  <Badge type='info'>步骤演示</Badge>\r
\r
---\r
\r
#### :one: 打开actions页面\r
![](/image/202401071813.png)\r
\r
---\r
\r
#### :two: 前往创建文件\r
![](/image/202401071814.png)\r
\r
---\r
\r
#### :three: 创建deploy.yml文件\r
![](/image/202401071819.png)\r
\r
---\r
\r
#### :four: 添加代码\r
\r
[点击此处前往官网复制代码](https://vitepress.dev/zh/guide/deploy#github-pages)\r
\r
![](/image/202401071821.png)\r
\r
---\r
\r
#### :five: 保存\`deploy.yml\`文件\r
\r
> 把复制好的代码粘贴到刚才网页新建的\`deploy.yml\`文件中  \r
> **\`注意\` 代码有一处可能需要修改** main 或者 master 这取决你的分支名  \r
> 若是使用 \`npm ci\` 建议改为 \`npm i\` 后期安装新的依赖容易报错\r
\r
![](/image/202401071851.png)\r
\r
---\r
\r
#### :six: 完成\r
\r
---\r
:::\r
\r
\r
### 本地添加\r
\r
> \r
\r
::: info  <Badge type='info'>步骤演示</Badge>\r
\r
---\r
\r
#### :one: 在项目中，按照图示结构创建 \`deploy.yml\` 文件  \r
\r
\`\`\`\r
.\r
├─ docs\r
│  ├─ .github\r
│  │  └─ workflows\r
│  │    └─ deploy.yml  // [!code warning]  \r
│  ├─ .vitepress\r
│  │  └─ config.js\r
│  ├─ api-examples.md\r
│  ├─ markdown-examples.md\r
│  └─ index.md\r
└─ package.json\r
\`\`\`\r
---\r
\r
#### :two: 在文档中添加代码\r
\r
[点击此处前往官网复制代码](https://vitepress.dev/zh/guide/deploy#github-pages)\r
\r
![](/image/202401071821.png)\r
\r
---\r
\r
#### :three: 保存\`deploy.yml\`文件\r
\r
> 把复制好的代码粘贴到刚才网页新建的\`deploy.yml\`文件中  \r
> **\`注意\` 代码有一处可能需要修改** main 或者 master 这取决你的分支名  \r
\r
![](/image/202401071851.png)\r
\r
---\r
\r
#### :four: 代码提交到Github\r
\r
> 如何推送属于 git 与 github 的知识，自行学习，或者参阅[此处](/zo-repo/github/01%20前置基础/01%20Git下载与安装.md){target='_blank'}\r
\r
#### :five: 完成\r
:::`,Hs=`# 不推荐\r
## 可参考后文中的 Gitee 部署`,Ys="",Ks=`\r
## 1. 代码块、自定义容器增强\r
\r
### vitepress-code-preview\r
\r
- https://welives.github.io/vitepress-code-preview/\r
- 提供vue文件的效果预览\r
\r
### vitepress-demo-preview\r
\r
同样是实现代码预览的插件\r
\r
https://github.com/flingyp/vitepress-demo-preview\r
`,Zs=`---\r
# aside: false\r
---\r
\r
## 1. 项目特性\r
\r
::: info  <Badge type='info'>目前存在问题</Badge>\r
\r
> **自动生成的侧边目录会被覆盖**\r
\r
- 记录时间：20240308\r
- 浏览器：win-edge\r
- 描述：假设两个仓库为'repo'和'repo-test',如果先配置repo,repo 生成的目录仓库名会覆盖 repo-test 的目录\r
\r
---\r
\r
\r
\r
> **文字丢失加粗效果**\r
\r
- 记录时间：20240205\r
- 浏览器：安卓-edge\r
- 描述：用 \`**\` 标记的中文并未加粗显示，但灵性地是英文是加粗的\r
\r
---\r
\r
> **用iframe嵌入的B站视频的差异化**\r
\r
- 记录时间：20240205\r
- 浏览器：安卓-edge 和 win-edge\r
- 描述：PC端无声且只存在暂停按钮，存在跳转广告。手机端完美嵌入，没有跳转广告，且控制界面完整。\r
\r
\r
:::\r
\r
## 2. 相关报错\r
\r
### Error: Unable to locate executable file: pnpm. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.\r
\r
- **报错信息**：Error: Unable to locate executable file: pnpm. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.\r
- **解决方法**：安装下面代码添加全局的 \`pnpm\` ，如果仍然报错，删除上一行的 \`cache:pnpm\`\r
\r
\r
\`\`\`yml\r
      - name: Install PNPM\r
        run: npm i -g pnpm\r
\`\`\`\r
![](/image/202403131401.png)\r
\r
\r
\r
### failed with exit code 3221225477\r
\r
- node版本冲突，选择稳定的版本\r
\r
## 3. 问题解决\r
\r
### 改变调试端口\r
\r
在 \`package.json\` 中 对应的位置加上 \`--port 8081\` 可以自定义\r
\r
\`\`\`js\r
  "scripts": {\r
    "docs:dev": "vitepress dev root-docs --port 8081",\r
    "docs:build": "vitepress build root-docs",\r
    "docs:preview": "vitepress preview root-docs"\r
  },\r
\`\`\`\r
\r
\r
\r
`,$s=`---\r
title: 'Vitepress'\r
cover: 'vitepress'\r
---`,ro=`# Visual Studio Code\r
\r
---\r
\r
::: danger  ⭐ 温馨提示\r
\r
\r
---\r
\r
> **VSCode** 是 **完全免费** 的软件，故此，注意甄别网络贩子兜售的 **VSCode破解版**  \r
> 并且，软件内 **自带插件市场**，提供汉化插件 ，所谓的 **汉化版软件**，请注意甄别！  \r
\r
---\r
\r
:::\r
\r
![d](/image/202401071432.png)\r
`,no=`## 官网下载\r
\r
\`VSC官网\`:  https://code.visualstudio.com\r
\r
> :star: vscode官网会自动识别你的电脑版本，点击 \`download for XX\` 即可\r
\r
::: info  <Badge type='info'>**根据自己电脑的系统来下载，大多数人是图示版本**</Badge>\r
\r
![d](/image/202401071316.png)\r
\r
:::\r
\r
\r
\r
## 备用方案\r
---\r
\r
VSC官网 **打不开** 或者 **下载极慢** ，就用下面的这些网盘链接  \r
> 任何软件优先去官网下载，网盘链接非最新版本，并且各家网盘限制，使用也有点复杂  \r
\r
---\r
\r
\`网盘链接\`\r
\r
|平台|链接|KEY|\r
|---|---|---|\r
|蓝奏云|[\`enter\`](https://hqz1874.lanzouy.com/iye8X1kcxjri){target="_blank"}| —— |\r
|123网盘|[\`enter\`](https://www.123pan.com/s/RRRYjv-OTS0A.html){target="_blank"}| —— |\r
|阿里云盘|[\`enter\`](https://www.alipan.com/s/gXR8fCRwbPK){target="_blank"}| —— |\r
\r
<!-- [![蓝奏云](https://img.shields.io/badge/%E7%BD%91%E7%9B%98%E4%B8%8B%E8%BD%BD%20-%E8%93%9D%E5%A5%8F%E4%BA%91%E7%9B%98-blue)\r
](https://hqz1874.lanzouy.com/iye8X1kcxjri)\r
\r
[![123网盘](https://img.shields.io/badge/%E7%BD%91%E7%9B%98%E4%B8%8B%E8%BD%BD%20-123%E4%BA%91%E7%9B%98-purple)\r
](https://www.123pan.com/s/RRRYjv-OTS0A.html)\r
\r
[![阿里云盘](https://img.shields.io/badge/%E7%BD%91%E7%9B%98%E4%B8%8B%E8%BD%BD%20-%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-orange)\r
](https://www.alipan.com/s/gXR8fCRwbPK) -->\r
\r
---\r
\r
<!--@include: @/zo-snippets/网盘通用提示.md-->\r
\r
\r
\r
`,eo=`---\r
aside: false\r
---\r
\r
# VSC 汉化\r
\r
---\r
\r
::: info  <Badge type='info'>汉化演示</Badge>\r
\r
- 打开软件点击插件市场\r
\r
![img](/image/202401121614.png)\r
\r
- 安装汉化插件\r
\r
![img](/image/202401121616.png)\r
\r
:::`,to=`## 视图\r
\r
- 是否紧凑显示文件夹（文件夹下只有一个项目会自动折叠） \r
\r
Compact Folders`,so="## :keyboard: 基本\r\n\r\n### 保存文件\r\n\r\n`ctrl` + `S`   \r\n\r\n## :keyboard: 光标与跳转\r\n### 多处输入光标\r\n\r\n`ctrl` + `alt` + `↑` 或 `↓`\r\n\r\n## :keyboard: 窗口相关\r\n\r\n### 关闭当前打开的窗口\r\n\r\n`ctrl` + `F4`   \r\n\r\n`ctrl` + `Fn` + `F4`   \r\n\r\n::: warning  <Badge type='danger'>差异提示</Badge>\r\n\r\n> 因为各厂商的键盘FN键会内置快捷功能，避免冲突可能会需要同时按下 `Fn` 键\r\n\r\n:::\r\n\r\n### 关闭所有打开的窗口\r\n\r\n`ctrl` + `K`  之后  `ctrl` + `W`\r\n\r\n### 退出、关闭编辑器\r\n\r\n`ctrl` + `shift` + `W`   \r\n\r\n## :keyboard: 视图相关\r\n\r\n### 侧边栏的显示与隐藏\r\n\r\n`ctrl` + `B`   \r\n\r\n",oo=`## \r
\r
缩进 \`\\t\`\r
`,io=`- 插件市场\r
\r
https://marketplace.visualstudio.com/vscode\r
\r
\r
\r
名称: Error Lens\r
ID: usernamehw.errorlens\r
说明: Improve highlighting of errors, warnings and other language diagnostics.\r
版本: 3.16.0\r
发布者: Alexander\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens  \r
\r
名称: Live Server\r
ID: ritwickdey.LiveServer\r
说明: Launch a development local Server with live reload feature for static & dynamic pages\r
版本: 5.7.9\r
发布者: Ritwick Dey\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer\r
\r
名称: Markdown Preview Enhanced\r
ID: shd101wyy.markdown-preview-enhanced\r
说明: Markdown Preview Enhanced ported to vscode\r
版本: 0.8.11\r
发布者: Yiyi Wang\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced\r
\r
名称: Project Manager\r
ID: alefragnani.project-manager\r
说明: Easily switch between projects\r
版本: 12.7.0\r
发布者: Alessandro Fragnani\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager  \r
\r
名称: vscode-icons\r
ID: vscode-icons-team.vscode-icons\r
说明: Icons for Visual Studio Code\r
版本: 12.7.0\r
发布者: VSCode Icons Team\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons`,ao="",lo=`# cssrem\r
\r
\r
\r
## 插件信息\r
\r
::: info  <Badge type='info'>基本信息</Badge>\r
\r
- \`名称\`：px to rem & rpx & vw (cssrem)\r
- \`官网\`：https://marketplace.visualstudio.com/items?itemName=cipchk.cssrem\r
- \`作用\`：在 vscode 中 转换 css 的单位\r
\r
:::\r
`,go=`# Markdown Preview Enhanced\r
\r
## 插件信息\r
::: info  <Badge type='info'>基本信息</Badge>\r
\r
- \`名称\`：Markdown Preview Enhanced\r
- \`官网\`：https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/\r
- \`作用\`：在 vscode 中预览 markdown 文件\r
\r
:::\r
\r
## 插件演示\r
\r
::: info  <Badge type='info'>安装后，点击图示位置，可预览目前打开的md文件</Badge>\r
\r
![img](/image/202402022126.png)\r
\r
:::\r
\r
`,po=`\r
1. Auto Rename Tag  \r
名称: Auto Rename Tag  \r
ID: formulahendry.auto-rename-tag  \r
说明: Auto rename paired HTML/XML tag  \r
版本: 0.1.10  \r
发布者: Jun Han  \r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag  \r
\r
2. Error Lens\r
名称: Error Lens  \r
ID: usernamehw.errorlens  \r
说明: Improve highlighting of errors, warnings and other language diagnostics.  \r
版本: 3.16.0  \r
发布者: Alexander  \r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens  \r
\r
3. Live Server\r
名称: Live Server\r
ID: ritwickdey.LiveServer\r
说明: Launch a development local Server with live reload feature for static & dynamic pages\r
版本: 5.7.9\r
发布者: Ritwick Dey\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer\r
\r
4. Project Manager\r
名称: Project Manager\r
ID: alefragnani.project-manager\r
说明: Easily switch between projects\r
版本: 12.7.0\r
发布者: Alessandro Fragnani\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager\r
\r
5. vscode-icons\r
ID: vscode-icons-team.vscode-icons\r
说明: Icons for Visual Studio Code\r
版本: 12.7.0\r
发布者: VSCode Icons Team\r
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons`,mo=`### VSCode markdown 文件中无法使用用户代码片段 snippet 问题\r
\r
#### 方法一：  \r
\r
> 快捷键 ctrl + i 的组合可以唤醒代码提示  \r
\r
#### 方法二：  \r
> 在设置文件中开启自动提示 \r
\r
\r
  :one:    打开设置  \r
  :two:    进入setting.json  \r
  :three:    添加下面的代码  \r
\r
\r
\r
\`\`\`json\r
"[markdown]": {\r
    "editor.renderWhitespace": "all",\r
    "editor.quickSuggestions": {\r
        "other": "on",\r
        "comments": "on",\r
        "strings": "on"\r
    },\r
    "editor.acceptSuggestionOnEnter": "on"\r
    }\r
\`\`\``,co=`## 电脑存储位置\r
\r
> 重装电脑记得备份\r
\r
> 或者确认VSC已经通过微软或者GH登录\r
\r
\`C:\\Users\\long\\AppData\\Roaming\\Code\\User\\snippets\``,uo="",ho=`---\r
aside: false\r
---\r
# Vue\r
\r
> 官网 [enter](https://cn.vuejs.org/){target='_blank'}\r
\r
> vue2 已经停止维护了，本站的 vue 内容默认为 vue3 \r
\r
> **此部分内容，不具备学习功能，仅作为笔记使用，不要本末倒置，学vue3还得去看教学视频** \r
\r
> **笔记具有主观性，因方便个人理解，不会考虑严谨与专业性**\r
\r
---\r
\r
<br>\r
\r
<br> \r
\r
## 前置基础\r
\r
- 具备基本的命令行（终端）操作知识\r
\r
- 安装 \`node\` \`18.0及以上版本\`\r
\r
## 课程资源\r
\r
- 下面是我看的 \`vue3\` 教程，麻烦这些机构早点给我结广告费，哈哈，开下玩笑，纯良心推荐 \r
- 没必要去找课程笔记，自己跟着视频打才学得会，脑子会比眼睛会重要\r
\r
::: info  <Badge type='info'>bilibili</Badge>\r
\r
- **<Badge type='info'>2023-12-19</Badge> 尚硅谷《最新版vue3+TypeScript前端开发教程》<Badge type='warning'>推荐</Badge>**\r
\r
\r
\r
> 比较稀缺的纯vue3的教程，但需要最基本的vue基础，最简单的几个指令没讲，默认大家都会。\r
\r
> 但讲的挺好的，称得上深入浅出、详略得当、理论与实践都有解读。\r
\r
\r
\r
\r
\r
- [尚硅谷Vue3入门到实战，最新版vue3+TypeScript前端开发教程](https://www.bilibili.com/video/BV1Za4y1r7KE/?share_source=copy_web&vd_source=208ad8437d7a696e8bb3807400e31301)\r
\r
:::\r
\r
---\r
\r
::: info  <Badge type='info'>bilibili</Badge>\r
\r
- **<Badge type='info'>2023-07-04</Badge> 黑马程序员《Vue2+Vue3基础入门到实战项目全套教程》<Badge type='warning'>主流</Badge>**\r
\r
\r
\r
> vue2 + vue3 比较TOP的培训机构，不过他们的广告词太可怕了，每次看都很羞耻，影响学习效率。\r
\r
\r
- [前端最新Vue2+Vue3基础入门到实战项目全套教程，自学前端vue就选黑马程序员，一套全通关！](https://www.bilibili.com/video/BV1HV4y1a7n4/?share_source=copy_web&vd_source=208ad8437d7a696e8bb3807400e31301)\r
\r
:::\r
\r
\r
<br>\r
\r
<br>\r
\r
<br>\r
\r
---\r
<Badge type='info'>本页脚注</Badge>\r
\r
\r
\r
\r
## 项目`,vo=`::: danger  <Badge type='info'>警示</Badge>\r
请先安装node！！！\r
[enter](/zo-repo/nodejs/00%20简述.md){target='_blank'}\r
:::\r
\r
\r
## vite 常规创建 ❎\r
\r
### 创建指令\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm create vite\r
\`\`\`\r
\`\`\`shell [pnpm]\r
pnpm create vite\r
\`\`\`\r
:::\r
\r
## vite 快速创建 ✅\r
\r
### 快速创建\r
\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm create vue@latest\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm create vue@latest\r
\`\`\`\r
\r
:::\r
\r
\r
### 初始配置\r
\r
> 初学者默认都选 \`NO\` 就行。\r
\r
\r
\`\`\`shell\r
# 填写项目名称  英文、数字、下划线\r
✔ Project name: … <your-project-name>\r
\r
# 是否使用 ts\r
✔ Add TypeScript? … No / Yes\r
\r
# 是否使用 jsx\r
✔ Add JSX Support? … No / Yes\r
\r
# 是否使用 vue-Router\r
✔ Add Vue Router for Single Page Application development? … No / Yes\r
\r
# 是否使用 Pinia\r
✔ Add Pinia for state management? … No / Yes\r
\r
# 是否使用 Vitest\r
✔ Add Vitest for Unit testing? … No / Yes\r
\r
# 是否使用\r
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright\r
\r
# 是否使用 ESLint\r
✔ Add ESLint for code quality? … No / Yes\r
\r
# 是否使用 Prettier\r
✔ Add Prettier for code formatting? … No / Yes\r
\r
\r
Scaffolding project in ./<your-project-name>...\r
Done.\r
\`\`\`\r
`,_o="```shell\r\n\"dev\":'vite --open'\r\n```",bo=`---\r
aside: false \r
---\r
# 在HTML中使用vue\r
\r
---\r
\r
**:boom:很少这样使用vue，如果真的有这样的需求，参照下面代码使用vue3**  \r
\r
---\r
\r
::: info  <Badge type='info'>代码示例</Badge>\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="cn">\r
<head>\r
    <meta charset="UTF-8">\r
    <title>your_site_name</title>\r
    <!-- 引入vue.js代码 -->\r
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script> // [!code warning]\r
</head>\r
<body>\r
    <!-- 用 id 绑定vue语法应用的范围 -->\r
    <div id="app">  // [!code warning]\r
        {{test}}\r
    </div>\r
</body>\r
<script>\r
    //这是使用 vue3 的基本格式\r
    const {createApp , ref } = Vue\r
    const app =  createApp({\r
        setup(){\r
            //从这里开始到return前，写你的代码逻辑\r
            const test = ref("test")\r
            //注意，return中要把你上面的代码逻辑中定义的所有[变量名称]和[函数名称]写下来。 // [!code warning]\r
            return {\r
                test,\r
            }\r
        }\r
    })\r
    //应用vue（就是挂载在上面ID绑定的元素上）\r
    app.mount("#app") // [!code warning]\r
<\/script>\r
</html>\r
\`\`\`\r
\r
\r
\r
\r
\r
:::`,yo=`## SASS\r
\r
> 一般都会使用到sass\r
\r
> 存在 \`sass\` 依赖才能写 \`scss\` 代码\r
\r
> 所以，为啥取两个名字，大佬来解释下\r
\r
\`\`\`shell\r
pnpm i sass -D \r
\`\`\`\r
### scss的全局变量\r
\r
- 新建文件：将项目的sass中的全局变量放在\`/src/assets/styles/variable.scss\`\r
\r
- 在自定义变量名称前加\`$\`\r
\r
\`\`\`scss\r
$my_color: red\r
\`\`\`\r
\r
- 别的scss文件就可以直接用，当然还得在配置文件中添加配置项\r
\r
\`\`\`scss\r
color：$my_color ；\r
\`\`\`\r
\r
- 在 \`vite.config.ts\`中进行scss全局变量的配置\r
\r
\`\`\`javascript\r
  // vite.config.ts\r
  // scss全局变量的配置\r
  // 请注意修改具体的文件路径\r
  css: {\r
    preprocessorOptions: {\r
      scss: {\r
        javasrciptEnabled: true,\r
        additionalData: '@import "./src/assets/styles/variable.scss";'\r
      }\r
    }\r
  }\r
\`\`\`\r
\r
\r
\r
## ESLint\r
\r
\`\`\`shell\r
pnpm i eslint -D\r
\`\`\`\r
> s初始化\r
\r
\`\`\`shell\r
npx eslint --init\r
\`\`\`\r
\r
## 集成SVG\r
\r
::: code-group\r
 \r
\r
\`\`\`shell [npm]\r
npm i vite-plugin-svg-icons -D\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm i vite-plugin-svg-icons -D\r
\`\`\`\r
\r
:::\r
\r
\r
\r
> 使用\r
\r
\`\`\`vue\r
    <svg>\r
      <use xlink:href="#icon-phone"></use>\r
    </svg>\r
\`\`\`\r
\r
\r
## element UI\r
\r
### 安装\r
\r
::: code-group\r
 \r
\`\`\`shell [npm]\r
npm install element-plus --save\r
\`\`\`\r
\r
\`\`\`shell [yarn]\r
yarn add element-plus\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm install element-plus\r
\`\`\`\r
 \r
:::\r
\r
> 完整导入\r
\r
\`\`\`ts\r
// main.ts\r
import { createApp } from 'vue'\r
import ElementPlus from 'element-plus'\r
import 'element-plus/dist/index.css'\r
import App from './App.vue'\r
const app = createApp(App)\r
app.use(ElementPlus)\r
app.mount('#app')\r
\`\`\`\r
> volar \r
\r
\`\`\`javascript\r
// tsconfig.json\r
{\r
  "compilerOptions": {\r
    // ...\r
    "types": ["element-plus/global"]\r
  }\r
}\r
\`\`\`\r
\r
> 汉化\r
\r
\`\`\`javascript\r
// 导入element组件库\r
import ElementPlus from 'element-plus'\r
// @ts-ignore\r
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'\r
// 导入对应的样式\r
import 'element-plus/dist/index.css'\r
// 使用element组件\r
app.use(ElementPlus, {\r
    locale: zhCn\r
})\r
\`\`\`\r
\r
\r
\r
\r
## element icons\r
\r
\`\`\`shell\r
pnpm i @element-plus/icons-vue\r
\`\`\`\r
\r
## axios\r
\r
::: code-group\r
 \r
\`\`\`shell [npm]\r
npm install axios\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm i axios\r
\`\`\`\r
 \r
:::\r
\r
> 二次封装\r
\r
## 全屏功能的实现\r
\`\`\`shell\r
pnpm i screenfull\r
\`\`\``,fo="单词的字母需要大写",wo="```js\r\nimport MyComponent from './App.vue'\r\n```",jo=`> 组件文件中 \`components/index.ts\`\r
\r
\`\`\`ts\r
import MoMo from './MoMo/index.vue'\r
\r
const allGlobalComponents: any = { MoMo, }\r
\r
export default {\r
    install(app: any) {\r
        Object.keys(allGlobalComponents).forEach(key => {\r
            app.component(key, allGlobalComponents[key])\r
        })\r
\r
    }\r
}\r
\`\`\`\r
\r
> src/main.ts\r
\r
\`\`\`ts\r
// 注册全局组件\r
import gloalComponemnts from '@/components/index'\r
app.use(gloalComponemnts)\r
\`\`\``,ko=`# Ref & Reactive\r
\r
## ref\r
\r
- 基本数据类型\r
\r
- **\`ref()\` 包裹的数据会变成响应式数据**\r
\r
- 即是，你在脚本里改变数据时，页面中对应的数据也会对应改变。\r
\r
> **但是，注意在处理数据时，在 \`<script>\` 中的代码要加上 \`.value\` ，但在 \`\`<template>\`\` 中修改不需要加。**\r
\r
\r
::: code-group\r
\r
\`\`\`javascript [javascript]\r
import { ref } from "vue";\r
const username = ref('momo')\r
username.value = 'xoxo'\r
\`\`\`\r
\r
\`\`\`html [template]\r
<div>\r
    {{username}}\r
</div>\r
\`\`\`\r
\r
\r
:::\r
\r
\r
## reactive\r
\r
> 只能定义对象类型的数据\r
\r
## ref 和 reactive 的异同\r
\r
\r
\r
\`\`\`javascript\r
Object.assign(obj1,obj2)\r
\`\`\``,xo="",zo="",Bo="",qo=`> 四种数据\r
\r
> ref()\r
\r
> reactive()\r
\r
> 函数的返回的一个值(geter函数)\r
\r
> 包括上述内容的数组\r
\r
\`\`\`javascript\r
watch(监视数据，回调函数，配置对象)\r
\`\`\`\r
\r
- 情形一：监视ref(基本数据)\r
\r
\`\`\`javascript\r
import { ref , watch } from "vue";\r
let momo = ref('')\r
// 此处ref数据不用.value\r
watch(momo,(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
})\r
\`\`\`\r
停止监视\r
\r
\`\`\`javascript\r
const stop_watch = watch(momo,(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
    if(your_judge){\r
        stop_watch()\r
    }\r
})\r
\`\`\`\r
\r
- 情形二：监视ref(对象类型) ,需要深度监视\r
\r
> 若修改的是ref()定义对象中的属性，newValue和oldValue都是新值，因为它们都是同一个对象。\r
\r
> 若修改的是ref()定义对象中的整个对象，newValue是新值，oldValue是旧值，因为它们不再是同一个对象了。\r
\r
\`\`\`javascript\r
import { ref , watch } from "vue";\r
let person = ref({\r
    name:'nono',\r
    age:18\r
})\r
// 此处ref数据不用.value\r
watch(person,(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
},{deep:ture})\r
\`\`\`\r
停止监视\r
\r
\`\`\`javascript\r
//  若是想立即执行一次，加immediate\r
watch(person,(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
},{deep:true，immediate:true})\r
\`\`\`\r
\r
- 情形三：监视reactive(对象类型)  ，默认开启深度监视\r
\r
\r
\r
\`\`\`javascript\r
import { reactive , watch } from "vue";\r
let person = reactive({\r
    name:'nono',\r
    age:18\r
})\r
\r
watch(person,(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
})\r
\`\`\`\r
\r
\r
- 情形四：监视reactive或ref(对象类型)中的某个属性变化，\r
\r
\`\`\`javascript\r
import { reactive } from "vue";\r
let person = reactive({\r
    name:'momo',\r
    age:18,\r
    like:{\r
        color: 'red',\r
        food: 'peer'\r
    }\r
})\r
watch( () => person.name,(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
})\r
\`\`\`\r
\r
\`\`\`javascript\r
import { ref } from "vue";\r
let person = ref({\r
    name:'momo',\r
    age:18,\r
    like:{\r
        color: 'red',\r
        food: 'peer'\r
    }\r
})\r
watch( () => person.value.name,(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
})\r
\`\`\`\r
\r
- 情形五：监视多个数据\r
\r
\`\`\`javascript\r
import { reactive } from "vue";\r
let person = reactive({\r
    name:'momo',\r
    age:18,\r
    like:{\r
        color: 'red',\r
        food: 'peer'\r
    }\r
})\r
watch( [() => person.name, () => person.like.food],(newValue,oldValue)=>{\r
    console.log(newValue,oldValue);\r
})\r
\`\`\``,So="",To=`## vue2\r
\r
创建 beforeCreate() created()   \r
挂载 beforeMount()  mounted()  \r
更新 beforeUpdate()  updated()  \r
销毁 beforeDestroy()  destroyed()  \r
\r
## vue3\r
\r
创建 setup()\r
挂载 onBeforeMount()  onMounted()  \r
更新 onBeforeUpdate()  onUpdated()  \r
卸载 onBeforeUnmount()  onUnmounted()  \r
`,Eo=`### 插槽\r
\r
默认插槽\r
\r
具名插槽\r
\r
作用域插槽`,Po=`## 父传子\r
\r
### props\r
\r
- 单向数据流、只读的 readonly\r
\r
> 父组件传值：通过'自定义属性'\r
\r
> 子组件接收：用\`defineProps(['属性名'])\`接收\r
\r
::: code-group\r
\r
\`\`\`html [父组件]\r
<template>\r
    <child xo="2024"  :xos="month"></child>\r
</template>\r
<script>\r
    import { child } from "./child.vue";\r
    import { ref } from "vue";\r
    const month = ref(12)\r
<\/script>\r
\`\`\`\r
\`\`\`html [子组件]\r
<template>\r
    <div>\r
        {{xo}} - {{xos}}\r
    </div>\r
</template>\r
<<script>\r
    // 宏函数，可以不用导入\r
    import { defineProps } from "vue";\r
    defineProps([xo,xos])\r
<\/script>\r
\`\`\`\r
\r
:::\r
\r
## 子传父\r
\r
### 自定义事件\r
\r
> 父组件接收：绑定自定义事件\r
\r
> 子组件传值：\r
\r
::: code-group\r
\r
\`\`\`html [父组件]\r
<template>\r
    <child @xo="fun()" ></child>\r
</template>\r
<script>\r
    import { child } from "./child.vue";\r
    const fun = () => {\r
\r
    }\r
<\/script>\r
\`\`\`\r
\`\`\`html [子组件]\r
<template>\r
    <div @click="handle()"></div>\r
</template>\r
<<script>\r
    // 宏函数，可以不用导入\r
    import { defineEmits } from "vue";\r
    let $emit = defineEmits(['xo'])\r
    const handle = ()=>{\r
        // 第一个参数为事件类型，其他参数为注入数据\r
        $emit('xo','想传的数据')\r
    }\r
<\/script>\r
\`\`\`\r
\r
:::\r
`,Oo="",Co="",Fo=`## mitt\r
\r
> 安装mitt\r
\r
\`\`\`shell\r
npm i mitt\r
\`\`\`\r
> 创建专门文件夹 \r
\r
\r
\r
\r
\`\`\`javascript\r
// mitt 是一个方法\r
import { mitt } from "mitt";\r
export default const $bus = mitt()\r
\`\`\``,Do="",Io=`> 在src 下新建router文件夹，并创建router/index.js文件\r
\`\`\`javascript\r
// 导入\r
import { createRouter ,createWebHistory} from "vue-router";\r
import home from '@/components/home.vue'\r
// 创建路由器\r
const router = createRouter({\r
    history:createWebHistory(), //路由器的工作模式\r
    routes:[\r
        {\r
            path:'/home',\r
            components:home\r
        }\r
    ]\r
})\r
\r
export default router\r
\`\`\``,Ao='::: code-group\r\n```html [template]\r\n<router-link to="/home" active-class=""></router-link>\r\n```\r\n\r\n```javascript\r\nimport { RouterLink } from "vue-router";\r\n```\r\n:::',Mo=`- history 模式\r
\r
> 美观，不带#\r
> 但是需要后端服务器配置，否则会显示404\r
\r
- hash 模式\r
\r
> 兼容性比较好，不需要服务器处理路径`,Go=`::: info\r
> 字符串写法\r
\`\`\`html \r
<router-link to=""></router-link>\r
\`\`\`\r
> 对象写法-1\r
\r
\`\`\`html\r
<router-link :to="{path:'/home'}"></router-link>\r
\`\`\`\r
> 对象写法-2\r
\r
\`\`\`html\r
<router-link :to="{name:'home'}"></router-link>\r
\`\`\`\r
:::`,No="",Lo="```javascript\r\nimport useRouter from 'vue-router'\r\nconst router = useRouter()\r\nrouter.push('')\r\n```",Jo="",Ro=`\`\`\`javascript\r
import { createApp } from "vue";\r
import App from './App.vue'\r
import { createPinia } from "pinia";\r
const app = createApp(App)\r
const pinia = createPinia()\r
app.use(pinia)\r
app.mount('#app')\r
\`\`\`\r
\r
\`\`\`javascript\r
import {defineStore} from 'pinia'\r
\r
export const useUserStore = defineStore('文件名'，{\r
    state(){\r
        return {\r
            mo1:0,\r
            mo2:'momo'\r
        }\r
    }\r
})\r
\`\`\``,Uo="",Vo=`## 安装\r
\r
::: code-group\r
\r
\`\`\`shell [npm]\r
npm install element-plus --save\r
\`\`\`\r
\r
\`\`\`shell [yarn]\r
yarn add element-plus\r
\`\`\`\r
\r
\`\`\`shell [pnpm]\r
pnpm install element-plus\r
\`\`\`\r
\r
:::\r
\r
## 汉化\r
\r
`,Xo=`## 原生事件的异同\r
\r
> vue2中使用原生事件需要加 \`.native\`\r
\r
\`\`\`html\r
<template>\r
    <!-- 自定义事件 -->\r
    <button @click="fun()"></button>\r
    <!-- 原生事件需要加修饰符.native-->\r
    <button @click.native="fun()"></button>\r
</template>\r
\`\`\`\r
> vue3为即为原生事件\r
\r
\`\`\`html\r
<template>\r
    <!-- 原生事件 -->\r
    <button @click="fun()"></button>\r
</template>\r
\`\`\``,Qo=`## 创建项目\r
\r
### 创建项目文件夹\r
\r
### 项目文件下创建client\r
\r
### 安装依赖\r
\r
- vue3\r
\r
- electron`,Wo=`## 打包后页面空白\r
\r
> **问题描述**：\`pnpm run build\` 打包后，部署到 Github Page 页面空白\r
\r
> **解决办法**：在 \`vite.config.ts\` 中添加 \`base\`\r
\r
\`\`\`ts\r
import { defineConfig } from 'vite'\r
import vue from '@vitejs/plugin-vue'\r
\r
export default defineConfig({\r
  // 加相对路径\r
  base: './',\r
  plugins: [\r
    vue(),\r
  ],\r
})\r
\r
\`\`\``,Ho=`其一、报错的引入代码为：\r
\r
\`import {ParentComponent} from './components/ParentComponent.vue';\`\r
\r
其二、正确的 vue3 语法的引入代码为：\r
\r
\`import ParentComponent from './components/ParentComponent.vue';\`\r
\r
## \r
\r
`,Yo="",Ko=`# wordpress\r
\r
最大的建站的程序，\r
\r
`,Zo=Object.assign({"../notes/ReinstallTheOS/00 简述.md":v,"../notes/ReinstallTheOS/00 资料备份/01 备份须知.md":_,"../notes/ReinstallTheOS/01 系统重装/01 镜像下载.md":b,"../notes/ReinstallTheOS/01 系统重装/02 系统安装.md":y,"../notes/ReinstallTheOS/01 系统重装/03 激活与调试.md":f,"../notes/ReinstallTheOS/02 个性化恢复/01 壁纸与资源.md":w,"../notes/ReinstallTheOS/02 个性化恢复/02 外设连接.md":j,"../notes/ReinstallTheOS/02 个性化恢复/03 软件恢复.md":k,"../notes/ReinstallTheOS/99 重装记录.md":x,"../notes/ReinstallTheOS/config.md":z,"../notes/boke-docs-user/01 环境搭建.md":B,"../notes/boke-docs-user/02 配置信息.md":q,"../notes/boke-docs-user/03 MD语法扩展.md":S,"../notes/boke-docs-user/09 其他.md":T,"../notes/boke-docs-user/config.md":E,"../notes/build-site/00 简述.md":P,"../notes/build-site/01 基础知识/01 避坑指引.md":O,"../notes/build-site/01 基础知识/02 建站途径.md":C,"../notes/build-site/02 网站内容搭建/00 简述.md":F,"../notes/build-site/02 网站内容搭建/01 hexo.md":D,"../notes/build-site/02 网站内容搭建/02 vitepress.md":I,"../notes/build-site/02 网站内容搭建/03 其他.md":A,"../notes/build-site/03 网站部署/00 简述.md":M,"../notes/build-site/03 网站部署/01 服务器购买.md":G,"../notes/build-site/03 网站部署/02 后台搭建知识.md":N,"../notes/build-site/03 网站部署/03 nginx部署.md":L,"../notes/build-site/04 域名注册/00 简述.md":J,"../notes/build-site/04 域名注册/01 域名购买.md":R,"../notes/build-site/05 网站运维/01 服务器到期的处理.md":U,"../notes/build-site/config.md":V,"../notes/c-sharp/00 简述.md":X,"../notes/c-sharp/01 环境配置/01 使用VS2022.md":Q,"../notes/c-sharp/01 环境配置/02 使用VScode.md":W,"../notes/c-sharp/02 基础知识/01 文件结构.md":H,"../notes/c-sharp/02 基础知识/02 基本语法.md":Y,"../notes/cocos-creator/00 简述.md":K,"../notes/cocos-creator/01 环境配置/01 下载编辑器.md":Z,"../notes/cocos-creator/01 环境配置/02 界面说明.md":$,"../notes/component-library/00 简述.md":rr,"../notes/component-library/01 Element-plus/01 导入.md":nr,"../notes/computer/01 硬件知识/00 前言.md":er,"../notes/computer/02 系统相关/01 镜像下载.md":tr,"../notes/computer/02 系统相关/02 系统重装.md":sr,"../notes/computer/03 扩展知识/02 虚拟机/02 虚拟机的创建/03 安装系统/01 win11演示.md":or,"../notes/computer/03 扩展知识/02 虚拟机/03 常见使用/01 宿主机与虚拟机的交互.md":ir,"../notes/docker/00 简述.md":ar,"../notes/docker/01 环境配置/01 Linux安装docker.md":dr,"../notes/docker/01 环境配置/02 windows安装docker.md":lr,"../notes/docker/02 基础知识/01 安装.md":gr,"../notes/docker/02 基础知识/02 基础指令.md":pr,"../notes/docker/02 基础知识/03 镜像操作.md":mr,"../notes/docker/02 基础知识/04 容器操作.md":cr,"../notes/docker/02 基础知识/05 数据卷操作.md":ur,"../notes/docker/02 基础知识/06 自定义镜像.md":hr,"../notes/docker/02 基础知识/07 网络.md":vr,"../notes/electron/00 简述.md":_r,"../notes/electron/01 前置准备.md":br,"../notes/electron/02 项目创建/01 安装与初始化.md":yr,"../notes/electron/03 调试工作/01 调试工具.md":fr,"../notes/electron/04 窗口/01 创建窗口.md":wr,"../notes/electron/05 主进程/01 app.md":jr,"../notes/electron/06 菜单/01 顶部菜单栏.md":kr,"../notes/electron/07 托盘/01 简述.md":xr,"../notes/express/00 简述.md":zr,"../notes/express/01 导入与使用.md":Br,"../notes/express/04 数据库/01 sqlite3.md":qr,"../notes/express/04 数据库/02 mysql.md":Sr,"../notes/express/04 数据库/03 sqlite3-ORM.md":Tr,"../notes/express/08 示例项目/00 目录结构.md":Er,"../notes/express/08 示例项目/01 app.js.md":Pr,"../notes/express/08 示例项目/02 db/01 blog.sqlite3文件.md":Or,"../notes/express/08 示例项目/02 db/02 DbUtils.js.md":Cr,"../notes/express/08 示例项目/03 package-lock.json.md":Fr,"../notes/express/08 示例项目/04 package.json.md":Dr,"../notes/express/08 示例项目/06 routers/01 AdminRouter.js.md":Ir,"../notes/express/08 示例项目/06 routers/02 BlogRouter.js.md":Ar,"../notes/express/08 示例项目/06 routers/03 CategoryRouter.js.md":Mr,"../notes/express/08 示例项目/06 routers/04 TestRouter.js.md":Gr,"../notes/express/08 示例项目/06 routers/05 UploadRouter.js.md":Nr,"../notes/express/08 示例项目/07 utils/01 SnowFlake.js.md":Lr,"../notes/express/09 数据库使用.md":Jr,"../notes/game/00 简述.md":Rr,"../notes/game/01 游戏常识/01 steam基本知识.md":Ur,"../notes/game/01 游戏常识/01 平台相关.md":Vr,"../notes/game/01 游戏常识/02 MOD与修改器.md":Xr,"../notes/game/01 游戏常识/03 MOD与创意工坊.md":Qr,"../notes/game/01 游戏指南/01 戴森球.md":Wr,"../notes/game/01 游戏指南/02 中土世界：暗影摩多.md":Hr,"../notes/game/01 游戏指南/03 一起玩农场.md":Yr,"../notes/game/01 游戏指南/04 无人深空.md":Kr,"../notes/game/01 游戏指南/05 幻兽帕鲁.md":Zr,"../notes/game/01 游戏指南/06 波西亚时光.md":$r,"../notes/game/01 游戏指南/07 星露谷.md":rn,"../notes/game/01 游戏指南/08 生化危机.md":nn,"../notes/game/02 手柄指南.md":en,"../notes/game/03 游戏合集/01 低配机可以的玩的游戏.md":tn,"../notes/github/00 简述.md":sn,"../notes/github/01 前置基础/01 Git下载与安装.md":on,"../notes/github/01 前置基础/02 GIt指令.md":an,"../notes/github/02 使用知识/01 账户设置.md":dn,"../notes/github/02 使用知识/02 仓库设置与操作.md":ln,"../notes/github/02 使用知识/03 软件安装包区分.md":gn,"../notes/github/03 .gitignore设置.md":pn,"../notes/github/04 主页美化.md":mn,"../notes/github/99 使用问题/01 software报错.md":cn,"../notes/github/99 使用问题/02 action报错.md":un,"../notes/html/00 简述.md":hn,"../notes/html/01 环境配置/01 浏览器选择.md":vn,"../notes/html/01 环境配置/02 编辑器选择.md":_n,"../notes/html/03 标签与功能/01 布局标签.md":bn,"../notes/html/03 标签与功能/02 图片.md":yn,"../notes/html/03 标签与功能/03 视频.md":fn,"../notes/html/03 标签与功能/04 字体与字体图标.md":wn,"../notes/javascript/00 简述.md":jn,"../notes/javascript/01 基本知识/01 书写位置、注释与结束符.md":kn,"../notes/javascript/01 基本知识/03 基本语法.md":xn,"../notes/javascript/01 基本知识/04 变量与常量.md":zn,"../notes/javascript/01 基本知识/05 数据类型.md":Bn,"../notes/javascript/01 基本知识/06 运算符号.md":qn,"../notes/javascript/01 基本知识/07 表达式与语句.md":Sn,"../notes/javascript/01 基本知识/08 调试与异常处理.md":Tn,"../notes/javascript/01 基本知识/09 JS的执行机制.md":En,"../notes/javascript/01 基本知识/10 类型转换[进阶].md":Pn,"../notes/javascript/01 基本知识/12 防抖.md":On,"../notes/javascript/02 字符串/01 方法.md":Cn,"../notes/javascript/02 字符串/01 查询字符串.md":Fn,"../notes/javascript/02 字符串/02 截取字符串.md":Dn,"../notes/javascript/03 数组操作/01 数组基本操作.md":In,"../notes/javascript/03 数组操作/02 解构赋值.md":An,"../notes/javascript/03 数组操作/05 数组去重.md":Mn,"../notes/javascript/03 数组操作/06 map.md":Gn,"../notes/javascript/03 数组操作/07 join.md":Nn,"../notes/javascript/03 数组操作/09 forEach.md":Ln,"../notes/javascript/03 数组操作/10 filter.md":Jn,"../notes/javascript/03 数组操作/11 reduce.md":Rn,"../notes/javascript/03 数组操作/12 数组的其他方法.md":Un,"../notes/javascript/03 数组操作/13 合并数组.md":Vn,"../notes/javascript/03 数组操作/14 数组去重.md":Xn,"../notes/javascript/04 对象/01 对象.md":Qn,"../notes/javascript/04 对象/02 增删改查.md":Wn,"../notes/javascript/04 对象/03 遍历对象.md":Hn,"../notes/javascript/04 对象/04 math对象.md":Yn,"../notes/javascript/04 对象/05 对象解构赋值.md":Kn,"../notes/javascript/04 对象/06 内置的函数.md":Zn,"../notes/javascript/04 对象/07 深浅拷贝.md":$n,"../notes/javascript/05 函数/01 声明.md":re,"../notes/javascript/05 函数/02 参数.md":ne,"../notes/javascript/05 函数/03 返回值.md":ee,"../notes/javascript/05 函数/04 作用域.md":te,"../notes/javascript/05 函数/05 匿名函数.md":se,"../notes/javascript/05 函数/06 回调函数.md":oe,"../notes/javascript/05 函数/07 环境对象.md":ie,"../notes/javascript/05 函数/08 函数提升.md":ae,"../notes/javascript/05 函数/09 箭头函数.md":de,"../notes/javascript/05 函数/10 构造函数.md":le,"../notes/javascript/05 函数/11 this.md":ge,"../notes/javascript/06 DOM/01 简述.md":pe,"../notes/javascript/06 DOM/02 获取DOM元素.md":me,"../notes/javascript/06 DOM/03 修改DOM元素.md":ce,"../notes/javascript/06 DOM/04 定时器.md":ue,"../notes/javascript/06 DOM/05 标签的自定义属性.md":he,"../notes/javascript/06 DOM/06 事件监听（绑定).md":ve,"../notes/javascript/06 DOM/07 事件流.md":_e,"../notes/javascript/06 DOM/08 事件委托.md":be,"../notes/javascript/06 DOM/09 阻止默认行为.md":ye,"../notes/javascript/06 DOM/10 页面加载事件.md":fe,"../notes/javascript/06 DOM/11 日期对象.md":we,"../notes/javascript/06 DOM/12 节点操作.md":je,"../notes/javascript/06 DOM/13 触屏事件.md":ke,"../notes/javascript/07 BOM/01 window对象.md":xe,"../notes/javascript/07 BOM/02 定时函数.md":ze,"../notes/javascript/07 BOM/03 事件循环.md":Be,"../notes/javascript/07 BOM/04 location.md":qe,"../notes/javascript/07 BOM/05 localStorage.md":Se,"../notes/javascript/08 正则表达式/01 定义正则表达式.md":Te,"../notes/javascript/08 正则表达式/02 元字符.md":Ee,"../notes/javascript/80 事件/01 点击事件.md":Pe,"../notes/javascript/80 事件/02 鼠标事件.md":Oe,"../notes/javascript/85 JS库/01 UUID.md":Ce,"../notes/javascript/85 JS库/02 axios.md":Fe,"../notes/javascript/config.md":De,"../notes/mysql/00 简述.md":Ie,"../notes/nestjs/00 简述.md":Ae,"../notes/nestjs/02 基本/01 初始化项目.md":Me,"../notes/network-request/00 简述.md":Ge,"../notes/network-request/01 axios/00 简述.md":Ne,"../notes/network-request/02 mo/01 mo.md":Le,"../notes/nginx/00 简述.md":Je,"../notes/nginx/01 下载与安装.md":Re,"../notes/nginx/02 命令与配置.md":Ue,"../notes/nodejs/00 简述.md":Ve,"../notes/nodejs/01 基础知识/00 下载与安装.md":Xe,"../notes/nodejs/01 基础知识/01 命令行基础.md":Qe,"../notes/nodejs/01 基础知识/02 基本规则.md":We,"../notes/nodejs/01 基础知识/03 buffer.md":He,"../notes/nodejs/01 基础知识/04 版本管理.md":Ye,"../notes/nodejs/02 包管理工具/01 基本操作.md":Ke,"../notes/nodejs/02 包管理工具/02 发布与管理.md":Ze,"../notes/nodejs/03 模块知识/00 模块使用与导入.md":$e,"../notes/nodejs/03 模块知识/01 文件模块-file/01 文件写入.md":rt,"../notes/nodejs/03 模块知识/01 文件模块-file/03 文件读取.md":nt,"../notes/nodejs/03 模块知识/01 文件模块-file/04 文件重命名与移动.md":et,"../notes/nodejs/03 模块知识/01 文件模块-file/05 文件删除.md":tt,"../notes/nodejs/03 模块知识/01 文件模块-file/06 文件夹操作.md":st,"../notes/nodejs/03 模块知识/01 文件模块-file/07 文件信息查询.md":ot,"../notes/nodejs/03 模块知识/02 路径模块-path/01 path.md":it,"../notes/nodejs/03 模块知识/03 网络模块-http/01 HTTP协议.md":at,"../notes/nodejs/03 模块知识/03 网络模块-http/02 http模块.md":dt,"../notes/nodejs/03 模块知识/03 网络模块-http/03 http练习.md":lt,"../notes/nodejs/03 模块知识/04 模块化开发/01 模块化.md":gt,"../notes/nodejs/03 模块知识/05 模板引擎/ejs.md":pt,"../notes/nodejs/05 小技巧与功能实现/01 node注册成win服务.md":mt,"../notes/nodejs/09 es语法差异/01 差异.md":ct,"../notes/nodejs/99 报错合集.md":ut,"../notes/python/00 简述.md":ht,"../notes/python/01 环境配置/01 编辑器环境.md":vt,"../notes/python/01 环境配置/02 python环境.md":_t,"../notes/python/02 基础知识/01 注释.md":bt,"../notes/python/02 基础知识/02 字面量与常量.md":yt,"../notes/python/02 基础知识/03 变量.md":ft,"../notes/react/00 简述.md":wt,"../notes/react/01 前置准备/01 知识储备.md":jt,"../notes/react/01 前置准备/02 开发环境.md":kt,"../notes/react/04 数据绑定/02 input.md":xt,"../notes/react/04 数据绑定/03 dom绑定.md":zt,"../notes/react/05 组件通信/01 父子通信.md":Bt,"../notes/react/06 useEffect/01 01.md":qt,"../notes/react/08 redux/01 基本使用.md":St,"../notes/react/08 redux/02 React中使用.md":Tt,"../notes/scss/00 简述.md":Et,"../notes/scss/01 基础知识/00 定义变量.md":Pt,"../notes/scss/01 基础知识/01 文件引用.md":Ot,"../notes/scss/01 基础知识/03 全局使用.md":Ct,"../notes/scss/02 字体与文本处理/01 改变字体.md":Ft,"../notes/scss/02 字体与文本处理/02 引用字体.md":Dt,"../notes/scss/02 字体与文本处理/03 字体资源.md":It,"../notes/scss/02 字体与文本处理/04 渐变字体.md":At,"../notes/scss/02 字体与文本处理/05 下划线.md":Mt,"../notes/scss/04 界面切换/01 简述.md":Gt,"../notes/scss/09 常见应用/01 滚动条美化.md":Nt,"../notes/scss/09 常见应用/02 样式清楚.md":Lt,"../notes/scss/09 常见应用/03 移动端适配.md":Jt,"../notes/scss/09 常见应用/04 界面阴影.md":Rt,"../notes/scss/09 常见应用/05 网格背景.md":Ut,"../notes/scss/09 常见应用/06 彩虹背景.md":Vt,"../notes/scss/09 常见应用/07 毛玻璃效果.md":Xt,"../notes/sqlite/00 简述.md":Qt,"../notes/sqlite/01 下载与使用.md":Wt,"../notes/teleplay/02 影视评价.md":Ht,"../notes/typescript/00 简述.md":Yt,"../notes/typescript/01 基础与语法/01 安装与使用.md":Kt,"../notes/typescript/01 基础与语法/02 初始化项目.md":Zt,"../notes/typescript/01 基础与语法/03 类型声明.md":$t,"../notes/typescript/02 类型/01 原始类型.md":rs,"../notes/typescript/02 类型/02 元组.md":ns,"../notes/uniapp/00 简述.md":es,"../notes/uniapp/01 基本配置/01 编辑器环境.md":ts,"../notes/uniapp/01 基本配置/02 项目创建.md":ss,"../notes/uniapp/02 模块设计/03 底部导航.md":os,"../notes/uniapp/02 模块设计/04 启动界面.md":is,"../notes/vitepress/00 简述.md":as,"../notes/vitepress/01 项目创建/00 环境配置.md":ds,"../notes/vitepress/01 项目创建/01 安装与初始化.md":ls,"../notes/vitepress/01 项目创建/02 项目目录解读.md":gs,"../notes/vitepress/01 项目创建/03 本地运行与调试.md":ps,"../notes/vitepress/01 项目创建/04 个人特色配置.md":ms,"../notes/vitepress/02 站点配置/01 站点元数据.md":cs,"../notes/vitepress/03 网站编辑/00 简述.md":us,"../notes/vitepress/03 网站编辑/01 标题：SiteTitle.md":hs,"../notes/vitepress/03 网站编辑/02 标志：Logo.md":vs,"../notes/vitepress/03 网站编辑/03 导航菜单：Nav.md":_s,"../notes/vitepress/03 网站编辑/04 侧边栏：sidebar.md":bs,"../notes/vitepress/03 网站编辑/05 页面大纲：outline.md":ys,"../notes/vitepress/03 网站编辑/06 大纲容器：aside.md":fs,"../notes/vitepress/03 网站编辑/07 页脚：footer.md":ws,"../notes/vitepress/03 网站编辑/08 搜索：search.md":js,"../notes/vitepress/03 网站编辑/09 徽章：badge.md":ks,"../notes/vitepress/03 网站编辑/10 社交链接.md":xs,"../notes/vitepress/03 网站编辑/99 frontmatter.md":zs,"../notes/vitepress/04 文档编辑/00 简述.md":Bs,"../notes/vitepress/04 文档编辑/01 文件路径.md":qs,"../notes/vitepress/04 文档编辑/02 标题.md":Ss,"../notes/vitepress/04 文档编辑/03 文字强调.md":Ts,"../notes/vitepress/04 文档编辑/04 下划线.md":Es,"../notes/vitepress/04 文档编辑/05 字体美化.md":Ps,"../notes/vitepress/04 文档编辑/06 超链接.md":Os,"../notes/vitepress/04 文档编辑/07 列表.md":Cs,"../notes/vitepress/04 文档编辑/08 表格.md":Fs,"../notes/vitepress/04 文档编辑/09 图片.md":Ds,"../notes/vitepress/04 文档编辑/10 emoji 表情.md":Is,"../notes/vitepress/04 文档编辑/11 自定义容器.md":As,"../notes/vitepress/04 文档编辑/12 代码块.md":Ms,"../notes/vitepress/04 文档编辑/13 代码组.md":Gs,"../notes/vitepress/04 文档编辑/14 脚注.md":Ns,"../notes/vitepress/04 文档编辑/15 思维导图.md":Ls,"../notes/vitepress/04 文档编辑/16 分割线.md":Js,"../notes/vitepress/04 文档编辑/45 嵌入文档.md":Rs,"../notes/vitepress/04 文档编辑/99 视频.md":Us,"../notes/vitepress/05 使用vue/01 组件的全局注册.md":Vs,"../notes/vitepress/06 项目部署/01 Github部署/01 前置步骤.md":Xs,"../notes/vitepress/06 项目部署/01 Github部署/02 构建配置.md":Qs,"../notes/vitepress/06 项目部署/01 Github部署/03 自动化部署.md":Ws,"../notes/vitepress/06 项目部署/01 Github部署/04 常规部署.md":Hs,"../notes/vitepress/06 项目部署/02 服务器部署/01 node后台.md":Ys,"../notes/vitepress/07 插件生态.md":Ks,"../notes/vitepress/10 问题与报错.md":Zs,"../notes/vitepress/config.md":$s,"../notes/vscode/00 简述.md":ro,"../notes/vscode/01 下载与安装/01 下载.md":no,"../notes/vscode/01 下载与安装/02 汉化.md":eo,"../notes/vscode/02 基本使用/01 常用设置.md":to,"../notes/vscode/02 基本使用/02 快捷键.md":so,"../notes/vscode/02 基本使用/03 用户代码片段.md":oo,"../notes/vscode/03 插件/00 插件安装演示.md":io,"../notes/vscode/03 插件/01 通用型插件/01 ProjectManager.md":ao,"../notes/vscode/03 插件/01 通用型插件/02 cssrem.md":lo,"../notes/vscode/03 插件/02 markdown相关/01 MarkdownPreviewEnhanced.md":go,"../notes/vscode/03 插件/99 自用插件清单.md":po,"../notes/vscode/04 相关问题/00 问题.md":mo,"../notes/vscode/05 代码片段/00 创建.md":co,"../notes/vscode/05 代码片段/01 markdown代码提示.md":uo,"../notes/vue/00 简述.md":ho,"../notes/vue/01 创建项目/01 vite构建.md":vo,"../notes/vue/01 创建项目/02 目录解读.md":_o,"../notes/vue/01 创建项目/03 原生html中使用.md":bo,"../notes/vue/01 创建项目/04 可选内容.md":yo,"../notes/vue/04 组件基础/01 命名规范.md":fo,"../notes/vue/04 组件基础/01 导入组件.md":wo,"../notes/vue/04 组件基础/03 组件的全局注册.md":jo,"../notes/vue/05 响应式数据/01 ref、reactive.md":ko,"../notes/vue/05 响应式数据/02 自定义ref.md":xo,"../notes/vue/05 响应式数据/04 toRef.md":zo,"../notes/vue/05 响应式数据/05 双向绑定.md":Bo,"../notes/vue/07 侦听器/01 watch.md":qo,"../notes/vue/07 侦听器/02 watchEffect.md":So,"../notes/vue/09 生命周期/01 简述.md":To,"../notes/vue/10 组件通信/01 简述.md":Eo,"../notes/vue/10 组件通信/02 父子通信.md":Po,"../notes/vue/10 组件通信/03 祖孙通信.md":Oo,"../notes/vue/10 组件通信/04 兄弟通信.md":Co,"../notes/vue/10 组件通信/05 全局总线.md":Fo,"../notes/vue/80 路由/01 简述.md":Do,"../notes/vue/80 路由/02 创建路由.md":Io,"../notes/vue/80 路由/03 router-view.md":Ao,"../notes/vue/80 路由/04 路由模式.md":Mo,"../notes/vue/80 路由/05 router-Link.md":Go,"../notes/vue/80 路由/06 嵌套路由.md":No,"../notes/vue/80 路由/07 编程式路由跳转.md":Lo,"../notes/vue/80 路由/08 重定向.md":Jo,"../notes/vue/90 pinia/01 创建.md":Ro,"../notes/vue/90 pinia/02 数据存储.md":Uo,"../notes/vue/91 UI组件库/01 element_UI.md":Vo,"../notes/vue/97 vue2遗留问题/01 vue2与vue3不同点.md":Xo,"../notes/vue/98 项目练习/01 mo_browser.md":Qo,"../notes/vue/99 报错合集/01 部署问题.md":Wo,"../notes/vue/99 报错合集/04 router.md":Ho,"../notes/vue/vue.md":Yo,"../notes/wordpress/00 简述.md":Ko}),$o={cover:"momo",desc:"暂无描述"};function ri(){const n={};return Object.entries(Zo).forEach(([s,i])=>{const o=s.replace(/^.*notes\//,"").split("/"),r=o[0],e=o.slice(1).join("/"),{attributes:t,body:a}=c(i),{render:p}=u(),{html:d}=p(a);if(n[r]||(n[r]={id:r,path:"/notes/"+r,categories:[r],meta:{...$o},files:[]}),e.toLowerCase()==="config.md")n[r].meta={...n[r].meta,...t},n[r].content=a,n[r].html=d;else{const m=e.replace(/\.md$/,""),l=h(e);n[r].files.push({id:l,meta:{...t,title:t.title||l},content:a,html:d,path:`/notes/${r}/${m}`,subPath:e.replace(/\.md$/,"")})}}),Object.values(n)}function ei(n){return ri().flatMap(s=>s.files).find(s=>s.path===n)}function ti(n){const i=new DOMParser().parseFromString(n,"text/html");return Array.from(i.querySelectorAll("h2, h3, h4, h5, h6")).map(o=>{const r=Number(o.tagName.substring(1)),e=o.textContent?.trim()??"";let t=o.id?.trim()??"";return t||(t=e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]/g,"").replace(/\-+/g,"-").replace(/^\-+|\-+$/g,"")),{level:r,title:e,slug:t}})}export{ei as a,ti as b,ri as g};
