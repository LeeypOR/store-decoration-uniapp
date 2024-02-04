<template>
  <view class="g-manage-address">
    <u-navbar 
        :border-bottom="false"
        class="location-class" 
        title="收货地址" 
        title-bold 
        title-color="#191919"
        title-size="36"
        back-icon-color="#000000">
    </u-navbar>
    <!--  我的地址  -->
    <template v-if="addressList.length >0">
      <view class="address-card u-flex" v-for="(item,index) in addressList" :key="index">
        <view class="card-left" @click="selAddress(item)">
          <view class="left-top">
            <text class="left-user-name">{{ item.userName }}</text>
            <text class="left-user-phone">{{ item.userPhone }}</text>
          </view>
          <view class="left-bottom">
            <text class="address-default" v-if="item.defaultAddress == 1">默认</text>
            <text class="address-info">
              {{ `${item.provinceName} ${item.cityName} ${item.districtName} ${item.detailAddress}` }}
            </text>
          </view>
        </view>
        <text class="card-right iconfont icon-editor"
              @click="goTo(`/pagesA/shop/addAddress?isEdit=${true}&addressInfo=${JSON.stringify(item)}`)"></text>
      </view>
    </template>
    <no-data v-else type="noAddress"></no-data>

	<view class="bnt-bottom">
		<view class="add-address-btn u-flex" @click="goTo('/pagesA/shop/addAddress')">
            <text class="iconfont icon-jia"></text>
            新建收货地址
		</view>
	</view>
  </view>
</template>

<script>
let backAdd = ['/pagesA/order/orderCenter','/pagesA/afterSales/refund']
import NoData from "../../components/noData";
export default {
  components: {
    NoData
  },
  data(){
    return {
      title:'地址管理',
      addressList:[]     //地址列表
    }
  },
  onShow(){
    this.getAddressList()
  },
  methods:{
    // 设置地址
    selAddress(item){
      const  pages = getCurrentPages();
      let upPage = pages[pages.length-2] || {}
      let back = false
      for(let item of backAdd){
        if(item.includes( (upPage?.route || ''))){
          back = true
        }
      }
      if(!back) return
      this.$store.commit('setSelAddress',item)
      this.goBackPage()
    },
    async getAddressList(){
      try {
        const res = await this.$http.getAddressList()
      this.addressList = res.dataInfo
      } catch (error) {
        console.log(error);
        this.addressList = []
      }
      
    }
  }
}
</script>
<style>
  page{
    background-color: #FFFFFF;
  }
</style>
<style lang="scss" scoped>
// 收货地址
.address-card{
  justify-content: space-between;
  padding: 36rpx 30rpx;
  background: #FFFFFF;
  border-bottom: 1rpx solid #eeeeee;
  .card-left {
    flex: 1;
    .left-top {
      margin-bottom: 16rpx;
      .left-user-name{
        display: inline-block;
        margin-right: 40rpx;
        font-size: 32rpx;
        color: #191919;
        font-weight: 500;
      }
      .left-user-phone{
        font-family: PingFangSC-Regular;
        font-size: 28rpx;
        color: #666666;
        font-weight: 400;
      }
    }
    .left-bottom{
      font-size: 30rpx;
      color: #191919;
      font-weight: 400;
      line-height: 48rpx;
      .address-default{
        margin-right: 10rpx;
        padding: 2rpx 16rpx;
        display: inline-block;
        background: rgba(255,78,0,0.40);

        border-radius: 2px;
        font-size: 24rpx;
        color: #FF4E00;
        line-height: 36rpx;
      }
      .address-info{
        font-weight: 400;
      }
    }
  }
  .card-right {
    margin-left: 70rpx;
    font-size: 36rpx;
    color: #000000;
    margin-right: 10rpx;
  }
}
.bnt-bottom{
	width: 100%;
	height: 176rpx;
	background: #FFFFFF;
	position: fixed;
	bottom: 0;
}
.add-address-btn{
  width: 690rpx;
  margin: 0 auto;
  margin-top: 20rpx;
  padding: 22rpx 0;
  background: #d1b085;
  border-radius: 45rpx;
  justify-content: center;
  font-size: 32rpx;
  color: #FFFFFF;
  font-weight: 500;
  text-align: center;
}
.icon-jia{
  color: #FFFFFF;
  font-size: 42rpx;
}
</style>