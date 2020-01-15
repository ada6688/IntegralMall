<template>
  <div class="loginBg">
    <form class="login-wrap">
        <img class="login-logo" src="../../assets/images/login/logo.png" alt=""/>
        <div class="login-input">
            <label for="loginName" class="loginName">
                <input type="text" placeholder="请输入您的用户名" id="loginName" required autocomplete="off"/>
            </label>
            <label for="loginPwd" class="loginPwd">
                <input type="password" placeholder="请输入您的密码" id="loginPwd" required/>
            </label>
            <div class="login-error">
                <p class="Error_prompt">用户名或密码错误，请重新输入！</p>
            </div>
        </div>
        <button class="login_bt" id="sub" type="submit" @click="login()">登录</button>
        <p class="login_tips">首次登陆请联系<a href="https://bmw-chat-service.com/?wgPortal=VONFpjLZtk">&nbsp;在线客服&nbsp;</a>获取密码</p>
        <img class="login-shadow" src="../../assets/images/login/shadow.png" alt=""/>
    </form>
    <!-- <el-form :inline="true" :model="loginForm" class="demo-form-inline">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="请输入您的用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入您的密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>
<script>
import '../../assets/css/login.css'
import {mapMutations} from 'vuex'
import axios from 'axios'
// import store from '../../store/index'

export default {
  data () {
    return {
      loginForm: {
        csrfmiddlewaretoken: '',
        username: 'admin',
        password: '123123'
      },
      token: ''
    }
  },
  methods: {
    getCookie (name = 'csrftoken') {
      var cookieValue = null
      if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';')
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim()
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
            break
          }
        }
      }
      this.token = cookieValue
    },
    ...mapMutations(['changeLogin']),
    login: function () {
      let _this = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空')
      } else {
        this.getCookie()
        _this.loginForm.csrfmiddlewaretoken = this.token
        console.log(_this.loginForm)
        axios({
          method: 'post',
          url: 'http://45.64.53.115:8000/accounts/login/',
          data: _this.loginForm,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
          .then(res => {
            console.log(res.data)
            _this.userToken = 'Bearer ' + res.data.data.body.token
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken })
            _this.$router.push('/shouye')
            alert('登陆成功')
          }).catch(error => {
            alert('账号或密码错误')
            console.log(error)
          })
      }
    }
  }
}
</script>
<style>
#app{
  background: transparent !important
}
</style>
