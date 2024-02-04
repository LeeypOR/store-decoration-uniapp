<template>
  <view class="submit-material">
    <u-navbar class="location-class" :background="{background:'#ffffff'}" title-size="36" title-color="#191919" :border-bottom="false" title="提交材料"
              back-icon-color="#191919" :custom-back="backPage"></u-navbar>
    <view class="content">
      <view class="title u-flex">请上传审核材料 
        <!-- <text v-if="remark">未通过</text> -->
        <text :style="{'color':statusName.color}">{{statusName.name}}</text>
      </view>
      <view class="tip">中奖后需根据要求上传材料审核通过后即可领取，如有疑问请联系导购，（请在规定时间内进行上传过时则自动取消中奖名额）</view>
      <view class="update-img">
        <view class="u-rela img-box" v-for="(item,index) in imgList">
          <image :src="item" mode="aspectFill"></image>
          <image @click="cancleImage(index)" v-if="!remark && status!='2'" class="close" src="/pagesC/static/raffle/icon_shop_close.png"></image>
        </view>
        <view @click="chooseImage" v-if="!remark && imgList.length<9&& status!='2'" class="u-rela img-box u-flex update">
          <view>+</view>
          <view>点击上传</view>
        </view>
      </view>
      <view class="remark-box" v-if="remark">
        <view class="remark-title">备注</view>
        <view class="remark-tip">{{remark}}</view>
      </view>
    </view>
    <view class="btn-box" @click="btnClick">
      <!-- <text>{{!remark?'提交':'返回'}}</text> -->
      <text>{{submitBtn}}</text>
    </view>
  </view>
</template>

<script>
import {isNull} from "../../common/verify";

export default {
  data(){
    return {
      imgList:'',             // 凭证图片
      remark:'',              // 备注
      status:'',              // 审核状态 领取状态(0:待上传(待核销) 1:领取(已核销) 2:待审核 3:审核通过 4:审核拒绝 5:直接领取,6：驳回)
      lotteryRecordId:"",      // 中奖记录id
      gifInfo:{} ,            // 中奖详情  
      statusList:[
        {
          name:'未通过',
          type:['6'],
          color:'#FF4400'
        },
        {
          name:'待审核',
          type:'2',
          color:'#D1B085'
        },
        {
          name:'审核失败',
          type:'4',
          color:'#FF4400'
        },
      ]  
    }
  },
  onLoad(option){
    console.log(option,'shuju ');
    
    this.imgList = JSON.parse(option?.imgList || '[]')
    this.remark = option?.remark || ''
    this.status = option?.status || '0'
    this.lotteryRecordId = option?.lotteryRecordId || ''
  },
  onShow(){
    if(this.lotteryRecordId && ['2','3','4','6'].includes(this.status)){
      this.getInfo()
    }
  },
  computed:{
    submitBtn(){
        if(this.status=='6'){
          return '重新提交'
        }
        if(this.status=='0'){
          return '提交'
        }
        if(['2','3','4'].includes(this.status)){
          return '返回'
        }
        // return '提交'
     
    },
    statusName(){
      let arr = []
      arr = this.statusList.filter(item=>{
        if(this.status.includes(item.type)){
          return true
        }
      })
      console.log('arr',arr);
      
      return arr[0]
    }
  },
  methods:{
    //详情
    async getInfo(){
      try {
        let res = await this.$http.giftInfo({lotteryRecordId:this.lotteryRecordId})
        console.log('res详情: ', res);
        this.imgList = res.dataInfo?.imageList || []
        this.remark = res.dataInfo?.remark
      } catch (error) {
        console.log('error',error);
        
      }
    },
    // 上传图片
    chooseImage(){
            getApp().globalData.preveImage='preveImage' 
      uni.chooseImage({
        count: 9 - this.imgList.length, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        success: async file => {
          uni.showLoading({
            title: '上传中',
            mask: true
          });
          const tempFilePaths = file.tempFilePaths;
          let arr = []
          for (let i = 0; i < tempFilePaths.length; i++) {
            let res = this.$http.uploadFile(tempFilePaths[i], false)
            arr.push(res)
          }
          const resArr = await Promise.allSettled(arr)
          for (let item of resArr) {
            if (this.imgList.length <= 9) {
              if (item.status == 'fulfilled') {
                let url = item?.value?.dataInfo?.url || ''
                if (url) {
                  this.imgList.push(url)
                }
              }
            }
          }
          uni.hideLoading()
        }
      });
    },
    // 删除图片
    cancleImage(index){
      this.imgList.splice(index,1)
    },
    // 按钮点击事件
    async btnClick(){
      if(['2','3','4'].includes(this.status) ){
        this.goBackPage()
        return 
      }
      if(isNull(this.lotteryRecordId)){
        this.$toast('赠品不存在')
        return
      }
      if(this.imgList.length<=0){
        this.$toast('请上传图片')
        return
      }
      if(this.status=='6'){
        this.imgList = []
        this.remark = ''
        this.status = '0'
        return 
      }
      if(!this.remark){
        const lotteryRecordId = this.lotteryRecordId
        await this.$http.uploadCertificate({lotteryRecordId,imageList:this.imgList})
        this.$toast('提交成功')
      }
      this.goBackPage()
    }
  }
}
</script>

<style scoped lang="scss">
.submit-material{
  font-family: PingFangSC-Regular;
  .content{
    margin-top: 30rpx;
    background: #FFFFFF;
    padding:0 30rpx 30rpx;
    .title{
      padding: 30rpx 0;
      font-size: 28rpx;
      color: #191919;
      letter-spacing: 0;
      font-weight: 400;
      justify-content: space-between;
      text{
        font-family: MicrosoftYaHei;
        font-size: 28rpx;
        color: #FF4400;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
    .tip{
      margin-top: 16rpx;
      font-size: 26rpx;
      color: #999999;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
}
.update-img{
  margin-top: 50rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  grid-row-gap: 20px;
  .img-box{
    width: 216rpx;
    height: 216rpx;
    background: #FFFFFF;
    border-radius: 14rpx;
    image{
      width: 100%;
      height: 100%;
      border-radius: 14rpx;
    }
    .close{
      position: absolute;
      top: -16rpx;
      right: -16rpx;
      width: 32rpx;
      height: 32rpx;
    }
    &.update{
      border: 1rpx solid #016BFF;
      flex-direction: column;
      justify-content: center;
      color: #016BFF;
      font-size: 26rpx;
    }
  }
}
.btn-box{
  position: fixed;
  bottom: iphone-bottom(56rpx);
  width: 100vw;
  padding: 0 30rpx;
  text{
    display: inline-block;
    padding: 22rpx 0;
    width: 100%;
    background: #D1B085;
    border-radius: 45rpx;

    font-family: PingFangSC-Medium;
    font-size: 32rpx;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
}
.remark-box{
  margin-top: 28rpx;
  .remark-title{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 400;
  }
  .remark-tip{
    margin-top: 10rpx;
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #999999;
    letter-spacing: 0;
    font-weight: 400;
    height: 150rpx;
  }
}
</style>