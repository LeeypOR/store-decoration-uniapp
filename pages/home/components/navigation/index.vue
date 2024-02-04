<template>
    <view>
        <imgAndText :dataInfo="dataInfo"></imgAndText>
    </view>
</template>

<script>
import imgAndText from "./imgAndText";
export default {
  components:{imgAndText},
  props:{
    dataInfo:{
      type:Object,
      default:{}
    }
  },
  created() {
  	
  }
}
</script>

<style scoped>

</style>