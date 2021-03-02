<template>
  <div class="cart">
    <div class="cart_header">
      <p class="cart_title">购物车</p>
      <p class="cart_adress">
        <span class="iconfont icon-ziyuan7"></span>
        <span>黄浦区</span>
      </p>
    </div>
    <div class="cart_content">
      <cart-login></cart-login>
      <cart-empty></cart-empty>
    </div>
  </div>
</template>

<script>
import CartEmpty from './CartEmpty.vue'
import CartLogin from './CartLogin.vue'
export default {
  components: { CartLogin, CartEmpty },
  name: 'Cart',
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
  .cart {
    display: flex;
    flex-direction: column;
    background-color: #F5F5F9;
    .cart_header {
      height: 88px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, .1);
      display: flex;
      justify-content: center;
      align-items: center;
      .cart_title {
        font-size: 36px;
        color: #000;
        margin-right: 10px;
      }
      .cart_adress {
        span:first-child {
          font-size: 16px;
          color: #F39618;
        }
        span:last-child {
          font-size: 20px;
          color: #333;
        }
      }
    }
    .cart_content {
      flex: 1;
      overflow: hidden;
      padding: 20px;
      box-sizing: border-box;
    }
  }
</style>
