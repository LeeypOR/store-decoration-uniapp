<template>
  <view class="pay-transfer">
    <view class="state-name" :class="getNameState.class">
      <image :src="getNameState.img" class="img"></image>
      {{getNameState.name || ''}}
    </view>
    <view class="pay-money" v-if="isGoodsOrder=='true'">¥{{ switchMoney((orderDetail && orderDetail.orderActualPrice) || 0) }}</view>
    <view class="btn">
      <view :class="timer>0?'pay-now':'pay-now-no-active'" @click="goPay" :style={opacity:isPay?0:1}>立即支付</view>
      <view class="goBack">
        返回商家
        <button open-type="launchApp" @click="hidePage">返回商家</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      show: false,
      orderDetail: null,
      timer: 0,
      isPay:false,
      intervalId:'',
      isGoodsOrder:'false'
    }
  },
  onLoad(option) {
    console.log('option------------',option);
    
    this.orderId = option?.orderId || ""
    this.isGoodsOrder = option?.isGoodsOrder || "false"
    if (this.orderId && this.isGoodsOrder!='false') {
      this.getOrderDetail()
    }else{
      this.timer=2
    }
  },
  onUnload() {
    clearInterval(this.intervalId)
  },
  computed: {
    getNameState() {
      if (this.isPay) {
        return {
          name: '支付成功',
          class: 'success',
          img:'../static/image/icon_success.png'
        }
      }
      if (!this.orderDetail) {
        return ''
      }
      if (this.orderDetail.orderStatus == 'ORDER_UNPAID' && this.timer > 0) {
        return {
          name: '等待支付',
          class: 'await',
          img:'../static/image/icon_await.png'
        }
      }
      return {
        name: '支付超时',
        class: 'timeOut',
        img:'../static/image/icon_timeOut.png'
      }
    }
  },
  methods: {
    async getOrderDetail() {
      let {dataInfo: res} = await this.$http.getOrderDetail({orderId: this.orderId})
      this.orderDetail = res || null
      if(this.orderDetail?.orderStatus == 'ORDER_UNPAID'){
        this.timer = new Date(res?.orderGoodsList[0].createDate.replace(/-/g, '/')).getTime() / 1000 + this.orderDetail.goodsOrderEndTime * 1 - (new Date().getTime() / 1000)
        this.intervalId = setInterval(() => {
          if (this.timer <= 0) {
            clearInterval(this.intervalId)
            return
          }
          this.timer = this.timer - 1
        }, 1000)
      }else{
        this.isPay = true
      }

    },
    hidePage() {
      this.goTo('/pages/home/index', true)
    },
    // 退出小程序
    exitWx() {
      wx.exitMiniProgram({
        complete: (e) => {
          console.log(e)
        }
      })
    },
    // 普通订单去支付
    async goPay() {
      console.log(this.isPay,this.timer);
      
      if(this.isPay || this.timer<=0){
        return
      }
      try {
        let orderPayType = 4
        if((getApp().globalData.freshShopId?.includes(this.$globleData.shopId))){
          orderPayType = 4
        }
        if(this.isGoodsOrder=='true'){
          orderPayType = 7
        }
        const {dataInfo: res} = await this.$http.payWxOrder({
          orderId: this.orderId,
          orderPayType
        })
        this.payDispose(res, this.orderId)
      } catch (error) {
        console.log(error);
        
      }
    },
    // 支付回调
    payDispose(res) {
      const paySign = res?.paySign || ''
      // 如果获取失败 就直接跳转到订单待支付页面
      if (!paySign) {
        this.$toast('支付失败')
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
          this.isPay = true
        },
        fail: () => {
          this.$toast('支付失败')
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.pay-transfer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .state-name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14.5vh;
    font-family: PingFangSC-Medium;
    font-size: 32rpx;
    color: #D86A59;
    letter-spacing: 0;
    font-weight: 500;
    &.success{
      color: #57BF68;
    }
    &.await{
      color: #DFAC67;
    }
    &.timeOut{
      color: #D86A59;
    }
    .img{
      width: 36rpx;
      height: 36rpx;
      margin-right: 10rpx;
    }
  }

  .pay-money {
    margin-top: 7.4vh;
    font-family: PingFangSC-Medium;
    font-size: 72rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 500;
  }

  .btn {
    margin-top: 40vh;

    .pay-now {
      padding: 20rpx 88rpx;
      background-color: #F5F5F5;
      background-image: linear-gradient(160deg, #EEC981 18%, #DFAC67 100%);
      border-radius: 8rpx;
      color: #FFFFFF;

      &-no-active {
        padding: 20rpx 88rpx;
        background: #F5F5F5;
        color: #DDDDDD;
        border-radius: 8rpx;
      }
    }

    .goBack {
      position: relative;
      margin-top: 40rpx;
      position: relative;
      padding: 20rpx 88rpx;
      background: #F5F5F5;
      border-radius: 8rpx;
      color: #57BF68;

      button {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<style>
page {
  background: #ffffff;
}
</style>

