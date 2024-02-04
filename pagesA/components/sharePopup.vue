<template>
	<view>
		<view class="popup-container" style="" v-if="show">
			<!-- @click="show=false" -->
			<view @tap.stop :style="{background:backgrounds}" @click="handleClick" class="warp">
				<u-navbar v-if="shareImage&&showShareImage" title-color="#191919" title="生成海报" title-size="36" class="location-class" :background="{background:'#ffffff'}" :border-bottom="false"
				      :is-back="false"></u-navbar>
				<view class="u-flex-1 u-flex u-row-center" @tap.stop>
          <!-- <hch-poster
          ref="hchPoster"
          style="position: relative;top: -999999rpx;"
          @createdFinish="createdFinish"
          @saveFinish="saveFinish"
          @cancel="handleCancel"
          :posterData.sync="posterData"
          @previewImage="previewImage"
          /> -->
          <painter
          ref="hchPoster"
          :palette="imgDraw"
          :posterData="posterData"
          style="position: relative;top: -999999rpx;"
          @imgOK="onImgOK"
          @imgErr="onImgErr" />
				<view @tap.stop>
					<!-- #ifdef H5 -->
            <image style="width: 560rpx;height: 760rpx;background: #FFFFFF;" v-if="shareImage&&showShareImage" :src="shareImage"></image>
          <!-- #endif -->
					
				</view>
				</view>

				<view @tap.stop v-if="shareData" :style="{height:isShowTitle?'410rpx':'360rpx'}" class="popup-box">
					<!-- 如果是分销员才能显示 -->
					<view style="width: 100%;" v-if="isShowTitle">
						<view style="width: 100%;" class="titel">分享后最多可赚¥{{switchMoney(shareData.oneLevelDistributionPrice || 0)}}</view>
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
		
	</view>
</view>
</template>

<script>
	// import HchPoster from './hch-poster/hch-poster.vue'
  import painter from '@/components/painter_uni/painter.vue'
	export default {
		components: {
			painter,
		},
		props: {
			shareData: {
				type: Object,
				default: ()=>{}
			},
		},
		watch: {
			shareData: {
				handler (val) {
					this.newShareData = val
          this.imgDraw={
            width: '600rpx',
            height: '813rpx',
            background: '#ffffff',
            views:[
              {
                type: 'image',
                url: this.newShareData?.goodsPictures,
                css: {
                  top: '0rpx',
                  left: '0',
                  width: '600rpx',
                  height: '600rpx',
                  borderRadius: '',
                  mode:'scaleToFill'
                }
              },
              {
                type: 'image',
                url: this.newShareData?.codeImage,
                css: {
                  top: '632rpx',
                  right: '30rpx',
                  width: '120rpx',
                  height: '120rpx',
                   borderRadius: '60rpx'
                }
              },
              {
                type: 'image',
                url: this.$globleData.userData.avatar,
                css: {
                  top: '550rpx',
                  left: '30rpx',
                  width: '100rpx',
                  height: '100rpx',
                  borderRadius: '50rpx'
                }
              },
              {
                type: 'text',
                text:this.$globleData.userData.nickName,
                css: {
                  top: '623rpx',
                  left: '130rpx',
                  fontSize: '24rpx',
                  color: '#191509'
                }
              },
              {
                type: 'text',
                text:this.newShareData?.goodsName?.length > 8 ? this.newShareData?.goodsName?.substr(0, 8) +	'...' : this.newShareData?.goodsName,
                css: {
                  top: '680rpx',
                  left: '30rpx',
                  fontSize: '28rpx',
                  color: '#191509'
                }
              },
            ]
          }
					this.posterData = {
						salesPrice: {
              type: 'text',
              text: this.switchMoney(this.newShareData?.salePrice),
              css: {
                top: '721rpx',
                left: '30rpx',
                fontSize: '28rpx',
                color: '#E85959',
              }
						},
						markPrice: {
              type: 'text',
              text: this.switchMoney(this.newShareData?.marketPrice),
              css: {
                top: '721rpx',
                fontSize: '28rpx',
                color: '#999999',
							  ml: '10rpx', //margin-left
                textDecoration:'line-through'
              }
						},
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
				backgrounds:'',
				scenId: '',
				scale: 1,
				shareImage:'',
				showShareImage:false,
				newShareData: null,
				shareList: [{
            type:'wechatFriend',
						image: '/pagesA/static/image/share_icon_wxhy.png',
						title: '微信好友'
					},
					{
            type:'posterShare',
						image: '/pagesA/static/image/share_icon_hbfx.png',
						title: '海报分享'
					}
				],
				imgDraw: {},
        cavanvsImage:'',
				shareCodeFinished: false,
				// 海报模板数据
				posterData: {

				}
			}
		},
		methods: {
			// 清除數據
			removeData(){
				this.$store.commit('setShowDistributor', false)
				this.shareImage =''
				this.backgrounds =''
        this.showShareImage = false
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
      handleClick(){
        this.$store.commit('setShowDistributor', false)
      },
			onImgOK (e) {
				console.log(e)
        this.shareImage=e.detail.path
        
			},
			onImgErr (e) {
        console.log(e,'图片失败回调');
        uni.hideLoading();
        
			},

      handleSaveCanvasImage () {
        uni.showLoading({
          title: '保存中...'
        })
        
        // 把画布转化成临时文件
					uni.saveImageToPhotosAlbum({
						filePath: this.shareImage,
						success () {
							uni.hideLoading()
							uni.showToast({
								title: '图片保存成功，可以去分享啦~',
								duration: 2000,
								icon: 'none'
							})
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
			handleShowPoster (item) {
				if (item.title == '海报分享') {
					this.showShareImage = true
           if(!this.shareImage){
            return
          }
          getApp().globalData.preveImage='preveImage'
           wx.showShareImageMenu({
          path: this.shareImage,
          complete:()=>{
            this.$store.commit('setShowDistributor', false)
            
          },
          
          fail:(error)=>{
            getApp().globalData.preveImage=''
            console.log('error',error);
            
          }
        })
        return

					// this.$refs.hchPoster.posterShow()
					// this.$refs.hchPoster.showCanvas = true
          
					// let flag = false
					// this.shareList.forEach(item=>{
					// 	if(item.title == '保存图片'){
					// 		flag = true
					// 	}
					// })
					// if(!flag){
					// 	this.shareList.push({
					// 		image: '/pagesA/static/image/share_icon_bctp.png',
					// 		title: '保存图片'
					// 	})
					// }
					// this.backgrounds = '#d8d8d8'
				
          // this.shareList.push({
          //   image: '/pagesA/static/image/share_icon_bctp.png',
          //   title: '保存图片'
          // })
				

				} else if (item.title == '保存图片') {
					this.handleSaveCanvasImage()
					// this.$refs.hchPoster.handleSaveCanvasImage()
				}

			},
			previewImage (base64) {
           getApp().globalData.preveImage='preveImage' 
				// 预览图片
				uni.previewImage({
					urls: [base64]
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
    .popup-container{
      position: fixed;top: 0;left: 0;
      right: 0;
      bottom: 0;
      z-index: 99999999;
      width: 100vw;
      height: 100vh;
      transition: transform 0.3s;
      background: rgba(0,0,0,.5);
    }
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
