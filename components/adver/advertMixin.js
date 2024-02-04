const appId = "wx85062354b0263ff6"
const envVersion = 'release' // develop开发版 trial	体验版 release 正式版
export default {
    methods:{
        // 页面点击
        pageClick(item){
            const type = parseInt((item?.advertJumpUrlType || 1))
            let id = item?.advertJumpUrl || ''
            let advertJumpUrl = item?.advertJumpWxminiId
            if ([3,4,6,17].includes(type)) {
                id = item?.advertJumpWxminiId
                advertJumpUrl = item?.advertJumpUrl || ''
            }
            if([1,2,10,11,15].includes(type)){
                return
            }
            if([3].includes(type)){
                this.goTo(advertJumpUrl)
                return
            }
            if([4,6].includes(type)){
                this.goTo(`/pages/webview/webview?url=${advertJumpUrl}`)
                return
            }
            if([5].includes(type)){
                if(id == this.$globleData.appletId){
                    this.goTo(`/${advertJumpUrl}`)
                    return
                }
                uni.navigateToMiniProgram({
                    appId: id,
                    path: advertJumpUrl,
                })
                return
            }
            if([7].includes(type)){
                uni.navigateToMiniProgram({
                    appId: appId,
                    path: `pagesE/scheme/mapDepot?businessId=${id}`,
                    envVersion
                })
                return
            }
            if([8].includes(type)){
                uni.navigateToMiniProgram({
                    appId: appId,
                    path: `pagesE/scheme/case?id=${id}`,
                    envVersion
                })
                return
            }
            if([9].includes(type)){
                uni.navigateToMiniProgram({
                    appId: appId,
                    path: `pages/scheme/videoDetail?id=${id}`,
                    envVersion
                })
                return
            }
            if([12].includes(type)){
                this.goTo(`/pagesA/shop/goodsDetail?id=${id}`)
                return
            }
            if([13].includes(type)){
                this.goTo(`/pagesB/search/goodsList?goodsGroupId=${id}`)
                return
            }
            if([14].includes(type)){
                this.goTo(`/pagesC/raffle/index?activityId=${id}`)
                return
            }
            if([17].includes(type)){
                uni.navigateTo({
                    url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${id}`
                })
                return
            }
        }
    }
}
