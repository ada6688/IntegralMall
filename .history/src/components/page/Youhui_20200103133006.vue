<template>
  <div>
    <TopNav></TopNav>
    <div class="yh-wrap main-wrap">
      <div><img src="../../assets/images/yh/yh-banner.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh-banner2.png" alt=""></div>
      <div><img src="../../assets/images/yh/yh-banner3.png" alt=""></div>
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
  }
}
</script>
<style>

</style>
