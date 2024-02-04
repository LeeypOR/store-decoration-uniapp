<template>
  <!-- 粉丝会员权益 -->
  <view class="member-card">
    <view class="member-card-title u-flex">
      <image class="vip-card-img" src="@/static/image/vipCenter/vip_left.png"></image>
      <text class="member-title">{{`${getMemberList.length}大会员权益`}}</text>
      <image class="vip-card-img" src="@/static/image/vipCenter/vip_right.png"></image>
    </view>
    <!--      <view class="member-card-list u-flex" style="flex-wrap: nowrap;overflow-x: scroll;">-->
    <view class="u-flex member-list-three" style="flex-shrink: 0;">
      <view class="u-flex item-card"
            :class="{'item-card-no':item.own == '0'}"
            style="flex-direction: column;flex-shrink: 0;"
            v-for="(item,index) in getMemberList"
            :key="index"
            @click="memberClick(index,item)"
      >
        <image :src="item.benefitIcon"></image>
        <text class="item-card-title">{{ item.benefitName }}</text>
      </view>
    </view>
    <view class="member-img"  v-if="tinyPageData.isShow =='1'" @click="clickSmallImg(tinyPageData)">{{tinyPageData.descriptionName}}</view>
  </view>
</template>

<script>
export default {
  props:{
    getMemberList:{
      type:Array,
      default:[]
    },
    tinyPageData:{
      type:Object,
      default: {}
    }
  },
  methods:{
    memberClick(index){
       this.$emit('memberClick',index)
    },
    // 权益点击跳转
    clickSmallImg(data = {}) {
      // 商品
      if (data.jumpPageType == 'GOODS') {
        if (!data.jumpPageId) {
          this.$toast('页面跳转ID为空')
        }
        this.goTo(`/pagesA/shop/goodsDetail?id=${data.jumpPageId}`)
        return
      }
      // 跳转第二件半价和买一赠一
      if (data.jumpPageType == 'SECONDHALF' || data.jumpPageType == 'SECONDFREE') {
        this.goTo(`/pagesB/halfPrice/index?jumpPageType=${data.jumpPageType}`)
        return
      }
      // 商品分类
      if (data.jumpPageType == 'GOODS_GROUP') {
        this.goTo(`/pagesB/search/goodsList?goodsGroupId=${data.jumpPageId}`)
        return
      }
      // 微页面
      if (['MSPAGE'].includes(data.jumpPageType)) {
        if (!data.jumpPageId) {
          this.$toast('页面跳转ID为空')
          return
        }
        this.goTo(`/pages/home/miniPage?id=${data.jumpPageId}`)
        return
      }
      // 文章咨询跳转
      if (data.jumpPageType == 'ARTICLES') {
        if (data?.type == 'MSPAGE') {
          if (!data?.jumpPageData) {
            this.$toast('页面跳转ID为空')
            return
          }
          this.goTo(`/pages/home/miniPage?id=${data.jumpPageData}`)
          return
        }
        if (!data.jumpPageUrl) {
          this.$toast('跳转路径不存在')
          return
        }
        if (data?.type == 'WXMAID') {
          if (!data?.jumpPageData) {
            this.$toast('跳转小程序APPID为空')
            return
          }
          uni.navigateToMiniProgram({
            appId: data.jumpPageData,
            path: data.jumpPageUrl,
            fail(res) {

            }
          })
          return
        }
        if (data?.type == 'WEBVIEW') {
          this.goTo(`/pages/webview/webview?url=${data.jumpPageUrl}`)
          return
        }
      }
      // 跳转其他小程序
      if (data.jumpPageType == 'WXMAID') {
        if (!data.jumpPageUrl) {
          this.$toast('跳转路径不存在')
          return
        }
        if (!data.jumpPageId) {
          this.$toast('跳转小程序APPID为空')
          return
        }
        uni.navigateToMiniProgram({
          appId: data.jumpPageId,
          path: data.jumpPageUrl,
          fail(res) {
          }
        })
        return
      }
      // 跳转到申请定制 jumpPageType
      if (data.jumpPageType == 'REGISTER') {
        this.goTo(`/pagesB/infoApply/index`)
        return
      }
      // 小程序跳转抽奖
      if (data.jumpPageType == 'lotteryPage') {
        if (!data.jumpPageId) {
          this.$toast('抽奖活动id为空')
          return
        }
        this.goTo(`/pagesC/raffle/index?activityId=${data.jumpPageId}`)
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.member-card{
  position: relative;
  margin: 0rpx 30rpx 40rpx;
  padding: 40rpx 10rpx 48rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
  &-title{
    text-align: center;
    font-size: 28rpx;
    font-weight: 500;
    color: #191919;
  }
  &-list{
    margin-top: 20rpx;
    //flex-wrap: nowrap;
    .item-card{
      padding: 20rpx 15rpx 10rpx 15rpx;
      justify-content: space-between;
      position: relative;
      image{
        width: 64rpx;
        height: 64rpx;
      }
      &-title{
        margin-top: 8rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #000000;
      }
      .contact-class{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .item-card-no{
      filter: grayscale(100%);
      text{
        color: #999999!important;
      }
    }
  }
  .member-img{
    position: absolute;
    top: 20rpx;
    right: 0;
    width: auto;
    height: auto;
    background-image: url("../../static/image/icon_member.png");
    padding: 4rpx  20rpx 20rpx;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    font-size: 20rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
}
.member-card-title{
  width: 100%;
  justify-content: center;
  .vip-card-img{
    width: 40rpx;
    height: 40rpx;
  }
  .member-title{
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    margin: 0 16rpx;
  }
}
.member-list-three{
  flex-wrap: wrap;
  justify-content: space-between;
  .item-card{
    padding: 20rpx 0;
    margin-top: 20rpx;
    width: 33%;
    word-wrap: normal;
    image{
      width: 90rpx;
      height: 90rpx;
      margin-bottom: 16rpx;
    }
  }
  &:after{
    content: '';
    width: 33%;
  }
}
</style>