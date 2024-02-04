import request from "../http/request";

export default {
    // 广告
    getAdvert(param){
        return request(param,'/goldenhome/gh/advert/wxmini/advert/list','GET')
    },
    // 获取悬浮导航装修数据
    getNavigation(param){
        return request(param,'/goldenhome/decoration/wxmini/suspension/navigation/query','GET')
    }

}
