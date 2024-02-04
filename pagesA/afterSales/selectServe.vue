<template>
  <view class="g-select-serve">
    <u-navbar class="location-class" :border-bottom="false" title="选择服务" title-bold title-color="#191919"
              title-size="36" back-icon-color="#000000"></u-navbar>
     <shop-card :shopList="goodsInfo" :shopType="3"></shop-card>
    <select-server-list @serverReturn="serverReturn"></select-server-list>
  </view>
</template>

<script>
import shopCard from "../../components/shopCard";
import selectServerList from "./components/selectServerList";
export default {
  components: {shopCard,selectServerList},
  onLoad(option){
    this.goodsInfo =  JSON.parse(option.detail || '[]') || {}
  },
  data(){
    return {
      goodsInfo:[],
    }
  },
  methods:{
    serverReturn(){
      this.goTo(`/pagesA/afterSales/refund?detail=${JSON.stringify(this.goodsInfo)}&orderStatus=barter`)
    }
  }
}
</script>

<style scoped lang="scss">
  .g-select-serve{
    padding: 30rpx 30rpx 0;
  }
</style>