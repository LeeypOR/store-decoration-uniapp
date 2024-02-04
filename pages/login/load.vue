<template>
  <view class="wrap">
    <image v-if="!show" class="logo-img" :mode="imageMode" :src="imageUrl" ></image>
  </view>
</template>


<script>
import {mapMutations} from "vuex"
export default {
  onLoad(option) {
    let shareData = option.sharLiveData?JSON.parse(option.sharLiveData):null
    if(shareData){
      uni.navigateTo({
        url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=1`
      })
    }
  },
  onShow(){
    const aspectRatio = this.$globleData.aspectRatio
    if(aspectRatio<2) {
      this.imageMode = 'scaleToFill'
      this.imageUrl = 'https://jdz.g1999.com/ghs/20210910/289d743b0baf4a4da223d21fc23f7d36.jpg'
    }else{
      this.imageUrl = 'https://jdz.g1999.com/ghs/20210910/fee3fa90fecd42bdafa6baba0ad7b780.jpg'
    }
    this.refreshToken()
  },
  data(){
    return {
      title:'load',
      imageMode:"aspectFit",
      imageUrl:'',
      show:false
    }
  },
  methods: {
    ...mapMutations(['setSplashAdvert']),
    async refreshToken() {
      const token = uni.getStorageSync('accessToken');
      if (!token) {
        this.goTo('/pages/home/index', true)
        return
      }
      this.$globleData.accessToken = token
      let arr = []
      arr.push(this.$http.getAdvert({advertType: 1}))
      arr.push(this.$http.refreshToken())
      let infoList = await Promise.allSettled(arr)
      infoList.forEach((info, index) => {
        if (index == 0) {
          let res = info?.value?.dataInfo || []
          if (info.status == 'fulfilled' && res.length>0) {
            this.$store.commit('setSplashData',res[0])
          }
        }
        if (index == 1) {
          if (info.status == 'fulfilled') {
            let res = info?.value?.dataInfo || {}
           
            this.$globleData.accessToken = res?.accessToken || ''
            uni.setStorageSync('accessToken', this.$globleData.accessToken);
          } else {
            this.$globleData.accessToken = ''
            this.$globleData.userData = {}
            uni.setStorageSync('accessToken', '');
            uni.setStorageSync('userInfo', null);
          }
        }
      })
      this.goTo('/pages/home/index', true)
    },
  }
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100vh;
  .logo-img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
