
<template>
	<view class="container">
         <!-- listStyle: '1', // 列表样式，1样式一，2样式二，
          borderRounding: '1', // 边框倒角，1直角，2圆角。
          integralNum: true, // 积分数量true显示false不显示
          exchangeBtn: true, // 兑换按钮true显示false不显示
          originalPrice: true, // 商品原价true显示false不显示  -->
	   <!-- 瀑布流 -->
	   <view :class="{'water-wrap':dataInfo.listStyle=='1'}">
		   <view :class="{'waterfall':dataInfo.listStyle=='1'}">
			   <view class="u-flex"
				:style="{'border-radius':dataInfo.borderRounding =='2'?'14rpx':''}" :class="[{'waterfall-item':dataInfo.listStyle=='1'}]"
				 v-for="(item,index) in goodsList" :key="item.id" @click="goGoodsDetail(item)">
				   <view style="position: relative;" :style="[imageWrap]" class="u-flex u-row-center">
              <image :class="[{'water-image':dataInfo.listStyle=='1'},{'horizontal-iamge':dataInfo.listStyle=='2'&& !item.couponName},{'coupon-image':dataInfo.listStyle=='2' && item.couponName}]"
					   :src="goosImage(item)"
					   :mode="imageMode">

					   </image>
					  <view v-if="item.couponName" :class="['coupon',{'coupon-horizontal':dataInfo.listStyle=='2'}]">
                {{couponType(item)}}
					  </view>
					  <view v-if="item.couponName && !item.goodsPic" :class="['image-coupon',{'image-coupon-horizontal':dataInfo.listStyle=='2'}]">
              {{couponName(item)}}
					  </view>
					  <view v-if="item.couponName && !item.goodsPic" :class="['image-desc',{'image-desc-horizontal':dataInfo.listStyle=='2'}]">
              {{couponDesc(item)}}
					  </view>
				   </view>

					<view :class="dataInfo.listStyle=='1'?'content':'border-bottom' " class="u-flex-1">
						<view class="title u-line-2">
							{{item.goodsName || item.couponName}}
						</view>
						<view class="bottom ">
							<view class="u-flex" :style="[pointStyle(item)]">
								<block v-if="[1,2].includes(item.paymentWay)">
									<view :class="{'u-flex':dataInfo.listStyle=='2'}">
										<view v-if="dataInfo.integralNum" class="price-point">
											<text>¥{{switchMoney(item.salePrice)}}+</text><tex>{{item.integralPrice}}</tex><text>积分</text>
										</view>
										<view v-if="dataInfo.originalPrice" class="original-point">
											{{switchMoney(item.marketPrice)}}
										</view>
									</view>
								</block>
								<block v-else style="margin: 26rpx 0;">
									<view v-if="dataInfo.integralNum" class=" point-price">
										<text>{{item.integralPrice || item.redeemAmount}}</text>
										<text>积分</text>
									</view>
									<view v-if="dataInfo.originalPrice" class="original-point">
										{{switchMoney(item.marketPrice)}}
									</view>
								</block>

							</view>

							<view v-if="dataInfo.exchangeBtn" class="exchange ">
								兑换
							</view>
						</view>
					</view>


			   </view>
		   </view>
	   </view>
	</view>
</template>

<script>
	import mixin from '../../mixin.js'
	import ponintMixin from './mixin.js'
	export default{
		mixins:[mixin,ponintMixin],
		data(){
			return{
				goodsList:[]
			}
		},
		computed:{
			imageMode(){
				if(this.dataInfo.listStyle=='1'){ //1 瀑布 2 横条
					return 'aspectFill'
				}else{
					return 'scaleToFill'
				}

			},
			imageWrap(){
				if(this.dataInfo.listStyle=='1'){  //1 瀑布 2 横条
					return {
						'width':'100%'
					}
				}else{
					return {
						'width':'222rpx',
						'height': '222rpx',
					}
				}
			},
			goosImage(){
			   return (val)=>{
				   if(val.couponName){ //如果是优惠券就取本地的图片路径
				       if(this.dataInfo.listStyle == '1'){
                  if(val.goodsPic ){
                    return val.goodsPic
                  }
						   return 'https://jdz.g1999.com/ghs/20211026/26aaba9d8b5a43698c1d8339a13f9c47.png'
					   }else{
               if(val.goodsPic ){
                    return val.goodsPic
                }
						   return 'https://jdz.g1999.com/ghs/20211027/df7e43ba1c0c4ffa9028041b013f7999.png'
					   }

				   }else{
					   if (val.goodsPictures && val.goodsPictures.indexOf(',') > -1) {
              return val.goodsPictures.split(',')[0]
            } else {
            return val.goodsPictures
					   }
				   }
			   }
			},
			pointStyle(){
				return (val)=>{
					if(this.dataInfo.listStyle=='1'){  //1 瀑布 2 横条
						if(val.paymentWay == 2 || val.paymentWay == 3){
							return {
								// 'height':'78rpx',
							}
						}else{
							return {
								'height':'45rpx'
							}
						}
					}else{
						return {
							'height':'45rpx'
						}
					}
				}

			},

		},
		created(){
			if(this.dataInfo?.allIds?.length){
				this.fetchGoodsAndCouponByIds(this.dataInfo.allIds)
			}

		},
		methods:{
			//查询优惠券和商品
			async fetchGoodsAndCouponByIds(ids){
				try{
					let res = await this.$http.goodsAndCouponByIds({ids})

          let minGoods = this.dataInfo?.goodsList
					this.goodsList = res.dataInfo?res.dataInfo?.dataInfo ||[]:[]
          minGoods.forEach((item)=>{
            this.goodsList.forEach((val)=>{
              if(val.id == item.id){
                val.enableGoods = item.enableGoods
                val.goodsPic = item.goodsPic
              }

            })
          })
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
			},
			// 跳详情
			goGoodsDetail(item){
				if(item.couponName){
          uni.setStorageSync('moduleDate', {jumpPageName:item?.couponName || '优惠券详情',moduleName:'积分商城'});
					this.goTo(`/pagesA/couponDetail/couponDetail?detail=${JSON.stringify(item)}`)
				}else{
          uni.setStorageSync('moduleDate', {jumpPageName:item.goodsName || '商品详情',moduleName:'积分商城'});
					this.goTo('/pagesA/shop/goodsDetail?id='+item.id)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.water-wrap{
		padding: 10rpx 30rpx;
	}
	.waterfall{
		column-count: 2;
		column-gap: 20rpx;

	}
	.waterfall-item{
		background: #FFFFFF;
		overflow: hidden;
		flex-direction: column;
		margin-bottom: 20rpx;
		break-inside: avoid;
    &:last-of-type{
      margin-bottom: 0!important;
    }
	}
	.water-image{
		width: 335rpx;
		height: 335rpx;
	}
	.horizontal-iamge{
		width: 170rpx;
	    height: 170rpx;
		border-radius: 14rpx;
		overflow: hidden;
	}
	.coupon-image{
		width: 170rpx;
		height: 90rpx;
		border-radius: 14rpx;
		overflow: hidden;
	}

	.border-bottom{
		border-bottom: 2rpx solid #e6e6e6;
		padding: 32rpx 40rpx 20rpx 0 ;
		flex-direction: column;
		display: flex;
		justify-content: space-between;
		height: 222rpx;
	}
	.coupon{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 50rpx;
		background: linear-gradient(180deg, #707070 0%, #464646 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		font-weight: 600;
		color: #FFFFFF;

	}
	.coupon-horizontal{
		width: 170rpx;
		font-size: 20rpx;
		height: 32rpx;
		border-radius: 0 0 14rpx 14rpx;
	}
	.image-coupon{
		position: absolute;
		top: 105rpx;
		text-align: center;
		width: 100%;
		font-size: 24rpx;
		color: #fff;
		font-weight: 600;
	}
	.image-coupon-horizontal{
		top: 82rpx;
		text-align: center;
		width: 100%;
		font-size: 18rpx;
	}

	.image-desc{
		position: absolute;
		top: 161rpx;
	    text-align: center;
	    width: 100%;
	    font-size: 24rpx;
	    color: #fff;
	    font-weight: 600;
	}
	.image-desc-horizontal{
		top: 118rpx;
		text-align: center;
		width: 100%;
		font-size: 18rpx;
	}
	.content{
		width: 100%;
		padding: 14rpx 20rpx 0rpx 20rpx;
		.title{
	        width: 100%;
			font-size: 30rpx;
			font-weight: 600;
			color: #333333;
		}
	}
	.bottom{
		width: 100%;
		margin: 20rpx 0;

		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.point-price{
			text{
				&:first-of-type{
					font-size: 32rpx;
					font-weight: 500;
					color: #191919;
				}
				&:last-of-type{
					font-size: 20rpx;
					font-weight: 500;
					margin-top: 6rpx;
					color: #191919;
				}
			}

		}
		.price-point{
			text{
				&:first-of-type{
					font-size: 32rpx;
					font-weight: 500;
					color: #D1B085;
				}
				&:nth-child(2){
					font-size: 32rpx;
					font-weight: 500;
					color: #191919;
				}
				&:last-of-type{
					font-size: 20rpx;
					font-weight: 500;
					margin-top: 6rpx;
					color: #191919;
				}
			}
		}
		.original-point{
			font-size: 20rpx;
			color: #999999;
			margin:0 12rpx;
			margin-top: 6rpx;
			text-decoration: line-through;
		}
		.exchange{
			width: 80rpx;
			height: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// padding: 4rpx 16rpx;
			background: #D1B085;
			border-radius: 20rpx;
			color: #FFFFFF;
			font-size: 24rpx;
			font-weight: 600;
		}
	}
	.horizontal-item{
		.item-left{
			width: 190rpx;
			height: 190rpx;
			image{
				width: 160rpx;
				height: 160rpx;
				border-radius: 14rpx;
			}
		}
		.item-right{
			height: 222rpx;
			flex: 1;
			padding: 32rpx 40rpx 0 0 ;
			border-bottom: 2rpx solid #e6e6e6;
			.title{
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
			}
		}
	}
</style>
