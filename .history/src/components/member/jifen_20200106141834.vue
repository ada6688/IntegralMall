<template>
  <div>
    <p>积分明细</p>
    <p>积分明细</p>
    <p>积分明细</p>
    <p>积分明细</p>
    <p>积分明细</p>
    <p>积分明细</p>
    <p style="color:#ffffff" @click="goBack()">返回</p>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style>

</style>
