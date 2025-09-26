<template>
    <div class="note-detail">
        <!-- 笔记库的标题 -->
        <h1>{{ note?.meta.title }}</h1>
        <!-- <p class="meta">⏰ {{ article?.meta.date }} | 🏷 {{ article?.meta.tags?.join(', ') }}</p> -->

        <!-- 顶部目录栏 -->
        <div class="toc" @mouseenter="isTocOpen = true" @mouseleave="isTocOpen = false">
            <button class="toc-toggle">{{ isTocOpen ? '📥 知识库目录' : `当前位置：${formatPath2(article?.path || '')}`
                }}</button>
            <div v-if="isTocOpen" class="toc-list">

                <div class="toc-list-title">📥 知识库目录</div>


                <ul>
                    <li v-for="file in note?.files" :key="file.path">
                        <router-link :to="file.path">{{ file.meta.title || file.id }}</router-link>
                    </li>
                </ul>
            </div>
        </div>


        <hr>

        <!-- <h1>{{ formatFileName(article?.id || '') }}</h1> -->

        <!-- 正文 -->
        <article class="markdown-body" v-html="article?.html"></article>





    </div>

    <Outline :headings="outline || []" />


</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick, createApp } from 'vue';
import { useRoute } from 'vue-router';
import MyImage from '@/components/MarkdownImg/index.vue';
import CardPost from '@/components/CardPost/index.vue';


import { Config } from '@/config/index';
import { getAllNotes, getArticleByPath, type Note, type NoteFile, generateToc } from '@/tools/notes';
import Outline from '@/components/Outline/index.vue'
import { type NoteOutlineHeading } from '@/types/note'
import { formatFileName, formatPath, formatPath2 } from '@/tools/format'

// import { generateToc } from '@/tools/notes'

function processArticleHtml(html: string) {
    const container = document.createElement('div')
    container.innerHTML = html
    const headers = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headers.forEach(h => {
        if (!h.id) {
            h.id = h.textContent
                ?.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]/g, '')
                .replace(/\-+/g, '-')
                .replace(/^\-+|\-+$/g, '') ?? ''
        }
    })


    // ✅ 给代码块加复制按钮（最小化改动，只动这里）
    container.querySelectorAll('pre code').forEach(block => {
        const pre = block.parentElement
        if (pre && !pre.querySelector('.copy-btn')) {
            pre.insertAdjacentHTML(
                'beforeend',
                `<button class="copy-btn" data-code="${encodeURIComponent(block.textContent || '')}">复制</button>`
            )
        }
    })

    return container.innerHTML
}


const route = useRoute();

const note = ref<Note | null>(null);        // 当前笔记本
const article = ref<NoteFile | null>(null); // 当前文章
const isTocOpen = ref(false);

const outline = ref<NoteOutlineHeading[] | null>(null)


onMounted(async () => {

}
)


watch(
    () => route.path,
    async (path) => {
        // path: /notes/ReinstallTheOS/00 简述
        const segments = path.replace(/^\/notes\//, '').split('/');
        const topId = segments[0];

        const allNotes = getAllNotes();
        note.value = allNotes.find(n => n.id === topId) || null;

        // 找当前文章
        article.value = getArticleByPath(path) || note.value?.files[0] || null;
        // outline.value = generateToc(article.value?.html || '')


        // 使用示例
        article.value!.html = processArticleHtml(article.value!.html)
        outline.value = generateToc(article.value!.html)


        // 设置网页标题
        if (article.value?.meta.title) {
            document.title = `${article.value.meta.title} | ${Config.siteName}`
        } else {
            document.title = `${Config.siteName}`
        }

        // 🔥 等 v-html 渲染完成
        await nextTick()
        const container = document.querySelector('.markdown-body')
        if (!container) return

        container.addEventListener('click', (e) => {
            const target = e.target as HTMLElement
            if (target.classList.contains('copy-btn')) {
                const code = target.getAttribute('data-code') || ''
                navigator.clipboard.writeText(decodeURIComponent(code)).then(() => {
                    target.textContent = '✔ 已复制'
                    setTimeout(() => (target.textContent = '复制'), 1000)
                })
            }


        })

        const containers = document.querySelectorAll<HTMLDivElement>(".md-img")
        containers.forEach((el) => {
            const src = el.dataset.src || ""
            const alt = el.dataset.alt || ""

            // 创建一个小的 Vue app 挂载到 div 里
            const app = createApp(MyImage, { src, alt })
            app.mount(el)
        })


        const containers2 = document.querySelectorAll<HTMLDivElement>(".md-card")
        containers2.forEach((el) => {
            const type = el.dataset.type
            const slug = el.dataset.slug || ""

            if (type === "post") {
                const app = createApp(CardPost, { slug })
                app.mount(el)
            }
        })


    },
    { immediate: true }
);
</script>

<style scoped lang="scss">
.note-detail {
    width: 100%;
    min-height: 80vh;
    padding: 20px;
    border: 2px solid #eee;
    position: relative;
    // 页面底部
    padding-bottom: 30vh;

    .meta {
        color: #888;
        margin-bottom: 1rem;
    }

    .toc {
        position: relative;
        margin-bottom: 1.5rem;
        // min-width: 500px;
        transition: all 0.6s ease;

        .toc-toggle {

            background: #f5f5f5;
            border: none;
            font-size: 14px;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            color: #5b5555;

        }

        .toc-list {
            // width: 100%;

            position: absolute;
            // margin-top: 10px;
            top: 0px;
            left: 0;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            z-index: 100;
            max-height: 50vh;
            overflow-y: auto;

            .toc-list-title {
                margin: 20px 0;
            }

            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            li {
                margin: 6px 0;
            }

            a {
                text-decoration: none;
                color: #1b2b36;

                &:hover {
                    text-decoration: underline;
                    color: #e38383;
                }
            }
        }
    }

    article {
        line-height: 1.8;
    }
}
</style>
