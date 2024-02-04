<template>
  <view class="special" @click="jumPage">
    <image mode="aspectFill" :src="getImage"></image>
    <hot-area :hotAreaList="dataInfo.hotAreaConfigInfoList" moduleName="场景专区" v-if="dataInfo.imageType=='2'"></hot-area>
    <image v-if="addShow" class="add-btn" src="@/static/image/icon_button.png"></image>
  </view>
</template>

<script>
import hotArea from '../hotArea'
import mixin from "../../mixin";
export default {
  mixins:[mixin],
  props:{
    addShow:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      moduleName:"场景专区"
    }
  },
  components:{
    hotArea
  },
  computed:{
    getImage(){
      if(this.dataInfo.addType =='2'){
        return this.dataInfo.productList[0].productIdImageUrl
      }
      return this.dataInfo.imageUrl
    }
  },
  methods:{
    jumPage(){
      // 配置的热区
      if(this.dataInfo.imageType == '2'){
        return
      }
      // 图片热区
      if(this.dataInfo.addType =='1'){
        this.jumpToPage(this.dataInfo)
        return
      }
      let obj = this.dataInfo.productList[0]
      uni.setStorageSync('moduleDate', {jumpPageName:obj?.goodsName || '商品详情',moduleName:'积分商城'});
      this.goTo(`/pagesA/shop/goodsDetail?id=${obj.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.special{
  width: 100%;
  height: 100%;
  position: relative;
  image{
    width: 100%;
    height: 100%;
  }
  .add-btn{
    position: absolute;
    bottom: 10%;
    right: 10%;
    //transform: translatex(-50%);
    width: 44rpx;
    height: 44rpx;
    //border-radius: 50%;
    //background: #0091FF;
    //color: #ffffff;
    //justify-content: center;
  }
}
</style>
