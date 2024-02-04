<template>
	<view class="">
		<u-navbar z-index="999999" class="location-class" :border-bottom="false" title="我的拼团" title-bold
			title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
		<!-- 搜索 和 筛选  -->
		<view class="search-and-filter-card">
			<view class="search-card u-flex">
				<!-- <u-search placeholder="搜索我的订单" @blur="search" :clearabled="false" :show-action="false"
					v-model="keyword"></u-search> -->
                <text class="iconfont icon-home_topbar_icon_search"></text>
				<u-input
					placeholder-style="color:#cccccc;padding-left:10rpx"
					type="text"
                    @blur="search"
					placeholder="搜索我的订单"
                />
			</view>
        <u-tabs :list="list"
                :is-scroll="true"
                :current="current"
                inactive-color="#66666"
                @change="tabChange"
                active-color="#191919">
        </u-tabs>
		</view>
		<view style="height: 180rpx;"></view>
		<template v-if="orderList.length>0">
			<view v-for="(item,index) in orderList" :key="index">
				<view class="store-card">
					<view class="store-item u-flex">
						<view class="store-left u-flex">
							<text class="store-label">拼团</text>
              <text class="store-num">{{item.groupActivityCompleteNum}}人团</text>
						</view>
						<text :style="{'color':getGroupStatus(item.groupOrderStatus).color}"
							class="order-state">{{getGroupStatus(item.groupOrderStatus).name}}</text>
					</view>

					<view @click="goDeatil(item)">
						<shop-card orderType="group" :titleShow="false" :shopList="[item]"></shop-card>
					</view>
					<view class="store-btn-card">
						<view class=" u-flex   pic-total" :class="item.userAvatarList.length?'u-row-between':'u-row-right'">
							<view class="u-flex" v-if="item.userAvatarList && item.userAvatarList.length">
								<view class="img-list" v-for="(imgItem,id) in item.userAvatarList.slice(0,4)" :key="id">
								  <image :src="imgItem" :class="item.userAvatarList.length>4&& id == 3?'last-image':''"></image>
								  <view class="num u-flex" v-if="item.userAvatarList.length>4 && id == 3">+{{item.userAvatarList.length-4}}</view>
								</view>
							</view>
							<view v-if="item.groupActivityType==2 && item.groupOrderStatus == 'GROUP_RUNNING'" class="sepec-group">
								<text class="pre-pay">预付款：{{switchMoney(item.groupPayPrice) || 0}} </text>
								<text v-if="item.lastGroupPrice">尾款剩余：<text class="final-pay">{{switchMoney(item.lastGroupPrice) || 0}}</text></text>
							</view>
							<view v-if="item.groupActivityType==1" class="">
								<text class="pic-total-title">合计:</text>
								<text class="pic-total-num">¥{{switchMoney(item.groupPayPrice) || 0}}</text>
							</view>


						</view>
						<order-btn :bntData="item" groupType="group" direction="row"></order-btn>
					</view>
				</view>
			</view>
			<view class="bottom-title">到底啦～</view>
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
			shopCard,orderBtn,NoData
		},

		data () {
			return {
				keyword: '',
				title: '我的拼团',
				list: [{
						name: '全部'
					},
					{
						name: '待付款'
					},
					{
						name: '拼团中'
					},
					{
						name: '已成团',
					},
					{
						name: '拼团失败'
					},
				],
				current: 0,
				queryType:0,
				page:1,
				pageSize:5,
				orderList: [],
				finshed: false,

			}
		},
		onShow () {
			this.page = 1
			this.orderList = []
			this.fetchOrderList()
		},
		methods: {
			// 获取我的拼团信息
			async fetchOrderList(){
				let param = {}
				this.finshed = false
				if(this.current == 0){
					param ={
						current:this.page,
						size:this.pageSize,
						goodsName:this.keyword
					}
				}else {
					param ={
						queryType:this.queryType,
						current:this.page,
						size:this.pageSize,
						goodsName:this.keyword
					}
				}

				let res = await this.$http.myGroupList(param)
				if( res.dataInfo && res.dataInfo.records.length  ){
					if (this.page == 1) {
						this.orderList = res.dataInfo.records
					} else {
						this.orderList =[...this.orderList,...res.dataInfo?res.dataInfo.records:[]]

					}


				}else{
					this.finshed = true
					if(this.page == 1){
						this.orderList =[]
					}

				}

			},
			// 搜索
			search (e) {

			   this.keyword = e
			   this.fetchOrderList()

			},
			goDeatil(item){

				this.goTo(`/pagesA/order/groupDetail?groupOrderId=${item.groupOrderId}`)
			},
			tabChange (index) {
				this.orderList = []
                this.current = index;
				this.page = 1
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
                if(this.current == 1){
					this.queryType = 0
				}else if(this.current == 2){
					this.queryType = 1
				}else if(this.current == 3){
					this.queryType =  2
				}else if(this.current == 4){
					this.queryType =  3
				}
				this.fetchOrderList()
			},
			onReachBottom () {

				this.page = this.page + 1;
				if (!this.finshed) {
					this.fetchOrderList();
				}

			},
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.u-tab-bar {
		background: #D1B085 !important;
	}

	/deep/ input {
		min-height: 0 !important;
		height: auto !important;
		line-height: 0 !important;
	}

	// 头部搜索
	.search-and-filter-card {
		background: #FFFFFF;
		padding-top: 14rpx;
		margin-bottom: 20rpx;
		position: fixed;
		width: 100%;
        z-index: 999;
		.search-card {
			margin: 0rpx 30rpx;
			padding: 10rpx 30rpx;
            height: 72rpx;
			background: #F1F1F1;
			border-radius: 44rpx;
            .icon-home_topbar_icon_search{
                font-size: 36rpx;
				color: #999999;
            }
			.icon-search {
				font-size: 36rpx;
				color: #cccccc;
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
            border-bottom: 1rpx solid #E6E6E6;;
			.store-left {
				font-size: 26rpx;
				color: #191919;

				.store-label {
					margin-right: 10rpx;
					padding: 2rpx 12rpx;
					display: inline-block;
					background: #FF4E00;
					border-radius: 4rpx;

					font-size: 24rpx;
					color: #FFFFFF;
				}
				.store-num{
					font-size: 28rpx;
					margin-left: 5rpx;
					font-weight: 600;
					color: #000000;
				}
			}

			.order-state {
				font-size: 28rpx;
				// color: #EC4545;
				font-weight: 400;
			}
		}
		.store-btn-card{
			font-size: 28rpx;
			font-weight: 400;
			color: #191919;
			padding-bottom: 20rpx;
			.img-list{
			  position: relative;
			  margin-left: -20rpx;
			  .last-image{
				  &:last-of-type{
				     filter: contrast(25%)
				  }
			  }
			  image{
			    width: 60rpx;
			    height: 60rpx;
			    border-radius: 50%;
			  }
			  &:nth-of-type(1){
			    margin-left: 0;
			  }
			  // &:nth-last-of-type(1){
			  //   image{
			  //     filter: contrast(25%)
			  //   }
			  // }
			  .num{
			    justify-content: center;
			    position: absolute;
				z-index: 0;
			    top:44%;
			    left: 50%;
			    transform:translate(-50%,-50%);
			    font-size: 24rpx;
			    color: #FFFFFF;
			    justify-content: center;
			  }
			}
			.sepec-group{
				font-size: 28rpx;
				color: #191919;
				.pre-pay{
					margin-right: 10rpx;
				}
				.final-pay{

					font-weight: 600;
				}
			}
			.pic-total-title{
				margin-right: 20rpx;
			}
			.pic-total-num{
				font-weight: 600;
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
</style>
