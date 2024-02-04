<template>
  <view class="g-step u-flex">
    <block  v-for="(item,index) in tabs">
      <view class="m-chunk" :class="{'active':index<current}">
        <view class="u-flex u-relative">
          <image src="/pagesD/static/image/icon_invoice_close.png" v-if="index ==2 && [2,3].includes(current)"></image>
          <image src="/pagesD/static/image/icon_finish.png" v-else-if="index<=current || current == 4"></image>
          <image src="/pagesD/static/image/icon_undone.png" v-else></image>
          <view class="ling"></view>
          <text class="dot-name">{{getName(item,index)}}</text>
          <view class="dot-tip" v-if="index == 2 && current == 3">如有疑问及时联系客服处理</view>
        </view>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  props:{
    current:{
      type:[String,Number],
      default:3
    }
  },
  data(){
    return{
      tabs:[
        {
          name:'订单提交'
        },
        {
          name:'订单完成'
        },
        {
          name:'开票完成'
        }
      ]
    }
  },
  computed:{
    isActive(){
      return (index) =>{
        if(this.current == 3 && index >1){
          return false
        }
        return true
      }
    },
    getName(){
      return (obj=null,index=0) =>{
        if(this.current == 2 && index>1){
          return '已拒绝'
        }
        if(this.current == 3 && index>1){
          return '开票失败'
        }
        return obj.name
      }
    }
  }
}
</script>

<style scoped lang="scss">
.g-step {
  padding: 30rpx 0 100rpx;
  justify-content: center;
  .m-chunk{
    image{
      width: 40rpx;
      height: 40rpx;
    }
    .ling{
      width: 190rpx;
      height: 4rpx;

      background: #EAD8BB;
    }
    &:last-of-type{
      .ling{
        width: 0;
      }
    }
    .dot-name{
      width: 112rpx;
      position: absolute;
      left: 0;
      display: inline-block;
      top: 60rpx;
      transform: translateX(-30%);
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
    }
    .dot-tip{
      width:280rpx;
      position: absolute;
      left: 0;
      display: inline-block;
      top: 100rpx;
      transform: translateX(-42%);
      font-family: PingFangSC-Regular;
      font-size: 22rpx;
      color: #999999;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
}
.active{
  .ling{
    background: #D1B085!important;
  }
}
</style>