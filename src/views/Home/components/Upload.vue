<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { UploadFile, UploadFiles } from 'element-plus'

// 测试用例
import { testStr } from '@/test'

const upUrl = ref('https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15')
const form = reactive({
  img: ''
})

const handleOnChange = (uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
  if (typeof uploadFile.raw !== 'undefined') {
    form.img = URL.createObjectURL(uploadFile.raw)

    // 测试
    testStr()
  }
}

</script>

<template>
  <el-upload class="upload-container" ref="uploadRef" :action="upUrl" :multiple="false" :auto-upload="false"
    :show-file-list="false" drag accept=".jpg,.jpeg,.png,.JPG,.JPEG,.gif,.GIF" :on-change="handleOnChange">
    <el-image v-if="form.img" :src="form.img" style="width:220px;height: 220px;" alt="preview-img" fit="scale-down" />
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