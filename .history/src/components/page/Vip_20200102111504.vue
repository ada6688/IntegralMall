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
            <el-tab-pane label="普通">
              <!-- <span slot="label"><img src="../../assets/images/VIP/pt.png" alt=""> 普通</span> -->
            </el-tab-pane>
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
.swiper-container{
  height: 100%;
  margin-bottom: -4px;
}
.el-tabs__nav,.el-tabs__nav-wrap{
  width: 100%
}

.el-tabs--border-card{
  border: 0;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  border: 0;
  font-size: .8rem;
}
.el-tabs--border-card>.el-tabs__header{
  padding: 10px 3.65% 0;
  background: #151515
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
  color: #ffffff;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 39px;
  color: #ffffff;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  color: #666666;
}
.el-tabs__nav-wrap.is-scrollable{
  padding: 0 20px;
  box-sizing: border-box;
}
.el-tabs--border-card{
  box-shadow: 0 0 0 0 rgb(0, 0, 0, 0)
}
.el-tabs--border-card>.el-tabs__content {
  margin-top: -2px;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child{
  padding: 0 3.12%;
}
</style>
