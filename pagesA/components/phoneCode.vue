<template>
  <View class="code-input u-flex">
    <input placeholder="请输入验证码" @input="codeChange" @blur="codeBlur" v-model="code" type="number" placeholder-class="placeholder">
    <text v-if="awaitTime<60" class="give-code" :class="{'active':isActive}">{{awaitTime}}</text>
    <text v-else class="give-code" :class="{'active':isActive}" @click="isActive?getCode():''">获取验证码</text>
  </View>
</template>

<script>
import {regPhone} from "../../common/verify";

export default {
  props:{
    phoneNumber:{
       type:[String, Number],
       default:'',
    },
    type:{
      type:String,
      default: new Date().getTime().toString(),
    }
  },
  created(){
    const time = this.$globleData.timeCode[this.type]
    if(time && time <60){
      this.awaitTime = time
      this.countDown()
    }
  },
  data(){
    return {
      awaitTime:60,
      code:''
    }
  },
  computed:{
    isActive(){
      if (this.$u.test.mobile(this.phoneNumber)) {
        return true
      }
      return false
    }
  },
  methods:{
   async getCode(){
       await this.$http.sendSms({phoneNumber:this.phoneNumber})
       this.countDown()
    },
    codeChange(e){
       
        // this.code =e.detail.value.replace(/[^\d]/g,'')
        this.$emit('getCode',this.code)
    },
    codeBlur(e){
      console.log(e,'000000');
      let reg = new RegExp(/^\d{4,6}$/)
        if(!reg.test(e.detail.value*1)){
         
          
          this.$toast('请输入4-6位数字')
          return
        }
        
    },
    countDown(){
      this.awaitTime = this.awaitTime - 1
      let IntervalId = setInterval(() => {
        if (this.awaitTime <= 0) {
           this.awaitTime = 60
           clearInterval(IntervalId)
           this.$globleData.timeCode[this.type] = 60
           return
        }
        this.awaitTime = this.awaitTime - 1
        this.$globleData.timeCode[this.type] = this.awaitTime
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.code-input{
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
    opacity:0.5
  }
}
.active{
  opacity: 1!important;
}
/deep/ input{
  flex: 1;
}
</style>