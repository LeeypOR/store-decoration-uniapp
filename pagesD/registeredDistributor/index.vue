<template>
	<view class="">
		<u-navbar :border-bottom="false" title="申请成为分销员" title-bold title-color="#191919" title-size="36"
		          back-icon-color="#000000"></u-navbar>
				  
	    <!-- <u-form   class="form" :model="form" ref="uForm"> -->
	    	<!-- <u-form-item :required="true" label-width='136' label="姓名" prop="name"><u-input v-model="form.name" /></u-form-item>
			<u-form-item :required="true"  label-width='136' label="证件类型" prop="documentType">
				<view class="u-flex u-row-between">
					<view class="certificate">
						{{certificate}}
					</view>
					<view class="iconfont icon-app_icon_xiala" @click="idCardShow=!idCardShow"></view>
				</view>
			</u-form-item> -->
			
	    <!-- </u-form> -->
		<view class="wrap">
			<view class="wrap-item u-flex">
				<view class="item-left">
					<text class="iconfont icon-required"></text>
					<text class="name">姓名</text>
				</view>
				<view class="item-right">
					<input @input="nameInput" type="text" placeholder="请输入姓名" v-model="form.name" />
				</view>
			</view>
			<view class="wrap-item u-flex">
				<view class="item-left">
					<text class="iconfont icon-required"></text>
					<text class="name">证件类型</text>
				</view>
				<view @click="idCardShow=!idCardShow" class="item-right u-flex-1 u-flex u-row-between">
					<view :class="['certificate',{'bankAcitve':certificate!='请选择'}]">
						{{certificate}}
					</view>
					<view class="iconfont icon-app_icon_xiala"></view>
				</view>
			</view>
			<view class="wrap-item card">
				<view class="item-left u-m-t-35">
					<text class="iconfont icon-required" style="color: #FFFFFF"></text>
					<text class="name">证件照片</text>
				</view>
				<view class="u-flex">
					<view class="card-left">
						<view class="facade u-flex u-row-center">
							
							<image class="bg-img" :src="faceBgImage" ></image>
							<image @click="changeFaceImage" class="card-image" :src="facePictrure" ></image>
						</view>
						<view class="card-desc">
							点击上传身份证头像面照片
						</view>
					</view>
					<view class="card-left u-m-l-20">
						<view class="backside u-flex u-row-center">
							<image class="bg-img" :src="backBgImage" ></image>
							<image @click="changeBackImage" class="card-image" :src="backPicture" ></image>
						</view>
						<view class="card-desc">
							点击上传身份证国徽面照片
						</view>
					</view>
					
				</view>
			</view>
			<view class="wrap-item u-flex">
				<view class="item-left">
					<text class="iconfont icon-required"></text>
					<text class="name">证件号码</text>
				</view>
				<view class="item-right">
					<!-- {{cardId}} -->
					<input type="text" @input="cardInput" maxlength="18" placeholder="请输入证件号" v-model="form.cardId" />
				</view>
			</view>
			<view class="wrap-item u-flex">
				<view class="item-left">
					<text class="iconfont icon-required"></text>
					<text class="name">卡号</text>
				</view>
				<view class="item-right">
					<input type="text" @blur="banckBlur" @input="banckInput" maxlength="19" placeholder="请输入银行卡号最多19位" v-model="form.bankNum" />
				</view>
			</view>
			<view class="wrap-item u-flex">
				<view class="item-left">
					<text class="iconfont icon-required"></text>
					<text class="name">开户银行</text>
				</view>
				<view class="item-right u-flex-1 u-flex u-row-between">
					<view :class="['certificate',{'bankAcitve':bankName!='请选择银行'}]">
						{{bankName}}
					</view>
					<!-- <view class="iconfont icon-app_icon_xiala" @click="bankShow=!bankShow"></view> -->
				</view>
			</view>
			<view class="wrap-item u-flex">
				<view class="item-left">
					<text class="iconfont icon-required"></text>
					<text class="name">手机号</text>
				</view>
				<view class="item-right u-flex-1 u-flex u-row-between">
					<input @input="phoneInput" type="number" maxlength="11" placeholder="请输入手机号最多11位" v-model="form.phone" />
				</view>
			</view>
		</view>	
		<view @click="goTo('/pagesD/registeredDistributor/bankList')" class="more-bank">
			查看支持的银行列表
		</view>
		<view @click="$u.throttle(submit, 1000)" class="btn-submit u-flex u-row-center">
			提交
		</view>
		<view class="u-flex u-row-center u-m-t-20 ">
			<!-- <checkbox-group @change="checkboxChange">
				<label>
					<checkbox :checked="agreementCheck" value="cb" color="#D1B085"  style="transform:scale(0.7)"/><text></text>
				</label>
            </checkbox-group> -->
            <u-checkbox active-color="#D1B085" @change="checkboxChange" v-model="agreementCheck"></u-checkbox>
			<view class="agree-content">
				<text class="agree">我已阅读并同意</text>
				<text @click="goRouter" class="user-agreement">《用户协议规则》</text>
			</view>
		</view>
        <view style="height:50rpx"></view>
		<u-select mode="single-column" @confirm='changeCard' v-model="idCardShow"  :list="carList"></u-select>
		<!-- <u-select mode="single-column" value-name="id"  label-name="bankName" @confirm='changeBank' v-model="bankShow"  :list="bankList"></u-select> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				form: {
					name: '',
					documentType: '',//银行卡类型
					photoFront: '',//正面照
					photoReverse:'',//反面照
					cardId:"",//身份证号
					bankNum:"",//银行卡号
					phone:'',
					bankName:'',
					bankId:'' //开户银行，行号
				},
				checked:false,//用户协议优选框
				idCardShow:false,//身份证弹窗显示
				bankShow:false,//银行卡弹窗显示
				certificate:'请选择',
				bankName:'请选择银行', 
				cardId:'上传完证件照反显',
				facePictrure:'/pagesD/static/image/icon_fenxiao_shangchuan.png',
				backPicture:'/pagesD/static/image/icon_fenxiao_shangchuan.png',
				faceBgImage:'/pagesD/static/image/qietu_zhengjianzhao.png',
				backBgImage:'/pagesD/static/image/qietu_shenfenzheng_fanmian.png',
				carList:[ //身份证数据集合
					{
						label: '身份证',
						value: 'A'
					},
					{
						label: '港澳通行证',
						value: 'E'
					},
					{
						label: '台湾居民往来大陆通行证',
						value: 'F'
					},
				],
                
				bankList:[],//银行卡集合
				agreementCheck:false //用户协议是否勾选
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onShow() {
			this.getBankList()
		},
		methods:{
			// 根据银行卡号查询银行信息
			async binBankInfo(cardNo){
			    try{
			    	let res = await this.$http.binBankInfo({cardNo:cardNo})
					this.bankName = res.dataInfo?res.dataInfo.bankNm:'请选择银行'
					this.form.bankId = res.dataInfo?res.dataInfo.bankNo:''
					this.form.bankName = res.dataInfo?res.dataInfo.bankNm:''
			    }catch(e){
			    	//TODO handle the exception
			    }
			},
			
			// 姓名输入框事件
			nameInput(e){
				this.$nextTick(() => {
					this.$set(this.form, 'name', e.detail.value.replace(/[^\u4E00-\u9FA5A-Za-z\s]/g, ''))
					
				})
			},
			// 正面照
			changeFaceImage () {
             getApp().globalData.preveImage='preveImage' 
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: async (file) => {
						try{
							const res = await this.$http.uploadFile(file.tempFilePaths[0])
							
							
							this.faceBgImage = res.dataInfo.url
							this.form.photoFront = res.dataInfo.url
						}catch(e){
							console.log('e',e);
              
						}
						
					}
				});
			},
			goRouter(){
				this.goTo('/pagesD/registeredDistributor/userAgreement')
			},
			// 反面照
			changeBackImage(){
        getApp().globalData.preveImage='preveImage'
           
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: async (file) => {
						try{
							const res = await this.$http.uploadFile(file.tempFilePaths[0])
							
						
						this.backBgImage = res.dataInfo.url
						this.form.photoReverse = res.dataInfo.url
						}catch(e){
							console.log('e',e);
              
						}
						
					}
				});
			},
			// 获取银行卡列表
			async getBankList(){
				try{
					let res = await this.$http.bankList()
					
					this.bankList = res.dataInfo
				}catch(e){
					//TODO handle the exception
				}
			},
			// 用户协议
			checkboxChange(e){
				
				this.agreementCheck = e.value
			},
			// 注册提交
			async submit() {
				if(!this.agreementCheck){
					this.$toast('请勾选用户协议')
					return
				}
				if(!this.form.name){
					this.$toast('姓名不能为空')
					return
				}
				
				if(!this.form.documentType){
					this.$toast('银行卡类型不能为空')
					return
				}
				if(!this.form.cardId){
					this.$toast('证件号不能为空')
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
				if(!this.form.phone){
					this.$toast('手机号不能为空')
					return
				}
				if(this.form.phone){
					if(!this.$u.test.mobile(this.form.phone)){
					 	this.$toast('手机号输格式不正确，请检查后再输入')
					 	return
					}
				}
				
				
				
				try{
					let parmas = {
						custName:this.form.name,
						idType:this.form.documentType,
						idNo:this.form.cardId,
						photoFront:this.form.photoFront,
						photoReverse:this.form.photoReverse,
						cardNo:this.form.bankNum,
						mobileNo:this.form.phone,
						bankName:this.form.bankName,
						openBank:this.form.bankId,
						returnUrl:'https://testsd.cicd.vpclub.cn/goldenhome/admin/web/#/login'
					}
					let res = await this.$http.distributionRegister(parmas)
					let userData 
					
					if(res.returnCode == 1000){
						userData = res.dataInfo
						userData.bizType = 'OPEN_ACCT'
						this.goTo(`/pagesD/registeredDistributor/verificationCode?userData=${JSON.stringify(userData)}`)
					}
					
				}catch(e){
					
					
				}
				
			},
			// 手机号只能输入数字
			phoneInput(e){
				
				this.$nextTick(() => {
					this.form.phone = e.detail.value.replace(/[^\d]/g, '')
				})
			},
			// 银行卡失去焦点事件
			banckBlur(e){
				let num = e.detail.value
				if(num){
					this.binBankInfo(num)
				}
				
			},
			// 银行卡只能输入数字
			banckInput(e){
				this.$nextTick(() => {
					this.form.bankNum = e.detail.value.replace(/[^\d]/g, '')
				})
			},
			// 证件只能输入数字和字母
			cardInput(e){
				this.$nextTick(() => {
					this.$set(this.form, 'cardId', e.detail.value.replace(/[\W]/g,''))
					
				})
			},
			//身份证事件
			changeCard(e){
				let  res = e[0]
				
				this.certificate = res.label
				this.form.documentType = res.value
			},
			// 银行卡事件
			changeBank(e){
				let  res = e[0]
				
				this.bankName = res.label
				this.form.bankName = res.label
				this.form.bankId = res.value
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
	
	/deep/.u-form-item{
		width: 690rpx;
		height: 110rpx;
		margin: 0 auto;
	}
	.wrap{
		width: 690rpx;
		margin: 0 auto;
		.wrap-item{
			height: 110rpx;
			border-bottom: 1rpx solid #E6E6E6;
			.item-left{
				width: 165rpx;
				margin-right: 20rpx;
				font-size: 30rpx;
				.icon-required{
					color: #E85959;
				}
				.name{
					//font-weight: 500;
					color: #191919;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
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
	.certificate{
		font-size: 30rpx;
		color: #999999;
		&.bankAcitve{
			color: #191919;
        }
       
	}
    .icon-app_icon_xiala{
        font-size: 26rpx;
        margin-right: 10rpx;
    }
	.card-left{
		width: 335rpx;
		height: 270rpx;
		background: #FFFFFF;
		box-shadow: 0px 10rpx 30rpx 0px rgba(0, 0, 0, 0.03);
		border-radius: 20rpx;
		padding: 17rpx 15rpx 15rpx 16rpx;
		.card-image{
			position: absolute;
			z-index: 2;
			width: 71rpx;
			height: 71rpx;
		}
		.facade{
			width: 304rpx;
			height: 193rpx;
			position: relative;
			// background: url(../static/image/qietu_zhengjianzhao.png) no-repeat ;
			// background-size: cover;
			
		}
		.bg-img{
			position: absolute;
			z-index: 0;
			width: 100%;
			height: 100%;
		}
		.backside{
			width: 304rpx;
			height: 193rpx;
			position: relative;
			// background: url(../static/image/qietu_shenfenzheng_fanmian.png) no-repeat ;
			// background-size: cover;
		}
		.card-desc{
			text-align: center;
			margin-top: 15rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #191919;
		}
	}
	.more-bank{
		font-size: 26rpx;
		padding: 20rpx 30rpx;
		font-weight: 400;
		color: #666666;
	}
	.btn-submit{
		width: 550rpx;
		height: 79rpx;
		margin: 0 auto;
		margin-top: 120rpx;
		background: #D1B085;
		border-radius: 45rpx;
		font-size: 28rpx;
		font-weight: 600;
		color: #FFFFFF;
	}
    .agree-content{
        padding-top: 6rpx;
    }
	.agree{
		font-size: 26rpx;
		color: #999999;
	}
	.user-agreement{
		font-size: 26rpx;
		color: #191919;
	}
    /deep/.u-checkbox__label{
        margin-right: 0!important;
    }
</style>
