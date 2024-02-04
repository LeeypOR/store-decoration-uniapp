<template>
  <view>
    <view :class="['img-text-box',`img-text-box-${dataInfo.imgType}`,' u-skeleton']"
           :style="{'grid-template-columns':getGFillWidth(dataInfo.imgHeight,dataInfo.type),'color':dataInfo.color,'background-Color':dataInfo.backgroundColor}"
    >
      <view class="box" v-for="(item,index) in dataInfo.imageList" :key="index">
        <!--    图文导航    -->
        <view :class="['box-card','box-img']"
              @click="jumpToPage(item)"
              v-if="dataInfo.type=='1'">
          <view style="position: relative" :style="{height:(dataInfo.imageList[0].imageUrl?'auto':getWidth)}">
            <image mode="widthFix" :src="dataInfo.imageList[0].imageUrl" :style="{'width':getWidth}" style="opacity: 0"></image>
            <image mode="aspectFill" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%" :src="item.imageUrl"></image>
          </view>
          <text class="text">{{item.imageTitle}}</text>
        </view>
        <!--    文字导航    -->
        <view :class="['box-card','box-text',`box-card-${dataInfo.imageList.length}`]"
              v-if="dataInfo.type=='2'"
              @click="jumpToPage(item)"
        >
          <text>{{item.imageTitle}}</text>
        </view>
      </view>
    </view>
	<u-skeleton :loading="loading" :animation="true" bgColor="#f0f0f0"></u-skeleton>
  </view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync();
import mixin from '../../mixin.js'
export default {
    mixins:[mixin],
    data(){
        return{
            moduleName:'图文导航',
            screenWidth:0 // 屏幕宽度
        }
    },
    create(){
        this.screenWidth = systemInfo.screenWidth

    },
    computed:{
        mapPxToRpx() {
            return (property='') => {
                let num = parseFloat(property) || 0
                return num*2+'rpx'
            }
        },
        getGFillWidth(){
            return(width,type='1')=>{
                // if(type == '2'){
                //  width=60
                // }
                // let num = (parseInt(width) || 60)*2
                let length = (parseInt(this.screenWidth) || 375)*2
                let listLength = (this.dataInfo.imageList || ['']).length
                if(listLength>5){
                    listLength = 5
                }
                let dividend = parseInt(length/listLength)
                return `repeat(auto-fill,${(dividend)/2}px)`
            }
        },
        getWidth(){
            let length = (parseInt(this.screenWidth) || 375)*2
            let listLength = (this.dataInfo.imageList || ['']).length
            if(listLength>5){
                listLength = 5
            }
            let dividend = parseInt(length/listLength)
            return `${(dividend)/2 -10}px`
        },
    }
}
</script>

<style lang="scss" scoped>
.img-text-box{
  color: #6D7278;
  &-1{
    display: grid;
    justify-items:  center;
    padding-left: 0rpx;
  }
  &-2{
    display: flex;
    overflow-x: scroll;
    /* 内容会被裁剪，会以滚动条显示 */
    overflow-y: hidden;  /* 超出内容不可见 */
    white-space: nowrap;  /* 不换行 */
    padding-left: 30rpx;
    .box{
      &-img{
        padding: 30rpx 30rpx 24rpx 0 !important;
      }
      &-text{
        width: 100vh/5;
        padding: 30rpx 30rpx 24rpx 0 !important;
      }
    }
  }
  .box{
    display: inline-block;
    flex:1;
    image{
      width: 48rpx;
      height: 40rpx;
    }
    text{
      font-size: 24rpx;
      text-align: center;
      font-weight: 400;
    }
    .box-card{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-img{
      padding: 30rpx 0 10rpx 0;
      text{
        margin-top: 14rpx;
      }
    }
    &-text{
      padding: 30rpx 0 10rpx 0;
    }
  }
}


</style>
