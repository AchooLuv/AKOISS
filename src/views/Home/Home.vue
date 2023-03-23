<script setup lang="ts">
import UploadImage from '@/views/Home/components/Upload.vue'
import TreeSeclet from '@/views/Home/components/Tree.vue'
import ResultView from '@/views/Home/components/Result.vue'
import { useResultStore } from '@/stores/result'

const resultStore = useResultStore()
const imgSrc = new URL('@/assets/images/noData.jpg', import.meta.url).href
</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row justify="center" v-loading="resultStore.isLoading">
        <el-col :span="5">
          <upload-image />
        </el-col>
        <el-col :span="8" style="position: relative;">
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
          <el-col :span="13">
            <div v-if="resultStore.resultState.length">
              <result-view />
            </div>
            <el-empty v-else :image="imgSrc" :image-size="200" description="暂 无 数 据" />
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  width: 100vw;
  height: 100vh;

  // overflow: hidden;
  .el-main {
    overflow: hidden;

    .el-row:first-child {
      margin-bottom: 20px;

      .el-col {
        padding: 5px;
      }
    }
  }
}
</style>