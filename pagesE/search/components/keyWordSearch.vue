<template>
  <view class="g-keyWord-search" v-if="keyWordList.length>0">
    <view class="u-flex title-box">
      <view class="title">{{title}}</view>
      <view class="clear" v-if="isClear">删除</view>
    </view>
    <view class="u-flex u-flex-wrap">
      <view class="search-tag" v-for="item in keyWordList" >
        {{item}}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'搜索历史'
    },
    isClear:{
      type:Boolean,
      default: false
    },
    keyWordList:{
      type:Array,
      default:[]
    }
  },
}
</script>

<style scoped lang="scss">
.g-keyWord-search {
  padding: 0 47rpx 0 27rpx;
  .title-box{
    padding: 28rpx 0 30rpx 0;
    width: 100%;
    justify-content: space-between;
    .title {
      font-size: 36rpx;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #272829;
    }
    .clear{
      font-size: 24rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #98999a;
    }
  }

  .search-tag{
    margin-bottom: 34rpx;
    padding: 10rpx 12rpx;
    display: inline-block;
    background: #f1f2f3;
    border-radius: 30rpx;

    font-size: 28rpx;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #272829;
  }
}
</style>