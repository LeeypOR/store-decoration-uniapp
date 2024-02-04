<template>
  <view class="no-data">
    <image  class="no-data-img" :src="getImg"></image>
<!--    <text class="title">{{tip}}</text>-->
<!--     <text class="title">暂无数据</text>-->
<!--    <image class="no-data" src="@/static/image/no_data.png"></image>-->
  </view>
</template>

<script>
const  noCart ='https://jdz.g1999.com/ghs/20210917/8b2abf0db9c948f5975b2848391d19fe.png'         // 购物车
const netWork = 'https://jdz.g1999.com/ghs/20210917/8b2abf0db9c948f5975b2848391d19fe.png'       // 网络请求失败
const noPage = 'https://jdz.g1999.com/ghs/20210917/798d2fe8bb6143109e16b2a3bca3c7ec.png'        // 页面不存在
const noOrder = 'https://jdz.g1999.com/ghs/20210917/2170b94b3591459c980140bc2e6faa3e.png'         // 暂无订单
const noCollect = 'https://jdz.g1999.com/ghs/20210917/1d9d637fbe024a52a95a835451c7fd84.png'       // 暂无收藏
const noSearch = 'https://jdz.g1999.com/ghs/20210917/c04dd3a850f244b88401c5d9ff3026fd.png'       // 搜索
const noAddress = 'https://jdz.g1999.com/ghs/20210917/847f1a2619f04cf6be2bfd671691db2c.png'      // 地址
const noCoupon = 'https://jdz.g1999.com/ghs/20210917/ec9f8bb43300401398fd6e60ca9e43de.png'        // 优惠券
const noData = 'https://jdz.g1999.com/ghs/20210917/cda98d551fa84d078a5c08a485dfde9a.png'                                               //暂无内容
export default {
  props:{
    // 缺省描述
    tip:{
      type:String,
      default:'暂无数据'
    },
    // 缺省类型
    type:{
      type:String,
      default: ''
    }
  },
  data(){
    return {
      imgList:{
        noCart,
        netWork,
        noPage,
        noOrder,
        noCollect,
        noSearch,
        noAddress,
        noCoupon,
        noData,
      }
    }
  },
  computed:{
    getImg(){
      let img = this.imgList[this.type]
      if(!img){
        img = noData
      }
      return img
    }
  }
}
</script>

<style scoped lang="scss">
.no-data{
    top: 0;
    left: 0;
    //position: fixed;
    width: 100%;
    //height: 100vh;
    //display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    //z-index: -1;

  .title{
    font-size: 30rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
  }
  .no-data-img{
     position: absolute;
     width: 380rpx;
     height: 380rpx;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }
}
</style>