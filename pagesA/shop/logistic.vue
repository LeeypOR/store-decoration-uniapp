<template>
    <view class="logistic-wrapper" >
        <u-navbar :border-bottom="false" title="查看物流" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
        <view class="u-skeleton">
		<view class="goods-wrapper">
            <image :src="getGoodsImg"></image>
            <view class="goods-info">
                <view class="goods-info-title">{{dataInfo.goodsInfo.name}}</view>
                <view class="goods-info-desc">{{dataInfo.goodsInfo.spec?dataInfo.goodsInfo.spec:''}}</view>
            </view>
        </view>
        <view class="logistic-detail">
            <view class="logistic-detail-head">
                <view class="qiu"></view>
                <view v-show="dataInfo">{{dataInfo.expressCompanyName?dataInfo.expressCompanyName:''}} {{dataInfo.expressTrackNumber?dataInfo.expressTrackNumber:''}}</view>
            </view>
            <u-time-line>
                <u-time-line-item nodeTop="2">
                    <!-- 此处自定义了左边内容，用一个图标替代 -->
                    
                    <template v-slot:node >
                        <view class="u-order-address" >
                            <!-- 此处为uView的icon组件 -->
                            <view >
                                收
                            </view>
                        
                        </view>
                        
                    </template>
                
                    <template v-slot:content>
                        <view class="u-order-info" style="margin-top: 14rpx;" > 
                            
                            <view class="u-order-desc" style="margin-bottom:40rpx">{{dataInfo.deliveryAddress}}</view>
                        </view>   
                    </template>
                </u-time-line-item>
                <u-time-line-item nodeTop="5" v-for="(item,index) in dataInfo.queryTrackMapResp.data" :key="index" v-show="index < 3 || isOpen" >
                    <!-- 此处自定义了左边内容，用一个图标替代 -->
                    
                    <template v-slot:node >
                        <view class="u-node" :class="{active:index==0}" v-if="item.status != '在途'">
                            <!-- 此处为uView的icon组件 -->
                             <view  v-if="item.status == '签收'">
                                <text class="iconfont icon-icon_qianshou"></text>
                            </view>
                            <view  v-if="item.status == '派件'">
                                <text class="iconfont icon-sucaizhongxinzuizhongban"></text>
                            </view>
                            <view  v-if="item.status == '揽收'">
                                <image src="../static/image/icon_logistics_transport.svg"></image>
                            </view>
                            <view  v-if="item.status == '下单'">
                                <image src="../static/image/icon_logistics_ordered.svg"></image>
                            </view>
                            <view  v-if="item.status == '发货'">
                                <image src="../static/image/icon_logistics_delivered.svg"></image>
                            </view>
                        
                        </view>
                        <view class="dot" v-else></view>
                    </template>
                
                    <template v-slot:content>
                        <view class="u-order-info"  :class="[{'active':index==0},{'isMargin':item.status != '在途'},{'isTop':item.status !== '在途'}]"> 
                            <view class="u-order-title"><text class="status">{{item.status}}</text>{{item.time}}</view>
                            <view class="u-order-desc">{{item.context}}</view>
                        </view>   
                    </template>
                </u-time-line-item>
               
            </u-time-line>
            <view class="seeMore" @click="seeMore" v-if="!isOpen">点击查看更多物流信息详情<text class="iconfont icon-app_icon_xiala"></text></view>
        </view>
		</view>
		<u-skeleton :loading="loading" :animation="true" bgColor="#f0f0f0"></u-skeleton>
    </view>
</template>
<script>
//import {logisData} from './logistic.js'
export default {
  data() {
    return {
      title: '查看物流',
      dataInfo: {},
      isOpen: false,//查看更多,
      orderId: '',
      loading: true, // 是否显示骨架屏组件
      flag:'',
    }
  },
  onLoad(option) {
    this.orderId = option.orderId
    this.flag = option?.flag || ''
  },
  onShow() {
    if(this.flag){
      this.getIntegralLogistics()
    }else{
      this.getLogisticList()
    }
  },
  computed: {
    getGoodsImg() {
      const info = this.dataInfo || {}
      let img = info?.goodsInfo?.img?.split(",") || []
      return img[0]
    }
  },
  methods: {
    async getLogisticList() {
      let params = {
        orderGoodsId: this.orderId
      }
      let res = await this.$http.getLogistic(params)
      if (res && res.returnCode == 1000) {
        this.dataInfo = res.dataInfo
        this.loading = false
      }
      // this.dataInfo = logisData.dataInfo
    },
    // 退货物流查看
    async getIntegralLogistics(){
      let params = {
        orderGoodsId: this.orderId,
        flag:this.flag
      }
      let res = await this.$http.getIntegralLogistics(params)
      if (res && res.returnCode == 1000) {
        this.dataInfo = res?.dataInfo
        this.loading = false
      }
    },
    seeMore() {
      this.isOpen = true
    }
  }

}
</script>
<style scoped lang="scss">
.logistic-wrapper{
    background-color: #f8f8f8;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .goods-wrapper{
        height: 140rpx;
        background-color: #ffffff;
        display: flex;
        padding: 20rpx 30rpx;
        image{
            width: 100rpx;
            height: 100rpx;
        }
        .goods-info{
            margin-left: 30rpx;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            &-title{
                width: 560rpx;
                font-size: 28rpx;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            &-desc{
                width: 500rpx;
                font-size: 20rpx;
                color: #999;
                margin-top: 12rpx;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .logistic-detail{
        width: 690rpx;
        max-height: 100%;
        margin: 20rpx auto 40rpx;
        padding:30rpx  60rpx;
        background-color: #fff;
        border-radius: 30rpx;
        overflow: scroll;
        color: #999;
        &-head{
            display: flex;
            align-items: center;
            margin-bottom: 40rpx;
            margin-left: -30rpx;
            color: #191919;
            .qiu{
                width: 60rpx;
                height: 60rpx;
                background-color: #9a9a9a;
                border-radius: 50%;
                margin-right: 20rpx;
                
            }
        }
        .seeMore{
            display: flex;
            justify-content: center;
            align-items: center;
            color:#999;
            text{
                margin-left: 20rpx;
            }
        }
        .u-order-info{
			&.isMargin{
				margin-top: 18rpx;
			}	
            &.active{
                color: #191919;
                .u-order-title{
                    color: #ec4545;
                    text{
                        font-weight: bold;
                        font-size: 28rpx;
                    }
                }
            }
            .u-order-title{
                margin-bottom: 12rpx;
            }
        }
    }
}

.u-node {
    width: 60rpx;
    height: 60rpx;
    border-radius: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1rpx solid #d0d0d0;
    &.active{
        background-color: #ec4545;
        color: #fff;
        font-weight: bold;
        border: none;
    }
    view{
        display: flex;
        align-items: center;

    }
    image{
        width: 38rpx;
        height: 38rpx;
    }

}
.u-order-address{
    width: 60rpx;
    height: 60rpx;
    border-radius: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d0d0d0;
    color: #fff;
}
.status{
    margin-right: 20rpx;
}
.dot{
    height: 16rpx;
    width: 16rpx;
    border-radius: 100rpx;
	margin-top: 10rpx;
    background: #ddd;
}

</style>
