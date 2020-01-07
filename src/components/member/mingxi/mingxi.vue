<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-wrap">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="签到积分">
          </el-tab-pane>
          <el-tab-pane label="通用积分">
          </el-tab-pane>
          <el-tab-pane label="兑换积分">
          </el-tab-pane>
        </el-tabs>
      </el-row>
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
    goBack () {
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
    },
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>积分明细</P>'
    }
  }
}

</script>
<style>

</style>
