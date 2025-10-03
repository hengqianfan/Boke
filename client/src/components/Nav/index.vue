<template>
    <div class="nav-all">
        <div class="nav-siteInfo">
            <div class="nav-siteLogo" @click="goHome">
                <img src="../../assets/icons/logo.png" alt="">
            </div>
            <div class="nav-siteName" @click="goHome">{{ Config.siteName }}</div>
        </div>

        <NavSearch></NavSearch>


        <div class="nav-menu">
            <router-link to="/" class="nav-menu-item">文章区 📑</router-link>
            <router-link to="/notes" class="nav-menu-item">知识库 📚</router-link>
            <router-link to="/sites" class="nav-menu-item">网站库 🧭</router-link>
            <!-- <a href="https://hengqianfan.github.io/xSites/" class="nav-menu-item">网站</a> -->
            <!-- <router-link to="/life" class="nav-menu-item">动态</router-link> -->
            <!-- <router-link to="/life" class="nav-menu-item">专题</router-link> -->
            <router-link to="/post/about" class="nav-menu-item">关于本站 💬</router-link>

        </div>



        <!-- <NavThemeConfig></NavThemeConfig> -->



    </div>
</template>

<script lang="ts" setup>
import { Config } from '@/config'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavSearch from '../NavSearch/index.vue';
import NavThemeConfig from '../NavThemeConfig/index.vue';




const router = useRouter();
// 跳转到 /home
const goHome = () => {
    router.push('/');
};
</script>

<style lang="scss" scoped>
.nav-all {
    width: 90%;
    height: 70px;
    // 让导航栏水平居中
    // 这里 auto 无法控制居中
    margin: 0 5%;
    padding: 0 8%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;



    border-radius: 0 0 15px 15px;

    box-shadow: 2px 2px 5px #dedede,
        -2px -2px 5px #ffffff;

    position: fixed;

    z-index: 1000;

    // 毛玻璃特效
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    .nav-siteInfo {
        display: flex;
        align-items: center;

        .nav-siteLogo {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .nav-siteName {
            margin-left: 10px;
            font-size: 18px;
            font-weight: 600;
        }
    }

    .nav-menu {
        display: flex;

        .nav-menu-item {
            margin: 0 20px;
            font-size: 18px;
            text-decoration: none;
            color: rgb(54, 47, 47);
            font-weight: 500;
            // font-family: '剑豪体';
            font-family: '优设标题黑';
            transition: all 0.8 ease;
            // 让下划线不紧贴文字
            padding: 5px 0;

            &.router-link-exact-active {
                color: #564dac;

                border-bottom: 1px solid #564dac;
            }


            &:hover {
                color: #564dac;

            }
        }
    }
}
</style>