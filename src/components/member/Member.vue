<template>
  <div id="memberPage">
    <TopNav for-child-msg='个人中心'></TopNav>>
    <div class="main-wrap">
      <div class="member-half-circle"></div>
      <div class="member-wrap">
        <!-- 会员信息 -->
        <div class="member-person-info">
          <!-- 会员头像 -->
          <div class="member-img">
            <img :src="'https://bmw1984.com' + auth.avatar" v-if="auth.avatar">
            <img src="https://www.gravatar.com/avatar/4ee3113dc16bc05c2bba9393c8e1f7ef?s=50&d=mm" alt="" v-else>
          </div>
          <!-- 会员名称与设置图标 -->
          <p class="member-name">
            <span>{{auth.first_name + auth.last_name}}</span>
            <span style="font-size: 10px; color: rgb(181, 128, 36);" @click="logOut">/登出</span>
            <!-- <img src="../../assets/images/member/sz.png" alt=""> -->
          </p>
          <!-- 会员等级图标 -->
          <div class="member-level-sign">
            <img :src="integral.img_url" alt="">
          </div>
          <div class="member-integral">
            <div class="member-total">
              <p>通用积分：</p>
              <span>{{integral.balance_common_points}}</span>
            </div>
            <div class="member-integral-slice">|</div>
            <div class="member-useful">
              <p>签到积分：</p>
              <span>{{total_sign_points}}</span>
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
            <!-- <div v-if="sign_status === 200" class="member-signIn-button" @click="qiandao()">签到</div> -->
            <!-- <div v-else class="member-signIn-button" style="">今日已签到</div> -->
            <div class="member-signIn-button" :class="{'sign-in-already':sign_active}" @click="qiandao()">{{sign_message}}</div>
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
          <!-- APP下载活动申请 -->
          <div class="member-guize" :class="{red_bag_button:r_b_dis_allow}">
            <button class="downland" @click="AppDownlandRedBag">APP下载活动申请</button>
          </div>

        </div>
      </div>
    </div>
    <br>
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
      sign_message: '签到',
      sign_active: false,
      Sing_day: 0,
      last_sign: 0,
      sign_status: 200,
      total_sign_points: 0,
      level_img: [
        require('@/assets/images/levelSign/pt@3x.png'),
        require('@/assets/images/levelSign/hj@3x.png'),
        require('@/assets/images/levelSign/bj@3x.png'),
        require('@/assets/images/levelSign/zs@3x.png'),
        require('@/assets/images/levelSign/zz@3x.png'),
        require('@/assets/images/levelSign/wz@3x.png'),
        require('@/assets/images/levelSign/ty@2x.png')
      ],
      r_b_dis_allow: true
    }
  },
  created () {
    if (window.token === '') {
      window.requirePath = '/Member'
      this.$router.push('/login')
    } else {
      Axios({
        method: 'get',
        url: 'https://bmw1984.com/api/auth/user/?format=json',
        headers: {
          // eslint-disable-next-line no-undef
          Authorization: 'Token ' + token
        }
      })
        .then(Response => {
          this.auth = Response.data
          console.log(Response.data, 2000)
        })
        .catch(error => {
          console.log(error)
          this.errorMessages('y用户信息加载错误，请联系在线客服！', 5000)
          // this.$router.push('/shouye')
        })
      Axios({
        method: 'get',
        url: 'https://bmw1984.com/api/auth/points/?format=json',
        headers: {
          // eslint-disable-next-line no-undef
          Authorization: 'Token ' + token
        }
      })
        .then(Response => {
          this.integral = Response.data
          this.integral.img_url = this.level_img[Response.data.shop_level]
        })
        .catch(error => {
          console.log(error)
          this.errorMessages('等级加载错误，请联系在线客服！', 5000)
          // this.$router.push('/shouye')
        })
      Axios({
        method: 'get',
        url: 'https://bmw1984.com/api/auth/sign/query/?format=json',
        headers: {
          // eslint-disable-next-line no-undef
          Authorization: 'Token ' + token
        }
      })
        .then(Response => {
          this.Sign = Response.data.data
          this.total_sign_points = Response.data.total_points
          this.Sing_day = Response.data.continuity_days
          this.last_sign = Response.data.tomorrow
          this.sign_status = Response.data.status
          if (Response.data.status === 201) {
            this.sign_message = '已签到'
            this.sign_active = true
          }
          // console.log(Response.data)
        })
        .catch(error => {
          console.log(error)
          this.errorMessages('签到获取错误', 5000)
          // this.$router.push('/shouye')
        })
      Axios({
        method: 'get',
        url: 'https://bmw1984.com/api/auth/app/downland/',
        headers: {
          // eslint-disable-next-line no-undef
          Authorization: 'Token ' + token
        }
      })
        .then(Response => {
          this.r_b_dis_allow = Response.data.r_b_dis_allow
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted: function () {
  },
  methods: {
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
          url: 'https://bmw1984.com/api/auth/sign/in/?format=json',
          headers: {
            // eslint-disable-next-line no-undef
            Authorization: 'Token ' + token
          }
        }).then(Response => {
          this.Sign = Response.data.data
          this.Sing_day = Response.data.continuity_days
          this.last_sign = Response.data.tomorrow
          this.sign_status = Response.data.status
          this.sign_message = '已签到'
          this.sign_active = true
        }).catch(error => {
          console.log(error)
          this.errorMessages('签到获取错误', 5000)
        })
      }
    },
    AppDownlandRedBag () {
      Axios({
        method: 'POST',
        url: 'https://bmw1984.com/api/auth/app/downland/',
        headers: {
          // eslint-disable-next-line no-undef
          Authorization: 'Token ' + token
        }
      })
        .then(Response => {
          this.errorMessages(Response.data.message)
        })
        .catch(error => {
          console.log(error)
        })
    },
    logOut () {
      localStorage.setItem('token', '')
      window.token = ''
      this.$router.push({path: '/'})
    },
    errorMessages (n, time) {
      this.$message({
        message: n,
        type: 'error',
        duration: time,
        offset: 50,
        center: true,
        showClose: true
      })
    }
  }
}
</script>
<style>
.red_bag_button {
  display: none;
}
.downland {
    width: 40%;
    line-height: 26px;
    background: -webkit-gradient(linear,left bottom,left top,color-stop(26%,#b58024),to(#e7ae4b));
    margin: 0 auto;
    border: 0;
    font-size: 15px;
    color: #fff;
}
.sign-in-already {
  background:linear-gradient(0deg,rgba(191, 186, 176) 26%,rgba(189, 177, 160) 100%);
}
@media screen and (max-height:674px){
  .main-wrap {
    margin-bottom: 3.66vh;
  }
}
@media screen and (max-height:551px){
  .main-wrap {
    margin-bottom: 1.66vh;
}
}
@media screen and (max-height:345px){
  .main-wrap {
    margin-bottom: 1vh;
}
}
</style>
