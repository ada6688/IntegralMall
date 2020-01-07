<template>
  <div class="top-nav">
    <div id="top-nav-left" class="top-nav-left"  @click="goBack()">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div id="top-logo-change" class="top-nav-logo">
      <img src="../../assets/images/topnav/logo.png" alt="logo">
    </div>
    <div id="top-nav-right" class="top-nav-right">
      <img src="../../assets/images/topnav/ss.png" alt="搜索">
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
  }
}
</script>
<style>

</style>
