<template>
  <view class="refund-describe-btn">
    <view @click="btnClick(item.type)" class="btn-list" v-for="item in getBtnList">{{item.name}}</view>
    <popup title='撤销申请' content="确认撤销此申请" ref="popup" @confirm="cancelRepairs"></popup>
  </view>
</template>

<script>
import Popup from "@/pagesA/components/popup";
export default {
  name: "refundDescribeBtn",
  components: {Popup},
  props:{
    state: {
      type: String,
      default: ''
    },
    refundId:{
      type:String,
      default: ''
    },
    info:{
      type:Object,
      default:{}
    },
    repairsType:{
      type:[String,Number],
      default:1
    },
    orderId:{
      type:[String,Number],
      default:''
    }
  },
  data() {
    return {
    }
  },
  computed:{
    // 获取btn列表根据退款状态
    getBtnList() {
      if(this.repairsType == 3){
        if(['TO_AUDIT'].includes(this.state)){
           return [
             {
               name: '修改申请',
               type: 'amend'
             }
           ]
        }
      }
      if (['TO_AUDIT','REFUND_OF'].includes(this.state)) {
        return [
          {
            name: '撤销申请',
            type: 'repeal'
          }
        ]
      }
      if (['WAITING_DELIVERY','APPROVE_AUDIT'].includes(this.state)) {
        return [
          {
            name: '填写单号',
            type: 'fail'
          },
          {
            name: '撤销申请',
            type: 'repeal'
          }
        ]
      }
      if (['WAITING_GOODS','BUYER_SEND_BACK'].includes(this.state)) {
        return [
          {
            name: '查看物流',
            type: 'cheek'
          }
        ]
      }
      if (['AGAIN_DELIVER_GOODS','RECEIVED_GOODS'].includes(this.state)) {
        return [
          {
            name: '确认收货',
            type: 'confirmReceipt'
          },
          {
            name: '查看物流',
            type: 'cheek'
          }
        ]
      }
      return []
    },

  },
  methods:{
    btnClick(type){
      // 确认收货
      if(type == 'confirmReceipt'){
        this.confirmSales()
      }
      // 修改申请
      if(type == 'amend'){
         this.$emit('amend')
      }
      // 撤销申请
      if (type == 'repeal') {
        this.$refs.popup.show()
        return
      }
      // 填写单号
      if (type == 'fail') {
        if(this.repairsType == 3){
          this.goTo(`/pagesA/afterSales/fillLogistics?id=${this.refundId}&orderId=${this.orderId}&goodsInfo=${JSON.stringify([this.info])}`)
          return
        }
        this.goTo(`/pagesA/afterSales/fillLogistics?id=${this.refundId}&goodsInfo=${JSON.stringify([this.info])}`)
        return
      }
      // 查看物流
      if (type == 'cheek') {
          if(this.repairsType == 3){
            if(['BUYER_SEND_BACK'].includes(this.state)){
              this.goTo(`/pagesA/shop/logistic?orderId=${this.orderId}&flag=1`)
            }else{
              this.goTo(`/pagesA/shop/logistic?orderId=${this.orderId}&flag=2`)
            }
            return
          }
          this.goTo(`/pagesA/shop/logistic?orderId=${this.info.id}`)


        return
      }
    },
    // 取消售后订单
    async cancelRepairs() {
      if(!this.refundId){
        this.$toast('撤诉订单不存在')
        return
      }
      // 换货
      if(this.repairsType == 3){
        this.delSalesOrder()
        return
      }
      await this.$http.repairsCancel({id:this.refundId})
      this.$toast('撤销申诉成功')
      this.goTo('/pages/mine/index',true)
    },
    // 撤销申述
    async delSalesOrder(){
      await this.$http.repealSalesOrder({id:this.refundId})
      this.$emit('seeSalesReturn')
    },
    // 确认收货
    async confirmSales() {
      await this.$http.confirmSales({id:this.refundId})
      this.$emit('seeSalesReturn')
    }
  }
}
</script>

<style lang="scss" scoped>
.refund-describe-btn{
  padding: 0 30rpx;
  text-align: center;
  .btn-list{
    margin-bottom: 30rpx;
    padding: 22rpx 0;
    border: 1px solid #999999;
    border-radius: 45px;

    font-size: 32rpx;
    font-weight: 500;
    color: #666666;
    line-height: 45rpx;
    &:nth-of-type(1){
      margin-top: 50rpx;
      background: #D1B085;
      color: #FFFFFF;
      border: none;
    }
  }
}
</style>