<template>
	<view class="container">
		 <u-navbar :border-bottom="false" title="提现详情" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
	    <view v-if="detail">
	    	<view class="head u-flex">
	    		<view class="head-left">
	    			<image v-if="detailStatus =='processing'" class="image" src="../static/images/icon_fenxiao_chulizhong.png"></image>
	    		    <view v-else class="circle"></view>
	    			<view class="line"></view>
	    			<view v-if="detailStatus =='processing'" class="circle"></view>
	    			<view v-else class="">
	    				<image v-if="detailStatus =='success'" class="image" src="../static/images/icon_fenxiao_daozhang.png"></image>
	    				<image v-if="detailStatus =='fail'" class="image" src="../static/images/icon_fenxiao_daozhangshibai.png"></image>
	    			</view>
	    			
	    		</view>
	    		<view class="head-right ">
	    			<view class="">
	    				<view :class="['processing',{'deal':detailStatus =='success'}]">
	    					银行处理中
	    				</view>
	    				<view v-if="detailStatus =='processing'" class="wait-processing">
	    					等待银行处理，稍后可在交易记录中查询结果
	    				</view>
	    			</view>
	    			<view v-if="detailStatus =='processing'" class="">
	    				提现成功
	    			</view>
	    			<view v-else class="">
	    			   <view class="processing">
	    			   	{{detailStatus =='success'?'到账成功':(detailStatus =='fail'?'到账失败':'') }}
	    			   </view>
	    			   <view class="wait-processing">
	    			   	{{detail.updateDate}}
	    			   </view>
	    			</view>
	    		</view>
	    	</view>
	    	<view class="">
	    		<view class="u-flex u-row-between u-m-t-50">
	    			<view class="amount-text">
	    				提现金额
	    			</view>
	    			<view class="amount-money">
	    				¥{{switchMoney(detail.withdrawPrice)}}
	    			</view>
	    		</view>
	    		<view class="u-flex u-row-between u-m-t-20">
	    			<view class="amount-text">
	    				到账银行卡
	    			</view>
	    			<view class="amount-money">
	    				{{detail.bankName}} ({{detail.cardNo.substr(detail.cardNo.length-4)}})
	    			</view>
	    		</view>
	    	</view>
	    	
	    	<view @click="goTo('/pages/home/index',true)" class="home-btn">
	    		返回商城首页
	    	</view>
	    	<view @click="goTo('/pagesB/distribution/index')" class="distribution-btn">
	    		返回分销员员中心
	    	</view>
	    </view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// detailStatus:'processing' ,//详情状态 processing success,
				transId:'',
				detail:null,
				timer:null
			}
		},
		computed:{
			detailStatus(){
				if(this.detail){
					if(this.detail.withdrawStatus ==1){
						return 'success' //提现成功
					}else if(this.detail.withdrawStatus ==3){
						return 'processing' //提现进行中
					}else if(this.detail.withdrawStatus ==2){
						return 'fail' //提现失败
					}
				}else{
					return 'processing'
				}
			}
		},
		onLoad(option) {
			this.transId = option?.transId || ''
		},
		onShow() {
			if(this.transId){
				this.fetchWithdrawalDetail()
			}
		    this.timer= setInterval(()=>{
				if(this.transId){
					this.fetchWithdrawalDetail()
				}
			},5000)
		},
		onUnload(){
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
		},
		onHide() {
			if (this.timer) {
				clearInterval(this.timer)
				this.timer = null
			}
		},
		methods:{
			// 查询提现详情
			async fetchWithdrawalDetail(){
				try{
					let res = await this.$http.withdrawalDetail({transId:this.transId})
					this.detail = res.dataInfo ? res.dataInfo : null
					if(this.detail.withdrawStatus == 1){
						clearInterval(this.timer)
						this.timer = null
					}
				}catch(e){
					clearInterval(this.timer)
					this.timer = null
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 0 60rpx;
		.head{
			border-bottom: 1rpx solid #e6e6e6;
			height: 323rpx;
			.head-left{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.image{
					width: 60rpx;
					height: 60rpx;
					
				}
				.line{
					width: 1rpx;
					height: 130rpx;
					background: #E6E6E6;
				}
				.circle{
					width: 20rpx;
					height: 20rpx;
					border-radius: 50%;
					background: #CCCCCC
				}
			}
			.head-right{
				margin-left: 30rpx;
				display: flex;
				height: 220rpx;
				flex-direction: column;
				justify-content: space-between;
				.processing{
					font-size: 32rpx;
					font-weight: 500;
					color: #191919;
					&.deal{
					color:#999999;
				    }
				}
				
				.wait-processing{
					margin-top: 10rpx;
					font-size: 26rpx;
					color: #999999;
				}
			}
		}
		.amount-text{
			font-size: 30rpx;
			color: #999999
		}
		.amount-money{
			font-size: 30rpx;
			font-weight: 500;
			color: #191919;
		}
		.home-btn{
			width: 550rpx;
			height: 80rpx;
			margin: 0 auto;
			margin-top: 200rpx;
			background: $themeColor;
			border-radius: 45rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			font-weight: 600;
			color: #FFFFFF;
		}
		.distribution-btn{
			width: 550rpx;
			height: 80rpx;
			margin: 0 auto;
			margin-top: 40rpx;
			background: #F8F8F8;
			border-radius: 45rpx;
			border: 1rpx solid $themeColor;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			font-weight: 600;
			color: $themeColor;
		}
	}
</style>
