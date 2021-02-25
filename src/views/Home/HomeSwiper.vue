<template>
  <div class="home_swiper">
    <van-swipe class="van_swipe" :autoplay="3000">
      <van-swipe-item class="van-swipe-item" v-for="item in swiperList" :key="item.id">
        <div class="img_box">
          <img v-lazy="item.img" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less">
  .home_swiper {
    width: 100%;
    height: 260px;
    background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9a7ed524-1300-4486-8a19-9316b91f5dfa/cf1b479b-c033-4150-b9dd-f69a16d09a16.png);
    background-size: cover;
    padding: 5px 20px;
    .van_swipe {
      width: 100%;
      height: 100%;
      .van-swipe-item .img_box {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          bottom: 0;
          // object-fit: cover;
        }
      }
    }
  }
</style>
