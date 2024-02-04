<template>
	<view class="memberBuy">
		<p class="title">卡种选择</p>
		<view class="member-list u-flex" v-for="(item,index) in memberList" :key="index" @click="select(item,index)" :style="selected == index ? 'border: 4rpx solid #D1B085;': '' ">
			<image v-if="selected == index" class="selectedImg" src="/pagesB/static/images/payMember/middle_modalbox_fufeihuiy_jiage@2x.png"></image>
			<image class='list-img' :src="cardIcon" mode="aspectFit"></image>
			<view class="list-date">
				<p class="list-date-top">{{cardName+formatDate(item.validPeriodUnit)}}卡会员</p>
				<!-- <p class="list-date-bottom">{{item.time}}天</p> -->
			</view>
			<view class="list-cost u-flex">
				<span class="icon">¥</span>
				<text class="info">{{switchMoney(item.price)}}/{{formatDate(item.validPeriodUnit)}}</text>
			</view>
		</view>

    <!-- 粉丝会员权益 -->
    <view style="margin-top: 60rpx;">
      <member-card @memberClick="memberClick" :getMemberList="memberPopupList" :tinyPageData="tinyPageData"></member-card>
    </view>

<!--		<view class="title">会员福利</view>-->

<!--		<view class="welfare-wrap">-->
<!--			<welfare-list :integralRatio="integralRatio" :goodsStr="goodsStr"></welfare-list>-->
<!--			<view @click="toast" class="welfare-top"></view>-->
<!--		</view>-->
		
        <view class="seat"></view>
		<view class="btn-section">
			<view class="price">
				确认支付 ¥
				<text v-if="memberList[selected]" class="price-num">{{switchMoney(memberList[selected].price)}}</text>
			</view>
			<view class="btn" @click="$u.throttle(memberOrder, 2000)">确认支付</view>
		</view>
    <member-popup ref="memberPopup" :memberList="memberPopupList" :index="memberIndex" :isClick="isClick"></member-popup>
	</view>
</template>

<script>
import memberPopup from "./memberPopup";
import {memberList} from './info'
import welfareList from '@/components/welfareList.vue'
import memberCard from "./memberCard";
	export default {
		components: { welfareList,memberPopup,memberCard},
		data () {
			return {
				selected: 0,
				cardName: '',
				cardIcon: '',
				memberList: [],
				integralRatio: null,
				goodsStr: {},
				cardId: '', // 卡id
        memberPopupList:[],
        memberIndex:0,
        tinyPageData: {},
        descriptionName: '',
        isClick:false
			}
		},
		onLoad(option){
			this.cardId = option?.cardId || ''
		},
		onShow () {
			this.getInfo()
      this.getMemberCenter()
			this.getMemberInfo()
		},
		computed: {
      // getMemberList(){
      //   this.memberPopupList =  memberList[4]
      //   // if(![0,4].includes(this.current)){
      //   //   this.memberPopupList =  memberList[1]
      //   // }
      //   return this.memberPopupList
      //
      //   // if(this.current<= list.length){
      //   //   return this.vipInfoList[this.current]?.benefitsBriefInfoList || []
      //   // }
      //   // return []
      // },
      getShowBtn(){
        if(this.memberList.length >= 2 && this.memberList[1].own == '1'){
          return true
        }
        return false
      },
		},
		methods: {
      //根据用户id查询会员信息
      async getMemberInfo() {
        const res = await this.$http.getMemberInfo()
        this.vipInfoList = res?.dataInfo || []
        const length = this.vipInfoList.length - 1
        let obj = this.vipInfoList[length]
        this.memberPopupList = obj?.benefitsBriefInfoList || []
        this.isClick  =obj?.currentGrade || false
      },
      clickSmallImg(data) {
        if (data.jumpPageType == 'GOODS') {
          //商品
          if (!data.jumpPageId) {
            return uni.showModal({
              title: '温馨提示',
              content: '页面跳转ID为空',
              showCancel: false,
              success(res) {}
            });
          }
          uni.navigateTo({
            url: '/pagesA/shop/goodsDetail?id=' + data.jumpPageId,
            success: res => {},
            fail: () => {},
            complete: () => {}
          });
        } else if (data.jumpPageType == 'GOODS_GROUP') {
          //商品分类
          uni.navigateTo({
            url: '/pagesB/search/goodsList',
            success: res => {},
            fail: () => {},
            complete: () => {}
          });
        } else if (data.jumpPageType == 'MSPAGE') { //微页
          if (!data.jumpPageId) {
            return uni.showModal({
              title: '温馨提示',
              content: '页面跳转ID为空',
              showCancel: false,
              success(res) {}
            });
          }
          uni.navigateTo({
            url: '/pages/home/miniPage?id=' + data.jumpPageId,
            success: res => {},
            fail: () => {},
            complete: () => {}
          });
        }
      },
      async memberClick(index=0) {
        if (this.memberPopupList[0].name == '家居顾问') {
          if (index == 0) {
            this.goTo('/pagesD/addFriend/index')
            return
          }
          index = index && index - 1
        }
        this.memberIndex = index
        this.$refs.memberPopup.show = true
        return
      },
			select(item,index) {
				
				this.selected = index
			},
			formatDate (val) {
				switch (val) {
					case 1:
						return '年'; 
					case 2:
						return '季'; 
					case 3:
						return '月';  
				}
			},
      async getMemberCenter() {
        const res = await this.$http.getMemberCenter()
        this.tinyPageData = {
          jumpPageId: res?.dataInfo?.jumpTargetValue || '',
          jumpPageType: res?.dataInfo?.jumpTargetType || '',
          isShow: res?.dataInfo.isShow
        }
        this.shopDataList = JSON.parse(res.dataInfo.pageMsJson)
        this.descriptionName = res?.dataInfo?.description
      },
			async getInfo() {
				let res = await this.$http.getPayMemberInfo({cardId: this.cardId})
				this.cardName = res.dataInfo?.cardName
				this.cardIcon = res.dataInfo?.icon
				this.memberList = res.dataInfo?.payRuleList
				this.integralRatio = res.dataInfo?.integralRatio
				this.goodsStr = res.dataInfo || null 
				
			},
			async memberOrder() {
				let res = await this.$http.memberOrder({cardId: this.cardId, periodUnit: this.memberList[this.selected].validPeriodUnit,orderFromType:1})
				var orderId = res?.dataInfo || ''
				this.goPay(orderId)
			},
			// 去支付
			async goPay(orderId){
				const {dataInfo: res} = await this.$http.payWxOrder({orderId:orderId,orderPayType:4})
				const paySign = res?.paySign || ''
				// 如果获取失败 就直接跳转到订单待支付页面
				if(!paySign){
					// // 跳转待支付页面
					// this.goTo('/pagesA/order/waitPay')
					// return
					this.$toast('支付失败！')
					return
				}
				// 成功 调起微信支付
				wx.requestPayment({
					timeStamp: res.timeStamp,
					nonceStr: res.nonceStr,
					package: res.packageValue,
					signType: res.signType,
					paySign: res.paySign,
					success: (res)=> {
						this.goTo(`/pagesB/payMemberCenter/index?cardId=${this.cardId}`)
					},
					fail: (res)=> {
						// this.goTo('/pagesA/order/waitPay')
						this.$toast('支付失败！')
					}
				})
			},
			toast() {
				this.$toast('购买会员卡，享受更多福利')
			}
		}
	}
</script>

<style lang="scss" scoped>
.memberBuy {
	background: #FAFAFA;

	.title {
		margin-top: 30rpx;
		margin-left: 30rpx;
		font-size: 32rpx;
		color: #191919;
		font-weight: 600;
	}

	.member-list {
		margin: 20rpx auto 0;
		width: 690rpx;
		height: 148rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(0,0,0,0.05);
		border-radius: 20rpx;
		padding: 0 60rpx;
		justify-content: space-between;
		position: relative;
		.selectedImg {
			position: absolute;
			top: -2rpx;
			right: -2rpx;
			width: 60rpx;
			height: 32rpx;
		}
		.list-img {
			width: 80rpx;
		}
		.list-date {
			flex: 1;
			margin-left: 29rpx;
			font-size: 24rpx;
			font-weight: 500;
			.list-date-top {
				height: 33rpx;
				color: #333333;
			}
			.list-date-bottom {
				height: 33rpx;
				color: #D1B085;
			}
		}
		.list-cost {
			align-items: baseline;
			text-align: right;
			font-weight: 400;
			.icon {
				height: 33rpx;
				font-size: 24rpx;
				color: #191919;
			}
			.info {
				height: 62rpx;
				font-size: 44rpx;
				color: #333333;
			}
		}
	}

	.welfare-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		.welfare-top {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			z-index: 10;
			background: transparent;
		}
	}
	.seat{
		height: calc(calc(env(safe-area-inset-bottom) / 2) + 98rpx);
	}
	.btn-section {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 750rpx;
		height: calc(calc(env(safe-area-inset-bottom) / 2) + 98rpx);
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 0rpx 0rpx rgba(230,230,230,1);
		display: flex;
		z-index: 999;
		.price {
			padding-left: 30rpx;
      padding-top: 20rpx;
			width: 450rpx;
			font-size: 24rpx;
			color: #333333;
			font-weight: 400;
			.price-num {
				height: 62rpx;
				font-size: 44rpx;
				color: #333333;
				font-weight: 400;
			}
		}
		.btn {
			width: 300rpx;
      margin-top: 15rpx;
			height: 78rpx;
      margin-right: 30rpx;
			background: #D1B085;
      border-radius: 50rpx;
			font-size: 28rpx;
			color: #FFFFFF;
			font-weight: 400;
			text-align: center;
			line-height:78rpx;
		}
	}

	/deep/ .discount {
		margin-bottom: calc(calc(env(safe-area-inset-bottom) / 2) + 148rpx) !important;
	}

}

.member-card{
  position: relative;
  margin: 60rpx 30rpx 40rpx;
  padding: 40rpx 10rpx 48rpx;
  background-color: #ffffff;
  border-radius: 14rpx;
  &-title{
    text-align: center;
    font-size: 28rpx;
    font-weight: 500;
    color: #191919;
  }
  &-list{
    margin-top: 20rpx;
    //flex-wrap: nowrap;
    .item-card{
      padding: 20rpx 15rpx 10rpx 15rpx;
      justify-content: space-between;
      position: relative;
      image{
        width: 64rpx;
        height: 64rpx;
      }
      &-title{
        margin-top: 8rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #000000;
      }
      .contact-class{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .item-card-no{
      filter: grayscale(100%);
      text{
        color: #999999!important;
      }
    }
  }
  .member-img{
    position: absolute;
    top: 20rpx;
    right: 0;
    width: auto;
    height: auto;
    background-image: url("../../static/image/icon_member.png");
    padding: 4rpx  20rpx 20rpx;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    font-size: 20rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
}
/deep/.u-mode-center-box{
  border-radius: 20rpx;
}
.member-card-title{
  width: 100%;
  justify-content: center;
  .vip-card-img{
    width: 40rpx;
    height: 40rpx;
  }
  .member-title{
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    margin: 0 16rpx;
  }
}
.member-list-three{
  flex-wrap: wrap;
  justify-content: space-between;
  .item-card{
    padding: 20rpx 0;
    margin-top: 20rpx;
    width: 33%;
    word-wrap: normal;
    image{
      width: 90rpx;
      height: 90rpx;
      margin-bottom: 16rpx;
    }
  }
  &:after{
    content: '';
    width: 33%;
  }
}
/deep/.u-mode-center-box{
  background: rgba(0,0,0,0)!important;
}
</style>

