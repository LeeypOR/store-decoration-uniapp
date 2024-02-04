<template>
  <view style="background: #FFFFFF;padding-top: 1rpx">
    <view id="recommend" class="more-shop">- 更多精选商品 -</view>
    <view class="u-flex u-flex-wrap u-p-l-30 u-p-r-30" style="background: #FFFFFF">
      <view class="shop-item-card" v-for="item in goodsList.length > 0 ? goodsList : hotShop">
        <image :src="item.goodsImg"></image>
        <view class="item-card-content u-flex">
          <view class="card-content-title u-line-2">{{ item.goodsName }}</view>
          <view class="u-flex u-row-between u-m-t-4" style="width: 100%">
            <text class="shop-number">¥{{ item.goodsPrice }}</text>
            <image style="width: 60rpx;height: 60rpx" src="@/static/image/shop/icon_gwc.png"></image>
          </view>
        </view>
      </view>
    </view>
<!--    <see-more></see-more>-->
  </view>
</template>

<script>
// import seeMore from "../pagesA/shop/components/seeMore";
export default {
  props:{
      goodsList:{
        type:Array,
        default:[]
      }
  },
  // components:{seeMore},
  data(){
    return{
      hotShop: [
        {
          goodsImg: 'https://testsd.cicd.vpclub.cn/ghs/20210506/2021050618412435.png',
          goodsName: '料理颜值生活适盒涮烤一体锅',
          goodsPrice: '429'
        },
        {
          goodsImg: 'https://testsd.cicd.vpclub.cn/ghs/20210506/2021050618405230.png',
          goodsName: '高颜值早餐神器适盒三明治机',
          goodsPrice: '698'
        },
        {
          goodsImg: 'https://testsd.cicd.vpclub.cn/ghs/20210506/2021050618435810.png',
          goodsName: '谷晶简约便当盒',
          goodsPrice: '75.90'
        },
        {
          goodsImg: 'https://testsd.cicd.vpclub.cn/ghs/20210506/2021050618425093.png',
          goodsName: 'SIRONI罗密欧高款单层竹纤维便当盒',
          goodsPrice: '59'
        }
      ]
    }
  },
  created(){}
}
</script>

<style lang="scss" scoped>
.more-shop{
  margin-top: 25rpx;
  margin-bottom: 30rpx;
  text-align: center;
  font-size: 24rpx;
  font-weight: 600;
  color: #191919;
}
// 商品item
.shop-item-card{
  width: 335rpx;
  background: #FAFAFA;
  border-radius: 14rpx;
  margin-right: 18rpx;
  margin-bottom: 18rpx;
  &:nth-of-type(2n){
    margin-right: 0;
  }
  .item-card-content{
    padding: 20rpx 0rpx 0rpx 20rpx;
    flex-direction: column;
    align-items: flex-start;
    .card-content-title{
      height: 56rpx;
      font-size: 20rpx;
      font-weight: 500;
      color: #3D3D3D;
    }
    .shop-number{
      font-size: 24rpx;
      font-weight: 500;
      color: #D3392E;
    }
  }
  image{
    width: 100%;
    height: 218rpx;
    border-radius: 14rpx 14rpx 0rpx 0rpx;
  }
}

</style>