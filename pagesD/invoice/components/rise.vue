<template>
  <view class="g-rise u-flex">
      <view class="u-flex-1" style="width: 100vw;overflow: hidden">
        <scroll-view :scroll-y="true" style="height: 100%" v-if="invoiceHeadList.length>0">
          <view class="m-box" v-for="item in invoiceHeadList" @click="selInvoice(item)">
            <view class="title">普通发票抬头{{invoiceType(item.headType)}}</view>
            <view class="m-details u-flex">
              <text class="tip">{{item.buyerName}}</text>
              <text class="iconfont icon-editor" @click.stop="addRise(item.id)"></text>
            </view>
          </view>
        </scroll-view>
        <no-data v-else></no-data>
      </view>
      <view class="popup-btn-box">
        <text class="btn-content" @click="addRise()">添加常用发票抬头</text>
      </view>
  </view>
</template>

<script>
import NoData from "../../../components/noData";
export default {
  components: {NoData},
  props:{
    // 发票是否可被选择
    isSel:{
      type:Boolean,
      default:false
    },
    orderIds:{
      type:Array,
      default:null
    }
  },
  data(){
    return {
      current:1,
      size:30,
      invoiceHeadList:[],            // 发票抬头数据
    }
  },
  created(){
    this.getInvoiceHeadPage()
  },
  computed:{
    invoiceType() {
      return (type) => {
        if(type == 1){
          return '-企业'
        }
        if(type == 2){
          return '-个人'
        }
      }
    },
		// backColor(){
		// 	if(this.invoiceHeadList?.length){
		// 		return {
		// 			'background':'#F8F8F8'
		// 		}
		// 	}else{
		// 		return {
		// 			'background':'#ffffff'
		// 		}
		// 	}
		// }
  },
  methods:{
    // 发票抬头分页
    async getInvoiceHeadPage(){
      const {dataInfo:res} = await this.$http.getInvoiceHeadPage({current:this.current, size:this.size})
      this.invoiceHeadList = res?.records || []
			
    },
    // 选择发票
    selInvoice(obj={}){
      if(!obj.id){
        this.$toast('发票不存在')
        return
      }
      if(this.isSel){
        return
      }
      this.goTo(`/pagesD/invoice/LookRise?id=${obj.id}&orderIds=${JSON.stringify(this.orderIds)}`)
      this.$emit('getInvoice',obj.id)
    },
    // 添加发票抬头
    addRise(id=''){
      let path = '/pagesD/invoice/addRise'
      if(id){
        path = path+`?invoiceId=${id}`
      }
      this.goTo(path)
    }
  }
}
</script>

<style scoped lang="scss">
.g-rise{
  background: #FFFFFF;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  .m-box{
    background: #ffffff;
    border-bottom: #f8f8f8 solid 20rpx;
    // margin-bottom: 20rpx;
    .title{
      padding: 25rpx 0 25rpx 30rpx;
      font-size: 30rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
    }
    .m-details{
      justify-content: space-between;
      padding: 25rpx 30rpx;
      border-top: 1rpx solid #E6E6E6;
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      .icon-editor{
        color: #000000;
      }
    }
  }
  .popup-btn-box{
    width: 100%;
    padding-top: 30rpx;
    background: #ffffff;
    padding-bottom: 50rpx;
    text-align: center;
    .btn-content{
      display: inline-block;
      padding: 20rpx 163rpx;
      background: #D1B085;
      border-radius: 45rpx;

      font-size: 28rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
    }
  }
}
</style>