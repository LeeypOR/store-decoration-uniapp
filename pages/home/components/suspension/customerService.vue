<template>
    <view style="position: relative"  v-if="dataInfo.badgeType == 3">
      <image
          :src="dataInfo.imageUrl"
          :style="{
                    width: pxToRpx(dataInfo.imgWidth),
                    height: pxToRpx(dataInfo.imgWidth)
                }"
          mode="aspectFill"
      ></image>
        <!-- 3客服 -->
        <button @click="openCustomerShare" session-from="weapp" class="g-suspension-button"></button>
    </view>
</template>

<script>
import mixin from "../../mixin";
export default {
    mixins: [mixin],
    props:{
        dataInfo: {
            type: Object
        }
    },
    data(){
        return {
          moduleName:'悬浮组件',
        }
    },
    computed:{ },
    methods: {
        pxToRpx(item) {
            let num = parseFloat(item) || 0;
            return num * 2 + "rpx";
        }
    },
};
</script>

<style lang="scss" scoped>
.g-suspension-button {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //margin: 0;
  //padding: 0;
  //border: none;
  //line-height: 0.8;
  //border-radius: 0;
  //background: transparent;
  position: absolute;
  z-index: 1;
  opacity: 0;
}
</style>
