<script setup lang="ts">
import UploadImage from '@/views/Main/components/Upload.vue'
import TreeSeclet from '@/views/Main/components/Tree.vue'
import ResultView from '@/views/Main/components/Result.vue'
import AnimeInfos from '@/views/Anime/Index.vue'
import { useResultStore } from '@/stores/result'

import 'element-plus/theme-chalk/display.css'

const resultStore = useResultStore()
const imgSrc = new URL('@/assets/images/noData.jpg', import.meta.url).href
</script>

<template>
  <el-row justify="center" v-loading="resultStore.isLoading">
    <el-col :xs="12" :sm="8" :md="6" :lg="5">
      <upload-image />
    </el-col>
    <el-col :xs="12" :sm="10" :md="8" :lg="8" style="position: relative;">
      <tree-seclet />
    </el-col>
  </el-row>
  <el-divider>
    <el-icon>
      <CaretLeft />
    </el-icon>
    搜索结果
    <el-icon>
      <CaretRight />
    </el-icon>
  </el-divider>
  <el-scrollbar style="height: calc(100% - 255px);" :noresize="true">
    <el-row justify="center" v-loading="resultStore.isLoading">
      <el-col :xs="24" :sm="18" :md="14" :lg="13">
        <div v-if="resultStore.resultState.length">
          <result-view />
        </div>
        <el-empty v-else :image="imgSrc" :image-size="200" description="暂 无 数 据" />
      </el-col>
    </el-row>
  </el-scrollbar>
  <anime-infos />
</template>

<style scoped></style>