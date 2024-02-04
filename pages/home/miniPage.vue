<template>
  <view>
     <u-navbar :is-back="isBack" z-index="999999999999999" :border-bottom="false" :title="navabarTitle" title-color="#191919" title-size="36" :custom-back="backPage" back-icon-color="#191919"></u-navbar>
	<view class="g-mini-page" :style="[setBackGroundColor]" style="width: 100%;height: 100%">
    <config-page :shopDataList="shopDataList"  :userData='userInfo'></config-page>
    <view v-if="isPopup">
      <view v-for="(item,index) in exchangeInfo">
        <exchangeAdv v-if="index==0" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
        <view v-else>
          <exchangeAdv v-if="exchageId == index" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
        </view>
      </view>
    </view>
     <my-tabbar v-if="tabbarShow" v-model="tabCurrent" @change="tabbarChange" :bg-color="tabbarInfo.backgroundColor" :list="tabbarInfo.navigationList"></my-tabbar>
	</view>
  </view>
</template>

<script>
const { log } = console;
import exchangeAdv from '../../components/exchangeAdv/index.vue'
import exchangeMixin from "../exchangeMixin";
import mixin from "./mixin";
import shareMixin from "../shareMixin";
import configPage from "./components/configPage";
import {mapState}  from 'vuex'
import myTabbar  from '@/components/myTabbar'
export default {
  mixins:[shareMixin,mixin,exchangeMixin],
	components: {
    exchangeAdv,
    myTabbar,
    configPage
	},
	data() {
		return {
      title:'微页面',
			shopDataList: [],
      userInfo:'',
      headerConfig:{},
      miniPageId:'',
      tabbarShow:'',
      navabarTitle:'',
      id:'',
      scene:'',
      isPopup: true
		};
	},
	onReady() {

	},
	onLoad(option) {
		log(option,'微页id')
    this.id = option?.id ||''
    this.scene = option?.scene || ''
    this.tabbarShow = option?.tabbar || ''
    this.miniPageId = this.id

	},
  onHide(){
    this.isPopup = false
  },
  onShow(){
    this.userInfo = this.$globleData?.userData || {}
    if (this.id) {
			this.getMiniDetail(this.id)
		}
    if(this.scene){
      this.getSceneInfo(this.scene)
    }
  },
  computed: {
     // 获取自定义tabbar的信息
     ...mapState({
      tabbarInfo:state=>state.tabbarInfo
    }),
    tabCurrent:{
      get:function (){
        return this.$store.state.tabIndex
      },
      set:function(value){
         this.$store.commit('setTabIndex',value)
      }
    },
    isBack(){
       if(this.tabbarShow){
          return false
       }else{
         return true
       }
    },
    //设置背景颜色
    setBackGroundColor() {
      const obj = this.headerConfig?.config?.formData || {}
      if (obj.backgroundColorType == 2) {
        return {
          background: obj?.backgroundColor || '#fff'
        }
      }
      return '#fff'

    },
  },
	methods: {
		async getMiniDetail(id) {
			let res = await this.$http.getMicPaege({id:id});
			if (res && res.returnCode == 1000) {
				this.shopDataList = JSON.parse(res.dataInfo.pageMsJson).pageList;
				uni.setNavigationBarTitle({
				    title: JSON.parse(res.dataInfo.pageMsJson).headerConfig.config.formData.title
				});
        this.navabarTitle =JSON.parse(res.dataInfo.pageMsJson).headerConfig.config.formData.title
        this.title = this.navabarTitle
        this.headerConfig = JSON.parse(res.dataInfo.pageMsJson)?.headerConfig || {}
			}
		},
    async getSceneInfo(scene){
      try{
        let res = await this.$http.getMiniScene({id:scene})
        if(res.dataInfo?.pageId){
          this.miniPageId = res.dataInfo?.pageId
           await this.getMiniDetail(res.dataInfo?.pageId)
        }
        if(!res.dataInfo && res.returnCode != 1003){
          this.miniPageId = scene
          this.getMiniDetail(scene)
        }
        console.log('res:抬眼吗 ', res, this.miniPageId );
      }catch(e){
        //TODO handle the exception
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
.g-mini-page{
  padding-bottom: iphone-bottom(10rpx);
}
</style>
<style>
page {
	background-color: #fff;
}
</style>
