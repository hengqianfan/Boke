<template>
  <div class="post-detail-all">

    <article v-if="post">
      <h1>{{ post.meta.title }}</h1>
      <!-- <p v-if="post.meta.date">{{ post.meta.date }}</p> -->
      <div v-html="post.html"></div>
    </article>

    <div v-else>文章不存在</div>
    <Outline :headings="post?.headings || []" />

  </div>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '@/tools/post'
import Outline from '@/components/Outline/index.vue'

import type { Post } from '@/types/post'
const route = useRoute()
const slug = String(route.params.slug || '')
const post = ref<Post | null>(null)




onMounted(async () => {
  post.value = await getPostBySlug(slug)

  // console.log(post.value.headings)
  // console.log(post.value);

})
</script>

<style lang="scss" scoped>
.post-detail-all a {
  text-decoration: none;
  color: black;

}

.post-detail-all {
  width: 100%;
  min-height: 80vh;
  padding: 20px;
  border: 2px solid #eee;
  position: relative;




  a {
    text-decoration: none;
    color: black;
  }



}
</style>