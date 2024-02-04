<template>
  <view class="g-store-card" :style="{'border-radius':borderRaidus?'20rpx':''}" v-if="shopList.length>0">
    <view v-if="titleShow" class="store-item u-flex">
      <text class="store-name">{{getShopName}}</text>
    </view>
    <!-- @click.stop="goTo('/pagesA/shop/goodsDetail?id='+val.goodsId)" -->
    <view v-for="(val,index) in groupData" :key="index">
      <view class="u-flex shop-supplier" v-if="sort && val.supplierName && ['433733032805924864','461887105476845568'].includes(shopId)">
        <image class="shop-img" src="~@/static/image/app_icon_shop.png" />
        <view class="supplier-name">{{val.supplierName}}</view>
      </view>
    <view @click="goDeatil(item)" class="goods-item u-flex" v-for="(item) in val.info" :key="item.id">
      <image :src="imgUrl(item.goodsImg || item.goodsPictures )" style="border-radius: 8rpx"></image>
      <view class="item-right-center u-flex">
        <view class="top-center">
          <view class="u-flex">
            <text class="u-line-1 u-flex-1 title">{{item.goodsName}}</text>
          </view>
          <view class="u-flex" style="justify-content: space-between">
            <view class="tip u-line-1">商品规格：{{item.skuName ? item.skuName : '统一规格' }}</view>
            <text class="goods-num">x{{item.goodsNum || 1}}</text>
          </view>
        </view>
        <view class="bottom-center u-flex">
          <text class="goods-pic">{{(goodsPrice(item))}}</text>
          <image v-if="item.memberPrice && item.memberPrice!='0'" src="/pagesA/static/image/active/vip_icon.png" class="vip-icon"></image>
        </view>
      </view>
    </view>
    </view>
    
  </view>
</template>

<script>
export default {
    name: "ShopCard",
    props:{
        titleShow:{
            type:Boolean,
            default:true
        },
        sort:{//是否显示分类类目
            type:Boolean,
            default:false
        },
        borderRaidus:{
            type:Boolean,
            default:false
        },
        shopList:{
            type:Array,
            default:()=>[]
        },
        orderType:{
            type:String,
            default:'common'
        },
        shopType:{
            type:[String,Number],
            default:''
        },
        isGo:{
            type:Boolean,
            default:true
        }
        
    },
    data(){
        return{
            groupData:[] 
        }
    },
    watch:{
        shopList:{
            handler(newVal){
                
                this.groupData = this.groupingMethod(newVal,'supplierName')
                
            },
            immediate:true
        }
    },
    computed:{
        getShopName(){
            if(this.shopType == 1){
                return '退款商品'
            }
            if(this.shopType == 2){
                return '退货商品'
            }
            if(this.shopType == 3){
                return '换货商品'
            }
            return '退款商品'
        },
        imgUrl(){
            return function(val=''){
                if(val && val.indexOf(',')>-1 ){
                    return val.split(',')[0] 
                }else{
                    return val 
                }
            }
        },
        goodsPrice() {
            return (val) => {
                if (this.orderType == 'common') {//普通订单
                    if (val.memberPrice && val.memberPrice != '0') {
                        return `￥${this.switchMoney(val.memberPrice)}`
                    }
           
                    if ([0, 1].includes(val.paymentWay)) {
                        if(val.isFromGroup){ //如果是拼团的订单
                            return `￥${this.switchMoney(val.actualAmount)}`
                        }
                        return `￥${this.switchMoney(val.goodsPrice ||val.actualAmount)}`
                    }
                    if ([3].includes(val.paymentWay)) {
                        return `${val.integralPrice}积分`
                    }
                    let price = parseInt(val?.actualAmount || val?.goodsPrice || 0)
                    if (val?.integralPrice) {
                        if (price && val.integralPrice != '0') {
                            return `￥${this.switchMoney(price)}+${val.integralPrice}积分`
                        }
                        return `${val.integralPrice}积分`
                    }
                    if (val.goodsOrderPrice) { //发票订单的商品价格
                        return `￥${this.switchMoney(val.goodsOrderPrice)}`
                    }
                }
                if (this.orderType == 'group') { //拼团订单
                    if (val.groupActivityType == 2) {
                        return `￥${this.switchMoney(val.groupPayPrice)}`
                    }
                    if (val.groupActivityType == 1) { //普通拼团
                        return `￥${this.switchMoney(val.actualAmount)}`
                    }
                    // return `￥${this.switchMoney(val.groupPayPrice)}`
                }
            }
        }
    },
    created(){
	  
    
    },
    methods: {
        goDeatil(item){
            if(this.isGo){
                this.goTo('/pagesA/shop/goodsDetail?id='+item.goodsId)
            }else{
                return
            }
        }
    },
 
}
</script>

<style lang="scss" scoped>
// 退款商品
.g-store-card{
  padding: 0 30rpx;
  background: #ffffff;
  margin-bottom: 20rpx;
  // border-radius: 20rpx;
  .store-item {
    padding: 20rpx 0 16rpx 0;
    justify-content: space-between;
    .store-name {
      font-size: 28rpx;
      color: #191919;
      font-weight: 600;
    }
  }
  .shop-supplier{
    height: 72rpx;
    .shop-img{
      width: 40rpx;
      height: 40rpx;
    }
    .supplier-name{
      font-size: 26rpx;
      font-weight: 400;
      color: #191919;
      margin-left: 10rpx;
    }
  }
  .goods-item{
    padding: 30rpx 0rpx 22rpx;
    image{
      width:160rpx;
      height: 160rpx;
      margin-right: 30rpx;
    }
    .item-right-center{
      padding-top: 10rpx;
      flex: 1;
      height: 160rpx;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .top-center{
        width: 100%;
        .title{
          width: 1rpx;
          font-size: 28rpx;
          color: #000000;
          font-weight: 500;
        }
        .spec-title{
          margin-top: 8rpx;
          font-size: 22rpx;
          color: #999999;
          line-height: 30rpx;
        }
        .tip{
          margin-right: 30rpx;
          flex:1;
          width: 1rpx;
          margin-top: 8rpx;
          font-size: 22rpx;
          line-height: 30rpx;
          color: #999999;
        }
        .goods-num{
          margin-top: 8rpx;
          font-size: 22rpx;
          line-height: 30rpx;
          color: #999999;
        }
      }
      .bottom-center{
        width: 100%;
        .goods-pic{
          font-size: 28rpx;
          color: #000000;
          font-weight: 500;
        }
		.vip-icon{
			width: 52rpx;
			height: 28rpx;
			margin-left: 10rpx;
		}
      }
    }
  }
}
</style>