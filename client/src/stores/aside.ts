// stores/theme.ts
import { defineStore } from 'pinia'

export const useAsideStore = defineStore('aside', {
    state: () => ({
        // enableAnimation: false,
        asideShow: true,

        // 后续可加主题色、暗黑模式等配置
    }),
    actions: {
        setAsideShow(enable: boolean) {
            this.asideShow = enable
        },
        toggleAsideShow() {
            this.asideShow = !this.asideShow
        }
    }
})
