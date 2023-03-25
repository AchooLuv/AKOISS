<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)

</script>

<template>
  <el-drawer v-model="isShow" title="I have a nested table inside!" direction="rtl" size="30%">
    <el-table>
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-drawer>
</template>

<style scoped></style>