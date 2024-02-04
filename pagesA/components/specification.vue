<template>
  <view class="specification">
      <view v-for="item in specificationList" class="box">
          <view class="title">{{item.categoryParamTypeName}}</view>
          <view class="u-flex item" v-for="specification in item.items">
              <view class="item-name">{{specification.categoryParamName || '--'}}</view>
              <view class="item-value">{{specification.categoryParamValue || '--'}}</view>
          </view>
      </view>
  </view>
</template>

<script>
export default {
  props:{
    specificationList:{
      type:Array,
      default: ()=> []
    }
  },
  name: "specification"
}
</script>

<style scoped lang="scss">
.specification {
  margin: 30rpx;
  border: 1px solid rgba(221,221,221,1);
  border-radius: 14rpx;

  .title{
    padding: 30rpx 30rpx 20rpx;
    border-bottom: 1px solid rgba(221,221,221,1);
  }
  .item{
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #999999;
    font-weight: 400;
    border-bottom: 1px solid rgba(221,221,221,1);
    .item-name{
      border-right: 1px solid rgba(221,221,221,1);
      padding: 18rpx 30rpx;
      width: 30%;
      word-wrap: break-word;
    }
    .item-value{
      padding: 18rpx 30rpx;
      width: 70%;
      word-wrap: break-word;
    }
  }
  .box:last-of-type{
    .item:last-of-type{
        border-bottom: none;
    }
  }
}
</style>
