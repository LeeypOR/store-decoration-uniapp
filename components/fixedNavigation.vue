<template>
    <view class="btn-box" v-if="param" :style="[getStyle]">
      <i class="iconfont" :class="getIcon" :style="{color:param.btnColor}" @click="unfold = !unfold"></i>
      <!-- 下拉 -->
      <view v-if="unfold && param.fixedType == 1">
        <image :src="item.imageUrl" mode="aspectFill" class="verticle-img" v-for="(item) in param.navList" @click="jumpToPage(item)"></image>
      </view>
      <!-- 旋转 -->
      <view @click="jumpToPage(item)" v-if="unfold && param.fixedType == 2" class="u-abso  item-box" v-for="(item,index) in param.navList" :style="[itemBoxStyle,{top:getTopAndLeft(index,1),left:getTopAndLeft(index,2)}]">
        <image :src="item.imageUrl" class="fiex-btn" mode="aspectFill"></image>
      </view>
    </view>
</template>

<script>
import mixin  from '../pages/home/mixin'
export default {
  mixins:[mixin],
  props:{
    location:{
      type:[Number,String],
    },
    fixTime:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      moduleName:'悬浮导航',
      radius: 90,      // 旋转半径
      initIndex: 1,     // 初始旋转位置
      angle:180,        // 选择角度
      navigationNum:0,  // 弹窗个数
      unfold:false,     // 是否展示
      param: null    // c
    }
  },
  created(){

  },
  watch:{
    fixTime:{
      handler(newVal){
        if(newVal){
          this.getFixedData()
        }

      },
      immediate:true,
    }
  },
  computed: {
    // 获取展开收起图标
    getIcon() {
      const data = this.param
      const fixedType = data?.fixedType || 1
      if (fixedType == 1) {
        if (this.unfold) {
          return 'icon-app_icon_xiala'
        }
        return 'icon-app_icon_shouhui'
      }
      if (fixedType == 2) {
        if (this.unfold) {
          return 'icon-icon_shouqi'
        }
        return 'icon-icon_zhankai'
      }
    },
    getStyle(){
      const data = this.param || null
      if(!data){
        return
      }
      const standard = data.floatPosition == 1 ? -data.standard : data.standard
      const num = data.fixedType == 1 ? 10 : 0
      const obj = {
        bottom: (100-data?.top ?? 50) + '%',
        right: (data?.standard ?? 20) + '%',
        left: (data?.standard ?? 20) + '%',
        background: data?.bgColor || '#ffffff',
        border: `${(data?.borderWidth ?? 2) * 2}rpx solid ${data?.borderColor || '#000000'}`,
        transform: `translateY(${((100-data.top) / 100) * (50 + num + data.borderWidth * 2)}px)
        translateX(${(standard / 100) * (50 + data.borderWidth * 2)}px)`,
        borderRadius:(data?.borderRadius ?? 50)*2 + "rpx",
        padding: '10rpx'
      }
      if(data.floatPosition == 1){
        delete obj.right
      }
      if(data.floatPosition == 2){
        delete obj.left
      }
      if(data.fixedType == 2){
        delete obj.padding
        obj.borderRadius = '50%'
      }
      return obj
    },
    itemBoxStyle() {
      let obj = {
        border: `${(this.param?.borderWidth ?? 2) * 2}rpx solid ${this.param?.borderColor || '#000000'}`,
      };
      return obj;
    },
    getTopAndLeft() {
      const data = this.param
      if(!data){
        return
      }

      const standard  = data.borderWidth ?? 0
      return (index,type) => {
        index = this.initIndex + index
        if(type == 1){
          let top = Math.cos(Math.PI / 180 * (this.angle * index)) * this.radius + standard
          return -top+'px'
        }
        let left = Math.sin(Math.PI / 180 * (this.angle * index)) * this.radius - standard
        return left +'px'
      }
    },
  },
  methods:{
    async getFixedData(){
       const {dataInfo:res} = await this.$http.getNavigation()
       let param = JSON.parse(res?.pageMsJson || 'null')
       if(!param?.pageList.includes(this.location)){
         return
       }
       this.param = param
       if(this.param?.fixedType == 2){
          this.initData()
       }
       if(this.param?.fixedType == 1){
         this.unfold = true
       }
    },
    initData(){
      let len = (this.param?.navList || []).length
      const num = this.param.floatPosition == 1? 1 : -1
      if([4,5].includes(len)){
         this.initIndex = 0
         len = len-2
      }
      this.angle = (180/(len + 1)) * num
    }
  }
}
</script>
<style scoped lang="scss">
.btn-box{
  z-index: 99999;
  position: fixed;
  box-shadow: 0px 4rpx 8rpx 0rpx rgba(0,0,0,0.1);
  .fiex-btn{
    width: 100rpx;
    height: 100rpx;
    display: block;
    border-radius: 50%;
  }
}
.verticle-img{
  margin-top: 20rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  display: block;
  &:first-of-type{
    margin-top: -20rpx;
  }
}
.iconfont{
  font-size: 50rpx;
  width: 100rpx;
  display: flex;
  height: 100rpx;
  align-items: center;
  justify-content: center
}
.item-box{
  border-radius: 50%;
}
</style>
