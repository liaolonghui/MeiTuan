<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo" style="background:url(//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png) no-repeat;width:130px;height:47px"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网">
      </div>
      <div class="form">
        <h4
          v-if="error"
          class="tips"><i/>{{ error }}</h4>
        <p><span>账号登录</span></p>
        <el-input
          v-model="username"
          prefix-icon="profile"/>
        <el-input
          v-model="password"
          prefix-icon="password"
          type="password"/>
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button
          class="btn-login"
          type="success"
          size="mini"
          @click="login">登录</el-button>
      </div>
    </div>
    <footer class="footer" style="position:absolute;left:275px;bottom:121px;">
        <div class="copyright">
            <p style="color:gray;font-size:12px;">
                ©<span>2020</span>
                <a href="/">美团网团购</a>
                meituan.com
                <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
                京公网安备11010502025545号
            </p>
        </div>
    </footer>
  </div>
</template>

<script>
import CryptoJS from "crypto-js"

export default {
  data: () => {
    return {
      checked: '',
      username: '',
      password: '',
      error: ''
    }
  },
  layout: 'blank',
  methods: {
     login() {
       const self = this
       this.$axios.post('/users/signin',{
         username: encodeURIComponent(self.username),
         password: CryptoJS.MD5(self.password).toString()
       }).then(({status,data})=>{
         if(status===200){
           if(data&&data.code===0){
             location.href = '/'
           }else{
             self.error = data.msg
           }
         }else{
           self.error = '服务出错'
         }
         setTimeout(function(){
           self.error = ''
         },1500)
       })
     }
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/login/index.scss";
</style>