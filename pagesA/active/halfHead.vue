	
<template>
	<view  class="container u-flex u-row-between" v-if="specGoodsInfo">
		<image src="../static/image/qietu_maiyizengyi_bg.png" ></image>
		<view class="container-left">
			<view class="desc">
				第2件<text v-if="halfInfo.type == 1">预估</text>到手价
			</view>
			<view class="price">
				<text>¥</text> 
				<text v-if="halfInfo.type ==2">0</text>
				<text v-if="halfInfo.type ==1">{{switchMoney(specGoodsInfo.salePrice/2)}}</text>
				<text v-if="halfInfo.type == 1" >起</text>
			</view>
		</view>
		<view class="container-right">
			<view class="active-title">
				活动时间
			</view>
			<view   class="active-time">
				{{dateFormat('mm月dd日HH点',new Date(halfInfo.startTime.replace(/-/g,'/')))}}--{{dateFormat('mm月dd日HH点',new Date(halfInfo.endTime.replace(/-/g,'/')))}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			halfInfo:{
				type:Object,
				default:null
			},
			specGoodsInfo:{
				type:Object,
				default:null
			}
		},
		created() {
			
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.container{
		position: relative;
		image{
			position: absolute;
			top: 0;
			z-index: -1;
			width: 100%;
			height: 120rpx;
		}
		.container-left{
			width: 240rpx;
			height: 120rpx;
			
			.desc{
				font-size: 22rpx;
				color: #FFFFFF;
				padding: 20rpx 0 0 20rpx;
			}
			.price{
				text{
					font-size: 28rpx;
					margin-right: 10rpx;
				}
				font-size: 50rpx;
				font-weight: 600;
				color: #FFFFFF;
				text-align: center;
			}
		}
		.container-right{
			padding-right: 30rpx;
			text-align: right;
			margin-top: 10rpx;
			.active-title{
				font-size: 24rpx;
				color: #FFFFFF;
			}
			.active-time{
				font-size: 24rpx;
				color: #FFFFFF;
			}
		}
	}
</style>
