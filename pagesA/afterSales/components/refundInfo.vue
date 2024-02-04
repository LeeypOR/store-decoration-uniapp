<template>
  <view class="g-refund-info">
    <view class="refund-card">退款信息</view>
    <view class="refund-item u-flex" @click="setShowCausePopup(true)">
        <view class="item-left">
            <text>退款原因</text>
            <text class="iconfont icon-required"></text>
        </view>
        <view class="item-right u-flex">
            <text>请选择</text>
            <text class="iconfont icon-arrow"></text>
        </view>
    </view>
    <view class="refund-item">
      <view class="u-flex item-top">
        <view class="item-left">
          <text>退款原因</text>
          <text class="iconfont icon-required"></text>
        </view>
        <view class="item-right u-flex">
          <text class="refund-num">¥199.00</text>
        </view>
      </view>
      <view class="item-tip">不可修改，最多¥998.00，含发货邮费¥0.00</view>
    </view>
  </view>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations(['setShowCausePopup']),
  }
}
</script>

<style lang="scss" scoped>
.g-refund-info{
  padding: 0rpx 30rpx;
  background: #FFFFFF;
  border-radius: 30rpx;
  .item-top{
    justify-content: space-between;
  }
  .refund-card{
    padding: 16rpx 0;
    font-size: 28rpx;
    color: #191919;
    font-weight: 500;
  }
}
.refund-item {
  border-bottom: 1rpx solid #F8F8F8;
  padding: 30rpx 0rpx;
  justify-content: space-between;
  .item-left {
    font-size: 28rpx;
    color: #191919;
    font-weight: 400;
    .icon-required{
      color: #E1544A;
    }
  }
  .item-right{
    font-size: 24rpx;
    color: #999999;
    font-weight: 400;
    .icon-arrow{
      font-size: 36rpx;
    }
    .refund-num{
      font-size: 32rpx;
      color: #E1544A;
      font-weight: 600;
    }
  }
  .item-tip{
    margin-top: 1rpx;
    font-size: 24rpx;
    color: #999999;
    font-weight: 400;
  }
}
</style>