<template>
  <view class="vip-center">
    <block v-if="loading">
      <vipSkeleton />
    </block>
    <block>
      <view class="head">
      <u-navbar :border-bottom="false" :is-back="false" title=" " :background="{background:'#00000000'}" back-icon-color="#000000"></u-navbar>
      <view class="user-info u-flex">
        <image :src="userInfo.avatar || '/static/image/default_avatar.png'"></image>
        <text class="user-name">{{userInfo.nickName || '游客'}}</text>
        <text v-if="isHighestLevel" class="member-center" @click="goTo(`/pagesB/payMemberCenter/index?cardId=${cardId}`)">进入会员中心</text>
      </view>
	  <view class="sss" style="margin-top: 60rpx">
      <swiper :style="{'bottom':(-seatHeight*pxToRpxScale) + 'rpx'}" class="swiper" previous-margin="60rpx" next-margin="30rpx" :current="current" @change="currentChange">
        <swiper-item v-for="(item,index) in vipInfoList" :key="index">
          <view class="vip-info-card">
            <image class="card-back-img" :src="item.backgroundPicture" style="height: 288rpx;width:620rpx"></image>
            <view class="u-flex card-top">
              <view class="u-flex">
                <image :src="item.gradePicture"></image>
                <text :class="index==0?'card-top-silver':'card-top-name'">{{item.gradeName}}</text>
              </view>
              <view :class="index==0?'card-top-desc':'card-top-tip'" v-if="currentMemberInfo.isForever !=1">{{getNextVipName(item)}}</view>
              <block v-if="cardId && vipLevel == index">
                <view v-if="showUpGrade">
                     <view :class="index==0?'card-top-lever':'card-top-vip'" v-if="currentMemberInfo.upgradeNeedConsumptionAmount!='0'" @click.stop="goTo(`/pagesB/memberBuy/index?cardId=${cardId}`)">{{upgradeMsg}} ></view>
                     <view :class="index==0?'card-top-lever':'card-top-vip'" v-else-if="currentMemberInfo.isForever == 1">永久</view>
                     <view :class="index==0?'card-top-lever':'card-top-vip'" v-else @click.stop="goTo(`/pagesB/memberBuy/index?cardId=${cardId}`)">续费 ></view>
                </view>
              </block>
            </view>
            <view :class="['u-flex', 'card-bottom',{'card-curretn':index == 0} ]" style="justify-content: space-evenly" v-if="index==vipLevel">
                <view @click="goTo('/pagesA/mine/myOrder')" class="u-flex" style="flex-direction: column;">
                  <view class="num">{{item.consumptionTotalCount}}</view>
                  <view class="title">消费单数</view>
                </view>
                <view @click="goTo('/pagesA/mine/myCoupon')" class="u-flex" style="flex-direction: column;">
                  <view class="num">{{couponNum || 0}}</view>
                  <view class="title">优惠券</view>
                </view>
                <view @click="goTo('/pagesA/myIntegral/index')" class="u-flex" style="flex-direction: column;">
                  <view class="num">{{integrateInfo.currentIntegrate || 0}}</view>
                  <view class="title">会员积分</view>
                </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
	  </view>
    </view>
	<view :style="{'height':(seatHeight+40)*pxToRpxScale + 'rpx'}"></view>
    <!--  会员权限  -->
    <member-card @memberClick="memberClick" :getMemberList="getMemberList" :tinyPageData="tinyPageData"></member-card>
    <!-- 配置部分 -->
    <view v-for="(item, index) in shopDataList" :key="index">
      <block v-if="item.key=='PictureAdvertisement'">
        <view v-if="item.config.formData.type == '1'"><other-goods :goodsImgData="item" @goodsImg="getgoodsImg"></other-goods></view>
        <view v-if="item.config.formData.type == '2'"><header-swiper :headerData="item" @headerImg="clickHeaderImg"></header-swiper></view>
        <view v-if="item.config.formData.type == '3'"><small-img :smallImgData="item" @smallImg="clickSmallImg"></small-img></view>
      </block>
      <!-- 商品 -->
      <goods-com v-if="item.key =='my-commodity'" :dataInfo="item.config.formData" :pageId="item.id"></goods-com>
      <!--   视频    -->
      <videoModule v-if="item.key=='my-video'" :dataInfo="item.config.formData" :videoTag="`video-${index}`"></videoModule>
    </view>
    <u-popup
        v-model="show"
        closeable
        mode="bottom"
        height="70%"
        border-radius="30">
      <view class="popup-content-coupon u-flex">
        <view class="coupon-top">
          <view class="popup-coupon-title">优惠券</view>
        </view>
        <view class="content" v-if="couponList.length>0">
          <scroll-view scroll-y="true" style="height: 100%;">
          <view class="wrap" v-for="(item,index) in couponList" :key="index">
            <!-- class="card-item bg0" -->
            <view
                :class="['card-item','bg0']">
              <view class="item-left">
                <view class="price">
                  <view>
                    ￥<text class="discount-price">{{(item.couponAmount)/100}}</text>
                  </view>
                </view>
                <view class="info">
                  <view class="name">{{item.couponName}}</view>
                  <view class="endTime">有效期至{{item.useEndTime.substring(0,10)}}</view>
                  <view class="coupon-rules" v-if="item.couponFullMoney != '0'">满{{item.couponFullMoney/100}}可用</view>
                  <view class="coupon-rules" v-else>无门槛</view>
                </view>
              </view>
              <view class="item-right">
                <view class="use" v-if="item.couponStatus==0">
                  <view class="receieve">去使用</view>
                </view>
                <view class="use" v-else>
                  <view class="receieve">{{item.couponStatus==1?'已使用':'已过期'}}</view>
                </view>
              </view>
            </view>
          </view>
          </scroll-view>
        </view>
        <no-data type="noCoupon" v-else></no-data>
      </view>
    </u-popup>
    <!-- 续费，购买  按钮 -->
    <view class="btn-section" v-if="cardId && currentMemberInfo.isForever !=1">
			<view v-if="currentMemberInfo.upgradeNeedConsumptionAmount=='0'" class="btn" @click="buyNow">¥{{switchMoney(vipYearPrice)}}/年 立即续费</view>
      <view v-else class="btn" @click="buyNow">¥{{switchMoney(vipYearPrice)}}/年 立即购买</view>
		</view>
    <member-popup ref="memberPopup" :memberList="memberList" :memberIndex="memberIndex" :isClick="(vipLevel == current)"></member-popup>
    <vip-popup :refresh="refresh"></vip-popup>
    </block>

    <fixed-navigation :fixTime="refresh" :location="3"></fixed-navigation>
    <my-tabbar @change="tabbarChange" v-model="tabCurrent" :bg-color="tabbarInfo.backgroundColor" :list="tabbarInfo.navigationList"></my-tabbar>
    <view v-if="isPopup">
      <view v-for="(item,index) in exchangeInfo">
      <exchangeAdv v-if="index==0" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
       <view v-else>
         <exchangeAdv v-if="exchageId == index" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
       </view>
    </view>
    </view>

  </view>
</template>

<script>
import memberPopup from "./memberPopup";
import NoData from "../../components/noData";
import goodsCom from '@/pages/home/components/goods'
import videoModule from '@/pages/home/components/video'
import otherGoods from '@/pages/home/components/otherGoods'
import headerSwiper from '@/pages/home/components/headerSwiper'
import smallImg from '@/pages/home/components/smallImg'
import welfareList from '../../components/welfareList.vue'
import shareMixin from '../shareMixin.js'
import MemberCard from "./memberCard";
import VipPopup from "../../components/vipPopup";
import {mapState}  from 'vuex'
import vipSkeleton from './skeleton'
import myTabbar  from '@/components/myTabbar'
import exchangeMixin  from '@/pages/exchangeMixin'
import  exchangeAdv  from "../../components/exchangeAdv";
import FixedNavigation from "../../components/fixedNavigation";
export default {
	mixins:[shareMixin,exchangeMixin],
  components: {
    FixedNavigation,
    VipPopup,
    MemberCard,
    NoData,
    goodsCom,
    videoModule,
    otherGoods,
    headerSwiper,
    smallImg,
    welfareList,
    memberPopup,
    vipSkeleton,
    myTabbar,
    exchangeAdv
  },
  data(){
    return {
      title:'会员中心',
      memberPopupList:[],
      userInfo: {},
      vipInfoList: [],
      current: null,        // 当前卡片选择像
      vipLevel: 0,        // 会员等级
      shopDataList: [],
      tinyPageData: {},
      integrateInfo: {},
      couponsTotal: 0,
      couponList: [],
      show: false,
      memberList: [],
      currentMemberInfo: {},
      descriptionName: '',
      integralRatio: null,
      goodsStr: {},
      vipYearPrice: null, //年卡会员价格
      cardId: '', // 卡id
      upgradeMsg: '', // 升级会员的文字，配置
      showUpGrade: false,//是否显示升级
      pxToRpxScale: 0,
      seatHeight: 0,
      couponNum: 0,
      memberIndex:0,
      currentNameList:[],  // 当前权益名称集合
      refresh:'',
      loading:true,//是否显示骨架屏
      isPopup:true
    }
  },
   onLoad(option){
    this.tabCurrent = Number(option?.currentIndex ||0)
  },
  onTabItemTap(){
    const token = this.$globleData?.accessToken || null
    if(!token){
      uni.redirectTo({
        url: '/pages/login/index'
      });
    }
  },
  onReady() {
    const systemInfo = uni.getSystemInfoSync();
    // px转换到rpx的比例
    let pxToRpxScale = 750 / systemInfo.windowWidth;
    this.pxToRpxScale = pxToRpxScale;
    const query = uni.createSelectorQuery().in(this);
	 query.select('.swiper').boundingClientRect( (data)=>{ // data - 各种参数
	       this.seatHeight = data?.height/2 || 0
	    }).exec()
  },
  onShow(){
    if (JSON.stringify(this.$globleData.userData) == '{}') {
      this.goTo('/pages/login/index.vue')
      return
    }
    this.refresh = new Date().getTime().toString()
    this.userInfo = this.$globleData?.userData || {}
    this.getMemberInfo()
    this.getMemberCenter()
    this.getPoint()
    this.getCouponsList()
    this.isPopup = true
  },
  onHide(){
    this.$refs.memberPopup.show = false
    this.isPopup = false
  },
  computed:{
    // 获取自定义tabbar的信息
     ...mapState({
      tabbarInfo:state=>state.tabbarInfo
    }),
    tabCurrent:{
      get:function (){
        return this.$store.state.tabIndex
      },
      set:function(value){
        //  this.$store.commit('setTabIndex',value)
      }
    },
    getNextVipName() {
      return (obj=null) => {
        if (!obj) {
          return ''
        }
        if (obj?.upgradeNeedConsumptionAmount == '0') {
            return obj.expireDate ?  `${obj.expireDate}到期` : ''
        }
        if (obj?.upgradeNeedConsumptionAmount) {
          return `·再消费${obj.upgradeNeedConsumptionAmount/100}元可升级为${obj.nextGradeName}·`
        }
        return '已升级'
      }
    },
    // 获取当前卡片的 权益
    getMemberList(){
      this.memberList =  this.vipInfoList[this.current]?.benefitsBriefInfoList || []
       return this.memberList
    },
    getShowBtn(){
      // if(this.memberList.length >= 2 && this.memberList[1].own == '1'){
      //   return true
      // }
      // return false
    },
    // 是否是最高等级
    isHighestLevel() {
      let str = this.vipInfoList[this.current]?.upgradeNeedConsumptionAmount
      let length = this.vipInfoList.length-1
      if((length == this.current) && str == '0') {
        return true
      }
      return false
    }
  },
  methods:{
	  // 立即购买
    buyNow(){
      if(this.vipInfoList){
        let length = this.vipInfoList.length -1
        let list =  this.vipInfoList[length]?.benefitsBriefInfoList || []
        this.goTo(`/pagesB/memberBuy/index?cardId=${this.cardId}&memberList=${JSON.stringify(list)}&currentNameList=${JSON.stringify(this.currentNameList)}`)
      }
    },
	  // 优惠券列表
	  async getCouponsList () {
      let res = await this.$http.couponList({
          couponStatus : '0'
        })
      this.couponNum = res.dataInfo.length
	  },
    // 获取积分
    async getPoint() {
      let param = {
        id: this.$globleData.userData.id
      }
      const res = await this.$http.getIntegrateInfo(param)
      this.integrateInfo = res?.dataInfo || {}
    },
    //根据用户id查询会员信息
    async getMemberInfo() {
      const res = await this.$http.getMemberInfo()
      this.vipInfoList = res?.dataInfo || []
      let index = 0
      for (let item of this.vipInfoList) {
        if (item.currentGrade) {
          this.current = index
          this.vipLevel = index
          this.currentMemberInfo = item
          this.memberList = item?.benefitsBriefInfoList || []
          this.currentNameList = (item.benefitsBriefInfoList || []).map(obj=>{
            return obj?.benefitName || ''
          })
          return
        }
        index = index + 1
      }
    },
    // 卡片监听
    currentChange({detail={}}){
      this.current =detail.current
    },
    // 会员中心查询
    async getMemberCenter(){
      const res = await this.$http.getMemberCenter()
      this.tinyPageData ={
        jumpPageId:res?.dataInfo?.jumpTargetValue || '',
        jumpPageType:res?.dataInfo?.jumpTargetType || '',
        isShow:res?.dataInfo.isShow,
        descriptionName: res?.dataInfo?.description || ''
      }
      this.shopDataList = JSON.parse(res.dataInfo.pageMsJson)
      this.descriptionName  = res?.dataInfo?.description
      this.upgradeMsg = res?.dataInfo?.upgradeMsg   //升级会员的文字，配置
      this.cardId = res?.dataInfo?.upgradeTargetId   //获取cardId
      if(res?.dataInfo.isUpgrade == 1){
		  this.showUpGrade = true
	  }else{
		  this.showUpGrade = false
	  }
      this.cardId ? this.getInfo() : ''
    },
    // 点击权益
    async memberClick(index=0){
	    this.memberIndex = index
      this.$refs.memberPopup.show = true
	    return
      // let current = this.vipInfoList[this.vipLevel]?.benefitsBriefInfoList || []
      // let item = current[index] || {own:0}
      // if(item.own=='0' ) {
      //   return this.cardId ? this.goTo(`/pagesB/memberBuy/index?cardId=${this.cardId}`) : this.$toast('还没有拥有此等级')
      // }
      // if(item.benefitType==1){
      //   this.goTo(`/pagesA/myIntegral/getPoint?currentIntegrate=${this.integrateInfo.currentIntegrate}`)
      // }
      // if(item.mspageId){
      //   uni.navigateTo({
      //     url: '/pages/home/miniPage?id=' + item.mspageId});
      // }
      // if(item.couponIdList && item.couponIdList.length>0){
      //   const res = await this.$http.couponByIdList({couponIds:(item.couponIdList || []).join(',')})
      //   this.couponList = res?.dataInfo || []
      //   this.show = true
      // }
    },
    clickHeaderImg(data) {
      if (data.jumpPageType == 'GOODS') {
        //商品
        if (!data.jumpPageId) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false,
          });
        }
        uni.navigateTo({
          url: '/pagesA/shop/goodsDetail?id=' + data.jumpPageId,
        });
      } else if (data.jumpPageType == 'GOODS_GROUP') {
        //商品分类
        uni.navigateTo({
          url: '/pagesB/search/goodsList',
        });
      } else if (data.jumpPageType == 'MSPAGE') { //微页
        if (!data.jumpPageId) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false,
          });
        }
        uni.navigateTo({
          url: '/pages/home/miniPage?id=' + data.jumpPageId,
        });
      }
    },
    clickSmallImg(data) {
      if (data.jumpPageType == 'GOODS') {
        //商品
        if (!data.jumpPageId) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false,
          });
        }
        uni.navigateTo({
          url: '/pagesA/shop/goodsDetail?id=' + data.jumpPageId,
        });
      } else if (data.jumpPageType == 'GOODS_GROUP') {
        //商品分类
        uni.navigateTo({
          url: '/pagesB/search/goodsList',
        });
      } else if (data.jumpPageType == 'MSPAGE') { //微页
        if (!data.jumpPageId) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false,
          });
        }
        uni.navigateTo({
          url: '/pages/home/miniPage?id=' + data.jumpPageId,
        });
      }
    },
    getgoodsImg(data) {
      if (data.jumpPageType == 'GOODS') {
        //商品
        if (!data.jumpPageId) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false,
          });
        }
        uni.navigateTo({
          url: '/pagesA/shop/goodsDetail?id=' + data.jumpPageId,
        });
      } else if (data.jumpPageType == 'GOODS_GROUP') {
        //商品分类
        uni.navigateTo({
          url: '/pagesB/search/goodsList',
        });
      } else if (data.jumpPageType == 'MSPAGE') { //微页
        if (!data.jumpPageId) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false,
          });
        }
        uni.navigateTo({
          url: '/pages/home/miniPage?id=' + data.jumpPageId,
        });
      }
    },
    // 获取会员福利
    async getInfo() {
      try {
         let res = await this.$http.getPayMemberInfo({cardId: this.cardId})
          this.vipYearPrice = res.dataInfo?.payRuleList[0].price
          this.integralRatio = res.dataInfo?.integralRatio
          this.goodsStr = res.dataInfo || null
          this.loading = false
      } catch (e) {
        console.log(e);
        this.goodsStr = null
        this.integralRatio = null
        this.vipYearPrice = ''
        this.loading = false
      }

    },
  }
}
</script>

<style lang="scss" scoped>
.vip-center{
  background: #FAFAFA;
  box-shadow: 0rpx 0rpx 28rpx 0rpx rgba(0,0,0,0.1);
  .head{
    position: relative;
    width: 100vw;
    height: 480rpx;
    // background: linear-gradient(180deg, #EAD1AD 0%, #FAFAFA 100%);
	background: url(https://jdz.g1999.com/ghs/20211227/27d405e8fd1d48bba07dd77464d50989.png) no-repeat;
	background-size: cover;
    .head-back-img{
      width: 100vw;
      height: 480rpx;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .user-info{
      width: 100%;
      image{
        margin-left: 58rpx;
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
      }
      .user-name{
        flex: 1;
        margin-left: 36rpx;
        font-size: 36rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        text-shadow: 0px 4rpx 8rpx rgba(217, 172, 109, 0.5);
      }
      .member-center {
        flex: 1;
        text-align: right;
        margin-right: 60rpx;
        font-size: 24rpx;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 700;
      }
    }
	.swiper{
		width: 100%;
    height: 288rpx;
		//position: absolute;
		bottom: 0;
	}
    .vip-info-card{
      position: relative;
      height: 288rpx;
      width: 620rpx;
	  top: 0;
      border-radius: 20rpx;
      overflow: hidden;
      .card-back-img{
        top: 0;
        left: 0;
        height: 288rpx;
        width: 620rpx;
        position: absolute;
        z-index: -1;
      }
      .card-top{
        align-items: flex-start;
        justify-content: space-between;
        image{
          margin-left: 10rpx;
          margin-top: 10rpx;
          width: 80rpx;
          height: 80rpx;
        }
        &-name{
          margin-left: 10rpx;
          margin-top: 10rpx;
          font-size: 28rpx;
          font-weight: 500;
          color: #FFF0D2;
        }
		&-silver{
		  margin-left: 10rpx;
		  margin-top: 10rpx;
		  font-size: 28rpx;
		  font-weight: 500;
		  color: #333333;
		}
        &-tip{
          /* margin-top: 20rpx;
          margin-right: 16rpx; */
          position: absolute;
          left: 34rpx;
          bottom: 34rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: #FFF0D2;
        }
		&-desc{
			position: absolute;
			left: 34rpx;
			bottom: 34rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #333333;
		}
        &-vip {
          padding-top: 20rpx;
          padding-right: 16rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: #FFF0D2;
          line-height: 1;
        }
		 &-lever{
          padding-top: 20rpx;
          padding-right: 16rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: #333333;
          line-height: 1;
        }
      }
      .card-bottom{
        margin-top: 16rpx;
        .num{
          font-size: 36rpx;
          font-weight: 600;
          color: #FFF0D2;
          text-shadow: 0px 4rpx 8rpx rgba(0, 0, 0, 0.2);
        }
        .title{
          font-size: 20rpx;
          font-weight: 400;
          color: #FFF0D2;
          text-shadow: 0px 4rpx 8rpx rgba(0, 0, 0, 0.2);
        }
      }
	  .card-curretn{
	  	.num{
	  	  color: #333333;
	  	}
		.title{
		  color: #333333;
		}
	  }
    }
  }
  .member-card{
    position: relative;
    margin: 0rpx 30rpx 40rpx;
    padding: 40rpx 10rpx 48rpx;
    background-color: #ffffff;
    border-radius: 14rpx;
    &-title{
      text-align: center;
      font-size: 28rpx;
      font-weight: 500;
      color: #191919;
    }
    &-list{
      margin-top: 20rpx;
      //flex-wrap: nowrap;
      .item-card{
        padding: 20rpx 15rpx 10rpx 15rpx;
        justify-content: space-between;
        position: relative;
        image{
          width: 64rpx;
          height: 64rpx;
        }
        &-title{
          margin-top: 8rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: #000000;
        }
        .contact-class{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .item-card-no{
        filter: grayscale(100%);
        text{
          color: #999999!important;
        }
      }
    }
    .member-img{
      position: absolute;
      top: 20rpx;
      right: 0;
      width: auto;
      height: auto;
      background-image: url("../../static/image/icon_member.png");
      padding: 4rpx  20rpx 20rpx;
      background-repeat: no-repeat;
      background-size: 100% 100%;

      font-size: 20rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
    }
  }
  .welfare-section {
    margin-top: 30rpx;
    width: 100%;
    text-align: center;
    font-size: 32rpx;
    color: #191919;
    font-weight: 600;
  }
  .btn-section {
		position: fixed;
    bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
    height: 98rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 0rpx 0rpx rgba(230,230,230,1);
    z-index: 999;
    .btn {
			margin: 9rpx auto;
			width: 550rpx;
			height: 80rpx;
			background: #D1B085;
			border-radius: 40rpx;
			font-size: 28rpx;
			color: #FFFFFF;
			font-weight: 400;
			text-align: center;
			line-height: 80rpx;
    }
  }
}
/deep/swiper{
  background-color: rgba(0,0,0,0) !important;
}
/deep/.no-data-img{
  top: 58% !important;
}
/deep/ button{
  background-color: rgba(0,0,0,0);
  &:after{
    border: none;
  }
}
.popup-content-coupon {
   height: 70vh;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  .coupon-top {
    height: 80rpx;
    width: 100%;
  }

  .popup-coupon-title {
    padding: 30rpx;
    background: #ffffff;
    font-size: 32rpx;
    color: #191919;
    font-weight: 600;
  }

  .content {
    flex:1;
    padding: 30rpx;
    overflow-y: scroll;
    height: 0;
    .wrap {
      margin-bottom: 20rpx;

      .card-item {
        background: #FFFFFF;
        background-size: 100% 100%;
        width: 690rpx;
        height: 190rpx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &.bg0 {
          background-image: url('@/static/image/mine/app_list_youhuiquan_weishiyong.png');
        }

        &.bg1 {
          background-image: url('@/static/image/mine/app_list_youhuiquan_yilingqu_2x.png');
        }
        &.bg2 {
          background-image: url('@/static/image/mine/app_list_youhuiquan_yilingwan_2x.png');
        }
        .item-left {
          width: 482rpx;
          display: flex;
          height: 100%;
          .price {
            width: 187rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ECDBA9;
            font-size: 36rpx;
            font-weight: 500;
          }

          .discount-price {
            font-size: 58rpx;
            margin-left: -6rpx;
          }

          .info {
            flex: 1;

            .name {
              font-size: 28rpx;
              margin: 30rpx 0 10rpx 0;
              font-weight: 500;
              color: #FFFFFF;
            }

            .endTime {
              font-size: 24rpx;
              color: #FFFFFF;
              margin: 0 0 16rpx 0;

            }

            .coupon-rules {
              font-size: 22rpx;
              color: #ECDBA9;
            }
          }
        }

        .item-right {
          width: 208rpx;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .use {
            display: flex;
            flex-direction: column;
            align-items: center;

            .receieve {
              font-size: 28rpx;
              font-weight: 500;
              color: #2A2D4C;
            }

            .can-receive {
              font-size: 24rpx;
              color: #2A2D4C;
            }

          }

        }
      }
    }

  }

  .bottom-btn {
    position: fixed;
    bottom: 0;
    padding: 14rpx 30rpx calc(calc(env(safe-area-inset-bottom) / 2) + 14rpx);
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px -1px 0px 0px rgba(230, 230, 230, 1);
    justify-content: center;

    .confirm {
      display: inline-block;
      padding: 15rpx 247rpx;
      background: #D1B085;
      border-radius: 45rpx;

      font-size: 28rpx;
      color: #FFFFFF;
      text-align: center;
      font-weight: 600;
    }
  }

  .btn-height {
    height: calc(calc(env(safe-area-inset-bottom) / 2) + 98rpx);
  }
}
/deep/.no-data {
  height: 100% !important;
}

.member-card-title{
  width: 100%;
  justify-content: center;
  .vip-card-img{
    width: 40rpx;
    height: 40rpx;
  }
  .member-title{
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    margin: 0 16rpx;
  }
}
.member-list-three{
  flex-wrap: wrap;
  justify-content: space-between;
  .item-card{
    padding: 20rpx 0;
    margin-top: 20rpx;
    width: 33%;
    word-wrap: normal;
    image{
      width: 90rpx;
      height: 90rpx;
      margin-bottom: 16rpx;
    }
  }
  &:after{
    content: '';
    width: 33%;
  }
}
/deep/.u-mode-center-box{
  background: rgba(0,0,0,0)!important;
}

</style>
<style>
page{
  background-color: #FAFAFA;
  padding-bottom: calc(calc(env(safe-area-inset-bottom) / 2) + 110rpx) !important;
}
</style>
