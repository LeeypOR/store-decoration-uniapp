<template>
	<view class="g-add-address">
		<u-navbar class="location-class" :border-bottom="false" title="添加收货地址" title-bold title-color="#191919"
			title-size="36"
			back-icon-color="#000000">
		</u-navbar>
		<view class="option u-flex">
			<text class="option-title">收货人</text>
			<view class="option-content u-flex">
				<u-input
					placeholder-style="input-placeholder-style"
					type="text"
					v-model="from.userName"
					placeholder="收货人"
					maxlength="15" />
			</view>
		</view>
		<view class="option u-flex">
			<text class="option-title">手机号码</text>
			<view class="option-content u-flex">
				<u-input
					placeholder-style="input-placeholder-style"
					type="number"
					v-model="from.userPhone"
					placeholder="手机号"
					maxlength="11" />
				<text class='area-number' @click="areaNumShow=!areaNumShow">+86</text>
				<view class="iconfont icon-arrow"></view>
				<!-- <image class="left-icon" src="@/static/image/left-icon.png"></image> -->
				<!-- icon-arrow -->
			</view>
		</view>
		<view class="option u-flex" @click="provinceShow = !provinceShow">
			<text class="option-title">省/直辖市</text>
			<view class="option-content u-flex">
				<u-input
					@click="provinceShow = !provinceShow"
					placeholder-style="input-placeholder-style"
					type="text"
					v-model="from.provinceName"
					placeholder="省/直辖市"
					maxlength="15"
					disabled />
				<!-- <image class="left-icon" src="@/static/image/left-icon.png"></image> -->
				<view class="iconfont icon-arrow"></view>
			</view>
		</view>
		<view v-if="from.provinceCode" class="option u-flex" @click="cityShow = !cityShow">
			<text class="option-title">市/区</text>
			<view class="option-content u-flex">
				<u-input
					@click="cityShow = !cityShow"
					placeholder-style="input-placeholder-style"
					type="text"
					v-model="from.cityName"
					placeholder="市"
					maxlength="15"
					disabled />
				<!-- <image class="left-icon" src="@/static/image/left-icon.png"></image> -->
				<view class="iconfont icon-arrow"></view>
			</view>
		</view>
		<view v-if="from.cityCode" class="option u-flex" @click="areaShow = !areaShow">
			<text class="option-title">区/街道</text>
			<view class="option-content u-flex">
				<u-input
					@click="areaShow = !areaShow"
					placeholder-style="input-placeholder-style"
					type="text"
					v-model="from.districtName"
					placeholder="区"
					maxlength="15"
					disabled />
				<!-- <image class="left-icon" src="@/static/image/left-icon.png"></image> -->
				<view class="iconfont icon-arrow"></view>
			</view>
		</view>
		<!-- <view class='xingdongjieshao'>详细地址</view>
		<view :class="detail ? 'iostextarea'  : 'androidtextarea'">
			<textarea placeholder-style="input-placeholder-style" placeholder='小区楼栋/乡村名称' />
		</view> -->
		<!-- :style="{marginTop:(detail?'-20rpx':'0')}" -->
		<view class="option  address-detail" :style="{paddingTop:(detail?'0':'30rpx')}">
			<text  class="option-title"  :style="{paddingTop:(detail?'30rpx':'0')}">详细地址</text>
			<view :style="{paddingTop:(detail?'17rpx':'0')}" class="option-content">
				<u-input
					placeholder-style="input-placeholder-style"
					type="textarea"
					v-model="from.detailAddress"
					placeholder="小区楼栋/乡村名称"
					:auto-height=autoHeight />
			</view>
		</view>
		<view class="option set-address u-flex">
			<text class="option-title">设置默认地址</text>
			<u-switch
				inactive-color="#E6E6E6"
				active-color="#D1B085"
				size="42"
				v-model="computedSwitchValue"></u-switch>
		</view>
		<view class="bottom-btn u-flex">
			<view class="del-btn" v-if="isEdit" @click="delBtn">删除</view>
			<view class="save-btn" @click="addAddress">保存</view>
		</view>
		<u-select v-model="areaNumShow" :list="areaNumList"></u-select>
		<u-picker v-model="provinceShow" mode="selector" @confirm=provinceChange :range="provinceList"
			range-key="areaName" confirm-color="#D1AB88"></u-picker>
		<u-picker v-model="cityShow" mode="selector" @confirm=cityChange :range="cityList" range-key="areaName"
			confirm-color="#D1AB88"></u-picker>
		<u-picker v-model="areaShow" mode="selector" @confirm=areaChange :range="areaList" range-key="areaName"
			confirm-color="#D1AB88"></u-picker>
		<popup ref='popup' content="确定删除该地址" title='删除地址' @confirm="delAddress"></popup>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import {
		isNull,
		regPhone
	} from "../../common/verify";
	import Popup from "@/pagesA/components/popup";
	export default {
		components: {
			Popup
		},
		data () {
			return {
				title: '添加收货地址',
				consignee: '', // 收货人
				addressDetail: '', // 详细地址
				autoHeight: false,
				switchValue: true,
				isEdit: false,
				areaNumShow: false,
				areaShow: false,
				provinceShow: false,
				cityShow: false,
				areaName: '', // 选择的省市区
				provinceList: [],
				cityList: [],
				areaList: [],
				provinceNum: 0,
				cityNum: 0,
				areaNum: 0,
				detail: true,
				areaNumList: [{
						value: '1',
						label: '中国大陆+86'
					},
					{
						value: '1',
						label: '中国香港+852'
					}
				],
				from: {
					userName: '',
					userPhone: '',
					provinceCode: '',
					cityCode: '',
					districtCode: '',
					provinceName: '',
					cityName: '',
					districtName: '',
					detailAddress: '',
					defaultAddress: 1, // 是否为默认地址（0：否；1：是）

				},

			}
		},
		onReady () {
			var phone = uni.getSystemInfoSync(); //调用方法获取机型
			if (phone.platform == 'ios') {
				this.detail = true
			} else if (phone.platform == 'android') {
				this.detail = false
			}else{
				this.detail = false
			}
		},
		onLoad (option) {
			this.isEdit = option?.isEdit || false
			if (this.isEdit) {
				const addressInfo = JSON.parse(option.addressInfo)
				this.from = {
					id: addressInfo.id,
					userName: addressInfo.userName,
					userPhone: addressInfo.userPhone,
					provinceCode: addressInfo.provinceCode,
					cityCode: addressInfo.cityCode,
					districtCode: addressInfo.districtCode,
					provinceName: addressInfo.provinceName,
					cityName: addressInfo.cityName,
					districtName: addressInfo.districtName,
					detailAddress: addressInfo.detailAddress,
					defaultAddress: addressInfo.defaultAddress
				}
				// this.areaName = `${addressInfo.provinceName} ${addressInfo.cityName} ${addressInfo.districtName}`
				if (addressInfo.defaultAddress == 0) {
					this.computedSwitchValue = false
				}
			}
			if (this.from.provinceCode) {
				this.getCity()
			}
			if (this.from.cityCode) {
				this.getArea()
			}
		},
		onShow () {
			this.getProvince()
		},
		computed: {
			...mapGetters([
				"getDefaultAddress"
			]),
			computedSwitchValue: {
				get: function () {
					return this.switchValue
				},
				set: function (value) {
					this.from.defaultAddress = 0
					if (value) {
						this.from.defaultAddress = 1
					}
					this.switchValue = value
				}
			}
		},
		methods: {
			// 查询省级
			async getProvince () {

				let res = await this.$http.getArea({
					parentId: this.provinceNum
				})
				this.provinceList = res.dataInfo


			},
			// 查询市级
			async getCity () {
				let res = await this.$http.getArea({
					parentId: this.from.provinceCode
				})
				this.cityList = res.dataInfo


			},
			// 查询区级
			async getArea () {
				let res = await this.$http.getArea({
					parentId: this.from.cityCode
				})
				this.areaList = res.dataInfo


			},

			delBtn () {
				this.$refs.popup.show()
			},
			// 添加收货地址
			async addAddress () {
				if (isNull(this.from.userName)) {
					this.$toast('请填写收货人姓名')
					return
				}
				if (isNull(this.from.userPhone)) {
					this.$toast('请填写手机号码')
					return
				}
				if (regPhone(this.from.userPhone)) {
					this.$toast('手机号格式不正确')
					return
				}
				if (isNull(this.from.provinceName)) {
					this.$toast('请填选省名称')
					return
				}
				if (isNull(this.from.cityName)) {
					this.$toast('请填选市名称')
					return
				}
				if (isNull(this.from.districtName)) {
					this.$toast('请填选区名称')
					return
				}
				if (isNull(this.from.detailAddress)) {
					this.$toast('请填写详细地址')
					return
				}
				if (this.isEdit) {
					await this.$http.editAddress(this.from)
					this.$toast('修改成功')
				} else {
					const res = await this.$http.addAddress(this.from)
					this.from.id = res?.dataInfo || ''
					this.from.getDefaultAddress = '1'
					this.$toast('添加成功')
				}
        console.log('---------');
        console.log(this.switchValue);
        console.log(this.from);
        
				if (this.switchValue) { //默认地址
					this.$store.commit('setSelAddress', this.from)
					this.$store.commit('setDefaultAddress', this.from)
				} else {//非默认地址
					this.from.defaultAddress = 0
					// this.$store.commit('setSelAddress', this.from)
					// this.$store.commit('setDefaultAddress', null)
				}
				uni.navigateBack()
			},

			// 删除收货地址
			async delAddress () {


				await this.$http.delAddress([this.from.id])
				this.$refs.popup.hide()
				if (this.getDefaultAddress?.id == this.from.id) {
					this.$store.commit('setSelAddress', null)

					if (this.from.defaultAddress == 1) {
						this.$store.commit('setDefaultAddress', null)
					}
				}
				this.$toast('删除成功')
				uni.navigateBack()
			},
			// 省发生改变
			async provinceChange (obj) {

				let index = obj[0]

				const provinceCode = this.provinceList[index].id
				if (provinceCode != this.from.provinceCode) {
					this.cityNum = this.provinceList[index].id
					this.from.provinceCode = this.provinceList[index].id
					this.from.provinceName = this.provinceList[index].areaName
					this.clearCity()
					this.clearArea()
					await this.getCity()
					return
				}
				// const {
				// 	area,
				// 	city,
				// 	province
				// } = obj
				// this.from.provinceCode = province.value
				// this.from.provinceName = province.label
				// this.from.cityCode = city.value
				// this.from.cityName = city.label
				// this.from.districtCode = area.value
				// this.from.districtName = area.label
				// this.areaName = `${province.label} ${city.label} ${area.label}`
			},
			// 市发生改变
			async cityChange (obj) {

				let index = obj[0]

				const cityCode = this.cityList[index].id
				if (cityCode != this.from.cityCode) {
					this.areaNum = this.cityList[index].id
					this.from.cityCode = this.cityList[index].id
					this.from.cityName = this.cityList[index].areaName
					this.clearArea()
					await this.getArea()
					return
				}
			},
			// 区发生改变
			areaChange (obj) {

				let index = obj[0]

				this.areaNum = this.areaList[index].id
				this.from.districtCode = this.areaList[index].id
				this.from.districtName = this.areaList[index].areaName
			},
			clearCity () {
				this.cityList = []
				this.cityCode = ''
				this.cityShow = false
				this.cityName = ''
				this.from.cityCode = ''
				this.from.cityName = ''
			},
			clearArea () {
				this.areaName = ''
				this.areaShow = false
				this.areaList = []
				this.areaCode = ''
				this.from.districtCode = ''
				this.from.districtName = ''
			},
		}
	}
</script>
<style>
	page {
		background-color: #ffffff;
	}
</style>
<style lang="scss" scoped>
	.g-add-address {
		padding: 0 30rpx;

		.option {
			border-bottom: 1rpx solid #eeeeee;
			padding: 30rpx 0;

			.option-title {
				width: 160rpx;
				font-size: 28rpx;
				color: #191919;
				font-weight: 500;
			}

			/deep/ textarea {
				padding: 0 !important;
			}

			.option-content {
				flex: 1;
				justify-content: space-between;

				u-input {
					width: 100%;
				}

				.area-number {
					margin-right: 10rpx;
					width: 123rpx;
					font-size: 28rpx;
					color: #666666;
					text-align: right;
					font-weight: 400;
				}

				.left-icon {
					width: 24rpx;
					height: 24rpx;
				}
			}
		}

		.address-detail {
			padding: 0;
			display: flex;
			// align-items: flex-start;
			width: 100%;
			// height: 88rpx;
			// overflow: hidden;
   //          height: 197rpx;
			// position: relative;
			.xingdongjieshao {
				width: 160rpx;
				font-size: 28rpx;
				color: #191919;
				font-weight: 500;
				position: absolute;
				// float:left;
				top: 0;
				left: 0;
				padding:30rpx 0;
				
			}

			.iostextarea {
				position: absolute;
				left: 24.3%;
				top: 18rpx;
				margin-left: -11rpx;
				width: 73%;
				height: 137rpx;
			}

			.iostextarea textarea {
				position: absolute;
				width: 100%;
				height: 100%;
				font-size: 28rpx;
			}

			.androidtextarea {
				position: absolute;
				left: 24.3%;
				width: 73%;
				height: 137rpx;
			}
            .input-placeholder-style {
            	font-size: 28rpx;
            	color: #666666;
            	font-weight: 400;
            } 
			.androidtextarea textarea {
				width: 100%;
				height: 137rpx;
				float: left;
				padding: 30rpx 0 0 0;
				box-sizing: border-box;
				font-size: 28rpx;
			}

		}
	}

	.set-address {
		justify-content: space-between;

		.option-title {
			width: 300rpx !important;
		}
	}

	

	.bottom-btn {
		width: 690rpx;
		position: fixed;
		bottom: 86rpx;
	}

	.save-btn {
		flex: 3;
		padding: 22rpx 0;
		background: #D1B085;
		border-radius: 45rpx;

		font-size: 32rpx;
		color: #FFFFFF;
		font-weight: 500;
		text-align: center;
	}

	.del-btn {
		margin-right: 10rpx;
		flex: 1;
		padding: 22rpx 0;
		background: #434343;
		border-radius: 45rpx;

		font-size: 32rpx;
		color: #FFFFFF;
		font-weight: 500;
		text-align: center;
	}

	/deep/input {
		height: auto !important;
		min-height: 0 !important;
	}
</style>
