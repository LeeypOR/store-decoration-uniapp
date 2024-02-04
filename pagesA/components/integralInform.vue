<template>
  <view class="integral-inform">
    <text class="total-integral" >可用积分值：{{total}}积分</text>
    <text class="consume-integral" v-if="consume">总计：<block v-if="useMoney">{{useMoney+'+'}}</block>{{consume}}积分</text>
  </view>
</template>

<script>
export default {
  props:{
    // 使用金额
    useMoney:{
      type:[Number,String],
      default:''
    },
    // 消耗积分
    consume: {
      type:[Number,String],
      default:0
    },
  },
  data(){
    return {
      total:0
    }
  },
  created(){
    this.getPoint()
  },
  methods:{
    // 获取积分
    async getPoint(){
      try {
        let param = {id: this.$globleData.userData.id}
        const res = await this.$http.getIntegrateInfo(param)
        this.total = res?.dataInfo?.currentIntegrate || 0
      } catch (error) {}
    },
  }
}
</script>

<style scoped lang="scss">
  .integral-inform{
    width: 100vw;
    padding: 16rpx 0;
    background: rgba(209, 176, 133, 0.1);
    text-align: center;
  }
  text{
    font-size: 26rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    &:last-of-type{
      color: #D1B085;
    }
  }
  .total-integral{
    margin-right: 10rpx;
  }
</style>