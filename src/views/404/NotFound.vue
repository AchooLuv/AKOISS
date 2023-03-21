<script setup lang="ts">
const imgSrc = new URL('@/assets/images/404.png', import.meta.url).href
</script>

<template>
  <div class="status-style">
    <div class="img-space">
      <el-image class="img-style" :src="imgSrc" :preview-src-list="[imgSrc]" alt="404" />
    </div>
    <p>未找到对应页面</p>
    <router-link to="/">
      <el-button type="primary" size="small" color="#626aef" auto-insert-space>首页</el-button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>