<template>
  <view class="g-room-store">
    <view class="title">附近门店</view>
    <view class="u-flex box" v-for="item in 3">
      <image class="img" src="../../static/image/search.png"></image>
      <view class="u-flex-1">
          <view class="name">市中-旗舰店-八一旗舰店</view>
          <view class="tip">济南市八一立交桥移动营业厅</view>
      </view>
      <view class="distance">500km</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "roomStore"
}
</script>

<style scoped lang="scss">
.g-room-store{
  padding: 0 24rpx;
  .title{
    padding: 24rpx 0;
    font-size: 34rpx;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: #272829;
  }
  .box{
    margin-bottom: 42rpx;
    justify-content: space-between;
    .img{
      margin-right: 16rpx;
      width: 95rpx;
      height: 95rpx;
      border-radius: 48rpx;
    }
    .name{
      font-size: 32rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #272829;
    }
    .tip{
      margin-top: 8rpx;
      font-size: 28rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #c0c0c1;
    }
    .distance{
      font-size: 32rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #272829;
    }
  }

}
</style>