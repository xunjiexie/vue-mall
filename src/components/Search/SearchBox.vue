<template>
  <div class="search_box" @click="onSearchClick">
    <p class="iconfont icon-search search_icon"></p>
    <p class="search_text">疯抢2021元大额券</p>
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
  .search_box {
    width: 100%;
    height: 100%;
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
</style>
