<template>
  <div>
    优惠中心
    <TopNav></TopNav>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'

export default {
  name: 'App',
  components: {
    MainNav,
    BottomNav,
    TopNav,
  }
}
</script>
<style>

</style>
