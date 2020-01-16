<template>
    <div>
        <TopNavC></TopNavC>
        <div class="guess-page" :style="{backgroundImage: 'url(' + mainbg + ')'}">
          <div class="game-detail">
            <p>活动期间内，每天存款金额≥388元，即可竞猜 1次NBA球队的输赢结果，竞猜成功的会员可得到18元彩金。</p>
          </div>
        </div>
        <div class="match-list">
          <div v-for="(match, index) in matchData" :key="index" class="match-detail">
            <div v-if="match.status == 'over'" class="status-over">
              <div class="match-time"><p>2019-12-01 18:00</p></div>
              <div>
                <img :src="team_one_status" alt="">
                <img :src="team_one_img" alt="">
                <span class="team-name">勇士</span>
              </div>
              <div>
                <img :src="team_two_status">
                <img :src="team_two_img" alt="">
                <span class="team-name">灰熊</span>
              </div>
              <div class="match-status">
                <img :src="match_status_over" alt="">
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
// 引用组件
import TopNavC from '@/components/common/TopNavC'
import axios from 'axios'
import qs from 'qs'


export default {
  name: 'App',
  components: {
    TopNavC
  },
  data () {
    return {
      matchData: [
        {
          match_time: '2019-12-01 18:00', 
          team_one_status: 'success',
          team_one_img: '',
          team_one_name: '勇士'
        }
      ],
      mainbg: require('../../assets/images/yh/background.png')
    }
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>每日NBA竞猜</P>'
    },
  },
  created () {
    axios({
      // method: 'POST',
      // url: 'http://45.64.53.115:8000/rest-auth/login/',
      // data: {
      //   username: 'Thor',
      //   password: '4rfv5tgb...'
      // },
      method: 'GET',
      url: 'http://45.64.53.115:8000/api/nba/lottery/?format=json',
      headers: {
        Authorization: 'Token 556f140a28d12eef26475833e735b52eec750154',
        // Authorization: 'Token 5784b4ccf4f60a5d2ef9c8aa2b9da32ab5bceeee',
        // Authorization: 'Token 556f140a28d12eef26475833e735b52eec750154',
      },
      // data: {
      //   take_name: "API测试",
      //   user_name: "Thor",
      //   goods_id: 27,
      //   email: '',
      //   phone: 15652425125,
      //   wechart: '',
      //   address: '',
      //   tips: '',
      // }
    })
    .then(response=>{
      console.log(response.data)
      this.oftenGoods=response.data;
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })
  }
}
</script>
<style>
</style>