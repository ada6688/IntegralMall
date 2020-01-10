<template>
    <div>
        <TopNavC></TopNavC>
    </div>
</template>
<script>
// 引用组件
import TopNavC from '@/components/common/TopNavC'

export default {
  name: 'App',
  components: {
    TopNavC
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>每日抽奖</P>'
    }
  }
}
</script>
<style>


</style>