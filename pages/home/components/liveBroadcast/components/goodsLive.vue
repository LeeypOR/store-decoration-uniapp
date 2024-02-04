<template>
	<view class="" v-if="goodsList && goodsList.length">
		<view class="u-flex u-relative"
          style="overflow: hidden"
          @click="goLive(goodsList[0])"
          :class="[{'showBorder':dataInfo.showBorder},{'borderRounding':dataInfo.borderRounding=='2'},'wrap'] " >
		   <image  class="poster"  :src="getLiveImage"/>
		   <view  class="wrap-left u-flex">
         <view class="goods">
             <view v-for="(item,index) in getGoodsList"
                   class="u-flex u-row-center goods-content"
                   v-if="item &&　index<2" @click="goGoods(item)">
               <image :src="item.coverImgLocal" class="goods-img"></image>
               <view class="price-name">
                 {{getPrice(item)}}
               </view>
             </view>
         </view>
			   <view class="desc u-line-2">{{goodsList[0].name}}</view>
		   </view>
      <view class="u-absolute live-card-title">
        <text class="title" :style="[mapLiveState(goodsList[0])]" >{{mapLiveState(goodsList[0]).name}}</text>
        <text class="time" v-if="goodsList[0].liveStatus && goodsList[0].distanceStartTime>0">{{getTime(goodsList[0].distanceStartTime)}}后开播</text>
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
		  // 获取直播间图片
      getLiveImage(){
        const obj = this.goodsList[0]
        if(obj?.shareImgLocal){
          return obj.shareImgLocal
        }
        return obj.shareImg
      },
		  // 获取金额
      getPrice(){
        return (item={}) =>{
          if(item.priceType == 1){
            return `￥${this.switchMoney(item.price)}`
          }
          if(item.priceType == 2){
            return `￥${this.switchMoney(item.price)}~￥${this.switchMoney(item.price2)}`
          }
          if(item.priceType == 3){
            return `￥${this.switchMoney(item.price2)}`
          }
        }
      },
		  // 获取直播商品列表
		  getGoodsList(){
        const obj = this.goodsList[0]
        let list = obj?.productList || []
        let reList = list.filter(item =>{
          if(item.id){
            return true
          }
          return false
        })
        return reList
      },
      // 映射直播状态直播间状态 [101：直播中，102：未开始，103已结束，104禁播，105：暂停，106：异常，107：已过期]
      mapLiveState(){
        return (item={}) =>{
          const type = item.liveStatus
          const time = item.distanceStartTime
          if(type =='101'){
            return{
              name:'直播中',
              background:'#EC4545'
            }
          }
          if(type =='102'){
            if(time>0){
              return{
                name:'預告',
                background:'#D1B085'
              }
            }
            return{
              name:'未开始',
              background:'#EC4545'
            }
          }
          if(type == '103'){
            return{
              name:'查看回放',
              background:'rgba(0,0,0,.5)'
            }
          }
        }
      }
    },
    methods:{
      goGoods(item={}){
        if(item.url){
          this.goTo('/'+item.url)
        }
      },
      goLive(item={}){
        const roomId = item.roomId
        const userInfo = this.$globleData?.userData || {}
        const param ={
          userId: userInfo.id || '',
          roomId: roomId,
          wechatId:item.anchorWechat
        }
        let customParams = encodeURIComponent(JSON.stringify(param))
        uni.setStorageSync('moduleDate', {jumpPageName:item?.name || '直播间' ,moduleName:'直播组件'});
        uni.navigateTo({
          url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}&custom_params=${customParams}`
        })
      },
    }
	}
</script>
<style lang="scss" scoped>
	.wrap{
	    width: 640rpx;
	    height: 374rpx;
	    background: #FFFFFF;
		//display: inline-block;
		margin-right: 30rpx;
		position: relative;
		.live{
			position: absolute;
			top: 20rpx;
			left: 10rpx;
			z-index: 33;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 90rpx;
			height: 36rpx;
			background: #EC4545;
			border-radius: 4rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
		.unStart{
			position: absolute;
			top: 20rpx;
			left: 10rpx;
			z-index: 33;
			display: flex;
			.notice{
				width: 68rpx;
				height: 36rpx;
				background: #D1B085;
				border-radius: 4rpx 0px 0px 4rpx;
				font-size: 22rpx;
				font-weight: 400;
				color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.start-time{
				padding: 4rpx 6rpx;
				height: 36rpx;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 0px 4rpx 4rpx 0px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20rpx;
				font-weight: 400;
				color: #FFFFFF
			}
		}
		.payBack{
			position: absolute;
			top: 20rpx;
			left: 10rpx;
			z-index: 33;
			width: 112rpx;
			height: 36rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgba(0, 0, 0, 0.5);
			border-radius: 4rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
	    .poster{
	        width: 56%;
	        height: 100%;
			display: inline-block;
	    }
		.wrap-left{
			padding: 30rpx;
			//display: inline-block;
      justify-content: space-between;
      flex-direction: column;
      align-items: normal;
			width: 43.75%;
			height: 100%;
			vertical-align: top;
			.goods{
        display: flex;
        justify-content: space-between;
        width: 100%;
        //align-items: normal;
				.goods-content{
					//width: 100%;
					flex-direction: column;
				}
				.goods-img{
					width: 100rpx;
					height: 100rpx;
					border-radius: 4rpx;
				}
        .price-name{
          width: 100rpx;
          font-size: 26rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #191919;
          text-align: center;
          overflow: hidden;
        }
			}
			.desc{
        width: 100%;
				//margin-top: 100rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #191919;
        white-space: pre-wrap;
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
