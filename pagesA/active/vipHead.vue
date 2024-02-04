<template>
  <view class="vip-head u-flex">
    <text class="unit">￥</text>
    <text class="vip-price" v-if="specGoodsInfo.membersPrice">{{switchMoney(specGoodsInfo.membersPrice)}}</text>
    <image class="vip-img" src="/pagesA/static/image/active/icon_vip.png"></image>
    <image src="/pagesA/static/image/active/vip_bg.png" class="vip-bg"></image>
  </view>
</template>

<script>
export default {
  props:{
    specGoodsInfo:{
      type:Object,
      default:()=>{}
    },
	loading:{
		type:Boolean,
		default:true
	},
  }
}
</script>

<style lang="scss" scoped>
.vip-head{
  position: relative;
  padding: 20rpx;
  .unit{
    font-size: 32rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
  }
  .vip-price{
    font-size: 44rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
  }
  .vip-img{
    transform:translateY(4rpx);
    width: 127rpx;
    height: 30rpx;
    margin-left: 10rpx;
  }
  .vip-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>