<template>
	<view class="goodsList-wrapper ">
    <view class="head">
      <u-navbar
			:border-bottom="false"
			title="商品列表"
			title-color="#191919"
			title-size="36"
      title-bold
			back-icon-color="rgba(0,0,0,0.90)"
		></u-navbar>
    <view class="content u-flex">
      <view class="screen-box">
        <view class="search-item u-flex">
          <input type="text" class="u-flex-1" placeholder="请输入搜索的商品" v-model="goodsName">
          <text class="iconfont icon-search" style="width: 60rpx;height:60rpx;" @click="searchList"></text>
        </view>
        <view class="screen-item u-flex ">
          <text class="u-flex-1" :class="{'active':selTab =='0'}" @click="cutTab('0')">销量</text>
          <view class="u-flex-1 u-flex right-box" :class="{'active':selTab =='1'}" @click="cutTab('1')">价格
            <view class="sort-item u-flex">
                <text class="iconfont icon-app_icon_shouhui" :class="{'active':isAsc}"></text>
                <text class="iconfont icon-app_icon_xiala" :class="{'active':!isAsc}"></text>
            </view>
          </view>
            <view class="listStatus-wrap" @click="toggleList">
            <view class="iconfont icon-icon_test_pubuliu" v-if="listStatus"></view>
            <view class="iconfont icon-icon_test_tuwen" v-else></view>
        </view>
        </view>
      </view>

    </view>
    </view>
		<view :style="{height:top+'px'}"></view>
    <view>
        <goodsCom :loading="loading" ref="goodscom" :listStatus="listStatus" v-if="goodsList.length" :goodsInfo="goodsList" />
      <no-data v-if="!loading && !goodsList.length " type="noSearch"></no-data>
    </view>
    <fixed-navigation :fixTime="refresh" :location="6"></fixed-navigation>
	</view>
</template>

<script>
import NoData from "../../components/noData";
import goodsCom from '../components/walfGoods.vue'
import FixedNavigation from "../../components/fixedNavigation";
export default {
    components: {FixedNavigation, NoData,goodsCom},
    data() {
        return {
            title:'商品列表',
			      goodsList: [],
            goodsGroupId: '',
            goodsName:'',
            goodsIds:[],
            loading:true,
            isAsc:false,             // 是否是升序 默认降序
            selTab: '0',              // '0' 销量  '1' 价格
            listStatus: true, //列表展示形式,
            current: 1,
            pageSize: 8,
            top:0,
            pages:1,
            refresh:'',
        }
    },
    onShow(){
      this.refresh = new Date().getTime().toString()
    },
    onReady(){
        const query = uni.createSelectorQuery().in(this);
		  query.select('.head').boundingClientRect(data => {
            this.top =  data.height //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
		  }).exec()
    },
    onLoad(options) {
        this.goodBrandId = options?.goodBrandId || ''
      if(options.goodsGroupId) {
            this.goodsGroupId = options.goodsGroupId
        }
        if(options.goodsIds) {
		    this.goodsIds = options.goodsIds.split(',')
        }
        this.goodsName = options?.word || ''
        if(this.goodsIds.length){
            this.getMoreGoodsList()
        }else{
            this.getGoodsList()
        }

    },
    onReachBottom() {
        this.current = this.current + 1;
        if (this.current <= this.pages) {

            this.selTab == '1' ? this.getGoodsList(true) : this.getGoodsList();
        }
    },
    computed: {
        goodsPeiceSort(){
            return this.isAsc ? 1 : 2
        }
    },
    methods: {
	  //
        cutTab(type){
            if(!type){
                return
            }
            if(type==1){
                this.current = 1
                if(type == this.selTab){
                    this.isAsc = !this.isAsc
                }else{
                    this.isAsc = false
                }
                this.selTab=type
                if(this.goodsIds.length){
                    this.getMoreGoodsList()
                }else{
                    this.getGoodsList(true)
                }

            }

            if(type==0){
                if(this.selTab == type){
                    return
                }
                this.selTab = type
                if(this.goodsIds.length){
                    this.getMoreGoodsList()
                }else{
                    this.getGoodsList()
                }

            }

        },
        toggleList() {
	  // this.$refs?.uWaterfall?.clear();
	  this.listStatus = !this.listStatus;

	  if(this.listStatus && this.$refs.goodscom){
		  this.$refs.goodscom.clear()
	  }
	 if(this.goodsIds.length){
                this.getMoreGoodsList()
	 }else{
                this.getGoodsList()
	 }
	  // this.getGoodsList()
	  // this.selTab === 1 ? this.getGoodsList(true) : this.getGoodsList();
        },
        searchList(){
            this.goodBrandId = ''
            if(this.listStatus  && this.$refs.goodscom){
                this.$refs.goodscom.clear()
            }
            this.current = 1
            this.getGoodsList()
        },
        // 查询多个商品
        async getMoreGoodsList(){
            try{
                let res = await this.$http.getGoodSMic({ids:this.goodsIds})
                this.loading = false

                if(this.selTab ==1){
			  this.goodsList = res?.dataInfo?.dataInfo?.filter(Boolean) || []
			  if(this.isAsc){
				  this.goodsList.sort((a,b)=>{
				    return a.goodsLowestPrice-b.goodsLowestPrice
				  })
			  }else{
				 this.goodsList.sort((a,b)=>{
				   return b.goodsLowestPrice-a.goodsLowestPrice
				 })
			  }
                }else{
			  this.goodsList = res?.dataInfo?.dataInfo || []
			  this.goodsList.sort((a,b)=>{
			    return b.goodsSales-a.goodsSales
			  })

                }
            }catch(e){
            //TODO handle the exception
            }

        },
        // 商品列表接口
        async getGoodsList(flag) {
            let buyerType =''
            if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){
                buyerType = this.$globleData?.buyType || ''
            }
            const param = {
                current: this.current,
                size: this.pageSize,
                goodsGroupId: this.goodsGroupId,
                goodsName:this.goodsName,
                buyerType,
                goodBrandId: this.goodBrandId
            }
            if(flag){
                param.goodsPeiceSort=this.goodsPeiceSort
            }
            const  res  = await this.$http.goodsList(param,false)
            let  goodsArr = []
            if (res.dataInfo && res?.dataInfo?.records?.length) {
                this.pages = res?.dataInfo?.pages
                if (this.current == 1) {
                    goodsArr = res?.dataInfo?.records ||[]
                } else {
                    // this.goodsList = this.goodsList.concat(res?.dataInfo?.records|| []);
                    // this.goodsList = [...this.goodsList];
                    goodsArr = [...this.goodsList,...res.dataInfo.records];
                }
                console.log(goodsArr);
                if(this.selTab ==1){
                    this.goodsList = goodsArr.filter(Boolean) || []
                }else{
                    this.goodsList = goodsArr.filter(Boolean) || []
                    this.goodsList.sort((a,b)=>{
                        return b.goodsSales-a.goodsSales
                    })

                }
                this.loading = false
            }else{
                if (this.current == 1) {
                    this.goodsList = [];
                     this.loading = false
                }
            }
            console.log(this.goodsList,'9989i787878');
        },
    },
}
</script>

<style scoped lang="scss">
.goodsList-wrapper {
	width: 100%;
  // flex-direction: column;
	.list-item {
		width: 100%;
		height: 222rpx;
		padding-left: 45rpx;
		padding-right: 30rpx;
        &:last-child {
            margin-bottom: 34rpx;
        }
		image {
			width: 160rpx;
			height: 160rpx;
			margin-right: 30rpx;
		}
		.list-item-right {
			width: calc(100% - 190rpx);
			position: relative;
			height: 222rpx;
			border-bottom: 1rpx solid #e6e6e6;
			.title {
                min-width: 300rpx;
                min-height: 40rpx;
				margin-top: 32rpx;
				font-family: PingFangSC-Medium;
				font-size: 28rpx;
				color: #000000;
				line-height: 36rpx;
				font-weight: 500;
			}
			.price {
				position: absolute;
				bottom: 32rpx;
				.num {
					font-family: PingFangSC-Regular;
					font-weight: 400;
					&:first-child {
						font-size: 28rpx;
						color: #191919;
					}
					&:last-child {
						margin-left: 20rpx;
						font-size: 24rpx;
						color: #999999;
						text-decoration: line-through;
					}
				}
			}

		}
	}
  .head{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .screen-box{
    width: 100%;
    background: #FFFFFF;
    padding: 14rpx 30rpx;
    .search-item{
      background: #F5F5F5;
      border-radius: 44rpx;
      padding: 16rpx 30rpx;
      .iconfont{
        font-size: 44rpx;
        color: #999999;
      }
      input{
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #191919;
      }
    }
    .screen-item{
      margin-top: 28rpx;
      justify-content: space-between;
      text-align: center;
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      .active{
        font-weight: 500;
        color: #E8B759;
      }
      .right-box{
        justify-content: center;
        .sort-item{
          margin-top: 2rpx;
          margin-left: 6rpx;
          flex-direction: column;
          .iconfont{
            font-size: 14rpx;
            color: #999999;
          }
          .active{
            color: #000000;
          }
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
	  }
    }
  }
}
.content{
  width: 100vw;

}
</style>
