<template>
  <view class="fresh-container">
    <view style="position: relative">
      <scroll-view class="navbar" scroll-x="true">
        <view
          class="nabbar-item"
          @click="navClick(index)"
          :class="{ actived: activeIndex == index }"
          v-for="(item, index) in navList"
          :key="index"
        >
          {{ item.classifyName }}
        </view>
        <image
          @click="maskShow = true"
          class="classify-image"
          src="@/static/image/icon_gengduo.png"
        >
        </image>
      </scroll-view>
      <view v-if="maskShow" class="mroe-nav">
        <view class="more-content">
          <view
            @click="handleMoreClick(index)"
            :class="['mroe-item', { 'more-aictive': activeIndex == index }]"
            v-for="(item, index) in navList"
            :key="item.id"
          >
            {{ item.classifyName }}
          </view>
        </view>
        <view class="triangle"></view>
      </view>
    </view>

    <view class="slider u-flex-1">
      <!-- :style="{ height: top + 'px' }" -->
      <scroll-view class="left-contain" scroll-y="true">
        <view class="left-wrap">
          <view
            :class="[
              'left-wrap-item',
              {
                active: index === currentIndex && navStyle == 1,
                'active-1': index == currentIndex && navStyle == 2,
                last: index === currentIndex - 1 && navStyle == 2,
                before: index === currentIndex + 1 && navStyle == 2,
                'active-3': index === currentIndex && navStyle == 3,
              },
            ]"
            v-for="(item, index) in slideList"
            :key="index"
            @click="handleClassifyClick(index, item)"
            >{{ item.classifyName }}</view
          >
        </view>
      </scroll-view>
      <scroll-view scroll-y="true" @scrolltolower="scrolltolower" class="right-container">
        <view v-if="goodsList.length">
          <view
            @click="goTo('/pagesA/shop/goodsDetail?id=' + item.id)"
            class="right-wrap"
            v-for="item in goodsList"
            :key="item.id"
          >
            <image class="goods-picture" :src="imgUrl(item.goodsPicture)" mode="" />
            <view class="content">
              <view>
                <view class="title"> {{ item.goodsName ? item.goodsName : '' }} </view>
                <view class="desc"> 已售{{ item.goodsSales ? item.goodsSales : 0 }}单 </view>
              </view>
              <view class="bottom">
                <view class="price"> ¥{{ switchMoney(item.salePrice) }} </view>
                <view class="number-box" v-if="item.goodsCarCount>0">
                    <view class="number-minus" @click.stop="minus(item.id,item.goodsCarCount)"></view>
                    <u-number-box 
                    :disabled-input="true" 
                    :value="item.goodsCarCount" 
                    :min="item.goodsCarCount"
                    :index="item.id"
                    size="22"
                    ></u-number-box>
                    <view class="number-plus" @click.stop="plus(item.id,item.goodsCarCount)"></view>
                </view>
                <view v-else @click.stop="addCart(item.id,0)" class="bottom-right">
                  <image class="car-picture" src="../../../static/image/list_icon_gouwuche.png" />
                </view>
                
              </view>
            </view>
          </view>
        </view>
        <view v-else class="no-data u-flex u-row-center">
          <image
            src="https://jdz.g1999.com/ghs/20210917/cda98d551fa84d078a5c08a485dfde9a.png"
          ></image>
        </view>
      </scroll-view>
    </view>

    <u-mask :z-index="9999888" @click="maskShow = false" :show="maskShow"></u-mask>
    <goods-spec-popup
      ref="goodsspec"
      @addCart="specSel"
      :goodsSpecIds="goodsSpecIds"
      :goodsId="goodsId"
      :btnState="btnState"
      :specList="specList"
      :cardCount="goodsCartNum"
      :goodsSpecList="goodsSpecList"
      :key="goodsId"
    ></goods-spec-popup>
  </view>
</template>

<script>
import GoodsSpecPopup from '@/components/goodsSpecPopup'
import logisticVue from '../../../pagesA/shop/logistic.vue'
export default {
    components: {
        GoodsSpecPopup,
    },
    props: {
        navTop: {
            type: [String, Number],
            default: 0,
        },
        fatherSelf: {
            type: Object,
            default: null,
        },
        tabbarHeight: {
            type: [String, Number],
            default: 0,
        },
    },
    data() {
        return {
            maskShow: false,
            navList: [],
            slideList: [],
            activeIndex: 0, //头部横向导航的索引
            currentIndex: 0, //左侧导航当前的索引
            moreIndex: 0, //弹窗更多分类的索引
            navStyle: 2,
            goodsList: [],
            goodsSpecList: [], //商品的规格数据//
            specList: [], //规格数据
            page: 1,
            goodsId:'',
            pageSize: 5,
            totalPage: 0,
            btnState:2,
            goodsCartNum:1,
            barFirstTimeMove: true, // 滑块第一次移动时(页面刚生成时)，无需动画，否则给人怪异的感觉
            scrollLeft: 0, // 滚动scroll-view的左边滚动距离
				    tabQueryInfo: [], // 存放对tab菜单查询后的节点信息
            scrollBarLeft: 0, // 移动bar需要通过translateX()移动的距离\
            componentWidth: 0, // 屏幕宽度，单位为px
            id: this.$u.guid(), // id值
            parentLeft: 0, // 父元素(tabs组件)到屏幕左边的距离
            goodsGroupId:'' ,//查询商品的分组的id
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.getGoodsGroupTree()
        })
        
    },
    watch: {
      // 后台获取的（如新闻app顶部的菜单），获取返回需要一定时间，所以list变化时，重新获取布局信息
			navList(n, o) {
				// list变动时，重制内部索引，否则可能导致超出数组边界的情况
				if(n.length !== o.length) this.activeIndex = 0;
				// 用$nextTick等待视图更新完毕后再计算tab的局部信息，否则可能因为tab还没生成就获取，就会有问题
				this.$nextTick(() => {
					this.init();
				});
			},
			activeIndex: {
				immediate: true,
        deep:true,
				handler() {
          
					// 视图更新后再执行移动操作
					this.$nextTick(() => {
            
						this.scrollByIndex();
					})
				}
			},
		},
    computed: {
        getTowTree() {
            if (
                this.navList?.length > 0 &&
                this.activeIndex <= this.navList?.length &&
                this.currentIndex >= 0
            ) {
                this.getGoodsGroupTree()
            }
        },
    },
    methods: {
          // 设置一个init方法，方便多处调用
        async init() {
          // 获取tabs组件的尺寸信息
          let tabRect = await this.$uGetRect('#' + this.id);
          // tabs组件距离屏幕左边的宽度
          this.parentLeft = tabRect.left;
          // tabs组件的宽度
          this.componentWidth = tabRect.width;
          console.log('this.componentWidth: ', this.componentWidth);
          this.getTabRect();
        },
          // 查询tab的布局信息
        getTabRect() {
          // 创建节点查询
          let query = uni.createSelectorQuery().in(this);
          console.log('query: ', query);
          // 历遍所有tab，这里是执行了查询，最终使用exec()会一次性返回查询的数组结果
          for (let i = 0; i < this.navList.length; i++) {
            // 只要size和rect两个参数
            query.select(`#u-tab-item-${i}`).fields({
              size: true,
              rect: true
            });
          }
          // 执行查询，一次性获取多个结果
          query.exec(
            function(res) {
              console.log('re=======s,res',res);
              
              this.tabQueryInfo = res;
              console.log('this.tabQueryInfo: ', this.tabQueryInfo);
              // 初始化滚动条和移动bar的位置
              this.scrollByIndex();
            }.bind(this)
          );
        },
        // 滚动scroll-view，让活动的tab处于屏幕的中间位置
        scrollByIndex() {
          console.log('scrooll   0000');
          console.log('tabQueryInfo   0000',this.tabQueryInfo);
          // 当前活动tab的布局信息，有tab菜单的width和left(为元素左边界到父元素左边界的距离)等信息
          let tabInfo = this.tabQueryInfo[this.activeIndex];
          if (!tabInfo) return;
          // 活动tab的宽度
          let tabWidth = tabInfo.width;
          // 活动item的左边到tabs组件左边的距离，用item的left减去tabs的left
          let offsetLeft = tabInfo.left - this.parentLeft;
          // 将活动的tabs-item移动到屏幕正中间，实际上是对scroll-view的移动
          let scrollLeft = offsetLeft - (this.componentWidth - tabWidth) / 2;
          this.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
          // 当前活动item的中点点到左边的距离减去滑块宽度的一半，即可得到滑块所需的移动距离
          let left = tabInfo.left + tabInfo.width / 2 - this.parentLeft;
          // 计算当前活跃item到组件左边的距离
          this.scrollBarLeft = left - uni.upx2px(this.barWidth) / 2;
          console.log('this.scrollBarLeft: -------------', this.scrollBarLeft);
          // 第一次移动滑块的时候，barFirstTimeMove为true，放到延时中将其设置false
          // 延时是因为scrollBarLeft作用于computed计算时，需要一个过程需，否则导致出错
          if(this.barFirstTimeMove == true) {
            setTimeout(() => {
              this.barFirstTimeMove = false;
            }, 100)
          }
        },      
        plus(e,goodsCarCount){
            this.btnState = 2
            console.log('plues',e);
            console.log('dddddd',goodsCarCount);
            
            
            this.addCart(e,goodsCarCount)
        },
        async minus(id,num){
            this.$toast('该商品请到购物车进行减购')
           
        },
        // 获取产品分类树状
        async getGoodsGroupTree() {
            const parentId = this.navList[this.activeIndex]?.id || ''
            let param = {
                classifyLevel: parentId ? '2' : '1',
                parentId,
                page:1,
                size:100
            }
            const res = await this.$http.goodsClassify(param)
            if (parentId) {
                this.slideList = res?.dataInfo?.records || []
                 this.slideList.sort((a,b)=>{
                  if(a.sort == b.sort){
                    return new Date(a.createDate.replace(/-/g,'/'))-new Date(b.createDate.replace(/-/g,'/'))
                  }else{
                    return a.sort-b.sort
                  }
                  
                })
                this.goodsGroupId = this.slideList[this.currentIndex].id
                this.getGoodsList()
                return
            }
            this.navList = res.dataInfo.records
             this.navList.sort((a,b)=>{
                  
                   if(a.sort == b.sort){
                    return new Date(a.createDate.replace(/-/g,'/'))-new Date(b.createDate.replace(/-/g,'/'))
                  }else{
                    return a.sort-b.sort
                  }
                })
            console.log('res: ', res)
        },
        // 根据分类id查询商品
        async getGoodsList() {
            try {
                
                let params = {
                    current: this.page,
                    size: this.pageSize,
                    goodsClassificationId:this.goodsGroupId,
                    buyerType:this.$globleData?.buyType || ''
                    
                }
                console.log('this.$globleData?.buyType: ', this.$globleData?.buyType);
                let res = await this.$http.goodsList(params)
                if (this.page == 1) {
                    this.goodsList = res?.dataInfo?.records || []
                } else {
                    this.goodsList = [...this.goodsList, ...(res.dataInfo ? res.dataInfo.records : [])]
                }
                if (res.dataInfo.current >=res.dataInfo.pages) {
                    this.finshed = true
                }

                console.log('res: ', res)
            } catch (e) {
                //TODO handle the exception
            }
        },
        // 加入购物车
        async addCart(id,goodsCarCount) {
            console.log('id', id)
            this.goodsCartNum=goodsCarCount?goodsCarCount:1
            const res = await this.$http.goodsSpecQuery({ id })
            this.goodsId = id
            this.specList = res?.dataInfo?.goodsSpecList || []
            this.goodsSpecList = res?.dataInfo?.goodsSpecPropertiesList || []
            this.$store.commit('setSpecification', true)
        },
        async specSel({ ids = [], goodsNum = 1 ,carId=''}) {
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
                goodsAmount: goodsNum,
            }
            if(carId){
              await this.$http.cartUpdate({cartId: carId, goodsSpecIds: id,goodsAmount: goodsNum,})
            }else{
              await this.$http.cartAdd(param)
            }
            
            this.$toast('添加成功')
            this.page = 1
            this.getGoodsGroupTree()
            
            
            this.$store.commit('setSpecification', false)
        },
        navClick(index) {
            this.activeIndex = index
            this.currentIndex = 0
            this.page = 1
             this.finshed = false
        },
        handleClassifyClick(index) {
            this.currentIndex = index
            this.page = 1
             this.finshed = false
        },
        handleMoreClick(index) {
            this.activeIndex = index
            this.currentIndex = 0
            this.maskShow = false
            this.page = 1
            this.finshed = false
        },
        scrolltolower() {
            this.page++
            if (!this.finshed) {
                this.getGoodsList()
            }
        },
    },
}
</script>
<style>
/* page {
  overflow: hidden;
} */
</style>
<style scoped lang="scss">
.fresh-container {
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;

  .mroe-nav {
    position: absolute;
    z-index: 9999889;
    width: 700rpx;
    height: 461rpx;
    left: 50%;
    transform: translateX(-50%);

    .more-content {
      padding: 30rpx;
      width: 700rpx;
      height: 441rpx;
      background: #ffffff;
      border-radius: 14rpx;
      display: grid;
      overflow-y: auto;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-around;
      grid-gap: 14rpx 14rpx;
    }

    .triangle {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      right: 30rpx;
      top: -25rpx;
      z-index: 99999999;
      border-left: 20rpx solid transparent;
      border-right: 20rpx solid transparent;
      border-bottom: 25rpx solid rgba(255, 255, 255, 1);
    }

    .mroe-item {
      width: 204rpx;
      height: 65rpx;
      background: #f4f4f4;
      border-radius: 10rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      &.more-aictive {
        background: #fcf4e6;
        border: 2rpx solid #d1ab88;
        color: #d1ab88;
        font-weight: bold;
      }

      &:last-of-type {
        margin-bottom: 30rpx;
      }
    }
  }

  .navbar {
    width: 100vw;
    white-space: nowrap;

    .classify-image {
      width: 80rpx;
      height: 100rpx;
      background: #ffffff;
      position: fixed;
      right: 0;
      z-index: 99;
    }

    .nabbar-item {
      display: inline-block;
      padding: 30rpx;
      background: rgba(255, 255, 255, 0.5);
      font-size: 28rpx;
      font-weight: 500;
      color: #666666;

      &:last-of-type {
        margin-right: 100rpx;
      }

      &.actived {
        color: #b7905d;
        font-weight: bold;
        position: relative;

        &::after {
          content: '';
          width: 70rpx;
          height: 20rpx;
          background: url(@/static/image/fenlei_xuanzhong.png) no-repeat;
          background-size: cover;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }
      }
    }
  }

  .slider {
    display: flex;
    margin-top: 20rpx;
    overflow: hidden;

    .left-contain {
      width: 180rpx;
      height: 100%;
      display: flex;
      flex-direction: column;
      background: #f6f6f6;
      overflow-y: auto;

      .left-wrap {
        background-color: #fff;

        &-item {
          height: 100rpx;
          line-height: 100rpx;
          text-align: center;
          background-color: #f6f6f6;
          position: relative;

          &.active {
            background: #fff;
            font-weight: 700;
          }

          &.active-1 {
            background: #fff;
            font-weight: 700;
            border-top-right-radius: 20rpx;
          }

          &.active-3 {
            background: #fff;
            font-weight: 700;

            &::before {
              position: absolute;
              top: 50%;
              left: 16rpx;
              transform: translateY(-50%);
              content: '';
              width: 8rpx;
              height: 24rpx;
              background: #191919;
              border-radius: 4rpx;
            }
          }

          &.last {
            border-bottom-right-radius: 20rpx;
          }

          &.before {
            border-top-right-radius: 20rpx;
          }
        }
      }
    }

    .right-container {
      height: 100%;
      flex: 1;
      .no-data {
        width: 100%;
        height: 100%;
        image {
          width: 380rpx;
          height: 380rpx;
        }
      }
      .right-wrap {
        width: 100%;
        height: 222rpx;
        padding: 20rpx 30rpx 42rpx 30rpx;
        display: flex;

        .goods-picture {
          width: 160rpx;
          height: 160rpx;
        }

        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 40rpx;

          .title {
            font-size: 28rpx;
            color: #000000;
            margin-top: 10rpx;
          }

          .desc {
            font-size: 24rpx;
            color: #999999;
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .number-box{
                position: relative;
                .number-minus{
                    width: 52rpx;
                    height: 52rpx;
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 99999999;
                    background: transparent;
                }
                .number-plus{
                    width: 62rpx;
                    height: 62rpx;
                    position: absolute;
                    bottom: -5rpx;
                    z-index: 9999999;
                    left: 144rpx;
                    background: transparent;
                }
            }
            .car-picture {
              width: 50rpx;
              height: 50rpx;
            }
          }
        }
      }
    }
  }
}
</style>
