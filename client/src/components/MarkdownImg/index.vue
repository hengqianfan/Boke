<template>
    <div class="my-image">
        <!-- 图片 -->
        <img :src="getImgSrcPro(src)" :alt="alt" loading="lazy" @click="ShowPreview = true" />
        <!-- 图片描述 -->
        <p v-if="alt" class="caption">{{ alt || '' }}</p>

        <!-- 放大预览模态框 -->
        <div v-if="ShowPreview" class="preview-mask" @click="ShowPreview = false">
            <img class="preview-img" :src="getImgSrcPro(src)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 这个函数支持获取 
import { getImgSrcPro } from '@/tools/getUrl'

defineProps<{
    // 图片地址
    src: string
    // 图片描述
    alt?: string
}>()

const ShowPreview = ref(false)
</script>

<style scoped lang="scss">
.my-image {
    // width: 60vw;
    text-align: center;
    margin: 10px auto;

    // max-height: 300px;

    img {
        // width: 100%;
        max-height: 400px;
        padding: 5px;
        background-color: aliceblue;
        box-shadow: 2px 2px 5px #dedede, -2px -2px 5px #f7f5f5;
        border-radius: 8px;
        cursor: zoom-in; // 鼠标提示可放大
        transition: transform 0.2s;


    }

    img:hover {
        transform: scale(1);

    }

    .caption {
        font-size: 0.85rem;
        color: #666;
    }

    .preview-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: zoom-out;


    }

    .preview-img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

    }
}
</style>
