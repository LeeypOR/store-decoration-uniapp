// 兑换专区
import request from "../http/request";

export default {
    //用户兑换活动列表
    exchangeActionList(param){
        return request(param,'/goldenhome/gh/lottery/wxmini/convert/activity/list','post')
    },
    // 兑换弹窗记录
    exchangeRecord(param){
      return request(param,'/goldenhome/gh/lottery/wxmini/convert/window/record/add','post')
    },
      // 兑换专区类表
    exchangeZoonList(param){
      return request(param,'/goldenhome/gh/lottery/wxmini/convert/goods/list','get')
    },
    // 兑换专区券类表
    exchangeCouponList(param){
      return request(param,'/goldenhome/gh/lottery/wxmini/convert/ticket/list','get')
    },
      // 兑换专区商品详情
    exchangeDetail(param){
      return request(param,'/goldenhome/gh/lottery/wxmini/convert/goods/query','get')
    },
    // 兑换专区下单
    exchangeCreateOrder(param){
      return request(param,'/goldenhome/gh/lottery/wxmini/convert/goods/addOrder','post')
    }
}