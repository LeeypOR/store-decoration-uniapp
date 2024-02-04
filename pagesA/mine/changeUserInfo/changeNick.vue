<template>
  <view class="change-nick">
    <u-navbar :border-bottom="false"  title="昵称修改" title-color="#191919"  title-size="36" back-icon-color="#000000"></u-navbar>
    <u-input
        type="text"
        v-model="nickName"
        placeholder="修改昵称"
        maxlength="15"
    />
    <view class="tip">昵称限制1-15个字</view>
    <view class="btn-save" @click="save">保存</view>
  </view>
</template>

<script>
import changeUserMixin from "./changeUserMixin";
export default {
  mixins: [changeUserMixin],
  methods:{
    save(){
       if(this.nickName){
         this.updateUserInfo({nickName:this.nickName})
       }
    }
  }
}
</script>
<style>
  page{
    background: #F8F8F8;
  }
</style>
<style scoped lang="scss">
.change-nick{
  padding: 30rpx;
}
.tip{
  margin-top: 20rpx;
  text-align: right;
  font-size: 28rpx;
  font-weight: 400;
  color: #666666;
}
.btn-save{
  margin-top: 50rpx;
  padding: 22rpx 0 23rpx;
  background: #D1B085;
  border-radius: 45rpx;
  text-align: center;

  font-size: 32rpx;
  font-weight: 500;
  color: #FFFFFF;
}
/deep/.u-input__input{
  font-size: 28rpx!important;
  font-weight: 400;
  color: #191919!important;
  line-height: 0!important;
  min-height: 0!important;
}
/deep/.u-input{
  border-radius: 14rpx!important;
  border: 1rpx solid #e6e6e6;
  padding: 30rpx!important;
  background:#FFFFFF!important;
  box-shadow: 0 0 16rpx #f3f3f3;
}
</style>