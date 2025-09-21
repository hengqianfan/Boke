// stores/theme.ts
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        // enableAnimation: false,
        enableAnimation: true,

        // 后续可加主题色、暗黑模式等配置
    }),
    actions: {
        setAnimation(enable: boolean) {
            this.enableAnimation = enable
        },
        toggleAnimation() {
            this.enableAnimation = !this.enableAnimation
        }
    }
})
