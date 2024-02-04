<template>
	<view class="wrapper">
		<u-navbar z-index="999999" class="location-class" :background="{background:'#00000000'}" :border-bottom="false"
			title="提现到银行卡"
			title-color="#000" title-size="36" back-icon-color="#000" :custom-back="backPage"></u-navbar>
		<view class="container">
			<view class="drawal-bank">
				<view class="label">到账银行卡</view>
				<view class="bank-wrapper">
					<view class="bank-info">
						<view v-if="defaultBank" class="bank-name">{{defaultBank.bankName}}
							({{defaultBank.cardNo.substr(defaultBank.cardNo.length-4)}})</view>
						<view class="bank-desc">具体到账时间和提现银行有关</view>
					</view>
					<view @click="show=!show" class="iconfont icon-arrow">
						<!-- <image src="@/static/image/left-icon.png"></image> -->
					</view>
				</view>
			</view>
			<view class="drawal-operation">
				<view class="operation-title">提现金额</view>
				<view class="operation-input">
					<text>¥</text>
<!--					<u-input-->
<!--						type="input"-->
<!--						v-model="price"-->
<!--						placeholder=" "-->
<!--						:auto-height=autoHeight-->
<!--						:clearable="clearable"-->
<!--            @blur="blurInput"-->
<!--            @input="changeInput" />-->

					<input type="digit"
					    placeholder-class="placeholderStyle"
						:placeholder="allCash/100"
					    v-model="price"
              @blur="blurInput"
					    @input="changeInput"

					 />
				</view>
				<view class="drawal-desc">
					<text :style="{'color':showHightBtn?'':'#E85959'}">{{priceText}}<text v-if="showHightBtn">{{switchMoney(allCash)}}元，</text></text>
					<text v-if="showHightBtn" @click="price=switchMoney(allCash)" class="drawAll">全部提现</text>
				</view>
				<view @click="btnAClick" class="confirm">确认转出</view>
			</view>
			<u-popup border-radius="14" :closeable="true" v-model="show" mode="bottom" length="75%">

				<view class="popup-title">
					选择到账银行卡
				</view>
				<view class="popup-desc">
					具体到账时间和提现银行有关
				</view>
				<view class="bank-wrap">
					<view v-for="(item,index) in bankList" :key="index" class="item u-flex u-row-between">
						<view class="item-left">
							<view class="bank-name">
								{{item.bankName}}
							</view>
							<view class="bank-num">
								{{item.cardNo.substr(0,4)+ '******' + item.cardNo.substr(item.cardNo.length - 4)}}
							</view>
						</view>
						<view class="item-right">
							<u-checkbox style="width: 40rpx;height: 40rpx;" @change="bankChange" :name="index"
								active-color="#D1B085" shape="circle" :value="item.checked" :disabled="false">
							</u-checkbox>
						</view>
					</view>
					<!-- <view  class="item u-flex u-row-between">
						<view class="item-left">
							<view class="u-flex">
							   <image class="popup-image" src="../static/images/icon_fenxiao_shiyongxinka.png" mode=""></image>
							   <view class="">
							   	使用新卡提现
							   </view>
							</view>
							
						</view>
						<view class="item-right iconfont icon-arrow">
							
						</view>
					</view> -->
				</view>
				<view @click="show = false" class="popup-btn">
					确定
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				autoHeight: false,
				price: '',
				priceText:'最高可转出',
				clearable: false,
				showHightBtn:true,
				show: false,
				checked: false,
				// allCash: '', //全部可以提现的金额
				currentCash:'',//当前可提现的金额
				bankList: [],
				defaultBank: null

			}
		},
		onLoad (option) {
			this.currentCash = option?.cash || ''
		},
		onShow () {
			this.fetchBindBank()
		},
		computed:{
			allCash(){
        if (Number(this.currentCash / 100) < 100) {
          this.showHightBtn = false
          this.priceText = '最低提现限制100.00元'
        }
				// if(Number(this.currentCash/100)>500){
				// 	this.showHightBtn = false
				// 	this.priceText = '最多可转出500.00元'
				// 	return '50000'
				// }else if(Number(this.currentCash/100)<100){
				// 	this.showHightBtn = false
				// 	this.priceText = '最低提现限制100.00元'
				// 	return ''
				// }else{
				// 	this.showHightBtn = true
				// 	this.priceText = '最高可转出'
				// 	return this.currentCash
				// }
				return this.currentCash
			}
		},
		methods: {
			// 金额输入input 事件
			changeInput (e) {

				this.$nextTick(() => {
					this.price = e.detail.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')
				})
			},
			// 金额输入失焦时间
			blurInput(e){
        let num =Number(e.detail.value)
        if(num<100){
          this.showHightBtn = false
          this.priceText = '最低提现限制100.00元'
        }
				// let num =Number(e.detail.value)
				// if(num>500){
				// 	this.showHightBtn = false
				// 	this.priceText = '最多可转出500.00元'
				// }else if(num<100){
				// 	this.showHightBtn = false
				// 	this.priceText = '最低提现限制100.00元'
				// }else{
				// 	this.showHightBtn = true
				// 	this.priceText = '最高可转出'
				//
				// }
				console.log(e)
			},
			// 已绑定的银行卡列表
			async fetchBindBank () {
				try {
          let param = {
            userPhone:this.$globleData?.userData?.phoneNumber
          }
					let res = await this.$http.bindBankList(param)
					this.bankList = res.dataInfo ? res.dataInfo : [],
						this.defaultBank = this.bankList[0]
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			async btnAClick () {
				if(!this.showHightBtn){
					return 
				}
				if(this.price > 100){
					return this.$toast('提现金额必须大于100')
				}
				try {
					let res = await this.$http.debitCard({
						withdrawalPrice: this.price * 100,
						cardNo: this.defaultBank.cardNo,
						bankName: this.defaultBank.bankName,
            userPhone:this.$globleData?.userData?.phoneNumber
					})
					if (res.returnCode == 1000) {
						let transId = res.dataInfo?.transId || ''
						this.$toast('提现成功')
						if (transId) {
							this.goTo('/pagesB/distribution/cashoutDetail?transId=' + transId)
						}

					}
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			bankChange (e) {
				console.log(e)
				this.bankList.forEach(item => {
					item.checked = false
				})
				let {
					value,
					name
				} = e
				this.bankList[name].checked = value
				this.defaultBank = this.bankList[name]
				this.bankList = [...this.bankList]
			},
			// 提现到银行卡
			async debitCard () {
				try {
					let res = await this.$https.debitCard({
						withdrawalPrice: this.price * 100,
						cardNo: this.defaultBank.cardNo,
						bankName: this.defaultBank.bankName
					})
					console.log(res, '提现银行卡结果')
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;

		.container {
			flex: 1;
			display: flex;
			flex-direction: column;

			.drawal-bank {
				width: 100%;
				height: 252rpx;
				padding: 80rpx 70rpx 0 60rpx;
				display: flex;

				.label {
					font-size: 32rpx;
					color: #191919;

				}

				.bank-wrapper {
					display: flex;
					justify-content: space-between;
					flex: 1;
					padding-left: 40rpx;

					.bank-info {
						.bank-name {
							font-size: 32rpx;
							font-weight: bold;
						}

						.bank-desc {
							margin-top: 10rpx;
							color: #999;
							font-size: 26rpx;
						}
					}

					.icon-arrow {
						font-size: 48rpx;

						padding-top: 23rpx;
					}

					.icon {
						padding-top: 33rpx;

						image {
							width: 24rpx;
							height: 24rpx;
						}
					}
				}
			}

			.drawal-operation {
				flex: 1;
				padding: 0 30rpx;
				background: #fff;
				padding-top: 60rpx;

				.operation-title {
					font-size: 30rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					color: #191919;
					font-weight: bold;
				}

				.operation-input {
					width: 100%;
					height: 110rpx;
					border-bottom: 1rpx solid #e6e6e6;
					display: flex;
					align-items: center;
					margin-top: 20rpx;

					text {
						font-size: 60rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: bold;
						color: #191919;
						margin-right: 30rpx;
					}
                    /deep/.placeholderStyle{
						font-size: 60rpx;
						font-weight: 400;
						color: #CCCCCC;
					}
					/deep/input {
						font-size: 60rpx;
						color: #191919;
                        font-weight: 500;

					}
				}

				.drawal-desc {
					margin-top: 20rpx;
					color: rgba(153, 153, 153, 1);
					font-size: 26rpx;

					.drawAll {
						color: rgba(232, 89, 89, 1);
					}
				}

				.confirm {
					width: 550rpx;
					height: 80rpx;
					line-height: 80rpx;
					text-align: center;
					background: #d1b085;
					border-radius: 45rpx;
					color: #fff;
					font-size: 28rpx;
					font-weight: 600;
					position: absolute;
					left: 50%;
					bottom: 380rpx;
					transform: translateX(-50%);
				}
			}
		}
	}

	/deep/input {
		height: auto !important;
		min-height: 0 !important;
		width: 600rpx !important;
	}

	// 弹出层的样式
	.popup-title {
		font-size: 32rpx;
		font-weight: 500;
		color: #191919;
		height: 122rpx;
		text-align: center;
		line-height: 158rpx;

	}

	.popup-desc {
		font-size: 26rpx;
		color: #999999;
		text-align: center;
	}

	.bank-wrap {
		padding: 0 30rpx 0 60rpx;

		.item {
			border-bottom: 1rpx solid #E6E6E6;
			height: 152rpx;

			.bank-name {
				font-size: 32rpx;
				font-weight: 500;
				color: #191919;
			}

			.popup-image {
				width: 48rpx;
				height: 36rpx;
			}

			.item-right {
				width: 90rpx;
				height: 90rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.icon-arrow {
					color: #CCCCCC;
					font-size: 24rpx;
				}
			}

			.bank-num {
				font-size: 26rpx;
				color: #999999;
				letter-spacing: 5rpx;
				margin-top: 10rpx;
			}
		}
	}

	.popup-btn {
		width: 550rpx;
		height: 80rpx;
		margin: 0 auto;
		margin-top: 160rpx;
		background: $themeColor;
		border-radius: 45rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		font-weight: 600;
		color: #FFFFFF
	}
</style>
