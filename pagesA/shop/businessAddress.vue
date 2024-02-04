<template>
  <view class="g-business-address">
    <u-navbar class="location-class" :border-bottom="false" title="选择自提门店" title-bold title-color="#191919"
              title-size="36"
              back-icon-color="#000000">
    </u-navbar>
    <template v-if="itemList.length>0">
      <u-checkbox-group active-color="#d1b085" shape="circle" size="40">
        <view class="address-item-card u-flex" v-for="item in itemList" @click="selectAddress(item.id)">
          <view class="u-flex-1">
            <view class="merchant-content">
              <text class="name">{{ item.contactName }}</text>
              <text class="phone">{{ item.phone }}</text>
            </view>
            <view class="merchant-address">{{ item.fullAddress }}</view>
          </view>
          <u-checkbox v-model="item.isActive" @click="selectAddress(item.id)"></u-checkbox>
        </view>
      </u-checkbox-group>
    </template>
    <no-data v-else type="noAddress"></no-data>
    <view class="bottom-seat"></view>
    <view class="bottom-btn">
      <view class="config-btn" @click="confirm">确定</view>
    </view>
  </view>
</template>

<script>
import NoData from "../../components/noData";
export default {
  name: "businessAddress",
  components: {
    NoData
  },
  data(){
    return{
      itemList:[],
      selAddress:null,
      selId:'',
      from:{
        current:1,
        size:99,
      }
    }
  },
  onLoad(option){
	  
    this.selId = option.id
	this.itemList = JSON.parse(option.shopAddress)
    // this.getShopAddress()
  },
  onShow() {
  	  this.itemList.forEach(item =>{
  	    if(this.selId == item.id){
  	      item.isActive = true
  	      this.selAddress = item
  	    }
  	    
  	  })
  },
  methods: {
    confirm(){
      this.$store.commit('setSelShopAddress',this.selAddress)
	  uni.setStorageSync('sel-address',this.selAddress)
      uni.navigateBack()
    },
    // 获取商铺地址
    async getShopAddress(){
      let res = await this.$http.getShopAddress(this.from)
      this.itemList = res?.dataInfo?.records || []
    },
    selectAddress(id=null){
       if(!id){
          return
       }
       this.itemList = this.itemList.map(item =>{
         item.isActive = false
         if(id == item.id){
           item.isActive = !item.isActive
           this.selAddress = item
         }
         return item
       })
    }
  }
}
</script>

<style lang="scss" scoped>

.address-item-card{
  margin: 30rpx 30rpx 0;
  padding: 36rpx 10rpx 30rpx 30rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
  .merchant-content{
    margin-bottom: 16rpx;
    .name{
      font-size: 32rpx;
      font-weight: 500;
      color: #191919;
    }
    .phone{
      margin-left: 20rpx;
      font-size: 28rpx;
      font-weight: 400;
      color: #666666;
    }
  }
  .merchant-address{
    font-size: 30rpx;
    font-weight: 400;
    color: #191919;
    line-height: 42rpx;
    margin-right: 30rpx;
  }
}
.bottom-seat{
  height: iphone-bottom(128rpx);
}
.bottom-btn{
  position: fixed;
  width: 100vw;
  bottom: 0;
  padding: 14rpx 75rpx iphone-bottom(14rpx) 75rpx;
  background-color: #ffffff;
 
  .config-btn{
    padding: 15rpx 0;
    text-align: center;
    background: #d1b085;
    border-radius: 45rpx;

    font-size: 28rpx;
    font-weight: 600;
    color: #FFFFFF;
  }
}
</style>