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
            <router-link to="/" class="nav-menu-item">文章区</router-link>
            <router-link to="/notes" class="nav-menu-item">知识库</router-link>
            <router-link to="/sites" class="nav-menu-item">网站库 🧭</router-link>
            <!-- <a href="https://hengqianfan.github.io/xSites/" class="nav-menu-item">网站</a> -->
            <router-link to="/life" class="nav-menu-item">动态</router-link>
            <router-link to="/life" class="nav-menu-item">专题</router-link>
            <router-link to="/about" class="nav-menu-item">关于</router-link>

        </div>





        <!-- 右侧主题按钮 -->
        <button class="theme-btn" @click="ShowThemeMenu = !ShowThemeMenu">⚙️</button>

        <!-- 顶部下拉配置面板 -->
        <transition name="dropdown">
            <div v-if="ShowThemeMenu" class="theme-panel">
                <h3>动画配置</h3>
                <div class="panel-item">
                    <label>主页 - 文章 - 动效：</label>
                    <!-- <input type="checkbox" v-model="darkMode" /> -->
                </div>
                <!-- <div class="panel-item">
                    <label>主题颜色：</label>
                    <input type="color" v-model="themeColor" />
                </div>
                <div class="panel-item">
                    <label>暗黑模式：</label>
                    <input type="checkbox" v-model="darkMode" />
                </div> -->
            </div>
        </transition>


    </div>
</template>

<script lang="ts" setup>
import { Config } from '@/config'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavSearch from '../NavSearch/index.vue';
const ShowThemeMenu = ref(false)

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


.theme-btn {
    margin-left: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: #dddbf0;
    opacity: 0.5;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.3s;

    &:hover {
        background: transparent;
    }
}

.theme-panel {
    width: 80%;
    position: fixed;
    // 预留离导航栏的距离
    top: 100px;
    // 居中显示元素
    left: auto;
    margin: 0 auto;

    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 2000;
    border-radius: 20px;

    .panel-item {
        margin: 12px 0;
    }
}


/* 顶部下拉动画 */
.dropdown-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.dropdown-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.dropdown-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>