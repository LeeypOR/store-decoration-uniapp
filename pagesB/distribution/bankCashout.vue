<template>
	<view class="container">
		<u-navbar :border-bottom="false" title="提现详情" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
	    <view class="circle"></view>
		<view class="wrap" v-if="detailData">
      <view class="wrap-cirle">
          <image :src="getTopImg" style="height: 100%;width: 100%"></image>
      </view>
			<view  class="bank-name">
				提现-到 {{detailData.bankName}} ({{detailData.cardNo.substr(detailData.cardNo.length-4)}})
			</view>
			<view class="amount-money">
				{{switchMoney(detailData.withdrawPrice)}}
			</view>
			<view class="scuccess">
				{{detailData.withdrawStatus==1?'提现成功':(detailData.withdrawStatus==2?'提现失败':'提现中')}}
			</view>
			<view class="info">
				<view class="item u-flex u-row-between">
					<view class="item-left">
						提现银行
					</view>
					<view class="item-right">
						{{detailData.bankName}}
					</view>
				</view>
        <view class="item u-flex u-row-between">
          <view class="item-left">
            提现端口
          </view>
          <view class="item-right">
           {{getNameByPlatformType}}
          </view>
        </view>
				<view class="item u-flex u-row-between">
					<view class="item-left">
						提现时间
					</view>
					<view class="item-right">
						{{detailData.createDate}}
					</view>
				</view>
        <view class="item u-flex u-row-between" v-if="detailData.withdrawStatus == 1">
          <view class="item-left">
            到账时间
          </view>
          <view class="item-right">
            {{detailData.updateDate}}
          </view>
        </view>
				<view class="item u-flex u-row-between" v-if="detailData.transId">
					<view class="item-left">
						业务单号
					</view>
					<view class="item-right">
						{{detailData.transId}}
					</view>
				</view>
        <view class="item u-flex u-row-between" v-if="detailData.remark">
          <view class="item-left">
            失败原因
          </view>
          <view class="item-right">
            {{detailData.remark}}
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
				detailData:null,
        id:''
			}
		},
    computed:{
      getTopImg() {
        const type = this?.detailData?.withdrawStatus
        if (type == 1) {
          return '/pagesB/static/images/succeed.png'
        }
        if (type == 2) {
          return '/pagesB/static/images/close.png'
        }
        return '/pagesB/static/images/load.png'
      },
      getNameByPlatformType() {
        const platformType = this.detailData?.platformType || ''
        if (platformType == 1) {
          return 'h5'
        }
        if (platformType == 2) {
          return '小程序'
        }
        if (platformType == 3) {
          return 'app'
        }
        return '其他'
      }
    },
    onLoad(option) {
      this.id = option?.id || ''
      if(this.id){
        this.getWithdrawDetail()
      }
    },
    methods:{
		  async getWithdrawDetail(){
		    let param = {
          id:this.id
        }
		    const {dataInfo:res} = await this.$http.withdrawDetail(param)
        this.detailData = res
      }
    }
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 0 30rpx;
		.circle{
			width: 100rpx;
	        height: 50rpx;
			border-radius: 50rpx 50rpx 0 0 ;
			margin: 0 auto;
			margin-top:41rpx;
			background: #FFFFFF;
			
		}
		.wrap{
			
			border-radius: 14rpx;
			background: #FFFFFF;
			position: relative;
			// margin-top: 73rpx;
			.wrap-cirle{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				position: absolute;
				background: #B0B0B0;
				top: 0;
				left: 50%;
				transform: translate(-50%,-50%);
			}
			.bank-name{
			    text-align: center;
			    padding-top: 87rpx;
				font-size: 28rpx;
				color: #191919;
			}
			.amount-money{
				font-size: 60rpx;
				font-weight: 500;
				color: #191919;
				padding: 10rpx;
				text-align: center;
				
			}
			.scuccess{
				text-align: center;
				font-size: 28rpx;
				color: #191919;
			}
			.info{
				padding: 0 30rpx;
				.item{
					height: 100rpx;
					.item-left{
						font-size: 30rpx;
						font-weight: 500;
					    color: #999999;
					}
					.item-right{
						font-size: 30rpx;
						font-weight: 500;
						color: #191919;
					}
				}
			}
		}
	}
</style>
