<template>
  <view class="g-video" :style="formatStyle">
    <view style="position: relative">
      <video :src="dataInfo.videoUrl"
             :show-center-play-btn="false"
             play-btn-position="bottom"
             object-fit="cover"
             @play="videoPlay"
             :class="{'page-scale':isZoom}"
             :poster="dataInfo.customType?dataInfo.imgUrl:''"
              id="my-video">

      </video>
      <!--  跳转图标加文字描述  -->
      <view class="describe-box u-flex" v-if="dataInfo.isShowBtn" @click="jumpToPage(dataInfo)">
        <image v-if="dataInfo.isBtnType !='2' " :src="dataInfo.iconUrl"></image>
        <text v-if="dataInfo.isBtnType !='1'">{{dataInfo.title}}</text>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from '../../mixin.js'
export default {
  mixins:[mixin],
  props:{
    videoTag:{
      type:String,
      default:null
    }
  },
  data(){
    return {
      moduleName:'视频',
      videoObj:null
    }
  },
  created(){
    this.$nextTick(()=>{
       this.videoObj = uni.createVideoContext('my-video',this) || {}
       this.videoObj.id = this.videoTag
    })
  },
  methods:{
    videoPlay(){
      let obj = this.$store.state.videoPlay
      if(obj && (obj.id != this.videoObj.id)){obj.pause()}
      // if(this.videoObj){this.videoObj.play()}
      this.$store.commit('setVideoPlay',this.videoObj)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-video{
  position: relative;
  video{
    width: 100%;
    height: 410rpx;
    border-radius: 8rpx;
  }
  .cover-img-box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .describe-box{
    position: absolute;
    top: 32rpx;
    right: 32rpx;
    padding: 14rpx 24rpx;
    background: rgba(255,255,255,.5);
    border-radius: 30rpx;
    image{
      width: 30rpx;
      height: 30rpx;
      margin-right: 6rpx;
    }
    text{
      font-size: 24rpx;
      font-weight: 500;
      color: #FFFFFF;
    }
    image:nth-last-child(1){
       width: 34rpx;
       height: 34rpx;
       margin-right: 0;
    }
  }
}
.page-scale{
  height: 280rpx!important;
}
</style>
