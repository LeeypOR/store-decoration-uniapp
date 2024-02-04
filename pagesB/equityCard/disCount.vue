<template>
	<view class="container">
		<u-navbar class="location-class" :border-bottom="false" title="商品88折" title-bold
			title-color="#191919"   title-size="36" back-icon-color="#000000"></u-navbar>
		<view class="content u-flex">
			<view class="content-wrap " @click="goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}`)" v-for="(item,index) in goodSList">
				<image class="img" :src="item.goodsPicture" ></image>
				<view class="title u-line-2">
					{{item.goodsName}}
				</view>
				<view class="discount-price">
					¥{{switchMoney(item.discountPrice)}}
				</view>
				<view class="mark-price">
					¥{{switchMoney(item.salePrice)}}
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	export default{
		data(){
			return{
				cardId:'',
				current:1,
				size:100,
				goodsName:'',
				goodSList:[]
			}
		},
		onLoad(option) {
			 this.cardId = option?.cardId || '' 
			 
			 
			 this.getDiscountList()
		},
		methods:{
			// 获取列表信息
			async getDiscountList(){
				let res = await this.$http.getDiscountLists({
				  cardId: this.cardId,
				  cardType: 1,
				  benefitsType: 3,
				  current: this.current,
				  size: this.size,
				  name: this.goodsName,
				});
				this.goodSList = res.dataInfo?.pageResponse?.records || []
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 30rpx;
		.content-wrap{
			// width: 335rpx;
			margin-top: 30rpx;
			height: 515rpx;
			background: #FFFFFF;
			border-radius: 14rpx;
			padding: 20rpx;
				.img{
					width: 295rpx;
					height: 295rpx;
				}
				.title{
					width: 300rpx;
					font-size: 28rpx;
					font-weight: 500;
					color: #191919;
					margin:  15rpx 0 10rpx 0;
				}
				.discount-price{
					font-size: 32rpx;
					font-weight: 500;
					color: #191919;
					line-height: 45rpx;
				}
				.mark-price{
					font-size: 26rpx;
					color: #999999;
					text-decoration: line-through;
				}
		}
	}
</style>
