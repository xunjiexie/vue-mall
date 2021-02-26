<template>
  <scroll
    class="home_scroll"
    :probeType="3"
    :listenScroll="true"
    @scroll="onScroll"
    ref="home_scroll"
    :pullup="true"
    @scrollToEnd="onScrollToEnd">
    <div class="home">
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-ad></home-ad>
      <home-icons :list="iconsList"></home-icons>
      <home-guess :listData="guessList"></home-guess>
      <van-loading class="guess_loading" size="24px">加载中...</van-loading>
    </div>

    <!-- 放在外层，解决better-scroll中fixed不生效的bug -->
    <home-header-fixed :state="1" v-if="isFixed"></home-header-fixed>
  </scroll>
</template>

<script>
import { getHomeSwiper, getHomeIcons, getHomeGuess } from '@/fetch/api'
import Scroll from '../../components/Scroll/Scroll.vue'
// eslint-disable-next-line import/no-duplicates
import HomeHeader from './HomeHeader.vue'
// eslint-disable-next-line import/no-duplicates
import HomeHeaderFixed from './HomeHeader.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeAd from './HomeAd.vue'
import HomeIcons from './HomeIcons.vue'
import HomeGuess from './HomeGuess.vue'
export default {
  components: { HomeHeader, HomeHeaderFixed, Scroll, HomeSwiper, HomeAd, HomeIcons, HomeGuess },
  name: 'Home',
  data () {
    return {
      loading: true,
      // 是否吸顶
      isFixed: false,
      // swiper数据
      swiperList: [],
      // icons数据
      iconsList: [],
      // guess数据
      guessList: []
    }
  },
  mounted () {
    this.getHomeSwiper()
    this.getHomeIcons()
    this.getHomeGuess()
  },
  methods: {
    onScroll (pos) {
      this.isFixed = (pos.y < -800)
    },
    onScrollToEnd () {
      console.log('onScrollToEnd')
      this.getHomeGuess()
    },
    // swiper数据
    async getHomeSwiper () {
      const data = await getHomeSwiper()
      this.swiperList = data
    },
    // icons数据
    async getHomeIcons () {
      const data = await getHomeIcons()
      this.iconsList = data
    },
    // 猜你喜欢数据
    async getHomeGuess () {
      const data = await getHomeGuess()
      this.guessList = [...this.guessList, ...data]
    }
  },
  watch: {
    guessList (newValue) {
      // console.log(newValue)
      // this.$nextTick(() => {
      //   this.$refs.home_scroll.refresh()
      // })
      setTimeout(() => {
        this.$refs.home_scroll.refresh()
      }, 1000)
    }
  }
}
</script>

<style lang="less">
  .guess_loading {
    text-align: center;
  }
</style>
