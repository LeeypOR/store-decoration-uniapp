<template>
  <view  :class="['slide',`slide-${getDataInfo.templateType}`]">
    <view class="card-list" v-if="item.jumpPageId" :style="styleType"  v-for="(item, index) in arrList" :key="index" @click="jumpToPage(item)">
      <view class="top-card" :style="imgRadius">
        <image :src="item.imgUrl" :mode="getImageMode"></image>
        <view class="label-card" v-if="getDataInfo.labelShow && item.label">
          <text class="icon-symbol">#</text>
          <text class="article-title">{{item.label}}</text>
        </view>
      </view>
      <view class="bottom-card">
        <view class="text-describe u-line-2" :style="{'font-weight':getDataInfo.textThickness}">{{item.jumpPageName}}</view>
        <view class="statistics u-flex" v-if="false && (getDataInfo.praiseShow || getDataInfo.readShow)">
          <view :style="{visibility:getDataInfo.readShow　|| 'hidden'}">
            <text>阅读</text>
            <text class="num">{{item.readNum}}</text>
          </view>
          <view :style="{visibility:getDataInfo.praiseShow　|| 'hidden'}">
            <text class="iconfont icon-app_icon_shoucang"></text>
            <text class="num">{{item.praiseNum}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from "../../mixin";
export default {
  mixins:[mixin],
  props:{
    arrList:{
      type:Array,
      default:()=> []
    }
  },
  data(){
    return {
      moduleName:'内容资讯',
      parentInfo:{}
    }
  },
  computed:{
    getImageMode(){
      const type = this.parentInfo?.templateType
      if(type =='falls'){
        return 'widthFix'
      }
      return 'aspectFill'
    },
    styleType(){
      const type = this.parentInfo?.styleType
      const angleType = this.parentInfo?.angleType
      let style = ''
      // if(type=='none'){
      //     return ''
      // }
      if(type == 'border'){
        style =  `border: 1rpx solid rgb(230, 230, 230);`
      }
      if(type == 'shadow'){
        style = 'box-shadow: rgba(0, 0, 0, 0.06) 0px 4rpx 8rpx 0px;'
      }
      if(angleType == '1'){
        style +='border-radius: 14rpx;'
      }
      return style
    },
    imgRadius(){
      const angleType = this.parentInfo?.angleType
      let style = ''
      if(angleType == '1'){
        style +='border-radius:14rpx 14rpx 0 0;'
      }
      return style
    },
    getDataInfo(){
      let parent = this.$parent?.dataInfo || null
      if(!parent){
        parent = this.$parent?.$parent?.dataInfo || null
      }
      if(!parent){
        parent = this.$parent?.$parent?.$parent?.dataInfo || null
      }
      this.parentInfo = parent
      return parent
    }
  }
}
</script>

<style lang='scss' scoped>
.slide{
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0 10rpx 20rpx;
  .card-list {
    overflow: hidden;
    margin: 30rpx 10rpx 0rpx;
    display: inline-block;
    background: #ffffff;
    width: 300rpx;
    box-sizing: content-box;
    vertical-align: middle;
    .top-card {
      overflow: hidden;
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
        mix-width: 90%;
        position: absolute;
        padding: 4rpx 10rpx;
        display: inline-block;

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
        height: 88rpx
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
  padding: 0 0 20rpx!important;
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
