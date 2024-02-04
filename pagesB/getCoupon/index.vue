<template>
  <view>
    <u-navbar z-index="999999" class="location-class" :border-bottom="false" title="领取优惠券" title-bold
              title-color="#191919" title-size="36"
              back-icon-color="#000000" :custom-back="backPage"></u-navbar>
    <view class="coupon-card" v-if="couponsList.length>0">
      <view class="content">
        <view class="wrap" v-for="(item,index) in couponsList" :key="index">
          <view :class="getClass">
            <view class="item-left">
              <view v-if="item.couponType==2" :class="current==0?'price':'price-no'">
                <view>
                  <text class="u-font-30">{{item.discountRatio}}折券</text>
                  <text v-if="item.mostDiscount!=-1" class="discount-price">最多优惠{{item.mostDiscount}}</text>
                </view>
              </view>
              <view v-else :class="current==0?'price':'price-no'">
                <view>
                  <text class="u-font-30">￥</text>
                  <text class="discount-price">{{(item.couponAmount)}}</text>
                </view>
              </view>
              <view class="info">
                <view class="name">{{strSplit(item.couponName,9)}}</view>
                  <view v-if="receiveStatus == '1'" class="endTime">有效期至{{item.useEndTime.substring(0,10)}}</view>
                <view v-else class="endTime">{{item.receiveDaysAble?`领取${item.receiveDaysAble}后天可用`:`有效期至${item.useEndTime.substring(0,10)}`}}</view>
                <view :class="current==0?'coupon-rules':'coupon-rules-no'" v-if="item.couponFullMoney !=-1">满{{item.couponFullMoney}}可用</view>
                <view :class="current==0?'coupon-rules':'coupon-rules-no'" v-else>无门槛</view>
              </view>
            </view>
            <view @click="$u.throttle(receiveCoupons, 2000)" class="item-right">
              <view class="used">已领取 X{{receivedAmount}}
                <view class="residue">还可以领取{{item.couponLimit - receivedAmount}}张</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="go-use" @click="goUse">
        <view class="use-btn">去使用</view>
      </view>
    </view>

    <view class="recommend-box" v-if="similarList.length>0">
      <view class="box-title">相似推荐</view>
      <view class="u-flex goods-list">
        <goodsCard :detail="item" v-for="item in similarList" wrapWidth="320"></goodsCard>
      </view>
    </view>
  </view>
</template>

<script>
import goodsCard from "../../components/goodsCard";
export default {
    components:{
        goodsCard
    },
    data(){
        return {
            similarList:[],                // 相似推荐商品列表
            couponsList:[],                // 优惠券列表  长度1
            couponId:'',                   // 优惠券id
            receivedAmount:0               // 已领取优惠券的个数
        }
    },
    onLoad(option){
        this.couponId = option?.scene || ''
        this.getSimilarGoods()
        this.getCouponByIds()
    },
    computed:{
        getClass(){
            return `card-item bg0`
        }
    },
    methods:{
        goUse(){
            if(!this.receivedAmount){
                this.$toast('你还没有领取优惠卷')
                return
            }
            this.goTo('/pages/category/index',true,false)
        },
        // 获取相似商品列表
        async getSimilarGoods() {
            let buyerType =''
            if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){
                buyerType = this.$globleData?.buyType || ''
            }
            let res = await this.$http.goodsList({current: 1, size: 8, buyerType}, false)
            this.similarList = res?.dataInfo?.records || []
        },
        // 获取优惠券列表
        async getCouponByIds() {
            let res = await this.$http.getCouponByIds({couponId: this.couponId,receiveType:0}, false)
            this.receivedAmount = res?.dataInfo?.receivedAmount || 0
            this.couponsList.push(res?.dataInfo || '')
        },
        // 领取优惠券
        async receiveCoupons(){
            const limit = this.couponsList[0].couponLimit - this.receivedAmount
            if(limit == 0){
                this.toast('优惠券已领完')
                return
            }
            let res = await this.$http.receiveCoupons({couponId: this.couponId,receiveType:0}, true)
            this.receivedAmount = this.receivedAmount + 1
            this.$toast('领取成功')
        }
    }
}
</script>

<style lang="scss" scoped>
.coupon-card{
  padding: 40rpx 30rpx;
  background: #ffffff;
}
.recommend-box{
  margin-top: 20rpx;
  padding: 0 40rpx;
  background: #ffffff;
  .box-title{
    padding: 26rpx 0rpx;
    text-align: center;

    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 400;
  }
  .goods-list{
    justify-content: space-between;
    margin-bottom: 30rpx;
    flex-wrap: wrap;
  }
}

.content {
  //padding: 30rpx;
  height: 100%;
  //background-color: #f8f8f8;
  //margin-top: 194rpx;
  flex: 1;
  overflow-y: scroll;

  .wrap {
    margin-bottom: 20rpx;

    .card-item {
      background: #FFFFFF;
      background-size: 100% 100%;
      width: 690rpx;
      height: 190rpx;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &.bg0 {
        background-image: url('../../static/image/mine/app_list_youhuiquan_weishiyong.png');
      }

      &.bg1 {
        background-image: url('../../static/image/mine/app_list_youhuiquan_used.png');
      }
      .item-left {
        width: 482rpx;
        display: flex;
        height: 100%;

        .price {
          width: 196rpx;
          padding: 0 10rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ECDBA9;
          font-size: 36rpx;
          font-weight: 500;
        }

        .price-no {
          width: 187rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 36rpx;
          font-weight: 500;
          color: #FFFFFF;
        }

        .discount-price {
          font-size: 38rpx;
          margin-left: 2rpx;
        }

        .info {
          flex: 1;

          .name {
            font-size: 28rpx;
            margin: 30rpx 0 10rpx 0;
            font-weight: 600;
            color: #FFFFFF;
          }

          .endTime {
            font-size: 24rpx;
            color: #FFFFFF;
            margin: 0 0 16rpx 0;

          }

          .coupon-rules {
            font-size: 22rpx;
            color: #ECDBA9;
          }

          .coupon-rules-no {
            font-size: 22rpx;
            color: #FFFFFF;
          }
        }
      }

      .item-right {
        width: 208rpx;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .use {
          font-size: 28rpx;
          font-weight: 500;
          color: #2A2D4C;
        }

        .used {
          text-align: center;
          font-size: 26rpx;
          font-weight: 500;
          color: #2A2D4C;
          .residue{
            margin-top: 6rpx;
            font-size: 22rpx;
            color: #2A2D4C;
          }
        }
      }
    }

    .flod {
      width: 690rpx;
      background: #FFFFFF;
      border-radius: 0px 0px 14rpx 14rpx;

      .title {
        display: flex;
        justify-content: space-between;
        padding: 18rpx 30rpx;

        .title-left {
          font-size: 24rpx;
          color: #666666;
        }

        .title-right {

          .icon-app_icon_xiala,
          .icon-app_icon_shouhui {
            width: 24px;
            height: 14px;
            color: #CCCCCC;
            font-size: 28rpx;
          }
        }
      }

      .flod-content {
        padding: 0 30rpx 20rpx 30rpx;
        .message {
          font-size: 22rpx;
          color: #666666;
          margin-bottom: 10rpx;
        }
        .explain{
          font-size: 24rpx;
          color: #191919;
        }
      }

    }
  }
}
//
.go-use{
  padding: 14rpx 100rpx;
  .use-btn{
    padding: 15rpx 0;
    background: #E8B759;
    border-radius: 45rpx;

    font-family: PingFangSC-Semibold;
    font-size: 28rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
  }
}
</style>