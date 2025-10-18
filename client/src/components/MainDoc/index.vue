<template>
    <div class="doc-detail">
        <!-- 标题 -->
        <h1>{{ doc?.meta.title }}</h1>


        <!-- 如果上锁，则展示密码框 -->
        <div v-if="isLocked" class="lock-mask">
            <p>🔒 该文章已加密，请输入密码</p>
            <input v-model="inputPassword" type="password" placeholder="输入密码" />
            <button @click="unlock">解锁</button>
        </div>

        <div v-else>

            <!-- 文章信息 / 标签 -->
            <!-- 文章模式下才存在 -->
            <div v-if="docType === 'post'" class="doc-meta">
                <div class="doc-time">⏰ {{ formatDate_timestamp(doc?.meta.date || 0) }}</div>
                |
                <div class="doc-wordCount">字数：{{ doc?.meta.wordCount }} 👁‍🗨 阅读：{{ doc?.meta.readTime }} min</div>
                |
                <div v-for="tag in doc?.meta.tags || []" :key="tag" class="doc-tag" @click="backHomeByTag(tag)">
                    {{ tag }}
                </div>
            </div>


            <!-- 顶部目录栏 -->
            <div class="toc" v-if="docType === 'note'" @mouseenter="isTocOpen = true" @mouseleave="isTocOpen = false">
                <button class="toc-toggle">{{ isTocOpen ? '📥 知识库目录' : `当前位置：${formatPath2(doc?.path || '')}`
                }}</button>
                <div v-if="isTocOpen" class="toc-list">

                    <div class="toc-list-title">📥 知识库目录</div>

                    <ul>
                        <li v-for="file in note?.files" :key="file.path">
                            <router-link :to="file.path">{{ file.subPath || file.id }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>


            <hr class="hr-head" />

            <!-- 正文 -->
            <article class="markdown-body" v-html="doc?.html"></article>

            <!-- <div>
                <MdEditor :model-value="doc?.raw" @update:modelValue="val => { if (doc) doc.raw = val }" />
            </div> -->
        </div>

    </div>






</template>

<script setup lang="ts">
import { ref, watch, nextTick, createApp, onUnmounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Config } from "@/config"
import { formatDate_timestamp } from "@/tools/format"
import { formatPath2 } from "@/tools/format"
import { getPostBySlug } from "@/tools/post"
import { getAllNotes, getArticleByPath, type Note, type NoteFile, generateToc } from "@/tools/notes"

import Outline from "@/components/Outline/index.vue"
import MyImage from "@/components/MarkdownImg/index.vue"


import MyLinkWindow from "@/components/MarkdownLink/index.vue"

import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import CardPost from "@/components/CardPost/index.vue"
import { usePostsStore } from "@/stores/posts"
import { useMainStore } from "@/stores/main"



type DocType = "post" | "note"

const route = useRoute()
const router = useRouter()
const postStore = usePostsStore()
const main = useMainStore()


// --- 核心状态 ---
const docType = ref<DocType>("post") // 当前文档类型
const doc = ref<any>(null)           // 当前文章或笔记文件
const note = ref<Note | null>(null)  // 笔记模式时当前笔记本

const isTocOpen = ref(false)
// 锁文逻辑
const correctPassword = ref<string>('momo')
// 新增：锁状态
const isLocked = ref(true)
const inputPassword = ref("")


import { useOutlineStore } from "@/stores/outline"

const outlineStore = useOutlineStore()



function unlock() {
    if (inputPassword.value === correctPassword.value) {
        isLocked.value = false
    } else {
        alert("密码错误")
    }
}


const backHomeByTag = (tag: string) => {
    postStore.setTag(tag)
    router.push("/")
}

// --- 工具函数 ---
function processArticleHtml(html: string) {
    const container = document.createElement("div")
    container.innerHTML = html

    // 给标题加 id
    const headers = container.querySelectorAll("h1,h2,h3,h4,h5,h6")
    headers.forEach(h => {
        if (!h.id) {
            h.id =
                h.textContent
                    ?.toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w\-]/g, "")
                    .replace(/\-+/g, "-")
                    .replace(/^\-+|\-+$/g, "") ?? ""
        }
    })

    // 代码复制按钮
    container.querySelectorAll("pre code").forEach(block => {
        const pre = block.parentElement
        if (pre && !pre.querySelector(".copy-btn")) {
            pre.insertAdjacentHTML(
                "beforeend",
                `<button class="copy-btn" data-code="${encodeURIComponent(
                    block.textContent || ""
                )}">复制</button>`
            )
        }
    })

    return container.innerHTML
}

// --- 点击事件绑定 ---
let handleClick: ((e: Event) => void) | null = null

watch(
    () => route.path,
    async (path) => {
        // 每次切换文章时，显示侧边栏
        main.setAsideShow(true)
        // 判断是 post 还是 note
        if (path.startsWith("/notes/")) {
            docType.value = "note"
            const segments = path.replace(/^\/notes\//, "").split("/")
            const topId = segments[0]

            const allNotes = getAllNotes()
            note.value = allNotes.find(n => n.id === topId) || null

            doc.value = getArticleByPath(path) || note.value?.files[0] || null
        } else {
            docType.value = "post"
            doc.value = await getPostBySlug(String(route.params.slug || ""))
        }


        // 处理 html
        if (doc.value) {
            doc.value.html = processArticleHtml(doc.value.html)
            // outline.value = generateToc(doc.value.html)
        }

        // 文章上锁
        if (doc.value?.meta?.password) {
            isLocked.value = true
            correctPassword.value = doc.value.meta.password
        } else {
            isLocked.value = false
        }



        // 设置网页标题
        if (doc.value?.meta.title) {
            document.title = `${doc.value.meta.title} | ${Config.siteName}`
        } else {
            document.title = `${Config.siteName}`
        }

        // 等待渲染完成再挂载事件
        await nextTick()
        const container = document.querySelector(".markdown-body")
        if (!container) return

        // 先解绑
        if (handleClick) container.removeEventListener("click", handleClick)

        handleClick = (e: Event) => {
            const target = e.target as HTMLElement
            if (target.classList.contains("copy-btn")) {
                const code = target.getAttribute("data-code") || ""
                navigator.clipboard.writeText(decodeURIComponent(code)).then(() => {
                    target.textContent = "✔ 已复制"
                    setTimeout(() => (target.textContent = "复制"), 1000)
                })
            }
        }
        container.addEventListener("click", handleClick)

        // 挂载自定义组件
        document.querySelectorAll<HTMLDivElement>(".md-img").forEach(el => {
            const src = el.dataset.src || ""
            const alt = el.dataset.alt || ""
            const app = createApp(MyImage, { src, alt })
            app.mount(el)
        })

        document.querySelectorAll<HTMLDivElement>(".md-link").forEach(el => {
            const src = el.dataset.src || ""
            const desc = el.dataset.desc || ""
            const icon = el.dataset.icon || ''
            const app = createApp(MyLinkWindow, { src, desc, icon })
            app.mount(el)
        })




        document.querySelectorAll<HTMLDivElement>(".md-card").forEach(el => {
            const type = el.dataset.type
            const slug = el.dataset.slug || ""
            if (type === "post" || type === "note") {
                const app = createApp(CardPost, { slug })
                app.mount(el)
            }
        })

        if (doc.value) {
            doc.value.html = processArticleHtml(doc.value.html)
            const toc = generateToc(doc.value.html)
            outlineStore.setOutline(toc) // ✅ 存到 pinia
        }


    },
    { immediate: true }
)

onUnmounted(() => {
    const container = document.querySelector(".markdown-body")
    if (container && handleClick) {
        container.removeEventListener("click", handleClick)
    }
    // 离开时，清空大纲
    outlineStore.clearOutline()

})


onUnmounted(() => {
})


</script>

<style scoped lang="scss">
.lock-mask {
    // position: absolute;
    padding: 40px;
    margin: 0 auto;
    width: 80%;
    border: 1px dashed #aaa;
    border-radius: 12px;
    text-align: center;
    background: #fafafa;
    z-index: 1000;

    p {
        margin: 10px 0;

    }

    input {
        padding: 6px 10px;
        margin: 0 10px;
        border: 1px solid rgb(201, 193, 193);
        border-radius: 10px;
        text-align: center;
    }

    button {
        padding: 6px 12px;
        border: none;
        background: #444;
        color: #fff;
        border-radius: 6px;
        cursor: pointer;
    }
}

.doc-detail {
    width: 100%;
    min-height: 80vh;
    padding: 20px;
    // border: 2px solid #eee;
    position: relative;
    padding-bottom: 30vh;

    .doc-meta {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin-bottom: 1rem;

        div {
            padding: 6px 8px;
            border-radius: 6px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .doc-time {
            background: #ea8c2f;
            color: #fff;
        }

        .doc-wordCount {
            background: #000;
            color: #fff;
            font-size: 10px;
        }

        .doc-tag {
            background: #7ba5ca;
            color: #fff;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                background: #5d87ac;
            }
        }
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


@media screen and (max-width: 600px) {
    .doc-detail {
        width: 100%;
        min-height: 100vh;
        padding: 0px;
        // border: 2px solid #eee;
        position: relative;
        padding-bottom: 30vh;

        .doc-meta {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-bottom: 1rem;

            div {
                padding: 6px 8px;
                border-radius: 6px;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;

            }

            .doc-time {
                background: #ea8c2f;
                color: #fff;
            }

            .doc-wordCount {
                background: #000;
                color: #fff;
                font-size: 10px;
            }

            .doc-tag {
                background: #7ba5ca;
                color: #fff;
                cursor: pointer;
                transition: all 0.2s;

                &:hover {
                    background: #5d87ac;
                }
            }
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
}
</style>
