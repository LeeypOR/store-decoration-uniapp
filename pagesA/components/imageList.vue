<template>
  <view class="image-list u-flex">
    <view :class="list.length<=1?'right':'right-more'">
		<view v-if="type!=2" class="group-leader">
			团长
		</view>
      <image   :src="item.userAvatar" v-for="(item,index) in reverseList" v-if="index<=3 " :style="{'z-index':(10-index)}"></image>
      <text class="iconfont icon-icon_shenglue" v-if="list.length>1"></text>
    </view>
    <image class="no-crew" src="@/static/image/icon_no_crew.png"></image>
  </view>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      default:()=>[]
    },
	type:{
		type:Number,
		default:0
	}
  },
  computed:{
	  reverseList(){
		 const list = (this.list || []).reverse()
		 return list
	  }
  },
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
.image-list{
  justify-content: center;
  image{
    position: relative;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  
  .right{
    position: relative;
    margin-right: 30rpx;
    &-more{
      position: relative;
      image{
        margin-right: -30rpx;
        &:nth-last-of-type(1){
          filter: contrast(15%)
        }
      }
	  .group-leader{
	  	position: absolute;
	  	top: 0;
	  	left: -10%;
	  	z-index: 11;
	  	  
	  	font-size: 20rpx;
	  	font-weight: 500;
	  	color: #FFFFFF;
	  	background: #E8B759;
	  	border-radius: 15rpx;
	  	padding: 2rpx 10rpx;
	  	}
      // &:before{
      //   content: '团长';
      //   position: absolute;
      //   top: 0;
      //   left: -10%;
      //   z-index: 11;

      //   font-size: 20rpx;
      //   font-weight: 500;
      //   color: #FFFFFF;
      //   background: #E8B759;
      //   border-radius: 15rpx;
      //   padding: 2rpx 10rpx;
      // }
    }
	.group-leader{
		position: absolute;
		top: 0;
		left: -10%;
		z-index: 11;
		  
		font-size: 20rpx;
		font-weight: 500;
		color: #FFFFFF;
		background: #E8B759;
		border-radius: 15rpx;
		padding: 2rpx 10rpx;
		}
    // &:before{
    //   content: '团长';
    //   position: absolute;
    //   top: 0;
    //   left: -10%;
    //   z-index: 11;

    //   font-size: 20rpx;
    //   font-weight: 500;
    //   color: #FFFFFF;
    //   background: #E8B759;
    //   border-radius: 15rpx;
    //   padding: 2rpx 10rpx;
    // }
  }
  .no-crew{
    z-index: 0;
  }
}
.icon-icon_shenglue{
  position: absolute;
  color: #ffffff;
  right: 0;
  z-index: 13;
  top: 50%;
  transform: translatey(-50%) translateX(30%);
  font-size: 80rpx;
}
</style>