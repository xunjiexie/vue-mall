<template>
  <div class="header">
    <div class="header_l">商品分类</div>
    <div class="header_r">
      <div class="search_box">
        <search-box></search-box>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '../../components/Search/SearchBox.vue'
export default {
  components: { SearchBox },
  methods: {
    onSearchClick () {
      console.log('跳转search')
    }
  }
}
</script>

<style lang="less">
  .header {
    height: 108px;
    background-color: #fff;
    display: flex;
    .header_l {
      font-size: 36px;
      width: 180px;
      height: 108px;
      line-height: 108px;
      text-align: center;
    }
    .header_r {
      flex: 1;
      padding: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .search_box {
        width: 100%;
        height: 70px;
      }
    }
  }
</style>
