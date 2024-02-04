<template>
	<view class="container">
		<u-navbar class="location-class" :border-bottom="false" :title="title" title-bold
			title-color="#191919" :custom-back="backPage"  title-size="36" back-icon-color="#000000"></u-navbar>
	<view v-if="cardList.length" class="content">
		<card-com  :cardType='cardStatus' :cardList="cardList"></card-com>
	</view>
	<no-data  v-else></no-data>
	<view class="seat"></view>
	<view @click="goTo('/pagesB/equityCard/buyHistory')" class="buy-history">
		购买记录 
	</view>
	</view>
</template>

<script>
	import cardCom from './components/card.vue'
	import noData from '@/components/noData.vue'
	export default{
		components:{
			cardCom,
			noData
		},
		data(){
			return{
				cardStatus:'',
				cardList:[],
				title:'',
				cardId:''
			}
		},
		onLoad(option) {
			
			
			if(option.scene){
				this.cardId = option.scene
				this.title = '权益卡中心'
				this.cardStatus = 'codeScan'
			}else{
				this.cardStatus = option.cardStatus
			}
			if(this.cardStatus == '3'){
				this.title = '历史卡券'
			}
			if(this.cardStatus == '2'){
				this.title = '权益卡中心'
			}
				
		},
		onShow() {
			if(this.cardId){
				this.getDeatil()
			}else{
				this.equityCardList()
			}
			
		},
		methods:{
			// 获取权益列表
			async equityCardList(){
				let res = await this.$http.getCardList({status:Number(this.cardStatus)})
				this.cardList = res.dataInfo?res.dataInfo:[]
				
			},
			// 获取详情
			async getDeatil(){
				let res = await this.$http.cardDetail({cardId:this.cardId})
				
				this.cardList = res.dataInfo?[res.dataInfo]:[]
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0 30rpx;
		
	}
	.seat{
		height: 98rpx;
	}

  .buy-history {
    position: fixed;
    bottom: 50rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 690rpx;
    border-radius: 50rpx;
    color: #ffffff;
    height: 98rpx;
    background: $themeColor;
    font-size: 32rpx;
    font-weight: blod;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<style>
  page{
    background: #ffffff!important;
  }
</style>