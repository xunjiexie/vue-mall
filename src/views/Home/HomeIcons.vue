<template>
  <div class="home_icons">
    <div class="icon_item" v-for="item in list" :key="item.id">
      <img v-lazy="item.icon" alt="">
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less">
  .home_icons {
    display: flex;
    flex-wrap: wrap;
    background-color: #f8f8f8;
    .icon_item {
      width: 20%;
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      img {
        width: 84px;
      }
      p {
        color: #666;
        font-size: 20px;
      }
    }
  }
</style>
