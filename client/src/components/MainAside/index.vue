<template>
    <div class="main-aside-all">

        <MainAsidePerson />
        <!-- 当处于post文件时 -->
        <MainAsideTagsMenu v-if="route.path === '/'" />

        <!-- <MainAsideToc :node="node" /> -->

        <Outline v-if="route.path.startsWith('/post/') || route.path.startsWith('/notes/')" />

    </div>

</template>

<script lang="ts" setup>
import MainAsidePerson from '../MainAsidePerson/index.vue'
import MainAsideTagsMenu from '../MainAsideTagsMenu/index.vue'
import Outline from '../Outline/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()




</script>

<style lang="scss" scoped>
.main-aside-all {
    width: 25%;
    max-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;

    // 让侧边栏吸附，放在随视图组件，例如正文的滑动而滑动
    position: sticky;
    top: 80px;

}
</style>