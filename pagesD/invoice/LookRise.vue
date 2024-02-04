<template>
  <view class="g-look-rise">
    <u-navbar class="location-class" :background="{background:'#ffffff'}" title-size="36" title-color="#191919" :border-bottom="false" title="开具发票"
              back-icon-color="#191919" :custom-back="backPage"></u-navbar>
    <template v-if="invoiceInfo">
      <view class="item-box u-flex-1">
        <view class="item u-flex">
          <text class="item-title">发票类型</text>
          <text class="item-content u-flex-1">电子普通发票</text>
        </view>
        <view class="item u-flex">
          <text class="item-title">发票内容</text>
					<view class="item-content u-flex-1 u-flex" style="display: flex">
						<text class="content-btn" style="margin-right: 30rpx" :class="{'active':content == 1}" @click="content=1">商品类别</text>
						<text class="content-btn" :class="{'active':content == 2}" @click="content=2">商品明细</text>
					</view>

        </view>
        <view class="item u-flex">
          <text class="item-title">收票人邮箱</text>
          <text class="item-content u-flex-1">{{invoiceInfo.email || ''}}</text>
        </view>
        <view class="item u-flex">
          <text class="item-title">抬头类型</text>
          <text class="item-content u-flex-1">{{getHeadType || ''}}</text>
        </view>
        <view class="item u-flex">
          <text class="item-title">发票抬头</text>
          <text class="item-content u-flex-1">{{invoiceInfo.buyerName || ''}}</text>
        </view>
        <template v-if="invoiceInfo.headType == 1">
          <view class="item u-flex">
            <text class="item-title">公司税号</text>
            <text class="item-content u-flex-1">{{invoiceInfo.buyerTaxNum || ''}}</text>
          </view>
          <view class="item u-flex">
            <text class="item-title">开户银行</text>
            <text class="item-content u-flex-1">{{invoiceInfo.buyerBankName || ''}}</text>
          </view>
          <view class="item u-flex">
            <text class="item-title">银行账户</text>
            <text class="item-content u-flex-1">{{invoiceInfo.buyerBankAccount || ''}}</text>
          </view>
          <view class="item u-flex">
            <text class="item-title">企业地址</text>
            <text class="item-content u-flex-1">{{invoiceInfo.buyerAddress || ''}}</text>
          </view>
        </template>
      </view>
      <view class="btn-box">
        <text @click="backChange">返回修改</text>
        <text class="btn-active" @click="submitConfig">确认提交</text>
      </view>
    </template>
    <no-data v-else></no-data>
  </view>
</template>

<script>
import NoData from "../../components/noData";
export default {
  components: {NoData},
  data(){
    return{
      invoiceId:'',
      invoiceInfo:null,
      contentType:'',
      content:1,
      orderIds:""
    }
  },
  onLoad(option){
    this.invoiceId = option?.id || ''
    this.orderIds = JSON.parse((option?.orderIds || ''))
    this.getInvoiceDea()
  },
  computed:{
    // 获取抬头类型
    getHeadType(){
      const obj = this.invoiceInfo
      if(obj?.headType == 1){
        return '企业'
      }
      return '个人'
    }
  },
  methods:{
    // 确认提交 （此处根据不同的入口进行扩展）
    async submitConfig(){
      if (this.orderIds?.length) {
        const otherParam = {
          orderGoodsIdList:this.orderIds,
          content:this.content,
          invoiceHeadId:this.invoiceId
        }
        await this.$http.invoiceIssue(otherParam)
        this.$toast('操作成功')
      }else{
        this.$store.commit('setInvoiceInfo',{invoiceHeadId:this.invoiceId,content:this.content,buyerName:this.invoiceInfo?.buyerName})
      }
      uni.navigateBack({delta: 2});

    },
    // 返回修改
    backChange(){
      uni.navigateBack();
    },
    // 获取发票信息
    async getInvoiceDea() {
      if(!this.invoiceId){
        this.$toast('数据不存在')
        return
      }
      const {dataInfo:res=null} = await this.$http.getHeadById({id:this.invoiceId})
      this.invoiceInfo = res
    },
  }
}
</script>

<style scoped lang="scss">
.g-look-rise{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.item-box{
  overflow-y: auto;
  padding-top: 20rpx;
  .item{
    background: #ffffff;
    padding-top: 54rpx;
    padding-left: 34rpx;
    .item-title{
      width: 180rpx;
      display: inline-block;
      padding-bottom: 34rpx;
      font-family: PingFangSC-Medium;
      font-size: 30rpx;
      color: #191919;
      letter-spacing: 0;
      font-weight: 500;

    }
    .item-content{
      display: inline-block;
      box-sizing: content-box;
      min-height: 40rpx;
      padding-bottom: 34rpx;
      font-family: PingFangSC-Regular;
      font-size: 30rpx;
      color: #191919;
      letter-spacing: 0;
      font-weight: 400;
      border-bottom: solid 1rpx #e6e6e6;
    }
    &:last-of-type{
      .item-content{
        border-bottom: none;
      }
    }
  }
}
.btn-box{
  text-align: right;
  background: #ffffff;
  width: 100%;
  padding: 18rpx 34rpx iphone-bottom(18rpx) 0;
  text{
    display: inline-block;
    padding: 20rpx 44rpx;
    border: 2rpx solid #D1B085;
    background: #ffffff;
    border-radius: 40rpx;

    font-family: PingFangSC-Regular;

    font-size: 28rpx;
    color: #D1B085;
    letter-spacing: 0;
    font-weight: 400;
  }
  .btn-active{
    margin-left: 20rpx;
    background: #D1B085;
    color: #FFFFFF;
    border: none;
  }
}

.content-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240rpx;
  height: 60rpx;
  border-radius: 45rpx;
  background: #F1F1F1;
  color: #191919;
  font-size: 28rpx;
  font-family: PingFang SC,PingFangSC-Semibold;
  font-weight: 400;
  &.active{
    font-weight: 600;
    border: 2rpx solid #D1B085;
    background: #FFF4E5;
    color: #D1B085;
  }
}
</style>