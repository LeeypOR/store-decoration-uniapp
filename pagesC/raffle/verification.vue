<template>
  <view class="g-verification">
    <u-navbar class="location-class" :background="{background:'#ffffff'}" title-size="36" title-color="#191919" :border-bottom="false" title="我的赠品"
              back-icon-color="#191919" :custom-back="backPage"></u-navbar>
    <view class="box u-flex">
      <view class="title">{{isVerification == '1'?'已核销':'待核销'}}</view>
      <view class="qr">
        <image :src="qrImg"></image>
        <view class="qr-mask" v-if="isVerification == '1'">
          <image class="success-img" src="/pagesC/static/raffle/icon_payment_success.png"></image>
        </view>
      </view>
      <view class="code">{{redemptionCode}}</view>
      <view class="rule">兑换规则</view>
      <view class="rule-content">{{givingGoodsRemark}}</view>
    </view>
    <view class="btn-box" @click="seeMore">
      <text>查看更多优惠活动</text>
    </view>
    <painter style="position: fixed;left: -999rpx"
             :palette="posterData"
             @imgOK="onImgOK"
             @imgErr="onImgErr"
    ></painter>
  </view>
</template>

<script>
import Painter from "../../components/painter_uni/painter";
export default {
  components: {Painter},
  data(){
    return{
      redemptionCode: '',
      givingGoodsRemark: '',
      isVerification:false,
      posterData:'',
      qrImg:''
    }
  },
  onLoad(option){
    this.isVerification = option?.isVerification || false
    // this.redemptionCode = option?.code  || ''
    // this.givingGoodsRemark = option?.remark || ''
    this.lotteryRecordId = option?.lotteryRecordId || ''
  },
  onShow(){
    if(this.lotteryRecordId){
      this.getInfo()
    }
  },
  methods:{
    //详情
    async getInfo(){
      try {
        let res = await this.$http.giftInfo({lotteryRecordId:this.lotteryRecordId})
        console.log('res详情: ', res);
        this.redemptionCode = res.dataInfo?.redemptionCode || ''
        this.givingGoodsRemark = res.dataInfo?.givingGoodsRemark || ''
         if(this.redemptionCode){
          this.initPosterData()
        }
      } catch (error) {
        console.log('error',error);
        
      }
    },
    initPosterData(){
      this.posterData={
        width: '280rpx',
        height: '280rpx',
        background: '#ffffff',
        views:[
          {
            type: 'qrcode',
            content:this.redemptionCode,
            css: {
              width: '280rpx',
              height: '280rpx',
            }
          },
        ]
      }
    },
    // 查看更多
    seeMore(){
      uni.switchTab({
        url: '/pages/home/index'
      });
    },
    onImgOK(e){
      this.qrImg = e.detail.path
    },
    onImgErr(){
       this.$toast('图片生成失败')
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  flex-direction: column;
  margin: 30rpx 30rpx 0;
  background: #ffffff;
  padding: 30rpx 30rpx 70rpx;
  border-radius: 14rpx;
  .title{
    margin-bottom: 20rpx;
    font-family: PingFangSC-Medium;
    font-size: 32rpx;
    color: #191919;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
  .qr{
    width: 280rpx;
    height: 280rpx;
    margin-bottom: 20rpx;
    position: relative;
    image{
      width: 100%;
      height: 100%;
    }
    .qr-mask{
      background: rgba(255,255,255,0.80);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      image{
        width: 280rpx;
        height: 280rpx;
      }
    }
  }
  .code{
    margin-bottom: 80rpx;
    font-family: PingFangSC-Regular;
    font-size: 32rpx;
    color: #191919;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
  .rule{
    width: 630rpx;
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 400;
  }
  .rule-content{
    margin-top: 10rpx;
    width: 630rpx;
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #999999;
    letter-spacing: 0;
    font-weight: 400;
  }
}
.btn-box{
  margin: 60rpx 30rpx 0;
  text-align: center;
  background: #D1B085;
  border-radius: 45rpx;
  text{
    display: inline-block;
    padding: 22rpx 0;

    font-family: PingFangSC-Medium;
    font-size: 32rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
}
</style>