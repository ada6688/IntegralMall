<template>
  <div class="top-nav">
    <div id="top-nav-left" class="top-nav-left"  @click="goBack()">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div id="top-logo-change" class="top-nav-logo">
      <p>积分明细</p>
    </div>
    <div id="top-nav-right" class="top-nav-right">
      <a href="https://bmw-chat-service.com/?wgPortal=VONFpjLZtk" target="_blank"><img src="../../assets/images/topnav/kf.png" alt="客服"></a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabBarImgArr: [
        {normal: require('../../assets/images/topnav/logo.png')},
        {normal: require('../../assets/images/topnav/ss.png')},
        {normal: require('../../assets/images/topnav/cd.png')}
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
      // if (window.history.length <= 1) {
      //   console.log(1)
      //   // this.$router.push({path: '/'})
      //   return false
      // } else {
      //   console.log(2)
      //   this.$router.go(-1)
      // }
    }
  }
}
</script>
<style>

</style>
