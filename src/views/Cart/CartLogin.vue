<template>
  <div class="cart_login">
    <p class="login_text">登录后同步电脑与手机购物车的商品</p>
    <div class="login_btn">去登陆</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .cart_login {
    background-color: #ffe37e;
    height: 60px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    .login_text {
      font-size: 20px;
      color: #333;
    }
    .login_btn {
      background-color: #222;
      color: #ffe37e;
      font-size: 20px;
      padding: 4px;
      border-radius: 4px;
    }
  }
</style>
