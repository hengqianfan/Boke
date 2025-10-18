<!-- <template>

</template>

<script lang="ts" setup>
// import { withBase } from 'vitepress';
const props = defineProps(['xSrc', 'xTitle', 'xUrl'])

</script>

<style lang="scss" scoped>

</style> -->


<template>
    <div class="cp-all">
        <img :src="getCoverSrc(post?.meta.cover || 'momo')" alt="" class="cp-cover" />

        <a class="cp-title" :href="props.slug" target="_blank">{{ post?.meta.title || '未知' }} </a>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getPostBySlug } from '@/tools/post'
import { getCoverSrc } from '@/tools/getUrl'
import { type Post } from '@/types/post'



const props = defineProps<{ slug: string }>()
// const post = ref<{ title: string; summary: string } | null>(null)

const post = ref<Post | null>(null)

onMounted(async () => {
    post.value = await getPostBySlug(props.slug)
})





</script>


<style lang="scss" scoped>
.cp-all {
    width: 320px;
    min-height: 220px;
    margin: 10px auto;
    border-radius: 15px;

    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;
    transition: all 1s;

    a {
        color: black;
        text-decoration: none;
    }

    .cp-cover {
        width: 320px;
        height: 180px;
        border-radius: 15px 15px 0 0;
        overflow: hidden;
        padding: 0 !important;
        box-shadow: none;

    }

    .cp-title {
        height: 40px;
        line-height: 40px;
        font-family: '优设标题黑';
        font-size: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

    }
}

.cp-all:hover {
    transform: scale(0.9);

    .cp-cover {
        width: 320px;


    }

    .cp-title {
        height: 40px;


    }
}
</style>
