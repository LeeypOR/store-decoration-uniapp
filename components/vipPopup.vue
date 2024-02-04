<template>
  <view>
    {{getPopup ||  ''}}
    <view class="mask" catchtouchmove="" :mask-click-able="false" :custom-style="{background: 'rgba(0, 0, 0, 0.5)'}" v-show="cardShow" >
      <view class="card-wrap" >
        <view style="width: 750rpx;height: 750rpx;position: relative">
          <image  @click="popupClick" mode="aspectFill" style="width: 100%;height: 100%" :src="getImage" ></image>
          <!-- 生日提示 -->
          <view class='popup-title'>{{getTitle}}</view>
          <!-- 导入会员提示 -->
          <view class="vip-title" v-if="[3,4].includes(popupInfo.popupWindowType)">
            <view class="tip">{{popupInfo.prompt || (popupInfo.popupWindowType == 4?'恭喜您获得金勋会员体验权！':'')}}</view>
            <view class="data">{{popupInfo.expireDate?`有效期至 ${popupInfo.expireDate}`:'永久有效'}}</view>
          </view >
        </view>
        <view @click="cardClose" class="iconfont icon-closed" style="font-size: 61rpx;color: white;"></view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters,mapMutations  } from 'vuex'
export default {
  props:{
    refresh:{
      type:String,
      default:''
    },
    //  弹窗类型
    type:{
      type:[String,Number],
      default: ''
    },
    dataInfo:{
      type:Object,
      default:null
    }
  },
  data(){
    return {
      cardShow:false,    // 是否显示弹窗
      popupInfo:{},     // 弹窗信息
      popupList:[]      // 弹窗列表
    }
  },
  watch:{
    dataInfo:function (){
      if(this.dataInfo){
        this.popupControl()
      }
    }
  },
  computed:{
    ...mapGetters(['getVipPopupList']),
    // 获取弹窗图片
    getImage(){
      const obj = this.popupInfo || {}
      if(obj?.popupWindowStyle){
        return obj?.popupWindowStyle
      }
      // 升级
      if(obj?.popupWindowType == 1){
        if(obj?.gradeLevel == 1){
            return 'https://jdz.g1999.com/ghs/20211017/f92afdfdd08840d3b3ea98c78a5c6a70.png'
        }
        if(obj?.gradeLevel == 2){
          return 'https://jdz.g1999.com/ghs/20211017/a76b0a4ad5444996a7a2d769c51af160.png'
        }
        if(obj?.gradeLevel == 3){
          return 'https://jdz.g1999.com/ghs/20211017/408b0a37b8ea4a109a5fe03a1946df36.png'
        }
        if(obj?.gradeLevel == 4){
          return 'https://jdz.g1999.com/ghs/20211017/c9cc81643a9740e3bcc7549e1290763b.png'
        }
        if(obj?.gradeLevel == 5){
          return 'https://jdz.g1999.com/ghs/20211017/6111b72cd3414e0987ebcc77af574fd7.png'
        }
        if(obj?.gradeLevel == 6){
          return 'https://jdz.g1999.com/ghs/20211017/ea9c33bf66204a4da53f4b90d9317356.png'
        }
        return 'https://jdz.g1999.com/ghs/20211017/ea9c33bf66204a4da53f4b90d9317356.png'
      }
      // 生日
      if(obj?.popupWindowType == 2){
        return 'https://jdz.g1999.com/ghs/20211017/ed1e84565d06443d91ff164b52b21ea1.png'
      }
      // 导入会员
      if([3,4].includes(obj?.popupWindowType)){
        return 'https://jdz.g1999.com/ghs/20220223/278a5f4045cb4e2f84bd121f7cdd0120.png'
      }
    },
    getPopup(){
      if(this.refresh){
        this.memberPopup()
      }
      return ''
    },
    // 获取弹窗title
    getTitle(){
      const obj = this.popupInfo || {}
      if(obj.popupWindowType == 2){
        if(obj.integralRatio){
          return `今天购买商品可获得${obj.integralRatio}倍积分`
        }
        return  '为您准备了专属生日礼包'
      }
    }
  },
  methods:{
    ...mapMutations(['setVipPopupList']),
    // 关闭弹窗
    cardClose(){
      this.cardShow = false
      setTimeout(()=>{
        this.popupControl()
      },500)
    },
    // 获取弹窗信息
    async memberPopup(){
      const res = await this.$http.memberPopup({type:this.type})
      const list = this.getVipPopupList || []
      if(res?.dataInfo){
        this.setVipPopupList(list.concat(res?.dataInfo || []))
      }
      // else{
      //   this.setVipPopupList([
      //     {
      //       gradeLevel:0,
      //       integralRatio:null,
      //       jumpType:3,
      //       mspageId:null,
      //       popupWindowStyle:null,
      //       popupWindowType:1,
      //     }
      //   ])
      // }
      if(!this.cardShow){
        this.popupControl()
      }
    },
    // 弹窗控制
    popupControl(){
      const list = this.getVipPopupList
      if(list.length>0){
        let obj = list[0]
        this.popupInfo = obj
        this.cardShow = true
        list.splice(0,1)
        this.setVipPopupList(list)
      }
    },
    // 弹窗点击事件
    popupClick(){
      const obj = this.popupInfo || {}
      const type = obj.jumpType
      if(type == 1){
        this.goTo(`/pages/home/miniPage?id=${obj.mspageId}`)
        this.cardShow = false
        return
      }
      if(type == 2){
        this.goTo(`/pagesA/mine/myCoupon`)
        this.cardShow = false
        return
      }
      if(type == 3){
        if(obj.popupWindowType == 2){
          this.cardClose()
          return
        }
        this.goTo('/pages/vipCenter/index',true)
        this.cardShow = false
      }
      this.cardClose()
    },
  }
}
</script>

<style lang="scss" scoped>
.mask{
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999999999991;
}
.card-wrap{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.popup-title{
  position: absolute;
  top: 132rpx;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24rpx;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #E9D1AE;
}
.vip-title{
  width: 100%;
  text-align: center;
  position: absolute;
  top: 64rpx;
  left: 50%;
  transform: translateX(-50%);
  .tip{
    font-size: 32rpx;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: #C8AD7E;
  }
  .data{
    margin-top: 0rpx;
    font-size: 24rpx;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #C8AD7E;
  }
}
</style>
