<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view/>
  </div>
</template>

<script>
import TopNav from '@/components/common/Topnav'
export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #151515;
  height: 100vh;
}
</style>
