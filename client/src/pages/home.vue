<template>
  <div class="home-all">
    <!-- 
    <div class="tags-container">
      <div class="tag" v-for="([key, value], index) in Alltags">
        {{ key }} <span>{{ value }}</span>
      </div>

    </div>
    <div class=""></div> -->


    <div class="posts-container">

      <div class="articlesCard" v-for="item in posts">
        <div class="articlesCard-cover">
          <img :src="getImgSrc(item.meta.cover || '')" alt="" class="articlesCard-cover-img">
          <div class="articlesCard-cover-pin" v-if="!(item.meta.pin == 0)">置顶</div>
        </div>

        <router-link class="articlesCard-title" :to="`/post/${item.slug}`">
          {{ item.meta.title }}
        </router-link>

        <!-- 
        <a class="articlesCard-title" @click.prevent="goDetail(item.meta.slug)">
          {{ item.meta.title }}
        </a> -->

        <div class="articlesCard-info">
          <div class="articlesCard-time">{{ `time` }}</div>
          <div class="articlesCard-tags">
            <div class="articlesCard-tag" v-for="tag in item.meta.tags?.slice(0, 3) || []">{{ tag }}</div>
          </div>
        </div>
        <!-- <div>{{ item }}</div> -->

      </div>


      <!-- <div class="post" v-for="p in posts" :key="p.slug">
        {{ p.meta.title }}
      </div> -->
    </div>



    <!-- 
      <ul>
        <li v-for="p in posts" :key="p.slug">
          <RouterLink :to="`/post/${p.slug}`">{{ p.meta.title }}</RouterLink>
          <small> {{ p.meta.date }} </small>
          <p>{{ p.meta.excerpt }}</p>
        </li>
      </ul> -->


  </div>



</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { ref, onMounted } from 'vue'
import { getAllPostsMeta } from '@/tools/post'
import { Config } from '@/config';
import type { PostMeta } from '@/types/post';

const posts = ref<{ slug: string; meta: PostMeta }[]>([])

// 定义 tags 数组
const Alltags = ref<Map<string, number>>()


onMounted(async () => {
  posts.value = await getAllPostsMeta()
  // 将得到的文章数据传给 getALLTags 函数
  Alltags.value = getAllTags(posts.value)
})




const getAllTags = (data: any) => {

  // 临时存放数据的数组
  let temp_arr = []
  // 遍历原始数据，把所有 tag 添加到 临时数组中

  for (let i = 0; i < data.length; i++) {
    // 先判断是否存在 信息中是否存在 tag ⭐
    if (data[i].meta.tags) {
      // 获取当前文章的 tag 数组
      let now_tagarr = data[i].meta.tags
      // 解构数组后，再添加到临时数组中
      temp_arr.push(...now_tagarr)
    }
  }


  const map = new Map<string, number>();
  for (const str of temp_arr) {
    map.set(str, (map.get(str) || 0) + 1);
  }
  // 将 map 对象
  return map;
}

// 定义 categories 数组
const Allcategories = ref<string[]>()

const getAllCategories = (data: any) => {

  // 临时存放数据的数组
  let temp_arr = []
  // 遍历原始数据，把所有 tag 添加到 临时数组中

  for (let i = 0; i < data.length; i++) {
    // 先判断是否存在 信息中是否存在 tag ⭐
    if (data[i].meta.category) {
      // 获取当前文章的 tag 数组
      let now_tagarr = data[i].meta.category
      // 解构数组后，再添加到临时数组中
      temp_arr.push(...now_tagarr)
    }
  }

}

const getImgSrc = (mo: string) => {
  // 1. 如果没有封面图片，则返回默认图片
  // 2. 如果有封面图片，且存在资源地址，则返回对应的图片地址
  // 3. 如果有封面图片，存储在项目本身的目录下，则返回对应的图片地址

  return `${Config.CoverServer}${mo}.png`
}




const router = useRouter()
const goDetail = (id: number) => {
  router.push(`/post/${id}`)
}


</script>

<style lang="scss" scoped>
.home-all {
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: column;


  .tags-container {
    background-color: green;
    display: flex;
    margin: 10px 0;

    .tag {
      margin-right: 10px;
      padding: 5px 10px;
      background-color: aqua;
      border-radius: 5px;

      span {
        color: #a84343;
      }
    }
  }

  .posts-container {
    width: 100%;
    min-height: 60vh;
    // background-color: yellow;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .articlesCard {
      // margin: 10px;
      margin-bottom: 20px;
      margin-left: 20px;
      width: 320px;
      min-height: 200px;

      border-radius: 15px;
      background-color: white;

      padding-bottom: 10px;

      box-shadow: 1px 1px 2px #dedede,
        -1px -1px 2px #f5f0f0;

      .articlesCard-cover {
        width: 100%;
        height: 180px;
        border-radius: 15px 15px 0 0;
        overflow: hidden;
        transition: all 0.6s;
        position: relative;


        .articlesCard-cover-img {
          width: 100%;
          height: 100%;
          border-radius: 15px 15px 0 0;
          transition: all 0.6s;

        }

        .articlesCard-cover-pin {
          position: absolute;
          // background-color: #d16f6f;
          width: 60px;
          height: 30px;
          top: 10px;
          left: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
          // font-family: '楷体';
          font-weight: 600;
          color: white;
          // color: #b17171;
          opacity: 0.7;

          background: rgba(150, 150, 150, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: transform 0.3s ease;


        }

      }



      .articlesCard-title {
        border-top: 1px solid #f1eef5;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        text-decoration: none;
        color: black;
        background-color: white;
        font-family: "优设标题黑";
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .articlesCard-title:hover {
        background: linear-gradient(45deg, #ef9393, #7e7e21, #ffff00, #b74b4b, #72a472, #646493);
        background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        transition: background 0.5s;
      }

      .articlesCard-info {
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: space-between;
        background-color: white;

        .articlesCard-time {
          margin-left: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px;
          height: 20px;
          color: #828e98;
          // background-color: #afbdc8;
          font-size: 10px;
          border-radius: 5px;


        }

        .articlesCard-tags {
          display: flex;
          margin-right: 10px;

          .articlesCard-tag {
            margin: 0 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            height: 20px;
            line-height: 20px;
            // font-family: '楷体';
            color: #7f8488;
            color: #7d7e86;
            // color: black;
            font-weight: 400;
            background-color: #e0e4e6;
            font-size: 10px;
            border-radius: 5px;
          }

          .articlesCard-tag:hover {
            background-color: #2d5296;
            color: white;
          }
        }
      }
    }

    .articlesCard:hover {
      .articlesCard-cover {

        transition: all 0.6s;

        .articlesCard-cover-img {
          transform: scale(1.3);
          transition: all 0.6s;


        }
      }
    }
  }
}
</style>