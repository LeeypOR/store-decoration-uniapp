<template>
  <u-popup v-model="show" :mask-close-able="false" mode="center" backgroundColor="rgba(0,0,0,0)" z-index="99999999999991">
    <swiper class="swiper" indicator-dots indicator-color="#FFFFFF">
      <swiper-item v-for="item in info" @click="pageClick(item)">
        <image :src="item.imgUrl" ></image>
      </swiper-item>
    </swiper>
    <view @click="show = false" class="btn-close"  style="margin-top: 10rpx">
      <image src="@/static/image/close.png"></image>
    </view>
  </u-popup>
</template>

<script>
import advertMixin from './advertMixin';
export default {
  name: "advertPopup",
  mixins:[advertMixin],
  props: {
    refresh: {
      type: String,
      default: ''
    },
    dataInfo: {
      type: [Array,Object],
      default: null
    },
    location:{
      type:[String,Number],
      default: ""
    },
    advaerInfo:{
      type: [Array,Object],
      default: null
    }
  },
  watch:{
    show: function (){
      if(!this.show){
        this.$emit('close')
      }
    },
    // refresh:function (){
    //   if(this.refresh){
    //     this.getAdvert()
    //   }
    // },
    dataInfo: function () {
      if (this.dataInfo) {
        // this.show = true
        this.info = this.dataInfo
      }
    },
    advaerInfo: {
      handler(newVal){
        console.log('333333333333',newVal);
        
         if (this.dataInfo && JSON.stringify(newVal)!='{}') {
        this.getAdvert()
        }
      },
      immediate:true,
      deep:true
     
    }
  },
  data(){
    return {
      show:false,
      info:{}
    }
  },
  created(){
    // if(!this.dataInfo){
    //   this.getAdvert()
    // }
  },
  methods:{
    async getAdvert(){
      const {dataInfo:res} = await this.$http.getAdvert({
        advertType:2,
        advertLocation: '1' || this.location || '1'
      })
      if(res?.length>0){
        this.info = res
        this.show = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.swiper{
  width: 600rpx!important;
  height: 860rpx!important;
  background: transparent;
  image{
    width: 100%;
    height: 800rpx;
    border-radius: 16rpx;
  }
}
.btn-close{
  display: flex;
  align-items: center;
  justify-content: center;
  image{
    width: 64rpx;
    height: 64rpx;
  }
}
</style>
