import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Config } from '@/config'
import MyImage from '@/components/MarkdownImg/index.vue'
import MyCardPost from '@/components/CardPost/index.vue'
import MarkdownMermaid from '@/components/MarkdownMermaid/index.vue'

// 引入 highlight.js 的样式
// 注意，有很多主题
import 'highlight.js/styles/github.css'
// 引入自己的样式
import './styles/index.scss'
// import 'highlight.js/styles/vs2015.css'
// 站点的动态标题 - 路由跳转时
router.afterEach((to) => {
    const defaultTitle = Config.siteName

    // 如果 meta.title 不是 string，则用默认
    const title =
        typeof to.meta.title === "string" && to.meta.title.length > 0
            ? to.meta.title
            : defaultTitle
    document.title = title

})

const app = createApp(App)
// 注册全局组件
app.component('MyImage', MyImage)
// 文章卡片
app.component('MyCardPost', MyCardPost)
// 流程图组件
app.component('MyMermaid', MarkdownMermaid)

app.use(createPinia())
app.use(router)
app.mount('#app')