<template>
  <view class="g-article">
    <block v-if="dataInfo.templateType =='falls'">
      <u-waterfall v-model="dataInfo.articleList" add-time="50">
        <template v-slot:left="{leftList}">
          <view>
            <card-list :arrList="leftList"></card-list>
          </view>
        </template>
        <template v-slot:right="{rightList}">
          <card-list :arrList="rightList"></card-list>
        </template>
      </u-waterfall>
      <view class="more u-flex" v-if="dataInfo.moreShow" @click="seeMore">
        查看更多
        <text class="iconfont icon-arrow"></text>
      </view>
    </block>
    <card-list v-else :arrList="dataInfo.articleList"></card-list>
  </view>
</template>

<script>
import cardList from "./cardList";
import mixin from "../../mixin";

export default {
  mixins:[mixin],
  components: {cardList},
  methods:{
    seeMore(){
      uni.setStorageSync('moduleDate', {jumpPageName:'文章列表',moduleName:'内容咨询'});
      this.goTo('/pagesB/articleList/index')
    }
  }
}
</script>

<style lang="scss" scoped>
.g-article{
  background: #f8f8f8;
  .more{
    width: 100vw;
    padding: 20rpx 0;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    justify-content: center;
  }
}
</style>
