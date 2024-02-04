<template>
  <view>
    <view class="u-flex item-card" @click.stop="show=true">
      <text class="people-num">{{peopleInfo.groupActivityCompleteNum}}人团</text>
      <view class="right-content u-flex" v-if="peopleInfo.groupMemberList && peopleInfo.groupMemberList.length">
      <view class="img-list" v-for="(item,index) in endData" :key="index">
        <image :src="item.userAvatar" :class="item.groupMemberList.length>4&& id == 3?'last-image':''"></image>
         <view class="num u-flex" v-if="item.groupMemberList.length>4 && id == 3">+{{item.groupMemberList.length-4}}</view>
        </view>
        <text class="iconfont icon-arrow"></text>
      </view>
    </view>
    <u-popup v-model="show"
             mode="center"
             width="630rpx"
             height="60%"
             border-radius="30"
             closeable>
	  		 
      <view class="popup-box u-flex">
		  <view class="head u-flex" v-if="peopleInfo.groupActivityCreateType ==2">
		    <view class="head-business">
		        参与的拼单
		    </view>
		    <view class="complete-num u-flex">
				<view class="">
					已拼人数<text class="join-num">{{peopleInfo.joinNum}}人，</text>
				</view>
			    <view class="">
			    	<u-count-down :timestamp="peopleInfo.countDownGroupEndTime" font-size="30" color="#191919 " separator-size="30" separator-color="#191919 " separator="zh" :show-days="false" ></u-count-down>
			    </view>
			   
			</view>
		    <view class="current-price">
				当前价格<text class="current-money">¥{{switchMoney(peopleInfo.lastGroupPrice)}}</text>
			</view>
		  </view>
        <view v-else class="head u-flex" >
          <view class="head-img-card">
            <image :src="groupLeader.userAvatar"></image>
            <text class="tip">团长</text>
          </view>
          <view class="name">{{groupLeader.userName}}</view>
          <view class="tiem">{{groupLeader.joinTime}}发起拼单</view>
        </view>
        <view class="center u-flex-1">
          <scroll-view scroll-y="true" style="height: 100%;">
			<!-- v-if="isMore || item<5" -->
            <view class="center-item u-flex" v-for="(subItem,index) in peopleInfo.groupMemberList" :key="index" >
              <image :src="subItem.userAvatar || '../static/image/default_avatar.png'"></image>
			  <view class="u-flex u-flex-1 right u-row-between" v-if="peopleInfo.groupActivityCreateType ==2">
			   
				 <view class="">
				 	 <view class="">
				 	 	 {{subItem.userName}}
				 	 </view>
				 	 <view class="time">
				 	 	{{subItem.joinTime}}
				 	 </view>
				 </view>
				 <view class="group-text">
				 	拼团价 <text class="group-price">¥{{switchMoney(subItem.groupBeatPayPrice)}}</text>
				 </view>
			  </view>
              <view class="u-flex u-flex-1 right" v-else>
                <text>{{subItem.userName}}</text>
                <text class="time">{{subItem.joinTime}}拼单</text>
              </view>
            </view>
          </scroll-view>
        </view>
<!--        <view class="click-more" v-if="!isMore" @click="isMore=true">-->
<!--            点击显示更多-->
<!--        </view>-->
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  props:{
	  peopleInfo:{
		  type:Object,
		  default:null
	  }
  }	,
  watch:{
	  peopleInfo:{
		handler (val) {
			let flag = false
		 	this.endData = val.groupMemberList.slice(0,4)
			 val.groupMemberList.map(item=>{
				if(item.type == 1){
				  this.groupLeader = item	
				  flag = true
				}
			})
			if(!flag){
				this.groupLeader = val.groupMemberList[0]
			}
		},
		immediate: true
	  }
  },
  data(){
    return {
      show:false,
      isMore:false,
	  endData:[],
	  groupLeader:null
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card{
  margin-top: 20rpx;
  background-color: #ffffff;
  padding: 30rpx 40rpx 30rpx 30rpx;
  justify-content: space-between;
  .people-num{
    font-size: 24rpx;
    color: #191919;
  }
  .right-content{
    .img-list{
      position: relative;
      margin-left: -20rpx;
	  .last-image{
		&:last-of-type{
			filter: contrast(25%)
		}
	   }
      image{
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
      }
      &:nth-of-type(1){
        margin-left: 0;
      }
      // &:nth-last-of-type(1){
      //   image{
      //     filter: contrast(25%)
      //   }
      // }
      .num{
        justify-content: center;
        position: absolute;
        top:44%;
        left: 50%;
        transform:translate(-50%,-50%);
        font-size: 24rpx;
        color: #FFFFFF;
        justify-content: center;
		
      }
    }
  }
}
.icon-arrow{
  font-size: 38rpx;
  margin-left: 0rpx;
}

.popup-box{
  overflow-y: hidden;
  padding-top:40rpx ;
  flex-direction: column;
  height: 60vh;
  .head{
    padding-bottom: 14rpx;
    flex-direction: column;
	.head-business{
		font-size: 32rpx;
		color: #191919;
		font-weight: 600;
		
	}
	.complete-num{
		font-size: 30rpx;
		color: #191919;
		.join-num{
			color: #E1544A ;
		}
	}
	.current-price{
		font-size: 28rpx;
		color: #191919;
		.current-money{
			font-size: 44rpx;
			color: #E1544A;
			margin-left: 10rpx;
		}
	}
    .head-img-card{
      position: relative;
      .tip{
        top: 0;
        left: -20%;
        display: flex;
        justify-content: center;
        line-height: 30rpx;
        position: absolute;
        width: 60rpx;
        height: 30rpx;
        background: #E8B759;
        border-radius: 15rpx;

        font-size: 20rpx;
        font-weight: 500;
        color: #FFFFFF;
      }
    }
    .name{
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #000000;
    }
    .tiem{
      margin-top: 4rpx;
      font-size: 28rpx;
      color: #666666;
    }
  }
  .center{
    overflow-y: scroll;
    width: 100%;
	height: 0;
    &-item{
      padding: 0rpx 30rpx;
      justify-content: space-between;
      .right{
        padding: 45rpx 0;
        margin-left: 24rpx;
        justify-content: space-between;
        border-bottom: 1px solid  #E6E6E6;
		.time{
			color: #666666;
			font-size: 28rpx;
		}
		.group-text{
			font-size: 28rpx;
			color: #000000;
			.group-price{
				color:#E1544A ;
			}
		}
      }
    }
  }
  .click-more{
    padding: 36rpx;
    font-size: 24rpx;
    color: #000000;
  }
  image{
    width: 90rpx;
    height: 90rpx;
    border-radius: 50%;
  }
}
</style>