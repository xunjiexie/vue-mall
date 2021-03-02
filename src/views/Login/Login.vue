<template>
  <div class="login">
    <div class="header">
      <div class="header_nav">
        <p>联系客服</p>
        <p>企业注册</p>
      </div>
    </div>
    <div class="content">
      <div class="content_title">
        <img src="../../assets/imgs/login-icon.png" alt="">
        <p>欢迎登录苏宁易购</p>
      </div>
      <div class="content_phone">
        <div class="username">
          <van-field
            v-model="username"
            placeholder="请输入手机号/用户名/邮箱"
            center
            clearable
          />
        </div>
        <div class="password">
          <van-field
            v-model="password"
            placeholder="请输入密码"
            center
            clearable
            :right-icon="passwordType === 'password' ? 'closed-eye' : 'eye-o'"
            :type="passwordType"
            @click-right-icon="onHidePassword"
          />
          <p class="forget">忘记密码</p>
        </div>
      </div>
      <div class="login_btn" @click="onLoginClick">
        登录
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      // password展示状态
      passwordType: 'password',
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations([
      'SIGN_IN'
    ]),
    onHidePassword () {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    onLoginClick () {
      if (this.username.length <= 0) {
        this.$toast('请输入您的用户名')
        return
      }
      if (this.password.length <= 0) {
        this.$toast('请输入您的密码')
        return
      }
      this.$toast('登录成功')
      this.SIGN_IN()
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="less">
  .login {
    background-color: #fff;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    .header {
      height: 60px;
      display: flex;
      justify-content: flex-end;
      .header_nav {
        width: 220px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        p {
          font-size: 20px;
          color: #222;
        }
        &::before {
          content: '';
          width: 1px;
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 50%;
          background-color: #ddd;
        }
      }
    }
    .content {
      padding: 80px 40px 0;
      .content_title {
        height: 90px;
        display: flex;
        align-items: center;
        img {
          width: 90px;
          height: 90px;
          margin-right: 30px;
        }
        p {
          font-size: 36px;
          color: #222;
        }
      }
      .content_phone {
        overflow: hidden;
        .username, .password {
          height: 90px;
          border-bottom: 1px solid #bbb;
          margin-top: 20px;
          box-sizing: border-box;
          display: flex;
        }
        .password {
          van-field {
            flex: 1;
            overflow: hidden;
          }
          .forget {
            font-size: 20px;
            color: #333;
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .login_btn {
        width: 100%;
        height: 90px;
        background-color: #FFCC00;
        border-radius: 8px;
        text-align: center;
        line-height: 90px;
        font-size: 36px;
        color: #222;
        font-weight: 700;
        margin-top: 50px;
      }
    }
  }
</style>
