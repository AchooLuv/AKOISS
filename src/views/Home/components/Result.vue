<script setup lang="ts">
// import { useResultStore } from '@/stores/result' 

// const resultStore = useResultStore()

import { resultData } from '@/const/treeData'
</script>

<template>
  <el-descriptions v-for="ele, idx in resultData" :key="idx" :title="ele.filename" direction="vertical" :column="4">
    <template #extra>
      <el-button type="primary" color="#5a189a"><el-icon>
          <Link />
        </el-icon>Bangumi</el-button>
    </template>
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
</template>

<style lang="scss" scoped></style>