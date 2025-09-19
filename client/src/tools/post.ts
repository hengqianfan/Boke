import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import container from 'markdown-it-container'
import anchor from 'markdown-it-anchor'
import type { Post, PostMeta, Heading } from '@/types/post'

// 用于保存 headings 数组
let headings: Heading[] = []


// Markdown 渲染器
const md: any = new MarkdownIt({
    // 允许在文档中使用 HTML 标签
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

// 注册 anchor 插件，给标题加 id
md.use(anchor, {
    slugify: (s: string) => s.trim().toLowerCase().replace(/\s+/g, '-'),
})


// 收集 headings
md.use((md: any) => {
    const defaultRender =
        md.renderer.rules.heading_open ||
        function (tokens: any, idx: any, options: any, env: any, self: any) {
            return self.renderToken(tokens, idx, options)
        }

    md.renderer.rules.heading_open = function (
        tokens: any,
        idx: any,
        options: any,
        env: any,
        self: any
    ) {
        const title = tokens[idx + 1].content
        const level = Number(tokens[idx].tag.slice(1))
        const slug = tokens[idx].attrGet('id') || ''
        headings.push({ level, title, slug })

        return defaultRender(tokens, idx, options, env, self)
    }
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
    render(tokens: any, idx: number) {
        const token = tokens[idx]

        if (token.nesting === 1) {
            // 取出 ::: info 后面的内容（作为标题）
            const info = token.info.trim().slice('info'.length).trim()
            const title = info || '信息' // 如果没写标题，就用默认值

            return `<div class="custom-block-info"><p class="custom-block-title"> ${title}</p>\n`
        } else {
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





/** 按 slug 动态加载文章 */
export async function getPostBySlug(slug: any): Promise<Post | null> {
    const key = `../posts/${slug}.md`

    const loader = modules[key]
    if (!loader) return null

    const raw = await loader()

    const parsed = fm<PostMeta>(raw) // front-matter 解析


    const content = parsed.body.trim()
    // 每次渲染前清空 headings
    headings = []
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

    return { slug, meta, html: safeHtml, raw: content, headings, id: slug }
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
        // 获取
        const da = a.meta.date ? new Date(a.meta.date).getTime() : 0
        const db = b.meta.date ? new Date(b.meta.date).getTime() : 0
        return db - da
    })
    // 按置顶排序
    result.sort((a, b) => (b.meta.pin ?? 0) - (a.meta.pin ?? 0))
    return result
}
