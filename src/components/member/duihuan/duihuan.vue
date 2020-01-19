<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <div class="exchange-item-wrap" v-for="goods in list" v-bind:key="goods.id">
        <div class="exchange-item-top">
          <span class="exchange-item-date">兑换时间：{{goods.create_time === null ? '未知' : goods.create_time}}</span>
          <span class="exchange-item-status">{{goods.status}}</span>
        </div>
        <div class="exchange-item-main">
          <div class="exchange-item-img">
            <img :src="'http://45.64.53.115:8000' + goods.image.url" alt="" style="width: 100%">
          </div>
          <div class="exchange-item-des">
            <p>{{goods.goods}}</p>
            <p>共1件，合计（积分）：<span>{{goods.cost}}</span></p>
          </div>
        </div>
        <div class="exchange-item-info">
          <p>
            <span>兑换编号：</span>
            <span>{{goods.id}}</span>
          </p>
          <p>
            <span>收货人：</span>
            <span>{{goods.take_name}}</span>
          </p>
          <p>
            <span>联系方式：</span>
            <span>{{goods.phone}}</span>
          </p>
          <p>
            <span>收货地址：</span>
            <span>{{goods.address}}</span>
          </p>
        </div>
      </div>
      <div class="bottom-cut"><hr>暂无更多<hr></div>
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
      list: []
    }
  },
  mounted: function () {
    this.change()
  },
  created () {
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/orders/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.list = Response.data
        console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
        alert('加载错误，请联系在线客服！')
        // this.$router.push('/shouye')
      })
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
