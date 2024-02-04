<template>
	<view class="payMemberCenter safe-area-inset-bottom">
		<image class='top-bg-img' src="/pagesB/static/images/payMember/qietu_huiyuankongjian_bg.png"></image>
		<u-navbar
			:border-bottom="false"
			title="会员空间"
			title-color="#FFFFFF"
			title-size="36"
			back-icon-color="#FFFFFF"
			background="transparent"
		></u-navbar>
		<view class="top-card u-flex" > 
			<image class='member-bg' src="/pagesB/static/images/payMember/middle_modalbox_VIPcard_bg_10.png"  mode="widthFix"></image>
			<view class="content u-flex">
				<image class='card-icon' :src="cardIcon" ></image>
				<view>
					<p v-if="cardType" class="card-name">{{cardName + formatDate(cardType)}}会员</p>
					<p v-else class="card-name">{{cardName}}</p>
					<p v-if="expireDate" class="card-date">{{expireDate}}到期</p>
				</view>
			</view>
		</view>
		<view class="buyHistory">会员购买记录</view>
		<view v-if="list.length > 0">
			<view class="card-list" v-for="(item, index) in list" :key="index" @click="cardDetails(item)">
				<image class='list-bg' v-if="item.cardStatus == 1" src="/pagesB/static/images/payMember/qietu_huiyuangoumai_bgjin.png"></image>
				<image class='list-bg' v-else src="/pagesB/static/images/payMember/qietu_huiyuangoumai_bghui.png"></image>
				<view class="state">{{formatStatus(item.cardStatus)}}</view>
				<p class="name">{{item.cardName + formatDate(item.periodUnit)}}会员</p>
				<p class="time">有效期：{{item.startDate}}-{{item.endDate}}</p>
				<view class="buyInfo u-flex">
					<text class="payTime">{{item.payDate}}支付成功</text>
          <text v-if="item.receiveWay == 2" class="card-name-t">体验卡</text>
					<view class="payMoney" v-else>实付¥<text class="payMoney-money">{{switchMoney(item.price)}}</text></view>

				</view>
			</view>
		</view>
		<no-data v-else></no-data>
	</view>
</template>

<script>
import NoData from "../../components/noData.vue";
	export default {
		components: { NoData },

		data () {
			return {
				statusBarHeight: getApp().globalData.navbarHeight,
				cardIcon: '',
				cardName: '',
				cardType: null, 
				expireDate: '', //到期时间
				list: [],
				cardId: '', // 卡id
			}
		},
		onLoad(option){
			this.cardId = option?.cardId || ''  
		},
		onShow () { 
			this.memberBuySpace()
		},
		methods: {
			// 查询会员购买记录和会员到期时间
			async memberBuySpace() {
				let res = await this.$http.memberBuySpace({})
				this.list = res.dataInfo.buyRecordResponseList
				this.expireDate = res.dataInfo.expireDate
				// 会员名和会员图片
				this.cardIcon = res.dataInfo?.gradeIcon
				this.cardName = res.dataInfo?.cardName
				this.cardType = res.dataInfo?.periodUnit
			},
			formatStatus (val) {
				switch (val) {
					case 1:
						return '待生效';
					case 2:
						return '生效中';
					case 3:
						return '已完成';
				}
			},
			formatDate (val) {
				switch (val) {
					case 1:
						return '年卡'; 
					case 2:
						return '季卡'; 
					case 3:
						return '月卡';  
				}
			},
			cardDetails(item) {
				this.goTo(`/pagesB/payMemberCenter/detail?cardInfo=${JSON.stringify(item)}&cardId=${item.cardId}`)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.payMemberCenter {
	.top-bg-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 370rpx;
	}
    .top-card {
		position: relative;
		top: 22rpx;
		left: 50%;
		transform: translate(-50%);
		width: 690rpx;
		height: 321rpx;
		box-shadow: 0 60rpx 40rpx -40rpx rgba(108,108,108,0.8);
        .member-bg {
			width: 100%;
			height: 100%;
        }
		.content {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			.card-icon {
				margin: 30rpx 20rpx 0 30rpx;
				width: 100rpx;
				height: 100rpx;
			}
			.card-name {
				margin-top: 32rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #D1B085;
				line-height: 45rpx;
			}
			.card-date {
				padding-top: 6rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #957E61;
				line-height: 33rpx;
			}
		}
    }
	.buyHistory {
		margin-top: 83rpx;
		padding-left: 30rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: #191919;
		line-height: 45rpx;
	}
    .card-list {
		margin: 20rpx auto 0;
		width: 690rpx;
		height: 360rpx;
		position: relative;
        .list-bg {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
        }
        .state {
			position: absolute;
			top: 0;
			right: 0;
			width: 98rpx;
			height: 50rpx;
			background: rgba(255,231,200,0.26);
			border-radius: 0rpx 0rpx 0rpx 14rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 50rpx;
        }
        .name {
			padding-top: 60rpx;
			padding-left: 40rpx;
			font-size: 34rpx;
			font-weight: 600;
			color: #FFFFFF;
			line-height: 48rpx;
        }
        .time {
			padding-top: 4rpx;
			padding-left: 40rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 33rpx;
        }
        .buyInfo {
			width: 100%;
			padding: 122rpx 40rpx 0;
			justify-content: space-between;
            .payTime {
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 33rpx;
            }
            .payMoney {
				font-size: 22rpx;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 30rpx;
				.payMoney-money {
					font-size: 34rpx;
					font-weight: 600;
					color: #FFFFFF;
					line-height: 48rpx;
				}
            }
        }
    }
  .card-name-t{
    font-size: 24rpx;
    padding: 8rpx 20rpx;
    background-color: #d8d8d8;
    color: #FFFFFF;
  }
}
</style>
