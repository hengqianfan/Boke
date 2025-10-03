<template>
    <div>
        <!-- 主题按钮 -->
        <button class="theme-btn" @click="show = !show">⚙️</button>

        <!-- 顶部下拉配置面板 -->
        <transition name="dropdown">
            <div v-if="show" class="theme-panel">
                <h3>动画配置</h3>
                <div class="panel-item">
                    <label>主页 - 文章 - 动效：</label>
                    <button @click="theme.toggleAnimation"></button>
                    <!-- 这里可以绑定动画开关 -->
                </div>
                <!-- 其他配置项可以继续添加 -->
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
const theme = useThemeStore()
const show = ref(false)
</script>

<style scoped lang="scss">
.theme-btn {
    margin-left: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: #dddbf0;
    opacity: 0.5;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s;

    &:hover {
        background: transparent;
    }
}

.theme-panel {
    width: 80%;
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 2000;
    border-radius: 20px;

    .panel-item {
        margin: 12px 0;
    }
}

/* 下拉动画 */
.dropdown-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.dropdown-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.dropdown-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>
