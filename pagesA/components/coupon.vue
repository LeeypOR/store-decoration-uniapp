<template>
	<view class="">
		<view class="g-coupon" v-for="(item,index) in endData" :key="index">
			<view :class="getClass">
				<view class="item-left">
					<view v-if="[2,4].includes(item.couponType)" :class="current==0?'price':'price-no'">
						<view style="text-align: center">
							<text class="u-font-30">{{ item.discountRatio }}折券</text>
							<text v-if="item.mostDiscount!=-1" class="discount-price"
								style="font-size: 24rpx;display: block">最多优惠{{ item.mostDiscount }}</text>
						</view>
					</view>
					<view v-else :class="current==0?'price':'price-no'">
						<view>
							<text class="u-font-30">￥</text>
							<text class="discount-price">{{ (item.couponAmount) }}</text>
						</view>
					</view>
					<view class="info">
						<view class="name">{{strSplit(item.couponName,9)}}</view>
						<view class="endTime">{{getCouponTitle(item)}}</view>
						<view :class="current==0?'coupon-rules':'coupon-rules-no'" v-if="item.couponFullMoney !=-1">
							满{{item.couponFullMoney}}可用</view>
						<view :class="current==0?'coupon-rules':'coupon-rules-no'" v-else>无门槛</view>
					</view>
				</view>
				<view @click="goRouter(item)" class="item-right">
					<view v-if="current == 0 " class="use">
						{{isShow(item)?'去使用':'未到使用时间'}}
					</view>
					<view v-else class="used">已使用/已过期</view>
				</view>
			</view>
			<view class="flod">
				<view class="title" @click="showFlod(item,index)">
					<view class="title-left">
						使用说明
					</view>
					<view v-if="!item.checked" class="title-right">
						<text class="iconfont icon-app_icon_xiala"></text>
					</view>
					<view v-else class="title-right">
						<text class="iconfont icon-app_icon_shouhui"></text>
					</view>
				</view>
				<view v-if="item.checked" class="flod-content">
					<text class="explain">{{item.couponDesc}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			current: {
				type: Number,
				default: 0
			},
			couponsList: {
				type: Array,
				default: () => []
			}
		},
		data () {
			return {
				item: {},
				index: 0,
				endData: []
			}
		},
		watch: {
			couponsList: {
				handler (val) {
					this.endData = val
				},
				immediate: true,
				deep: true
			},
		},
		computed: {
			
			isShow () {
				return (item) => {
					if ([2, 3].includes(item?.useTimeType)) {
						return true
					}
					return new Date().getTime() <= new Date(item.useEndTime.replace(/-/g, '/')).getTime() && new Date()
						.getTime() >= new Date(item.useStartTime.replace(/-/g, '/')).getTime()
				}
			},

			getClass () {
				return `card-item bg${this.current}`
			},
		},
		methods: {
			showFlod (item, index) {

				this.endData.forEach((val, key) => {
					if (index == key) {
						item.checked = !item.checked
					} else {
						val.checked = false
					}

				})

				this.endData = [...this.endData]
			},
			goRouter (item) {

        if (this.current != 0) {
          return
        }

        if (![3].includes(item.useTimeType) && !(new Date().getTime() <= new Date(item.useEndTime.replace(/-/g, '/')).getTime() && new Date()
            .getTime() >= new Date(item.useStartTime.replace(/-/g, '/')).getTime())) {
          return
        }

        let id,groupId
        if(item && item.enableGoods){
          id = item.enableGoods
          if(item.enableGoods.indexOf(',')<0){ //如果enableGoods只有一个跳转详情
            this.goTo('/pagesA/shop/goodsDetail?id='+id)

          }else{//多个ids就跳商品列表搜索页面
            this.goTo('/pagesB/search/goodsList?goodsIds='+id)
          }
        }else if(item && item.enableGoodsGroup){
          groupId = item.enableGoodsGroup
          if(item.enableGoods.indexOf(',')<0){//单个分类id跳商品列表搜索页面，
            this.goTo('/pagesB/search/goodsList?goodsGroupId='+groupId)
          }else{//多个分类id跳分类页面，
            this.goTo('/pages/category/index',true)
          }
        }else{//enableGoods和enableGoodsGroup都是空的也跳转分类页面
          this.goTo('/pages/category/index',true)
        }
      },
		}
	}
</script>

<style scoped lang="scss">
  .g-coupon {
    margin-bottom: 20rpx;
  }
	.card-item {
		background: #FFFFFF;
		background-size: 100% 100%;
		width: 690rpx;
		height: 190rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		&.bg0 {
			background-image: url('../../static/image/mine/app_list_youhuiquan_weishiyong.png');
		}

		&.bg1 {
			background-image: url('../../static/image/mine/app_list_youhuiquan_used.png');
		}

		.item-left {
			width: 482rpx;
			display: flex;
			height: 100%;

			.price {
				width: 196rpx;
				padding: 0 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #ECDBA9;
				font-size: 36rpx;
				font-weight: 500;
			}

			.price-no {
				width: 187rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 36rpx;
				font-weight: 500;
				color: #FFFFFF;
			}

			.discount-price {
				font-size: 38rpx;
				margin-left: 2rpx;
			}

			.info {
				flex: 1;

				.name {
					font-size: 28rpx;
					margin: 30rpx 0 10rpx 0;
					font-weight: 600;
					color: #FFFFFF;
				}

				.endTime {
					font-size: 24rpx;
					color: #FFFFFF;
					margin: 0 0 16rpx 0;

				}

				.coupon-rules {
					font-size: 22rpx;
					color: #ECDBA9;
				}

				.coupon-rules-no {
					font-size: 22rpx;
					color: #FFFFFF;
				}
			}
		}

		.item-right {
			width: 208rpx;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.use {
				font-size: 28rpx;
				font-weight: 500;
				color: #2A2D4C;
			}

			.used {
				font-size: 28rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}

	.flod {
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 0px 0px 14rpx 14rpx;

		.title {
			display: flex;
			justify-content: space-between;
			padding: 18rpx 30rpx;

			.title-left {
				font-size: 24rpx;
				color: #666666;
			}

			.title-right {

				.icon-app_icon_xiala,
				.icon-app_icon_shouhui {
					width: 24px;
					height: 14px;
					color: #CCCCCC;
					font-size: 28rpx;
				}
			}
		}

		.flod-content {
			padding: 0 30rpx 20rpx 30rpx;

			.message {
				font-size: 22rpx;
				color: #666666;
				margin-bottom: 10rpx;
			}

			.explain {
				font-size: 24rpx;
				color: #191919;
			}
		}

	}
</style>
