<template>
  <div class="sidebar">
    <scroll class="scroll_content">
      <div class="sidebar_list">
        <div
        class="sidebar_item"
        v-for="(item, index) in listData"
        :key="index"
        :class="{sidebar_active: index === currentIndex, sidebar_active_prev: index === currentIndex-1, sidebar_active_next: index === currentIndex+1}">
          {{item}}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/Scroll/Scroll'

export default {
  props: {
    listData: {
      type: Array,
      default () {
        return ['热门推荐', '手机数码', '大家电', '电脑办公', '厨卫大电', '生活家电', '食品酒饮', '食品酒饮2', '食品酒饮3', '食品酒饮4', '食品酒饮5', '食品酒饮6', '食品酒饮7']
      }
    }
  },
  data () {
    return {
      currentIndex: 1
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="less">
  .sidebar {
    width: 180px;
    height: 100%;
    background-color: #fff;
    .scroll_content {
      height: 100%;
      .sidebar_list {
        .sidebar_item {
          background-color: #f9f9f9;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #666;
          font-size: 20px;
          &.sidebar_active {
            color: #000;
            font-weight: 700;
            background-color: #fff;
            position: relative;
            &:after {
              content: '';
              position: absolute;
              width: 3px;
              height: 20px;
              background-color: #ffcc00;
              top: 50%;
              left: 10px;
              transform: translateY(-50%);
            }
          }
          &.sidebar_active_prev {
            border-bottom-right-radius: 25px;
          }
          &.sidebar_active_next{
            border-top-right-radius: 25px;
          }
        }
      }
    }
  }
</style>
