export default {
	// 分享
  onShareAppMessage (e) {
    getApp().globalData.preveImage='preveImage' 
		let sharLiveData = e?.target?.dataset?.sharlivedata || null
		const userInfo = this.$globleData?.userData || {}
		if (sharLiveData) { //直播间分享过来的
			const reqParam = {
				sharePhone: userInfo.phoneNumber,
				shareUserType: '3',
				shareType: '2',
				roomName: sharLiveData.name,
				roomId: sharLiveData.roomId,
				createrPhone: '',
				liveStatus: sharLiveData.liveStatus,
				anchorWechat: sharLiveData.anchorWechat,
				anchorName: sharLiveData.anchorName,
				appId: sharLiveData.appId,
				userId: this.$globleData?.userData?.id
			}
			try {
				this.$http.shareLiveAdd(reqParam)
			} catch(e) {
				console.log('页面分享报错')
			}
			const roomId = sharLiveData.roomId

			const param = {
				userId: userInfo.id || '',
				roomId: roomId,
				wechatId: sharLiveData.anchorWechat
			}
			let customParams = encodeURIComponent(JSON.stringify(param))
			return {
				title: sharLiveData.name,
				imageUrl: sharLiveData.shareImgLocal || sharLiveData.shareImg,
				path: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${roomId}&custom_params=${customParams}`
			}
		} else {
			const pages = getCurrentPages();
			const page = pages[pages.length - 1];
			let path = page.route
      if (this?.miniPageId) {
        try {
          this.$eventPlugInCode({
            ...this.codeParam,
            title:this.title,
            type:'2',
          })
        } catch (error) {
          console.log(error);
        }
			
				path = `${path}?id=${this.miniPageId}`
			}
			return {
				title: getApp().globalData.shareMessage.shareTitle,
				imageUrl: getApp().globalData.shareMessage.imageAddr,
				path: path
			}
		}
	},
	// onShareTimeline() {
	// 	const pages = getCurrentPages();
	// 	const page = pages[pages.length - 1];
	// 	const path = page.route
	//     return {
	//         title: getApp().globalData.shareMessage.shareTitle,
	//         query: path,
	//         imageUrl: getApp().globalData.shareMessage.imageAddr,
	//     }
	//  }
	
}