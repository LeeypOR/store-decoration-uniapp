<template>
	<view class="">
	 <view @click="goDetail(item)" class="card-wrap" :style="[{'background':item.bgColor || `url(${item.bgImage})`,}]" v-for="(item,index) in cardList" :key="index">
	 	<view v-if="cardType == 1 || cardType == 3" class="cardStatus u-flex u-row-center">
	 	 	{{item.cardStatus==1?'生效中':(item.cardStatus==2?'待生效':(item.cardStatus==3?'待领取':(item.cardStatus==4?'已过期':'')))}}
	 	</view>
		<view @click.stop="buy(item)" v-if="cardType == 2 || cardType=='codeScan'" class="buy-btn u-flex u-row-center">
			{{item.cardStatus==3?'去领取':(item.cardStatus==5?'去购买':'')}}{{cardType=='codeScan'?'去领取':''}}
		</view>
	 	<view class="card-name">
	 		{{item.cardName}}
	 	</view>
	 	<view  class="period">
	 		有效期：{{item.validPeriod || item.validPeriodDuration}}
	 	</view>
		<view v-if="cardType == 0" @click="descshow = true"  class="use-desc u-flex">
			<view class="">
				使用须知
			</view>
			<image src="../../static/equityCard/icon_qingkuang.png" ></image>
		</view>
		<u-popup v-model="descshow"
		         mode="center"
		         width="630rpx"
		         border-radius="30"
		         closeable>
		  <view class="popup-box u-flex">
		    <view class="head">使用须知</view>
		    <view class="rule-describe u-flex-1">
					 <u-parse :html="item.remark"></u-parse>
				 </view>
		  </view>
		</u-popup>
	 </view>
	 
	 </view>
</template>

<script>
	export default{
		props:{
			cardList:{
				type:Array,
				default:()=>[]
			},
			cardType:{
				type:String,
				default:'0'
			}
		},
		created(){
			
		},
		data(){
			return{
				descshow:false
			}
		},
		methods:{
			async buy(item){
				
				
				if(item.cardStatus == 3){ //领取
				   this.receiveCards(item.cardId,1)
				}
				if(this.cardType == 'codeScan'){
					this.receiveCards(item.id,2)
				}
				if(item.cardStatus == 5){ //购买
					// this.goTo('/pagesB/equityCard/cardDetail?cardId='+item.cardId)
				}
			},
			// 领取权益卡
			async receiveCards(cardId,type){
				let res = await this.$http.receiveCard({
					cardId:cardId,
					receiveType:type //领取方式1:权益中心领取，2:扫码领取
				})
				
				if(res.returnCode == 1000){
					this.$toast('领取成功')
					if(this.cardType == 'codeScan'){
						this.goTo(`/pagesB/equityCard/index`)
					}else{
						this.$parent.equityCardList()
					}
					
				}else{
					this.$toast('领取失败')
				}
			},
			goDetail(item){
				let pages = getCurrentPages();       
				let page = pages[pages.length - 1];  
				let currentPage = page.route;	
				let routerPath = currentPage
				if(item.cardStatus == 4) return
				
				let buyType = ''
				if(item.cardStatus == 5){
					buyType = 'buyType'
				}
				
				if(routerPath == 'pagesB/equityCard/cardDetail' ){
					return
				}else{
					this.goTo(`/pagesB/equityCard/cardDetail?cardId=${item.cardId}&buyType=${buyType}`)
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-wrap{
		width: 100%;
		height: 360rpx;
		padding:60rpx 0 0 40rpx;
		margin-top: 20rpx;
		// background: #d1b085;
		border-radius: 14rpx;
		position: relative;
		.cardStatus{
			width: 98rpx;
			height: 50rpx;
			position: absolute;
			right: 0;
			top: 0;
			background: rgba(0,0,0,.5);
			border-radius: 0px 14rpx 0px 14rpx;
			
			font-size: 24rpx;
			color: #d1b085;
		}
		.buy-btn{
			width: 190rpx;
			height: 98rpx;
			position: absolute;
			right: 0;
			bottom: 0;
			z-index: 99;
			background: url(../../static/equityCard/qietu_qykzx_kpan.png) no-repeat;
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
		.period{
			font-size: 24rpx;
			margin-top: 4rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
		.use-desc{
			font-size: 24rpx;
			margin-top: 159rpx;
			font-weight: 400;
			color: #FFFFFF;
			image{
				width: 22rpx;
				height: 22rpx;
				margin-left: 10rpx;
			}
		}
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
