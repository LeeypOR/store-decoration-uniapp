<template>
  <view>
    <view class="g-refund-state" v-if="activeIndex.isShow">
      <view class='refund-card'>
        <view class="u-flex refund-card-top">
          <view>
            <view class="card-title">{{activeIndex.title}}</view>
            <view class="card-tip">{{activeIndex.tip || ''}}</view>
          </view>
          <text @click="checkLogistics" v-if="activeIndex.isShowLogistics">查看物流</text>
        </view>
        <view class="step-card u-flex">
          <view class="step-card-item u-flex" :class="{'step-card-item-active':index <= activeIndex.index,'active':index==activeIndex.index}" v-for="(item,index) in numList">
            <view class="dot" :class="'dot-'+numList.length"></view>
            <view class="name">{{item.name}}</view>
          </view>
        </view>
      </view>
    </view>
    <tradSuccess v-if="!getTitleAndTip.noShow" :title="getTitleAndTip.title" :type="getTitleAndTip.state" :tip="getTitleAndTip.tip"></tradSuccess>
  </view>

</template>

<script>
import {refundState} from "../afterSalesData";
import  tradSuccess from '../../components/tradSuccess'
export default {
  props:{
    // 退款类型
    type:{
      type:[String,Number],
      default:''
    },
    // 退款状态
    state:{
      type:String,
      default: ''
    },
    info:{
      type:Object,
      default:{}
    },
    orderId:{
      type:String,
      default:''
    }
  },
  components:{tradSuccess},
  computed:{
    // 根据状态去获取title 和tip
    getTitleAndTip(){
      if(this.type != 3){
        if(this.state == 'REFUND_FINISH' ){
          return {
            title:'退款成功啦',
            tip: '',
            state:'success'
          }
        }
        if(this.state == 'USER_CANCEL'){
          return {
            title:'退款关闭',
            tip: '',
            state:'fail'
          }
        }
      }
      if(this.state == 'EXCHANGE_GOODS_FINISH' ){
        return {
          title:'换货成功啦',
          tip: '',
          state:'success'
        }
      }
      if(this.state == 'USER_CANCEL'){
        return {
          title:'换货关闭',
          tip: '',
          state:'fail'
        }
      }
      if(this.state == 'REVIEW_FAILED'){
        return {
          title:'审核未通过',
          tip: '',
          state:'fail'
        }
      }
      return {noShow:true}
    },
    activeIndex(){
      const str = this.state+'-'+this.type
      const obj = refundState[str]
      if(obj){
        if(obj.isShowLogistics){
          obj.tip= ''
        }
        return {
          ...obj,
          isShow:true
        }
      }
      return{
        isShow:false
      }
    },
    numList(){
      if(this.type ==1) {
        return [
          {
            name: '提交申请'
          },
          {
            name: '商家处理'
          },
          {
            name: '退款成功'
          }
        ]
      }
      if(this.type ==2){
        return [
          {
            name: '提交申请'
          },
          {
            name: '商家处理'
          },
          {
            name: '寄回商品'
          },
          {
            name: '商家退款'
          },
          {
            name: '退款成功'
          }
        ]
      }
      if(this.type ==3){
        return [
          {
            name: '提交申请'
          },
          {
            name: '商家处理'
          },
          {
            name: '寄回商品'
          },
          {
            name: '商家寄回'
          },
          {
            name: '换货成功'
          }
        ]
      }
      return []
    }
  },
  data(){
    return{

    }
  },
  methods:{
    // 查看物流
    checkLogistics(){
      if(this.type == 3){
        if(['BUYER_SEND_BACK'].includes(this.state)){
          this.goTo(`/pagesA/shop/logistic?orderId=${this.orderId}&flag=1`)
        }else{
          this.goTo(`/pagesA/shop/logistic?orderId=${this.orderId}&flag=2`)
        }
        return
      }
      this.goTo(`/pagesA/shop/logistic?orderId=${this.info.id}`)
    },
  }
}
</script>

<style lang="scss" scoped>
.g-refund-state{
  margin-bottom: 20rpx;
  padding: 0 30rpx 30rpx 30rpx;
  background: #ffffff;
  .refund-card {
    padding: 30rpx;
    border-radius: 14rpx;
    &-top{
      justify-content: space-between;
      text{
        display: inline-block;
        padding: 8rpx 30rpx;
        border-radius: 45rpx;
        border: 2rpx solid #999999;

        font-size: 24rpx;
        font-weight: 400;
        color: #666666;
      }
    }
    .card-title {
      font-size: 28rpx;
      color: #191919;
      font-weight: 500;
    }
    .card-tip{
      margin-top: 8rpx;
      font-size: 24rpx;
      color: #999999;
      font-weight: 400;
    }
    .step-card{
      overflow: hidden;
      justify-content: space-between;
      margin-top: 60rpx;
      .step-card-item{
        flex-direction: column;
        .name{
          margin-top: 10rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: #999999;
        }
        .dot{
          position: relative;
          width: 20rpx;
          height: 20rpx;
          //border: 2rpx solid #D1B085;
          background: #E6E6E6;
          border-radius: 50%;
          &:before{
            position: absolute;
            content: '';
            margin: 0 7rpx;
            top: 50%;
            right: 16rpx;
            height: 2rpx;
            background: #E6E6E6;
            z-index: 100;
          }
          &-3{
            &:before{
              width: 240rpx;
            }
          }
          &-5{
            &:before{
              width: 106rpx;
            }
          }
        }
        &:nth-of-type(1){
          .dot::before{
              background: #ffffff!important;
          }
        }
        &-active {
          .name {
            color: #191919;
          }
          .dot{
            background: #FFFFFF;
            border: 2rpx solid #D1B085;
            &:before {
              background: #D1B085  !important;
            }
          }
        }
      }
      .active{
        .name{
          color: #D1B085
        }
        .dot{
          background: #D1B085  !important;
          &:before {
            background: #D1B085  !important;
          }
        }
      }
    }
  }
}

</style>