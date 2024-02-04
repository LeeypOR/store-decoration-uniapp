<template>
	<view class="">
		<u-navbar :border-bottom="false" title="申请成为分销员" title-bold title-color="#191919" title-size="36"
		          back-icon-color="#000000"></u-navbar>
	    <view class="success-image">
	    	<image src="../static/image/app_icon_payment_success@2x.png" ></image>
	    </view>
		<view class="desc">
			尊敬的{{userName}}您好，您已成为分销员，去分享商品赚取佣金
		</view>
		<view @click="goRouter" class="sharBtn u-flex u-row-center">
			去分享
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userName:''
			}
		},
		onLoad(option) {
			this.userName = option.userName
		},
		methods:{
			goRouter(){
				this.goTo('/pages/category/index',true)
			}	
		}
	}
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
	.success-image{
		width: 300rpx;
		height: 300rpx;
		margin: 0 auto;
		margin-top: 50rpx;
		image{
			width: 100%;
			height: 100%;
		}
		
	}
	.desc{
		width: 590rpx;
		height: 84rpx;
		margin: 0 auto;
		text-align: center;
		margin-top: 20rpx;
		line-height: 42rpx;
		font-size: 30rpx;
		color: #191919;
	}
	.sharBtn{
		width: 550rpx;
		height: 80rpx;
		margin: 150rpx auto;
		background: $themeColor;
		border-radius: 45rpx;
		font-size: 28rpx;
		font-weight: 600;
		color: #FFFFFF;
	}
</style>
