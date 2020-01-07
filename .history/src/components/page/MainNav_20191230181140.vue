<template>
  <div>
    <div class="top-nav">
      <div class="top-nav-left">
        <img src="../../assets/images/cd.png" alt="菜单">
      </div>
      <div class="top-nav-logo">
        <img src="../../assets/images/logo.png" alt="logo">
      </div>
      <div class="top-nav-right">
        <img src="../../assets/images/ss.png" alt="搜索">
      </div>
    </div>
    <div class="bottom-tab">
      <div class="tab-item" @click="switchTo('/shouye')">
        <img class="NavSigh" :src="'/shouye' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
        <p :class="{on: '/shouye' === $route.path}">首页</p>
      </div>
      <div class="tab-item" @click="switchTo('/Youhui')">
        <img class="NavSigh" :src="'/Youhui' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐">
        <p :class="{on: '/Youhui' === $route.path}">优惠</p>
      </div>
      <div class="tab-item">
        <img class="NavSigh" :src="'/' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="搜索">
        <p :class="{on: '/' === $route.path}">官网</p>
      </div>
      <div class="tab-item" @click="switchTo('/Vip')">
        <img class="NavSigh" :src="'/Vip' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="聊天">
        <p :class="{on: '/Vip' === $route.path}">VIP</p>
      </div>
      <div class="tab-item" @click="switchTo('/Member')">
        <img class="NavSigh" :src="'/Member' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="我的">
        <p :class="{on: '/Member' === $route.path}">我的</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabBarImgArr: [
        {normal: require('../../assets/images/navLogo/sy_x.png'), selected: require('../../assets/images/navLogo/sy.png')},
        {normal: require('../../assets/images/navLogo/yh_x.png'), selected: require('../../assets/images/navLogo/yh.png')},
        {normal: require('../../assets/images/navLogo/gw_x.png'), selected: require('../../assets/images/navLogo/gw.png')},
        {normal: require('../../assets/images/navLogo/zs_x.png'), selected: require('../../assets/images/navLogo/zs.png')},
        {normal: require('../../assets/images/navLogo/wd_x.png'), selected: require('../../assets/images/navLogo/wd.png')},
        {normal: require('../../assets/images/logo.png')},
        {normal: require('../../assets/images/ss.png')},
        {normal: require('../../assets/images/cd.png')}
      ]
    }
  },
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style>

</style>
