<template>
  <view  style="border-radius: 20rpx;overflow: hidden">
    <u-popup v-model="show" mode="center">
      <view style="height: 980rpx;position: relative">
        <swiper class="swiper" :current="index" indicator-dots
                indicator-color="rgba(0, 0, 0, .5)"
                indicator-active-color="#FFFFFF"
        >
          <swiper-item v-for="(item,index) in memberList">
            <view class="item-card">
              <view class="u-relative">
                <view class="card-title">{{ item.benefitName }}</view>
                <image mode="aspectFill" :src="item.remarkTopPicture || 'https://jdz.g1999.com/ghs/20210927/b008769157214dc7a8f9d4cba4b9d6e9.png'"></image>
              </view>
              <scroll-view class="scroll-view" scroll-y="true" style="height:480rpx">
                <view class="content">
                  <u-parse :html="item.remark"></u-parse>
                </view>
              </scroll-view>
            </view>
            <!-- 弹窗 -->
            <view class="btn-popup" :class="{'btn-active':item.mspageAvailable != 1}" @click="btnClick(item,index)" v-if="isClick && (propBtnShow.includes(item.benefitType) || item.mspageId)">
              <text class="btn-see">去看看</text>
            </view>
          </swiper-item>
        </swiper>
        <image class="icon-close" src="@/static/image/scheme/icon_shop_close.png" @click="closePopup"></image>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  props:{
    // 权益数据列表
    memberList:{
      type:Array,
      default:[]
    },
    // 当前弹窗
    index:{
      type:Number,
      default: 0
    },
    // 是否可点击
    isClick:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      propBtnShow:[2,5,4],    //3:购物返积分;4:积分兑换;5:家居顾问;  跳转默认页面
      show:false,
    }
  },
  methods:{
    // 关闭弹窗
    closePopup(){
      this.show = false
    },
    // 弹窗按钮点击
    btnClick(item={}){
      if(item.mspageAvailable == 1){
        return
      }
      if(item.benefitType == 2){
        this.goTo('/pagesA/myIntegral/getPoint')
        return
      }
      if(item.benefitType == 4){
        this.$toast('暂未开放,尽请期待')
        return
        this.goTo('/pagesA/myIntegral/getPoint')

      }
      if(item.benefitType == 5){
        this.goTo(`/pages/webview/webview?type=addFriend`)
        return
      }
      if(item.mspageId){
        this.goTo(`/pages/home/miniPage?id=${item.mspageId}`)
        return
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.swiper{
  position: relative;
  width: 620rpx;
  height: 900rpx;
}
swiper-item{
  height: 90% !important;
  background: #ffffff!important;
  border-radius: 20rpx!important;
  overflow: hidden;
}
.item-card{
  .card-title{
    top: 70rpx;
    left: 40rpx;
    position: absolute;
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
  image{
    width: 620rpx;
    height: 210rpx;
  }
  .title{
    padding: 50rpx 0 40rpx;
    font-size: 26rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    text-align: center;
  }
  .content{
    padding: 50rpx 40rpx 0;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 36rpx;
  }
}
.btn-popup{
  margin: 10rpx 130rpx 0;
  padding: 18rpx 0;
  text-align: center;
  border-radius: 45rpx;
  background: #999999;
  color: #ffffff;
  .btn-see{
    font-size: 26rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
  }
}
.btn-active{
  background: #FFFFFF!important;
  border: 2rpx solid #D1B085!important;
  color: #D1B085!important;
}
.icon-close{
  position: absolute;
  width: 74rpx;
  height: 74rpx;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0rpx;
}
</style>