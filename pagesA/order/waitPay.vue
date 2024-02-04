<template>
  <view class="g-wait-pay">
    <!-- <block v-if="loading">
        <waitPayskeleton  />
    </block> -->
    <block>
        <u-navbar z-index="999999" :border-bottom="false" :title="navbarTitle"
                title-size="36">
    </u-navbar>
    <view class="u-m-t-20">
        <trad-success :liftCode="orderDetail && orderDetail.orderCode" title="自提码" tip="自提时需要将自提码给店员" type="code" v-if="orderDetail && orderDetail.orderCode"></trad-success>
     <!-- 交易成功 -->
    <trad-success title="交易成功啦" tip="写评价分享你的购物心情吧" v-if="orderDetail && orderDetail.orderStatus == 'ORDER_UN_EVALUATE'"></trad-success>
    <trad-success title="交易已关闭" tip="再逛一逛，下一件一定是有缘分的宝贝～" type="fail" v-if="orderDetail && (orderDetail.orderStatus == 'ORDER_CLOSE' || orderDetail.orderStatus == 'ORDER_CANCEL')"></trad-success>
    </view>
    
    <view class="" v-if="orderDetail">
        <view v-if="orderDetail.orderStatus != 'ORDER_UN_EVALUATE' && orderDetail.orderStatus != 'ORDER_CANCEL'" class="address-card">
			<view class="wait-pay" :style="{marginLeft:orderDetail.orderStatus == 'ORDER_UN_RECEIVED'?'30rpx':'108rpx'}">
				<view class="u-flex u-row-between u-padding-right-30">
					<view class="u-flex">
						<image v-if="orderDetail.orderStatus == 'ORDER_UN_RECEIVED' " class="transport" src="../static/image/icon_transport.png"></image>
						<view v-if=" orderDetail!= null" class="name">
							<text v-if="orderDetail.orderStatus == 'ORDER_UN_RECEIVED'">运输中...</text>
							<view v-else>
								<text v-if="!orderDetail.orderCode">{{getOrderStatus(orderDetail.orderStatus).name}}</text>
                <view class="virtual-hint" v-if="goodsType == 3">{{virtualHint}}</view>
							</view>
						</view>
					</view>
					<view v-if="orderDetail.orderStatus == 'ORDER_UN_RECEIVED' && orderDetail.orderGoodsList[0].goodsType !=3 " @click="goTo(`/pagesA/shop/logistic?orderId=${orderDetail.orderGoodsList[0].id}`)" class="check-logistics u-flex u-row-center">查看物流</view>
				</view>
				
				<!-- <view v-if="orderDetail.orderStatus == 'ORDER_UNPAID'" class="wait-time">
					剩余付款时间01小时59分45秒
				</view> -->
		</view>
		<view class="u-flex address" :style="{'margin-top':orderDetail && orderDetail.orderCode?'0':''}">
			<image src="../static/image/icon_address.png"></image>
			<view class="card-left">
        <view class="left-top" v-if="!orderDetail.orderCode">
            <text class="left-user-name">{{getName.name}}</text>
            <text class="left-user-phone">{{getName.phone}}</text>
        </view>
        <view class="shoname" v-else>
            {{orderDetail.shopName}}
        </view>
        <view class="left-bottom">
            {{orderDetail.detailAddress?orderDetail.detailAddress:''}}
        </view>
      </view>
		</view>
        </view>
    </view>
    <!--  成团人数  -->
    <people-num v-if="orderDetail && orderDetail.isGroup == 0 && orderDetail" :peopleInfo="orderDetail"></people-num>
    <!--  邀请好友  -->
    <invite-friend v-if="false"></invite-friend>
    <view v-if="orderDetail && orderDetail.orderGoodsList.length" class="store-card">
        <shop-card :sort="true" :titleShow="false" :shopList="orderDetail && orderDetail.orderGoodsList"></shop-card>
		<!-- v-if="orderDetail.orderStatus == 'ORDER_UN_RECEIVED' && orderDetail.returnGoodsAuditStatus == 0" -->
        <view class="u-flex u-row-right">
        <view v-if="refundBtnShow" @click="refund" class="exchange u-flex u-row-center u-m-b-20">
            {{refundName}}
        </view>
        </view>
    </view>
	
    <!-- 计算详情  -->
	<view v-if="orderDetail">
		<goods-info :detail="orderDetail"></goods-info>
	</view>
    <!-- 积分    -->
	<view class="get-point" v-if="orderDetail && orderDetail.orderStatus != 'ORDER_UNPAID' && orderDetail.predictIntegrate!='0'">
		<text class="core">积分</text>
		<text class="get-core">获得<text class="text-colore">{{orderDetail.predictIntegrate}}</text>积分</text>
	</view>
    <order-info v-if="orderDetail" :detail="orderDetail"></order-info>
    <!--  底部btn  -->
	<view v-if="orderDetail && groupType == 'common'">
		<order-btn :bntData="orderDetail" direction="column"></order-btn>
	</view>
    <view v-if="orderDetail && groupType == 'group' ">
      <order-btn :bntData="orderDetail" groupType="group" direction="column"></order-btn>
    </view>
    </block>
  </view>
</template>

<script>
import OrderInfo from "../components/orderInfo";
import tradSuccess from "../components/tradSuccess.vue";
import shopCard from "@/components/shopCard.vue";
import goodsInfo from "../components/goodsInfo.vue";
import orderBtn from "@/components/orderBtn.vue";
import PeopleNum from "../components/peopleNum";
import InviteFriend from "../components/inviteFriend";
export default {
    name: "OrderDetail",
    components: {InviteFriend, PeopleNum, OrderInfo,tradSuccess,shopCard,goodsInfo,orderBtn},
    onLoad(options){
        if(options?.orderId){
            this.orderId = options.orderId
        }else{
            this.orderId = JSON.parse(options.detail).orderId
            if(JSON.parse(options.detail).orderGoods){
                this.goodsId = JSON.parse(options.detail).orderGoods[0].id
                this.goodsType = JSON.parse(options.detail).orderGoods[0].goodsType
            }
        }
        // this.groupType = 'group'
        console.log('-----------', options)
    },
    onShow(){
        this.fetchOrderList()
    },
    data() {
        return{
            title:'订单详情',
            orderId:'',
            goodsId:'',
            orderDetail:null,
            groupType:'common',
            loading:true,
            goodsType: '',
            virtualHint:'注：虚拟产品下单后6个月内未使用可随时退款，6个月之后自动发货，如有问题请联系客服。'
        }
    },
    computed:{
        getName(){
            let addresData = {}
      
            addresData.name=this.orderDetail?.addressConfig?.contactName ||this.orderDetail?.userName
            addresData.phone=this.orderDetail?.addressConfig?.phone ||this.orderDetail?.userPhone
      
            return addresData
        },
        navbarTitle(){
            if(this.orderDetail){
                if(this.orderDetail.orderStatus == 'ORDER_UNPAID') {
                    return '等待买家付款'
                }else if(this.orderDetail.orderStatus == 'ORDER_UN_ISSUE'){
                    return '等待卖家发货'
                }else if(this.orderDetail.orderStatus == 'ORDER_UN_RECEIVED'){
                    return '卖家已发货'
                }else if(this.orderDetail.orderStatus == 'ORDER_UN_EVALUATE'){
                    return '交易成功'
                }else if(this.orderDetail.orderStatus == 'ORDER_CLOSE'){
                    return '交易关闭'
                }else if(this.orderDetail.orderStatus == 'ORDER_CANCEL'){
                    return '订单已取消'
                } else if(this.orderDetail.orderStatus == 'ORDER_FINISH'){
                    return '订单已完成'
                } else if(this.orderDetail.orderStatus == 'ORDER_LEFT_WAIT'){
                    return '商品自提'
                }
            } 
        },
        refundBtnShow(){ //退款换货按钮显示
            let goodsData = this.orderDetail?.orderGoodsList || []
            const goodsType = goodsData[0]?.goodsType
            let paymentWay
            if(goodsData.length){
                paymentWay=goodsData[0]?.paymentWay
            }

            if(goodsType == 3){
                return false
            }

            if(['ORDER_UN_ISSUE','ORDER_CLOSE'].includes(this.orderDetail?.orderStatus)){ 
                if(this.orderDetail.orderActualPrice!='0'&& ['TO_AUDIT','APPROVE_AUDIT','REFUND_OF','REFUND_FINISH'].includes(this.orderDetail?.returnGoodsStatus)){
                    return true
                }
            }else if(this.orderDetail?.orderStatus == 'ORDER_UN_RECEIVED'){
                if((paymentWay ==2 || paymentWay ==3)&&(!this.orderDetail?.swapGoodsStatus)){//积分换货
                    return true  
                }else{//普通
                    if(paymentWay ==2 || paymentWay ==3){
                        return false
                    }
                    return true
                }
            }
            return false
        },
        refundName(){ //退款换货按钮的名字
            // let goodsData = this.orderDetail?.orderGoodsList || []
            if(this.orderDetail){
                let paymentWay
                paymentWay=this.orderDetail?.paymentWay
                if( this.orderDetail?.returnGoodsStatus=='REFUND_FINISH'){ //repairsType 退款类型(1.仅退款 2.退货退款)
                    return '退款成功'
                }
                if(this.orderDetail?.orderStatus == 'ORDER_UN_ISSUE' && this.orderDetail?.repairsType && this.orderDetail?.returnGoodsStatus) {
                    if(this.orderDetail?.repairsType==1 && ['TO_AUDIT','APPROVE_AUDIT','REFUND_OF','APPROVE_AUDIT'].includes(this.orderDetail?.returnGoodsStatus)){
                        return '退款中'
                    }
               
                }else if(this.orderDetail?.orderStatus == 'ORDER_UN_RECEIVED'){
                    if(paymentWay ==2 || paymentWay ==3){//积分换货
                        return '换货'
                    }else{//普通
                        if(!this.orderDetail?.repairsType){//没有申请退换货
                            return '退换'
                        }else{//已经换货了，根据returnGoodsStatus退货订单状态来判断展现的文字提示
                            if(['TO_AUDIT','APPROVE_AUDIT','WAITING_DELIVERY','WAITING_GOODS','RECEIVED_GOODS'].includes(this.orderDetail?.returnGoodsStatus)){
                                return '退货中'
                            }else if(this.orderDetail?.returnGoodsStatus=='REFUND_OF'){
                                return '退款中'     
                            }
                        }
                    
                    }
                }else {
                    if(paymentWay ==2 || paymentWay ==3){//积分换货
                        return '换货'
                    }
                }
                return '退换'

            }
            
        }
    },
    
    methods:{
    // 获取订单详情
        async fetchOrderList(){
            let res = await this.$http.getOrderDetail({orderId:this.orderId,orderGoodsId:this.goodsId})
            this.orderDetail = res.dataInfo
            setTimeout(()=> {
                this.loading = false
            }, 1000);
        },
        refund(){
            let goodsData = this.orderDetail?.orderGoodsList
            let paymentWay = goodsData[0]?.paymentWay
            if(paymentWay ==2 || paymentWay ==3){
                this.goTo(`/pagesA/afterSales/selectServe?detail=${JSON.stringify(goodsData)}`)
            }else{
                if(this.orderDetail?.repairsType==1 ||(this.orderDetail?.repairsType==2&&(this.orderDetail?.returnGoodsStatus!='REVIEW_FAILED'&& this.orderDetail?.returnGoodsStatus!='USER_CANCEL'))){
                    this.goTo('/pagesA/afterSales/refundRecord')
                }else{
                    this.goTo(
                        `/pagesA/afterSales/refund?orderStatus=${this.orderDetail.orderStatus}&detail=${JSON.stringify((this.orderDetail?.orderGoods ||this.orderDetail?.orderGoodsList ||[]))}`
                    ) 
                }
            
            }
        
        },
        // 去支付
        async goPay(orderId){
            const {dataInfo: res} = await this.$http.payWxOrder({orderId:this.orderId,orderPayType:7})
            const paySign = res?.paySign || ''
            // 如果获取失败 就直接跳转到订单待支付页面
            if(!paySign){
                // 跳转待支付页面
                this.goTo('/pagesA/order/waitPay')
                return
            }
            // 成功 调起微信支付
            wx.requestPayment({
                timeStamp: res.timeStamp,
                nonceStr: res.nonceStr,
                package: res.packageValue,
                signType: res.signType,
                paySign: res.paySign,
                success: (res)=> {
                    this.goTo('/pagesA/shop/paySuccess')
                },
                fail: (res)=> {
                    console.log(res)
                    this.goTo('/pagesA/order/waitPay')
                }
            })
        },
    }
}
</script>

<style lang="scss">
  page{
    background: #F8F8F8;
  }

</style>
<style lang="scss" scoped >
.g-wait-pay{
  padding-bottom: iphone-bottom(4rpx);
}
.head{
  padding: 20rpx 30rpx;
  // position: fixed;
  width: 100%;
  // top: 0;
  // background-image: linear-gradient(45deg, #FFA132 0%, #FF612C 100%);
  .head-card {
    border-radius: 14rpx;
    // background: #ffffff;
    padding: 35rpx 30rpx;
    image {
      width: 68rpx;
      height: 68rpx;
    }
    .head-card-content {
      flex: 1;
      margin-left: 30rpx;
      .head-card-title{
        font-size: 32rpx;
        color: #191919;
        font-weight: 500;
      }
      .head-card-tip{
        margin-top: 4rpx;
        font-size: 24rpx;
        color: #666666;
        font-weight: 400;
      }
    }
    .head-card-btn{
      padding: 15rpx 44rpx;
      display: inline-block;
      border: 2rpx solid #999999;
      border-radius: 45rpx;
      font-size: 28rpx;
      color: #666666;
    }
  }
}
// 地址管理
.address-card {
  background: #ffffff;
  padding:  40rpx 0 37rpx 0;
  margin-top: 20rpx;
  .address{
        margin-top: 36rpx;
        image {
        margin-left: 30rpx;  
        width: 68rpx;
        height: 68rpx;
    }
    .card-left{
        flex: 1;
        margin-left: 10rpx;
        padding-right: 69rpx;
    .left-top{
        .left-user-name{
            font-size: 32rpx;
            color: #191919;
            font-weight: 500;
        }
        .left-user-phone{
            margin-left: 20rpx;
            font-size: 28rpx;
            color: #666666;
            font-weight: 400;
        }
    }
    .left-bottom{
        margin-top: 16rpx;
        font-size: 30rpx;
        color: #999999;
        letter-spacing: 0;
        line-height: 42rpx;
        font-weight: 400;
    }
    }
    .shoname{
        font-size: 32rpx;
        color: #191919;
        font-weight: 500;
    }
  }
  
  .wait-pay{
        margin-left:108rpx ;
    .transport{
        width: 68rpx;
        height: 68rpx;
    }
    .name{
        margin-bottom: 10rpx;
        font-size: 36rpx;
        color: #191919;
        font-weight: 500;
    }
    .check-logistics{
        width: 158rpx;
        height: 50rpx;
        border: 2rpx solid #999999;
        border-radius: 45rpx;
    }
    .wait-time{
        font-size: 28rpx;
        color: #666666;
    }
  }
  
}

// 订单
.store-card{
  margin-top: 20rpx;
  padding: 0 30rpx;
  background: #ffffff;
  margin-bottom: 18rpx;
  .store-item {
    padding: 16rpx 0;
    justify-content: space-between;
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
    .order-state{
      font-size: 28rpx;
      color: #FB5324;
      font-weight: 400;
    }
  }
  .exchange{
        width: 158rpx;
        height: 50rpx;
        border: 2rpx solid #999999;
        border-radius: 45rpx;
  }
  .goods-item{
    padding: 30rpx 0rpx;
    image{
      width:160rpx;
      height: 160rpx;
      margin-right: 30rpx;
    }
    .item-right-center{
      flex: 1;
      height: 160rpx;
      flex-direction: column;
      justify-content: space-between;
      .top-center{
        .title{
          font-size: 20rpx;
          color: #000000;
          font-weight: 400;
        }
        .tip{
          margin-top: 6rpx;
          width: 410rpx;
          font-size: 20rpx;
          color: #999999;
          font-weight: 400;
        }
        .goods-num{
          font-size: 20rpx;
          color: #999999;
          font-weight: 400;
        }
      }
      .bottom-center{
        width: 100%;
        justify-content: space-between;
        .goods-pic{
          font-size: 28rpx;
          color: #191919;
          font-weight: 400;
        }
        .goods-btn{
          border: 2rpx solid #999999;
          border-radius: 45rpx;
          padding: 8rpx 55rpx;
          font-size: 24rpx;
          color: #666666;
          font-weight: 400;
        }
      }
    }
  }
}


.go-pay{
	width: 690rpx;
	height: 90rpx;
	margin:  0 auto;
	margin-top: 50rpx;
	background: #E8B759;
	border-radius: 45rpx;
	font-size: 32rpx;
	text-align: center;
	line-height: 90rpx;
	color: #FFFFFF;
	font-weight: 500;
	
}
.cancel-order{
	width: 690rpx;
	height: 90rpx;
	margin: 0 auto;
	margin-top: 30rpx;
	margin-bottom: 50rpx;
	border: 1rpx solid #999999;
	border-radius: 45rpx;
	font-size: 32rpx;
	color: #666666;
	text-align: center;
	line-height: 88rpx;
	font-weight: 500;
}
// 积分
 .get-point{
	 height: 100rpx;
	 padding: 33rpx 30rpx;
	 margin-top: 30rpx;
	 background: #FFFFFF;
	 color: #E1544A;
	 .core{
		 border-radius: 4rpx;
		 border: 1rpx solid #E1544A;
		 padding: 3rpx 16rpx;
		 margin-right: 20rpx;
		 font-size: 20rpx;
		 font-weight: 400;
	 }
	 .get-core{
		 font-size: 28rpx;
		 font-weight: 400;
		 color: #191919;
		 .text-colore{
			  color: #E1544A;
		 }
	 }
 }

 .virtual-hint{
   font-size: 24rpx;
   font-family: PingFangSC-Regular, PingFang SC;
   font-weight: 400;
   color: #BD9765;
   line-height: 38rpx;
 }
 /deep/.store-card{
   padding: 0 15rpx!important;
 }
</style>