<template>
  <div>
    <div class="member-half-circle"></div>
    <div class="member-wrap">
      <!-- 会员信息 -->
      <div class="member-person-info">
        <!-- 会员头像 -->
        <div class="member-img">
          <img src="../../assets/images/products/hw.png" alt="">
        </div>
        <!-- 会员名称与设置图标 -->
        <p class="member-name">
          <span>宝马会会员</span>
          <img src="../../assets/images/member/sz.png" alt="">
        </p>
        <!-- 会员等级图标 -->
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
          <!-- 当天签到获取积分 -->
          <div class="member-signIn-status-in">
            <p>+10</p>
            <p>+20</p>
            <p>+30</p>
            <p>+40</p>
            <p>+50</p>
            <p>+60</p>
            <p>+70</p>
          </div>
          <!-- 签到进度条 -->
          <div class="member-signIn-status-line">
            <i class="el-icon-edit"></i>
          </div>
          <!-- 签到日期 -->
          <div class="member-signIn-status-date">
            <p class="signIn-active">12-20</p>
            <p>12-21</p>
            <p>12-22</p>
            <p>12-23</p>
            <p>12-24</p>
            <p>12-25</p>
            <p>12-26</p>
          </div>
          <div class="member-signIn-tips">
            <p>已经连续签到1天</p>
            <p>明日签到可领20积分</p>
          </div>
          <!-- 签到按钮 -->
          <div class="member-signIn-button">签到</div>
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
