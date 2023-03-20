<script setup lang="ts">
import UploadImage from '@/views/Home/components/Upload.vue'
import TreeSeclet from '@/views/Home/components/Tree.vue'

</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row class="row-bg" justify="center">
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
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>