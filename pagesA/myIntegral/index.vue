<template>
	<view class="container u-flex">
		<view class="head">
			<image class="bg-img" src="../static/image/bg_jifen.png"></image>
			<u-navbar class="location-class" :border-bottom="false" title="我的积分" title-bold title-color="#ffffff"
				title-size="36" background="{ background: '#00000000' }"
				back-icon-color="#ffffff" />
			<view class="my-number">{{integrateInfo.currentIntegrate || 0}}</view>
			<view class="message">
				累计获取{{integrateInfo.acquireIntegrate || 0}}，累计使用{{Math.abs(integrateInfo.usedIntegrate )|| 0}}
			</view>
		</view>
		<view class="content u-flex u-flex-1">
      <view class="tips">
          温馨提示：购买商品的积分需确认收货后方可到账！
        </view>
			<u-tabs style="width: 100%;" height="100" active-color="#191919" inactive-color="#191919" :list="list"
				:is-scroll="false" :current="currentIndex" @change="tabChange">

      </u-tabs>
			<view class="u-flex-1 wrap">
        <scroll-view style="height:100%" scroll-y @scrolltolower="scrolltolower">
          <block v-if="getShowList.length>0">
            <view class="content-item" v-for=" item in getShowList">
              <view class=" u-flex u-row-between">
                <view class="left">
                  {{getNameByType(item.source)}}
                </view>
                <view :class="currentIndex==0?'right':'reduce'">
                  <text>{{currentIndex==0?'+':''}}</text>
                  <text>{{item.integrate}}</text>
                </view>
              </view>
              <view class="foot u-flex u-row-between">
                <view>{{item.updateDate}}</view>
              <view class="point-magnification">
                {{memberType(item.remark)}}
              </view>
              </view>
            </view>
          </block>
          <no-data v-else></no-data>
          <view v-if="finished" class="text-finished">
            已经到最底了
          </view>
        </scroll-view>
			</view>
		</view>
		<block v-if="currentIndex == 1">
			<view class="seat"></view>
			<view class="bottom-btn" @click="goToPoint">
				<view class="config-btn">赚取积分</view>
			</view>
		</block>

	</view>
</template>

<script>
	import NoData from "../../components/noData";
	export default {
		components: {
			NoData
		},
		data () {
			return {
			  title:'我的积分',
				list: [{
						name: '积分收入'
					},
					{
						name: '积分支出'
					}
				],
				currentIndex: 0,
				integrateInfo: {}, // 积分信息
        page:1,
        pageSize:10,
        finished:false,
        getShowList:[],
        merberData:{}
			}
		},
		onShow () {
			this.getIntegrateInfo()
      this.getMemberLevel()
		},
		computed: {
      memberType(){
          return (item)=>{
            // 会员权益类型1:开卡礼;2:赚积分;3:购物返积分;4:积分兑换;5:家居顾问;6:生日礼包;7:升级礼包;8:会员日,9:超省会员价;10:自定义权益
            if(!item){
              return ''
            }
            let val = item.split('|')[0]
            console.log('val: ', val);
            let name = item.split('|')[1]
            if(val==1){
              return this.merberData?.gradeName+'(开卡礼)'+name+'倍'
            }
            if(val==2){
              return this.merberData?.gradeName+'(赚积分)'+name+'倍'
            }
            if(val==3){
              return this.merberData?.gradeName+'(购物返积分)'+name+'倍'
            }
            if(val==4){
              return this.merberData?.gradeName+'(积分兑换)'+name+'倍'
            }
            if(val==5){
              return this.merberData?.gradeName+'(家居顾问)'+name+'倍'
            }

            if(val==6){
              return this.merberData?.gradeName+'(生日礼包)'+name+'倍'
            }

            if(val==7){
              return this.merberData?.gradeName+'升级礼包'+name+'倍'
            }

            if(val==8){
              return this.merberData?.gradeName+'(会员日)'+name+'倍'
            }

            if(val==9){
              return this.merberData?.gradeName+'超省会员价'+name+'倍'
            }

            if(val==10){
              return this.merberData?.gradeName+'(自定义权益)'+name+'倍'
            }
            return ''
          }
        },
			getNameByType () {
				return (type) => {
					if (type == 1) {
						return '每日登录'
					}
					if (type == 2) {
						return '分享商品'
					}
					if (type == 3) {
						return '商品评论'
					}
					if (type == 4) {
						return '完善个人信息'
					}
					if (type == 5) {
						return '商品交易'
					}
					if (type == 6) {
						return '积分过期'
					}
					if (type == 7) {
						return '交易积分扣除'
					}
          if(type == 8){
            return '盲盒抽奖积分兑换'
          }
          if(type == 9){
            return '盲盒抽奖赠送'
          }
					if(type == 10){
					  return '盲盒抽奖获奖'
          }
					return '其他'
				}
			},
			// getShowList () {
			// 	if (this.currentIndex == 0) {
			// 		return (this.integrateInfo?.incomePage?.records || [])
			// 	}
			// 	if (this.currentIndex == 1) {
			// 		return (this.integrateInfo?.reducePage?.records || [])
			// 	}
			// }
		},
		methods: {
      // 获取会员等级
        async getMemberLevel() {
            try {
                let res = await this.$http.getMemberInfo({ id: this.$globleData.userData.id })
                if (res.returnCode == 1000) {
                    if (res.dataInfo?.length) {
                        res.dataInfo.map((item) => {
                            if (item.currentGrade) {
                                this.merberData = item
                                console.log('this.merberData: ', this.merberData);
                            }
                        })

                    }
                } else{
                  this.merberData = {}
                }
            } catch (error) {
              this.merberData = {}
                console.log(error)
            }
        },
			// 跳转到赚取积分页面
			goToPoint () {
				this.goTo(`/pagesA/myIntegral/getPoint?currentIntegrate=${this.integrateInfo.currentIntegrate || 0}`)
			},
			tabChange (index) {
				this.currentIndex = index;
        this.page = 1
        this.finished = false
        this.getIntegrateInfo()

			},
			async getIntegrateInfo () {

        try{
          let param = {
					id: this.$globleData.userData.id,
          current:this.page,
          size:this.pageSize
				}
        const res = await this.$http.getIntegrateInfo(param)
				this.integrateInfo = res?.dataInfo || {}
        if (this.currentIndex == 0) {
          if(this.page == 1){
            this.getShowList = this.integrateInfo?.incomePage?.records || []
          }else{
            this.getShowList= [...this.getShowList,...(this.integrateInfo?.incomePage?.records || [])]
          }
          console.log(this.page,this.integrateInfo?.incomePage?.pages);

          if (this.page >=this.integrateInfo?.incomePage?.pages) {
              this.finished = true
          }
				}
				if (this.currentIndex == 1) {
          if(this.page == 1){
            this.getShowList  = this.integrateInfo?.reducePage?.records || []
          }else{
            this.getShowList= [...this.getShowList,...(this.integrateInfo?.reducePage?.records || [])]
          }

            if (this.page >=this.integrateInfo?.reducePage?.pages) {
                  this.finished = true
            }
				}

        }catch(e){
          //TODO handle the exception
        }


			},
       scrolltolower() {
            this.page++
            if (!this.finished) {
                this.getIntegrateInfo()
            }
        },
		}
	}
</script>
<style>
	page {
		overflow: hidden;
	}
</style>
<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100%;
		flex-direction: column;

		.head {
			position: relative;
			width: 100vw;

			.bg-img {
				width: 100vw;
				height: 464rpx;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
			}

			.my-number {
				font-size: 48rpx;
				padding: 30rpx 0 0 30rpx;
				font-weight: 600;
				color: #FFFFFF;
			}

			.message {
				font-size: 32rpx;
				padding-left: 30rpx;
				font-weight: 400;
				color: #999999;
			}
		}

		.content {
			height: 0;
			width: 690rpx;
      margin: 0 auto;
			margin-top: 30rpx;
			background: #FFFFFF;
			border-radius: 14rpx 14rpx 2rpx 2rpx;
			flex-direction: column;
			padding-bottom: iphone-bottom();
      overflow: hidden;
      .tips{
        color: #999999;
        font-size: 26rpx;
        padding-top: 26rpx ;
      }
			.wrap {
				overflow-y: scroll !important;
				width: 100%;
				height: 100%;
        .text-finished{
          font-size: 32rpx;
          color: #999999;
          padding:58rpx 0;
          text-align: center;
        }
			}

			.content-item {
				//width: 100%;
				height: 147rpx;
				padding: 30rpx 0;
        margin: 0 30rpx;
				border-bottom: 1rpx solid #e6e6e6;

				.left {
					font-size: 28rpx;
					font-weight: 500;
					color: #191919;
				}

				.right {
					font-size: 28rpx;
					font-weight: 500;
					color: #57bf68;
				}

				.reduce {
					font-size: 28rpx;
					font-weight: 500;
					color: #E1544A;
				}

				.foot {
					margin-top: 10rpx;
					font-size: 26rpx;
					font-weight: 400;
					color: #999999;
					.point-magnification{
						font-size: 26rpx;
					}
				}
			}
		}
	}

	.seat {
		height: iphone-bottom(98rpx);
	}

	.bottom-btn {
		position: fixed;
		width: 100vw;
		bottom: 0;
        padding: 20rpx 0 calc(calc(env(safe-area-inset-bottom) / 2) + 20rpx) 0;
		// height: iphone-bottom(98rpx);
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		box-shadow: 0px -1rpx 0px 0px #E6E6E6;
		z-index: 2;

		.config-btn {
			width: 606rpx;
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #d1b085;
			border-radius: 45rpx;
			font-size: 28rpx;
			font-weight: 600;
			color: #FFFFFF;
		}
	}

	/deep/.u-tab-bar {
		background: #d1b085 !important;
	}

	/deep/.u-scroll-view {
		z-index: 2 !important;
	}

	/deep/.no-data {
		height: 100% !important;
		z-index: 1 !important;
	}
</style>
