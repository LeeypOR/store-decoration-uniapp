<template>
  <view :style="{'--bg-color':bgColor}" class="skeleton-animate">
    <view class="head">
      <view class="user u-flex">
        <view class="avtar"></view>
        <view class="name"></view>
      </view>
      <view class="bottom">
        <view class="content  u-p-l-40 u-p-r-20">
          <view class="left"></view>
          <view class="right"></view>
        </view>
        
      </view>
    </view>
    <view class="order">
      <view class="order-item" v-for="item in 5" :key="item">
        <view class="circle"></view>
        <view class="line"></view>
      </view>
    </view>
    <view class="menu" v-for="item in 6" :key="item">
    </view>
  </view>
</template>

<script>
export default {
    props: {
      bgColor:{
        type:String,
        default:'#F5F5F5'
      }
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>
<style scoped lang="scss">
  .skeleton-animate{
    width: 100vw;
    height: 100vh;
    background: #ffffff!important;
  }
  .head{
    width: 100%;
    height: 32.4vh;
    background: $bg-color-f5;
    overflow:hidden;
    position: relative;
    .user{
      margin:156rpx 0 0 60rpx;
      .avtar{
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        background: #fff;
      }
      .name{
        width: 201rpx;
        height: 40rpx;
        margin-left: 38rpx;
        background: #FFFFFF;
        border-radius: 14rpx;
      }
     
    }
    .bottom{
      width: 690rpx;
      height: 140rpx;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      background: $bg-color-fa;
      border-radius: 20rpx;
      .content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .left{
        width: 201rpx;
        height: 40rpx;
        background: #FFFFFF;
        border-radius: 14rpx;
        margin: 30rpx 0 0 0;
        }
        .right{
          width: 160rpx;
          height: 60rpx;
          background: #FFFFFF;
          border-radius: 30rpx;
          margin-top: 40rpx;
        }
      }
    }
    
  }
  .order{
    width: 710rpx;
    height: 270rpx;
    margin: 40rpx 20rpx 0 20rpx;
    background: $bg-color-fa;
    border-radius: 14rpx;
    padding: 70rpx 80rpx 64rpx 80rpx;
    display: flex;
    .order-item{
      margin-right: 63rpx;
      .circle{
        width: 90rpx;
        height: 90rpx;
        border-radius: 50%;
        background: #FFFFFF;
      }
      .line{
        margin-top: 20rpx;
        width: 90rpx;
        height: 26rpx;
        background: #FFFFFF;
        border-radius: 13rpx;
      }
    }
  }
  .menu{
    width: 530rpx;
    height: 40rpx;
    margin-top: 60rpx;
    margin-left: 30rpx;
    background: $bg-color-fa;
    border-radius: 14rpx;
  }
</style>
