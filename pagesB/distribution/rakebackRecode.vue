<template>
	<view class="container ">

		<u-navbar :border-bottom="false" title="返利明细" title-bold title-color="#191919" title-size="36"
			back-icon-color="#000000"></u-navbar>
		<u-tabs style="width: 100%;" :list="list" active-color="#191919" inactive-color="#191919" :is-scroll="false"
			:current="current" @change="change"></u-tabs>

    <view class="u-flex u-row-between top-box">
      <view class="all-order" @click="show=true">{{popupItem[orderCurrent].name}}</view>
      <view >
        <view class="all-money">{{list[current].name}}: <text>￥{{switchMoney(getMoney.receivedAmount)}}</text></view>
        <view class="classify-money">
          <text>商城订单：￥{{switchMoney(getMoney.microMallReceivedAmount)}}</text>
          <text class="u-m-l-20">门店订单：￥{{switchMoney(getMoney.goldShopReceivedAmount)}}</text>
        </view>
      </view>
    </view>
        
		<view  class="scroll-y">
			<scroll-view v-if="rebateList.length" @scrolltolower="getMore" scroll-y="true" :style="{height:top+'px'}">
				<view @click="goDetail(item)" v-for="(item,index) in rebateList" :key="index" class="wrap ">
					<view class="head u-row-between u-flex">
						<view class="head-lfet">
							下单时间：{{item.createDate}}
						</view>
            <view class="head-right">{{item.orderSource == 1 ? '商城订单' : '门店订单'}}</view>
					</view>
          <view class="stores-order" v-if="item.orderSource =='2'">
            <view class="stores-title">{{item.goodsName}}</view>
            <view class="stores-info u-flex">
              <text class="info-tip" v-if="getActiveNameByOrderType(item)">{{getActiveNameByOrderType(item)}}</text>
              <text class="info-name">购买人：{{item.buyerName}}</text>
            </view>
            <view class="money u-flex">
              <text>支付金额:¥{{switchMoney(item.payAmount)}}</text>
              <text class="rebate">返利:¥{{switchMoney(item.income)}}</text>
            </view>
          </view>
					<view class="goods-wrap" v-if="item.orderSource == '1'">
						<view class="">
							<image :src="imgUrl(item.goodsImg)"></image>
						</view>
						<view class="goods-right">
							<view class="goods-name">
								{{item.goodsName}}
							</view>
							<view class="sku-name u-flex u-row-between">
								<view class="">
									商品规格：{{item.skuName?item.skuName:'统一规格'}}
								</view>
								<view class="goods-num">
									x {{item.goodsNum?item.goodsNum:1}}
								</view>
							</view>
							<view class="total">
								<text class="price">¥{{switchMoney(item.payAmount)}}</text>
								<text class="rake-price">{{current==0?'预计返佣':'返佣金额'}}¥{{switchMoney(item.income)}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			
		</view>
		<view :style="{height:top+'px'}" v-if="!rebateList.length && finished">
			<no-data></no-data>
		</view>
    <u-popup v-model="show" mode="bottom" border-radius="20">
      <view class="popup-card">
        <view class="popup-item" @click="selPopupItem(index)" :class="{'popup-item-active':index == orderCurrent}" v-for="(item,index) in popupItem">{{item.name}}</view>
      </view>
    </u-popup>
	</view>
</template>

<script>
	import NoData from '@/components/noData.vue'
	export default {
		components: {
			NoData
		},
		data () {
			return {
        list: [{
						name: '未到账'
					},
					{
						name: '已到账'
					}
				],
        popupItem: [
          {
            name: '全部订单'
          },
          {
            name: '商城订单'
          },
          {
            name: '门店订单'
          }
        ],
				current: 0,
				rebateList: [],
				finished: false,
				scale: 1,
				top:0,
        show:false,
        size:10,
        pages:1,
        rebateMoney: {},    // 返利金额
        orderCurrent: 0,     // 订单选项
        isMore:true
			}
		},
		computed: {
			rebateStatus () {
				if (this.current == 0) {
					return 2
				} else {
					return 1
				}
			},
      getActiveNameByOrderType(){
        return obj =>{
          const type = obj?.orderType || ''
          if(type == 'GROUP_ORDER' ){
            return '拼团'
          }
          if(type == 'SALE_CARD_ORDER' ){
            return '售卡'
          }
          return ''
        }
      },
      getMoney(){
			  if(this.current == 1){
          return {
            receivedAmount:this.rebateMoney?.receivedAmount || 0,
            microMallReceivedAmount:this.rebateMoney?.microMallReceivedAmount || 0,
            goldShopReceivedAmount:this.rebateMoney?.goldShopReceivedAmount || 0
          }
        }
        if(this.current == 0){
          return {
            receivedAmount:this.rebateMoney?.unReceivedAmount || 0,
            microMallReceivedAmount:this.rebateMoney?.microMallUnReceivedAmount || 0,
            goldShopReceivedAmount:this.rebateMoney?.goldShopUnReceivedAmount || 0
          }
        }
      }
		},
		onReady () {
			const query = uni.createSelectorQuery().in(this);
			query.select('.scroll-y').boundingClientRect(data => {
				this.top = getApp().globalData.windowHeight - data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
			}).exec()
			let system = uni.getSystemInfoSync()
			this.scale = system.windowWidth / 750 //按照苹果留 375*667比例 其他型号手机等比例缩放 显示
		},
		onLoad (option) {
			this.current = Number(option?.current || 0)
		},
		onShow () {
			this.fetchRebateList()
      this.getRebateAmount()
		},
		methods: {
		  // seeMore
      getMore(){
        if(!this.isMore){
          return
        }
        this.pages = this.pages+1
        this.fetchRebateList()
      },
		  // 选择订单来源
      selPopupItem(index){
        this.show = false
        if(index == this.orderCurrent){
          return
        }
        this.orderCurrent = index
        this.pages = 1
        this.fetchRebateList()
      },
			// 切换tab栏
			change (index) {
				this.current = index
        this.pages = 1
        this.isMore = true
        this.getRebateAmount()
				this.fetchRebateList()
			},
			// 查询列表
			async fetchRebateList () {
				try {
          let param = {
            userPhone: this.$globleData?.userData?.phoneNumber || '',
            rebateStatus: this.rebateStatus,
            current: this.pages,
            size: this.size
          }
          if(this.orderCurrent){
            param.orderSource = this.orderCurrent
          }
					let res = await this.$http.rebateList(param)
          const records = res.dataInfo?.records || []
          if(this.pages >= res?.dataInfo?.pages){
            this.isMore = false
          }else{
            this.isMore = true
          }
          if(this.pages >1){
            this.rebateList = this.rebateList.concat(records)
            return
          }
					this.rebateList = records
					this.finished = true
				} catch (e) {
					//TODO handle the exception
				}
			},
      // 查询个人返利明细-返利金额统计
      async getRebateAmount(){
			  let param = {
          userPhone: this.$globleData?.userData?.phoneNumber || '',
          rebateStatus: this.rebateStatus
        }
        const {dataInfo:res} = await this.$http?.rebateAmount(param)
        this.rebateMoney = res || {}
      },
			goDetail (item) {
				this.goTo(`/pagesB/distribution/rankBack?id=${item?.id}&orderSource=${item.orderSource}`)
			}
		}
	}
</script>
<style>
	page{
		overflow: hidden;
	}
</style>
<style lang="scss" scoped>
	/deep/.u-tab-bar {
		background: #D1B085 !important;
	}

	.container {
		height: 100%;
		// flex-direction: column;
	}

	.tabs {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
	}

	.wrap {
		height: 274rpx;
		width: 100%;
		padding: 0 30rpx;
		margin-top: 20rpx;
		background: #FFFFFF;

		.head {
			height: 72rpx;
			.head-lfet{
        font-family: PingFangSC-Regular;
        font-size: 24rpx;
        color: #999999;
        font-weight: 400
			}
			.head-right{
				display: flex;
				justify-content: flex-end;
        font-family: PingFangSC-Regular;
        font-size: 28rpx;
        color: #EC4545;
        letter-spacing: 0;
        font-weight: 400;
			}
		}

		.goods-wrap {
			padding: 20rpx 0;
			display: flex;

			image {
				width: 160rpx;
				height: 160rpx;
			}

			.goods-right {
				margin-left: 30rpx;
				flex: 1;

				.goods-name {
					font-size: 28rpx;
					margin: 10rpx 0;
					color: #000000;
				}

				.sku-name {
					font-size: 26rpx;
					color: #999999
				}

				.total {
					margin-top: 23rpx;

					.price {
						font-size: 28rpx;
						color: #191919;
					}

					.rake-price {
						margin-left: 10rpx;
						font-size: 24rpx;
						color: #D1B085;
					}
				}
			}

		}
	}
  .stores-order{
    margin-top: 30rpx;
    .stores-title{
      font-family: PingFangSC-Medium;
      font-size: 28rpx;
      color: #191919;
      letter-spacing: 0;
      font-weight: 500;
    }
    .stores-info{
      margin-top: 10rpx;
      .info-tip{
        margin-right: 10rpx;
        display: inline-block;
        padding: 2rpx 12rpx;
        font-family: PingFangSC-Medium;
        font-size: 18rpx;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 500;
        background: #D1B085;
      }
      .info-name{
        font-family: PingFangSC-Regular;
        font-size: 26rpx;
        color: #191919;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
    .money{
      margin-top: 12rpx;
      font-family: PingFangSC-Regular;
      font-size: 26rpx;
      color: #999999;
      letter-spacing: 0;
      font-weight: 400;
      .rebate{
        margin-left: 20rpx;
        font-family: PingFangSC-Regular;
        font-size: 24rpx;
        color: #D1B085;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
  .top-box{
    padding: 30rpx;
    .all-order{
      display: inline-block;
      margin-bottom: 10rpx;
      font-family: PingFangSC-Regular;
      font-size: 30rpx;
      color: #191919;
      letter-spacing: 0;
      font-weight: 400;
      &::after{
        font-family: "iconfont";
        content: '\e677';
        font-size: 24rpx;
        margin-left: 14rpx;
      }
    }
    .all-money{
      font-family: PingFangSC-Regular;
      font-size: 30rpx;
      color: #191919;
      text-align: right;
      font-weight: 400;
    }
    .classify-money{
      font-family: PingFangSC-Regular;
      font-size: 24rpx;
      color: #999999;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
  .popup-card{
    margin-bottom: iphone-bottom();
    .popup-item{
      padding: 34rpx 0;
      font-family: PingFangSC-Medium;
      font-size: 30rpx;
      color: #191919;
      letter-spacing: 0;
      text-align: center;
      font-weight: 500;
      &-active{
        color: #D1B085;
      }
    }
  }
</style>
