require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesA/shop/goodsDetail"],{

/***/ 137:
/*!*********************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/main.js?{"page":"pagesA%2Fshop%2FgoodsDetail"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goodsDetail = _interopRequireDefault(__webpack_require__(/*! ./pagesA/shop/goodsDetail.vue */ 138));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goodsDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 138:
/*!**************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goodsDetail.vue?vue&type=template&id=6c490962&scoped=true& */ 139);
/* harmony import */ var _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsDetail.vue?vue&type=script&lang=js& */ 141);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goodsDetail_vue_vue_type_style_index_0_id_6c490962_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodsDetail.vue?vue&type=style&index=0&id=6c490962&scoped=true&lang=scss& */ 143);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 43);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c490962",
  null,
  false,
  _goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/shop/goodsDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 139:
/*!*********************************************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue?vue&type=template&id=6c490962&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetail.vue?vue&type=template&id=6c490962&scoped=true& */ 140);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_template_id_6c490962_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 140:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue?vue&type=template&id=6c490962&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNavbar: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-navbar/u-navbar.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uParse: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-parse/u-parse.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uPopup: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-popup/u-popup.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    width: "100%",
    height: "750rpx",
    padding: "0 10rpx",
  }
  var a1 = {
    width: "100%",
    height: "80rpx",
    padding: "0 10rpx",
  }
  var g0 = !(
    !_vm.groupInfo &&
    !_vm.halfInfo.type &&
    !_vm.activeInfo &&
    _vm.specGoodsInfo &&
    _vm.specGoodsInfo.membersPrice &&
    _vm.specGoodsInfo.membersPrice != "0"
  )
    ? JSON.stringify(_vm.halfInfo)
    : null
  var g1 =
    !(
      !_vm.groupInfo &&
      !_vm.halfInfo.type &&
      !_vm.activeInfo &&
      _vm.specGoodsInfo &&
      _vm.specGoodsInfo.membersPrice &&
      _vm.specGoodsInfo.membersPrice != "0"
    ) && !(g0 != "{}")
      ? ["MS", "ZK"].includes(_vm.activeType)
      : null
  var m0 =
    _vm.groupId || _vm.goodsType
      ? _vm.switchMoney(_vm.goodsSpecInfo.salePrice)
      : null
  var a2 = {
    width: "80%",
    "margin-left": "30rpx",
  }
  var a3 = {
    width: "60%",
    "margin-top": "20rpx",
    "margin-left": "30rpx",
  }
  var a4 = {
    width: "45%",
    "margin-top": "20rpx",
    "margin-bottom": "20rpx",
    "margin-left": "30rpx",
  }
  var a5 = {
    width: "100%",
    height: "120rpx",
    padding: "0 10rpx",
  }
  var g2 = !_vm.loading ? _vm.specificationList.length : null
  var a6 = {
    width: "100%",
    height: "120rpx",
    padding: "0 10rpx",
  }
  var a7 = {
    width: "100%",
    height: "750rpx",
    padding: "0 10rpx",
  }
  var m1 = _vm.$hasSSP("1cd8a3e4-22")
  var m2 = m1 ? _vm.$getSSP("1cd8a3e4-22", "left") : null
  var g3 = _vm.specList.length && _vm.goodsSpecList.length
  var m3 =
    !_vm.zeroGoods && !(_vm.activeType == "ZP") && !(_vm.activeType == "EZ")
      ? _vm.switchMoney(_vm.goodsSpecInfo.salePrice)
      : null
  var g4 = _vm.couponsList.length
  var l0 =
    g4 > 0
      ? _vm.__map(_vm.couponsList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var m4 = _vm.remianCount(item)
          var m5 = _vm.getCouponTitle(item)
          var m6 =
            item.receiveStatus == 1 &&
            item.couponStocks != "0" &&
            _vm.remianCount(item) != 0
          var m7 = m6 ? _vm.remianCount(item) : null
          var m8 =
            item.receiveStatus == 1 &&
            _vm.remianCount(item) == 0 &&
            item.couponStocks != "0"
          return {
            $orig: $orig,
            m4: m4,
            m5: m5,
            m6: m6,
            m7: m7,
            m8: m8,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        a1: a1,
        g0: g0,
        g1: g1,
        m0: m0,
        a2: a2,
        a3: a3,
        a4: a4,
        a5: a5,
        g2: g2,
        a6: a6,
        a7: a7,
        m1: m1,
        m2: m2,
        g3: g3,
        m3: m3,
        g4: g4,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 141:
/*!***************************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetail.vue?vue&type=script&lang=js& */ 142);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 142:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _exchangeMixin = _interopRequireDefault(__webpack_require__(/*! @/pages/exchangeMixin */ 77));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var specification = function specification() {
  __webpack_require__.e(/*! require.ensure | pagesA/components/specification */ "pagesA/components/specification").then((function () {
    return resolve(__webpack_require__(/*! ../components/specification */ 1084));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var GoodsCard = function GoodsCard() {
  __webpack_require__.e(/*! require.ensure | components/goodsCard */ "components/goodsCard").then((function () {
    return resolve(__webpack_require__(/*! ../../components/goodsCard */ 1091));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var GoodsSpecPopup = function GoodsSpecPopup() {
  __webpack_require__.e(/*! require.ensure | components/goodsSpecPopup */ "components/goodsSpecPopup").then((function () {
    return resolve(__webpack_require__(/*! ../../components/goodsSpecPopup */ 872));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var ShopBar = function ShopBar() {
  __webpack_require__.e(/*! require.ensure | pagesA/components/shopBar */ "pagesA/components/shopBar").then((function () {
    return resolve(__webpack_require__(/*! ../components/shopBar */ 1098));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var NoData = function NoData() {
  __webpack_require__.e(/*! require.ensure | components/noData */ "components/noData").then((function () {
    return resolve(__webpack_require__(/*! ../../components/noData */ 900));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CommentList = function CommentList() {
  __webpack_require__.e(/*! require.ensure | pagesA/components/commentList */ "pagesA/components/commentList").then((function () {
    return resolve(__webpack_require__(/*! ../components/commentList */ 1105));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var GroupDetail = function GroupDetail() {
  __webpack_require__.e(/*! require.ensure | pagesA/groupBooking/groupDetail */ "pagesA/groupBooking/groupDetail").then((function () {
    return resolve(__webpack_require__(/*! ../groupBooking/groupDetail */ 1112));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var PeopleList = function PeopleList() {
  __webpack_require__.e(/*! require.ensure | pagesA/groupBooking/peopleList */ "pagesA/groupBooking/peopleList").then((function () {
    return resolve(__webpack_require__(/*! ../groupBooking/peopleList */ 1119));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var HeadInfo = function HeadInfo() {
  Promise.all(/*! require.ensure | pagesA/active/headInfo */[__webpack_require__.e("pagesA/common/vendor"), __webpack_require__.e("pagesA/active/headInfo")]).then((function () {
    return resolve(__webpack_require__(/*! ../active/headInfo */ 1126));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var VipHead = function VipHead() {
  __webpack_require__.e(/*! require.ensure | pagesA/active/vipHead */ "pagesA/active/vipHead").then((function () {
    return resolve(__webpack_require__(/*! ../active/vipHead */ 1134));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var goodsHead = function goodsHead() {
  __webpack_require__.e(/*! require.ensure | pagesA/active/goodsHead */ "pagesA/active/goodsHead").then((function () {
    return resolve(__webpack_require__(/*! ../active/goodsHead */ 1141));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var halfHead = function halfHead() {
  __webpack_require__.e(/*! require.ensure | pagesA/active/halfHead */ "pagesA/active/halfHead").then((function () {
    return resolve(__webpack_require__(/*! ../active/halfHead */ 1148));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var sharPopup = function sharPopup() {
  __webpack_require__.e(/*! require.ensure | pagesA/components/sharePopup */ "pagesA/components/sharePopup").then((function () {
    return resolve(__webpack_require__(/*! ../components/sharePopup.vue */ 1155));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var skeleton = function skeleton() {
  __webpack_require__.e(/*! require.ensure | pagesA/components/J-skeleton */ "pagesA/components/J-skeleton").then((function () {
    return resolve(__webpack_require__(/*! ../components/J-skeleton.vue */ 1162));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var fallCom = function fallCom() {
  __webpack_require__.e(/*! require.ensure | pagesA/components/falls */ "pagesA/components/falls").then((function () {
    return resolve(__webpack_require__(/*! ../components/falls.vue */ 1169));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var FixedNavigation = function FixedNavigation() {
  Promise.all(/*! require.ensure | components/fixedNavigation */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/fixedNavigation")]).then((function () {
    return resolve(__webpack_require__(/*! ../../components/fixedNavigation */ 853));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var exchangeAdv = function exchangeAdv() {
  __webpack_require__.e(/*! require.ensure | components/exchangeAdv/index */ "components/exchangeAdv/index").then((function () {
    return resolve(__webpack_require__(/*! ../../components/exchangeAdv */ 886));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var configPage = function configPage() {
  __webpack_require__.e(/*! require.ensure | pages/home/components/configPage */ "pages/home/components/configPage").then((function () {
    return resolve(__webpack_require__(/*! ../../pages/home/components/configPage */ 860));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  mixins: [_exchangeMixin.default],
  components: {
    configPage: configPage,
    FixedNavigation: FixedNavigation,
    goodsHead: goodsHead,
    halfHead: halfHead,
    VipHead: VipHead,
    HeadInfo: HeadInfo,
    PeopleList: PeopleList,
    GroupDetail: GroupDetail,
    CommentList: CommentList,
    NoData: NoData,
    ShopBar: ShopBar,
    GoodsSpecPopup: GoodsSpecPopup,
    GoodsCard: GoodsCard,
    sharPopup: sharPopup,
    skeleton: skeleton,
    fallCom: fallCom,
    exchangeAdv: exchangeAdv,
    specification: specification
  },
  data: function data() {
    return {
      skeleton: {
        name: '测试产品件数'
      },
      title: '商品详情',
      shareParam: {},
      headSwiperImg: [],
      couponsList: [],
      //可领优惠券列表
      show: false,
      player: null,
      goodsId: '',
      //商品id
      goodsInfo: {},
      // 商品信息
      goodsSpecList: [],
      goodsVideo: '',
      //视频链接
      modelIds: [],
      //  展示规格id
      similarList: [],
      //相似商品列表
      collectId: '',
      // 收藏id
      isCollection: false,
      // 是否收藏
      btnState: 1,
      // 1 规格  2 加入购物车 3 购买
      goodsSpecIndex: 0,
      //  当前选择规格信息的索引
      specList: [],
      specName: '',
      // 规格名称
      goodsSpecListIndex: 0,
      specIdList: [],
      playFlag: true,
      //  是否播放中
      coverImgShow: true,
      //  是否显示封面图
      loading: true,
      //  加载中（判断骨架屏）
      tabCut: '0',
      //  切换商品详情和评论  0 商品描述 1 评论
      commentList: [],
      //  评论数据
      previewImg: [],
      //   预览图片
      merberData: null,
      //会员等级
      /** 拼团相关参数 */
      groupInfo: null,
      // 拼团相关的信息
      groupList: [],
      // 团列表
      goodsType: 0,
      // 0 普通商品 1 拼团商品
      groupId: '',
      // 拼团id
      /** 活动相关 */
      activeId: '',
      // 活动id
      activeType: null,
      // 活动类型  MS 秒杀  XS 限时  BJ半价 MYZY 买一赠一 EZ 兑换专区活动详情
      activeInfo: null,
      // 活动详情
      specGoodsInfo: null,
      // 选中规格的信息
      zeroGoods: null,
      //权益卡、会员赠送商品
      cardId: '',
      //权益卡的id
      zeroOrderId: "",
      //购买权益卡的订单id
      cardData: null,
      halfInfo: {},
      giftInfo: {},
      // 赠品相关信息
      distributionorId: '',
      //分销员表里面的主键id
      scenId: '',
      //生产太阳码的携带的参数
      paymentWay: 0,
      //支付方式，（0.现金 1.现金加积分 2.现金加固定积分 3.纯积分）
      shareData: {},
      equityDiscount: null,
      //权益卡折扣数据
      goodsPoupSpecList: [],
      shopActiveInfo: {},
      // 商品活动信息
      cavanvsImage: '',
      style: {
        video: 'height：100%'
      },
      shopId: '',
      //店铺id
      channelCode: '',
      //渠道编码
      channelFlag: '',
      //渠道推广标识， 1：H5,2:小程序
      channelName: '',
      //
      isPopup: true,
      recordId: "",
      // 抽奖绑定id
      isDraw: true,
      refresh: '',
      shopDataList: [],
      // 微页面装修数据
      userInfo: '',
      specificationList: [] // 规格列表
    };
  },
  /**
   * id:商品id
   * groupId 拼团分享 传参
   * 活动相关
   * activeId  活动id
   * activeType  活动类型  MS  XS  ZP
   * */
  onLoad: function onLoad(option) {
    var _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _option$scene;
      var _option$scene2, index, contactId;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.liveParam(option);
              if (((_option$scene = option.scene) === null || _option$scene === void 0 ? void 0 : _option$scene.indexOf('SP')) > -1) {
                //scene=505163869644075008SP 商品推广码
                index = (_option$scene2 = option.scene) === null || _option$scene2 === void 0 ? void 0 : _option$scene2.indexOf('SP');
                _this.goodsId = option.scene.substr(0, index);
              } else {
                _this.scenId = option.scene ? option.scene : ''; //海报分享的参数
                _this.goodsId = (option === null || option === void 0 ? void 0 : option.id) || '';
              }
              contactId = option.contactId ? option.contactId : ''; // 分享好友 分销商的主键id
              if (contactId) {
                _this.shareParam = {
                  userId: contactId
                };
              }
              _this.zeroGoods = option.zeroGoods ? JSON.parse(option.zeroGoods) : null;
              // 权益卡折扣商品传过来的数据
              _this.equityDiscount = option.equityDiscount ? JSON.parse(option.equityDiscount) : null;
              _this.cardData = option.cardData;
              _this.groupId = (option === null || option === void 0 ? void 0 : option.groupId) || null;
              _this.activeId = (option === null || option === void 0 ? void 0 : option.activeId) || '';
              _this.activeType = (option === null || option === void 0 ? void 0 : option.activeType) || null;
              _this.giftInfo = JSON.parse((option === null || option === void 0 ? void 0 : option.giftInfo) || '{}');
              if (option !== null && option !== void 0 && option.recordId) {
                _this.recordId = option === null || option === void 0 ? void 0 : option.recordId;
                _this.giftInfo = {
                  lotteryRecordId: _this.recordId
                };
              }
              _this.getMiniDetail();
              _this.getGoodsCategoryInfo();
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onShow: function onShow() {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _this2$$globleData;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('this.scenId', _this2.scenId);
              _this2.userInfo = ((_this2$$globleData = _this2.$globleData) === null || _this2$$globleData === void 0 ? void 0 : _this2$$globleData.userData) || {};
              _this2.lotteryBand();
              if (!_this2.groupId) {
                _context2.next = 6;
                break;
              }
              _context2.next = 6;
              return _this2.getGroupMember();
            case 6:
              if (!_this2.scenId) {
                _context2.next = 9;
                break;
              }
              _context2.next = 9;
              return _this2.getScen(_this2.scenId);
            case 9:
              if (!_this2.goodsId) {
                _context2.next = 12;
                break;
              }
              _context2.next = 12;
              return _this2.saveScen();
            case 12:
              if (!(_this2.activeType != 'ZP' && _this2.activeType != 'EZ')) {
                _context2.next = 16;
                break;
              }
              if (!_this2.goodsId) {
                _context2.next = 16;
                break;
              }
              _context2.next = 16;
              return _this2.getHalfGoodsInfo();
            case 16:
              _context2.next = 18;
              return _this2.initOnShow();
            case 18:
              _this2.isPopup = true;
              _this2.refresh = new Date().getTime().toString();
            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  onUnload: function onUnload() {
    this.$store.commit('setSpecification', false);
  },
  onHide: function onHide() {
    this.isPopup = false;
  },
  watch: {
    goodsInfo: {
      deep: true,
      handler: function handler() {
        var _this$goodsInfo, _this$goodsInfo2;
        this.codeParam = _objectSpread(_objectSpread({}, this.codeParam), {}, {
          goodsName: ((_this$goodsInfo = this.goodsInfo) === null || _this$goodsInfo === void 0 ? void 0 : _this$goodsInfo.goodsName) || '',
          goodsId: ((_this$goodsInfo2 = this.goodsInfo) === null || _this$goodsInfo2 === void 0 ? void 0 : _this$goodsInfo2.id) || '',
          type: '5'
        });
      }
    }
  },
  computed: {
    activeSpecName: function activeSpecName() {
      var _this$specGoodsInfo, _this$specGoodsInfo$m;
      var ids = ((_this$specGoodsInfo = this.specGoodsInfo) === null || _this$specGoodsInfo === void 0 ? void 0 : (_this$specGoodsInfo$m = _this$specGoodsInfo.modelIds) === null || _this$specGoodsInfo$m === void 0 ? void 0 : _this$specGoodsInfo$m.split(',')) || [];
      var str = [];
      var _iterator = _createForOfIteratorHelper(this.specList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var arr = item.modelList || [];
          var _iterator2 = _createForOfIteratorHelper(arr),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var obj = _step2.value;
              if (ids.includes(obj.modelId)) {
                str.push(obj.modelName);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var res = str.join('-');
      return res.length > 0 ? res : '统一规格';
    },
    // 获取列表数据
    getGroupList: function getGroupList() {
      var _this$groupInfo;
      if (((_this$groupInfo = this.groupInfo) === null || _this$groupInfo === void 0 ? void 0 : _this$groupInfo.createType) == 2) {
        var _this$groupList$;
        return (_this$groupList$ = this.groupList[0]) === null || _this$groupList$ === void 0 ? void 0 : _this$groupList$.groupMemberList;
      }
      return this.groupList;
    },
    // 获取拼团类型
    getGroupType: function getGroupType() {
      var _this$groupInfo2, _this$groupInfo3;
      if (((_this$groupInfo2 = this.groupInfo) === null || _this$groupInfo2 === void 0 ? void 0 : _this$groupInfo2.createType) == 2) {
        return 'SJ';
      }
      return (_this$groupInfo3 = this.groupInfo) === null || _this$groupInfo3 === void 0 ? void 0 : _this$groupInfo3.type;
    },
    getPrice: function getPrice() {
      var _this3 = this;
      return function (obj, isGroup) {
        if (_this3.activeType == 'ZP') {
          return 0;
        }
        if (!isGroup) {
          var _this3$shopActiveInfo;
          console.log(obj, _this3.shopActiveInfo, '999999');
          if (((_this3$shopActiveInfo = _this3.shopActiveInfo) === null || _this3$shopActiveInfo === void 0 ? void 0 : _this3$shopActiveInfo.type) > 0) {
            return obj.marketPrice;
          }
          return obj.salePrice;
        }
        if (_this3.goodsType) {
          return (obj === null || obj === void 0 ? void 0 : obj.groupPrice) || 0;
        }
        return obj.salePrice;
      };
    },
    // 根据goodsSpecIndex选择出规格信息
    goodsSpecInfo: function goodsSpecInfo() {
      if (this.goodsSpecList && this.goodsSpecList.length > 0) {
        var obj = this.goodsSpecList[this.goodsSpecIndex];
        this.specIdList = (obj.modelIds || '').split(',');
        return obj;
      }
      return {};
    },
    getSpecName: function getSpecName() {
      var str = [];
      var _iterator3 = _createForOfIteratorHelper(this.specList),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          var arr = item.modelList || [];
          var _iterator4 = _createForOfIteratorHelper(arr),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var obj = _step4.value;
              if (this.specIdList.includes(obj.modelId)) {
                str.push(obj.modelName);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      console.log('2222', str);
      return str.join('-');
    },
    remianCount: function remianCount() {
      return function (val) {
        return val.couponLimit - val.currentUserOwn;
      };
    }
  },
  // 分享
  onShareAppMessage: function onShareAppMessage(e) {
    var _e$target, _e$target$dataset, _this$goodsInfo3, _this$goodsInfo3$good, _this$goodsInfo4;
    getApp().globalData.preveImage = 'preveImage';
    var that = this;
    var contactId = this.$globleData.userData.id || '';
    var path = "/pagesA/shop/goodsDetail?id=".concat(this.goodsId, "&activeId=").concat(this.activeId, "&contactId=").concat(contactId);
    var groupId = (e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$dataset = _e$target.dataset) === null || _e$target$dataset === void 0 ? void 0 : _e$target$dataset.groupid) || null;
    // 插码
    this.goodsCodeEvent('2');
    // 邀请好友参与拼团
    if (groupId) {
      path = path + '&groupId=' + groupId;
    }
    // 秒杀 折扣
    if (['MS', 'ZK'].includes(this.activeType)) {
      path = path + "&activeType=".concat(this.activeType);
    }
    var imgUrl = (_this$goodsInfo3 = this.goodsInfo) === null || _this$goodsInfo3 === void 0 ? void 0 : (_this$goodsInfo3$good = _this$goodsInfo3.goodsPictures) === null || _this$goodsInfo3$good === void 0 ? void 0 : _this$goodsInfo3$good.split(',')[0];
    that.$http.shareGoods();
    return {
      title: (_this$goodsInfo4 = this.goodsInfo) === null || _this$goodsInfo4 === void 0 ? void 0 : _this$goodsInfo4.goodsName,
      imageUrl: imgUrl,
      path: path
    };
  },
  methods: {
    // 获取商品规格
    getGoodsCategoryInfo: function getGoodsCategoryInfo() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.$http.getGoodsCategoryInfo({
                  id: '438298510429782016' || false
                });
              case 2:
                res = _context3.sent;
                _this4.specificationList = (res === null || res === void 0 ? void 0 : res.dataInfo) || [];
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getMiniDetail: function getMiniDetail() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var _JSON$parse;
        var _yield$_this5$$http$g, res;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this5.$http.getGoodsJson({
                  id: _this5.goodsId
                });
              case 2:
                _yield$_this5$$http$g = _context4.sent;
                res = _yield$_this5$$http$g.dataInfo;
                _this5.shopDataList = ((_JSON$parse = JSON.parse((res === null || res === void 0 ? void 0 : res.pageMsJson) || '{}')) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.pageList) || [];
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // 转盘抽奖奖品绑定
    lotteryBand: function lotteryBand() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var res;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this6.recordId) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return");
              case 2:
                _context5.prev = 2;
                _context5.next = 5;
                return _this6.$http.lotteryBand({
                  prizeType: 3,
                  recordId: _this6.recordId
                });
              case 5:
                res = _context5.sent;
                if (res !== null && res !== void 0 && res.dataInfo) {
                  _this6.$toast('奖品已下单');
                  _this6.isDraw = false;
                } else {
                  _this6.isDraw = true;
                }
                _context5.next = 12;
                break;
              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);
                _this6.isDraw = false;
              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 9]]);
      }))();
    },
    // 轮播图片预览
    previewImage: function previewImage(url) {
      getApp().globalData.preveImage = 'preveImage';
      uni.previewImage({
        urls: url,
        longPressActions: {
          success: function success(data) {
            console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
          },
          fail: function fail(err) {
            console.log(err.errMsg);
          }
        }
      });
    },
    // 商品详情插码
    goodsCodeEvent: function goodsCodeEvent(type, num) {
      var _this$goodsInfo5, _this$goodsInfo6;
      this.$eventPlugInCode(_objectSpread(_objectSpread({}, this.codeParam), {}, {
        title: this.title,
        goodsName: ((_this$goodsInfo5 = this.goodsInfo) === null || _this$goodsInfo5 === void 0 ? void 0 : _this$goodsInfo5.goodsName) || '',
        goodsId: ((_this$goodsInfo6 = this.goodsInfo) === null || _this$goodsInfo6 === void 0 ? void 0 : _this$goodsInfo6.id) || '',
        goodsNum: num || '',
        type: type || '5'
      }));
    },
    // 生产太阳码
    sharPosterCode: function sharPosterCode(scenId) {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var res;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this7.$http.posterCode({
                  page: 'pagesA/shop/goodsDetail',
                  id: scenId
                });
              case 3:
                res = _context6.sent;
                // this.$refs.sharePopup.posterData.codeImg.url = res.dataInfo
                // this.shareData.codeImage = res.dataInfo
                _this7.cavanvsImage = res.dataInfo;
                _context6.next = 10;
                break;
              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);
                //TODO handle the exception
              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }))();
    },
    // 保存scen信息
    saveScen: function saveScen() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var res, scenId;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log(_this8.goodsId, 'shangp ');
                _context7.prev = 1;
                _context7.next = 4;
                return _this8.$http.addScene({
                  goodsId: _this8.goodsId,
                  contactId: _this8.$globleData.userData.id
                });
              case 4:
                res = _context7.sent;
                scenId = res.dataInfo;
                if (scenId) {
                  _this8.sharPosterCode(scenId);
                }
                _context7.next = 12;
                break;
              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);
                console.log(_context7.t0);
                //TODO handle the exception
              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 9]]);
      }))();
    },
    // 点击分享按钮的事件
    share: function share(val) {
      if (val) {
        this.shareData = {
          goodsName: this.goodsInfo.goodsName,
          goodsId: this.specGoodsInfo.goodsId,
          goodsPictures: this.goodsInfo.goodsPictures,
          marketPrice: this.specGoodsInfo.marketPrice,
          salePrice: this.specGoodsInfo.salePrice,
          oneLevelDistributionPrice: this.specGoodsInfo.oneLevelDistributionPrice,
          codeImage: this.cavanvsImage
        };
        // this.goodsCodeEvent('2')

        this.shareData.goodsPictures = this.imgUrl(this.shareData.goodsPictures); //将多个图片路径用逗号隔开的图片，只展示一个图片路径
        this.$store.commit('setShowDistributor', true);
        console.log(this.shareData, '9999999');
      }
    },
    // 初始化onShow的方法
    initOnShow: function initOnShow() {
      // 秒杀 折扣 活动
      if (this.activeId && ['MS', 'ZK'].includes(this.activeType)) {
        if (this.goodsId) {
          this.activeGoodsInfo();
        }
      } else if (this.activeId && ['EZ'].includes(this.activeType)) {
        this.getExchangeZoonInfo();
      }
      // 普通和拼团商品
      else if (!this.goodsInfo.id || this.goodsType) {
        if (this.goodsId) {
          this.checkGoods();
        }
      }
      // this.getSimilarGoods()
      if (this.goodsId) {
        this.queryCollection();
        this.getCommentList();
        // this.getHalfGoodsInfo()
      }

      this.getMemberLevel();
    },
    // 获取scen的参数
    getScen: function getScen(scenId) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var res;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this9.$http.getScene({
                  id: scenId
                });
              case 2:
                res = _context8.sent;
                _this9.goodsId = res.dataInfo.goodsId;
                _this9.channelCode = res.dataInfo.channelCode;
                _this9.channelFlag = res.dataInfo.channelFlag;
                _this9.channelName = res.dataInfo.channelName;
                _this9.shareParam = {
                  userId: res.dataInfo.contactId
                };
                _this9.$globleData.distributionId = res.dataInfo.contactId;
              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    // 设置
    setSpecInfo: function setSpecInfo() {
      var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _iterator5 = _createForOfIteratorHelper(this.goodsSpecList),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var item = _step5.value;
          if (item.modelIds == ids.join(',')) {
            this.specGoodsInfo = item;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    // 直播参数解析
    liveParam: function liveParam(option) {
      var shareInfo = JSON.parse(decodeURIComponent((option === null || option === void 0 ? void 0 : option.custom_params) || '{}'));
      this.shareParam = _objectSpread({}, shareInfo);
      if (shareInfo.roomId) {
        this.liveViewTotalUp(shareInfo.roomId);
      }
    },
    // 商品浏览量增加接口
    liveViewTotalUp: function liveViewTotalUp(roomId) {
      var param = {
        id: this.goodsId,
        appId: 100000054,
        roomId: roomId
      };
      this.$http.liveViewTotalUp(param);
    },
    // 买一赠一 第二件半价活动详情
    getHalfGoodsInfo: function getHalfGoodsInfo() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _yield$_this10$$http$, _yield$_this10$$http$2, res, type;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this10.$http.getHalfGoodsInfo({
                  goodsId: _this10.goodsId
                });
              case 2:
                _yield$_this10$$http$ = _context9.sent;
                _yield$_this10$$http$2 = _yield$_this10$$http$.dataInfo;
                res = _yield$_this10$$http$2 === void 0 ? {} : _yield$_this10$$http$2;
                type = (res === null || res === void 0 ? void 0 : res.type) || '';
                if (![1, 2].includes(type)) {
                  _context9.next = 9;
                  break;
                }
                _this10.halfInfo = type ? res : {};
                return _context9.abrupt("return");
              case 9:
                _this10.shopActiveInfo = res;
                _this10.activeId = _this10.activeId || (res === null || res === void 0 ? void 0 : res.id) || '';
                if (type == 3) {
                  _this10.activeType = "MS";
                }
                if (type == 4) {
                  _this10.activeType = "ZK";
                }
                return _context9.abrupt("return");
              case 14:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    // 兑换专区活动查询
    getExchangeZoonInfo: function getExchangeZoonInfo() {
      var _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var _info$goodsSpecProper;
        var res, info;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this11.$http.exchangeDetail({
                  activityId: _this11.activeId,
                  goodsId: _this11.goodsId
                });
              case 2:
                res = _context10.sent;
                console.log('兑换专区活动查询0000000', res);
                info = (res === null || res === void 0 ? void 0 : res.dataInfo) || {};
                _this11.goodsInfo = info;
                _this11.goodsSpecList = (info === null || info === void 0 ? void 0 : info.goodsSpecPropertiesList) || [];
                if (info.goodsPictures.indexOf(',') > -1) {
                  _this11.headSwiperImg = info.goodsPictures.split(',');
                } else {
                  _this11.headSwiperImg = [info.goodsPictures];
                }
                _this11.paymentWay = info.paymentWay;
                _this11.goodsVideo = info.goodsVideo;
                // this.modelIds = this.goodsSpecInfo?.modelIds?.split(',') || []
                _this11.specList = (info === null || info === void 0 ? void 0 : info.goodsSpecList) || [];
                if ((info === null || info === void 0 ? void 0 : (_info$goodsSpecProper = info.goodsSpecPropertiesList) === null || _info$goodsSpecProper === void 0 ? void 0 : _info$goodsSpecProper.length) == 1) {
                  _this11.specGoodsInfo = _this11.goodsSpecList[0];
                }
                // this.specGoodsInfo = this.goodsSpecList[0]
                console.log('----------77777', _this11.goodsSpecInfo, _this11.specGoodsInfo, _this11.specList);
                _this11.goodsPoupSpecList = _this11.goodsSpecList;
                if (_this11.goodsInfo) {
                  _this11.getSimilarGoods();
                }
                _this11.loading = false;
              case 16:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    // 兑换专区
    exchangeNow: function exchangeNow() {
      var _this$goodsSpecList, _this$goodsSpecList2;
      console.log('专区');
      console.log(this.specIdList, this.goodsSpecInfo, this.goodsSpecList);
      if (((_this$goodsSpecList = this.goodsSpecList) === null || _this$goodsSpecList === void 0 ? void 0 : _this$goodsSpecList.length) > 1) {
        this.$store.commit('setSpecification', true);
        this.btnState = 8;
      }
      if (((_this$goodsSpecList2 = this.goodsSpecList) === null || _this$goodsSpecList2 === void 0 ? void 0 : _this$goodsSpecList2.length) == 1) {
        this.buyNow({
          ids: this.specIdList
        });
      }
    },
    // 商品活动查询 秒杀 和 折扣
    activeGoodsInfo: function activeGoodsInfo() {
      var _this12 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var _dataInfo, _dataInfo2, _this12$goodsSpecInfo, _this12$goodsSpecInfo2;
        var param, dataInfo, res, active, info;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                param = {
                  activityId: _this12.activeId,
                  goodsId: _this12.goodsId
                };
                dataInfo = {};
                if (!(_this12.activeType == "MS")) {
                  _context11.next = 6;
                  break;
                }
                _context11.next = 5;
                return _this12.$http.seckillGoodsInfo(param);
              case 5:
                dataInfo = _context11.sent;
              case 6:
                if (!(_this12.activeType == "ZK")) {
                  _context11.next = 10;
                  break;
                }
                _context11.next = 9;
                return _this12.$http.discountGoodsInfo(param);
              case 9:
                dataInfo = _context11.sent;
              case 10:
                res = ((_dataInfo = dataInfo) === null || _dataInfo === void 0 ? void 0 : _dataInfo.dataInfo) || {};
                active = (res === null || res === void 0 ? void 0 : res.seckillActivityResponse) || (res === null || res === void 0 ? void 0 : res.discountActivityResponse) || {};
                if (!(((_dataInfo2 = dataInfo) === null || _dataInfo2 === void 0 ? void 0 : _dataInfo2.message) != '成功' || (active === null || active === void 0 ? void 0 : active.activityStatu) == 3)) {
                  _context11.next = 17;
                  break;
                }
                _this12.activeType = null;
                _this12.activeId = '';
                _this12.checkGoods();
                return _context11.abrupt("return");
              case 17:
                info = (res === null || res === void 0 ? void 0 : res.seckillGoodsDetailResponse) || (res === null || res === void 0 ? void 0 : res.discountGoodsDetailResponse) || {};
                _this12.activeInfo = (res === null || res === void 0 ? void 0 : res.seckillActivityResponse) || (res === null || res === void 0 ? void 0 : res.discountActivityResponse) || {};
                _this12.goodsInfo = info;
                _this12.goodsSpecList = (info === null || info === void 0 ? void 0 : info.goodsSpecPropertiesList) || [];
                if (info.goodsPictures.indexOf(',') > -1) {
                  _this12.headSwiperImg = info.goodsPictures.split(',');
                } else {
                  _this12.headSwiperImg = [info.goodsPictures];
                }
                _this12.goodsVideo = info.goodsVideo;
                _this12.modelIds = ((_this12$goodsSpecInfo = _this12.goodsSpecInfo) === null || _this12$goodsSpecInfo === void 0 ? void 0 : (_this12$goodsSpecInfo2 = _this12$goodsSpecInfo.modelIds) === null || _this12$goodsSpecInfo2 === void 0 ? void 0 : _this12$goodsSpecInfo2.split(',')) || [];
                _this12.specList = (info === null || info === void 0 ? void 0 : info.goodsSpecList) || [];
                _this12.specGoodsInfo = _this12.goodsSpecList[0];
                _this12.loading = false;
              case 27:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    // 查询分享拼团信息
    getGroupMember: function getGroupMember() {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var res, groupInfo;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _this13.$http.getGroupMember({
                  id: _this13.groupId
                });
              case 2:
                res = _context12.sent;
                groupInfo = (res === null || res === void 0 ? void 0 : res.dataInfo) || null;
                if (groupInfo !== null && groupInfo !== void 0 && groupInfo.countDownEndTime) {
                  _context12.next = 8;
                  break;
                }
                uni.showModal({
                  title: '温馨提示',
                  content: '该团已拼团成功，去看看其他团吧！',
                  showCancel: false
                });
                _this13.groupId = '';
                return _context12.abrupt("return");
              case 8:
                groupInfo.id = _this13.groupId;
                _this13.$nextTick(function () {
                  _this13.$refs.peopleList.showTwoPopup(groupInfo);
                });
              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    // 获取会员等级
    getMemberLevel: function getMemberLevel() {
      var _this14 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _this14$$globleData, _this14$$globleData$u;
        var res, list;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return _this14.$http.getMemberInfo({
                  id: (_this14$$globleData = _this14.$globleData) === null || _this14$$globleData === void 0 ? void 0 : (_this14$$globleData$u = _this14$$globleData.userData) === null || _this14$$globleData$u === void 0 ? void 0 : _this14$$globleData$u.id
                });
              case 2:
                res = _context13.sent;
                list = (res === null || res === void 0 ? void 0 : res.dataInfo) || [];
                list.map(function (item) {
                  if (item.currentGrade) {
                    _this14.merberData = item;
                  }
                });
                if (_this14.merberData && _this14.activeType != "EZ") {
                  _this14.getCoupons();
                }
              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    // 预览图片
    // imgTap (obj) {
    // 	// obj.ignore()
    // 	// this.previewImg = obj?.urls || []
    // 	// // this.$refs.cusPreviewImg.open(obj.src, obj.current)
    // },
    // 点击评论回调
    commentClick: function commentClick() {
      this.goTo("/pagesA/shop/goodsComment?id=".concat(this.goodsId));
    },
    // 切换
    cutTab: function cutTab(type) {
      var nowType = this.tabCut;
      if (type == nowType) {
        return;
      }
      this.tabCut = type;
    },
    // 获取评论列表
    getCommentList: function getCommentList() {
      var _this15 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
        var _res$dataInfo;
        var param, res;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                param = {
                  current: 1,
                  size: 10,
                  productId: _this15.goodsId
                };
                _context14.next = 3;
                return _this15.$http.getReviewList(param);
              case 3:
                res = _context14.sent;
                _this15.commentList = (res === null || res === void 0 ? void 0 : (_res$dataInfo = res.dataInfo) === null || _res$dataInfo === void 0 ? void 0 : _res$dataInfo.records) || [];
              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }))();
    },
    // 领取赠品
    getGift: function getGift() {},
    // 零元购
    zeroBuy: function zeroBuy() {
      var goodsList = {
        id: this.zeroGoods.id,
        goodsImg: this.zeroGoods.goodsPicture,
        goodsName: this.zeroGoods.goodsName,
        goodsSpecValue: this.zeroGoods.norm,
        goodsAmount: this.zeroGoods.amount,
        goodsId: this.zeroGoods.goodsId,
        goodsSpecIds: this.zeroGoods.goodsSpecId,
        isReceived: this.zeroGoods.isReceived,
        unitPrice: this.zeroGoods.salePrice,
        deliveryMode: this.goodsInfo.deliveryMode
      };
      this.goTo("/pagesA/order/orderCenter?goodsList=".concat(JSON.stringify([goodsList]), "&cardData=").concat(this.cardData, "&cardCouponGoodsIdList=").concat(JSON.stringify(this.zeroGoods)));
    },
    // 立即购买
    buyNow: function buyNow(_ref) {
      var _this$groupInfo4, _this$activeInfo, _this$activeInfo2, _this$activeInfo3, _this$activeInfo3$sec, _this$activeInfo4, _this$activeInfo4$dis, _obj2, _this$activeInfo5, _this$halfInfo, _this$halfInfo2, _this$shopActiveInfo, _this$halfInfo3, _obj3, _this$goodsInfo7;
      var _ref$ids = _ref.ids,
        ids = _ref$ids === void 0 ? [] : _ref$ids,
        _ref$goodsNum = _ref.goodsNum,
        goodsNum = _ref$goodsNum === void 0 ? 1 : _ref$goodsNum,
        _ref$buyType = _ref.buyType,
        buyType = _ref$buyType === void 0 ? 1 : _ref$buyType,
        buycom = _ref.buycom,
        _ref$isGroup = _ref.isGroup,
        isGroup = _ref$isGroup === void 0 ? false : _ref$isGroup,
        _ref$isJoin = _ref.isJoin,
        isJoin = _ref$isJoin === void 0 ? false : _ref$isJoin;
      if (this.activeType == 'ZP' && !this.isDraw) {
        return;
      }
      if (((_this$groupInfo4 = this.groupInfo) === null || _this$groupInfo4 === void 0 ? void 0 : _this$groupInfo4.createType) == 2 && isGroup) {
        var _obj = this.groupList[0];
        if (!(_obj !== null && _obj !== void 0 && _obj.id)) {
          this.$toast('商品已成团,活动已结束');
          return;
        }
        this.$store.commit('setJoinGroupId', _obj === null || _obj === void 0 ? void 0 : _obj.id);
      }
      this.specIdList = ids || this.specIdList;
      console.log(this.specIdList, '------------------8888');
      var id = '';
      var obj = {};
      var _iterator6 = _createForOfIteratorHelper(this.goodsSpecList),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var item = _step6.value;
          if (item.modelIds == ids.join(',')) {
            id = item.id;
            obj = item;
          }
        }
        // id 此id 是GoodsSpecProperties里面规格属性里面的id,
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      id = id || this.goodsSpecInfo.id;
      if (!obj.id) {
        obj = this.goodsSpecInfo;
      }
      console.log('this.goodsSpecInfo: ', this.goodsSpecInfo);
      // 拼团数据处理 目前只有一个type
      var groupDataObj = this.groupDataTreating(isJoin);
      // 活动数据处理 主要是处理
      var activeInfo = {
        enableLimit: ((_this$activeInfo = this.activeInfo) === null || _this$activeInfo === void 0 ? void 0 : _this$activeInfo.enableLimit) || 0,
        limitCount: ((_this$activeInfo2 = this.activeInfo) === null || _this$activeInfo2 === void 0 ? void 0 : _this$activeInfo2.limitCount) || 0,
        goodsBuyCount: ((_this$activeInfo3 = this.activeInfo) === null || _this$activeInfo3 === void 0 ? void 0 : (_this$activeInfo3$sec = _this$activeInfo3.seckillGoodsResponse) === null || _this$activeInfo3$sec === void 0 ? void 0 : _this$activeInfo3$sec.goodsBuyCount) || ((_this$activeInfo4 = this.activeInfo) === null || _this$activeInfo4 === void 0 ? void 0 : (_this$activeInfo4$dis = _this$activeInfo4.discountGoodsResponse) === null || _this$activeInfo4$dis === void 0 ? void 0 : _this$activeInfo4$dis.goodsBuyCount) || 0
      };
      var goodsList = _objectSpread(_objectSpread({
        id: obj.id,
        // 无意义
        num: goodsNum || 1,
        shopId: obj.shopId,
        // 无意义
        goodsAmount: goodsNum || 1,
        membersPrice: obj.membersPrice,
        goodsId: this.goodsId || this.goodsSpecInfo.goodsId,
        goodsName: this.goodsInfo.goodsName,
        goodsModelIds: id,
        goodsSpecIds: id,
        unitPrice: this.getPrice(obj, isGroup),
        goodsImg: ((_obj2 = obj) === null || _obj2 === void 0 ? void 0 : _obj2.modelPicture) || this.goodsInfo.goodsPictures.split(',')[0],
        goodsSpecValue: this.getSpecName,
        buyType: buyType,
        deliveryMode: this.goodsInfo.deliveryMode,
        //发货方式（0：快递发货，1：到店自取）多个用,隔开
        paymentWay: this.paymentWay,
        returnPointsFormula: this.goodsInfo.returnPointsFormula,
        //购买商品返积分
        pointsLowerLimit: this.goodsInfo.pointsLowerLimit,
        //积分使用数量
        returnPoints: this.goodsInfo.returnPoints,
        //是否返积分，0：否，1：是
        returnPointsWay: this.goodsInfo.returnPointsWay,
        //0是固定，1是比例
        groupDataObj: isGroup ? groupDataObj : {},
        // 拼团数据
        activeObj: _objectSpread(_objectSpread({}, this.giftInfo), {}, {
          activeType: this.activeType,
          activeId: this.activeId,
          enableCoupon: (_this$activeInfo5 = this.activeInfo) === null || _this$activeInfo5 === void 0 ? void 0 : _this$activeInfo5.enableCoupon
        }),
        //活动类型
        activityType: ((_this$halfInfo = this.halfInfo) === null || _this$halfInfo === void 0 ? void 0 : _this$halfInfo.type) || this.shopActiveInfo.type || '',
        activeId: ((_this$halfInfo2 = this.halfInfo) === null || _this$halfInfo2 === void 0 ? void 0 : _this$halfInfo2.id) || '',
        activityId: ((_this$shopActiveInfo = this.shopActiveInfo) === null || _this$shopActiveInfo === void 0 ? void 0 : _this$shopActiveInfo.id) || ((_this$halfInfo3 = this.halfInfo) === null || _this$halfInfo3 === void 0 ? void 0 : _this$halfInfo3.id) || '',
        shareParam: _objectSpread({}, this.shareParam)
      }, activeInfo), {}, {
        goodsStock: (_obj3 = obj) === null || _obj3 === void 0 ? void 0 : _obj3.goodsInventory,
        integralPrice: obj.integralPrice,
        channelCode: this.channelCode,
        channelFlag: this.channelFlag,
        channelName: this.channelName,
        // 是否开具发票
        invoiceStatus: (_this$goodsInfo7 = this.goodsInfo) === null || _this$goodsInfo7 === void 0 ? void 0 : _this$goodsInfo7.invoiceStatus
      });
      console.log('444444444444', goodsList);
      this.goTo("/pagesA/order/orderCenter?goodsList=".concat(JSON.stringify([goodsList])));
    },
    // 拼团数据处理
    groupDataTreating: function groupDataTreating(isJoin) {
      if (this.goodsType) {
        return {
          type: 'PT',
          groupId: this.groupInfo.id,
          isJoin: isJoin,
          goodsType: this.groupInfo.type,
          discountStatus: this.groupInfo.discountStatus,
          limitBuyStatus: this.groupInfo.limitBuyStatus,
          limitBuyCountNum: this.groupInfo.limitBuyCountNum,
          limitBuyOrderNum: this.groupInfo.limitBuyOrderNum
        };
      }
      return {
        type: null
      };
    },
    swiperChange: function swiperChange(current) {
      var player = uni.createVideoContext("firstVideo");

      // 切换如果不是视频位置 暂停视频
      if (current.target.current == 0) {
        // player.pause()
        this.playFlag = true;
        this.coverImgShow = false;
      } else {
        player.pause();
      }
    },
    videoPause: function videoPause() {
      this.playFlag = true;
    },
    play: function play() {
      this.playFlag = false;
    },
    imgPlay: function imgPlay() {
      var player = uni.createVideoContext("firstVideo");
      if (this.playFlag) {
        player.play();
        this.playFlag = false;
      } else {
        player.pause();
        this.playFlag = true;
      }
    },
    // 获取优惠券
    getCoupons: function getCoupons() {
      var _this16 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _this16$$globleData$u;
        var res;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(_this16.paymentWay == 2 || _this16.paymentWay == 3)) {
                  _context15.next = 2;
                  break;
                }
                return _context15.abrupt("return");
              case 2:
                _context15.next = 4;
                return _this16.$http.goodsCoupons({
                  userId: ((_this16$$globleData$u = _this16.$globleData.userData) === null || _this16$$globleData$u === void 0 ? void 0 : _this16$$globleData$u.id) || '',
                  goodsId: _this16.goodsId,
                  memberLevelId: _this16.merberData.id
                });
              case 4:
                res = _context15.sent;
                _this16.couponsList = res.dataInfo.filter(function (item) {
                  // 只展示领取范围内的

                  if (new Date().getTime() <= new Date(item.getEndTime.replace(/-/g, '/')).getTime() && new Date().getTime() >= new Date(item.getStartTime.replace(/-/g, '/')).getTime()) {
                    return true;
                  }
                });
              case 6:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    },
    // 获取相似商品列表
    getSimilarGoods: function getSimilarGoods() {
      var _this17 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _getApp$globalData$fr;
        var buyerType, _this17$$globleData, res;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                console.log('this.goodsInfo: ', _this17.goodsInfo);
                buyerType = '';
                if ((_getApp$globalData$fr = getApp().globalData.freshShopId) !== null && _getApp$globalData$fr !== void 0 && _getApp$globalData$fr.includes(_this17.$globleData.shopId)) {
                  buyerType = ((_this17$$globleData = _this17.$globleData) === null || _this17$$globleData === void 0 ? void 0 : _this17$$globleData.buyType) || '';
                }
                _context16.next = 5;
                return _this17.$http.goodsList({
                  current: 1,
                  size: 8,
                  goodsGroupId: _this17.goodsInfo.goodsGroupId,
                  buyerType: buyerType
                }, false);
              case 5:
                res = _context16.sent;
                _this17.similarList = res.dataInfo.records;
              case 7:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    //查看商品
    checkGoods: function checkGoods() {
      var _this18 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17() {
        var _this18$goodsSpecInfo, _this18$goodsSpecInfo2;
        var _yield$_this18$$http$, res, status, info;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _this18.$http.checkGoods({
                  id: _this18.goodsId,
                  activityId: _this18.activeId
                });
              case 2:
                _yield$_this18$$http$ = _context17.sent;
                res = _yield$_this18$$http$.dataInfo;
                status = (res === null || res === void 0 ? void 0 : res.goodsActivityStatus) || null; // 判断当前商品类型
                _this18.goodsType = status;
                // 拼团商品
                if (status == 1) {
                  _this18.initGroupBooking(res);
                }
                // 普通商品
                if (!status) {
                  _this18.goodsInfo = res || [];
                }
                info = _this18.goodsInfo;
                _this18.goodsSpecList = (info === null || info === void 0 ? void 0 : info.goodsSpecPropertiesList) || [];
                if (info.goodsPictures.indexOf(',') > -1) {
                  _this18.headSwiperImg = info.goodsPictures.split(',');
                } else {
                  _this18.headSwiperImg = [info.goodsPictures];
                }
                _this18.paymentWay = info.paymentWay;
                _this18.goodsVideo = info.goodsVideo;
                _this18.modelIds = ((_this18$goodsSpecInfo = _this18.goodsSpecInfo) === null || _this18$goodsSpecInfo === void 0 ? void 0 : (_this18$goodsSpecInfo2 = _this18$goodsSpecInfo.modelIds) === null || _this18$goodsSpecInfo2 === void 0 ? void 0 : _this18$goodsSpecInfo2.split(',')) || [];
                _this18.specList = (info === null || info === void 0 ? void 0 : info.goodsSpecList) || [];
                _this18.specGoodsInfo = _this18.goodsSpecList[0];
                if (_this18.goodsInfo) {
                  _this18.getSimilarGoods();
                }
                _this18.loading = false;
              case 18:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }))();
    },
    // 初始化 拼团信息 (商品为拼团商品时触发)
    initGroupBooking: function initGroupBooking(res) {
      this.groupInfo = (res === null || res === void 0 ? void 0 : res.groupActivityInfoResponse) || null;
      this.groupList = (res === null || res === void 0 ? void 0 : res.groupList) || [];
      this.goodsInfo = (res === null || res === void 0 ? void 0 : res.goodsWXQueryResponse) || {};
    },
    // 显示规格弹窗
    showPopup: function showPopup(state) {
      this.btnState = state;
      if ([5, 6].includes(state)) {
        var list = this.goodsSpecList.filter(function (item) {
          if (item.availableStatus == 0) {
            return false;
          }
          return true;
        });
        this.goodsPoupSpecList = list;
      } else {
        this.goodsPoupSpecList = this.goodsSpecList;
      }
    },
    // 领取优惠券
    receiveCoupon: function receiveCoupon() {
      this.show = true;
    },
    recieve: function recieve(id, item) {
      var _this19 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19() {
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _this19.noMultipleClicks( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
                  var getStartTime, getEndTime, currentTime, res;
                  return _regenerator.default.wrap(function _callee18$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          getStartTime = new Date(item.getStartTime.replace(/-/g, '/')).getTime();
                          getEndTime = new Date(item.getEndTime.replace(/-/g, '/')).getTime();
                          currentTime = new Date().getTime();
                          if (!(currentTime <= getEndTime && currentTime >= getStartTime)) {
                            _context18.next = 10;
                            break;
                          }
                          _context18.next = 6;
                          return _this19.$http.receiveCoupons({
                            couponId: id,
                            receiveType: item.couponOwnWay
                          });
                        case 6:
                          res = _context18.sent;
                          if (res.returnCode == 1000) {
                            _this19.getCoupons();
                            _this19.$toast('领取成功');
                          }
                          _context18.next = 12;
                          break;
                        case 10:
                          _this19.$toast('请在有效的时间领取');
                          return _context18.abrupt("return");
                        case 12:
                        case "end":
                          return _context18.stop();
                      }
                    }
                  }, _callee18);
                })));
              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    },
    // 查询是否收藏
    queryCollection: function queryCollection() {
      var _this20 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20() {
        var _yield$_this20$$http$, res;
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return _this20.$http.queryCollection({
                  productId: _this20.goodsId
                });
              case 2:
                _yield$_this20$$http$ = _context20.sent;
                res = _yield$_this20$$http$.dataInfo;
                if (res.id) {
                  _this20.collectId = res.id;
                  _this20.isCollection = true;
                }
              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }))();
    },
    // （添加 取消) 收藏
    collection: function collection() {
      var _this21 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21() {
        var param, res;
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                param = {
                  productId: _this21.goodsId
                };
                if (!_this21.isCollection) {
                  _context21.next = 7;
                  break;
                }
                _context21.next = 4;
                return _this21.$http.cancelCollection({
                  id: _this21.collectId
                });
              case 4:
                _this21.isCollection = false;
                _this21.$toast('取消收藏');
                return _context21.abrupt("return");
              case 7:
                _context21.next = 9;
                return _this21.$http.addCollection(param);
              case 9:
                res = _context21.sent;
                _this21.$toast('收藏成功');
                _this21.collectId = res.dataInfo.id;
                _this21.isCollection = true;
              case 13:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }))();
    },
    // 加入购物车
    addCart: function addCart(_ref3) {
      var _this22 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22() {
        var _ref3$ids, ids, _ref3$goodsNum, goodsNum, id, _iterator7, _step7, item, param;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _ref3$ids = _ref3.ids, ids = _ref3$ids === void 0 ? [] : _ref3$ids, _ref3$goodsNum = _ref3.goodsNum, goodsNum = _ref3$goodsNum === void 0 ? 1 : _ref3$goodsNum;
                _this22.specIdList = ids || _this22.specIdList;
                id = '';
                _iterator7 = _createForOfIteratorHelper(_this22.goodsSpecList);
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    item = _step7.value;
                    if (item.modelIds == ids.join(',')) {
                      id = item.id;
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
                id = id || _this22.goodsSpecInfo.id;
                if (id) {
                  _context22.next = 9;
                  break;
                }
                _this22.$toast('操作失败');
                return _context22.abrupt("return");
              case 9:
                param = {
                  goodsId: _this22.goodsId,
                  goodsSpecIds: id,
                  goodsAmount: goodsNum || 1
                };
                _context22.next = 12;
                return _this22.$http.cartAdd(param);
              case 12:
                _this22.goodsCodeEvent('1', (param === null || param === void 0 ? void 0 : param.goodsAmount) || 0);
                _this22.$toast('添加成功');
                _this22.$store.commit('setSpecification', false);
              case 15:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 143:
/*!************************************************************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue?vue&type=style&index=0&id=6c490962&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_6c490962_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsDetail.vue?vue&type=style&index=0&id=6c490962&scoped=true&lang=scss& */ 144);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_6c490962_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_6c490962_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_6c490962_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_6c490962_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsDetail_vue_vue_type_style_index_0_id_6c490962_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 144:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue?vue&type=style&index=0&id=6c490962&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: uview-ui/theme.scss.\n        on line 1 of ../../../../../../Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/uni.scss\n        from line 51 of /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/shop/goodsDetail.vue\n>> @import 'uview-ui/theme.scss';\r\n   ^\n\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/index.js:75:7)\n    at Object.done [as callback] (/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/neo-async/async.js:8069:18)\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/compile-node-sass/node_modules/node-sass-china/lib/index.js:294:32");

/***/ })

},[[137,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesA/shop/goodsDetail.js.map