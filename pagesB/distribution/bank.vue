<template>
  <view>
    <u-navbar z-index="999999" class="location-class" :background="{background:'#00000000'}" :border-bottom="false" title="银行卡"
              title-color="#fff" title-size="36" back-icon-color="#fff" :custom-back="backPage"
    ></u-navbar>
    <view class="header"></view>
    <view class="container">
      <view v-if="bankList.length" class="">
        <view class="title">我的卡
          <text>(共{{ bankList.length }}张)</text>
        </view>
        <view class="bank-list">
          <view v-for="item  in bankList" :key="item.id" class="bank-list-item">
            <view class="item-head">
              <view class="avator"></view>
              <view class="head-title">{{ item.bankName }}储蓄卡</view>
            </view>
            <view class="bank-number">**** *** **** {{ item.cardNo.substring(item.cardNo.length - 4) }}</view>

          </view>
        </view>
        <!-- <view @click="goTo('./addBank')" class="add-bank">添加银行卡</view> -->
      </view>
      <view class="no-data" v-if="finished && bankList.length==0">
        <image src="https://jdz.g1999.com/ghs/20210917/cda98d551fa84d078a5c08a485dfde9a.png"></image>
      </view>
    </view>
  </view>
</template>

<script>
	import noData from '@/components/noData.vue'
export default {
	components:{
		noData
	},
    data(){
		return{
			bankList:[],//银行卡列表
			finished:false,//是否请求完
		}
	},
	onShow() {
		this.getBankList()
	},
	methods:{
		// 获取银行卡信息
		async getBankList(){
			try{
			  let param = {
			    userPhone:this.$globleData?.userData?.phoneNumber
        }
				let res = await this.$http.bindBankList(param)
				this.bankList = res.dataInfo?res.dataInfo:[];
			    this.finished = true
			}catch(e){
				//TODO handle the exception
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.header{
    width: 100vw;
    height: 291rpx;
    background: url('../static/images/bg_fenxiao_top@2x.png');
    background-size: 100% 100%;
    position: absolute;
    top: 0;
}
.container{
    position: relative;
    width: 690rpx;
    height: 1109rpx;
    background: #fff;
    margin: 46rpx auto 0;
    padding: 36rpx 30rpx 0;
    border-radius: 14px 14px 2px 2px;
    .title{
        font-family: PingFangSC-Medium, PingFang SC;
        font-size: 30rpx;
        color: #191919;
        font-weight: bold;
        height: 42rpx;
        line-height: 42rpx;
        text{
            margin-left: 20rpx;
            color: #999;
            font-size: 26rpx;
        }
    }
    .bank-list{
        //margin-top: 30rpx;
        position: absolute;
        top: 108rpx;
        bottom: 140rpx;
        overflow-y: scroll;
        &-item{
            width: 630rpx;
            height: 240rpx;
            background: #c55055;
            border-radius: 10rpx;
            color: #fff;
            padding: 30rpx;
            margin-bottom: 20rpx;
            &.active{
                background-color: rgba(25, 101, 163, 1);
            }
            .item-head{
                display: flex;
                align-items: center;
                font-size: 30rpx;
                .avator{
                    width: 60rpx;
                    height: 60rpx;
                    border-radius: 50%;
                    background: #fff;
                }
                .head-title{
                    margin-left: 20rpx;
                }
            }
            .bank-number{
                margin-top: 38rpx;
                margin-left: 80rpx;
                font-size: 48rpx;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
            }
            
        }
    }
    .add-bank{
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
        bottom: 40rpx;
        transform: translateX(-50%);
    }
	.no-data{
		position: absolute;
		width: 380rpx;
		height: 380rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		image{
			
			width: 100%;
			height: 100%;
		}
	}
}
</style>