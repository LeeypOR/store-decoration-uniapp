<template>
	<view class="container u-flex">
		<u-navbar class="location-class" :border-bottom="false" title="金牌员工生日礼包" title-bold
			title-color="#FFFFFF" background="{ background: '222222' }"  title-size="36" back-icon-color="#ffffff"></u-navbar>
	    <view class="container-wrap u-flex-1">
            <card-com v-if="detailInfo" :cardList="[detailInfo]"></card-com>
            <view class="title">- 会员福利 -</view>
            <view class="welfare-wrap">
                <cardDetail v-if="detailInfo" zeroType="2" :integralRatio="detailInfo.integralRatio" :goodsStr="detailInfo" :couponStr="detailInfo" :discount="detailInfo"></cardDetail>
                <view @click="cardOrder" v-if="buyType =='buyType'&&detailInfo " class="welfare-top">
                    ¥{{switchMoney(detailInfo.price)}} 立即购买
                </view>
            </view>
	    </view>
	</view>
</template>

<script>
	import cardCom from './components/card.vue'
	import cardDetail from '@/components/welfareList.vue'
	export default{
		components:{
			cardDetail,
			cardCom,
		},
		data(){
			return{
				cardId:'',
				buyType:'',
				detailInfo:null,
				orderId:''
			}
		},
		onLoad(option) {
			let {cardId,buyType} = option
			
			this.cardId = cardId
			this.buyType = buyType
			this.getDeatil()
		},
		onShow() {
			
		},
		methods:{
			// 获取详情
			async getDeatil(){
				let res = await this.$http.cardDetail({cardId:this.cardId})
				
				this.detailInfo = res.dataInfo
			},
			async cardOrder(){
				let res = await this.$http.cardOrder({cardId:this.cardId,orderFromType:1})
				this.orderId = res.dataInfo
				this.goPay()
			},
			// 普通订单去支付
			async goPay () {
				const {dataInfo: res} = await this.$http.payWxOrder({
					orderId: this.orderId,
                    orderPayType:4
				})
				this.payDispose(res)
				return res
				
				
			},
			// 支付回调
			 payDispose(res){
			  const paySign = res?.paySign || ''
			  // 如果获取失败 就直接跳转到订单待支付页面
			  if(!paySign){
			    // 跳转待支付页面
			    this.goTo('/pagesB/myCollage/index',false,true)
			    return
			  }
			  // 成功 调起微信支付
			  wx.requestPayment({
			    timeStamp: res.timeStamp,
			    nonceStr: res.nonceStr,
			    package: res.packageValue,
			    signType: res.signType,
			    paySign: res.paySign,
			    success: (res) => {
			      this.goTo('/pagesA/shop/paySuccess?type=1', false, true)
			    },
			    fail: (res) => {
			      this.goTo('/pagesB/equityCard/buyHistory', false, true)
			    }
			  })
			},
			
		}
	}
</script>
<style>
	page{
		background: rgba(34,34,34,.8);
	}
</style>
<style lang="scss" scoped>
	.container{
		// padding: 0 30rpx;
		height: 100vh;
		flex-direction: column;
		overflow-x: hidden;
		.container-wrap{
			overflow-y: scroll;
			overflow-x: hidden;
		}
		.title {
			text-align: center;
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			font-weight: 600;
	    }
		.welfare-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		.welfare-top {
			width: 550rpx;
			height: 80rpx;
			background: #D1B085;
			border-radius: 40rpx;
			margin:  60rpx auto 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			
			font-size: 28rpx;
			color: #FFFFFF;

			
		}
	}
	}
/deep/ .three{
	margin: 0!important;
}
</style>
