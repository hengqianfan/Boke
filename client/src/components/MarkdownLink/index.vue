<template>
    <div class="md-link">
        <div v-if="!opened" class="md-link-preview">
            <div class="header">
                <div class="desc">
                    <i v-if="icon" :class='formatIconfont(icon)' />
                    <span>{{ desc }}</span>
                </div>

                <div class="buttons">
                    <button @click="openNew">原始网址</button>
                    <button @click="openIframe">本站预览</button>
                </div>
            </div>

        </div>

        <div v-else class="md-link-iframe">
            <div class="header">
                <div class="left">
                    <i v-if="icon" :class='formatIconfont(icon)' />
                    <span>{{ desc }}</span>
                </div>

                <div class="buttons">
                    <button @click="openNew">原始网址</button>
                    <button @click="closeIframe">折叠视图</button>

                </div>
            </div>
            <iframe :src="src" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { formatIconfont } from '@/tools/format'

const props = defineProps<{
    src: string;
    desc: string;
    icon?: string;
}>();

const opened = ref(false);

function openIframe() {
    opened.value = true;
}
function closeIframe() {
    opened.value = false;
}
function openNew() {
    window.open(props.src, "_blank", "noopener,noreferrer");
}
</script>

<style lang="scss" scoped>
.md-link {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 10px;
    margin: 12px 0;
    background: #fafafa;

    .md-link-preview {
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f6f6f6;
            padding: 6px 10px;
            border-bottom: 1px solid #e0e0e0;

            .desc {
                display: flex;
                align-items: center;

                margin-bottom: 6px;
                font-family: '优设标题黑';

                i {
                    background-color: white;
                    margin-right: 6px;
                    font-size: 1.2em;
                    // color: #666;
                }
            }

            .buttons {
                margin-left: 20px;
                // display: inline-block;
                gap: 8px;

                button {
                    margin: 0 10px;
                    padding: 4px 8px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    background: white;
                    cursor: pointer;
                    transition: 0.2s;
                    font-size: 12px;
                    color: #595252;

                    &:hover {
                        background: #f0f0f0;
                    }
                }
            }
        }



    }





    .md-link-iframe {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f6f6f6;
            padding: 6px 10px;
            border-bottom: 1px solid #e0e0e0;

            .left {
                display: flex;
                align-items: center;
                gap: 6px;

            }

            button {
                margin: 0 10px;
                padding: 4px 8px;
                border: 1px solid #ccc;
                border-radius: 10px;
                background: white;
                cursor: pointer;
                transition: 0.2s;
                font-size: 12px;
                color: #595252;

                &:hover {
                    background: #f0f0f0;
                }
            }
        }

        iframe {
            width: 100%;
            height: 70vh;
            border: none;
            display: block;
        }
    }
}
</style>
