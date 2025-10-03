<template>
    <div class="main-all">

        <MainAside v-if="aside.asideShow" />

        <router-view class="main-container" />
    </div>
</template>

<script lang="ts" setup>
import MainAside from '../MainAside/index.vue'
import { useRoute } from 'vue-router'
import { useAsideStore } from '@/stores/aside'

const route = useRoute()

const aside = useAsideStore()



</script>

<style lang="scss" scoped>
.main-all {
    width: 90%;
    height: 100%;

    // 预留导航栏位置
    // 因为添加了baner，所以不需要预留导航栏位置
    // padding-top: 70px;

    padding: 10px;

    display: flex;
    flex-direction: row;




    .main-container {
        margin-top: 20px;

    }

    // 手机端（小于768px时）
    @media (max-width: 768px) {
        flex-direction: column; // 改成纵向排布

        .main-container {
            margin-top: 10px; // 缩小间距
        }
    }
}
</style>