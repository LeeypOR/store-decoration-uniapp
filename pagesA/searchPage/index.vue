<template>
  <view class="g-search-page">
    <u-navbar class="location-class" :border-bottom="false" title="商品搜索" title-bold title-color="#191919"
              title-size="36"
              back-icon-color="#000000">
    </u-navbar>
     <view class="search-item u-flex">
       <view class="u-flex-1 input-card u-flex">
<!--         <image src="../static/hotSearch/search.png"></image>-->
         <text class="iconfont icon-home_topbar_icon_search"></text>
         <input type="text" v-model="inputValue" placeholder="商品搜索" placeholder-class="placeholder-class" />
       </view>
       <text @click="goodsSearch(inputValue)">搜索</text>
     </view>
    <view class="hot-search" v-if="hotWordList.length>0">热门搜索</view>
    <view class="u-flex u-flex-wrap">
      <view class="search-tag active u-flex" v-for="item in hotWordList" @click="goodsSearch(item.hotWordName)">
        <image src="../static/hotSearch/hot.png"></image>
        <view>{{item.hotWordName}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      title:'商品搜索',
      hotWordList:[],
      inputValue:'',
    }
  },
  onLoad(){
    this.getHotWord()
  },
  methods:{
    async getHotWord(){
       const res = await this.$http.getHotWord()
       this.hotWordList = res?.dataInfo?.hotWordList || []
    },
    // 商品搜索
    goodsSearch(value=null){
      this.goTo(`/pagesB/search/goodsList?word=${value}`,false,true)
    }
  }
}
</script>
<style>
  page{
    background-color: #ffffff;
  }
</style>
<style lang="scss" scoped>
.g-search-page{
  padding: 0 30rpx;
  .search-item{
    justify-content: space-between;
    margin-top: 16rpx;
    .input-card{
      background: #F9F9F9;
      border-radius: 310rpx;
      padding: 16rpx 14rpx 14rpx 14rpx;
      image{
        margin-right: 10rpx;
        width: 48rpx;
        height: 48rpx;
      }
      /deep/input{
        font-size: 24rpx;
        color: #333333;
        width: 100%;
      }
    }
    text{
      margin-left: 20rpx;
      font-size: 28rpx;
      color: #333333;
    }
  }
  .hot-search{
    margin-bottom: 20rpx;
    margin-top: 40rpx;
    font-size: 28rpx;
    color: #333333;
  }
  .search-tag{
    transform: translateX(-20rpx);
    margin-bottom: 20rpx;
    margin-left: 20rpx;
    padding: 12rpx 24rpx 12rpx 16rpx;
    border: 2rpx solid #999999;
    border-radius: 32rpx;
    font-size: 24rpx;
    color: #333333;
    image{
      width: 40rpx;
      height: 40rpx;
    }
  }
  .active{
    background: #FFF3F3;
    border: 2rpx solid #FE4444;
    color: #FE4444;
  }
}
/deep/.placeholder-class{
  font-size: 24rpx;
  color: #CCCCCC;
  letter-spacing: 0;
  font-weight: 400;
  display: flex;
  align-items: center;
}
// /deep/input{
//   display: flex;
//   align-items: center;
//   height: 34rpx!important;
//   line-height: 0!important;
//   min-height: 0!important;
// }

.icon-home_topbar_icon_search{
  color: #cccccc!important;
  font-size: 30rpx!important;
  margin-right: 10rpx;
}
</style>
