const n=`---\r
category: '编程'\r
tags: ['npm','javascript','node']\r
cover: 'npm'\r
\r
---\r
\r
## 建立代码仓库\r
\r
## 初始化项目\r
\r
\`\`\`shell\r
npm init -y\r
\`\`\`\r
\r
## 安装必要的依赖\r
\r
- rollup 打包工具\r
\r
\`\`\`shell\r
pnpm add rollup\r
\`\`\`\r
\r
\r
- rollup 插件 \r
\r
\`\`\`\r
pnpm add @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript\r
\`\`\`\r
\r
 \r
\r
## \r
\r
\`\`\`\`\r
npm publish\r
\`\`\`\`\r
\r
##  登录\r
\r
\r
\`\`\`\`\r
npm adduser\r
\`\`\`\`\r
\r
\r
## 更新版本号\r
\r
\r
\`\`\`shell\r
# 更新 patch：补丁号，修复bug，小变动，如 v1.0.0->v1.0.1\r
npm version patch\r
\r
# 更新 minor：次版本号，增加新功能，如 v1.0.0->v1.1.0\r
npm version minor\r
\r
# 更新 major：主版本号，不兼容的修改，如 v1.0.0->v2.0.0\r
npm version major\r
\`\`\`\r
\r
\r
\r
\r
## 常见问题\r
\r
无法登录\r
\r
将 npm 的源换成官方源 \r
\r
\r
显示网路连接错误\r
\r
更新npm 解决`;export{n as default};
