<template>
  <view class="g-activity-card" :style="[boxStyle]">
    <view class="title u-flex" :style="[titleStyle]">{{title}}</view>
    <view class="box u-flex">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    },
    styleObj:{
      type:Object,
      default: {}
    }
  },
  computed:{
    boxStyle(){
      const obj = this.styleObj || {}
      return {
        background:obj.background,
        'border-radius':obj.borderRadius,
      }
    },
    titleStyle(){
      const obj = this.styleObj || {}
      return {
        color:obj?.color,
        'font-size':obj.fontSize,
        'font-weight':obj.fontWeight,
        'background':obj.titleBackground,
        'border-radius':obj.titleBorderRadius,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.g-activity-card{
  position: relative;
  padding: 70rpx 0 40rpx 0;
  background: #3D3D4E;
  border-radius: 20rpx;
  margin-bottom: 80rpx;
  .title{
    justify-content: center;
    text-align: center;
    width: 360rpx;
    height: 80rpx;
    //padding: 16rpx 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background: #C0A27B;
    border-radius: 40rpx;
    white-space: nowrap;

    font-size: 32rpx;
    font-family: SourceHanSansCN-Heavy, SourceHanSansCN;
    font-weight: 800;
    color: #FFFFFF;
  }
  .box{
    flex-direction: column;
    width: 100%;
  }
}
</style>