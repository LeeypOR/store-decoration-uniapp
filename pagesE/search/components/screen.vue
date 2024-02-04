<template>
  <view class="u-flex tabs-list">
    <view class='item u-flex' :class="{active:tabs[currentIndex].name == item.name}"
          v-for="(item,index) in tabs"
          @click="tabsClick(item,index)">
      {{ item.name }}
      <view class="u-flex icon" :class="item.iconClass">
          <text v-if="item.icon1" class="iconfont" :class="[item.icon1,{'icon-active':!iconIsActive}]"></text>
          <text  class="iconfont" :class="[item.icon,{'icon-active':iconIsActive}]"></text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      tabs:[
        {
          type:1,
          name:'综合',
          icon1:'',
          icon:'icon-app_icon_xiala',
          iconClass:'icon-one'
        },
        {
          type:1,
          name:'销量',
          icon1:'icon-app_icon_shouhui',
          icon:'icon-app_icon_xiala',
          iconClass:'icon-two'
        },
        {
          type:1,
          name:'价格',
          icon1:'icon-app_icon_shouhui',
          icon:'icon-app_icon_xiala',
          iconClass:'icon-two'
        },
        {
          type:1,
          name:'库存',
          icon1:'icon-app_icon_shouhui',
          icon:'icon-app_icon_xiala',
          iconClass:'icon-two'
        }
      ],
      currentIndex:0,                 // 当前选中tabs的索引
      iconIsActive:true               // true 降 false 升
    }
  },
  methods:{
    tabsClick(item,index){
      if(this.currentIndex == index){
        if(item?.icon1){
          this.iconIsActive = !this.iconIsActive
          return
        }
      }
      this.iconIsActive = item?.icon1 ? false : true
      this.currentIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-list{
  padding: 0 40rpx;
  margin-top: 18rpx;
  margin-bottom: 24rpx;

  font-size: 28rpx;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  color: #272829;
  .item{
    width: 96rpx;
    margin-right: 100rpx;
    &:last-of-type{
      margin-right: 0;
      flex: 1;
      justify-content: flex-end;
    }
    &:first-of-type{
      justify-content: flex-start;
    }
  }
  .active{
    font-size: 28rpx;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #0091ff;
    .icon-active{
      color: #0091ff;
    }
  }
}
.icon{
  flex-direction: column;
  margin-left: 8rpx;
  color: #272829;
}
.icon-one{
  .iconfont{
    font-size: 20rpx!important;
  }
}
.icon-two{
  .iconfont{
    font-size: 16rpx!important;
  }
}
</style>