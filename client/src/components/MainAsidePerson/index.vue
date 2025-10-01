<template>
    <div class="xPerson">
        <img :src="getIconSrcPro(Config.PersonPortrait)" class="xPerson-icon">


        <div class="xPerson-intro">{{ Config.PersonIntro }}</div>
        <div class="xPerson-links">
            <a class="xPerson-links-icon" v-for="item in Config.PersonSocialLinks" :href="item.link" target="_blank">
                <i :class="getSocialLinkIcon(item.name)"></i>
            </a>
        </div>

        <div class="xPerson-time">
            {{ nowTime }}
        </div>



    </div>
</template>

<script lang="ts" setup>
import { Config } from '@/config/index'
import { ref, onMounted, onUnmounted } from 'vue'
import { getIconSrcPro } from '@/tools/getUrl'




const getSocialLinkIcon = (momo: string) => {
    return `iconfont icon-${momo}`
}

const nowTime = ref<string>('')

onMounted(() => {
    const clock = setInterval(() => {
        nowTime.value = getToday().time;
    }, 1000);

    // 使用onUnmounted清除定时器
    onUnmounted(() => {
        clearInterval(clock);
    });
})

// 时间格式化：获取当前时间，格式化为15:35:06
function getToday() {
    var datas = new Date();
    // var on1 = " / ";
    var on2 = " : ";
    var onS: any = datas.getHours(); //时
    var onF: any = datas.getMinutes(); //分
    var onN: any = datas.getSeconds(); //秒

    if (onS >= 0 && onS <= 9) {
        //时
        onS = "0" + onS;
    }
    if (onF >= 0 && onF <= 9) {
        //分
        onF = "0" + onF;
    }
    if (onN >= 0 && onN <= 9) {
        //秒
        onN = "0" + onN;
    }

    return {
        time: onS + on2 + onF + on2 + onN,
    };
}



</script>


<style lang="scss" scoped>
// @use './app.scss';
// @use './dark.scss';



.xPerson {

    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;

    background-color: white;


    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;

    padding: 10px 0;

    .xPerson-icon {
        width: 60px;
        height: 60px;
        padding: 5px;
        margin-top: 10px;

        border-radius: 5px;
        box-shadow: 1px 1px 3px #dedede,
            -1px -1px 3px #f5f0f0;
    }

    .xPerson-intro {
        margin-top: 20px;
        color: #bebcbc;
        font-size: 12px;
    }

    .xPerson-links {
        margin-top: 20px;


        .xPerson-links-icon {
            margin: 0 10px;
            text-decoration: none;
            color: #000;
        }

        .xPerson-links-icon:hover {

            color: #263d95;
        }


    }

    .xPerson-time {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #bebcbc;
        padding: 10px 15px;

        background-color: white;
        border-radius: 10px;
        margin: 10px;

        color: rgb(109, 44, 55);
        font-size: 14px;
        font-family: '优设标题黑';
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 0.1875rem 0.1875rem .125rem #f0f0f0 inset,
            -0.1875rem -0.1875rem .125rem #faf8f8 inset;

    }
}
</style>