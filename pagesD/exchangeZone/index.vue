<template>
  <view style="height:100%">
    <view class="exchange">
      <u-navbar :border-bottom="false" title="兑换专区" title-bold title-color="#191919" title-size="36"
            back-icon-color="#000000"></u-navbar>
      <image v-if="exchangPageJson && exchangPageJson.drawPosterBtnShow==1" class="exchange-headImage" :style="[headImage]" :src="imageUrl" mode="aspectFill" />
      <view class="conatianer">
        <scroll-view style="height:100%" scroll-y>
          <view class="wrap">
            <view v-for="item in exchangeZoonList" :key="item" class="wrap-item">
              <image class="wrap-image" :src="imgUrl(item.goodsPicture)" mode="aspectFill" />
              <view class="wrap-title u-line-2">{{item.goodsName}}</view>
              <view class="wrap-foot">
                <view class="price">¥{{switchMoney(item.goodsPrice)}}</view>
                <view @click="goDetail(item)" :class="['btn',{'bnt-disabled':item.remainStock==0}]">立即兑换</view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
    
  </view>
</template>

<script>

export default {
    
    data() {
        return {
          bgimg:'../static/image/bg_dh.png',
          activityId:'',
          exchangeZoonList:[],
          exchangPageJson:{}
        };
    },
    
    onLoad(option){
      // activityId=561988241516003328
      this.activityId = option?.activityId || ""
    },
    onShow(){
      if(this.activityId){
        this.getZoonList()
        this.getExchangeCouponList()
      }
    },
    computed:{
      imageUrl(){
        if(this.exchangPageJson?.posterType==1){
          return this.bgimg
        }
        if(this.exchangPageJson?.posterType==2){
          return this.exchangPageJson.posterImgUrl
        }
      },
      headImage(){
        if(this.exchangPageJson?.posterType==2 && !this.exchangPageJson.posterImgUrl){
          return {
            'display':'none'
          }
        } 
        return ''
      }
    },
    methods: {
      async getZoonList(){
        let res = await this.$http.exchangeZoonList({activityId:this.activityId})
        this.exchangeZoonList = res?.dataInfo || []
        console.log('res: ', res);
       
      },
      async getExchangeCouponList(){
        let res = await this.$http.exchangeCouponList({})
        let arr = res.dataInfo?.filter(item=>{
          return item.activityId == this.activityId
        })
        console.log('arr: 券', arr);
        this.exchangPageJson = arr[0].msgJson?JSON.parse(arr[0].msgJson):{}
        console.log('this.exchangPageJson: ', this.exchangPageJson);
      },
      goDetail(item){
        if(item.remainStock == 0){
          return 
        }
        this.goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}&activeType=EZ&activeId=${this.activityId}`)
      }
    },
};
</script>
<style>
</style>
<style scoped lang="scss">
  .exchange{
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &-headImage{
      flex-shrink: 0;
      width: 100%;
      height: 320rpx;
    }
    .conatianer{
      flex: 1 ;
      overflow: hidden;
    }
    .wrap{
      padding: 30rpx;
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-auto-rows: minmax(335rpx, auto);
      grid-gap:20rpx 21rpx;
      &-item{
        padding: 20rpx;
        background: #ffffff;
        border-radius: 14rpx;

      }
      &-image{
          width: 290rpx;
          height: 290rpx;
        }
      &-title{
        margin: 24rpx  0;
        font-size: 28rpx;
        color: #191919;
      }
      &-foot{
        display: flex;
        justify-content: space-between;
        .price{
          font-size: 32rpx;
          color: #191919;
          font-weight: 500;
        }
        .btn{
          width: 140rpx;
          height: 46rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          background: $themeColor;
          border-radius:  97rpx;
          font-size:24rpx;
          color: #FFFFFF;
          &.bnt-disabled{
            background: #CCCCCC;
          }
        }
      }
    }
  }
</style>
