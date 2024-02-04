<template>
	<view class="g-refund-record">
		<view class="head">
			<u-navbar class="location-class" :border-bottom="false" title="退款/售后" title-bold title-color="#191919"
				title-size="36" back-icon-color="#000000"></u-navbar>
			<u-tabs :list="tabslist" active-color="#191919" 
			 :is-scroll="false" :current="current" @change="tabsChange"></u-tabs>	
		</view>
		<view :style="{height:top+'px'}"></view>
		<view style="padding: 30rpx;" v-if="afterList.length">
			<view v-for="item in afterList" :key="item.id">
				<view class="store-card">
					<view class="store-item u-flex">
						<view class="u-flex">
							
							<view class="orderNo">
								{{item.repairsType == 1?'退款':'退货'}}编号：{{item.id}}
							</view>
						</view>
						<view v-if="current==0" class="order-state u-flex">
							<text class="iconfont " :class="item.repairsType == 1?'icon-refund':'icon-salesreturn'"></text>
							<text class="refund-text">{{item.repairsType == 1?'退款':'退货退款'}}</text>
						</view>
						<view v-else class="order-state u-flex">
							<image src="../static/image/icon_shouhou_huanhuo.png"></image>
							<text class=" integral-refund">换货</text>
						</view>
					</view>
					<view class="goods-item u-flex">
						<image :src="imgUrl(item.goodsOrder.goodsImg)"></image>
						<view class="item-right-center u-flex">
							<view class="top-center">
								<view class="title u-line-1">{{item.goodsOrder.goodsName}}</view>
								<view class="u-flex" style="justify-content: space-between">
									<view class="tip u-line-1">商品规格：{{item.goodsOrder.skuName?item.goodsOrder.skuName:'统一规格'}}</view>
									<text class="goods-num">x{{item.goodsOrder.goodsNum}}</text>
								</view>
							</view>
							<view v-if="item.refundPrice && current ==0" class="bottom-center u-flex">
								<text class="goods-pic">退款: ¥{{switchMoney(item.refundPrice)}}</text>
								
							</view>
						</view>
					</view>
					<view class="store-btn-card">
						<!-- v-if="item.returnGoodsStatus == 'REFUND_FINISH'" -->
						<view class="u-text-right u-flex pic-total">
							<text class="refund-state" :style="{'color':getAfterStatus(item.returnGoodsStatus||item.swapGoodsStatus,current).color}"
							 :class="['refund-state-'+item]">
							     {{getAfterStatus(item.returnGoodsStatus||item.swapGoodsStatus,current).subName}}
							 </text>
							<text class="pic-total-title">
								{{getAfterStatus(item.returnGoodsStatus||item.swapGoodsStatus,current).name}}
								 <text v-if="item.refundPayPrice && current==0">
									 :&nbsp;¥{{switchMoney(item.refundPayPrice)}}
								 </text>
							 </text>
						</view>
						<!-- <view class="u-text-right u-flex pic-total" v-else>
							<text class="wait-deal">待商家处理</text>
							<text class="wait-refund">等待退款中</text>
						</view> -->
						<view class="store-btn u-flex">
							<text @click.stop="clickBtn(item,subItem.type)" :class="{'store-btn-yellow':subindex == 1}"
								v-for="(subItem,subindex) in btnList" :key="subindex">{{subItem.name}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- v-if="orderList.length == 0 && finshed" -->
		<no-data v-if="afterList.length == 0 && finshed" type="noOrder"></no-data>
		
		<u-modal
			v-model="show"
			:content="content"
			:title="titleTip"
			show-cancel-button
			border-radius="20"
			confirm-text="删除"
			@confirm="cancelConfirm"
			confirm-color="#FFFFFF"
			cancel-color="#D1B085">
		</u-modal>
	</view>
</template>

<script>
	import NoData from "@/components/noData";
	export default {
		components:{
			NoData
		},
		data () {
			return {
			  title:'退款/售后列表',
				show: false,
				content: '删除后订单不可恢复，无法处理您的售后问题，请慎重考虑',
				titleTip: '确认删除此订单？',
				page: 1,
				pageSize: 5,
				total:0,//数据的总条数
				afterList: [],
				tabslist:[
					{
						name: '退货退款'
					},
					{
						name: '积分换货'
					}
				],
				current:0,
				btnList: [{
						name: '删除记录',
						type: '1'
					},
					{
						name: '查看详情',
						type: '2'
					}
				],
				id:'',
				type:'',
				top:0,
				finshed: false,
				// 售后订单状态
				afterOrderStatus: [
                    {
                        type: 'TO_AUDIT',
                        name: '待审核',
                        subName: '待商家处理',
                        color: '#EC4545 '
                    },
                    {
                        type: 'APPROVE_AUDIT',
                        name: '审核通过',
                        subName: '商家已处理',
                        color: '#EC4545 '
                    },
                    {
                        type: 'REVIEW_FAILED',
                        name: '审核未通过',
                        subName: '商家已处理',
                        color: '#EC4545 '
                    },
                    {
                        type: 'USER_CANCEL',
                        name: ' 用户已取消',
                        subName: ' 用户已取消'
                    },
                    {
                        type: 'WAITING_DELIVERY',
                        name: ' 买家待发货',
                        subName: ' 买家待发货'
                    },
                    {
                        type: 'WAITING_GOODS',
                        name: '卖家待收货',
                        subName: '商家待收货'
                    },
                    {
                        type: 'RECEIVED_GOODS',
                        name: '卖家已收货',
                        subName: '卖家已收货'
                    },
                    {
                        type: 'REFUND_OF',
                        name: '退款中 ',
                        subName: '待商家处理 ',
                        color: '#EC4545 '
                    },
                    {
                        type: 'REFUND_FINISH',
                        name: '退款成功 ',
                        subName: '退款成功 '
                    },
                    {
                        type: 'BUYER_SEND_BACK',
                        name: '等待商家同意换货',
                        subName: '买家寄回 '
                    },
                    {
                        type: 'AGAIN_DELIVER_GOODS',
                        name: '商家同意换货',
                        subName: '重新发货 '
                    },
                    {
                        type: 'EXCHANGE_GOODS_FINISH',
                        name: '换货商品已收到货',
                        subName: '换货成功 '
                    }
				],
				statusList: [{
					type: ''
				}]
			}
		},
		computed: {
			imgUrl () {
				// item.goodsImg.split(',')[0]
				return function (val = '') {
					if (val.indexOf(',') > -1) {
						return val.split(',')[0]
					} else {
						return val
					}
				}
			},
			// 退款订单状态
			getAfterStatus() {
                return function (type) { // 对计算属性进行传参
                    let statusArr = this.afterOrderStatus.filter(item => {
                        // if(this.current == 1 && item.type =='REFUND_FINISH'){ //如果是积分换货并且是完成的状态
                        // 	item.subName = '换货成功'
                        // 	item.name = '换货商品已收到货'
                        // }
                        // if(this.current == 1 && item.type == 'REFUND_OF'){//如果是积分换货并且是换货中的状态
                        // 	item.name = '等待商家同意换货'
                        // }
                        return item.type == type
                    })
                    return statusArr[0]
                }
			},
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.head').boundingClientRect(data => {
				this.top = data.height //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
			
			
			}).exec()
		},
		onShow () {
			this.page = 1
			
			if(this.current == 0){
				this.queryAfterList()
			}else{
				this.integralAfterSales()
			} 
		},
		onReachBottom(e) {
			if(this.current == 0){
				if(this.page*this.pageSize<=this.total){
					this.page = this.page+1
					this.queryAfterList()
				}
			}else{
				if(this.page*this.pageSize<=this.total){
					this.page = this.page+1
					this.integralAfterSales()
				}
			}
		},
		methods: {
			
			// tab栏切换
			tabsChange(index){
				this.current = index;
				this.page = 1
				// this.afterList = []
				if(index == 0){
					this.queryAfterList()
				}else{
					this.integralAfterSales()
				}
			},
			
			// 查询积分商城售后订单
			async integralAfterSales(){
				try{
					let res = await this.$http.integralAfterSales({
						userId:this.$globleData.userData.id,
						current	:this.page,
						size:this.pageSize	
					})
					this.total = res.dataInfo?res.dataInfo.total:0
					let dataList = res.dataInfo?res.dataInfo.records:[]
					if(this.page == 1 ){
						this.afterList = dataList
					}else{
						this.afterList = [...this.afterList,...dataList]
					}
				    
					this.finshed = true
				}catch(e){
					console.log(e)
					
				}
			},
			// 查询售后列表
			async queryAfterList () {
        try{
          let res = await this.$http.afterList({
            current: this.page,
            size: this.pageSize
          })
					this.total = res.dataInfo?res.dataInfo.total:0
          let dataList = res.dataInfo?res.dataInfo.records:[]
          if(this.page == 1 ){
            this.afterList = dataList
          }else{
            this.afterList = [...this.afterList,...dataList]
          }
          this.finshed = true
        }catch(e){
          console.log(e)
        }
				
			},
      clickBtn(obj = {}, type) {
        this.id = obj.id || ""
        this.type = type
        const orderId = obj?.goodsOrder?.id || ''
        if (type == '2') {
          this.show = false
        } else {
          this.show = true
        }
        if (type == '2') {
          if(this.current == 1){
            this.goTo(`/pagesA/afterSales/refundDetails?id=${this.id}&orderId=${orderId}&goodsInfo=${JSON.stringify(obj.goodsOrder)}`)
          }
          if(this.current == 0){
            this.goTo(`/pagesA/afterSales/refundDetails?id=${this.id}`)
          }
        }
      },
			async cancelConfirm(){
				if(this.type == '1'){
					let res 
				try{
					if(this.current == 0){//普通订单售后删除
						res = await this.$http.deleteRefund({id:this.id})
						if(res.returnCode == 1000){
							this.$toast('删除成功')
							this.page = 1
							this.queryAfterList()
						}
					}else{ //积分订单售后删除
						res = await this.$http.deleteIntegralAfterSales({id:this.id})
						if(res.returnCode == 1000){
							this.$toast('删除成功')
							this.page = 1
							this.integralAfterSales()
						}
					}
				}catch(e){
					console.log(e)
				}
				
				}
			}

		}
	}
</script>

<style lang="scss" scoped>
	.head{
		width: 100%;
	    position: fixed;
		top: 0;
		z-index: 9999;
	}
	.g-refund-record {
		
	}

	// 订单
	.store-card {
		padding: 0 30rpx;
		background: #ffffff;
		margin-bottom: 18rpx;
		border-radius: 20rpx;

		.store-item {
			padding: 22rpx 0 18rpx 0;
			justify-content: space-between;

			image {
				width: 26rpx;
				height: 26rpx;
			}

			.orderNo {
				font-size: 26rpx;
				color: #191919;
				font-weight: 400;
			}

			.order-state {
				font-size: 28rpx;
				color: #FB5324;
				font-weight: 400;
                image{
					width: 30rpx;
					height: 30rpx;
					margin-right: 10rpx;
				}
				.integral-refund{
					color: $themeColor;
				}
				.iconfont {
					margin-right: 10rpx;
					font-size: 28rpx;
					transform: translatey(1rpx);
				}
			}
		}

		.goods-item {
			padding: 20rpx 0rpx;

			image {
				width: 160rpx;
				height: 160rpx;
				margin-right: 30rpx;
			}

			.item-right-center {
				height: 160rpx;
				flex-direction: column;
				justify-content: space-between;
				width: 440rpx;
				.top-center {
					width: 440rpx;
					.title {
						width: 100%;
						font-size: 28rpx;
						color: #000000;
						font-weight: 400;
					}

					.tip {
						margin-top: 10rpx;
						width: 410rpx;
						font-size: 22rpx;
						color: #999999;
						font-weight: 400;
					}

					.goods-num {
						font-size: 22rpx;
						color: #999999;
						font-weight: 400;
					}
				}

				.bottom-center {
					width: 100%;
					justify-content: space-between;

					.goods-pic {
						font-size: 32rpx;
						color: #191919;
						font-weight: 600;
					}
				}
			}
		}
	}

	// 订单 按钮
	.store-btn-card {
		padding: 20rpx 0 28rpx;

		.pic-total {
			padding: 16rpx 30rpx;
			background: #F8F8F8;
			border-radius: 10rpx;

			.pic-total-title {
				font-size: 26rpx;
				color: #191919;
				font-weight: 400;
			}

			.refund-state {
				margin-right: 20rpx;
				text-align: left;
				min-width: 140rpx;
				font-size: 26rpx;
				color: #191919;
				font-weight: 500;

				&-1 {
					color: #E1544A;
				}
			}

			.pic-total-num {
				margin-left: 16rpx;
				font-size: 34rpx;
				color: #E1544A;
				letter-spacing: 0;
				font-weight: 600;
			}

			.wait-deal {
				font-size: 28rpx;
				color: #EC4545;
				font-weight: 500;
			}

			.wait-refund {
				font-size: 28rpx;
				color: #191919;
				margin-left: 20rpx;
				font-weight: 400;
			}
		}

		.store-btn {
			margin-top: 30rpx;
			justify-content: flex-end;

			text {
				margin-left: 20rpx;
				display: inline-block;
				padding: 15rpx 44rpx;
				border: 2rpx solid #999999;
				border-radius: 45rpx;

				font-size: 28rpx;
				color: #666666;
				font-weight: 400;
			}

			.store-btn-yellow {
				border: 2rpx solid #D1B085;
				border-radius: 45rpx;
				color: #FFFFFF;
				background: #D1B085;
			}
		}
	}
    /deep/.u-tab-bar {
    	background: #D1B085 !important;
    }
	/deep/.u-model__title {
		font-size: 32rpx !important;
		color: #191919 !important;
		font-weight: 500 !important;
	}

	/deep/.u-model__content__message {
		padding: 39rpx 43rpx 45rpx !important;
		font-size: 28rpx !important;
		color: #191919 !important;
		font-weight: 400 !important;
	}

	/deep/ .u-model__footer__button {
		display: flex;
		color: #D1B085;
		border: 2rpx solid #D1B085;
		justify-content: center;
		border-radius: 45rpx !important;
		width: 200rpx !important;
		height: 70rpx !important;
		align-items: center;
		line-height: 0 !important;
		flex: none !important;
		font-size: 28rpx !important;

		&:nth-last-of-type(1) {
			background: #D1B085;
			margin-left: 30rpx;
		}
	}

	/deep/.u-model__footer {
		justify-content: center;
		padding-bottom: 20rpx;
	}

	/deep/.u-border-top {
		border-top: none !important;
		position: static !important;
	}
</style>
<style>
	page {
		background: #F8F8F8;
	}
</style>
