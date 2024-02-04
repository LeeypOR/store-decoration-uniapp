<template>
	<view class="">
    <view v-for="(item,index) in endData"
          class="u-relative"
          style="overflow: hidden"
          v-if="['101','102','103'].includes(item.liveStatus)"
          :class="['common-live',{'water-live':getDataInfo.listStyle=='3'},{'showBorder':getDataInfo.showBorder},{'borderRounding':getDataInfo.borderRounding=='2'}]"
          :style="[formStyle]">
      <image @click="goLive(item)" :src="getLiveImage(item)" :mode="imgMode"
             :class="['roomPicture',{'borderRounding':getDataInfo.borderRounding=='2'}]" :style="{height:getDataInfo.listStyle=='3'?'320rpx':'264rpx'}"></image>
      <view class="desc  u-line-2" :style="{height:getDataInfo.listStyle=='3'?'':'70rpx'}">{{ item.name }}</view>
      <view v-if="getDataInfo.listStyle=='3'" class="share u-flex">
        <text class="iconfont icon-app_icon_share"></text>
        <text class="share-title">分享</text>
        <button open-type="share" :data-sharLiveData="item" class="share-btn" hover-class="none" type="default"></button>
      </view>
      <view class="u-absolute live-card-title">
        <text class="title" :style="[mapLiveState(item)]" >{{mapLiveState(item).name}}</text>
        <text class="time" v-if="item.liveStatus && item.distanceStartTime>0">{{getTime(item.distanceStartTime)}}后开播</text>
      </view>
    </view>
    <view :class="['common-live','live-more',{'water-live':getDataInfo.listStyle=='3'},{'showBorder':getDataInfo.showBorder},{'borderRounding':getDataInfo.borderRounding=='2'}]"
          :style="[formStyle]" v-if="getDataInfo && getDataInfo.showDefault" @click="seeMoreLive">
      <view style="display: inline-block;vertical-align: middle;">
        <view class="iconfont icon-icon_zhibo_gengduo"></view>
        <view class="text-more">更多直播</view>
      </view>
    </view>
	</view>
</template>

<script>
	import mixin from '../../../mixin.js'
	export default{
		mixins: [mixin],
		props:{
		   dataInfo:{
			   type:Object,
			   default:null
		   },
		   goodsList:{
			   type:Array,
			   default:()=>[]
		   }
		},
		computed:{
      // 获取直播间图片
      getLiveImage(){
        return (obj={})=>{
          if(obj?.shareImgLocal){
            return obj.shareImgLocal
          }
          return obj.shareImg
        }
      },
		  getTime(){
        return (msec=0) =>{
          msec = msec/1000
          const d = parseInt(msec / 24 / 60 / 60)
          const h = parseInt(msec / 60 / 60 % 24)
          const m = parseInt(msec / 60 % 60)
          const s = parseInt(msec % 60)
          if(d>0){
            return `${d}天`
          }
          if(h>0){
            return `${h}小时`
          }
          if (m > 0) {
            return `${m}分`
          }
          if (s > 0) {
            return `${s}秒`
          }
        }
      },
			formStyle(){
				if(this.dataInfo && this.dataInfo.listStyle == '3'){
					return{
						'margin-top':this.getDataInfo.productPadding*this.pxToRpxScale+'rpx',
					}
				}else{
					return{
						'margin-right':this.getDataInfo.productPadding*this.pxToRpxScale+'rpx'
					}
				}
			},
			imgMode(){
				if(this.dataInfo && this.dataInfo.listStyle == '3'){

					return 'aspectFill'
				}else{

					return 'aspectFill'
				}
			},
			getDataInfo(){
			  let parent = this.$parent?.dataInfo || null
			  if(!parent){
			    parent = this.$parent?.$parent?.dataInfo || null
			  }
			  if(!parent){
			    parent = this.$parent?.$parent?.$parent?.dataInfo || null
			  }
			  this.dataInfo = parent
			  return parent
			},
      // 映射直播状态直播间状态 [101：直播中，102：未开始，103已结束，104禁播，105：暂停，106：异常，107：已过期]
      mapLiveState(){
			  return (item={}) =>{
          const type = item.liveStatus
          const time = item.distanceStartTime
          if(type ==101){
            return{
              name:'直播中',
              background:'#EC4545'
            }
          }
          if(type ==102){
            if(time>0){
              return{
                name:'预告',
                background:'#D1B085'
              }
            }
            return{
              name:'未开始',
              background:'#EC4545'
            }
          }
          if(type ==103){
            return{
              name:'查看回放',
              background:'rgba(0,0,0,.5)'
            }
          }
        }
      }
		},
		watch:{
			goodsList:{
				handler(val){
					if(this.dataInfo && this.dataInfo.listStyle == '1'){
						this.endData = val.slice(1)
					}else{
						this.endData = val
					}
				},
				immediate:true
			}
		},
		data(){
			return{
				endData:[],
        userInfo:{}
			}
		},
		created() {
      this.userInfo = this.$globleData.userData || {}
		},
		methods:{
			goLive(item={}){
			  const roomId = item.roomId
			  const param ={
          userId: this.userInfo.id || '',
          roomId: roomId,
          wechatId:item.anchorWechat
        }
        let customParams = encodeURIComponent(JSON.stringify(param))
        uni.setStorageSync('moduleDate', {jumpPageName:item?.name || '直播间' ,moduleName:'直播组件'});
				uni.navigateTo({
				    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}&custom_params=${customParams}`
				})
			},
      // 查看跟多直播
      seeMoreLive(){
        this.jumpToPage(this.dataInfo)
      }
		}
	}
</script>

<style lang="scss" scoped>
	.common-live{
		display: inline-block;
		width: 264rpx;
		height: 374rpx;
		background: #FFFFFF;
    vertical-align: top;
    .roomPicture{
      width: 100%;
      height: 264rpx;
    }
		&.live-more{
			vertical-align: top;
			text-align: center;
			.icon-icon_zhibo_gengduo{
				margin-top: 128rpx;
				margin-bottom: 22rpx;
				font-size: 60rpx;
			}
			.text-more{
				font-size: 28rpx;
				color: #999999;
			}
		}
		&.water-live{
			display: inline-block;
			width:100%;
      height: auto!important;
      min-height: 360rpx!important;
			background: #FFFFFF;
		}
		image{
			width: 100%;
			height: 264rpx;
		}
		.desc{
			//width: 230rpx;
			//height: 70rpx;
			margin: 14rpx;
			white-space: pre-wrap!important;
			//display: flex;
      //align-items: flex-start;
      //justify-content: center;
			font-size: 28rpx;
			font-weight: 500;
			color: #191919;
		}
		.share{
      margin-bottom: 10rpx;
			padding-left: 20rpx;
			position: relative;
			.icon-app_icon_share{
				font-size: 36rpx;
			}
			&:last-of-type{
				font-size: 24rpx;
				color: #999999;
			}
      .share-title{
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
			.share-btn{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: transparent;
        opacity: 0;
				z-index: 3;
			}
		}
	}
	.showBorder{
		border: 2rpx solid #C8C8C8;
	}
	.borderRounding{
		border-radius: 14rpx;
	}
  .live-card-title{
    top: 16rpx;
    left: 10rpx;
    .title{
      display: inline-block;
      padding:  6rpx 10rpx;
      font-size: 22rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      background: red;
    }
    .time{
      padding:  6rpx 10rpx;
      display: inline-block;
      font-size: 22rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0px 4rpx 4rpx 0px;
    }
  }
</style>
