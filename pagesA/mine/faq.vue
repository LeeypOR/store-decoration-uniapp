<template>
  <view>
    <u-navbar :border-bottom="false" title="常见问题" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
    <no-data></no-data>
  </view>
</template>

<script>
import NoData from "../../components/noData";

export default {
  components: {NoData},
  name: "faq",
  data(){
    return {
      title:'常见问题'
    }
  }
}
</script>

<style scoped>

</style>