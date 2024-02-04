<template>
	<view class="container u-flex">
		<u-navbar class="location-class" :border-bottom="false" title="购买记录" title-bold
			title-color="#191919"   title-size="36" back-icon-color="#000000"></u-navbar>
	<view v-if="cardList.length" class="container-wrap u-flex-1">
	<view class="card-wrap"  v-for="(item,index) in cardList" :key="index">
		
		<view v-if="item.payStatus==2" @click="buy(item)"  class="buy-btn u-flex u-row-center">
			{{item.payStatus==2?'继续支付':''}}
		</view>
		<view class="card-name">
			{{item.cardName}}
		</view>
		<view class="card-foot u-flex u-row-between">
			<view class="foot-left">
				<text>¥{{switchMoney(item.price)}}</text>
				<text>支付成功 {{item.createOrderTime.substr(0,10)}}</text>
			</view>
			<view class="foot-right">
				<text>实付¥</text>
				<text>{{switchMoney(item.price)}}</text>
			</view>
		</view>
	</view>	
	</view>
	 <no-data v-if="finished && !cardList.length"  type="noData"> </no-data>
	</view>
</template>

<script>
	import NoData from '@/components/noData.vue'
	export default{
		components:{
			NoData
		},
		data(){
			return{
				cardList:[],
				finished:false,
			}
		},
		onShow() {
			this.cardBuyHistory()
			
		},
		methods:{
			async cardBuyHistory(){
				try{
					let res = await this.$http.cardBuyHistory({})
					this.cardList = res.dataInfo? res.dataInfo :[]
					this.finished = true
				}catch(e){
					console.log(e)
					this.finished = false
					//TODO handle the exception
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		height: 100Vh;
		flex-direction: column;
		.container-wrap{
			width:100%;
			overflow-y: auto;
			padding: 0 30rpx;
		}
		.card-wrap{
			width: 100%;
			height: 360rpx;
			padding:60rpx 40rpx 0 40rpx;
			margin-top: 20rpx;
			background: url(../static/equityCard/qietu_wodequanyika_bghei.png) no-repeat;
			background-size: cover;
			border-radius: 14rpx;
			position: relative;
			
			.buy-btn{
				width: 190rpx;
				height: 98rpx;
				position: absolute;
				right: 0;
				bottom: 0;
				background: url(../static/equityCard/qietu_qykzx_kpan.png) no-repeat;
				background-size: cover;
				font-size: 34rpx;
				font-weight: 600;
				color: #D1B085;
			}
			.card-name{
				font-size: 34rpx;
				font-weight: 600;
				color: #FFFFFF;
			}
			.card-foot{
				margin-top: 152rpx;
				.foot-left{
					text{
						&:first-of-type{
							font-size: 34rpx;
							font-weight: 600;
							color: #D1B085;
						}
						&:last-child{
							font-size: 24rpx;
							color: #D1B085;
						}
					}
				}
				.foot-right{
					&:first-of-type{
						font-size: 22rpx;
						color: #D1B085
					}
					&:last-of-type{
						font-size: 34rpx;
						font-weight: 600;
						color: #D1B085;
					}
				}
			}
			
		}
		
	}
</style>
