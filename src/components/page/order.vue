<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <!-- 商品详情 -->
      <div class="order-product-wrap">
        <!-- 左侧图片 -->
        <div class="order-img">
          <img :src="'http://45.64.53.115:8000' + commodity.pc_img.url" alt="">
        </div>
        <!-- 右侧文字介绍 -->
        <div class="order-text">
          <p>您要兑换的商品是</p>
          <!-- 商品介绍文字 -->
          <span class="order-pro-detail">{{commodity.title}}</span>
          <!-- 积分 -->
          <div class="order-pro-cost">
            <p>
              <span>原积分</span>
              <span>{{commodity.points}}</span>
            </p>
            <p>
              <span>折扣价</span>
              <span>{{D_price}}</span>
            </p>
          </div>
        <div class="order-pro-detail-button"><p>查看商品详情</p></div>
        </div>
      </div>
      <!-- 表单 -->
      <div class="order-form">
        <form v-if="J_status === 1" @submit="submit()">
          <div>
            <span>*</span><span class="order-name-T">姓名</span><span>:</span>
            <input v-model="order.take_name" type="text" placeholder="请输入您的真实姓名" required>
          </div>
          <div>
            <span>*</span><span class="order-name-T">邮箱</span><span>:</span>
            <input v-model="order.email" type="text" placeholder="请输入您的邮箱">
          </div>
          <div>
            <span>*</span><span class="order-name-T">电话</span><span>:</span>
            <input v-model="order.phone" type="text" placeholder="请输入您的电话">
          </div>
          <div>
            <span>*</span><span class="order-name-T">微信号</span><span>:</span>
            <input v-model="order.wechart" type="text" placeholder="请输入您的微信号">
          </div>
          <div>
            <span>*</span><span class="order-name-T">邮寄地址</span><span>:</span>
            <input v-model="order.address" type="text" placeholder="虚拟商品无须填写地址">
          </div>
          <div class="order-bz-wrap">
            <span class="order-bz">*</span><span class="order-name-T">备注</span><span>:</span>
            <input v-model="order.tips" type="text" placeholder="如有其它注意事项，请在此备注！">
          </div>
          <button>提交</button>
        </form>
        <form v-else @submit="goback()">
          <div>
            <span>*</span><span class="order-name-T">姓名</span><span>:</span>
            <input v-model="order.take_name" type="text" placeholder="请输入您的真实姓名" required>
          </div>
          <div>
            <span>*</span><span class="order-name-T">邮箱</span><span>:</span>
            <input v-model="order.email" type="text" placeholder="请输入您的邮箱">
          </div>
          <div>
            <span>*</span><span class="order-name-T">电话</span><span>:</span>
            <input v-model="order.phone" type="text" placeholder="请输入您的电话">
          </div>
          <div>
            <span>*</span><span class="order-name-T">微信号</span><span>:</span>
            <input v-model="order.wechart" type="text" placeholder="请输入您的微信号">
          </div>
          <div>
            <span>*</span><span class="order-name-T">邮寄地址</span><span>:</span>
            <input v-model="order.address" type="text" placeholder="虚拟商品无须填写地址">
          </div>
          <div class="order-bz-wrap">
            <span class="order-bz">*</span><span class="order-name-T">备注</span><span>:</span>
            <input v-model="order.tips" type="text" placeholder="如有其它注意事项，请在此备注！">
          </div>
          <button style="background:linear-gradient(0deg,rgba(191, 186, 176) 26%,rgba(189, 177, 160) 100%);">积分不足,点击返回首页</button>
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
      commodity: [],
      order: {
        take_name: '',
        user_name: '',
        goods_id: orderid,
        email: '',
        phone: 0,
        wechart: '',
        address: '',
        tips: ''
      },
      J_status: 0,
      D_price: 0
    }
  },
  created () {
    // console.log(id)
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/mulu/' + orderid +'/?format=json',
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
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/points/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        console.log(Response.data)
        this.D_price = Math.round(this.commodity.points * Response.data.discount)
        this.J_status = Response.data.balance_common_points > this.D_price ? 1 : 0
        console.log(this.J_status)
      })
      .catch(error => {
        console.log(error)
        alert('加载错误，请联系在线客服！')
        // this.$router.push('/shouye')
      })
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>兑换信息填写</P>'
    },
    submit () {
      Axios({
      method: 'post',
      url: 'http://45.64.53.115:8000/api/auth/orders/',
      data: this.order,
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        alert(Response.data.message)
        this.$router.push('/shouye')
      })
      .catch(error => {
        alert('提交错误')
        this.$router.push('/shouye')
      })
    },
    goback () {
      this.$router.push('/shouye')
    }
  }
}
</script>
<style>

</style>
