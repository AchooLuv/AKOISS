<script setup lang="ts">
import { tipData } from '@/data/common'

const logoSrc = new URL('@/assets/images/logo.png', import.meta.url).href
</script>

<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :ellipsis="false" router>
        <el-menu-item index="/">
          <el-image :src="logoSrc" alt="logo-img" fit="fill" style="width:196px; height:59px;" />
        </el-menu-item>
        <div style="flex-grow: 1;"></div>
        <el-menu-item index="/404">RegExpJS Docs</el-menu-item>
        <el-menu-item index="/">
          <el-popover placement="bottom-end" :width="267">
            <template #reference>
              <el-link type="primary" :underline="false">
                <el-icon>
                  <Opportunity />
                </el-icon>帮助</el-link>
            </template>
            <el-table :data="tipData" size="small" highlight-current-row>
              <el-table-column width="80x" property="type" label="引擎" />
              <el-table-column width="100px" property="feature" label="搜索类型" />
              <el-table-column width="60px" property="status" label="状态" align="center">
                <template #default="scope">
                  <el-tag :type="scope.row.status ? 'success' : 'info'" size="small" round>{{
                    scope.row.status ?
                    '已部署' :
                    '开发中' }}</el-tag>
                </template>
              </el-table-column>
            </el-table>
          </el-popover>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style lang="scss">
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/common.scss';
</style>
