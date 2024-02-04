<template>
  <view class="g-refund-describe">
      <view class="refund-card">补充描述和凭证</view>
    <view class="item-box">
      <textarea placeholder-class="text-area-card"  placeholder="补充描述，有助于商家更好的处理售后问题"></textarea>
      <!--   图片     -->
      <view class="upload-image-list image-right u-flex">
        <view class="sel-img-box" v-for="item in 1">
          <image src="@/static/image/default.jpg"></image>
          <view class="close-image">
            <image src="../../static/image/app_icon_input_del.png"></image>
          </view>
        </view>
        <view class="upload-image-btn image-right u-flex">
          <text class="iconfont icon-paizhao"></text>
          <text class="upload-image-tip">上传图片</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "refundDescribe"
}
</script>

<style lang="scss" scoped>
.g-refund-describe {
  margin-top: 20rpx;
  border-radius: 30rpx;
  padding: 0 30rpx;
  background: #ffffff;
  .refund-card {
    padding: 16rpx 0;
    font-size: 28rpx;
    color: #191919;
    font-weight: 500;
  }
}
.item-box{
    padding: 26rpx 0 30rpx;
}
textarea{
  width: 100%;
  height: 230rpx;
  padding-bottom: 30rpx ;
}
.text-area-card{
  font-size: 24rpx;
  color: #999999;
  font-weight: 400;
}
// 上传图片 列表
.upload-image-list{
  margin-right: -16rpx;
  flex-wrap: wrap;
  .sel-img-box{
    position: relative;
    margin-right: 16rpx;
    image{
      width: 200rpx;
      height: 200rpx;
      border-radius: 12rpx;
    }
    &:nth-of-type(3n){
      margin-right: 0;
    }
    .close-image{
      position: absolute;
      top: -10rpx;
      right: -10rpx;
      image{
        width: 30rpx;
        height: 30rpx;
      }
    }
  }
  .upload-image-btn{
    width: 200rpx;
    height: 200rpx;
    background: #F8F8F8;
    border: 1rpx solid #CCCCCC;
    border-radius: 14rpx;

    flex-direction: column;
    justify-content: center;
    .icon-paizhao{
      font-size: 42rpx;
    }
    .upload-image-tip{
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #666666;
      font-weight: 400;
    }
  }
}
</style>