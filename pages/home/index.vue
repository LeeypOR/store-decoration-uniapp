<template>
  <view>
    <view v-if="pageShow" :style="[setBackGroundColor]" :class="{'fresh-wrap':shopId =='433733032805924864' || shopId =='461887105476845568'}" style="width: 100%;height: 100vh;">
      <!-- #ifdef MP-WEIXIN -->
      <block v-if="showNavbar">
        <u-navbar :border-bottom="false"
                  title=" "
                  :background="{background:'#00000000'}"
                  back-icon-color="#00000000">
        </u-navbar>
      </block>
      <!-- #endif -->
      <config-page :shopDataList="shopDataList" :scrollTop='scrollTop' :userData='userInfo' :isLogin="isLogin"></config-page>
      <view class="frsh-slide u-flex-1" v-if="shopDataList.length ">
        <freshSlide ref="freshSlide" v-if="shopId =='433733032805924864' || shopId =='461887105476845568'" />
      </view>
      <view class="my-mask" catchtouchmove="stopmove" @touchmove.prevent="stopPrevent" v-if="maskShow">
        <view class="mask-wrap">
          <view class="rect">
            <image src="https://jdz.g1999.com/ghs/20211229/0fb74f129f6448a5920cc6982523563a.png" />
            <view class="close-store">
              我们的营业时间：每天08:00-20:00
              欢迎在营业时间内任意点单
            </view>
          </view>
        </view>
      </view>
      <fixed-navigation :fixTime="refresh" :location="1"></fixed-navigation>
      <view v-if="isPopup && (shopId !='433733032805924864' && shopId !='461887105476845568')">
        <Popup ref="advpopup" :refresh="refresh" :location="1"></Popup>
      </view>

      <my-tabbar class="mynabbaar" @change="tabbarChange" v-model="tabCurrent" :bg-color="tabbarInfo.backgroundColor" :list="tabbarInfo.navigationList"></my-tabbar>
    </view>
	<view v-else>
		<splash-screen v-if="(shopId !='433733032805924864' && shopId !='461887105476845568')"  @call="pageShow= true"></splash-screen>
	</view>
  </view>
</template>

<script>
import mixin from "./mixin";
import splashScreen from "../../components/adver/splashScreen";
const { log } = console;
const oneKey = ['scene-video','PictureAdvertisement','scene-zone','my-Fiexd-icon']
import shareMixin from '../shareMixin.js'
import {mapState}  from 'vuex'
import myTabbar  from '@/components/myTabbar'
import freshSlide  from './components/freshSlide'
import popup from "../../components/popup";
import FixedNavigation from "../../components/fixedNavigation";
import configPage from "./components/configPage";
export default {
    mixins:[shareMixin,mixin],
    name: 'Index',
    components: {
        configPage,
        FixedNavigation,
        splashScreen,
        popup,
        myTabbar,
        freshSlide,
    },
    data() {
        return {
            title:'微首页',
            shopDataList: [],
            scrollTop:0,
            isLogin:'',
            userInfo:null,
            headerConfig:{},
            shopId:'',
            refresh:'',
            pageShow:'',
            isPopup:true
        };
    },
    onReady() {
        this.$store.commit('setTabIndex',0)
    },
    onHide(){
       this.isPopup  = false
    },
    onShow(){
        this.getMiniMainDetail();
	      this.userInfo = this.$globleData?.userData || {}
        this.refresh = new Date().getTime().toString()
        this.$refs?.freshSlide?.getGoodsGroupTree()
        this.isPopup = true
    },
    onPageScroll(e){
	    this.scrollTop = e.scrollTop
    },
    computed:{
    //生鲜点打烊弹窗显示
        maskShow(){
            return false
        },
        tabCurrent:{
            get:function (){
                return this.$store.state.tabIndex
            },
        },
        ...mapState({
            tabbarInfo:state=>state.tabbarInfo
        }),
	     //设置背景颜色
        setBackGroundColor(){
            const obj = this.headerConfig?.config?.formData || {}
            if(obj.backgroundColorType == 2){
                return {
                    background: obj?.backgroundColor || '#fff'
                }
            }
            return '#fff'

        },
        showNavbar(){
            const list = this.shopDataList || []
            if(list.length<=0){
                return false
            }
            if( oneKey.includes(list[0].key)){
                return false
            }
            if(list[0].key == 'my-search-box'){
                if(list.length<=1){
                    return false
                }
                if( oneKey.includes(list[1].key)){
                    return false
                }
            }
            return true
        }
    },
    methods: {
        async getMiniMainDetail() {
            let res = await this.$http.getMiniMainDetail({});
            if (res && res.returnCode == 1000) {
                this.shopDataList = JSON.parse(res.dataInfo.pageMsJson).pageList;
                this.headerConfig = JSON.parse(res.dataInfo.pageMsJson)?.headerConfig || {}
            }
        },
      clickHeaderImg(data) {
        this.jumpToPage(data)
      },
      clickSmallImg(data) {
        this.jumpToPage(data)
      },
      getgoodsImg(data) {
        this.jumpToPage(data)
      }
    }
};
</script>

<style lang="scss" scoped>
// 生鲜店铺样式
.fresh-wrap{
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.frsh-slide{
  overflow:hidden
}
.my-mask{
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  z-index: 99999999;
  top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  .mask-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    .rect{
      width: 676rpx;
      height: 610rpx;
      position: relative;
      image{
      width: 100%;
      height: 100%;
      }
      .close-store{
        position: absolute;
        left: 50%;
        top: 200rpx;
        width: 510rpx;
        transform: translateX(-50%);
        font-size: 32rpx;
        color: #191919;
        letter-spacing: 0;
        line-height: 46rpx;
        text-align: center;
      }
    }

  }
}

</style>
<style>
page {
	background-color: #fff;
}
</style>
