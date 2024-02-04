<template>
  <view class="g-raffle">
    <u-navbar class="location-class" :background="{background:'#ffffff'}" title-size="36" title-color="#191919"
              :border-bottom="false" title="盲盒抽奖"
              back-icon-color="#191919" :custom-back="backPage"
    ></u-navbar>
    <block v-if="pageMsJson">
      <view style="position: relative">
        <view class="u-abso" style="right:20rpx;top:38rpx">
          <view class="u-relative u-flex" v-if="pageMsJson.shareBtnshow !=0"
                style="margin-bottom: 10rpx;flex-direction: column"
          >
            <image style="width: 100rpx;height: 100rpx;margin-bottom: -2rpx" :src="getShareBtnImg"></image>
            <view :style="[shareBtnText]">{{ pageMsJson.shareBtnText }}</view>
            <button class="share-btn" open-type="share" v-if="!isStart"></button>
          </view>
          <view class="u-flex" v-if="pageMsJson.goShopBtnShow !=0" style="flex-direction: column"
                @click="!isStart && goTo('/pages/category/index',true)"
          >
            <image style="width: 100rpx;height: 100rpx;margin-bottom: 2rpx" :src="getGoBtnImg"></image>
            <view :style="[goShopText]">{{ pageMsJson.goShopBtnText }}</view>
          </view>
        </view>
        <image :src="getBgImg" mode="widthFix" class="bg-img"></image>
        <!--   抽奖描述   -->
        <view class="gift">
          <view class="gift-content u-flex">
            <view class="title" :style="[activeNameStyle]">{{ pageMsJson.activetyName || '惊喜拆盲盒' }}</view>
            <view class="tip u-flex" :style="[activeDesc]">{{ pageMsJson.activetyDesc || '奖品多 价值高 拆盲盒 得惊喜' }}</view>
            <text class="num" v-if="pageMsJson.residueNum !=0" :style="[residueNum]">{{ getDrawNumber }}</text>
          </view>
        </view>
        <!-- 奖品 礼盒 记录相关  -->
        <view class="record-card"
              :style="{padding: (pageMsJson.drawBtnShow == 1)?'0 30rpx 140rpx':'0 30rpx 0 '}"
        >
          <view class="bag-box u-flex">
            <view class="bag u-flex" :style="{padding:pageMsJson.BoxNum>4?'0 0':'0 60rpx'}"
                  v-for="(item,index) in (pageMsJson.boxList || 6)"
                  v-if="(pageMsJson.BoxNum || 6) > index" @click="drawGive(index+1)"
            >
              <image :src="boxImg"></image>
              <view class="box-name" :style="[boxStyle]">
                <text class="beat" style="display: inline-block">{{ item || '拆神秘盲盒' }}</text>
              </view>
            </view>
          </view>
          <!--   奖品池   -->
          <activity-card :title="(pageMsJson.giftPoolName || '奖品池')" :styleObj="giftPool" v-if="isShow('giftPoolShow')">
            <view class="notice" v-if="pageMsJson.prizeCarousel != 0">
              <u-notice-bar style="width: 100%"
                            :border-radius="pageMsJson.prizeAngelType == 1 ? '100':'0'"
                            :font-size="pageMsJson.prizefontSize * 2 || '28'"
                            :bg-color="pageMsJson.prizeBordercolor || '#C8505C'"
                            :volume-icon="false"
                            :color="pageMsJson.prizeColor || '#ffffff'"
                            mode="vertical"
                            padding="0 0"
                            :list="list"
              >
              </u-notice-bar>
            </view>
            <view class="prize-info u-flex">
              <view class="prize" v-for="(item,index) in prizePoolList">
                <image :src="prizeImg(item)"></image>
                <view class="prize-name">{{ item.prizeName }}</view>
              </view>
            </view>
          </activity-card>
          <!--   我的奖品   -->
          <activity-card :title="(pageMsJson.myPrizeName || '我的奖品')" :styleObj="myGive" v-if="isShow('myPrizeShow')">
            <view class="my-prize">
              <block v-if="prizeList.length>0">
                <view class="u-flex prize-record" v-for="item in prizeList">
                  <view>
                    <view class="name">{{ item.prizeName }}</view>
                    <view class="time">{{ item.winLotteryTime }}</view>
                  </view>
                  <text class="check-btn" :style="[getBtnStyle]" v-if="pageMsJson.myPrizeBtnShow != 0" @click="seePrize(item)">{{pageMsJson.myPrizeBtnName || '已发放,查看'}}</text>
                </view>
              </block>
              <view class="no-prize" v-else>暂未中奖</view>
            </view>
          </activity-card>
          <!--   抽奖描述   -->
          <activity-card :title="(pageMsJson.activetyRuleText || '活动规则')" :styleObj="ruleTitle"
                         v-if="isShow('activetyRuleShow')"
          >
            <view class="prize-describe" :style="[ruleContent]">
              <text class="prize-describe-text">{{ pageMsJson.activetyRuleDesc || '欢迎参加抽奖活动，如有任何问题均可联系官方客服。' }}</text>
            </view>
          </activity-card>
          <!--  获取抽奖   -->
<!--          <view class="get-num beat-btn" v-if="activityType ==3 && numList.length>0" @click="showPopup('number')"-->
          <view class="get-num beat-btn" v-if="pageMsJson.drawBtnShow == 1" @click="showPopup('number')"
                :style="[btnStyle]"
          >
            {{ pageMsJson.drawBtnText || '获取抽奖机会' }}
          </view>
        </view>
      </view>
    </block>
    <!--  抽奖弹窗  -->
    <view :class="{settingBox:boxAnimeShow}">
      <image style="width: 100%;height: 100%" :src="boxImg"></image>
    </view>
    <winning-popup ref="winningPopup" :giftBoxInfo="giftBoxInfo"></winning-popup>
    <!--  活动次数弹窗  -->
    <number-popup :numList="numList" @addDrawNumber="addDrawNumber" :activityId="activityId" ref="numberPopup"></number-popup>
    <!--  分享弹窗  -->
    <share-popup ref="sharePopup"></share-popup>
    <u-mask :show="boxAnimeShow" :custom-style="{background: 'rgba(0, 0, 0, 0)'}"></u-mask>
    <!-- 口令弹窗 -->
    <comfirm-popup title="请输入口令" @cancel="cancel" @confirm="command" ref="comfirmPopup">
      <view class="input-box">
        <input type="text" placeholder="请输入口令" v-model="commandValue" placeholder-class="popup-input-class">
      </view>
      <view class="err-tip">{{commandMsg}}</view>
    </comfirm-popup>
  </view>
</template>

<script>
import activityCard from "./component/activityCard";
import winningPopup from "./component/winningPopup";
import numberPopup from "./component/numberPopup";
import SharePopup from "./component/sharePopup";
import NoData from "../../components/noData";
import comfirmPopup from "../raffle/component/comfirmPopup";
import {isNull} from "../../common/verify";

export default {
  components: {
    NoData,
    SharePopup,
    activityCard,
    winningPopup,
    numberPopup,
    comfirmPopup
  },
  data() {
    return {
      title:'盲盒抽奖',
      activityId: '',            // 活动id
      list: [],                  // 轮播滚动
      prizePoolList: [],         // 奖品池
      drawNumber: 0,             // 抽奖次数
      prizeList: {},             // 奖品列表
      numList: [],               // 增加次数列表
      pageMsJson: '',            // 抽奖装修数据
      giftBoxInfo: {},           // 中奖信息
      boxAnimeShow: false,       // 是否显动画
      activityType: 0,          // 活动类型(1:无限制抽奖;2:限制次数3：条件抽奖)
      timer: '',                 // 轮询定时器
      isStart: 1,                // 活动是否开始
      commandValue:'',           // 口令
      commandMsg:''              // 口令提示
    }
  },
  computed: {
    // 领奖按钮样式
    getBtnStyle(){
      const obj = this.pageMsJson || {}
      const radius = obj?.awardAngelBtnType == 1 ?'100rpx':"0"
      return {
        color: obj?.awardBtnColor || '#ffffff',
        fontSize: obj?.awardfontBtnSize * 2 + "rpx",
        fontWeight: obj?.awardfontBtnWeight,
        background: obj?.awardTitleBtnColor,
        "border-radius":radius
      };
    },
    // 获取分享按钮图片
    getShareBtnImg() {
      const obj = this.pageMsJson || {}
      let url = '/pagesC/static/raffle/share_btn.png'
      if (obj.sharebtnType = 1) {
        url = obj.shareImageUrl || '/pagesC/static/raffle/share_btn.png'
      }
      return url
    },
    shareBtnText() {
      const obj = this.pageMsJson || {}
      return {
        color: obj?.shareBtnColor || '#ffffff',
        fontSize: obj?.sharefontSize * 2 + "rpx",
        fontWeight: obj?.sharefontWeight,
        'text-align': 'center',
      };
    },
    // 获取go按钮图片
    getGoBtnImg() {
      const obj = this.pageMsJson || {}
      let url = '/pagesC/static/raffle/go_shop.png'
      if (obj.goShopbtnType = 1) {
        url = obj.goShopImageUrl || '/pagesC/static/raffle/go_shop.png'
      }
      return url
    },
    goShopText() {
      const obj = this.pageMsJson || {}
      return {
        color: obj?.goShopBtnColor || '#ffffff',
        fontSize: obj?.goShopfontSize * 2 + "rpx",
        fontWeight: obj?.goShopfontWeight,
        'text-align': 'center',
      };
    },
    // 抽奖次数处理
    getDrawNumber() {
      if (this.activityType == 1) {
        return '免费抽奖'
      }
      return ` 剩余${this.drawNumber}次抽奖机会`
    },
    // 选项框是否隐藏
    isShow() {
      return type => {
        const pageMsJson = this.pageMsJson || {}
        if (pageMsJson[type] != 0) {
          return true
        }
        return false
      }
    },
    // 获取抽奖活动背景图片
    getBgImg() {
      const obj = this.pageMsJson || {}
      if (obj.styleType == 2 && obj?.bannerType == 2) {
        return obj?.bannerImageUrl || '/pagesC/static/raffle/bg.png'
      }
      if (obj.BoxNum == 9) {
        return '/pagesC/static/raffle/bg.png'
      }
      return '/pagesC/static/raffle/bg4.png'
    },
    // 活动名称映射
    activeNameStyle() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2)
        return {
          color: obj?.activetyNameColor,
          fontSize: obj?.activetyNamefontSize * 2 + "rpx",
          fontWeight: obj?.activetyNamefontWeight,
        };
    },
    // 活动描述
    activeDesc() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        if (obj?.activetyDescAngelType == 1) {
          borderRadius = '1000rpx'
        }
        return {
          color: obj?.activetyDescColor,
          fontSize: obj?.activetyDescfontSize * 2 + "rpx",
          fontWeight: obj?.activetyDescfontWeight,
          background: obj?.activetyDescBordercolor,
          borderRadius
        }
      }
    },
    // 剩余次数
    residueNum() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        if (obj?.residueNumAngelType == 1) {
          borderRadius = '1000rpx'
        }
        return {
          color: obj?.residueNumColor,
          fontSize: obj?.residueNumfontSize * 2 + "rpx",
          fontWeight: obj?.residueNumfontWeight,
          background: obj?.residueNumBordercolor,
          borderRadius
        }
      }
    },
    /**
     * 奖品类型 1：优惠券;2:积分;3:实物赠品）
     * 奖品图片
     * */
    prizeImg() {
      return (item = {}) => {
        const type = item.prizeType
        const obj = this.pageMsJson || {}
        if (type == 1) {
          if (obj?.couponType == 2) {
            return obj?.couponImgUrl || '/pagesC/static/raffle/coupon.png'
          }
          return '/pagesC/static/raffle/coupon.png'
        }
        if (type == 2) {
          if (obj?.integralType == 2) {
            return obj?.integralImgUrl || '/pagesC/static/raffle/integral.png'
          }
          return '/pagesC/static/raffle/integral.png'
        }
        if (type == 3) {
          return item.goodsPicture
        }
      }
    },
    //盲盒图片
    boxImg() {
      const obj = this.pageMsJson || {}
      if (obj.styleType == 2 && obj?.BoxStyleType == 2) {
        return obj?.BoxImgUrl || '/pagesC/static/raffle/box.png'
      }
      return '/pagesC/static/raffle/box.png'
    },
    // 盲盒样式
    boxStyle() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        if (obj?.BoxAngelType == 1) {
          borderRadius = '1000rpx'
        }
        return {
          color: obj?.BoxColor,
          fontSize: obj?.BoxfontSize * 2 + "rpx",
          fontWeight: obj?.BoxfontWeight,
          background: obj?.BoxBordercolor,
          borderRadius
        }
      }
    },
    // 奖品池
    giftPool() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        let titleBorderRadius = 0
        if (obj.poolAngelType == 1) {
          titleBorderRadius = '1000rpx'
        }
        if (obj?.pooltextAngelType == 1) {
          borderRadius = '14rpx'
        }
        return {
          color: obj?.giftPoolColor,
          fontSize: obj?.giftPoolfontSize * 2 + "rpx",
          fontWeight: obj?.giftPoolfontWeight,
          titleBackground: obj?.poolTitleColor,
          background: obj?.poolTextColor,
          titleBorderRadius,
          borderRadius
        }
      }
    },
    // 我的奖品
    myGive() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        let titleBorderRadius = 0
        if (obj.awardAngelType == 1) {
          titleBorderRadius = '1000rpx'
        }
        if (obj?.awardTextAngelType == 1) {
          borderRadius = '14rpx'
        }
        return {
          color: obj?.awardColor,
          fontSize: obj?.awardfontSize * 2 + "rpx",
          fontWeight: obj?.awardfontWeight,
          titleBackground: obj?.awardTitleColor,
          background: obj?.awardTextColor,
          titleBorderRadius,
          borderRadius
        }
      }
    },
    // 规则标题
    ruleTitle() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        let titleBorderRadius = 0
        if (obj?.ruleTitleAngelType == 1) {
          titleBorderRadius = '1000rpx'
        }
        if (obj?.ruleTextAngelType == 1) {
          borderRadius = '14rpx'
        }
        return {
          color: obj?.ruleTitleColor,
          fontSize: obj?.ruleTitlefontSize * 2 + "rpx",
          fontWeight: obj?.ruleTitlefontWeight,
          titleBackground: obj?.ruleTitlebgColor,
          background: obj?.ruleTextbgColor,
          titleBorderRadius,
          borderRadius
        }
      }
    },
    // 規則内容
    ruleContent() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        if (obj?.ruleTitleAngelType == 1) {
          borderRadius = '14rpx'
        }
        return {
          color: obj?.ruleTextColor,
          fontSize: obj?.ruleTextfontSize * 2 + "rpx",
          fontWeight: obj?.ruleTextfontWeight,
          borderRadius
        }
      }
    },
    // 抽奖
    btnStyle() {
      const obj = this.pageMsJson || {}
      if (obj?.styleType == 2) {
        let borderRadius = 0
        if (obj?.drawAngelType == 1) {
          borderRadius = '1000rpx'
        }
        return {
          color: obj?.drawtColor,
          fontSize: obj?.drawfontSize * 2 + "rpx",
          fontWeight: obj?.drawfontWeight,
          background: obj?.drawbgColor,
          borderRadius
        }
      }
    },
    getWinningImg() {
      const obj = this.pageMsJson || {}
      let winningPrizeImgUrl = '/pagesC/static/raffle/succeed.png'
      let noWinningImgUrl = '/pagesC/static/raffle/fail.png'
      let integralImgUrl = '/pagesC/static/raffle/integral.png'
      let couponImgUrl = '/pagesC/static/raffle/coupon.png'
      let winningPrizeColor = ''  //实物
      let integralColor = ''    //积分
      let couponColor = ''   //优惠券
      if (obj.winningPrizeType == 2) {
        winningPrizeImgUrl = obj.winningPrizeImgUrl
        winningPrizeColor = obj.winningPrizeColor
      }
      if (obj.noWinningType == 2) {
        noWinningImgUrl = obj.noWinningImgUrl
      }
      if (obj.integralType == 2) {
        integralImgUrl = obj.integralImgUrl
        integralColor = obj.integralColor
      }
      if (obj.couponType == 2) {
        couponImgUrl = obj.couponImgUrl
        couponColor = obj.integralColor
      }
      return {
        winningPrizeImgUrl,
        noWinningImgUrl,
        integralImgUrl,
        couponImgUrl
      }
    }
  },
  onLoad(option) {
    this.activityId = option?.activityId || option?.scene || ''
    wx.hideShareMenu({
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onShow() {
    if (!this.pageMsJson) {
      this.lotteryQuery()

      this.lotteryQueryNumber()
    }
    this.lotteryMyPrize()
    this.lotteryBroadcast()
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.lotteryBroadcast()
      }, 5 * 1000)
    }
  },
  onHide() {
    clearInterval(this.timer)
  },
  onUnload() {
    clearInterval(this.timer)
  },
  onShareAppMessage(res) {
    const obj = this.pageMsJson || {}
    if (res.from === 'button') {// 来自页面内分享按钮
      for (let item of this.numList) {
        if (this.activityType == 3 && item.sourceType == 4 && (item?.limit - item?.already)) {
          this.lotteryAddNumber(4)
        }
      }
    }
    let url = '/pagesC/static/raffle/share_bg.png'
    if (obj.posterType == 2) {
      url = obj?.posterImgUrl || '/pagesC/static/raffle/share_bg.png'
    }
    return {
      title: obj?.posterText,
      path: `/pagesC/raffle/index?activityId=${this.activityId}`,
      imageUrl: url
    }
  },
  methods: {
    // 关闭口令弹窗回调
    cancel(){
      this.commandValue = ''
      this.commandMsg = ''
    },
    // 口令获取次数
     async command() {
      if(isNull(this.commandValue)){
        this.commandMsg = '输入口令'
        return
      }
      try {
        await this.lotteryAddNumber(10,this.commandValue,false,true)
        this.$refs.comfirmPopup.show = false
        this.commandValue = ''
        this.commandMsg = ''
      }catch (e){
        if(e.returnCode == 1001){
          this.commandMsg = e.message
        }
      }
    },
    // 查询抽奖机会次数
    async lotteryQueryNumber() {
      const res = await this.$http.lotteryQueryNumber({activityId: this.activityId})
      this.numList = res?.dataInfo?.conditionLotteryList || []
      this.activityType = res?.dataInfo?.activityType || 0
    },
    // 显示弹窗
    showPopup(type) {
      if (type == 'number') {
        this.$refs.numberPopup.show = true
      }
    },
    /**
     * 产看奖品
     * 中奖类型（1优惠券 2积分 3实物赠品）
     * @param obj
     */
    seePrize(obj = {}) {
      const type = obj?.prizeType
      let url = ''
      if (type == 1) {
        url = '/pagesA/mine/myCoupon'
      }
      if (type == 2) {
        url = '/pagesA/myIntegral/index'
      }
      if (type == 3) {
        url = '/pagesA/mine/myGift'
      }
      this.goTo(url)
    },
    // 查看我的奖品
    async lotteryMyPrize() {
      const res = await this.$http.lotteryMyPrize({activityId: this.activityId, current: 1, size: 999})
      this.prizeList = res?.dataInfo?.records || []
    },
    // 抽奖
    async drawGive(boxNum) {
      if (this.isStart == -1) {
        this.$toast('活动未开始')
        return
      }
      if (this.isStart == 1) {
        this.$toast('活动结束')
        return
      }
      uni.showLoading({title: ''});
      let param = {
        activityId: this.activityId,
        boxNumber: boxNum
      }
			this.drawNumber = this.drawNumber ? this.drawNumber - 1 : 0
			// if(this.drawNumber==0){
			// 	uni.showModal({
			// 			title:'温馨提示',
			// 		content:'您的抽奖机会已用完'
			// 	})
			// 	uni.hideLoading()
			// 	return
			// }
      const res = await this.$http.lotteryBlindBox(param)
      this.boxAnimeShow = true
      this.lotteryMyPrize()
      setTimeout(() => {
        this.$refs.winningPopup.show = true
        this.boxAnimeShow = false
      }, 2500)
      let imgObj = this.getWinningImg
      this.giftBoxInfo = {...imgObj, ...(res?.dataInfo || {})}

    },
    // 查询轮播信息
    async lotteryBroadcast() {
      const res = await this.$http.lotteryBroadcast({activityId: this.activityId})
      this.list = (res?.dataInfo || []).map(item => {
        let name = ''
        if (item.nickName.length > 2) {
          name = item.nickName.slice(0, 1) + '**' + item.nickName.slice(-1)
        }
        if (item.nickName.length == 1) {
          name = item.nickName.slice(0, 1) + '**'
        }
        let str = `${name || '**'} 抽中了 ${item.prizeName}`
        return str
      })
    },
    // 活动详情
    async lotteryQuery() {
      const {dataInfo: res} = await this.$http.lotteryQuery({activityId: this.activityId})
      this.prizePoolList = res?.prizePoolList || {}
      this.drawNumber = res?.remainingLotteryNumber || 0
      this.pageMsJson = JSON.parse(res?.pageMsJson || '{}')
      this.isStart = res?.status || null
    },
    // 增加获奖机会
    async lotteryAddNumber(type,password='',isShowMsg,isLoading) {
      let param = {
        activityId: this.activityId,
        sourceType: type,
        password
      }
      const res = await this.$http.lotteryAddNumber(param,isLoading,isShowMsg)
      this.addDrawNumber(type)
    },
    // 增加抽奖次数
    addDrawNumber(type) {
      this.lotteryQueryNumber()
      for (let item of this.numList) {
        if (item.sourceType == type) {
          this.drawNumber = this.drawNumber + item.count
        }
      }
    }
  }
}
</script>
<style>
page {
  background: #1D1C2A;
}
</style>
<style lang="scss" scoped>
.bg-img {
  width: 100vw;
  position: absolute;
  z-index: -1;
}

.gift {
  padding-bottom: 90rpx;

  .gift-content {
    flex-direction: column;

    .title {
      margin-top: 115rpx;
      font-size: 80rpx;
      font-family: SourceHanSansCN-Heavy, SourceHanSansCN;
      font-weight: 800;
      color: #FFFFFF;
      text-shadow: 0rpx 8rpx 10rpx rgba(0, 0, 0, 0.28);
    }

    .tip {
      margin-top: 44rpx;
      padding: 16rpx 32rpx;
      background: #CFA56D;
      border-radius: 50rpx;
      justify-content: center;

      font-size: 28rpx;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #FFFFFF;
    }

    .num {
      margin-top: 20rpx;
      padding: 8rpx 49rpx;
      display: inline-block;
      background: #383838;
      opacity: 0.5;

      font-size: 24rpx;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #BFBFBF;
    }
  }
}

// 盲盒
.bag-box {
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 80rpx;

  .bag {
    margin-top: 40rpx;
    flex-direction: column;

    image {
      width: 220rpx;
      height: 220rpx;
    }

    .box-name {
      margin-top: 20rpx;
      padding: 20rpx;
      background: #383767;
      border-radius: 34rpx;

      font-size: 28rpx;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #FFFFFF;
    }
  }
}

.record-card {
  top: 400rpx;
  position: absolute;
  padding: 0rpx 30rpx 0;
  // 奖品池
  .notice {
    width: 100%;
    padding: 0 45rpx;
    margin-bottom: 10rpx;
  }

  .prize-info {
    max-height: 570rpx;
    overflow-y: scroll;
    width: 100%;
    padding: 0 15rpx;
    justify-content: space-between;
    flex-wrap: wrap;

    .prize {
      margin-top: 30rpx;

      image {
        width: 210rpx;
        height: 210rpx;
      }

      .prize-name {
        text-align: center;
        font-size: 28rpx;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #FFFFFF;
      }
    }

    &::after {
      content: '';
      width: 210rpx;
    }
  }

  // 我的奖品
  .my-prize {
    max-height: 530rpx;
    overflow-y: scroll;
    width: 100%;
    padding: 0 30rpx;

    .prize-record {
      justify-content: space-between;
      margin-top: 60rpx;

      .name {
        font-size: 28rpx;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: #FFFFFF;
      }

      .time {
        margin-top: 10rpx;
        font-size: 24rpx;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #B3B3B3;
      }

      .check-btn {
        display: inline-block;
        padding: 16rpx 30rpx;
        background: #676596;
        border-radius: 33rpx;

        font-size: 28rpx;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #FFFFFF;
      }

      &:nth-of-type(1) {
        margin-top: 30rpx;
      }
    }

    .no-prize {
      margin-top: 40rpx;
      margin-bottom: 60rpx;
      text-align: center;
      font-size: 28rpx;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #FFFFFF;
    }
  }

  // 抽奖描述
  .prize-describe {
    width: 100%;
    text-align: left;
    padding: 0 30rpx;
    font-size: 28rpx;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 40rpx;
    .prize-describe-text{
      word-break:break-all;   // 只对英文起作用，以字母作为换行依据
      word-wrap:break-word;     // 只对英文起作用，以单词作为换行依据
    }
  }

  // 获取抽奖次数
  .get-num {
    width: 60%;
    //margin-bottom: 90rpx;
    text-align: center;
    padding: 34rpx 0;
    background: #C8505C;
    border-radius: 50rpx;
    position: fixed;
    bottom: 70rpx;
    left: 50%;
    transform: translateX(-50%);

    font-size: 32rpx;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 0px 2rpx 5rpx rgba(98, 25, 25, 0.5);
  }
}

.settingBox {
  width: 240rpx;
  height: 240rpx;
  position: fixed;
  top: 0%;
  z-index: 1000;
  left: 266rpx;
  //transform: translateX(-50%);
  image {
    width: 100%;
    height: 100%;
  }
}

@keyframes settingBox {
  0% {
    -webkit-transform: scale(0.5);
    top: 0%;
  }
  15% {
    -webkit-transform: scale(0.7);
    top: 30%;
  }
  30% {
    -webkit-transform: scale(1.2);
    top: 50%;
    -webkit-transform: translate(5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
    top: 50%;
  }
  50% {
    transform: translate(0px, 0px);
    top: 50%;
  }
  60% {
    transform: translate(5px, -5px);
    top: 50%;
  }
  70% {
    transform: translate(-5px, 5px);
    top: 50%;
  }
  80% {
    transform: translate(0px, 0px);
    top: 50%;
  }
  90% {
    transform: translate(5px, 5px);
    top: 50%;
  }
  100% {
    transform: translate(-5px, -5px);
    top: 50%;
  }
}

.settingBox {
  // -webkit-animation: settingBox 0.5s ;
  animation: settingBox 2.5s linear forwards;
}

@keyframes beat {
  0% {
    -webkit-transform: scale(1.1);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1.1);
  }
}

@keyframes beat-btn {
  0% {
    -webkit-transform: translateX(-50%) scale(1.1);
  }
  50% {
    -webkit-transform: translateX(-50%) scale(0.8);
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1.1);
  }
}

.beat {
  animation: beat 1.5s linear infinite;
}

.beat-btn {
  animation: beat-btn 1.5s linear infinite;
}

/deep/ .u-news-item {
  width: 100%;
  text-align: center;
}

/deep/ .u-mode-center-box {
  background-color: transparent !important;
}

.share-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
}

/deep/ .u-swiper {
  height: 64rpx !important;
}

.input-box {
  padding: 20rpx;
  background: #F5F5F5;
  border-radius: 14rpx;
}

.popup-input-class {
  font-family: PingFangSC-Regular;
  font-size: 30rpx;
  color: #999999;
  letter-spacing: 0;
  font-weight: 400;
}

.err-tip {
  min-height: 0rpx;
  margin-top: 20rpx;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 30rpx;
  color: #FF4400;
  letter-spacing: 0;
  font-weight: 400;
}
</style>
