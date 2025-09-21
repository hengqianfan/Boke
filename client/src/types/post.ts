
export type Post = {
  // 文章元信息（front-matter）
  meta: PostMeta
  // 已处理过的文章正文
  html: string
  // 原始 markdown 正文
  raw: string,
  // 文章大纲 由各级标题组成
  outline: OutlineHeading[]
  // 修复 BUG （待解决，哪里使用了ID）
  id: string | number
}


export interface PostMeta {
  // 唯一标识符
  slug: string
  // 标题
  title: string
  // 时间 时间戳
  date?: number
  // 文章的分类
  category?: string
  // 文章的标签
  tags?: string[]
  // 封面
  cover?: string
  // 摘要
  excerpt?: string
  // 置顶优先级
  pin?: number
  // 字数统计
  wordCount?: number

}

export interface AllPostsMeta {
  categoryList: string[]
  MetaList: PostMeta[]
}


export interface OutlineHeading {
  level: number
  title: string
  slug: string
}


