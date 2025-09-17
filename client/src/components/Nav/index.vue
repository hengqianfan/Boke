<template>
    <div class="nav-all">
        <div class="nav-siteInfo">
            <div class="nav-siteLogo" @click="goHome">
                <img src="../../assets/icons/logo.png" alt="">
            </div>
            <div class="nav-siteName" @click="goHome">{{ Config.siteName }}</div>
        </div>
        <div class="nav-searcher">search</div>
        <div class="nav-menu">
            <router-link to="/" class="nav-menu-item">主页</router-link>
            <router-link to="/about" class="nav-menu-item">关于</router-link>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { Config } from '@/config'
import { useRouter } from 'vue-router';
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;

    padding-left: 50px;
    padding-right: 50px;
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
            margin-left: 20px;
            text-decoration: none;
            color: black;
            font-weight: 500;

            &:hover {
                color: #007bff;
            }
        }
    }
}
</style>