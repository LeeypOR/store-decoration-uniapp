<template>
  <view>
    <u-navbar class="location-class" :background="{background:'#ffffff'}" title-size="36" title-color="#191919" :border-bottom="false" title="指定商品"
              back-icon-color="#191919" :custom-back="backPage"></u-navbar>
    <view class="shop-box u-flex">
      <view class="shop-card" v-for="item in similarList" :key="item.id"
            @click="goTo(`/pagesA/shop/goodsDetail?id=${item.id}`)">
        <image :src="item.goodsPicture"></image>
        <view class="u-line-2 goods-name">{{ item.goodsName }}</view>
        <view class="goods-money">¥{{ switchMoney(item.salePrice) }}</view>
        <view class="goods-money-lineation">¥{{ switchMoney(item.salePrice) }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import goodsCard from "../../components/goodsCard";
export default {
  components:{goodsCard},
  data(){
    return{
      similarList:[],
      activityId:''
    }
  },
  onLoad(options) {
    this.activityId = options?.activityId
    this.getSimilarGoods()
  },
  methods:{
    // 获取相似商品列表
    async getSimilarGoods() {
      let res = await this.$http.specifyGoods({activityId:this.activityId,current: 1, size: 999}, false)
      this.similarList = res?.dataInfo?.records || []
    },
  }
}
</script>

<style lang="scss" scoped>
.box{
  padding: 30rpx;
}
.shop-box{
  padding: 30rpx;
  flex-wrap: wrap;
  justify-content: space-between;
  .shop-card{
    width: 335rpx;
    padding: 20rpx;
    font-size: 24rpx;
    color: #191919;
    border-radius: 14rpx;
    background: #FFFFFF;
    //box-shadow: 0px 2rpx 8rpx 0px rgba(0,0,0,0.1);
    margin-bottom: 20rpx;
    image{
      margin-bottom: 23rpx;
      width: 295rpx;
      height: 295rpx;
    }
    .goods-money{
      margin-top: 10rpx;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
    }
    .goods-name{
      min-height: 62rpx;
    }
    &:nth-of-type(3n+1){
      margin-left: 0;
    }
    .goods-money-lineation{
      text-decoration:line-through;
      margin-top: 10rpx;
      font-size: 26rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
  }
}
</style>