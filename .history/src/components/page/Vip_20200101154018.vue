<template>
  <div>
    <TopnavC></TopnavC>
    <div class="main-wrap">
      <div>
        <img src="../../assets/images/VIP/VIP-T.png" alt="">
      </div>
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
