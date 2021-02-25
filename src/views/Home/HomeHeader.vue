<template>
  <div class="home_header" :class="{home_header_fixed: state === 1}">
    <div class="home_header_top">
      <div class="icon_category">
        <p class="iconfont icon-fenleishouye"></p>
        <!-- <p class="text">分类</p> -->
      </div>
      <div v-if="state === 0" class="img_ad">
        <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9a7ed524-1300-4486-8a19-9316b91f5dfa/37217698-4b95-4039-b8e0-9b4e2ef113c0.gif" alt="">
      </div>
      <div v-else class="top_search">
        <search-box></search-box>
      </div>
      <div class="icon_login">
        <p class="iconfont icon-denglu"></p>
        <!-- <p class="text">登录</p> -->
      </div>
    </div>
    <div class="home_header_bot" v-if="state === 0">
      <div class="bot_search">
        <search-box></search-box>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '../../components/Search/SearchBox.vue'
export default {
  components: { SearchBox },
  props: {
    // header状态 0正常 1fixed
    state: {
      type: Number,
      default () {
        return 0
      }
    }
  }

}
</script>

<style lang="less">
  .home_header {
    background-color: #FFDB47;
    width: 750px;
    .home_header_top {
      height: 88px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon_category, .icon_login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .iconfont {
          color: #fff;
          font-size: 42px;
        }
        .text {
          font-size: 16px;
          color: #fff;
        }
      }
      .img_ad {
        width: 400px;
        img {
          width: 100%;
        }
      }
      .top_search {
        width: 500px;
        height: 70px;
      }
    }
    .home_header_bot {
      height: 88px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      .bot_search {
        width: 100%;
        height: 70px;
      }
    }
  }
  .home_header_fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
