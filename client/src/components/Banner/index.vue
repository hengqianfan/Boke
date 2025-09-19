<template>
    <div class="Banner-all">
        <img src="https://raw.githubusercontent.com/hengqianfan/nCover/refs/heads/main/repo/ncover2.png" alt=""
            class="Banner-img">
    </div>
</template>

<script lang="ts" setup>
// import { onMounted, ref } from "@/assets/";
</script>

<style lang="scss" scoped>
.Banner-all {
    width: 100%;
    height: 60vh;
    // background-color: rebeccapurple;

    .Banner-img {
        width: 100%;
        height: 100%;
        // 保持图片比例，图片不变形
        object-fit: cover;
        // 截取图片上部分
        object-position: top;


    }
}
</style>