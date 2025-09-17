<template>
    <div class="main-all">

        <MainAside />

        <router-view class="main-container" />
    </div>
</template>

<script lang="ts" setup>
import MainAside from '../MainAside/index.vue'
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





    .main-container {
        margin-top: 20px;
    }
}
</style>