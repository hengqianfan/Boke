<template>
    <div class="mat-all">
        <div class="mat-name">热门标签</div>

        <div class="mat-tags">
            <div @click="postStore.setTag(name)" class="mat-tag" v-for="(count, name) in postStore.tags">
                <div class="mat-tag-name"> {{ name }}</div>
                <div class="mat-tag-num">{{ count }}</div>


            </div>
        </div>


    </div>

</template>

<script lang="ts" setup>
import { usePostsStore } from '@/stores/posts'
const postStore = usePostsStore()
</script>

<style lang="scss" scoped>
@use './pc.scss';
@use './app.scss';
</style>