<template>
    <view class="welfareList">
        <!-- 三图并列布局 -->
		<view class="three u-flex ">
		
			<view class="three-wrap">
				<image class="bg" src="https://jdz.g1999.com/ghs/20210902/b10b6697eef140f5aef73842ee41b7b5.png"></image>
				<text class="three-title">福利1：</text>
				<text class="three-text">专享全场会员价</text>
			</view>
			<view class="three-wrap">
				<image class="bg" src="https://jdz.g1999.com/ghs/20210902/d431a1439fc34bb5b7d4e335b066676e.png"></image>
				<text class="three-title">福利2：</text>
				<text class="three-text">专享客服免排队</text>
			</view>
			<view class="three-wrap">
				<image class="bg" src="https://jdz.g1999.com/ghs/20210910/457b8fb0b30b4dbf9281b2c4eb568dfb.png"></image>
				<text class="three-title">福利3：</text>
				<text class="three-text">专享售后服务</text>
			</view>
	
		</view>
		<view v-if="integralRatio" class="integral">
			<text class="three-title">福利：{{indexList[0]}}</text>
			<text class="three-text">专享{{integralRatio}}倍积分</text>
		</view>
        <view class="gift" v-if="goodsStr.goodsList && goodsStr.goodsList.length">
            <image class="top-img" src="~@/static/image/payMember/middle_modalbox_fuli_bg_04@2x.png" mode="aspectFill"></image>
            <view class="top-content">{{`福利${indexList[1]}会员大礼包：`}}</view>
            <swiper style="height: 345rpx;" :autoplay="false" :duration="1000">
            	<swiper-item v-for="(item,index) in goodsStr.goodsList" :key="index">
            		<view class="content u-flex">
            		    <image class="content-img" :src="item.goodsPicture" mode="aspectFill"></image>
            		    <view class="right">
            		    	<p class="content-label u-line-1">{{item.goodsName}}</p>
            		    	<p class="content-activity">0元购</p>
            		    	<view class="content-btn" @click="goZero(item)">去领取</view>
            		    </view>
            		</view>
            	</swiper-item>
            	
            </swiper>
			
        </view>

		<view class="coupons" v-if="goodsStr.couponList && goodsStr.couponList.length">
			<image class="top-img" style="width: 135rpx" src="~@/static/image/payMember/middle_modalbox_fuli_bg_04_mini.png" mode=""></image>
			<view class="top-content">{{`福利${indexList[2]}:`}}</view>
			<view class="top-content-right u-flex" @click="goCoupon">
				更多优惠券
				<image class="arrow-img" src="~@/static/image/payMember/middle_modalbox_dingdan_ arrow_black.png" mode="widthFix"></image>
			</view>
			<view class="content">
				<view class="coupon-item" v-for="(item,index) in goodsStr.couponList" :key="index">
					<image class="coupon-bg" src="~@/static/image/payMember/fuli_youhuiquan_bg.png" mode="widthFix">
					</image>
					<!-- 折扣券 -->
					<view v-if="item.couponType==2">
						<view class="price">{{item.discountRatio}}折券</view>
						<!-- <view v-if="item.mostDiscount!=-1" class="type">
								最多优惠{{item.mostDiscount}}
						</view> -->
						<view class="type">
							{{item.couponName}}
						</view>
					</view>
					<!-- 满减券 -->
					<view v-else>
						<view class="price">{{item.couponAmount}}</view>
						<view class="type">{{item.couponName}}</view>
					</view>
					
				</view>
			</view>
		</view>

		<view class="discount" v-if="goodsStr.discountGoodsList && goodsStr.discountGoodsList.length">
			<image class="top-img" src="~@/static/image/payMember/middle_modalbox_fuli_bg_04@2x.png" mode="widthFix"></image>
			<view class="top-content">{{`福利${indexList[3]}商品${goodsStr.consumptionDiscount}折：`}} </view>
			<view class="top-content-right u-flex" @click="judgePage">
				全部商品
				<image class="arrow-img" src="~@/static/image/payMember/middle_modalbox_dingdan_ arrow_black.png" mode="widthFix"></image>
			</view>
			<view class="content">
				<view class="goods-item" v-for="(item,index) in goodsStr.discountGoodsList" :key="index" @click="goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}&equityDiscount=${JSON.stringify(item)}`)">
					<image class="goods-img" :src="item.goodsPicture"></image>
					<p class="label u-line-2">{{item.goodsName}}</p>
					<text class="discountPrice">¥{{switchMoney(item.discountPrice)}}</text>
					<text class="price">¥{{switchMoney(item.salePrice)}}</text>
				</view>
			</view>
		</view>
    </view>
</template>

<script>
export default {
    props:{
		integralRatio: {
            type: Number
        },
        goodsStr: {
            type: Object,
			default:null
        },
		zeroType:{
			type:String,
			default:'1'  //1 是会员赠送商品 2 是权益卡赠送商品
		},
		cardInfo:{
			type: Object,
			default:null
		}
    },

		
		
   
    data(){
        return {
			cardType: 2, // 卡类型（1：权益卡， 2：会员卡）
			benefitsType: 3, // 权益的类型 (1:优惠券 3,折扣商品)
        }
    },
	computed: {
		indexList() {
			// let arr = new Array(6)
			// arr[0] = this.integralRatio ? 1 : 0
			// arr[1] = arr[0] + 1
			// arr[2] = arr[1] + 1
			// arr[3] = this.goodsStr?.goodsList?.length ? arr[2] + 1 : arr[2]
			// arr[4] = this.goodsStr?.couponList?.length ? arr[3] + 1 : arr[3]
			// arr[5] = this.goodsStr?.discountGoodsList?.length ? arr[4] + 1 : arr[4]
			let arr = new Array(7)
			arr[0] = this.integralRatio ? 4 : 3
			arr[1] = this.goodsStr?.goodsList?.length ?arr[0] + 1 :arr[0]
			arr[2] = this.goodsStr?.couponList?.length ? arr[1] + 1 : arr[1]
			arr[3] = this.goodsStr?.discountGoodsList?.length ? arr[2] + 1 : arr[2]
			return arr
		}
	},
	methods:{
		goCoupon(){
			
			if(this.goodsStr.needBuy == 1){
				this.goTo(`/pagesB/memberBuy/index?cardId=${this.goodsStr.cardId}`)
			}
			if(this.goodsStr.needBuy == 0){
				this.goTo(`/pagesA/mine/myCoupon`)
			}
		},
		async judgePage() {
			if(this.zeroType == '1'){
				this.cardType  = 2
			}
			if(this.zeroType == '2'){
				this.cardType  = 1
			}
            if(this.zeroType == '1'){
				let res = await this.$http.getDiscountLists({
					cardId: this.goodsStr.id || this.goodsStr.cardId,
					cardType: this.cardType,
					benefitsType: this.benefitsType,
				})
				
            	if(res.dataInfo.needBuy ==1) {
            		this.goTo(`/pagesB/memberBuy/index?cardId=${this.goodsStr.cardId}`)
            		return
            	} 
            	if(res.dataInfo.needBuy ==0) {
            		this.goTo(`/pagesB/goodsList/index?cardId=${this.goodsStr.cardId}`)
            		return
            	}
            }
			
			if(this.zeroType == '2'){
				this.goTo(`/pagesB/equityCard/disCount?cardId=${this.goodsStr.id}`)
			}
			
		},
		goZero(item){
			 if(this.zeroType == '1'){
				  let orderId = this.cardInfo?.orderId?this.cardInfo?.orderId:this.goodsStr.orderId
				 if(this.goodsStr.needBuy == 1){
					 this.goTo(`/pagesB/memberBuy/index?cardId=${this.goodsStr.cardId}`)
				 }
				 if(this.goodsStr.needBuy == 0){
					this.goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}&zeroGoods=${JSON.stringify(item)}&cardData=${JSON.stringify({id:this.goodsStr.id || this.goodsStr.cardId ,zeroOrderId:orderId,zeroType:this.zeroType})}`) 
				 }
			 }
			 if(this.zeroType == '2'){
				 this.goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}&zeroGoods=${JSON.stringify(item)}&cardData=${JSON.stringify({id:this.goodsStr.id || this.goodsStr.cardId ,zeroOrderId:this.goodsStr.orderId,zeroType:this.zeroType})}`)
			 }
			
		}
	}
}
</script>

<style lang="scss" scoped>
.welfareList{
  overflow: hidden;
}
.three {
	margin: 30rpx 30rpx 0;
  width: 690rpx;
	// padding: 0 30rpx;
	justify-content: space-between;
    .three-wrap {
		width: 210rpx;
		height: 260rpx;
		position: relative;
        .bg {
			width: 100%;
			height: 100%;
        }
        .three-title {
			position: absolute;
			top: 8rpx;
			left: 20rpx;
			height: 33rpx;
			font-size: 24rpx;
			color: #F0DDC0;
			font-weight: 600;
        }
        .three-text {
			position: absolute;
			top: 80rpx;
			left: 41rpx;
			right: 41rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 40rpx;
			text-shadow: 0 3rpx 4rpx rgba(128,78,23,0.20);
			font-weight: 600;
        }
    }
}

.gift, .coupons, .discount {
	margin: 30rpx auto 0;
	width: 690rpx;
	background-image: linear-gradient(180deg, #F2E1C4 1%, #DCBF99 100%);
	border-radius: 20rpx;
	position: relative;
	.top-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 260rpx;
		height: 50rpx;	
	}
	.top-content {
		position: absolute;
		top: 8rpx;
		left: 20rpx;
		font-size: 24rpx;
		color: #F0DDC0;
		font-weight: 600;
	}
	.top-content-right {
		position: absolute;
		top: 14rpx;
		right: 16rpx;
		font-size: 20rpx;
		color: #191919;
		font-weight: 400;
        .arrow-img {
			width: 24rpx;
			height: 32rpx;
        }
    }
}
.integral{
	width: 345*2rpx;
	height: 77.5*2rpx;
	margin: 0 auto;
	margin-top: 30rpx;
	background: url(https://jdz.g1999.com/ghs/20210910/2abaf72805374f6d908baac750449f52.png) no-repeat;
	background-size: cover;
	position: relative;
	.three-title {
		position: absolute;
		top: 8rpx;
		left: 20rpx;
		height: 33rpx;
		font-size: 24rpx;
		color: #F0DDC0;
		font-weight: 600;
	}
	.three-text {
		position: absolute;
		top: 60rpx;
		left: 41rpx;
		right: 41rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 40rpx;
		text-shadow: 0 3rpx 4rpx rgba(128,78,23,0.20);
		font-weight: 600;
	}
}
.gift {
	height: 390rpx;
    .content {
		position: absolute;
		top: 70rpx;
		left: 50%;
		transform: translate(-50%);
		width: 630rpx;
		height: 275rpx;
		background: #FFFFFF;
		border-radius: 14rpx;
        .content-img {
			margin-left: 10rpx;
			width: 340rpx;
			height: 255rpx;
        }
        .right {
			width: 220rpx;
			margin-left: 30rpx;
            .content-label {
				margin-top: 30rpx;
				height: 45rpx;
				font-size: 32rpx;
				color: #191919;
				font-weight: 400;
            }
            .content-activity {
				height: 45rpx;
				font-size: 32rpx;
				color: #191919;
				font-weight: 600;
            }
            .content-btn {
				margin-top: 65rpx;
				width: 220rpx;
				height: 60rpx;
				background-image: linear-gradient(180deg, #707070 0%, #464646 100%);
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #F0DDC0;
				font-weight: 600;
            }
        }
    }
}
.coupons {
	height: 281rpx;
    .content {
		position: absolute;
		top: 80rpx;
		left: 30rpx;
		width: 630rpx;
		height: 151rpx;
		display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
		.coupon-item {
			width: 277rpx;
			height: 151rpx;
			margin-right: 20rpx;
			position: relative;
			flex-shrink: 0;
			&:last-child {
				margin-right: 0;
			}
			.coupon-bg {
				width: 100%;
				height: 100%;
				opacity: .7;
			}
			.price {
				width: 100%;
				position: absolute;
				top: 16rpx;
				text-align: center;
				height: 58rpx;
				font-size: 40rpx;
				color: #FFFFFF;
				font-weight: 600;
			}
			.type {
				width: 100%;
				position: absolute;
				bottom: 19rpx;
				height: 36rpx;
				font-size: 25rpx;
				color: #F0DDC0;
				text-align: center;
				font-weight: 400;
			}
		}
    }
}
.discount {
	position: relative;
	height: 545rpx;
	/* &::after {
		position: absolute;
		content: '';
		left: 0;
		right: 0;
		top: calc(calc(env(safe-area-inset-bottom) / 2) + 545rpx);
		width: 100%;
		height: 148rpx;
		background: transparent;
	} */

    .content {
		position: absolute;
		top: 80rpx;
		left: 30rpx;
		width: 630rpx;
		height: 425rpx;
		display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
        .goods-item {
			width: 280rpx;
			// height: 445rpx;
			background: #FFFFFF;
			border-radius: 14rpx;
			margin-right: 20rpx;
			position: relative;
			flex-shrink: 0;
			&:last-child {
				margin-right: 0;
			}
            .goods-img {
				margin: 10rpx;
				width: 260rpx;
				height: 260rpx;
            }
            .label {
				height: 80rpx;
				margin: 0 10rpx;
				font-size: 28rpx;
				color: #191919;
				font-weight: 400;
            }
            .discountPrice {
				padding: 10rpx;
				height: 45rpx;
				font-size: 28rpx;
				color: #191919;
				font-weight: 400;
            }
			.price {
				padding-top: 14rpx;
				height: 40px;
				font-size: 26rpx;
				color: #999999;
				text-decoration: line-through;
				font-weight: 400;
			}
        }
    }
}
</style>