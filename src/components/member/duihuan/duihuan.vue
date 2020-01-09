<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <div class="exchange-item-wrap">
        <div class="exchange-item-top">
          <span class="exchange-item-date">兑换时间：2019-12-21</span>
          <span class="exchange-item-status">已完成</span>
        </div>
        <div class="exchange-item-main">
          <div class="exchange-item-img">
            <img src="../../../assets/images/products/lsbb.png" alt="">
          </div>
          <div class="exchange-item-des">
            <p>华为 HUAWEI Mate 30 麒麟990旗舰芯片4000万超感光徕卡影像双超级快充屏内指纹8G+128GB亮黑色4G全网通版。</p>
            <p>共1件，合计（积分）：<span>888</span></p>
          </div>
        </div>
        <div class="exchange-item-info">
          <p>
            <span>兑换编号：</span>
            <span>008</span>
          </p>
          <p>
            <span>收货人：</span>
            <span>嘟嘟</span>
          </p>
          <p>
            <span>联系方式：</span>
            <span>138138138888</span>
          </p>
          <p>
            <span>收货地址：</span>
            <span>江苏省镇江市京口区解放桥巷106号303室</span>
          </p>
        </div>
      </div>
      <div class="exchange-item-wrap">
        <div class="exchange-item-top">
          <span class="exchange-item-date">兑换时间：2019-12-21</span>
          <span class="exchange-item-status">已完成</span>
        </div>
        <div class="exchange-item-main">
          <div class="exchange-item-img">
            <img src="../../../assets/images/products/lsbb.png" alt="">
          </div>
          <div class="exchange-item-des">
            <p>华为 HUAWEI Mate 30 麒麟990旗舰芯片4000万超感光徕卡影像双超级快充屏内指纹8G+128GB亮黑色4G全网通版。</p>
            <p>共1件，合计（积分）：<span>888</span></p>
          </div>
        </div>
        <div class="exchange-item-info">
          <p>
            <span>兑换编号：</span>
            <span>008</span>
          </p>
          <p>
            <span>收货人：</span>
            <span>嘟嘟</span>
          </p>
          <p>
            <span>联系方式：</span>
            <span>138138138888</span>
          </p>
          <p>
            <span>收货地址：</span>
            <span>江苏省镇江市京口区解放桥巷106号303室</span>
          </p>
        </div>
      </div>
      <div class="exchange-item-wrap">
        <div class="exchange-item-top">
          <span class="exchange-item-date">兑换时间：2019-12-21</span>
          <span class="exchange-item-status">已取消</span>
        </div>
        <div class="exchange-item-main">
          <div class="exchange-item-img">
            <img src="../../../assets/images/products/lsbb.png" alt="">
          </div>
          <div class="exchange-item-des">
            <p>华为 HUAWEI Mate 30 麒麟990旗舰芯片4000万超感光徕卡影像双超级快充屏内指纹8G+128GB亮黑色4G全网通版。</p>
            <p>共1件，合计（积分）：<span>0</span></p>
          </div>
        </div>
        <div class="exchange-item-info">
          <p>
            <span>兑换编号：</span>
            <span>008</span>
          </p>
          <p>
            <span>收货人：</span>
            <span>嘟嘟</span>
          </p>
          <p>
            <span>联系方式：</span>
            <span>138138138888</span>
          </p>
          <p>
            <span>收货地址：</span>
            <span>江苏省镇江市京口区解放桥巷106号303室</span>
          </p>
        </div>
      </div>
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
    goBack () {
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
    },
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>兑换记录</P>'
    }
  }
}

</script>
<style>

</style>
