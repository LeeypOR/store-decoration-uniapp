<template>
	<view class="payMemberCenter-detail safe-area-inset-bottom">
        <u-navbar
			:border-bottom="false"
			title="会员空间详情"
			title-color="#191919"
			title-size="36"
			back-icon-color="#000000"
			background="transparent"
		></u-navbar>
		<view class="card-list">
			<image class='list-bg' src="/pagesB/static/images/payMember/qietu_huiyuangoumai_bgjin.png"></image>
			<view class="state">{{formatStatus(cardInfo.cardStatus)}}</view>
			<p class="name">{{cardInfo.cardName + formatDate(cardInfo.periodUnit)}}会员</p>
			<p class="time">有效期：{{cardInfo.startDate}}-{{cardInfo.endDate}}</p>
			<view class="buyInfo u-flex">
				<text class="payTime">{{cardInfo.payDate}}支付成功</text>
				<span class="payMoney">实付¥<text class="payMoney-money">{{switchMoney(cardInfo.price)}}</text></span>
			</view>
		</view>
		<!-- <no-data></no-data> -->
        <p class="title">会员福利</p>
        <welfare-list :cardInfo="cardInfo" v-if="goodsStr" :integralRatio="integralRatio" :goodsStr="goodsStr"></welfare-list>
	</view>
</template>

<script>
import NoData from "../../components/noData.vue";
import welfareList from '@/components/welfareList.vue'
	export default {
		components: { NoData, welfareList },

		data () {
			return {
				cardInfo: {},
                integralRatio: null,
				goodsStr: {},
				cardId: '', // 卡id
			}
		},
		onShow () {
			this.getInfo()
		},
        onLoad(option){
			this.cardId = option?.cardId || '' 
            this.cardInfo = JSON.parse(option?.cardInfo)  
        },
		methods: {
			async getInfo() {
				let res = await this.$http.getPayMemberInfo({cardId: this.cardId})
				this.integralRatio = res.dataInfo?.integralRatio
				this.goodsStr = res.dataInfo || null 
			},
			formatStatus (val) {
				switch (val) {
					case 1:
						return '生效中'; 
					case 2:
						return '待生效'; 
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
			cardDetails(cardStatus) {
				if (cardStatus === 1) {
					this.goTo(`/pagesB/payMemberCenter/index?cardId=${this.cardId}`)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.payMemberCenter-detail {
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
    .title {
        width: 100%;
		margin-top: 30rpx;
		margin-left: 30rpx;
        text-align: center;
		font-size: 32rpx;
		color: #191919;
		font-weight: 600;
	}
    /deep/ .discount {
        &::after {
            height: 10rpx;
        }
    }
}
</style>

