import fm from 'front-matter';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

const md = new MarkdownIt();

// 导入 notes 下所有 md 文件（递归）
const files = import.meta.glob('../notes/**/*.md', { eager: true, as: 'raw' });

export interface NoteMeta {
    title?: string;
    date?: string;
    cover?: string;
    description?: string;
    tags?: string[];
    order?: number; // 可选：用于自定义排序（数字，越小越靠前）
    [key: string]: any;
}

export interface NoteFile {
    id: string;
    meta: NoteMeta;
    content: string;
    html: string;
    path: string;
}

export interface Note {
    id: string;
    path: string;
    categories: string[];
    meta: NoteMeta;
    content?: string;
    html?: string;
    files: NoteFile[];
}

export interface TreeNode {
    text: string;
    path?: string;
    id?: string;
    children?: TreeNode[];
}

// 默认一级文件夹元信息
const defaultFolderMeta: NoteMeta = {
    cover: '/default-cover.png',
    description: '暂无描述'
};

// 工具 - 自然排序比较（支持数字感知）
function naturalCompare(a: string, b: string) {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

// 生成所有笔记
export function getAllNotes(): Note[] {
    const grouped: Record<string, Note> = {};

    Object.entries(files).forEach(([fullPath, raw]) => {
        const relativePath = fullPath.replace(/^.*notes\//, ''); // 'ReinstallTheOS/00 简述.md'
        const parts = relativePath.split('/');
        const topFolder = parts[0]; // 一级文件夹
        const subPath = parts.slice(1).join('/'); // '00 简述.md' 或 'config.md'

        const { attributes, body } = fm<NoteMeta>(raw as string);
        const html = DOMPurify.sanitize(md.render(body));

        if (!grouped[topFolder]) {
            grouped[topFolder] = {
                id: topFolder,
                path: '/notes/' + topFolder,
                categories: [topFolder],
                meta: { ...defaultFolderMeta },
                files: []
            };
        }

        // 一级文件夹下的 config.md 用于笔记元信息
        if (subPath.toLowerCase() === 'config.md') {
            grouped[topFolder].meta = { ...grouped[topFolder].meta, ...attributes };
            grouped[topFolder].content = body;
            grouped[topFolder].html = html;
        } else {
            const filename = subPath.replace(/\.md$/, '');
            grouped[topFolder].files.push({
                id: filename,
                meta: { ...attributes, title: attributes.title || filename },
                content: body,
                html,
                path: `/notes/${topFolder}/${filename}` // 统一加 /notes 前缀
            });
        }
    });

    // 对每本笔记的 files 做排序：先用 meta.order，再用文件名自然排序
    Object.values(grouped).forEach(note => {
        note.files.sort((a, b) => {
            const ao = (typeof a.meta.order === 'number') ? a.meta.order : undefined;
            const bo = (typeof b.meta.order === 'number') ? b.meta.order : undefined;
            if (ao !== undefined && bo !== undefined) return ao - bo;
            if (ao !== undefined) return -1;
            if (bo !== undefined) return 1;

            // fallback: 使用 id 自然排序（会按 00, 01, 1, 2 等合理排序）
            return naturalCompare(a.id, b.id);
        });
    });

    return Object.values(grouped);
}

// 获取单本笔记
export function getNoteByPath(path: string) {
    return getAllNotes().find(n => n.path === path);
}

// 获取具体文章文件
export function getArticleByPath(path: string): NoteFile | undefined {
    return getAllNotes().flatMap(n => n.files).find(f => f.path === path);
}

// 生成多层目录树（同你之前的实现；可根据需要附加 id）
export function getNotesTree(): TreeNode[] {
    const notes = getAllNotes();
    const root: TreeNode[] = [];

    notes.forEach(note => {
        note.files.forEach(file => {
            const pathParts = file.path.slice(7).split('/'); // 去掉 "/notes/"
            let current = root;

            pathParts.forEach((part, idx) => {
                const nodeText = idx === 0 ? (note.meta.title || note.id) : part;
                const nodeId = idx === 0 ? note.id : undefined;

                let node = current.find(n => n.text === nodeText);

                if (!node) {
                    node = { text: nodeText };
                    if (nodeId) node.id = nodeId; // 顶层节点绑定 id，便于匹配
                    if (idx < pathParts.length - 1) {
                        node.children = [];
                    } else {
                        node.path = file.path;
                    }
                    current.push(node);
                }

                if (node.children) current = node.children;
            });
        });
    });

    return root;
}
