<template>
  <u-popup v-model="show" mode="center" border-radius="14" :mask-close-able="false">
    <view class="slot-content">
      <view class="popup-title">{{title}}</view>
      <view style="padding: 0 40rpx">
        <slot></slot>
      </view>
      <view class="popup-btn u-flex">
        <view class="u-flex-1 btn" @click="cancel">取消</view>
        <view class="u-flex-1 btn" @click="$u.throttle(confirm,2000)">确定</view>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  data(){
    return {
      show:false
    }
  },
  props:{
    title:{
      type:String,
      default:''
    }
  },
  methods:{
    confirm(){
      this.$emit('confirm')
    },
    cancel(){
      this.show = false
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped lang="scss">
.slot-content{
  background: #ffffff;
  width: 600rpx;
  padding-top: 40rpx;
  .popup-title{
    margin-bottom: 30rpx;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 34rpx;
    color: #191919;
    font-weight: 500;
  }
  .input-box{
    border-radius: 14rpx;
    padding: 20rpx 30rpx;
    background: #F5F5F5;
    input{
      font-family: PingFangSC-Medium;
      font-size: 30rpx;
      color: #191919;
      font-weight: 500;
    }
    .time{
      flex-shrink: 0;
      margin-left: 30rpx;
      width: 180rpx;
      height: 64rpx;
      background: #D1B085;
      border-radius: 8rpx;
      text-align: center;
      line-height: 64rpx;

      font-family: PingFangSC-Regular;
      font-size: 26rpx;
      color: #FFFFFF;
      text-align: center;
      font-weight: 400;
    }
    .no-time{
      background: #CCCCCC;
      color: #FFFFFF;
    }
  }
  .popup-btn{
    border-top: 1rpx solid rgba(0,0,0,0.14);
    margin-top: 20rpx;
    justify-content: space-around;
    height: 112rpx;
    font-family: PingFangSC-Medium;
    font-size: 34rpx;
    color: #666666;
    letter-spacing: 2rpx;
    text-align: center;
    font-weight: 500;
    line-height: 112rpx;
    .btn{
      &:nth-last-of-type(1){
        font-family: PingFangSC-Medium;
        border-left: 1rpx solid rgba(0,0,0,0.14);
        color: #D1AB88;
      }
    }
  }
}
/deep/.model-placeholder-class{
  font-family: PingFangSC-Regular;
  font-size: 30rpx;
  color: #999999;
  font-weight: 400;
}

</style>