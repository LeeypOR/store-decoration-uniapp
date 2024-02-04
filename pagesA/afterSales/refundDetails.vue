<template>
  <view>
    <u-navbar class="location-class" :border-bottom="false" title="售后详情" title-bold title-color="#191919"
              title-size="36" back-icon-color="#000000"></u-navbar>
    <view style="padding-top: 20rpx">
      <!--  商家处理流程  -->
      <refund-state :type="repairsType" :orderId="orderId" :state="repairsState" :info="goodsInfo"></refund-state>
      <!--  商家处理状态  -->
      <refund-state-describe :type="repairsType" :state="repairsState" :info="goodsInfo" :dataInfo="dataInfo"></refund-state-describe>
      <!--  退款地址  -->
      <refundAddress :address-info="dataInfo" :repairsType="repairsType" :state="repairsState"></refundAddress>
      <!--  退货商品  -->
      <shop-card :titleShow="titleShow" :shopList="[goodsInfo]" :shopType="repairsType"></shop-card>
      <!--  操作选项  -->
      <refund-describe-btn
          :refundId='id'
          :repairsType="repairsType"
          :orderId="orderId"
          @amend="amend"
          @seeSalesReturn="seeSalesReturn"
          :state="repairsState"
          :info="goodsInfo">
      </refund-describe-btn>
    </view>
  </view>
</template>

<script>
import ShopCard from "@/components/shopCard";
import RefundState from "./components/refundState";
import RefundStateDescribe from "./components/refundStateDescribe";
import RefundDescribeBtn from "./components/refundDescribeBtn";
import RefundAddress from "./components/refundAddress"
export default {
  name: "refundDetail",
  components: {RefundAddress,RefundDescribeBtn, RefundStateDescribe, RefundState, ShopCard},
  data(){
	  return{
	    title:'退款详情',
	    dataInfo:{},
		  titleShow:true,
      id:'',                  // 售后od
      orderId:'',             // 订单id 换货使用
      goodsInfo:{},           // 退款商品
      repairsType:'',         // 退款类型
      repairsState:''         // 退款状态
	  }
  },
  /**
   *  goodSInfo // 退货商品信息
   *  id        // 退货id
   *  orderId   // 订单id
   */
  onLoad(option){
    this.orderId = option?.orderId || ''
    this.id = option?.id || ''
    this.goodsInfo  = (option?.goodsInfo && JSON.parse(option.goodsInfo)) || {}
  },
  onShow(){
    if(this.orderId){
      this.seeSalesReturn()
      return
    }
    this.getRepairs()
  },
  methods:{
    // 查询售后订单详情
    async getRepairs(){
      const res = await this.$http.getRepairs({id:this.id})
      this.dataInfo = res?.dataInfo || {}
      this.goodsInfo = res?.dataInfo?.goodsOrder || {}
      this.repairsType = res?.dataInfo.repairsType || ''
      this.repairsState = res?.dataInfo.returnGoodsStatus || ''
    },
    // 换货详情
    async seeSalesReturn(){
      const res = await this.$http.seeSalesReturn({orderGoodsId:this.orderId})
      this.dataInfo = {
        provinceName:res?.dataInfo?.detailAddress || '',
        goodsUserName:res?.dataInfo?.goodsUserName || '',
        merchantsPhone:res?.dataInfo?.merchantsPhone || ''
      }
      this.goodsInfo = this?.goodsInfo || {}
      const length = res?.dataInfo?.orderAuditList?.length || 0
      if(length){
        this.repairsType = 3
        this.repairsState = res?.dataInfo?.orderAuditList[length-1]?.swapGoodsStatus || ''
      }
    },
    // 修改申请
    amend(){
      this.goTo(`/pagesA/afterSales/refund?detail=${JSON.stringify([this.goodsInfo])}&orderStatus=barter&orderId=${this.orderId}&id=${this.id}`)
    },
  }
}
</script>


<style lang="scss" scoped>

</style>