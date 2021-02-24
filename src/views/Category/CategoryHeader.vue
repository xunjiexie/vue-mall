<template>
  <div class="header">
    <div class="header_l">商品分类</div>
    <div class="header_r">
      <div class="search_box" @click="onSearchClick">
        <p class="iconfont icon-search search_icon"></p>
        <p class="search_text">疯抢2021元大额券</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        background-color: #f7f7f7;
        border-radius: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        p {
          font-size: 28px;
          color: #999;
        }
        .search_icon {
          font-size: 36px;
          margin-right: 5px;
        }
      }
    }
  }
</style>
