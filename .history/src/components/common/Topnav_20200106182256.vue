<template>
  <div class="top-nav">
    <div id="top-nav-left" class="top-nav-left">
      <img src="../../assets/images/topnav/cd.png" alt="logo">
    </div>
    <div class="top-nav-logo">
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
router.beforeEach((to, from, next) => {
  console.log(to.meta.title)
  if (to.meta.title) {
    document.getElementById('top-logo-change').innerHTML = to.meta.title
    // document.title = to.meta.title
  }
  next()
})
</script>
<style>

</style>
