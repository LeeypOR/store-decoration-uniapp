<template>
  <view>
    <falls :list="[123,234,12312,12435555555]">
       <template #left="{left}" >
             <view class="goods-card" v-for="(item,index) in left">
               <image mode="aspectFill" src="https://picsum.photos/339/339"></image>
               <view class="goods-name u-flex">
         <!--        <text class="tip">直营</text>-->
                 <text class="name u-line-2" data-tip='直营'>华为 mate 40 pro{{index+item}}</text>
               </view>
               <view class="m-price">
                 <text class="icon">￥</text>
                 <text class="price">1800</text>
                 <text class="lineation-price">￥123123</text>
               </view>
               <view class="m-taste">
                 <text>715条评论</text>
                 <text>100%好评</text>
               </view>
             </view>
       </template>
       <template #right="{right}">
         <view class="goods-card" v-for="(item,index) in right">
           <image mode="aspectFill" src="https://picsum.photos/339/339"></image>
           <view class="goods-name u-flex">
             <!--        <text class="tip">直营</text>-->
             <text class="name u-line-2" data-tip='直营'>华为 mate 40 pro{{index}}</text>
           </view>
           <view class="m-price">
             <text class="icon">￥</text>
             <text class="price">1800</text>
             <text class="lineation-price">￥123123</text>
           </view>
           <view class="m-taste">
             <text>715条评论</text>
             <text>100%好评</text>
           </view>
         </view>
       </template>
    </falls>
  </view>
</template>

<script>
import Falls from "../../../components/falls";
export default {
  name: "fallsGoods",
  components: {Falls}
}
</script>

<style scoped lang="scss">
.g-falls-goods {
  padding: 0 24rpx;
  columns: 2; // 默认列数
  column-gap: 24rpx; // 列间距
}

.goods-card {
  break-inside: avoid;
  margin-bottom: 24rpx;
  width: 339rpx;

  image {
    width: 339rpx;
    height: 339rpx;
  }
}

.goods-name {
  align-items: flex-start;
  margin-top: 16rpx;

  .name {
    font-size: 28rpx;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: #414141;
    line-height: 40rpx;

    &:before {
      content: attr(data-tip);
      box-sizing: border-box;
      margin-right: 8rpx;
      padding: 2rpx;
      display: inline-block;
      font-size: 22rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
      background: #0894fe;
      border-radius: 4rpx;
      line-height: 26rpx;
    }
  }
}

.m-price {
  margin-top: 8rpx;

  .icon {
    font-size: 24rpx;
    color: #ea4c48;
  }

  .price {
    margin-right: 20rpx;
    font-size: 28rpx;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #ea4c48;
  }

  .lineation-price {
    font-size: 24rpx;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-decoration: line-through;
    color: #c0c0c1;
  }
}

.m-taste {
  margin-top: 16rpx;

  text {
    font-size: 24rpx;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #999999;

    &:nth-of-type(1) {
      margin-right: 24rpx;
    }
  }
}

</style>