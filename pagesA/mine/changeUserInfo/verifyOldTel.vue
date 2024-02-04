<template>
  <view class="old-tel">
    <u-navbar :border-bottom="false" title="" title-color="#FFFFFF" back-icon-color="#000000"></u-navbar>
    <view class="title">原手机号码验证</view>
    <view class="tip">为了确保账户安全，需进行身份校验</view>
    <view class="tel-input u-flex">
      <text class="tel-title">+86</text>
      <input placeholder="请输入旧的手机号" maxlength="11" type="number" disabled v-model="phoneNumber" placeholder-class="placeholder"></input>
    </view>
    <phone-code :phoneNumber="phoneNumber" type="oldTel" @getCode="setCode"></phone-code>
    <view class="btn-next" :class="{'active':butActive}" @click="$u.throttle(nextStep,2000)">下一步</view>
  </view>
</template>

<script>
import changeUserMixin from "./changeUserMixin";
import PhoneCode from "../../components/phoneCode";

export default {
  components: {PhoneCode},
  mixins: [changeUserMixin],
  data(){
    return {
      code:''
    }
  },
  computed:{
    butActive(){
       if(this.code?.length >= 4){
         return true
       }
       return false
    }
  },
  methods:{
    setCode(code){
        this.code = code
    },
    async nextStep() {
      // let res = await this.updateUserInfo()
      const res = await this.$http.validateSms({
        phoneNumber: this.phoneNumber,
        verificationCode: this.code
      })
      this.goTo('/pagesA/mine/changeUserInfo/verifyNewTel')
    }
  }
}
</script>
<style>
page{
  background-color: #ffffff;
}
</style>
<style scoped lang="scss">
.old-tel{
  padding: 80rpx;
  .title{
    font-size: 44rpx;
    font-weight: 600;
    color: #191919;
  }
  .tip{
    margin-top: 10rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
  }
  .tel-input{
    margin-top: 50rpx;
    margin-bottom: 50rpx;
    padding: 16rpx 0;
    border-bottom: 1px solid rgba(230,230,230,0.4);
    .tel-title{
      margin-right: 30rpx;
      font-size: 36rpx;
      font-weight: 400;
      color: #191919;
    }
  }
  .code-input{
    margin-top: 50rpx;
    padding: 16rpx 0;
    border-bottom: 1px solid rgba(230,230,230,0.4);
    justify-content: space-between;
    .give-code{
      padding: 8rpx 20rpx;
      display: inline-block;
      background: #D1B085;
      border-radius: 27rpx;

      font-size: 26rpx;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
  .btn-next{
    margin-top: 102rpx;
    padding: 21rpx 0;
    background: #D1B085;
    border-radius: 45rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
    opacity:0.5
  }

/deep/.placeholder{
    font-size: 28rpx;
    font-weight: 400;
    color: #CCCCCC;
  }

  input{
    font-size: 28rpx!important;
    font-weight: 400;
    color: #191919!important;
    line-height: 0rpx!important;
  }
}
.active{
  opacity: 1!important;
}
</style>