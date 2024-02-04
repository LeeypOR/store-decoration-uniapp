import http from './serve/api/index'
import {globalParams} from './requestParams'
let chainId = ''
let info = ''
// 访问方式，1搜索,2转发, 3海报，4二维码,5链接,6短链接
let intoChannel = 1
// 插码统计
async function  plugInCodeInit(userInfo={},ditchParam,scene){
    scene = scene || uni.getStorageSync('scene')
    if(chainId && [1089,1001].includes(scene)){
        return
    }
    uni.setStorageSync('scene',scene)
    if([1036,1058,1065,1082,1167,1194,1008,1007].includes(scene)){
        intoChannel = 2
    }
    if([1047,1048,1049].includes(scene)){
        intoChannel = 3
    }
    if([1179].includes(scene)){
        intoChannel = 6
    }
    if (ditchParam?.channelName) {
        if (intoChannel == 3) {
            intoChannel = 4
        }else{
            intoChannel = 5
        }
    }
    info = userInfo
    const systemInfo = uni.getSystemInfoSync();
    let {dataInfo:vipInfo} = await http.getMemberMemberInfo({phone: info.phoneNumber})
    let param = {
        'headPortrait': userInfo?.avatar || '',                          //	否	string	用户头像
        'nickname': userInfo?.nickName || '',                            //	是	string	昵称
        'openId': userInfo?.wxOpenId || '',                              //	是	string	微信openid
        'membershipGrade': vipInfo?.gradeName || '',                     //	否	string	会员级别
        'userPhone': userInfo?.phoneNumber || '',                        //	是	string	用户手机号
        'userId': userInfo?.id || '',                                    //	否	Long	用户id
        'loginIp': '',                                                   //	否	string	登录ip
        'loginAddress': '',                                              //	否	string	登录地址
        'shopId': globalParams?.shopId || '',                            //	是	string	店铺id
        'appVersion': '21.11.30',                                        //	否	string	应用版本
        'phoneBrand': systemInfo?.brand,                                 //	否	string	设备品牌
        'phoneModel': systemInfo?.model || '',                           //	否	string	设备型号
        'phoneSystem': systemInfo?.system || '',                         //	否	string	设备操作系统及版本
        'appPlatform': 'miniapp',                                        //	是	Long	应用平台名称：APP(app)，H5网页(h5)，小程序(miniapp)
        'platformVersion': systemInfo?.SDKVersion || '',                 //	否	string	平台版本号（微信版本号）
        'deviceId': systemInfo?.deviceId || '',                          //	否	string	设备id
        'channelName': ditchParam?.channelName || '金桔有品',
        'channelFlag': ditchParam?.channelFlag | '',
        'shareUserId': ditchParam?.userId,
        'intoChannel': intoChannel
    }
    const {dataInfo:res} = await http.initPlugInCode(param)
    chainId = res.chainId
}

// 插码事件
function eventPlugInCode(eventObj={}){
    if(!chainId){
        uni.setStorageSync('moduleDate',null)
        return
    }
    let startTime = dateFormat('YYYY-mm-dd HH:MM:SS',eventObj?.enterPageTime)
    let endTime = dateFormat('YYYY-mm-dd HH:MM:SS',new Date())
    let timeDiff = getTimeDiff(eventObj?.enterPageTime,new Date())
    const  moduleDate = uni.getStorageSync('moduleDate')
    let param = {
        'userId':info.id,
        'chainId': chainId,	                                        // 是	string	链路id
        'shopId': globalParams?.shopId || '',	                    // 是	string	店铺id
        'goodsName': eventObj?.goodsName || eventObj?.title || '',  // 是	string	商品名称/浏览详情
        'goodsId': eventObj?.goodsId || '',	                        // 否	string	商品id
        'enterPageTime': startTime,	                                // 是	string	页面进入时间 格式：YYYY-MM-DD HH:mm:ss
        'outPageTime':  endTime,	                                // 是	string	页面退出时间 格式：YYYY-MM-DD HH:mm:ss
        'browseTime': timeDiff,	                                    // 是	Long	浏览时长 秒
        'orderId': eventObj?.orderId || '',	                        // 否	string	订单号
        'intoChannel': intoChannel,	                                // 是	string	浏览渠道 1.公众号 2.小程序 3.用户分享 4.代理分享
        'eventSite': eventObj?.title || '其他',	                    // 是	string	浏览类型：首页、分类、会员、购物车、我的、商品列表页、商品详情页、文章浏览
        'eventType': eventObj?.type || '5',	                        // 是	string	动作类型/操作类型（1、加购，2、分享，3、下单，4、付款（此处下单付款指在购物车处），5、浏览,7,微页面点击）
        'sort': '1',	                                            // 是	string	排序号（按照每次进入浏览顺序依次排序记录）
        'extendField': eventObj?.extendField || '0',	            // 否	string	拓展字段
        'goodsNum':eventObj?.goodsNum,                              // 否   string  加购商品数量
        'jumpPage': moduleDate?.jumpPageName,                       // 否   string  下一页面名称
        'browseType': moduleDate?.moduleName                         // 否   string  微页面 浏览类型
    }
    http.eventPlugInCode(param).catch((e)=>{
        console.log('插码失败',e)
    })
    uni.setStorageSync('moduleDate',null)
}


// 时间格式化
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
// 计算时间差
function getTimeDiff(start, end) {
    const startTime = start?.getTime() || 0
    const endTime = end?.getTime() || 0
    return  Math.round((endTime - startTime)/1000)
}

export {
    plugInCodeInit,
    eventPlugInCode,
}
