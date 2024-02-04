<template>
	<view>
    <view class="u-flex" style="flex-direction: column;height: 100vh;overflow: hidden">
      <u-navbar :border-bottom="false" title="我的优惠券" title-bold title-color="#191919" title-size="36"
                back-icon-color="#000000" :custom-back="backPage"></u-navbar>
      <view class="tabs-container">
        <view class="input-wrap">
          <input type="text" @input="cardInput" maxlength="25" placeholder="请输入优惠码" placeholder-class="place-holder" v-model="keyWord" />
          <view @click="noMultipleClicks(handelCheck)" class="btn">
            兑换
          </view>
        </view>
        <u-tabs :list="list"
                :is-scroll="false"
                :current="current"
                inactive-color="#66666"
                @change="change"
                active-color="#191919">
        </u-tabs>
      </view>
      <view class="content" v-if="couponsList.length">
        <view class="wrap" >
            <couponCom :couponsList="couponsList" :current="current"></couponCom>
        </view>
      </view>
    </view>
    <no-data v-if="!couponsList.length " type='noCoupon'></no-data>
    <u-mask :show="maskShow" @click="maskShow = false">
      <view class="mask-wrap">
        <image class="point-image" src="@/pagesA/static/image/yhq_lw.png"></image>
        <view class="bg-img">
          <image src="@/pagesA/static/image/bg_youhuiquan_tk.png"></image>
          <view class="exchange">
            兑换领取
          </view>
          <view class="coupon-card">
            <view class="left">
              <view class="price">
                <text>¥</text>
                <text>{{ coupDetail.couponAmount }}</text>
              </view>
              <view class="coupon-desc">满{{ coupDetail.couponFullMoney }}减{{ coupDetail.couponAmount }}元</view>
            </view>
            <view class="right">
              {{ coupDetail.couponName }}
            </view>
          </view>
          <view class="exchange-success">
            兑换成功后放入“我的-优惠券”0
          </view>
          <view @click="recieve" class="coupon-btn">
            立即领取
          </view>
        </view>
      </view>
		</u-mask>
	</view>
</template>

<script>
	import NoData from "../../components/noData";
    import couponCom from "../components/coupon.vue";
	export default {
		components: {
			NoData,couponCom
		},
		data () {
			return {
                title:'我的优惠券',
				list: [{
						name: '未使用'
					},
					{
						name: '已使用/已过期'
					}
				],
				current: 0,
				showArrow: false,
				couponsList: [],
				maskShow:false,
				keyWord:'',
                coupDetail:null,
				finished:false,
        recordId:''    // 抽奖绑定id
			}
		},
     onLoad (option){
       this.recordId = option?.recordId || null
    },
    async onShow() {
      if (this.recordId) {
        try {
          await this.lotteryBand()
          this.recordId = ''
          setTimeout(() => {
            this.getCouponsList()
          }, 1000)
        } catch (e) {}
      } else {
        this.getCouponsList()
      }
    },
		methods: {
      // 转盘抽奖奖品绑定
       lotteryBand() {
        if (!this.recordId) {
          return
        }
         this.$http.lotteryBand({prizeType: 1, recordId: this.recordId}, true)
      },
			// 兑换优惠券
			async couponExchange(){
				let res = await this.$http.couponExchange({exchangeCode:this.keyWord,userSource:1})
				if(res.returnCode == 1000 ){
					this.$toast('兑换成功')
					this.getCouponsList()
				}
			},
			// 证件只能输入数字和字母
			cardInput(e){
				this.$nextTick(() => {
					this.keyWord = e.detail.value.replace(/[\W]/g,'')

				})
			},
            // 获取优惠券详情
            async getCouponList(){
                let res =await this.$http.getCouponByIds({couponId:this.keyWord,receiveType:'1'})

                if(res.dataInfo){
                    this.coupDetail = res.dataInfo
                    this.maskShow = true

                }
            },
            handelCheck(){
               if(this.keyWord){
                  // this.getCouponList()
                this.couponExchange()
               }
            },
			change (index) {
				this.couponsList = []
				this.current = index;
                this.getCouponsList()
			},
			async recieve() {
                let getStartTime = new Date(this.coupDetail.getStartTime.replace(/-/g,'/')).getTime()
                let getEndTime = new Date(this.coupDetail.getEndTime.replace(/-/g,'/')).getTime()
                let currentTime = new Date().getTime()
                if (currentTime <= getEndTime && currentTime >= getStartTime) {
                let res = await this.$http.receiveCoupons({couponId: this.coupDetail.id,receiveType:this.coupDetail.couponOwnWay})
                if (res.returnCode == 1000) {
                    this.$toast('领取成功')
                }else{
                    this.maskShow = true
                    this.$toast('领取失败')
                }
                } else {
                this.$toast('请在有效的时间领取')

                return
                }

			},
			// 优惠券列表
			async getCouponsList () {

				this.finished = false
				let params = {}
				if(this.current == 0){
					params = {
						couponStatus : '0'
					}
				}else{
					params = {
						couponStatus : '1,2'
					}
				}

				let res = await this.$http.couponList(params)
				this.couponsList = res.dataInfo
				this.finished = true
				// if(this.current == 0){
				// 	this.couponsList = res.dataInfo.filter(item=>{
				// 		return new Date().getTime()<=new Date(item.useEndTime.replace(/-/g,'/')).getTime() && new Date().getTime()>=new Date(item.useStartTime.replace(/-/g,'/')).getTime()
				// 	})
				// }else{
				// 	this.couponsList = res.dataInfo
				// }


			}

		},
		computed: {



		}
	}
</script>

<style scoped lang="scss">
	/deep/.u-tab-bar {
		background: $themeColor!important;
	}
  /deep/.explain{
    color: #666666!important;
  }
	.tabs-container {
		//position: fixed;
		//top: 90rpx;
		width: 100%;
		.input-wrap{
			width: 100%;
			height: 120rpx;
			//margin-top: 90rpx;
			padding: 20rpx 30rpx;
			background: #FFFFFF;
			display: flex;
			input{
				width: 530rpx;
				height: 80rpx;
				padding-left:30rpx ;
				background: #F8F8F8;
				border-radius: 40rpx 0 0 40rpx;
			}
			/deep/.place-holder{
				font-size: 28rpx;
				font-weight: 400;
				color: #999999;
			}
			.btn{
				width: 220rpx;
				height: 80rpx;
				background: $themeColor;
				border-radius: 0px 40rpx 40rpx 0px;
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.content {
		padding: 30rpx;
		height: 100%;
		background-color: #f8f8f8;
		//margin-top: 194rpx;
    flex: 1;
    overflow-y: scroll;

		.wrap {
			margin-bottom: 20rpx;




		}

	}
  .icon-app_icon_xiala{
    font-size: 28rpx;
  }
  // 兑换遮罩层
  .mask-wrap{
	  width: 630rpx;
	  height: 666rpx;
	  position: relative;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%,-50%);
	  border: 1px solid transparent;
	  .point-image{
		  width: 279rpx;
		  height: 200rpx;
		  position: absolute;
		  top: 0;
		  left: 50%;
		  transform: translateX(-50%);
	  }
	  .bg-img{
		  // width: 630rpx;
		  // height: 550rpx;
		  height: 100%;
		  image{
			 position: absolute;
			 bottom: 0;
			  z-index: -1;
			  width: 630rpx;
			  height: 550rpx;
		  }
		  .exchange{
			  margin-top: 215rpx;
			  font-size: 32rpx;
			  font-weight: 600;
			  color: #FFFFFF;
			  text-align: center;
		  }
		  .coupon-card{
			  width: 100%;
			  padding: 20rpx 30rpx;
			  display: flex;
			  .left{
				  position:relative;
				  width: 210rpx;
				  height: 190rpx;
				  background: #FFFFFF;
				  border-radius: 14rpx 0 0 14rpx;
				  border-right: 1rpx dashed #cccccc;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
				  &:after{
					  content: "";
					  height: 19rpx;
					  width: 38rpx;
					  background: #282724;
					  border-radius:0px 0px 19rpx 19rpx ;
					  position: absolute;
					  right: 0;
					  top: 0;
					  z-index: 10;
					  transform: translate(50%,0);
				  }
				  .price{
					  color: #E8B759;
					//   padding: 48rpx 0 10rpx 45rpx;
					  font-weight: 600;
					  text{
						  &:first-of-type{
							  font-size: 28rpx;
						  }
						  &:last-of-type{
						  	  font-size: 46rpx;
						  }
					  }
				  }
				  .coupon-desc{
					  font-size: 22rpx;
					  padding-left: 20rpx;
					  color: #999999;
				  }
			  }
			  .right{
				 flex: 1;
				 position:relative;
				 height: 190rpx;
				 border-radius:  0 14rpx 14rpx 0 ;
				 background: #FFFFFF;
				 padding: 71rpx   69rpx 0 29rpx;
				 font-size: 36rpx;
				 font-weight: 600;
				 color: #191919;
				 &::before{
				 	content: "";
				 	height: 16rpx;
				 	width: 32rpx;
				 	background: #282724;
				 	border-radius: 16rpx 16rpx 0 0;
				 	position: absolute;
				 	left: 0;
				 	bottom: 0;
				 	transform: translate(-50%,0);
				 }
			  }
		  }
		  .exchange-success{
			  text-align: center;
			  padding: 20rpx 0 40rpx 0;
			  font-size: 28rpx;
			  color: #999999;
		  }
		  .coupon-btn{
			  width: 550rpx;
			  height: 70rpx;
			  margin: 0 auto;
			  background: #E8B759;
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
