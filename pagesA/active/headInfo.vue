<template>
  <view class="g-head-info" v-if="specGoodsInfo">
    <view class="active-describe u-flex">
      <view class="left-info u-flex">
          <image :src="`/pagesA/static/image/active/${activeType}-${imgType || 1}.png`"></image>
          <view class="u-flex-1">
            <view class="u-flex">
              <view class="box-icon-name" v-if="getShowName">{{getShowName}}</view>
              <view class="buy-money-box">
                <text class="box-icon">￥</text>
                <text class="box-money">{{switchMoney(seckillGoods.seckillPrice || seckillGoods.discountPrice || '--')}}</text>
                <text class="box-title">起</text>
              </view>
              <view class="residue-num" v-if="!getShowName">仅剩{{seckillGoods.totalRemainStock}}件</view>
            </view>
            <view class="lineation-money">￥{{switchMoney(seckillGoods.salePrice)}}</view>
          </view>
      </view>
      <view class="right-info">
         <view class="time-title">距离{{getName}}仅剩</view>
         <view style="position: absolute;transform: translateX(-999rpx)">{{timeObj[getTime] || downTime(getTime,getTime,'obj')}}</view>
         <view class="time u-flex">
           {{timeObj[getTime].day || 0}}天
           <text class="time-span u-flex">{{timeObj[getTime].hr || 0}}</text>:
           <text class="time-span u-flex">{{timeObj[getTime].min || 0}}</text>:
           <text class="time-span u-flex">{{timeObj[getTime].sec || 0}}</text>
         </view>
      </view>
      <image class="active-bg-img" src="/pagesA/static/image/active_bg.png"></image>
    </view>
  </view>
</template>

<script>
import xsms from '../static/image/icon_xianshimiaosha.png'
export default {
  props:{
    activeType:{
      type:String,
      default:''
    },
    activeInfo:{
      type:Object,
      default:null
    },
    specGoodsInfo:{
      type:Object,
      default:null
    },
    specName:{
      type:String,
      default:''
    },
    couponsList:{
      type:Array,
      default:()=>[]
    }
  },
  computed:{
    seckillGoods(){
      let obj = this?.activeInfo || {}
      if(this.activeType == "MS"){
        return obj?.seckillGoodsResponse || {}
      }
      if(this.activeType == "ZK"){
        return obj?.discountGoodsResponse || {}
      }
      return {}
    },
    imgType(){
      let obj = this?.activeInfo || {}
      if(obj.activityStatu == 0){
        return 0
      }
      return 1
    },
    getShowName(){
      let obj = this?.activeInfo || {}
      if(obj.activityStatu != 2 ){
        if(this.activeType =="MS"){
          return '秒杀价'
        }
        return '折扣价'
      }
      return null
    },
    getName(){
      let obj = this?.activeInfo || {}
      if(obj.activityStatu == 1 ){
         return '活动开始'
      }
      return '活动结束'
    },
    getTime(){
      let obj = this?.activeInfo || ''
      if(!obj){
        return
      }
      if(obj?.activityStatu == 1){
        return new Date(obj.startDate.toString().replace(/-/g,'/')).getTime()/1000
      }
      return new Date(obj.endDate.toString().replace(/-/g,'/')).getTime()/1000
    }
  },

  data(){
    return {
      show:false,
      xsmsImg:xsms,
    }
  },
  methods:{
    getCoupons(){
      this.$emit('getCoupons')
    }
  }
}
</script>

<style lang="scss" scoped>
.g-head-info{
  position: relative;
  .active-describe{
    padding: 12rpx 20rpx 12rpx 20rpx;
    position: relative;
    justify-content: space-between;
    .left-info{
      image{
        width: 76rpx;
        height: 76rpx;
        margin-right: 16rpx;
      }
      .box-icon-name{
        font-size: 32rpx;
        color: #FFFFFF;
      }
      .buy-money-box {
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        .box-icon {
          font-size: 32rpx;
          color: #FFFFFF;
        }
        .box-money {
          font-size: 36rpx;
        }
        .box-title {
          font-size: 32rpx;
        }
      }
      .residue-num{
        margin-left: 16rpx;
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
      }
      .lineation-money{
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        text-decoration:line-through;
        color: #FFFFFF;
      }
    }
    .right-info{
      text-align: right;
      .time-title{
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        margin-bottom: 5rpx;
      }
      .time{
        margin-top: 10rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        .time-span{
          display: inline-block;
          text-align: center;
          width: 40rpx;
          height: 40rpx;
          background-color: #ffffff;
          border-radius: 10rpx;
          margin: 0 10rpx;
          &:last-of-type{
            margin-right: 0;
          }
          font-size: 26rpx;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #191919;
        }
      }
    }
  }
  .shop-info {
    background-color: #ffffff;
    padding: 44rpx 30rpx 23rpx;
    .shop-name {
      font-size: 32rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #191919;
    }
    .shop-specific {
      margin-top: 24rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #999999;
    }
  }
  .active-bg-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

// 规则
.rule-item{
  border-top:1rpx solid #E6E6E6;
  padding: 20rpx 30rpx;
  background-color: #ffffff;
  justify-content: space-between;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  .iconfont{
    color: #999999!important;
  }
}

// 优惠券
.coupon-box{
  margin-top: 20rpx;
  padding:30rpx 30rpx 0;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: flex-start;
  .coupon-name{
    font-size: 24rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    margin-right: 30rpx;
  }
  .coupon-tip{
    margin-right: 20rpx;
    margin-bottom: 30rpx;
    display: inline-block;
    background: rgba(209, 176, 133, 0.3);
    border-radius: 4rpx;
    padding: 4rpx 20rpx;

    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #D1B085;

  }
  image{
    width: 160rpx;
    height: 100rpx;
    transform: translateY(-32%) translateX(30rpx);
  }
}

.popup-box{
  padding: 40rpx 30rpx 30rpx 30rpx;
  width: 100%;
  flex-direction: column;
  height: 56vh;
  overflow: hidden;
  .head{
    font-family: PingFangSC-Medium, PingFang SC;
    font-size: 32rpx;
    font-weight: 500;
    color: #191919;
    padding-bottom: 24rpx;
  }
  .rule-describe{
    font-family: PingFangSC-Regular, PingFang SC;
    overflow-y: scroll;
    font-size: 28rpx;
    color: #191919;
    line-height: 45rpx;
    text-align: justify;
    letter-spacing: 3rpx;
    text-justify:kashida;
  }
}
</style>