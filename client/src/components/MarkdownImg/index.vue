<template>
    <div class="my-image">
        <img :src="getImgSrc(src)" :alt="alt" loading="lazy" />
        <p v-if="alt" class="caption">{{ alt }}</p>
    </div>
</template>

<script setup lang="ts">
import { getImgSrc } from '@/tools/getUrl'
defineProps<{
    src: string
    alt?: string
}>()
</script>

<style scoped lang="scss">
.my-image {
    width: 60%;
    text-align: center;
    margin: 1.2rem auto;

    img {
        width: 100%;
        border-radius: 8px;
    }

    .caption {
        font-size: 0.85rem;
        color: #666;
        margin-top: 0.5rem;
    }
}
</style>
