<template>
  <view class="g-order-info">
    <view class="order-info-title">订单信息</view>
    <view class="order-info-item" >
		<view class="u-flex">
			<text class="item-title">订单编号:</text>
			<text class="item-content">{{detail.orderNo || detail.groupOrderNo}}</text>
			<view class="copy" @click="copy(detail.orderNo || detail.groupOrderNo)"> 复制</view>
		</view>
		<view class="time">
			创建时间:<text class="pub-time">{{detail.orderGoodsList[0].createDate || detail.createDate}}</text>
		</view>
		<!-- 普通订单 -->
		<view v-if="detail.orderStatus!='ORDER_UNPAID' && detail.externalOrderNo" class="time">
			<text  class="item-title">支付编号:</text>
			<text class="item-content">{{detail.externalOrderNo}}</text>
		</view>
		<view v-if="detail.orderStatus!='ORDER_UNPAID' && detail.orderGoodsList[0].orderPayTime" class="time">
			<text  class="item-title">付款时间:</text>
			<text class="item-content">{{detail.orderGoodsList[0].orderPayTime}}</text>
		</view>
		<view v-if="detail.orderStatus!='ORDER_UNPAID' && detail.groupOrderPayTime" class="time">
			<text  class="item-title">付款时间:</text>
			<text class="item-content">{{detail.groupOrderPayTime}}</text>
		</view>
		<view v-if="(detail.orderStatus=='ORDER_UN_RECEIVED'||detail.orderStatus=='ORDER_UN_EVALUATE') && detail.orderGoodsList[0].deliveryTime" class="time">
			<text  class="item-title">发货时间:</text>
			<text class="item-content">{{detail.orderGoodsList[0].deliveryTime}}</text>
		</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "orderInfo",
  props:{
  	detail:{
  		type:Object,
  		default:null
  	}
  },
  data(){
	  return{

	  }
  },
  methods:{
	  copy(val){
		  uni.setClipboardData({
		      data: val,
		      success:  ()=> {

				  this.$toast('复制订单编号成功')
		      }
		  });
	  }
  }
}
</script>

<style lang="scss" scoped>
.g-order-info{
  background: #ffffff;
  margin-top: 20rpx
}
.order-info-title{
  padding: 30rpx;
  font-size: 28rpx;
  color: #191919;
  font-weight: 700;
}
.order-info-item{
  padding: 20rpx 30rpx ;
  font-size: 26rpx;
  color: #191919;
  font-weight: 400;
  .item-title{
      margin-right: 50rpx;
  }
  .copy{
	  //width: 73rpx;
	  //height: 36rpx;
	  //display: flex;
    display: inline-block;
    padding: 4rpx 12rpx;
	  //align-items: center;
	  //justify-content: center;
	  margin: 0 20rpx;
	  font-size: 20rpx;
	  color: #2A2D4C;
	  border: 2rpx solid #999999;
	  border-radius: 4rpx;
    position: relative;
    z-index: 10;
  }
  .time{
	  margin-top: 36rpx;
	  .pub-time{
		  margin-left: 50rpx;
		  font-size: 24rpx;
		  color: #191919;
	  }
  }
}
</style>
