<template>
  <view class="u-rela" v-show="show">
    <u-navbar :is-back="false" :background="{ background: '#00000000' }" :border-bottom="false"></u-navbar>
    <view class="skip u-abso" @click="skip">跳过 <span class="time">{{time}}</span> </view>
    <view class="u-abso" style="top: 0;z-index:1" @click="pageClick(info)">
      <image :src=info.imgUrl mode="aspectFill" v-if="info.splashScreenType !=1"></image>
      <video v-else	 :controls="false" autoplay :src="info.imgUrl"></video>
    </view>
  </view>
</template>

<script>
import advertMixin from "./advertMixin";
export default {
  mixins:[advertMixin],
  data(){
    return{
      info:{},
      time:4,
      show:false,
      intervalId:''
    }
  },
  created(){
    this.info = this.$store?.state?.splashData || null
    if(this.info){
      uni.hideTabBar()
      this.show = true
      this.getAdvert()
    }else{
      this.$emit('call')
    }
  },
  methods:{
    // 跳过
    skip(){
      this.$emit('call')
      this.$store.commit('setSplashData',null)
      clearInterval(this.intervalId)
    },
    async getAdvert() {
      this.intervalId = setInterval(() => {
        if (this.time <= 0) {
          this.skip()
          return
        }
        this.time = this.time - 1
      }, 1000);
    }
  }
}
</script>

<style scoped lang="scss">
video,image{
  width: 100vw;
  height: 100vh;
}
.skip{
  padding: 10rpx 26rpx;
  right: 20rpx;
  opacity: 0.3;
  background: #000000;
  border-radius: 30rpx;
  font-family: PingFangSC-Regular;
  font-size: 30rpx;
  color: #FFFFFF;
  font-weight: 400;
  transform: translateY(20rpx);
  z-index: 10;
  .time{
    margin-left: 8rpx;
  }
}
</style>
