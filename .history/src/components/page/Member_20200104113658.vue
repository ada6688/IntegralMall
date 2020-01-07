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
          <div class="member-integral-slice">|</div>
          <div class="member-useful">
            <p>可用积分：</p>
            <span>1000</span>
          </div>
        </div>
      </div>
      <!-- 签到 -->
      <div class="member-signIn">
        <div class="member-signIn-status">
          <div class="member-signIn-status-in"></div>
          <div class="member-signIn-status-1"></div>
          <div class="member-signIn-status-date"></div>
        </div>
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
      active: 0
    }
  }
}
</script>
<style>

</style>
