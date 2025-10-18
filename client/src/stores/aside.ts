// stores/theme.ts
import { defineStore } from 'pinia'

export const useAsideStore = defineStore('aside', {
    state: () => ({

        asideShow: true,
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
