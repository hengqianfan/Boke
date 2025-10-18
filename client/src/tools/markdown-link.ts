// plugins/md-link.ts
import type MarkdownIt from "markdown-it";

export default function mdLink(md: MarkdownIt) {
    md.inline.ruler.before("image", "custom_link", (state, silent) => {
        const start = state.pos;

        // 必须以 ! 开头
        if (state.src.charCodeAt(start) !== 0x21 /* ! */) return false;

        // 必须是 !link[
        if (state.src.slice(start, start + 6) !== "!link[") return false;

        const labelStart = start + 6;
        const labelEnd = state.src.indexOf("]", labelStart);
        if (labelEnd < 0) return false;

        const desc = state.src.slice(labelStart, labelEnd).trim();

        // 后面必须是 "("
        if (state.src[labelEnd + 1] !== "(") return false;

        const urlStart = labelEnd + 2;
        const urlEnd = state.src.indexOf(")", urlStart);
        if (urlEnd < 0) return false;

        const src = state.src.slice(urlStart, urlEnd).trim();

        // 检查是否有 {icon}
        let icon = "";
        const braceStart = state.src.indexOf("{", urlEnd + 1);
        if (braceStart >= 0 && braceStart === urlEnd + 1) {
            const braceEnd = state.src.indexOf("}", braceStart + 1);
            if (braceEnd > braceStart) {
                icon = state.src.slice(braceStart + 1, braceEnd).trim();
                // 成功解析 icon 时，移动 pos 到 } 后
                if (!silent) {
                    const token = state.push("custom_link", "div", 0);
                    token.attrs = [
                        ["data-type", "md-link"],
                        ["data-src", src],
                        ["data-desc", desc],
                        ["data-icon", icon],
                    ];
                }
                state.pos = braceEnd + 1;
                return true;
            }
        }

        // 没有 icon 的情况
        if (!silent) {
            const token = state.push("custom_link", "div", 0);
            token.attrs = [
                ["data-type", "md-link"],
                ["data-src", src],
                ["data-desc", desc],
            ];
        }

        state.pos = urlEnd + 1;
        return true;
    });

    md.renderer.rules.custom_link = (tokens, idx) => {
        const token = tokens[idx];
        const src = token.attrGet("data-src");
        const desc = token.attrGet("data-desc");
        const icon = token.attrGet("data-icon") || "";
        return `<div class="md-link" data-src="${src}" data-desc="${desc}" data-icon="${icon}"></div>`;
    };
}
