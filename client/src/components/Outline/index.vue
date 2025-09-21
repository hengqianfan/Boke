<template>
    <div class="toc" :class="{ open: isOpen }">
        <!-- 目录切换按钮 -->
        <button class="toc-toggle" @click="isOpen = !isOpen">
            {{ isOpen ? '✖' : '🧭' }}
        </button>

        <nav v-if="isOpen" class="toc-content">
            <h3 class="toc-title"> {{ Config.OutlineTitle }}</h3>
            <ul>
                <li v-for="h in headings" :key="h.slug" :class="{ active: h.slug === activeSlug }"
                    :style="{ paddingLeft: (h.level - 1) * 16 + 'px' }">
                    <a :href="'#' + h.slug" @click.prevent="scrollToHeading(h.slug)">
                        {{ h.title }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Config } from '@/config'
import type { OutlineHeading } from '@/types/post'


const props = defineProps<{
    headings: OutlineHeading[]
}>()

const activeSlug = ref<string>('')
// 默认打开
const isOpen = ref<boolean>(Config.OutlineShow ?? false)

function scrollToHeading(slug: string) {
    const el = document.getElementById(slug)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

function onScroll() {
    let current: string = ''
    for (const h of props.headings) {
        const el = document.getElementById(h.slug)
        if (el) {
            const top = el.getBoundingClientRect().top
            if (top <= 100) {
                current = h.slug
            } else {
                break
            }
        }
    }
    activeSlug.value = current
}

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped lang="scss">
.toc {
    position: fixed;
    top: 100px;
    right: 100px;
    z-index: 1000;
    transition: all 1s ease;
    opacity: 0.5;

    // 默认收起
    .toc-content {
        display: none;
    }

    // 展开状态
    &.open {
        max-height: 80vh;
        background: #ffffff53;
        box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
        padding: 12px;
        min-width: 240px;
        opacity: 1;
        border-radius: 20px;

        .toc-content {
            display: block;
        }
    }

    .toc-toggle {
        // 按钮的布局
        right: 15px;
        top: 15px;

        position: absolute;
        width: 30px;
        height: 30px;
        // 让按钮中图标居中
        display: flex;
        justify-content: center;
        align-items: center;
        writing-mode: vertical-rl;
        // 按钮的样式
        background: #b0b6b348;
        color: #fff;
        border: none;
        padding: 8px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 15px;


        &:hover {


            background: #9bd6bc;
        }
    }

    .toc-title {

        margin: 12px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 16px;
        font-family: '优设标题黑';
        // text-decoration: underline;
        // 字符间距
        letter-spacing: 1px;
        color: #312d2d;
        // width: 200px !important;
        // background-color: rebeccapurple;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        color: #323b37;
        font-family: '优设标题黑';

        li {
            margin: 10px 0;
            font-size: 14px;

            &.active>a {
                color: #42b983;
                // font-weight: bold;
            }
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: color 0.2s;

            &:hover {
                color: #42b983;
            }
        }




    }
}
</style>
