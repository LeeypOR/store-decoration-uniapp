<template>
  <view>
	  <!--  -->
    <view :class="{'top-fixation':getClass}" :style="{height:getClass?backHeight:'auto',opacity:getOpacity}"> </view>
      <view :class="{'search-position':getClass}" :style="{top:topHeight}">
        <view class="g-search-box" :style="mapWidth"  @click="pageJump">
			<!-- formatStyle -->
          <view class="u-flex search-card" :class="mapLocation" :style="{formatStyle,mapBackGroundColor}">
            <text  class="iconfont icon-home_topbar_icon_search"></text>
<!--            <input  placeholder="商品" :placeholder-style="'color:'+dataInfo.color" />-->
            <text>搜索</text>
          </view>
        </view>
      </view>
  </view>
</template>

<script>
import mixin from '../../mixin.js'
export default {
	mixins:[mixin],
	props:{
	  dataInfo:{
	    type:Object,
	    default:null
	  },
    scrollTop:{
      type:[Number,String],
      default: 0
    },
    location:{
	    type:Number,
      default:11
    }

	},
  data(){
	  return{
      moduleName:"商品搜索",
      topHeight:0,
      backHeight:getApp().globalData.navbarHeight,
      opacity:0,
      navbarHeight:0
    }
  },
  created(){
    const systemInfo = uni.getSystemInfoSync();
    // #ifdef MP-WEIXIN
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    this.navbarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo
        .height + systemInfo.statusBarHeight
    this.backHeight=this.navbarHeight+10+'px'
    // #endif
    this.topHeight = systemInfo.statusBarHeight - 4 + 'px'
  },
  computed:{
    getClass(){
      return (this.dataInfo.position =='1' || this.location == 0)
    },
    mapWidth(){
      const val = JSON.parse(JSON.stringify(this.dataInfo || ''))

      let width = val?.width || 100
      if(this.dataInfo.position =='1' || this.location == 0){
        return `width:${width+'%'};min-width:35%`
      }
      return `width:${width+'%'}`
    },
    getOpacity(){
      if((this.location == 0 || this.location == 100) && this.dataInfo.position !='1'){
        if(this.scrollTop>parseInt(this.topHeight)){
         this.location = 100
          return 0
        }
        this.location = 0
        return 0
      }
      if(this.scrollTop-this.backHeight >0){
        return 1
      }
      return this.scrollTop / this.navbarHeight
    },
    mapLocation(){
      let location = this.dataInfo.textAlign || 'left'
      return 'u-row-'+location
    },
    // 映射背景颜色
    mapBackGroundColor(){
      let color = this.colorRgb(this.dataInfo.backgroundColor,(this.dataInfo.opacity/100).toFixed(2))
      return `;background-color:${color};opacity:1`
    }
  },
  methods:{
    pageJump(){
      uni.setStorageSync('moduleDate', {jumpPageName:'搜索页面',moduleName:'商品搜索'});
      this.goTo('/pagesA/searchPage/index')
    },
    colorRgb(val,opacity){
      // 16进制颜色值的正则
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      var color = val.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          var colorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        var colorChange = [];
        for (var i = 1; i < 7; i += 2) {
          colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "rgba(" + colorChange.join(",") + ","+opacity+")";
      } else {
        return color;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.g-search-box {
  padding: 10rpx 20rpx;
  .search-card {
    border: 1px solid rgba(0,0,0,0);
    width: 100%;
  }
}
.icon-home_topbar_icon_search{
  font-size: 30rpx;
  padding-left: 24rpx;
  margin-right: 4rpx;
}
.top-fixation{
  opacity: 0;
  transition: all 1s;
  width: 100vw;
  top: 0;
  position: fixed;
  z-index: 99999;
  background-color: rgb(255,255,255);
}
.search-position{
  position: fixed;
  width: 70%;
  z-index: 100000;
}

</style>
