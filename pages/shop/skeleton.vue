<template>
  <view>
    <view class="shop-content">
      <view v-for="item in 3" :key="item">
        <view class="head u-flex">
          <view class="title"></view>
          <view class="desc"></view>
        </view>
        <view class="wrap">
          <view class="wrap-left">
            <view class="radio"> </view>
          </view>
          <view class="wrap-right">
            <view class="square"></view>
            <view class="content">
              <view class="line-1 line"></view>
              <view class="line-2 line"></view>
              <view class="line-1 line"></view>
            </view>
          </view>
        </view>
      </view>
    </view> 
    <view class="goods-wrap">
      <view class="head">
        <view class="head-left"></view>
        <view class="head-right"></view>
      </view>
      <view class="goods-content">
          <view class="square" v-for="item in 7" :key="item"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
    props: {

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
  .shop-content{
    background: #ffffff;
    .head{
      width: 100%;
      height: 60rpx;
      padding-left: 112rpx;
      .title{
        width: 120rpx;
        height: 26rpx;
        opacity: 0.15;
        background: #D1B085;
        border-radius: 13rpx
      }
      .desc{
        width: 240rpx;
        height: 26rpx;
        background: #F5F5F5;
        border-radius: 13rpx;
        margin-left: 44rpx;
      }
    }
    .wrap{
      width: 100%;
      height: 222rpx;
      background: #FFFFFF;
      display: flex;
      .wrap-left{
        width: 112rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        .radio{
          width: 34rpx;
          height: 34rpx;
          background: #F5F5F5;
          border-radius: 50%;
        }
      }
      .wrap-right{
        flex:1;
        display: flex;
        
        .square{
          width: 160rpx;
          height: 160rpx;
          background: #F5F5F5;
          border-radius: 13rpx;
          margin-top: 10rpx;
        }
        .content{
          margin-left: 30rpx;
          .line{
            background: #F5F5F5;
            border-radius: 13rpx;
            height: 26rpx;
            &-1{
              width: 120rpx;
              margin-top: 30rpx;
            }
            &-2{
              width: 300rpx;
              margin-top: 20rpx;
            }
          }
        }
      }
      
    }
  }
  .goods-wrap{
    background: #ffffff;
    margin-top: 20rpx;
    .head{
      padding: 25rpx 30rpx 39rpx;
      display: flex;
      justify-content: space-between;
      .head-left{
        width: 120rpx;
        height: 26rpx;
        background: #F5F5F5;
        border-radius: 13rpx;
      }
      .head-right{
        width: 160rpx;
        height: 26rpx;
        background: #F5F5F5;
        border-radius: 13rpx;
      }
    }
    .goods-content{
      padding: 0 38rpx;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .square{
        width: 320rpx;
        height: 320rpx;
        background: #F5F5F5;
        border-radius: 14rpx 14rpx 0px 0px;
        margin-bottom: 20rpx;
      }
    }
  }
</style>
