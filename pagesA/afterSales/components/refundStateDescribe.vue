<template>
  <view class="refund-state-describe" v-if="getDescribe.isShow">
    <view class="state-describe-title">{{getDescribe.title}}</view>
    <view class="m-list" v-if="getDescribe.tip" >
      <view class="state-describe-tip"  v-for='(item, index) in getDescribe.tip' :key="index">
        <p>{{item}}</p>
      </view>
    </view>
    <view v-if="state=='REFUND_FINISH'">
      <view class="content u-flex">
          <text class="iconfont icon-refund"></text>
          <text class="content-title">退款总金额</text>
          <text class="content-num">￥{{switchMoney(dataInfo.refundPrice)}}</text>
      </view>
    </view>
  </view>
</template>
<script>
import {refundDetailByType} from '../afterSalesData'
export default {
  props:{
    // 退款类型
    type:{
      type:[String,Number],
      default:''
    },
    // 退款状态
    state:{
      type:String,
      default: ''
    },
    info:{
      type:Object,
      default:{}
    },
    dataInfo:{
      type:Object,
      default:{}
    }
  },
  computed:{
    // 获取描述
    getDescribe(){
      const str = this.state+'-'+this.type
      const obj = refundDetailByType[str]
      if(obj){
        return {
          ...obj,
          isShow:true
        }
      }
      return {isShow:false}
    }
  }
}
</script>

<style lang="scss" scoped>
.refund-state-describe {
  margin-bottom: 20rpx;
  background: #ffffff;
  padding: 0 30rpx 20rpx;
  .state-describe-title {
    padding: 16rpx 0 0;
    font-size: 28rpx;
    font-weight: 600;
    color: #191919;
  }

  .m-list {
    padding-top: 30rpx;
    .state-describe-tip {
      font-size: 24rpx;
      color: #999999;
      font-weight: 400;
      line-height: 40rpx;
    }
  }

  .content{
    padding: 42rpx 0rpx;
    justify-content: space-between;
    .icon-refund{
      color: #EC4545;
      font-size: 28rpx;
    }
    &-title{
      margin-left: 8rpx;
      flex: 1;
      font-size: 28rpx;
      font-weight: 400;
      color: #EC4545;
    }
    &-num{
      font-size: 32rpx;
      font-weight: 600;
      color: #EC4545;
    }
  }
}
</style>