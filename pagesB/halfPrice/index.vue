<template>
	<view class="container ">
		<view class="container-head" style="position: fixed;top: 0;z-index: 99999999999;width: 100%;">
			<view class="head">
				 <u-navbar class="location-class" :background="{background:'#00000000'}" :border-bottom="false" title=" "
				     back-icon-color="#fff" :custom-back="backPage"></u-navbar>

				<image :style="{'top':imgTop+'px'}" class="buy-img" :src="imgUrl"></image>
			 <view class="search-item u-flex">
			   <text class="iconfont icon-search" @click="searchList"></text>
			   <input type="text" placeholder="请输入搜索的商品" v-model="goodsName" />
			 </view>
			</view>
			<view class="screen-item u-flex">
			  <view class="u-flex-1" :class="{ active: selTab == 0 }" @click="cutTab(0)">销量</view>
			  <view
			    class=" u-flex right-box"
			    :class="{ active: selTab == 1 }"
			    >
			    <view class="sort-item u-flex">
					<view @click="cutTab(1)" class="u-flex u-flex-1">
						<text>价格</text>
						<view class="u-m-l-8">
							<view class="iconfont icon-app_icon_shouhui" :class="{ active: isAsc }"></view>
							<view class="iconfont icon-app_icon_xiala" :class="{ active: !isAsc }"></view>
						</view>
						</view>
						 	<view class="listStatus-wrap u-flex-1 u-flex u-row-center" @click="toggleList">
						 	  <view class="iconfont icon-icon_test_pubuliu" v-if="listStatus"></view>
						 	  <view class="iconfont icon-icon_test_tuwen" v-else></view>
						 </view>
			    </view>
				 </view>
		</view>
	     </view>
		<view :style="{height: top+'px'}"></view>
		<view class="goods-wrap">
			<goodsCom ref="goodscom" :listStatus="listStatus" v-if="goodsList.length" :goodsInfo="goodsList" />
			<noData v-else></noData>
		</view>
	</view>
</template>

<script>
// #ifdef MP-WEIXIN
const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
// #endif
const systemInfo = uni.getSystemInfoSync();
import goodsCom from '../components/walfGoods.vue'
import noData from '@/components/noData.vue'
export default{
    components:{
        goodsCom,noData
    },
    data(){
        return{
            title:"",
            goodsName:'',
            // 分页
            current: 1,
            size: 10,
            priceSort:2,// 1:升序，2：降序，默认降序
            selTab: 0, // '0' 销量  '1' 价格
            listStatus: false, //列表展示形式
            goodsList: [],
            top:800,
            activityType:1, //0:未参加 1:第二件半价 2:买一赠一 3:秒杀 4:限时折扣 5:拼团
            isAsc: false, // 是否是升序 默认降序
        }
    },
    onLoad(option) {
        if(option.jumpPageType=='SECONDFREE'){
            this.activityType = 2
            this.title = '买一赠一'
        }
        if(option.jumpPageType=='SECONDHALF'){
            this.activityType = 1
           this.title = '第二件半价'
        }
    },
    onReady() {
        let titleH = uni.createSelectorQuery().select(".container-head"); //想要获取高度的元素名（class/id）
        titleH.boundingClientRect(data => {

            this.top =  data.height //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
        }).exec()
    },
    onShow() {
        this.getGoodsList()
    },
    computed:{
        imgTop(){
				 // #ifdef MP-WEIXIN
            if(systemInfo.model.indexOf('iPhone')>-1){
                return menuButtonInfo.top + 4
            }else{
                return menuButtonInfo.top
            }
            // #endif
        },
        imgUrl(){
            if(this.activityType == 2){
                return '../static/halfPrice/qietu_maiyizengyi_biaoti.png'
            }
            if(this.activityType == 1){
                return '../static/halfPrice/qietu_dierjianbanjia_biaoti.png'
            }
        }
    },
    methods:{
        searchList(){
            this.current = 1
            this.$refs.goodscom.clear()
            this.getGoodsList();
        },
        cutTab(type) {

			  if (type === 0) {

			  } else if (type === 1) {
			    this.current = 1
			    if (type === this.selTab) {
			      this.isAsc = !this.isAsc;

			    } else {
			      this.isAsc = false;
			    }
                if(this.isAsc){
                    this.priceSort = 1
                }else{
                    this.priceSort = 2
                }
			    // this.$refs.goodscom.clear()
			    this.getGoodsList();
			  }
			  this.selTab = type;
        },
        onReachBottom() {

			  this.current = this.current + 1;

			  if (this.current <= this.pages) {
			    this.getGoodsList()
			  }
        },
        async getGoodsList(){
            let buyerType =''
            if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){
                buyerType = this.$globleData?.buyType || ''
            }
            let res = await this.$http.goodsList({
                current:this.current,
                size:this.size,
                goodsName:this.goodsName,
                goodsPeiceSort:this.priceSort,
                buyerType,
                activityType:this.activityType//0:未参加 1:第二件半价 2:买一赠一 3:秒杀 4:限时折扣 5:拼团
            })
            let Arr = res?.dataInfo?.records || [];
            if (res.dataInfo && Arr.length) {
				  if (this.current == 1) {
				    this.goodsList = Arr;
					 this.pages = res?.dataInfo?.pages
				  } else {
				    this.goodsList = this.goodsList.concat(res.dataInfo ? Arr : []);
				    this.goodsList = [...this.goodsList];
				  }
            } else {
				  if (this.current == 1) {
				    this.goodsList = [];
				  }
            }



        },
        toggleList() {
			  // this.$refs?.uWaterfall?.clear();
			  this.listStatus = !this.listStatus;

			  if(this.listStatus){
				  this.$refs.goodscom.clear()
			  }
			  this.getGoodsList()
			  // this.selTab === 1 ? this.getGoodsList(true) : this.getGoodsList();
        },

    }

}
</script>

<style lang="scss" scoped>
	 .container{
		 // height: 100vh;

		 overflow: hidden;
		 .head{
			 width: 100%;
			 height: 21.75vh;
			 background: url(https://jdz.g1999.com/ghs/20210827/38450804526d4e1ba533f18ed82a50dc.png) no-repeat;
			 background-size: cover;
			 position: relative;
			 .buy-img{
				 position: absolute;

				 left: 235rpx;
				 width: 260rpx;
				 height: 89rpx;
			 }
			 .search-item {
			   position: absolute;
			   bottom: 30rpx;
			   width: 690rpx;
			   left: 50%;
			   transform: translateX(-50%);
			   background: #f5f5f5;
			   border-radius: 44rpx;
			   padding: 16rpx 30rpx;
			   .iconfont {
			     font-size: 44rpx;
			     color: #999999;
			   }
			   input {
			     font-size: 28rpx;
			     font-family: PingFangSC-Regular, PingFang SC;
			     font-weight: 400;
			     color: #191919;
			   }
			 }
		 }
		 .screen-item {
	       background: #FFFFFF;
		   width: 100%;
		   height: 70rpx;
		   justify-content: space-between;
		   text-align: center;
		   font-size: 30rpx;
		   font-family: PingFangSC-Regular, PingFang SC;
		   font-weight: 400;
		   color: #000000;
		   .active {
		     font-weight: 500;
		     color: #e8b759;
		   }
		   .right-box {
			 width: 50%;
		     justify-content:space-between;
		     .sort-item {
		       margin-top: 2rpx;
		       margin-left: 6rpx;
			   width: 100%;
		       .iconfont {
		         font-size: 14rpx;
		         color: #999999;
		       }
		       .active {
		         color: #000000;
		       }
		     }
			.listStatus-wrap {
			  width: 110rpx;
			  text-align: right;
			  border-left: 1rpx solid #e6e6e6;
			  .iconfont {
			    margin-right: 10rpx;
			    color: #999999;
			  }
			  .icon-icon_test_pubuliu,.icon-icon_test_tuwen{
				  font-size: 36rpx;
			  }
			}
		   }

		 }
	 }
	 .goods-wrap{
		 overflow-y: scroll;
	 }
</style>
