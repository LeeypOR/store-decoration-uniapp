<template>
  <view class="refund-item" @click="getAddress">
    <view class="item-left">
      <text>收货地址</text>
      <text class="iconfont icon-required"></text>
    </view>
    <view class="address-box">
      <view class="address-user-info">
        <text>收货人：</text>
        <text>{{getDefaultAddress.userName || ''}}</text>
        <text class="phone">{{getDefaultAddress.userPhone || ''}}</text>
      </view>
      <view class="u-flex address-info">
        <view class="u-flex-1">{{getDefaultAddress.provinceName || ''}} {{getDefaultAddress.cityName || ''}} {{getDefaultAddress.districtName || ''}} {{getDefaultAddress.detailAddress || ''}}</view>
        <text class="iconfont icon-arrow"></text>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['getDefaultAddress'])
  },
  methods:{
    // 获取用户地址
    getAddress(){
      this.goTo('/pagesA/shop/manageAddress')
    }
  }
}
</script>

<style scoped lang="scss">
.address-box{
  .address-user-info{
    margin-top: 20rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #191919;
    .phone{
      margin-left: 20rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
  }
  .address-info{
    margin-top: 8rpx;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 36rpx;
    .icon-arrow{
      font-size: 36rpx;
      color: #999999;
    }
  }
}

.refund-item {
  border-bottom: 2rpx solid #F8F8F8;
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
}
</style>