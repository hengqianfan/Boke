import type MarkdownIt from "markdown-it";

export default function mdCard(md: MarkdownIt) {
    md.inline.ruler.before("image", "custom_card", (state, silent) => {
        const start = state.pos;

        if (state.src.charCodeAt(start) !== 0x21 /* ! */) return false;
        if (state.src.slice(start, start + 6) !== "!card[") return false;

        const labelStart = start + 6;
        const labelEnd = state.src.indexOf("]", labelStart);
        if (labelEnd < 0) return false;

        const cardType = state.src.slice(labelStart, labelEnd);

        if (state.src[labelEnd + 1] !== "(") return false;
        const urlEnd = state.src.indexOf(")", labelEnd + 2);
        if (urlEnd < 0) return false;

        const slug = state.src.slice(labelEnd + 2, urlEnd);

        if (!silent) {
            const token = state.push("custom_card", "div", 0);
            token.attrs = [
                ["data-type", cardType],
                ["data-slug", slug]
            ];
        }

        state.pos = urlEnd + 1;
        return true;
    });

    md.renderer.rules.custom_card = (tokens, idx) => {
        const token = tokens[idx];
        const type = token.attrGet("data-type");
        const slug = token.attrGet("data-slug");
        return `<div class="md-card" data-type="${type}" data-slug="${slug}"></div>`;
    };
}
