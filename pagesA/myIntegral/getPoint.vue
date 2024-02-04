<template>
	<view class="container">
		<view class="head">
			<image class="bg-img" src="../static/image/bg_jifen.png"></image>
			<u-navbar class="location-class" :border-bottom="false" title="我的积分" title-bold title-color="#ffffff"
			          title-size="36" background="{ background: '#00000000' }"
			          back-icon-color="#ffffff"  />
			<view class="my-number">{{currentIntegrate}}积分</view>
		    <view class="message">
		    	当前积分
		    </view>
		</view>
		<view class="content  u-flex-1">
			<view class="head">
				<image class="ear-iamge" src="../static/image/icon_jifen_bg.png" ></image>
				<view class="title">
					赚取积分攻略
				</view>
				 <view class="desc">
				 	马上做任务来赚取只属于您的积分吧
				 </view>
			</view>
			<view class="item" v-for="(item,index) in contentList" :key="index">
				<view class="item-left">
					<image :src="item.url" ></image>
				</view>
				<view class="item-right">
					<view class="wrap">
						<view >
							{{item.name}}
						</view>
						<view >
							{{item.desc}}
						</view>
					</view>
					<view @click="goUrl(item)" v-if="item.enableComplete !=null" :class="item.enableComplete==0?'btn':'disBtn'">
						{{item.enableComplete==0?'去完成':'已完成'}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default{
		data(){
			return{
			  title:'积分攻略',
				contentList:[],
				currentIntegrate:0

			}
		},
		onShow(){
			this.integrateEarn()
		},
		methods:{
			goUrl(item){
				if(item.enableComplete == 1){
					return
				}
				if(item.source == 4){
					this.goTo('/pagesA/mine/userInfo')
				}else if(item.source == 2 || item.source == 5){
					this.goTo('/pages/category/index',true)
				}else if(item.source == 3){
					this.goTo('/pagesA/mine/myOrder')
				}
			},
			async integrateEarn(){

				let {dataInfo:res} = await this.$http.integrateEarn({id: this.$globleData.userData.id})
				let data = res?.list || []
        this.currentIntegrate  = res?.currentIntegrate || 0
				this.contentList = []
				data.forEach(item=>{
          if(item.source == 1){
            this.contentList.push({
              url:'../static/image/icon_long.png',
              name:'商城登录',
              desc:`登录可得${item.integrate}积分，最多${item.cellTimes}次/天`,
              enableComplete:item.enableComplete,
              source:item.source
            })
          }
          else if(item.source == 2){
						this.contentList.push({
							url:'../static/image/icon_share.png',
							name:'分享商品',
							desc:`分享商品可得${item.integrate}积分`,
							enableComplete:item.enableComplete,
							source:item.source
						})
					}else if(item.source == 3){
						this.contentList.push({
							url:'../static/image/icon_pingjia.png',
							name:'评价商品',
							desc:`评价商品可得${item.integrate}积分`,
							enableComplete:item.enableComplete,
							source:item.source
						})
					}else if(item.source == 4){
						this.contentList.push({
							url:'../static/image/icon_xinxi.png',
							name:'完善信息',
							desc:`完善信息可得${item.integrate}积分`,
							enableComplete:item.enableComplete,
							source:item.source
						})
					}else if(item.source == 5){
						this.contentList.push({
							url:'../static/image/icon_may.png',
							name:'首单商品',
							desc:`购买首单商品可得${item.integrate}积分`,
							enableComplete:item.enableComplete,
							source:item.source
						})
					}

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		height: 100vh;
		display: flex;
		width: 100%;
		flex-direction: column;
		.head{
			position: relative;
			width: 100vw;
			.bg-img{
				width: 100vw;
				height: 464rpx;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
			}
			.my-number{
				width: 100%;
				text-align: center;
				font-size: 48rpx;
				padding-top: 30rpx;
				font-weight: 600;
				color: #FFFFFF;
			}
			.message{
				width: 100%;
				text-align: center;
				font-size: 32rpx;
				padding-top: 5rpx;

				font-weight: 400;
				color: #999999;
			}
		}
		.content{
			width: 690rpx;
			flex: 1;
			margin: 30rpx auto;
			background: #FFFFFF;
			border-radius: 14rpx 14rpx 2rpx 2rpx;
			.head{
				padding: 42rpx 0 0 30rpx;
				height: 153rpx;
				position: relative;
				.ear-iamge{
					position: absolute;
					top: 30rpx;
					left: 30rpx;
					z-index: 0;
					width: 300rpx;
					height: 50rpx;
				}
				.title{
					font-size: 36rpx;
					font-weight: 600;
					color: #191919;
					line-height: 50rpx;
				}
				.desc{
					font-size: 26rpx;
					color: #999999;
					line-height: 37rpx;
				}
			}
			.item{
				display: flex;
				height: 146rpx;
				.item-left{
					width: 160rpx;
					display: flex;
					align-items: center;
					justify-content:center;
					image{
						width: 90rpx;
						height: 90rpx
					}
				}
				.item-right{
					flex: 1;
					padding-right: 30rpx;
					border-bottom: 1rpx solid #CCCCCC;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.wrap{
						view{
							&:first-child{
								font-size: 28rpx;
								font-weight: 500;
								color: #191919;
							}
							&:last-child{
								font-size: 26rpx;
								font-weight: 400;
								color: #999999;
							}
						}
					}
					.btn{
						width: 144rpx;
						height: 70rpx;
						background: #d1b085;
						border-radius: 45rpx;
						display: flex;
						justify-content: center;
                        align-items: center;
						font-size: 28rpx;
						font-weight: 400;
						color: #FFFFFF;
					}
					.disBtn{
            color: #ffffff;
						width: 144rpx;
						height: 70rpx;
						background: #cccccc;
						border-radius: 45rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 28rpx;
						font-weight: 400;
						//color: #191919;
					}
				}
			}
		}
	}
</style>
