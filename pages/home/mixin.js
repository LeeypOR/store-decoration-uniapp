// 需要做单位换算的map映射
import {eventPlugInCode} from "../../common/plugInCode";
const mapList = ['height','pagePadding','borderRadius']
const mapValue = {
	'page-padding':'padding'
}
export default {
	props: {
		dataInfo: {
			type: Object,
			default: () => {}
		},
		isZoom:{
			type:Boolean,
			default: false
		},
		loading:{
			type:Boolean,
			default:false
		}
	},
	data () {
		return {
			pxToRpxScale: 0
		}
	},
	onReady() {

	},
	created(){
		const systemInfo = uni.getSystemInfoSync();
		// px转换到rpx的比例
		let pxToRpxScale = 750 / systemInfo.windowWidth;
		this.pxToRpxScale = pxToRpxScale
	},
	computed: {
		formatStyle () {
			let str = ''
			const val = JSON.parse(JSON.stringify(this.dataInfo))
			for (let i in val) {
				let name = ''
				let a = i.replace(/([A-Z])/g, "-$1").toLowerCase()
				a = mapValue[a] || a
				// 单位转换
				if(mapList.includes(i) && !`${val[i]}`.includes('%')){
					val[i] = (val[i] * 2) + 'rpx'
				}
				str = str + `${a}:${val[i]};`
			}
			return str
		},
	},
	methods: {
		// rgab 转换
		colorRgb(val,opacity){
			// 16进制颜色值的正则
			let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
			// 把颜色值变成小写
			let color = val.toLowerCase();
			if (reg.test(color)) {
				// 如果只有三位的值，需变成六位，如：#fff => #ffffff
				if (color.length === 4) {
					var colorNew = "#";
					for (var i = 1; i < 4; i += 1) {
						colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
					}
					color = colorNew;
				}
				// 处理六位的颜色值，转为RGB
				var colorChange = [];
				for (var i = 1; i < 7; i += 2) {
					colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
				}
				return "rgba(" + colorChange.join(",") + ","+opacity+")";
			} else {
				return color;
			}
		},
		// 跳转页面
		jumpToPage(data={}){
			uni.setStorageSync('moduleDate', {...data,moduleName:this.moduleName});
			// 商品
			if (data.jumpPageType == 'GOODS') {
				if (!data.jumpPageId) {
					this.$toast('页面跳转ID为空')
				}
				this.goTo(`/pagesA/shop/goodsDetail?id=${data.jumpPageId}`)
				return
			}

			// 跳转第二件半价和买一赠一
			if(data.jumpPageType == 'SECONDHALF' || data.jumpPageType == 'SECONDFREE'){
				this.goTo(`/pagesB/halfPrice/index?jumpPageType=${data.jumpPageType}`)
				return
			}
			// 商品分类
			if(data.jumpPageType == 'GOODS_GROUP') {
				this.goTo(`/pagesB/search/goodsList?goodsGroupId=${data.jumpPageId}`)
				return
			}
			// 微页面
			if (['MSPAGE'].includes(data.jumpPageType)) {
				if (!data.jumpPageId) {
					this.$toast('页面跳转ID为空')
					return
				}
				this.goTo(`/pages/home/miniPage?id=${data.jumpPageId}`)
				return
			}
			// 文章咨询跳转
			if (data.jumpPageType == 'ARTICLES') {
				if(data?.type == 'MSPAGE'){
					if (!data?.jumpPageData) {
						this.$toast('页面跳转ID为空')
						return
					}
					this.goTo(`/pages/home/miniPage?id=${data.jumpPageData}`)
					return
				}
				if (!data.jumpPageUrl) {
					this.$toast('跳转路径不存在')
					return
				}
				if (data?.type == 'WXMAID') {
					if (!data?.jumpPageData) {
						this.$toast('跳转小程序APPID为空')
						return
					}
					if(this.$globleData?.appletId == data.jumpPageData){
						this.goTo(`${data.jumpPageUrl}`)
						return
					}
					uni.navigateToMiniProgram({
						appId: data.jumpPageData,
						path: data.jumpPageUrl,
						fail(res) {

						}
					})
					return
				}
				if (data?.type == 'WEBVIEW') {
					this.goTo(`/pages/webview/webview?url=${data.jumpPageUrl}`)
					return
				}
			}
			// 跳转其他小程序
			if (data.jumpPageType == 'WXMAID') {
				if(!data.jumpPageUrl){
					this.$toast('跳转路径不存在')
					return
				}
				if (!data.jumpPageId) {
					this.$toast('跳转小程序APPID为空')
					return
				}
				uni.navigateToMiniProgram({
					appId: data.jumpPageId,
					path: data.jumpPageUrl,
					fail(res) {

					}
				})
				return
			}
			// 跳转到申请定制 jumpPageType
			if (data.jumpPageType == 'REGISTER') {
				this.goTo(`/pagesB/infoApply/index`)
				return
			}
			// 小程序跳转抽奖
			if (data.jumpPageType == 'lotteryPage') {
				if (!data.jumpPageId) {
					this.$toast('抽奖活动id为空')
					return
				}
				this.goTo(`/pagesC/raffle/index?activityId=${data.jumpPageId}`)
				return
			}
			// 跳转到积分攻略页面
			if (data.jumpPageType == 'INTEGRAL') {
				this.goTo(`/pagesA/myIntegral/getPoint`)
				return
			}
			if (data.jumpPageType == 'CATEGORYPAGE') {
				this.goTo('/pages/category/index', true)
				return
			}
			if (data.jumpPageType == 'MEMBER') {
				this.goTo('/pages/vipCenter/index', true)
				return
			}
			if (data.jumpPageType == 'SHOPPINGCAR') {
				this.goTo('/pages/shop/shopCart', true)
				return
			}
			if (data.jumpPageType == 'PERSONALCENTER') {
				this.goTo('/pages/mine/index', true)
				return
			}
            // 跳转第二件半价和买一赠一
			if (
				data.jumpPageType == 'SECONDHALF' ||
				data.jumpPageType == 'SECONDFREE'
			) {
				this.goTo(`/pagesB/halfPrice/index?jumpPageType=${data.jumpPageType}`)
				return
			}
            // 赚取积分页面
			if (data.jumpPageType == 'INTEGRAL') {
				this.goTo(`/pagesA/myIntegral/getPoint`)
				return
			}
            // 我的方案页面
			if (data.jumpPageType == 'MYPLAN') {
				this.goTo(`/pages/scheme/index`)
				return
 			}
            // 所有商品的页面
			if (data.jumpPageType == 'ALLGOODS') {
				this.goTo(`/pagesB/search/goodsList`)
				return
			}
			if(data.jumpPageType == 'HOMEPAGE'){
				this.goTo('/pages/home/index',true)
				return
			}
			if(data.jumpPageType == "CATEGORYPAGE"){
				this.goTo('/pages/category/index',true)
				return
			}
			if(data.jumpPageType == "MEMBER"){
				this.goTo('/pages/vipCenter/index',true)
				return
				// data.midButton=true
			}
			if(data.jumpPageType == "SHOPPINGCAR"){
				this.goTo('/pages/shop/shopCart',true)
				return
			}
			if(data.jumpPageType == "PERSONALCENTER"){
				this.goTo('/pages/mine/index',true)
				return
			}
			if(data.jumpPageType == "SEARCHPAGE"){
				this.goTo('/pagesA/searchPage/index')
				return
			}
			if (['18','4','6'].includes(data?.jumpPageType)) {
				this.goTo(`/pages/webview/webview?url=${data.jumpPageUrl}`)
				return
			}
			if(data?.jumpPageType == 'BRAND'){
				this.goTo(`/pagesB/search/goodsList?goodBrandId=${data.jumpPageId}`)
				return
			}
			uni.setStorageSync('moduleDate',null)
		}

	}
}
