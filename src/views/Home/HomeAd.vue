<template>
  <div class="home_ad">
    <img class="img1" v-lazy="img1" alt="">
    <img class="img2" v-lazy="img2" alt="">
    <img class="img3" v-lazy="img3" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      img1: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9a7ed524-1300-4486-8a19-9316b91f5dfa/ecb0ca79-58eb-444f-9b58-911ae5e56036.png',
      img2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9a7ed524-1300-4486-8a19-9316b91f5dfa/73939ae2-71b2-4871-bf50-35f3569a0fa2.png',
      img3: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9a7ed524-1300-4486-8a19-9316b91f5dfa/2c292cfd-c1f0-4032-baa5-79466fc2fc73.png'
    }
  }
}
</script>

<style lang="less">
  .home_ad {
    margin-top: 20px;
    background-color: #f8f8f8;
    display: flex;
    flex-wrap: wrap;
    .img1 {
      width: 750px;
      height: 180px;
    }
    .img2, .img3 {
      width: 375px;
      height: 180px;
    }
  }
</style>
