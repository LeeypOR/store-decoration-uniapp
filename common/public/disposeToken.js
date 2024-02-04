let oldSceneId = ''
let oldPath = ''
import {plugInCodeInit} from "../plugInCode";
async function disposeToken(token,that){
  if(token){
      that.$globleData.accessToken = token
      uni.setStorageSync('accessToken',token)
      await that.$http.bindOpenId({code:'dsfjioerjioejf'})
    //   uni.login({
    //       provider: 'weixin',
    //       success: async (loginRes) => {

    //       }
    //   });
  }
}

// 解析 scene
async function disposeScene(param=null,that){
    debugger
    const scene = param?.scene || ''
    const url = param?.path || ''
    const sceneId = param?.query?.scene || oldSceneId
    const path = [(url || uni.getStorageSync('path') || '')]
    const userId = param?.query?.contactId || ''
    if (sceneId) {
        try {
            let res = ''
            if(path.includes('pagesA/shop/goodsDetail')){
                res = await that.$http.getScene({id: sceneId})
            }
            if(path.includes('pages/home/miniPage') || path.includes('pages/home/index')){
                res = await that.$http.getMiniScene({id: sceneId})
            }
            oldSceneId = ''
            oldPath = ''
            this.$globleData.ditchParam = {
                channelCode:res?.dataInfo?.channelCode,
                channelFlag:res?.dataInfo?.channelFlag,
                channelName:res?.dataInfo?.channelName,
                userId:res?.dataInfo?.contactId || ''
            }
        } catch (e){
            oldSceneId = sceneId
            oldPath = url
        }
    }
    this.$globleData.ditchParam.userId =  this.$globleData.ditchParam.userId || userId
    plugInCodeInit(that.$globleData.userData,this.$globleData.ditchParam,scene)
}
// 获取用户openId
function getUserOpenId(that){
    wx.login({
        success:async ({code})=> {
            const res = await that.$http.getWechatOpenId({code:code})
            const openId =  res?.dataInfo
            that.$globleData.openId = openId
        }
    })
}
export {
    disposeToken,
    disposeScene,
    getUserOpenId
}
