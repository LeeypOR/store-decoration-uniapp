import {Encrypt, Decrypt} from '../../public/index.js'
import { globalParams } from '../../requestParams.js'
import uniRequest from 'uni-request';

globalParams.accessToken =  uni.getStorageSync('accessToken') || '';
// 过滤掉需要token的请求
const noLogin = [
    '/goldenhome/ghs/wxmini/analysis/onlinerecord/add',
    '/goldenhome/ghs/wxmini/my/delivery/address/list',
    '/goldenhome/ghs/wxmini/cart/list',
    '/goldenhome/ghs/wxmini/goods/page',
    '/goldenhome/ghs/wxmini/goods/query',
    '/goldenhome/member/wxmini/integrate/info',
    '/goldenhome/member/wxmini/member/grade/info',
    '/goldenhome/ghs/wxmini/myplan/share/goods',
    '/goldenhome/ghs/wxmini/auth/addintegrate',
    '/goldenhome/ghs/wxmini/my/coupon/list',
    '/goldenhome/member/wxmini/benefits/card/valid/count',
    '/goldenhome/ghs/wxmini/product/reviews/page',
    '/goldenhome/ghs/wxmini/auth/refreshtoken',
    '/goldenhome/member/wxmini/member/card/info',
    '/goldenhome/member/wxmini/member/member/info',
    '/goldenhome/ghs/wxmin/distribution/people/getInfo',
    '/goldenhome/gh/live/wxmini/share/add',
    '/goldenhome/member/wxmini/member/popup/window',
    '/goldenhome/member/wxmini/member/popup/window/test',
    '/goldenhome/ghs/wxmini/order/get/orderNum',
    '/goldenhome/data/statistics/web/wxmini/init/userstatustics/add',
    '/goldenhome/gh/advert/wxmini/advert/list',
    '/goldenhome/ghs/wxmini/jdz/auth/refreshtoken',
    'goldenhome/ghs/wxmini/car/order/get/price',
    '/goldenhome/ghs/wxmini/auth/getMemberBenefitsPointsRule',
    '/goldenhome/gh/lottery/wxmini/convert/activity/list',
    '/goldenhome/ghs/wxmini/auth/queryOpenId'
]
// 过滤报错提示的请求
const noHint = [
    '/goldenhome/ghs/wxmini/my/delivery/address/list',
    '/goldenhome/ghs/wxmini/analysis/onlinerecord/add',
    '/goldenhome/ghs/wxmini/analysis/onlinerecord/update',
    '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/add',
    '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/update',
    '/goldenhome/ghs/wxmini/cart/list',
    '/goldenhome/ghs/wxmini/browse/add',
    '/goldenhome/member/wxmini/integrate/info',
    '/goldenhome/member/wxmini/member/grade/info',
    '/goldenhome/ghs/wxmini/myplan/share/goods',
    'goldenhome/ghs/wxmini/auth/addintegrate',
    '/goldenhome/ghs/wxmini/auth/addintegrate',
    '/goldenhome/ghs/wxmini/my/coupon/list',
    '/goldenhome/member/wxmini/benefits/card/valid/count',
    '/goldenhome/ghs/wxmini/product/reviews/page',
    '/goldenhome/ghs/wxmin/distribution/people/getInfo',
    '/goldenhome/gh/live/wxmini/share/add',
    '/goldenhome/gh/live/wxmini/product/viewTotalUp',
    '/goldenhome/member/wxmini/member/popup/window',
    '/goldenhome/ghs/wxmini/order/get/orderNum',
    '/goldenhome/invoice/wxmini/invoice/head/fuzzy/query',
    '/goldenhome/invoice/wxmini/invoice/head/nameAndCode',
    '/goldenhome/data/statistics/web/wxmini/init/userstatustics/add',
    '/goldenhome/data/statistics/web/wxmini/browsing/datastatistics/add',
    '/goldenhome/member/wxmini/member/member/info',
    '/goldenhome/ghs/wxmini/jdz/auth/refreshtoken',
    '/goldenhome/ghs/wxmini/car/order/get/price',
    '/goldenhome/ghs/wxmini/auth/getMemberBenefitsPointsRule',
    '/goldenhome/gh/lottery/wxmini/convert/activity/list',
    '/goldenhome/ghs/wxmini/auth/queryOpenId'

]

// 请求loading的数量
let reqToastNum = 0
let errorCount = 0
const configData = globalParams
const headerParam = configData.headerParam
const pending = [];
uniRequest.defaults.headers['Content-Type'] = 'application/json'
uniRequest.defaults.timeout = 6000 * 10
//请求拦截
uniRequest.interceptors.request.use(
    req => {
        // 如果全局变量中没有 就从本地缓存中取
        if(!globalParams?.accessToken){
            globalParams.accessToken =  uni.getStorageSync('accessToken') || '';
        }
        headerParam.shopId = globalParams.shopId
        headerParam.openId = globalParams?.openId || ''
        headerParam.timestamp = new Date().getTime()
        console.log(headerParam,'999999')
        req.headers['Common-Param'] =Encrypt(JSON.stringify(headerParam))
        req.headers['Auth-Token'] =  globalParams?.accessToken || ''
        return req;
    },
    err => {
        console.log('请求拦截报错', err)
        return err
    }
)
// 响应拦截
uniRequest.interceptors.response.use(response => {
    console.log(response,'99999999999response');
    if (!response || response.status !== 200) {
        if(errorCount==0){
            uni.showModal({
                title: '温馨提示',
                content: '网络错误',
                showCancel: false,
            })
        // return;
        }
       errorCount++ 
    }
    
    return response;
}, err => {
    console.log('响应拦截报错', err)
    return
})

/**
 * @param params  请求参数
 * @param url     请求地址
 * @param method  请求方式 post get
 * @returns {Promise<unknown>}
 * @constructor
 */
function Request(params, url, method,isShowLoading=true,isShowMsg=true) {
    let encrypt = configData.encrypt; //是否需要加密
    let paramCode =params
    if(encrypt && params){
        paramCode = {body:Encrypt(JSON.stringify(params))}
    }
    return new Promise((resolve, reject) => {

        if(!globalParams.accessToken && noLogin.includes(url)){
            reject('')
            return
        }
        if(isShowLoading){
            reqToastNum = reqToastNum + 1
            uni.showLoading({
                title: '',
                mask:true
            })
        }
        uniRequest.request({
            url:  configData.baseUrl+url,
            method: method ? method : 'POST',
            data: paramCode ,
        }).then(res => {
            if(!res){
                reject(res)
                closeLoading();
                return
            }
            if (encrypt && res.data && res.data.dataInfo) { //如果是加密的，就需要解密
                let dataInfo = Decrypt(res.data.dataInfo)
                let resData = JSON.parse(dataInfo)
                res.data.dataInfo = resData;
            }
            // // 判断是否已经存在弹框
            // if(configData.hasShow){
            // 	resolve(res.data)
            // 	closeLoading();
            // 	return
            // }

            if(res.data.returnCode == 1003){
                const pages = getCurrentPages();
                const page = pages[pages.length - 1];
                if(noLogin.includes(url)){
                    globalParams.accessToken = null
                    reject(res.data)
                    return
                }
                // 避免页面多次跳转
                if(!'/pages/login/index'.includes(page.route)){
				   return uni.navigateTo({
                    url:'/pages/login/index'
				   })
                }
                closeLoading();
                // configData.hasShow = false;
                // uni.showModal({
                // 	title: '温馨提示',
                // 	content: '登录失效，请重新登录',
                // 	showCancel: false,
                // 	success: (res) => {
                // 		if (res.confirm) {
                // 		}
                // 	}
                // })

                // reject(res.data)
                return
            }
          if (res.data.returnCode != 1000 && !noHint.includes(url)) {
            console.log('000000000000000');
                // configData为true这不再显示弹窗(存在问题 可以参考loading优化)
                const filter = (res?.data.message == '服务器正在维护' || res?.data.message == '不满足优惠券满减金额')  ? false : true
                filter && isShowMsg && !configData.hasShow && uni.showModal({
                    title: '温馨提示',
                    content: res.data.message || '未知错误',
                    showCancel: false,
                    success(res) {
                        configData.hasShow = false;
                    }
                })
                configData.hasShow = true;
                reject(res.data)
                closeLoading();
                return
            }
            closeLoading();
            resolve(res.data)
        }).catch(err => {
            console.log(err,'err')
            closeLoading();
            reject(err)
        })
    })

}
// 上传文件
function uploadFile(file,isShowLoad){
    if(isShowLoad){
        uni.showLoading({
            title: '上传中',
            mask:true
        });
    }
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: configData.baseUrl+'/goldenhome/ghs/wxmini/upload', //仅为示例，非真实的接口地址
            filePath: file,
            name: 'file',
            success: (res) => {
                resolve(JSON.parse(res.data))
            },
            fail:(err) => {
                uni.showToast({
                    title: '上传失败',
                    mask:true,
                    duration: 2000,
                    icon:"none"
                });
                reject(err.data)
            },
            complete: () => {
                if (isShowLoad) {
                    uni.hideLoading()
                }
            }
        });
    })
}

// 清除loading弹窗
function closeLoading(){
    reqToastNum = reqToastNum - 1
    if(reqToastNum <= 0){
        uni.hideLoading()
    }
}

export default function(data, url, method,isShowLoad=false,isShowMsg) {
    return Request(data, url, method,isShowLoad,isShowMsg)
}

export {
    uploadFile
}
