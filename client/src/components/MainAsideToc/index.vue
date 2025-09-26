<template>
    <div class="sidebar-node">
        <!-- 左侧小条 -->
        <div class="node-dot" @mouseenter="hover = true" @mouseleave="hover = false"></div>

        <!-- 悬浮显示目录 -->
        <div class="node-content" v-show="hover">
            <router-link v-if="node.path" :to="node.path" :class="{ 'router-link-active': node.path === currentPath }">
                {{ node.text }}
            </router-link>
            <span v-else>{{ node.text }}</span>
            <ul v-if="node.children && node.children.length">
                <li v-for="child in node.children" :key="child.path || child.text">
                    <MainAsideToc :node="child" :current-path="currentPath" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';
import type { TreeNode } from '@/tools/notes';
import MainAsideToc from './index.vue';

const props = defineProps({
    node: { type: Object as PropType<TreeNode>, required: true },
    currentPath: { type: String as PropType<string>, required: true }
});

const hover = ref(false);
</script>

<style scoped lang="scss">
.sidebar-node {
    position: relative;
    display: flex;
    align-items: flex-start;

    .node-dot {
        width: 6px;
        height: 40px;
        background-color: #409eff;
        border-radius: 3px;
        cursor: pointer;
        margin-right: 5px;
        transition: all 0.2s;
    }

    .node-content {
        position: absolute;
        left: 15px;
        top: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 8px 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        white-space: nowrap;
        z-index: 100;

        ul {
            list-style: none;
            margin: 5px 0 0 0;
            padding-left: 10px;
        }

        a {
            color: #333;
            text-decoration: none;

            &.router-link-active {
                font-weight: bold;
                color: #409eff;
            }
        }

        span {
            color: #666;
        }
    }
}
</style>
