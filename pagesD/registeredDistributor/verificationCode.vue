<template>
	<view class="container">
		<u-navbar :border-bottom="false" title="验证手机号" title-bold title-color="#191919" title-size="36"
            back-icon-color="#000000"></u-navbar> 
		<view class="desc">
			尊敬的{{userData.custName}}您好，已将短信验证码发送至您<text class="phone">{{userData.mobileNo}}</text>手机号上，请注意查收
		</view>	
        <view class="u-flex u-m-t-50 code-wrap">
            <view class="iconfont icon-required"></view>
			<view class="code-text">
				短信验证码
			</view>
			<input @input="codeInput" type="number" v-model="code" />
			<view @click="gainCode" class=" u-flex u-row-center" :class="['code-btn',{'disable':getmsg!='获取验证码'}]">
				{{getmsg}}
			</view>
        </view>
		<view @click="$u.throttle(confirmVerify, 2000)" class="confirm-btn u-flex u-row-center">
			确认
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				getmsg: '获取验证码',
				code: null, //验证码,
				userData:null,
			}
		},
		onLoad(option) {
			
			this.userData = option.userData?JSON.parse(option.userData):null
		},
		methods:{
			// 验证码的input 事件
			codeInput(e){
				
				this.$nextTick(() => {
					this.code = e.detail.value.replace(/[^\d]/g, '')
				})
			},
			// 获取验证码
			async gainCode() {
                try{
                    if (this.getmsg != "获取验证码") {
                        return;
                    }
					var time = 59
					let res = await this.$http.bankGetCode({
					oriTransId:this.userData.transId,
					bizType:this.userData.bizType, //OPEN_ACCT -开户鉴权 WITHDRAW -电子账户提现 BindNewCard  -企业新增绑卡
					mobileNo:this.userData.mobileNo})
					if(res.returnCode == 1000){
						this.$toast('发送验证码成功')
						var inter = setInterval(()=>{
							this.getmsg ='剩余时间'+ time + '秒';
							this.$forceUpdate()
							time--
							if (time < 0) {
								clearInterval(inter)
								this.getmsg = "获取验证码"
								this.$forceUpdate()
							}
						}, 1000)
					}
                }catch(e){
                    //TODO handle the exception
                }
				
			},
			// 提交验证
			async confirmVerify(){
				try{
					let res
					if(this.userData.bizType=='OPEN_ACCT'){ //开户验证
						res = await this.$http.bankVerify({
							oriTransId:this.userData.transId,
							phoneDynCode:this.code,
							userNo:this.userData.userNo,
							cardNo:this.userData.cardNo
						})
					}
					if(this.userData.bizType=='BindNewCard'){//绑卡验证
						res = await this.$http.bindBankVerify({
							platCustNo:this.$globleData?.distributor.platCustNo,
							oriTransId:this.userData.transId,
							phoneDynCode:this.code,
							userNo:this.userData.userNo,
							cardNo:this.userData.cardNo
						})
					}
					if(res.returnCode == 1000){
						this.goTo('/pagesD/registeredDistributor/submmitSuccess?userName='+this.userData.custName)
					}
					
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
			}
		}
	}
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
	.container{
		padding: 0 30rpx;
	}
	.desc{
		text-align: center;
		width: 690rpx;
		margin-top: 100rpx;
		font-size: 30rpx;
		color: #666666;
		.phone{
			color: #E85959;
		}
	}
	.code-wrap{
		height: 110rpx;
		border-bottom: 1rpx solid #E6E6E6;
		.code-btn{
			width: 210rpx;
			height: 64rpx;
			// padding: 11rpx 12rpx;
			background: $themeColor;
			font-size: 30rpx;
			color: #FFFFFF;
			border-radius: 10rpx;
			// opacity: 0.3;
			&.disable {
				cursor: not-allowed;
				opacity: 0.3;
				pointer-events: none;
			}
		}
		.icon-required{
			color: #E85959;
		}
		.code-text{
			font-size: 30rpx;
			color: #191919;
		}
		input{
			width: 240rpx;
			margin-left: 20rpx;
		}
	}
	.confirm-btn{
		width: 550rpx;
		height: 80rpx;
		margin:  80rpx auto;
		background: $themeColor;
		border-radius: 45rpx;
		font-size: 28rpx;
		font-weight: 600;
		color: #FFFFFF
	}
</style>
