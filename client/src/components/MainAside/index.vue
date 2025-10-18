<template>
    <div class="main-aside-all">

        <MainAsidePerson v-if="main.personCardShow" />
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
import { useMainStore } from '@/stores/main'
const main = useMainStore()
const route = useRoute()




</script>

<style lang="scss" scoped>
@use './pc.scss';
@use './app.scss';
</style>