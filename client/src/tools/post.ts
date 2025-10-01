import fm from 'front-matter'
import { countWords, countReadingTime } from '@/tools/count'
import { formatFileName, extractTimestamp } from '@/tools/format'
import { Config } from '@/config'
import { createMarkdown } from '@/tools/markdown'
import type { Post, PostMeta, OutlineHeading, AllPostsMeta } from '@/types/post'

// 动态导入 posts 文件夹下所有 md（返回 raw 文本）
const modules = import.meta.glob('../posts/*.md', {
    import: 'default',
    query: '?raw',
}) as Record<string, () => Promise<string>>


/** 按 slug 动态加载文章 */
export async function getPostBySlug(fileName: string): Promise<Post | null> {
    const key = `../posts/${fileName}.md`
    const loader = modules[key]
    if (!loader) return null

    const raw = await loader()
    const parsed = fm<PostMeta>(raw)
    const content = parsed.body.trim()

    const wordCount = countWords(content)

    // 使用统一 markdown 渲染
    const { render, headings } = createMarkdown()
    const { html } = render(content)
    // 
    let fileNameByFormat: string = fileName

    let fileTime: number | undefined = parsed.attributes.date ? new Date(parsed.attributes.date).getTime() : 0


    if (Config.AutoFormatFileName) {
        fileNameByFormat = formatFileName(fileName)
        fileTime = extractTimestamp(fileName)
    }

    const meta: PostMeta = {
        slug: fileName,
        title: parsed.attributes.title ?? formatFileName(fileName || ''),
        date: fileTime ? fileTime : 0,
        tags: parsed.attributes.tags,
        cover: parsed.attributes.cover,
        pin: parsed.attributes.pin ?? 0,
        wordCount,
        readTime: countReadingTime(wordCount || 0),
        excerpt: parsed.attributes.excerpt ?? content.slice(0, 160).replace(/\n/g, ' '),
        password: parsed.attributes.password ?? undefined
    }

    return { meta, html, raw: content, outline: headings, id: fileName }
}

export async function getAllPostsMeta(): Promise<AllPostsMeta> {
    const MetaList: PostMeta[] = []

    for (const key in modules) {
        const slug = key.split('/').pop()!.replace(/\.md$/, '')
        const raw = await modules[key]()
        const parsed = fm<PostMeta>(raw)
        const content = parsed.body.trim()

        let fileNameByFormat: string = slug
        let fileTime: number | undefined = parsed.attributes.date ? new Date(parsed.attributes.date).getTime() : 0


        if (Config.AutoFormatFileName) {
            fileNameByFormat = formatFileName(slug)
            fileTime = extractTimestamp(slug)
        }

        const meta: PostMeta = {
            slug,
            title: parsed.attributes.title ?? fileNameByFormat,
            date: fileTime ? fileTime : 1758987231768,
            pin: parsed.attributes.pin ?? 0,
            tags: parsed.attributes.tags ?? [],
            category: parsed.attributes.category ?? '未知',
            cover: parsed.attributes.cover ?? 'momo',
            excerpt: parsed.attributes.excerpt ??
                content.replace(/\n+/g, ' ').replace(/\s+/g, ' ').slice(0, 160),
            password: parsed.attributes.password ?? undefined,
        }

        MetaList.push(meta)
    }

    // 排序：置顶优先 → 时间倒序
    MetaList.sort((a, b) => {
        const pinDiff = (b.pin ?? 0) - (a.pin ?? 0)
        if (pinDiff !== 0) return pinDiff
        return (b.date ?? 0) - (a.date ?? 0)
    })

    const categoryList = Array.from(new Set(MetaList.map(meta => meta.category ?? '未知')))

    return { categoryList, MetaList }
}

export async function getCategoryList(): Promise<string[]> {
    const posts: AllPostsMeta = await getAllPostsMeta()
    const tags = posts.MetaList.flatMap(p => p.tags ?? [])
    return [...new Set(tags)]
}
