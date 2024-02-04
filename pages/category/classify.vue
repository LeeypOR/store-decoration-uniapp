<template>
	<!-- :style="{'height':`${top}px`}" -->
	<view class="category-wrapper-y" >
	<view class="category-container">
	    <view class="category-list" :style="{'flex-direction':newPageData.styleCode == 'TSO'?'column':'row'}">
			<!-- 侧边导航 -->
	        <view class="left-contain" v-if="newPageData.styleCode == 'TST'">
	            <view class="left-wrap">
	                <view
						:class="['left-wrap-item',
						{'active':index=== currentIndex && newPageData.navStyle ==1,'active-1':index== currentIndex && newPageData.navStyle ==2,
						last:index===currentIndex-1 && newPageData.navStyle ==2,'active-3':index=== currentIndex && newPageData.navStyle ==3}]"
	                    v-for="(item,index) in newPageData.navList"
	                    :key="index"
	                    @click="handleClassifyClick(index,item)"
	                >{{item.title}}</view>
	            </view>
	        </view>
			<view class="" >
				<scroll-view scroll-x class="scroll-view-x"  v-if="newPageData.styleCode == 'TSO'"  scroll-with-animation>
					<view class="scroll-box"   v-for="(item,index) in newPageData.navList"
	                    :key="index">
						<view @click.prevent="clickTabClassify(item,index)" :class="[{'scroll-item':newPageData.navStyle ==2 || newPageData.navStyle ==3,'scroll-item-1':newPageData.navStyle ==1},{'active-1':index=== currentXIndex && newPageData.navStyle ==1,
						'active-2':index=== currentXIndex && newPageData.navStyle ==2,
						'active-3':index=== currentXIndex && newPageData.navStyle ==3}]" >
							{{item.title}}
						</view>
						<view v-if="newPageData.navStyle ==2 && index=== currentXIndex" class="line"></view>
					</view>
				</scroll-view>
			</view>
			<!-- {{newPageData.styleCode }} -->
		<view class="right-wrap"  :style="{'width':newPageData.styleCode == 'TSO'?'100%':'570rpx'} ">
			<view   v-for="(item, index) in shopDataList" :key="index">

			    <search v-if="item.key=='my-search-box'" :dataInfo="item.config.formData" :scrollTop="scrollTop"></search>

			    <navigation v-if="item.key=='my-nav-bar'" :dataInfo="item.config.formData"></navigation>
			    <block v-if="item.key=='PictureAdvertisement'">
			      <view v-if="item.config.formData.type == '1'"><other-goods :goodsImgData="item" @goodsImg="getgoodsImg"></other-goods></view>
			      <view v-if="item.config.formData.type == '2'"><header-swiper :headerData="item" @headerImg="clickHeaderImg"></header-swiper></view>
			      <view v-if="item.config.formData.type == '3'"><small-img :smallImgData="item" @smallImg="clickSmallImg"></small-img></view>
			    </block>
			    <goods-com v-if="item.key =='my-commodity'" :leftWidth="leftWidth" :catType="navType" :dataInfo="item.config.formData" :pageId="item.id"></goods-com>

                <titleText v-if ="item.key =='my-title-text'"  :dataInfo="item.config.formData" />
			    <!--   场景专区   -->
			    <scene-special class="page-scale" v-if="item.key=='scene-zone'" :dataInfo="item.config.formData" :backgroundInfo="item.config.formData.backgroundInfo"></scene-special>
			    <videoModule v-if="item.key=='my-video'" :dataInfo="item.config.formData" :videoTag="`video-${index}`"></videoModule>

			    <scene-video class="page-scale" :isZoom="true" v-if="item.key=='scene-video'" :dataInfo="item.config.formData" :backgroundInfo="item.config.formData.backgroundInfo" :videoTag="`video-${index}`"></scene-video>
			    <coupon v-if="item.key=='my-coupon'" :isZoom="true" :dataInfo="item.config.formData"></coupon>
			    <!-- 拼团组价 -->
			    <collageGoods   v-if="item.key=='my-spell'" :catType="navType" :dataInfo="item.config.formData" />
			    <!-- 秒杀组件 -->
			    <sec-kill v-if="item.key=='my-seckill'"  :dataInfo="item.config.formData"></sec-kill>
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
			  </view>
		</view>
	    </view>
	</view>
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
	export default{
		components:{
			headerSwiper,
			smallImg,
			titleText,
			otherGoods,
			search,
			goodsCom,
			navigation,
			videoModule,
			coupon,
			sceneVideo,
			sceneSpecial,
			collageGoods,
			secKill,
			discount,
			myNotice,
			magic,
			divide,
			parseText,
			officialAccounts
		},
		props:{
			pageData:{
				type:Object,
				default:null,
			},

			pageType:{
				type:String,
				default:'',
			},
			leftWidth:{
				type:Number,
				default:0,
			}
		},
		computed:{
			// navType(){
			// 	if(this.pageType && this.pageType == 'TST'){
			// 		return 'TST'
			// 	}else{
			// 		return this.newPageData.styleCode
			// 	}
			// }
		},
		watch:{
			pageData:{
				handler(val, olVal) {
				    this.newPageData = val


				},
				 deep: true,
				 immediate:true
			}
		},
		onReady(){

		  const query = uni.createSelectorQuery().in(this);
		  query.select('.category-wrapper-y').boundingClientRect(data => {

		  	this.top = getApp().globalData.windowHeight - data.top //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）


		  }).exec()


		},
		created(){

			 this.getMiniMainDetail(this.pageData.navList[0].jumpTargetValue)
			 if(this.pageType && this.pageType == 'TST'){
			 		this.navType= 'TST'
			 	}else{
			 		this.navType= this.newPageData.styleCode
			 	}

			// this.shopDataList = this.pageData.navList[0].pageList
		},

		data(){
			return{
				currentXIndex:0,
				shopDataList:[],
				top:0,
				currentIndex:0,
				newPageData:[],
				navType:'',
			}
		},
		methods:{
			// 横向导航点击事件
			clickTabClassify(item,index){
				this.currentXIndex = index
        this.getMiniMainDetail(item.jumpTargetValue)
				

			},
			// 点击左侧菜单栏
			handleClassifyClick(index,item) {

			  this.currentIndex = index
		
			  this.getMiniMainDetail(item.jumpTargetValue)
			},
      //   获取微页的数据
	        async getMiniMainDetail(id) {
            let res = await this.$http.getMicPaege({id});
            if (res && res.returnCode == 1000) {
              this.shopDataList = JSON.parse(res.dataInfo.pageMsJson).pageList;
            }

	      },
		}
	}
</script>

<style lang="scss" scoped>
	.category-wrapper-y{
	    width: 100%;
		height: 100%;
	    position: relative;
	    display: flex;
	    flex-direction: column;
	    .category-container{
	        flex: 1;
	        display: flex;
	        flex-direction: column;
	        overflow: hidden;
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
	        }
	    }
	}
	.right-wrap {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
    padding: 0 8rpx;
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
.page-scale{
  transform: scale(.7) translateY(-15%) translateX(15%);
}
</style>
