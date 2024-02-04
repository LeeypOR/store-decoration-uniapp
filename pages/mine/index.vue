<template>
  <view class="mine">
    <block v-if="loading">
      <mineSekton />
    </block>
    <block v-else>
      <view
        v-if="microInfo"
        class="mine-head"
        :style="[
          { background: `url(${microInfo.backgroundImage}) no-repeat`, 'background-size': 'cover' }
          
        ]"
      >
        <u-navbar
          :is-back="false"
          :background="{ background: '#00000000' }"
          :border-bottom="false"
        ></u-navbar>
        <view class="member-img" v-if="merberData&&microInfo.isUpgrade == 1">
          <image :src="merberData.backgroundPicture " mode="aspectFill"></image>
          <view class="member-text">
            {{ merberData.gradeName ? merberData.gradeName : '' }}
          </view>
          <image :src="merberData.gradePicture" class="member-crown"></image>
          <!-- isUpgrade	是否显示升级（0：不显示 1：显示）;   upgradeMsg	升级显示信息;   upgradeTargetId	升级跳转链接id -->
          <!-- upgradeNeedConsumptionAmount = 0 最高等级会员 -->
          <block v-if="microInfo.upgradeTargetId">
            <view v-if="microInfo.isUpgrade == 1">
              <view
                class="upgrade-member"
                v-if="merberData.upgradeNeedConsumptionAmount !== '0'"
                @click.stop="goTo(`/pagesB/memberBuy/index?cardId=${microInfo.upgradeTargetId}`)"
              >
                {{ microInfo.upgradeMsg }} >
              </view>
              <view
                v-else-if="merberData.expireDays"
                class="upgrade-member"
                @click.stop="goTo(`/pagesB/memberBuy/index?cardId=${microInfo.upgradeTargetId}`)"
              >
                {{ merberData.expireDays }}天后到期，请续费
              </view>
              <view class="upgrade-member" v-else-if="merberData.isForever == 1">永久</view>
              <view
                class="upgrade-member"
                v-else-if="merberData.expireDate"
                @click.stop="goTo(`/pagesB/memberBuy/index?cardId=${microInfo.upgradeTargetId}`)"
                >续费 >
              </view>
              <view
                class="upgrade-member"
                v-else
                @click.stop="goTo(`/pagesB/memberBuy/index?cardId=${microInfo.upgradeTargetId}`)"
              >
                {{ microInfo.upgradeMsg }} >
              </view>
            </view>
          </block>
        </view>

        <view class="my-user" :style="{ 'justify-content': microInfo.portraitLocation == 2 ? 'center' : '' }">
          <view class="head-img" @click="goUserInfo">
            <image
              mode="scaleToFill"
              :src="userInfo.avatar || '../../static/image/default_avatar.png'"
            ></image>
          </view>
          <view class="head-right">
            <view class="user-info u-flex">
              <text
                class="user-name u-line-1 u-flex-1"
                :style="{ color: microInfo.nicknameColor }"
                @click="goUserInfo"
                >{{ userNameDispose(userInfo.nickName) || '点击登录' }}</text
              >
            </view>
            <text
              class="mine-phone"
              :style="{ color: microInfo.nicknameColor }"
              @click="goUserInfo"
              >{{ hidePhone(userInfo.phoneNumber) }}</text
            >
          </view>
        </view>

        <!-- 积分圆角 -->
        <view v-if="!freshShopData.includes(shopId) " class="core">
          <image
            class="core-img"
            src="../../static/image/mine/middle_modalbox_jifen_bg.png"
          ></image>
          <view @click="goTo('/pagesA/myIntegral/index')" class="core-item">
            <view class="u-flex-1">积分</view>
            <view class="point">{{
              integrateInfo.currentIntegrate ? integrateInfo.currentIntegrate : 0
            }}</view>
          </view>
          <view @click="goTo('/pagesB/equityCard/index')" class="core-item">
            <view class="u-flex-1">权益卡</view>
            <view class="point" style="text-align: center">{{ cardNum }}</view>
          </view>
          <view @click="goTo('/pagesA/mine/myCoupon')" class="core-item">
            <view class="u-flex-1">优惠券</view>
            <view class="point" style="text-align: center">{{ couponNum }}</view>
          </view>
        </view>
      </view>
      <view style="height:40rpx;"></view>
      <view v-if="adList.length" class="ad">
        <u-swiper
          @click="handelImage"
          height="200"
          width="690"
          border-radius="14"
          :title="true"
          :list="adList"
          img-mode="aspectFill"
        ></u-swiper>
      </view>
      <view class="order-card">
        <view class="u-flex order-top">
          <text class="my-order">我的订单</text>
          <view class="more u-flex" @click="goTo('/pagesA/mine/myOrder')">
            查看全部
            <image src="@/static/image/left-icon.png"></image>
          </view>
        </view>
        <view class="state-item u-flex">
          <view
            class="item u-flex"
            v-for="(item, index) in orderStateList"
            :key="index"
            @click="goRouter(item, index)"
          >
            <image :src="item.url"></image>
            <text class="item-tip">{{ item.name }}</text>
            <u-badge type="error" :count="item.num" :is-center="true"></u-badge>
          </view>
        </view>
      </view>

      <view class="list-card">
        <view
          class="func-item u-flex u-rela"
          v-for="(item, index) in optionList"
          :key="index"
          @click="goPath(item)"
        >
          <view class="item-right u-flex" v-if="item.isShow == 1">
            <image :src="typeName(item).url"></image>
            <text>{{ typeName(item).name }}</text>
          </view>
          <view class="item-left u-flex">
            <!--            <image src="@/static/image/left-icon.png"></image>-->
            <text class="iconfont icon-arrow"></text>
          </view>
		      <button v-if="item.toolCode=='LXKF'" @click="openCustomerShare" class="button-share"></button>
        </view>
      </view>
      <view style="height: 40rpx"></view>
      <u-mask
        :mask-click-able="false"
        :custom-style="{ background: 'rgba(0, 0, 0, 0.5)' }"
        :show="cardShow"
      >
        <view v-if="cardShow" class="card-wrap">
          <image
            @tap.stop="goCard"
            style="width: 690rpx; height: 690rpx"
            src="https://jdz.g1999.com/ghs/20210827/5fefda1b820244dc955ed6fccdaf005b.png"
          ></image>

          <view
            @click="cardClose"
            class="iconfont icon-closed"
            style="font-size: 61rpx; color: white"
          >
          </view>
        </view>
      </u-mask>
    </block>

    <my-tabbar
      @change="tabbarChange"
      v-model="tabCurrent"
      :bg-color="tabbarInfo.backgroundColor"
      :list="tabbarInfo.navigationList"
    ></my-tabbar>
    <advert-popup v-if="(shopId !='433733032805924864' && shopId !='461887105476845568')" :refresh="refresh" :location="2"></advert-popup>
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
import shareMixin from '../shareMixin.js'
import { mapState } from 'vuex'
import {columnData} from './column'
import mineSekton from './seketon'
import myTabbar from '@/components/myTabbar'
import AdvertPopup from "../../components/adver/advertPopup";
import exchangeMixin  from '@/pages/exchangeMixin'
import  exchangeAdv from "../../components/exchangeAdv";
export default {
    mixins: [shareMixin,exchangeMixin],
    components: {
      AdvertPopup,
        mineSekton,
        myTabbar,
        exchangeAdv
    },
    data() {
        return {
            freshShopData:getApp().globalData.freshShopId??'',
            title: '我的',
            statusBarHeight: getApp().globalData.navbarHeight,
            orderStateList: [
                {
                    name: '待付款',
                    type: '0',
                    num: 0,
                    url: 'https://jdz.g1999.com/ghs/20211217/c7197197decd4d2e8f0afcd885345383.png',
                },
                {
                    name: '待发货',
                    type: '1',
                    num: 0,
                    url: 'https://jdz.g1999.com/ghs/20211217/e19223f29a0a4e548817bd71ec63336f.png',
                },
                {
                    name: '待收货',
                    type: '2',
                    num: 0,
                    url: 'https://jdz.g1999.com/ghs/20211217/d365d674bd54497ebdcefdd54a90ef6e.png',
                },
                {
                    name: '评价',
                    type: '3',
                    num: 0,
                    url: 'https://jdz.g1999.com/ghs/20211217/ef24c427aead41c8aa650cfdbd810832.png',
                },
                {
                    name: '退款/售后',
                    type: '4',
                    num: 0,
                    url: 'https://jdz.g1999.com/ghs/20211217/7b1e4c6c183a4c5c8c82af3676d2fb8b.png',
                },
            ],
            isShow: false,
            optionList: [],
            styleType: 1, //图标风格（1:填色版;2:线框版）
            userInfo: {},
            microInfo: null, //微页面的数据信息
            adList: [], //广告数据
            integrateInfo: {}, //积分,
            merberData: null, //会员等级
            highestLevelName: '', //最高等级会员名称
            cardNum: 0,
            cardShow: false,
            couponNum: 0, //优惠券数量
            orderNum: null, //订单数量的集合,
            // tabCurrent:'',
            loading: true,
            shopId:'',
            refresh:'',
            isPopup:true
        }
    },
    onLoad(option) {
        this.currentIndex = Number(option?.currentIndex || 0)

    },
    onShow() {
        this.userInfo = this.$globleData.userData
        if (!this.$globleData.hasLogin) {
            this.couponNum = 0
            this.integrateInfo = {}
            // this.merberData = null
            this.highestLevelName = ''
            this.cardNum = 0
        }
        this.refresh = new Date().getTime().toString()
        this.getInfo()
        if(!getApp().globalData.freshShopId?.includes(this.shopId )){
            this.getPoint()
            // if(!this.merberData){
                this.getMemberLevel()
            // }
            this.getCouponsList()
        }

        this.getPoster()
        this.fetchOrderNum()
        this.isPopup = true
    },
    onHide(){
      this.isPopup = false
    },
    computed: {
        tabCurrent: {
            get: function () {
                return this.$store.state.tabIndex
            },
            set: function (value) {
                // this.$store.commit('setTabIndex',value)
            },
        },
        ...mapState({
            tabbarInfo: (state) => state.tabbarInfo,
        }),
        getStatusBarHeight() {
            return getApp().globalData.navbarHeight
        },
        userNameDispose() {
            return (name = '') => {
                if (name.length > 15) {
                    return name.substring(0, 15) + '...'
                }
                return name
            }
        },
        typeName() {
          return (val) => {
            let dataObj = {}
            // console.log(columnData);
             columnData.filter(item=>{
               if(item.toolCode == val.toolCode ){
                 dataObj = item
                 if(val.styleType ==1){
                  dataObj.url =  item.highlightImg
                 }else{
                   dataObj.url =  item.lineImg
                 }

               }
            })
            return dataObj
          }
        },
    },
    methods: {
        handelImage(index) {
            this.clickMic(this.adList[index].jumpTargetType, this.adList[index].jumpTargetValue)
        },
        // 获取订单数量
        async fetchOrderNum() {
            try {
                let res = await this.$http.getOrderNum()
                this.orderNum = res.dataInfo ? res.dataInfo : null
                this.orderStateList.forEach((item) => {
                    if (item.type == '0') {
                        item.num = this.orderNum.unPayCount || 0
                    } else if (item.type == '1') {
                        item.num = this.orderNum.orderUnIssueCount || 0
                    } else if (item.type == '2') {
                        item.num = this.orderNum.orderUnReceivedCount || 0
                    } else if (item.type == '3') {
                        item.num = this.orderNum.orderUnEvaluate || 0
                    }
                })
                this.loading = false
            } catch (e) {
                this.loading = false
                this.orderNum = null
                console.log(e)
            }
        },
        // 优惠券列表
        async getCouponsList() {
            try {
                let res = await this.$http.couponList({
                    couponStatus: '0',
                })
                this.couponNum = res.dataInfo?.length || 0
            } catch (error) {
                this.couponNum = 0
                console.log(error)
            }
        },
        // 调权益卡列表
        goCard() {
            this.goTo('/pagesB/equityCard/index')
            uni.setStorageSync('cardNum', this.cardNum)
        },
        cardClose() {
            this.cardShow = false
            uni.setStorageSync('cardNum', this.cardNum)
        },
        // 获取广告
        async getPoster() {
            let res = await this.$http.getMicroPoster({})
            this.adList = res.dataInfo?.spaceImages || []
        },
        // 获取权益卡数量
        async cardNums() {
            try {
                let res = await this.$http.cardNum({})
                if (res.returnCode == 1000) {
                    this.cardNum = res.dataInfo || 0

                    if (this.cardNum > Number(uni.getStorageSync('cardNum'))) {
                        this.cardShow = true
                    } else {
                        this.cardShow = false
                    }
                } else {
                    this.cardNum = 0
                }
            } catch (e) {
                this.cardNum = 0
                this.cardShow = false
                console.log(e)
            }
        },

        // 获取积分
        async getPoint() {
            try {
                let param = {
                    id: this.$globleData.userData.id,
                }
                const res = await this.$http.getIntegrateInfo(param)
                if (res.returnCode == 1000) {
                    this.integrateInfo = res?.dataInfo || {}
                    await this.cardNums()
                } else {
                    this.integrateInfo = {}
                }
            } catch (error) {
                this.integrateInfo = {}
                console.log(error)
            }
        },
        // 获取会员等级
        async getMemberLevel() {
            try {
                let res = await this.$http.getMemberInfo({ id: this.$globleData.userData.id })
                if (res.returnCode == 1000) {
                    if (res.dataInfo?.length) {
                        res.dataInfo.map((item) => {
                            if (item.currentGrade) {
                                this.merberData = item
                            }
                        })
                        this.highestLevelName = res.dataInfo[res.dataInfo.length - 1].gradeName
                    }
                } else {
                    this.highestLevelName = ''
                }
            } catch (error) {
                this.highestLevelName = ''
                console.log(error)
            }
        },
        goUserInfo() {
            let url = '/pagesA/mine/userInfo'
            if (this.userInfo && !this.userInfo.phoneNumber) {
                url = '/pages/login/index'
            }
            this.goTo(url)
        },
        goRouter(item, index) {
            if (item.type == '4') {
                this.goTo('/pagesA/afterSales/refundRecord')
            } else {
                this.goTo(`/pagesA/mine/myOrder?index=${index + 1}`)
            }
        },
        // 点击方案跳转
        goPath(item) {
            let path = this.typeName(item).path

            this.goTo(path)
        },
        // 获取微页面数据
        async getInfo() {
            let res = await this.$http.getMicroInfo({})
            this.microInfo = res.dataInfo?.personalCenter || null
            console.log('microInfo: ', this.microInfo);
            let data = await this.$http.getProInfo({ pageId: res.dataInfo?.pageInfo.id || 0 })
            this.optionList = data.dataInfo?.menuList || []
        },
    },
}
</script>


<style scoped lang="scss">
.mine {
  .mine-head {
    padding-left: 34rpx;
    height: 480rpx;
    // background-size: cover;
    position: relative;
    //    .hbd-img{
    // 	position: absolute;
    // 	top: 0;
    // 	left: 0;
    // 	z-index: -1;
    // 	width: 100%;
    // 	height: 480rpx;
    // }

    .member-img {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 750rpx;
      height: 142rpx;
      transform: translateX(-50%);
      z-index: 51;
      image {
        width: 750rpx;
        height: 142rpx;
      }
      .member-text {
        position: absolute;
        font-size: 28rpx;
        font-weight: 600;
        color: #ffffff;
        left: 130rpx;
        bottom: 65rpx;
      }
      .member-crown {
        position: absolute;
        left: 60rpx;
        bottom: 54rpx;
        width: 60rpx;
        height: 60rpx;
      }
      .upgrade-member {
        position: absolute;
        right: 30rpx;
        top: 0;
        bottom: 0;
        height: 100%;
        padding-top: 44rpx;
        padding-right: 20rpx;
        font-size: 24rpx;
        color: #68553d;
        font-weight: 700;
      }
    }
    .my-user {
      display: flex;
      .head-img {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        overflow: hidden;
        image {
          width: 100%;
          height: 100%;
        }
      }

      .head-right {
        margin-left: 20rpx;
        .user-info {
          margin-bottom: 8rpx;
          .user-name {
            font-size: 40rpx;
            font-weight: 600;
            color: #191919;
          }
          .user-vip {
            display: flex;
            align-items: center;
            margin-left: 16rpx;
            padding: 6rpx 17rpx;
            background: #092b34;
            border-radius: 20rpx;
            font-size: 22rpx;
            font-weight: 400;
            color: #fad1a8;
            image {
              margin-right: 4rpx;
              width: 26rpx;
              height: 22rpx;
            }
          }
        }
        .mine-phone {
          font-size: 28rpx;
          font-weight: 400;
          color: #191919;
        }
      }
    }
    .core {
      position: absolute;
      left: 0;
      bottom: -47rpx;
      width: 384rpx;
      height: 105rpx;
      z-index: 999;
      display: flex;
      padding: 10rpx 40rpx 10rpx 30rpx;
      // justify-content:space-between;
      align-items: center;
      font-size: 28rpx;
      font-weight: 400;
      color: #000000;
      .core-item {
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .core-img {
        position: absolute;
        left: 0;
        bottom: 3rpx;
        width: 384rpx;
        height: 136rpx;
        z-index: -1;
      }
      .point {
        font-weight: 600;
      }
    }
  }
  /deep/ swiper {
    width: 690rpx;
    height: 220rpx;
    margin: 0 auto;
  }
  .ad {
    margin-top: 20rpx;
    .swiper-ad {
      position: relative;
      // border: 1px solid red;
      .swiper-item {
        width: 100%;
        image {
          width: 100%;
          height: 220rpx;
        }
      }
      .swiper-title {
        position: absolute;
      }
    }
  }
  .order-card {
    // transform: translateY(-90rpx);
    margin: 0 30rpx;
    margin-top: 30rpx;
    background: #ffffff;
    border-radius: 14rpx;
    padding: 24rpx 30rpx 30rpx;
    .order-top {
      justify-content: space-between;
      padding-bottom: 22rpx;
      .my-order {
        font-size: 28rpx;
        font-weight: 600;
        color: #191919;
      }
      .more {
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
        image {
          margin-left: 10rpx;
          width: 14rpx;
          height: 24rpx;
        }
      }
    }
    .state-item {
      padding-top: 30rpx;
      justify-content: space-around;
      .item {
        position: relative;
        flex-direction: column;
        image {
          width: 60rpx;
          height: 60rpx;
        }
        .item-tip {
          margin-top: 10rpx;
          font-size: 22rpx;
          font-weight: 400;
          color: #666666;
        }
      }
    }
  }

  .list-card {
    margin: 20rpx 30rpx 0;
    background: #ffffff;
    border-radius: 14rpx;
    padding: 0 30rpx;
    .func-item {
      padding: 29rpx 0;
      justify-content: space-between;
      border-bottom: 1px solid rgba(230, 230, 230, 0.4);
      position: relative;
	  .button-share {
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 102rpx;
	  }
      .item-right {
        image {
          margin-right: 20rpx;
          width: 40rpx;
          height: 40rpx;
        }
        text {
          font-size: 28rpx;
          font-weight: 500;
          color: #191919;
        }
      }

      .item-left {
        image {
          width: 14rpx;
          height: 24rpx;
        }
        text {
          margin-right: 20rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: #c3c7cb;
        }
        .icon-arrow {
          margin-right: 0 !important;
          font-size: 36rpx !important;
        }
      }
      &:nth-last-child(1) {
        border: none;
      }
    }
  }
}
.card-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
<style>
page {
  background: #f8f8f8 !important;
}
</style>
