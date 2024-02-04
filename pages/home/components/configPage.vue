<template>
  <view>
    <view class="fall-com" style="width:100vw" v-for="(item, index) in shopDataList" :key="index">
      <!-- 商品搜索 -->
      <search v-if="item.key=='my-search-box'" :location="index" :dataInfo="item.config.formData"
              :scrollTop="scrollTop"></search>
      <!-- 图文导航 -->
      <navigation v-if="item.key=='my-nav-bar'" :dataInfo="item.config.formData"></navigation>
      <block v-if="item.key=='PictureAdvertisement'">
        <view v-if="item.config.formData.type == '1'">
          <other-goods :goodsImgData="item" @goodsImg="getGoodsImg"></other-goods>
        </view>
        <view v-if="item.config.formData.type == '2'">
          <header-swiper :headerData="item" @headerImg="clickHeaderImg"></header-swiper>
        </view>
        <view v-if="item.config.formData.type == '3'">
          <small-img :smallImgData="item" @smallImg="clickSmallImg"></small-img>
        </view>
      </block>
      <!-- 商品 -->
      <goods-com v-if="item.key =='my-commodity'" :dataInfo="item.config.formData" :pageId="item.id"></goods-com>
      <!--  标题文本    -->
      <titleText v-if="item.key =='my-title-text'" :dataInfo="item.config.formData" />
      <!--   视频    -->
      <videoModule v-if="item.key=='my-video'" :dataInfo="item.config.formData"
                   :videoTag="`video-${index}`"></videoModule>
      <!--   场景专区   -->
      <scene-special v-if="item.key=='scene-zone'" :dataInfo="item.config.formData"
                     :backgroundInfo="item.config.formData.backgroundInfo"></scene-special>
      <!--   场景视频   -->
      <scene-video v-if="item.key=='scene-video'" :dataInfo="item.config.formData"
                   :backgroundInfo="item.config.formData.backgroundInfo" :videoTag="`video-${index}`"></scene-video>
      <!--   优惠券组件   -->
      <coupon v-if="item.key=='my-coupon'" :dataInfo="item.config.formData"></coupon>
      <!-- 拼团组价 -->
      <collageGoods v-if="item.key=='my-spell'" :dataInfo="item.config.formData" />
      <!--  魔方   -->
      <magic v-if="item.key == 'my-magic'" :dataInfo="item.config.formData"></magic>
      <!--  分割线   -->
      <divide v-if="item.key == 'my-divide'" :dataInfo="item.config.formData"></divide>
      <!--   公告   -->
      <myNotice v-if="item.key == 'my-notice'" :dataInfo="item.config.formData"></myNotice>
      <!-- 秒杀组件 -->
      <sec-kill v-if="item.key=='my-seckill'" :dataInfo="item.config.formData"></sec-kill>
      <!--   折扣   -->
      <discount v-if="item.key=='my-discount'" :dataInfo="item.config.formData"></discount>
      <!--   公众号组件  -->
      <!-- #ifdef MP-WEIXIN -->
      <official-accounts v-if="item.key=='OfficialAccounts'"></official-accounts>
      <!-- #endif -->
      <!--  富文本   -->
      <parse-text v-if="item.key=='my-rich-text'" :dataInfo="item.config.formData"></parse-text>
      <!-- 悬浮组件 -->
      <suspension v-if="item.key=='my-Fiexd-icon'" :isLogin="isLogin" :userData="userData"
                  :dataInfo="item.config.formData"></suspension>
      <!--   内容咨询   -->
      <my-article v-if="item.key=='my-article'" :dataInfo="item.config.formData"></my-article>
      <!-- 限时秒杀 -->
      <limit-kill v-if="item.key=='limit-seckill'" :dataInfo="item.config.formData"></limit-kill>
      <!-- 直播 -->
      <liveBroadcast v-if="item.key=='my-live'" :dataInfo="item.config.formData" />
      <!-- 积分商城 -->
      <pointsMall v-if="item.key=='IntegralMall'" :dataInfo="item.config.formData" />
    </view>
  </view>
</template>

<script>
import myNotice from "./myNotice";
import officialAccounts from "./officialAccounts";
import parseText from "./parseText";
import divide from "./divide";
import coupon from "./coupon";
import myArticle from "./myArticle";
import headerSwiper from "./headerSwiper";
import smallImg from "./smallImg";
import titleText from "./titleText";
import otherGoods from "./otherGoods";
import search from "./search";
import goodsCom from "./goods";
import limitKill from "./limitedKill";
import navigation from "./navigation";
import videoModule from "./video";
import sceneVideo from "./sceneVideo";
import sceneSpecial from "./sceneSpecial";
import collageGoods from "./collageGoods";
import magic from "./magic";
import secKill from "./secondsKill";
import discount from "./discount";
import suspension from "./suspension";
import liveBroadcast from "./liveBroadcast";
import pointsMall from "./pointsMall";


export default {
  props:{
    shopDataList: {
      type: Array ,
      default: () => []
    },
    scrollTop:{
      type:[Number,String],
      default: 0
    },
    isLogin:{
      type:Boolean,
      default:false
    },
    userData:{
      type:[Object,String],
      default: null
    }
  },
  name: "configPage",
  components: {
    myNotice,
    officialAccounts,
    parseText,
    divide,
    coupon,
    myArticle,
    headerSwiper,
    smallImg,
    titleText,
    otherGoods,
    search,
    goodsCom,
    limitKill,
    navigation,
    videoModule,
    sceneVideo,
    sceneSpecial,
    collageGoods,
    magic,
    secKill,
    discount,
    suspension,
    liveBroadcast,
    pointsMall,
  },
  methods: {
    clickHeaderImg(data) {
      this.jumpToPage(data)
    },
    clickSmallImg(data) {
      this.jumpToPage(data)
    },
    getGoodsImg(data) {
      this.jumpToPage(data)
    }
  }

}
</script>

<style scoped>

</style>
