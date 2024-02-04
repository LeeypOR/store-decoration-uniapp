<template>
  <view class="g-business">
    <view class="business-list u-flex" v-for="item in 3">
      <image src="../../static/image/search.png"></image>
      <text>2元3GB加油包(权益汇</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "business"
}
</script>

<style scoped lang="scss">
.g-business{
  .business-list{
    padding: 16rpx 27rpx;
    image{
      margin-right: 16rpx;
      width: 64rpx;
      height: 64rpx;
      border-radius: 50%;
    }
    text{
      font-size: 28rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #272829;
    }
  }
}
</style>