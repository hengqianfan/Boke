<template>
    <div class="main-aside-all">

        <MainAsidePerson />
        <!-- 当处于post文件时 -->
        <MainAsideTagsMenu v-if="route.path === '/'" />

        <!-- <MainAsideToc :node="node" /> -->
    </div>

</template>

<script lang="ts" setup>
import MainAsidePerson from '../MainAsidePerson/index.vue'
import MainAsideTagsMenu from '../MainAsideTagsMenu/index.vue'
import MainAsideToc from '../MainAsideToc/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()


</script>

<style lang="scss" scoped>
.main-aside-all {
    width: 25%;
    max-height: 90vh;
    // background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;

}
</style>