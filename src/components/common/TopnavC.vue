<template>
  <div class="top-nav">
    <div id="top-nav-left" class="top-nav-left"  @click="goBack()">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div id="top-logo-change" class="top-nav-logo">
      <p>{{forChildMsg}}</p>
    </div>
    <div id="top-nav-right" class="top-nav-right">
      <img src="../../assets/images/topnav/kf@3x.png" alt="客服">
    </div>
  </div>
</template>
<script>
export default {
  props: ['for-child-msg'],
  data () {
    return { 
    }
  },
  onBackPress(options) {
  	if (options.from === 'navigateBack') {  
  	  return false;  
  	}  
  	this.back();  
  	return true;  
  },
  methods: {
    goBack () {
      if (this.$route.path == '/order'){
        console.log('返回首页')
        this.$router.push('/shouye')
      } else {
        this.$router.go(-1)
      }
    },
	back() {  
	  uni.navigateBack({  
	    delta: 2  
	  });  
	}  
  }
}
</script>
<style>

</style>
