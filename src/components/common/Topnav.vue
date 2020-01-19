<template>
  <div class="top-nav">
    <div id="top-nav-left" class="top-nav-left">
      <img src="../../assets/images/topnav/cd@3x.png" alt="logo">
    </div>
    <div id="top-nav-logo" class="top-nav-logo">
      <template v-if="forChildMsg">
        <p>{{forChildMsg}}</p>
      </template>
      <template v-else>
        <img src="../../assets/images/topnav/logo@3x.png" alt="logo">
      </template>
    </div>
    <div id="top-nav-right" class="top-nav-right" @click="goSearch">
      <img src="../../assets/images/topnav/ss@3x.png" alt="搜索">
    </div>
  </div>
</template>
<script>
export default {
  props: ["for-child-msg"], 
  data () {
    return {
    }
  },
  methods: {
    goSearch () {
      this.$router.push({path: '/search'})      
    }
  }
}
</script>
<style>

</style>
