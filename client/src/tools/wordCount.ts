export function countWords(md: string): number {
    // const text = mdBody
    //     // 去掉代码块和行内代码
    //     .replace(/`{1,3}[^`]*`{1,3}/g, "")
    //     // 去掉图片 ![alt](url) 和链接 [text](url)
    //     .replace(/!\[.*?\]\(.*?\)/g, "")
    //     .replace(/\[.*?\]\(.*?\)/g, "")
    //     // 去掉 Markdown 标记符号 (#, *, >, - 等)
    //     .replace(/[#>*_~\-`]/g, "")
    //     // 去掉 HTML 标签（有时 md 会嵌 HTML）
    //     .replace(/<[^>]+>/g, "")
    //     // 合并多余空白
    //     .replace(/\s+/g, "")

    // return text.length
    const text = md
        .replace(/```[\s\S]*?```/g, "") // 去掉代码块
        .replace(/`[^`]*`/g, "")        // 去掉行内代码
        .replace(/!\[.*?\]\(.*?\)/g, "") // 去掉图片
        .replace(/\[.*?\]\(.*?\)/g, "") // 去掉链接
        .replace(/<[^>]+>/g, "")        // 去掉 HTML 标签
        .replace(/[#>*_~\-]/g, "")      // 去掉 Markdown 符号
        .trim()

    // 匹配：中文单字 OR 英文单词 OR 数字
    const tokens = text.match(/[\u4e00-\u9fff]|[a-zA-Z]+|\d+/g)
    return tokens ? tokens.length : 0
}