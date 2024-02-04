export const globalParams = {
    // baseUrl: 'https://testsd.cicd.vpclub.cn', //开发环境
    // baseUrl: 'https://preresearch.vpclub.cn', //测试地环境
    baseUrl: 'https://jdz.g1999.com', //正式环境

    headerParam: {
        deviceType: 'wxminiapp',	                //  客户端设备类型，见下表
        version: '1.0.0',	                        //  展示版本号，如：1.0.0
        versionCode: '10',	                        //  构建版本号，如：10
        chainId: '',		                        //  32位UUID，用于打通全平台链路追踪
        appId: 'wxc6ebce156858e28f',		                        //  约定的客户端id
    },
    accessToken:'',                                 //  用户凭证
    appletId: 'wxc6ebce156858e28f',                 //  区分是哪个小程序
    userData: null,	                                //  用户网络数据
    distributor:null,                               //分销人信息
    hasLogin: false,		                        //  用户是否登录，全局判断
    encrypt: false,		                            //  接口是否需要加密
    startTime:'',                                       //  进入页面的时间
    aspectRatio:'',                                 //  屏幕高度/屏幕宽度
    timeCode:{},                                     //  用来存放短信倒计时的时间
    analysisId:'',
    analysisDetailsId: '',
    CanteenName: '',
    PurchaserName:'',
    // distributionId:'',                               //分销商的id\
    // 设置请求公参 放到头部    418747464275722240  （测试） 426425925530288128 （生产）433733032805924864(测试生鲜)
    shopId:'426425925530288128',
    ditchParam:{},   // 渠道分享参数
}
