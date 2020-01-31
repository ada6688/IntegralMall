<template>
  <div id="youHuiPage">
    <TopNav for-child-msg='优惠专区'></TopNav>>
    <div class="yh-wrap main-wrap">
      <div v-for="(temp, index) in youHui" :key="index">
        <router-link :to=temp.path>
          <img :src=temp.src alt="轮播广告">
        </router-link>
      </div>
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
  data () {
    return {
      youHui: [
        {path: '/chouJiang', src: require('../../assets/images/yh/CGCJ@3x.png')},
        {path: '/guessNBA', src: require('../../assets/images/yh/NBA@3x.png')},
      ],
    }
  }
}
</script>
<style>
#youHuiPage{
  height: 100vh;
}
</style>
