<template>
  <view>
    <view @click="goShopDetail(item)" class="goods-card" :style="{'width':wrapWidth+'rpx'}" v-for="item in goodsList">
      <image :src="item.goodsPicture" :style="{'height':imgHeight+'rpx'}"></image>
      <view class="goods-detail">
        <text class="salePrice">¥{{ switchMoney(item.salePrice) ? switchMoney(item.salePrice) : '' }}</text>
        <text v-if="item.marketPrice!='0'" class="marketPrice">¥{{ switchMoney(item.marketPrice) ? switchMoney(item.marketPrice) : '' }}</text>
        <view class="goods-name u-line-2">{{ item.goodsName }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "GoodsCard",
  props:{
	  wrapWidth:{
		  type:Number,
		  default:360
	  },
	  imgHeight:{
		  type:Number,
		  default:320
	  },
	  goodsList:{
	    type:Array,
      default:()=>[]
    }
  },
  created(){

  },
  data(){
	  return{

	  }
  },
  methods:{
    goShopDetail(item){
      this.goTo('/pagesA/shop/goodsDetail?id='+item.id,false,true)
    }
  }
}

</script>

<style lang="scss" scoped>
.goods-card {
  border-radius: 14rpx;
  overflow: hidden;
  //min-height: 542rpx;
  margin-bottom: 20rpx;

  image {
    width: 100%;
  }

  .goods-detail {
    padding: 30rpx 12rpx 20rpx;
    text-align: center;

    .salePrice {
      font-size: 28rpx;
      font-weight: 500;
      color: #191919;
    }

    .marketPrice {
      margin-left: 20rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #999999;
      text-decoration: line-through;
    }

    .goods-name {
      white-space: normal;
      margin-top: 14rpx;
      font-size: 24rpx;
      color: #191919;

    }
  }
}
</style>