export interface Post {
  id: number
  title: string
  content: string
  createdAt: string
}


export type PostMeta = {
  title: string
  date?: number
  tags?: string[]
  cover?: string
  excerpt?: string
  pin?: number

  [k: string]: any
}