<template>
    <div class="main-aside-all">

        <MainAsidePerson />
    </div>

</template>

<script lang="ts" setup>
import MainAsidePerson from '../MainAsidePerson/index.vue'
</script>

<style lang="scss" scoped>
.main-aside-all {
    width: 25%;
    max-height: 90vh;
    // background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;

}
</style>