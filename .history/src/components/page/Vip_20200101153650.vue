<template>
  <div>
    <TopnavC></TopnavC>
    <div class="main-wrap">
      <div style="width:100px;height:100px">VIP中心</div>
    </div>
    <Bottomnav></Bottomnav>
  </div>
</template>
<script>
import TopnavC from '@/components/common/Topnav-c'
import Bottomnav from '@/components/common/Bottomnav'

export default {
  name: 'App',
  components: {
    TopnavC,
    Bottomnav
  }
}
</script>
<style>

</style>
