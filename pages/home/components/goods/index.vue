<template>

	<view>
		<!-- 头部分组导航 -->

		<view style="100%" v-if="dataInfo.shopListType == 2">
			<u-tabs ref="uTabs" :list="list" name="groupTableName" :current="current" inactive-color="#66666"
				active-color="#D1B085" @change="tabsChange"
				swiperWidth="750"></u-tabs>
		</view>
		<!-- 一排一个，一排两个，一排三个 -->
		<view v-if=" dataInfo.listStyle==0 ||dataInfo.listStyle==1|| dataInfo.listStyle==2 || dataInfo.listStyle==3"
			class="">
			<!-- <goodsCom :leftWidth="leftWidth"  :dataInfo="dataInfo" :catType="catType"></goodsCom> -->
			<view
				:class="['goods-container',{'wrap-two':dataInfo.listStyle==2},{'wrap-flex':dataInfo.listStyle==1 ||dataInfo.listStyle==2||dataInfo.listStyle==5},{'scroll-box':dataInfo.listStyle==3}]"
				:style="[stylePadding]">
				<view style="overflow: hidden;background: #FFFFFF;" :class="[{'box-shandow':dataInfo.shopType == '1'},
        {'is-boderRaius':dataInfo.angleType == '1' &&dataInfo.angleNum ==2 },
        {'scroll-item':dataInfo.listStyle==3},
        {'boderRaius-two':dataInfo.angleType == '1' &&dataInfo.angleNum ==1 }]"
					:style="[{'margin-top':dataInfo.imagePadding*pxToRpxScale+'rpx'},{'margin-right':dataInfo.listStyle==3?dataInfo.imagePadding*pxToRpxScale+'rpx':''},
            {'width':imgWidth*pxToRpxScale+'rpx'}]"
					v-for="(item,index) in endData " :key="index"
					@click="jumpPage(item)">
						<view class="img u-flex " :class="dataInfo.imgFill=='1'?'u-row-center':''"
							:style="[{'width':imgWidth*pxToRpxScale+'rpx','height':dataInfo.listStyle==5?'auto':imgHeight*pxToRpxScale+'rpx'}]">
							<image :mode="bgImgMode"
								:class="[{'img-boderRaius':dataInfo.angleType == '1' && dataInfo.imgFill !='1' }]"
								:style="[smallImage]"
								:src="imgUrl(item.goodsPicture || item.goodsPictures)">
							</image>

							<view v-if="dataInfo.shopBadge"
								:class="['hot-name',{'bage-3':dataInfo.badgeType==3 && dataInfo.badgeImgUrl},{'bage':dataInfo.badgeType==2},{'bage-1':dataInfo.badgeType==1}]"
								:style="{'left':dataInfo.imgFill=='1'?'10rpx':(dataInfo.badgeType==1?'20rpx':0)}">
								{{dataInfo.badgeType ==1?'热销':(dataInfo.badgeType ==2?'新品':'')}}

								<image mode="aspectFill" v-if="dataInfo.badgeImgUrl && dataInfo.badgeType==3" :src="dataInfo.badgeImgUrl">
								</image>
							</view>
						</view>


						<view class=" u-line-1 " :class="dataInfo.listStyle == '0'?'title-0':'title-1'"
							v-if="dataInfo.shopName" :style="{'font-weight':dataInfo.titleThickness}">
							{{item.goodsName}}
						</view>

						<view v-if="dataInfo.shopDescription" :class="dataInfo.listStyle == '0'?'desc-0':'desc-1'"
							class=" u-line-1">
							<text>{{item.goodsSellingPoint}}</text>
						</view>

						<view v-if="dataInfo.shopOriginalPrices" class="sales ">
							已售：{{item.goodsSales || item.realSales || 0}}件
						</view>
						<view class="price u-flex   " :class="dataInfo.shopPrices?'u-row-between':'u-row-right'">
							<view v-show="dataInfo.shopPrices" class="total">
								<text :class="dataInfo.listStyle == '0'?'pic':'pic-1'">¥</text>
								<text
									:class="dataInfo.listStyle == '0'?'price-num':'price-num-1'">{{switchMoney(item.goodsLowestPrice|| item.salePrice)}}</text>
							</view>
							<view v-if="dataInfo.shopBuyBtn && dataInfo.btnType == 1 "
								class="cart u-flex u-row-center u-col-center">
								<text class="iconfont icon-app_icon_gouwuche"></text>
							</view>
							<view v-if="dataInfo.shopBuyBtn && dataInfo.btnType == 2" class="buys-type"
								:class="dataInfo.listStyle!='0'?'buys-type-2':''">
								马上抢
							</view>
						</view>
				</view>
			</view>
		</view>

		<!-- 横条模式 -->
		<view v-if="dataInfo.listStyle==4" :style="[stylePadding]">
			<view @click="jumpPage(item)" :style="{'margin-top':`${dataInfo.imagePadding*pxToRpxScale}rpx`}"
				class="transverse-wrap "
				v-for="(item,index) in goodsList"
				:class="{'box-shandow':dataInfo.shopType == '1','is-boderRaius':dataInfo.angleType == '1'}"
				:key="index">
				<view class="transverse-left ">
					<!--  {'boderRaius-two':dataInfo.angleType == '1' &&dataInfo.angleNum ==1 } {'boderRaius-two':dataInfo.angleType == '1' &&dataInfo.angleNum ==1 } -->
					<view class="u-flex " style="background: #FFFFFF;overflow: hidden;"
						:class="dataInfo.imgFill=='1'?'u-row-center':''" :style="[imageStyle1]">
						<image :mode="horizontalMode"
							:style="{'height':dataInfo.imgFill=='1'?'100%':'100%','width':dataInfo.imgFill=='1'?'100%':'100%'}"
							:src="imgUrl(item.goodsPicture || item.goodsPictures)"></image>
					</view>

					<!-- aspectFill -->
					<view class="container">
						<view style="width: 0;" class="u-flex-1">
							<view class="u-line-1 title" v-if="dataInfo.shopName"
								:style="{'font-weight':dataInfo.titleThickness}">
								{{item.goodsName}}
							</view>
							<view v-if="dataInfo.shopDescription" class="desc u-line-1">
								<text>{{item.goodsSellingPoint}}</text>
							</view>
						</view>
						<view class="u-flex price">
							¥{{switchMoney(item.goodsLowestPrice) || 0}}
						</view>
					</view>

				</view>
			</view>
		</view>
		<!-- 瀑布模式 -->

		<view v-if="dataInfo.listStyle=='5' && goodsList.length">

			<!-- 瀑布流布局列表 -->
			<view class="pubuBox">
				<view class="pubuItem" :style="[stylePadding,{'column-gap':dataInfo.imagePadding*pxToRpxScale+'rpx'}]">
					<view class="item-masonry" :class="[{'box-shandow':dataInfo.shopType == '1'},
			{'is-boderRaius':dataInfo.angleType == '1' &&dataInfo.angleNum ==2 },
			{'boderRaius-two':dataInfo.angleType == '1' &&dataInfo.angleNum ==1 }]"
						@click="jumpPage(item)"
						:style="[{'margin-bottom':dataInfo.imagePadding*pxToRpxScale+'rpx'},
				        {'width':imgWidth*pxToRpxScale+'rpx'}]" v-for="(item, index) in goodsList" :key="index">
						<!-- dataInfo.listStyle==5?'auto': -->
						<view class="img u-flex"
							:style="[{'width':imgWidth*pxToRpxScale+'rpx','height': imgHeight*pxToRpxScale+'rpx'}]">
							<image
								:class="[dataInfo.imgFill=='1'?'u-row-center':'',{'img-boderRaius':dataInfo.angleType == '1' && dataInfo.imgFill !='1'}]"
								:style="[smallImage]"
								mode="aspectFill"
								:src="imgUrl(item.goodsPicture || item.goodsPictures)">
							</image>
							<view v-if="dataInfo.shopBadge"
								:class="['hot-name',{'bage-3':dataInfo.badgeType==3 && dataInfo.badgeImgUrl },{'bage':dataInfo.badgeType==2},{'bage-1':dataInfo.badgeType==1}]"
								:style="{'left':'10rpx'}">
								{{dataInfo.badgeType ==1?'热销':(dataInfo.badgeType ==2?'新品':'')}}
								<image mode="aspectFill" v-if="dataInfo.badgeImgUrl &&dataInfo.badgeType==3" :src="dataInfo.badgeImgUrl"></image>
							</view>
						</view>

						<view class="" style="word-break:break-all;"
							:class="dataInfo.listStyle == '0'?'title-0':'title-1'"
							v-if="dataInfo.shopName" :style="{'font-weight':dataInfo.titleThickness}">
							{{item.goodsName}}
						</view>
						<view style="word-break:break-all;" v-if="dataInfo.shopDescription"
							:class="dataInfo.listStyle == '0'?'desc-0':'desc-1'"
							class="">
							<text>{{item.goodsSellingPoint}}</text>
						</view>
						<view v-if="dataInfo.shopOriginalPrices" class="sales">
							已售：{{item.goodsSales || item.realSales || 0}}件
						</view>
						<view class="price u-flex u-row-between u-col-center" :class="dataInfo.shopPrices?'u-row-between':'u-row-right'">
							<view v-show="dataInfo.shopPrices" class="total">
								<text :class="dataInfo.listStyle == '0'?'pic':'pic-1'">¥</text>
								<text
									:class="dataInfo.listStyle == '0'?'price-num':'price-num-1'">{{switchMoney(item.goodsLowestPrice)}}</text>
							</view>
							<view v-if="dataInfo.shopBuyBtn && dataInfo.btnType == 1 "
								class="cart u-flex u-row-center u-col-center">
								<text class="iconfont icon-app_icon_gouwuche"></text>
							</view>
							<view v-if="dataInfo.shopBuyBtn && dataInfo.btnType == 2" class="buys-type"
								:class="dataInfo.listStyle!='0'?'buys-type-2':''">
								马上抢
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import mixin from './mixin.js'
	export default {
		mixins: [mixin],
	}
</script>

<style lang="scss" scoped>
	/deep/.u-tab-bar {
		background: #D1B085 !important;
	}

	.goods-container {
		margin-bottom: 20rpx;
		width: 100%;

		&.wrap-flex {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		&.wrap-two {
			&::after {
				content: '';
				width: var(--width);
			}

		}
	}

	.transverse-wrap {
		// height: 140rpx;
		width: 100%;
		padding: 10rpx;
		display: flex;
		background: #FAFAFA;
		justify-content: space-between;

		.transverse-left {
			display: flex;
			justify-content: space-between;
			width: 100%;

			.container {
				display: flex;
				flex: 1;
				justify-content: space-between;

				.title {
					font-size: 32rpx;
					padding: 20rpx 0 8rpx 20rpx;
				}

				.desc {
					padding-left: 20rpx;
					font-size: 28rpx;
				}

				.price {
					max-width: 200rpx;
					min-width: 100rpx;
					font-size: 32rpx;
					color: #333333
				}
			}

		}
	}

	/* 瀑布流 */
	//瀑布流
	page {
		background-color: #eee;
		height: 100%;
	}

	.pubuBox {
		// padding: 22rpx;
	}

	.scroll-item {
		display: inline-block;
		margin-bottom: 20rpx;
	}

	// 滑动模式
	.scroll-box {
		overflow-x: scroll;
		/* 内容会被裁剪，会以滚动条显示 */
		overflow-y: hidden;
		/* 超出内容不可见 */
		white-space: nowrap;
		/* 不换行 */
	}

	.pubuItem {
		column-count: 2;
		column-gap: 0;
	}

	.box-shandow {
		// box-shadow:  0 0 20rpx -3rpx #999;

		box-shadow: 0px 4rpx 8rpx 0px rgba(0, 0, 0, 0.1);

	}

	.is-boderRaius {
		border-radius: 14rpx;
	}

	.boderRaius-two {
		border-radius: 14rpx 14rpx 0 0;
	}


	.img {
		position: relative;
        .hot-name{

		}
		.bage {
			position: absolute;
			top: 16rpx;
			left: 0;
			font-size: 20rpx;
			text-align: center;
			background: #191919;
			padding: 0 16rpx;
			border-radius: 0 40rpx 40rpx 0;
			color: #fff;
			// height: 40rpx;
			// line-height: 40rpx;

			&-3 {
				position: absolute;
				top: 16rpx;
				left: 0;
				width: 72rpx;
				height: 72rpx;
				background: rgba(154, 233, 255, 0.57);
			}

			&-1 {
				position: absolute;
				top: 16rpx;
				left: 20rpx;
				// text-align: center;
				// max-width: 36rpx;
        writing-mode:vertical-rl;
				padding: 12rpx 8rpx;
				background: #D1B085;
				border-radius: 6rpx;
				opacity: 0.8;
				font-size: 20rpx;
				color: #FFFFFF;
			}
		}

		image {
			width: 100%;
			height: 100%;
		}
	}

	.img-boderRaius {
		border-radius: 14rpx 14rpx 0 0;
	}

	.title {
		&-0 {
			padding: 16rpx 28rpx 0 28rpx;
			font-size: 32rpx;
		}

		&-1 {
			padding: 16rpx 28rpx 0 28rpx;
			font-size: 26rpx;
		}


	}

	.desc {
		&-0 {
			padding: 0 28rpx 0 28rpx;
			font-size: 28rpx;
			color: #999999;
		}

		&-1 {
			padding: 0 28rpx 0 28rpx;
			font-size: 26rpx;
			color: #999999;
		}

	}

	.sales {
		padding: 20rpx 0 0 30rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #999999;
	}

	.price {
		padding: 0 28rpx;
		height: 88rpx;
		.total {
			color: #191919;
			width: 60%;
			height: 40rpx;
			.pic {
				font-size: 32rpx;
			}

			.pic-1 {
				font-size: 24rpx;
			}

			.price-num {
				font-size: 40rpx;

			}

			.price-num-1 {
				font-size: 28rpx;
			}
		}

		.cart {
			width: 52rpx;
			height: 50rpx;

			.icon-app_icon_gouwuche {
				// color: #FF4444;
				font-size: 40rpx;
			}
		}

		.buys-type {
			width: 140rpx;
			height: 52rpx;
			background: #191919;
			border-radius: 28rpx;
			font-size: 28rpx;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;

			&.buys-type-2 {
				width: 100rpx;
				height: 36rpx;
				font-size: 24rpx;
			}
		}
	}

	.item-masonry {
		overflow: hidden;
		break-inside: avoid;
		/*避免在元素内部插入分页符*/
		box-sizing: border-box;
    background: #ffffff;
    &:last-of-type{
      margin-bottom: 0!important;
    }
	}

	.item-masonry image {
		width: 100%;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			min-height: 39rpx;
			max-height: 78rpx;
		}

		.listtitle2 {
			color: #ff0000;
			font-size: 32rpx;
			line-height: 32rpx;
			font-weight: bold;
			padding-top: 22rpx;

			.listtitle2son {
				font-size: 32rpx;
			}
		}

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
		}
	}

	.Index {
		width: 100%;
		height: 100%;
	}
</style>
