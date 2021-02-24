<template>
  <scroll class="content_scroll" :data="listData">
    <div class="content">
      <div class="content_list_box" v-for="item in listData" :key="item.id">
        <div class="title">{{item.title}}</div>
        <div class="content_list">
          <div class="content_item" v-for="citem in item.list" :key="citem.id">
            <img :src="citem.path" alt="">
            <p>{{citem.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/Scroll/Scroll'
export default {
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: { Scroll }

}
</script>

<style lang="less">
  .content_scroll {
    flex: 1;
    overflow: hidden;
    background-color: #fff;
    .content {
      .content_list_box {
        .title {
          font-size: 20px;
          color: #000;
          font-weight: 700;
          height: 50px;
          line-height: 50px;
          padding-left: 40px;
        }
        .content_list {
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 30px;
          .content_item {
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0 ;
            img {
              width: 126px;
              height: 126px;
            }
            p {
              font-size: 20px;
              width: 100%;
              text-align: center;
               overflow: hidden;/*超出部分隐藏*/ white-space: nowrap;/*禁止换行*/ text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
</style>
