<template>
  <view style="width: 100%">
    <view class="g-hot-area testCss"
          :dataTop="item.top"
          v-for="(item,index) in hotAreaList"
          :key="index"
          :style="{top:mapRatioH(item.top,item.dragHeight),left:mapRatioW(item.left,item.dragHeight),width:mapRatioW(item.width,item.dragHeight),height:mapRatioH(item.height,item.dragHeight)}"
          @click="jumpToPage(item)">
    </view>
  </view>
</template>

<script>
import mixin from "../../mixin";
export default {
    mixins:[mixin],
    props:{
        hotAreaList:{
            type:Array,
            default:()=>{}
        },
        moduleName: {
          type: String,
          default: '热区'
        }
    },
    computed:{
        mapPxToRpx() {
            return (property='') => {
                let num = parseFloat(property) || 0
                return num*2+'rpx'
            }
        },
        mapRatioW(){
            return(w,mh=0)=>{
                if(mh){
                    return parseInt(w)/375*100+'%'
                }
                let num = parseFloat(w) || 0
                return num*2+'rpx'
            }
        },
        mapRatioH(){
            return(h,mh=0)=>{
                if(mh){
                    return parseInt(h)/mh*100+'%'
                }
                let num = parseFloat(h) || 0
                return num*2+'rpx'
            }
        }
    },
    created(){
        this.$nextTick(()=>{
            const parent = this.$parent


        })
    }
}
</script>

<style lang="scss" scoped>
.g-hot-area{
  position: absolute;
  z-index: 9;
}

.testCss{
  top: calc(100%/375 * 100);
}
</style>


