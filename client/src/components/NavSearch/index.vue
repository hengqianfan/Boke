<template>
    <div class="mas-all">
        <div class="mas-engine" @click="isShowEngineMenu = true">
            <i :class="getIconFontClassName(nowEngine.name)"></i>
        </div>
        <input type="text" class="mas-keyword" v-model="keyword" @keyup.enter="toSearch()" @blur="addKey()"
            @focus="deleteKey()">


        <div class="mas-engine-menu" v-if="isShowEngineMenu" @mouseleave="reback()">
            <div v-for="(it, index) in Config.SearchEngineList" class="mas-engine-menu-icon"
                @click="changEngine(index)">
                <i :class="getIconFontClassName(it.name)"></i>
            </div>
        </div>

    </div>


</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Config } from '@/config'
// import { Config } from '@/tools/getUrl'
const getIconFontClassName = (mo: string) => {
    return `iconfont icon-` + mo
}

// 
const nowEngine = ref(Config.SearchEngineList[0])
// 获取默认搜索提示词
const keyword = ref(Config.SearchDefaultKeyword)
// 搜索引擎菜单默认关闭
const isShowEngineMenu = ref<boolean>(false)
// 聚焦输入时，删除默认的词
const deleteKey = () => {

    if (keyword.value === Config.SearchDefaultKeyword) {
        keyword.value = ''
    }
    return
}

// 失去焦点时，回复默认词汇
const addKey = () => {
    if (keyword.value == '') {
        keyword.value = Config.SearchDefaultKeyword
    }
    if (keyword.value == ' ') {
        keyword.value = Config.SearchDefaultKeyword
    }

}

const reback = () => {
    //暂时无意义，这个函数需解决鼠标移出引擎选择菜单后，自动关闭选择菜单的问题
    let i = 0

}

const changEngine = (index: number) => {
    // 关闭引擎选择菜单
    isShowEngineMenu.value = !isShowEngineMenu.value
    // 更新当前引擎
    nowEngine.value = Config.SearchEngineList[index]
}


const toSearch = () => {
    if (keyword.value == '') {
        alert('请输入')
    } else {
        window.open(`${nowEngine.value.baseurl}` + `${keyword.value}`, '_blank')
        keyword.value = ''
    }
}



</script>

<style lang="scss" scoped>
// @use './app.scss';
// @use './dark.scss';

.mas-all {

    width: 160px;
    padding: 10px;
    box-shadow: 1px 1px 2px #dedede inset,
        -1px -1px 2px #ffffff inset;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;


    .mas-engine {
        width: 20px;
        height: 20px;
        border-radius: 10px;

        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 1px 1px 2px #dedede,
            -1px -1px 2px #f5f0f0;
    }

    .mas-keyword {

        width: 80px;
        background-color: #f1f0f0;
        font-size: 14px;
        padding: 6px;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 3px #dedede inset,
            -1px -1px 3px #f5f0f0 inset;
        display: flex;
        color: #4b668a;
        // color: #b66920;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: all 1s;
        font-family: '站酷高端黑';

    }



    .mas-engine-menu {
        position: absolute;
        padding: 0px 5px;
        display: flex;
        height: 40px;
        width: 410px;
        background-color: white;
        z-index: 100;
        border-radius: 10px;

        box-shadow: 1px 1px 3px #dedede,
            -1px -1px 3px #f5f0f0;


        .mas-engine-menu-icon {
            width: 30px;
            height: 30px;
            margin: 10px;
        }

    }

}
</style>