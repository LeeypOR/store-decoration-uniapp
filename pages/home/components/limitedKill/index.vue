<template>
  <view class="limit" :style="{ padding: `0px  ${dataInfo.pagePadding*pxToRpxScale}rpx` }">
    <view class="box" :style="[bgStyle]">
      <image class="bg-img" mode="aspectFill" :src="dataInfo.backgroundInfo.imageUrl" :style="[bgStyle]"></image>
      <view class="background-wrap">
        <view class="content_wrap" :style="[textTopHeight]" @click="goToUrl(dataInfo.backgroundInfo)">
          <view class="title" :style="[activeTitleStyle]" v-if="dataInfo.activeTitleShow">
            {{ dataInfo.activeTitle || '新品上市' }}
          </view>
          <view class="desc" :style="[activeDescStyle]" v-if="dataInfo.activeDescShow">
            {{ dataInfo.description || '新品发售 抢先体验' }}
          </view>
          <view class="time" :style="[activeTimeStyle]" v-if="dataInfo.showActiveTime">{{ activeTimeString }}</view>
        </view>
        <view class="product_wrap" :style="[shopBottomHeight]">
          <view class="product-activity" v-for="(item,index) in timeList" :key="index">
            <block v-if="dataInfo.productList[0].activityType==0">
              <view
                  class="product-item"
                  :class="[
                        {'is-borderRadius':dataInfo.angleType==1},
                        imageClassName,
                        {'disable':item.activityStatu==1||item.activityStatu==3 || itm.totalRemainStock==0}]"

                  v-for="(itm,inx) in item.seckillGoodsResponses"
                  :key="inx"
                  :style="{marginRight:`${dataInfo.imagePadding*pxToRpxScale}rpx`}"
                  @click="goToDetail(itm.id,item.activityId,'MS',itm)"
              >
                <view class="img-wrap" style="background: #fff">
                  <view class="mask" v-if="itm.totalRemainStock==0&&item.activityStatu==2">已抢光</view>
                  <view class="mask" v-if="item.activityStatu==1">未开始</view>
                  <view class="mask" v-if="item.activityStatu==3">已结束</view>
                  <image mode="aspectFit" :src="itm.goodsPicture"></image>
                </view>

                <view class="product-info"
                      :class="{
                              'bold':dataInfo.titleThickness=='bold',
                              'info-flex':dataInfo.textAlign=='middle'
                          }"
                      :style="[productInfoStyle]"
                >
                  <view class="name u-line-1" v-if="dataInfo.shopName">{{ itm.goodsName }}</view>
                  <view class="info-contain" :class="{'contain-flex':dataInfo.listStyle ==1}">
                    <view class="price-wrapper">
                      <view class="killPrice" v-if="dataInfo.showShopPrice">￥{{ itm.seckillPrice / 100 }}</view>
                      <view class="oldPrice" v-if="dataInfo.showOldPrice">￥{{ itm.salePrice / 100 }}</view>
                    </view>
                    <view class="shop-btn" v-if="dataInfo.shopBuyBtn"
                          :style="{marginLeft: dataInfo.listStyle === '1' ? '40rpx' :''}"
                    >
                      <text v-if="dataInfo.buyBtnStyle==1" class="iconfont icon-app_icon_gouwuche"></text>
                      <view class="btn" v-else>马上抢</view>
                    </view>
                  </view>
                </view>
              </view>
            </block>
            <block v-else>
              <view
                  class="product-item"
                  :class="[
                          {'is-borderRadius':dataInfo.angleType==1},
                          imageClassName,
                          {'disable':item.activityStatu==1||item.activityStatu==3 || itm.totalRemainStock==0}]"

                  v-for="(itm,inx) in item.discountGoodsResponses"
                  :key="inx"
                  :style="{marginRight:`${dataInfo.imagePadding*pxToRpxScale}rpx`}"
                  @click.self="goToDetail(itm.id,item.activityId,'ZK',itm)"
              >
                <view class="img-wrap" style="background: #fff">
                  <view class="mask" v-if="itm.totalRemainStock==0&&item.activityStatu==2">已抢光</view>
                  <view class="mask" v-if="item.activityStatu==1">未开始</view>
                  <view class="mask" v-if="item.activityStatu==3">已结束</view>
                  <image mode="aspectFit" :src="itm.goodsPicture"></image>
                </view>

                <view class="product-info"
                      :class="{
                              'bold':dataInfo.titleThickness=='bold',
                              'info-flex':dataInfo.textAlign=='middle'
                          }"
                      :style="[productInfoStyle]"
                >
                  <view class="name u-line-1" v-if="dataInfo.shopName">{{ itm.goodsName }}</view>
                  <view class="info-contain" :class="{'contain-flex':dataInfo.listStyle ==1}">
                    <view class="price-wrapper">
                      <view class="killPrice" v-if="dataInfo.showShopPrice">￥{{ itm.discountPrice / 100 }}</view>
                      <view class="oldPrice" v-if="dataInfo.showOldPrice">￥{{ itm.salePrice / 100 }}</view>
                    </view>
                    <view class="shop-btn" v-if="dataInfo.shopBuyBtn"
                          :style="{marginLeft: dataInfo.listStyle === '1' ? '40rpx' :''}"
                    >
                      <text v-if="dataInfo.buyBtnStyle==1" class="iconfont icon-app_icon_gouwuche"></text>
                      <view class="btn" v-else>马上抢</view>
                    </view>
                  </view>
                </view>
              </view>
            </block>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from '../../mixin.js'
export default {
    mixins:[mixin],
    props: {
        dataInfo:{
            type:Object,
            default:null,
        },
    },
    data() {
        return {
            moduleName:'限时秒杀',
            pxToRpxScale: 0,
            timer: null,
            activeTimeString: '',
            currentActivity:0,
            timeList:[]

        }
    },
  computed: {
    // 文字距离顶部的距离
    textTopHeight(){
      let len = 5
      if(this.dataInfo.textTop == 0){
        len = 0
      }
      if(this.dataInfo.textTop){
        len = this.dataInfo.textTop * 2
      }

      return {top:len+'rpx'}
    },
    // 商品距离底部的距离
    shopBottomHeight(){
      let len = 76
      if(this.dataInfo.goodsBottom == 0){
        len = 0
      }
      if(this.dataInfo.goodsBottom){
        len = this.dataInfo.goodsBottom * 2
      }
      return {
        bottom: len  + 'rpx'
      }
    },
    activeTitleStyle() {
      return {
        fontSize: this.dataInfo.activeTitleSize * this.pxToRpxScale + 'rpx',
        color: this.dataInfo.activeTitleColor,
        fontWeight: this.dataInfo.activeTitleStyle === 'normal' ? '' : 'bold'
      }
    },
    activeDescStyle() {
      let padding = this?.dataInfo.textLineHeight * 2 + 'rpx'
      return {
        fontSize: this.dataInfo.descriptionSize * this.pxToRpxScale + 'rpx',
        color: this.dataInfo.activeDescColor,
        fontWeight: this.dataInfo.descriptionStyle === 'normal' ? '' : 'bold',
        'margin-top': padding
      }
    },
    activeTimeStyle() {
      let padding = this?.dataInfo.textLineHeight * 2 + 'rpx'
      return {
        fontSize: this.dataInfo.timeSize + 'px',
        color: this.dataInfo.activeTimeColor,
        fontWeight: this.dataInfo.timeStyle === 'normal' ? '' : 'bold',
        background: `${this.colorRgb(this.dataInfo.backgroundColor, this.dataInfo.backgroundTransparency / 100)}`,
        'margin-top': padding
      }
    },
    productInfoStyle() {
      const hadContent = this.dataInfo.shopName || this.dataInfo.showShopPrice || this.dataInfo.shopBuyBtn || this.dataInfo.showOldPrice
      return {padding: hadContent ? '5px 10px' : ''}
    },
    imageClassName() {
      switch (this.dataInfo.listStyle) {
        case '1':
          return 'image_style_one'
        case '2':
          return 'image_style_two'
        case '3':
          return 'image_style_three'
      }
    },
    bgStyle() {
      let obj = {}
      if(this.dataInfo?.backgroundAnleType == 1){
        obj = {
          ...obj,
          'border-radius':'14rpx'
        }
      }
      return obj
    }
  },
  onReady() {
    const systemInfo = uni.getSystemInfoSync();
    // px转换到rpx的比例
    let pxToRpxScale = 750 / systemInfo.windowWidth;
    this.pxToRpxScale = pxToRpxScale
    this.getLimitList()

  },
  methods: {
    goToUrl(data) {
      this.jumpToPage(data)
    },
    colorRgb(val, opacity) {
      // 16进制颜色值的正则
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      var color = val.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          var colorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        var colorChange = [];
        for (let i = 1; i < 7; i += 2) {
          colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "rgba(" + colorChange.join(",") + "," + opacity + ")";
      } else {
        return color;
      }
    },
    async getLimitList() {
      let res
      let id = this.dataInfo?.productIds || ""
      if (id.length <= 0) {
        return
      }
      if (this.dataInfo.productList[0]?.activityType == 0) {
        res = await this.$http.getLimitSecList(this.dataInfo.productIds)
      } else {
        res = await this.$http.getLimitDisList(this.dataInfo.productIds)
      }

      this.timeList = res.dataInfo

      this.timeList?.sort((a, b) => {
        return a.startDate > b.startDate ? 1 : -1
      })
      this.activeTimeText()
    },
    activeTimeText() {
      //当前活动为同一时间组
      let days, hours, minutes, seconds
      if (this.timeList?.length == 1) {
        const startTime = this.timeList[0].startDate
        const endTime = this.timeList[0].endDate
        const activityStatu = this.timeList[0].activityStatu
        if (activityStatu == '1') {
          this.timer = setInterval(() => {
            ({days, hours, minutes, seconds} = this.getCountDownData(startTime))
            const zeroFlag = days === 0 && hours === 0 && minutes === 0 && seconds === 0
            this.activeTimeString = `活动即将开始：${days}天${hours}时${minutes}分${seconds}秒`
            if (zeroFlag) {
              clearInterval(this.timer)
              this.getLimitList()
            }
          }, 1000)
        } else if (activityStatu == '2') {
          this.timer = setInterval(() => {
            ({days, hours, minutes, seconds} = this.getCountDownData(endTime))
            const zeroFlag = days === 0 && hours === 0 && minutes === 0 && seconds === 0
            this.activeTimeString = `距离活动结束：${days}天${hours}时${minutes}分${seconds}秒`
            if (zeroFlag) {
              clearInterval(this.timer)
              this.getLimitList()
            }
          }, 1000)
          // 活动已结束，展示活动结束。
        } else if (activityStatu == '3') {
          this.activeTimeString = '活动结束'
        }
      } else {//多个活动，不同时间组

        const allEndFlag = this.timeList?.every((item) => {
          return item.activityStatu == '3'
        })
        if (allEndFlag) {
          this.activeTimeString = '活动全部结束了'
          return
        } else {
          const startTime =this.timeList? this.timeList[this.currentActivity].startDate:0
          const endTime = this.timeList?this.timeList[this.currentActivity].endDate:0
          const activityStatu = this.timeList?this.timeList[this.currentActivity].activityStatu:''
          if (activityStatu == '1') {
            this.timer = setInterval(() => {
              ({days, hours, minutes, seconds} = this.getCountDownData(startTime))
              const zeroFlag = days === 0 && hours === 0 && minutes === 0 && seconds === 0
              this.activeTimeString = `活动即将开始：${days}天${hours}时${minutes}分${seconds}秒`
              if (zeroFlag) {
                clearInterval(this.timer)
                this.getLimitList()
              }
            }, 1000)
          } else if (activityStatu == '2') {
            this.timer = setInterval(() => {
              ({days, hours, minutes, seconds} = this.getCountDownData(endTime))
              const zeroFlag = days === 0 && hours === 0 && minutes === 0 && seconds === 0
              this.activeTimeString = `距离活动结束：${days}天${hours}时${minutes}分${seconds}秒`
              if (zeroFlag) {
                clearInterval(this.timer)
                this.getLimitList()
              }
            }, 1000)
            // 活动已结束，展示活动结束。
          } else if (activityStatu == '3') {

            if (this.currentActivity == this.timeList.length - 1) {
              this.activeTimeString = '活动全部结束'
              return
            } else {
              this.currentActivity++
              this.getLimitList()
            }

          }
        }

      }
    },
    getCountDownData(timeString) {
      const nowDateTime = new Date().getTime()
      let startDateTime = new Date(timeString.replace(/-/g, '/')).getTime()
      let restDateTime = startDateTime - nowDateTime
      //
      let days = 0
      let hours = 0
      let minutes = 0
      let seconds = 0
      seconds = Math.floor(restDateTime / 1000 % 60) // 秒数
      minutes = Math.floor(restDateTime / (1000 * 60) % 60) // 分钟数
      hours = Math.floor(restDateTime / (1000 * 60 * 60) % 24) // 小时数
      days = Math.floor(restDateTime / (1000 * 60 * 60 * 24)) // 天数
      //
      return {days, hours, minutes, seconds}
    },
    goToDetail(id, actId, type, obj) {
      uni.setStorageSync('moduleDate', {jumpPageName:obj?.goodsName || '商品详情' ,moduleName:'限时秒杀'});
      this.goTo(`/pagesA/shop/goodsDetail?id=${id}&activeType=${type}&activeId=${actId}`)
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.limit{
    z-index: 1000;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .background-wrap{
        overflow: hidden;
        width: 100%;
        position: relative;
        //padding: 0 40rpx;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // padding-bottom: 40rpx;

        .content_wrap{
          position: absolute;
            width: 100%;
            text-align: center;

            .title{
                //padding: 8rpx 0;
            }
            .desc{
                //padding: 8rpx 0;
            }
        }
        .product_wrap{
          width: 100%;
          position: absolute;
            display: flex;
            overflow-x: scroll;
            margin-top: 40rpx;
            .product-activity{
                display: flex;
                .product-item{
                    //  width: 460rpx;
                     overflow: hidden;
                    // margin-right: 40rpx;
                    &.disable{
                        pointer-events: none;
                    }
                    .img-wrap{
                        position: relative;
                        .mask{
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                            background: rgba(25,25,25,0.5);
                            border-radius: 50%;
                            color: #ffffff;
                            width: 172rpx;
                            height: 172rpx;
                            line-height: 172rpx;
                            text-align: center;
                        }
                    }
                    image{
                        display: block;
                        width: 100%;
                        //height: 320rpx;
                    }
                    .product-info{
                        background: #fff;
                        //padding: 10rpx 20rpx;
                        font-size: 28rpx;
                        &.info-flex{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .name{
                                width: 100%;
                                text-align: center;
                            }
                            .shop-btn{
                                text-align: center;
                            }
                        }
                        .contain-flex{
                            display: flex;
                            justify-content: space-between;
                        }
                        .price-wrapper{
                            display: flex;
                            font-weight: 400;
                            .oldPrice{
                                text-decoration: line-through;
                                color: rgb(153, 153, 153);
                            }
                            .killPrice{
                                margin-right: 20rpx;
                            }
                        }
                        .shop-btn{
                            //margin-left: 40rpx;
                            text{
                                font-size: 40rpx;
                            }
                            .btn{
                                font-size: 24rpx;
                                padding:0 16rpx;
                                height: 48rpx;
                                line-height: 48rpx;
                                background: #d1b085;
                                color: #ffffff;
                                // border-radius: 30rpx;
                            }
                        }
                    }
                }
            }
        }
    }

}
.is-borderRadius{
    border-radius: 14rpx;
}
.bold{
    font-weight: 700;
}
.image_style_one {
    width: 460rpx;
    image {
        height: 320rpx;
        //object-fit: cover;
    }

}
.image_style_two {
    width: 320rpx;
    image {
        height: 240rpx;
    }

}
.image_style_three {
    width: 220rpx;
    image {
        height: 166rpx;
    }

}
.box{
  width: 100%;
  padding: 0 40rpx;
  position: relative;
  height: 750rpx;
  overflow: hidden;
  .bg-img{
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

  }
}
</style>
