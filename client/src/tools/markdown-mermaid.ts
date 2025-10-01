import type MarkdownIt from 'markdown-it'

export default function markdownItMermaid(md: MarkdownIt) {
    const defaultFence = md.renderer.rules.fence!
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const code = token.content || ''
        const lang = (token.info || '').trim().split(/\s+/)[0]

        if (lang === 'mermaid') {
            // 只处理 mermaid 代码块
            // 用模板字符串包裹原始代码，保留换行
            const escapedCode = code.replace(/`/g, '\\`')

            return `<Mermaid id="mermaid-${idx}" code="${encodeURIComponent(token.content)}"></Mermaid>`
        }

        // 非 mermaid，保持默认渲染
        return defaultFence(tokens, idx, options, env, self)
    }
}
