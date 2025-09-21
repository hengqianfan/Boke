这是我的页面，你直接改造：<template>
  <div class="home-all">


    <div class="post-categoryList">
      <div v-for="(count, item) in postStore.categories" :key="item" @click="postStore.setCategory(item)"
        :class="['post-categoryList-item', { active: postStore.selectedCategory === item }]">
        {{ item }}
        <span> {{ count }}</span>

      </div>
    </div>


    <TransitionGroup name="slide-fade" tag="div" class="posts-container">

      <div class="articlesCard" v-for="(item, i) in postStore.paginatedPosts" :key="item.slug" :data-index="i">
        <div class="articlesCard-cover">
          <img :src="getImgSrc(item.cover || '')" alt="" class="articlesCard-cover-img">
          <div class="articlesCard-cover-pin" v-if="!(item.pin == 0)">置顶</div>
        </div>

        <router-link class="articlesCard-title" :to="`/post/${item.slug}`">
          {{ item.title }}
        </router-link>



        <div class="articlesCard-info">
          <div class="articlesCard-time">{{ formatDate_timestamp(item.date || 0) }}</div>
          <div class="articlesCard-tags">
            <div @click="postStore.setTag(tag)" class="articlesCard-tag" v-for="tag in item.tags?.slice(0, 3) || []">{{
              tag }}</div>
          </div>
        </div>

      </div>
    </TransitionGroup>

    <!-- ✅ 分页栏 -->
    <div class="pagination">
      <button @click="postStore.setPage(postStore.currentPage - 1)" :disabled="postStore.currentPage === 1">
        上一页
      </button>

      <span v-for="page in postStore.totalPages" :key="page">
        <button @click="postStore.setPage(page)" :class="{ active: postStore.currentPage === page }">
          {{ page }}
        </button>
      </span>

      <button @click="postStore.setPage(postStore.currentPage + 1)"
        :disabled="postStore.currentPage === postStore.totalPages">
        下一页
      </button>
    </div>



  </div>



</template>

<script setup lang="ts">
import { formatDate_timestamp } from '@/tools/format'

import { Config } from '@/config';

import { usePostsStore } from '@/stores/posts'
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
// import gsap from 'gsap'
const postStore = usePostsStore()

// const categoryList = ref<string[]>([])




const getImgSrc = (mo: string) => {
  // 1. 如果没有封面图片，则返回默认图片
  // 2. 如果有封面图片，且存在资源地址，则返回对应的图片地址
  // 3. 如果有封面图片，存储在项目本身的目录下，则返回对应的图片地址

  return `${Config.CoverServer}${mo}.png`
}




</script>

<style lang="scss" scoped>
.home-all {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  // 美化：避免页面底部紧贴浏览器窗口
  padding-bottom: 200px;



  .post-categoryList {
    display: flex;
    flex-direction: row;
    height: 50px;
    transition: all 1s ease;

    .post-categoryList-item {
      margin: 0 10px;
      min-width: 50px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      font-size: 14px;
      font-family: '优设标题黑';
      color: #35243f;
      padding: 0 5px;
      border-bottom: 3px solid transparent;


      span {
        margin-left: 5px;
        color: #1d7e76;
      }

      &.active {
        border-bottom: 3px solid #1d7e76;
        color: #1d7e76;

        span {
          color: #dfa73d;
        }
      }
    }

  }



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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // padding-bottom: 50px;

    .articlesCard {
      // margin: 10px;
      margin-bottom: 20px;
      margin-left: 20px;
      width: 320px;
      // min-height: 200px;
      max-height: 280px;
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
        transition: all 0.6s ease;
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
        // 基本布局
        display: block;
        text-align: center; // 文字居中
        padding: 0 20px; // 设置内边距，防止文字贴边
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: white;

        // 字体样式
        font-size: 20px;
        text-decoration: none; // 清除链接下划线
        color: black;
        font-family: "优设标题黑";
        border-top: 1px solid #f1eef5; // 此处是避免白色封面导致边界不清晰

        // 防止标题溢出
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

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

  /* 只新增分页样式 */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    font-size: 12px;

    button {
      margin: 0 10px;
      padding: 6px 12px;
      border: 1px solid #ccc;
      background-color: white;
      border-radius: 5px;
      cursor: pointer;

      &:disabled {
        color: #aaa;
        border-color: #eee;
        cursor: not-allowed;
      }
    }

    span {
      font-size: 14px;
    }
  }

}


// 动画效果 
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px); // 左侧进入
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
</style>