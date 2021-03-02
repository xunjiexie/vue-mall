<template>
  <div class="home_guess">
    <img class="guess_title" src="../../assets/imgs/157793128909842388.png" alt="">
    <waterfall :col='2' :data="listData" @loadmore="loadmore">
      <template>
        <div v-for="(item, index) in listData" :key="index" class="guess_item_wrapper">
          <div v-if="!item.isAd" class="guess_item_product">
            <div class="product_img_warapper">
              <img class="product_img" :lazy-src="item.img" alt="">
            </div>
            <div class="product_content">
              <p class="product_title">{{item.title}}</p>
              <div class="product_line2">
                <p v-for="(pitem, pindex) in item.tips" :key="pindex">{{pitem}}</p>
              </div>
              <div class="product_line3">
                <p>¥{{item.price}}</p>
                <p>{{item.evaluationNum}}评价</p>
              </div>
            </div>
          </div>
          <div v-else class="guess_item_ad">
            <img class="ad_img" :lazy-src="item.img" alt="">
            <p class="ad_text ad_text1">{{item.adTips[0]}}</p>
            <p class="ad_text ad_text2">{{item.adTips[1]}}</p>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    loadmore () {
      console.log('loadmore')
    }
  }
}
</script>

<style lang="less">
  .home_guess {
    padding: 20px 0 20px 10px;
    box-sizing: border-box;
    .guess_title {
      width: 100%;
      height: 58px;
      position: relative;
      left: -5px;
    }
    .guess_item_wrapper {
      width: 342px;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom:10px ;
      .guess_item_product {
        width: 100%;
        .product_img_warapper {
          width: 100%;
          height: 342px;
          position: relative;
          overflow: hidden;
          .product_img {
            width: 100%;
            position: absolute;
            bottom: 0;
          }
        }
        .product_content {
          padding: 10px;
          box-sizing: border-box;
          .product_title {
            font-size: 24px;
            color: #000;
            font-weight: 700;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .product_line2 {
            margin: 10px 0;
            display: flex;
            flex-wrap: wrap;
            p {
              font-size: 16px;
              color: #333;
              background-color: #FEFBEE;
              border-radius: 6px;
              border: 1px solid #FFCC00;
              padding: 2px 6px;
              margin-right: 6px;
              box-sizing: border-box;
            }
            p:first-child {
              background-color: #FFCC00;
              border:none;
            }
          }
          .product_line3 {
            margin-top: 10px;
            display: flex;
            p:nth-child(1) {
              font-size: 30px;
              color: #ff4422;
              font-weight: 700;
              margin-right: 10px;
            }
            p:nth-child(2) {
              font-size: 16px;
              color: #999;
            }
          }
        }
      }
      .guess_item_ad {
        width: 100%;
        height: 542px;
        background-image: url('../../assets/imgs/ad1.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        .ad_img {
          width: 296px;
          height: 296px;
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
        }
        .ad_text {
          font-size: 22px;
          color: #333;
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
        }
        .ad_text2 {
          color: #ff7b00;
          bottom: 85px;
        }
      }
    }
  }
</style>
