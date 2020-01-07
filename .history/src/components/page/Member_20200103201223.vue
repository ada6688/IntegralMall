<template>
  <div>
    <div class="member-half-circle"></div>
    <div class="member-wrap">
      <!-- 会员信息 -->
      <div class="member-person-info">
        <div class="member-img">
          <img src="../../assets/images/products/hw.png" alt="">
        </div>
        <p class="member-name">
          <span>宝马会会员</span>
          <img src="../../assets/images/member/sz.png" alt="">
        </p>
        <div class="member-level-sign">
          <img src="../../assets/images/member/pt.png" alt="">
        </div>
        <div class="member-integral">
          <div class="member-total">
            <p>总积分：</p>
            <span>30000</span>
          </div>
          <div class="member-useful">
            <p>可用积分：</p>
            <span>1000</span>
          </div>
        </div>
      </div>
      <!-- 签到 -->
      <div class="member-signIn">
        <van-steps :active="active">
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>买家提货</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
      </div>
      <!-- 积分明细，兑换记录，积分详情疑问规则等 -->
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      active: 1
    }
  }
}
</script>
<style>

</style>
