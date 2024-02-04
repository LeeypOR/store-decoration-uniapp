<template>
    <view>
        <web-view :src="url"></web-view>
    </view>
</template>

<script>
export default {
  /*
  * url:
  *
  * */
  onLoad(option){
    const url = option?.url
    const type = option?.type || null
    if(url){
      this.url = url
      return
    }
    if(type == 'addFriend'){
      this.url = 'https://jdz.g1999.com/goldenhome/gold/webapp/#/qrcode?url='+'https://jdz.g1999.com/ghs/20211020/1dd0e34b64ce4d41a106d489cbb178db.png'
    }
  },
  data() {
    return {
      title:'第三方页面',
      url:''
    }
  },
}
</script>

<style lang="scss" scoped>
 .class{
   color: rgba(0, 0, 0, 0.6);
 }
</style>
