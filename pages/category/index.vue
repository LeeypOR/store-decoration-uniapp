<template>
    <view class="category-wrapper">
        <u-navbar :border-bottom="false" :is-back="false" :background="{'background':pageInfo?pageInfo.bgColorValue:''}" :title="pageInfo.pageTitle" title-color="#191919" title-size="36"></u-navbar>
        <view class="category-container">
            <view class="search" v-if="pageData.isShowSearch" @click="goTo('/pagesA/searchPage/index')">
<!--                <image class="search_icon" src="@/static/image/shop/icon_search.png"></image>-->
              <text class="iconfont icon-home_topbar_icon_search"></text>
              <view class="search_text">请输入搜索的商品</view>
            </view>
            <view class="category-list" :style="{'flex-direction':pageData.styleCode == 'TSO'?'column':'row'}">
				<!-- 侧边导航 -->
                <view class="left-contain">
                    <view v-if="pageData.styleCode == 'TST'" class="left-wrap">
                        <view 
							:class="['left-wrap-item',
							{'active':index=== currentIndex && pageData.navStyle ==1,'active-1':index== currentIndex && pageData.navStyle ==2,
							last:index===currentIndex-1 && pageData.navStyle ==2,'active-3':index=== currentIndex && pageData.navStyle ==3}]"
                            v-for="(item,index) in pageData.navList"
                            :key="index"
                            @click="handleNavClick(index,item)"
                        >{{item.title}}</view>
                    </view>
                </view>
				<!-- 竖着导航 -->
				<view class="">
					<scroll-view scroll-x class="scroll-view-x" v-if="pageData.styleCode == 'TSO'" scroll-with-animation>
						<view class="scroll-box" v-for="(item,index) in pageData.navList"
                            :key="index">
							<view @click.stop="clickTab(item,index)" :class="[{'scroll-item':pageData.navStyle ==2 || pageData.navStyle ==3,'scroll-item-1':pageData.navStyle ==1},{'active-1':index=== currentXIndex && pageData.navStyle ==1,
							'active-2':index=== currentXIndex && pageData.navStyle ==2,
							'active-3':index=== currentXIndex && pageData.navStyle ==3}]">
								{{item.title}}
							</view>
							<view v-if="pageData.navStyle ==2 && index=== currentXIndex" class="line"></view>
						</view>
					</scroll-view>
				</view>
			<view v-if="!isSecPage" class="right-wrap" :style="{'width':pageData.styleCode == 'TSO'?'100%':'570rpx'} ">
				<view v-for="(item, index) in shopDataList" :key="index">
				   
				    <search v-if="item.key=='my-search-box'" :dataInfo="item.config.formData" :scrollTop="scrollTop"></search>
				   
				    <navigation v-if="item.key=='my-nav-bar'" :dataInfo="item.config.formData"></navigation>
				    <block v-if="item.key=='PictureAdvertisement'">
				      <view v-if="item.config.formData.type == '1'"><other-goods :goodsImgData="item" @goodsImg="getgoodsImg"></other-goods></view>
				      <view v-if="item.config.formData.type == '2'"><header-swiper :headerData="item" @headerImg="clickHeaderImg"></header-swiper></view>
				      <view v-if="item.config.formData.type == '3'"><small-img :smallImgData="item" @smallImg="clickSmallImg"></small-img></view>
				    </block>
				     <!-- 商品 -->
				     <goods-com v-if="item.key =='my-commodity'" :leftWidth="leftWidth" :catType="pageData.styleCode" :dataInfo="item.config.formData" :pageId="item.id"></goods-com>
				     <!-- 标题 -->
            <titleText v-if="item.key =='my-title-text'" :dataInfo="item.config.formData" />
				    <!-- 视频 -->
				    <videoModule v-if="item.key=='my-video'" :dataInfo="item.config.formData" :videoTag="`video-${index}`"></videoModule>
				    <!--   场景专区   -->
				    <scene-special v-if="item.key=='scene-zone'" :dataInfo="item.config.formData" :backgroundInfo="item.config.formData.backgroundInfo"></scene-special>
				    <scene-video v-if="item.key=='scene-video'" :dataInfo="item.config.formData" :backgroundInfo="item.config.formData.backgroundInfo" :videoTag="`video-${index}`"></scene-video>
				    <coupon v-if="item.key=='my-coupon'" :dataInfo="item.config.formData"></coupon>
				    <!-- 拼团组价 -->
				    <collageGoods v-if="item.key=='my-spell'" :catType="pageData.styleCode" :dataInfo="item.config.formData" /> 
					<!-- 秒杀组件 -->
					<sec-kill v-if="item.key=='my-seckill'" :dataInfo="item.config.formData"></sec-kill>
				    <!--  魔方   -->
				    <magic v-if="item.key == 'my-magic'" :dataInfo="item.config.formData"></magic>
				    <!--  分割线   -->
				    <divide v-if="item.key == 'my-divide'" :dataInfo="item.config.formData"></divide>
				    <!--   公告   -->
				    <myNotice v-if="item.key == 'my-notice'" :dataInfo="item.config.formData"></myNotice>

				    <!--   折扣   -->
				    <discount v-if="item.key=='my-discount'" :dataInfo="item.config.formData"></discount>
				    <!--   公众号组件  -->
				    <official-accounts v-if="item.key=='OfficialAccounts'"></official-accounts>
				    <!--  富文本   -->
				    <parse-text v-if="item.key=='my-rich-text'" :dataInfo="item.config.formData"></parse-text>
				  </view>
          
			</view>
      
			<view v-else style="width: 100%;" class=" u-flex-1">
				<!-- pageType -->
				<classifyCom v-if="secPageData" ref="classifyCom" :leftWidth="leftWidth" :pageType="pageType" :pageData="secPageData"></classifyCom>
			</view>
      
       </view>
            
        </view>
       
         <view v-if="isPopup && exchangeInfo.length">
          <view v-for="(item,index) in exchangeInfo" :key="itme.id">
            <exchangeAdv :exchangeInfo="exchangeInfo" v-if="index==0" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
            <view v-else>
              <exchangeAdv :exchangeInfo="exchangeInfo" v-if="exchageId == index" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
            </view>
          </view>
        </view>
        <fixed-navigation :fixTime="refresh" :location="2"></fixed-navigation>
        <my-tabbar @change="tabbarChange" :bg-color="tabbarInfo.backgroundColor" v-model="tabCurrent" :list="tabbarInfo.navigationList"></my-tabbar>
       
        
    </view>
</template>

<script>
import headerSwiper from '../home/components/headerSwiper.vue';
import smallImg from '../home/components/smallImg.vue';
import otherGoods from '../home/components/otherGoods.vue';
import search from '../home/components/search'
import titleText from '../home/components/titleText/index.vue'
import goodsCom from '../home/components/goods/index.vue'
import navigation from '../home/components/navigation'
import videoModule from '../home/components/video'
import sceneVideo from '../home/components/sceneVideo'
import classifyCom from './classify.vue'
import coupon from "../home/components/coupon";
import sceneSpecial from '../home/components/sceneSpecial'
import collageGoods from '../home/components/collageGoods'
import secKill from '../home/components/secondsKill/index'
import discount from '../home/components/discount/index'
import myNotice from '../home/components/myNotice'
import magic from '../home/components/magic'
import divide from '../home/components/divide'
import parseText from '../home/components/parseText'
import officialAccounts from '../home/components/officialAccounts'
import shareMixin from '../shareMixin.js'
import {mapState}  from 'vuex'
import myTabbar  from '@/components/myTabbar'
import exchangeMixin  from '@/pages/exchangeMixin'
import exchangeAdv from "@/components/exchangeAdv";
import FixedNavigation from "../../components/fixedNavigation";
export default {
    mixins:[shareMixin,exchangeMixin],
    components:{
        headerSwiper,
        smallImg,
        titleText,
        otherGoods,
        search,
        goodsCom,
        navigation,
        videoModule,
        sceneVideo,
        classifyCom,
        coupon,
        sceneSpecial,
        collageGoods,
        secKill,
        discount,
        myNotice,
        magic,
        divide,
        parseText,
        officialAccounts,
        myTabbar,
        exchangeAdv,
        FixedNavigation
    },
    data(){
        return {
            title:'分类',
            currentIndex:0,
            groupTree:[],
            packetContentList:[],            // 分组内容列表
            packetContentIndex:0,           // 分组内容索引
            goodsList:[],                   // 商品数据
            packetContent:[],               // 分组内容
            pageData:null ,           //微页面的数据
            secPageData:null,        //微页面的二级数据
            isSecPage:false,   //是否存在二级导航的微页面
            pageInfo:null, //头部数据
            pageId:'',//配置微页面的id
            shopDataList:[],//跳转微页面的数据,
            currentXIndex:0 ,//横向导航索引
            leftWidth:0,//侧边栏宽度
            isPopup:true,
            refresh:'',
        }
    },
     onHide(){
      this.isPopup  = false
       
    },
    onShow(){
         this.isPopup = true
        if(!this.pageData){
            this.getCatInfo()
        }
         this.refresh = new Date().getTime().toString()
	      
    },
   
    onReady(){
    const query = uni.createSelectorQuery().in(this);
    query.select('.left-contain').boundingClientRect(data => {
            this.leftWidth = data.width
    }).exec();
    },
    computed:{
        ...mapState({
            tabbarInfo:state=>state.tabbarInfo
        }),
        tabCurrent:{
            get:function (){
                return this.$store.state.tabIndex
            },
            set:function(value){
                // this.$store.commit('setTabIndex',value)
            }
        },
        getPacketContentList(){
            if(this.groupTree){
                this.packetContentList = this.groupTree[this.currentIndex]?.children || []
                this.packetContentIndex = 0
                this.goodsList = []
            }
            return this.packetContentList || []
        },
        getPacketContent(){
            if(this.packetContentList && this.packetContentList.length > 0){
                this.packetContent = this.packetContentList[this.packetContentIndex]
                this.getGoodsList()
            }
            return this.packetContent || {}
        },
        pageType(){
            if(this.pageData){
			
			
                if(this.pageData.styleCode == 'TST'){
                    return 'TST'
                }else{
                    if(this.secPageData){
                        this.secPageData.styleCode
                    }else{
                        return this.pageData.styleCode
                    }
				
                }
            }
		
        }
    },
    methods: {
     
      
	  async getCatInfo(){
		  let res = await this.$http.getCatList({
                pageId:'',
                isNavigation:1
            })
	      if(res && res.returnCode == 1000 && res.dataInfo){
			 this.pageData = JSON.parse(res.dataInfo.pageMsJson)
             
			 this.pageInfo = res.dataInfo.pageInfo
			 this.pageId = this.pageData.navList[0].jumpTargetValue 
			 
			
                if(this.pageData.navList[0].jumpTargetType == "CLASSIFY"){
                    this.isSecPage = true
                    this.getSecMinPage(this.pageData.navList[0].jumpTargetValue,0)
                }
                if(this.pageData.navList[0].jumpTargetType == "MSPAGE"){
                    this.isSecPage = false
                    this.getMiniMainDetail(this.pageData.navList[0].jumpTargetValue)
                }
			 
			 
		  }
		  
	  },
        //   获取非导航的分类微页面
        async getSecMinPage(id='',index){
            let res = await this.$http.getCatList({
                pageId:id,
                isNavigation:0
            })
            if(res && res.returnCode == 1000 && res.dataInfo){
                this.secPageData = JSON.parse(res.dataInfo.pageMsJson)
            }else{
                this.secPageData = null
            }
       
        },
      //   获取微页的数据
        async getMiniMainDetail(id) {
            let res = await this.$http.getMicPaege({id});
            if (res && res.returnCode == 1000) {
              this.shopDataList = JSON.parse(res.dataInfo.pageMsJson).pageList;
              console.log('this.shopDataList: ', this.shopDataList);
              
            }
      
        },
        // 获取产品分类树状
        async getGoodsGroupTree() {
            const res = await this.$http.goodsGroupTree()
            this.groupTree = res?.dataInfo || []
        },
        // 横向导航点击事件
        async clickTab(item,index){
		
            // this.shopDataList =[]
            // this.secPageData ={}
            this.currentXIndex = index
            if(item.jumpTargetType == "CLASSIFY"){
                this.isSecPage = true
                await this.getSecMinPage(item.jumpTargetValue,0)
            
                this.$nextTick(()=>{
                    this.$refs.classifyCom.getMiniMainDetail(this.secPageData.navList[0].jumpTargetValue)
                    this.$refs.classifyCom.currentIndex = 0
                    this.$refs.classifyCom.currentXIndex = 0
                })
            }
            if(item.jumpTargetType == "MSPAGE"){
                this.isSecPage = false
                this.getMiniMainDetail(item.jumpTargetValue)
            }
          
		
        },	
        // 点击左侧菜单栏
        async handleNavClick(index,item) {
          console.log('in9999',index,item);
          
            this.currentIndex = index
        
            if(item.jumpTargetType == "CLASSIFY"){
                this.isSecPage = true
                await this.getSecMinPage(item.jumpTargetValue,0)
            
                this.$nextTick(()=>{
                    this.$refs.classifyCom.getMiniMainDetail(this.secPageData.navList[0].jumpTargetValue)
                    this.$refs.classifyCom.currentIndex = 0
                    this.$refs.classifyCom.currentXIndex = 0
                })
            }
            if(item.jumpTargetType == "MSPAGE"){
                this.isSecPage = false
                this.getMiniMainDetail(item.jumpTargetValue)
            }
        },
        // 点击内部的分类选项
        packetContentClick(index){
            this.packetContentIndex = index
        },
        // 商品列表接口
        async getGoodsList(){
            if(!this.packetContent.id){
                return
            }
            let buyerType =''
            if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){
                buyerType = this.$globleData?.buyType || ''
            }
            const param = {
                // goodsPeiceSort
                // goodsName
                current:1,
                size:999,
                goodsGroupId:this.packetContent.id,
                buyerType
            }
            const {dataInfo:res} = await this.$http.goodsList(param)
            this.goodsList = res?.records || []
        }
    }
}
</script>

<style scoped lang="scss">
.active-1+.left-wrap-item{	
    border-top-right-radius: 20rpx;

}
.search_text{
  color: #cccccc;
  font-weight: 400;
  font-size: 26rpx;
}
.category-wrapper{
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    .category-container{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .search{
            width: 690rpx;
            height: 60rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30rpx;
            background: #f8f8f8;
            margin: 20rpx auto 20rpx;
            image{
                width: 36rpx;
                height: 36rpx;
                margin-right: 6rpx;
            }
        }
        .category-list{
            flex: 1;
            display: flex;
            height: 0;
            //overflow: hidden;
            .left-contain{
                width: 180rpx;
                //height: 100%;
                display: flex;
                flex-direction: column;
                background: #f6f6f6;
                overflow-y: auto;
                .left-wrap{
                    background-color: #fff;
                    &-item{
                        height: 100rpx;
                        line-height: 100rpx;
                        text-align: center;
                        background-color: #f6f6f6;
						position: relative;
						
                        &.active{
                            background: #fff;
                            font-weight: 700;
                        }
						&.active-1{
							background: #fff;
							font-weight: 700;
							border-top-right-radius: 20rpx;
						}
						&.active-3{
						    background: #fff;
						    font-weight: 700;
							&::before{
							  position: absolute;
							  top:50%;
							  left:16rpx;
							  transform: translateY(-50%);
							  content: '';
							  width: 8rpx;
							  height: 24rpx;
							  background: #191919;
							  border-radius: 4rpx;
							}
						}
                        &.last{
                            border-bottom-right-radius: 20rpx;
                        }
                    }
                }		
				
            }
		.scroll-view-x{
			width: 100%;
			white-space: nowrap;
			padding: 0 30rpx;
			 .scroll-box{
			 	display: inline-block;
				margin-right: 30rpx;
				padding: 30rpx 0 38rpx 0;
				position: relative;
				.line{
					position: absolute;
					bottom: 20rpx;
					width: 36rpx;
					height: 6rpx;
					left: 50%;
					transform: translateX(-50%);
					background:#D1B085;
					z-index: 10;
					border-radius: 4rpx;
				}
				.scroll-item-1{
					padding: 14rpx 40rpx;
					background: #F5F5F5;
					border-radius: 38rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #191919;
					&.active-1{
						background: #D1B085;
						color: #FFFFFF;
					}
				}
			 	.scroll-item{
			 		font-size: 28rpx;
			 		font-weight: 400;
			 		color: #666666;
					
					&.active-3,&.active-2{
						font-size: 32rpx;
						font-weight: 600;
						color: #191919;
					}
			 	}
			 }
		}
		
          .right-wrap {
            display: flex;
            flex: 1;
            flex-direction: column;
			overflow-y: auto;
			overflow-x: hidden;
            .top-image {
              padding: 0 30rpx;
              width: 510rpx;
              height: 200rpx;
              border-radius: 14rpx;
            }
            .goods-list-box {
              flex: 1;
              overflow: auto;
              flex-direction: column;
              margin-top: 35rpx;
              padding: 0 30rpx;
              align-items: flex-start;
              .box-title{
                margin-bottom: 20rpx;
                font-size: 28rpx;
                color: #201F1F;
                font-weight: 600;
              }
              .goods-card-list{
                height: 100%;
                overflow-y: scroll;
                .goods-card{
                  width: 100%;
                  image{
                    width: 160rpx;
                    height: 160rpx;
                  }
                }

              }

            }
          }
        }
    }
}

.classify-card {
  //padding-left: 30rpx;
  margin-top: 25rpx;
  width: 0;
  overflow-x: scroll;
  white-space: nowrap;
  text {
    margin-right: 20rpx;
    display: inline-block;
    padding: 10rpx 30rpx;
    background: #f5f5f5;
    border-radius: 35rpx;
    &.active{
      background: rgba(236,194,69,0.15);
      border: 2rpx solid #D1B085;
      color: #E8B759;
    }
  }
}
.goods-item{
  //padding: 20rpx 30rpx;
  padding: 20rpx 0;
  background: #ffffff;
  image{
    width:160rpx;
    height: 160rpx;
    margin-right: 30rpx;
  }
  .item-right-center{
    flex: 1;
    height: 160rpx;
    flex-direction: column;
    justify-content: space-between;
    .top-center{
      .title{
        font-size: 24rpx;
        color: #000000;
        font-weight: 400;
      }
      .tip{
        margin-top: 6rpx;
        width: 320rpx;
        font-size: 20rpx;
        color: #999999;
        font-weight: 400;
      }
    }
    .bottom-center{
      width: 100%;
      justify-content: space-between;
      .goods-pic{
        font-size: 34rpx;
        color: #E1544A;
        font-weight: 600;
      }
    }
  }
}
</style>
<style>
 page{
    background: #ffffff;
}
</style>