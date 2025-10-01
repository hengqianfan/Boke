<template>
    qqq
    <div v-html="svgRef"></div>
</template>

<script setup ts>
import { ref, onMounted } from 'vue'
import mermaid from 'mermaid'
// 调用我们写好的脚本，利用它实现将代码转换为流程图的功能
// import { render } from '@/tools/markdown-mermaid'


async function render(id, code) {
    mermaid.initialize({ startOnLoad: false })
    console.log(code);

    const { svg } = await mermaid.render(id, code)
    return svg
}

const props = defineProps({
    id: String,
    code: String,
})
//  注意此处的 async 
onMounted(async () => {
    svgRef.value = await render(props.id, decodeURIComponent(props.code))
})

const svgRef = ref('')
</script>
<style scoped></style>
