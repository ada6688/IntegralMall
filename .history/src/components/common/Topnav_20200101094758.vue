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
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabBarImgArr: [
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
