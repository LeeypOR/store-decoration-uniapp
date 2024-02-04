<template>
	<view class="container">
		<!-- :style="{'height':isApply?545*scale+'rpx':585*scale+'rpx'}" -->
		<view class="header active " :style="{'height':isApply?555*scale+'rpx':595*scale+'rpx'}">
			<u-navbar z-index="99" class="location-class" :background="{background:'#00000000'}"
				:border-bottom="false" title-bold title="分销员中心"
				title-color="#fff" title-size="36" back-icon-color="#fff" :custom-back="backPage"></u-navbar>
			<view @click="goTo('/pagesD/registeredDistributor/index')" :style="{height:60*scale+'rpx'}" v-if="!isApply"
				class="apply">申请认证分销员 ></view>
			<view class="info-wrapper">
				<view :style="{marginTop:(!isApply?20:40)*scale+'rpx'}" class="drawal">可提现 (元)</view>
				<!-- goTo('./drawal?cash='+cash) -->
				<view @click="goCash" :style="{marginBottom:40*scale+'rpx'}" class="u-flex u-row-between ">
					<view :style="{height:84*scale+'rpx'}" class="drawal-price">
						¥{{withDrawal?switchMoney(withDrawal.unWithdrawnAmount || 0):0.00}}</view>
					<view :style="{height:70*scale+'rpx'}" class="toDrawal u-flex u-row-center"><span>去提现 ></span>
					</view>
				</view>

				<view class="price-wrapper">
					<view @click.stop="goTo('/pagesB/distribution/rakebackRecode?current=1')"
						class="price-wrapper-item">
						<view class="price-title">返利金额 (元)</view>
						<view v-if="withDrawal" :style="{marginTop:10*scale+'rpx'}" class="price-number">
							{{switchMoney(withDrawal.rebateAmount || 0)}}</view>
						<view v-else :style="{marginTop:10*scale+'rpx'}" class="price-number">0</view>
					</view>
					<view class="border"></view>
					<view @click.stop="goTo('/pagesB/distribution/rakebackRecode?current=0')"
						class="price-wrapper-item">
						<view class="price-title">已到账 (元)</view>
						<view v-if="withDrawal" :style="{marginTop:10*scale+'rpx'}" class="price-number">
							{{switchMoney(withDrawal.receivedAmount || 0)}}</view>
						<view v-else :style="{marginTop:10*scale+'rpx'}" class="price-number">0
						</view>
					</view>
					<view class="border"></view>
					<view class="price-wrapper-item">
						<view class="price-title">未到账 (元)</view>
						<view v-if="withDrawal" :style="{marginTop:10*scale+'rpx'}" class="price-number">
							{{switchMoney(withDrawal.unReceivedAmount || 0)}}
						</view>
						<view v-else :style="{marginTop:10*scale+'rpx'}" class="price-number">
							0
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="toDrawal active"><span>去提现 ></span></view> -->
		</view>
		<view class="box u-flex" :style="{height:140*scale+'rpx'}">
			<view @click="goTo('./bank')" class="box-item">
				<image src="../static/images/icon_fenxiao_yinhangka@2x.png"></image>
				<text>银行卡</text>
			</view>
			<view @click="goTo('./transactionRecord')" class="box-item">
				<image src="../static/images/icon_fenxiao_jiaoyijilu@2x.png"></image>
				<text>提现记录</text>
			</view>
      <view @click="goTo('./rakebackRecode')" class="box-item">
        <image src="../static/images/icon_fenxiao_jiaoyijilu@2x.png"></image>
        <text>返利明细</text>
      </view>
		</view>
    <!-- :style="{height:top+'px'}" -->
    <view class="goods-list">
      <scroll-view
          style="height:100%;"
          scroll-y="true" @scrolltolower="scrolltolower"
          :scroll-anchoring="true"
      >
        <view class="title">高返利商品列表</view>
        <view v-if="rebateList.length">
          <view class="list-item" v-for="(item,index) in rebateList" :key="item.id">
            <image @click="goToGoodsDetail(item.goodsId)" :src="imgUrl(item.goodsPictures)"></image>
            <view class="goods-info">
              <view class="goods-info-title u-line-2" @click="goToGoodsDetail(item.goodsId)">{{ item.goodsName }}</view>
              <view class="goods-info-bottom">
                <view class="price" @click="goToGoodsDetail(item.goodsId)">¥{{ switchMoney(item.salePrice) }}</view>
                <view @click="share(item)" class="share">
                  <image src="../static/images/icon_fenxiao_fenxiang@2x.png"></image>
                  最多可赚¥{{ switchMoney(item.oneLevelDistributionPrice) }}
                </view>
              </view>
            </view>
          </view>
          <u-loadmore :status="status" />
        </view>
        <view style="height:80%" v-else>
          <noData></noData>
        </view>
      </scroll-view>
    </view>
		 <view class="">
			<sharPopup v-if="shareData.codeImage" :key="shareData.id" :shareData="shareData" ref="sharePopup"></sharPopup>
		</view>
	</view>
</template>

<script>
	import sharPopup from './compontents/sharePopupcopy.vue'
    import NoData from '../../components/noData.vue'
	export default {
		components: {
			sharPopup,NoData
		},
		data () {
			return {
			  title:'分销员中心',
				// isApply:false,//是否未注册状态，用来判断样式
				show: false, //弹窗是否显示
				cash: '',
				page: 1,
				pageSize: 5,
				withDrawal: null,
				rebateList: [], //高返利商品里列表
				shareData: {
          codeImage:''
        },
				scenId: '',
				scale: 1,
				top: 0,
				status: 'loadmore',
				finshed: false,
        shareImage:''
			}
		},
		computed: {
			isApply () { //是否未注册状态，用来判断样式

				if (this.$globleData?.distributor?.auditStatuse == 1) {
					return true
				} else {
					return false
				}
			},
		},
		// 分享
		onShareAppMessage (e) {
         getApp().globalData.preveImage='preveImage'
			let goodsId = this.shareData.goodsId
			let contactId = this.$globleData.userData.id
			let path = `/pagesA/shop/goodsDetail?id=${goodsId}&contactId=${contactId}`
			const imgUrl = this.shareData.goodsPictures

			return {
				title: this.shareData.goodsName,
				imageUrl: imgUrl,
				path: path
			}
		},
		onReady () {
			let system = uni.getSystemInfoSync()
      console.log('000',system.windowWidth/375);

      // -35*(system.windowWidth/375)
			const query = uni.createSelectorQuery().in(this);
			query.select('.goods-list').boundingClientRect(data => {
        console.log('999999999999999978978',data);

				this.top = getApp().globalData.windowHeight - data.top+ 25*(system.windowWidth/375)//计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
			}).exec()

		},
		onLoad () {
			this.fetchHighGoods()
		},
		onShow () {
			if (this.$globleData?.distributor?.auditStatuse == 1) {
				this.getWithDrawal()
			}
			this.getDistributor()

		},
		methods: {
		  // 跳转商品详情
      goToGoodsDetail(id){
        if(!id){
          return
        }
        this.goTo(`/pagesA/shop/goodsDetail?id=${id}`)
      },
			// 保存scen信息
			async saveScen () {

				try {
					let res = await this.$http.addScene({
						goodsId: this.shareData.goodsId,
						contactId: this.$globleData.userData.id
					})
          console.log(111111111);
					this.scenId = res.dataInfo
					if (this.scenId) {
						this.sharPosterCode()
					}
				} catch (e) {

					//TODO handle the exception
				}
			},
			// 触底
			scrolltolower () {
				this.page++
				if (!this.finshed) {
					this.fetchHighGoods()
				}
			},
			// 生产太阳码
			async sharPosterCode () {

				try {
					let res = await this.$http.posterCode({
						page: 'pagesA/shop/goodsDetail',
						id: this.scenId,
					})
					this.shareData.codeImage = res.dataInfo
          this.shareData = {...this.shareData}
				} catch (e) {

					//TODO handle the exception
				}
			},
			// 提现
			goCash () {
				if(!this.withDrawal){
					return this.$toast('您还不是分销员，请注册！！')
				}
				this.goTo('./drawal?cash=' + this.withDrawal.unWithdrawnAmount)
			},
			async share (item) {
        await this.setShareData(item)
				await this.saveScen()
        await this.$store.commit('setShowDistributor', true)

			},
      setShareData(item){
        this.shareData = item
        this.shareData.goodsPictures = this.imgUrl(this.shareData.goodsPictures) //将多个图片路径用逗号隔开的图片，只展示一个图片路径
      },
			// 查询可提现的金额
			async getWithDrawal () {
				try {
				  let param = {
            userPhone:this.$globleData?.userData?.phoneNumber || ''
          }
					let res = await this.$http.withDrawal(param)
					this.withDrawal = res.dataInfo ? res.dataInfo : null
				} catch (e) {
					//TODO handle the exception
				}

			},

			//查询高返利商品
			async fetchHighGoods () {
				try {
					let res = await this.$http.highRebateGoods({
						current: this.page,
						size: this.pageSize
					})

					if (res.dataInfo && res.dataInfo.records.length) {
						this.status = 'loading';
						if (this.page == 1) {
							this.rebateList = res.dataInfo ? res.dataInfo.records : []
						} else {
							this.rebateList = [...this.rebateList, ...res.dataInfo ? res.dataInfo.records : []]

						}
						if(res.dataInfo.current*res.dataInfo.size>=res.dataInfo.total){
							this.status = 'nomore';
							this.finshed = true
						}
					} else {
						this.finshed = true
						this.status = 'nomore';
					}

				} catch (e) {
          console.log(e);

				}
			},
			// 获取分销人信息
			async getDistributor () {
				try {
          const param = {
            userPhone:this.$globleData?.userData?.phoneNumber
          }
					let res = await this.$http.distributorQuery(param)
					this.$globleData.distributor = res?.dataInfo || null
				} catch (error) {
          this.$globleData.distributor = null
					console.log(error)

				}
			},
		}
	}
</script>
<style>
	page {
		overflow: hidden;

	}
</style>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.header {
		width: 100vw;
		// height: 545rpx;
		background: url('../static/images/bg_fenxiao_top@2x.png');
		background-size: 100% 100%;
		position: relative;
		flex-direction: column;

		//&.active {
    //
		//	// height: 545rpx;
		//	.info-wrapper {
		//		.drawal {
		//			// margin-top: 20rpx;
		//		}
		//	}
    //
		//}

		.apply {
			width: 690rpx;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgba(255, 255, 255, 0.2);
			border-radius: 4rpx;
			margin: 0 auto;
		}

		.info-wrapper {
			width: 100%;
			padding-left: 30rpx;
			//margin-top: 20rpx;
			color: #ffffff;

			.drawal {
				font-size: 24rpx;
				margin-top: 20rpx;
				margin-bottom: 10rpx;
			}

			.drawal-price {
				// height: 84rpx;
				font-size: 60rpx;

			}

			.toDrawal {
				width: 184rpx;
				// height: 70rpx;
				background: rgba(255, 255, 255, 0.4);
				border-radius: 98rpx 1rpx 1rpx 98rpx;

				span {
					font-weight: bold;
					font-size: 28rpx;
					font-weight: 500;
					color: #191919
				}
			}

			.price-wrapper {
				width: 100%;
				padding-right: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				&-item {
					font-size: 24rpx;

					.price-number {
						text-align: center;
						font-size: 30rpx;
						// margin-top: 10rpx;
						font-weight: 500;
					}
				}
			}
		}

		// .toDrawal{
		//     position: absolute;
		//     right: 0;
		//     top: 220rpx;
		//     width: 184rpx;
		//     height: 70rpx;
		//     background: rgba(255, 255, 255,0.4);
		//     border-radius: 98rpx 1rpx 1rpx 98rpx;
		//     text-align: center;
		//     line-height: 70rpx;
		//     &.active{
		//         top: 280rpx;
		//     }
		//     span{
		//         font-weight: bold;
		//     }
		// }
	}

	.box {
		position: relative;
		width: 690rpx;
		// height: 140rpx;
		background: #ffffff;
		border-radius: 14rpx;
		margin: -70rpx auto 0;
		display: flex;
    padding: 0 35rpx;
    justify-content: space-between;
		align-items: center;

		&-item {
			//width: 335rpx;
			height: 100%;
			display: flex;
			align-items: center;
			//padding-left: 35rpx;

			image {
				width: 60rpx;
				height: 60rpx;
				margin-right: 10rpx;
			}
		}

		.border {
			background: #ccc;
			margin-right: 10rpx;
		}
	}

	.goods-list {
		// margin-top: 70rpx;
		padding: 0 30rpx;
		padding-top: 40rpx;
    flex: 1;
		overflow-y: hidden;

		.title {
			height: 44rpx;
			line-height: 44rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #191919;
			margin-bottom: 20rpx;
		}

		.list-item {
			width: 100%;
			height: 202rpx;
			background: #fff;
			border-radius: 14rpx;
			padding: 20rpx 30rpx 22rpx 30rpx;
			display: flex;
			margin-bottom: 20rpx;

			image {
				width: 160rpx;
				height: 160rpx;
			}

			.goods-info {
				flex: 1;
				// border-left: 1rpx solid #ccc;
				padding-left: 30rpx;

				&-title {
					height: 80rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #000000;
				}

				&-bottom {
					margin-top: 32rpx;
					display: flex;
					justify-content: space-between;

					.share {
						color: rgba(209, 176, 133, 1);
						display: flex;
						align-items: center;

						image {
							width: 30rpx;
							height: 30rpx;
							margin-right: 6rpx;
						}
					}
				}
			}
		}
	}

	.border {
		width: 1rpx;
		height: 40rpx;
		background: #fff;
		opacity: 0.2;
	}
</style>
