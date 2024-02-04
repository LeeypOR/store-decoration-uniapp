<template>
  <view>
    <u-navbar class="location-class" :border-bottom="false" back-icon-color="#000000">
      <input type="text" v-model="keyWord" placeholder="搜索厅店/潮品/业务/手机" placeholder-class="input-placeholder">
    </u-navbar>
    <view class="u-flex tabs-list">
      <view :class="{active:tabs[currentIndex].name == item.name}"
            v-for="(item,index) in tabs"
            @click="tabsChange(index)">
        {{ item.name }}
      </view>
    </view>
    <!--  业务  -->
    <business v-show="currentIndex==0"></business>
    <!--  手机  -->
    <phone v-show="currentIndex==1"></phone>
    <!--  厅店  -->
    <room-store v-show="currentIndex==3"></room-store>
  </view>
</template>

<script>
import business from "./components/business";
import RoomStore from "./components/roomStore";
import Phone from "./components/phone";
export default {
  components: {Phone, RoomStore, business},
  data(){
    return {
      tabs:[
        {
          type:1,
          name:'业务'
        },
        {
          type:1,
          name:'手机'
        },
        {
          type:1,
          name:'潮品'
        },
        {
          type:1,
          name:'厅店'
        }
      ],
      currentIndex:1,                 // 当前选中tabs的索引
    }
  },
  methods:{
    tabsChange(index=0){
      if(this.currentIndex == index){
        return
      }
      this.currentIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
input{
  width: 452rpx;
  height: 64rpx;
  padding: 0rpx 24rpx;
  background: #f1f2f3;
  border-radius: 32rpx;
  box-sizing: border-box;
}
/deep/.input-placeholder{
  font-size: 28rpx;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #c0c0c1;
  display: flex;
  align-items: center;
  width: 452rpx;
}
.tabs-list{
  margin-top: 30rpx;
  justify-content: space-around;
  margin-bottom: 24rpx;

  font-size: 34rpx;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  color: #272829;
  .active{
    font-size: 38rpx;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: #0091ff;
  }
}
</style>
<style>
page {
  background: #ffffff;
}
</style>