import { defineStore } from 'pinia'
import type { Post } from '@/types/post.ts'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[]
  }),
  actions: {
    setPosts(data: Post[]) {
      this.posts = data
    },
    getPostById(id: number) {
      return this.posts.find(p => p.id === id)
    }
  }
})
