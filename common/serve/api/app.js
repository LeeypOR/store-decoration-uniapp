import request from "../http/request";

export default {
    // 绑定openId
    bindOpenId(param){
        return request(param,'/goldenhome/ghs/wxmini/auth/bindOpenid','post')
    },
    // h5跳小程序绑定openId
    getWechatOpenId(param){
        return request(param,'/goldenhome/ghs/wxmini/auth/queryOpenId','post')
    },
    // 更改手机号
    changePhone(param){
        return request(param,'/goldenhome/ghs/wxmini/auth/replace','post')
    }
}
