 <template>
	<view>
		<view class="bar-height"></view>
		<view class="shop-bar u-flex" :class="{group:true}">
			<view class="shop-bar-left u-flex">
				<view class="u-flex">
					<view class="shop-type-item-card">
						<!--						<view class="iconfont " :class="isCollectd?'icon-app_icon_shoucang_xuanzhong1':'icon-app_icon_shoucang'"></view>-->
						<view class="iconfont icon-app_icon_kefu"></view>
						<view class="type-item-tip">客服</view>
						<button @click="openCustomerShare" class="button-share"></button>
					</view>
				</view>
				<view class="u-flex">
					<view @click="share" class="shop-type-item-card">
						<!-- <image src="@/static/image/shop/icon_share.png"></image> -->
						<view class="iconfont icon-app_icon_share"></view>
						<view class="type-item-tip">分享</view>
						<!-- <button type="default" class="sharBtn" open-type="share"></button> -->
					</view>
				</view>
				<view class="u-flex" @click="goTo('/pages/shop/shopCart',true)">
					<view class="shop-type-item-card">
						<view class="iconfont icon-app_icon_gouwuche1"></view>
						<view class="type-item-tip">购物车</view>
					</view>
				</view>
			</view>
			<view class="shop-bar-btn" v-if="![0,1].includes(paymentWay)" @click="buyNow">
				<view class="convert" :class="{'no-active':!isMoreNum}">立即兑换</view>
			</view>
			<view class="shop-bar-btn" v-else-if="!groupInfo.type">
        <view class="add-cart" v-if="shopId=='433733032805924864'||shopId=='461887105476845568'" @click="joinCard">
          加入购物车
        </view>
        <view class="u-flex" v-else>
          <view class="join-cart" @click="joinCard">加入购物车</view>
				  <view class="new-buy" @click="buyNow" :class="{'no-active':!isMoreNum}">立即购买</view>
        </view>

			</view>
			<view class="group-bar-btn u-flex" v-else-if="groupInfo.createType == 1 || groupInfo.type == 1">
				<view class="left-box u-flex" @click="buyNow" :class="{'no-active':isMoreNum}">
					<view class="box-num">￥{{salePrice}}</view>
					<view>单独购买</view>
				</view>
				<view class="right-box u-flex" :class="{'no-active':!isMoreNum}" @click="goGroup">
					<view class="box-num" v-if="groupInfo.type == 1">￥{{getGroupPrice}}</view>
					<view class="box-num" style="font-size: 24rpx" v-else>预付款￥{{getPrePayPrice}}</view>
					<view>我要拼团</view>
				</view>
			</view>
			<view class="group-bar-btn u-flex" :class="{'no-active':!isMoreNum}" v-else>
				<view class="left-box u-flex" @click="buyNow">
					<view class="box-num">￥{{salePrice}}</view>
					<view>单独购买</view>
				</view>
				<view class="right-box u-flex" :class="{'no-active':!isMoreNum}" @click="goGroup">
					<view class="box-num" style="font-size: 24rpx">预付款￥{{getPrePayPrice}}</view>
					<view>参加拼团</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    data () {
        return {
            isCollectd: false,
            integrateInfo: null,
            shopId:'' //店铺id
        }
    },
    props: {
        isCollection: {
            type: Boolean,
            default: false
        },
        specIdList: {
            type: Array,
            default: () => []
        },
        groupInfo: {
            type: Object,
            default: {}
        },
        salePrice: {
            type: [String, Number],
            default: 0
        },
        // 活动信息
        activeInfo: {
            type: Object,
            default: null
        },
        // 买一赠第二件半价活动信息
        halfInfo: {
            type: Object,
            default: null
        },
        goodsSpecInfo: {
            type: Object,
            default: ()=>{}
        },
        //
        paymentWay: {
            type: [String, Number],
            default: 0
        }
    },
    created () {
        this.getPoint()
        this.shopId = this.$globleData.shopId
        console.log('this.shopId: ', this.shopId);
    },
    computed: {
        isMoreNum () {
            const list = this.specIdList?.filter(Boolean) || []
            let goodsInfo = this.goodsSpecInfo || {}
            const num = goodsInfo?.goodsInventory || 0 //库存
            let flag = true // 判断用户积分是否大于商品积分价格 如果是现金和现金+积分购买默认是true
            if (this.paymentWay == 2 || this.paymentWay == 3) {
                let point = this.integrateInfo?.currentIntegrate || 0
                if (Number(point) >= Number(goodsInfo.integralPrice ? goodsInfo.integralPrice : 0)) {
                    flag = true //用户积分大于商品积分价格
                } else {
                    flag = false
                }
            }
            if ((list.length > 0 || num > 0) && flag) {
                return true
            }
            return false
        },
        getGroupPrice () {
            let price = this.groupInfo?.groupPrice || 0
            if (price) {
                return (parseFloat(price) / 100).toFixed(2)
            }
            return price
        },
        getPrePayPrice () {
            let prePayPrice = this.groupInfo?.prePayPrice || 0
            if (prePayPrice) {
                return (parseFloat(prePayPrice) / 100).toFixed(2)
            }
            return prePayPrice
        },
    },
    watch: {
        isCollection: {
            handler (val) {
                this.isCollectd = val
            },
            immediate: true
        }
    },
    methods: {
        async getPoint () {
            try {
                let param = {
                    id: this.$globleData.userData.id
                }
                const res = await this.$http.getIntegrateInfo(param)
                if (res.returnCode == 1000) {
                    this.integrateInfo = res?.dataInfo || {}
                } else {
                    this.integrateInfo = null

                }
            } catch (error) {

            }
        },
        // 分享按钮
        share () {
            this.$emit('share', true)
        },
        //去拼团
        goGroup () {
            if (this.groupInfo?.alreadyOpenGroup == 0) {
                this.$toast('活动还未开始')
                return
            }
            if (!this.isMoreNum) {
                return
            }
            if (this.groupInfo.limitBuyStatus == 1) {
                // todo 剩余购买件数
                // if (false) {
                // 	this.$toast('购买商品件数已上限')
                // 	return
                // }
            }
            const list = this.specIdList?.filter(Boolean) || []
            if (list.length <= 0) {
                if (this.groupInfo?.createType == 2) {
                    this.$emit('buyNow', {
                        isGroup: true,
                        isJoin: true
                    })
                    return
                }
                this.$emit('buyNow', {
                    isGroup: true
                })
                return
            }
            this.$store.commit('setSpecification', true)
            if (this.groupInfo?.createType == 2) {
                this.$emit('showPopup', 6)
                return
            }
            this.$emit('showPopup', 5)
        },
        // 加入购物车
        joinCard () {
            if (this.activeInfo) {
                let res = this.disposeActive()
                if (!res) return
            }
            const list = this.specIdList?.filter(Boolean) || []
            if (list.length <= 0) {
                this.$emit('addCart')
                return
            }
            this.$store.commit('setSpecification', true)
            this.$emit('showPopup', 2)
        },
        // 立即购买
        buyNow () {
            if (!this.isMoreNum) {
                return
            }
            if (this.activeInfo) {
                let res = this.disposeActive()
                if (!res) return
            }
            const list = this.specIdList?.filter(Boolean) || []
            if (list.length <= 0) {
                this.$emit('buyNow', {})
                return
            }
            this.$store.commit('setSpecification', true)
            this.$emit('showPopup', 3)
        },
        collect () {
            this.$emit('collect')
        },
        // 处理活动
        disposeActive () {
            let obj = this.activeInfo
            if (obj.activityStatu == 1) {
                this.$toast('活动未开始')
                return
            }
            if (obj.activityStatu == 3) {
                this.$toast('活动已结束')
                return
            }
            if (obj.enableLimit == 1) {
                if (!((this.goodsNum || 1) <= obj.limitCount)) {
                    this.$toast(`已达到最大购买数量${obj.limitCount}件`)
                    return
                }
                // 剩余购买数量
                let num = obj?.seckillGoodsResponse?.goodsBuyCount || obj?.discountGoodsResponse?.goodsBuyCount || 0
                let count = obj?.limitCount - num
                if (!((this.goodsNum || 1) <= count)) {
                    if (count) {
                        this.$toast(`剩余购买数量${count>0?count:0}件`)
                    } else {
                        this.$toast(`已达到活动限购数量，感谢参与`)
                    }
                    return
                }
            }
            return true
        }

    }
}
</script>

<style lang="scss" scoped>
	.shop-bar {
		width: 100%;
		position: fixed;
		bottom: 0;
		// iphone 适配
		padding: 10rpx 10rpx calc(calc(env(safe-area-inset-bottom) / 2) + 10rpx) 24rpx;
		background: #FFFFFF;
		justify-content: space-between;
		z-index: 9999;

		.shop-bar-btn {
			height: 70rpx;
			display: flex;
      .add-cart{
        width: 400rpx;
        height: 70rpx;
        line-height: 70rpx;
        background: $themeColor;
        border-radius:100rpx;
        text-align: center;
        color: #FFFFFF;
      }
			.join-cart {
				font-size: 28rpx;
				font-weight: 400;
				text-align: center;
				color: #FFFFFF;
				background: #434343;
				width: 200rpx;
				height: 70rpx;
				line-height: 70rpx;
				border-radius: 100rpx 0px 0px 100rpx;
			}

			.new-buy {
				font-size: 28rpx;
				font-weight: 400;
				text-align: center;
				color: #FFFFFF;
				background: #d1b085;
				width: 200rpx;
				height: 70rpx;
				line-height: 70rpx;
				border-radius: 0rpx 100px 100px 0rpx;
			}

			.convert {
				font-size: 28rpx;
				font-weight: 400;
				text-align: center;
				width: 400rpx;
				color: #FFFFFF;
				height: 70rpx;
				background: #d1b085;
				border-radius: 100rpx;
				line-height: 70rpx;
			}
		}
	}

	.shop-bar-left {
		margin-right: 30rpx;
		justify-content: space-around;
		flex: 1;
	}

	.shop-type-item-card {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		position: relative;

		image {
			width: 50rpx;
			height: 50rpx;
		}

		.icon-app_icon_share,
    .icon-app_icon_gouwuche1,
		.icon-app_icon_kefu {
			width: 50rpx;
			height: 50rpx;
			font-size: 52rpx;
			color: #aaaaaa;
		}
    .icon-app_icon_gouwuche1{
      transform: translateX(-2rpx);
    }

		.icon-app_icon_shoucang {
			width: 50rpx;
			height: 50rpx;
			font-size: 52rpx;
			color: #aaaaaa;
		}

		.icon-app_icon_shoucang_xuanzhong1 {
			width: 50rpx;
			height: 50rpx;
			font-size: 52rpx;
			color: #D1B085;
		}

		.icon-shoucang-show {
			width: 50rpx;
			height: 50rpx;
			font-size: 52rpx;
			color: #D1B085;
		}

		.type-item-tip {
			font-size: 20rpx;
			font-weight: 400;
			//color: #999999;
      color: #434343!important;
		}

		&:last-of-type {
			margin-right: 0;
		}

		.sharBtn {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 1;
			opacity: 0;
		}
	}

	.group-bar-btn {
		height: 100%;
		text-align: center;

		.left-box {
			height: 98rpx;
			width: 200rpx;
			background: #434343;
			flex-direction: column;
			justify-content: center;

			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
		}

		.right-box {
			height: 98rpx;
			width: 200rpx;
			background: #E8B759;
			flex-direction: column;
			justify-content: center;

			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
		}

		.box-num {
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
		}
	}

	.group {
		padding: 10rpx 10rpx calc(calc(env(safe-area-inset-bottom) / 2) + 10rpx) 24rpx !important;
	}

	.bar-height {
		height: calc(calc(env(safe-area-inset-bottom) / 2) + 80rpx);
	}

	.no-active {
		background: #999999 !important;
	}

	.button-share {
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
	}
  .iconfont{
    color: #434343!important;
  }
</style>
