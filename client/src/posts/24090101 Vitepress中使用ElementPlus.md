---
category: '编程'
tags: ['vitepress','elementplus','vue']
icon: 'vitepress'
cover: 'vitepress'
---

!img[ElementPlus](elementplus)


> **ElementPlus** 是 **vue** 生态中非常出名的组件库，实际开发中会用来了开发一些后端管理页面。  
> `ElementPlus官网` :  https://element-plus.org/zh-CN/ 🔥

<br/>

> **下面提供两种方案:**    
> ① 集成图标  
> ② 不集成图标  

---


## 1. 不使用配套图标

::: info 提示💡

**如果你对 `ElementPlus` 不太熟悉，可以不安装图标，然后注意查看代码注释**

:::

### 1.1 安装 element-plus

> 安装依赖包

```shell [npm]
npm install element-plus --save
```


### 1.2. 配置代码 

> 找到 vitepress 项目的配置文件，然后修改对应代码：

**配置文件**： `docs/.vitepress/theme/index.js` 👈    


```js [说明版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// ⭐1. 导入 elementplus 
import ElementPlus from 'element-plus'
// ⭐2. 导入 elementplus 的样式
import 'element-plus/dist/index.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // ⭐3. 注册 elementplus
    app.use(ElementPlus)
  },
}
```


### 1.3 使用

**因为全局注册，你可以直接在项目中的 `vue` 文件中使用**

 
<br/>
 
<hr class="hr-twill-colorful">
 
<br/>
 

## 2. 使用配套图标 

<br/>

### 2.1 安装依赖

- **安装 element-plus** 

```shell [npm]
npm install element-plus --save
```

- **安装 图标依赖** <Badge type='danger'>注意图标是单独的包，所以要另外安装它</Badge>  

```shell [npm]
npm install @element-plus/icons-vue
```

### 2.2 配置代码 

```js [说明版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
//  1. 导入 elementplus 
import ElementPlus from 'element-plus'
//  2. 导入 elementplus 的样式
import 'element-plus/dist/index.css'
// ⭐ 4. 导入 elementplus-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 3. 注册 elementplus
    app.use(ElementPlus)
    // ⭐ 5. 注册 elementplus 图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
```








