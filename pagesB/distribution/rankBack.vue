<template>
	<view class="container">
		<u-navbar :border-bottom="false" title="返利详情" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
    <view class="box-card u-flex">
      <image class='card-img' :src="getStatus.img"></image>
      <view class="center u-flex-1">
        <view class="state u-flex">
          {{getStatus.name}}
          <view class='right-info'>￥{{switchMoney(detailData.settleAmount || '')}}</view>
        </view>
        <view class="time">{{detailData.createDate}}</view>
      </view>
    </view>
    <view class="goods-info" v-if="detailData.orderSource == 1">
      <view class="goods-title">返利商品</view>
      <view class="goods-wrap">
        <view class="">
          <image :src="imgUrl(detailData.goodsImg)"></image>
        </view>
        <view class="goods-right">
          <view class="goods-name">
            {{detailData.goodsName}}
          </view>
          <view class="sku-name u-flex u-row-between">
            <view class="">
              商品规格：{{detailData.skuName?detailData.skuName:'统一规格'}}
            </view>
            <view class="goods-num">
              x {{detailData.goodsNum?detailData.goodsNum:1}}
            </view>
          </view>
          <view class="total">
            <text class="price">¥{{switchMoney(detailData.salePrice)}}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="info-card">
      <view class="info-title">返利信息</view>
      <view class="info-item u-flex">
        <view class="item-title">客户昵称</view>
        <view class="item-name">{{detailData.nickName || ''}}</view>
      </view>
      <view class="info-item u-flex" v-if="detailData.orderSource == 2">
        <view class="item-title">活动昵称</view>
        <view class="item-name">{{detailData.goodsName || ''}}</view>
      </view>
      <view class="info-item u-flex">
        <view class="item-title">支付金额</view>
        <view class="item-name">{{this.switchMoney(detailData.payPrice)}}</view>
      </view>
      <view class="info-item u-flex">
        <view class="item-title">下单时间</view>
        <view class="item-name">{{detailData.createDate}}</view>
      </view>
      <view class="info-item u-flex" v-if="detailData.settleTime">
        <view class="item-title">结算时间</view>
        <view class="item-name">{{detailData.settleTime}}</view>
      </view>
      <view class="info-item u-flex">
        <view class="item-title">订单编号</view>
        <view class="item-name">{{detailData.orderGoodsNo}}</view>
      </view>
    </view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				detailData:{}
			}
		},
    computed:{
      getStatus() {
        const type = this?.detailData?.orderStatus || ''
        if (['ORDER_UN_EVALUATE','ORDER_UN_EVALUATE'].includes(type)) {
          return {
            img:'/pagesB/static/images/succeed.png',
            name:'已结算'
          }
        }
        return {
          img: '/pagesB/static/images/load.png',
          name: '待结算'
        }
      }
    },
		onLoad(option) {
			this.id = option?.id || ''
      this.orderSource = option?.orderSource || ''
      if(this.id){
        this.getRebateInfo()
      }
		},
    methods:{
      async getRebateInfo(){
        let param = {
          id: this.id,
          orderSource: this.orderSource,
        }
        const {dataInfo:res} = await this.$http.getRebateInfo(param)
        this.detailData = res || {}
      }
    }
	}
</script>

<style lang="scss" scoped>
.container{
  padding: 0 30rpx;
}
.box-card{
  margin-top: 20rpx ;
  padding: 42rpx 30rpx;
  background: #FFFFFF;
  border-radius: 10rpx;
  .card-img{
    width: 68rpx;
    height: 68rpx;
    border-radius: 50%;
  }
  .center{
    margin-left: 30rpx;
    .state{
      justify-content: space-between;
      font-family: PingFangSC-Medium;
      font-size: 32rpx;
      color: #191919;
      font-weight: 500;
      .right-info{
        font-family: PingFangSC-Medium;
        font-size: 32rpx;
        color: #191919;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
    .time{
      margin-top: 4rpx;
      font-family: PingFangSC-Regular;
      font-size: 24rpx;
      color: #999999;
      font-weight: 400;
    }
  }

}
.info-card{
  margin-top: 20rpx;
  background: #ffffff;
  padding: 0 30rpx;
  border-radius: 10rpx;
  .info-title{
    padding: 16rpx 0;
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #191919;
    font-weight: 500;
  }
  .info-item{
    justify-content: space-between;
    padding: 30rpx 0;
    .item-title{
      font-family: PingFangSC-Regular;
      font-size: 30rpx;
      color: #999999;
      font-weight: 400;
    }
    .item-name{
      font-family: PingFangSC-Medium;
      font-size: 30rpx;
      color: #191919;
      text-align: right;
      font-weight: 500;
    }
  }
}
.goods-wrap {
  padding: 20rpx 0;
  display: flex;

  image {
    width: 160rpx;
    height: 160rpx;
  }

  .goods-right {
    margin-left: 30rpx;
    flex: 1;

    .goods-name {
      font-size: 28rpx;
      margin: 10rpx 0;
      color: #000000;
    }

    .sku-name {
      font-size: 26rpx;
      color: #999999
    }

    .total {
      margin-top: 23rpx;

      .price {
        font-size: 28rpx;
        color: #191919;
      }

      .rake-price {
        margin-left: 10rpx;
        font-size: 24rpx;
        color: #D1B085;
      }
    }
  }
}
.goods-info{
  padding: 0 30rpx;
  margin-top: 20rpx;
  background: #FFFFFF;
  border-radius: 10rpx;
  .goods-title{
    padding: 16rpx 0;
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 500;
  }
}
</style>
