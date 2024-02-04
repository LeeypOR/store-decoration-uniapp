<template>
	<view class="user-info">
		<u-navbar :border-bottom="false" title="" title-color="#FFFFFF"></u-navbar>
		<view class="title">个人信息</view>
		<!-- @click="changeUserImage" -->
		<view class="option u-flex">
			<text class="option-title">头像</text>
			<view class="option-content u-flex">
				<image class="herd-image" :src="userInfo.avatar"></image>
				<text style="display: inline-block;" class="left-icon"></text>
			</view>
		</view>
		<!-- @click="goTo('/pagesA/mine/changeUserInfo/changeNick')" -->
		<view class="option u-flex">
			<text class="option-title">昵称</text>
			<view class="option-content u-flex">
				<text class="content">{{nickName}}</text>
				<text style="display: inline-block;" class="left-icon"></text>
			</view>
		</view>
    <!-- @click="goTo('/pagesA/mine/changeUserInfo/verifyOldTel')" -->
		<view @click="goTo('/pagesA/mine/changeUserInfo/verifyOldTel')" class="option u-flex">
			<text class="option-title">手机号</text>
			<view class="option-content u-flex">
				<text class="content">{{hidePhone(phoneNumber)}}</text>
				<image class="left-icon" src="@/static/image/left-icon.png"></image>
			</view>
		</view>
		<view class="option u-flex" @click="goTo('/pagesA/mine/changeUserInfo/changeName')">
			<text class="option-title">姓名</text>
			<view class="option-content u-flex">
				<text class="content">{{(customerName) || '暂未设置'}}</text>
				<image class="left-icon" src="@/static/image/left-icon.png"></image>
			</view>
		</view>
		<view class="option u-flex" @click="changeBirthdayBtn">
			<text class="option-title">生日</text>
			<view class="option-content u-flex">
				<text class="content">{{(birthday) || '暂未设置'}}</text>
				<image class="left-icon" src="@/static/image/left-icon.png"></image>
			</view>
		</view>

		<view class="option u-flex">
			<text class="option-title">性别</text>
			<view @click="genderShow = !genderShow" class="option-content u-flex">
				<text class="content">{{(sexMap(gender)) || '暂未设置'}}</text>
				<image class="left-icon" src="@/static/image/left-icon.png"></image>
			</view>
		</view>
		<view class="option u-flex" @click="areaShow = !areaShow">
			<text class="option-title">地区</text>
			<view class="option-content u-flex u-flex-1 u-row-right ">
				<text class="content ">{{(area) || '暂未设置'}}</text>
				<image class="left-icon" src="@/static/image/left-icon.png"></image>
			</view>
		</view>
		<view class="btn-exit" @click="logout">退出登录</view>
		<u-picker v-model="show" @confirm="changeBirthday" :end-year="endYear" :endMonth="endMonth"
              :endDay="endDay" :default-time="birthday" mode="time" confirm-color="#D1AB88"></u-picker>
	    <u-picker v-if="area" v-model="areaShow" @confirm="changeArea" :default-region="defaultArea" mode="region" confirm-color="#D1AB88"></u-picker>		  
		<u-picker v-else v-model="areaShow" @confirm="changeArea"  mode="region" confirm-color="#D1AB88"></u-picker>
		<u-select v-model="genderShow" @confirm="changeGender" :default-selector="defaultSex" mode="single-column" :list="genderList" confirm-color="#D1AB88"></u-select>
	</view>
</template>

<script>
	import changeUserMixin from "./changeUserInfo/changeUserMixin";
  import {plugInCodeInit} from "../../common/plugInCode";

	export default {
		mixins: [changeUserMixin],
		data () {
			return {
			  title:'修改用户信息',
				userInfo: {},
				show: false,
				areaShow: false,
				genderShow: false,
				genderList: [{
						value: '1',
						label: '男'
					},
					{
						value: '2',
						label: '女'
					}
				],
				params: {
					year: true,
					month: true,
					day: true,

				},
				endYear:'',
				endMonth:'',
				endDay:'',
			}
		},
    onLoad () {
      this.endYear = new Date().getFullYear()
      this.endMonth = new Date().getMonth()+1
      this.endDay = new Date().getDate()
    },
		onShow () {
			console.log(this.area,'777777');
			this.userInfo = this.$globleData.userData
		},
    watch:{
      area(newArea) {
		console.log(newArea,'777777');
        this.defaultArea = newArea?.split('-')
      }
    },
		computed: {
			sexMap () {
				return sex => {

					if (sex == '1') {
						return '男'
					}
					return '女'
				}
			}
		},
		methods: {
		  // 修改生日
      changeBirthdayBtn(){
        if(!this.birthday){
          this.show = !this.show
          return
        }
      },
			// 修改地址选择
			async changeArea (obj) {
				this.backPages = 0
				const res = await this.updateUserInfo({
					area: `${obj.province.label}-${obj.city.label}-${obj.area.label}`
				})
				if (res) {
					this.area = `${obj.province.label}-${obj.city.label}-${obj.area.label}`
				}
			},
			// 修改生日
			 changeBirthday (obj) {
        let str =  `${obj.year}-${obj.month}-${obj.day}`
        uni.showModal({
          title: '',
          content: `你的生日是${str},确认后不可修改`,
          cancelText:'修改',
          success: async (res)=>{
            if (res.confirm) {
              this.backPages = 0
              const res = await this.updateUserInfo({
                birthday: `${obj.year}-${obj.month}-${obj.day}`
              })
              if (res) {
                this.birthday = `${obj.year}-${obj.month}-${obj.day}`
              }
            } else if (res.cancel) {
              this.show = !this.show
            }
          }
        });

			},
			async changeGender(e){

				this.backPages = 0
				let res = await this.updateUserInfo({
					gender: e[0].value
				})

				if(res){
          this.gender = e[0].value
          this.$globleData.userData.gender = this.gender
          uni.setStorageSync('userInfo',  this.$globleData.userData);
				}
			},
			changeUserImage () {
            getApp().globalData.preveImage='preveImage'  
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: async (file) => {
						const res = await this.$http.uploadFile(file.tempFilePaths[0])
						this.userInfo.avatar = res?.dataInfo.url
						this.backPages = 0
						this.updateUserInfo({
							avatar: this.userInfo.avatar
						})
					}
				});
			},
			// 退出登录
			logout () {
				const that = this
				uni.showModal({
					title: '退出登录',
					content: '确认退出金桔有品吗？',
					cancelColor: '#666666',
					confirmColor: '#D1AB88',
					success: async (res) => {
						if (res.confirm) {
							await this.$http.logout()
							that.initInfo()
						}
					}
				});
			},
			// 初始化信息
			initInfo () {
				this.$globleData.accessToken = ''
				this.$globleData.userData = {}
				// this.$plugInCodeInit({})
        if(this.$globleData.loginTime){
          clearTimeout(this.$globleData.loginTime)
          this.$globleData.loginTime = null
        }
				// 本地缓存用户信息和token
				uni.setStorageSync('accessToken', null);
				uni.setStorageSync('userInfo', null);
				// this.goTo('/pages/home/index', true)
        uni.reLaunch({
            url: '/pages/home/index'
        });
			},
		}
	}
</script>
<style>
 page{
   background-color: #ffffff;
 }
</style>
<style scoped lang="scss">
	.user-info {
		padding: 0 30rpx;

		.title {
			margin: 10rpx 0 31rpx;
			font-size: 50rpx;
			font-weight: 500;
			color: #191919;
		}

		.option {
			padding: 12rpx 0;
			border-top: 1px solid rgba(230, 230, 230, 0.4);
			justify-content: space-between;

			.option-title {
				font-size: 28rpx;
				font-weight: 400;
				color: #191919;
			}

			.option-content {
				.herd-image {
					width: 76rpx;
					height: 76rpx;
					border-radius: 50%;
				}

				.left-icon {
					width: 14rpx;
					height: 24rpx;
				}

				.content {
					font-size: 28rpx;
					font-weight: 400;
					color: #666666;
					display: inline-block;
					margin: 18rpx 20rpx;
				}
			}

			&:nth-last-of-type(2) {
				border-bottom: 1px solid rgba(230, 230, 230, 0.4);
			}
		}

		.btn-exit {
			text-align: center;
			position: fixed;
			bottom: 92rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 480rpx;
			padding: 24rpx 0rpx;
			background: #d1b085;
			border-radius: 50rpx;

			font-size: 32rpx;
			color: #FFFFFF;
			font-weight: 500;
		}
	}

	/deep/.u-picker-body {
		background-color: #eeeeee !important;
	}
</style>
