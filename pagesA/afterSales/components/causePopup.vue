<template>
  <u-popup v-model="show"
           mode="bottom"
           closeable
           border-radius="30"
  >
    <u-radio-group :value="value" active-color="#D1B085" @change="radioChange">
      <view class="popup-card">
        <view class="popup-title">退款原因</view>
        <view class="item-card u-flex"  v-for="item in reasonList">
          <text>{{ item.name }}</text>
          <u-radio width="44rpx"    :name="item.name"></u-radio>
        </view>
        <view class="text-area-box" v-show="showTextArea">
          <textarea placeholder-class="text-area-class"
                    placeholder="选择其他需要填写具体原因"
                    :value="textareaValue"
                    @input="textareaChange"
                    :maxlength=60
          ></textarea>
          <text class="text-area-num">{{textareaValue.length>60?60:textareaValue.length}}/60</text>
        </view>

      </view>
    </u-radio-group>
    <!--  底部按钮  -->
    <view class="bottom-btn">
      <view class="btn-submit" @click="submit">提交</view>
    </view>
  </u-popup>
</template>

<script>
import {refundReason,salesReturnReason} from '../afterSalesData'
export default {
  props:{
    // 退货类型 // 1 退货  2 退款
    repairsType:{
      type:[String,Number],
      default: 1
    }
  },
  data(){
    return {
      textareaValue:'$-*-@-#',  //设置初始值 显示的时候清除掉（解决初次显示placeholder-class不生效问题）
      showTextArea:false, // 是否显示其他描述
      reason:''               // 退款原因
    }
  },
  computed: {
    show:{
      get:function(){
        return this.$store.state.showCausePopup
      },
      set:function(value){
         this.$store.commit('setShowCausePopup',value)
      }
    },
    // 获取配置 目前写死
    reasonList(){
      if(this.repairsType == 1 ){
        return refundReason
      }
      if(this.repairsType == 2) {
        return salesReturnReason
      }
      return salesReturnReason
    }
  },
  methods:{
    radioChange(name){
       this.showTextArea = false
        if(name == '其他'){
            if(this.textareaValue == '$-*-@-#'){
                this.textareaValue = ''
            }
            this.showTextArea = true
        }
        this.reason = name
    },
    // xians 弹窗
    showPopup(){
        this.show = true
    },
    // 提交
    submit() {
      if (!this.reason) {
        this.$toast('请填写退款原因')
        return
      }
      if (this.reason == '其他' && !this.textareaValue) {
        this.$toast('请填写具体原因')
        return
      }
      this.$emit('change', {reason: this.reason, reasonDesc: this.reason == '其他' ? this.textareaValue : ''})
      this.show = false
    },
    textareaChange(e){
      
      this.textareaValue = e.detail.value
    }
  }
}
</script>
<style lang="scss" scoped>
.popup-card{
  max-height: 70vh;
  padding: 0 30rpx;
  .popup-title {
    padding: 30rpx;
    text-align: center;
    font-size: 32rpx;
    color: #191919;
    font-weight: 500;
  }
  .item-card{
    justify-content: space-between;
    border-top: 1rpx solid #e6e6e6;
    padding: 30rpx 0;
    font-size: 28rpx;
    color: #191919;
    font-weight: 400;
  }
}
textarea{
  box-sizing: border-box;
  padding: 20rpx;
  width: 100%;
  height: 200rpx;
  background: #F8F8F8;
  border-radius: 10rpx;
}
// 底部按钮

.bottom-btn{
  border-top: 1rpx solid #F8F8F8;
  margin-top: 10rpx;
  padding: 15rpx 30rpx calc(calc(env(safe-area-inset-bottom) / 2) + 15rpx) 30rpx;
  background: #ffffff;
  .btn-submit{
    text-align: center;
    padding: 15rpx 0;
    background: #D1B085;
    border-radius: 45rpx;

    font-size: 28rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 500;
  }
}
.text-area-box{
  position: relative;
  .text-area-num{
    position: absolute;
    bottom: 0;
    right: 30rpx;
    font-size: 24rpx;
    color:#999999;
  }
}
</style>
<style>
.text-area-class{
  font-size: 28rpx;
  color: #999999;
  font-weight: 400;
}
</style>
