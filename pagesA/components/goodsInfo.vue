<template>
	<view class="item-box">
		<view v-if="detail.groupActivityType == 2 && orderType=='group'" class="item-card u-flex">
			<view class="head-text">
				阶段2:
				{{ detail.endPayStatus ==0?'进行中':'已完成'}}
			</view>
		</view>
		<view class="item-card u-flex">
			<text>{{detail.groupActivityType == 2 && orderType=='group'?'商品尾款':'商品金额'}}</text>
			<text>￥{{ goodsPrice }}</text>
		</view>
		<view class="item-card u-flex">
			<text>运费</text>
			<text>￥{{detail.freightPrice?switchMoney(detail.freightPrice):'0'}}</text>
		</view>
		<view v-if="detail.couponAmount || detail.discountPrice" class="item-card u-flex">
			<text>优惠</text>
			<text class="discount">-￥{{switchMoney(detail.couponAmount || detail.discountPrice)}}</text>
		</view>
		<view v-if="detail.priceDiscount " class="item-card u-flex">
			<text>折扣</text>
			<text class="discount">-￥{{switchMoney(detail.priceDiscount )}}</text>
		</view>

		<view class="item-card u-flex">
			<text></text>
			<view class='item-card-total'>
				<text>合计:</text>
				<text>￥{{totalPrice}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			detail: {
				type: Object,
				default: null
			},
			orderType: {
				type: String,
				default: 'common'
			}

		},
		computed: {
			goodsPrice () {
				if (this.orderType == 'common') {
					if(this.detail.paymentWay == 2){ //0.现金 1.现金加积分 2.现金加固定积分 3.纯积分
						return `${this.switchMoney(this.detail?.orderPrice ||'0' )}+${this.detail.integralPrice}积分` 
					}else if(this.detail.paymentWay == 3){
						return `${this.detail.integralPrice}积分` 
					}else{
						return  `${this.switchMoney(this.detail?.orderPrice||'0')}`
					}
				}
				if (this.orderType == 'group') {
					if (this.detail.groupActivityType == 1) { //普通拼团
						return `${this.switchMoney(this.detail.actualAmount)}`
					}

					if (this.detail.groupActivityType == 2) { //规则拼团
						return `${this.switchMoney(this.detail.lastGroupPrice)}`
					}

				}


			},
			totalPrice () {
				if (this.orderType == 'common') {
					if(this.detail.paymentWay == 2){ //0.现金 1.现金加积分 2.现金加固定积分 3.纯积分
						return `${this.switchMoney(this.detail?.orderActualPrice || 0 )}+${this.detail.integralPrice}积分` 
					}else if(this.detail.paymentWay == 3){
						return `${this.detail.integralPrice}积分` 
					}else{
						return  `${this.switchMoney(this.detail?.orderActualPrice||0)}`
					}
					
				}
				if (this.orderType == 'group') {
					if (this.detail.groupActivityType == 1) { //普通拼团
						return `${this.switchMoney(this.detail?.groupPayPrice||0)}`
					}
					if (this.detail.groupActivityType == 2) { //规则拼团
						return `${this.switchMoney(this.detail?.endPayTotalPrice || 0)}`
					}
				}
			}
		},
		data () {
			return {

			}
		}
	}
</script>

<style scoped lang="scss">
	.item-box {
		margin-top: 20rpx;
		background: #FFFFFF;
		padding: 0 30rpx;

		.item-card {
			border-bottom: 2rpx solid #f8f8f8;
			justify-content: space-between;
			padding: 32rpx 0;
			font-size: 26rpx;
			color: #191919;

			.head-text {
				font-size: 26rpx;
				color: #FF4E00;

				&:before {
					content: '';
					display: inline-block;
					width: 4rpx;
					height: 20rpx;
					background: #FF4E00;
					margin-right: 9rpx;
				}
			}

			.discount {
				font-size: 24rpx;
				color: #EC4545;
			}

			.item-card-total {
				text {
					&:nth-last-of-type(1) {
						font-weight: 600;
						margin-left: 14rpx;
					}
				}
			}

			&:last-of-type {
				border-bottom: none;
			}
		}
	}
</style>
