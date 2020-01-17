<template>
  <div class="loginBg">
    <form class="login-wrap">
        <img class="login-logo" src="../../assets/images/login/logo.png" alt=""/>
        <div class="login-input">
            <label for="loginName" class="loginName">
                <input v-model="loginForm.username" type="text" placeholder="请输入您的用户名" id="loginName" autocomplete="off"/>
            </label>
            <label for="loginPwd" class="loginPwd">
                <input v-model="loginForm.password" type="password" placeholder="请输入您的密码" id="loginPwd"/>
            </label>
            <div class="login-error">
                <p id="error_prompt" class="Error_prompt">用户名或密码错误，请重新输入！</p>
            </div>
        </div>
        <button class="login_bt" id="sub" type="submit" @click.prevent="login()">登录</button>
        <p class="login_tips">首次登陆请联系<a href="https://bmw-chat-service.com/?wgPortal=VONFpjLZtk">&nbsp;在线客服&nbsp;</a>获取密码</p>
        <img class="login-shadow" src="../../assets/images/login/shadow.png" alt=""/>
    </form>
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
        username: 'Thor',
        password: '4rfv5tgb...'
      },
      token: ''
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login: function () {
      let _this = this
      let error1 = document.getElementById('error_prompt')
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        error1.textContent = '用户名或密码不能为空'
        error1.style.cssText = 'display:block'
        return
      } else {
        axios({
          method: 'post',
          url: 'http://45.64.53.115:8000/rest-auth/login/',
          data: {
            username: _this.loginForm.username,
            password: _this.loginForm.password
          }
        })
          .then(res => {
            console.log(res.data.key)
            // _this.userToken = 'Bearer ' + res.data.key
            // 将用户token保存到vuex中
            // _this.changeLogin({ Authorization: _this.userToken })
            token = res.data.key
            _this.$router.push('/Member')
            alert('登陆成功')
          }).catch(error => {
            error1.textContent = '用户名或密码错误，请重新输入！'
            error1.style.cssText = 'display:block'
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
