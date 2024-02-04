<template>
	<view class="container">
		<u-navbar :border-bottom="false" title="提现记录" title-bold title-color="#191919" title-size="36"
			back-icon-color="#000000"></u-navbar>
		<view class="wrap">
			<view v-for="(item,index) in recordList" :key="index" class="record-item " @click="goDetail(item)">
				<view class="u-flex u-row-between">
					<view class="amount-text">
            {{getNameByWithdrawType(item)}}
					</view>
            <view class="amount-text">
              -{{switchMoney(item.withdrawPrice)}}
            </view>
				</view>
        <view class='u-flex u-row-between'>
          <view class="amount-time">
            {{item.createDate}}
            <text style="margin-left: 20rpx">提现端口：{{getNameByPlatformType(item)}}</text>
          </view>
          <view class="tip" :class="'tip' +`${[3,4].includes(item.withdrawStatus)?'-3':'-'+item.withdrawStatus}`">{{getNameByWithdrawStatus(item)}}</view>
        </view>
			</view>
		</view>
		<view  v-if="!recordList.length && finished">
			<no-data></no-data>
		</view>

	</view>
</template>

<script>
	import NoData from '@/components/noData.vue'
	export default {
		components: {
			NoData
		},
		data () {
			return {
				recordList: [],
				finished:false,
        current: 1,
        size: 30,
        isMore:true,
			}
		},
    computed: {
      getNameByWithdrawType(){
        return (obj)=>{
          const withdrawType = obj?.withdrawType || ''
          if(withdrawType == 1){
            return '银行卡提现'
          }
          if(withdrawType == 2){
            return '微信提现'
          }
          return '其他'
        }
      },
      getNameByPlatformType(){
        return (obj)=>{
          const platformType = obj?.platformType || ''
          if(platformType == 1){
            return 'h5'
          }
          if(platformType == 2){
            return '小程序'
          }
          if(platformType == 3){
            return 'app'
          }
          return '其他'
        }
      },
      getNameByWithdrawStatus(){
        return (obj)=>{
          const withdrawStatus = obj?.withdrawStatus || ''
          if(withdrawStatus == 1){
            return '提现成功'
          }
          if(withdrawStatus == 2){
            return '提现失败'
          }
          return '提现中'
        }
      },
    },
		onShow () {
			this.withdrawalRecord()
		},
		methods: {
			async withdrawalRecord () {
				try {
				  let param = {
            userPhone: this.$globleData?.userData?.phoneNumber || '',
            current:this.current,
            size:this.size
          }
					let res = await this.$http.withdrawalRecord(param)
          const records = res?.dataInfo?.records || []
          if(this.current >= res?.dataInfo?.pages){
            this.isMore = false
          }
          if(this.current>1){
            this.recordList = this.recordList?.concat(records)
            return
          }
          this.recordList = records
					this.finished = true
				} catch (e) {
					//TODO handle the exception
				}
			},
			goDetail(item){
				this.goTo(`/pagesB/distribution/bankCashout?id=${item.id}`)
			}
		},
    onReachBottom(){
		  if(!this.isMore){
		    return
      }
      this.current = this.current+1
      this.withdrawalRecord()
    }
	}
</script>

<style lang="scss" scoped>
	.container {
		.wrap {
			background: #FFFFFF;
		}

		.record-item {
			width: 690rpx;
			margin: 0 auto;
			height: 147rpx;
			padding: 30rpx 0;
			border-bottom: 1rpx solid #e6e6e6;

			.amount-text {
				font-size: 28rpx;
				font-weight: 500;
				color: #191919;
			}

			.amount-time {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #999999
			}
		}
	}
  .tip{
    margin-top: 6rpx;
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    letter-spacing: 0;
    font-weight: 400;
    &-1{
      color: #57BF68;
    }
    &-2{
      color: #EC4545;
    }
    &-3{
      color: #D1B085;
    }
  }
</style>
