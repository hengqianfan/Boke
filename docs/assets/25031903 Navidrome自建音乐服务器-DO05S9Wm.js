const r=`---\r
aside: left\r
tags: ['修改中','Navidrome','音乐']\r
icon: 'navidrome'\r
open: false\r
id: 25031903\r
cover: 'navidrome'\r
\r
\r
--- \r
 \r
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}\r
 \r
<br/>\r
 \r
# Navidrome自建音乐服务器\r
\r
官网： https://www.navidrome.org/\r
\r
## 1. 终端搭建\r
\r
::: danger <Badge type='danger'>注意</Badge>\r
\r
因为网络问题，始终无法拉取镜像，所以此方法未完善,请看 \`1panel\` 搭建！ \r
\r
:::\r
\r
### 1.1 安装 docker 环境\r
\r
#### 1.1.1 卸载旧版本 Docker（如果存在）\r
\r
\`\`\`shell\r
sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine\r
\`\`\`\r
\r
#### 1.1.2 安装依赖\r
\r
\`\`\`shell\r
sudo yum install -y yum-utils device-mapper-persistent-data lvm2\r
\`\`\`\r
\r
\r
#### 1.1.3 添加 Docker 官方仓库\r
\r
\`\`\`shell\r
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\r
\`\`\`\r
\r
⭐ **如果使用的国内的服务器，建议使用阿里云镜像仓库**\r
\r
\`\`\`shell\r
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\r
\`\`\`\r
\r
清理缓存\r
\r
\`\`\`shell\r
sudo yum makecache fast\r
\`\`\`\r
\r
#### 1.1.4 安装 Docker\r
\r
\`\`\`shell\r
sudo yum install -y docker-ce docker-ce-cli containerd.io\r
\`\`\`\r
\r
判断是否安装成功，可以执行下面代码\r
\r
\`\`\`shell\r
docker -v\r
\`\`\`\r
\r
#### 1.1.5 启动 Docker 并设置开机自启\r
\r
\`\`\`shell\r
sudo systemctl start docker\r
\`\`\`\r
\r
\`\`\`shell\r
sudo systemctl enable docker\r
\`\`\`\r
\r
\r
#### 1.1.6 验证安装\r
\r
\`\`\`shell\r
sudo docker --version\r
\`\`\`\r
\r
等同于 ：\r
\r
\`\`\`shell\r
docker -v\r
\`\`\`\r
\r
### 1.2. 准备文件存放位置\r
\r
####  1.2.1 创建音乐存储目录\r
\r
- 存放你的音乐文件\r
\r
\`\`\`shell\r
sudo mkdir -p /var/music\r
\`\`\`\r
\r
####  1.2.2 创建 Navidrome 数据目录\r
\r
- 存放数据库和配置\r
\r
\`\`\`shell\r
sudo mkdir -p /opt/navidrome/data\r
\`\`\`\r
\r
\r
\`\`\`shell\r
\r
\`\`\`\r
\r
### 1.3 安装镜像\r
\r
#### 1.3.1 配置镜像加速源\r
\r
\`\`\`shell\r
touch /etc/docker/daemon.json\r
\`\`\`\r
- 文件内容\r
\r
\`\`\`json\r
{\r
  "registry-mirrors": [\r
    "https://br72e5rb.mirror.aliyuncs.com",\r
    "https://docker.mirrors.ustc.edu.cn",\r
    "https://registry.cn-hangzhou.aliyuncs.com",\r
    "https://hub-mirror.c.163.com"\r
  ]\r
}\r
\`\`\`\r
\r
- 重启，让配置生效\r
\r
\`\`\`shell\r
sudo systemctl restart docker\r
\`\`\`\r
\r
\r
#### 1.3.2 拉取镜像\r
\r
\`\`\`shell\r
sudo docker pull deluan/navidrome:latest\r
\`\`\`\r
\r
\r
## 2. 1panel 搭建\r
\r
\r
### 2.1. 安装 1Panel\r
\r
\r
直接在实例中找到插件安装\r
\r
### 2.2 登录面板\r
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
###  2.3. 设置镜像加速\r
\r
\r
\`\`\`\r
\r
\`\`\`\r
\r
\r
\r
下载音乐  \r
\r
https://www.xmwav.com/  \r
\r
\r
https://wusunk.com/\r
\r
下载歌词\r
\r
https://www.kugeci.com/\r
\r
https://lyrics.net.cn/\r
\r
修改音乐\r
\r
https://www.mp3tag.de/\r
\r
制作歌词文件\r
\r
https://lrc.moyutime.cn/\r
\r
\r
专辑封面\r
\r
http://coverbox.henry-hu.com/\r
\r
\r
## 3. 本地安装\r
\r
https://www.navidrome.org/docs/installation/windows/#msi-install\r
\r
进入下载仓库后\r
\r
选择\r
\r
\`navidrome_0.58.0_windows_amd64_installer.msi\`\r
\r
中间的数字是版本号\r
\r
安装时填写三个路径：\r
\r
软件的安装路径\r
\r
\`\`\`txt\r
D:\\Navidrome\\main\\\r
\`\`\`\r
\r
软件的数据路径\r
\r
\`\`\`txt\r
D:\\Navidrome\\data\r
\`\`\`\r
\r
音乐的资源路径\r
\r
\`\`\`txt\r
E:\\resource\\Music\r
\`\`\``;export{r as default};
