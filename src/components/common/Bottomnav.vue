<template>
  <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/shouye')">
      <img class="NavSigh" :src="'/shouye' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
      <p :class="{on: '/shouye' === $route.path}">首页</p>
    </div>
    <div class="tab-item" @click="switchTo('/Youhui')">
      <img class="NavSigh" :src="'/Youhui' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐">
      <p :class="{on: '/Youhui' === $route.path}">优惠</p>
    </div>
    <div class="tab-item" @click="game()">
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
</template>
<script>
export default {
  data () {
    return {
      tabBarImgArr: [
        {normal: require('../../assets/images/navLogo/sy_x@3x.png'), selected: require('../../assets/images/navLogo/sy@3x.png')},
        {normal: require('../../assets/images/navLogo/yh_x@3x.png'), selected: require('../../assets/images/navLogo/yh@3x.png')},
        {normal: require('../../assets/images/navLogo/gw_x@3x.png'), selected: require('../../assets/images/navLogo/gw@3x.png')},
        {normal: require('../../assets/images/navLogo/zs_x@3x.png'), selected: require('../../assets/images/navLogo/zs@3x.png')},
        {normal: require('../../assets/images/navLogo/wd_x@3x.png'), selected: require('../../assets/images/navLogo/wd@3x.png')}
      ],
    }
  },
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    },
    game () {
      window.location.href = 'https://www.bmw583.net:9988'
    }
  }
}
</script>
<style>

</style>
