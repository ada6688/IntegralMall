<template>
  <div>
    <TopNav></TopNav>>
    <div class="yh-wrap main-wrap">
      <div><img src="../../assets/images/yh/yh-banner.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh2-banner.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh3-banner.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh-banner.png" alt=""></div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'

export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      // console.log(22213425)
      document.getElementById('top-nav-logo').innerHTML = '<p>优惠专区</p>'
    }
  }
}
</script>
<style>

</style>
