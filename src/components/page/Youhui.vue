<template>
  <div>
    <TopNav></TopNav>>
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
        {path: 'chouJiang', src: require('../../assets/images/yh/CGCJ@3x.png')},
        {path: 'everydayNBA', src: require('../../assets/images/yh/NBA@3x.png')},
        {path: 'chouJiang', src: require('../../assets/images/yh/CGCJ@3x.png')},
        {path: 'chouJiang', src: require('../../assets/images/yh/CGCJ@3x.png')},
      ],
    }
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      // console.log(22213425)
      document.getElementById('top-nav-logo').innerHTML = '<p>优惠专区</p>'
    },
  }
}
</script>
<style>

</style>
