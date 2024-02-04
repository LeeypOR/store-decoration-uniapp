
<script>
import { mapMutations,mapState  } from 'vuex'
// const livePlayer = "" && requirePlugin('live-player-plugin')
import {disposeToken,getUserOpenId} from "./common/public/disposeToken";
import {getLoginIntegral} from "./common/public/getLoginIntegral";

const systemInfo = uni.getSystemInfoSync();


function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}
export default {

    globalData: {
        navbarHeight:'',
        windowHeight:systemInfo.windowHeight,
        shareMessage:null,
        posterMessage:null,
        systemInfo:null,
        firstTime:true,
        freshShopId:['433733032805924864','461887105476845568'],
        preveImage:''
    },
    onLaunch: function(e) {
      console.log('app onLanch',e);
      getUserOpenId(this)
        // 传参token处理
    if(e.query?.accessToken){
        disposeToken(e.query?.accessToken,this)
    }

        uni.getSystemInfo({
            success: res => {
              this.globalData.systemInfo = res;
              this.$globleData.aspectRatio = res.screenHeight/res.screenWidth
            }
        });
        // 获取胶囊按钮的位置
        // #ifdef MP-WEIXIN
        const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
        const navbarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo
	            .height + systemInfo.statusBarHeight+ 'px'
	      this.globalData.navbarHeight = navbarHeight
        // #endif
        this.$globleData.userData = uni.getStorageSync('userInfo') || {}
        this.$http.analysisAdd({'enterPage':'进入小程序'}).then((res)=>{
            this.$globleData.analysisId = res?.dataInfo?.id || ''
        })
        // 获取默认地址
        this.$http.getAddressList().then((res)=>{
            const list = res?.dataInfo || []
            if(list.length<=0){
                this.$store.commit('setDefaultAddress',null)
                this.$store.commit('setSelAddress',null)
            }
            let selAddressOld = this.$store.selAddress || {}
            let address = null
            let selAddress = null
            for(let item of list){
                if(item.defaultAddress == 1){
                    address = item
                }
                if(item.id == selAddressOld.selAddress){
                    selAddress = item
                }
            }
            this.$store.commit('setDefaultAddress',address)
            this.$store.commit('setSelAddress',selAddress)

        })
        this.getShareMessage()
        this.getPosterMessage()
        this.getDistributor()
        getLoginIntegral(this)
    },
    onShow: function(e) {
        console.log('onShow',e)
        this.$globleData.shopId = e?.query?.shopId || this.$globleData.shopId
        this.$globleData.buyType = e?.query?.userType ?? 2
        this.$globleData.CanteenName = e?.query?.canteenName ?? ''
        this.$globleData.PurchaserName = e?.query?.purchaserName ?? ''
        if(this.globalData.preveImage=='preveImage' ){
          this.globalData.preveImage = ''
        }
        
        this.$disposeScene(e,this)
        this.getNavbarList()
    },
    onHide: function(e) {
      console.log('app onHide',e);
      if(!this.globalData.preveImage){
        this.setExchangeList([])
      }
    // 隐藏后3s没在进来就算
        setTimeout(()=>{
            if(!this.$globleData.analysisId){
                return
            }
            this.$http.analysisUpdate({id:this.$globleData.analysisId,endPage:'退出小程序'})
        },3*1000)
    },
    methods:{
      ...mapMutations(['setExchangeList']),
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
	  // 分享配置信息查询
	  async getShareMessage(){
            try {
                let res = await this.$http.shareQuery({shareType:1})
		    this.globalData.shareMessage = res.dataInfo
            } catch (error) {
                console.log(error)
            }

	  },
	  // 分享配置信息查询
	  async getPosterMessage(){
            try {
                let res = await this.$http.shareQuery({shareType:2})
                this.globalData.posterMessage = res.dataInfo
            } catch (error) {
                console.log(error)
            }
	  },
        // 底部导航
        async getNavbarList(){
            try{
                let res = await this.$http.navbarList()
                let data = res.dataInfo || null
                if(data.navigationList.length){
                    data.navigationList.forEach((item,index)=>{
                        item.iconPath = item.navigationImage
                        item.selectedIconPath = item.navigationImageHigh
                        item.text = item.navigationName
                        // item.count = 2
                        if(item.jumpTargetType == 'HOMEPAGE'){
                            item.pagePath = '/pages/home/index'
                        }
                        if(item.jumpTargetType == "CATEGORYPAGE"){
                            item.pagePath = '/pages/category/index'
                        }
                        if(item.jumpTargetType == "MEMBER"){
                            item.pagePath = '/pages/vipCenter/index'
                            // item.midButton=true
                        }
                        if(item.jumpTargetType == "SHOPPINGCAR"){
                            item.pagePath = '/pages/shop/shopCart'
                        }
                        if(item.jumpTargetType == "PERSONALCENTER"){
                            item.pagePath = '/pages/mine/index'
                        }

                    })
                }
                this.$store.commit('setTabbarList',data)
            }catch(e){
                //TODO handle the exception
            }
        }
    }
}
</script>

<style lang='scss'>
/*每个页面公共css */
/* u—view 基础样式 */
@import "uview-ui/index.scss";
@import './static/icon-font/iconfont.css';


// 设置全局page处理状态栏
page{
  background-color: #F8F8F8;
  font-family:  PingFang SC;
  overflow-x: hidden;
  font-weight: normal;
}
</style>
