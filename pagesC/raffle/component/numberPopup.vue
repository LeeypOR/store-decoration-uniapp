<template>
  <view>
    <u-popup v-model="show"
             mode="bottom"
             border-radius="14"
             safe-area-inset-bottom
             :mask-close-able="false"
             closeable>
      <view class="popup-box u-flex">
        <view class="popup-title">获取抽奖机会</view>
        <view class="u-flex-1 option">
          <scroll-view scroll-y="true" style="height: 100%">
            <view class="option-card u-flex" v-for="(item,index) in mapList">
              <view class="option-item u-flex">
                <image class="num-img" :src="`/pagesC/static/raffle/renwu${index}.png`"></image>
                <view>
                  <view v-if="![8,9].includes(item.sourceType)" class="name">{{ item.name }} {{ `(${item.already}/${item.limit})` }}</view>
                  <view v-else>{{ item.name }}<text style="color: #D1B085;margin-right: 10rpx">{{'￥'+switchMoney(item.amount)}}</text> {{ `(${item.already}/${item.limit})` }}</view>
                  <view class="num">抽奖机会+{{ item.count }}</view>
                </view>
              </view>
              <view class="u-relative">
                <block v-if="mapBtnName(item).isActive">
                  <text class="btn-color" @click=" getNumber(item)">{{ mapBtnName(item).name }}</text>
                  <button class="share-btn" v-if="item.sourceType== 4" open-type="share"></button>
                </block>
                <text class="btn-color active" v-else>{{ mapBtnName(item).name }}</text>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  props:{
    numList:{
      type:Array,
      default:[]
    },
    activityId:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      show:false
    }
  },
  // 抽奖次数的来源(1:新人专享,2:免费抽奖,3:积分兑换,4:分享好友,5:分享朋友圈,6:购买指定商品
  computed:{
    mapList() {
      let numList = this.numList.map(item => {
        if (item.sourceType == 1) {
          item.name = '新人专享'
        }
        if (item.sourceType == 2) {
          item.name = '免费抽奖'
        }
        if (item.sourceType == 3) {
          item.name = '积分兑换'
        }
        if (item.sourceType == 4) {
          item.name = '分享好友'
        }
        if (item.sourceType == 5) {
          item.name = '分享朋友圈'
        }
        if (item.sourceType == 6) {
          item.name = '购买指定商品'
        }
        if (item.sourceType == 7) {
          item.name = '现金购买'
        }
        if (item.sourceType == 8) {
          item.name = '单笔满抽'
        }
        if (item.sourceType == 9) {
          item.name = '单笔递增满抽'
        }
        if (item.sourceType == 10) {
          item.name = '口令抽奖'
        }
        return item
      })
      return numList
    },
    // 映射按钮名称
    mapBtnName(){
      return (obj=null) => {
        if(!obj){
          return
        }
        const isActive = (obj?.limit - obj?.already) > 0 ? true : false
        const type = obj?.sourceType
        if([1,2].includes(type)){
          return {
            name:isActive?'去领取':'已领取',
            isActive
          }
        }
        if([8,9,10].includes(type)){
          return {
            name:isActive?'去完成':'已完成',
            isActive
          }
        }
        if(type == 3){
          return {
            name:obj?.integrals+'积分',
            isActive
          }
        }
        if(type == 4){
          return {
            name:'去分享',
            isActive
          }
        }
        if(type == 6){
          return {
            name:'去购买',
            isActive
          }
        }
        if(type == 7){
          return {
            name:'￥'+this.switchMoney(obj?.amount),
            isActive
          }
        }
      }
    },
  },
  methods:{
    // 根据 type 做不一样的处理
    async getNumber(obj={}){
      const type = obj.sourceType
      if(type == 6){
        this.goTo(`/pagesC/raffle/goodList?activityId=${this.activityId}`)
        this.show = false
        return
      }
      if([8,9].includes(type)){
        this.goTo(`/pagesB/search/goodsList`)
        this.show = false
        return
      }
      if (type == 10) {
        this.show = false
        this.$parent.$refs.comfirmPopup.show = true
        return
      }
      uni.showLoading({title:''});
      if([1,2,3].includes(type)){
        const res = await this.$http.lotteryAddNumber({
          activityId:this.activityId,
          sourceType:type
        })
        this.$emit('addDrawNumber',type)
        this.show = false
        this.$toast('领取成功')
        return
      }
      if(type == 7){
        this.buyNumber(type)
      }
    },
    // 创建支付
    async buyNumber(type){
      const that = this
      const res = await this.$http.lotteryBuyCash({activityId: this.activityId,orderFromType:1})
      const orderId = res?.dataInfo ||''
      if(orderId){
        const {dataInfo: res} = await this.$http.payWxOrder({orderId:orderId,orderPayType:4})
        wx.requestPayment({
          timeStamp: res.timeStamp,
          nonceStr: res.nonceStr,
          package: res.packageValue,
          signType: res.signType,
          paySign: res.paySign,
          success: (res) => {
            that.show = false
            that.$emit('addDrawNumber',type)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-box{
  width: 100%;
  flex-direction: column;
  background: #ffffff;
  height: 70vh;
  .popup-title{
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #191919;
    padding:  30rpx 0;
  }
  .option-card{
    width: 690rpx;
    padding: 30rpx 0;
    margin: 0 30rpx;
    justify-content: space-between;
    .option-item{
      image{
        margin-right: 20rpx;
        width: 90rpx;
        height: 90rpx;
      }
      .name{
        font-size: 28rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #191919;
        margin-bottom: 10rpx;
      }
      .num{
        font-size: 26rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
  }
  .option{
    overflow-y: scroll;
    height: 0rpx;
  }
  .btn-color{
    text-align: center;
    display: inline-block;
    padding: 15rpx 30rpx;
    background: #D1B085;
    border-radius: 45rpx;
    min-width: 144rpx;

    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    &.active{
      background: rgba(0,0,0,.49);
      opacity: 0.49;
    }
  }
}
.share-btn{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100756;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>

