<template>
  <view class="people-list" v-if="groupList.length>0">
    <view class="more-card u-flex">
       <text class="more-card-title" v-if="groupType !='SJ'">{{groupList.length}}人正在拼团，可直接参与</text>
       <text class="more-card-title" v-else>商家正在发起拼团，已拼{{groupList.length}}</text>
       <view class="more-card-right u-flex" @click="seeMore">
         <text>查看更多</text>
         <text class="iconfont icon-arrow"></text>
       </view>
    </view>
    <!--  使用swiper组件  -->
    <swiper :class="groupList.length>1?'swiper-2':'swiper-1'" v-if="groupList.length>0" vertical circular autoplay circular :display-multiple-items="groupList.length == 1?1:2">
      <swiper-item v-for="(item,index) in groupList" :key="index" class="list-card u-flex" style="height: 120rpx!important;">
        <block v-if="groupType !='SJ'">
          <view class="left-content u-flex">
            <image :src="item.userAvatar"></image>
            <text class="name">{{ item.userName }}</text>
          </view>
          <view class="right-content u-flex">
            <view>
              <!-- 普通拼团 -->
              <block v-if="groupType==1">
                <view class="tip">还差
                  <text class="color-red">{{ item.differenceNum || 0 }}人</text>
                  拼成
                </view>
                <view class="time">
                  还剩{{ timeObj[item.countDownEndTime] || downTime(item.countDownEndTime, item.countDownEndTime, 'time') }}
                </view>
              </block>
              <!-- 规则拼团 -->
              <block v-if="groupType==2">
                <view class="tip u-text-right">当前价格
                  <text class="color-red">￥{{switchMoney(item.lastGroupPrice)}}</text>
                </view>
                <view class="time">
                  <text class="num">还差
                    <text class="color-red">{{item.differenceNum || 0}}人</text>
                    拼成</text>
                   还剩{{ timeObj[item.countDownEndTime] || downTime(item.countDownEndTime, item.countDownEndTime, 'time') }}
                </view>
              </block>
            </view>
            <text class="btn" @click="goGroup(index)" v-if="item.isJoin !=0">去拼团</text>
            <text class="btn active" @click="goGroup(index,true)" v-else>已参与</text>
          </view>
        </block>
        <!-- 规则拼团 商家拼团 -->
        <block v-else>
            <view class="merchant-left-card u-flex">
              <image :src="item.userAvatar"></image>
              <view>
                <view class="left-name">{{item.userName}}参与拼团</view>
                <view class="left-time">{{item.joinTime}}</view>
              </view>
            </view>
            <view class="merchant-right-card">当前价格<text class="right-price">￥{{switchMoney(item.groupPayPrice || item.groupBeatPayPrice)}}</text></view>
        </block>
      </swiper-item>
    </swiper>
    <!--  查看跟多弹窗  -->
    <u-popup v-model="show"
             mode="center"
             width="630rpx"
             height="50%"
             border-radius="30"
             closeable>
      <view class="popup-box u-flex">
        <view class="head">可参与的拼团</view>
        <view class="center u-flex-1">
          <scroll-view scroll-y="true" style="height: 100%;">
          <view class="center-item u-flex" v-for="(item,index) in groupList" :key="index">
            <image :src="item.userAvatar"></image>
            <view class="u-flex u-flex-1 right">
              <!--  普通拼团  -->
              <block v-if="groupType==1">
                <view class="u-flex content" style="flex-direction: column">
                  <text class="name">{{item.userName}}</text>
                  <text class="tip">已拼{{item.joinNum}}人 还差{{item.differenceNum}}人</text>
                  <text class="time">剩余{{timeObj[item.countDownEndTime] || downTime(item.countDownEndTime,item.countDownEndTime,'time')}}</text>
                </view>
                <view class="go-btn" @click="goGroup(index)" v-if="item.isJoin !=0">去拼单</view>
                <view class="go-btn active"  v-else >邀请好友
                  <button  :data-groupId="groupInfo.id"  type="default" class="sharBtn" open-type="share"></button>
                </view>
              </block>
              <!--  规则拼团 -->
              <block v-if="groupType==2">
                <view class="u-flex content rule" style="flex-direction: column">
                  <view class="u-flex">
                    <text class="name">{{item.userName}}</text>
                    <text class="tip">已拼{{item.joinNum}}人 ¥{{switchMoney(item.lastGroupPrice)}}</text>
                  </view>
                  <text class="time">剩余{{timeObj[item.countDownEndTime] || downTime(item.countDownEndTime,item.countDownEndTime,'time')}}</text>
                </view>
                <view class="go-btn-rule" :class="{'active':item.isJoin == 0}" @click="ruleShow(item,index)">
                  <view  v-if="item.isJoin !=0">去拼单</view>
                  <view  v-else>邀请好友</view>
                  <view class="bottom-content u-flex">
                    <u-line-progress class="u-flex-1" :percent="getPercent(item)" height="4" active-color="#ffffff" inactive-color="#e8b759" :show-percent="false"></u-line-progress>
                    <text class="tip">差{{item.differenceNum}}人</text>
                  </view>
                  <button v-if="item.isJoin == 0"  :data-groupId="groupInfo.id" type="default" class="sharBtn" open-type="share"></button>
                </view>
              </block>
            </view>
          </view>
          <view class="bottom-hint" v-if="groupList.length>=10">仅显示10个可参与的拼单</view>
          </scroll-view>
        </view>
      </view>
    </u-popup>
    <!--  去拼团 分享 弹窗  -->
    <u-popup v-model="showTwo"
             mode="center"
             width="630rpx"
             border-radius="30"
             closeable>
      <view class="popup-box-two u-flex rule">
        <view class="head">参与{{groupInfo.userName || '商家'}}的拼单</view>
        <!--  普通拼团 或者 规则拼团一人   -->
        <blocK v-if="groupType==1">
          <view class="tip">仅剩<text class=color-red>{{groupInfo.differenceNum}}个</text>名额，{{timeObj[groupInfo.countDownEndTime] || downTime(groupInfo.countDownEndTime,groupInfo.countDownEndTime,'time')}}后截止</view>
          <image-list :list="groupMemberList"></image-list>
        </blocK>
        <!--  规则拼团多人  -->
        <block v-else>
          <view class="title">已拼<text class="color-red">{{groupInfo.joinNum || groupMemberList.length}}</text>人，{{timeObj[groupInfo.countDownEndTime] || downTime(groupInfo.countDownEndTime,groupInfo.countDownEndTime,'time')}}后截止</view>
          <view class="info">当前价格 <text class="color-red price">¥{{switchMoney(groupInfo.lastGroupPrice)}}</text></view>
          <view class="center" style="max-height: 31vh">
            <scroll-view scroll-y="true" style="height: 100%;">
              <view class="u-flex center-item" v-for="item in groupMemberList">
                <image :src="item.userAvatar"></image>
                <view class="u-flex u-flex-1 right">
                  <view class="u-flex content" style="flex-direction: column">
                    <text class="name">{{ item.userName }}</text>
                    <view class="time">{{ item.joinTime }}</view>
                  </view>
                  <view class="">拼团价
                    <text class="color-red">￥{{switchMoney(item.groupPayPrice  ||  item.groupBeatPayPrice) }}</text>
                  </view>
                </view>
              </view>
            </scroll-view>
          </view>
        </block>
        <view class="btn-box" >
          <view style="width: 100%;height: 100%;position: relative">
            <view class="go-btn" :class="groupType !=1?'go-btn-2':0" @click="joinGroup(getName.type)">{{getName.name}}</view>
            <button v-if="getName.type == 'YQHY'" :data-groupId="groupInfo.id" type="default" class="sharBtn" open-type="share"></button>
          </view>
          <view class="go-btn-again" v-if="groupType !=1 && isJoin" @click="joinGroup('QPD')">再次拼团</view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import imageList from "../components/imageList";
export default {
  components:{imageList},
  props:{
    // 成团信息列表
    groupList:{
      type:Array,
      defaultL:[]
    },
    // 拼团类型
    groupType:{
      type:[Number,String],
      defaultL: 1
    },
    // 规格
    specList:{
      type:Array,
      default: ()=>[]
    },
    dataInfo:{
      type:Array,
      default:()=>[]
    }
  },
  computed:{
    // 获取当前进度条百分比
    getPercent(){
       return(obj)=>{
         let joinNum = obj?.joinNum || 0
         let differenceNum = obj?.differenceNum || 0
         return joinNum/(joinNum+differenceNum) * 100
       }
    },
    getName() {
      if(this.isJoin){
        return{
          name:'邀请好友',
          type:'YQHY'
        }
      }
      if (this.groupType == 1) {
        return {
          name: '去拼团',
          type: 'QPD'
        }
      }
      if (this.groupType == 2 || this.groupType == 'SJ') {
        return {
          name: '参与拼团',
          type: 'QPD'
        }
      }
    }
  },
  data(){
    return{
      show:false,
      showTwo:false,
      groupMemberList:[],  // 拼团人员数据
      groupInfo:{},        // 当前拼团信息
      isJoin:false,        // 是否参与
      //按钮名称
      btnJSON:[
        {
          name:'去拼单',
          type:'QPD'
        },
        {
          name:'邀请好友',
          type:''
        },
        {
          name:'参与拼团',
          type:''
        },
        {
          name:'邀请成员',
          type:''
        },
        {
          name:'再次拼团',
          type:''
        },
      ]
    }
  },
  methods:{
    // 查看更多
    seeMore(){
      if(this.groupType == "SJ"){
        if(this.dataInfo[0]?.isJoin == 0){
          this.isJoin = true
        }
        this.groupInfo = this.dataInfo[0] || {}
        this.groupMemberList = this.groupList
        this.showTwo = true
        return
      }
      this.show = true
    },
    // 去拼团
    goGroup(index,isJoin=false){
      this.show = false
      this.showTwo = true
      this.isJoin = isJoin
      this.groupInfo = this.groupList[index] || {},
      this.groupMemberList = this.groupInfo?.groupMemberList || []
    },
    // 参加拼团
    joinGroup(type){
      const len = (this.specList?.filter(Boolean) || []).length
      this.showTwo = false
      if(type == 'QPD'){
        this.$store.commit('setJoinGroupId',this.groupInfo.id)
        if (!len) {
          this.$emit('buyNow', {isGroup: true,isJoin:true})
          return
        }
        this.$store.commit('setSpecification',true)
        this.$emit('showPopup', 6)
      }
      if(type == 'YQHY'){

      }
    },
    // 弹窗赋值
    showTwoPopup(groupInfo=null){
      if(!groupInfo){
        return
      }
      this.show = false
      this.showTwo = true
      this.groupInfo = groupInfo
      let type = groupInfo?.isJoin || 0
      this.isJoin = type == 1?true:false
      this.groupMemberList = this.groupInfo?.groupMemberList || []
    },
    // 规则弹窗控制
    ruleShow(item,index){
      if(item.isJoin == 0){
        this.show = false
        this.isJoin = true
        return
      }
      this.goGroup(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.people-list{
  margin-top: 20rpx;
  background-color: #ffffff;
  padding: 0 30rpx;
  .more-card{
    justify-content: space-between;
    padding: 20rpx 0rpx;
    &-title{
      font-size: 28rpx;
      color: #000000;
    }
    &-right{
      font-size: 24rpx;
      color: #999999;
      .icon-arrow{
        font-size: 36rpx!important;
      }
    }
  }
  .list-card{
    justify-content: space-between;
    border-top: 1px solid #E6E6E6;
    max-height: 120rpx;
    height: 120rpx!important;
    .left-content{
      image{
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
      }
      .name{
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #000000;
      }
    }
    .right-content{
      .tip{
        font-size: 28rpx;
        color: #000000;
      }
      .time{
        font-size: 24rpx;
        color: #999999;
      }
      .num{
        color: #000000;
        margin-right: 24rpx;
      }
      .btn{
        margin-left: 20rpx;
        padding: 8rpx 20rpx;
        background-color: #434343;

        font-size: 24rpx;
        color: #FFFFFF;
      }
    }
  }
}
.popup-box{
  overflow-y: hidden;
  padding-top:28rpx;
  flex-direction: column;
  height: 50vh;
  .head{
    padding-bottom: 30rpx;
    font-size: 32rpx;
    color: #191919;
  }
  .center{
    overflow-y: scroll;
    width: 100%;
    &-item{
      position: relative;
      padding: 30rpx 30rpx 0;
      align-items: flex-start;
      justify-content: space-between;
      .right{
        padding-bottom: 23rpx;
        margin-left: 24rpx;
        justify-content: space-between;
        border-bottom: 1px solid  #E6E6E6;
        .content{
          flex-direction: column;
          align-items: flex-start;
          .name{
            font-size: 24rpx;
            color: #000000;
          }
          .tip{
            margin-top: 2rpx;
            font-size: 26rpx;
            color: #191919;
          }
          .time{
            margin-top: 8rpx;
            font-size: 26rpx;
            color: #666666;
          }
        }
        .rule{
          .tip{
            margin-left: 28rpx;
            font-size: 24rpx;
            color: #000000;
          }
        }
        .go-btn{
          width: 144rpx;
          padding: 13rpx 0;
          background: #E8B759;
          border-radius: 14rpx;

          text-align: center;
          font-size: 28rpx;
          color: #FFFFFF;
        }
        .go-btn-rule{
          width: 164rpx;
         height: 90rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: #E8B759;
          border-radius: 14rpx;

          text-align: center;
          font-size: 28rpx;
          color: #FFFFFF;
          .bottom-content{
            transform: translateY(-10rpx);
            padding: 0 10rpx;
            width: 100%;
            align-items: flex-end;
            .tip{
              font-size: 18rpx;
              color: #FFFFFF;
              margin-left: 8rpx;
            }
          }
        }
      }
      &:before{
        content: '团长';
        position: absolute;
        top: 30rpx;
        left: 20rpx;
        z-index: 11;

        font-size: 20rpx;
        font-weight: 500;
        color: #FFFFFF;
        background: #E8B759;
        border-radius: 15rpx;
        padding: 2rpx 10rpx;
      }
    }
  }
  .bottom-hint{
    text-align: center;
    padding: 36rpx 0;
    font-size: 24rpx;
    color: #000000;
  }
  image{
    width: 90rpx;
    height: 90rpx;
    border-radius: 50%;
  }
}
.popup-box-two{
  padding: 40rpx 30rpx 35rpx 30rpx;
  width: 100%;
  flex-direction: column;
  .info{
    margin-top: 2rpx;
    margin-bottom: 20rpx;
    .price{
      font-size: 44rpx;
      font-weight: 600;
      color: #E1544A;
      margin-left: 10rpx;
    }
  }
  .center{
    overflow-y: scroll;
    width: 100%;
    &-item {
      position: relative;
      //padding-top: 30rpx;
      align-items: center;
      justify-content: space-between;
      .right {
        padding-top: 30rpx;
        padding-bottom: 30rpx;
        margin-left: 24rpx;
        justify-content: space-between;
        border-bottom: 1px solid #E6E6E6;
        .content {
          flex-direction: column;
          align-items: flex-start;
          .name {
            font-size: 24rpx;
            color: #000000;
          }
          .tip {
            margin-top: 2rpx;
            font-size: 26rpx;
            color: #191919;
          }
          .time {
            margin-top: 8rpx;
            font-size: 26rpx;
            color: #666666;
          }
        }
      }
    }
  }
  .head{
    transform: translatey(-4rpx);
    font-size: 32rpx;
    font-weight: 500;
    color: #191919;
    padding-bottom: 24rpx;
  }
  .tip{
    margin-top: 10rpx;
    margin-bottom: 30rpx;
    font-size: 30rpx;
    color: #191919;

  }
  .go-btn{
    padding: 12rpx 0;
    margin-top: 45rpx;
    width: 100%;
    background: #E8B759;
    border-radius: 45rpx;
    text-align: center;

    font-size: 32rpx;
    font-weight: 500;
    color: #FFFFFF;
    &-2{
      margin-top: 0;
    }
  }
  .go-btn-again{
    margin-top: 20rpx;
    width: 100%;
    padding: 12rpx 0;
    border-radius: 45rpx;
    border: 2rpx solid #E8B759;
    text-align: center;

    font-size: 32rpx;
    font-weight: 500;
    color: #E8B759;
  }
  image{
    width: 90rpx;
    height: 90rpx;
    border-radius: 50%;
  }
}
.btn-box{
  position: relative;
  width: 100%;
}
.active{
  background: #E85959!important;
}
.color-red{
  color: #E1544A;
}
.sharBtn {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
}
.swiper-1{
  height: 124rpx!important;
}
.swiper-2{
  height: 248rpx!important;
}

// 商家拼团
.merchant-left-card{
  image{
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    margin-right: 8rpx;
  }
  .left-name{
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 40rpx;
  }
  .left-time{
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 33rpx;
  }
}
.merchant-right-card{
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 40rpx;
  .right-price{
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #E1544A;
    line-height: 40rpx;
    margin-left: 10rpx;
  }
}
</style>