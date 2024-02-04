<template>
  <view class="g-history">
    <block v-if="invoiceList.length>0">
      <view class="m-box" v-for="item in invoiceList">
        <view class="head-title u-flex">
          <text class="title">金牌厨柜</text>
          <text class="state" :class="'state-'+item.status">{{getNameByState(item.status)}}</text>
        </view>
        <view class="shop-list-box">
          <shop-card :titleShow="false" :shopList="item.goodsList"></shop-card>
        </view>
        <view class="described-box u-flex">
          <view>
            <view class="type-name">电子普通发票-{{getContentName(item)}}-{{getNameByInvoiceType(item)}}</view>
            <view class="tip">{{item.buyerName}} {{getNameByInvoiceType(item)}}</view>
          </view>
          <view class="rise-money">￥{{switchMoney(item.total)}}</view>
        </view>
        <view class="btn-box u-flex">
          <!--<text>申请换开</text>-->
          <text @click="seeDetail(item)">查看详情</text>
        </view>
      </view>
    </block>
    <no-data v-else></no-data>
  </view>
</template>

<script>
import ShopCard from "../../../components/shopCard";
import NoData from "../../../components/noData";
export default {
  components: {NoData, ShopCard},
  data(){
    return{
      current:1,
      size:30,
      invoiceList:[],                       // 发票列表
      goodsInfoList:[]
    }
  },
  created(){
    this.orderHistoryPage()
  },
  computed:{
    getNameByState(){
      return(type)=>{
        if(type == 1){
          return '开票中'
        }
        if(type == 2){
          return '已拒绝'
        }
        if(type == 3){
          return '开票失败'
        }
        if(type == 4){
          return '开票成功'
        }
      }
    },
    getContentName(){
      return item =>{
        if(item.content == 1){
          return '商品类别'
        }
        if(item.content == 2){
          return '商品详情'
        }
      }
    },
    getNameByInvoiceType(){
      return item =>{
        if(item.headType == 1){
          return '企业'
        }
        if(item.headType == 2){
          return '个人'
        }
      }
    }
  },
  methods:{
    // 查看详情
    seeDetail(obj=""){
      if(!obj){
        this.$toast('发票不存在')
        return
      }
      this.goTo(`/pagesD/invoice/details?orderId=${obj?.id}&goodsList=${JSON.stringify(obj?.goodsList || [])}`)
    },
    // 查询发票历史
    async orderHistoryPage(){
      const {dataInfo:res} = await this.$http.orderHistoryPage({current:this.current, size:this.size})
      this.invoiceList = res?.records || []
    }
  }
}
</script>

<style scoped lang="scss">
.m-box{
  margin-bottom: 20rpx;
  background: #ffffff;
  padding: 0 30rpx;
  .head-title {
    padding: 25rpx 0;
    justify-content: space-between;
    .title {
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #191919;
    }
    .state {
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      &-1{
        color: #D1B085;
      }
      &-2,&-3{
        color:#EC4545;
      }
    }
  }
  .described-box{
    padding: 20rpx;
    background: #F5F5F5;
    border-radius: 14rpx;
    justify-content: space-between;
    .type-name{
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
    }
    .tip{
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
    .rise-money{
      margin-left: 10rpx;
      font-size: 36rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
    }
  }
}
.shop-list-box{
  margin: 0 -30rpx;
}
.btn-box{
  margin-top: 20rpx;
  padding: 18rpx 0 40rpx;
  justify-content: flex-end;
  text{
    display: inline-block;
    padding: 15rpx 44rpx;
    border-radius: 45rpx;
    border: 2rpx solid #D1B085;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #D1B085;
    margin-left: 20rpx;
    &:first-of-type{
      margin-left: 0;
    }
    &:last-of-type{
      background: #D1B085;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
}
</style>