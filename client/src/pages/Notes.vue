<template>
    <div class="notes-all">
        <h1>📚 我的知识库</h1>
        <hr>
        <div class="notes-list">
            <div v-for="note in notes" :key="note.id" class="note-card" @click="goToNote(note)">
                <div class="note-cover">
                    <img :src="getCoverSrc(note.meta.cover || 'momo')" alt="cover" class="note-cover-img" />
                    <div v-if="note.meta.pin && note.meta.pin > 0" class="top-badge">置顶</div>
                </div>

                <div class="note-title">{{ note.meta.title || note.id }}</div>
                <p class="note-desc">{{ note.meta.desc }}</p>
                <p class="count">共 {{ note.files.length }} 篇文章</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAllNotes, type Note } from '@/tools/notes';
import { getCoverSrc } from '@/tools/getUrl';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/main';
import { onMounted } from 'vue';


const main = useMainStore()
const notes = getAllNotes();

// 数字置顶排序：top 数字大在前，其次按文章数量排序
notes.sort((a, b) => {
    const aTop = a.meta.pin || 0;
    const bTop = b.meta.pin || 0;
    if (aTop !== bTop) return bTop - aTop; // top 数字大排前
    return b.files.length - a.files.length; // 文章数量排序
});



const router = useRouter();

function goToNote(note: Note) {
    if (note.files && note.files.length > 0) {
        router.push(note.files[0].path); // 跳转到排序后的第一篇
    } else {
        router.push(note.path); // 没有文章则跳到笔记根路径
    }
}


onMounted(() => {

    main.setAsideShow(false)
})


</script>

<style scoped lang="scss">
.notes-all {
    padding: 2rem;
    min-height: 50vh;
    width: 100%;
}

.notes-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}

.note-card {
    width: 300px;
    height: 300px;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: #fff;
    margin-bottom: 15px;
    margin-left: 15px;
    transition: transform 0.2s;
    position: relative;
    display: flex;
    flex-direction: column;

    .note-title {
        font-size: 24px;


        font-family: '优设标题黑';
        padding: 10px 10px;
        text-align: center;



    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .note-desc {
        color: #666;
        line-height: 14px;
        font-size: 12px;
        /* 弹性伸缩盒 */
        display: -webkit-box;
        /* 限制显示 3 行 */
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        /* 溢出隐藏 */
        overflow: hidden;



    }

    .note-cover {
        width: 100%;
        height: 150px;
        object-fit: cover;
        position: relative;

        .note-cover-img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 8px;

        }

        .top-badge {

            position: absolute;
            padding: 4px 8px;
            top: 10px;
            left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            font-size: 14px;
            font-weight: 600;
            color: white;
            // 透明效果
            opacity: 0.7;
            background: rgba(150, 150, 150, 0.4);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            transition: transform 0.3s ease;


        }
    }



    .count {
        // 让统计放在左下角
        position: absolute;
        bottom: 10px;
        color: #666;
        margin-top: 8px;
        font-size: 0.9rem;
    }
}


@media screen and (max-width: 600px) {
    .notes-all {
        padding: 2rem;
        min-height: 50vh;
        width: 100%;
    }

    .notes-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .note-card {
        width: 100%;
        height: 300px;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 12px;
        background: #fff;
        margin-bottom: 10px;
        margin-left: 0px;
        transition: transform 0.2s;
        position: relative;
        display: flex;
        flex-direction: column;


        .note-title {
            font-size: 24px;


            font-family: '优设标题黑';
            padding: 10px 10px;
            text-align: center;



        }

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .note-desc {
            color: #666;
            line-height: 14px;
            font-size: 12px;
            /* 弹性伸缩盒 */
            display: -webkit-box;
            /* 限制显示 3 行 */
            line-clamp: 3;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            /* 溢出隐藏 */
            overflow: hidden;



        }

        .note-cover {
            width: 100%;
            height: 150px;
            object-fit: cover;
            position: relative;

            .note-cover-img {
                width: 100%;
                height: 100%;
                overflow: hidden;
                border-radius: 8px;

            }

            .top-badge {

                position: absolute;
                padding: 4px 8px;
                top: 10px;
                left: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 15px;
                font-size: 14px;
                font-weight: 600;
                color: white;
                // 透明效果
                opacity: 0.7;
                background: rgba(150, 150, 150, 0.4);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.18);
                transition: transform 0.3s ease;


            }
        }



        .count {
            // 让统计放在左下角
            position: absolute;
            bottom: 10px;
            color: #666;
            margin-top: 8px;
            font-size: 0.9rem;
        }
    }
}
</style>
