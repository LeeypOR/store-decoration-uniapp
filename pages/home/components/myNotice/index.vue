<template>
  <view @click="jumpToPage(dataInfo)">
    <u-notice-bar  :list="getList"
                   :bg-color="dataInfo.bgColor"
                   :color="dataInfo.color">
    </u-notice-bar>
  </view>
</template>

<script>
import mixin from "../../mixin";
export default {
  mixins:[mixin],
  data(){
    return {
      moduleName:'公告',
    }
  },
  computed:{
    getList(){
      return [(this.dataInfo?.textCon || '')]
    }
  }
}
</script>

<style lang="scss" scoped>
.a{
  color: #4cd964!important;
}
</style>
