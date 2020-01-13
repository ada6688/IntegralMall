<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <div class="order-product-detail">
        <img src="../../assets/images/products/bsbb.png" alt="">
      </div>
      <div class="order-form">
        <p>您要兑换的商品是</p>
        <p></p>
      </div>
    </div>
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
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>兑换信息填写</P>'
    }
  }
}
</script>
<style>

</style>
