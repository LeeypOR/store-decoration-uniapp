<template>
  <view class="guess-you-like">
    <view class="top-title-card u-flex">
      <text>猜你喜欢</text>
      <view v-if="list.length>6" class="u-flex" @click="getMoreGoodsList">
        <text>换一批</text>
        <image src="@/static/image/shop/icon_change.png"></image>
      </view>
    </view>
    <view class="shop-box u-flex">
      <view class="shop-card" v-for="item in cardList" :key="item.id" @click="goTo(`/pagesA/shop/goodsDetail?id=${item.id}`)">
        <image :src="item.goodsPicture"></image>
        <view class="u-line-2 goods-name">{{item.goodsName}}</view>
        <view class="goods-money">¥{{switchMoney(item.salePrice)}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
    data() {
        return {
            cardList:[],
            list:[],
            from:{
                current: 1,
                size: 50,
                goodsGroupId: ''
            }
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
    // 查看商品列表
        async getGoodsList(){
            try {
                this.from.buyerType=getApp().globalData.freshShopId?.includes(this.$globleData.shopId)?this.$globleData?.buyType || '':''
                const res = await this.$http.goodsList(this.from, false)
                this.list = res?.dataInfo?.records || []
                this.cardList = this.makeRandomArr(this.list,6)
            } catch (error) {
                console.log('error',error);
                
            }
       
        },
        // 查看更多商品列表
        getMoreGoodsList(){
            if(this.list.length<=6){
                return
            }   
            this.cardList = this.makeRandomArr(this.list,6)
        },
        // 从数组中获取不重复 设定个数的随机值
        makeRandomArr(arrList,num){
            if(num>arrList.length){
                return arrList;
            }
            let tempArr=arrList.slice(0);
            let newArrList=[];
            for(let i=0;i<num;i++){
                let random=Math.floor(Math.random()*(tempArr.length-1));
                let arr=tempArr[random];
                tempArr.splice(random, 1);
                newArrList.push(arr);
            }
            return newArrList;
        }
    }
}
</script>
<style lang="scss" scoped>
.guess-you-like{
  background: #FFFFFF;
  padding: 0 30rpx;
  .top-title-card{
    padding: 25rpx 0;
    justify-content: space-between;
    font-size: 28rpx;
    font-weight: 400;
    color: #191919;
    .icon-app_icon_change{
      margin-left: 2rpx;
      font-size: 40rpx;
      color: #191919;
    }
    image{
      transform: translateY(3rpx);
      width: 44rpx;
      height: 42rpx;
    }
  }
  .shop-box{
    //margin-bottom: 100rpx;
    flex-wrap: wrap;
    .shop-card{
      margin-left: 15rpx;
      padding: 10rpx 10rpx 15rpx 10rpx;
      font-size: 24rpx;
      color: #191919;
      border-radius: 14rpx;
      width: 220rpx;
      background: #FFFFFF;
      box-shadow: 0px 2rpx 8rpx 0px rgba(0,0,0,0.1);
      margin-bottom: 10rpx;
      image{
        margin-bottom: 8rpx;
        width: 200rpx;
        height: 200rpx;
      }
      .goods-money{
        margin-top: 10rpx;
      }
      .goods-name{
        height: 62rpx;
      }
      &:nth-of-type(3n+1){
        margin-left: 0;
      }
    }
  }
}
</style>