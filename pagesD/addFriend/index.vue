<template>
  <view>
    <u-navbar class="location-class" :background="{background:'#ffffff'}" title-size="36" title-color="#191919" :border-bottom="false" title="家居顾问"
              back-icon-color="#191919" :custom-back="backPage"></u-navbar>
    <image class="add-img" mode="widthFix" src="/pagesD/static/image/qr_code.png" @click="showImg"></image>
  </view>
</template>

<script>
export default {
  name: "test",
  onShow(){},
  methods:{
    showImg(){
      getApp().globalData.preveImage = 'preveImage'
      uni.previewImage({
        urls: ['/pagesD/static/image/qr_code.png'],
      });
    }
  }
}
</script>
<style>
  page{
    background: #1D1C2A;
  }
</style>
<style lang="scss" scoped>
.add-img{
  width: 100vw;
}
</style>