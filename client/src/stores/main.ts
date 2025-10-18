import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({

        bokeState: 'ON',
        asideShow: ref(true),
        personCardShow: ref(true),

    }),
    actions: {
        togglePersonCard() {
            this.personCardShow = !this.personCardShow
        },
        setAsideShow(show: boolean) {
            this.asideShow = show
        },
        setPersonCard(show: boolean) {
            this.personCardShow = show
        }
        // 
        // openEX(enable: boolean) {
        //     this.asideShow = enable
        // },

    }
})
