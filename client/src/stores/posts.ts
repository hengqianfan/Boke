// src/store/posts.ts
import { defineStore } from 'pinia'
import { getAllPostsMeta } from '@/tools/post'
import type { PostMeta } from '@/types/post'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as PostMeta[],
    tags: {} as Record<string, number>,        // { tagName: count }
    selectedTag: '全部文章',
    categories: {} as Record<string, number>,  // { categoryName: count }
    selectedCategory: '全部分类',
    currentPage: 1,
    pageSize: 12
  }),

  getters: {
    filteredPosts(state) {
      let result = state.posts

      // 标签筛选
      if (state.selectedTag !== '全部文章') {
        result = result.filter(p => p.tags?.includes(state.selectedTag))
      }

      // 分类筛选
      if (state.selectedCategory !== '全部分类') {
        result = result.filter(p => (p.category ?? '未知') === state.selectedCategory)
      }

      return result
    },

    paginatedPosts(state): PostMeta[] {
      const start = (state.currentPage - 1) * state.pageSize
      return this.filteredPosts.slice(start, start + state.pageSize)
    },

    totalPages(state): number {
      return Math.max(1, Math.ceil(this.filteredPosts.length / state.pageSize))
    }
  },

  actions: {
    async fetchPosts() {
      const res = await getAllPostsMeta()
      this.posts = res.MetaList
      this.tags = this.calcTags(this.posts)
      this.categories = this.calcCategories(this.posts)

      this.selectedTag = '全部文章'
      this.selectedCategory = '全部分类'
    },

    calcTags(data: PostMeta[]) {
      const obj: Record<string, number> = {}
      for (const post of data) {
        post.tags?.forEach(tag => {
          obj[tag] = (obj[tag] || 0) + 1
        })
      }
      obj['全部文章'] = data.length
      return Object.fromEntries(
        Object.entries(obj).sort((a, b) => b[1] - a[1])
      )
    },

    calcCategories(data: PostMeta[]) {
      const obj: Record<string, number> = {}
      for (const post of data) {
        const cat = post.category ?? '未知'
        obj[cat] = (obj[cat] || 0) + 1
      }
      obj['全部分类'] = data.length
      return Object.fromEntries(
        Object.entries(obj).sort((a, b) => b[1] - a[1])
      )
    },

    setTag(tag: string) {
      this.selectedCategory = '全部分类'

      this.selectedTag = tag
      this.currentPage = 1
    },

    setCategory(category: string) {
      // 重制标签
      this.selectedTag = '全部文章'
      this.selectedCategory = category
      this.currentPage = 1
    },

    setPage(page: number) {
      if (page < 1) page = 1
      if (page > this.totalPages) page = this.totalPages
      this.currentPage = page
    }
  }
})
