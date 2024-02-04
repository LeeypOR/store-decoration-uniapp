<template>
  <view>
	  <u-navbar z-index="999999" :border-bottom="false" :title="navbarTitle"
	             title-size="36" :custom-back="backPage">
	  </u-navbar>
	   <trad-success v-if="orderDetail" :title="navbarTitle" :tip="tips" :payTime="orderDetail.countDownPayTime" :type="orderDetail.groupOrderStatus"></trad-success>
	  <view class="" v-if="orderDetail">
	  <view  class="address-card">
			<!-- <view class="wait-pay">
				<view class="u-flex u-row-between u-padding-right-30">
					<view v-if=" orderDetail!= null" class="name">
						<text v-if="orderDetail.orderStatus == 'ORDER_UN_RECEIVED'">运输中...</text>
						<text v-else>
							<text v-if="!orderDetail.orderCode">{{getOrderStatus(orderDetail.orderStatus).name}}</text>
						    
						</text>
						
					</view>
					<view v-if="orderDetail.orderStatus == 'ORDER_UN_RECEIVED' " @click="goTo(`/pagesA/shop/logistic?orderId=${orderDetail.orderGoodsList[0].id}`)" class="check-logistics u-flex u-row-center">查看物流</view>
				</view>
				
				<view v-if="orderDetail.orderStatus == 'ORDER_UNPAID'" class="wait-time">
					剩余付款时间01小时59分45秒
				</view>
			
		</view> -->

      <view class="u-flex address" :style="{'margin-top':orderDetail.orderCode?'0':''}">
      <image src="../static/image/icon_address.png"></image>
			<view class="card-left">
			  <view class="left-top" v-if="!orderDetail.orderCode">
			    <text class="left-user-name">{{orderDetail.userName?orderDetail.userName:''}}</text>
			    <text class="left-user-phone">{{orderDetail.userPhone?orderDetail.userPhone:''}}</text>
			  </view>
			  <view class="shoname" v-else>
			  {{orderDetail.shopName}}
			  </view>
			  <view class="left-bottom">
			    {{orderDetail.provinceName?orderDetail.provinceName:''}}
				{{orderDetail.cityName?orderDetail.cityName:''}}
				{{orderDetail.districtName?orderDetail.districtName:''}}
				{{orderDetail.detailAddress?orderDetail.detailAddress:''}}
			  </view>
			</view>
		</view>
	  </view>
	  </view>
    <!--  成团人数  -->
    <people-num v-if="orderDetail && !['ORDER_CANCEL','GROUP_FAIL'].includes(orderDetail.groupOrderStatus)" :peopleInfo="orderDetail"></people-num>
    <!--  邀请好友  -->
    <invite-friend v-if="orderDetail.groupOrderStatus == 'GROUP_RUNNING' && orderDetail" :peopleInfo="orderDetail"></invite-friend>
	
	
    <view v-if="orderDetail" class="store-card">
		 <view class="head u-flex">
		    <text class="group">拼团</text>
			<text class="group-num">{{orderDetail.groupActivityCompleteNum}}人团</text>
		 </view>
         <shop-card orderType="group" :titleShow="false" :shopList="[orderDetail]"></shop-card>
		 
    </view>
	<!-- 规则拼团1阶段 -->
	<view class="first-phase" v-if="orderDetail && orderDetail.groupActivityType == 2">
		<view class="first-head u-flex">
			<view class="head-text">
				阶段1:{{ gradationText}}
			</view>
		</view>
		<view class="first-head u-flex u-row-between">
			<view class="pre-pay">
				预付款
			</view>
			<view class="pre-pay">
				¥ {{switchMoney(orderDetail.groupPayPrice)}}
			</view>
		</view>
	</view>
    <!-- 计算详情  -->
	<view v-if="orderDetail">
		 <goods-info v-if="orderDetail.groupOrderStatus =='GROUP_RUNNING' ||orderDetail.groupOrderStatus =='GROUP_SUCCESS'||orderDetail.groupOrderStatus =='GROUP_FAIL'" orderType="group" :detail="orderDetail"></goods-info>
	</view>
	
	
    <!-- 积分    -->
	<view class="get-point" v-if="false">
		<text class="core">积分</text>
		<text class="get-core">获得<text class="text-colore">{{orderDetail.predictIntegrate}}</text>积分</text>
	</view>
    <order-info v-if="orderDetail" :detail="orderDetail"></order-info>
    <!--  底部btn  -->

    <view v-if="orderDetail ">
      <order-btn :bntData="orderDetail" groupType="group" direction="column"></order-btn>
    </view>
	 
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
	  this.groupId = options.groupOrderId
	  
	  // this.groupType = 'group'
	  this.fetchOrderList()
  },
  computed:{
	  navbarTitle(){
      if (this.orderDetail) {
        if (this.orderDetail.groupOrderStatus == 'GROUP_RUNNING') {
          this.tips = '立即邀请好友一起来拼团吧'
          return '拼团中'
        } else if (this.orderDetail.groupOrderStatus == 'GROUP_SUCCESS') {
          this.tips = '本单拼团已成功，逛一逛继续拼团吧'
          return '拼团成功'
        } else if (this.orderDetail.groupOrderStatus == 'GROUP_FAIL') {
          this.tips = '很遗憾，拼团失败了'
          return '拼团失败'
        } else if (this.orderDetail.groupOrderStatus == 'ORDER_UNPAID') {
          this.tips = ''
          return '待付款'
        } else if (this.orderDetail.groupOrderStatus == 'ORDER_CLOSE') {
          return '交易关闭'
        } else if (this.orderDetail.groupOrderStatus == 'ORDER_CANCEL') {
          return '已取消'
        }
      }
		  
	  },
	   gradationText(){
       if (this.orderDetail) {
         if (this.orderDetail.groupOrderStatus == 'ORDER_UNPAID' || this.orderDetail.groupOrderStatus == 'ORDER_CANCEL') {
           return '进行中'
         } else {
           return '已完成'
         }
       }
	   }	
  },
  // 分享
  onShareAppMessage(e) {
   getApp().globalData.preveImage='preveImage'            
	let shareImage = ''
	if(this.orderDetail.goodsImg && this.orderDetail.goodsImg.indexOf(',')>-1 ){
		shareImage = this.orderDetail.goodsImg.split(',')[0] 
	}else{
		shareImage = this.orderDetail.goodsImg
	}
    let path = `/pagesA/shop/goodsDetail?id=${this.orderDetail.goodsId}&activeId=${this.orderDetail.groupActivityId}`
	// e.target?.dataset?.groupid
    let groupId = this.orderDetail.groupId
    
    if(groupId){
      path = path+'&groupId='+groupId
    }
    return {
      title: this.orderDetail?.goodsName,
      imageUrl: shareImage,
      path: path,
      success:()=>{
          
      }
    }
  },
  data(){
	  return{
         title:'订单详情',
		 groupId:'',
		 tips:'',
		 goodsId:'',
		 orderDetail:'',
		 groupType:'common'
	  }
  },
  methods:{
	  // 获取订单详情
	  async fetchOrderList(){
		 
		  let res = await this.$http.groupDetail({groupOrderId:this.groupId})
		  
		  this.orderDetail = res.dataInfo || ''
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
	        this.goTo('/pagesA/order/waitPay')
	      }
	    })
	  },
  }
}
</script>

<style>
  page{
    background: #F8F8F8;
  }
</style>
<style lang="scss" scoped>

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
	  //margin-top: 36rpx;
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
  //padding: 0 30rpx;
  background: #ffffff;
  margin-bottom: 18rpx;
  .head{
	  width: 690rpx;
	  height: 80rpx;
	  border-bottom: 1rpx solid #E6E6E6;
	  .group{
		  background: #FF4E00;
		  border-radius: 4rpx;
		  padding: 5rpx 12rpx;
		  font-size: 24rpx;
		  font-weight: 400;
		  color: #FFFFFF;
	  }
	  .group-num{
		  font-size: 28rpx;
		  margin-left: 10rpx;
		  font-weight: 500;
		  color: #000000;
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
 // 第一阶段
 .first-phase{
	 background: #FFFFFF;
	 width: 100%;
	 padding: 0 30rpx;
	 .first-head{
		 height: 100rpx;
		 .head-text{
			 font-size: 26rpx;
			 color: #FF4E00;
			 &:before{
				 content: '';
				 display: inline-block;
				 width: 4rpx;
				 height: 20rpx;
				 background: #FF4E00;
				 margin-right: 9rpx;
			 }
		 }
		 .pre-pay{
			 font-size: 26rpx;
			 color: #191919;
		 }
		 
	 }
 }
</style>