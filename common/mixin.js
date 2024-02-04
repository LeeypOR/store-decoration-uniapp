let noTokenUrl = [
    '/pages/webview/webview',
    '/pages/home/miniPage',
    '/pagesA/searchPage/index',
    '/pagesB/search/goodsList',
]
const tabBarPage = [
    '/pages/home/index',
    '/pages/mine/index',
    '/pages/shop/shopCart',
    '/pages/scheme/index',
    '/pages/category/index',
]
import { mapMutations,mapState} from 'vuex'
export default {
    data() {
        return {
            shopId:'',
            pageInId: '',
            timer: null,
            timeFlag: false,
            orderSatutsList: [
                {
                    type: 'ORDER_UNPAID',
                    name: '待付款',
                    color: '#EC4545',
                },
                {
                    type: 'ORDER_CANCEL',
                    name: '已取消',
                    color: '#999999',
                },
                {
                    type: 'ORDER_UN_ISSUE',
                    name: '待发货',
                    color: '#EC4545',
                },
                {
                    type: 'ORDER_LEFT_WAIT',
                    name: '商品自提',
                    color: '#EC4545',
                },
                {
                    type: 'ORDER_UN_RECEIVED',
                    name: '待收货',
                    color: '#EC4545',
                },
                {
                    type: 'ORDER_UN_EVALUATE',
                    name: '待评价',
                    color: '#EC4545',
                },
                {
                    type: 'ORDER_FINISH',
                    name: '已完成',
                    color: '#EC4545',
                },
                {
                    type: 'ORDER_CLOSE',
                    name: '已关闭',
                    color: '#EC4545',
                },
            ],
            groupStatusList: [
                {
                    type: 'ORDER_UNPAID',
                    name: '待付款',
                    color: '#E1544A',
                },
                {
                    type: 'ORDER_CANCEL',
                    name: '已取消',
                    color: '#E1544A',
                },
                {
                    type: 'GROUP_RUNNING',
                    name: '拼团中',
                    color: '#E1544A',
                },
                {
                    type: 'GROUP_SUCCESS',
                    name: '拼团成功',
                    color: '#E1544A',
                },
                {
                    type: 'GROUP_FAIL',
                    name: '拼团失败',
                    color: '#E1544A',
                },
                {
                    type: 'ORDER_PAY',
                    name: '已付款',
                    color: '#E1544A',
                },
            ],
            timeObj: {}, // 定时对象 里面存放倒计时间
            intervalIds: [], // 页面定时器id集合
            noClick: true, //防止多次点击的标识
            codeParam: {
                enterPageTime: '',
                outPageTime: '',
                type: '5',
            },
        }
    },
    onShow() {
        this.codeParam.enterPageTime = new Date()
        this.enterInPage()
        this.shopId = this.$globleData.shopId
    },
    // 页面隐藏
    onHide() {
        this.quitPage()
        this.stopVideo()
        this.quitPageByCode()
    // this.clearIntervalIds()
    },
    // 页面销毁
    onUnload() {
        this.quitPage()
        this.stopVideo()
        this.quitPageByCode()
        this.clearIntervalIds()
        this.$store.commit('setTabIndex', 9999999)
    },
    // 针对组件的
    beforeDestroy() {
        this.clearIntervalIds()
    },
    methods: {
      ...mapMutations(['setExchangeList']),
    //   企业微信客服
      openCustomerShare(){
        wx.openCustomerServiceChat({
        extInfo: {url: 'https://work.weixin.qq.com/kfid/kfc891015438789d94d?enc_scene=ENCFSHzHQRGr9prTzebDYRMkYFwuMzS9PU1auxrvLLUTMKR'},
        corpId: 'wxcb16cd7388152b05',
        success(res) {
            console.log(res,'chenggo');
        }
        })
    },
    // 分组公共方法
        groupingMethod(data = [], typeName = '') {
            let comData = JSON.parse(JSON.stringify(data))
            let starArr = []
            if (comData.length) {
                comData.forEach((v) => {
                    for (let i = 0; i < starArr.length; i++) {
                        if (starArr[i][typeName] == v[typeName]) {
                            starArr[i].info.push(v)
                            return
                        }
                    }
                    starArr.push({
                        [typeName]: v[typeName],
                        info: [v],
                    })
                })
            }
            return starArr
        },
        // 图片预览
      previewImage (current, urls) {
        getApp().globalData.preveImage='preveImage'
            uni.previewImage({
                current: current,
                urls: urls,
            })
        },
        // 清除当前页面的定时器
        clearIntervalIds() {
            let len = this.intervalIds?.length || 0
            if (!len) {
                return
            }
            for (let id of this.intervalIds) {
                clearInterval(id)
            }
        },
        // 关闭当前正在播放的视频
        stopVideo() {
            let obj = this.$store.state.videoPlay
            if (obj) {
                obj.pause()
            }
        },
        // 自定义页面返回 (如果页面栈里面只有一个 就直接跳转到首页 否则返回上一一个页面)
        backPage() {
            const pages = getCurrentPages() || []
            if (pages.length <= 1) {
                uni.switchTab({
                    url: '/pages/home/index',
                })
                return
            }
            uni.navigateBack()
        },
        // 时间格式化
        dateFormat(fmt, date) {
            let ret
            const opt = {
                'Y+': date.getFullYear().toString(), // 年
                'm+': (date.getMonth() + 1).toString(), // 月
                'd+': date.getDate().toString(), // 日
                'H+': date.getHours().toString(), // 时
                'M+': date.getMinutes().toString(), // 分
                'S+': date.getSeconds().toString(), // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            }
            for (let k in opt) {
                ret = new RegExp('(' + k + ')').exec(fmt)
                if (ret) {
                    fmt = fmt.replace(
                        ret[1],
                        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
                    )
                }
            }
            return fmt
        },
        // 全局页面跳转
        goTo(url, isTabBar = false, isBack = false) {
            if(tabBarPage.includes(url)){
                isTabBar = true
            }
            if (isTabBar) {
                uni.switchTab({
                    url: url,
                })
                return
            }
            const res = this.getIsLogin(url)
            if (!res) {
                return
            }
            if (isBack && !isTabBar) {
                uni.redirectTo({
                    url: url,
                })
                return
            }
            uni.navigateTo({
                url: url,
            })
        },
        // 是否登录
        getIsLogin(url = '') {
            const token = this.$globleData?.accessToken || null
            const list = noTokenUrl.filter((item) => {
                if (url.indexOf(item) >= 0) {
                    return true
                }
                return false
            })
            if (!token && !list.length) {
                uni.navigateTo({
                    url: '/pages/login/index',
                })
                return false
            }
            return true
        },
        goBackPage(backPage = 1) {
            uni.navigateBack({
                delta: backPage,
            })
        },
        // 转换金额
        switchMoney(money) {
            if (money) {
                return (parseFloat(money) / 100).toFixed(2)
            }
            if (money == 0) {
                return '0.00'
            }
            return money || ''
        },
        // 进入页面
        async enterInPage() {
            if (!this.$globleData.analysisId) {
                return
            }
            try {
                const res = await this.$http.analysisDetailAdd({
                    recordId: this.$globleData.analysisId,
                    detailStartPage: this.title || '其他',
                })
                this.pageInId = res?.dataInfo?.id || ''
            } catch (error) {
                console.log('进入页面报错' + error)
            }
        },
        // 埋点退出页面
        quitPageByCode() {
            this.codeParam.title = this.title
            this.$eventPlugInCode(this.codeParam)
        },
        // 退出页面
        async quitPage() {
            if (!this.pageInId) {
                return
            }
            try {
                await this.$http.analysisDetailUpdate({
                    id: this.pageInId,
                    detailEndPage: this.title || '其他',
                })
            } catch (error) {
                console.log('退出页面报错' + error)
            }
        },
        // 点击微页跳转路径
        clickMic(type, id) {
            if (type == 'GOODS') {
                //商品
                if (!id) {
                    return uni.showModal({
                        title: '温馨提示',
                        content: '页面跳转ID为空',
                        showCancel: false,
                    })
                }
                uni.navigateTo({
                    url: '/pagesA/shop/goodsDetail?id=' + id,
                })
            } else if (type == 'GOODS_GROUP') {
                //商品分类
                uni.navigateTo({
                    url: '/pagesB/search/goodsList',
                })
            } else if (type == 'MSPAGE') {
                //微页

                if (!id) {
                    return uni.showModal({
                        title: '温馨提示',
                        content: '页面跳转ID为空',
                        showCancel: false,
                    })
                }
                uni.navigateTo({
                    url: '/pages/home/miniPage?id=' + id,
                })
            }
        },
        countdown(end) {
            let day, hr, min, sec
            let now = new Date().getTime() / 1000
            let msec = parseInt(end) - now
            if (msec > 0) {
                day = parseInt(msec / 24 / 60 / 60)
                hr =
          parseInt((msec / 60 / 60) % 24) < 10
              ? '0' + parseInt((msec / 60 / 60) % 24)
              : parseInt((msec / 60 / 60) % 24)
                min =
          parseInt((msec / 60) % 60) < 10
              ? '0' + parseInt((msec / 60) % 60)
              : parseInt((msec / 60) % 60)
                sec = parseInt(msec % 60) < 10 ? '0' + parseInt(msec % 60) : parseInt(msec % 60)
                // this.hr = hr > 9 ? hr : '0' + hr
                // this.min = min > 9 ? min : '0' + min
                // this.sec = sec > 9 ? sec : '0' + sec
            } else {
                return false
            }
            return { day, hr, min, sec }
            // return day + '天' + hr + '时' + min + '分' + sec + '秒'
        },
        /**
     * time  必填 只支持时间戳
     * rulType 返回类型  day xx天xx时xx分  time 09:10:11 (后续扩展)  obj {day,hr,min,sec}
     *  isAll 是否
     *  callFun (倒计时结束回调事件)
     * */
        downTime(time, key, rulType = 'day', callFun = '', isALl = true) {
            if (!time) {
                return
            }
            if (this.timeObj[key]) {
                return
            }
            this.$set(this.timeObj, key, `--`)
            const end = time
            const interValId = setInterval(() => {
                const data = this.countdown(end)
                if (!data) {
                    clearInterval(interValId)
                    if (callFun) {
                        callFun()
                    }
                    if (rulType == 'day') {
                        this.$set(this.timeObj, key, '0天0时0分0秒')
                        return
                    }
                    this.$set(this.timeObj, key, '00:00:00')
                    return
                }
                if (rulType == 'day') {
                    if (isALl) {
                        this.$set(this.timeObj, key, `${data.day}天${data.hr}时${data.min}分${data.sec}秒`)
                    } else {
                        if (data.day <= 0) {
                            this.$set(this.timeObj, key, `${data.hr}时${data.min}分${data.sec}秒`)
                        } else if (data.hr <= 0) {
                            this.$set(this.timeObj, key, `${data.min}分${data.sec}秒`)
                        } else {
                            this.$set(this.timeObj, key, `${data.day}天${data.hr}时${data.min}分${data.sec}秒`)
                        }
                    }
                }
                if (rulType == 'time') {
                    let str = ''
                    if (data.day) {
                        str = str + `${data.day}:`
                    }
                    if (str.length > 0 || data.hr) {
                        if (data.hr != '00') {
                            str = str + `${data.hr}:`
                        }
                    }
                    if (str.length > 0 || data.min) {
                        str = str + `${data.min}:`
                    }
                    if (str.length > 0 || data.sec) {
                        str = str + `${data.sec}`
                    }
                    this.$set(this.timeObj, key, str)

                }
                if (rulType == 'obj') {
                    this.$set(this.timeObj, key, { day: data.day, hr: data.hr, min: data.min, sec: data.sec })
                }
            }, 1000)
            this.intervalIds.push(interValId)
            return null
        },
        // 防止重复点击的 （节流2s）
        noMultipleClicks(methods) {
            let that = this
            if (that.noClick) {
                that.noClick = false
                methods()
                setTimeout(function () {
                    that.noClick = true
                }, 2000)
            } else {
                console.log('请稍后点击')
            }
        },
        tabbarChange(index) {
            this.$store.commit('setTabIndex', index)
            let routes = getCurrentPages() // 获取当前打开过的页面路由数组
            let curRoute = routes[routes.length - 1].route //获取当前页面路由
            if (this.tabbarInfo?.navigationList) {
                let currentData = this.tabbarInfo.navigationList[index]
                console.log('currentData: ', currentData)
                if (curRoute == 'pages/home/miniPage' && currentData.jumpTargetValue == this.miniPageId) {
                    return false
                }

                if (!currentData.pagePath) {
                    if (currentData.jumpTargetType == 'CATEGORYPAGE') {
                        this.goTo('/pages/category/index', true)
                    }
                    if (currentData.jumpTargetType == 'MEMBER') {
                        this.goTo('/pages/vipCenter/index', true)
                    }
                    if (currentData.jumpTargetType == 'SHOPPINGCAR') {
                        this.goTo('/pages/shop/shopCart', true)
                    }
                    if (currentData.jumpTargetType == 'PERSONALCENTER') {
                        this.goTo('/pages/mine/index', true)
                    }
                    if (currentData.jumpTargetType == 'MSPAGE') {
                        this.goTo(`/pages/home/miniPage?id=${currentData.jumpTargetValue}&tabbar=true`)
                    }
                    // 跳转第二件半价和买一赠一
                    if (
                        currentData.jumpTargetType == 'SECONDHALF' ||
                        currentData.jumpTargetType == 'SECONDFREE'
                    ) {
                        this.goTo(`/pagesB/halfPrice/index?jumpPageType=${currentData.jumpPageType}`)
                    }
                    // 赚取积分页面
                    if (currentData.jumpTargetType == 'INTEGRAL') {
                        this.goTo(`/pagesA/myIntegral/getPoint`)
                    }
                    // 我的方案页面
                    if (currentData.jumpTargetType == 'MYPLAN') {
                        this.goTo(`/pages/scheme/index`)
                    }
                    // 所有商品的页面
                    if (currentData.jumpTargetType == 'ALLGOODS') {
                        this.goTo(`/pagesB/search/goodsList`)
                    }
                }
            }

      },
         // 兑换弹窗组件接收参数统一方法
         setAdvaerInfo(val){
          console.log('exchagne',val);
          this.exchageId = val.ids
          let arr = JSON.parse(JSON.stringify(this.exchangeData.length?this.exchangeData:this.exchangeInfo))
          if(this.exchageId == this.exchangeInfo.length ){//最后一个弹窗如果是windowRange: 1,//弹窗频次（1、每次打开2、每天第一次打开3、只出现一次将数据存到vuex 比如首页打开之后，分类就不会再弹，我就把enableWindow 改成2 不弹窗  其它类型就请求接口返回
            this.advaerFlag = { 'Date': new Date() }  //广告类型弹窗启动的条件


          }
            let flag = arr.some(item=>{
              return item.enableWindow == 1&&item.windowPlaces.includes(this.getRouter)
            })
            console.log('flag: ', flag);
           if(flag){
            arr.forEach(item => {
               if (item.id == val.activityId && item.windowRange == 1) {//弹窗是每次打开的就会在其它的页面把弹窗enableWindow 为2，给关掉，并给这条数据加一个是缓存的数据标识
                item.enableWindow = 2
				        item.isCash = true // 是否是每次弹窗缓存数据的标识

              }

            })

           }
           this.setExchangeList(arr)
        }

    },
    computed: {
      ...mapState(['exchangeData']),
      getRouter(){
        let pages = getCurrentPages()//关于获取页面的官方文档https://uniapp.dcloud.io/api/window/window

        let currentPage = pages[pages.length-1].route
        if(currentPage=='pages/home/index'){
          return '1'
        }
        if(currentPage=='pages/category/index'){
          return '2'
        }
        if(currentPage=='pages/vipCenter/index'){
          return '3'
        }
        if(currentPage=='pages/shop/shopCart'){
          return '4'
        }
        if(currentPage=='pages/mine/index'){
          return '5'
        }
        if(currentPage=='pagesA/shop/goodsDetail'){
          return '6'
        }
        if(currentPage=='pages/home/miniPage'){
          return '7'
        }
        return ''
      },
        tabbarIndex() {},
        // 图片多个用，给开支取一个图片地址
        imgUrl() {
            return function (val = '') {
                if (val && val.indexOf(',') > -1) {
                    return val.split(',')[0]
                } else {
                    return val
                }
            }
        },

        // 优惠券过期时间显示
        getCouponTitle() {
            return (obj = {}) => {
                let type = obj?.useTimeType || 0
                if (type == 1) {
                    return `有效期至${obj?.useEndTime?.substring(0, 10)}`
                }
                if (type == 2) {
                    if (obj?.useEndTime) {
                        return `有效期至${obj?.useEndTime?.substring(0, 10)}`
                    }
                    if (obj?.receiveDaysAble > 0) {
                        return `领取${obj?.receiveDaysAble}天内有效`
                    }
                    return '领取当天有效'
                }
                if (type == 3) {
                    return `永久有效`
                }
                return obj?.receiveDaysAble
                    ? `领取${obj?.receiveDaysAble}天内可用`
                    : `有效期至${obj?.useEndTime?.substring(0, 10)}`
            }
        },
        // 是否显示小时
        showCountHour() {
            return (val) => {
                if (val) {
                    let hr = parseInt((val / 60 / 60) % 24)
                    if (hr <= 0) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        },
        // 隐藏手机号
        hidePhone() {
            return (tel) => {
                if (tel && tel.length == 11) {
                    let reg = /^(\d{3})\d{4}(\d{4})$/
                    return tel.replace(reg, '$1****$2')
                }
                return tel
            }
        },
        // 计算返回的积分
        maxPoint() {
            return (goodsInfo = {}, price) => {
                if (JSON.stringify(goodsInfo) == '{}') {
                    return 0
                }
                let point = 0
                if (goodsInfo.returnPoints == 1) {
                    //如果是返积分
                    if (goodsInfo.returnPointsWay == 1) {
                        //比例模式返回
                        point = Math.floor(
                            (this.switchMoney(price) * Number(goodsInfo.returnPointsFormula)) / 100
                        )
                    } else {
                        point = goodsInfo.returnPointsFormula
                    }
                }
                return point
            }
        },
        // 订单状态
        getOrderStatus() {
            return function (type) {
                // 对计算属性进行传参
                let statusArr = this.orderSatutsList.filter((item) => {
                    return item.type == type
                })
                return statusArr[0]
            }
        },

        // 拼团订单状态
        getGroupStatus() {
            return function (type) {
                // 对计算属性进行传参
                let statusArr = this.groupStatusList.filter((item) => {
                    return item.type == type
                })
                return statusArr[0]
            }
        },
        // 字符串切割
        strSplit() {
            return (name = '', length) => {
                if (name.length > length) {
                    return name.substring(0, length) + '...'
                }
                return name
            }
        },
        strSplitTwo() {
            return (name = '', length) => {
                if (name.length > length) {
                    return name.substring(0, length)
                }
                return name
            }
        },
    },
}
