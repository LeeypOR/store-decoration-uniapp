<template>
  <block>
    <u-navbar class="location-class" :border-bottom="false" title="支付结果" title-bold title-color="#191919"
              title-size="36" back-icon-color="#000000"></u-navbar>
    <view class="g-pay-success u-flex">
      <image src="../static/image/icon_payment_success.png"></image>
      <view class="pay-title">{{pointitle}}</view>
      <view v-if="orderDetail && orderDetail.orderActualPrice!=0" class="pay-tip">支付金额：{{switchMoney(orderDetail.orderActualPrice)}}元</view>
      <view class="u-m-t-20">
        <text v-if="orderDetail && (orderDetail.paymentWay==3 || orderDetail.paymentWay==2)" class="exchange-point">
          兑换积分：{{ orderDetail.integralPrice }}积分
        </text>
        <text v-if="integrateInfo && (orderDetail.paymentWay==3 || orderDetail.paymentWay==2)" class="exchange-point u-m-l-35">
          剩余{{ integrateInfo.currentIntegrate ? integrateInfo.currentIntegrate : 0 }}积分
        </text>
      </view>
	  <view class="pay-btn">
        <text class="look-order" @click="checkOrder">查看订单</text>
        <text class="back-home-page" @click="goTo('/pages/home/index',true)">返回首页</text>
      </view>
    </view>
    <view v-if="!['433733032805924864','461887105476845568'].includes(shopId)" class="banner" @click="goTo('/pages/home/index',true)">
      <image src="../static/image/pay_banna.jpg" mode="aspectFill" />
    </view>
    <!-- <shop-list></shop-list> -->
	  <view class="recommend">
		  <view class="title">
			  相似推荐
		  </view>
		  <view v-if="goodsList.length" class="u-flex u-flex-wrap u-row-between container">
			  <fallCom style="width: 100%;" :list="goodsList">
          <template #left="{left}">
            <goods-card :goodsList="left" :wrapWidth="335" :imgHeight="335" :key="index" :loading="loading" style="margin-left: 22rpx"
            ></goods-card>
          </template>
          <template #right="{right}">
            <goods-card :goodsList="right" :wrapWidth="335" :imgHeight="335" :key="index"
                        :loading="loading"
                        style="margin-right: 22rpx"
            ></goods-card>
          </template>
        </fallCom>
		  </view>
	  </view>
    <draw-popup ref="drawPopup" :count="count" :activityId="activityId"></draw-popup>
    <!-- 会员弹窗 -->
    <vipPopup :refresh="refresh" :type="4"></vipPopup>
		<view
      :class="maskShow?'mask-show':'mask-hidden'"
      @tap="maskClick"
      :style="[maskStyle,zoomStyle]">
      <view class="mask-wrap" :style="[maskStyle]">
        <image @tap.stop class="mask-image" :show-menu-by-longpress="true" src="https://jdz.g1999.com/ghs/20211217/16ea2d3be7cd4068a784b36378fe02a0.png"></image>
      </view>
    </view>
  </block>
</template>

<script>
import drawPopup from '../drawPopup/index'
import goodsCard from "../../components/goodsCard.vue";
import fallCom from "../components/falls.vue";
import vipPopup from "../../components/vipPopup";
export default {
    name: "PaySuccess",
    components: {goodsCard,drawPopup,fallCom,vipPopup},
    data(){
	  return{
	    title:'支付成功',
		  goodsList:[],
		  type:'',
		  from:{
		    current: 1,
		    size: 3,
		    goodsGroupId: ''
		  },
		  orderId:'',     // 订单id
		  count:0 ,       //  获取抽奖次数
		  activityId:""   ,// 抽奖活动id
		  orderDetail:null, //支付成功后订单详情
		  oderTypeId:"",    //订单列表中的订单id
		  integrateInfo:null,//积分,
            maskShow:false,
            zoomStyle: {
                transform: ''
            },
            feeType: '',
            refresh: '',
	  }
    },
    onShow(){
        this.refresh = new Date().getTime().toString()
    },
    onLoad(option){
        this.feeType = option?.feeType || ''
	  this.type = option.type
        this.orderId = option?.orderId || ''
	  this.oderTypeId = option?.oderTypeId || ''
	  this.getGoodsList()
	  if(this.oderTypeId && this.type!=1){
		  this.fetchOrderList()
	  }
	  this.getPoint()
        if(this.orderId){
            this.getNumberByOrderId()
        }
    },
    computed:{
        pointitle(){
            if(this.orderDetail?.paymentWay==3){
                return '兑换成功！'
            }else{
                return '支付成功！'
            }	
        },
        maskStyle() {
            let style = {};
            style.backgroundColor = "rgba(0, 0, 0, 0.6)";
            if(!this.maskShow) style.zIndex = -1
            style.transition = `all .3s ease-in-out`;
            // 判断用户传递的对象是否为空，不为空就进行合并
            return style;
        }
    },
    methods: {
	  // 获取积分
	  async getPoint(){
            try {
                let param = {
                    id: this.$globleData.userData.id
                }
                const res = await this.$http.getIntegrateInfo(param)
                if(res.returnCode == 1000){
                    this.integrateInfo = res?.dataInfo || {}
                }else{
                    this.integrateInfo = null
              
                }
            } catch (error) {
                console.log(error);
            }
	  },
	  // 获取订单详情
	  async fetchOrderList(){
            let res = await this.$http.getOrderDetail({orderId:this.oderTypeId})

            this.orderDetail = res.dataInfo?res.dataInfo:null
            if(this.orderDetail){
                // if(this.orderDetail?.paymentWay!=2 &&this.orderDetail?.paymentWay!=3 && this.orderDetail?.orderActualPrice==0 && this.feeType !='ZP' && !getApp().globalData.freshShopId.includes(this.$globleData.shopId)){
                //     this.maskShow = true
                // }
                
            }
	  },
        // 获取商品
        async getGoodsList() {
            this.from.buyerType=this.$globleData?.buyType || ''
            let res = await this.$http.goodsList(this.from, false)
      
            this.goodsList = res.dataInfo.records
        },
        checkOrder() {
            if (this.type == '1') {
                this.goTo('/pagesB/myCollage/index')
            }
            if (this.type == '2') {
                this.goTo('/pagesA/mine/myOrder')
            }
        },
        // 弹窗获取次数
        async getNumberByOrderId(){

            const res = await this.$http.getNumberByOrderId({orderId:this.orderId})
            this.count =res.dataInfo? (res.dataInfo[0]?.count ||0):0
            this.activityId =res.dataInfo? res?.dataInfo[0]?.activityId :''
            if(this.count){
                this.$refs.drawPopup.show = true
            }
      
        },
        maskClick(){
            this.maskShow = false
            if(!this.maskShow){
                this.zoomStyle.transform = this.scale;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.g-pay-success{
    margin-bottom: 20rpx;
    background: #FFFFFF;
    width: 100vw;
    height: 42vh;
    flex-direction: column;
    justify-content: center;
    image{
      width: 300rpx;
      height: 300rpx;
    }
  .pay-title{
    font-size: 32rpx;
    color: #191919;
    font-weight: 600;
  }
  .pay-tip{
    margin-top: 10rpx;
    font-size: 32rpx;
    color: #191919;
    font-weight: 400;
  }
  .exchange-point{
	 font-size: 32rpx;
	 font-weight: 400;
	 color: #191919 
  }
  
  .pay-btn{
    margin-top: 80rpx;
    font-size: 28rpx;
    color: #FFFFFF;
    text-align: center;
    font-weight: 600;
    text{
      padding: 15rpx 69rpx;
      border-radius: 45rpx;
    }
    .look-order{
      background: #434343;
      margin-right: 30rpx;
    }
    .back-home-page{
      background: #D1B085;
    }
  }
}
.recommend{
	background:#FFFFFF;
	width: 100%;
  padding-bottom: iphone-bottom();
	.title{
		height: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.container{
		width: 100vw;
		padding: 0 20rpx;
	}
}
  .banner{
    width: 100%;
    height: 520rpx;
    margin-bottom: 20rpx;
		image{
			width: 100%;
			height: 100%;
		}
  }
 .mask-wrap {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99999999;
	width: 100vw;
	height: 100vh;
	transition: transform 0.3s;
	background: rgba(0,0,0,.5);
	.mask-image {
		width: 630rpx;
		height: 710rpx;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
        
}
	.mask-show {
		opacity: 1;
		display: block;
	}
	.mask-hidden{
		opacity: 0;
		display: none;
	}
</style>
<style>
page{
  background: #f8f8f8;;
}
</style>
