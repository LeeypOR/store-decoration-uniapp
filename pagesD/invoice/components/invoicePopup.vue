<template>
  <u-popup v-model="show" :closeable="true"  mode="bottom" height="70%" border-radius="14">
    <view class="g-invoice-popup u-flex">
      <view class="head">常用发票抬头</view>
      <view class="u-flex-1 content">
        <scroll-view :scroll-y="true" style="height: 100%">
          <rise @getInvoice="getInvoice" :orderIds="orderIds" ref="rise"></rise>
        </scroll-view>
      </view>
    </view>
  </u-popup>
</template>
<script>
import Rise from "./rise";
export default {
  components: {Rise},
  props:{
    orderIds:{
      type:Array,
      default:null
    }
  },
  data(){
    return{
      show:false
    }
  },
  methods: {
    getInvoice(invoiceId) {
      this.$emit('popupEvent',invoiceId)
    },
    refreshInvoiceList(){
      this.$refs.rise.getInvoiceHeadPage()
    }
  }
}
</script>

<style scoped lang="scss">
  .g-invoice-popup{
    width: 100vw;
    flex-direction: column;
    height: 70vh;
    overflow: hidden;
    background: #ffffff;
    //border-radius: 14rpx;
    .head{
      text-align: center;
      padding: 50rpx 0 40rpx;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
    }
    .content{
      width: 100vw;
      overflow: hidden;
    }
    .popup-btn-box{
      margin-bottom: 50rpx;
      text-align: center;
      .btn-content{
        display: inline-block;
        padding: 20rpx 163rpx;
        background: #D1B085;
        border-radius: 45rpx;

        font-size: 28rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
      }
    }
  }
</style>