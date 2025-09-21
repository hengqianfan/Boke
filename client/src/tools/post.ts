import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import container from 'markdown-it-container'
import anchor from 'markdown-it-anchor'
import { countWords } from '@/tools/wordCount'
import { formatFileName, extractTimestamp } from '@/tools/format'

import type { Post, PostMeta, OutlineHeading, AllPostsMeta } from '@/types/post'


import { Config } from '@/config'



// 用于保存 headings 数组
let headings: OutlineHeading[] = []


// Markdown 渲染器

const md: any = new MarkdownIt({
    html: true,
    // 
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
        // const escaped = md.utils.escapeHtml(str)
        const encoded = encodeURIComponent(str)
        const codeHtml = lang && hljs.getLanguage(lang)
            ? hljs.highlight(str, { language: lang }).value
            : hljs.highlightAuto(str).value
        const fileType = lang || 'text'
        // 包裹按钮和代码块
        return `
        <div class="code-block-wrapper">
          <div class="code-block-header">${fileType}</div>
          <button class="copy-btn" data-code="${encoded}">复制</button>
          <pre class="hljs"><code>${codeHtml}</code></pre>
        </div>
      `
    }


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
            const title = info || 'INFO' // 如果没写标题，就用默认值

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
export async function getPostBySlug(slug: string): Promise<Post | null> {
    const key = `../posts/${slug}.md`

    const loader = modules[key]
    if (!loader) return null
    const raw = await loader()
    const parsed = fm<PostMeta>(raw) // front-matter 解析
    const content = parsed.body.trim()
    // 字数统计
    const wordCount = countWords(content)
    // 每次渲染前清空 headings
    headings = []
    const rendered = md.render(content)
    // 消毒
    const safeHtml = DOMPurify.sanitize(rendered, {
        ADD_ATTR: ['href', 'target', 'rel'],
    })

    const meta: PostMeta = {
        slug: slug,
        title: parsed.attributes.title ?? slug,
        // 将 date 转成时间戳
        date: parsed.attributes.date ? new Date(parsed.attributes.date).getTime() : 0,
        tags: parsed.attributes.tags,
        cover: parsed.attributes.cover,
        pin: parsed.attributes.pin ?? 0,
        wordCount,
        excerpt:
            parsed.attributes.excerpt ??
            content.slice(0, 160).replace(/\n/g, ' '),
    }



    return { meta, html: safeHtml, raw: content, outline: headings, id: slug }
}

export async function getAllPostsMeta(): Promise<AllPostsMeta> {

    const MetaList: PostMeta[] = [];


    for (const key in modules) {
        const slug = key.split('/').pop()!.replace(/\.md$/, '');
        const raw = await modules[key]();
        const parsed = fm<PostMeta>(raw);
        const content = parsed.body.trim();

        let fileNameByFormat: string = slug

        let fileTime: number = parsed.attributes.date ? new Date(parsed.attributes.date).getTime() : 0

        if (Config.AutoFormatFileName) {
            fileNameByFormat = formatFileName(slug)
            fileTime = extractTimestamp(slug)

        }

        const meta: PostMeta = {
            slug,
            title: parsed.attributes.title ?? fileNameByFormat,
            date: fileTime,
            pin: parsed.attributes.pin ?? 0,
            tags: parsed.attributes.tags ?? [],
            category: parsed.attributes.category ?? '未知',
            cover: parsed.attributes.cover ?? 'momo',
            excerpt: parsed.attributes.excerpt ??
                content.replace(/\n+/g, ' ').replace(/\s+/g, ' ').slice(0, 160),
        };



        MetaList.push(meta);
    }



    // 合并排序：先置顶，再按日期倒序
    MetaList.sort((a, b) => {
        const pinDiff = (b.pin ?? 0) - (a.pin ?? 0);
        if (pinDiff !== 0) return pinDiff;

        return (b.date ?? 0) - (a.date ?? 0);
    });


    // 生成去重分类列表
    const categoryList = Array.from(new Set(MetaList.map(meta => meta.category ?? '未知')));

    return {
        categoryList,
        MetaList,
    };
}




export async function getCategoryList(): Promise<string[]> {
    const posts: AllPostsMeta = await getAllPostsMeta()
    const tags = posts.MetaList.flatMap(p => p.tags ?? [])
    // 去重
    return [...new Set(tags)]
}
