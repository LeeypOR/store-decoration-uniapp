<template>
  <view>
    <u-navbar z-index="999999" class="location-class" :border-bottom="false" title="发表评论" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
    <view class="comment-card">
        <!--   商品简介   -->
        <shop-card :title-show="false" :shopList="dataInfo"></shop-card>
        <!--   星级选择     -->
        <view class="rating-box u-flex">
            <text class="rating-title">描述相符</text>
             <text v-for="item in 5"
                   :class="{'star-active':item<starLevel}"
                   class="icon-bling iconfont star"
                   @click="selStar(item+1)"
             >
             </text>
            <text class="rating-tip">{{getStarName}}</text>
        </view>
        <!--   评论     -->
        <view class="text-area-box">
          <textarea placeholder-class="text-area-card"
                    v-model="commentContent"
                    :maxlength=100
                    placeholder="从多个角度评价宝贝，可以帮助更多想买的人">

          </textarea>
          <text class="text-area-num">{{commentContent.length>100?100:commentContent.length}}/100</text>
        </view>
        <!--   图片     -->
        <view class="upload-image-list image-right u-flex">
            <view class="sel-img-box" v-for="(item,index) in imgList" :key="index">
              <image mode="aspectFill" :src="item"></image>
              <view @click.stop="removeImage(index)" class="close-image">
                <image mode="aspectFill" src="../static/image/app_icon_input_del.png"></image>
              </view>
            </view>
             <view v-if="imgList.length<9" @click="chooseImage" class="upload-image-btn image-right u-flex">
                 <text class="iconfont icon-upload"></text>
                 <text class="upload-image-tip ">上传图片</text>
             </view>
        </view>
    </view>
    <view class="issue-btn" @click="sendComment">发布</view>
  </view>
</template>

<script>
import ShopCard from "../../components/shopCard";
import {isNull} from "../../common/verify";
export default {
  name: "publishComment",
  components: {ShopCard},
  data(){
	  return{
		  imgList:[],                 // 上传图片
      starLevel: 5,               // 星级
      commentContent:'',          // 评论内容
      dataInfo:'',                // 退款
      release:false               // 发布中
	  }
  },
  computed:{
    // 获取星级等级
    getStarName(){
      if(this.starLevel == 1){
        return '差'
      }
      if(this.starLevel == 2){
        return '一般'
      }
      if(this.starLevel == 3){
        return '好'
      }
      if(this.starLevel == 4){
        return '较好'
      }
      if(this.starLevel == 5){
        return '非常好'
      }
    }
  },
  onLoad(option){
    this.dataInfo = JSON.parse((option?.detail || []))
    
  },
  methods: {
    chooseImage() {
       getApp().globalData.preveImage='preveImage'  
      if (this.imgList.length >= 9) {
        this.$toast('上传已达上限')
        return

      }
      uni.chooseImage({
        count: 9-this.imgList.length, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        success: async file => {
          uni.showLoading({
            title: '上传中',
            mask:true
          });
          const tempFilePaths = file.tempFilePaths;
          let arr = []
          for (let i = 0; i < tempFilePaths.length; i++) {
            let res = this.$http.uploadFile(tempFilePaths[i],false)
            arr.push(res)
          }
          const resArr = await Promise.allSettled(arr)
          for(let item of resArr){
            if (this.imgList.length <= 9) {
              if(item.status =='fulfilled'){
                let url = item?.value?.dataInfo?.url || ''
                if(url){
                  this.imgList.push(url)
                }
              }
            }
          }
          uni.hideLoading()
        }
      });
    },
    removeImage(index){
		  
		  this.imgList.splice(index,1)
	  },
    // 选择星级
    selStar(index){
      if(index == this.starLevel || !index){
        return
      }
      this.starLevel = index
    },
    // 发布评论
    async sendComment(){
	    if(this.release){
	      return
       }
	    
	    const info = this.dataInfo[0] || {}
	    if(!info.goodsId){
          this.$toast('操作失败')
          return
      }
	    if(isNull(this.commentContent)){
	      this.$toast('请填写评论内容')
	      return
      }
	  this.release = true
	    try{
        let param = {
          productId:info.goodsId,
          orderId:info.orderId,
          stars: this.starLevel,
          picUrl: this.imgList.join(','),
          evaluation: this.commentContent
        }
        await this.$http.productReviews(param)
        this.release = false
        this.$toast("发布成功")
        uni.navigateBack()
      }catch (e) {
        
        this.release = false
      }
    }
  }
}
</script>

<style>
 page{
   background: #F8F8F8;
 }
</style>
<style lang="scss" scoped>
.comment-card{
  margin: 30rpx;
  background: #ffffff;
  border-radius: 30rpx;
  padding: 20rpx 30rpx 30rpx;
}
.goods-info-box{
   image{
      width: 100rpx;
      height: 100rpx;
   }
  .goods-card{
    margin-left: 30rpx;
    flex: 1;
    .goods-title{
      width: 500rpx;
      font-size: 28rpx;
      color: #000000;
    }
    .goods-tip{
      margin-top: 12rpx;
      width: 500rpx;
      font-size: 20rpx;
      color: #999999;
      font-weight: 400;
    }
  }
}
// 评星
.rating-box{
  margin-top: 20rpx;
  padding: 20rpx 0;
  font-weight: 400;
  .rating-title{
    margin-right: 30rpx;
    font-size: 28rpx;
    color: #000000;
  }
  .rating-tip{
    margin-left: 30rpx;
    font-size: 28rpx;
    color: #999999;
  }
  .star{
    font-size: 42rpx!important;
    margin-left: 6rpx;
    color: #ededed;
  }
  .star-active{
    color: #ffb458;
  }
}
// 评论
textarea{
  margin-top: 26rpx;
}
.textarea-placeholder{
  font-size: 24rpx;
  color: #999999;
}
textarea{
  padding-bottom:10rpx ;
}
.text-area-card{
  font-size: 24rpx;
  color: #999999;
  font-weight: 400;
}
// 上传图片 列表
.upload-image-list{
  margin-right: -16rpx;
  flex-wrap: wrap;
  .sel-img-box{
    position: relative;
    margin-right: 16rpx;
    image{
      width: 200rpx;
      height: 200rpx;
      border-radius: 12rpx;
    }
    &:nth-of-type(3n){
       margin-right: 0;
    }
    .close-image {
      position: absolute;
      top: -10rpx;
      right: -10rpx;
      z-index: 20;
      image {
        width: 34rpx;
        height: 34rpx;
      }
    }
  }
  .upload-image-btn{
    width: 200rpx;
    height: 200rpx;
    background: #F8F8F8;
    border: 1rpx solid #CCCCCC;
    border-radius: 14rpx;

    flex-direction: column;
    justify-content: center;
    .icon-upload{
      font-size: 42rpx;
    }
    .upload-image-tip{
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #666666;
      font-weight: 400;
    }
  }
}
// 发布按钮
.issue-btn{
  margin: 236rpx 30rpx 100rpx;
  padding: 22rpx 0;
  background: #D1B085;
  border-radius: 45rpx;

  font-size: 32rpx;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align:center;
  font-weight: 500;
}
// 字数限制
.text-area-box{
  position: relative;
  .text-area-num{
    position: absolute;
    bottom: 20rpx;
    right: 30rpx;
    font-size: 24rpx;
    color:#999999;
  }
}
</style>
