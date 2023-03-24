<script setup lang="ts">
import { ref } from 'vue'
import { useSearchStore } from '@/stores/search'
import type { UploadFile, UploadFiles } from 'element-plus'

// store
const searchStore = useSearchStore()
// ref
const imgSrc = ref<ArrayBuffer | string | null>('')
// methods
const handleOnChange = (uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
  const raw = uploadFile.raw
  if (typeof raw !== 'undefined') {
    imgSrc.value = URL.createObjectURL(raw)
    // 更新待搜索图片信息
    searchStore.updateImgRaw(raw, raw.type)
  }
}
</script>

<template>
  <el-upload class="upload-container" ref="uploadRef" action="#" :multiple="false" :auto-upload="false"
    :show-file-list="false" drag accept=".jpg,.jpeg,.png,.JPG,.JPEG,.gif,.GIF" :on-change="handleOnChange">
    <el-image v-if="imgSrc" :src="imgSrc as string" style="width:220px;height: 220px;" alt="preview-img"
      fit="scale-down" />
    <div v-else class="inner-container">
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖动图片至此或<em>点击上传</em>
      </div>
    </div>
  </el-upload>
</template>

<style lang="scss" scoped>
.upload-container {
  width: 220px;
  height: 220px;
  overflow: hidden;
  margin: 0 auto;

  :deep(.el-upload) {
    overflow: hidden;

    .el-upload-dragger {
      padding: 0;
      height: 220px;

      .inner-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        .el-upload__text {
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>