const n=`---\r
date: 2025-09-30\r
category: '教程'\r
icon: \r
cover: 'computer'\r
tags: ['系统重装','win10','PE','电脑知识']\r
# password: 'momo'\r
---\r
\r
\r
::: danger 💡 提示\r
\r
**本部分笔记是个人重装系统后的常规步骤，具有强烈的主观性，请勿模仿！**\r
\r
:::\r
\r
\r
## 0. 相关备注\r
\r
- 磁盘分区 200G = 205824 \r
\r
\r
## 1. 旧数据备份与处理\r
\r
### 1.1  同步电脑中项目代码\r
\r
我的项目代码存储在 \`E:codes\` 文件夹中的，记得同步到 \`github\` 上\r
\r
> 💡 如果项目中有 **隐藏** 或者被 \`.gitignore\` 忽略的文件或者文件夹记得要备份\r
\r
- 例如： zo-notes 项目文件下的 me-repo 文件夹\r
\r
---\r
\r
### 1.2   **snippets** 是否备份\r
\r
检查 **VSC** 中的用户代码片段！\r
\r
- 同步账号为 \`hengqianfan\` <i class="iconfont icon-github"></i>\r
\r
---\r
\r
### 1.3  检查 \`WPS\` 的同步文件夹\r
\r
---\r
\r
### 1.4 订阅地址备份\r
\r
---\r
\r
### 1.5 资源文件夹备份\r
\r
我的资源文件夹： \`E:resource\` \r
\r
> <i class="iconfont icon-download"></i> [\`123pan - 我的文件 - resource\`](https://www.baidu.com)  \r
\r
---\r
\r
### 1.6 游戏数据备份\r
\r
可能需要备份的游戏数据：\r
\r
- 戴森球的存档\r
\r
---\r
\r
\r
## 2. 系统镜像资源\r
\r
### 2.1 网络资源\r
\r
- \`官方 WIN11 镜像\` [enter](https://www.microsoft.com/zh-cn/software-download/windows11)\r
\r
- \`我告诉你网站\` [enter](https://next.itellyou.cn/Original/)\r
\r
### 2.2 本地资源\r
\r
> 存储在 \`PE启动U盘\` 中\r
\r
|系统|版本|大小|\r
|---|---|---|\r
|win|Win10_22H2_Chinese_Simplified_x64v1|5.67G|\r
|win|tiny10 23h1 x64|3.67G|\r
|win|zh-cn_windows_11_enterprise_ltsc_2024_x64|4.92G|\r
\r
- 目前 win11 版本的 ISO 文件似乎存在无法安装的问题\r
\r
\r
## 3. 激活与密码配置\r
\r
\r
### 3.1 KMS 激活\r
\r
- 📌更新地址 [enter](https://kms.cx/)\r
\r
> 使用管理员权限的命令窗户 \r
\r
\`\`\`shell\r
slmgr /skms s1.kms.cx\r
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX\r
slmgr /ato\r
slmgr /xpr\r
\`\`\`\r
### 3.2 电脑本地密保\r
\r
- 经典参数，写代码爱用\r
\r
- 电脑自定义主题与资源: [enter](https://www.123pan.com/s/RRRYjv-uOS0A.html) <i class="iconfont icon-download"></i>\r
\r
\r
\r
## 4. 软件目录\r
\r
\r
|软件名称|软件类型|官网地址|备份地址|备注|\r
|:---:|:---:|:---:|:---:|:---:|\r
| V2 | 网络服务 | [enter](https://github.com/2dust/v2rayN/releases) | [\`① 蓝奏网盘\`](https://hqz1874.lanzouo.com/iYClo32nc3la) <br/> [\`② 123pan\`](https://www.123865.com/s/RRRYjv-iTi0A) | 版本： \`v2rayN-windows-64-desktop.zip\`|\r
| winrar | 文件处理 | [enter](https://www.win-rar.com/) |-|-|\r
| Geek | 软件卸载 | [enter](https://geekuninstaller.com/download)| - | -|\r
| VSCode | 代码编辑 | [enter](https://code.visualstudio.com/) |-| 裸连下载更快，别用加速器！ <br/> 及时同步 \`Github\` 账户 |\r
| Git | 版本管理 | [enter](https://git-scm.com/download)|-| 先安装 vsc 再安装 Git <br/> Git 安装时会选择默认代码编辑器 |\r
| Node | 代码运行 | [enter](https://nodejs.org/en) |-|安装后请注意必要的配置：<br/>  ① 脚本权限 <br/> ② 镜像源 <br/> ③ 全局包 <br/> 可以看 node 的笔记|\r
| Desktop | 代码上传 | [enter](https://desktop.github.com/) |-|注意，它是强制安装C盘|\r
| heidisql | 数据库类 | [enter](https://www.heidisql.com/) |-|-|\r
| mobaxterm | 网络运维 | [enter](https://mobaxterm.mobatek.net/)|-|-|\r
| PS2024 | 图片处理 | - | [\`123pan\`](https://www.123pan.com/?homeFilePath=4418600,11874630)| - | \r
| umi-OCR | 图片处理 | [enter](https://github.com/hiroi-sora/Umi-OCR) | - | - |\r
| snipaste | 图片处理 |  [\`enter\`](https://zh.snipaste.com/) | [\`蓝奏网盘\`](https://hqz1874.lanzouo.com/iT73V2k0ku9c)|-|\r
\r
## 5. 重装记录\r
\r
\r
### 2025-08-04\r
\r
理由：玛德，维修小哥给我下了鲁大师和360\r
\r
### 2025-01-05\r
\r
理由：闲的 \r
\r
\r
### 2024-03-31\r
\r
理由：闲的，顺便把流氓软件从宿主机放进虚拟机\r
\r
`;export{n as default};
