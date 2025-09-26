// plugins/md-img.ts
import type MarkdownIt from "markdown-it";

export default function mdImg(md: MarkdownIt) {
    md.inline.ruler.before("image", "custom_img", (state, silent) => {
        const start = state.pos;

        if (state.src.charCodeAt(start) !== 0x21 /* ! */) return false;
        if (state.src.slice(start, start + 5) !== "!img[") return false;

        const labelStart = start + 5;
        const labelEnd = state.src.indexOf("]", labelStart);
        if (labelEnd < 0) return false;

        const alt = state.src.slice(labelStart, labelEnd);

        if (state.src[labelEnd + 1] !== "(") return false;
        const urlEnd = state.src.indexOf(")", labelEnd + 2);
        if (urlEnd < 0) return false;

        const src = state.src.slice(labelEnd + 2, urlEnd);

        if (!silent) {
            const token = state.push("custom_img", "div", 0);
            token.attrs = [
                ["data-type", "md-img"],
                ["data-src", src],
                ["data-alt", alt]
            ];
        }

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
