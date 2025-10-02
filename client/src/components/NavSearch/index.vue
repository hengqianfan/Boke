<template>
    <div class="mas-all">
        <!-- 搜索引擎图标，悬浮触发 -->
        <div class="mas-engine" @mouseenter="isShowEngineMenu = true" @mouseleave="isShowEngineMenu = false">
            <i :class="getIconFontClassName(currentEngine.name)"></i>

            <!-- 搜索引擎选择菜单 -->
            <div class="mas-engine-menu" v-if="isShowEngineMenu" @mouseenter="isShowEngineMenu = true"
                @mouseleave="isShowEngineMenu = false">
                <div v-for="(engine, index) in Config.SearchEngineList" :key="engine.name" class="mas-engine-menu-icon"
                    @click="changeEngine(index)">
                    <i :class="getIconFontClassName(engine.name)"></i>
                </div>
            </div>
        </div>

        <!-- 搜索框 -->
        <input type="text" class="mas-keyword" v-model="keyword" @keyup.enter="toSearch" @blur="restoreDefaultKeyword"
            @focus="clearDefaultKeyword" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Config } from "@/config"

const getIconFontClassName = (name: string) => `iconfont icon-${name}`

// 当前搜索引擎
const currentEngine = ref(Config.SearchEngineList[0])
// 输入框关键字
const keyword = ref(Config.SearchDefaultKeyword)
// 控制引擎菜单
const isShowEngineMenu = ref(false)

// 聚焦时清空默认词
const clearDefaultKeyword = () => {
    if (keyword.value === Config.SearchDefaultKeyword) keyword.value = ""
}

// 失焦时恢复默认词
const restoreDefaultKeyword = () => {
    if (!keyword.value.trim()) keyword.value = Config.SearchDefaultKeyword
}

// 切换引擎
const changeEngine = (index: number) => {
    currentEngine.value = Config.SearchEngineList[index]
    isShowEngineMenu.value = false
}

// 执行搜索
const toSearch = () => {
    const query = keyword.value.trim()
    if (!query) {
        alert("请输入搜索内容")
        return
    }
    window.open(`${currentEngine.value.baseurl}${query}`, "_blank")
    keyword.value = ""
}
</script>

<style lang="scss" scoped>
.mas-all {
    width: 160px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #dedede inset, -1px -1px 2px #ffffff inset;

    .mas-engine {
        position: relative; // 关键：菜单相对定位
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 2px #dedede, -1px -1px 2px #f5f0f0;
        cursor: pointer;

        .mas-engine-menu {
            position: absolute;
            // top: 30px; // 菜单显示在图标下方
            left: -20px;
            display: flex;
            // padding: 5px;
            background-color: white;
            border-radius: 10px;
            z-index: 100;
            box-shadow: 1px 1px 3px #dedede, -1px -1px 3px #f5f0f0;

            .mas-engine-menu-icon {
                width: 30px;
                height: 30px;
                margin: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: transform 0.2s;

                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }

    .mas-keyword {
        width: 80px;
        padding: 6px;
        border: none;
        border-radius: 5px;
        background-color: #f1f0f0;
        font-size: 14px;
        text-align: center;
        color: #4b668a;
        font-family: "站酷高端黑";
        box-shadow: 1px 1px 3px #dedede inset, -1px -1px 3px #f5f0f0 inset;

        &:focus {
            outline: none;
            background-color: #ffffff;
        }
    }
}
</style>
