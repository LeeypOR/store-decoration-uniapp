<template>
  <view class="invite-friend u-flex">
    <view class="title u-flex">
		<view class="">
			本团将于
		</view>
		<u-count-down :timestamp="peopleInfo.countDownGroupEndTime" font-size="32" color="#E1544A" separator-size="32" separator-color="#E1544A" separator="zh"  :show-hours="showCountHour(peopleInfo.countDownGroupEndTime)"  ></u-count-down>
	    <view class="">
	    	后失效
	    </view>
	</view>
    <image-list :type="peopleInfo.groupActivityCreateType" :list="peopleInfo.groupMemberList"></image-list>
    <view class="tip">还差<text class="color-red">{{peopleInfo.differenceNum}}人</text>成团，赶快邀请好友加入吧</view>
    <!-- <view class="invite-btn">立即邀请好友</view> -->
	<button class="invite-btn" :data-groupId="peopleInfo.groupId" type="default"  open-type="share">立即邀请好友</button>
  </view>
</template>

<script>
import ImageList from "../components/imageList";
export default {
  components: {ImageList},
  props:{
  	  peopleInfo:{
  		  type:Object,
  		  default:null
  	  }
  }	,
  data(){
	  return{
		  
	  }
  },
}
</script>

<style lang="scss" scoped>
.color-red{
  color: #E1544A!important;
}
.invite-friend{
  width: 100%;
  margin-top: 20rpx;
  flex-direction: column;
  padding: 32rpx 30rpx 50rpx;
  background-color: #ffffff;
  .title{
    margin-bottom: 30rpx;
    font-size: 32rpx;
    color: #666666;
  }
  .tip{
    margin-top: 18rpx;
    font-size: 30rpx;
    font-weight: 500;
    color: #191919;
  }
  .invite-btn{
    width: 100%;
    margin-top: 30rpx;
    // padding: 24rpx 0 ;
    text-align: center;
    background: #E8B759;
    border-radius: 45rpx;

    font-size: 32rpx;
    font-weight: 500;
    color: #FFFFFF;
  }
}
</style>