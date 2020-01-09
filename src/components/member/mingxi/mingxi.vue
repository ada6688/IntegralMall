<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap integral-details-wrap">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="签到积分">
            <ul class="integral-details sign-integral">
              <li>
                <div>
                  <p>每日签到</p>
                  <span>2019-12-20</span>
                  <span>18:00</span>
                </div>
              </li>
              <li>+70</li>
            </ul>
            <ul class="integral-details sign-integral">
              <li>
                <div>
                  <p>每日签到</p>
                  <span>2019-12-20</span>
                  <span>18:00</span>
                </div>
              </li>
              <li>+70</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="通用积分">
            <ul class="integral-details currency-integral">
              <li>
                <div>
                  <p>老虎机游戏产生流水积分</p>
                  <span>2019-12-20</span>
                  <span>18:00</span>
                </div>
              </li>
              <li>+70</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="兑换积分">
            <ul class="integral-details exchange-integral">
              <li>
                <div>
                  <p>掉Dior男士旷野香水</p>
                  <span>2019-12-20</span>
                  <span>18:00</span>
                </div>
              </li>
              <li>-6888</li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <div class="bottom-cut"><hr>暂无更多<hr></div>
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
      document.getElementById('top-logo-change').innerHTML = '<p>积分明细</P>'
    }
  }
}

</script>
<style>
.integral-details-wrap .el-tabs--border-card>.el-tabs__content{
  padding: 0 15px !important;
}
</style>
