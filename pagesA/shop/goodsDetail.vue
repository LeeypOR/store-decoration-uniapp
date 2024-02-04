<template>
  <view :style="{'background':loading?'#ffffff':'' }" class="g-goods-detail">
    <cus-preview-img ref="cusPreviewImg" :list="previewImg"></cus-preview-img>
    <u-navbar z-index="999999" class="location-class" :border-bottom="false" :title="goodsInfo.goodsName" title-bold
              title-color="#191919" title-size="36"
              back-icon-color="#000000" :custom-back="backPage"
    ></u-navbar>
    <view class="">
      <skeleton
          :loading="loading"
          :swiperStyle="{
                'width':'100%',
                'height':'750rpx',
                'padding':'0 10rpx'
                }"
          :imgTitle="true"
      >
        <view class="swiper-box">
          <swiper style="height: 750rpx;" class="" @change="swiperChange" indicator-dots
                  circular="true" duration="400"
          >
            <swiper-item v-if="goodsVideo">
              <video :poster="headSwiperImg[0]" @pause="videoPause" :controls="!playFlag" id="firstVideo"
                     @play="play" v-if="goodsVideo"
                     direction="0"
                     style="width: 100%;height: 750rpx;position: relative;" :show-center-play-btn="false"
                     :src="goodsVideo"
              >
                <!-- <cover-image v-if="playFlag" style="width: 100%;height: 750rpx;" :src="headSwiperImg[0]"></cover-image> -->
                <image @click="imgPlay" v-if="playFlag" src="../static/image/icon_video_playback_btn.png"
                       class="poster-play"
                >
                </image>
              </video>
            </swiper-item>
            <swiper-item class="swiper-item" v-for="(item,index) in headSwiperImg" :key="index">
              <view @click="previewImage(headSwiperImg)" class="image-wrapper" style="width: 100%;height: 750rpx;">
                <image :src="item" mode="aspectFill" style="width: 100%;height: 750rpx;"></image>
              </view>
            </swiper-item>
          </swiper>
          <view v-if="false" class="mask-goods-state u-flex">
            <view class="state-name u-flex">已售空</view>
          </view>
        </view>
      </skeleton>

      <!-- vip -->
      <skeleton
          :loading="loading"
          :swiperStyle="{
                'width':'100%',
                'height':'80rpx',
                'padding':'0 10rpx'
                }"
          :imgTitle="true"
      >
        <vip-head
            v-if="!groupInfo && !halfInfo.type && !activeInfo && (specGoodsInfo && specGoodsInfo.membersPrice && specGoodsInfo.membersPrice!= '0') "
            :specGoodsInfo="specGoodsInfo"
        >
        </vip-head>

        <!-- 第二件半价和买一则鞥一 -->
        <view v-else-if="JSON.stringify(halfInfo)!='{}'" style="position: relative;top: -20rpx;z-index: 9999;">
          <halfHead :specGoodsInfo="specGoodsInfo" :halfInfo="halfInfo"/>
        </view>

        <!--   活动相关信息    -->
        <head-info v-else-if="['MS','ZK'].includes(activeType)"
                   :activeInfo="activeInfo"
                   :activeType="activeType"
                   :couponsList="couponsList"
                   :specName="activeSpecName"
                   :specGoodsInfo="specGoodsInfo"
                   @getCoupons="receiveCoupon"
        >
        </head-info>
      </skeleton>
      <block v-show="!loading" v-if="groupId || goodsType">
        <block>
          <!--拼团商品详情-->
          <group-detail
              :groupInfo="groupInfo"
              :couponsList="couponsList"
              :goodsInfo="goodsInfo"
              @getCoupons="receiveCoupon"
              :salePrice="switchMoney(goodsSpecInfo.salePrice)"
          >
          </group-detail>
          <goods-head :goodsInfo="goodsInfo"
                      :groupInfo="groupInfo"
                      @collection="collection"
                      :isCollection="isCollection"
                      :paymentWay="paymentWay"
                      @getCoupons="receiveCoupon"
                      :activeType="activeType"
                      :couponsList="couponsList"
                      :specName="activeSpecName"
                      :activeInfo="activeInfo"
                      :specGoodsInfo="specGoodsInfo"
          >
          </goods-head>
          <!--拼团商品列表-->
          <people-list
              ref="peopleList"
              :groupList="getGroupList"
              :groupType="getGroupType"
              :specList="specList"
              :dataInfo="groupList"
              @showPopup="showPopup"
              @buyNow="buyNow"
          >
          </people-list>
        </block>
      </block>
      <!-- 商品详情  -->
      <skeleton
          :loading="loading"
          :showTitle="true"
          :showAvatar="false"
          :titleStyle="{
					'width':'80%',
					'margin-left':'30rpx'
				}"
      >
        <view class="section-content"></view>
      </skeleton>
      <skeleton
          :loading="loading"
          :showTitle="true"
          :showAvatar="false"
          :titleStyle="{
					'width':'60%',
					'margin-top':'20rpx',
					'margin-left':'30rpx'
				}"
      >
        <view class="section-content"></view>
      </skeleton>
      <skeleton
          :loading="loading"
          :showTitle="true"
          :showAvatar="false"
          :titleStyle="{
					'width':'45%',
					'margin-top':'20rpx',
					'margin-bottom':'20rpx',
					'margin-left':'30rpx'
				}"
      >
        <view class="section-content"></view>
      </skeleton>
      <block v-if="!loading&&!goodsType">
        <goods-head :goodsInfo="goodsInfo"
                    @getCoupons="receiveCoupon"
                    @collection="collection"
                    :isCollection="isCollection"
                    :activeType="activeType"
                    :paymentWay="paymentWay"
                    :couponsList="couponsList"
                    :specName="activeSpecName"
                    :activeInfo="activeInfo"
                    :halfInfo="halfInfo"
                    :equityDiscount="equityDiscount"
                    :specGoodsInfo="specGoodsInfo"
        >
        </goods-head>
      </block>

      <!--  详情 评论选项  -->
      <skeleton
          :loading="loading"
          :swiperStyle="{
                    'width':'100%',
                    'height':'120rpx',
                    'padding':'0 10rpx'
				}"
          :imgTitle="true"
      >
        <view class="switch-box u-flex u-skeleton-rect">
          <block v-if="!loading">
            <text :class="{'text-loading':loading,'active':tabCut =='0'}" @click="cutTab('0')">产品详情</text>
            <text :class="{'text-loading':loading,'active':tabCut =='2'}" @click="cutTab('2')" v-if="specificationList.length>0">规格参数</text>
            <text :class="{'text-loading':loading,'active':tabCut =='1'}" @click="cutTab('1')">评论</text>
          </block>
        </view>
      </skeleton>
      <!--   规格参数   -->
      <specification v-if="tabCut == 2" :specificationList="specificationList"></specification>
      <!--  商品介绍 （图片显示） -->
      <skeleton
          :loading="loading"
          :swiperStyle="{
                    'width':'100%',
                    'height':'120rpx',
                    'padding':'0 10rpx'
				}"
          :imgTitle="true"
      >
        <view class="comment-card" v-show="tabCut == '1'">
          <comment-list @change="commentClick" :commentList="commentList"></comment-list>
        </view>
      </skeleton>
      <skeleton
          :loading="loading"
          :swiperStyle="{
                'width':'100%',
                'height':'750rpx',
                'padding':'0 10rpx'
                }"
          :imgTitle="true"
      >
        <View class="shop-image u-skeleton-rect" :class="{'shop-image-load':loading}" v-if="tabCut=='0'">
          <!-- <image mode="widthFix" src="@/static/image/default.jpg"></image> -->

          <view class="" v-if="goodsInfo && goodsInfo.goodsDetails">
            <u-parse v-if="!loading" :tag-style="style" :html="goodsInfo.goodsDetails"></u-parse>
          </view>
        </View>
      </skeleton>
      <configPage v-if="!loading" :shopDataList="shopDataList" :userData='userInfo'></configPage>
      <view class="recommend-card u-skeleton-rect">
        <text class="u-skeleton-rect" v-if="!loading">相似推荐</text>
        <fallCom :list="similarList">
          <template #left="{left}">
            <goods-card :goodsList="left" :wrapWidth="335" :imgHeight="335" :key="index"
                        style="margin-right: 32rpx"
            >
            </goods-card>
          </template>
          <template #right="{right}">
            <goods-card :goodsList="right" :wrapWidth="335" :imgHeight="335" :key="index"
                        style="margin-right: 32rpx"
            >
            </goods-card>
          </template>
        </fallCom>
      </view>
      <view class="" v-if="specList.length && goodsSpecList.length">
        <goods-spec-popup :goodsSpecInfo="goodsSpecInfo" @buyNow="buyNow" :goodsId="goodsId" @addCart="addCart"
                          :btnState="btnState"
                          :specList="specList" :buycom="goodsInfo.paymentWay" :goodsSpecList="goodsPoupSpecList "
                          :activeInfo="activeInfo" :actionInfo="groupInfo"
                          :paymentWay="paymentWay"
                          @setSpecInfo="setSpecInfo"
        ></goods-spec-popup>
      </view>
    </view>
    <!-- 零元购 -->
    <view class="zeroGoods u-flex u-row-center" v-if="zeroGoods">
      <view @click="zeroBuy" class="btn u-flex u-row-center">
        0元领取
      </view>
    </view>

    <view class="zeroGoods u-flex u-row-center" v-else-if="activeType=='ZP'">
      <view @click="buyNow" class="btn u-flex u-row-center" :class="{'no-active':!isDraw}">
        兑换奖品
      </view>
    </view>
    <!-- 专区兑换 -->
    <view class="exchangeGoods u-flex u-row-center" v-else-if="activeType=='EZ'">
      <view @click="exchangeNow" class="btn u-flex u-row-center">
        立即兑换
      </view>
    </view>
    <view v-else>
      <shop-bar @showPopup="showPopup"
                @addCart="addCart({})"
                @share="share"
                @goodsCodeEvent="goodsCodeEvent"
                @buyNow="buyNow" :specIdList="specIdList"
                :isCollection="isCollection"
                :paymentWay="paymentWay"
                :activeInfo="activeInfo"
                :halfInfo="halfInfo"
                :groupInfo="groupInfo"
                :goodsSpecInfo="goodsSpecInfo"
                @collect="collection"
                :salePrice="switchMoney(goodsSpecInfo.salePrice)"
      >
      </shop-bar>
    </view>
    <sharPopup v-if="shareData && shareData.codeImage" :shareData="shareData " ref="sharePopup"></sharPopup>
    <!--  优惠券弹窗  -->
    <u-popup
        v-model="show"
        closeable
        mode="bottom"
        height="70%"
        border-radius="30"
    >
      <view class="popup-content-coupon u-flex">
        <view class="coupon-top">
          <view class="popup-coupon-title">领取优惠券</view>
        </view>
        <view class="content" v-if="couponsList.length>0">
          <scroll-view scroll-y="true" style="height: 100%;">
            <view class="wrap" v-for="(item,index) in couponsList" :key="index">
              <!-- class="card-item bg0" -->
              <view :class="['card-item','bg0',{'bg1':remianCount(item)==0},{'bg2':item.couponStocks == '0'}]">
                <view class="item-left">
                  <!-- 折扣券 -->
                  <view v-if="item.couponType==2" class="price" style="flex-direction: column;">
                    <view>{{ item.discountRatio }}折券</view>
                    <view v-if="item.mostDiscount!=-1" class="max-discount">
                      最多优惠{{ item.mostDiscount / 100 }}
                    </view>
                  </view>
                  <!-- 满减券 -->
                  <view v-else class="price">
                    <view>
                      ￥
                      <text class="discount-price">{{ item.couponAmount / 100 }}</text>
                    </view>
                  </view>
                  <view class="info">
                    <view class="name">{{ item.couponName }}</view>
                    <view class="endTime">
                      {{ getCouponTitle(item) }}
                    </view>
                    <view class="coupon-rules" v-if="item.couponFullMoney !=-1">
                      满{{ item.couponFullMoney / 100 }}可用
                    </view>
                    <view class="coupon-rules" v-else>无门槛</view>
                  </view>
                </view>
                <view @click="recieve(item.id,item)" class="item-right">
                  <view class="use " v-if="item.receiveStatus==0 && item.couponStocks != '0'">
                    <view class="receieve">领取</view>
                    <view class="can-receive">可领取{{ item.couponLimit }}张</view>
                  </view>
                  <view class="use"
                        v-if="item.receiveStatus==1 && item.couponStocks != '0' && remianCount(item) != 0"
                  >
                    <view class="receieve">已领取 X{{ item.currentUserOwn }}</view>
                    <view class="can-receive">还可领取{{ remianCount(item) }}张</view>
                  </view>
                  <view class="use"
                        v-if="item.receiveStatus==1 &&remianCount(item) == 0 && item.couponStocks != '0'"
                  >
                    <view class="receieve">已抢光</view>
                  </view>
                  <view class="use" v-if="item.couponStocks == '0'">
                    <view class="receieve">已抢光</view>
                  </view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
        <no-data type="noCoupon" v-else></no-data>
      </view>
    </u-popup>
    <!-- <u-skeleton :loading="loading" :animation="true" bgColor="#f5f5f5"></u-skeleton> -->
    <fixed-navigation :fixTime="refresh" :location="5"></fixed-navigation>
    <view v-if="isPopup">
      <view v-for="(item,index) in exchangeInfo">
        <exchangeAdv v-if="index==0" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index"
                     @exchangeClose="setAdvaerInfo"
        />
        <view v-else>
          <exchangeAdv v-if="exchageId == index" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index"
                       @exchangeClose="setAdvaerInfo"
          />
        </view>
      </view>
    </view>

  </view>

</template>

<script>
import specification from "../components/specification";
import GoodsCard from "../../components/goodsCard";
import GoodsSpecPopup from "../../components/goodsSpecPopup";
import ShopBar from "../components/shopBar";
import NoData from "../../components/noData";
import CommentList from "../components/commentList";
import GroupDetail from "../groupBooking/groupDetail";
import PeopleList from "../groupBooking/peopleList";
import HeadInfo from "../active/headInfo";
import VipHead from "../active/vipHead";
import goodsHead from "../active/goodsHead";
import halfHead from "../active/halfHead";
import sharPopup from "../components/sharePopup.vue";
import skeleton from "../components/J-skeleton.vue";
import fallCom from "../components/falls.vue";
import FixedNavigation from "../../components/fixedNavigation";
import exchangeMixin from '@/pages/exchangeMixin'
import exchangeAdv from "../../components/exchangeAdv";
import configPage from "../../pages/home/components/configPage";

export default {
  mixins: [exchangeMixin],
  components: {
    configPage,
    FixedNavigation,
    goodsHead,
    halfHead,
    VipHead,
    HeadInfo,
    PeopleList,
    GroupDetail,
    CommentList,
    NoData,
    ShopBar,
    GoodsSpecPopup,
    GoodsCard,
    sharPopup,
    skeleton,
    fallCom,
    exchangeAdv,
    specification
  },
  data() {
    return {
      skeleton: {
        name: '测试产品件数'
      },
      title: '商品详情',
      shareParam: {},
      headSwiperImg: [],
      couponsList: [], //可领优惠券列表
      show: false,
      player: null,
      goodsId: '', //商品id
      goodsInfo: {}, // 商品信息
      goodsSpecList: [],
      goodsVideo: '', //视频链接
      modelIds: [], //  展示规格id
      similarList: [], //相似商品列表
      collectId: '', // 收藏id
      isCollection: false, // 是否收藏
      btnState: 1, // 1 规格  2 加入购物车 3 购买
      goodsSpecIndex: 0, //  当前选择规格信息的索引
      specList: [],
      specName: '', // 规格名称
      goodsSpecListIndex: 0,
      specIdList: [],
      playFlag: true, //  是否播放中
      coverImgShow: true, //  是否显示封面图
      loading: true, //  加载中（判断骨架屏）
      tabCut: '0', //  切换商品详情和评论  0 商品描述 1 评论
      commentList: [], //  评论数据
      previewImg: [], //   预览图片
      merberData: null, //会员等级
      /** 拼团相关参数 */
      groupInfo: null, // 拼团相关的信息
      groupList: [], // 团列表
      goodsType: 0, // 0 普通商品 1 拼团商品
      groupId: '', // 拼团id
      /** 活动相关 */
      activeId: '', // 活动id
      activeType: null, // 活动类型  MS 秒杀  XS 限时  BJ半价 MYZY 买一赠一 EZ 兑换专区活动详情
      activeInfo: null, // 活动详情
      specGoodsInfo: null, // 选中规格的信息
      zeroGoods: null, //权益卡、会员赠送商品
      cardId: '', //权益卡的id
      zeroOrderId: "", //购买权益卡的订单id
      cardData: null,
      halfInfo: {},
      giftInfo: {}, // 赠品相关信息
      distributionorId: '', //分销员表里面的主键id
      scenId: '', //生产太阳码的携带的参数
      paymentWay: 0,  //支付方式，（0.现金 1.现金加积分 2.现金加固定积分 3.纯积分）
      shareData: {},
      equityDiscount: null,//权益卡折扣数据
      goodsPoupSpecList: [],
      shopActiveInfo: {}, // 商品活动信息
      cavanvsImage: '',
      style: {
        video: 'height：100%'
      },
      shopId: '',//店铺id
      channelCode: '', //渠道编码
      channelFlag: '',//渠道推广标识， 1：H5,2:小程序
      channelName: '',//
      isPopup: true,
      recordId: "",    // 抽奖绑定id
      isDraw: true,
      refresh: '',
      shopDataList: [],   // 微页面装修数据
      userInfo:'',
      specificationList: []  // 规格列表
    }
  },
  /**
   * id:商品id
   * groupId 拼团分享 传参
   * 活动相关
   * activeId  活动id
   * activeType  活动类型  MS  XS  ZP
   * */
  async onLoad(option) {
    this.liveParam(option)
    if (option.scene?.indexOf('SP') > -1) {//scene=505163869644075008SP 商品推广码
      let index = option.scene?.indexOf('SP')
      this.goodsId = option.scene.substr(0, index)
    } else {
      this.scenId = option.scene ? option.scene : '' //海报分享的参数
      this.goodsId = option?.id || ''
    }
    let contactId = option.contactId ? option.contactId : '' // 分享好友 分销商的主键id
    if (contactId) {
      this.shareParam = {
        userId: contactId
      }
    }
    this.zeroGoods = option.zeroGoods ? JSON.parse(option.zeroGoods) : null
    // 权益卡折扣商品传过来的数据
    this.equityDiscount = option.equityDiscount ? JSON.parse(option.equityDiscount) : null
    this.cardData = option.cardData
    this.groupId = option?.groupId || null
    this.activeId = option?.activeId || ''
    this.activeType = option?.activeType || null
    this.giftInfo = JSON.parse(option?.giftInfo || '{}')
    if (option?.recordId) {
      this.recordId = option?.recordId
      this.giftInfo = {
        lotteryRecordId: this.recordId
      }
    }
    this.getMiniDetail()
    this.getGoodsCategoryInfo()
  },

  async onShow() {
    console.log('this.scenId', this.scenId)
    this.userInfo = this.$globleData?.userData || {}
    this.lotteryBand()
    if (this.groupId) {
      await this.getGroupMember()
    }
    if (this.scenId) {
      await this.getScen(this.scenId)
    }
    if (this.goodsId) {
      await this.saveScen()
    }
    if (this.activeType != 'ZP' && this.activeType != 'EZ') {
      if (this.goodsId) {
        await this.getHalfGoodsInfo()
      }

    }
    await this.initOnShow()
    this.isPopup = true
    this.refresh = new Date().getTime().toString()
  },
  onUnload() {
    this.$store.commit('setSpecification', false)
  },
  onHide() {
    this.isPopup = false
  },
  watch: {
    goodsInfo: {
      deep: true,
      handler() {
        this.codeParam = {
          ...this.codeParam,
          goodsName: this.goodsInfo?.goodsName || '',
          goodsId: this.goodsInfo?.id || '',
          type: '5',
        }
      },
    }
  },
  computed: {
    activeSpecName() {
      let ids = this.specGoodsInfo?.modelIds?.split(',') || []
      let str = []
      for (const item of this.specList) {
        let arr = item.modelList || []
        for (const obj of arr)
          if (ids.includes(obj.modelId)) {
            str.push(obj.modelName)
          }
      }
      let res = str.join('-')
      return res.length > 0 ? res : '统一规格'
    },
    // 获取列表数据
    getGroupList() {
      if (this.groupInfo?.createType == 2) {
        return this.groupList[0]?.groupMemberList
      }
      return this.groupList
    },
    // 获取拼团类型
    getGroupType() {
      if (this.groupInfo?.createType == 2) {
        return 'SJ'
      }
      return this.groupInfo?.type
    },
    getPrice() {
      return (obj, isGroup) => {
        if (this.activeType == 'ZP') {
          return 0
        }
        if (!isGroup) {
          console.log(obj, this.shopActiveInfo, '999999');
          if (this.shopActiveInfo?.type > 0) {
            return obj.marketPrice
          }
          return obj.salePrice
        }
        if (this.goodsType) {

          return obj?.groupPrice || 0
        }
        return obj.salePrice
      }
    },
    // 根据goodsSpecIndex选择出规格信息
    goodsSpecInfo() {
      if (this.goodsSpecList && this.goodsSpecList.length > 0) {
        const obj = this.goodsSpecList[this.goodsSpecIndex]
        this.specIdList = (obj.modelIds || '').split(',')
        return obj
      }
      return {}
    },
    getSpecName() {
      let str = []
      for (const item of this.specList) {
        let arr = item.modelList || []
        for (const obj of arr) {

          if (this.specIdList.includes(obj.modelId)) {
            str.push(obj.modelName)
          }
        }

      }
      console.log('2222', str);

      return str.join('-')
    },
    remianCount() {
      return function (val) {
        return val.couponLimit - val.currentUserOwn
      }
    },
  },
  // 分享
  onShareAppMessage(e) {
    getApp().globalData.preveImage = 'preveImage'
    const that = this
    let contactId = this.$globleData.userData.id || ''
    let path = `/pagesA/shop/goodsDetail?id=${this.goodsId}&activeId=${this.activeId}&contactId=${contactId}`
    let groupId = e?.target?.dataset?.groupid || null
    // 插码
    this.goodsCodeEvent('2')
    // 邀请好友参与拼团
    if (groupId) {
      path = path + '&groupId=' + groupId
    }
    // 秒杀 折扣
    if (['MS', 'ZK'].includes(this.activeType)) {
      path = path + `&activeType=${this.activeType}`
    }
    const imgUrl = this.goodsInfo?.goodsPictures?.split(',')[0]
    that.$http.shareGoods()
    return {
      title: this.goodsInfo?.goodsName,
      imageUrl: imgUrl,
      path: path
    }
  },
  methods: {
    // 获取商品规格
    async getGoodsCategoryInfo() {
      const res = await this.$http.getGoodsCategoryInfo({id: '438298510429782016' ||  this.goodsId})
      this.specificationList = res?.dataInfo || []
    },
    async getMiniDetail() {
      let {dataInfo: res} = await this.$http.getGoodsJson({id: this.goodsId});
      this.shopDataList = JSON.parse(res?.pageMsJson || '{}')?.pageList || []
    },
    // 转盘抽奖奖品绑定
    async lotteryBand() {
      if (!this.recordId) {
        return
      }
      try {
        const res = await this.$http.lotteryBand({prizeType: 3, recordId: this.recordId})
        if (res?.dataInfo) {
          this.$toast('奖品已下单')
          this.isDraw = false
        } else {
          this.isDraw = true
        }
      } catch (e) {
        this.isDraw = false
      }
    },
    // 轮播图片预览
    previewImage(url) {
      getApp().globalData.preveImage = 'preveImage'
      uni.previewImage({
        urls: url,
        longPressActions: {
          success: (data) => {
            console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
          },
          fail: function (err) {
            console.log(err.errMsg);
          }
        }
      });
    },
    // 商品详情插码
    goodsCodeEvent(type, num) {
      this.$eventPlugInCode({
        ...this.codeParam,
        title: this.title,
        goodsName: this.goodsInfo?.goodsName || '',
        goodsId: this.goodsInfo?.id || '',
        goodsNum: num || '',
        type: type || '5',
      })
    },
    // 生产太阳码
    async sharPosterCode(scenId) {
      try {
        let res = await this.$http.posterCode({
          page: 'pagesA/shop/goodsDetail',
          id: scenId,
        })
        // this.$refs.sharePopup.posterData.codeImg.url = res.dataInfo
        // this.shareData.codeImage = res.dataInfo
        this.cavanvsImage = res.dataInfo
      } catch (e) {
        console.log(e)
        //TODO handle the exception
      }
    },
    // 保存scen信息
    async saveScen() {
      console.log(this.goodsId, 'shangp ');
      try {
        let res = await this.$http.addScene({
          goodsId: this.goodsId,
          contactId: this.$globleData.userData.id
        })
        let scenId = res.dataInfo
        if (scenId) {
          this.sharPosterCode(scenId)
        }
      } catch (e) {
        console.log(e)
        //TODO handle the exception
      }
    },
    // 点击分享按钮的事件
    share(val) {
      if (val) {
        this.shareData = {
          goodsName: this.goodsInfo.goodsName,
          goodsId: this.specGoodsInfo.goodsId,
          goodsPictures: this.goodsInfo.goodsPictures,
          marketPrice: this.specGoodsInfo.marketPrice,
          salePrice: this.specGoodsInfo.salePrice,
          oneLevelDistributionPrice: this.specGoodsInfo.oneLevelDistributionPrice,
          codeImage: this.cavanvsImage
        }
        // this.goodsCodeEvent('2')

        this.shareData.goodsPictures = this.imgUrl(this.shareData.goodsPictures) //将多个图片路径用逗号隔开的图片，只展示一个图片路径
        this.$store.commit('setShowDistributor', true)
        console.log(this.shareData, '9999999')
      }
    },
    // 初始化onShow的方法
    initOnShow() {
      // 秒杀 折扣 活动
      if (this.activeId && ['MS', 'ZK'].includes(this.activeType)) {
        if (this.goodsId) {
          this.activeGoodsInfo()
        }
      } else if (this.activeId && ['EZ'].includes(this.activeType)) {

        this.getExchangeZoonInfo()

      }
      // 普通和拼团商品
      else if (!this.goodsInfo.id || this.goodsType) {
        if (this.goodsId) {
          this.checkGoods()
        }

      }
      // this.getSimilarGoods()
      if (this.goodsId) {
        this.queryCollection()
        this.getCommentList()
        // this.getHalfGoodsInfo()
      }
      this.getMemberLevel()
    },
    // 获取scen的参数
    async getScen(scenId) {
      let res = await this.$http.getScene({
        id: scenId
      })
      this.goodsId = res.dataInfo.goodsId
      this.channelCode = res.dataInfo.channelCode
      this.channelFlag = res.dataInfo.channelFlag
      this.channelName = res.dataInfo.channelName
      this.shareParam = {
        userId: res.dataInfo.contactId
      }

      this.$globleData.distributionId = res.dataInfo.contactId
    },
    // 设置
    setSpecInfo(ids = []) {
      for (let item of this.goodsSpecList) {
        if (item.modelIds == ids.join(',')) {
          this.specGoodsInfo = item
        }
      }
    },
    // 直播参数解析
    liveParam(option) {
      let shareInfo = JSON.parse(decodeURIComponent(option?.custom_params || '{}'))
      this.shareParam = {
        ...shareInfo
      }
      if (shareInfo.roomId) {
        this.liveViewTotalUp(shareInfo.roomId)
      }
    },
    // 商品浏览量增加接口
    liveViewTotalUp(roomId) {
      let param = {
        id: this.goodsId,
        appId: 100000054,
        roomId
      }
      this.$http.liveViewTotalUp(param)
    },
    // 买一赠一 第二件半价活动详情
    async getHalfGoodsInfo() {
      // if(this.activeId){
      //     return
      // }
      const {dataInfo: res = {}} = await this.$http.getHalfGoodsInfo({goodsId: this.goodsId})

      const type = res?.type || ''
      if ([1, 2].includes(type)) {
        this.halfInfo = type ? res : {}
        return
      }
      this.shopActiveInfo = res
      this.activeId = this.activeId || res?.id || ''
      if (type == 3) {
        this.activeType = "MS"
      }
      if (type == 4) {
        this.activeType = "ZK"
      }
      return
    },
    // 兑换专区活动查询
    async getExchangeZoonInfo() {
      let res = await this.$http.exchangeDetail({
        activityId: this.activeId,
        goodsId: this.goodsId
      })
      console.log('兑换专区活动查询0000000', res);
      const info = res?.dataInfo || {}

      this.goodsInfo = info

      this.goodsSpecList = info?.goodsSpecPropertiesList || []
      if (info.goodsPictures.indexOf(',') > -1) {
        this.headSwiperImg = info.goodsPictures.split(',')
      } else {
        this.headSwiperImg = [info.goodsPictures]
      }
      this.paymentWay = info.paymentWay
      this.goodsVideo = info.goodsVideo
      // this.modelIds = this.goodsSpecInfo?.modelIds?.split(',') || []
      this.specList = info?.goodsSpecList || []
      if (info?.goodsSpecPropertiesList?.length == 1) {
        this.specGoodsInfo = this.goodsSpecList[0]

      }
      // this.specGoodsInfo = this.goodsSpecList[0]
      console.log('----------77777', this.goodsSpecInfo, this.specGoodsInfo, this.specList);
      this.goodsPoupSpecList = this.goodsSpecList
      if (this.goodsInfo) {
        this.getSimilarGoods()
      }
      this.loading = false

    },
    // 兑换专区
    exchangeNow() {
      console.log('专区');
      console.log(this.specIdList, this.goodsSpecInfo, this.goodsSpecList);
      if (this.goodsSpecList?.length > 1) {
        this.$store.commit('setSpecification', true)
        this.btnState = 8
      }
      if (this.goodsSpecList?.length == 1) {
        this.buyNow({ids: this.specIdList})
      }

    },
    // 商品活动查询 秒杀 和 折扣
    async activeGoodsInfo() {
      let param = {
        activityId: this.activeId,
        goodsId: this.goodsId
      }
      let dataInfo = {}
      if (this.activeType == "MS") {
        dataInfo = await this.$http.seckillGoodsInfo(param)
      }
      if (this.activeType == "ZK") {
        dataInfo = await this.$http.discountGoodsInfo(param)
      }

      const res = dataInfo?.dataInfo || {}
      const active = res?.seckillActivityResponse || res?.discountActivityResponse || {}
      if (dataInfo?.message != '成功' || active?.activityStatu == 3) {
        this.activeType = null
        this.activeId = ''
        this.checkGoods()
        return
      }
      const info = res?.seckillGoodsDetailResponse || res?.discountGoodsDetailResponse || {}
      this.activeInfo = res?.seckillActivityResponse || res?.discountActivityResponse || {}
      this.goodsInfo = info
      this.goodsSpecList = info?.goodsSpecPropertiesList || []
      if (info.goodsPictures.indexOf(',') > -1) {
        this.headSwiperImg = info.goodsPictures.split(',')
      } else {
        this.headSwiperImg = [info.goodsPictures]
      }
      this.goodsVideo = info.goodsVideo
      this.modelIds = this.goodsSpecInfo?.modelIds?.split(',') || []
      this.specList = info?.goodsSpecList || []
      this.specGoodsInfo = this.goodsSpecList[0]
      this.loading = false
    },

    // 查询分享拼团信息
    async getGroupMember() {
      const res = await this.$http.getGroupMember({
        id: this.groupId
      })
      const groupInfo = res?.dataInfo || null
      if (!groupInfo?.countDownEndTime) {
        uni.showModal({
          title: '温馨提示',
          content: '该团已拼团成功，去看看其他团吧！',
          showCancel: false,
        })
        this.groupId = ''
        return
      }
      groupInfo.id = this.groupId
      this.$nextTick(() => {
        this.$refs.peopleList.showTwoPopup(groupInfo)
      })
    },
    // 获取会员等级
    async getMemberLevel() {
      let res = await this.$http.getMemberInfo({
        id: this.$globleData?.userData?.id
      })
      const list = res?.dataInfo || []
      list.map(item => {
        if (item.currentGrade) {
          this.merberData = item

        }
      })
      if (this.merberData && this.activeType != "EZ") {
        this.getCoupons()
      }
    },
    // 预览图片
    // imgTap (obj) {
    // 	// obj.ignore()
    // 	// this.previewImg = obj?.urls || []
    // 	// // this.$refs.cusPreviewImg.open(obj.src, obj.current)
    // },
    // 点击评论回调
    commentClick() {
      this.goTo(`/pagesA/shop/goodsComment?id=${this.goodsId}`)
    },
    // 切换
    cutTab(type) {
      const nowType = this.tabCut
      if (type == nowType) {
        return
      }
      this.tabCut = type
    },
    // 获取评论列表
    async getCommentList() {
      let param = {
        current: 1,
        size: 10,
        productId: this.goodsId
      }
      const res = await this.$http.getReviewList(param)
      this.commentList = res?.dataInfo?.records || []
    },
    // 领取赠品
    getGift() {

    },
    // 零元购
    zeroBuy() {
      const goodsList = {
        id: this.zeroGoods.id,
        goodsImg: this.zeroGoods.goodsPicture,
        goodsName: this.zeroGoods.goodsName,
        goodsSpecValue: this.zeroGoods.norm,
        goodsAmount: this.zeroGoods.amount,
        goodsId: this.zeroGoods.goodsId,
        goodsSpecIds: this.zeroGoods.goodsSpecId,
        isReceived: this.zeroGoods.isReceived,
        unitPrice: this.zeroGoods.salePrice,
        deliveryMode: this.goodsInfo.deliveryMode,
      }

      this.goTo(
          `/pagesA/order/orderCenter?goodsList=${JSON.stringify([goodsList])}&cardData=${this.cardData}&cardCouponGoodsIdList=${JSON.stringify(this.zeroGoods)}`
      )
    },

    // 立即购买
    buyNow({ids = [], goodsNum = 1, buyType = 1, buycom, isGroup = false, isJoin = false}) {
      if (this.activeType == 'ZP' && !this.isDraw) {
        return
      }
      if (this.groupInfo?.createType == 2 && isGroup) {
        let obj = this.groupList[0]
        if (!obj?.id) {
          this.$toast('商品已成团,活动已结束')
          return
        }
        this.$store.commit('setJoinGroupId', obj?.id)
      }
      this.specIdList = ids || this.specIdList

      console.log(this.specIdList, '------------------8888');
      let id = ''
      let obj = {}
      for (let item of this.goodsSpecList) {
        if (item.modelIds == ids.join(',')) {
          id = item.id
          obj = item
        }
      }
      // id 此id 是GoodsSpecProperties里面规格属性里面的id,
      id = id || this.goodsSpecInfo.id
      if (!obj.id) {
        obj = this.goodsSpecInfo

      }
      console.log('this.goodsSpecInfo: ', this.goodsSpecInfo);
      // 拼团数据处理 目前只有一个type
      let groupDataObj = this.groupDataTreating(isJoin)
      // 活动数据处理 主要是处理
      let activeInfo = {
        enableLimit: this.activeInfo?.enableLimit || 0,
        limitCount: this.activeInfo?.limitCount || 0,
        goodsBuyCount: this.activeInfo?.seckillGoodsResponse?.goodsBuyCount || this.activeInfo?.discountGoodsResponse?.goodsBuyCount || 0
      }
      const goodsList = {
        id: obj.id, // 无意义
        num: goodsNum || 1,
        shopId: obj.shopId, // 无意义
        goodsAmount: goodsNum || 1,
        membersPrice: obj.membersPrice,
        goodsId: this.goodsId || this.goodsSpecInfo.goodsId,
        goodsName: this.goodsInfo.goodsName,
        goodsModelIds: id,
        goodsSpecIds: id,
        unitPrice: this.getPrice(obj, isGroup),
        goodsImg: obj?.modelPicture || this.goodsInfo.goodsPictures.split(',')[0],
        goodsSpecValue: this.getSpecName,
        buyType,
        deliveryMode: this.goodsInfo.deliveryMode, //发货方式（0：快递发货，1：到店自取）多个用,隔开
        paymentWay: this.paymentWay,
        returnPointsFormula: this.goodsInfo.returnPointsFormula, //购买商品返积分
        pointsLowerLimit: this.goodsInfo.pointsLowerLimit, //积分使用数量
        returnPoints: this.goodsInfo.returnPoints, //是否返积分，0：否，1：是
        returnPointsWay: this.goodsInfo.returnPointsWay, //0是固定，1是比例
        groupDataObj: isGroup ? groupDataObj : {}, // 拼团数据
        activeObj: {
          ...this.giftInfo,
          activeType: this.activeType,
          activeId: this.activeId,
          enableCoupon: this.activeInfo?.enableCoupon
        }, //活动类型
        activityType: this.halfInfo?.type || this.shopActiveInfo.type || '',
        activeId: this.halfInfo?.id || '',
        activityId: this.shopActiveInfo?.id || this.halfInfo?.id || '',
        shareParam: {
          ...this.shareParam
        },
        // 里面存放了
        ...activeInfo,
        goodsStock: obj?.goodsInventory,
        integralPrice: obj.integralPrice,
        channelCode: this.channelCode,
        channelFlag: this.channelFlag,
        channelName: this.channelName,
        // 是否开具发票
        invoiceStatus: this.goodsInfo?.invoiceStatus
      }
      console.log('444444444444', goodsList);

      this.goTo(`/pagesA/order/orderCenter?goodsList=${JSON.stringify([goodsList])}`)
    },
    // 拼团数据处理
    groupDataTreating(isJoin) {
      if (this.goodsType) {
        return {
          type: 'PT',
          groupId: this.groupInfo.id,
          isJoin: isJoin,
          goodsType: this.groupInfo.type,
          discountStatus: this.groupInfo.discountStatus,
          limitBuyStatus: this.groupInfo.limitBuyStatus,
          limitBuyCountNum: this.groupInfo.limitBuyCountNum,
          limitBuyOrderNum: this.groupInfo.limitBuyOrderNum,
        }
      }
      return {
        type: null
      }
    },
    swiperChange(current) {
      let player = uni.createVideoContext("firstVideo")

      // 切换如果不是视频位置 暂停视频
      if (current.target.current == 0) {
        // player.pause()
        this.playFlag = true
        this.coverImgShow = false
      } else {
        player.pause()
      }
    },
    videoPause() {
      this.playFlag = true
    },
    play() {
      this.playFlag = false
    },
    imgPlay() {
      let player = uni.createVideoContext("firstVideo")
      if (this.playFlag) {
        player.play()
        this.playFlag = false
      } else {
        player.pause()
        this.playFlag = true
      }
    },
    // 获取优惠券
    async getCoupons() {
      if (this.paymentWay == 2 || this.paymentWay == 3) {
        return
      }
      let res = await this.$http.goodsCoupons({
        userId: this.$globleData.userData?.id || '',
        goodsId: this.goodsId,
        memberLevelId: this.merberData.id
      })
      this.couponsList = res.dataInfo.filter(item => {
        // 只展示领取范围内的

        if (new Date().getTime() <= new Date(item.getEndTime.replace(/-/g, '/')).getTime() &&
            new Date().getTime() >= new Date(item.getStartTime.replace(/-/g, '/')).getTime()) {
          return true
        }

      })
    },
    // 获取相似商品列表
    async getSimilarGoods() {
      console.log('this.goodsInfo: ', this.goodsInfo);
      let buyerType = ''
      if (getApp().globalData.freshShopId?.includes(this.$globleData.shopId)) {
        buyerType = this.$globleData?.buyType || ''
      }
      let res = await this.$http.goodsList({
        current: 1,
        size: 8,
        goodsGroupId: this.goodsInfo.goodsGroupId,
        buyerType

      }, false)
      this.similarList = res.dataInfo.records
    },
    //查看商品
    async checkGoods() {
      const {
        dataInfo: res
      } = await this.$http.checkGoods({
        id: this.goodsId,
        activityId: this.activeId
      })
      let status = res?.goodsActivityStatus || null // 判断当前商品类型
      this.goodsType = status
      // 拼团商品
      if (status == 1) {
        this.initGroupBooking(res)
      }
      // 普通商品
      if (!status) {
        this.goodsInfo = res || []
      }
      const info = this.goodsInfo
      this.goodsSpecList = info?.goodsSpecPropertiesList || []
      if (info.goodsPictures.indexOf(',') > -1) {
        this.headSwiperImg = info.goodsPictures.split(',')
      } else {
        this.headSwiperImg = [info.goodsPictures]
      }
      this.paymentWay = info.paymentWay
      this.goodsVideo = info.goodsVideo
      this.modelIds = this.goodsSpecInfo?.modelIds?.split(',') || []
      this.specList = info?.goodsSpecList || []
      this.specGoodsInfo = this.goodsSpecList[0]

      if (this.goodsInfo) {
        this.getSimilarGoods()
      }
      this.loading = false
    },
    // 初始化 拼团信息 (商品为拼团商品时触发)
    initGroupBooking(res) {
      this.groupInfo = res?.groupActivityInfoResponse || null
      this.groupList = res?.groupList || []
      this.goodsInfo = res?.goodsWXQueryResponse || {}
    },
    // 显示规格弹窗
    showPopup(state) {
      this.btnState = state
      if ([5, 6].includes(state)) {
        let list = this.goodsSpecList.filter(item => {
          if (item.availableStatus == 0) {
            return false
          }
          return true
        })
        this.goodsPoupSpecList = list
      } else {
        this.goodsPoupSpecList = this.goodsSpecList
      }
    },
    // 领取优惠券
    receiveCoupon() {
      this.show = true
    },
    async recieve(id, item) {

      this.noMultipleClicks(async () => {
        let getStartTime = new Date(item.getStartTime.replace(/-/g, '/')).getTime()
        let getEndTime = new Date(item.getEndTime.replace(/-/g, '/')).getTime()
        let currentTime = new Date().getTime()
        if (currentTime <= getEndTime && currentTime >= getStartTime) {
          let res = await this.$http.receiveCoupons({
            couponId: id,
            receiveType: item.couponOwnWay
          })
          if (res.returnCode == 1000) {
            this.getCoupons()
            this.$toast('领取成功')
          }
        } else {
          this.$toast('请在有效的时间领取')
          return
        }
      })


    },
    // 查询是否收藏
    async queryCollection() {
      const {
        dataInfo: res
      } = await this.$http.queryCollection({
        productId: this.goodsId
      })
      if (res.id) {
        this.collectId = res.id
        this.isCollection = true
      }
    },
    // （添加 取消) 收藏
    async collection() {
      const param = {
        productId: this.goodsId
      }
      if (this.isCollection) {
        await this.$http.cancelCollection({
          id: this.collectId
        })
        this.isCollection = false
        this.$toast('取消收藏')
        return
      }
      const res = await this.$http.addCollection(param)
      this.$toast('收藏成功')
      this.collectId = res.dataInfo.id
      this.isCollection = true
    },
    // 加入购物车
    async addCart({
                    ids = [],
                    goodsNum = 1
                  }) {
      this.specIdList = ids || this.specIdList
      let id = ''
      for (let item of this.goodsSpecList) {
        if (item.modelIds == ids.join(',')) {
          id = item.id
        }
      }
      id = id || this.goodsSpecInfo.id
      if (!id) {
        this.$toast('操作失败')
        return
      }
      const param = {
        goodsId: this.goodsId,
        goodsSpecIds: id,
        goodsAmount: goodsNum || 1
      }

      await this.$http.cartAdd(param)
      this.goodsCodeEvent('1', param?.goodsAmount || 0)
      this.$toast('添加成功')
      this.$store.commit('setSpecification', false)
    },

  },
}
</script>

<style scoped lang="scss">
.g-goods-detail {
}

.poster-play {
  width: 120rpx;
  height: 120rpx;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.goods-detail-box {
  background: #ffffff;
  padding: 40rpx 30rpx 44rpx;

  .goods-name {
    min-height: 30rpx;
    min-width: 400rpx;
    font-size: 32rpx;
    font-weight: 600;
    color: #191919;
    margin-bottom: 24rpx;
  }

  .goods-specific {
    // min-height: 30rpx;
    min-width: 400rpx;
    margin-bottom: 24rpx;
    font-size: 24rpx;
    color: #999999;
  }

  .goods-price {
    .salePrice {
      font-size: 36rpx;
      font-weight: 500;
      color: #191919;
    }

    .marketPrice {
      margin-left: 20rpx;
      font-size: 28rpx;
      color: #999999;
      text-decoration: line-through;
    }
  }

  .integral {
    // width: 290rpx;
    // height: 54px;
    display: inline-block;
    margin-top: 10rpx;
    padding: 8rpx 20rpx;
    background: #FFF8C6;
    border-radius: 4rpx;
    font-size: 26rpx;
    font-weight: 400;
    color: #E1544A;
  }
}

.serve-box {
  margin-top: 20rpx;
  background: #ffffff;
  position: relative;

  .serve-item {
    justify-content: space-between;
    padding: 24rpx 40rpx 24rpx 30rpx;

    .serve-title {
      font-size: 24rpx;
      font-weight: 600;
      color: #191919;
    }

    .serve-tip {
      min-width: 200rpx;
      min-height: 30rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #191919;
    }

    image {
      width: 28rpx;
      height: 28rpx;
    }
  }

  .give-coupon-img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 100rpx;
    width: 160rpx;
  }
}

// 优惠券标签
.coupon-label {
  display: inline-block;
  padding: 0rpx 20rpx;
  background: #FFE7E7;
  //border: 1rpx solid #D1AB88;
  margin-right: 10rpx;
  border-radius: 4rpx;
  margin-top: 4rpx;
  font-size: 24rpx;
  color: #E1544A;
  line-height: 40rpx;
  height: 40rpx;
}

.switch-box {
  min-height: 100rpx;
  background: #ffffff;
  text-align: center;
  margin-top: 20rpx;

  .text-loading {
    padding: 20rpx 0 !important;
  }

  text {
    padding: 34rpx 0;
    flex: 1;
    font-size: 28rpx;
    color: #000000;
  }

  .active {
    font-size: 28rpx;
    font-weight: 600;
    color: #000000;
    border-bottom: 6rpx solid #191919;
  }
}

.shop-image {
  margin-top: 20rpx;
  padding: 0 10rpx;

  image {
    width: 730rpx;
  }

  .no-data {
    width: 100%;
    height: 480rpx;
    background: #FFFFFF;

    .no-image {
      width: 380rpx;
      height: 380rpx;
    }
  }
}

.shop-image-load {
  min-height: 100rpx;
}

.recommend-card {
  margin-top: 20rpx;
  padding: 0 20rpx;
  background: #ffffff;
  //margin-bottom: 60rpx;

  text {
    display: inline-block;
    padding: 28rpx 0;
    font-size: 24rpx;
    color: #191919;
  }
}

///deep/.u-drawer-bottom {
//	padding-top: 60rpx !important;
//}

// 优惠券弹窗
.popup-content-coupon {
  width: 100%;
  height: 70vh;
  overflow: hidden;
  flex-direction: column;

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
    flex: 1;
    padding: 30rpx;
    height: 0;
    overflow-y: scroll;
    overflow: hidden;

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

            .max-discount {
              font-size: 26rpx;

            }
          }

          .discount-price {
            font-size: 48rpx;
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

.zeroGoods {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: iphone-bottom(98rpx);
  background: #FFFFFF;
  box-shadow: 0px -1rpx 0px 0px #E6E6E6;

  .btn {
    width: 550rpx;
    height: 70rpx;
    background: #D1B085;
    border-radius: 100rpx;
    font-size: 28rpx;
    color: #FFFFFF;
  }
}

.exchangeGoods {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: iphone-bottom(98rpx);
  background: #FFFFFF;
  box-shadow: 0px -1rpx 0px 0px #E6E6E6;

  .btn {
    width: 550rpx;
    height: 70rpx;
    background: $themeColor;
    border-radius: 100rpx;
    font-size: 28rpx;
    color: #FFFFFF;
  }
}

/deep/ .no-data {
  height: 100% !important;
}

/deep/ .u-progress {
  background-color: rgba(255, 255, 255, 0.32) !important;
}

// 显示商品状态
.swiper-box {
  width: 100%;
  height: 100%;
  position: relative;

  .mask-goods-state {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, .4);
    justify-content: center;

    .state-name {
      width: 400rpx;
      height: 400rpx;
      justify-content: center;
      background: rgba(25, 25, 25, 0.5);
      border-radius: 50%;

      font-family: PingFangSC-Regular;
      font-size: 60rpx;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
}

/deep/ video {
  width: 100% !important;
}

/deep/ ._img {
  display: block;
}

.no-active {
  background: #999999 !important;
}
</style>
