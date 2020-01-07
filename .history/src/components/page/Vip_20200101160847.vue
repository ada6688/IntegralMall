<template>
  <div>
    <TopnavC></TopnavC>
    <div class="main-wrap">
      <div>
        <img src="../../assets/images/VIP/VIP-T.png" alt="">
      </div>
      <div>
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane label="普通"></el-tab-pane>
            <el-tab-pane label="黄金"></el-tab-pane>
            <el-tab-pane label="铂金"></el-tab-pane>
            <el-tab-pane label="钻石"></el-tab-pane>
            <el-tab-pane label="至尊"></el-tab-pane>
            <el-tab-pane label="王者"></el-tab-pane>
            <el-tab-pane label="特邀"></el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
    </div>
    <Bottomnav></Bottomnav>
  </div>
</template>
<script>
import TopnavC from '@/components/common/Topnav-c'
import Bottomnav from '@/components/common/Bottomnav'

export default {
  name: 'App',
  components: {
    TopnavC,
    Bottomnav
  }
}
</script>
<style>
.el-tabs__item{
  padding: 0 5.71%;
}
</style>
