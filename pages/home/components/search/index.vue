<template>
    <view>
        <goods-search :dataInfo="dataInfo" :location="location" :scrollTop="scrollTop"></goods-search>
    </view>
</template>

<script>
import goodsSearch from "./goodsSearch";
export default {
  components:{goodsSearch},
  props:{
    dataInfo:{
      type:Object,
      default:{}
    },
    scrollTop:{
      type:[Number,String],
      default: 0
    },
    location:{
      type:Number,
      default: 10
    }
  },
}
</script>

<style scoped>

</style>