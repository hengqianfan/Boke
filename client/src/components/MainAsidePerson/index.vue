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
@use './pc.scss';
@use './app.scss';
// @use './dark.scss';</style>