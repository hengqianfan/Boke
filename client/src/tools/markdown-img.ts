// plugins/md-img.ts
import type MarkdownIt from "markdown-it";

export default function mdImg(md: MarkdownIt) {
    md.inline.ruler.before("image", "custom_img", (state, silent) => {
        const start = state.pos;

        // 必须以 ! 开头
        if (state.src.charCodeAt(start) !== 0x21 /* ! */) return false;

        // 必须是 !img[
        if (state.src.slice(start, start + 5) !== "!img[") return false;

        const labelStart = start + 5;
        const labelEnd = state.src.indexOf("]", labelStart);
        if (labelEnd < 0) return false;

        const alt = state.src.slice(labelStart, labelEnd);

        // 后面必须是 "("
        if (state.src[labelEnd + 1] !== "(") return false;

        const urlStart = labelEnd + 2;
        const urlEnd = state.src.indexOf(")", urlStart);
        if (urlEnd < 0) return false;

        const src = state.src.slice(urlStart, urlEnd);

        if (!silent) {
            const token = state.push("custom_img", "div", 0);
            token.attrs = [
                ["data-type", "md-img"],
                ["data-src", src],
                ["data-alt", alt]
            ];
        }

        // 仅在成功匹配时才更新 state.pos
        state.pos = urlEnd + 1;
        return true;
    });

    md.renderer.rules.custom_img = (tokens, idx) => {
        const token = tokens[idx];
        const src = token.attrGet("data-src");
        const alt = token.attrGet("data-alt");
        return `<div class="md-img" data-src="${src}" data-alt="${alt}"></div>`;
    };
}
