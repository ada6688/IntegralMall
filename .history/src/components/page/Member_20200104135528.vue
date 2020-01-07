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
          <div class="member-signIn-status-in">
            <p>+10</p>
            <p>+20</p>
            <p>+30</p>
            <p>+40</p>
            <p>+50</p>
            <p>+60</p>
            <p>+70</p>
          </div>
          <div class="member-signIn-status-line"></div>
          <div class="member-signIn-status-date">
            <p>12-20</p>
            <p>12-21</p>
            <p>12-22</p>
            <p>12-23</p>
            <p>12-24</p>
            <p>12-25</p>
            <p>12-26</p>
          </div>
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
