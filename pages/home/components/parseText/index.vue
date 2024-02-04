<template>
  <view :style="isFullStyle">
    <u-parse :html="dataInfo.remark"></u-parse>
  </view>
</template>

<script>
import mixin from "../../mixin";
export default {
  mixins:[mixin],
  computed:{
    isFullStyle(){
      if(!this.dataInfo?.fullscreen){
        return `padding:30rpx`
      }
      return `padding:0rpx`
    }
  }
}
</script>

<style scoped>

</style>