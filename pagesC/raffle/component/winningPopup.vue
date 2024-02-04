<template>
  <view>
    <u-popup v-model="show" mode="center" :mask-close-able="false">
     <view class="popup-card u-flex">
       <view class="box">
         <image mode="aspectFill" class="box-img" :src="getImg"></image>
         <view class="position-center prize-box" v-if="giftBoxInfo && giftBoxInfo.id">
           <image mode="aspectFill" class="prize-img" :src="getPrizeImg"></image>
           <text class="prize-name position-center" :style="[getColor]">{{giftBoxInfo.prizeName}}</text>
         </view>
       </view>
       <view class='blank-box' @click="clickBlank">
         <image class="blank-img" src="/pagesC/static/raffle/blank.png"></image>
         <text class="position-center title">{{getName}}</text>
       </view>
     </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  props:{
    giftBoxInfo:{
      type:Object,
      default:{}
    }
  },
  data(){
    return {
      show:false,      // 是否显示弹窗
      isWin:true     // 是否中奖
    }
  },
  computed:{
    getImg(){
     const obj = this.giftBoxInfo || {}
      if(obj?.prizeType){
        return obj.winningPrizeImgUrl
      }
      return obj.noWinningImgUrl
    },
    getPrizeImg(){
      const obj = this.giftBoxInfo || {}
      if(obj?.prizeType == 1){
        return obj.couponImgUrl
      }
      if(obj.prizeType == 2){
        return obj.integralImgUrl
      }
      if(obj.prizeType == 3){
        return obj.goodsPicture
      }
    },
    getColor(){
      const obj = this.giftBoxInfo || {}
      if(obj?.prizeType == 1){
        return {color:obj.couponColor}
      }
      if(obj.prizeType == 2){
        return {color:obj.integralColor}
      }
      if(obj.prizeType == 3){
        return {color:obj.winningPrizeColor}
      }
    },
    getName(){
      const obj = this.giftBoxInfo || {}
      if(obj?.prizeType){
        return '收下它'
      }
      return '再来一次'
    },
  },
  methods:{
    clickBlank(){
      this.show = false
      let url =''
      const obj = this.giftBoxInfo || {}
      const type = obj?.prizeType
      if(type == 1 ){
        url = '/pagesA/mine/myCoupon'
      }
      if(type == 2){
        url = '/pagesA/myIntegral/index'
      }
      if(type == 3){
        url = '/pagesA/mine/myGift'
      }
      this.goTo(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-card{
  background: transparent;
  flex-direction: column;
  .box{
    margin-bottom: 40rpx;
    position: relative;

    .prize-box {
      bottom: 60rpx;
      .prize-img {
        width: 210rpx;
        height: 210rpx;
        border-radius: 14rpx;
      }
      .prize-name {
        bottom: -20rpx;
        transform:translateY(50%)  translateX(-50%) !important;
        font-size: 28rpx;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    .box-img{
      width: 662rpx;
      height: 628rpx;
    }
  }
  .blank-box{
    position: relative;
    .blank-img{
      width: 336rpx;
      height: 116rpx;
    }
    .title{
      font-size: 32rpx;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #DD6262;
      line-height: 48rpx;
      top: 45% !important;
      transform:translateY(-50%)  translateX(-50%);
    }
  }
}
.position-center{
  position: absolute;
  left: 50%;
  transform:  translateX(-50%);
  white-space: nowrap;
}
</style>