<template>
  <view class="vip-skeleton">
     <view class="user">
       <view class="user-avatar"></view>
       <viwe class="name"></viwe>
     </view>
     <view class="vip-content">
       <view class="vip-head"></view>
       <view class="vip-card">
         <view class="card-item" v-for="item in 3" :key="item">
            <view class="circle"></view>
            <view class="line"></view>
         </view>
       </view>
     </view>
     <view class="vip-equity">
       <view class="equity-head"></view>
       <view class="equtiy-content">
         <view class="item" v-for="item in 12" :key="item">
           <view class="cricle"></view>
           <view class="line"></view>
         </view>
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
<style >
  page{
    background: #f8f8f8!important;
  }
</style>
<style scoped lang="scss">
  .vip-skeleton{
    overflow: hidden;
  }
  .user{
    display: flex;
    margin: 156rpx 0 0 56rpx;
    .user-avatar{
      width: 128rpx;
      height: 128rpx;
      border-radius: 50%;
      background: #fff;
    }
    .name{
      width: 201rpx;
      height: 40rpx;
      background: #FFFFFF;
      border-radius: 14rpx;
      margin-left: 34rpx;
    }
  }
  .vip-content{
    width: 630rpx;
    height: 288rpx;
    background: #FFFFFF;
    border-radius: 14rpx;
    margin: 56rpx auto 80rpx;
    overflow: hidden;
    .vip-head{
      width: 296rpx;
      height: 28rpx;
      margin: 30rpx 0 0 42rpx;
      background: #F8F8F8;
      border-radius: 13rpx;
    }
    .vip-card{
      padding: 0 90rpx 58rpx 109rpx;
      display: flex;
      justify-content: space-between;
      margin-top: 56rpx;
      .card-item{
        width: 90rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        .circle{
          width: 70rpx;
          height: 70rpx;
          background: #F8F8F8;
          border-radius: 14rpx;
        }
        .line{
          width: 90rpx;
          height: 26rpx;
          margin-top: 20rpx;
          background: #F8F8F8;
          border-radius: 13rpx;
        }
      }
      
    }
  }
  .vip-equity{
    width: 630rpx;
    // height: 680rpx;
    background: #FFFFFF;
    border-radius: 14rpx;
    margin:80rpx auto;
    overflow: hidden;
    .equity-head{
      width: 274rpx;
      height: 30rpx;
      background: #F8F8F8;
      border-radius: 20rpx;
      margin:40rpx auto 50rpx;
    }
    .equtiy-content{
      display: flex;
      padding: 0 80rpx;
      justify-content: space-between;
      flex-wrap: wrap;
      .item{
        margin-right: 100rpx;
        margin-bottom: 44rpx;
        &:nth-child(3n){
          margin-right: 0;
        }
        .cricle{
          width: 90rpx;
          height: 90rpx;
          background: #F8F8F8;
          border-radius: 50%;
        }
        .line{
          margin-top: 20rpx;
          width: 90rpx;
          height: 26rpx;
          background: #F8F8F8;
          border-radius: 13rpx;
        }
      }
    }
  }
</style>
