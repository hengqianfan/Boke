<template>
    <div class="toc">
        <nav class="toc-content">
            <h3 class="toc-title" v-if="outlineStore.headings && outlineStore.headings.length">
                {{ Config.OutlineTitle }}
            </h3>

            <ul>
                <li v-for="h in outlineStore.headings" :key="h.slug" :class="{ active: h.slug === activeSlug }"
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
import { useOutlineStore } from "@/stores/outline"

const outlineStore = useOutlineStore()
const activeSlug = ref<string>('')

function scrollToHeading(slug: string) {
    const el = document.getElementById(slug)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

function onScroll() {
    const headings = outlineStore.headings
    let current = headings[0]?.slug || ''
    for (const h of headings) {
        const el = document.getElementById(h.slug)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= 150) { // 调整偏移量
            current = h.slug
        } else {
            break
        }
    }
    activeSlug.value = current
}

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped lang="scss">
.toc {
    // 如果要固定位置就保留 position
    // position: fixed;

    right: 100px;
    z-index: 1000;
    max-height: 80vh;
    background: #ffffff53;
    // box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
    padding: 12px;
    // min-width: 240px;
    width: 100%;
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 5px 5px 18px #e0dcdc,
        -5px -5px 18px #eeeaea;

    overflow-y: scroll;

    .toc-content {
        display: block;
    }

    .toc-title {
        margin: 10px;
        // margin-bottom: 20px;
        text-align: center;
        font-size: 16px;
        font-family: '优设标题黑';
        letter-spacing: 1px;
        color: #312d2d;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        color: #323b37;

        li {
            margin: 10px 0;
            font-size: 14px;

            &.active>a {
                color: #42b983 !important;
            }

            // 根据 h.level 自定义样式
            &[style*="padding-left: 16px"] a {
                /* 二级标题样式 */
                font-size: 13px;
                font-weight: 500;
                // color: #e87a4b;
            }



            &[style*="padding-left: 32px"] a {
                /* 三级标题样式示例 */
                font-size: 12px;
                font-weight: 400;
                color: #6b6b6b;
            }

            &[style*="padding-left: 48px"] a {
                /* 四级标题样式示例 */
                font-size: 12px;
                font-weight: 400;
                color: #6b6b6b;
            }

            &[style*="padding-left: 64px"] a {
                /* 五级标题样式示例 */
                font-size: 12px;
                font-weight: 400;
                color: #6b6b6b;
            }
        }

        a {
            text-decoration: none;
            color: inherit;
            transition: color 0.2s;

            &:hover {
                color: #42b983 !important;
            }
        }
    }




}
</style>
