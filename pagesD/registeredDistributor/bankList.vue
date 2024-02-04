<template >
    <view class="container">
       <u-navbar :border-bottom="false" title="支持的银行列表" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
       <view class="bank-wrap " >
           <view class="item u-flex u-row-center" v-for="(item,key) in bankList" :key="key">
             {{ item.name }}
           </view>
       </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
          bankList: [
            {
              id: 1,
              name: '工商银行'
            },
            {
              id: 2,
              name: '农业银行'
            },
            {
              id: 3,
              name: '建设银行'
            },
            {
              id: 4,
              name: '中国银行'
            },
            {
              id: 5,
              name: '交通银行'
            },
            {
              id: 6,
              name: '华夏银行'
            },
            {
              id: 7,
              name: '招商银行'
            },
            {
              id: 8,
              name: '浦发银行'
            },
            {
              id: 9,
              name: '中信银行'
            },
            {
              id: 10,
              name: '广发银行'
            },
            {
              id: 11,
              name: '光大银行'
            },
            {
              id: 12,
              name: '平安银行'
            },
            {
              id: 13,
              name: '民生银行'
            },
            {
              id: 14,
              name: '兴业银行'
            },

            {
              id: '',
              name: ''
            },
          ]
        }
    },
}
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
    .container{
		padding: 0 31rpx;
		
		.bank-wrap{
			display: flex;
			flex-wrap: wrap;
			width: 686rpx;
			margin-top: 30rpx;
			border-top: 1rpx solid #CCCCCC;
			border-left: 1rpx solid #CCCCCC;
			.item{
				width: 228rpx;
				height: 80rpx;
				background: #FFFFFF;
				border-right: 1px solid #CCCCCC;
				border-bottom: 1px solid #CCCCCC;
			}
		}
	}
</style>
