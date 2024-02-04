<template>
  <view class="g-magic" :style="{padding:pxToRpx(dataInfo.pagePadding),height:pxToRpx(dataInfo.height)}">
    <view class="item"
          @click="jumpToPage(item)"
          :style="{
              height:pxToRpx(item.imgHeight),
              width:pxToRpx(item.imgWidth),
              top:pxToRpx(item.top),
              left:pxToRpx(item.left),
              'border-radius': dataInfo.angleType ==1?'14rpx':'0'
            }"
          v-if="index<dataInfo.total"
          v-for="(item,index) in dataInfo.itemList"
          :key="index"
    >
      <image mode="aspectFill" :src="item.imgUrl"></image>
      <view class="item-text-box u-flex" v-if="item.textShow == 1" :style="{'background-color':textStyle(item)}">{{item.textCon}}</view>
    </view>
  </view>
</template>

<script>
import mixin from "../../mixin";
export default {
  mixins:[mixin],
  data(){
    return {
      moduleName:'魔方',
    }
  },
  computed:{
    pxToRpx(){
      return (item) => {
        let num = parseFloat(item) || 0
        return num * 2 + "rpx"
      }
    }
  },
  methods:{
    textStyle(boxInfo) {
      let color = `color:${boxInfo?.textColor};`
      let fontSize = `font-size:${ parseFloat(boxInfo?.textSize) * 2 + 'rpx'};`
      let textAlign = `justify-content:${boxInfo?.textAlign};`
      let letterSpacing = `letter-spacing:${parseFloat(boxInfo?.textSpace) * 2 + 'rpx'};`
      let fontWeight  = `font-weight:${boxInfo.textThickness};`
      let backColor = `${this.toRGBA(boxInfo)};`
      let height =`height:${parseFloat(boxInfo?.boxHeight)*2+'rpx'};`
      // let LineHeight =`line-height:${parseFloat(boxInfo?.boxHeight)*2+'rpx'};`
      let width =`width:${parseFloat(boxInfo?.boxWidth)*2+'rpx'};`
      let boxBorderRadius =`border-radius:${parseFloat(boxInfo?.boxBorderRadius)*2+'rpx'};`
      let top =`top:${parseFloat(boxInfo?.boxTop)*2+'rpx'};`
      let left =`left:${parseFloat(boxInfo?.boxLeft)*2+'rpx'};`
      let textCenter =`text-align:${boxInfo?.textAlign};`
      let boxBorderColor
      if(boxInfo?.boxBorderShow){
        boxBorderColor = `border:1rpx solid ${boxInfo.boxBorderColor};`
      }
      return  backColor + color + fontSize + textAlign +letterSpacing + fontWeight + height + width + top + left + boxBorderRadius + boxBorderColor + textCenter
    },
    toRGBA(data){
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var sColor = data.textBgColor.toLowerCase();
      if(sColor && reg.test(sColor)){
        if(sColor.length === 4){
          var sColorNew = "#";
          for(var i=1; i<4; i+=1){
            sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for(var i=1; i<7; i+=2){
          sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
        }
        return "rgba(" + sColorChange.join(",") + ","+((data.textBgOpacity/100).toFixed(2))+")";
      }else{
        return sColor;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.g-magic{
  position: relative;
  width: 100vw;
  z-index: 10000;
  .item{
    position: absolute;
    overflow: hidden;
    image{
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }
    .item-text-box{
      position: absolute;
      //bottom: 0;
      //width: 100%;
      z-index: 1000;
      overflow: hidden;
      //padding: 2rpx 0;
    }
  }
}
</style>
