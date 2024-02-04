export default {
    data(){
        return {
            id:'',
            nickName:'',
            phoneNumber:"",
            backPages:1,
            area:'',
            customerName:'',
            birthday:'',
            gender:'1',
            userInfo:{},
			defaultArea:[],
			defaultSex:[]
        }
    },
	onReady(){
		let userInfo = this.$globleData?.userData || {}
		this.area = userInfo?.area || ''
		this.customerName = userInfo?.customerName || ''
		this.birthday = userInfo?.birthday || ''
		this.gender = userInfo?.gender || ''
		this.defaultArea = this.area.split('-')
		
		if(this.gender == '1'){
			this.defaultSex = [0]
		}else{
			this.defaultSex = [1]
		}
		
	},
    onShow(){
        let userInfo = this.$globleData?.userData || {}
        this.id = userInfo?.id || ''
        this.nickName = userInfo?.nickName || ''
        this.phoneBlur = userInfo?.phoneBlur   || ''
        this.phoneNumber = userInfo?.phoneNumber   || ''
        this.area = userInfo?.area || ''
        this.customerName = userInfo?.customerName || ''
        this.birthday = userInfo?.birthday || ''
        this.gender = userInfo?.gender || ''
    },
    methods:{
        async updateUserInfo(obj) {
            let param = {
                id: this.id,
                ...obj
            }
            let res = await this.$http.updateUserInfo(param)
			
            const userData = res?.dataInfo || {}
            this.$globleData.userData = res.dataInfo
            this.$globleData.userData.nickName = userData?.nickName || '金牌'
            this.$globleData.userData.avatar = userData?.avatar || '../../static/image/default_avatar.png'
            uni.setStorageSync('userInfo',  this.$globleData.userData);
			
            if(!this.backPages){
                this.$toast('修改成功')
                return true
            }
            uni.navigateBack({
                delta: this.backPages
            });
        }
    }
}