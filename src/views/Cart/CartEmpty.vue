<template>
  <div class="cart_empty">
    <img class="cart_empty_logo" src="../../assets/imgs/sn-cart-empty.png" alt="">
    <p class="cart_empty_tips">购物车还是空的，快来挑选好货吧</p>
    <div class="cart_empty_btn">去逛逛</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .cart_empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    .cart_empty_logo {
      width: 175px;
      height: 175px;
      margin: 100px 0 40px;
    }
    .cart_empty_tips {
      font-size: 22px;
      color: #666;
      margin-bottom:40px
    }
    .cart_empty_btn {
      background-color: #fff;
      color: #666;
      padding: 6px 10px;
      border: 1px solid #e3e3e3;
      border-radius:6px ;
      margin-bottom: 40px;
      font-size: 22px;
    }
  }
</style>
