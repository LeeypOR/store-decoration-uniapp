<template>
  <view class="u-flex" style="flex-direction: column;height: 100vh;overflow: hidden">
      <u-navbar :border-bottom="false" title="我的兑换券" title-bold title-color="#191919" title-size="36"
                back-icon-color="#000000"></u-navbar>
    <u-tabs class="navatabar" :list="list"
        :is-scroll="false"
        :current="current"
        inactive-color="#66666"
        @change="change"
        active-color="#191919">
      </u-tabs>
      <view class="content">
        <view class="wrap">
           <view class="g-coupon" v-for="(item,index) in exchangeCouponList" :key="index">
            <view :class="['card-item',{'bg0':current==0,'bg1':current==1&&item.enableUse==0,'bg2':new Date().getTime()>new Date(item.expriedDate.replace(/-/g,'/')).getTime()}]">
              <view class="item-left">
                <view class="info">
                  <view v-if="item.goodsType == 1 " class="goods">
                    <image :src="item.pictureUrl " mode="aspectFill" />
                  </view>
                   <view v-if="item.goodsType == 2 && item && item.msgJson.drawPosterBtnShow==1" class="goods">
                    <image :src="exchangeImageUrl(item)" mode="aspectFill" />
                  </view>
                </view>
                <view class="desc">
                    <view class="name" :style="{'color':current==1?'#ffffff':''}">{{item.goodsType==1?item.ticketName:'指定专区'}} </view>
                    <view class="time" :style="{'color':current==1?'#ffffff':''}"> 有效期至{{item.expriedDate}}</view>
                  </view>
              </view>
              <view @click="goChange(item)" class="item-right">
                <view v-if="current == 0 " class="use">
                  立即兑换
                </view>
                <view v-else class="used">{{typeName(item)}}</view>
              </view>
            </view>
            <view class="flod">
              <view class="title" @click="showFlod(item,index)">
                <view class="title-left">
                  使用说明
                </view>
                <view v-if="!item.checked" class="title-right">
                  <text class="iconfont icon-app_icon_xiala"></text>
                </view>
                <view v-else class="title-right">
                  <text class="iconfont icon-app_icon_shouhui"></text>
                </view>
              </view>
              <view v-if="item.checked" class="flod-content">
                <text class="explain">{{item.remark}}</text>
              </view>
            </view>
		      </view>

        </view>
        <no-data v-if="!exchangeCouponList.length&& finished " type="noCoupon"></no-data>
      </view>
  </view>
</template>

<script>
import NoData from "../../components/noData";
export default {
   components:{
     NoData
   },
    data() {
        return {
          title:'我的兑换券',
          list: [
            {
						  name: '未兑换'
					  },
            {
              name: '已兑换/已过期'
            }
				  ],
				  current: 0,
          exchangeCouponList:[],
          finished:false,
          comImageUrl:'../static/image/qietu_moren_duihuantu.png'
        };
    },
    onShow(){
      this.getCouponList()
    },
     computed: {

			getClass () {
        // let index = 0
        // if(this.current){
        //   index =0
        // }

				return `card-item bg${this.current}`
			},
      typeName(){
        return (val)=>{
          if(val.enableUse==0){
            return '已兑换'
          }
          if(new Date().getTime()>new Date(val.expriedDate.replace(/-/g,'/')).getTime()){
            return '已过期'
          }
        }
      },
      exchangeImageUrl(){
        return (val)=>{
          if(val?.msgJson.exchangeType==1){//默认的

            return this.comImageUrl
          }

          if(val?.msgJson.exchangeType==2){//自定义
            return val.msgJson.exchangeImageUrl
          }
        }
      },

		},
    methods: {

      async getCouponList(){
        try{
          let res = await this.$http.exchangeCouponList()
        let exchagneData = res?.dataInfo
        if(this.current==0){
          this.exchangeCouponList = exchagneData.filter(element => {
            element.checked = false
            element.msgJson = JSON.parse(element?.msgJson??'{}')
          return element.enableUse == 1 &&  new Date().getTime()<=new Date(element.expriedDate.replace(/-/g,'/'))
        });
        }
        if(this.current==1){
           this.exchangeCouponList = exchagneData.filter(element => {
             element.checked = false
              element.msgJson = JSON.parse(element?.msgJson??'{}')
          return element.enableUse == 0 || new Date().getTime()>new Date(element.expriedDate.replace(/-/g,'/'))
        });
        }
        this.finished = true

        }catch(e){
          this.finished = true
          //TODO handle the exception
        }


      },
      change (index) {
				this.exchangeCouponList = []
        this.finished = false
				this.current = index;
        this.getCouponList()
			},
      showFlod (someItem, index) {
          console.log(someItem,index);

				this.exchangeCouponList.forEach((val, key) => {
					if (index == key) {
						someItem.checked = !someItem.checked
					} else {
						val.checked = false
					}

				})
        //  console.log('数据88888888',this.exchangeCouponList);

			},
      goChange(item){
        if( new Date().getTime()>new Date(item.expriedDate.replace(/-/g,'/'))){
          return
        }
        if(item.enableUse==1){
          if(item.enableUse==1 && item.goodsType==1 ){
          this.goTo(`/pagesA/shop/goodsDetail?activeType=EZ&&activeId=${item.activityId}`)
          }
          if(item.enableUse==1 && item.goodsType==2){
            this.goTo(`/pagesD/exchangeZone/index?activityId=${item.activityId}`)
          }
        }
        if(item.enableUse==0 && item.orderId){
          this.goTo(`/pagesA/order/waitPay?orderId=${item.orderId}`)
        }

      }

    },
};
</script>

<style scoped lang="scss">
/deep/.u-tab-bar {
		background: $themeColor!important;
	}
.navatabar{
  width: 100%;
}
.content {
		padding: 30rpx;
		height: 100%;
		background-color: #f8f8f8;
    flex: 1;
    overflow-y: scroll;
		.wrap {
			margin-bottom: 20rpx;




		}

	}
  .g-coupon {
    margin-bottom: 20rpx;
  }
	.card-item {
		background: #FFFFFF;
		background-size: 100% 100%;
		width: 690rpx;
		height: 190rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		&.bg0 {
			background-image: url('../static/image/qietu_youhuiq.png');//未兑换
		}

		&.bg1 {
			background-image: url('../static/image/qietu_yiduihuan.png'); //已兑换
		}
    &.bg2 {
			background-image: url('../static/image/qietu_yiguoqi.png'); //已过期
		}

		.item-left {
			flex: 1;
			display: flex;
      flex-direction: row;
      align-items: center;
			height: 100%;
      padding: 30rpx;
			.info {
				.goods{
          width: 130rpx;
          height: 130rpx;
          background: #FFFFFF;
          border-radius: 14rpx;
          image{
            width: 100%;
            height: 100%;
          }
        }

			}
      .desc{
        padding-left: 20rpx;
        .name{
          opacity: 0.8;
          font-size: 28rpx;
          color: #250F00;
          font-weight: 500;
        }
        .time{
          margin-top: 10rpx;
          font-size: 24rpx;
          color: #A37C63;
        }
      }
		}

		.item-right {
			width: 190rpx;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.use {
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
			}

			.used {
				font-size: 28rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}

	.flod {
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 0px 0px 14rpx 14rpx;

		.title {
			display: flex;
			justify-content: space-between;
			padding: 18rpx 30rpx;

			.title-left {
				font-size: 24rpx;
				color: #666666;
			}

			.title-right {

				.icon-app_icon_xiala,
				.icon-app_icon_shouhui {
					width: 24px;
					height: 14px;
					color: #CCCCCC;
					font-size: 28rpx;
				}
			}
		}

		.flod-content {
			padding: 0 30rpx 20rpx 30rpx;

			.message {
				font-size: 22rpx;
				color: #666666;
				margin-bottom: 10rpx;
			}

			.explain {
				font-size: 24rpx;
				color: #191919;
			}
		}

	}
</style>
