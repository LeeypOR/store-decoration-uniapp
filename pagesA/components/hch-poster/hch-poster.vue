<!--
 * @Description: 生成海报组件
 * @Version: 1.0.0
 * @Autor: hch
 * @Date: 2020-08-07 14:48:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-31 18:11:35
 * 保存海报按钮和关闭按钮 在html代码中写出来 绑定点击方法然后透明 再用canvas 覆盖
-->

<template>
	
	<!-- :style="'width:' + system.w + 'px; height:' + system.h + 'px;'" -->
	<view
		class="canvas-content"
		v-show="canvasShow"
		catchtouchmove="stopmove" @touchmove.prevent="stopPrevent">
		
		<!-- 遮罩层 -->
 
		<!-- <view class="canvas-mask"></view> -->
		<!-- 海报 -->
		<!-- :width="system.w" :height="system.h" 支付宝必须要这样设置宽高才有效果 -->
		<!-- :style="'width:' + system.w + 'px; height:' + system.h + 'px;'" -->
		<canvas
			class="canvas"
			canvas-id="myCanvas"
			id="myCanvas"
			style="width: 100vw;height: 66vh;background: #D8D8D8;"
			
			:width="system.w"
			:height="system.h"></canvas>
		 <!-- <view class="button-wrapper"> -->
			<!-- 保存海报按钮 -->
			<!-- #ifndef MP-QQ -->
			<!-- cover-view 标签qq小程序有问题 -->
			<!-- <cover-view class="save-btn" @tap="handleSaveCanvasImage">保存海报</cover-view> -->
			<!-- <cover-view class="save-btn cancel-btn" @tap="handleCanvasCancel">取消</cover-view> -->
			<!-- #endif -->
			<!-- #ifdef MP-QQ -->
			<!-- <view class="save-btn" @tap="handleSaveCanvasImage">保存海报</view> -->
			<!-- <view class="save-btn cancel-btn" @tap="handleCanvasCancel">取消</view> -->
			<!-- #endif -->

		<!-- </view> -->

	</view>
</template>

<script>
	import {
		drawSquarePic,
		drawTextReturnH,
		getSystem
	} from './utils'
	export default {
		data () {
			return {
				system: {},
				canvasShow: false
			}
		},
		props: {
			posterData: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		
		computed: {
			/**
			 * @description: 计算海报背景数据
			 * @param {*}
			 * @return {*}
			 * @author: hch
			 */
			poster () {
				let data = this.posterData
				let system = this.system
				let posterBg = {
					url: data.poster.url,
					// r: data.poster.r * system.scale,
					// w: data.poster.w * system.w,
					// h: data.poster.h * system.h,
					// x: (system.w - data.poster.w * system.w ) / 2,
					// y: (system.h*0.65  -  data.poster.h * system.h +system.statusBarHeight) / 2 ,
					r: data.poster.r * system.scale,
					w: data.poster.w * system.scale,
					h: data.poster.h * system.scale,
					x: (system.w - data.poster.w * system.scale) / 2,
					y: (system.h*0.65  - data.poster.h +system.statusBarHeight) / 2 ,
				    
					p: data.poster.p * system.scale
				}
				return posterBg
			},
			/**
			 * @description: 计算海报头部主图
			 * @param {*}
			 * @return {*}
			 * @author: hch
			 */
			mainImg () {
				let data = this.posterData
				let system = this.system
				let posterMain = {
					url: data.mainImg.url,
					// r: data.mainImg.r * system.scale,
					// w: data.poster.w * system.w,
					// h: data.poster.w * system.w,
					// x: (system.w - data.poster.w * system.w) / 2,
					// y: this.poster.y + data.poster.p * system.scale,
					
					r: data.mainImg.r * system.scale,
					w: data.mainImg.w * system.scale,
					h: data.mainImg.h * system.scale,
					x: (system.w - data.mainImg.w * system.scale) / 2,
					y: this.poster.y + data.poster.p * system.scale
				}
				return posterMain
			},
			/**
			 * @description: 计算海报标题
			 * @param {*}
			 * @return {*}
			 * @author: hch
			 */

			/**
			 * @description: 计算小程序码
			 * @param {*}
			 * @return {*}
			 * @author: hch
			 */
			codeImg () {
				let data = this.posterData
				let system = this.system
				let posterCode = {
					url: data.codeImg.url,
					r: data.codeImg.r * system.scale,
					w: data.codeImg.w * system.scale,
					h: data.codeImg.h * system.scale,
					x: data.codeImg.x * system.scale,
					y: data.codeImg.mt * system.scale + this.mainImg.y + this.mainImg.h //y需要加上绘图后文本的y
				}
				return posterCode
			},

			/* 
			人头像
			*/
			avatarImg () {
				let data = this.posterData
				let system = this.system
				let posterCode = {
					url: data.avatarImg.url,
					r: data.avatarImg.r * system.scale,
					w: data.avatarImg.w * system.scale,
					h: data.avatarImg.h * system.scale,
					x: data.avatarImg.x * system.scale,
					y: -data.avatarImg.r * system.scale //y需要加上绘图后文本的y
				}
				return posterCode
			},
			/*
			 昵称
			*/
			nickName () {
				let data = this.posterData
				let system = this.system
				let posterNickName = data.nickName
				posterNickName.x = posterNickName.x * system.scale
				posterNickName.y = this.mainImg.y + this.mainImg.h + 20 * system.scale
				return posterNickName
			},
			title () {
				let data = this.posterData
				let system = this.system
				let posterTitle = data.title
				posterTitle.x = this.avatarImg.x
				posterTitle.y = this.mainImg.y + this.mainImg.h + this.avatarImg.h
				return posterTitle
			},
		},
		created () {
			// 获取设备信息
			this.system = getSystem()
		},
		methods: {
			/**
			 * @description: 展示海报
			 * @param {type}
			 * @return {type}
			 * @author: hch
			 */
			posterShow () {
				this.canvasShow = true
				this.creatPoster()
			},
			stopPrevent () {
				return
			},
			stopmove () {
				return
			},
			/**
			 * @description: 生成海报
			 * @author: hch
			 */
			async creatPoster () {
				uni.showLoading({
					title: '生成海报中...'
				})
				const ctx = uni.createCanvasContext('myCanvas', this)
				this.ctx = ctx
				ctx.clearRect(0, 0, this.system.w, this.system.h) //清空之前的海报
				ctx.draw() //清空之前的海报
				// 根据设备屏幕大小和距离屏幕上下左右距离，及圆角绘制背景
				let poster = this.poster
				let mainImg = this.mainImg
				let codeImg = this.codeImg
				let title = this.title
				let avatarImg = this.avatarImg
				let nickName = this.nickName
                // this.roundRect(ctx, poster.x, poster.y, poster.w, poster.h, poster.r)
				await drawSquarePic(ctx, poster.x, poster.y, poster.w, poster.h, poster.r, poster.url)
				await drawSquarePic(ctx, mainImg.x, mainImg.y, mainImg.w, mainImg.h, mainImg.r, mainImg.url)
                // await this.getImageInfo(ctx,avatarImg.url,avatarImg.x,avatarImg.y + mainImg.y + mainImg.h,avatarImg.w, avatarImg.h,)


				// // 绘制标题 textY 绘制文本的y位置
				// console.log('creatPoster -> title.x', title.x)

				// 绘制圆人头像
				// this.drawCircular(ctx,avatarImg.url,avatarImg.x,avatarImg.y + mainImg.y + mainImg.h,avatarImg.w, avatarImg.h,)
				await drawSquarePic(ctx, avatarImg.x, avatarImg.y + mainImg.y + mainImg.h, avatarImg.w, avatarImg.h,
					avatarImg.r, avatarImg.url)
				// 加昵称
				let nickH = drawTextReturnH(
					ctx,
					nickName.text,
					nickName.x,
					nickName.y,
					mainImg.w,
					nickName.fontSize,
					nickName.color,
					nickName.lineHeight
				)


				let textY = drawTextReturnH(
					ctx,
					title.text,
					title.x,
					title.y,
					mainImg.w,
					title.fontSize,
					title.color,
					title.lineHeight
				)


				let priceH = drawTextReturnH(
					ctx,
					'¥'+this.posterData.salesPrice.price,
					textY.x,
					textY.y + title.fontSize * this.system.scale + this.posterData.salesPrice.mt * this.system
					.scale,
					mainImg.w,
					this.posterData.salesPrice.fontSize,
					this.posterData.salesPrice.color,
				)
                if(this.posterData?.markPrice){
					drawTextReturnH(
						ctx,
						'¥'+this.posterData.markPrice.price,
						priceH.x + priceH.testWidth + this.posterData.markPrice.ml * this.system.scale,
						textY.y + title.fontSize * this.system.scale + this.posterData.salesPrice.mt * this.system
						.scale,
						mainImg.w,
						this.posterData.markPrice.fontSize,
						this.posterData.markPrice.color,
						30,
						true
					)
				}
				
				// // 绘制小程序码
				await drawSquarePic(
					ctx,
					codeImg.x,
					codeImg.y,
					codeImg.w,
					codeImg.h,
					codeImg.r,
					codeImg.url
				)
				// 小程序的名称
				// 长按/扫描识别查看商品
				let y = 0
				if (this.posterData?.tips.length) {
					this.posterData.tips.forEach((element, i) => {
						if (i == 0) {
							y = codeImg.y + textY + element.mt + codeImg.h
						} else {
							y += element.mt
						}
						y = drawTextReturnH(
							ctx,
							element.text,
							title.x,
							y,
							mainImg.w,
							element.fontSize,
							element.color,
							element.lineHeight,
							element.align
						)
					})
				}
				setTimeout(() => {
				        uni.canvasToTempFilePath({
				          x: this.poster.x,
				          y: this.poster.y,
				          width: this.poster.w, // 画布的宽
				          height: this.poster.h, // 画布的高
				          destWidth: this.poster.w * 5,
				          destHeight: this.poster.h * 5,
				          canvasId: 'myCanvas',
				          success: (res)=> {
							 this.$emit('createdFinish',res.tempFilePath)
				          },
				         
				        }, this)
				      }, 300);
				uni.hideLoading()
				
				
			},
			/**
			 * @description: 保存到系统相册
			 * @param {type}
			 * @return {type}
			 * @author: hch
			 */
			handleSaveCanvasImage () {
				uni.showLoading({
					title: '保存中...'
				})
				let _this = this
				// 把画布转化成临时文件
				// #ifndef MP-ALIPAY
				// 支付宝小程序外，其他都是用这个方法 canvasToTempFilePath
				uni.canvasToTempFilePath({
						x: this.poster.x,
						y: this.poster.y,
						width: this.poster.w, // 画布的宽
						height: this.poster.h, // 画布的高
						destWidth: this.poster.w * 5,
						destHeight: this.poster.h * 5,
						canvasId: 'myCanvas',
						success (res) {
							//保存图片至相册
							// #ifndef H5
							// 除了h5以外的其他端
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success (res) {
									uni.hideLoading()
									uni.showToast({
										title: '图片保存成功，可以去分享啦~',
										duration: 2000,
										icon: 'none'
									})
									_this.handleCanvasCancel()
									_this.$emit('saveFinish',true)
								},
								fail () {
									uni.showToast({
										title: '保存失败，稍后再试',
										duration: 2000,
										icon: 'none'
									})
									uni.hideLoading()
								}
							})
							// #endif

							// #ifdef H5
							// h5的时候
							uni.showToast({
								title: '请长按保存',
								duration: 3000,
								icon: 'none'
							})
							_this.handleCanvasCancel()
							_this.$emit('previewImage', res.tempFilePath)
							// #endif
						},
						fail (res) {
							console.log('fail -> res', res)
							uni.showToast({
								title: '保存失败，稍后再试',
								duration: 2000,
								icon: 'none'
							})
							uni.hideLoading()
						}
					},
					this
				)
				// #endif
				// #ifdef MP-ALIPAY
				// 支付宝小程序条件下 toTempFilePath
				this.ctx.toTempFilePath({
						x: this.poster.x,
						y: this.poster.y,
						width: this.poster.w, // 画布的宽
						height: this.poster.h, // 画布的高
						destWidth: this.poster.w * 5,
						destHeight: this.poster.h * 5,
						success (res) {
							//保存图片至相册
							my.saveImage({
								url: res.apFilePath,
								showActionSheet: true,
								success (res) {
									uni.hideLoading()
									uni.showToast({
										title: '图片保存成功，可以去分享啦~',
										duration: 2000,
										icon: 'none'
									})
									_this.handleCanvasCancel()
									_this.$emit('saveFinish',true)
								},
								fail () {
									uni.showToast({
										title: '保存失败，稍后再试',
										duration: 2000,
										icon: 'none'
									})
									uni.hideLoading()
								}
							})
						},
						fail (res) {
							console.log('fail -> res', res)
							uni.showToast({
								title: '保存失败，稍后再试',
								duration: 2000,
								icon: 'none'
							})
							uni.hideLoading()
						}
					},
					this
				)
				// #endif
				
			},
			/**
			 * @description: 取消海报
			 * @param {type}
			 * @return {type}
			 * @author: hch
			 */
			handleCanvasCancel () {
				this.canvasShow = false
				this.$emit('cancel', true)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100%;
		text-align: center;
	}

	.canvas-content {
		position: absolute;
		top: 0;
		left: 0;

		.canvas-mask {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 9;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
		}

		.canvas {
			z-index: 10;
		}

		.button-wrapper {
			position: fixed;
			bottom: iphone-bottom(20rpx);
			z-index: 16;
			display: flex;
			width: 100%;
			height: 72rpx;
			justify-content: space-around;
		}

		.save-btn {
			z-index: 16;
			width: 40%;
			height: 100%;
			font-size: 30rpx;
			line-height: 72rpx;
			color: #fff;
			text-align: center;
			background: $uni-btn-color;
			border-radius: 45rpx;
			border-radius: 36rpx;
		}

		.cancel-btn {
			color: $uni-btn-color;
			background: #fff;
		}

		.canvas-close-btn {
			position: fixed;
			top: 30rpx;
			right: 0;
			z-index: 12;
			width: 60rpx;
			height: 60rpx;
			padding: 20rpx;
		}
	}
</style>
