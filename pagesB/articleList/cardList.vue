<template>
  <view  class="slide slide-falls">
    <view class="card-list"  v-for="item in arrList" @click="articleClick(item)">
      <view class="top-card">
        <image :src="item.articleCover" mode="widthFix"></image>
        <view class="label-card" v-if="item.articleLabel">
          <text class="icon-symbol">#</text>
          <text class="article-title">{{item.articleLabel}}</text>
        </view>
      </view>
      <view class="bottom-card">
        <view class="text-describe u-line-2">{{item.articleTitle}}</view>
        <view class="statistics u-flex" v-if="false">
          <view>
            <text>阅读</text>
            <text class="num">{{item.viewNum || 0}}</text>
          </view>
          <view class="u-flex">
            <text class="iconfont icon-icon_content_info_like_quantity"></text>
            <text class="num">{{item.likeNum || 0}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    arrList:{
      type:Array,
      default:()=> []
    }
  },
  data(){
    return {
      parentInfo:{}
    }
  },
  methods:{
    articleClick(item={}){
      if(item.articleType == 1){
        this.goTo(`/pages/webview/webview?url=${item.articleUrl}`)
        return
      }
      if(item.articleType == 2){
        if(!item.wxMaId){
          return
        }
        uni.navigateToMiniProgram({
          appId: item.wxMaId,
          path: item.articleUrl,
          fail(res) {
          }
        })
        return
      }
      if(item.articleType == 3){
        if(!item.pageId){
          return
        }
        this.goTo(`/pages/home/miniPage?id=${item.pageId}`)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.slide{
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0 10rpx;
  .card-list {
    overflow: hidden;
    margin: 30rpx 10rpx 0rpx;
    display: inline-block;
    background: #ffffff;
    width: 300rpx;
    box-sizing: content-box;
    border-radius: 14rpx;
    .top-card {
      position: relative;
      width: 100%;
      height: 100%;
      image {
        width: 100%;
        height: 300rpx;
      }
      .label-card{
        bottom: 20rpx;
        left: 20rpx;
        position: absolute;
        padding: 4rpx 10rpx;
        display: inline-block;
        max-width: 90%;

        background: #FFFFFF;
        border-radius: 4rpx;
        opacity: 0.85;
        .icon-symbol{
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #D1B085;
        }
        .article-title{
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
        }
      }
    }
    .bottom-card {
      padding: 20rpx;
      width: 100%;
      background: #ffffff;
      .text-describe{
        white-space: normal;
        font-size: 28rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 44rpx;
        height: 88rpx;
      }
      .statistics{
        margin-top: 24rpx;
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        justify-content: space-between;
        .num{
          margin-left: 10rpx;
        }
      }
    }
  }
}
.slide-falls{
  overflow-x: hidden;
  white-space: normal;
  padding: 0!important;
  .card-list{
    margin: 30rpx 10rpx 0rpx!important;
    width: 340rpx!important;
    transform: translateX(7.5rpx);
    .bottom-card{
      transform: translateY(-8rpx);
      .text-describe{
        height: auto!important;
      }
    }
  }
}

</style>