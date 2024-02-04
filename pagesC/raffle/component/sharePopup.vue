<template>
  <view>
    <u-popup v-model="show" mode="bottom" safe-area-inset-bottom>
      <view class="popup-box">
        <view class="titel">分享到</view>
        <view class="u-flex" style="justify-content: center">
          <view class="u-flex share-box" v-for="item in shareList">
            <image class="share-img" :src="item.image"></image>
            <view class="share-name">{{item.title}}</view>
            <button class="share-btn" open-type="share" v-if="item.title == '微信好友'"></button>
          </view>
        </view>
        <view class="btn-close" @click="show=false">取消</view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      shareList:[
        {
          image:'/pagesC/static/raffle/share_wxhy.png',
          title:'微信好友'
        },
        {
          image:'/pagesC/static/raffle/share_pyq.png',
          title:'朋友圈'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-box{
  padding: 30rpx 30rpx 0;
  .title{
    font-size: 24rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #191919;
  }
  .share-box{
    flex-direction: column;
    margin-right: 80rpx;
    position: relative;
    .share-img{
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
    }
    .share-name{
      transform: translateY(-16rpx);
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
    &:nth-last-of-type(1){
      margin-right: 0rpx;
    }
  }
  .btn-close{
    margin-top: 40rpx;
    width: 100vw;
    transform: translateX(-30rpx);
    border-top: 1px solid rgba(0,0,0,.3);
    text-align: center;
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #191509;
    padding: 24rpx 0;
  }
}
.share-btn{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
}
</style>