 <template>
	<view class="container u-flex">
		<view class="head">
			<u-navbar class="location-class" :border-bottom="false" title="权益卡" title-bold
				title-color="#191919" :background="{background:'#00000000'}" title-size="36" back-icon-color="#000000"></u-navbar>

			<image class="bg-img" :src="require('../static/equityCard/qietu_qunayika_bg.png')"></image>
			<view class="user">
				<view class="u-flex u-row-between">
					<view class=" u-flex">
						<image class="user-img" :src="userInfo.avatar||'../static/equityCard/middle_modalbox_icon_touxiang.png'"></image>
					    <view class="nick-name">
              {{userInfo.nickName || '昵称'}}
					    </view>
					</view>
					<view @click="exchangeShow = true" class="cash-card">
						兑卡
					</view>
				</view>

			</view>
		</view>
    <view class="content u-flex-1">
      <view class="u-flex u-row-between">
        <view class="title-left">我的权益卡</view>
        <view @click="goTo('/pagesB/equityCard/cardCenter?cardStatus=3')" class="u-flex title-right">
          <text class="">历史卡券</text>
          <text class="iconfont icon-arrow"></text>
        </view>
      </view>
      <card-com :cardType="cardStatus" :cardList="cardList"></card-com>
    </view>
		<view class="seat"></view>
		<view class="bottom u-flex">
			<view @click="goTo('/pagesB/equityCard/cardCenter?cardStatus=2')" class="bottom-left u-flex u-row-center">
				权益卡中心
			</view>
			<view class="line">

			</view>
			<view @click="goTo('/pagesB/equityCard/cardCenter?cardStatus=3')" class="bottom-right u-flex u-row-center u-flex-1">
				历史卡券
			</view>
		</view>
		<!-- 兑卡弹窗 -->
		<u-popup v-model="exchangeShow " mode="center ">
				<view class="warp" @click="exchangeShow = false">
					<view class="rect" @tap.stop>
						<view class="title">
							输入兑换码
						</view>
						<view class="text-area">
							<input type="text" placeholder-style="" placeholder="请输入兑换码" placeholder-class="input-placeholder" v-model="exchangeValue" />
						</view>
						<view class="u-flex btn-group">
							<view @click="exchangeShow = false" class="cancel-btn u-flex u-row-center">
								取消
							</view>
							<view @click="$u.throttle(exchangeConfirm,1000)" class="confirm-btn u-flex u-row-center">
								确认
							</view>
						</view>
					</view>
				</view>
			</u-popup>
	</view>
</template>

<script>
	import cardCom from './components/card.vue'
	export default{
		components:{
			cardCom
		},
		data(){
			return{
			  title:'权益卡',
				cardStatus:1,
				cardList:[],
				userInfo:{},
				exchangeShow:false,
				exchangeValue:"",
			}
		},

		onShow() {
			 this.userInfo = this.$globleData.userData
			this.equityCardList()
		},
		methods:{
			// 获取权益列表
			async equityCardList(){
				let res = await this.$http.getCardList({status:this.cardStatus})
				this.cardList = res.dataInfo
			},
			async exchangeConfirm(){
        if(!this.exchangeValue){
          this.$toast('请输入兑换码')
          return
        }
				let res = await this.$http.exchangeCard({redemptionCode:this.exchangeValue})
				if(res.returnCode == 1000){
					this.$toast('兑换成功')
					this.exchangeShow = false
					this.equityCardList()
				}else{
					this.$toast('兑换码输入错误或已过期')
				}
			}
		}
	}
</script>
<style lang="scss">
  page{
    background: #ffffff;
  }
</style>
<style lang="scss" scoped>
	.container{
		flex-direction: column;
		height: 100vh;
		.head{
			position: relative;
			width: 100vw;
			height: 26.52vh;

			.bg-img{
				position: absolute;
				z-index: -1;
				top: 0;
				width: 100vw;
				height: 26.52vh;
			}
			.user{
				position: absolute;
				width: 100%;
				bottom: 15.58%;
				padding: 0 70rpx;
				.user-img{
					border-radius: 50%;
					width: 100rpx;
					height: 100rpx;
				}
				.nick-name{
					font-size: 36rpx;
					font-weight: 600;
					margin-left: 30rpx;
					color: #FFFFFF;
				}
				.cash-card{
					border-radius: 30rpx;
					border: 2rpx solid #FFFFFF;
					padding: 10rpx 30rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #FFFFFF;
				}
			}
		}
		.content{
			padding: 0 30rpx;
			margin-top: 30rpx;
			//margin-bottom: 30rpx;
			width: 100%;
			overflow-y: scroll;
			.title-left{
				font-size: 32rpx;
				font-weight: 600;
				color: #191919;
			}
			.title-right{
				font-size: 28rpx;
				color: #999999;
			}
			.icon-arrow{
				margin-left: 8rpx;
			}

		}
		.seat{
			height: iphone-bottom(98rpx);
		}
		.bottom{
			position: fixed;
			bottom: 0;
			width: 100%;
      padding: 28rpx 0 iphone-bottom(30rpx);
			background: #FFFFFF;
			font-size: 28rpx;
			font-weight: 600;
			color: #191919;
			.bottom-left{
				width: 50%;
			}
			.line{
				width: 2rpx;
				height: 20rpx;
				background: #E6E6E6;
			}
		}
	}
	// 兑换框
	.warp {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
      border: 1px solid transparent;
		}

		.rect {
			width: 630rpx;
			height: 423rpx;
			background: url(../static/equityCard/qietu_duikatk_bg.png) no-repeat;
			background-size: 100% 100%;
			.title{
				font-size: 30rpx;
				text-align: center;
				padding: 30rpx 0 40rpx 0;
				font-weight: 600;
				color: #191919;
			}
			.text-area{
				// width: 530rpx;
				// height: 90rpx;
				// margin: 0 auto;
				// margin-bottom: 101rpx;
				// background: #FFFFFF;
				// border-radius: 14rpx;
				// border: 2rpx solid #191919;
				/deep/input{
					width: 530rpx;
					height: 90rpx;
					margin: 0 auto;
					margin-bottom: 101rpx;
					border-radius: 14rpx;
					padding-left: 20rpx;
					border: 1px solid #191919;
					// display: flex;
					// justify-content: center;
					// align-items: center;
				}
				/deep/.input-placeholder{
					font-size: 30rpx;
					color: #999999;
					line-height: 0;
					min-height: 0;
				}

			}

			.btn-group{
				width: 100%;
				.cancel-btn{
					width: 240rpx;
					height: 80rpx;
					margin-left: 50rpx;
					background: #D1B085;
					border-radius: 14rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #FFFFFF;

				}
				.confirm-btn{
					width: 240rpx;
					height: 80rpx;
					margin-left: 50rpx;
					background: #191919;
					border-radius: 14rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #FFFFFF;
				}

			}
		}
</style>
