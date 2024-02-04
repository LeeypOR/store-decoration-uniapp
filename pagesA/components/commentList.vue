<template>
  <block>
<!--    <cus-preview-img ref="cusPreviewImg" :list="previewImg"></cus-preview-img>-->
    <view class="" v-if="commentList.length">
      <view class="g-comment-list" v-for="item in commentList" :key="item.id" @click="commentClick">
        <view class="u-flex user-info-card">
          <view class="u-flex user-info u-flex-1">
            <image mode="aspectFill" :src="item.headUrl || '../static/image/default_avatar.png' "></image>
            <text u-flex-1 class="user-info-name">{{ setUserName(item.nickName) }}</text>
          </view>
          <view class="u-p-r-30">
            <text v-for="star in 5" :class="{'star-active':star<item.stars}" class="icon-bling iconfont star"></text>
          </view>
        </view>
        <view class="comment u-p-r-30">{{ item.evaluation || '此用户没有填写评价' }}</view>
        <scroll-view scroll-x class="img-and-video">
          <image mode="aspectFill" v-for="(url,index) in getImgList(item.picUrl)" :src="url"
                 @click.stop="showImage(item,index)"
          ></image>
          <video v-show="false"></video>
        </scroll-view>
        <!--      <view class="comment-tip">{{item.createDate}}&lt;!&ndash;规格：{{item.skuName || '&#45;&#45;'}}&ndash;&gt;</view>-->
      </view>
    </view>
	<view v-else class="no-data u-flex u-row-center u-m-t-20">
		<image src="https://jdz.g1999.com/ghs/20210917/cda98d551fa84d078a5c08a485dfde9a.png"></image>
	</view>
  </block>
</template>

<script>
const noData = 'https://jdz.g1999.com/ghs/20210917/cda98d551fa84d078a5c08a485dfde9a.png'
export default {
  // components:{cusPreviewImg},
  props:{
    commentList:{
      type:Array,
      default:()=>[]
    },
  },
  data(){
    return {
      previewImg: [],
      noImage: noData
    }
  },
  computed:{
    getImgList(){
      return(picUrl='')=>{
          if(picUrl){
            return picUrl.split(',')
          }
          return []
      }
    },
    setUserName(){
      return (name='')=>{
        if(!name){
          return '游客'
        }
        if(name.length == 1){
          return name
        }
        return (name.substring(0,1)+'**'+name.substring(name.length-1,name.length))
      }
    }
  },
  methods:{
    showImage(obj,index){
      // 事件触发
      this.previewImg = obj?.picUrl?.split(',') || []
      if(index>this.previewImg.length){
        return
      }
      this.previewImage(index,this.previewImg)
      // const url = this.previewImg[index]
      // this.$refs.cusPreviewImg.open(url,index)
    },
    commentClick(){
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.g-comment-list{
  background: #FFFFFF;
  padding:  20rpx 0rpx 20rpx 30rpx;
  .user-info-card{
    justify-content: space-between;
    .user-info{
      image{
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
      }
      text{
        margin-left: 10rpx;
        font-size: 26rpx;
        color: #191919;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
    .star{
      font-size: 34rpx!important;
      margin-left: 6rpx;
      color: #ededed;
    }
    .star-active{
      color: #d1b085;
    }
  }
  .comment{
    margin-top: 20rpx;
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #191919;
    letter-spacing: 2rpx;
    font-weight: 500;
    line-height: 37rpx;
  }
  .img-and-video{
    white-space: nowrap;
    margin-top: 20rpx;
    image,video{
      margin-right: 10rpx;
      width: 160rpx;
      height: 160rpx;
      &:last-of-type{
        margin-right: 30rpx;
      }
    }
  }
  .comment-tip{
    margin-top: 20rpx;
    font-size: 20rpx;
    color: #999999;
    letter-spacing: 0;
    font-weight: 400;
  }
}
.no-data{
	width: 100%;
	height: 480rpx;
	background:#FFFFFF;
	image{
		width: 380rpx;
		height: 380rpx;
	}
}
</style>
