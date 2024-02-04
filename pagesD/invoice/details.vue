<template>
  <view class="g-details">
    <view class="m-head">
      <u-navbar class="location-class" :background="{background:'#00000000'}" back-icon-color="#ffffff"
                :border-bottom="false" :custom-back="backPage"></u-navbar>
      <view style="transform: translateY(-50%);">
        <view class="m-state u-flex">
          <image src="/pagesD/static/image/icon_succes.png"></image>
          <text class="state-name">{{getNameByState}}</text>
        </view>
        <view class="tip">{{getTypeName}}： ¥{{switchMoney(invoiceDetail.total || 0)}}</view>
      </view>
    </view>
     <view class="vessel-box">
      <view class="box-title">增值税电子普通发票</view>
      <view>
        <step :current="invoiceDetail.status || 0"></step>
      </view>
      <view class="details-box">
        <view class="item">
          <text class="title">发票类型</text>
          <text class="value">电子普通发票</text>
        </view>
        <view class="item">
          <text class="title">发票内容</text>
          <text class="value">{{getContentName(invoiceDetail)}}</text>
        </view>
        <view class="item">
          <text class="title">发票类型</text>
          <text class="value">{{getNameByInvoiceType(invoiceDetail)}}</text>
        </view>
        <view class="item">
          <text class="title">抬头名称</text>
          <text class="value">{{invoiceDetail.buyerName || ''}}</text>
        </view>
        <view class="item" v-if="invoiceDetail.buyerTaxNum">
          <text class="title">公司税号</text>
          <text class="value">{{invoiceDetail.buyerTaxNum || ''}}</text>
        </view>
        <view class="item">
          <text class="title">开票金额</text>
          <text class="value">¥{{switchMoney(invoiceDetail.total || '')}}</text>
        </view>
        <view class="item">
          <text class="title">开票时间</text>
          <text class="value">{{invoiceDetail.invoicingDate || ''}}</text>
        </view>
        <view class="item">
          <text class="title">申请时间</text>
          <text class="value">{{invoiceDetail.createDate || ''}}</text>
        </view>
        <view class="item" v-if="invoiceDetail.rejectReason">
          <text class="title">拒绝理由</text>
          <text class="value">{{invoiceDetail.rejectReason}}</text>
        </view>
        <view class="invoice-box" @click="seeImage" v-if="invoiceDetail.status !=3 && invoiceDetail.imageUrl">
          <view class="img-box">
            <image :src="invoiceDetail.imageUrl[0]"></image>
            <view class="img-num">共1张</view>
          </view>
          <view class="tip">点击预览发票</view>
        </view>
      </view>
    </view>
    <view class="vessel-box">
      <view class="title-line">金牌厨柜</view>
      <view>
        <shop-card :titleShow="false" :shopList="invoiceDetail.goodsList"></shop-card>
      </view>
      <view class="bottom-line">合计：¥{{switchMoney(invoiceDetail.total)}}</view>
    </view>
    <view class="btn-box u-flex" v-if="invoiceDetail.status == 2">
<!--      <text v-if="false" class="text-active">申请换开</text>-->
      <text class="text-active" @click="reapply">重新申请</text>
    </view>
<!--    <u-modal-->
<!--        v-model="exchangeShow"-->
<!--        title="请确认邮箱地址"-->
<!--        show-cancel-button-->
<!--        border-radius="20"-->
<!--        confirm-text="确认"-->
<!--        @confirm='cancelConfirm'-->
<!--        confirm-color="#FFFFFF"-->
<!--        cancel-color="#D1B085">-->
<!--      <view class="slot-content">-->
<!--        <view class="input-box">-->
<!--          <input type="text" placeholder="用来接受电子发票邮件" placeholder-class="input-class">-->
<!--        </view>-->
<!--      </view>-->
<!--    </u-modal>-->
  </view>
</template>

<script>
import ShopCard from "../../components/shopCard";
import Step from "./components/step";
export default {
  components: {Step, ShopCard},
  data(){
    return {
      orderId:'',             // 订单id
      exchangeShow:true,      // 弹窗显示
      goodsInfoList: [],
      invoiceDetail:{},       // 发票详情
    }
  },
  onLoad(option){
    this.goodsInfoList = JSON.parse(option?.goodsList || '[]')
    this.orderId = option?.orderId || ''
    if(this.orderId){
      this.getInvoiceDetail()
    }
  },
  computed:{
    getTypeName(){
      const type = this.invoiceDetail?.status
      if(type == 0){
        return '待开发票金额'
      }
      return '已开发票金额'
    },
    getNameByState(){
      const type = this.invoiceDetail?.status
      if(type == 0){
        return '待开票'
      }
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
    // 重新申请
    reapply(){
      /* 跳转到合并订单页面 */
      this.goTo(`/pagesD/invoice/invoiceOrder`)
    },
    // 查看开票详情
    async getInvoiceDetail(){
      const {dataInfo:res} = await this.$http.invoiceDetail({id:this.orderId})
      this.invoiceDetail = res || {}
    },
    // 预览图片
    seeImage(){
      getApp().globalData.preveImage = 'preveImage'
      uni.previewImage({
        urls: this.invoiceDetail?.imageUrl
      });
    }
  }
}
</script>

<style scoped lang="scss">
.m-head{
  height: 20vh;
  background: #D1B085;
  color: #ffffff;
  text-align: center;
  .m-state{
    justify-content: center;
    width: 100vw;
    .state-name{
      margin-left: 8rpx;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
    }
  }
  image{
    width: 32rpx;
    height: 32rpx;
  }
  .tip{
    margin-top: 12rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }
}
.vessel-box{
  transform: translateY(-3vh);
  background: #FFFFFF;
  border-radius: 14rpx 14rpx 0 0;
  margin-bottom: 20rpx;
  &:last-of-type{
    border-radius: 0;
  }
  .box-title{
    padding-top: 3vh;
    text-align: center;
    font-size: 30rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #191919;
  }
}
.details-box{
  padding: 0 30rpx 60rpx;
  position: relative;
  .item{
    margin-bottom: 20rpx;
    .title{
      margin-right: 30rpx;
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
    .value{
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #191919;
    }
    &:last-of-type{
      margin-bottom: 0;
    }
  }
  .invoice-box{
    position: absolute;
    right: 30rpx;
    top: 0;
    .img-box{
      position: relative;
      text-align: center;
      image{
        width: 192rpx;
        height: 108rpx;
        border-radius: 14rpx;
        vertical-align: bottom
      }
      .img-num{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 2rpx 0;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0rpx 0rpx 14rpx 14rpx;
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
    .tip{
      margin-top: 10rpx;
      text-align: center;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
  }
}
.title-line{
  padding: 25rpx 30rpx;
  font-size: 30rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #191919;
}
.bottom-line{
  padding: 20rpx 30rpx;
  text-align: right;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #191919;
}

.btn-box{
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  margin-top: 20rpx;
  padding: 24rpx 30rpx iphone-bottom(24rpx);
  justify-content: flex-end;
  text{
    width: 100%;
    padding: 20rpx 0;
    text-align: center;
    display: inline-block;
    border-radius: 45rpx;
    border: 2rpx solid #D1B085;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #D1B085;
    margin-left: 20rpx;
    //&:first-of-type{
    //  margin-left: 0;
    //}
  }
  .text-active {
    background: #D1B085;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }
}

.slot-content{
  padding: 48rpx 30rpx 30rpx;
  .input-box{
    background: #F5F5F5;
    border-radius: 14rpx;
    padding: 20rpx;
  }
}

/deep/ .u-model__footer__button {
  &:nth-last-of-type(1) {
    margin-left: 60rpx!important;
  }
}

/deep/.input-class{
  font-size: 30rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
}
</style>