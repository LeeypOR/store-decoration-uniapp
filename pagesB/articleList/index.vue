<template>
  <view class="g-article-list u-flex">
    <u-navbar :border-bottom="false" title="文章列表" title-bold title-color="#191919" title-size="36"
              back-icon-color="#000000"></u-navbar>
    <block v-if="articleList.length>0">
      <view class="head-top">
        <view class="head-title">探索生活奥秘</view>
        <view class="head-tip">收纳好物，让你家越住越清爽</view>
      </view>
      <view class="item-box u-flex-1">
        <u-waterfall v-model="articleList" add-time="50">
          <template v-slot:left="{leftList}">
            <view>
              <card-list :arrList="leftList"></card-list>
            </view>
          </template>
          <template v-slot:right="{rightList}">
            <card-list :arrList="rightList"></card-list>
          </template>
        </u-waterfall>
      </view>
    </block>
    <no-data v-else></no-data>
  </view>
</template>

<script>
import cardList from "./cardList";
import NoData from "../../components/noData";
export default {
  components: {NoData,cardList},
  data(){
    return {
      articleList:[],
    }
  },
  onLoad(){
    this.getArticleList()
  },
  methods:{
    async getArticleList(){
      let param ={
        current:1,
        size:99
      }
      const res = await this.$http.articlesPage(param)
      this.articleList = res?.dataInfo?.records || []
    }
  }
}
</script>

<style lang="scss" scoped>
.g-article-list{
   width: 100vw;
   flex-direction: column;
  .head-top{
    width: 100vw;
    background: #ffffff;
    padding:  20rpx 30rpx;
    .head-title{
      font-family: PingFangSC-Semibold;
      font-size: 32rpx;
      color: #333333;
      letter-spacing: 0;
      font-weight: 600;
    }
    .head-tip{
      margin-top: 14rpx;
      font-family: PingFangSC-Regular;
      font-size: 26rpx;
      color: #666666;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
  .item-box{

  }
}
</style>