<template>
  <view>
    <u-navbar class="location-class" :border-bottom="false" back-icon-color="#000000">
      <input type="text" v-model="keyWord" placeholder="搜索厅店/潮品/业务/手机" placeholder-class="input-placeholder">
    </u-navbar>
    <block v-if="!keyWord">
      <key-word-search isClear="true" :keyWordList="historyList"></key-word-search>
      <key-word-search isClear="true" :keyWordList="historyList"></key-word-search>
    </block>
    <view class="search-result" v-else>
      <view class="list" v-for="item in 10">
        <image src="../static/image/search.png"></image>
        <text >{{keyWord}}</text>
      </view>
    </view>
  </view>
</template>

<script>
import KeyWordSearch from "./components/keyWordSearch";

export default {
components: {KeyWordSearch},
  data() {
    return {
      keyWord: '',
      historyList: ['1231', '123154123', '123123123123', '12312', '1231231231231231231231']
    }
  },
}
</script>

<style scoped lang="scss">
input{
  width: 452rpx;
  height: 64rpx;
  padding: 0rpx 24rpx;
  background: #f1f2f3;
  border-radius: 32rpx;
  box-sizing: border-box;
}
/deep/.input-placeholder{
  font-size: 28rpx;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #c0c0c1;
  display: flex;
  align-items: center;
  width: 452rpx;
}
.search-result{
  .list{
    padding: 32rpx 24rpx 24rpx 24rpx;
    image{
      margin-right: 10rpx;
      width: 25rpx;
      height: 27rpx;
    }
    text{
      font-size: 28rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #272829;
    }
  }
}
</style>
<style>
page {
  background: #ffffff;
}
</style>