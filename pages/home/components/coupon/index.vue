<template>
  <view class="coupon-wrapper" :class="{'four':dataInfo.listStyle == 3,'u-row-center':shopList.length<=2,'one':dataInfo.listStyle == 0,'three':dataInfo.listStyle == 2}">
      <view class="coupon-item" v-for="(item,index) in shopList" :key="index" :class="getClass" v-if="showCoupon(item)">
        <view>
          <image mode="aspectFill" :src="dataInfo.cardType=='2'?dataInfo.imgUrl:`/static/image/coupon/coupon-${dataInfo.listStyle}-${dataInfo.cardStyle}-${dataInfo.color}.png`"
                 :class="getClass">
          </image>
          <view class="u-flex" :class="[dataInfo.listStyle==2?'partition-three':'partition',dataInfo.listStyle=='0'?'one':'']" v-if="dataInfo.cardType=='2'">
              <text class="partition-top partition-three-top"></text>
              <text class="partition-line partition-three-line u-flex-1"></text>
              <text class="partition-bottom partition-three-bottom"></text>
          </view>
        </view>
        <view class="coupon-contain" :class="[{three:dataInfo.listStyle==2,one:dataInfo.listStyle==0}]">
            <view class="coupon-left" :class="getClass">
                <view class="coupon-price" :class="getZoom">{{getCouponAmount(item)}}</view>
                <view class="coupon-info">
                    <text class="info-name" :class="getZoom" v-if="getInfoName">{{item.couponName}}</text>
                    <view class="date" :class="getZoom" v-if="dataInfo.fullReduce">{{getCouponMoney(item)}}</view>
                    <text class="sale" :class="getZoom" v-if="getSale">{{getCouponTitle(item)}}</text>
                </view>
            </view>
            <view class="useCoupon u-flex" :class="[getClass,getZoomLeft]" @click="getCoupon(item)">{{item.isGetCoupon?'已领取':'领取'}}</view>
        </view>
        <view class="rule-box" @click="clickRule(item)" v-if="dataInfo.regulation && dataInfo.listStyle=='0'">
          <view class="u-flex u-row-between rule-title">
            使用规则
            <text class="iconfont icon-app_icon_xiala"></text>
          </view>
          <view v-if="item.isShowRule">
            <view class="rule-name">{{item.couponDesc}}</view>
<!--            <view class="rule-name">2、到店任意消费即可兑换使用</view>-->
         </view>
        </view>
      </view>
  </view>
</template>

<script>
import mixin from '../../mixin.js'
export default {
  mixins:[mixin],
	props:{
	  dataInfo:{
      moduleName:'优惠券组件',
      type:Object,
	    default:null
	  },
	},
  data() {
    return {}
  },
  computed: {
    // 获取优惠卷金额
    getCouponAmount(){
      return (obj={})=>{
        if(obj.couponAmount<0){
          return `${obj.discountRatio}折券`
        }
        return '￥'+obj.couponAmount
      }
    },
    getCouponMoney() {
      return (obj = {}) => {
        if (obj.couponAmount < 0) {
          if(obj.mostDiscount<=0){
            return '无门槛'
          }
          return `最多优惠${obj.mostDiscount}元`
        }
        if (obj.couponFullMoney != '-1') {
          return `满${obj.couponFullMoney}减${obj.couponAmount}`
        }
        if(obj.couponFullMoney =='-1'){
           return '无门槛'
        }
      }
    },
    // 获取优惠券名称
    getCouponTitle(){
      return (obj={})=>{
        let type = obj?.useTimeType || 0
        if(type == 1){
          return `有效期至${obj?.useEndTime?.substring(0,10)}`
        }
        if(type == 2){
          return `领取${obj?.receiveDaysAble}天内有效`
        }
        if(type == 3){
          return `永久有效`
        }
        return obj?.receiveDaysAble?`领取${obj?.receiveDaysAble}后天可用`:`有效期至${obj?.useEndTime?.substring(0,10)}`
      }
    },
    showCoupon(){
      return (item)=>{
        const invalid = this.dataInfo?.invalid || false
        if(!invalid){
          return true
        }
        if(item?.couponStatus == 0){
          return true
        }
        return false
      }
    },
    getZoomLeft(){
      if(!this.isZoom){
        return
      }
      if(this.dataInfo.listStyle =='1'){
        return 'page-zoom-width'
      }
    },
    getZoom(){
      if(this.isZoom && this.dataInfo.listStyle =='0'){
        return 'page-zoom-one'
      }
      if(this.isZoom && this.dataInfo.listStyle =='3'){
        return 'page-zoom-four'
      }
      if(this.isZoom){
        return "page-zoom"
      }
    },
    getInfoName(){
      if(this.dataInfo.listStyle !=='0'){
        return false
      }
      if(this.dataInfo.name){
        return true
      }
      return false
    },
    getSale(){
      if(this.dataInfo.listStyle =='2'){
        return false
      }
      if(this.dataInfo.deadline){
        return true
      }
      return false
    },
    shopList() {
      return this.dataInfo.shopList
    },
    getImage(){
      if(this.dataInfo.cardType == '1'){
         return `/../../../static/image/coupon/coupon-${this.dataInfo.listStyle}-${this.dataInfo.cardStyle}-${this.dataInfo.color}.png`
      }
      return '@/static/image/coupon/coupon-0-1-1.png'
    },
    getClass(){
      if(this.dataInfo.listStyle == 0){
        return 'one'
      }
      if(this.dataInfo.listStyle == 1){
        return 'two'
      }
      if(this.dataInfo.listStyle == 2){
        return 'three'
      }
      if(this.dataInfo.listStyle == 3){
        return 'two four'
      }
    }
  },
  methods:{
    clickRule(item){
      item.isShowRule = !item.isShowRule
      this.dataInfo = {...this.dataInfo}
    },
    // 领取优惠券
    async getCoupon(item = {}) {
      if (!item.id || item.isGetCoupon) {
        return
      }
      await this.$http.receiveCoupons({couponId: item.id, receiveType: item.couponOwnWay})
      this.$toast('领取成功')
      item.isGetCoupon = true
      this.dataInfo = {...this.dataInfo}
    },
  }
}
</script>

<style lang="scss" scoped>
.coupon-wrapper{
  padding: 0 20rpx;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  //position: relative;
  background-color: #f8f8f8;
  //z-index: 0;
  &.four{
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;  /* 超出内容不可见 */
    white-space: nowrap;  /* 不换行 */
  }
  &.one{
    display: block;
  }
  &.three{
    &::after{
      content: '';
      width: 30vw;
    }
  }

}
.coupon-item{
    margin-bottom: 20rpx;
    position: relative;
    //overflow: hidden;
    border-radius: 10rpx;
    display: inline-block;
    &.one{
        width: 100%;
        //height: 190rpx;
    }
    &.two{
        width: 49%;
        height: 190rpx;
    }
    &.three{
        width: 31%;
        height: 246rpx;
    }
   &.four{
      width: 60%;
      height: 160rpx;
      margin-right: 20rpx;
     &:nth-last-of-type(1){
       margin-right: 0;
     }
    }
    image{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &.one{
        height: 190rpx;
      }
    }
}
.coupon-contain{
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  font-size: 32rpx;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  //padding: 0 26rpx 0 24rpx;
  &.three{
    flex-direction: column;
  }
  &.one{
    height: 190rpx;
  }
}
.coupon-left {
  display: flex;
  align-items: center;
  height: 100%;
  width: 70%;
  margin-left: 60rpx;
  &.two{
    margin-left: 30rpx;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    .coupon-info {
      margin-left: 0;
      font-size: 24rpx;
      .info-name {
        font-size: 28rpx;
      }
    }
  }
  &.three{
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 30rpx;
    margin-left: 0;
    .coupon-info{
      margin-left: 0rpx;
      text-align: center;
    }
  }
  .coupon-info {
    font-size: 24rpx;
    margin-left: 60rpx;
    .info-name {
      font-size: 28rpx;
    }
  }
}

.useCoupon {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  &.two{
    width: 14%;
  }
  &.four{
    width: 30%;
  }
  &.three{
    transform: translateY(10rpx);
    width: 100%;
  }
}
// 优惠券上的分割
.partition{
  position: absolute;
  top: 0;
  right: 30%;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &.one{
    height: 190rpx;
  }
  &-three{
    position: absolute;
    bottom:30%;
    flex-direction: row;
    width: 100%;
    bottom: 30%;
    .partition-three-top {
      width: 16rpx!important;
      height: 32rpx!important;
      border-radius: 0 32rpx 32rpx 0!important;
    }
    .partition-three-line{
      width: 100%;
      height: 4rpx;
      border-left: none;
      border-top: 1rpx dashed #fff;
    }
    .partition-three-bottom {
      width: 16rpx!important;
      height: 32rpx!important;
      border-radius: 32rpx 0  0 32rpx!important;
    }
  }
  &-top {
    display: inline-block;
    background: #fff;
    width: 32rpx;
    height: 16rpx;
    border-radius: 0 0 32rpx 32rpx;
  }
  &-line{
    display: block;
    width: 4rpx;
    border-left: 1rpx dashed #fff;
    margin: 0 auto;
  }
  &-bottom {
    display: inline-block;
    background: #fff;
    width: 32rpx;
    height: 16rpx;
    border-radius: 32rpx 32rpx 0 0;
  }
}
.u-row-center{
  justify-content: space-around!important;
}

.rule-box{
  position: relative;
  z-index: 10;
  background-color: #ffffff;
  padding: 20rpx 30rpx 26rpx;
  border-radius: 0 0 14rpx 14rpx;
  .rule-title{
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    .icon-app_icon_xiala{
      font-size: 22rpx;
      color: #666666;
    }
  }
  .rule-name{
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    margin-top: 8rpx;
    &:nth-of-type(1){
      margin-top: 18rpx;
    }
  }
}
.page-zoom{
  font-size: 24rpx!important;
  &-one{
    font-size: 22rpx!important;
    margin-left: -40rpx!important;
  }
  &-four{
    font-size: 24rpx!important;
    margin-left: -20rpx!important;
  }
}
.page-zoom-width{
  width: 18% !important;
}
</style>
