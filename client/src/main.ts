import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Config } from '@/config'

// 引入 highlight.js 的样式
// 注意，有很多主题
import 'highlight.js/styles/github.css'
// 引入自己的样式
import './styles/index.scss'
// import 'highlight.js/styles/vs2015.css'
// 设置站点的动态标题
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
app.use(createPinia())
app.use(router)
app.mount('#app')