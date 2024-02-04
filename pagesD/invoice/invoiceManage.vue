<template>
  <view class="u-flex g-invoice-manage">
    <u-navbar
        class="location-class"
        :background="{background:'#ffffff'}"
        title-size="36"
        title-color="#191919"
        title-bold
        :border-bottom="false" title="发票管理"
        back-icon-color="#191919" :custom-back="backPage"></u-navbar>
    <view class="m-tabs u-flex">
      <view :class="{'active':index == currentTabs}" class="u-flex-1" @click="tabsChange(index)"
            v-for="(item,index) in tabsList">{{ item.name }}
      </view>
    </view>
    <view class="u-flex-1 content">
      <scroll-view :scroll-y="true" style="height: 100%;">
        <view style="padding-top: 20rpx;height: 100%">
          <history v-show="currentTabs == 0" ref="invoiceHistory"></history>
          <rise v-show="currentTabs == 1" ref="rise" :isSel="true"></rise>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import History from "./components/history";
import rise from "./components/rise";
import InvoicePopup from "./components/invoicePopup";
export default {
  components: {History,rise,InvoicePopup},
  data(){
    return {
      title:'发票管理',
      isFirst:true,
      currentTabs: 0,
      tabsList: [
        {
          name: '开票记录'
        },
        {
          name: '抬头管理'
        }
      ],
    }
  },
  onShow() {
    // 排除第一次 每次进入刷新组件数据
    if(!this.isFirst){
      this.$nextTick(() => {
        this.$refs.invoiceHistory.orderHistoryPage()
        this.$refs.rise.getInvoiceHeadPage()
      })
    }else{
       this.isFirst = false
    }
  },
  methods:{
    tabsChange(index){
      if(this.currentTabs == index){
        return
      }
      this.currentTabs = index
    }
  }
}
</script>

<style scoped lang="scss">
.g-invoice-manage{
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.m-tabs{
  width: 100vw;
  text-align: center;
  background: #ffffff;
  padding: 24rpx 0;
  justify-content: space-around;

  font-size: 30rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #191919;
  .active{
    position: relative;
    font-weight: 600;
    &:before{
      content: '';
      position: absolute;
      bottom: -16rpx;
      left: 50%;
      transform: translateX(-50%);
      width: 40rpx;
      height: 6rpx;
      background: #D1B085;
      border-radius: 3rpx;
    }
  }
}
.content{
  width: 100vw;
  overflow: hidden;
}
</style>
