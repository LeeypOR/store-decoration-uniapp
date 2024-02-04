async function getLoginIntegral(that){
    if(!that.$globleData.loginTime && uni.getStorageSync('accessToken')){
        const {dataInfo:res} = await that.$http.getMemberBenefitsPointsRule()
        let time = res?.browseTime ?? null
        if (time == null) {
            return
        }
        that.$globleData.loginTime = setTimeout(() => {
            that.$http.addIntegrate()
            that.globalData.loginTime = null
        }, parseInt(time) * 1000)
    }

}

export {
    getLoginIntegral
}
