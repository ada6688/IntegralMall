<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <div class="order-product-wrap">
        <div class="order-img">
          <img src="../../assets/images/products/bsbb.png" alt="">
        </div>
        <div class="order-text">
          <p>您要兑换的商品是</p>
          <span class="order-pro-detail">Apple iPhone 11 Pro Max (A2220) 256G B 联通电信4G手机 双卡双待！</span>
          <div class="order-pro-cost">
            <p>
              <span>原积分</span>
              <span>4000</span>
            </p>
            <p>
              <span>折扣价</span>
              <span>3680</span>
            </p>
          </div>
        <div class="order-pro-detail-button"><p>查看商品详情</p></div>
        </div>
      </div>
      <div class="order-form">
        <form @submit="submit()">
          <div>
            <span>*</span><span class="order-name-T">姓名</span><span>:</span>
            <input type="text" placeholder="请输入您的真实姓名">
          </div>
          <div>
            <span>*</span><span class="order-name-T">用户名</span><span>:</span>
            <input type="text" placeholder="请输入您的用户名">
          </div>
          <div>
            <span>*</span><span class="order-name-T">邮箱</span><span>:</span>
            <input type="text" placeholder="请输入您的邮箱">
          </div>
          <div>
            <span>*</span><span class="order-name-T">电话</span><span>:</span>
            <input type="text" placeholder="请输入您的电话">
          </div>
          <div>
            <span>*</span><span class="order-name-T">微信号</span><span>:</span>
            <input type="text" placeholder="请输入您的微信号">
          </div>
          <div>
            <span>*</span><span class="order-name-T">邮寄地址</span><span>:</span>
            <input type="text" placeholder="虚拟商品无须填写地址">
          </div>
          <button>提交</button>
        </form>
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
