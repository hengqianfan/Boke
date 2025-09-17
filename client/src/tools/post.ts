import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import container from 'markdown-it-container'

// Markdown 渲染器
const md: any = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
        try {
            if (lang && hljs.getLanguage(lang)) {
                return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value
                    }</code></pre>`
            }
            return `<pre class="hljs"><code>${hljs.highlightAuto(str).value
                }</code></pre>`
        } catch {
            return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
        }
    },
})

// 注册 warning 容器
md.use(container, 'warning', {
    render(tokens: any, idx: any) {
        const token = tokens[idx]
        if (token.nesting === 1) {
            // 开始标签
            return `<div class="custom-block-warning"><p class="custom-block-title">⚠️ 警告</p>\n`
        } else {
            // 结束标签
            return '</div>\n'
        }
    },
})

// 注册 info 容器
md.use(container, 'info', {
    render(tokens: any, idx: any) {
        const token = tokens[idx]
        if (token.nesting === 1) {
            // 开始标签
            return `<div class="custom-block-info"><p class="custom-block-title">⚠️ xinxi</p>\n`
        } else {
            // 结束标签
            return '</div>\n'
        }
    },
})



// 动态导入 posts 文件夹下所有 md（返回 raw 文本）
const modules = import.meta.glob('../posts/*.md', {
    import: 'default', // 导入默认导出
    query: '?raw',     // 相当于原来的 as: 'raw'
}) as Record<
    string,
    () => Promise<string>
>



export type PostMeta = {
    title: string
    date?: number
    tags?: string[]
    cover?: string
    excerpt?: string
    pin?: number
    [k: string]: any
}

export type Post = {
    slug: any
    meta: PostMeta
    html: string   // 已渲染 & 消毒
    raw: string    // 原始 markdown 正文
}

/** 按 slug 动态加载文章 */
export async function getPostBySlug(slug: any): Promise<Post | null> {
    const key = `../posts/${slug}.md`

    const loader = modules[key]
    if (!loader) return null

    const raw = await loader()

    const parsed = fm<PostMeta>(raw) // front-matter 解析




    const content = parsed.body.trim()
    const rendered = md.render(content)
    const safeHtml = DOMPurify.sanitize(rendered)

    const meta: PostMeta = {
        title: parsed.attributes.title ?? slug,
        // 将 date 转成时间戳

        date: parsed.attributes.date ? new Date(parsed.attributes.date).getTime() : 0,
        tags: parsed.attributes.tags,
        cover: parsed.attributes.cover,
        pin: parsed.attributes.pin ?? 0,
        excerpt:
            parsed.attributes.excerpt ??
            content.slice(0, 160).replace(/\n/g, ' '),
    }

    return { slug, meta, html: safeHtml, raw: content }
}

/** 获取所有文章 meta 列表（不加载 html） */
export async function getAllPostsMeta(): Promise<
    { slug: string; meta: PostMeta }[]
> {
    // 定义返回的结果数组
    const result: { slug: string; meta: PostMeta }[] = []

    for (const key in modules) {
        // 获取文件名
        const slug = key.split('/').pop()!.replace(/\.md$/, '')
        // 获取文件的 raw 文本 
        const raw = await modules[key]()
        // 解析 front-matter
        const parsed = fm<PostMeta>(raw)
        // 提取正文
        const content = parsed.body.trim()
        result.push({
            slug,
            meta: {
                title: parsed.attributes.title ?? slug,
                date: parsed.attributes.date ? new Date(parsed.attributes.date).getTime() : 0,
                pin: parsed.attributes.pin ?? 0,

                tags: parsed.attributes.tags,
                cover: parsed.attributes.cover,
                excerpt:
                    parsed.attributes.excerpt ??
                    content.slice(0, 160).replace(/\n/g, ' '),
            },
        })
    }
    // 按日期倒序
    result.sort((a, b) => {
        const da = a.meta.date ? new Date(a.meta.date).getTime() : 0
        const db = b.meta.date ? new Date(b.meta.date).getTime() : 0
        return db - da
    })
    return result
}
