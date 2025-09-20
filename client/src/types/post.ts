
export type Post = {
  // 文件名（不含扩展名）
  slug: any
  // 文章元信息（front-matter）
  meta: PostMeta
  // 已处理过的文章正文
  html: string
  // 原始 markdown 正文
  raw: string,
  headings: Heading[]
  // 修复 BUG （待解决，哪里使用了ID）
  id: string | number
}


export interface PostMeta {
  title: string
  date?: number
  tags?: string[]
  cover?: string
  excerpt?: string
  pin?: number
  wordCount?: number
  // [k: string]: any
}


export interface Heading {
  level: number
  title: string
  slug: string
}