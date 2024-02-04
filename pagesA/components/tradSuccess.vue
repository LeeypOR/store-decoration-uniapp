<template>
	<view class="trad-success u-flex">
	   <image  :src="getImage" ></image>
		<view class="u-margin-left-30">
	    	<view  class="tip-title">
	    		{{title}} <text v-if="liftCode" class="liftcode">【{{liftCode}}】</text>
	    	</view>
			<view class="tip-bottom">
				<view class="u-flex" v-if="type =='ORDER_UNPAID'">
					<view class="">
						剩余付款时间
					</view>
					<u-count-down :timestamp="payTime" font-size="24" color="#999999" separator-size="24" separator-color="#999999" separator="zh" :show-days="false" ></u-count-down>
				</view>
				<view v-else>{{tip}}</view>
			</view>
	    </view>
	</view>
</template>

<script>
import success from '../static/image/icon_refund_successful_3x.png'
import closed from '../static/image/icon_closed.png'
import code from '../static/image/icon_code.svg'
import groupRun from '../static/image/icon_delivery_pintuan.png'
import groupPay from '../static/image/icon_money.png'
export default {
  props:{
    // success , fail
    type:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default: "退款成功啦"
    },
    tip:{
      type:String,
      default:'2021年5月21日 09:45'
    },
	liftCode:{
	  type:String,
	  default:''
	},
	groupType:{
		type:String,
		default:''
	},
	payTime:{
		type:Number,
		default:0
	}
  },
  created(){

  },
  computed:{
    getImage(){
      let img = success
      if(this.type == 'fail' ||this.type == 'GROUP_FAIL' || this.type ==  'ORDER_CANCEL'){
        img = closed
      }else if(this.type == 'code'){
		 img = code
	  }else if(this.type == 'GROUP_RUNNING'){
		 img = groupRun
	  }else if(this.type == 'ORDER_UNPAID'){
		 img = groupPay
	  }

      return img
    }
  }
}
</script>

<style scoped lang="scss">
	.trad-success{
    margin-bottom: 20rpx;
		background: #FFFFFF;
		width: 100%;
		padding: 35rpx 0 35rpx 30rpx;
		image{
			width: 68rpx;
			height: 68rpx;
		}
		.tip-title{
			font-size: 32rpx;
			color: #191919;
			font-weight: 500;
		}
		.tip-bottom{
      margin-top: 4rpx;
			font-size: 24rpx;
      color: #999999;
		}

	}
	.icon-icon_logistics_delivered{
		color: #E8B759;
		font-size: 36rpx;
	}
</style>
