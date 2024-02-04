<template>
  <view class="my-wallet">
    <u-navbar :border-bottom="false" title="我的钱包" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
    <view class="head-card">
      <view class="card-title">可提现金额（CNY）</view>
      <view class="card-center u-flex">
        <text class="money-number">0.00</text>
        <view class="go-withdraw u-flex">
          去提现
          <image class="left-icon" src="@/static/image/mine/left_icon_white.png"></image>
        </view>
      </view>
      <view class="card-bottom u-flex">
        <view class="u-flex-1 card-bottom-left">
          <view>返利金额</view>
          <view class="u-m-t-6">0.00 ￥</view>
        </view>
        <view class="u-flex-1 card-bottom-right">
          <view>返利金额</view>
          <view class="u-m-t-6">0.00 ￥</view>
        </view>
      </view>
    </view>
    <themplate v-if="false">
      <view class="title">2021年4月</view>
      <view class="record-list u-flex" v-for="item in 5">
        <image src="@/static/image/mine/share_rebate.png"></image>
        <view class="u-flex u-flex-1 item-right">
          <view>
            <view class='item-right-title'>分享返利</view>
            <view class="item-right-text">19853124579</view>
          </view>
          <view class="u-text-right">
            <view class="item-right-num">+ 5.00</view>
            <view class="item-right-text">2021.04.06 11:05</view>
          </view>
        </view>
      </view>
    </themplate>
    <no-data></no-data>
  </view>
</template>

<script>
import NoData from "../../components/noData";
export default {
  components: {NoData},
  data(){
    return {
      title:"我的钱包"
    }
  }
}
</script>
<style>
 page{
   background-color: #ffffff;
 }
</style>
<style scoped lang="scss">
.my-wallet{
  padding: 30rpx;
  .head-card{
    color: #FFFFFF;
    font-weight: 400;
    padding: 30rpx;
    background: linear-gradient(90deg, #F9A447 0%, #EED38A 100%);
    border-radius: 14rpx;
    .card-title{
      font-size: 28rpx;
    }
    .card-center{
      justify-content: space-between;
      .money-number{
        font-size: 88rpx;
        font-weight: 600;
        line-height: 110rpx;
      }
      .go-withdraw{
        font-size: 24rpx;
        .left-icon{
          margin-left: 10rpx;
          width: 12rpx;
          height: 20rpx;
        }
      }
    }
    .card-bottom{
       margin-top: 30rpx;
       font-size: 28rpx;
      .card-bottom-left{
        margin-right: 30rpx;
        border-right: 2rpx solid rgba(255, 255, 255,.6)
      }
    }
  }

  .title{
    margin-top: 40rpx;
    margin-bottom: 21rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: #191919;
  }
  .record-list{
      image{
        width: 76rpx;
        height: 76rpx;
        border-radius: 50%;
      }
    .item-right{
      padding: 29rpx 0;
      margin-left: 20rpx;
      border-top: 1px solid rgba(230,230,230,0.4);
      justify-content: space-between;
      .item-right-title{
        font-size: 28rpx;
        font-weight: 400;
        color: #191919;
      }
      .item-right-text{
        margin-top: 8rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
      }
      .item-right-num{
        font-size: 32rpx;
        font-weight: 600;
        color: #FF9D32;
      }
    }
    &:nth-last-child(1) .item-right{
      border-bottom: 1px solid rgba(230,230,230,0.4);
    }
  }
}
</style>