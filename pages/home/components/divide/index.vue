<template>
  <view class="g-divide" :style="getBoxStyle">
    <view :style="getLine"></view>
  </view>
</template>

<script>
import mixin from "../../mixin";
export default {
  mixins:[mixin],
  computed:{
    // 获取盒子的样式
    getBoxStyle(){
      const obj = this.dataInfo || {}
      const padding = `padding:${obj.blankHeight}rpx 0;`
      const background = `background-color:${obj?.blankColor || 'rgba(0,0,0,0)'};`
      return padding +background
    },
    // 获取线样式
    getLine(){
      const obj = this.dataInfo || {}
      if(obj?.divideType && obj.divideType == '0'){
         return ''
      }
      const margin = `margin:0 ${obj.left_rightType=='1' && 30}rpx;`
      return `border-top:1rpx ${obj.lineType} ${obj.lineColor};`+margin
    }
  }
}
</script>

<style lang="scss" scoped>
.g-divide{
  box-sizing: content-box;
}
</style>