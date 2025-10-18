<template>
    <div class="main-all">

        <MainAside v-if="main.asideShow" />

        <router-view class="main-container" />
    </div>
</template>

<script lang="ts" setup>
import MainAside from '../MainAside/index.vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/main'

const route = useRoute()

const main = useMainStore()



</script>

<style lang="scss" scoped>
@use './pc.scss';
@use './app.scss';
</style>