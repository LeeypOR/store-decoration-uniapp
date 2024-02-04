<template>
  <view class="g-fillLogistics">
    <u-navbar class="location-class" :border-bottom="false" title="填写退货物流" title-bold title-color="#191919"
              title-size="36" back-icon-color="#000000"></u-navbar>
    <shop-card :shopList="goodsInfo" :shopType="orderId?3:1"></shop-card>
    <!--  退款信息  -->
    <view class="g-refund-info">
      <view class="refund-card">退款信息</view>
      <view class="refund-item u-flex">
        <view class="item-left">
          <text>物流单号</text>
          <text class="iconfont icon-required"></text>
        </view>
        <view class="item-right u-flex">
          <input placeholder="请填写" v-model="expressTrackNumber" class="u-text-right logistics-input"></input>
        </view>
      </view>
      <view class="refund-item u-flex" @click="showPopup">
        <view class="item-left">
          <text>物流公司</text>
          <text class="iconfont icon-required"></text>
        </view>
        <view class="item-right u-flex">
          <text>{{logistics || '请选择'}}</text>
          <text class="iconfont icon-arrow"></text>
        </view>
      </view>
      <view class="refund-item u-flex" v-if="!orderId">
        <view class="item-left">
          <text>联系电话</text>
          <text class="iconfont icon-required"></text>
        </view>
        <view class="item-right u-flex">
          <input placeholder="请填写联系电话" v-model="userPhone" class="u-text-right"></input>
        </view>
      </view>
    </view>
    <u-popup v-model="show"
             mode="bottom"
             closeable
             border-radius="30"
    >
      <view class="popup-card">
        <view class="popup-title">选择物流公司</view>
        <view class="top-height"></view>
        <view class="item-card u-flex" @click="chooseLogistics(index)" v-for="(item,index) in list">
          <text>{{ item.expressCompanyName }}</text>
        </view>
      </view>.
    </u-popup>
    <view class="btn-box">
      <view class="btn" @click="repairsExpress">提交</view>
    </view>
  </view>
</template>

<script>
import ShopCard from "@/components/shopCard";
import {isNull} from "../../common/verify";
export default {
  name: "fillLogistics",
  components: {ShopCard},
  data(){
    return {
      goodsInfo:[],
      id:'',
      show:false,
      logistics:'',                         // 物流
      logisticsId:'',
      list:[],
      orderId:'',
      expressTrackNumber:'',           // 物流单号
      userPhone: this.$globleData?.userData?.phoneNumber || '',                    // 用户手机号
    }
  },
  /**
   * id       退货退款使用
   * orderId  换货
   * @param option
   */
  onLoad(option){
    this.id = option?.id || ''
    this.orderId = option?.orderId || ''
    this.goodsInfo = JSON.parse(option?.goodsInfo || '[]')
    this.getCompanyList()
  },
  methods:{
    // 获取物流公司列表
    async getCompanyList(){
       const res = await this.$http.getCompanyList()
       this.list = res?.dataInfo || []
    },
    // 选择物流
    chooseLogistics(index){
      this.logistics = (this.list[index] || {}).expressCompanyName
      this.logisticsId = (this.list[index] || {}).id
      this.show = false
    },
    // 显示弹窗
    showPopup(){
      this.show = true
    },
    //用户售后物流发货订单
    async repairsExpress(){
      if(isNull(this.id)){
        this.$toast('退货商品不存在')
        return
      }
      if(isNull(this.expressTrackNumber)){
        this.$toast('请填写物流单号')
        return
      }
      if(isNull(this.logistics)){
        this.$toast('请选择退货物流')
        return
      }
      if(this.orderId){
        this.salesReturn()
        return
      }
      if(isNull(this.userPhone)){
        this.$toast('请填写手机后')
        return
      }
      const param ={
        id: this.id,
        expressTrackNumber:this.expressTrackNumber,
        expressCompanyName:this.logistics,
        userPhone:this.userPhone,
      }
      const res = await this.$http.repairsExpress(param)
      this.$toast('退货订单填写成功')
      this.goTo(`/pagesA/afterSales/refundDetails?id=${this.id}`,false,true)
    },
    // 换货
    async salesReturn(){
      const param = {
        id: this.id,
        expressTrackNumber:this.expressTrackNumber,
        expressCompanyName:this.logistics,
        expressCompanyId:this.logisticsId
      }
      const res = await this.$http.salesReturn(param)
      this.$toast('退货订单填写成功')
      this.goTo(`/pagesA/afterSales/refundDetails?id=${this.id}&orderId=${this.orderId}&goodsInfo=${JSON.stringify(this.goodsInfo[0])}`,false,true)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-fillLogistics{
  padding: 30rpx 30rpx 15rpx;
}
.g-refund-info{
  padding: 0rpx 30rpx;
  background: #FFFFFF;
  border-radius: 20rpx;
  .item-top{
    justify-content: space-between;
  }
  .refund-card{
    padding: 22rpx 0 18rpx 0;
    font-size: 28rpx;
    color: #191919;
    font-weight: 600;
  }
}
.refund-item {
  border-bottom: 2rpx solid #E6E6E6;
  padding: 30rpx 0rpx;
  justify-content: space-between;
  &:last-child{
	border-bottom :none;
  }
  .item-left {
    font-size: 28rpx;
    color: #191919;
    font-weight: 400;
    .icon-required{
      color: #E1544A;
    }
  }
  .item-right{
    font-size: 24rpx;
    color: #999999;
    font-weight: 400;
    .icon-arrow{
      font-size: 36rpx;
    }
	.logistics-input{
		width: 400rpx;
	}
    .refund-num{
      font-size: 32rpx;
      color: #E1544A;
      font-weight: 600;
    }
  }
  .item-tip{
    margin-top: 1rpx;
    font-size: 24rpx;
    color: #999999;
    font-weight: 400;
  }
}
.btn-box{
  width: 690rpx;
  padding: 15rpx 0rpx;
  background: #ffffff;
  position: fixed;
  bottom: iphone-bottom(15rpx);
  .btn{
    padding: 15rpx 0;
    text-align: center;
    background: #E8B759;
    border-radius: 45rpx;

    font-size: 28rpx;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 40rpx;
  }
}
.popup-card{
  max-height: 70vh;
  padding: 0 30rpx;
  .popup-title {
    background: #ffffff;
    text-align: center;
    width: 100%;
    position: fixed;
    top: 0rpx;
    padding: 30rpx;
    text-align: center;
    font-size: 32rpx;
    color: #191919;
    font-weight: 500;
  }
  .top-height{
    height: 100rpx;
  }
  .item-card{
    justify-content: space-between;
    border-top: 1rpx solid #e6e6e6;
    padding: 30rpx 0;

    font-size: 28rpx;
    font-weight: 400;
    color: #191919;
    line-height: 40rpx;
  }
}
</style>