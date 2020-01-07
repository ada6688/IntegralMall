<template>
  <div>
    <TopNavC></TopNavC>
    <p>规则与条款</p>
    <p>规则与条款</p>
    <p>规则与条款</p>
    <p>规则与条款</p>
    <p>规则与条款</p>
    <p>规则与条款</p>
    <p style="color:#ffffff" @click="goBack()">返回</p>
  </div>
</template>
<script>
import TopNavC from '@/components/common/TopNavC'

export default {
  components: {
    TopNavC
  },
  mounted: function () {
    this.change()
  },
  methods: {
    goBack () {
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
    },
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>规则与条款</P>'
    }
  }
}

</script>
<style>

</style>
