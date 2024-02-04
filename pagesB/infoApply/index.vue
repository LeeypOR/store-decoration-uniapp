<template>
  <view class="g-info-apply">
    <view class="head-card" style="position: relative;height: 568rpx">
      <u-navbar class="location-class" :background="{background:'#00000000'}" title-size="36" title-color="#fff" :border-bottom="false" title="金牌定制"
                back-icon-color="#fff" :custom-back="backPage"></u-navbar>
      <swiper style="height: 568rpx"
              class="swiper-head"
              :current="swiperIndex"
              indicator-active-color="#ffffff"
              @change="swiperChange"
              indicator-dots
              indicator-color="rgba(255, 255, 255, .4)">
        <swiper-item v-for="(item,index) in 4">
          <image class="swiper-item-img" :src="`/pagesB/static/images/infoApply/swiper${index}.jpg`"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="label-item">
      <text class="label-title" @click="labelClick(index)" v-for="(item,index) in labelList" :class="{active:(swiperIndex == index),'width-padding':index==0}">{{item}}</text>
    </view>
    <view class="form-box">
      <view class="u-flex">
        <view class="form-box-item u-flex-1">
          <view class="item-title">你的姓名</view>
<!--          <view class="click-btn" v-if="!from.userName">点击授权-->
<!--            <button class="impower-btn" @click="getUserProfile"></button>-->
<!--          </view>-->
<!--          <text class="click-btn" v-else>{{from.userName}}</text>-->
          <input class="u-flex-1"  style="width: 80%" type="text" v-model='from.userName' placeholder="输入用户姓名">
        </view>
        <view class="form-box-item u-flex-1">
          <view class="item-title">手机号码</view>
           <view class="click-btn" v-if="!from.userPhone">获取手机号
            <button class="impower-btn"  open-type="getPhoneNumber" @getphonenumber="getUserPhone"></button>
          </view>
          <text class="click-btn" v-else>{{from.userPhone}}</text>
        </view>
      </view>
      <view class="form-box-item">
        <view class="item-title">省市区</view>
        <view class='u-flex' @click="show=true">
          <input class="u-flex-1" disabled type="text" v-model='userAddress' placeholder="请选择省市区">
          <text class="iconfont icon-arrow"></text>
        </view>
      </view>
      <view class="form-box-item">
        <view class="item-title">详细地址</view>
        <input type="text" v-model="from.detailAddress" placeholder="请输入详细地址，如：xxx单元xxx户">
      </view>
    </view>
    <view class="btn-box" @click="$u.throttle(customerAddUser, 2000)">
      <image src="/pagesB/static/images/infoApply/btn.png"></image>
    </view>
    <view class="recommend-box">
      <image mode="widthFix" src="/pagesB/static/images/infoApply/recommend.jpg"></image>
    </view>
    <u-picker v-model="show" mode="region" @confirm="getAddress"></u-picker>
  </view>
</template>
<script>
export default {
  data(){
    return {
      userAddress:'',     // 用户选择地址
      openId:'',          // 小程序唯一标识
      show:false,         // 选择地址弹窗
      swiperIndex:0,      // 当前swiper的索引
      labelList:['全屋整装', '厨柜', '衣柜', '木门'],
      from:{
        madeType:1,                 // 定制类型（1.全屋整装 2.橱柜 3.衣柜 4.木门）
        "userName": "",
        "userPhone": "",
        "provinceCode": "",
        "provinceName": "",
        "cityCode": "",
        "cityName": "",
        "districtCode": "",
        "districtName": "",
        "detailAddress": ""
      }
    }
  },
  created(){
    const userInfo = this.$globleData.userData || null
    this.from.userName = userInfo?.nickName || ""
    this.from.userPhone = userInfo?.phoneNumber || ""
    if(!userInfo?.phoneNumber){
      this.getOpenIdByCode()
    }
  },
  computed:{
    getMadeType(){
      if(this.swiperIndex == 0){
        this.from.madeType = 1
      }
      if(this.swiperIndex == 1){
        this.from.madeType = 2
      }
      if(this.swiperIndex == 2){
        this.from.madeType = 3
      }
      if(this.swiperIndex == 3){
        this.from.madeType = 4
      }
    }
  },
  methods:{
    // 提交申请
    async customerAddUser(){
      for(const item in this.from){
        if(!this.from[item]){
          this.$toast('参数不能为空')
          return
        }
      }
      await this.$http.customerAddUser(this.from)
      this.$toast('提交成功')
    },
    // 获取地址
    getAddress({province={}, city={}, area={}}){
      this.from.provinceCode = province?.value || ''
      this.from.provinceName = province?.label || ''
      this.from.cityName = city?.label || ''
      this.from.cityCode = city?.value || ''
      this.from.districtName = area?.label || ''
      this.from.districtCode = area?.value || ''
      this.userAddress = `${this.from.provinceName} ${this.from.cityName} ${this.from.districtName}`
    },
    // 获取openId
    getOpenIdByCode(){
      uni.login({
        provider: 'weixin',
        success: async (loginRes) => {
          const res = await this.$http.getOpenId({code:loginRes.code})
          this.openId = res.dataInfo.openId
        }
      });
    },
    // // 获取用户信息
    // getUserProfile(e) {
    //   if(this.from.userName){
    //     return
    //   }
    //   uni.getUserProfile({
    //     desc: '用于完善个人信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //     success: (res) => {
    //       const userInfo = res.userInfo || {}
    //       this.from.userName = userInfo.nickName
    //     }
    //   })
    // },
    // 获取用户手机号
    async getUserPhone(e){
      if(!e.detail.encryptedData){
        return
      }
      let param = {
        openid: this.openId,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        nickName: '',
        avatar: '',
      }
      const res = await this.$http.login(param)
      const userInfo = res?.dataInfo?.userInfo || {}
      this.from.userPhone = userInfo.phoneNumber
    },
    swiperChange(e){
      let index = e?.detail?.current || 0
      this.swiperIndex = index
    },
    labelClick(index){
      this.swiperIndex = index
    },
  }
}
</script>

<style lang="scss" scoped>
.g-info-apply{
  .head-card{
    .swiper-head{
      position: absolute;
      height:  100%;
      width: 100%;
      top: 0;
      left: 0;
      .swiper-item-img{
        width: 100vw;
        height: 568rpx;
      }
    }
  }
}
.label-item{
  padding: 40rpx 0rpx 20rpx 43rpx;
  .label-title{
    display: inline-block;
    padding: 16rpx 58rpx;
    background: #F0F2F3;
    border-radius: 50rpx;
    margin: 0 40rpx 20rpx 0;

    font-family: PingFangSC-Regular;
    font-size: 32rpx;
    color: #191919;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
  .active{
    padding: 16rpx 48rpx;
    background: #AD8561;
    color: #FFFFFF;
  }
  .width-padding{
    padding: 16rpx 48rpx;
  }
}
.form-box{
  padding: 0 30rpx;
  .form-box-item{
    padding: 20rpx 0 10rpx;
    border-bottom: 1rpx solid #E6E6E6;
    .item-title{
      font-family: PingFangSC-Regular;
      font-size: 28rpx;
      color: #191919;
      letter-spacing: 0;
      font-weight: 400;
      margin-bottom: 10rpx;
    }
    .icon-arrow{
      font-size: 36rpx;
    }
    .click-btn{
      font-family: PingFangSC-Medium;
      font-size: 28rpx;
      color: #AD8561;
      letter-spacing: 0;
      font-weight: 500;
      position: relative;
      .impower-btn{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
}
.btn-box{
  image{
    width: 100vw;
    height: 160rpx;
  }
}
.recommend-box{
  image{
    width: 100vw;
  }
}
</style>
<style>
  page{
    background: #FFFFFF;
  }
</style>