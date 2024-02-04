<template>
	<view v-if="couponDetail">
		<u-navbar class="location-class" :border-bottom="false" :title="couponDetail.couponName" title-bold
			title-color="#191919"
			title-size="36" back-icon-color="#000000"></u-navbar>
		<skeleton
			:loading="loading"
			:swiperStyle="{
					'width':'100%',
					'height':'750rpx',
					'padding':'0 10rpx'
				  }"
			:imgTitle="true">
			<view class="head">
        <view v-if="!imageUrl">
          <image :src="bgImage"></image>
          <view class="content">
            <view class="coupon-name">{{couponName(couponDetail,1)}}</view>
            <view class="coupon-desc">{{couponDesc(couponDetail,1)}}</view>
          </view>
          <view class="coupon-type">{{couponType(couponDetail)}}</view>
        </view>
        <view style="width: 100%;height: 100%" v-else>
          <swiper style="width: 100%;height: 100%" indicator-dots circular="true" duration="400">
            <swiper-item class="swiper-item" v-for="(item,index) in imageUrl" :key="index">
              <view class="image-wrapper" style="width: 100%;height: 750rpx;">
                <image :src="item" mode="aspectFill" style="width: 100%;height: 750rpx;"></image>
              </view>
            </swiper-item>
          </swiper>
        </view>
			</view>
		</skeleton>
		<view v-if="!loading" class="">
			<goodsHead
				:goodsInfo="goodsInfo"
				:paymentWay="3"
				:specGoodsInfo="specGoodsInfo">
			</goodsHead>
		</view>
		<skeleton
			:loading="loading"
			:showTitle="true"
			:showAvatar="false"
			:titleStyle="{
				'width':'80%',
				'margin-left':'30rpx'
			}"
			>
			<view class="section-content"></view>
		</skeleton>
		<skeleton
			:loading="loading"
			:showTitle="true"
			:showAvatar="false"
			:titleStyle="{
				'width':'60%',
				'margin-top':'20rpx',
				'margin-left':'30rpx'
			}"
			>
			<view class="section-content"></view>
		</skeleton>
		<skeleton
			:loading="loading"
			:showTitle="true"
			:showAvatar="false"
			:titleStyle="{
				'width':'45%',
				'margin-top':'20rpx',
				'margin-bottom':'20rpx',
				'margin-left':'30rpx'
			}">
			<view class="section-content"></view>
		</skeleton>
		<view class="switch-box u-flex ">

				<text class="active">产品详情</text>


		</view>
		<view style="position: relative;z-index: -1;" class="coupon-detail">
			<couponCom v-if="couponDetail" :couponsList="[couponDetail]"></couponCom>
		</view>

		<view class="seat"></view>
		<view class="exchange-btn">
		   <view @click="exchangeModel" class="btn">
        立即兑换
		   </view>
		</view>
		<u-modal
			v-model="exchangeShow"
			:content="exchangeContent"
			title="积分兑换"
			show-cancel-button
			border-radius="20"
			confirm-text="确认"
			@confirm="cancelConfirm"
			confirm-color="#FFFFFF"
			cancel-color="#D1B085">
		</u-modal>
	</view>
</template>

<script>
	import pointMixin from '@/pages/home/components/pointsMall/mixin.js'
	import goodsHead from "../active/goodsHead.vue";
	import skeleton from "../components/J-skeleton.vue";
	import couponCom from "../components/coupon.vue";
	export default {
		components: {
			skeleton,
			goodsHead,
			couponCom
		},
		mixins: [pointMixin],
		data () {
			return {
			  title:'',
				detail: null,
				goodsInfo:{},
				specGoodsInfo:{},
				couponDetail: null,
				couponOwnWay: '',
				loading: true,
				exchangeShow:false,
				exchangeContent:''
			}
		},
		computed:{
      bgImage(){
        if((this.detail?.enableGoods?.indexOf(',')>-1 || this.detail?.enableGoods=='')&& this.detail.goodsPic){
          return this.detail.goodsPic
        }else{
          return 'https://jdz.g1999.com/ghs/20211026/26aaba9d8b5a43698c1d8339a13f9c47.png'
        }

      },
			imageUrl(){
				 if(this.couponDetail?.goodsPictures) {
           return this.couponDetail?.goodsPictures.split(',')
         }
			}
		},
		onLoad (option) {
			// this.couponId = option.id
			// this.couponOwnWay = option.couponOwnWay
			this.detail = option.detail ? JSON.parse(option.detail) : null
      console.log('this.detail: ', this.detail);
			this.goodsInfo = {
				goodsName:this.detail.couponName,
				goodsSales:0,
			}
			this.specGoodsInfo = {
				integralPrice:this.detail.redeemAmount
			}
			this.couponByIdList()
		},
		methods: {
			exchangeModel(){
				this.exchangeShow = true
				this.exchangeContent = `确认使用${this.detail.redeemAmount}积分兑换次优惠券么？`
			},
			async couponByIdList () {
				try {
					let res = await this.$http.getCouponByIds({
						couponId: this.detail.id,
						receiveType: this.detail.couponOwnWay
					})
					this.couponDetail = res.dataInfo ? res.dataInfo : null
					this.couponDetail.checked = true
          this.title = this.couponDetail?.couponName
					this.loading = false
				} catch (e) {
					//TODO handle the exception
				}
			},
			cancelConfirm(){
				this.redeemExchange()
			},
			// 兑换优惠券
			async redeemExchange(){
				try{
					let res = await this.$http.redeemExchange({couponId:this.detail.id})
					if(res.returnCode==1000){
						this.goTo('/pagesA/mine/myCoupon')
					}
				}catch(e){
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.head {
		width: 100%;
		height: 750rpx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: -1;
		}

		.content {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -65%);
			width: 476rpx;
			height: 254rpx;

			.coupon-name {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 127rpx;
				font-size: 66rpx;
				font-weight: 600;
				color: #FFFFFF;
				text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
			}

			.coupon-desc {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 115rpx;
				font-size: 40rpx;
				color: #FFFFFF;
			}

		}

		.coupon-type {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 98rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(180deg, #707070 0%, #464646 100%);
			font-size: 34rpx;
			font-weight: 600;
			color: #FFFFFF;
		}
	}

	.seat{
		height: iphone-bottom(98rpx);
	}
	.exchange-btn{
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
        align-items: center;
		background: #FFFFFF;
		height: iphone-bottom(98rpx);
		padding: 0 30rpx;

		.btn{
			width: 100%;
			font-size: 28rpx;
			font-weight: 400;
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
			background: $themeColor;
			border-radius: 35rpx;
		}
	}
	.switch-box {
		min-height: 100rpx;
		background: #ffffff;
		text-align: center;
		margin-top: 20rpx;
		text {
			padding: 34rpx 0;
			flex: 1;
			font-size: 24rpx;
			color: #000000;
		}

		.active {
			font-size: 24rpx;
			font-weight: 600;
			color: #000000;
		}
	}
	.coupon-detail{
		padding: 30rpx ;
	}
</style>

