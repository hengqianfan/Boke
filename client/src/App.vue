<script setup lang="ts">
import xNav from './components/Nav/index.vue'
import xMain from './components/Main/index.vue'
import Banner from './components/Banner/index.vue'


</script>

<template>
  <div class="app-all">
    <xNav />


    <Banner />
    <xMain />
  </div>
</template>



<style lang="scss" scoped>
.app-all {
  width: 100%;
  // 高度撑满屏幕，但不能写死
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
