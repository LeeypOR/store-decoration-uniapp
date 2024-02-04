<template>
    <view class="">
	<view class="content u-skeleton">
        <!-- listStatus -->
	  <view v-if="listStatus" class="uWaterfall-content">
		<!-- <u-waterfall  add-time="0" v-model="goodsList" ref="uWaterfall">
			<template v-slot:left="{leftList}"> -->
			<view class="pub-time ">
        <view>
          <view @click="goTo(`/pagesA/shop/goodsDetail?id=${item.id}&halfType=BJ`)" class="warter " v-if="index%2==0" v-for="(item,index) in goodsList" :key="item.id">
						<image :src="imgUrl(item.goodsPicture ||item.goodsPictures)" mode="aspectFill" class="u-skeleton-rect water-image"></image>	 
						<view class="title u-line-2 u-skeleton-rect">
							{{item.goodsName}}
						</view>
						<view v-if="item.paymentWay!=2 && item.paymentWay!=3" class="demo-price u-skeleton-rect">
							¥{{(item.salePrice ||item.goodsLowestPrice) /100}}元
						</view>
						<view v-show="item.marketPrice && item.marketPrice !=0" class="num02 u-skeleton-rect">
							¥{{ item.marketPrice/100}}元
						</view>
				</view>
        </view>
				<view>
          <view @click="goTo(`/pagesA/shop/goodsDetail?id=${item.id}&halfType=BJ`)" class="warter " v-if="index%2!==0" v-for="(item,index) in goodsList" :key="item.id">
						<image :src="imgUrl(item.goodsPicture ||item.goodsPictures)" mode="aspectFill" class="u-skeleton-rect water-image"></image>	 
						<view class="title u-line-2 u-skeleton-rect">
							{{item.goodsName}}
						</view>
						<view v-if="item.paymentWay!=2 && item.paymentWay!=3" class="demo-price u-skeleton-rect">
							¥{{(item.salePrice ||item.goodsLowestPrice) /100}}元
						</view>
						<view v-show=" item.marketPrice && item.marketPrice !=0 " class="num02 u-skeleton-rect">
							¥{{ item.marketPrice/100}}元
						</view>
				</view>
        </view>
			</view>	
      
	  </view>
	  <block v-else>
	    <view class="u-skeleton roll-content u-flex-1">
	      <view
	        class="list-item u-flex"
	        v-for="item in goodsList"
	        :key="item.id"
	        @click="goTo(`/pagesA/shop/goodsDetail?id=${item.id}&halfType=BJ`)"
	      >
	        <image :src="imgUrl(item.goodsPicture ||item.goodsPictures)" class="u-skeleton-rect"></image>
	        <view class="list-item-right">
	          <view class="title u-line-2 u-skeleton-rect">{{
	            item.goodsName
	          }}</view>
	          <view class="price u-flex">
	            <view v-if="item.paymentWay!=2 && item.paymentWay!=3" class="num01 u-skeleton-rect">
					¥{{ (item.salePrice ||item.goodsLowestPrice)/100 }}元
				</view>
	            <view v-if="item.marketPrice !=0 && item.marketPrice" class="num02 u-skeleton-rect">¥{{ item.marketPrice/100}}</view>
	          </view>
	        </view>
	      </view>
	    </view>
	    <!-- <no-data v-else></no-data> -->
	  </block>
	  <view class="bottom-title">到底啦～</view>
       <u-skeleton :loading="loading" :animation="true" bgColor="#f5f5f5"></u-skeleton>
	</view>
    </view>
</template>

<script>
	export default{
		props:{
			goodsInfo:{
				type:Array,
				default:()=>[]
			},
			listStatus:{
				type:Boolean,
				default:false
			},
            loading:{
                type:Boolean,
                default:false
            }
		},
		data(){
			return{
				goodsList:[],

			}
		},
		watch:{
			goodsInfo:{
				handler(val){
					this.goodsList = val.filter(Boolean)
				},
				immediate:true,
				deep:true
			}
		},
		methods:{
			clear(){
				this.$refs?.uWaterfall?.clear();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
	  .roll-content {
	    margin-top: 20rpx;
	    background-color: #ffffff;
	  }
	}
	/* 横向列表样式 */
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
	      font-size: 28rpx;
	      color: #191919;
	      line-height: 40rpx;
	      font-weight: 500;
	    }
	    .price {
	      position: absolute;
	      bottom: 32rpx;
	      .num01,
	      .num02,
	      .num03 {
	        font-family: PingFangSC-Regular;
	        font-weight: 400;
	      }
	
	      .num01 {
	        font-size: 28rpx;
	        line-height: 40rpx;
	        color: #191919;
	      }
	      .num02 {
	        margin-left: 10rpx;
	        font-size: 26rpx;
	        color: #999999;
	        line-height: 37rpx;
	        text-decoration: line-through;
	      }
	      .num03 {
	        margin-left: 10rpx;
	        font-size: 30rpx;
	        font-weight: 500;
	        color: #d1b085;
	        line-height: 42rpx;
	      }
	      .vip {
	        width: 52rpx;
	        height: 28rpx;
	      }
	    }
	    .sellNum {
	      position: absolute;
	      right: 0;
	      bottom: 36rpx;
	      font-size: 24rpx;
	      color: #191919;
	      line-height: 33rpx;
	      font-family: PingFangSC-Regular;
	      font-weight: 400;
	    }
	  }
	}
	
	
	
	.bottom-title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 37rpx;
			margin-bottom: 50rpx;
			font-size: 24rpx;
			color: #999999;
			font-weight: 400;
			text-align: center;
	
			&:after,
			&:before {
				content: '';
				width: 100rpx;
				height: 2rpx;
				background: #E6E6E6;
				margin: 0 22rpx;
			}
		}
		/* 瀑布流 */
		.uWaterfall-content {
		   padding: 30rpx;
		   .pub-time{
			  // column-count: 2;
			  // column-gap: 20rpx;
			  overflow: hidden;
        display: grid;
        grid-gap:20rpx;
        grid-template-columns: repeat(2,1fr);
        grid-auto-rows: minmax(335rpx, auto);
        // grid-row-gap: 20px;
        // display: flex;
        // flex-flow: row wrap;
		   }
		}
		.warter{
		  border-radius: 14rpx;
		  background: #FFFFFF;
		  padding: 20rpx;
		  width: 335rpx;
      break-inside: avoid;
      overflow: hidden;
		  margin-bottom: 20rpx;
      &:last-of-type{
        margin-bottom: 0;
      }
      .water-image{
        width: 295rpx;
        height: 295rpx;
          
      }
		  .title {
		    width: 295rpx;
		    margin-top: 24rpx;
		    font-size: 28rpx;
		    color: #191919;
		    line-height: 34rpx;
		    font-weight: 500;
		  }
		  .num01 {
		    margin-top: 20rpx;
		    font-size: 32rpx;
		    font-weight: 500;
		    color: #191919;
		    line-height: 45rpx;
		  }
		  .num02 {
		    font-size: 26rpx;
		    font-weight: 400;
		    color: #999999;
		    line-height: 37rpx;
			text-decoration: line-through;
		  }
		  .num03 {
		    font-size: 30rpx;
		    font-weight: 500;
		    color: #d1b085;
		    line-height: 42rpx;
		  }
		  .vip {
		    width: 52rpx;
		    height: 28rpx;
		  }
		  .sellNum {
		    text-align: right;
		    flex: 1;
		    font-size: 24rpx;
		    color: #191919;
		    line-height: 33rpx;
		    font-weight: 400;
		  }
		}
</style>
