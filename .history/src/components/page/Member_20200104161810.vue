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
          <!-- 签到进度条 -->
          <div class="member-signIn-status-1">
            <p class="member-signIn-in">+10</p>
            <i class="el-icon-success member-signIn-icon-active"></i>
            <span class="member-signIn-line member-signIn-active"></span>
            <p class="member-signIn-date-active">12-20</p>
          </div>
          <div class="member-signIn-status-1">
            <p class="member-signIn-in">+10</p>
            <i class="el-icon-success member-signIn-icon-active"></i>
            <span class="member-signIn-line member-signIn-active"></span>
            <p class="member-signIn-date">12-20</p>
          </div>
          <div class="member-signIn-status-1">
            <p class="member-signIn-in">+10</p>
            <i class="el-icon-success"></i>
            <span class="member-signIn-line"></span>
            <p class="member-signIn-date">12-20</p>
          </div>
          <div class="member-signIn-status-1">
            <p class="member-signIn-in">+10</p>
            <i class="el-icon-success"></i>
            <span class="member-signIn-line"></span>
            <p class="member-signIn-date">12-20</p>
          </div>
          <div class="member-signIn-status-1">
            <p class="member-signIn-in">+10</p>
            <i class="el-icon-success"></i>
            <span class="member-signIn-line"></span>
            <p class="member-signIn-date">12-20</p>
          </div>
          <div class="member-signIn-status-1">
            <p class="member-signIn-in">+10</p>
            <i class="el-icon-success"></i>
            <span class="member-signIn-line"></span>
            <p class="member-signIn-date">12-20</p>
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
