<template>
    <view v-if="orderDetail">
        <view class="u-skeleton">
        <u-navbar z-index="999999" :border-bottom="false" title="等待付款" title-blod title-size="36" :custom-back="interceptBack" />
          <view v-if="!isPayment">
            <view class="head-price">
              <text class="price-symbol">¥</text>
              <text class="price">{{switchMoney(orderDetail.orderActualPrice || 0)}}</text>
            </view>
            <view v-if=" orderDetail.couponAmount &&orderDetail.discountPrice && (orderDetail.couponAmount!='0'|| orderDetail.discountPrice!='0') " class="favorable-price">
              已优惠：¥{{switchMoney(orderDetail.couponAmount || orderDetail.discountPrice)}}
            </view>
            <view v-if="orderDetail.goodsOrderEndTime && countTime" class="time-count u-flex">
                <text class="remaining-time">剩余支付时间：{{timeObj['payTime'] || downTime(countTime,'payTime','time',goMyOrder)}}</text>
            </view>
            <view :class="['address',{'u-flex':!orderDetail.addressConfig}]">
                <view v-if="orderDetail && orderDetail.addressConfig" class="u-flex content">
                  <image class="user-image u-skeleton-circle" src="../static/image/app_icon_tihuoren.png"></image>
                  <view class="user-info">
                    <text class="delivery-person">提货人</text>
                    <text class="user-name">{{orderDetail.userName?orderDetail.userName:''}} {{orderDetail.userPhone?orderDetail.userPhone:''}}</text>
                  </view>
                </view>
                <view :class="['u-flex', {'u-p-b-30':orderDetail.addressConfig}]">
                  <image class="address-image u-skeleton-circle" src="../static/image/icon_address.png"></image>
                  <view class="card-left">
                      <view class="left-top ">
                          <text class="left-user-name u-skeleton-fillet">{{getName.name}}</text>
                          <text class="left-user-phone u-skeleton-fillet">{{getName.phone}}</text>
                      </view>

                      <view class="left-bottom u-skeleton-fillet">
                          {{orderDetail.detailAddress?orderDetail.detailAddress:''}}
                      </view>
                  </view>
                </view>

            </view>
            <!-- v-if="orderDetail.orderGoodsList.length" -->
            <view class="store-card">
                <!-- <view class="title u-flex u-skeleton-fillet">
                    订单商品
                </view> -->
                <shop-card :sort="true" :titleShow="false" :borderRaidus="true" :shopList="orderDetail.orderGoodsList"></shop-card>
            </view>
            <view class="order-info">
                <order-info :detail="orderDetail"></order-info>
            </view>
          </view>

          <view class="pay-wait u-flex" v-else>
              <image src="/pagesA/static/image/pay-wait.gif"></image>
              <view class="title">支付中…</view>
<!--              <view class="tip">可稍后在订单列表页查看结果</view>-->
          </view>


          <!-- <view class="u-flex address ">
              <image class="u-skeleton-circle" src="../static/image/icon_address.png"></image>
              <view class="card-left">
                  <view class="left-top ">
                      <text class="left-user-name u-skeleton-fillet">{{orderDetail.userName?orderDetail.userName:''}}</text>
                      <text class="left-user-phone u-skeleton-fillet">{{orderDetail.userPhone?orderDetail.userPhone:''}}</text>
                  </view>

                  <view class="left-bottom u-skeleton-fillet">
                      {{orderDetail.detailAddress?orderDetail.detailAddress:''}}
                  </view>
              </view>
          </view> -->
          <!-- v-if="orderDetail.orderGoodsList.length" -->
        </view>
        <view class="seat"></view>
        <view class="pay-btn" v-if="!isPayment">
            <view @click="$u.throttle(payBtn, 3000)" class="btn ">
                去支付
            </view>
        </view>
        <u-modal
          v-model="modelShow"
          content="亲 ！支付结果还没查询到，在等等吧！"
          title="提示"
          confirm-color="#FFFFFF"
         >
        </u-modal>
        <!-- <u-skeleton :loading="loading" :animation="true" bgColor="#F5F5F5"></u-skeleton> -->
    </view>
</template>

<script>
import shopCard from "@/components/shopCard.vue";
import orderInfo from "../components/orderInfo.vue";
export default {
    components: {
        shopCard,
        orderInfo
    },
    props: {

    },
    onLoad(options) {
        this.cardData = options.cardData ? JSON.parse(options.cardData) : {}
        this.groupData = options.groupData ? JSON.parse(options.groupData) : {}
        this.orderId = options.orderId?options.orderId:''
        this.isCart = parseInt(options?.isCart) || false
    },
    onShow(){
        if(this.orderId){
            this.getOrderDetail()
        }
    },
    onBackPress(){
        if(this.isPayment){
            this.interceptBack()
            return  true
        }
    },
    onHide() {
        clearTimeout(this.timer)
        this.modelShow = false
    },
    // 页面销毁
    onUnload() {
        clearTimeout(this.timer)
        this.modelShow = false
    },
    data() {
        return {
            title: "等待付款",
            orderId: '',
            orderDetail: null,
            loading: true,
            groupData: {},//平团数据
            cardData: {},//会员卡权益卡订单
            countTime: 0,
            isPayment: false,    // 支付中
            payWaitTime:2000 ,    // 每次查询间隔
            timer:null,
            modelShow:false,
            orderType:'',
            shopId:''
        }
    },
    computed:{
        getName(){
            let addresData = {}
            addresData.name=this.orderDetail?.addressConfig?.contactName ||this.orderDetail?.userName
            addresData.phone=this.orderDetail?.addressConfig?.phone ||this.orderDetail?.userPhone

            return addresData
        },

    },
    methods: {
        // 拦截返回
        interceptBack(){
            if(this.isPayment){
                this.modelShow =true
                // uni.showModal({
                //   title: '提示',
                //   content:'亲 ！支付结果还没查询到，在等等吧！',
                //   showCancel:false,
                // })
                return
            }
            uni.navigateBack();
        },
        // 倒计时取消 页面跳转
        goMyOrder(){
            this.goTo('/pagesA/mine/myOrder',false,true)
        },
        // 查询详情订单
        async getOrderDetail() {

				 try {
                let res = await this.$http.getOrderDetail({orderId:this.orderId})
                this.orderDetail = res.dataInfo?res.dataInfo:null
                if(this.orderDetail?.orderGoodsList.length){
                    this.orderType = this.orderDetail?.orderGoodsList[0].orderType
                }
                let length=0
                this.orderDetail?.orderGoodsList?.forEach(item=>{
                    if(item.orderType == 'SECKILL_ORDER'){
                        length++
                    }
                })
                console.log(length);
                if(this.orderDetail?.orderGoodsList?.length==length){
                    this.countTime = new Date(this.orderDetail.orderGoodsList[0].createDate.replace(/-/g,'/')).getTime()/1000+this.orderDetail.secondsKillOrder*1
                    console.log('this.countTime: ', this.countTime);
                }else{
                    this.countTime = new Date(this.orderDetail.orderGoodsList[0].createDate.replace(/-/g,'/')).getTime()/1000+this.orderDetail.goodsOrderEndTime*1
                }

            } catch (error) {
                console.log(error);
            }

        },
        payBtn(){
            if (!this.groupData?.type || this.cardData?.id) {
                this.goPay(this.orderId)
            }
        },
        // 普通订单去支付
        async goPay() {
            try {
                let orderPayType = (getApp().globalData.freshShopId?.includes(this.$globleData.shopId))?4:7
                const {dataInfo: res} = await this.$http.payWxOrder({
                    orderId: this.orderId,
                    orderPayType
                })
                this.payDispose(res, this.orderId)
                return res
            } catch (error) {
                console.log(error);
            }
        },
        // 支付回调
        payDispose(res, orderId) {
            const paySign = res?.paySign || ''
            // 如果获取失败 就直接跳转到订单待支付页面
            if (!paySign) {
                // 跳转待支付页面
                this.goTo('/pagesB/myCollage/index', false, true)
                return
            }
            // 成功 调起微信支付
            wx.requestPayment({
                timeStamp: res.timeStamp,
                nonceStr: res.nonceStr,
                package: res.packageValue,
                signType: res.signType,
                paySign: res.paySign,
                success: () => {
                    this.$eventPlugInCode({
                        ...this.codeParam,
                        title: '商品详情',
                        goodsName:this.orderDetail?.orderGoodsList[0]?.goodsName,
                        goodsId:this.orderDetail?.orderGoodsList[0]?.goodsId,
                        orderId: orderId || '',
                        type: this.isCart?'4':'6',
                        extendField: this.orderDetail?.orderActualPrice || 0
                    })
                    this.isPayment = true
                    this.getPayment()
                },
                fail: () => {
                    if (this.groupData?.type) {
                        this.goTo('/pagesB/myCollage/index', false, true)
                    } else {
                        this.goTo('/pagesA/mine/myOrder', false, true)
                    }
                }
            })
        },
        //状态查询
        getPayment() {
            let state = 'ORDER_UNPAID', index = 0
            let groupType = this.orderDetail?.groupActivityType || null
            let type = groupType ? 1 : 2  //1 拼团 2 普通
            this.timeOutPayWait(state,index,type)
        },
        timeOutPayWait(state, index, type){
            this.timer = setTimeout(async () => {
                if (type == 2) {
                    try{
                        const {dataInfo: res={}} = await this.$http.getOrderDetail({orderId: this.orderId})
                        state = res?.orderStatus || 'ORDER_UNPAID'
                    } catch (res){
                        if (type == 1) {
                            this.goTo('/pagesB/myCollage/index', false, true)
                        } else {
                            this.goTo('/pagesA/mine/myOrder', false, true)
                        }
                        return
                    }
                }
                index = index+1
                if (state != 'ORDER_UNPAID') {
                    this.goTo(`/pagesA/shop/paySuccess?type=${type}&orderId=${this.orderId}&oderTypeId=${this.orderId}`, false, true)
                    return
                }
                if(index>=10){
                    if (type == 1) {
                        this.goTo('/pagesB/myCollage/index',
                            false, true)
                    } else {
                        this.goTo('/pagesA/mine/myOrder', false, true)
                    }
                    return
                }
                this.timeOutPayWait(state,index,type)
            }, this.payWaitTime)
        }
    },
};
</script>
<style>
    page{
        background: #F8F8F8;
    }
</style>
<style scoped lang="scss">
    .head-price{
        text-align: center;
        color: $themeColor;
        margin-top: 25rpx;
         font-weight: bold;
        .price-symbol{
            font-size: 40rpx;
        }
        .price{
            font-size: 72rpx;
        }
    }
    .favorable-price{
        font-size: 28rpx;
        color: $themeColor;
        text-align: center;
    }
    .time-count{

        // height: 60rpx;
        margin: 16rpx auto 50rpx;
        font-size: 28rpx;
        color: #666666;
        display: flex;
        justify-content: center;
        align-items: center;
        .remaining-time{
          display: block;
          min-width: 311rpx;
          background: #F1F1F1;
          padding: 10rpx 20rpx;
          border-radius: 45rpx;
        }
    }
    .address{
        width: 690rpx;
        min-height: 196rpx;
        background: #ffffff;
        margin: 50rpx auto 0;
        border-radius: 16rpx;
        .content{
          height: 100rpx;
          margin-bottom: 20rpx;
          .user-image{
          width: 68rpx;
          height: 68rpx;
          margin-left: 30rpx;
        }
        .user-info{
           margin-left: 10rpx;
          .delivery-person{
            font-size: 32rpx;
            color: #191919;
            font-weight: 500;
          }
          .user-name{
            font-size: 28rpx;
            color: #666666;
            margin-left: 20rpx;
          }
        }
        }

        .address-image {
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
    .store-card{
      border-radius: 16rpx;
        width: 690rpx;
        background: #ffffff;
        margin: 20rpx auto;
        .title{
            width: 100%;
            //height: 80rpx;
            background: #FFFFFF;
            border-radius: 20rpx 20rpx 0px 0px;
            padding: 30rpx 30rpx 0rpx;
            font-size: 15px;
            color: #191919;
            text-align: center;
            font-weight: 500;
        }
    }

    .order-info {
      width: 690rpx;
      margin: 0 auto;
    }
    .seat{
      height: iphone-bottom(140rpx);
    }
    .pay-btn{
        position: fixed;;
        bottom:0;
        padding:18rpx 0 iphone-bottom(18rpx) 0 ;
        width: 100%;
        background: #ffffff;
        .btn{
            width: 600rpx;
            height: 40px;
            margin: 0 auto;
            background: #D1B085;
            border-radius: 45rpx;
            font-size: 28rpx;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    }
    /deep/.g-order-info{
      border-radius: 16rpx;
    }

    .pay-wait{
      margin-top: 20rpx;
      padding-bottom: 20rpx;
      background: #ffffff;
      flex-direction: column;
      image{
        width:300rpx;
        height: 300rpx;
      }
      .title{
        transform: translatey(-30rpx);
        font-family: PingFangSC-Semibold;
        font-size: 32rpx;
        color: #191919;
        font-weight: 600;
      }
      .tip{
        margin-top: 10rpx;
        font-family: PingFangSC-Regular;
        font-size: 32rpx;
        color: #666666;
        font-weight: 400;
      }
    }

</style>
