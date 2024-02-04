<template>
  <view class="select-server-list">
    <view class="title">选择服务类型</view>
    <view class="u-flex content" @click="serverClick">
        <image class="icon-img" src="@/pagesA/static/image/icon_salesreturn.png"></image>
        <view class="type-box u-flex-1">
            <view class="type-name">我要换货</view>
            <view class="type-tip">已收到货，需要更换已收到的货物</view>
        </view>
        <text class="iconfont icon-arrow"></text>
    </view>
    <view class="tip">*除质量问题概不退换，换货前请先联系客服进行换货</view>
  </view>
</template>

<script>
export default {
  methods:{
    // 选择服务
    serverClick(){
      this.$emit('serverReturn')
    }
  }
}
</script>

<style scoped lang="scss">
  .select-server-list{
    background: #ffffff;
    border-radius: 14rpx;
    .title{
      padding: 16rpx 30rpx 30rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
    }
    .content{
      padding: 20rpx 32rpx 0 30rpx;
      .icon-img{
        width: 50rpx;
        height: 50rpx;
        border-radius: 50%;
      }
      .type-box{
        margin-left: 30rpx;
        .type-name{
          font-size: 28rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #191919;
        }
        .type-tip{
          margin-top: 8rpx;
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
    }
    .tip{
      padding: 10rpx 30rpx 20rpx 110rpx;
      font-size: 22rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #EC4545;
    }
  }
  .icon-arrow{
    font-size: 44rpx;
    color:#CCCCCC;
  }
</style>