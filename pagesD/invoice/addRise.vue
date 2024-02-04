<template>
  <view class="g-add-rise">
    <u-navbar class="location-class" :background="{background:'#ffffff'}" title-size="36" title-color="#191919" :border-bottom="false" title="添加发票抬头"
              back-icon-color="#191919" :custom-back="backPage"></u-navbar>
    <view class="m-option">
      <view class="u-flex m-line">
        <view class="title">发票类型</view>
        <view class="u-flex-9 item-right u-flex">
          <view class="content-btn active">电子普通发票</view>
        </view>
      </view>
      <view class="u-flex m-line" v-if="addHeadType != 1">
        <view class="title">发票内容</view>
        <view class="u-flex-9 item-right u-flex">
          <view class="content-btn" :class="{'active':content == 1}" @click="content=1">商品类别</view>
          <view class="content-btn" :class="{'active':content == 2}" @click="content=2">商品明细</view>
        </view>
      </view>
      <view class="u-flex m-line">
        <view class="title">收票人邮箱</view>
        <view class="u-flex-9 item-right u-flex">
          <input type="text" v-model="email" placeholder="请输入收票人邮箱" placeholder-class="inputPlaceholder">
        </view>
      </view>
      <view class="u-flex m-line">
        <view class="title">抬头类型</view>
        <view class="u-flex-9 item-right u-flex">
          <view class="content-btn" :class="{active:headType==2}" @click="headType=2">个人</view>
          <view class="content-btn" :class="{active:headType==1}" @click="headType=1">企业</view>
        </view>
      </view>
      <view class="u-flex m-line">
        <view class="title">发票抬头</view>
				<view class="item-right u-flex u-flex-9">
					<input type="text"
					       class="u-flex-9 u-flex"
					       @input="buyerNameChange"
					       v-model="buyerName"
					       placeholder="请输入名称"
					       placeholder-class="inputPlaceholder">
					<image v-show="!invoiceId && addHeadType !=1" class="screen" @click="invoiceClick" src="/pagesD/static/image/icon_fapiao.png"></image>
				</view>
        <view @click="clearResult" class="search-result" v-if="headType == 1 && showResult">
          <view class="result u-line-1" @click="headNameAndCode(item)" hover-class="viewHoveClass" v-for="(item,index) in resultList" v-if="index<5">{{item.name}}</view>
        </view>
      </view>
      <view v-if="headType == 1">
        <view class="u-flex m-line">
          <view class="title">公司税号</view>
          <view class="u-flex-9 item-right u-flex">
            <input type="text" v-model="buyerTaxNum" placeholder="请填写纳税人识别号" placeholder-class="inputPlaceholder">
          </view>
        </view>
        <view class="u-flex m-line">
          <view class="title">开户银行</view>
          <view class="u-flex-9 item-right u-flex">
            <input type="text" v-model="buyerBankName" placeholder="请填写单位开户银行" placeholder-class="inputPlaceholder">
          </view>
        </view>
        <view class="u-flex m-line">
          <view class="title">银行账户</view>
          <view class="u-flex-9 item-right u-flex">
            <input type="number" v-model="buyerBankAccount" maxlength="19" placeholder="请填写单位银行账户" placeholder-class="inputPlaceholder">
          </view>
        </view>
        <view class="u-flex m-line">
          <view class="title">企业地址</view>
          <view class="u-flex-9 item-right u-flex">
            <input type="text" v-model="buyerAddress" placeholder="请填写企业地址" placeholder-class="inputPlaceholder">
          </view>
        </view>
        <view class="u-flex m-line">
          <view class="title">企业电话</view>
          <view class="u-flex-9 item-right u-flex">
            <input type="number" v-model="buyerTel" maxlength="11" placeholder="请填写企业电话" placeholder-class="inputPlaceholder">
          </view>
        </view>
        <view class="u-flex m-line">
          <view class="title">设为默认地址</view>
          <view class="u-flex-9 item-right u-flex switch">
            <u-switch
                inactive-color="#E6E6E6"
                active-color="#D1B085"
                size="42"
                v-model="switchValue">
            </u-switch>
            <!-- <switch style="transform: scale(.8);" @change="" :checked="switchValue" color="#D1B085" /> -->
          </view>
        </view>
      </view>
    </view>
    <view class="u-text-center btn-box">
      <text class="commit-btn" @click="addHead">提交</text>
    </view>
    <invoice-popup ref="invoicePopup" @popupEvent="getInvoiceDea" :orderIds="orderId"></invoice-popup>
    <u-mask :show="(headType == 1 && showResult)" @click="clearResult" :custom-style="{background: 'rgba(0,0,0,0)'}"></u-mask>
  </view>
</template>

<script>
import { mapMutations } from 'vuex'
import InvoicePopup from "./components/invoicePopup";
import {regEmail,isNull} from "../../common/verify";
export default {
  components: {InvoicePopup},
  data(){
    return {
      addHeadType: 1,                       //  发票抬头类型 1(添加)  2（下单） 3（订单）
      switchValue: true,
      headType: 2,                       	  // 是		抬头类型(1:企业2:个人)
      buyerName: '',                       	// 是		发票抬头(企业名称/个人)
      buyerTaxNum: '',                      // 否		公司税号
      buyerTel: '',                       	// 否		企业电话
      buyerAddress: '',                     // 否		企业地址
      buyerBankName: '',                    // 否		开户银行
      buyerBankAccount: '',                 // 否		银行账号
      email: '',                       	    // 否		邮箱
      isDefault: 0,                       	// 是		是否默认(0:否1:是)
      content: 1,                           // 发票内容(1:商品内别2:商品详情)
      invoiceId:'',                         // 发票id
      orderId: [],                          // 订单id
      orderGoodsId: '',                     // 子订单id
      showResult:false,                     // 是否
      resultList:[]                         // 发票抬头结果列表
    }
  },
  onLoad(option){
    const invoiceInfo = option?.invoiceInfo && JSON.parse(option?.invoiceInfo)
    // 1(添加)  2（下单） 3（订单）
    this.addHeadType = option?.type || 1
    // 修改发票抬头id
    this.invoiceId = option?.invoiceId ||   ''
    this.content = option?.content || 1
    // 订单开发票参数
    this.orderId = option.orderId?JSON.parse(option.orderId):[]
    this.orderGoodsId = option?.orderGoodsId || ''
    if(this.invoiceId){
      this.getInvoiceDea(this.invoiceId)
    }
    if(invoiceInfo){
      this.content = invoiceInfo?.content || 1
      const id = invoiceInfo?.invoiceHeadId || ''
      if(id){
        this.getInvoiceDea(id)
        return
      }
      this.initObj(invoiceInfo)
    }
  },
  onShow(){
    this.$nextTick(()=>{
      if(this.$refs.invoicePopup.show){
        this.$refs.invoicePopup.refreshInvoiceList()
      }
    })
  },
  methods:{
    ...mapMutations(['setInvoiceInfo']),
    // 清楚搜索结果
    clearResult(){
      this.showResult = false
    },
    // 获取企业税号
    async headNameAndCode(obj) {
      try {
        if (obj?.code) {
          const {dataInfo: res} = await this.$http.headNameAndCode({code: obj?.code})
          this.buyerTaxNum = res?.buyerTaxNum || this.buyerTaxNum
          this.buyerName = res?.buyerName || this.buyerName
        }
        this.clearResult()
      } catch (e) {
        this.clearResult()
      }
    },
    // 发票抬头发生改变
    buyerNameChange(e){
      this.buyerName = e.target.value
      if(this.buyerName.length>=3 && this.headType !=2){
        this.showResult = true
        this.$u.debounce(this.fuzzyQuery, 500)
      }
    },
    //发票抬头模糊查询
    async fuzzyQuery(){
      let keyword = this.buyerName || ''
      if(this.buyerName.length<3){
        return
      }
      const {dataInfo:res} = await this.$http.fuzzyQuery({keyword})
      this.resultList = res || []
    },
    // 添加抬头
    async addHead(){
			try{
				let param = {isDefault:0,headType:this.headType}
				if(isNull(this.buyerName)){
				  this.$toast('发票抬头不能为空')
				  return
				}
				param.buyerName = this.buyerName
				if(this.email){
				  if(regEmail(this.email)){
				    this.$toast('请输入正确的邮箱')
				    return
				  }
				  param.email = this.email
				}
				if(this.headType == 1){
				  if(isNull(this.buyerTaxNum)){
				    this.$toast('请填写公司税号')
				    return
				  }
				  param = {
				    ...param,
				    buyerTaxNum:this.buyerTaxNum,
				    buyerTel:this.buyerTel,
				    buyerAddress:this.buyerAddress,
				    buyerBankName:this.buyerBankName,
				    buyerBankAccount:this.buyerBankAccount,
				  }
				}
				// 下单 直接回传数据
				if(this.addHeadType == 2){
				  param.content = this.content
				  this.setInvoiceInfo(param)
				}
				// 订单发票
				if(this.addHeadType == 3){
				  if(!this.orderId ){
				    this.$toast('订单不存在')
				    return
				  }
				  const otherParam = {
				    orderGoodsIdList:this.orderId,
				    content:this.content,
				    invoiceHeadDataRequest:param
				  }
				  await this.$http.invoiceIssue(otherParam)
				  this.$toast('添加成功')
				}
				if(this.switchValue){
				  param.isDefault = 1
				}
				if(this.addHeadType == 1){
				  // 修改发票抬头
				  if(this.invoiceId){
				    param.id = this.invoiceId
				    await this.$http.invoiceUpdate(param)
				    this.$toast('修改成功')
				  }else{
				    // 正常添加发票抬头
				    await this.$http.addInvoiceHead(param)
				    this.$toast('添加成功')
				  }
				}
				setTimeout(()=>{
				  uni.navigateBack()
				},400)
			}catch(e){
				
				console.log(e)
				//TODO handle the exception
			}
      
    },
    // 获取发票抬头详情
    async getInvoiceDea(invoiceId) {
      const {dataInfo:res} = await this.$http.getHeadById({id:invoiceId})
      this.$refs.invoicePopup.show = false
      this.initObj(res)
    },
    // 初始化参数
    initObj(res={}){
      this.headType = res?.headType || 2
      this.buyerName = res?.buyerName ||''
      this.buyerTaxNum = res?.buyerTaxNum || ''
      this.buyerTel = res?.buyerTel || ''
      this.buyerAddress = res?.buyerAddress|| ''
      this.buyerBankName = res?.buyerBankName|| ''
      this.buyerBankAccount = res?.buyerBankAccount|| ''
      this.email = res?.email || ''
      this.isDefault = res?.isDefault || 0
      if(this.isDefault == 0){
        this.switchValue = false
      }
    },
    // 选择发票抬头
    selInvoice(){
      this.goTo('/pagesD/invoice/addRise')
    },
    // 发票点击
    invoiceClick(){
      this.$refs.invoicePopup.show = true
    },
  }
}
</script>

<style scoped lang="scss">
.g-add-rise {
  .m-option {
    padding: 0 30rpx;
    background: #ffffff;
    margin-top: 20rpx;
    .m-line {
      position: relative;
      padding: 40rpx 0 30rpx;
			.item-right{
				 position: relative;
				&::after{
					 content:'';
					 background: #e6e6e6;
					 width: 100%;
					 height: 1rpx;
					 position: absolute;
					 left: 0;
					 bottom: -30rpx;
				}
				
			}
		  &:nth-last-of-type(1){
				 .item-right{
          position: relative;
          &::after{
              content:'';
              height: 0;
              position: absolute;
              left: 0;
              bottom: -30rpx;
          }
				 }
			}
      .title {
        width: 180rpx;
      }
      .content-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 240rpx;
        height: 60rpx;
        border-radius: 45rpx;
        background: #F1F1F1;
        color: #191919;
        font-size: 28rpx;
        font-family: PingFang SC,PingFangSC-Semibold;
        font-weight: 400;
        &:first-of-type{
          margin-right: 30rpx;
        }
        &.active{
          font-weight: 600;
          border: 2rpx solid #D1B085;
          background: #FFF4E5;
          color: #D1B085;
        }
      }
      .switch{
        justify-content: flex-end;
      }
      .screen{
        padding-left: 20rpx;
        width: 40rpx;
        height: 40rpx;
      }
      .search-result{
        //padding-top:38rpx ;
        z-index: 	100779;
        top: 108rpx;
        position: absolute;
        width: 690rpx;
        height: 428rpx;
        background: #ffffff;
        border-radius: 14rpx;
        box-shadow: 0px 4rpx 20rpx 0px rgba(0,0,0,0.1);
        &:before{
          content: '';
          position: absolute;
          top: -20rpx;
          left: 40rpx;
          width: 0;
          height: 0;
          border-left: 14rpx solid transparent;
          border-right: 14rpx solid transparent;
          border-bottom: 20rpx solid  rgba(255,255,255,0.9);
          //border-bottom: 20rpx solid red;
        }
        .result{
          padding: 24rpx 30rpx 20rpx;
          font-family: PingFangSC-Regular;
          font-size: 30rpx;
          color: #999999;
          letter-spacing: 0;
          font-weight: 400;
        }
      }
    }
  }
}

.btn-box{
  margin-top: 70rpx;
  margin-bottom: iphone-bottom(50rpx);
  .commit-btn{
    padding: 20rpx 247rpx;
    background: #D1B085;
    border-radius: 45rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
  }
}

/deep/.inputPlaceholder{
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
}
/deep/.u-switch{
  width: 88rpx!important;
  height: 44rpx!important;
}
/deep/.u-switch__node{
  box-shadow: 0 0 !important;
}
input{
  width: 100%;
}
.viewHoveClass{
  background: #f8f8f8;
  
}
</style>