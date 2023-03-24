<script setup lang="ts">
import { useResultStore } from '@/stores/result'
import { getHMS, getPercent } from '@/const/format'

// store
const resultStore = useResultStore()

const handleAniInfos = async (name: string) => {
  const res = await resultStore.animeAction('/v0/search/subjects', { keyword: name }, {
    params: { limit: 10, offset: 0 }
  })
}
</script>

<template>
  <el-space direction="vertical" fill style="width: 100%;">
    <el-card v-for="ele, idx in resultStore.resultState" :key="idx" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-text size="large">{{ ele.filename }}</el-text>
          <el-button type="primary" color="#5a189a" @click.stop="handleAniInfos(ele.aniname as string)"><el-icon>
              <Link />
            </el-icon>Bangumi</el-button>
        </div>
      </template>
      <el-row :gutter="20" justify="space-between">
        <el-col :span="9">
          <el-image :src="ele.image as string" alt="preview-img" fit="cover" style="width:228px; height:128px;" lazy />
        </el-col>
        <el-col :span="13">
          <el-descriptions :column="1" size="small" border>
            <el-descriptions-item label="匹配度" width="35" label-align="right">{{ getPercent(ele.similarity)
            }}</el-descriptions-item>
            <el-descriptions-item label="章/集数" label-align="right">{{ ele.episode }}</el-descriptions-item>
            <el-descriptions-item label="时间" label-align="right">{{ getHMS(ele.from) }} -- {{ getHMS(ele.to)
            }}</el-descriptions-item>
            <el-descriptions-item label="链接" label-align="right">
              <el-tag size="small">{{ ele.to }}</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </el-col>
      </el-row>
    </el-card>
  </el-space>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>