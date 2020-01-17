<template>
  <div>
    <TopNav></TopNav>
    <div class="main-wrap">
      <div class="member-half-circle"></div>
      <div class="member-wrap">
        <!-- 会员信息 -->
        <div class="member-person-info">
          <!-- 会员头像 -->
          <div class="member-img">
            <img :src="auth.avatar === '' ? 'http://www.gravatar.com/avatar/4ee3113dc16bc05c2bba9393c8e1f7ef?s=50&d=mm' : 'http://45.64.53.115:8000' + auth.avatar" alt="">
          </div>
          <!-- 会员名称与设置图标 -->
          <p class="member-name">
            <span>{{auth.first_name + auth.last_name}}</span>
            <img src="../../assets/images/member/sz.png" alt="">
          </p>
          <!-- 会员等级图标 -->
          <div class="member-level-sign">
            <img :src="integral.img_url" alt="">
          </div>
          <div class="member-integral">
            <div class="member-total">
              <p>总积分：</p>
              <span>{{integral.total_common_points + integral.total_sign_points}}</span>
            </div>
            <div class="member-integral-slice">|</div>
            <div class="member-useful">
              <p>可用积分：</p>
              <span>{{integral.balance_common_points + integral.balance_sign_points}}</span>
            </div>
          </div>
        </div>
        <!-- 签到 -->
        <div class="member-signIn">
          <div class="member-signIn-status">
            <!-- 签到进度条 -->
            <div class="member-signIn-status-1" v-for="data in setclass(Sign)" v-bind:key="data.time">
              <p class="member-signIn-in">+{{data.jifen}}</p>
              <i :class="data.iclass"></i>
              <span :class="data.spanclass"></span>
              <p :class="data.pclass">{{data.time}}</p>
            </div>
            <div class="member-signIn-tips">
              <p>已经连续签到{{Sing_day}}天</p>
              <p>明日签到可领{{last_sign}}积分</p>
            </div>
            <!-- 签到按钮 -->
            <div v-if="sign_status === 200" class="member-signIn-button" @click="qiandao()">签到</div>
            <div v-else class="member-signIn-button" style="background:linear-gradient(0deg,rgba(191, 186, 176) 26%,rgba(189, 177, 160) 100%);">今日已签到</div>
          </div>
        </div>
        <!-- 积分明细，兑换记录，积分详情疑问规则等 -->
        <div class="member-more-detail">
          <router-link :to="{path: 'mingxi'}">
            <div class="member-jifen">
              <div class="member-jifen-T">积分明细</div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </router-link>
          <router-link :to="{path: 'duihuan'}">
            <div class="member-duihuan">
              <div class="member-jifen-T">兑换记录</div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </router-link>
          <router-link :to="{path: 'guanyu'}">
            <div class="member-guanyu">
              <div  class="member-jifen-T">关于积分</div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </router-link>
          <router-link :to="{path: 'yiwen'}">
            <div class="member-yiwen">
              <div  class="member-jifen-T">常见疑问</div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </router-link>
          <router-link :to="{path: 'guize'}">
            <div class="member-guize">
              <div  class="member-jifen-T">规则与条款</div>
              <i class="el-icon-arrow-right"></i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import Axios from 'axios'

export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav
  },
  data () {
    return {
      active: 0,
      auth: [],
      integral: [],
      Sign: [],
      Sing_day: 0,
      last_sign: 0,
      sign_status: 200
    }
  },
  created () {
    // auth = 'Token ' + token
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/user/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.auth = Response.data
        console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
        alert('y用户信息加载错误，请联系在线客服！')
        // this.$router.push('/shouye')
      })
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/points/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.integral = Response.data
        this.integral.img_url = Response.data.shop_level === 0 ? '/static/images/pt@3x.png' :
                Response.data.shop_level === 1 ? '/static/images/hj@3x.png' :
                Response.data.shop_level === 2 ? '/static/images/bj@3x.png' :
                Response.data.shop_level === 3 ? '/static/images/zs@3x.png' :
                Response.data.shop_level === 4 ? '/static/images/zz@3x.png' :
                Response.data.shop_level === 5 ? '/static/images/wz@3x.png' :
                Response.data.shop_level === 6 ? '/static/images/ty@3x.png' : '/static/images/pt@3x.png'
        console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
        alert('等级加载错误，请联系在线客服！')
        // this.$router.push('/shouye')
      })
      Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/sign/query/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.Sign = Response.data.data
        this.Sing_day = Response.data.continuity_days
        this.last_sign = Response.data.tomorrow
        this.sign_status = Response.data.status
        console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
        alert('签到获取错误')
        // this.$router.push('/shouye')
      })
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      // console.log(22213425)
      document.getElementById('top-nav-logo').innerHTML = '<p>个人中心</p>'
      document.getElementById('top-nav-right').innerHTML = '<img src="../../static/topnav/kf.png" alt="客服">'
    },
    setclass (demo, arr = []) {
    //   return demo
      demo.forEach(function (item, index) {
        if (item[1] > 0) {
          arr[index] = {'iclass': 'el-icon-success member-signIn-icon-active',
            'spanclass': 'member-signIn-line member-signIn-active',
            'pclass': 'member-signIn-date-active',
            'time': item[0],
            'jifen': item[1]
          }
          // day++
        } else {
          arr[index] = {'iclass': 'el-icon-success',
            'spanclass': 'member-signIn-line',
            'pclass': 'member-signIn-date',
            'time': item[0],
            'jifen': item[1]
          }
        }
      })
      return arr
    },
    qiandao () {
      if (this.sign_status === 200) {
        Axios({
        method: 'get',
        url: 'http://45.64.53.115:8000/api/auth/sign/in/',
        headers: {
          Authorization: 'Token ' + token
        }
      })
        .then(Response => {
          this.Sign = Response.data.data
          this.Sing_day = Response.data.continuity_days
          this.last_sign = Response.data.tomorrow
          this.sign_status = Response.data.status
          // console.log(Response.data)
        })
        .catch(error => {
          console.log(error)
          alert('签到获取错误')
          // this.$router.push('/shouye')
        })
      }
    }
  }
}
</script>
<style>

</style>
