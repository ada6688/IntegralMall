<template>
  <div>
    <TopNavC for-child-msg='商品详情'></TopNavC>
    <div class="main-second-wrap">
      <!-- 商品详情 -->
      <div class="order-product-wrap">
        <!-- 左侧图片 -->
        <div class="order-img" v-if="commodity.app_img">
          <img :src="commodity.app_img.url" alt="">
        </div>
        <div class="order-img" v-else>
          <img :src="commodity.pc_img.url" alt="">
        </div>
        <!-- 右侧文字介绍 -->
        <div class="order-text">
          <p>您要兑换的商品是</p>
          <!-- 商品介绍文字 -->
          <!-- <h2 class="order-pro-detail">{{commodity.title}}</h2> -->
          <span class="order-pro-detail">{{commodity.description}}</span>
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
import TopNavC from '@/components/common/TopnavC'
import Axios from 'axios'

export default {
  components: {
    TopNavC,
  },
  data () {
    return {
      commodity: {
        pk: '',
        title: '',
        date: '',
        description: '',
        points: '',
        app_img: {url: ''},
        pc_img: {url: ''}
      },
      order: {
        take_name: '',
        user_name: '',
        goods_id: orderid,
        email: '',
        phone: '',
        wechart: '',
        address: '',
        tips: ''
      },
      J_status: 0,
      D_price: 0
    }
  },
  created () {
    if (window.token == ''){
      window.requirePath = '/order'
      this.$router.push('/login')
    } else {
      Axios({
      method: 'get',
      url: 'https://bmw1984.com/api/mulu/' + window.orderid +'/?format=json',
    })
      .then(Response => {
        this.commodity = Response.data
        this.commodity.pc_img.url = 'https://bmw1984.com' + this.commodity.pc_img.url
        if (this.commodity.app_img) {
          this.commodity.app_img.url = 'https://bmw1984.com' + this.commodity.app_img.url
        }
      })
      .catch(error => {
        console.log('商品加载错误')
        this.errorMessages()
        this.$router.push('/shouye')
      })
    Axios({
      method: 'get',
      url: 'https://bmw1984.com/api/auth/points/?format=json',
      headers: {
        Authorization: 'Token ' + window.token
      }
    })
      .then(Response => {
        this.D_price = Math.round(this.commodity.points * Response.data.discount)
        this.J_status = Response.data.balance_common_points > this.D_price ? 1 : 0
        console.log('加载用户信息完毕')
      })
      .catch(error => {
        console.log('加载用户信息错误')
        this.errorMessages2()
      })
    }
    
  },
  methods: {
    submit (e) {
      if (orderid == 300){
        Axios({
          method: 'POST',
          url: 'https://bmw1984.com/api/auth/sign/orders/',
          data: this.order,
          headers: {
            Authorization: 'Token ' + window.token
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
      } else {
        Axios({
          method: 'POST',
          url: 'https://bmw1984.com/api/auth/orders/',
          data: this.order,
          headers: {
            Authorization: 'Token ' + window.token
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
      }
    },
    errorMessages() {
      this.$message({
        message: '商品加在错误，请联系在线客服！',
        type: 'error',
        duration: 300000,
        offset:50 ,
        center:true,
        showClose:true 
      })
    },

    errorMessages2() {
      this.$message({
        message: '加载用户信息错误，请联系在线客服！',
        type: 'error',
        duration: 300000,
        offset:50 ,
        center:true,
        showClose:true 
      })
    },

    errorMessages3() {
      this.$message({
        message: '提交错误',
        type: 'error',
        duration: 300000,
        offset:50 ,
        center:true,
        showClose:true 
      })
    },
  }
}

</script>
<style>

</style>
