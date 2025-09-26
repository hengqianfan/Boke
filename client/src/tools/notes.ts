import fm from 'front-matter'
import { createMarkdown } from '@/tools/markdown'
import { type NoteOutlineHeading } from '@/types/note'
import { getFileNameByPath } from './format'

// 导入 notes 下所有 md 文件（递归）
const files = import.meta.glob('../notes/**/*.md', { eager: true, as: 'raw' })

export interface NoteMeta {
    title?: string
    date?: string
    cover?: string
    desc?: string
    tags?: string[]
    pin?: number

    // [key: string]: any
}

export interface NoteFile {
    id: string
    meta: NoteMeta
    content: string
    html: string
    path: string
    subPath: string
}

export interface Note {
    id: string
    path: string
    categories: string[]
    meta: NoteMeta
    content?: string
    html?: string
    files: NoteFile[]
}

export interface TreeNode {
    text: string
    path?: string
    id?: string
    children?: TreeNode[]
}

// 默认一级文件夹元信息
const defaultFolderMeta: NoteMeta = {
    cover: 'momo',
    desc: '暂无描述'
}

// 生成所有笔记
export function getAllNotes(): Note[] {
    const grouped: Record<string, Note> = {}

    Object.entries(files).forEach(([fullPath, raw]) => {

        const relativePath = fullPath.replace(/^.*notes\//, '')

        const parts = relativePath.split('/')

        const topFolder = parts[0]

        const subPath = parts.slice(1).join('/')


        const { attributes, body } = fm<NoteMeta>(raw as string)
        const { render } = createMarkdown()
        const { html } = render(body)

        if (!grouped[topFolder]) {
            grouped[topFolder] = {
                id: topFolder,
                path: '/notes/' + topFolder,
                categories: [topFolder],
                meta: { ...defaultFolderMeta },
                files: []
            }
        }

        if (subPath.toLowerCase() === 'config.md') {
            grouped[topFolder].meta = { ...grouped[topFolder].meta, ...attributes }
            grouped[topFolder].content = body
            grouped[topFolder].html = html
        } else {
            const filenameWithPath = subPath.replace(/\.md$/, '')
            const filename = getFileNameByPath(subPath)

            grouped[topFolder].files.push({
                id: filename,
                meta: { ...attributes, title: attributes.title || filename, },
                content: body,
                html,
                path: `/notes/${topFolder}/${filenameWithPath}`,
                subPath: subPath.replace(/\.md$/, ''),
            })
        }
    })

    return Object.values(grouped)
}

// 获取单本笔记
export function getNoteByPath(path: string) {
    return getAllNotes().find(n => n.path === path)
}

// 获取具体文章文件
export function getArticleByPath(path: string): NoteFile | undefined {
    return getAllNotes().flatMap(n => n.files).find(f => f.path === path)
}

// 生成目录
export function generateToc(html: string): NoteOutlineHeading[] {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    // 获取目录，除了一级目录
    const headers = Array.from(doc.querySelectorAll('h2, h3, h4, h5, h6'))

    return headers.map(h => {
        const level = Number(h.tagName.substring(1))
        const title = h.textContent?.trim() ?? ''
        let slug: string = h.id?.trim() ?? ''

        if (!slug) {
            slug = title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]/g, '')
                .replace(/\-+/g, '-')
                .replace(/^\-+|\-+$/g, '')
        }

        return { level, title, slug }
    })
}
