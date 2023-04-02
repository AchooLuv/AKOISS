<script setup lang="ts">
import { useResultStore } from '@/stores/result'
import { getHMS } from '@/data/format'

// store
const resultStore = useResultStore()
//
</script>

<template>
  <el-space direction="vertical" fill style="width: 100%;">
    <el-card v-for="ele, idx in resultStore.resultState" :key="idx" shadow="hover">
      <template v-if="resultStore.engineType === 'tracemoe'" #header>
        <div class="card-header">
          <el-text size="large">{{ ele.filename }}</el-text>
        </div>
      </template>
      <el-row v-if="resultStore.engineType === 'tracemoe'" :gutter="20" justify="space-between">
        <el-col :span="9">
          <el-image :src="ele.image as string" alt="preview-img" fit="cover" style="width:228px; height:128px;" lazy />
        </el-col>
        <el-col :span="13">
          <el-descriptions :column="1" size="small" border>
            <el-descriptions-item min-width="70px" label="匹配度" label-align="right">
              <el-tag size="small" :type="ele.similarity > 0.9 ? 'success' : 'info'" effect="dark" round>
                {{ (Math.round(ele.similarity * 10000) / 100) + '%' }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="番剧名" label-align="right">
              <el-tag size="small" effect="dark">{{ ele.aniname }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="出现集数" label-align="right">{{ ele.episode }}</el-descriptions-item>
            <el-descriptions-item label="出现时间" label-align="right">{{ getHMS(ele.from as number) }} -- {{ getHMS(ele.to as
              number)
            }}</el-descriptions-item>
          </el-descriptions>
        </el-col>
      </el-row>
      <el-row v-if="resultStore.engineType === 'iqdb'" :gutter="20" justify="space-between">
        <el-col :span="9">
          <el-image :src="ele.image as string" alt="preview-img" fit="scale-down" style="width:228px; height:128px;"
            lazy />
        </el-col>
        <el-col :span="13">
          <el-descriptions :column="1" size="small" border>
            <el-descriptions-item min-width="70px" label="匹配度" label-align="right">
              <el-tag size="small" effect="dark" round :type="ele.similarity > 90 ? 'success' : 'info'">{{ ele.similarity
                + '%' }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="图片评级" label-align="right">
              <el-tag size="small" effect="dark" :type="ele.level === 'Safe' ? 'success' : 'danger'">{{ ele.level
              }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="图片尺寸" label-align="right">{{ ele.size }}</el-descriptions-item>
            <el-descriptions-item label="图片出处" label-align="right">
              <el-link :href="ele.url" :underline="false" target="_blank" type="primary"><el-icon>
                  <Link />
                </el-icon>进入传送门</el-link>
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