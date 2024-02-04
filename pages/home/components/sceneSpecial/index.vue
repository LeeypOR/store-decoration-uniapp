<template>
  <view class="scene-video">
    <view style="position: relative">
      <image mode="widthFix" :src="backgroundInfo.imageUrl"></image>
      <hot-area :hotAreaList="(backgroundInfo.hotAreaConfigInfoList || [])" moduleName="场景专区"></hot-area>
    </view>
    <view class="video-box" :class="getClass" :style="mapBottom">
      <view :class="dataInfo.zoneList.length != '1'?'item-card':'u-flex'"
            style="justify-content: center"
            v-for="(item,id) in dataInfo.zoneList"
            :key="id"
      >
        <view class="u-flex box-item-card" :style="getBackGround" :class="{'box-item-card-row':dataInfo.zoneModelType=='1','shadow':dataInfo.styleType=='2','radius':dataInfo.borderType=='2'}">
          <view class="left">
           <special :dataInfo="item.zoneImageList[0]"></special>
          </view>
          <view class="right u-flex">
            <view class="right-box" v-for="(data,index) in item.zoneImageList" :key="index"
                  v-if="index>0 && index <= parseInt(item.zoneStyle)">
              <special :dataInfo="data" :addShow="dataInfo.isShowBtn"></special>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import videoModule from '../video/index'
import mixin from "../../mixin";
import hotArea from '../../components/hotArea'
import Special from "./special";
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
        Special,
        videoModule,
        hotArea
    },
    computed:{
        getBackGround(){
            let backGround = `${this.colorRgb('#fff',(this.dataInfo?.borderTransparency || 100)/100)}`
            return `backGround:${backGround}`
        },
        getClass(){
            let obj = this.dataInfo || {}
            if(!obj.paddingShow){
                if(obj.zoneModelType=='1'){
                    return 'video-box-padding-hide-1'
                }
                return 'video-box-padding-hide'
            }
            return ''
        },
        mapBottom(){
            const val = JSON.parse(JSON.stringify(this.dataInfo || ''))
            let bottom = (val?.videoHeight*2+'rpx')
            let backGround = `${this.colorRgb('#fff',(this.dataInfo?.borderTransparency || 100)/100)}`
            // let bottom = (val?.videoHeight || 0)/(val?.maxVideoHeight+20 || 325)*100
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
    padding-left: 40rpx;
    overflow-x: scroll;
    overflow-y: hidden;  /* 超出内容不可见 */
    white-space: nowrap;  /* 不换行 */
    .box-item-card{
      width: 560rpx;
      height: 640rpx;
      //background-color: #ffffff;
      flex-wrap: nowrap;
      margin-right: 40rpx;
      box-sizing:border-box;
      padding: 20rpx 20rpx 0;
      .left{
        height: 100%;
        width: 300rpx;
        margin-right: 20rpx;
        padding-bottom: 20rpx;
      }
      .right{
        height: 100%;
        width: 200rpx;
        flex-direction: column;
        flex: 1;
        &-box{
          flex: 1;
          margin-bottom: 20rpx;
          width: 100%;
          margin-right: 0rpx;
          &:nth-last-of-type(1){
            margin-right: 0;
          }
        }
      }
    }
    .box-item-card-row{
      width: 640rpx;
      height: 640rpx;
      flex-direction: column;
      padding: 20rpx 20rpx 20rpx;
      .left{
        width: 100%;
        height: 290rpx;
        margin-right: 0;
        margin-bottom: 20rpx;
        padding-bottom: 0;
      }
      .right{
        width: 100%;
        height: 290rpx;
        flex-direction: row;
        flex: 1;
        &-box{
          flex: 1;
          margin-right: 20rpx;
          height: 100%;
          margin-bottom: 0rpx;
          &:nth-last-of-type(1){
            margin-right: 0;
          }
        }
      }
    }
  }
}

.video-box-padding-hide{
  .box-item-card{
    padding: 0!important;
    .left{
      padding-bottom:0!important;
      margin-right: 0rpx!important;
      margin-bottom: 0!important;
    }
    .right{
      &-box{
        margin-bottom: 0rpx!important;
        margin-right: 0rpx!important;
      }
    }
  }
}
.video-box-padding-hide-1{
  .box-item-card{
    padding: 0!important;
    .left{
      padding-bottom:0!important;
      margin-bottom: 0!important;
    }
    .right{
      &-box{
        margin-right: 0rpx!important;
      }
    }
  }
}
.item-card{
  display: inline-block;
}
.shadow{
  box-shadow: 0px 6rpx 32rpx 0px rgba(0, 0, 0, 0.2);
}
.radius{
  border-radius: 14rpx;
}
</style>
