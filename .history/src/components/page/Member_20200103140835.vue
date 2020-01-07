<template>
  <div>
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
    BottomNav,
    TopNav
  }
}
</script>
<style>

</style>
