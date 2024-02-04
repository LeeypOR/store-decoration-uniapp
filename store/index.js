import vuex from 'vuex'
import vue from 'vue'


vue.use(vuex)
const store = new vuex.Store({
    state: {
        showCausePopup: false,                    // 退款原因弹窗
        showSpecification: false,                 // 规格弹窗
        defaultAddress: null,                     // 默认地址
        selAddress: null,                         // 选择的地址
        selShopAddress: null,                     // 选择的门店地址
        videoPlay: null,                          // 小程序正在播放的视频
        joinGroupId: null,                        // 参团id
        showDistributor: false,                   // 分銷員分享弹窗
        vipPopupList: [],                         // 会员信息弹窗列表
        invoiceInfo: null,                        // 发票信息
        tabbarInfo: null,                         // 底部导航的数据
        tabIndex: 0,                              // 底部导航的索引
        splashData: null,                           // 闪屏广告
        exchangeData: [],                            //兑换数据
        exchangePoupShow:false,                  //兑换券弹窗
    },
    mutations: {
        setShowCausePopup(state, value) {
            state.showCausePopup = value
        },
        setShowDistributor(state, value) {
            state.showDistributor = value
        },
        setSpecification (state, value) {
            state.showSpecification = value
        },
        setDefaultAddress(state, value){
            uni.setStorageSync('default-address', value)
            state.defaultAddress = value
        },
        setSelAddress(state, value){
            uni.setStorageSync('sel-address', value)
            state.selAddress = value
        },
        setSelShopAddress(state, value){
            state.selShopAddress = value
        },
        setVideoPlay(state, value){
            state.videoPlay = value
        },
        setJoinGroupId(state, value){
            state.joinGroupId = value
        },
        setVipPopupList(state, value){
            uni.setStorageSync('vipPopupList', value)
            state.vipPopupList = value
        },
        setInvoiceInfo(state, value){
            state.invoiceInfo = value
        },
        setTabbarList(state, value){
            state.tabbarInfo = value
        },
        setTabIndex (state, value) {
            state.tabIndex = value
        },
        setSplashData(state, value) {
            state.splashData = value
        },
        setExchangeList (state, value) {
          console.log('00000000000000兑换',value);
          
          state.exchangeData = value
        },
      
        
    },
    getters:{
        getDefaultAddress:(state)=>{
            return state.selAddress || uni.getStorageSync('sel-address') || state.defaultAddress
        },
        getVipPopupList(state){
            if(state?.vipPopupList?.length>0){
                return  state.vipPopupList
            }else{
                return uni.getStorageSync('vipPopupList') || []
            }
        },
        tabCurrent (state) {
            let tabbarInfo = state.tabbarInfo.navigationList
            let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
            let curRoute = routes[routes.length - 1].route //获取当前页面路由
            if(tabbarInfo?.length){
                for (let index = 0; index < tabbarInfo.length; index++) {
                    const element = tabbarInfo[index]
                    if(curRoute=='pages/vipCenter/index' && element.jumpTargetType== "MEMBER"){
                        return  index
                    }
                    if(curRoute=='pages/category/index' && element.jumpTargetType== "CATEGORYPAGE"){
                        return  index
                    }
                    if(curRoute=='pages/shop/shopCart' && element.jumpTargetType== "SHOPPINGCAR"){
                        return  index
                    }
                    if(curRoute=='pages/mine/index' && element.jumpTargetType== "PERSONALCENTER"){
                        return  index
                    }
                }
            }
        },
    }
})

export default store



