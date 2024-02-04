require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesA/order/orderCenter"],{

/***/ 231:
/*!**********************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/main.js?{"page":"pagesA%2Forder%2ForderCenter"} ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _orderCenter = _interopRequireDefault(__webpack_require__(/*! ./pagesA/order/orderCenter.vue */ 232));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_orderCenter.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 232:
/*!***************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderCenter.vue?vue&type=template&id=601aa604&scoped=true& */ 233);
/* harmony import */ var _orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderCenter.vue?vue&type=script&lang=js& */ 235);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _orderCenter_vue_vue_type_style_index_0_id_601aa604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderCenter.vue?vue&type=style&index=0&id=601aa604&lang=scss&scoped=true& */ 237);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 43);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "601aa604",
  null,
  false,
  _orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/order/orderCenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 233:
/*!**********************************************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue?vue&type=template&id=601aa604&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderCenter.vue?vue&type=template&id=601aa604&scoped=true& */ 234);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_template_id_601aa604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 234:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue?vue&type=template&id=601aa604&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uNumberBox: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-number-box/u-number-box.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uPopup: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-popup/u-popup.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uCheckboxGroup: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-checkbox-group/u-checkbox-group.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uCheckbox: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-checkbox/u-checkbox.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uSelect: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-select/u-select.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uSkeleton: function () {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'uview-ui/components/u-skeleton/u-skeleton.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
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
  var g0 = ["433733032805924864", "461887105476845568"].includes(_vm.shopId)
  var g1 = _vm.addressType.length
  var g2 = _vm.addressType.length
  var g3 = _vm.getDefaultAddress
    ? ["2", "3"].includes(_vm.selectArea.value)
    : null
  var g4 = _vm.shopAddress.length
  var g5 = _vm.groupGoods.length
  var l1 = g5
    ? _vm.__map(_vm.groupGoods, function (val, index) {
        var $orig = _vm.__get_orig(val)
        var g6 = !(_vm.activeObj.activeType == "ZP")
          ? [2, 3].includes(_vm.goodsInfo.paymentWay)
          : null
        var l0 = _vm.__map(val.info, function (item, __i0__) {
          var $orig = _vm.__get_orig(item)
          var m0 =
            !(_vm.activeObj.activeType == "ZP") &&
            !g6 &&
            item.membersPrice &&
            item.membersPrice != "0" &&
            item.activityType <= 0 &&
            _vm.realPrice &&
            _vm.realPrice.supportMemberPrice
              ? _vm.switchMoney(item.membersPrice)
              : null
          var m1 =
            !(_vm.activeObj.activeType == "ZP") &&
            !g6 &&
            !(
              item.membersPrice &&
              item.membersPrice != "0" &&
              item.activityType <= 0 &&
              _vm.realPrice &&
              _vm.realPrice.supportMemberPrice
            )
              ? _vm.switchMoney(item.unitPrice)
              : null
          var m2 = !(_vm.activeObj.activeType == "ZP")
            ? _vm.setMaxNum(item)
            : null
          return {
            $orig: $orig,
            m0: m0,
            m1: m1,
            m2: m2,
          }
        })
        return {
          $orig: $orig,
          g6: g6,
          l0: l0,
        }
      })
    : null
  var m3 =
    g5 && _vm.realPrice && _vm.feeType == "GZPT"
      ? _vm.switchMoney(_vm.realPrice.preSumPrice) || "--"
      : null
  var m4 =
    g5 && _vm.realPrice && _vm.feeType != "EZ"
      ? _vm.switchMoney(_vm.realPrice.frightPrice) || "--"
      : null
  var m5 =
    g5 && _vm.realPrice && _vm.isShowContent && _vm.couponId
      ? _vm.switchMoney(_vm.realPrice.discountPrice)
      : null
  var m6 =
    g5 &&
    _vm.realPrice &&
    (_vm.realPrice.priceDiscount > 0 || _vm.feeType == "ZP") &&
    _vm.realPrice.priceDiscount > 0
      ? _vm.switchMoney(_vm.realPrice.priceDiscount)
      : null
  var m7 =
    g5 && _vm.realPrice && _vm.realPrice.activityPrice > 0
      ? _vm.switchMoney(_vm.realPrice.activityPrice)
      : null
  var g7 = g5 && _vm.realPrice ? ["GZPT"].includes(_vm.feeType) : null
  var g8 =
    g5 && _vm.realPrice && !g7 ? ["ZP", "EZ"].includes(_vm.feeType) : null
  var m8 =
    g5 && _vm.realPrice && !g7 && g8
      ? _vm.switchMoney(_vm.realPrice.frightPrice || 0) || 0
      : null
  var g9 =
    g5 && _vm.realPrice && !g7 && !g8 ? ["JF"].includes(_vm.feeType) : null
  var g10 = g5
    ? ["PT"].includes(_vm.feeType) &&
      _vm.realPrice.orderActualPrice > 0 &&
      _vm.goodsInfo.invoiceStatus == "1"
    : null
  var m9 =
    g5 &&
    _vm.merberData &&
    _vm.merberData.id &&
    _vm.realPrice &&
    _vm.realPrice.orderPrice
      ? _vm.memberType(_vm.realPrice)
      : null
  var g11 = g5 ? ["JF"].includes(_vm.feeType) : null
  var g12 = g5 ? ["ZP", "EZ"].includes(_vm.feeType) : null
  var m10 = g5 && g12 ? _vm.switchMoney(_vm.realPrice.frightPrice || 0) : null
  var g13 = g5 && !g12 ? ["GZPT"].includes(_vm.feeType) : null
  var m11 =
    g5 && !g12 && g13 ? _vm.switchMoney(_vm.realPrice.preSumPrice) : null
  var g14 = g5 && !g12 ? ["JF"].includes(_vm.feeType) : null
  var l2 = g5
    ? _vm.__map(_vm.couponList, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var g15 = [2, 4].includes(item.couponType)
        var m12 = _vm.strSplit(item.couponName, 9)
        var m13 = _vm.getCouponTitle(item)
        return {
          $orig: $orig,
          g15: g15,
          m12: m12,
          m13: m13,
        }
      })
    : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.deliveryShow = true
    }
    _vm.e1 = function ($event) {
      _vm.ruleShow = !_vm.ruleShow
    }
    _vm.e2 = function ($event) {
      _vm.deliveryShow = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
        l1: l1,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6,
        m7: m7,
        g7: g7,
        g8: g8,
        m8: m8,
        g9: g9,
        g10: g10,
        m9: m9,
        g11: g11,
        g12: g12,
        m10: m10,
        g13: g13,
        m11: m11,
        g14: g14,
        l2: l2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 235:
/*!****************************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderCenter.vue?vue&type=script&lang=js& */ 236);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 236:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 33);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var IntegralInform = function IntegralInform() {
  __webpack_require__.e(/*! require.ensure | pagesA/components/integralInform */ "pagesA/components/integralInform").then((function () {
    return resolve(__webpack_require__(/*! ../components/integralInform */ 1203));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    IntegralInform: IntegralInform
  },
  data: function data() {
    return {
      title: '填写订单',
      goodsInfo: {},
      show: false,
      switchValue: false,
      freight: 0,
      //运费
      couponList: [],
      goods: [],
      selCoupon: '123s',
      couponCount: '',
      couponId: '',
      isClick: true,
      getDefaultAddress: {},
      shopAddress: [],
      //多个商品查询共同自提地址
      integrateInfo: null,
      //积分信息
      sumReturnPoint: 0,
      //购买商品返回的总积分
      realPrice: {},
      //订单实际价格的集合
      groupData: {},
      liftId: [],
      //多个商品id集合
      switchDisabled: false,
      //自提禁止切换
      liftInfo: [],
      //自提地址信息
      isIntegral: 1,
      //是否使用积分（0.是 1.否）
      activeObj: {},
      // 活动信息
      cardId: '',
      cardCouponGoodsIdList: null,
      cardData: {},
      zeroOrderId: "",
      //购买权益卡的订单id
      loading: true,
      // 是否显示骨架屏组件
      ruleShow: false,
      // 是否显示赠品规则
      shareParam: {},
      couponTitle: '',
      //优惠券结算是的名称
      isUseCoupon: true,
      // 是否可使用优惠券
      // 改版属性
      isShowContent: false,
      // 是否使用优惠券
      isCart: false,
      // 是否是购物车页面过来的
      // GWC（购物车）PT（普通）ZK（折扣）MS（秒杀）（买一赠一）（第二件半价）（积分+现金）（现金+固定积分）（纯积分）   // QY（权益）ZP（赠品）（拼团）（规则拼团）
      // PT (普通) ZP（赠品） GZPT（规则拼团）PTPT（普通拼团）JF（积分） EZ(老客户兑换)
      feeType: 'PT',
      carUseCouponList: [],
      // 购物可使用优惠券列表
      allCouponList: [],
      addressType: [],
      //下拉框选择的地址
      deliveryMode: [],
      //后台设定的收货地址类型 ['1','2','3'] 1 快递 2 自提 3 定点
      addressShow: false,
      selectArea: {},
      //选择的收货地址类型{ label:'门店自提',value:'2'}
      groupGoods: [],
      deliveryShow: false,
      fixedDelivery: {
        nickName: '',
        phoneNumber: ''
      },
      //定点配送提货人信息
      deliveryPhone: '',
      //提货人弹窗的电话
      deliveryName: '',
      //提货人弹窗的姓名
      shopId: '',
      bottomHeght: 0,
      merberData: {},
      //,
      isAddressClick: false,
      orderFromType: 1
    };
  },
  onReady: function onReady() {
    var _this = this;
    var query = uni.createSelectorQuery().in(this);
    query.select('.bottom-btn-box').boundingClientRect(function (data) {
      console.log('data,0', data);
      _this.bottomHeght = data.height;
    }).exec();
  },
  onLoad: function onLoad(option) {
    var _this$goods$, _goodsObj$groupDataOb, _goodsObj$activeObj;
    this.isCart = !!(option !== null && option !== void 0 && option.cart);
    this.goods = JSON.parse(option.goodsList || 'null') || [];
    console.log('this.goods: ', this.goods);
    var commonData = this.groupingMethod(this.goods, 'goodsSupplierName');
    this.groupGoods = JSON.parse(JSON.stringify(commonData));
    console.log('this.groupGoods: ', this.groupGoods);
    console.log('this.goods: ', this.goods);
    if (this.goods.length) {
      this.handleAddress();
    }
    // 购物车下单
    if (this.isCart) {
      var list = this.goods.filter(function (item) {
        if (!item.activityId && item.activityType <= 0 && item.paymentWay <= 0) {
          return true;
        }
        return false;
      });
      if (list.length > 0) {
        this.getCouponList();
        this.carUseCouponList = list;
        return;
      }
    }
    var goodsObj = this.goods[0] || {};
    this.goodsInfo = goodsObj;
    // 全权益卡
    this.cardData = option.cardData ? JSON.parse(option.cardData) : null;
    this.cardCouponGoodsIdList = option.cardCouponGoodsIdList ? JSON.parse(option.cardCouponGoodsIdList) : null;
    if (this.cardData) {
      this.feeType = "ZP";
      return;
    }

    // 用户分享信息
    this.shareParam = ((_this$goods$ = this.goods[0]) === null || _this$goods$ === void 0 ? void 0 : _this$goods$.shareParam) || {};
    // 拼团
    if (goodsObj !== null && goodsObj !== void 0 && (_goodsObj$groupDataOb = goodsObj.groupDataObj) !== null && _goodsObj$groupDataOb !== void 0 && _goodsObj$groupDataOb.type) {
      var _goodsObj$groupDataOb2;
      var type = (_goodsObj$groupDataOb2 = goodsObj.groupDataObj) === null || _goodsObj$groupDataOb2 === void 0 ? void 0 : _goodsObj$groupDataOb2.goodsType;
      this.groupData = this.goods[0].groupDataObj || {};
      if (type == 1) {
        this.feeType = "PTPT";
      }
      if (type == 2) {
        this.feeType = "GZPT";
      }
      // if(this.groupData?.discountStatus ==1){
      //   this.getCouponList()
      // }
      return;
    }
    // 活动(厨拼图和积分商城的所有活动)
    if (goodsObj !== null && goodsObj !== void 0 && (_goodsObj$activeObj = goodsObj.activeObj) !== null && _goodsObj$activeObj !== void 0 && _goodsObj$activeObj.activeType) {
      var _goodsObj$activeObj2, _goodsObj$activeObj3;
      this.activeObj = goodsObj === null || goodsObj === void 0 ? void 0 : goodsObj.activeObj;
      if ((goodsObj === null || goodsObj === void 0 ? void 0 : (_goodsObj$activeObj2 = goodsObj.activeObj) === null || _goodsObj$activeObj2 === void 0 ? void 0 : _goodsObj$activeObj2.activeType) == 'ZP') {
        this.feeType = 'ZP';
      }
      // if(goodsObj?.activeObj?.enableCoupon ==1){
      //   this.getCouponList()
      // }
      if ((goodsObj === null || goodsObj === void 0 ? void 0 : (_goodsObj$activeObj3 = goodsObj.activeObj) === null || _goodsObj$activeObj3 === void 0 ? void 0 : _goodsObj$activeObj3.activeType) == 'EZ') {
        this.feeType = 'EZ';
      }
      return;
    }
    var paymentWay = (goodsObj === null || goodsObj === void 0 ? void 0 : goodsObj.paymentWay) || 0;
    if ([2, 3].includes(paymentWay)) {
      this.feeType = 'JF';
      return;
    }
    if ([0].includes(paymentWay) && goodsObj.activityType == 0) {
      this.getCouponList();
    }
  },
  onShow: function onShow() {
    var _this2 = this;
    this.getPoint();
    // 是单个商品的
    this.liftId = [];
    this.fixedDelivery = JSON.parse(JSON.stringify(this.$globleData.userData));
    this.goods.forEach(function (item) {
      _this2.liftId.push(item.goodsId);
    });
    this.isClick = true;
    this.getLiftAddress();
    // this.fetchCouponList()
    this.getMemberLevel();
    console.log('this9999999999', this.getDefaultAddress);
  },
  onUnload: function onUnload() {
    this.$store.commit('setSelShopAddress', null);
    this.$store.commit('setSelAddress', null);
    this.setInvoiceInfo(null);
  },
  watch: {},
  computed: _objectSpread(_objectSpread({
    memberType: function memberType() {
      return function (val) {
        // 会员权益类型1:开卡礼;2:赚积分;3:购物返积分;4:积分兑换;5:家居顾问;6:生日礼包;7:升级礼包;8:会员日,9:超省会员价;10:自定义权益
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 1) {
          return '(开卡礼)';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 2) {
          return '(赚积分)';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 3) {
          return '(购物返积分)';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 4) {
          return '(积分兑换)';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 5) {
          return '(家居顾问)';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 6) {
          return '(生日礼包)';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 7) {
          return '升级礼包';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 8) {
          return '(会员日)';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 9) {
          return '超省会员价';
        }
        if ((val === null || val === void 0 ? void 0 : val.benefitType) == 10) {
          return '(自定义权益)';
        }
        return '';
      };
    }
  }, (0, _vuex.mapState)(['invoiceInfo'])), {}, {
    // 是否可以开发票 只有普通订单和订单金额不为零的才开
    // 获取商品价格
    getGoodsPrice: function getGoodsPrice() {
      var _this$realPrice3;
      if (['ZP', 'GZPT', 'PTPT'].includes(this.feeType)) {
        if (this.goodsInfo) {
          return this.switchMoney(this.goodsInfo.unitPrice * this.goodsInfo.goodsAmount);
        }
        return '';
      }
      if (['JF'].includes(this.feeType)) {
        var _this$realPrice;
        if (((_this$realPrice = this.realPrice) === null || _this$realPrice === void 0 ? void 0 : _this$realPrice.orderPrice) > 0) {
          var _this$realPrice2;
          return this.switchMoney((_this$realPrice2 = this.realPrice) === null || _this$realPrice2 === void 0 ? void 0 : _this$realPrice2.orderPrice) + '+';
        }
        return '';
      }
      if (['EZ'].includes(this.feeType)) {
        return this.switchMoney(0);
      }
      return this.switchMoney((_this$realPrice3 = this.realPrice) === null || _this$realPrice3 === void 0 ? void 0 : _this$realPrice3.orderPrice);
    },
    // 获取订单金额
    getOrderMoney: function getOrderMoney() {
      var _this$realPrice6;
      if (['JF'].includes(this.feeType)) {
        var _this$realPrice4;
        if (((_this$realPrice4 = this.realPrice) === null || _this$realPrice4 === void 0 ? void 0 : _this$realPrice4.orderActualPrice) > 0) {
          var _this$realPrice5;
          return this.switchMoney((_this$realPrice5 = this.realPrice) === null || _this$realPrice5 === void 0 ? void 0 : _this$realPrice5.orderActualPrice) + '+';
        }
        return '';
      }
      return this.switchMoney((_this$realPrice6 = this.realPrice) === null || _this$realPrice6 === void 0 ? void 0 : _this$realPrice6.orderActualPrice);
    },
    // 计步器是否禁用
    setMaxNum: function setMaxNum() {
      var _this3 = this;
      return function (item) {
        if (['ZP', 'GZPT', 'EZ'].includes(_this3.feeType)) {
          return 1;
        }
        if (['PTPT'].includes(_this3.feeType)) {
          var obj = _this3.groupData || {};
          if (obj.limitBuyStatus == 1) {
            if (obj !== null && obj !== void 0 && obj.limitBuyOrderNum) {
              return obj === null || obj === void 0 ? void 0 : obj.limitBuyOrderNum;
            }
            if (obj.limitBuyCountNum) {
              return obj.limitBuyCountNum;
            }
          }
          return 100000;
        }
        if (item.enableLimit == 1) {
          var limitCount = (item === null || item === void 0 ? void 0 : item.limitCount) || 1;
          var num = parseInt(item === null || item === void 0 ? void 0 : item.goodsBuyCount) || 0;
          return limitCount - num;
        }
        if ((item === null || item === void 0 ? void 0 : item.goodsStock) == 0 || (item === null || item === void 0 ? void 0 : item.goodsStock) > 0) {
          return item.goodsStock;
        }
        return 9999;
      };
    },
    addressCut: function addressCut() {
      var _this$selectArea, _this$selectArea2, _this$selectArea3;
      if (((_this$selectArea = this.selectArea) === null || _this$selectArea === void 0 ? void 0 : _this$selectArea.value) == '2' || ((_this$selectArea2 = this.selectArea) === null || _this$selectArea2 === void 0 ? void 0 : _this$selectArea2.value) == '3') {
        //自提
        if (this.$store.state.selShopAddress) {
          this.getDefaultAddress = this.$store.state.selShopAddress;
        } else {
          this.getDefaultAddress = this.shopAddress.length ? this.shopAddress[0] : null;
        }
      } else if (((_this$selectArea3 = this.selectArea) === null || _this$selectArea3 === void 0 ? void 0 : _this$selectArea3.value) == '1') {
        //快递
        if (this.$store.state.selAddress) {
          this.getDefaultAddress = this.$store.state.selAddress;
        } else {
          this.getDefaultAddress = uni.getStorageSync('default-address') ? uni.getStorageSync('default-address') : null;
        }
      }
      return '';
    },
    goodsPrice: function goodsPrice() {
      var _this$goodsInfo,
        _this$goodsInfo2,
        _this4 = this;
      if (this.goodsInfo && ((_this$goodsInfo = this.goodsInfo) === null || _this$goodsInfo === void 0 ? void 0 : _this$goodsInfo.paymentWay) == 3) {
        return '';
      }
      if ([2].includes((_this$goodsInfo2 = this.goodsInfo) === null || _this$goodsInfo2 === void 0 ? void 0 : _this$goodsInfo2.paymentWay)) {
        var _this$goodsInfo3, _this$goodsInfo4;
        return "\uFFE5".concat(this.switchMoney(((_this$goodsInfo3 = this.goodsInfo) === null || _this$goodsInfo3 === void 0 ? void 0 : _this$goodsInfo3.unitPrice) * ((_this$goodsInfo4 = this.goodsInfo) === null || _this$goodsInfo4 === void 0 ? void 0 : _this$goodsInfo4.goodsAmount)), "+");
      }
      var sum = this.goods.reduce(function (a, b) {
        var _this4$realPrice;
        var price = b.unitPrice;
        if ((_this4$realPrice = _this4.realPrice) !== null && _this4$realPrice !== void 0 && _this4$realPrice.supportMemberPrice && b.membersPrice != '0') {
          price = b.membersPrice || b.unitPrice;
        }
        return a + price * b.goodsAmount;
      }, 0);
      return this.switchMoney(sum || 0);
    },
    saleList: function saleList() {
      if (!this.couponList) return;
      return this.couponList.filter(function (item) {
        return item.isActive == true;
      });
    },
    salePrice: function salePrice() {
      if (this.saleList.length) {
        this.couponId = this.saleList[0].id;
      } else {
        this.couponId = '';
        this.couponTitle = "".concat(this.couponCount, "\u5F20\u53EF\u7528");
      }
      return this.saleList.reduce(function (a, b) {
        return Number(a) + Number(b.couponAmount);
      }, 0);
    },
    getFreight: function getFreight() {
      var _this$getDefaultAddre;
      if (this.goods.length && (_this$getDefaultAddre = this.getDefaultAddress) !== null && _this$getDefaultAddre !== void 0 && _this$getDefaultAddre.id && this.feeType != 'EZ') {
        this.calcuOrder();
      } else {
        this.loading = false;
        this.realPrice.frightPrice = 0;
      }
      return '';
    },
    couponStatus: function couponStatus() {
      if (this.isUseCoupon) {
        return '0';
      } else {
        return '1,2';
      }
    },
    getIntegralPrice: function getIntegralPrice() {
      var _this$goodsInfo5, _this$goodsInfo6;
      if (((_this$goodsInfo5 = this.goodsInfo) === null || _this$goodsInfo5 === void 0 ? void 0 : _this$goodsInfo5.paymentWay) == 3) {
        return '';
      }
      if ([2].includes((_this$goodsInfo6 = this.goodsInfo) === null || _this$goodsInfo6 === void 0 ? void 0 : _this$goodsInfo6.paymentWay)) {
        var _this$goodsInfo7;
        return "\uFFE5".concat(this.switchMoney(((_this$goodsInfo7 = this.goodsInfo) === null || _this$goodsInfo7 === void 0 ? void 0 : _this$goodsInfo7.unitPrice) || 0), "+");
      }
    }
  }),
  methods: _objectSpread(_objectSpread({
    // 提货人修改信息取消按钮弹窗
    deliveryCancle: function deliveryCancle() {
      this.deliveryName = '';
      this.deliveryPhone = '';
      this.deliveryShow = false;
    },
    // 提货人信息手机号验证
    phoneChange: function phoneChange(e) {
      console.log('shoujihao ', e);
      if (!this.$u.test.mobile(e.detail.value)) {
        this.$toast('手机号格式输入有误，请重新输入');
        return;
      }
    },
    // 提货人修改信息 确定弹窗
    deliveryConfirm: function deliveryConfirm() {
      if (!this.$u.test.mobile(this.deliveryPhone)) {
        this.$toast('手机号格式输入有误，请重新输入');
        return;
      }
      this.fixedDelivery.nickName = this.deliveryName ? this.deliveryName : this.fixedDelivery.nickName;
      this.fixedDelivery.phoneNumber = this.deliveryPhone ? this.deliveryPhone : this.fixedDelivery.phoneNumber;
      this.deliveryShow = false;
    },
    // 自提和定点多个地址展示弹窗事件
    showMoreArea: function showMoreArea() {
      var _this$addressType;
      console.log('this.addressType: ', this.addressType);
      if (((_this$addressType = this.addressType) === null || _this$addressType === void 0 ? void 0 : _this$addressType.length) > 1) {
        this.addressShow = true;
      } else {
        return;
      }
    },
    // 自提、定点配送多个地址选择事件
    changeArea: function changeArea(e) {
      this.selectArea = e[0];
      this.modalMethod();
      this.getLiftAddress();
    },
    // 处理收货地址的方式
    handleAddress: function handleAddress() {
      var _this5 = this;
      this.goods.forEach(function (item) {
        //将后台商品设置的配送方式转成数组形式['1','2','3'] 1 快递 2 自提 3 定点配送
        if (item.deliveryMode) {
          if (item.deliveryMode.indexOf(',') > -1) {
            _this5.deliveryMode = item.deliveryMode.split(',');
          } else {
            _this5.deliveryMode.push(item.deliveryMode);
          }
        }
      });
      this.deliveryMode = (0, _toConsumableArray2.default)(new Set(this.deliveryMode));
      this.deliveryMode.sort(function (a, b) {
        return a - b;
      });
      var addressArr = [{
        label: '快递邮寄',
        value: '1'
      }, {
        label: '门店自提',
        value: '2'
      }, {
        label: '定点配送',
        value: '3'
      }];
      addressArr.map(function (item) {
        //将addressArr数组和配送方式的数组进行对比，将符合条件的筛选出来
        _this5.deliveryMode.forEach(function (someItem) {
          if (item.value == someItem) {
            _this5.addressType.push(item);
          }
        });
      });
      console.log('this.addressTyp: ', this.addressType);
      // this.addressType=this.addressType.filter(item=>{//将门店自提并且后台返回自提门店地址为空的过滤出去
      //   if(item.value=='2' && this.shopAddress.length==0){
      //     return false
      //   }else{
      //      return true
      //   }

      // })
      this.selectArea = this.addressType[0];
    },
    // 商品地址配送地址不同提示的方法
    modalMethod: function modalMethod() {
      var _this$selectArea4, _this$shopAddress;
      if (((_this$selectArea4 = this.selectArea) === null || _this$selectArea4 === void 0 ? void 0 : _this$selectArea4.value) == '2' && ((_this$shopAddress = this.shopAddress) === null || _this$shopAddress === void 0 ? void 0 : _this$shopAddress.length) == 0) {
        uni.showModal({
          title: '温馨提示',
          content: '商品配送的地址不同，请分开进行购买',
          showCancel: false,
          success: function success() {
            uni.navigateBack();
          }
        });
      }
    }
  }, (0, _vuex.mapMutations)(['setInvoiceInfo'])), {}, {
    // 请求使用优惠券
    getCouponList: function getCouponList() {
      var _this6 = this;
      this.isShowContent = true;
      this.$nextTick(function () {
        _this6.fetchCouponList();
      });
    },
    // 跳转设置发票抬头页面
    selInvoice: function selInvoice() {
      this.goTo("/pagesD/invoice/addRise?type=2&invoiceInfo=".concat(JSON.stringify(this.invoiceInfo)));
    },
    clickCreateOrder: function clickCreateOrder() {
      var _this$groupData;
      if ((_this$groupData = this.groupData) !== null && _this$groupData !== void 0 && _this$groupData.type) {
        this.requestSubscribeMessage();
        return;
      }
      this.createOrder();
    },
    // 点击是否选中积分
    changeIntegral: function changeIntegral(val) {
      if (val == '1') {
        this.isIntegral = 0;
      } else {
        this.isIntegral = 1;
      }
    },
    // 获取过个自提地址
    getLiftAddress: function getLiftAddress() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var param, res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                param = {
                  ids: _this7.liftId,
                  deliveryMode: _this7.selectArea.value
                };
                _context.next = 3;
                return _this7.$http.getLiftAddress(param);
              case 3:
                res = _context.sent;
                _this7.shopAddress = JSON.parse(JSON.stringify(res.dataInfo)) || [];
                console.log('this.shopAddress: ', _this7.shopAddress);
                _this7.modalMethod();
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 获取积分
    getPoint: function getPoint() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var param, res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                param = {
                  id: _this8.$globleData.userData.id
                };
                _context2.next = 3;
                return _this8.$http.getIntegrateInfo(param);
              case 3:
                res = _context2.sent;
                _this8.integrateInfo = (res === null || res === void 0 ? void 0 : res.dataInfo) || {};
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // 获取会员等级
    getMemberLevel: function getMemberLevel() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var res, _res$dataInfo;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this9.$http.getMemberInfo({
                  id: _this9.$globleData.userData.id
                });
              case 3:
                res = _context3.sent;
                if (res.returnCode == 1000) {
                  if ((_res$dataInfo = res.dataInfo) !== null && _res$dataInfo !== void 0 && _res$dataInfo.length) {
                    res.dataInfo.map(function (item) {
                      if (item.currentGrade) {
                        _this9.merberData = item;
                        console.log('this.merberData: ', _this9.merberData);
                      }
                    });
                  }
                } else {
                  _this9.merberData = {};
                }
                _context3.next = 11;
                break;
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                _this9.merberData = {};
                console.log(_context3.t0);
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    selAddress: function selAddress() {
      var _this$selectArea5, _this$selectArea6;
      if (((_this$selectArea5 = this.selectArea) === null || _this$selectArea5 === void 0 ? void 0 : _this$selectArea5.value) == '1') {
        //快递跳转
        this.goTo('/pagesA/shop/manageAddress');
        return;
      }
      // 自提收货地址和定点配送跳转
      if (['2', '3'].includes((_this$selectArea6 = this.selectArea) === null || _this$selectArea6 === void 0 ? void 0 : _this$selectArea6.value)) {
        if (this.shopAddress.length < 2) {
          return;
        }
        this.goTo("/pagesA/shop/businessAddress?shopAddress=".concat(JSON.stringify(this.shopAddress), "&id=").concat(this.getDefaultAddress.id));
      }
    },
    // 清空创建订单的购物车列表
    clearCartList: function clearCartList() {
      if (!this.isCart) {
        return;
      }
      var ids = [];
      var _iterator = _createForOfIteratorHelper(this.goods),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          ids.push(item.id);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.$http.cartDelete(ids);
    },
    //查询优惠券列表
    fetchCouponList: function fetchCouponList() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var ids, goodsId, res;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ids = JSON.parse(JSON.stringify(_this10.liftId));
                if (ids.length > 1) {
                  goodsId = ids.join(',');
                } else {
                  goodsId = ids.toString();
                }
                _context4.next = 4;
                return _this10.$http.couponList({
                  couponStatus: '0',
                  goodsId: goodsId
                });
              case 4:
                res = _context4.sent;
                _this10.allCouponList = res.dataInfo;
                _this10.useCoupon();
              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    useCoupon: function useCoupon() {
      var _this$allCouponList,
        _this11 = this;
      if (((_this$allCouponList = this.allCouponList) === null || _this$allCouponList === void 0 ? void 0 : _this$allCouponList.length) <= 0) {
        return;
      }
      var usableList = []; // 可用
      var noUsableList = []; // 不可用
      var list = this.carUseCouponList.length > 0 ? this.carUseCouponList : this.goods;
      var sum = list.reduce(function (a, b) {
        var _this11$realPrice;
        var price = b.unitPrice;
        if ((_this11$realPrice = _this11.realPrice) !== null && _this11$realPrice !== void 0 && _this11$realPrice.supportMemberPrice && b.membersPrice != '0') {
          price = b.membersPrice || b.unitPrice;
        }
        return a + price * b.goodsAmount;
      }, 0);
      sum = (sum / 100).toFixed(2);
      this.allCouponList.map(function (item) {
        var _item$useEndTime;
        item.isActive = false;
        // 商品价格必须大于使用优惠券的条件才显示可用的优惠券并且使用的时间必须要当前的时间在使用时间范围内
        if (item.useTimeType == 3 || sum >= item.couponFullMoney * 1 && new Date(item.useStartTime.replace(/-/g, '/')).getTime() <= new Date().getTime() && new Date((_item$useEndTime = item.useEndTime) === null || _item$useEndTime === void 0 ? void 0 : _item$useEndTime.replace(/-/g, '/')).getTime() >= new Date().getTime()) {
          usableList.push(item);
        } else {
          noUsableList.push(item);
        }
      });
      this.couponCount = usableList.length;
      this.couponTitle = "".concat(this.couponCount, "\u5F20\u53EF\u7528");
      if (this.isUseCoupon) {
        this.couponList = usableList;
        this.couponList.sort(function (a, b) {
          return new Date(b.createDate.replace(/-/g, '/')).getTime() - new Date(a.createDate.replace(/-/g, '/')).getTime();
        });
        if (this.isShowContent && this.couponCount) {
          this.couponList[0].isActive = true;
        }
      } else {
        this.couponList = noUsableList;
      }
    },
    // 普通支付
    pay: function pay(obj) {
      var _this12 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var _yield$_this12$$http$, res;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this12.$http.payWxOrder({
                  orderId: obj.orderId,
                  orderPayType: 7
                });
              case 2:
                _yield$_this12$$http$ = _context5.sent;
                res = _yield$_this12$$http$.dataInfo;
                _this12.payDispose(res, obj.orderId || obj);
                return _context5.abrupt("return", res);
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    // 拼团支付
    payGroup: function payGroup(obj) {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var _yield$_this13$$http$, res;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this13.$http.payGroup({
                  groupOrderId: obj.orderId
                });
              case 2:
                _yield$_this13$$http$ = _context6.sent;
                res = _yield$_this13$$http$.dataInfo;
                _this13.payDispose(res, obj.orderId);
              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    // 支付回调
    payDispose: function payDispose(res, orderId) {
      var _this14 = this;
      this.isClick = true;
      var paySign = (res === null || res === void 0 ? void 0 : res.paySign) || '';
      // 如果获取失败 就直接跳转到订单待支付页面
      if (!paySign) {
        // 跳转待支付页面
        this.goTo('/pagesA/mine/myOrder', false, true);
        return;
      }
      var type = ['GZPT', 'PTPT'].includes(this.feeType) ? 1 : 2; //1 拼团 2 普通
      // 成功 调起微信支付
      wx.requestPayment({
        timeStamp: res.timeStamp,
        nonceStr: res.nonceStr,
        package: res.packageValue,
        signType: res.signType,
        paySign: res.paySign,
        success: function success() {
          _this14.goTo("/pagesA/shop/paySuccess?type=".concat(type, "&orderId=").concat(orderId, "&oderTypeId=").concat(orderId), false, true);
        },
        fail: function fail() {
          var _this14$groupData;
          if ((_this14$groupData = _this14.groupData) !== null && _this14$groupData !== void 0 && _this14$groupData.type) {
            _this14.goTo('/pagesB/myCollage/index', false, true);
          } else {
            _this14.goTo('/pagesA/mine/myOrder', false, true);
          }
        }
      });
    },
    // 修改商品数量
    edit: function edit(_ref) {
      var _this15 = this;
      var value = _ref.value,
        index = _ref.index;
      this.$u.debounce(function () {
        _this15.goods.forEach(function (item) {
          if (item.id == index) {
            item.goodsAmount = value;
          }
        });
        // this.goods[index].goodsAmount = value
        _this15.useCoupon();
      }, 500);
    },
    //  订单算费
    calcuOrder: function calcuOrder() {
      var _this16 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var _this16$selectArea, _this16$selectArea2, _this16$getDefaultAdd, _this16$$globleData$C, _this16$$globleData$P, liftType, addressId, _this16$selectArea3, _this16$selectArea4, _this16$groupData, obj, _param, _yield$_this16$$http$, _yield$_this16$$http$2, _res, _this16$selectArea5, _this16$selectArea6, _obj, orderGoods, _res2, goodsOrderList, param, res, flagLength;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                liftType = 0; //0 是快递发货 1 到店自取
                if (((_this16$selectArea = _this16.selectArea) === null || _this16$selectArea === void 0 ? void 0 : _this16$selectArea.value) == '2') {
                  liftType = 1;
                }
                if (((_this16$selectArea2 = _this16.selectArea) === null || _this16$selectArea2 === void 0 ? void 0 : _this16$selectArea2.value) == '3') {
                  liftType = 2;
                }
                addressId = ((_this16$getDefaultAdd = _this16.getDefaultAddress) === null || _this16$getDefaultAdd === void 0 ? void 0 : _this16$getDefaultAdd.id) || '';
                if (!(_this16.feeType == 'GZPT')) {
                  _context7.next = 18;
                  break;
                }
                obj = _this16.goods[0]; // 1.自提 2 物流 3 定点自提
                liftType = ((_this16$selectArea3 = _this16.selectArea) === null || _this16$selectArea3 === void 0 ? void 0 : _this16$selectArea3.value) == '1' ? 2 : ((_this16$selectArea4 = _this16.selectArea) === null || _this16$selectArea4 === void 0 ? void 0 : _this16$selectArea4.value) == '2' ? 1 : 3;
                _param = {
                  goodsId: obj.goodsId,
                  skuId: obj.goodsSpecIds,
                  provinceCode: addressId,
                  activityId: (_this16$groupData = _this16.groupData) === null || _this16$groupData === void 0 ? void 0 : _this16$groupData.groupId,
                  liftType: liftType
                };
                _context7.next = 11;
                return _this16.$http.getRulePrice(_param);
              case 11:
                _yield$_this16$$http$ = _context7.sent;
                _yield$_this16$$http$2 = _yield$_this16$$http$.dataInfo;
                _res = _yield$_this16$$http$2 === void 0 ? {} : _yield$_this16$$http$2;
                _res.frightPrice = _res.frieghtPrice;
                _this16.realPrice = _res;
                _this16.loading = false;
                return _context7.abrupt("return");
              case 18:
                if (!(_this16.feeType == 'PTPT')) {
                  _context7.next = 28;
                  break;
                }
                liftType = ((_this16$selectArea5 = _this16.selectArea) === null || _this16$selectArea5 === void 0 ? void 0 : _this16$selectArea5.value) == '1' ? 2 : ((_this16$selectArea6 = _this16.selectArea) === null || _this16$selectArea6 === void 0 ? void 0 : _this16$selectArea6.value) == '2' ? 1 : 3;
                _obj = _this16.goods[0];
                orderGoods = {
                  goodsId: _obj.goodsId,
                  skuId: _obj.goodsSpecIds,
                  goodsNum: _obj.goodsAmount
                };
                _context7.next = 24;
                return _this16.$http.calcuOrder({
                  couponId: _this16.couponId,
                  liftType: liftType,
                  deliveryAddressId: addressId,
                  orderGoods: orderGoods,
                  groupActivityId: _this16.groupData.groupId
                });
              case 24:
                _res2 = _context7.sent;
                _this16.realPrice = _res2.dataInfo;
                _this16.loading = false;
                return _context7.abrupt("return");
              case 28:
                goodsOrderList = _this16.goods.map(function (item) {
                  return {
                    goodsId: item.goodsId,
                    skuId: item.goodsSpecIds,
                    goodsNum: item.goodsAmount,
                    activityType: item.activityType ? item.activityType : '',
                    activityId: item.activityId
                  };
                });
                param = {
                  couponId: _this16.couponId,
                  liftType: liftType,
                  deliveryAddressId: addressId,
                  goodsOrderList: goodsOrderList,
                  isIntegral: _this16.isIntegral,
                  enableCar: true,
                  buyerType: getApp().globalData.freshShopId.includes(_this16.$globleData.shopId) ? _this16.$globleData.buyType : "",
                  //1.食堂 2.个人
                  canteenName: (_this16$$globleData$C = _this16.$globleData.CanteenName) !== null && _this16$$globleData$C !== void 0 ? _this16$$globleData$C : '',
                  canteenBuyerName: (_this16$$globleData$P = _this16.$globleData.PurchaserName) !== null && _this16$$globleData$P !== void 0 ? _this16$$globleData$P : ''
                };
                console.log('param: ', param);
                _context7.next = 33;
                return _this16.$http.carOrderPrice(param);
              case 33:
                res = _context7.sent;
                if (res.returnCode == 1000) {
                  _this16.realPrice = res.dataInfo;
                  _this16.loading = false;
                  flagLength = 0;
                  _this16.groupGoods.forEach(function (someItem) {
                    someItem.info.forEach(function (item) {
                      var _this16$realPrice, _this16$realPrice2;
                      _this16.$set(item, 'isAddressShow', false);
                      if ((_this16$realPrice = _this16.realPrice) !== null && _this16$realPrice !== void 0 && _this16$realPrice.goodIds && ((_this16$realPrice2 = _this16.realPrice) === null || _this16$realPrice2 === void 0 ? void 0 : _this16$realPrice2.goodIds.length) > 0) {
                        _this16.realPrice.goodIds.forEach(function (val) {
                          if (item.goodsId == val) {
                            _this16.$set(item, 'isAddressShow', true);
                            flagLength++;
                          }
                        });
                      }
                    });
                  });
                  if (flagLength > 0) {
                    _this16.isAddressClick = true;
                  } else {
                    _this16.isAddressClick = false;
                  }
                } else if (res.message == '不满足优惠券满减金额') {
                  uni.showModal({
                    title: '温馨提示',
                    content: res.message,
                    showCancel: false,
                    success: function success() {
                      console.log('庆典');
                      console.log(_this16.couponList);
                      _this16.couponList[0].isActive = false;
                      _this16.couponId = '';
                    }
                  });
                } else {
                  uni.showModal({
                    title: '温馨提示',
                    content: res.message,
                    showCancel: false
                  });
                }
                _context7.next = 41;
                break;
              case 37:
                _context7.prev = 37;
                _context7.t0 = _context7["catch"](0);
                _this16.loading = false;
                _this16.realPrice = {};
              case 41:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 37]]);
      }))();
    },
    //订阅消息
    requestSubscribeMessage: function requestSubscribeMessage() {
      var that = this;
      uni.requestSubscribeMessage({
        tmplIds: ['TqOEqGR5PsPv8O4regKKvLFD8sUudpgZnkGmQwl0LiQ', 'k-M34p7Ag0yADspXPoQbgjWE-DAhIo8YaQNv52iHPqA'],
        complete: function complete() {
          that.createOrder();
        }
      });
    },
    //创建订单
    createOrder: function createOrder() {
      var _this17 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this17$selectArea, _this17$selectArea2, _this17$getDefaultAdd;
        var liftType, feeType, isGroup, addressId, _res3, res, _this17$cardData, _this17$selectArea3, param, goodsObj, _param2, type, orderId, _res4, _res4$dataInfo, _this17$groupData, goodsId, goodsName, needPay, _type;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                liftType = 0; //0 是快递发货 1 到店自取 2 定点自提
                if (((_this17$selectArea = _this17.selectArea) === null || _this17$selectArea === void 0 ? void 0 : _this17$selectArea.value) == '2') {
                  liftType = 1;
                }
                if (((_this17$selectArea2 = _this17.selectArea) === null || _this17$selectArea2 === void 0 ? void 0 : _this17$selectArea2.value) == '3') {
                  liftType = 2;
                }
                console.log('this.selectArea: ', _this17.selectArea);
                feeType = _this17.feeType;
                isGroup = ['GZPT', 'PTPT'].includes(feeType);
                addressId = ((_this17$getDefaultAdd = _this17.getDefaultAddress) === null || _this17$getDefaultAdd === void 0 ? void 0 : _this17$getDefaultAdd.id) || '';
                if (!(!addressId || _this17.isAddressClick)) {
                  _context8.next = 9;
                  break;
                }
                return _context8.abrupt("return");
              case 9:
                // 商品抵扣积分大于商品就不让创建订单
                // if (this.isIntegral==0 && this.goodsPrice<this.realPrice.integralNum) {
                //   this.$toast('商品金额不能小于积分抵扣的金额')
                //   return
                //   }
                _this17.isClick = false;
                _context8.prev = 10;
                res = {}; // 赠品下单
                if (!'ZP'.includes(feeType)) {
                  _context8.next = 26;
                  break;
                }
                if (!((_this17$cardData = _this17.cardData) !== null && _this17$cardData !== void 0 && _this17$cardData.id)) {
                  _context8.next = 19;
                  break;
                }
                _context8.next = 16;
                return _this17.zeroOrder(liftType, addressId);
              case 16:
                res = _context8.sent;
                _context8.next = 24;
                break;
              case 19:
                liftType = ((_this17$selectArea3 = _this17.selectArea) === null || _this17$selectArea3 === void 0 ? void 0 : _this17$selectArea3.value) == '2' ? 2 : 1;
                param = {
                  lotteryRecordId: _this17.activeObj.lotteryRecordId,
                  liftType: liftType,
                  deliveryAddressId: addressId,
                  orderFromType: _this17.orderFromType
                };
                _context8.next = 23;
                return _this17.$http.receiveGive(param);
              case 23:
                res = _context8.sent;
              case 24:
                _context8.next = 46;
                break;
              case 26:
                if (!isGroup) {
                  _context8.next = 32;
                  break;
                }
                _context8.next = 29;
                return _this17.groupOrderDispose(addressId);
              case 29:
                res = _context8.sent;
                _context8.next = 46;
                break;
              case 32:
                if (!'EZ'.includes(feeType)) {
                  _context8.next = 43;
                  break;
                }
                goodsObj = _this17.goods[0] || {};
                _param2 = {
                  activityId: goodsObj.activeObj.activeId,
                  liftType: liftType,
                  deliveryAddressId: addressId,
                  goodsSpecId: goodsObj.goodsSpecIds,
                  goodsId: goodsObj.goodsId,
                  userName: liftType == 2 ? _this17.fixedDelivery.nickName : '',
                  userPhone: liftType == 2 ? _this17.fixedDelivery.phoneNumber : '',
                  ticketId: '',
                  goodsName: goodsObj.goodsName,
                  goodsPicture: goodsObj.goodsImg,
                  orderFromType: _this17.orderFromType
                };
                _context8.next = 37;
                return _this17.$http.exchangeCreateOrder(_param2);
              case 37:
                res = _context8.sent;
                type = isGroup ? 1 : 2; //1 拼团 2 普通
                _this17.goTo("/pagesA/shop/paySuccess?type=".concat(type, "&oderTypeId=").concat(res.dataInfo.orderId, "&feeType=").concat(feeType), false, true);
                return _context8.abrupt("return");
              case 43:
                _context8.next = 45;
                return _this17.orderDispose(liftType, addressId);
              case 45:
                res = _context8.sent;
              case 46:
                // 创建成功 调用微信支付接口
                orderId = ((_res3 = res) === null || _res3 === void 0 ? void 0 : _res3.dataInfo) || '';
                if (!orderId) {
                  _context8.next = 64;
                  break;
                }
                _this17.clearCartList();
                goodsId = _this17.isCart ? '' : _this17.goods[0].goodsId;
                goodsName = _this17.isCart ? '' : _this17.goods[0].goodsName; // 下单埋点
                try {
                  _this17.$eventPlugInCode(_objectSpread(_objectSpread({}, _this17.codeParam), {}, {
                    goodsId: goodsId,
                    goodsName: goodsName,
                    title: '商品详情',
                    orderId: orderId.orderId || orderId || '',
                    type: '3'
                  }));
                } catch (error) {
                  console.log(error);
                }
                needPay = (_res4 = res) === null || _res4 === void 0 ? void 0 : (_res4$dataInfo = _res4.dataInfo) === null || _res4$dataInfo === void 0 ? void 0 : _res4$dataInfo.needPay;
                _type = isGroup ? 1 : 2; //1 拼团 2 普通
                if (!(needPay == false)) {
                  _context8.next = 58;
                  break;
                }
                _this17.$eventPlugInCode(_objectSpread(_objectSpread({}, _this17.codeParam), {}, {
                  title: '商品详情',
                  goodsId: goodsId,
                  goodsName: goodsName,
                  orderId: (orderId === null || orderId === void 0 ? void 0 : orderId.orderId) || orderId || '',
                  type: _this17.isCart ? '4' : '6',
                  extendField: 0
                }));
                _this17.goTo("/pagesA/shop/paySuccess?type=".concat(_type, "&oderTypeId=").concat(orderId.orderId || orderId, "&feeType=").concat(feeType), false, true);
                return _context8.abrupt("return");
              case 58:
                if (!((_this17$groupData = _this17.groupData) !== null && _this17$groupData !== void 0 && _this17$groupData.type)) {
                  _context8.next = 62;
                  break;
                }
                _context8.next = 61;
                return _this17.payGroup(orderId);
              case 61:
                return _context8.abrupt("return");
              case 62:
                _this17.goTo("/pagesA/order/waitPayment?groupData=".concat(JSON.stringify(_this17.groupData), "&cardData=").concat(JSON.stringify(_this17.cardData), "&orderId=").concat(orderId.orderId || orderId, "&isCart=").concat(_this17.isCart ? 1 : 0), false, true);
                return _context8.abrupt("return");
              case 64:
                _this17.isClick = true;
                _this17.$toast('创建订单失败');
                _context8.next = 71;
                break;
              case 68:
                _context8.prev = 68;
                _context8.t0 = _context8["catch"](10);
                _this17.isClick = true;
              case 71:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[10, 68]]);
      }))();
    },
    // 零元创建订单
    zeroOrder: function zeroOrder(liftType, addressId) {
      var _this$cardData, _this$cardData2;
      var param = {
        cardId: this.cardData.id,
        liftType: liftType == 0 ? 1 : 2,
        deliveryAddressId: addressId,
        sellerNote: '',
        cardCouponGoodsIdList: [this.cardCouponGoodsIdList.id],
        orderId: (_this$cardData = this.cardData) !== null && _this$cardData !== void 0 && _this$cardData.zeroOrderId ? (_this$cardData2 = this.cardData) === null || _this$cardData2 === void 0 ? void 0 : _this$cardData2.zeroOrderId : '',
        orderFromType: this.orderFromType
      };
      if (this.cardData.zeroType == '2') {
        return this.$http.zeroCreatedOrder(param);
      }
      if (this.cardData.zeroType == '1') {
        return this.$http.zeroMeberCreatedOrder(param);
      }
    },
    // 普通订单处理
    orderDispose: function orderDispose(liftType, addressId) {
      var _this$shareParam, _this$$globleData$Can, _this$$globleData$Pur;
      // 普通的订单
      var goodsOrderList = this.goods.map(function (item) {
        return {
          goodsId: item.goodsId,
          skuId: item.goodsSpecIds,
          goodsNum: item.goodsAmount,
          buyType: item.buyType || 1,
          activityType: item.activityType,
          activityId: (item === null || item === void 0 ? void 0 : item.activityId) || '',
          channelCode: (item === null || item === void 0 ? void 0 : item.channelCode) || '',
          channelFlag: (item === null || item === void 0 ? void 0 : item.channelFlag) || '',
          channelName: (item === null || item === void 0 ? void 0 : item.channelName) || ''
        };
      });
      // let orderFromType = 1
      var orderType = '';
      var roomId = '';
      var shareManId = '';
      var vxNum = '';
      // 代表直播间
      if ((_this$shareParam = this.shareParam) !== null && _this$shareParam !== void 0 && _this$shareParam.roomId) {
        var _this$shareParam2, _this$shareParam3, _this$shareParam4;
        // orderFromType = 1
        roomId = this.shareParam.roomId;
        var obj = this.$globleData.userData;
        // 主播分享
        if (!((_this$shareParam2 = this.shareParam) !== null && _this$shareParam2 !== void 0 && _this$shareParam2.userId)) {
          orderType = 'STUDIO_ORDER';
          vxNum = 'weChart';
        }
        // 直播间下单
        else if (!((_this$shareParam3 = this.shareParam) !== null && _this$shareParam3 !== void 0 && _this$shareParam3.userId) || ((_this$shareParam4 = this.shareParam) === null || _this$shareParam4 === void 0 ? void 0 : _this$shareParam4.userId) == (obj === null || obj === void 0 ? void 0 : obj.id)) {
          orderType = 'STUDIO_ORDER';
        }
        // 分享下单
        else {
          shareManId = this.shareParam.userId;
        }
      } else {
        var _this$shareParam5;
        // 分销人分销
        shareManId = ((_this$shareParam5 = this.shareParam) === null || _this$shareParam5 === void 0 ? void 0 : _this$shareParam5.userId) || '';
      }
      var disCoutPoint = this.isIntegral == 0 ? this.realPrice.integralNum || 0 : 0;
      var param = {
        deliveryAddressId: addressId,
        orderFromType: this.orderFromType,
        couponId: this.couponId,
        liftType: liftType,
        sellerNote: '',
        goodsOrderList: goodsOrderList,
        integralNum: disCoutPoint,
        shareManId: shareManId,
        orderType: orderType,
        roomId: roomId,
        vxNum: vxNum,
        userName: this.fixedDelivery.nickName,
        userPhone: this.fixedDelivery.phoneNumber,
        buyerType: getApp().globalData.freshShopId.includes(this.$globleData.shopId) ? this.$globleData.buyType : "",
        //1.食堂 2.个人
        canteenName: (_this$$globleData$Can = this.$globleData.CanteenName) !== null && _this$$globleData$Can !== void 0 ? _this$$globleData$Can : '',
        canteenBuyerName: (_this$$globleData$Pur = this.$globleData.PurchaserName) !== null && _this$$globleData$Pur !== void 0 ? _this$$globleData$Pur : ''
      };
      if (this.invoiceInfo) {
        param.orderInvoiceRequest = this.invoiceInfo;
      }
      return this.$http.cardCreatOrder(param);
    },
    // 拼团商品 订单创建处理
    groupOrderDispose: function groupOrderDispose(addressId) {
      var _this18 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this18$selectArea;
        var liftType, obj, orderGoods, param, id, _param3;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                liftType = ((_this18$selectArea = _this18.selectArea) === null || _this18$selectArea === void 0 ? void 0 : _this18$selectArea.value) == '2' ? 1 : 2;
                obj = _this18.goods[0];
                orderGoods = {
                  goodsId: obj.goodsId,
                  skuId: obj.goodsSpecIds,
                  goodsNum: obj.goodsAmount
                };
                if (_this18.groupData.isJoin) {
                  _context9.next = 8;
                  break;
                }
                param = {
                  deliveryAddressId: addressId,
                  couponId: _this18.couponId,
                  liftType: liftType,
                  orderGoods: orderGoods,
                  groupActivityId: _this18.groupData.groupId,
                  sellerNote: '',
                  orderFromType: _this18.orderFromType
                };
                return _context9.abrupt("return", _this18.$http.groupCreate(param));
              case 8:
                id = _this18.$store.state.joinGroupId;
                if (!id) {
                  _this18.$toast('不存在拼团');
                }
                _param3 = {
                  deliveryAddressId: addressId,
                  couponId: _this18.couponId,
                  liftType: liftType,
                  orderGoods: orderGoods,
                  groupId: id,
                  sellerNote: '',
                  orderFromType: _this18.orderFromType
                };
                return _context9.abrupt("return", _this18.$http.groupJoin(_param3));
              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    // 打开优惠券
    useCoupons: function useCoupons() {
      if (this.couponCount == 0) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    // 切换优惠券
    changeCoupon: function changeCoupon(type) {
      if (type == '1') {
        this.isUseCoupon = true;
      } else {
        this.isUseCoupon = false;
      }
      this.couponList = [];
      this.useCoupon();
    },
    // 选择优惠券确定
    confirm: function confirm() {
      this.show = false;
      // this.calcuOrder()
    },
    // 优惠券选项改变 触发
    checkboxGroupEvent: function checkboxGroupEvent(list) {},
    // 选中某个单选框时，由radio时触发
    radioChange: function radioChange(e, index) {
      if (e.isDisabled) return;
      this.couponList.forEach(function (item, key) {
        if (index == key) {
          if (item.isActive) {
            item.isActive = false;
          } else {
            item.isActive = true;
          }
        } else {
          item.isActive = false;
        }
      });
      this.couponList = (0, _toConsumableArray2.default)(this.couponList);
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 237:
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue?vue&type=style&index=0&id=601aa604&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_style_index_0_id_601aa604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderCenter.vue?vue&type=style&index=0&id=601aa604&lang=scss&scoped=true& */ 238);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_style_index_0_id_601aa604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_style_index_0_id_601aa604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_style_index_0_id_601aa604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_style_index_0_id_601aa604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderCenter_vue_vue_type_style_index_0_id_601aa604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 238:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue?vue&type=style&index=0&id=601aa604&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: uview-ui/theme.scss.\n        on line 1 of ../../../../../../Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/uni.scss\n        from line 51 of /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pagesA/order/orderCenter.vue\n>> @import 'uview-ui/theme.scss';\r\n   ^\n\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/index.js:75:7)\n    at Object.done [as callback] (/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/neo-async/async.js:8069:18)\n    at /Applications/HBuilderX.app/Contents/HBuilderX/plugins/compile-node-sass/node_modules/node-sass-china/lib/index.js:294:32");

/***/ })

},[[231,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesA/order/orderCenter.js.map