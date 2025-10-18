<template>
    <div v-show="visible" class="back-to-top" @click="scrollToTop" :title="`${progress}%`">
        <svg class="progress-ring" viewBox="0 0 36 36">
            <path class="bg" d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="progress" :stroke-dasharray="`${progress}, 100`" d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <span class="arrow">↑</span>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const progress = ref(0)

const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    progress.value = Math.min(100, Math.round((scrollTop / docHeight) * 100))
    visible.value = scrollTop > 200
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.back-to-top {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    z-index: 1000;
    background: var(--theme-surface, #fff);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .arrow {
        position: absolute;
        font-size: 18px;
        color: var(--theme-primary, #409eff);

        pointer-events: none;
    }

    .progress-ring {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);

        path {
            fill: none;
            stroke-width: 3;
            stroke-linecap: round;
        }

        .bg {
            stroke: #e0e0e0;
        }

        .progress {
            stroke: var(--theme-primary, #409eff);
            transition: stroke-dasharray 0.2s ease;
        }
    }
}
</style>
