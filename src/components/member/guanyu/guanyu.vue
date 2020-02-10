<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <div class="about-integral">
        <div class="about-integral-T">
          <span></span>
          <span>关于宝马会奖励积分计划</span>
        </div>
        <div class="about-integral-detail">
          <p>欢迎来到宝马会奖励积分商城，在这里你可以使用积分兑换任何感兴趣的奖品，关于兑换的方式和注意事项，请查看下列的条款。 宝马会努力为会员提供更完美的游戏体验，并致力于将这些体验融入到生活中去。因此你在宝马会能体会到的绝不只是游戏。 更能感受到“快乐生活”的定义和它衍生的一切元素。</p>
        </div>
      </div>
      <div class="about-integral">
        <div class="about-integral-T">
          <span></span>
          <span>如何获得积分？</span>
        </div>
        <div class="about-integral-detail">
          <p>宝马会积分产生方式只有两种方式：<span>① 投注游戏 ② 参与获得</span></p>
          <div class="about-integral-table">
            <table>
              <tr>
                <th>积分产生途径</th>
                <th>完成标准</th>
                <th>产生积分</th>
              </tr>
              <tr>
                <td>参与任意游戏</td>
                <td>每投注400元</td>
                <td>1</td>
              </tr>
              <tr>
                <td>参与特定优惠活动</td>
                <td>依活动规则而定</td>
                <td>20-200</td>
              </tr>
            </table>
          </div>
          <div>会员每天在投注游戏时，每400元的投注额将产生一个积分，积分会在隔天下午自动更新，并派发到会员的积分账户内。参与宝马会的特色优惠活动，可领取数额不等的积分。</div>
          <div class="about-integral-tips">(提示: 任何平局、和局、取消的投注都将无法获得积分。)</div>
        </div>
      </div>
      <div class="about-integral">
        <div class="about-integral-T">
          <span></span>
          <span>如何兑换积分？</span>
        </div>
        <div class="about-integral-detail">
          <p>在宝马会积分商城内，积分就是您的账户金额，您可以使用积分兑换任何奖品，包括奖金筹码、数码产品、生活用品、奢侈品等</p>
          <div class="about-integral-tips">(提示:宝马会积分只允许宝马会会员使用,不可转让他人，且会员账户内的积分不可从一个账户转入到另一个账户中。)</div>
        </div>
      </div>
      <div class="about-integral">
        <div class="about-integral-T">
          <span></span>
          <span>积分有效期</span>
        </div>
        <div class="about-integral-detail">
          <p>为鼓励会员更高频的使用兑换功能，商城的积分系统将会对会员的积分账 户定期检核，长期不活跃的账户积分将会被扣除。请会员及时查看积分账户，在积分过期之前兑换使用。普通会员的积分有效期为 6个月，VIP会员的积分有效期为 12个月。</p>
        </div>
      </div>
      <div class="about-integral">
        <div class="about-integral-T">
          <span></span>
          <span>声明</span>
        </div>
        <div class="about-integral-detail">
          <p>为了更高效的完成兑换和快递服务，请会员在注册账户时如实填写个人信息，在兑换奖品时如实填写收货信息。如您选择拒绝提供相关资料，可能会影响积分兑换礼品签收的时效性和安全性。对于已提供资料的会员，将会定时收到我们最新的优惠信息 以及更为体贴的客服服务，并优先获得优惠的参与权。</p>
          <div class="about-integral-tips">(提示： 宝马会绝不会向任何机构或个人提供会员的个人信息。若会员发现自己的个人信息被第三方机构或个人知悉，可立即发邮件告知我们。 邮件地址: BMW@201.COM 【请一并提供相应的截图】。)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopNavC from '@/components/common/TopnavC'

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
      document.getElementById('top-logo-change').innerHTML = '<p>关于积分</P>'
    }
  }
}

</script>
<style scoped>
</style>
