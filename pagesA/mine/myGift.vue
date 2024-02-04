<template>
  <view>
    <u-navbar :border-bottom="false" title="我的赠品" title-bold title-color="#191919" title-size="36"
              back-icon-color="#000000"></u-navbar>
    <view class="box" v-if="giveList.length>0">
      <view class="card u-flex" v-for="item in giveList">
        <image style="flex-shrink: 0" :src="item.goodsPicture"></image>
        <view class="right u-flex-1">
            <view class="top">
               <view class="title u-flex ">
                 <view style="width: 300rpx" class="u-line-1">{{item.goodsName}}</view>
                 <text>{{mapStatusObj(item).statusName}}</text>
               </view>
               <view class="time" v-if="item.expiredDate">有效期至{{item.expiredDate}}</view>
            </view>
            <view class="u-text-right">
              <text class="bottom-btn active" v-if="mapStatusObj(item).type != 'NO'" @click="useNow(item)">{{mapStatusObj(item).btnName}}</text>
              <text class="bottom-btn" v-else>{{mapStatusObj(item).btnName}}</text>
            </view>
        </view>
      </view>
    </view>
    <no-data v-else></no-data>
  </view>
</template>

<script>

import NoData from "../../components/noData";
export default {
  components:{
    NoData,
  },
  data(){
    return {
      title:'我的赠品',
      giveList:[]         // 赠品列表
    }
  },
  onShow(){
    this.lotteryMyGive()
  },
  computed:{
    // 映射按钮对象
    mapStatusObj(){
      return (item) => {
        let obj = {
          statusName:'--',
          btnName:'--',
          type:''
        }
        const goodsType = item?.goodsType         // 商品类型(1:商城商品 3:自建商品)
        const isExpired = item?.isExpired         // 是否过期(1:是 0:否)
        const status = item?.status               // 领取状态 0:待上传(待核销) 1:领取(已核销) 2:待审核// 3:审核通过,判断过期 4:审核拒绝 5:直接领取,6：审核驳回
        if(goodsType == 3){
          if(status == 0){
            obj = {
              statusName:'待核销',
              btnName:'待核销',
              type:'HX'
            }
          }
          if(status == 1){
            obj = {
              statusName:'已核销',
              btnName:'已核销',
              type:'HX'
            }
          }
        }
        if(goodsType == 1){
          if(status == 0){
            obj = {
              statusName:'未提交',
              btnName:'上传凭证',
              type:'PZ'
            }
          }
          if(status == 1){
            obj = {
              statusName:'已领取',
              btnName:'已领取',
              type:'DDXQ'
            }
          }
          if(status == 2){
            obj = {
              statusName:'待审核',
              btnName:'待审核',
              type:'PZ'
            }
          }
          if(status == 3){
            obj = {
              statusName:'审核通过',
              btnName:'立即领取',
              type:'SPXQ'
            }
          }
          if(status == 4){
            obj = {
              statusName:'审核拒绝',
              btnName:'未通过',
              type:'PZ'
            }
          }
          if(status == 5){
            obj = {
              statusName:'',
              btnName:'立即领取',
              type:'SPXQ'
            }
          }
          if(status == 6){
            obj = {
              statusName:'未通过',
              btnName:'重新提交',
              type:'PZ'
            }
          }
        }
        if(isExpired == 1){
          obj.btnName = '已过期'
          obj.type = 'NO'
        }
        return obj
      }
    }
  },
  methods:{
    async lotteryMyGive(){
      const res = await this.$http.lotteryMyGive({current:1,size:999})
      this.giveList = res?.dataInfo?.records || []
    },
    // 立即使用
    useNow(obj){
      const type = this.mapStatusObj(obj).type
      const orderId = obj.orderId
      if(this.orderId){
        this.goTo(`/pagesA/order/waitPay?orderId=${orderId}`)
        return
      }
      if(['SPXQ'].includes(type)){
        const giftInfo = {
          lotteryRecordId:obj?.lotteryRecordId,
          rule:obj?.givingGoodsRemark,
          givingGoodsRemark:obj?.givingGoodsRemark
        }
        this.goTo(`/pagesA/shop/goodsDetail?id=${obj.goodsId}&giftInfo=${JSON.stringify({...giftInfo})}&activeType=ZP`)
        return
      }
      if(['DDXQ'].includes(type)){
        this.goTo(`/pagesA/order/waitPay?orderId=${orderId}`)
        return
      }
      if(["PZ"].includes(type)){
        const imgList = obj?.imageList || []
        const remark = obj?.remark || ''
        const status = obj?.status || '0'
        const lotteryRecordId = obj?.lotteryRecordId || ''
        this.goTo(`/pagesC/raffle/submitMaterial?imgList=${JSON.stringify(imgList)}&remark=${remark}&status=${status}&lotteryRecordId=${lotteryRecordId}`)
        return
      }
      if(['HX'].includes(type)){
        const redemptionCode = obj?.redemptionCode || ''
        const givingGoodsRemark = obj?.givingGoodsRemark || ''
        const isVerification = obj?.status
        const lotteryRecordId = obj?.lotteryRecordId
        // if(!redemptionCode){
        //   this.$toast('核销码不存在')
        //   return
        // }
        this.goTo(`/pagesC/raffle/verification?code=${redemptionCode}&remark=${givingGoodsRemark}&isVerification=${isVerification}&lotteryRecordId=${lotteryRecordId}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 30rpx;
  padding: 0 30rpx;
  .card {
    background: #ffffff;
    margin-bottom: 20rpx;
    border-radius: 14rpx;
    overflow: hidden;
    image {
      width: 220rpx;
      height: 220rpx;
      border-radius: 14rpx 0rpx 0rpx 14rpx;
    }
    .right {
      display: flex;
      height: 220rpx;
      justify-content: space-between;
      flex-direction: column;
      padding: 20rpx;
      .top {
        //margin-bottom: 40rpx;
        .title {
          justify-content: space-between;
          font-size: 30rpx;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #191919;
          text{
            flex-shrink: 0;
            margin-left: 20rpx;
            font-family: PingFangSC-Regular;
            font-size: 24rpx;
            color: #D1B085;
            letter-spacing: 0;
            font-weight: 400;
          }
        }
        .time {
          margin-top: 20rpx;
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
      .bottom-btn {
        text-align: right;
        padding: 10rpx 22rpx;
        display: inline-block;
        background: #CCCCCC;
        border-radius: 100rpx 97rpx 97rpx 100rpx;

        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        &.active{
          background: #D1B085;
        }
      }
    }
  }
}
</style>
