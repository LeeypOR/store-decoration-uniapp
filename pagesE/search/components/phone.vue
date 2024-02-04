<template>
  <view class="g-phone">
    <screen></screen>
    <falls-goods></falls-goods>
  </view>
</template>

<script>
import screen from "./screen";
import fallsGoods from "./fallsGoods";
export default {
  components: {screen,fallsGoods},
}
</script>

<style scoped lang="scss">
.g-phone {

}
</style>