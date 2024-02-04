<template>
  <view class="u-flex g-login">
    <u-navbar :is-back="false" :border-bottom="false" title="登录授权" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
      <image class="logo" src="@/static/image/login/login_logo.png"></image>
      <view class="title">金桔有品</view>
      <view class="tip">您暂未登录小程序，需要获得您的公开信息（昵称、 头像等）</view>
      <view v-if="flag">
         <button class="btn-auth u-flex" @click="$u.throttle(getUserProfile, 2000)">
        <view class="btn-view u-flex">
          <image class="icon-wechat" src="@/static/image/login/icon_wechat.png"></image>
          微信授权
        </view>
      </button>
      <view class="stop-login u-flex" @click="cancelLogin">取消登录</view>
      </view>
      <view class="">

      </view>
    <u-popup v-model="show" mode="bottom" closeable border-radius="14">
      <view class="popup-card u-flex">
        <image class="user-img" :src="avatar"></image>
        <view class="name">您好，{{strSplit(nickName,4)}}</view>
        <view class="tip">为了您的账户安全，请绑定手机号</view>
        <button class="btn-auth u-flex" open-type="getPhoneNumber" @getphonenumber="login">
          <view class="btn-view u-flex">
            <image class="icon-wechat" src="@/static/image/login/icon_wechat.png"></image>
            微信授权手机号
          </view>
        </button>
      </view>
    </u-popup>
    <u-popup v-model="phoneShow" mode="bottom" closeable border-radius="14" @close="cancelLogin">
      <view class="popup-phone ">
        <view class=" u-flex">
          <image class="band-img" src="../../static/image/login/login_logo.png"></image>
          <view class="phone-title">金桔有品</view>
        </view>
        <view class="popup-slect">
          请选择绑定的手机号进行登录
        </view>
        <view @click="phoneCheck(item)" class="phone-item" v-for="(item,index) in moreUserInfo" :key="index">
          <view class="phone-number">
            {{item.phone}}
          </view>
          <image v-show="item.checked && userId == item.id" class="selce-image" src="../../static/image/login/icon_xuanz.png" mode="" />

        </view>
        <view class="phone-foot ">
          <view @click="cancelLogin" class="phone-cancel">
            取消
          </view>
          <view @click="phoneLogin" class="phone-cancel phone-confirm">
            登录
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>

export default {
    data(){
        return{
            title:'登录授权',
            openId:'',
            show:false,
            nickName:'',
            avatar:'',
            flag:false,
            phoneShow:false,
            moreUserInfo:[],
            userId:''
        }
    },
    onShow(){
	  // #ifdef MP-WEIXIN || MP-TOUTIAO
        this.getOpenIdByCode()
        // #endif
        uni.setStorageSync('default-address', null)
    },
    methods:{

        getUserProfile(e) {

            // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            if(this.nickName){
                this.show = true
                return
            }
	         // #ifdef MP-WEIXIN ||MP-TOUTIAO
            uni.getUserProfile({
                desc: '用于完善个人信息',
                success: (res) => {
                    const userInfo = res.userInfo || {}
                    this.nickName = userInfo.nickName
                    this.avatar = userInfo.avatarUrl
                    this.show = true
                },
                fail:(e)=> {
                    console.log(e)
                }
            })
	        // #endif

        },
        // 获取openId
        getOpenIdByCode(){
            // #ifdef MP-WEIXIN || MP-TOUTIAO
	  let provider
	  //  #ifdef MP-WEIXIN
	  provider = 'weixin'
	   // #endif
	   //  #ifdef MP-TOUTIAO
	   provider = 'toutiao'
	    // #endif
            uni.login({
                provider: provider,
                success: async (loginRes) => {
                    const res = await this.$http.getOpenId({code:loginRes.code})
                    this.moreUserInfo = res?.dataInfo ?? []
                    if(this.moreUserInfo.length>0){
                       this.openId = this.moreUserInfo[0].openId
                       this.$globleData.openId = this.openId
                        if(this.moreUserInfo.length==1 && this.moreUserInfo[0].id){
                          await this.phoneCheck(this.moreUserInfo[0])
                          await this.phoneLogin()
                        }
                        if(this.moreUserInfo.length==1 && !this.moreUserInfo[0].id){
                          this.flag = true
                        }
                        if(this.moreUserInfo.length>1){
                          this.phoneShow = true
                          this.phoneCheck(this.moreUserInfo[0])
                        }
                    }
                }
            });
            // #endif
        },
        // 授权手机号登录
        async login(e){

            if(!e.detail.encryptedData){
                return
            }
	        const info = this.$globleData.userData || {}
            let param = {
                openid: this.openId,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
                nickName: info.nickName ||  this.nickName,
                avatar: info.avatar ||  this.avatar,
            }
            const res = await this.$http.login(param)
           this.storeUserInfo(res)
        },
        async storeUserInfo(res){
            const userInfo = res?.dataInfo?.userInfo || {}
            this.$globleData.accessToken = res?.dataInfo?.accessToken || ''
            // 根据获取到的userId查询用户详情
            const dataInfo = await this.$http.getUserInfo({id:userInfo.userId})
            const userData = dataInfo?.dataInfo || {}
            this.$globleData.userData = userData
            // 初始化埋点
            // this.$plugInCodeInit(this.$globleData.userData)
            this.$disposeScene({},this)
            // 设置默认昵称和头像
            this.$globleData.userData.nickName = userData?.nickName || '金牌'
            this.$globleData.userData.avatar = userData?.avatar || '../../static/image/default_avatar.png'
            //创建用户行为
            this.$http.analysisAdd({'enterPage':'进入小程序'}).then((res)=>{
              this.$globleData.analysisId = res?.dataInfo?.id || ''
            })
            // 获取默认地址
            try{
              this.$http.getAddressList().then((res)=>{
              const list = res?.dataInfo || []
              for(let item of list){
                if(item.defaultAddress == 1){
                  this.$store.commit('setDefaultAddress',item)
                }
              }
            })
            }catch(error){
              console.log(error);

            }

          this.getDistributor()
            // 调用登录获取积分
            const browseTime = res?.dataInfo?.browseTime || null
            this.addIntegrate(browseTime)
            // 本地缓存用户信息和token
            uni.setStorageSync('accessToken',  res?.dataInfo?.accessToken);
            uni.setStorageSync('userInfo',  this.$globleData.userData);
            const pages = getCurrentPages();

            let index = 0
            for(let page of pages){
                if('/pages/login/index'.includes(page?.route)|| page?.route.indexOf('/pages/login/index')>-1){
                  index++
                }
            }
            //#ifdef MP-WEIXIN
            uni.navigateBack({delta:index});
            // #endif


    },
        // 取消登录
        cancelLogin() {
            this.cancelLogin = false
            const pages = getCurrentPages();
            const page = pages[0].route;
            if(page=='pages/vipCenter/index'){
                this.goTo('/pages/home/index', true)
                return
            }
            let index = 1
            uni.navigateBack({delta:index});
        },
        // 获取分销人信息
        async getDistributor(){
			  try{
                const param = {
                    userPhone:this.$globleData?.userData?.phoneNumber
                }
                let res = await this.$http.distributorQuery(param)
                this.$globleData.distributor = res?.dataInfo || null
			  }catch(error){
				  console.log(error)
                //TODO handle the exception
			  }
        },
        // 获取用户详情
        async getUserInfo(id){
            const  res =  this.$http.getUserInfo({id})
        },
        // 登录加积分
      addIntegrate(time = null) {
        if (!time && time != 0) {
          return
        }
        setTimeout(() => {
          this.$http.addIntegrate()
        }, parseInt(time) * 1000)
      },
      phoneCheck(item){

        this.$set(item,'checked',true)
        this.userId = item.id
        console.log(item);
      },
      async phoneLogin(){
         if(this.userId){
            try{
              let res = await this.$http.weChatLogin({id:this.userId})
              if(res?.dataInfo){
                this.phoneShow = false
                uni.showLoading({
                  title: '授权登录中...',
                  mask:true
                });
                this.storeUserInfo(res)
                uni.hideLoading();
              }
            }catch(e){
                uni.hideLoading();

              //TODO handle the exception
            }
          }
      }
    }
}
</script>

<style scoped lang="scss">
.g-login{
  font-family: PingFangSC-Medium, PingFang SC;
  flex-direction: column;
  background-image:url(https://jdz.g1999.com/ghs/20210917/781ec4ca9a5a41fc8bfb00867ee3d99e.png);
  background-size: cover;
  background-position:right center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  .logo{
      margin-top: 160rpx;
      width: 180rpx;
      height: 180rpx;
  }
  .title{
    margin-top: 40rpx;
    font-family: PingFangSC-Medium;
    font-size: 36rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 500;
  }
  .tip{
    margin-top: 10rpx;
    width: 476rpx;
    height: 80rpx;
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #666666;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
  .btn-auth{
    width: 690rpx;
    height: 90rpx;
    background: #D1B085;
    border-radius: 14rpx;
    margin-top: 70rpx;
    display: inline-block;
    align-items: center;
    justify-content: center;

    font-family: PingFangSC-Medium;
    font-size: 30rpx;
    color: #FFFFFF;
    font-weight: 500;
    .btn-view{
      height: 90rpx;
      justify-content: center;
      align-items: center;
    }

  }
  .stop-login{
    text-align: center;
    width: 690rpx;
    height: 90rpx;
    //background: #
    background: #FFFFFF;
    border: 1px solid #D1B085;
    border-radius: 14rpx;
    margin-top: 40rpx;
    justify-content: center;

    font-family: PingFangSC-Medium;
    font-size: 30rpx;
    //color: #FFFFFF;
    color: #D1B085;
    letter-spacing: 0;
    font-weight: 500;
  }
}
.icon-wechat{
  width: 34rpx;
  height: 28rpx;
  margin-right: 10rpx;
}
.popup-phone{
  padding: 20rpx 0 64rpx 30rpx;

  .band-img{
    width: 60rpx;
    height: 60rpx;
    border-radius: 30rpx;
  }
  .phone-title{
    font-size: 28rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 500;
    margin-left: 10rpx;
  }
  .popup-slect{
    padding: 35rpx 0;
    width: 690rpx;
    border-bottom: 1px solid rgba(230,230,230,0.4);
    font-size: 36rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 500;
  }
  .phone-item{
    width: 690rpx;
    height: 120rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(230,230,230,0.4);
    .selce-image{
      width: 50rpx;
      height: 50rpx;
    }
  }
  .phone-foot{
    width: 460rpx;
    margin: 84rpx auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .phone-cancel{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200rpx;
      height: 72rpx;
      background: #E6E6E6;
      border-radius: 4rpx;
      font-size: 30rpx;
      color: #D1B085;
      font-weight: 500;
    }
    .phone-confirm{
      margin-left: 30rpx;
      background: #D1B085;
     color: #FFFFFF;
    }
  }
}
.popup-card{
  flex-direction: column;
  padding: 100rpx 0 64rpx 0;
  .user-img{
    width: 140rpx;
    height: 140rpx;
    border-radius: 70rpx;
  }

  .name{
    margin-top: 40rpx;
    font-family: PingFangSC-Regular;
    font-size: 36rpx;
    color: #191919;
    letter-spacing: 0;
    font-weight: 400;
  }
  .tip{
    margin-top: 10rpx;
    font-family: PingFangSC-Regular;
    font-size: 26rpx;
    color: #666666;
    letter-spacing: 0;
    font-weight: 400;
  }
}

/deep/button::after{
  border: none;
}
</style>
