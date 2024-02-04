<template>
    <view class="draw-popup" v-show="show">
      <view class="warp">
        <view class="absolute-center img-box" @click="nowBtn">
          <image class="popup-img" src="/pagesA/static/image/draw-popup.png"></image>
          <view class="title absolute-center">恭喜获得</view>
          <view class="get-num absolute-center">{{count}}次盲盒抽奖机会</view>
          <view class="tip absolute-center">立即参与抽奖吧～</view>
          <view class="now-btn absolute-center">立即抽奖</view>
          <view class="close absolute-center" @click="closePopup"></view>
        </view>
      </view>
    </view>
</template>

<script>
export default {
  props:{
    count:{
      type:Number,
      default:1
    },
    activityId:{
      type:[Number,String],
      default: 0
    }
  },
  data(){
    return {
      show:false
    }
  },
  created(){
    // setTimeout(()=>{
    //   this.show = true
    // },1000)
  },
  methods:{
    nowBtn(){
      this.goTo(`/pagesC/raffle/index?activityId=${this.activityId}`,false,true)
    },
    closePopup(){
      this.show = false
    },
  }
}
</script>

<style lang="scss" scoped>

.draw-popup{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0,0,0,0.49);
  transition: all 0.3s ease-in-out;
  z-index: 10086;
  .warp{
    position: relative;
    width: 100vw;
    height: 100%;
    .img-box{
      transform:translateX(-50%)  translateY(-50%);
      .popup-img{
        width: 630rpx;
        height: 680rpx;
      }
      .title{
        top: 16rpx;
        font-size: 34rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #191919;
      }
      .get-num{
        width: 100%;
        top: 126rpx;
        font-size: 60rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #191919;
      }
      .tip{
        top: 211rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #191919;
      }
      .now-btn{
        top: 438rpx;
        font-size: 34rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #191919;
      }
      .close{
        width: 68rpx;
        height: 68rpx;
        top: 100%;
        transform:translatey(-100%) translateX(-50%);
      }
    }
  }
}
.absolute-center{
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translatey(0%) translateX(-50%);
}

</style>