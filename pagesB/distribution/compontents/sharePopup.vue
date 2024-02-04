<template>
	<view>
		<u-mask :show="show" @click="show = false">
			
			<view :style="{background:background}" @tap.stop class="warp">
				<u-navbar v-if="shareImage" title-color="#191919" title="生成海报" title-size="36"  class="location-class" :background="{background:'#ffffff'}" :border-bottom="false"
				      :is-back="false" ></u-navbar>
				<view    class="u-flex-1 u-flex u-row-center" @tap.stop>
						<hch-poster
			 	  ref="hchPoster"
				  style="position: relative;top: -999999rpx;"
				  @createdFinish="createdFinish"
				  @saveFinish = "saveFinish"
			 	  @cancel="handleCancel"
			 	  :posterData.sync="posterData"
			 	  @previewImage="previewImage"
			 	/>
				<view  @tap.stop >
					
					<image style="width: 560rpx;height: 760rpx;" v-if="shareImage" :src="shareImage" ></image>
				</view>
				 
					<!-- <painter
						ref="hchPoster"
						style="position: absolute; top: 0rpx;"
						:palette="imgDraw"
						@imgOK="onImgOK"
						@imgErr="onImgErr" /> -->
				</view>

				<view @tap.stop v-if="shareData" :style="{height:isShowTitle?'410rpx':'350rpx'}" class="popup-box">
					<view style="width: 100%;" v-if="isShowTitle" class="">
						<view style="width: 100%;" class="titel">分享后最多可赚¥{{switchMoney(shareData.oneLevelDistributionPrice)}}</view>
						<view style="width: 100%;" class="desc">
							返利金额可以在分销员中心查看
						</view>
					</view>
					
					<view class="u-flex u-flex-1" style="justify-content: center;height: 260rpx;">
						<view @click="handleShowPoster(item)" class="u-flex share-box" v-for="item in shareList">
							<image class="share-img" :src="item.image"></image>
							<view class="share-name">{{item.title}}</view>
							<button class="share-btn" open-type="share" v-if="item.title == '微信好友'"></button>
						</view>
					</view>
					<view class="btn-close" @click="cancel">取消</view>
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	import HchPoster from './hch-poster/hch-poster.vue'
	export default {
		components: {
			HchPoster,
		},
		props: {
			shareData: {
				type: Object,
				default: null
			},


		},
		watch: {
			shareData: {
				handler (val) {
					this.newShareData = val
					this.posterData = {
						poster: {
							//根据屏幕大小自动生成海报背景大小
							url: '', //图片地址
							r: 0, //圆角半径
							w: 224 * this.scale, //海报宽度
							h: 300 * this.scale, //海报高度
							p: 0 //海报内边距padding
						},
						mainImg: {
							//海报主商品图
							url: this.newShareData?.goodsPictures, //图片地址
							r: 10, //圆角半径
							w: 224 * this.scale, //宽度
							h: 224 * this.scale //高度
						},

						avatarImg: {
							url: this.$globleData.userData.avatar, //图片地址
							w: 40, //宽度
							h: 40, //高度
							r: 20, //圆角半径
							x: 90,
						},
						nickName: {
							text: this.$globleData.userData.nickName,
							fontSize: 19, //字体大小
							color: '#191509', //颜色
							lineHeight: 25, //行高
							x: 136,
						},
						title: {
							//商品标题

							text: this.newShareData?.goodsName.length > 8 ? this.newShareData?.goodsName.substr(0, 8) +
								'...' : this.newShareData?.goodsName, //文本
							fontSize: 19, //字体大小
							color: '#191509', //颜色
							lineHeight: 25, //行高
							mt: 20 //margin-top
						},
						salesPrice: {
							price: this.switchMoney(this.newShareData?.salePrice),
							fontSize: 19, //字体大小
							color: '#E85959',
							mt: 6 //margin-top
						},
						markPrice: {
							price: this.switchMoney(this.newShareData?.marketPrice),
							fontSize: 19, //字体大小
							color: '#999999',
							ml: 10 //margin-left
						},
						codeImg: {
							//小程序码
							url: this.newShareData?.codeImage, //图片地址
							w: 50, //宽度
							h: 50, //高度
							mt: 10, //margin-top
							r: 25, //圆角半径
							x: 234.5
						},
						tips: []
					}
				},
				immediate: true
			}
		},
		computed: {
			show: {
				get: function () {
					return this.$store.state.showDistributor
				},
				set: function (value) {
					this.$store.commit('setShowDistributor', value)
				}
			},
			isShowTitle(){
				if(this.$globleData?.distributor?.auditStatuse == 1){
					return true
				}else{
				    return false
				}
			}
		},
		
		data () {
			return {
				// show: false,
				system: null,
				background:'',
				scenId: '',
				scale: 1,
				shareImage:'',
				newShareData: null,
				shareList: [{
						image: '/pagesB/static/images/share_icon_wxhy.png',
						title: '微信好友'
					},
					{
						image: '/pagesB/static/images/share_icon_hbfx.png',
						title: '生成海报'
					}
				],
				imgDraw: {},
				shareCodeFinished: false,
				// 海报模板数据
				posterData: {

				}
			}
		},
		methods: {
			// 海报生成玩
			createdFinish (val) {
				if (val) {
					let flag = false
					this.shareList.forEach(item=>{
						if(item.title == '保存图片'){
							flag = true
						}
					})
					if(!flag){
						this.shareList.push({
							image: '/pagesB/static/images/share_icon_bctp.png',
							title: '保存图片'
						})
					}
					this.background = '#d8d8d8'
					this.shareImage = val
				}
			},
			// 保存图片完之后删除保存图片的按钮
			saveFinish (val) {
				if (val) {
					this.removeData()
				}
			},
			// 清除數據
			removeData(){
				this.$store.commit('setShowDistributor', false)
				this.shareImage =''
				this.background =''
				// 删除保存图片的按钮
				this.shareList = this.shareList.filter(item => {
					if (item.title != '保存图片') {
						return true
					}
				})
			},
			cancel () {
				this.removeData()
			},
			handleCancel (val) {
				// this.canvasFlag = val
			},
			onImgOK (e) {
				console.log(e)
			},
			onImgErr () {

			},


			handleShowPoster (item) {
				if (item.title == '生成海报') {
					this.$refs.hchPoster.posterShow()
					// this.$refs.hchPoster.showCanvas = true


				} else if (item.title == '保存图片') {
					this.$refs.hchPoster.handleSaveCanvasImage()
				}

			},
			previewImage (base64) {
        getApp().globalData.preveImage = 'preveImage'
				// 预览图片
				uni.previewImage({
					urls: [base64]
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
		.warp {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			width: 100%;

		}
	

	.popup-box {
		// position: fixed;
		// bottom: 0;
		padding: 40rpx 30rpx 0 30rpx;
		width: 100vw;
		background: #FFFFFF;
        display: flex;
		flex-direction: column;
		.title {
			font-size: 24rpx;
			font-weight: 500;
			color: #191919;
		}

		.desc {
			font-size: 24rpx;
			color: #999999;
			margin-top: 8rpx;
		}

		.share-box {
			flex-direction: column;
			margin-right: 80rpx;
			position: relative;

			.share-img {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
			}

			.share-name {
				transform: translateY(-16rpx);
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #666666;
			}

			&:nth-last-of-type(1) {
				margin-right: 0rpx;
			}
		}

		.btn-close {
			// margin-top: 40rpx;
			padding: 0;
			width: 100vw;
            height:iphone-bottom(98rpx);
			transform: translateX(-30rpx);
			border-top: 1rpx solid rgba(25, 21, 9, .08);
           
			// border: 1px solid red;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 34rpx;
			font-weight: 500;
			color: #191509;
			// padding: 24rpx 0 iphone-bottom(24rpx) 0;
		}
	}

	.share-btn {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 1;
	}
</style>
