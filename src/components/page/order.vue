<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <div class="order-product-wrap">
        <div class="order-img">
          <img :src="'http://45.64.53.115:8000' + commodity.img_url.url" alt="">
        </div>
        <div class="order-text">
          <p>您要兑换的商品是</p>
          <span class="order-pro-detail">{{commodity.title}}</span>
          <div class="order-pro-cost">
            <p>
              <span>原积分</span>
              <span>{{commodity.points}}</span>
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
import Axios from 'axios'

export default {
  components: {
    TopNavC
  },
  data () {
    return {
      commodity: []
    }
  },
  created () {
    // console.log(id)
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/mulu/' + window.orderid + '/?format=json',
      withCredentials: true
    })
      .then(Response => {
        this.commodity = Response.data
        console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
        this.$router.push('/shouye')
      })
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
