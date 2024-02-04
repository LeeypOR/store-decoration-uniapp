import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import mixin from "./common/mixin";
import autoApi from "./common/serve/autoApi";
import {globalParams} from './common/requestParams'
import {eventPlugInCode,plugInCodeInit} from "./common/plugInCode";
import {disposeScene} from "./common/public/disposeToken";
import store from "./store";
Vue.use(uView);

Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.prototype.$http = autoApi
Vue.prototype.$eventPlugInCode = eventPlugInCode
Vue.prototype.$disposeScene = disposeScene
Vue.prototype.$globleData = globalParams
Vue.prototype.$toast = (msg)=>{
	uni.showToast({
		icon: 'none',
		title: msg,
		duration: 2000,
		mask:true
	});
}
App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
