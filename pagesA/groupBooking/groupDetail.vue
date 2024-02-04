<template>
  <view class="group-detail" v-if="groupInfo">
    <view class="u-flex group-info">
        <view class="left">
          <view class="left-top">
            <text class="buy-price" v-if="groupInfo.type == 1">￥{{switchMoney(groupInfo.groupPrice)}}</text>
            <text class="buy-price" v-else>￥{{switchMoney(groupInfo.groupPrice)}}</text>
            <text class="original-price">￥{{salePrice}}</text>
          </view>
          <view class="left-bottom">
            <text class="tip">已成交{{groupInfo.completeNum}}件</text>
            <text class="label">人多更优惠</text>
          </view>
        </view>
        <view class="right">
            <view class="right-top">
              <image src="/pagesA/static/image/icon_clock.png"></image>
              <text>距{{isOpenGroup}}仅剩</text>
            </view>
            <view class="right-bottom" v-if="isOpenGroup=='活动结束'">{{timeObj['groupTime'] || downTime(groupInfo.countDownEndTime,'groupTime')}}</view>
            <view class="right-bottom" v-if="isOpenGroup=='活动开始'">{{timeObj['groupTime'] || downTime(groupInfo.countDownStartTime,'groupTime')}}</view>
        </view>
      <image class="bg-group" src="/pagesA/static/image/group_bg.png"></image>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    // 拼团相关信息
    groupInfo:{
      type:Object,
      default:null
    },
    // 优惠券列表
    couponsList:{
      type:Array,
      default:[]
    },
    // 商品卖点
    goodsInfo:{
      type:Object,
      default:{}
    },
    salePrice:{
      type:[String,Number],
      default:0
    }
  },
  data(){
    return{
      show:false
    }
  },
  computed:{
    // 是否开团
    isOpenGroup(){
      if(this.groupInfo?.alreadyOpenGroup == 1){
        return '活动结束'
      }
      return '活动开始'
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
.group-detail{
  margin-bottom: 20rpx;
  .group-info{
    height: 160rpx;
    position: relative;
    justify-content: space-between;
    padding: 18rpx 30rpx 34rpx;
    box-sizing: border-box;
    .left{
      .left-top{
        .buy-price{
          font-size: 40rpx;
          font-weight: 600;
          color: #FFFFFF;
        }
        .original-price{
          margin-left: 10rpx;
          font-size: 28rpx;
          color: #FFFFFF;
          text-decoration:line-through
        }
      }
      .left-bottom{
        margin-top: 12rpx;
        .tip{
          font-size: 24rpx;
          color: #FFFFFF;
        }
        .label{
          margin-left: 10rpx;
          padding: 6rpx 15rpx;
          background: #FFFFFF;
          border-radius: 21rpx;
          font-size: 22rpx;

          font-weight: 600;
          color: #191919;
        }
      }
    }
    .right{
      margin-top: 10rpx;
      text-align: right;
      .right-top{
        image{
          width: 22rpx;
          height: 22rpx;
        }
        text{
          margin-top: 10rpx;
          margin-left: 8rpx;
          font-size: 26rpx;
          color: #FFFFFF;
        }
      }
      .right-bottom{
        margin-top: 10rpx;
        font-size: 32rpx;
        font-weight: 600;
        color: #FFFFFF;
      }
    }
    .bg-group{
      z-index: -1;
      top: 0;
      left:0;
      width: 100vw;
      position: absolute;
      height: 160rpx;
    }
  }
  .goods-info-card{
    background: #ffffff;
    padding: 0 30rpx;
    .goods-describe{
      padding: 17rpx 0;
      font-size: 32rpx;
      font-weight: 600;
      color: #191919;
      border-bottom: 1px solid #E6E6E6;
    }
    .group-rule{
      padding: 20rpx 0;
      justify-content: space-between;
      .rule-name{
        font-size: 28rpx;
        color: #999999;
      }
    }
  }
}

.serve-box {
  margin-top: 20rpx;
  background: #ffffff;
  position: relative;

  .serve-item {
    justify-content: space-between;
    padding: 10rpx  0rpx;

    .serve-title {
      font-size: 24rpx;
      font-weight: 600;
      color: #191919;
    }

    .serve-tip {
      min-width: 200rpx;
      min-height: 30rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #191919;
    }
    image {
      width: 28rpx;
      height: 28rpx;
    }
    .get-more{
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #E1544A;
      margin-left: 10rpx;
    }
  }
}

// 优惠券标签
.coupon-label {
  display: inline-block;
  padding: 0rpx 20rpx;
  background: #FFE7E7;
  //border: 1rpx solid #D1AB88;
  margin-right: 10rpx;
  border-radius: 4rpx;
  margin-top: 4rpx;
  font-size: 24rpx;
  color: #E1544A;
  line-height: 40rpx;
  height: 40rpx;
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