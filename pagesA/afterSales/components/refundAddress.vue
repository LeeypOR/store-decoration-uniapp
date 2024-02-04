<template>
  <view class="g-refund-address u-flex" v-if="addressInfo.provinceName && isShow">
      <image src="../../static/image/icon_refund_address_3x.png"></image>
      <view class="u-flex-1 address-info">
          <view class="top-content">
              <text class="title">收货人：{{addressInfo.goodsUserName || ''}}</text>
              <text class="phone">{{addressInfo.merchantsPhone || ''}}</text>
          </view>
          <view class="address">{{addressInfo.provinceName || ''}} {{addressInfo.cityName || ''}} {{addressInfo.districtName || ''}} {{addressInfo.goodsAddr || ''}}</view>
      </view>
  </view>
</template>

<script>
export default {
  name: "address",
  props:{
    addressInfo:{
      type:Object,
      default:null
    },
    repairsType:{
      type:[String,Number],
      default:0
    },
    state:{
      type:String,
      default:''
    },
  },
  computed:{
    // 是否显示
    isShow(){
      if(this.repairsType == 3){
        if(['APPROVE_AUDIT','BUYER_SEND_BACK','RECEIVED_GOODS','AGAIN_DELIVER_GOODS'].includes(this.state)){
          return true
        }
        return  false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.g-refund-address {
  padding: 30rpx  70rpx  30rpx  30rpx;
  background: #ffffff;
  margin-bottom: 20rpx;
  image {
    width: 68rpx;
    height: 68rpx;
    margin-right: 30rpx;
  }

  .address-info {
    .top-content {
      .title {
        font-size: 28rpx;
        color: #191919;
        font-weight: 400;
      }
      .phone {
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #666666;
        font-weight: 400;
      }
    }
    .address{
      margin-top: 8rpx;
      font-size: 24rpx;
      color: #666666;
      font-weight: 400;
      line-height: 36rpx;
    }
  }
}
</style>