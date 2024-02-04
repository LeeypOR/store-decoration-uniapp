<template>
  <view class="scene-video">
    <view style="position: relative">
      <image mode="widthFix" :src="backgroundInfo.imageUrl"></image>
      <hot-area :hotAreaList="(backgroundInfo.hotAreaConfigInfoList || [])" moduleName="场景视频"></hot-area>
    </view>
    <view class="video-box" :style="mapBottom">
      <video-module :isZoom="isZoom" :dataInfo="dataInfo" :videoTag="videoTag"></video-module>
    </view>
  </view>
</template>

<script>
import videoModule from '../video/index'
import mixin from "../../mixin";
import hotArea from '../../components/hotArea'
export default {
  mixins:[mixin],
  props:{
    videoTag:{
      type:String,
      default:null
    },
    backgroundInfo:{
      type:Object,
      default:null
    }
  },
  components:{
    videoModule,
    hotArea
  },
  computed:{
    mapBottom(){
      const val = JSON.parse(JSON.stringify(this.dataInfo || ''))

      let bottom = (val?.videoHeight*2+'rpx')
      return `bottom:${bottom}`
    }
  }
}
</script>

<style lang="scss" scoped>
.scene-video{
  position: relative;
  //min-height: 1000rpx;
  image{
    width: 100%;
  }
  .video-box{
    width: 100%;

    position: absolute;
    z-index: 10;
    padding: 0 30rpx;
  }
}
</style>
