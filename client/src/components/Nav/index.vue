<template>
    <div class="nav-all">
        <div class="nav-siteInfo">
            <div class="nav-siteLogo" @click="goHome">
                <img src="../../assets/icons/logo.png" alt="">
            </div>
            <div class="nav-siteName" @click="goHome">{{ Config.siteName }}</div>
        </div>

        <NavSearch></NavSearch>


        <!-- <div class="nav-menu">
            <router-link to="/" class="nav-menu-item">文章区 📑</router-link>
            <router-link to="/notes" class="nav-menu-item">知识库 📚</router-link>
            <router-link to="/sites" class="nav-menu-item">网站库 🧭</router-link>

            <router-link to="/post/about" class="nav-menu-item">关于本站 💬</router-link>

        </div> -->

        <div class="nav-menu">
            <div v-for="item in navItems" :key="item.to" class="nav-menu-item" @click="handleNavClick(item.to)">
                {{ item.label }}
            </div>
        </div>



        <!-- <NavThemeConfig></NavThemeConfig> -->



    </div>
</template>

<script lang="ts" setup>
import { Config } from '@/config'
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import NavSearch from '../NavSearch/index.vue';
import NavThemeConfig from '../NavThemeConfig/index.vue';


const navItems = [
    { to: '/', label: '文章区 📑' },
    { to: '/notes', label: '知识库 📚' },
    { to: '/sites', label: '网站库 🧭' },
    { to: '/post/about', label: '关于本站 💬' },
]


const router = useRouter();


const route = useRoute()

// 跳转到 /home
const goHome = () => {
    router.push('/');
};


// 判断当前是否为文章详情页
function isPostDetail() {
    return route.name === 'postDetail' || route.path.startsWith('/post/')
}

// 点击导航时的跳转逻辑
function handleNavClick(path: string) {
    // 如果当前是文章详情页，则新窗口打开
    if (isPostDetail()) {
        const url = router.resolve(path).href
        window.open(url, '_blank', 'noopener,noreferrer')
    } else {
        // 否则正常跳转
        router.push(path)
    }
}

</script>

<style lang="scss" scoped>
// PC 样式
@use './pc.scss';
// 移动端样式优化
@use './app.scss';
</style>