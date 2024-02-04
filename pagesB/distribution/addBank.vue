<template>
    <view class="add-bank">
        <u-navbar z-index="999999" class="location-class" :background="{background:'#00000000'}" :border-bottom="false" title=" " 
                title-color="#000" title-size="36" back-icon-color="#000" :custom-back="backPage"></u-navbar>
        <view class="wrapper">
            <view class="title">添加银行卡</view>
            <view class="desc">申请绑定持卡人本人银行卡</view>
            <view class="wrap">
            	<view class="wrap-item u-flex">
            		<view class="item-left">
            			<text class="iconfont icon-required"></text>
            			<text class="name">持卡人</text>
            		</view>
            		<view class="item-right">
            			<input @input="nameInput" type="text" placeholder="请输入姓名" v-model="form.name" />
            		</view>
            	</view>
            	<view class="wrap-item u-flex">
            		<view class="item-left">
            			<text class="iconfont icon-required"></text>
            			<text class="name">卡号</text>
            		</view>
            		<view class="item-right">
            			<input type="text" maxlength="19" placeholder="请输入银行卡号最多19位" v-model="form.bankNum" />
            		</view>
            	</view>
            	<view class="wrap-item u-flex">
            		<view class="item-left">
            			<text class="iconfont icon-required"></text>
            			<text class="name">开户银行</text>
            		</view>
            		<view class="item-right u-flex-1 u-flex u-row-between">
            			<view class="certificate">
            				{{bankName}}
            			</view>
            			<view class="iconfont icon-app_icon_xiala" @click="bankShow=!bankShow"></view>
            		</view>
            	</view>
            	<view class="wrap-item u-flex">
            		<view class="item-left">
            			<text class="iconfont icon-required"></text>
            			<text class="name">手机号</text>
            		</view>
            		<view class="item-right u-flex-1 u-flex u-row-between">
            			<input @blur="checkPhone" @input="phoneInput" type="number" maxlength="11" placeholder="请输入手机号最多11位" v-model="form.phone" />
            		</view>
            	</view>
            </view>	
            <view @click="goTo('/pagesD/registeredDistributor/bankList')" class="more-bank">
            	查看支持的银行列表
            </view>
            <view @click="submit" class="confirm">提交</view>
        </view>
        	<u-select mode="single-column" value-name="id"  label-name="bankName" @confirm='changeBank' v-model="bankShow"  :list="bankList"></u-select>
    </view>
</template>

<script>
export default {
    data(){
        return {
            form:{
				name:'',
				bankNum:'',
				phone:'',
				bankId:''
			},
			bankName:'',
			distributor:this.$globleData?.distributor || null,//分销人的信息
			bankList:[],//银行卡集合
			bankShow:false
			
        }
    },
	onShow() {
	    this.getBankList()
	},
	methods:{
		// 获取银行卡列表
		async getBankList(){
			try{
				let res = await this.$http.bankList()
				
				this.bankList = res.dataInfo
			}catch(e){
				//TODO handle the exception
			}
		},
		nameInput(e){
			this.$nextTick(() => {
				this.$set(this.form, 'name', e.detail.value.replace(/[^\u4E00-\u9FA5A-Za-z\s]/g, ''))
				
			})
		},
		checkPhone(e){
			
			if(!this.$u.test.mobile(e.detail.value)){
				this.$toast('手机号输格式不正确，请检查后再输入')
			}
		},
		phoneInput(e){
			
			this.$nextTick(() => {
				this.form.phone = e.detail.value.replace(/[^\d]/g, '')
			})
		},
		changeBank(e){
			let  res = e[0]
			
			this.bankName = res.label
			this.form.bankName = res.label
			this.form.bankId = res.value
		},
		
		async submit(){
			if(!this.form.name){
				this.$toast('姓名不能为空')
				return
			}
			
		
			
			if(!this.form.bankNum){
				this.$toast('银行卡号不能为空')
				return
			}
			if(!this.form.bankName){
				this.$toast('开户行不能为空')
				return
			}
			if(!this.$u.test.mobile(this.form.phone)){
				this.$toast('手机号输格式不正确，请检查后再输入')
				return
			}
			
			try{
				let param={
					peopleId:this.distributor.id,
					userNo:	this.distributor.platCustNo,
					cardNo:this.form.bankNum,
					mobileNo:this.form.phone,
					bankName:this.bankName,
					openBank:this.form.bankId
				}
				let res = await this.$http.bankBinding(param)
				if(res.returnCode == 1000){
					let userData = {
						transId:res.dataInfo,
						mobileNo:this.form.phone,
						bizType:'BindNewCard',
						custName:this.form.name
					}
					// userData.transId = res.dataInfo
					// userData.mobileNo = this.form.phone
					// userData.bizType = 'BindNewCard'
					this.goTo(`/pagesD/registeredDistributor/verificationCode?userData=${JSON.stringify(userData)}`)
				}
				
			}catch(e){
				
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
.add-bank{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .wrapper{
        flex: 1;
        position: relative;
		.title{
			text-align: center;
			font-size: 40rpx;
			font-weight: 500;
			color: #191919;
			margin-top: 100rpx;
		}
		.desc{
			font-size: 36rpx;
			color: #666666;
			text-align: center;
			margin-top: 20rpx;
		}
		.wrap{
			width: 690rpx;
			margin: 0 auto;
			margin-top: 70rpx;
			.wrap-item{
				height: 110rpx;
				border-bottom: 1rpx solid #E6E6E6;
				.item-left{
					width: 153rpx;
					margin-right: 20rpx;
					font-size: 30rpx;
					.icon-required{
						color: #E85959;
					}
					.name{
						font-weight: 500;
						color: #191919;
					}
				}
			}
			.card{
				height: auto;
			}
		}
		 .icon-app_icon_xiala{
		color:#CCCCCC ;
	   }
		.more-bank{
			font-size: 26rpx;
			padding: 20rpx 30rpx;
			font-weight: 400;
			color: #E85959;
		}
        .confirm{
            width: 550rpx;
            height: 80rpx;
            line-height: 80rpx;
            text-align: center;
            background: #d1b085;
            border-radius: 46rpx;
            color: #fff;
            font-weight: 600;
            font-size: 28rpx;
            position: absolute;
            left: 50%;
            bottom: 100rpx;
            transform: translateX(-50%);
        }
    }
}
</style>