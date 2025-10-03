// src/stores/outline.ts
import { defineStore } from "pinia"

export const useOutlineStore = defineStore("outline", {
    state: () => ({
        headings: [] as any[]
    }),
    actions: {
        setOutline(newHeadings: any[]) {
            this.headings = newHeadings
        },
        clearOutline() {
            this.headings = []
        }
    }
})
