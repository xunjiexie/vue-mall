<template>
  <scroll class="home_scroll" :probeType="3" :listenScroll="true" @scroll="onScroll">
    <div class="home">
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-ad></home-ad>
      <home-icons :list="iconsList"></home-icons>
      <p v-for="item in 150" :key="item">{{item}}</p>
    </div>

    <!-- 放在外层，解决better-scroll中fixed不生效的bug -->
    <home-header-fixed :state="1" v-if="isFixed"></home-header-fixed>
  </scroll>
</template>

<script>
import { getHomeSwiper, getHomeIcons } from '@/fetch/api'
import Scroll from '../../components/Scroll/Scroll.vue'
// eslint-disable-next-line import/no-duplicates
import HomeHeader from './HomeHeader.vue'
// eslint-disable-next-line import/no-duplicates
import HomeHeaderFixed from './HomeHeader.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeAd from './HomeAd.vue'
import HomeIcons from './HomeIcons.vue'
export default {
  components: { HomeHeader, HomeHeaderFixed, Scroll, HomeSwiper, HomeAd, HomeIcons },
  name: 'Home',
  data () {
    return {
      loading: true,
      // 是否吸顶
      isFixed: false,
      // swiper数据
      swiperList: [],
      // icons数据
      iconsList: []
    }
  },
  mounted () {
    this.getHomeSwiper()
    this.getHomeIcons()
  },
  methods: {
    onScroll (pos) {
      this.isFixed = (pos.y < -800)
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
    }
  }
}
</script>

<style lang="less">

</style>
