import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import container from 'markdown-it-container'
import anchor from 'markdown-it-anchor'
import mdCard from "./markdown-card";
import mdImg from "./markdown-img";
import mdLink from "./markdown-link";

import markdownItMermaid from './markdown-mermaid'



export interface Heading {
    level: number
    title: string
    slug: string
}


// ------------------ 新增：单一渲染函数（复用） ------------------
/**
 * 渲染代码块的单一函数（高亮 + header + copy 按钮）
 * 这样 highlight 和 fence 都能复用同一份实现，避免重复代码。
 */
function renderCodeBlock(code: string, langRaw?: string) {
    // 取出真正的语言标识（比如 "js linenos" => "js"）
    const lang = (langRaw || '').trim().split(/\s+/)[0] || ''
    const encoded = encodeURIComponent(code) // 用于 data-code（复制）
    const highlighted = lang && hljs.getLanguage(lang)
        ? hljs.highlight(code, { language: lang }).value
        : hljs.highlightAuto(code).value
    const fileType = lang || 'text'

    // 返回最终 HTML（保持你原来的结构）
    return `
<div class="code-block-wrapper">
  <div class="code-block-header">${fileType}</div>
  <button class="copy-btn" data-code="${encoded}">复制</button>
  <pre class="hljs"><code>${highlighted}</code></pre>
</div>
`.trim() // trim 去掉多余换行
}
// ------------------ 新增结束 ------------------



export function createMarkdown() {
    // 每次调用生成新的 headings，避免全局变量污染
    const headings: Heading[] = []

    const md: any = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: renderCodeBlock
    })


    // 覆盖默认的 fence 渲染，避免 MarkdownIt 自动包裹 <pre><code>
    md.renderer.rules.fence = (tokens: any, idx: number, options: any, env: any, self: any) => {
        const token = tokens[idx]
        const code = token.content
        const info = token.info || ''
        // 统一走 md.options.highlight，确保行为一致
        return md.options.highlight(code, info)
    }


    // 注册自定义语法、组件 !img[]()
    md.use(mdImg);
    md.use(mdCard)
    md.use(mdLink)
    // 注册插件
    // md.use(markdownItMermaid)



    // 注册 anchor
    md.use(anchor, {
        slugify: (s: string) => s.trim().toLowerCase().replace(/\s+/g, '-'),
    })

    // 收集 headings
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

    // 注册容器


    md.use(container, 'info', {
        render(tokens: any, idx: number) {
            if (tokens[idx].nesting === 1) {
                const info = tokens[idx].info.trim().slice('info'.length).trim()
                const title = info || 'INFO'
                return `<div class="custom-block-info"><p class="custom-block-title">${title}</p>\n`
            } else {
                return '</div>\n'
            }
        },
    })

    md.use(container, 'warning', {
        render(tokens: any, idx: number) {
            if (tokens[idx].nesting === 1) {
                const warning = tokens[idx].info.trim().slice('warning'.length).trim()
                const title = warning || 'WARNING'
                return `<div class="custom-block-warning"><p class="custom-block-title">${title}</p>\n`
            } else {
                return '</div>\n'
            }
        },
    })


    md.use(container, 'danger', {
        render(tokens: any, idx: number) {
            if (tokens[idx].nesting === 1) {
                const danger = tokens[idx].info.trim().slice('danger'.length).trim()
                const title = danger || 'DANGER'
                return `<div class="custom-block-danger"><p class="custom-block-title">${title}</p>\n`
            } else {
                return '</div>\n'
            }
        },
    })


    md.use(container, 'tip', {
        render(tokens: any, idx: number) {
            if (tokens[idx].nesting === 1) {
                const key = tokens[idx].info.trim().slice('tip'.length).trim()
                const title = key || 'TIP'
                return `<div class="custom-block-tip"><p class="custom-block-title">${title}</p>\n`
            } else {
                return '</div>\n'
            }
        },
    })


    function render(content: string) {
        const rendered = md.render(content, { headings })
        const safeHtml = DOMPurify.sanitize(rendered, {
            // 'href', 'target', 'rel' 防止链接语法失效
            // 'data-code' 防止代码块实现
            ADD_ATTR: ['href', 'target', 'rel', 'data-code'],
            ADD_TAGS: ['MyImage', 'MyMermaid']
        })
        return { html: safeHtml, headings }
    }

    return { md, render, headings }
}
