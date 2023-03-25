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

.el-container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/main.svg') no-repeat center 110px;
  background-size: 100%;

  .el-header {
    border-bottom: 1px var(--el-border-color) var(--el-border-style);

    .el-menu--horizontal {
      border-bottom: none;

      >.el-menu-item {
        border-bottom: none;
        height: 59px;

        &:hover {
          background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
        }

        &:first-of-type {
          background: none;
        }

        [class^=el-icon] {
          margin: 0;
        }
      }
    }
  }

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
