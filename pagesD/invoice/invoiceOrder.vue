<template>
  <view>
    <view class="head">
      <u-navbar
        class="location-class"
        :background="{ background: '#ffffff' }"
        title-size="36"
        title-color="#191919"
        title-bold
        :border-bottom="false"
        title="选择开票订单"
        back-icon-color="#191919"
        :custom-back="backPage"
      >
      </u-navbar>
      <view class="search-and-filter-card">
        <view class="search-card u-flex">
          <text @click="search" class="iconfont icon-home_topbar_icon_search"></text>
          <input
            placeholder-style="color:#cccccc;padding-left:10rpx"
            type="text"
            @input="inputChange"
            @blur="search"
            placeholder="搜索我的订单"
            maxlength="15"
          />
        </view>
      </view>
    </view>
    <view style="height: 60px"></view>
    <u-checkbox-group active-color="#D1B085" shape="circle" @change="checkboxGroupChange">
      <view v-for="(item, index) in orderList">
        <view class="store-card">
          <view class="store-item u-flex">
            <view class="store-left u-flex"> 订单编号：{{ item.orderNo }} </view>
            <text :style="{ color: getOrderStatus(item.orderStatus).color }" class="order-state">{{
              getOrderStatus(item.orderStatus).name
            }}</text>
          </view>
          <view class="u-flex">
            <view class="radio-box">
              <u-checkbox
                active-color="#D1B085"
                shape="circle"
                @change="radioChange"
                :value="item.isActive"
                :name="index"
              ></u-checkbox>
            </view>
            <view @click="goDeatil(item)" class="u-flex-1">
              <shop-card :titleShow="false" :shopList="[item]"></shop-card>
            </view>
          </view>
          <view class="store-btn-card">
            <view class="u-text-right u-flex pic-total">
              <view class="u-flex">
                <view class="u-m-l-20">
                  <text class="pic-total-title">合计:</text>
                  <text class="pic-total-num">¥{{ actualPrice(item) }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </u-checkbox-group>
    <view class="bottom-seat safe-area-inset-bottom"></view>
    <view class="bottom">
      <view class="u-flex u-row-between bottom-content">
        <u-checkbox
          @change="allChange"
          active-color="#D1B085"
          shape="circle"
          :value="isAll"
          name="全选"
          >全选</u-checkbox
        >
        <view @click="confirm" class="confirm" :class="isActives ? 'active' : ''"> 确认 </view>
      </view>
    </view>
  </view>
</template>

<script>
import shopCard from '@/components/shopCard.vue'
export default {
  components: {
    shopCard,
  },
  props: {},
  data() {
    return {
      orderList: [],
      page: 1,
      PageSize: 5,
      keyword: '',
      isAll: false, //是否全选
      finshed: false, //是否请求完
    }
  },
  watch:{
    orderList:{
      handler(newVal){
        let arr = JSON.parse(JSON.stringify(newVal))
        let activeTiems = 0
        for (const item of arr) {
          if(item.isActive){
            activeTiems += 1

          }
        }
       if(activeTiems == arr.length){
         this.isAll = true
       }else{
         this.isAll = false
       }

      },
      immediate:true
    }
  },
  computed: {
    actualPrice() {
      return (val) => {
        if (val.paymentWay == 2) {
          //0.现金 1.现金加积分 2.现金加固定积分 3.纯积分
          return `${this.switchMoney(val.goodsOrderPrice)}+${val.integralPrice}积分`
        } else if (val.paymentWay == 3) {
          return `${val.integralPrice}积分`
        } else {
          return `${this.switchMoney(val.goodsOrderPrice)}`
        }
      }
    },
    isActives() {
      for (const item of this.orderList) {
        if (item.isActive) {
          return true
        }
      }
      return ''
    },
  },
  onShow() {
    this.page = 1
    this.fetchOrderList()

  },
  methods: {
    // 搜索
    search() {
      this.page = 1
      this.fetchOrderList()
    },
    inputChange(e) {
      this.keyword = e.detail.value
    },
    // 查询订单
    async fetchOrderList() {
      this.finshed = false
      let params = {
        goodsName: this.keyword,
        current: this.page,
        size: this.PageSize,
      }
      let res = await this.$http.makeOutInvoice(params)
      if (res.dataInfo && res.dataInfo.records.length) {
        if (this.page == 1) {
          this.orderList = res.dataInfo?.records || []
        } else {
          this.orderList = [...this.orderList, ...(res.dataInfo ? res.dataInfo.records : [])]
        }
      } else {
        this.finshed = true
        if (this.page == 1) {
          this.orderList = []
        }
      }
    },
    onReachBottom() {
      this.page = this.page + 1
      if (!this.finshed) {
        this.fetchOrderList()
      }
    },
    goDeatil(item) {
      console.log(item)
    },
    radioChange(e) {
      this.$set(this.orderList[e.name], 'isActive', e.value)
    },
    confirm() {
      let ids = []
      this.orderList.forEach((item) => {
        if (item.isActive) {
          ids.push(item.orderGoodsId)
        }
      })
      this.goTo(`/pagesD/invoice/addRise?type=3&orderId=${JSON.stringify(ids)}`)
    },
    // 监听整个选项的变化
    // checkboxGroupChange(detail = []) {
    //   if (detail.length == this.orderList.length) {
    //     this.isAll = true
    //     return
    //   }
    //   this.isAll = false
    // },
    allChange(e) {
      this.isAll = e.value
      this.orderList.forEach((item) => {
        this.$set(item, 'isActive', e.value)
      })
    },
  },
}
</script>

<style scoped lang="scss">
// 头部搜索
.search-and-filter-card {
  background: #ffffff;
  padding-top: 14rpx;
  margin-bottom: 20rpx;
  position: fixed;
  width: 100%;
  .search-card {
    margin: 0rpx 30rpx 14rpx;
    padding: 0 30rpx;
    display: flex;
    align-items: center;
    height: 72rpx;
    background: #f1f1f1;
    border-radius: 44rpx;
    /deep/input {
      margin-left: 10rpx;
    }
    .icon-search {
      font-size: 36rpx;
      color: #cccccc;
    }
    .icon-home_topbar_icon_search {
      font-size: 36rpx;
      color: #999999;
    }
  }
}
// 订单
.store-card {
  background: #ffffff;
  padding-right: 30rpx;
  margin-bottom: 20rpx;
  .store-item {
    padding: 22rpx 0 18rpx 112rpx;
    justify-content: space-between;
    .store-left {
      font-size: 26rpx;
      color: #191919;
      .store-label {
        margin-right: 10rpx;
        padding: 2rpx 12rpx;
        display: inline-block;
        background: #ff4e00;
        border-radius: 4rpx;

        font-size: 24rpx;
        color: #ffffff;
      }
    }
    image {
      width: 26rpx;
      height: 26rpx;
    }

    .store-name {
      margin-left: 10rpx;
      font-size: 24rpx;
      color: #191919;
      font-weight: 400;
    }

    .order-state {
      font-size: 28rpx;
      // color: #EC4545;
      font-weight: 400;
    }
  }
  .radio-box {
    display: flex;
    width: 82rpx;
    justify-content: center;
    align-items: center;
    /deep/.u-checkbox__label {
      margin: 0;
    }
  }
  .goods-item {
    padding: 20rpx 0rpx;

    image {
      width: 160rpx;
      height: 160rpx;
      margin-right: 30rpx;
    }

    .item-right-center {
      flex: 1;
      height: 160rpx;
      flex-direction: column;
      justify-content: space-between;

      .top-center {
        .title {
          font-size: 20rpx;
          color: #000000;
          font-weight: 400;
        }

        .tip {
          margin-top: 6rpx;
          width: 410rpx;
          font-size: 20rpx;
          color: #999999;
          font-weight: 400;
        }

        .goods-num {
          font-size: 20rpx;
          color: #999999;
          font-weight: 400;
        }
      }

      .bottom-center {
        width: 100%;
        justify-content: space-between;

        .goods-pic {
          font-size: 28rpx;
          color: #191919;
          font-weight: 600;
        }
      }
    }
  }
}
.store-btn-card {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30rpx;
}
.bottom-seat {
  height: iphone-bottom(115rpx);
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  height: iphone-bottom(130rpx);
  //border-top:  1rpx soild #efefef !important;
  box-shadow: 0px 0rpx 4rpx 0px rgba(230, 230, 230, 1);
  .bottom-content {
    height: 100%;
    padding: 0 30rpx;
    .confirm {
      // width: 212rpx;
      // height: 80rpx;
      padding: 20rpx 80rpx;
      background: #999999;
      border-radius: 40rpx;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      font-size: 28rpx;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: bold;
    }
    .active {
      background: $themeColor;
    }
  }
}
</style>
