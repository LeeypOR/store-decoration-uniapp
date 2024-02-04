<template>
	<view>
		<u-navbar z-index="999999" class="location-class" :border-bottom="false" title="我的订单" title-bold
			title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
		<!-- 搜索 和 筛选  -->
		<view class="search-and-filter-card">
			<view class="search-card u-flex">
				<!-- <u-search placeholder="请输入商品名称" @blur="search" :clearabled="false" :show-action="false" v-model="keyword"></u-search> -->
				<text class="iconfont icon-home_topbar_icon_search"></text>
				<u-input
					placeholder-style="color:#cccccc;padding-left:10rpx"
					type="text"
          @blur="search"
          v-model="keyword"
					placeholder="请输入商品名称"
					maxlength="15"
          />
			</view>
			<u-tabs :list="list"
				:is-scroll="true"
				:current="currentIndex"
				inactive-color="#66666"
				@change="change"
				active-color="#191919">
      </u-tabs>
		</view>
		<view style="height: 180rpx;"></view>
    <template v-if="orderList.length>0">
		<view v-for="(item,index) in orderList" :key="index">
			<view class="store-card">
				<view class="store-item u-flex">
					<view class="store-left u-flex">
                     <text class="store-label" v-if="item.orderGoods && item.orderGoods[0].orderType == 'GROUP_ORDER'">拼团</text>
						订单编号：{{item.orderNo}}
					</view>
					<text v-if="item.orderGoodsList&& item.orderGoodsList.length" :style="{'color':getOrderStatus(item.orderGoodsList[0].orderStatus).color}"
						class="order-state">{{getOrderStatus(item.orderGoodsList[0].orderStatus).name}}</text>
                    <text v-if="item.orderGoods&& item.orderGoods.length" :style="{'color':getOrderStatus(item.orderGoods[0].orderStatus).color}"
						class="order-state">{{getOrderStatus(item.orderGoods[0].orderStatus).name}}</text>    
                        
				</view>
				<view @click="goDeatil(item)" v-if="item.orderGoodsList.length">
					<shop-card :isGo="false" :titleShow="false" :shopList="item.orderGoodsList"></shop-card>
				</view>
				<view @click="goDeatil(item)" v-else>
					<shop-card :isGo="false" :titleShow="false" :shopList="item.orderGoods"></shop-card>
				</view>
        <!-- 虚拟商品订单提示 待发货和虚拟商品显示 -->
        <view class="virtual-hint" v-if="item.orderStatus == 'ORDER_UN_ISSUE' && item.orderGoods[0].goodsType==3">{{virtualHint}}</view>
				<view class="store-btn-card">
					<view class="u-text-right u-flex pic-total" :class="item.orderGoods && item.orderGoods[0].orderType == 'GROUP_ORDER'?'u-row-between':'u-row-right'">
            <view class="group-num" v-if="item.orderGoods && item.orderGoods[0].orderType == 'GROUP_ORDER'">
              {{ item.groupJoinNum ? item.groupJoinNum : 0 }}人团
            </view>
						<view class="u-flex" style="flex-wrap: wrap;justify-content: flex-end;">
							<!-- <view class="u-m-r-20">
								<text class="pic-total-title">总价:</text>
								<text class="real-price"> ¥ {{totalPrice(item)}}</text>
							</view>
							<view>
								<text class="pic-total-title ">优惠:</text>
								<text class="real-price"> ¥ {{switchMoney(Number(item.couponAmount))}}</text>
							</view> -->
							<view class="u-m-l-20">
								<text class="pic-total-title">合计:</text>
								<text class="pic-total-num">¥{{actualPrice(item)}}</text>
							</view>
						</view>
					</view>
					<order-btn :bntData="item" direction="row"></order-btn>
				</view>
			</view>
		</view>
		<!-- <view class="bottom-title">到底啦～</view> -->
    <u-loadmore :status="loadStatus" icon-color="#D1B085" :icon-type="iconType" margin-bottom="30" :load-text="loadText" />
    </template>
    <no-data v-if="orderList.length == 0 && finshed" type="noOrder"></no-data>
	</view>

</template>

<script>
import shopCard from '@/components/shopCard.vue'
import orderBtn from "@/components/orderBtn.vue";
import NoData from "../../components/noData";
export default {
    components: {
        NoData,
        shopCard,orderBtn
    },
    data () {
        return {
            keyword:'',
            title:'我的订单',
            list: [{
                name: '全部'
            },
            {
                name: '待付款'
            },
            {
                name: '待发货'
            },
            {
                name: '待收货',
            },
            {
                name: '待评价'
            },
            {
                name: '已完成'
            },
            ],
            currentIndex: 0,
            orderList: [],
            page:1,
            PageSize:5,
            orderId: '',
            orderGoodsId: '', //商品id
            orderType: '',
            params: {},
            finshed: false,
            loadStatus:'loadmore',//加载更多的状态
            loadText: {
                loadmore: '轻轻上拉',
                loading: '加载中......',
                nomore: '到底了'
            },
            iconType:'flower',
            virtualHint: '注：虚拟产品下单后6个月内未使用可随时退款，6个月之后自动发货，如有问题请联系客服。'
        }
    },
    computed: {
        status () {
            switch (this.currentIndex) {
            case 0:
                return 'ALL';
            case 1:
                return 'ORDER_UNPAID'; //待付款
            case 2:
                return 'ORDER_UN_ISSUE'; //代发货
            case 3:
                return 'ORDER_UN_RECEIVED'; //待收货
            case 4:
                return 'ORDER_UN_EVALUATE'; //待评价
            case 5:
                return 'ORDER_FINISH'; //已完成    
            }
        },
        totalPrice(){
            return(val)=>{
                if(val.paymentWay == 2){ //0.现金 1.现金加积分 2.现金加固定积分 3.纯积分
                    return `${this.switchMoney(val.orderPrice||'0')}+${val.integralPrice}积分` 
                }else if(val.paymentWay == 3){
                    return `${val.integralPrice}积分` 
                }else{
                    return  `${this.switchMoney(val.orderPrice || '0')}`
                }	
					
            }
        },
        actualPrice(){
            return (val)=>{
                if( val.paymentWay == 2){ //0.现金 1.现金加积分 2.现金加固定积分 3.纯积分
                    return `${this.switchMoney(val.orderActualPrice )}+${val.integralPrice}积分` 
                }else if(val.paymentWay == 3){
                    return `${val.integralPrice}积分` 
                }else{
                    return  `${this.switchMoney(val.orderActualPrice)}`
                }
            }
        }
    },
    onLoad (options) {
        if (options.index) {
            this.currentIndex = parseInt(options.index)
        } else {
            this.currentIndex = 0
        }
    },
    onShow () {
        this.page = 1
        this.fetchOrderList()
    },
    methods: {
        // 搜索
        search (e) {
        
            this.orderList = []
            this.page = 1
            this.keyword = e
            this.fetchOrderList()
        },
        // 切换tab栏
        change (index) {
            this.keyword = ''
            this.currentIndex = index;
            this.page = 1
            this.orderList = []
            uni.showLoading({
                title:'数据加载中...',
                mask:true
            })
            uni.pageScrollTo({
                scrollTop: 0,
                duration: 300
            });
            this.fetchOrderList()
        },
        //跳详情
        goDeatil(item){
				
            this.goTo(`/pagesA/order/waitPay?detail=${JSON.stringify(item)}`)
        },
        // 查询订单
        async fetchOrderList () {
            this.finshed = false
            let params = {
                orderStatus: this.status,
                goodsName: this.keyword,
                current:this.page,
                size:this.PageSize
            }
            this.loadStatus = 'loading';
            let res = await this.$http.getOrderList(params)
            if( res.dataInfo && res.dataInfo.records.length  ){
                if (this.page == 1) {
                    this.orderList = res.dataInfo.records
                } else {
                    this.orderList = this.orderList.concat(res.dataInfo?res.dataInfo.records:[])
                    this.orderList = [...this.orderList]
						
                }
                if(this.page ==res.dataInfo.pages ){
                    this.loadStatus = 'nomore';
                }
                // this.orderList = this.orderList.concat(res.dataInfo?res.dataInfo.records:[])
                // this.orderList =[...this.orderList,...res.dataInfo?res.dataInfo.records:[]]
            }else{
                this.finshed = true
                this.loadStatus = 'nomore';
                if(this.page == 1){
                    this.orderList =[]
                }
					
            }
				
        },
        onReachBottom () {
            console.log(this.page,'底部');
            this.page = this.page + 1;
            if (!this.finshed) {
                this.fetchOrderList();
            }
			
        },
    }
}
</script>

<style>
	page {
		background: #F8F8F8;
	}
</style>
<style lang="scss" scoped>
	// 头部搜索
	
	.search-and-filter-card {
		background: #FFFFFF;
		padding-top: 14rpx;
		margin-bottom: 20rpx;
		position: fixed;
		width: 100%;
    z-index: 9000;
		.search-card {
			margin: 0rpx 30rpx 14rpx;
			padding: 10rpx 30rpx;
      height: 72rpx;
			background: #F1F1F1;
			border-radius: 44rpx;
      /deep/u-input{
        margin-left: 10rpx;
        width: 100%;
      }
			.icon-search{
				font-size: 36rpx;
				color: #cccccc;
			}
      .icon-home_topbar_icon_search{
        font-size: 36rpx;
        color: #999999;
      }
           
		}
	}

	// 订单
	.store-card {
		padding: 0 30rpx;
		background: #ffffff;
		margin-bottom: 18rpx;

		.store-item {
			padding: 22rpx 0 18rpx 0;
			justify-content: space-between;

			.store-left {
				font-size: 26rpx;
				color: #191919;
        .store-label{
          margin-right: 10rpx;
          padding: 2rpx 12rpx;
          display: inline-block;
          background: #FF4E00;
          border-radius: 4rpx;

          font-size: 24rpx;
          color: #FFFFFF;
        }
			}

			image {
				width: 26rpx;
				height: 26rpx;
			}

			.store-name {
				margin-left: 10rpx;
				font-size: 24rpx;
				color: #191919;
				font-weight: 400;
			}

			.order-state {
				font-size: 28rpx;
				// color: #EC4545;
				font-weight: 400;
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
				flex: 1;
				height: 160rpx;
				flex-direction: column;
				justify-content: space-between;

				.top-center {
					.title {
						font-size: 20rpx;
						color: #000000;
						font-weight: 400;
					}

					.tip {
						margin-top: 6rpx;
						width: 410rpx;
						font-size: 20rpx;
						color: #999999;
						font-weight: 400;
					}

					.goods-num {
						font-size: 20rpx;
						color: #999999;
						font-weight: 400;
					}
				}

				.bottom-center {
					width: 100%;
					justify-content: space-between;

					.goods-pic {
						font-size: 28rpx;
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
			.group-num{
				font-size: 28rpx;
				color: #666666;
			}

			.pic-total-title {
				font-size: 28rpx;
				color: #191919;
				font-weight: 400;
			}

			.pic-total-num {
				margin-left: 16rpx;
				font-size: 34rpx;
				color: #191919;
				font-weight: 600;
			}
			.real-price{
				font-size: 28rpx;
				color: #666666;
			}
		}
		
	}

	.bottom-title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 37rpx;
		margin-bottom: 100rpx;
		font-size: 24rpx;
		color: #999999;
		font-weight: 400;
		text-align: center;

		&:after,
		&:before {
			content: '';
			width: 100rpx;
			height: 2rpx;
			background: #E6E6E6;
			margin: 0 22rpx;
		}
	}

  .virtual-hint{
    padding: 20rpx;
    background: #FFF2E0;
    border-radius: 14rpx;

    font-size: 22rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #BD9765;
    line-height: 30rpx;
  }

	.icon-sousuo {
		margin-right: 10rpx;
		font-size: 32rpx;
	}

	/deep/.u-tab-bar {
		background: #D1B085 !important;
	}

	/deep/ input {
		min-height: 0 !important;
		height: auto !important;
		line-height: 0 !important;
	}
  /deep/.u-content{
    height: 60rpx!important;
    padding: 0 5rpx!important;
  }
	/deep/.g-store-card{
    padding: 0!important;
  }
</style>
