<template>
  <div class="top-nav">
    <div id="top-nav-left" class="top-nav-left"  @click="goBack()">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div id="top-logo-change" class="top-nav-logo">
      <p>积分明细</p>
    </div>
    <div id="top-nav-right" class="top-nav-right">
      <img src="../../assets/images/topnav/kf@3x.png" alt="客服">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
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
