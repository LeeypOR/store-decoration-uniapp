<template>
	<view class="container">
		<u-navbar :border-bottom="false" title="用户协议规则" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
	    <view class="titel">
	    	金桔有品+全民营销合作方案
	    </view>
		<view class="u-m-t-20" v-for="(item,index) in agreementList " :key="index">
			<view class="item-title">
				{{item.titel}}
			</view>
			<view class="item-desc">
				{{item.desc}}
			</view>
		</view>
		<view class="remarks">
			备注：如对以上政策有疑义，请及时与我司沟通，我司将给予解答，我司的客服服务热线400-1868-666
		</view>
		<view class="company">
			<view class="">
				金牌厨柜家居科技股份有限公司
			</view>
			<view class="">
				2021年10月 15日
			</view>
			 
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				agreementList:[
					{
						titel:'一、金桔有品+',
						desc:'是指在金牌厨柜家居科技股份有限公司（以下简称“我司”）开设的具备线上销售家居类产品的经营场所。'
					},
					{
						titel:'二、金牌厨柜官方商城',
						desc:'指我司在腾讯官方平台注册并企业认证的公众号。'
					},
					{
						titel:'三、线上销售',
						desc:'用户在金桔有品+小程序下单并且成功付款的订单，在用户成功付款后，金桔有品+将订单所包含商品发货快递至用户指定位置；用户收货后确认是否存在问题，没有问题确认收货，存在问题走售后流程。'
					},
					{
						titel:'四、有效注册用户',
						desc:'指用户提供手机号并按照平台流程完成注册，且系统给用户生成唯一用户ID。'
					},
					{
						titel:'五、有效推荐用户',
						desc:'指经过原平台用户分享的链接进入到平台，完成注册步骤并成功下单未退单的用户。'
					},
					{
						titel:'六、有效订单',
						desc:'指成功付款且用户签收并未退款的订单。'
					},
					{
						titel:'七、佣金',
						desc:'指成功付款且用户签收并未退款的订单。'
					},
					{
						titel:'八、佣金比例',
						desc:'依据平台所设定的佣金比例抽取。'
					},
					{
						titel:'九、提现结算',
						desc:'依据平台的提现结算规则，提现金额累计100元，才可将平台给予的佣金提现结算。'
					},
					{
						titel:'十、产品优化建议权',
						desc:'“金桔有品+”属于新的线上商城销售业态，任何事物的发展都需要一个过程，我司衷心希望认可“金桔有品+”线上销售理念并与我司一道共同发展的营销推广人员可以把终端消费者的消费体验、建议及时反馈给我司，我司会根据消费者的反馈及时完善、提高消费体验。'
					},
					{
						titel:'十一、品牌信誉维护权',
						desc:'金桔有品+合作推广营销人员应自觉维护“金桔有品+”信誉，不对外通过包括但不限于微信朋友圈、微博等第三方公众平台、媒体，发布任何有损“金桔有品+”品牌信誉的不当言论、行为，如经我司发现，则我司有权取消营销人员的资格并停止返佣。'
					},
					{
						titel:'十二、合作方案解释权',
						desc:'金桔有品+终端消费全民营销合作方案解释及归属权属于我司，我司有权根据营销策略的变化适时调整合作方案，并以最新发布的合作方案作为全民营销的依据。'
					},
				]
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
	.container{
		padding: 0 40rpx;
		
	}
	.titel{
		font-size: 32rpx;
		color: #191919;
		margin-top: 57rpx;
		text-align: center;
		font-weight: 600;
	}
	.item-title{
		font-size: 30rpx;
		color: #191919;
		font-weight: 600;
	}
	.item-desc{
		font-size: 28rpx;
		color: #191919;
		margin-top: 10rpx;
		line-height: 40rpx;
	}
	.remarks{
		margin-top: 50rpx;
		font-size: 24rpx;
		color: #999999;
		text-align: center;
		line-height: 40rpx;
	}
	.company{
		margin-top: 40rpx;
		height: 80rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 24rpx;
		color: #191919;
		text-align: right;
		font-weight: 400;
		margin-bottom:50rpx ;
	}
</style>
