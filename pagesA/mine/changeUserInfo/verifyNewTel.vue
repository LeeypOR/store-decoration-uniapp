<template>
  <view class="old-tel">
    <u-navbar :border-bottom="false" title="" title-color="#FFFFFF" back-icon-color="#000000"></u-navbar>
    <view class="title">新手机号码验证</view>
    <view class="tip">为了确保账户安全，需进行身份校验</view>
    <view class="tel-input u-flex">
      <text class="tel-title">+86</text>
      <input placeholder-class="placeholder" @blur="checkPhone" maxlength="11" type="number" v-model="newPhone" placeholder="请输入新的手机号"></input>
    </view>
    <phone-code :phoneNumber="newPhone" type="newTel" @getCode="setCode"></phone-code>
    <view class="btn-next" :class="{'active':butActive}" @click="butActive?$u.throttle(finish,2000):''">完成</view>
  </view>
</template>

<script>
import changeUserMixin from "./changeUserMixin";
import PhoneCode from "../../components/phoneCode";
import {regPhone} from "../../../common/verify";

export default {
  components: {PhoneCode},
  mixins: [changeUserMixin],
  data(){
    return {
      newPhone:"",
      code:''
    }
  },
  computed:{
    butActive(){
      if (this.newPhone?.length == 11 && this.code?.length >= 4) {
        return true
      }
      return false
    }
  },
  methods: {
    checkPhone(){
      if(!this.$u.test.mobile(this.newPhone)){
        this.$toast('请输入正确的手机号')
        return
      }
      
    },
    setCode(code){
      this.code = code
    },
    async finish() {
      this.backPage = 2
      const res = await this.$http.validateSms({
        phoneNumber: this.newPhone,
        verificationCode: this.code
      })
      try {
        const dataInfo  = await this.$http.changePhone({code:this.code,phone:this.newPhone})
        if(dataInfo.returnCode == 1000){
          this.$globleData.userData.phoneNumber= this.newPhone
          this.$toast('修改成功')
          this.goTo('/pages/mine/index',true)
          uni.setStorageSync('userInfo',  this.$globleData.userData);
        }
        
      } catch (error) {
        console.log(error);
      }
      
      // this.updateUserInfo({phoneNumber:this.newPhone})
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
.old-tel {
  padding: 80rpx;

  .title {
    font-size: 44rpx;
    font-weight: 600;
    color: #191919;
  }

  .tip {
    margin-top: 10rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
  }

  .tel-input {
    margin-top: 50rpx;
    padding: 16rpx 0;
    border-bottom: 1px solid rgba(230, 230, 230, 0.4);

    .tel-title {
      margin-right: 30rpx;
      font-size: 36rpx;
      font-weight: 400;
      color: #191919;
    }
  }

  .code-input {
    margin-top: 50rpx;
    padding: 16rpx 0;
    border-bottom: 1px solid rgba(230, 230, 230, 0.4);
    justify-content: space-between;

    .give-code {
      padding: 8rpx 20rpx;
      display: inline-block;
      background: #D1B085;
      border-radius: 27rpx;

      font-size: 26rpx;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

  .btn-next {
    margin-top: 102rpx;
    padding: 21rpx 0;
    background: #D1B085;
    border-radius: 45rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
    opacity: 0.5
  }

  /deep/ .placeholder {
    font-size: 28rpx;
    font-weight: 400;
    color: #CCCCCC;
  }

  input {
    font-size: 28rpx !important;
    font-weight: 400;
    color: #191919 !important;
    line-height: 0rpx !important;
  }
}
.active {
  opacity: 1 !important;
}
</style>