<template>
  <view class="goodsList-wrapper">
    <u-navbar
      :border-bottom="false"
      title="商品列表"
      title-color="#191919"
      title-size="36"
      title-bold
      back-icon-color="rgba(0,0,0,0.90)"
    ></u-navbar>
    <view class="screen-box">
      <view class="search-item u-flex">
        <text class="iconfont icon-search" @click="searchList"></text>
        <input type="text" placeholder="请输入搜索的商品" v-model="goodsName" />
      </view>
      <view class="screen-item u-flex">
        <text class="u-flex-1"
          :class="{ active: selTab == 0 }"
          @click="cutTab(0)"
          >销量</text
        >
        <view
          class="u-flex-1 u-flex right-box"
          :class="{ active: selTab == 1 }"
          @click="cutTab(1)"
          >价格
          <view class="sort-item u-flex">
            <text
              class="iconfont icon-app_icon_shouhui"
              :class="{ active: isAsc }"
            ></text>
            <text
              class="iconfont icon-app_icon_xiala"
              :class="{ active: !isAsc }"
            ></text>
          </view>
        </view>
        <view class="listStatus-wrap" @click="toggleList">
          <view
            class="iconfont icon-icon_test_pubuliu"
            v-if="listStatus"
          ></view>
          <view class="iconfont icon-icon_test_tuwen" v-else></view>
        </view>
      </view>
    </view>
    <view class="content u-skeleton" v-if="goodsList.length>0">
      <view v-if="listStatus" class="uWaterfall-content">
        <u-waterfall add-time="50" v-model="goodsList" ref="uWaterfall">
          <template v-slot:left="{ leftList }">
            <view
              class="warter"
              v-for="(item, index) in leftList"
              :key="item.id"
              @click="goTo(`/pagesA/shop/goodsDetail?id=${item.id}`)"
            >
              <!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
              <!-- <u-lazy-load
                threshold="-450"
                :image="item.goodsPicture"
                :index="index"
                img-mode=""
              ></u-lazy-load> -->
               <image :src="item.goodsPicture" class="u-skeleton-rect"></image>
              <view class="title u-line-2 u-skeleton-rect">{{ item.goodsName }}</view>
              <view class="num01 u-skeleton-rect">¥{{ item.discountPrice }}</view>
              <view class="num02 u-skeleton-rect">¥{{ item.salePrice }}</view>
              <!-- <view class="u-flex">
                <view v-if="item.memberPrice" class="num03">¥{{ item.memberPrice }}</view>
                <view v-else class="num02">¥{{ item.marketPrice }}</view>
                <image
                  v-if="item.memberPrice"
                  src="../static/images/icon-vip.png"
                  class="vip u-skeleton-rect"
                ></image>
                <view class="sellNum u-skeleton-rect"
                  >已售{{ item.goodsSales }}</view
                >
              </view> -->
            </view>
          </template>
          <template v-slot:right="{ rightList }">
            <view
              class="warter"
              v-for="(item, index) in rightList"
              :key="item.id"
              @click="goTo(`/pagesA/shop/goodsDetail?id=${item.id}`)"
            >
              <!-- <u-lazy-load
                threshold="-450"
                :image="item.goodsPicture"
                :index="index"
                img-mode=""
              ></u-lazy-load> -->
               <image :src="item.goodsPicture" class="u-skeleton-rect"></image>
              <view class="title u-line-2 u-skeleton-rect">{{ item.goodsName }}</view>
              <view class="num01 u-skeleton-rect">¥{{ item.discountPrice }}</view>
              <view class="num02 u-skeleton-rect">¥{{ item.salePrice }}</view>
            </view>
          </template>
        </u-waterfall>
        <!-- <u-loadmore
          bg-color="rgb(240, 240, 240)"
          :status="loadStatus"
          @loadmore="addRandomData"
        ></u-loadmore> -->
      </view>
      <block v-else>
        <!-- <view
          class="u-skeleton roll-content u-flex-1"
          v-if="loading || goodsList.length > 0"
        > -->
        <view class="u-skeleton roll-content u-flex-1">
          <!-- <view
            class="list-item u-flex"
            v-for="item in loading ? list : goodsList"
            :key="item.id"
            @click="goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}`)"
          > -->
          <view
            class="list-item u-flex"
            v-for="item in goodsList"
            :key="item.id"
            @click="goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}`)"
          >
            <image :src="item.goodsPicture" class="u-skeleton-rect"></image>
            <view class="list-item-right">
              <view class="title u-line-2 u-skeleton-rect">{{
                item.goodsName
              }}</view>
              <view class="price u-flex">
                <view class="num01 u-skeleton-rect"
                  >¥{{ item.discountPrice }}</view
                >
                <view class="num02 u-skeleton-rect">¥{{ item.salePrice }}</view>
                <!-- <view v-if="item.memberPrice" class="num03 u-skeleton-rect"
                  >¥{{ item.memberPrice }}</view
                >
                <view v-else class="num02 u-skeleton-rect"
                  >¥{{ item.marketPrice }}</view
                >
                <image
                  v-if="item.memberPrice"
                  src="../static/images/icon-vip.png"
                  class="vip u-skeleton-rect"
                ></image> -->
              </view>
              <!-- <view class="sellNum u-skeleton-rect"
                >已售{{ item.goodsSales }}</view
              > -->
            </view>
          </view>
        </view>
        <!-- <no-data v-else></no-data> -->
      </block>
      <view class="bottom-title">到底啦～</view>
    </view>
    <no-data v-else></no-data>
    <u-skeleton
      :loading="loading"
      :animation="true"
      bgColor="#f0f0f0"
    ></u-skeleton>
  </view>
</template>

<script>
import NoData from "../../components/noData";
export default {
  components: { NoData },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 7, 8],
      title: "商品列表",
      goodsList: [],
      goodsGroupId: "",
      goodsName: "", //商品名称，根据名称查询
      loading: true,//骨架屏显示判断
      isAsc: false, // 是否是升序 默认降序
      selTab: 0, // '0' 销量  '1' 价格
      // 瀑布流部分
      listStatus: false, //列表展示形式
      // loadStatus: "loadmore",

      // 分页
      current: 1,
      size: 10,
      pages: null, //接口分页总数
      cardId: '', // 卡id
    };
  },
  onLoad(option) {
    this.cardId = option?.cardId || '' 
    this.getGoodsList();
  },
  methods: {
    cutTab(type) {
      if (type === 0) {
        // if (this.selTab === type) return;
        // this.$refs?.uWaterfall?.clear();
        // this.getGoodsList();
      } else if (type === 1) {
        this.current = 1
        if (type === this.selTab) {
          this.isAsc = !this.isAsc;
        } else {
          this.isAsc = false;
        }
        this.$refs?.uWaterfall?.clear();
        this.getGoodsList(true);
      }
      this.selTab = type;
    },
    toggleList() {
      this.$refs?.uWaterfall?.clear();
      this.listStatus = !this.listStatus;
      this.selTab === 1 ? this.getGoodsList(true) : this.getGoodsList();
    },
    searchList() {
      this.$refs?.uWaterfall?.clear();
      this.getGoodsList();
    },

    // 折扣商品列表
    async getGoodsList(flag) {
      this.loading = true;
      let res = await this.$http.getDiscountLists({
        cardId: this.cardId,
        // cardId: "462338094947897344",
        cardType: 2,
        benefitsType: 3,
        current: this.current,
        size: this.size,
        name: this.goodsName,
      });
     
      let Arr = res?.dataInfo?.pageResponse?.records || [];
      if (res.dataInfo && Arr.length) {
        if (this.current == 1) {
          this.goodsList = Arr;
          this.pages = res?.dataInfo?.pageResponse?.pages
        } else {
          this.goodsList = this.goodsList.concat(res.dataInfo ? Arr : []);
          this.goodsList = [...this.goodsList];
        }
        // 根据折扣价排序
        if (flag) {
          if (this.isAsc) {
            this.goodsList.sort((a, b) => a.discountPrice - b.discountPrice);
          } else {
            this.goodsList.sort((a, b) => b.discountPrice - a.discountPrice);
          }
        }
        this.goodsList = this.goodsList.map((item) => ({
          ...item,
          discountPrice: this.switchMoney(item.discountPrice || 0),
          salePrice: this.switchMoney(item.salePrice || 0),
        }));
      } else {
        if (this.current == 1) {
          this.goodsList = [];
        }
      }
       this.loading = false;
    },
    // 商品列表接口
    // async getGoodsList(flag) {
    //   const param = {
    //     current: 1,
    //     size: 999,
    //     goodsGroupId: this.goodsGroupId,
    //     goodsName: this.goodsName,
    //   };
    //   if (flag) {
    //     param.goodsPeiceSort = this.isAsc ? 1 : 2;
    //   }
    //   this.loading = true;
    //   const res = await this.$http.goodsList(param, false);
    //   this.loading = false;
    //   this.goodsList = res?.dataInfo?.records || [];
    //   if (this.selTab === 0) {
    //     this.goodsList.sort(
    //       (a, b) => b.goodsSales - a.goodsSales
    //     )
    //   }
    //   this.goodsList = this.goodsList.map((item) => ({
    //     ...item,
    //     salePrice: this.switchMoney(item.salePrice),
    //     marketPrice: this.switchMoney(item.marketPrice),
    //     memberPrice: this.switchMoney(item.memberPrice)
    //   }));
    // },
  },

  onReachBottom() {
    this.current = this.current + 1;
    if (this.current <= this.pages) {
      this.selTab === 1 ? this.getGoodsList(true) : this.getGoodsList();
    }
  },
};
</script>

<style scoped lang="scss">
.goodsList-wrapper {
  width: 100%;

  /* 搜索栏、排序栏样式 */
  .screen-box {
    position: fixed;
    left: 0;
    right: 0;
    height: 194rpx;
    z-index: 10;
    background: #ffffff;
    padding: 14rpx 30rpx;
    .search-item {
      background: #f5f5f5;
      border-radius: 44rpx;
      padding: 16rpx 30rpx;
      .iconfont {
        font-size: 44rpx;
        color: #999999;
      }
      input {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #191919;
      }
    }
    .screen-item {
      margin-top: 28rpx;
      justify-content: space-between;
      text-align: center;
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      .active {
        font-weight: 500;
        color: #e8b759;
      }
      .right-box {
        justify-content: center;
        /* margin-left: 15rpx; */
        .sort-item {
          margin-top: 2rpx;
          margin-left: 6rpx;
          flex-direction: column;
          .iconfont {
            font-size: 14rpx;
            color: #999999;
          }
          .active {
            color: #000000;
          }
        }
      }
      .listStatus-wrap {
        width: 110rpx;
        text-align: right;
        border-left: 1rpx solid #e6e6e6;
        .iconfont {
          margin-right: 10rpx;
          color: #999999;
        }
      }
    }
  }

  .content {
    margin-top: 200rpx;
    height: calc(100% - 200rpx);
    .roll-content {
      margin-top: 20rpx;
      background-color: #ffffff;
    }
  }

  /* 横向列表样式 */
  .list-item {
    width: 100%;
    height: 222rpx;
    padding-left: 45rpx;
    padding-right: 30rpx;
    &:last-child {
      margin-bottom: 34rpx;
    }
    image {
      width: 160rpx;
      height: 160rpx;
      margin-right: 30rpx;
    }
    .list-item-right {
      width: calc(100% - 190rpx);
      position: relative;
      height: 222rpx;
      border-bottom: 1rpx solid #e6e6e6;
      .title {
        min-width: 300rpx;
        min-height: 40rpx;
        margin-top: 32rpx;
        font-family: PingFangSC-Medium;
        font-size: 28rpx;
        color: #191919;
        line-height: 40rpx;
        font-weight: 500;
      }
      .price {
        position: absolute;
        bottom: 32rpx;
        .num01,
        .num02,
        .num03 {
          font-family: PingFangSC-Regular;
          font-weight: 400;
        }

        .num01 {
          font-size: 28rpx;
          line-height: 40rpx;
          color: #191919;
        }
        .num02 {
          margin-left: 10rpx;
          font-size: 26rpx;
          color: #999999;
          line-height: 37rpx;
          text-decoration: line-through;
        }
        .num03 {
          margin-left: 10rpx;
          font-size: 30rpx;
          font-weight: 500;
          color: #d1b085;
          line-height: 42rpx;
        }
        .vip {
          width: 52rpx;
          height: 28rpx;
        }
      }
      .sellNum {
        position: absolute;
        right: 0;
        bottom: 36rpx;
        font-size: 24rpx;
        color: #191919;
        line-height: 33rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
    }
  }

  /* 瀑布流 */
  .uWaterfall-content {
    margin: 10rpx 20rpx 0;
    overflow-y: scroll;
    .warter {
      background: #ffffff;
      border-radius: 14rpx;
      margin: 20rpx 10rpx;
      padding: 20rpx;
      position: relative;
      /deep/ .u-lazy-item {
        width: 295rpx !important;
        height: 295rpx !important;
      }
      .title {
        width: 295rpx;
        margin-top: 24rpx;
        font-family: PingFangSC-Medium;
        font-size: 28rpx;
        color: #191919;
        line-height: 34rpx;
        font-weight: 500;
      }
      .num01 {
        margin-top: 20rpx;
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #191919;
        line-height: 45rpx;
      }
      .num02 {
        font-size: 26rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 37rpx;
      }
      .num03 {
        font-size: 30rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #d1b085;
        line-height: 42rpx;
      }
      .vip {
        width: 52rpx;
        height: 28rpx;
      }
      .sellNum {
        text-align: right;
        flex: 1;
        font-size: 24rpx;
        color: #191919;
        line-height: 33rpx;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
    }
  }

  .bottom-title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 37rpx;
		margin-bottom: 100rpx;
		font-size: 24rpx;
		color: #999999;
		font-weight: 400;
		text-align: center;

		&:after,
		&:before {
			content: '';
			width: 100rpx;
			height: 2rpx;
			background: #E6E6E6;
			margin: 0 22rpx;
		}
	}
}
</style>
<style>
page {
  background: #f8f8f8;
}
</style>
