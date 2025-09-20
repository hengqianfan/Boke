<template>
  <div class="post-detail-all">

    <article v-if="post">
      <h1>{{ post.meta.title }}</h1>

      <div class="post-tags">

        <div class="post-time"> ⏰ {{ formatDate_timestamp(post.meta.date || 0) }}</div>
        |
        <div class="post-wordCount"> 字数：{{ post.meta.wordCount }}</div>
        |

        <div class="post-tag" v-for="tag in post.meta.tags">{{ tag }}</div>

      </div>

      <hr>
      <!-- <p v-if="post.meta.date">{{ post.meta.date }}</p> -->
      <div v-html="post.html" class="markdown-body"></div>
    </article>

    <div v-else>文章不存在</div>
    <Outline :headings="post?.headings || []" />

  </div>

</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '@/tools/post'
import { formatDate_timestamp } from '@/tools/format'
import { Config } from '@/config'

import Outline from '@/components/Outline/index.vue'

import type { Post } from '@/types/post'
const route = useRoute()
const slug = String(route.params.slug || '')
const post = ref<Post | null>(null)




onMounted(async () => {
  post.value = await getPostBySlug(slug)


  // 设置网页标题
  if (post.value?.meta.title) {
    document.title = `${post.value.meta.title} | ${Config.siteName}`
  } else {
    document.title = `${Config.siteName}`
  }

  // 🔥 等 v-html 渲染完成
  await nextTick()
  const container = document.querySelector('.markdown-body')
  if (!container) return

  container.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.classList.contains('copy-btn')) {
      const code = target.getAttribute('data-code') || ''
      navigator.clipboard.writeText(decodeURIComponent(code)).then(() => {
        target.textContent = '✔ 已复制'
        setTimeout(() => (target.textContent = '复制'), 1000)
      })
    }




  })






})





</script>

<style lang="scss" scoped>
.post-detail-all {
  width: 100%;
  min-height: 80vh;
  padding: 20px;
  border: 2px solid #eee;
  position: relative;
  // 页面底部
  padding-bottom: 30vh;

  .post-tags {
    height: 30px;
    // background-color: rebeccapurple;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    // background-color: rebeccapurple;
    // 公共样式
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
      padding: 5px 8px;
      border-radius: 10px;
      font-size: 12px;

    }

    .post-time {
      background-color: rgb(234, 140, 47);
      color: #ffffff;

    }

    .post-tag {
      color: #eee;
      background-color: rgb(123, 165, 202);

    }

    .post-wordCount {
      background-color: black;
      color: white;
      border-radius: 4px;
      font-size: 10px;
    }
  }
}
</style>