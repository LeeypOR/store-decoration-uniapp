<template>
	<view style="background: #FFFFFF;">
		<view class="head">
			<u-navbar :border-bottom="false" title="兑换优惠券" title-bold title-color="#FFFFFF" title-size="36"
                back-icon-color="#ffffff" :background="{ background: '#00000000' }" :custom-back="backPage"
      ></u-navbar>
      <view class="avator u-flex">
        <view class="user-info u-flex">
          <view class="image">
            <image :src="userInfo.avatar || '/static/image/default_avatar.png'" mode=""></image>
          </view>
          <view class="name">
            <view class="user-name">{{ userInfo.nickName || '游客' }}</view>
            <view class="phone">{{ userInfo.phoneNumber }}</view>
          </view>
        </view>
        <view @click="goTo('../exchangeCertificate/index')" class="exchange-coupons u-flex">
          <view class="name">我的兑换券</view>
          <view class="iconfont icon-arrow"></view>
        </view>
      </view>
			<view class="exchange-content">
				<view class="exchange-name">
					兑换码
				</view>
				<view class="input u-flex">
					<input type="number" maxlength="16" @input="exchangeInput" placeholder="请输入16位兑换码" placeholder-class="input-placeholder" v-model="exchangeCode" />
				</view>
				<view @click="$u.throttle(exchange, 1000)" class="exchange-confirm">
					立即兑换
				</view>
			</view>
			<view class="content">
				<view class="title">
					<image class="image" src="../static/image/icon_titile_bg.png"></image>
					<view class="name">
						兑换流程
					</view>
				</view>
				<view class="body">
					<image class="image" src="../static/image/icon_exchange_step.png"></image>
					<view class="u-flex u-row-between body-item">
						<view class="name">
							输入兑换码
						</view>
						<view class="name">
							兑换优惠券
						</view>
						<view class="name">
							使用优惠券
						</view>
					</view>
				</view>
				<view class="title">
					<image class="image" src="../static/image/icon_titile_bg.png"></image>
					<view class="name">
						兑换说明
					</view>
				</view>
				<view class="foot">
					<view class="text">
						1. 输入兑换码可兑换优惠券等礼券，兑换的优惠券等礼券可在「我的-我的优惠券」中查看；
					</view>
					<view class="text">
						2. 优惠券兑换成功后，可在有效期内结算使用；
					</view>
					<view class="text">
						3. 一个兑换码仅能兑换一次，兑换后兑换码即作废；
					</view>
					<view class="text">
						4. 不同批次的优惠券兑换码有兑换次数限制，超过限制不可兑换。
					</view>
				</view>
			</view>
		</view>
	<u-mask :show="maskShow" @click="maskShow = false">
    <view class="mask-wrap" @tap.stop>
      <image class="point-image" src="../static/image/yhq_lw.png"></image>
      <view class="bg-img">
        <image src="../static/image/bg_youhuiquan_tk.png"></image>
        <view class="exchange">
          兑换领取
        </view>
        <view v-if="coupDetail" class="coupon-card">
          <view class="left">
            <view v-if="[2,4].includes(coupDetail.couponType)">
              <view style="text-align: center">
                <text class="u-font-30 discount">{{ coupDetail.discountRatio }}折券</text>
                <text v-if="coupDetail.mostDiscount!=-1" class="discount-price" style="display: block">
                  最多优惠{{ coupDetail.mostDiscount }}
                </text>
              </view>
						</view>
						<view v-else class="" style="text-align: center">
							<view class="price"><text>¥</text><text>{{coupDetail.couponAmount}}</text></view>
							<view v-if="coupDetail.couponFullMoney !=-1" class="coupon-desc">满{{coupDetail.couponFullMoney}}减{{coupDetail.couponAmount}}元</view>
							<view class="coupon-desc" v-else>无门槛</view>
						</view>
          </view>
          <view class="right">
            {{ coupDetail.couponName }}
          </view>
        </view>
        <view class="exchange-success">
          {{describe}}
        </view>
        <view @click="goDetail" class="coupon-btn">
          {{btnText}}
        </view>
      </view>
    </view>
	</u-mask>
  <vip-popup :refresh="refresh"></vip-popup>
	</view>
</template>

<script>
import vipPopup from "../../components/vipPopup";
	export default {
	  components:{vipPopup},
		data() {
			return {
			  title:'兑换专区',
				userInfo:{},
				exchangeCode:"",
				maskShow:false,
				coupDetail:null,
        describe:'兑换成功后放入“我的-优惠券”',
        btnText:'立即使用',
        refresh:''
			}
		},
      // 分享
    onShareAppMessage(){
       getApp().globalData.preveImage='preveImage'
      return {
        title: '',
        imageUrl:'',
        path:`pagesD/redeemCoupons/redeemCoupons`
      }
    },
    onLoad(option) {
      this.code = option?.code || ''
    },
    onShow() {
      this.refresh = new Date().getTime().toString()
      if (!this.$globleData?.userData || JSON.stringify(this.$globleData.userData) == '{}') {
        this.goTo('/pages/login/index')
        return
      }
      this.userInfo = this.$globleData.userData
      if (this.code) {
        this.exchangeCode = this.code
        this.couponExchange()
      }
    },

        methods: {
			// input事件
			exchangeInput(e){
				console.log(e)
			},
			exchange(){
				if(this.exchangeCode){
					this.couponExchange()
				}else{

					this.$toast('请输入兑换码')
				}
				// this.maskShow = true

			},
			// 立即领取跳转
			goDetail(){
				let id,groupId
				if(this.coupDetail && this.coupDetail.enableGoods){
					id = this.coupDetail.enableGoods
					if(this.coupDetail.enableGoods.indexOf(',')<0){ //如果enableGoods只有一个跳转详情
						this.goTo('/pagesA/shop/goodsDetail?id='+id,false,true)

					}else{//多个ids就跳商品列表搜索页面
						this.goTo('/pagesB/search/goodsList?goodsIds='+id,false,true)
					}
				}else if(this.coupDetail && this.coupDetail.enableGoodsGroup){
					groupId = this.coupDetail.enableGoodsGroup
					if(this.coupDetail.enableGoods.indexOf(',')<0){//单个分类id跳商品列表搜索页面，
						this.goTo('/pagesB/search/goodsList?goodsGroupId='+groupId,false,true)
					}else{//多个分类id跳分类页面，
						this.goTo('/pages/category/index',true,false,true)
					}
				}else{//enableGoods和enableGoodsGroup都是空的也跳转分类页面
					this.goTo('/pages/category/index',true,true)
				}
			},
			// 兑换优惠券
      async couponExchange() {
        try {
          let userSource = this.code ? 2 : 1
          let {dataInfo: res=null} = await this.$http.couponExchange({exchangeCode: this.exchangeCode, userSource})
          if(res?.exchangeCodeStatus == 3){
                uni.showModal({
                title: '温馨提示',
                content: '优惠券已使用或已失效',
                confirmText:'去首页逛逛',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        this.goTo('/pages/home/index',true)
                    }
                }
            })
            return
          }
          if(res?.exchangeCodeStatus == 1){
            this.$toast('兑换成功')
          }
          if(res?.exchangeCodeStatus == 2){
            this.describe = '您的生日礼品还未兑换'
            this.btnText = '马上兑换'
          }
          this.maskShow = true
          this.exchangeCode = ''
          this.coupDetail = res
        } catch (e) {
          //TODO handle the exception
        }

      },
		}
	}
</script>
<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped lang="scss">
   .head{
     width: 100%;
     height: 34.5vh;
     background: url(../static/image/bg_jifen.png) no-repeat;
     background-size: cover;
     position: relative;

     .avator {
        margin: 1.5vh 50rpx 3.1vh 50rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .user-info{
          .image {
            width: 8.2vh;
            height: 8.2vh;
            border-radius: 50%;

            image {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }

          .name {
            margin-left: 30rpx;

            .user-name {
              font-size: 36rpx;
              color: #FFFFFF;
              font-weight: 600;
            }

            .phone {
              margin-top: 8rpx;
              opacity: 0.7;
              font-size: 24rpx;
              color: #FFFFFF;
            }
          }
        }
        .exchange-coupons{
          .name{
            font-size: 28rpx;
            color: $themeColor;
            text-align: center;
            font-weight: 500;
          }
          .icon-arrow{
            color: $themeColor;
            font-size: 34rpx;
          }
        }

     }

     .exchange-content {
       width: 650rpx;
       height: 25.7vh;
       margin: 42rpx auto;
       background: #FFFFFF;
       box-shadow: 0rpx 14rpx 30rpx 0rpx rgba(0, 0, 0, 0.1);
       border-radius: 14rpx;
       padding: 50rpx;

       .exchange-name {
         font-size: 24rpx;
         color: #D1B085;
         font-weight: 500;
       }
				.input{
					width: 100%;
					height: 76rpx;
                    margin-top: 10rpx;
					border-bottom: 1rpx solid #C8C8C8;
                    input{
                        width: 100%;
                        font-size: 40rpx;
                    }
					/deep/.input-placeholder{
						font-size: 40rpx;
						color: #CCCCCC;
						font-weight: 600;
					}
				}
				.exchange-confirm{
					width: 530rpx;
					height: 76rpx;
					margin: 50rpx auto;
					background: #D1B085;
					border-radius: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
					color: #FFFFFF;
				}
     }
   }

   .content {
     background: #FFFFFF;

     .title {
       width: 300rpx;
       height: 42rpx;
       text-align: center;
       margin: 47rpx auto;
       position: relative;

       .image {
         width: 100%;
         height: 14rpx;
         position: absolute;
         top: 50%;
         left: 0;
         transform: translateY(-50%);
       }

       .name {
         font-size: 28rpx;
         color: #191919;
         text-align: center;
         font-weight: 400;
       }
     }

     .body {

       text-align: center;

       .image {
         width: 552rpx;
         height: 88rpx;
       }

       .body-item {
         width: 560rpx;
         margin: 16rpx auto;

         .name {
           font-size: 24rpx;
           color: #191919;
         }
       }
     }

     .foot {
       width: 100%;
       padding: 0 50rpx;

       .text {
         font-size: 24rpx;
         color: #666666;
         line-height: 40rpx;
         font-weight: 400;
       }
     }
   }

   // 兑换遮罩层
   .mask-wrap {
     width: 650rpx;
     height: 685rpx;
     position: relative;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     border: 1px solid transparent;
     .point-image {
       width: 279rpx;
       height: 200rpx;
       position: absolute;
       top: 0;
       left: 50%;
       transform: translateX(-50%);
     }

     .bg-img {
       // width: 630rpx;
       // height: 550rpx;
       height: 100%;

       image {
         position: absolute;
         bottom: 0;
         z-index: -1;
         width: 100%;
         height: 550rpx;
       }

       .exchange {
         margin-top: 215rpx;
         font-size: 32rpx;
         font-weight: 600;
         color: #FFFFFF;
         text-align: center;
       }

       .coupon-card {
         width: 100%;
         padding: 20rpx 25rpx;
         display: flex;

         .left {
           position: relative;
           width: 230rpx;
           height: 190rpx;
           background: #FFFFFF;
           border-radius: 14rpx 0 0 14rpx;
           border-right: 1rpx dashed #cccccc;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;

           &:after {
             content: "";
             height: 19rpx;
             width: 38rpx;
             background: #282724;
             border-radius: 0px 0px 19rpx 19rpx;
             position: absolute;
             right: 0;
             top: 0;
             z-index: 10;
             transform: translate(50%, 0);
           }

           .price {
             color: #D1B085;
             font-weight: 600;

             text {
               &:first-of-type {
                 font-size: 28rpx;
               }

               &:last-of-type {
                 font-size: 46rpx;
                 color: #999999;
               }
             }
           }

           .discount {
             font-size: 36rpx;
             color: #D1B085;
           }

           .discount-price {
             font-size: 28rpx;
             color: #999999;
           }

           .coupon-desc {
             font-size: 22rpx;
             // padding-left: 20rpx;
             color: #999999;
           }
         }

         .right {
           flex: 1;
           position: relative;
           height: 190rpx;
           padding: 0 28rpx;
           border-radius: 0 14rpx 14rpx 0;
           background: #FFFFFF;
           text-align: center;
           line-height: 190rpx;
           font-size: 36rpx;
           font-weight: 600;
           color: #191919;

           &::before {
             content: "";
             height: 16rpx;
             width: 32rpx;
             background: #282724;
             border-radius: 16rpx 16rpx 0 0;
             position: absolute;
             left: 0;
             bottom: 0;
             transform: translate(-50%, 0);
           }
         }
       }

       .exchange-success {
         text-align: center;
         padding: 20rpx 0 40rpx 0;
         font-size: 30rpx;
         color: #999999;
       }

       .coupon-btn {
         width: 550rpx;
         height: 70rpx;
         margin: 0 auto 30rpx;
         background: $themeColor;
         border-radius: 45rpx;
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: 28rpx;
         font-weight: 600;
         color: #FFFFFF;
       }
     }
   }
</style>
