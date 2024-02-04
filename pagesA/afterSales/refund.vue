<template>
  <view class="g-refund">
    <u-navbar class="location-class" :border-bottom="false" title="退款/售后" title-bold title-color="#191919"
              title-size="36" back-icon-color="#000000"></u-navbar>
    <!--  退款商品  -->
    <shop-card :shopList="[goodsInfo]" :shopType="repairsType"></shop-card>
    <!--  退款信息  -->
    <view class="g-refund-info">
      <view class="refund-card">{{serveName}}信息</view>
      <view class="refund-item u-flex" @click="setShowCausePopup(true)">
        <view class="item-left">
          <text>{{serveName}}原因</text>
          <text class="iconfont icon-required"></text>
        </view>
        <view class="item-right u-flex">
          <text>{{refund || '请选择'}}</text>
          <text class="iconfont icon-arrow"></text>
        </view>
      </view>
      <take-address v-if="repairsType == 3"></take-address>
      <block v-else>
        <view class="refund-item">
          <view class="u-flex item-top">
            <view class="item-left">
              <text>退款金额</text>
              <text class="iconfont icon-required"></text>
            </view>
            <view class="item-right u-flex">
              <text class="refund-num">¥{{switchMoney(goodsInfo.goodsOrderPrice)}}</text>
            </view>
          </view>
          <!-- <view class="item-tip">不可修改，最多¥998.00，含发货邮费¥0.00</view> -->
        </view>
        <view class="refund-item u-flex" v-if="repairsType == '2'">
          <view class="item-left">
            <text>退款方式</text>
            <text class="iconfont icon-required"></text>
          </view>
          <view class="item-right u-flex">
            <text class="edit-state">物流退货</text>
          </view>
        </view>
      </block>
    </view>
    <!--  退款补充  -->
    <view class="g-refund-describe">
      <view class="refund-card">补充描述和凭证</view>
      <view class="item-box">
        <view class="text-area-box" v-show="(showTextArea || showText || repairsType!=2 )">
          <textarea placeholder-class="text-area-card"
                    v-model="textareaValue"
                    :maxlength="60"
                    placeholder="补充描述，有助于商家更好的处理售后问题">
          </textarea>
          <text class="text-area-num">{{textareaValue.length>60?60:textareaValue.length}}/60</text>
        </view>
        <!--   图片     -->
        <view class="upload-image-list image-right u-flex">
          <view class="sel-img-box" v-for="(item,index) in imgList" :key="index">
            <image mode="aspectFill" :src="item"></image>
            <view @click.stop="cancleImage(index)" class="close-image">
              <image mode="aspectFill" src="../static/image/app_icon_input_del.png"></image>
            </view>
          </view>
          <view @click="chooseImage" class="upload-image-btn image-right u-flex">
            <text class="iconfont icon-upload"></text>
            <text class="upload-image-tip ">上传图片</text>
          </view>
        </view>
      </view>
    </view>
    <!--  底部按钮  -->
    <view class="bottom-height"></view>
    <view class="bottom-btn">
      <view class="btn-submit" @click="submit">提交</view>
    </view>
    <!--  退款原因填写  -->
    <cause-popup :repairsType="repairsType" @change="getRefund"></cause-popup>
  </view>
</template>

<script>
import {mapMutations,mapState,mapGetters} from 'vuex'
import CausePopup from "./components/causePopup";
import shopCard from "../../components/shopCard";
import {isNull} from "../../common/verify";
import TakeAddress from "./components/takeAddress";
export default {
  components: {TakeAddress, shopCard, CausePopup},
  data(){
    return {
      title:'退款/售后',
      refund:'',                // 退款原因
      reasonDesc:'',            // 退款描述
      repairsType: 1,           // 类型 1 退款 2 退货 3 换货
      goodsInfo:{},
      imgList:[],
      textareaValue:'',
      showText:true,
      orderId:'',               // 订单id
      id:''                     // 售后订单id
    }
  },
  onLoad(option){
    this.repairsType = this.getRepairsType(option.orderStatus)
    this.goodsInfo = JSON.parse(option.detail || '')[0] || {}
    this.orderId = option?.orderId || ''
    this.id = option?.id
    if(this.orderId){
      this.seeSalesReturn()
    }
  },
  onUnload(){
    this.$store.commit('setSelAddress',null)
  },
  computed:{
    serveName(){
      if(this.repairsType == 1){
        return '退款'
      }
      if(this.repairsType == 2){
        return '退货'
      }
      if(this.repairsType == 3){
        return '换货'
      }
    },
    ...mapGetters(['getDefaultAddress']),
    // ...mapState({
    //   showCausePopup:'showCausePopup'
    // }),
    // 弹窗后 400s 隐藏textarea
    showTextArea() {
      if (this.$store.state.showCausePopup) {
        setTimeout(() => {
          this.showText = false
        }, 400)
        return
      }
      this.showText = true
      return false
    },
    getRepairsType(){
      return (type) => {
        if (type == 'ORDER_UN_ISSUE') {
            return 1
        }
        if (type == 'ORDER_UN_RECEIVED') {
            return 2
        }
        if(type == 'barter'){
          return 3
        }
        return 1
      }
    }
  },
  methods:{
    ...mapMutations(['setShowCausePopup']),
    // 上传图片
    chooseImage(){
          getApp().globalData.preveImage='preveImage' 
      uni.chooseImage({
        count: 6, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        success: async file => {
          const tempFilePaths = file.tempFilePaths;
          for (let i = 0; i < tempFilePaths.length; i++) {
            const res = await this.$http.uploadFile(tempFilePaths[i])
            if(res.returnCode == 1000){
              this.imgList.push(res.dataInfo.url)
            }else{
              this.$toast(res.message)
            }
          }
          // this.imgList = file.tempFilePaths
        }
      });
    },
    // 删除图片
    cancleImage(index){
      this.imgList.splice(index,1)
    },
    // 获取退款原因
    getRefund(obj={}){
      this.refund = obj.reason || ''
      this.reasonDesc = obj.reasonDesc || ''
    },
    // 提交退款申请
    async submit() {
      if(this.repairsType == 3){
        this.submitSalesReturn()
        return
      }
      if (isNull(this.refund)) {
        this.$toast('退货原因不能为空')
        return
      }
      const goodsId = this.goodsInfo?.id || ''
      if (!goodsId) {
        this.$toast('退货商品不存在')
        return
      }
      let param = {
        orderGoodsId: this.goodsInfo?.id,
        reason: this.reasonDesc || this.refund,
        reasonDesc: this.textareaValue,
        imgs: this.imgList?.join(',') || '',
        repairsType: this.repairsType
      }
      const res = await this.$http.repairsApply(param)
      const id = res?.dataInfo?.id
      if (!id) {
        this.$toast('操作失败')
        return
      }
      this.$eventPlugInCode({
        ...this.codeParam,
        goodsId:this.goodsInfo?.goodsId,
        goodsName:this.goodsInfo?.goodsName,
        title: '退款',
        orderId:this.goodsInfo?.orderId,
        type: 7,
      })
      this.goTo(`/pagesA/afterSales/refundDetails?id=${id}`, false, true)
    },
    // 提交换货申请
    async submitSalesReturn(){
      if(isNull(this.refund)){
        this.$toast('换货原因不能为空')
        return
      }
      const goodsId = this.goodsInfo?.id || ''
      if(!goodsId){
        this.$toast('换货商品不存在')
        return
      }
      let addressInfo = this.getDefaultAddress || null
      if(!addressInfo){
        this.$toast('请选择收货地址')
        return
      }
      let param = {
        id:this.id,
        userId:this.$globleData?.userData?.id,
        orderGoodsId:this.goodsInfo?.id,
        reason: this.reasonDesc || this.refund,
        reasonDesc: this.textareaValue,
        imgs: this.imgList?.join(',') || '',
        contactName:addressInfo?.userName || '',
        phone:addressInfo?.userPhone || '',
        deliveryAddress: `${addressInfo.provinceName || ''} ${addressInfo.cityName || ''} ${addressInfo.districtName || ''} ${addressInfo.detailAddress || ''}`,
        deliveryAddressId: addressInfo?.id || ''
      }
      // orderId 存在换货申请修改
      if(this.orderId){
        await this.$http.updateSalesReturn(param)
        uni.navigateBack()
      }else{
        await this.$http.applySalesReturn(param)
        this.goTo(`/pagesA/afterSales/refundDetails?orderId=${param.orderGoodsId}&goodsInfo=${JSON.stringify(this.goodsInfo)}`, false, true)
      }
    },
    // 换货详情
    async seeSalesReturn(){
      if(!this.id){
        this.$toast('换货订单不存在')
        return
      }
      const {dataInfo:res} = await this.$http.seeSalesReturn({orderGoodsId:this.orderId},true)
      this.refund = res?.reason || ''
      this.imgList = res?.imgs.split(',').filter(Boolean)
      this.textareaValue = res?.reasonDesc
    },
  }
}
</script>

<style lang="scss" scoped>
.g-refund{
  padding: 30rpx 30rpx 0;
}
// 退款商品
.store-card{
  padding: 0 30rpx;
  background: #ffffff;
  margin-bottom: 18rpx;
  border-radius: 30rpx;
  .store-item {
    padding: 16rpx 0;
    justify-content: space-between;
    .store-name {
      font-size: 28rpx;
      color: #191919;
      font-weight: 500;
    }
  }

  .goods-item{
    padding: 30rpx 0rpx 22rpx;
    image{
      width:160rpx;
      height: 160rpx;
      margin-right: 30rpx;
    }
    .item-right-center{
      padding-top: 10rpx;
      flex: 1;
      height: 160rpx;
      flex-direction: column;
      justify-content: space-between;
      .top-center{
        .title{
          width: 410rpx;
          font-size: 28rpx;
          color: #000000;
          font-weight: 500;
        }
        .tip{
          margin-top: 8rpx;
          width: 410rpx;
          font-size: 20rpx;
          color: #999999;
        }
        .goods-num{
          font-size: 20rpx;
          color: #999999;
        }
      }
      .bottom-center{
        width: 100%;
        justify-content: space-between;
        .goods-pic{
          font-size: 28rpx;
          color: #000000;
          font-weight: 500;
        }
      }
    }
  }
}

.g-refund-info{
  padding: 0rpx 30rpx;
  background: #FFFFFF;
  border-radius: 20rpx;
  .item-top{
    justify-content: space-between;
  }
  .refund-card{
    padding: 16rpx 0;
    font-size: 28rpx;
    color: #191919;
    font-weight: 600;
  }
}
.refund-item {
  border-bottom: 2rpx solid #F8F8F8;
  padding: 30rpx 0rpx;
  justify-content: space-between;
  .item-left {
    font-size: 28rpx;
    color: #191919;
    font-weight: 400;
    .icon-required{
      color: #E1544A;
    }
  }
  .item-right{
    font-size: 26rpx;
    color: #999999;
    font-weight: 400;
    .icon-arrow{
      font-size: 36rpx;
    }
    .refund-num{
      font-size: 32rpx;
      color: #E1544A;
      font-weight: 600;
    }
    .edit-state{
      font-size: 28rpx;
      font-weight: 500;
      color: #191919;
      line-height: 40px;
    }
  }
  .item-tip{
    margin-top: 1rpx;
    font-size: 24rpx;
    color: #999999;
    font-weight: 400;
  }
}

.g-refund-describe {
  margin-top: 20rpx;
  border-radius: 20rpx;
  padding: 0 30rpx;
  background: #ffffff;
  .refund-card {
    padding: 16rpx 0;
    font-size: 28rpx;
    color: #191919;
    font-weight: 600;
  }
}
.item-box{
  padding: 26rpx 0 30rpx;
}
textarea{
  width: 100%;
  height: 230rpx;
  padding-bottom: 30rpx ;
}
.text-area-card{
  font-size: 24rpx;
  color: #999999;
  font-weight: 400;
}
// 上传图片 列表
.upload-image-list{
  margin-right: -16rpx;
  flex-wrap: wrap;
  .sel-img-box{
    position: relative;
    margin-right: 16rpx;
    image{
      width: 200rpx;
      height: 200rpx;
      border-radius: 12rpx;
    }
    &:nth-of-type(3n){
      margin-right: 0;
    }
    .close-image{
      position: absolute;
      top: -10rpx;
      right: -10rpx;
      image{
        width: 30rpx;
        height: 30rpx;
      }
    }
  }
  .upload-image-btn{
    width: 200rpx;
    height: 200rpx;
    background: #F8F8F8;
    border: 1rpx solid #CCCCCC;
    border-radius: 14rpx;

    flex-direction: column;
    justify-content: center;
    .icon-paizhao{
      font-size: 42rpx;
    }
    .upload-image-tip{
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #666666;
      font-weight: 400;
    }
  }
}

// 底部按钮
.bottom-height{
  margin-top: 30rpx;
  height: iphone-bottom(100rpx);
}
.bottom-btn{
  left: 0;
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 15rpx 30rpx  iphone-bottom(15rpx) 30rpx;
  background: #ffffff;
  .btn-submit{
    text-align: center;
    padding: 15rpx 0;
    background: #D1B085;
    border-radius: 45rpx;

    font-size: 28rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 500;
  }
}
.text-area-box{
  position: relative;
  .text-area-num{
    position: absolute;
    bottom: 20rpx;
    right: 30rpx;
    font-size: 24rpx;
    color:#999999;
  }
}

.address-box{
  .address-user-info{
    margin-top: 20rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #191919;
    .phone{
      margin-left: 20rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
  }
  .address-info{
    margin-top: 8rpx;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 36rpx;
    .icon-arrow{
      font-size: 36rpx;
      color: #999999;
    }
  }
}
</style>
