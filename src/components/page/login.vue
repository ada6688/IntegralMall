<template>
  <div class="loginBg">
    <div class="login-wrap">
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
        <button class="login_bt" id="sub" type="submit" onclick="loginCheck()">登录</button>
        <p class="login_tips">首次登陆请联系<a href="https://bmw-chat-service.com/?wgPortal=VONFpjLZtk">&nbsp;在线客服&nbsp;</a>获取密码</p>
        <img class="login-shadow" src="../../assets/images/login/shadow.png" alt=""/>
    </div>
</div>
</template>
<script>
import '../../assets/css/login.css'
export default {
}
</script>
<style>
#app{
  background: transparent !important
}
</style>
