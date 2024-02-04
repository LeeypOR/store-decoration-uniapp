<template>
	<view>
		<view class="exchangePop">
			<u-popup @click="exchangeShow=false" :mask-close-able="false" v-model="exchangeShow" mode="center"
				backgroundColor="rgba(0,0,0,0)" z-index="99999999999991">

				<view class="warp">
					<view @click="exchangeShow=false" class="close ">
						<text class=" iconfont icon-closed" style=""></text>
					</view>

					<view class="rect" @tap.stop>
						<view :style="[imageStyle]" class="image-wrap ">
						
							<!-- <view v-if="dataInfo && dataInfo.goodsType==1">
								<view class="goods-name">{{dataInfo.goodsName}}</view>
								<image class="specify-image" mode="aspectFit" :src="imgUrl(dataInfo.goodsPicture )" />
							</view> -->

						</view>
						<view v-if="pageJosn.drawBtnShow == 1" class="u-flex u-row-center">
							<view @click="goRouter" class="btn" :style="[btnStyle]">{{pageJosn.drawBtnText}}</view>
						</view>
					</view>
				</view>

			</u-popup>

		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		props: {
			dataInfo: {
				type: Object,
				default: () => {}
			},
			ids: {
				type: Number,
				default: 0
			},
			exchangeInfo: {
				type: Array,
				default: () => []
			}
		},
   
		data () {
			return {
				exchangeShow: false,
				pageJosn: {},
				scale: 1
			};
		},
		computed: {
      
			...mapState(['exchangeData']),
			imageStyle () {
				let obj = {}
				console.log('this.dataInfo: ', this.pageJosn);
				if (this.pageJosn.bannerType == 1) { //系统样式

					obj.background =
						"url('https://jdz.g1999.com/ghs/20220622/c717e9116c8c46a79a96505fd894959a.png') no-repeat"
					obj.backgroundSize = 'cover';
				}
				if (this.pageJosn.bannerType == 2) { //自定义
					obj.background = `url(${this.pageJosn.bannerImageUrl}) no-repeat`
					obj.backgroundSize = 'cover';
				}
				return obj
			},
			btnStyle () {
				let obj = {

					'font-size': this.pageJosn.drawfontSize * this.scale + 'rpx',
					'font-weight': `${this.pageJosn.drawfontWeight} `,
					'color': `${this.pageJosn.drawtColor}`,
					'background': `${this.pageJosn.drawbgColor}`,
				}
				if (this.pageJosn.drawAngelType == 1) { //按钮底框倒角 0直角 1倒角
					obj.borderRadius = `43rpx`
				}


				return obj
			}
		},
		watch: {
			dataInfo: {
				handler (newVal) {
					console.log(getApp()?.globalData.systemInfo.windowWidth, '88888888')
					this.scale = 750 / (getApp()?.globalData.systemInfo?.windowWidth) || 1
					console.log('newVal:dddddddddddddddd ', newVal);
					if (newVal?.msgJson) {
						this.pageJosn = JSON.parse(newVal?.msgJson)
					}
					debugger
					if (JSON.stringify(newVal) != '{}') {
						if (newVal.enableWindow == 1 && newVal.windowPlaces.includes(this.getRouter)) {
							this.exchangeShow = true
							if (newVal.windowRange != 1) {
								this.exchangeRecord()
							}

						}

					}
				},
				immediate: true,
				deep: true
			},
			exchangeShow: {
				handler (newVal) {
					if (!newVal) {
						let param = {
							ids: this.ids + 1,
							activityId: this.dataInfo.id
						}
						this.$emit('exchangeClose', param)

					}
				},
				immediate: true,
				deep: true
			},
		},
		methods: {
      ...mapMutations(['setExchangeList']),
			async exchangeRecord () {
				try {
					await this.$http.exchangeRecord({
						activityId: this.dataInfo.id,
						windowRange: this.dataInfo.windowRange
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			goRouter () {
				let arr = JSON.parse(JSON.stringify(this.exchangeData.length ? this.exchangeData : this.exchangeInfo))
				if (this.dataInfo.goodsType == 1) { //指定商品

					this.goTo(
						`/pagesA/shop/goodsDetail?id=${this.dataInfo.goodsId}&activeType=EZ&activeId=${this.dataInfo.id}`
						)

				}
				if (this.dataInfo.goodsType == 2) { //兑换专区
					this.goTo(`/pagesD/exchangeZone/index?activityId=${this.dataInfo.id}`)
				}
				let flag = arr.some(item => {
					return item.enableWindow == 1 && item.windowPlaces.includes(this.getRouter)
				})
				console.log('flag: ', flag);
				if (flag) {
					arr.forEach(item => {
						if (item.id == this.dataInfo.id && item.windowRange == 1) {
							item.enableWindow = 2
							// item.isCash = true // 是否是每次弹窗缓存数据的标识
						}

					})
					this.setExchangeList(arr)
					
					
				}
			}
		},
	};
</script>

<style scoped lang="scss">
	.warp {

		height: 100%;
		position: relative;
	}

	.close {
		width: 100%;
		text-align: right;
		padding: 30rpx 90rpx;

		.icon-closed {
			font-size: 61rpx;
			color: rgba(255, 255, 255, 0.5);
		}
	}

	.rect {

		width: 750rpx;

		.image-wrap {
			width: 100%;
			height: 572rpx;
			display: flex;
			justify-content: center;
			overflow: hidden;

			.goods-name {
				text-align: center;
				font-size: 30rpx;
				color: #191919;
				margin-top: 234rpx;
			}

			.specify-image {
				margin-top: 30rpx;
				width: 270rpx;
				height: 156rpx;
			}
		}

		.btn {
			width: 320rpx;
			height: 86rpx;
			margin-top: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
	}
</style>
