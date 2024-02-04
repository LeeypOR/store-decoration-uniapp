(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 106:
/*!*******************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pages/mine/column.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnData = void 0;
var columnData = [{
  toolCode: 'ZXFA',
  name: '装修方案',
  path: '/pages/scheme/index',
  highlightImg: '../../static/image/mine/icon_middle_modalbox_myplan_fill@3x.png',
  lineImg: '../../static/image/mine/icon_middle_modalbox_myplan_line@3x.png'
}, {
  toolCode: 'QB',
  name: '分销员中心',
  path: '/pagesB/distribution/index',
  highlightImg: '../../static/image/mine/icon_middle_modalbox_fenxiang_fill@3x.png',
  lineImg: '../../static/image/mine/icon_middle_modalbox_fenxiang_line@3x.png'
}, {
  toolCode: 'SHDZ',
  name: '收货地址',
  path: '/pagesA/shop/manageAddress',
  highlightImg: '../../static/image/mine/icon_middle_modalbox_address_fill@3x.png',
  lineImg: '../../static/image/mine/icon_middle_modalbox_address_line@3x.png'
}, {
  toolCode: 'YHQ',
  name: '优惠券',
  path: '/pagesA/mine/myCoupon',
  highlightImg: '../../static/image/mine/icon_middle_modalbox_coupon_fill@3x.png',
  lineImg: '../../static/image/mine/icon_middle_modalbox_coupon_line@3x.png'
}, {
  toolCode: 'SPSC',
  name: '商品收藏',
  path: '/pagesA/mine/myFavorite',
  highlightImg: '../../static/image/mine/icon_middle_modalbox_favorite_fill@3x.png',
  lineImg: '../../static/image/mine/icon_middle_modalbox_favorite_line@3x.png'
}, {
  toolCode: 'WDPT',
  name: '我的拼团',
  path: '/pagesB/myCollage/index',
  highlightImg: '../../static/image/mine/icon_middle_modalbox_pintuan_fill@3x.png',
  lineImg: '../../static/image/mine/icon_middle_modalbox_pintuan_line@3x.png'
}, {
  toolCode: 'CJZP',
  name: '我的赠品',
  path: '/pagesA/mine/myGift',
  highlightImg: '../../static/image/mine/zp_fill.png',
  lineImg: '../../static/image/mine/zp_line.png'
}, {
  toolCode: 'DHZQ',
  name: '兑换专区',
  path: '/pagesD/redeemCoupons/redeemCoupons',
  highlightImg: '../../static/image/mine/icon_dhzq_fill.png',
  lineImg: '../../static/image/mine/icon_dhzq_line.png'
}, {
  toolCode: 'FPGL',
  name: '发票管理',
  path: '/pagesD/invoice/invoiceManage',
  highlightImg: '../../static/image/mine/icon_fpgl_fill.png',
  lineImg: '../../static/image/mine/icon_fpgl_line.png'
}, {
  toolCode: 'LXKF',
  name: '联系客服',
  highlightImg: '../../static/image/mine/service_full.png',
  lineImg: '../../static/image/mine/service_line.png'
}];
exports.columnData = columnData;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1193:
/*!*************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/data.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupStatusList = exports.detailGroupList = exports.comOrderStatus = void 0;
var comOrderStatus = [{
  orderType: 'ORDER_UNPAID',
  //待付款
  list: [{
    name: '取消订单',
    type: 'close'
  }, {
    name: '去支付',
    type: 'pay'
  }]
}, {
  orderType: 'ORDER_UN_ISSUE',
  //待发货
  list: [{
    name: '退款',
    type: 'refund'
  }, {
    name: '查看开票历史',
    type: 'invoice-history'
  }]
}, {
  orderType: 'ORDER_LEFT_WAIT',
  //待自提
  list: [{
    name: '退款',
    type: 'refund'
  }, {
    name: '查看发票历史',
    type: 'invoice-history'
  }]
}, {
  orderType: 'ORDER_CANCEL',
  list: [{
    name: '删除订单',
    type: 'delete'
  }, {
    name: '再次购买',
    type: 'but-again'
  }]
}, {
  orderType: 'ORDER_UN_RECEIVED',
  //待收貨
  list: [{
    name: '查看物流',
    type: 'check-logistics'
  }, {
    name: '确认收货',
    type: 'confirm-received'
  }, {
    name: '加入购物车',
    type: 'add-cart'
  }, {
    name: '查看发票历史',
    type: 'invoice-history'
  }]
}, {
  orderType: 'ORDER_UN_EVALUATE',
  //订单待评价
  list: [{
    name: '加入购物车',
    type: 'add-cart'
  }, {
    name: '评价',
    type: 'evaluate'
  }],
  payList: [{
    name: '加入购物车',
    type: 'add-cart'
  }, {
    name: '评价',
    type: 'evaluate'
  }, {
    name: '申请开票',
    type: 'to-invoice'
  }],
  srotList: [{
    name: '加入购物车',
    type: 'add-cart'
  }, {
    name: '评价',
    type: 'evaluate'
  }, {
    name: '查看开票历史',
    type: 'invoice-history'
  }]
}, {
  orderType: 'ORDER_FINISH',
  //订单已完成
  list: [],
  payList: [{
    name: '申请开票',
    type: 'to-invoice'
  }],
  srotList: [{
    name: '查看开票历史',
    type: 'invoice-history'
  }]
}];
exports.comOrderStatus = comOrderStatus;
var groupStatusList = [{
  orderType: 'ORDER_UNPAID',
  //待付款
  list: [{
    name: '取消订单',
    type: 'close'
  }, {
    name: '查看拼团详情',
    type: 'detaile'
  }, {
    name: '去支付',
    type: 'pay'
  }]
}, {
  orderType: 'ORDER_CANCEL',
  list: [{
    name: '删除订单',
    type: 'delete'
  }, {
    name: '查看拼团详情',
    type: 'detaile'
  }]
}, {
  orderType: 'GROUP_RUNNING',
  //拼团中
  list: [{
    name: '查看拼团详情',
    type: 'detaile'
  }]
}, {
  orderType: 'GROUP_SUCCESS',
  //拼团成功
  list: [{
    name: '查看拼团详情',
    type: 'detaile'
  }]
}, {
  orderType: 'GROUP_FAIL',
  //拼团失败
  list: [{
    name: '删除订单',
    type: 'delete'
  }, {
    name: '查看拼团详情',
    type: 'detaile'
  }]
}];
exports.groupStatusList = groupStatusList;
var detailGroupList = [{
  orderType: 'GROUP_RUNNING',
  list: [{
    name: '再次参团',
    type: 'collage-again'
  }
  // {
  // 	name: '邀请好友',
  // 	type: 'invite-friends'
  // }
  ]
}, {
  orderType: 'GROUP_SUCCESS',
  list: [{
    name: '再次拼团',
    type: 'collage-again'
  }, {
    name: '付尾款',
    type: 'pay-endPay'
  }],
  filterList: [{
    name: '再次拼团',
    type: 'collage-again'
  }]
}, {
  orderType: 'ORDER_CANCEL',
  list: [{
    name: '删除订单',
    type: 'delete'
  }, {
    name: '再次拼团',
    type: 'collage-again'
  }]
}, {
  orderType: 'GROUP_FAIL',
  list: [{
    name: '删除订单',
    type: 'delete'
  }, {
    name: '再次拼团',
    type: 'collage-again'
  }]
}, {
  orderType: 'ORDER_UNPAID',
  list: [{
    name: '取消订单',
    type: 'close'
  }, {
    name: '去支付',
    type: 'pay'
  }]
}];
exports.detailGroupList = detailGroupList;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1398:
/*!********************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/components/painter_uni/lib/pen.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var QR = __webpack_require__(/*! ./qrcode.js */ 1399);
var Painter = /*#__PURE__*/function () {
  function Painter(ctx, data, posterData) {
    (0, _classCallCheck2.default)(this, Painter);
    //posterData是的做划线价格的用的
    this.ctx = ctx;
    this.data = data;
    this.posterData = posterData;
  }
  (0, _createClass2.default)(Painter, [{
    key: "paint",
    value: function paint(callback) {
      this.style = {
        width: this.data.width.toPx(),
        height: this.data.height.toPx()
      };
      this._background();
      if (JSON.stringify(this.posterData) != '{}' && this.posterData) {
        var _this$posterData;
        var priceH = this._fillAbsText(this.posterData.salesPrice);
        if ((_this$posterData = this.posterData) !== null && _this$posterData !== void 0 && _this$posterData.markPrice) {
          var screenK = 750 / getApp().systemInfo.windowWidth;
          this.posterData.markPrice.css.left = this.posterData.salesPrice.css.left.toPx() * screenK + priceH.measuredWith * screenK + this.posterData.markPrice.css.ml.toPx() * screenK + 'rpx';
          this._fillAbsText(this.posterData.markPrice);
        }
      }
      var _iterator = _createForOfIteratorHelper(this.data.views),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var view = _step.value;
          this._drawAbsolute(view);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.ctx.draw(false, function () {
        callback();
      });
    }
  }, {
    key: "_background",
    value: function _background() {
      this.ctx.save();
      var _this$style = this.style,
        width = _this$style.width,
        height = _this$style.height;
      var bg = this.data.background;
      this.ctx.translate(width / 2, height / 2);
      this._doClip(this.data.borderRadius, width, height);
      if (!bg) {
        // 如果未设置背景，则默认使用白色
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      } else if (bg.startsWith('#') || bg.startsWith('rgba') || bg.toLowerCase() === 'transparent') {
        // 背景填充颜色
        this.ctx.fillStyle = bg;
        this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      } else {
        // 背景填充图片
        this.ctx.drawImage(bg, -(width / 2), -(height / 2), width, height);
      }
      this.ctx.restore();
    }
  }, {
    key: "_drawAbsolute",
    value: function _drawAbsolute(view) {
      // 证明 css 为数组形式，需要合并
      if (view.css && view.css.length) {
        /* eslint-disable no-param-reassign */
        view.css = Object.assign.apply(Object, (0, _toConsumableArray2.default)(view.css));
      }
      switch (view.type) {
        case 'image':
          this._drawAbsImage(view);
          break;
        case 'text':
          this._fillAbsText(view);
          break;
        case 'rect':
          this._drawAbsRect(view);
          break;
        case 'qrcode':
          this._drawQRCode(view);
          break;
        default:
          break;
      }
    }
    /**
     * 根据 borderRadius 进行裁减
     */
  }, {
    key: "_doClip",
    value: function _doClip(borderRadius, width, height) {
      if (borderRadius && width && height) {
        var r = Math.min(borderRadius.toPx(), width / 2, height / 2); // 防止在某些机型上周边有黑框现象，此处如果直接设置 setFillStyle 为透明，在 Android 机型上会导致被裁减的图片也变为透明， iOS 和 IDE 上不会
        // setGlobalAlpha 在 1.9.90 起支持，低版本下无效，但把 setFillStyle 设为了 white，相对默认的 black 要好点

        this.ctx.globalAlpha = 0;
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(-width / 2 + r, -height / 2 + r, r, 1 * Math.PI, 1.5 * Math.PI);
        this.ctx.lineTo(width / 2 - r, -height / 2);
        this.ctx.arc(width / 2 - r, -height / 2 + r, r, 1.5 * Math.PI, 2 * Math.PI);
        this.ctx.lineTo(width / 2, height / 2 - r);
        this.ctx.arc(width / 2 - r, height / 2 - r, r, 0, 0.5 * Math.PI);
        this.ctx.lineTo(-width / 2 + r, height / 2);
        this.ctx.arc(-width / 2 + r, height / 2 - r, r, 0.5 * Math.PI, 1 * Math.PI);
        this.ctx.closePath();
        this.ctx.fill(); // 在 ios 的 6.6.6 版本上 clip 有 bug，禁掉此类型上的 clip，也就意味着，在此版本微信的 ios 设备下无法使用 border 属性

        if (!(getApp().globalData.systemInfo && getApp().globalData.systemInfo.version <= '6.6.6' && getApp().globalData.systemInfo.platform === 'ios')) {
          this.ctx.clip();
        }
        this.ctx.globalAlpha = 1;
      }
    }
    /**
     * 画边框
     */
  }, {
    key: "_doBorder",
    value: function _doBorder(view, width, height) {
      if (!view.css) {
        return;
      }
      var _view$css = view.css,
        borderRadius = _view$css.borderRadius,
        borderWidth = _view$css.borderWidth,
        borderColor = _view$css.borderColor;
      if (!borderWidth) {
        return;
      }
      this.ctx.save();
      this._preProcess(view, true);
      var r;
      if (borderRadius) {
        r = Math.min(borderRadius.toPx(), width / 2, height / 2);
      } else {
        r = 0;
      }
      var lineWidth = borderWidth.toPx();
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = borderColor || 'black';
      this.ctx.beginPath();
      this.ctx.arc(-width / 2 + r, -height / 2 + r, r + lineWidth / 2, 1 * Math.PI, 1.5 * Math.PI);
      this.ctx.lineTo(width / 2 - r, -height / 2 - lineWidth / 2);
      this.ctx.arc(width / 2 - r, -height / 2 + r, r + lineWidth / 2, 1.5 * Math.PI, 2 * Math.PI);
      this.ctx.lineTo(width / 2 + lineWidth / 2, height / 2 - r);
      this.ctx.arc(width / 2 - r, height / 2 - r, r + lineWidth / 2, 0, 0.5 * Math.PI);
      this.ctx.lineTo(-width / 2 + r, height / 2 + lineWidth / 2);
      this.ctx.arc(-width / 2 + r, height / 2 - r, r + lineWidth / 2, 0.5 * Math.PI, 1 * Math.PI);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.restore();
    }
  }, {
    key: "_preProcess",
    value: function _preProcess(view, notClip) {
      var width;
      var height;
      var extra;
      switch (view.type) {
        case 'text':
          {
            var fontWeight = view.css.fontWeight === 'bold' ? 'bold' : 'normal';
            view.css.fontSize = view.css.fontSize ? view.css.fontSize : '20rpx';
            this.ctx.font = "normal ".concat(fontWeight, " ").concat(view.css.fontSize.toPx(), "px sans-serif"); // this.ctx.setFontSize(view.css.fontSize.toPx());

            var textLength = this.ctx.measureText(view.text).width;
            width = view.css.width ? view.css.width.toPx() : textLength; // 计算行数

            var calLines = Math.ceil(textLength / width);
            var lines = view.css.maxLines < calLines ? view.css.maxLines : calLines;
            var lineHeight = view.css.lineHeight ? view.css.lineHeight.toPx() : view.css.fontSize.toPx();
            height = lineHeight * lines;
            extra = {
              lines: lines,
              lineHeight: lineHeight
            };
            break;
          }
        case 'image':
          {
            // image 如果未设置长宽，则使用图片本身的长宽
            var ratio = getApp().globalData.systemInfo.pixelRatio ? getApp().globalData.systemInfo.pixelRatio : 2;
            width = view.css && view.css.width ? view.css.width.toPx() : Math.round(view.sWidth / ratio);
            height = view.css && view.css.height ? view.css.height.toPx() : Math.round(view.sHeight / ratio);
            break;
          }
        default:
          {
            if (!(view.css.width && view.css.height)) {
              return;
            }
            width = view.css.width.toPx();
            height = view.css.height.toPx();
          }
      }
      var x = view.css && view.css.right ? this.style.width - view.css.right.toPx(true) : view.css && view.css.left ? view.css.left.toPx(true) : 0;
      var y = view.css && view.css.bottom ? this.style.height - height - view.css.bottom.toPx(true) : view.css && view.css.top ? view.css.top.toPx(true) : 0;
      var angle = view.css && view.css.rotate ? this._getAngle(view.css.rotate) : 0; // 当设置了 right 时，默认 align 用 right，反之用 left

      var align = view.css && view.css.align ? view.css.align : view.css && view.css.right ? 'right' : 'left';
      switch (align) {
        case 'center':
          this.ctx.translate(x, y + height / 2);
          break;
        case 'right':
          this.ctx.translate(x - width / 2, y + height / 2);
          break;
        default:
          this.ctx.translate(x + width / 2, y + height / 2);
          break;
      }
      this.ctx.rotate(angle);
      if (!notClip && view.css && view.css.borderRadius) {
        this._doClip(view.css.borderRadius, width, height);
      }
      return {
        width: width,
        height: height,
        x: x,
        y: y,
        extra: extra
      };
    }
  }, {
    key: "_drawQRCode",
    value: function _drawQRCode(view) {
      this.ctx.save();
      var _this$_preProcess = this._preProcess(view),
        width = _this$_preProcess.width,
        height = _this$_preProcess.height;
      QR.api.draw(view.content, this.ctx, -width / 2, -height / 2, width, height, view.css.background, view.css.color);
      this.ctx.restore();
      this._doBorder(view, width, height);
    }
  }, {
    key: "_drawAbsImage",
    value: function _drawAbsImage(view) {
      if (!view.url) {
        return;
      }
      this.ctx.save();
      var _this$_preProcess2 = this._preProcess(view),
        width = _this$_preProcess2.width,
        height = _this$_preProcess2.height; // 获得缩放到图片大小级别的裁减框

      var rWidth;
      var rHeight;
      var startX = 0;
      var startY = 0;
      if (width > height) {
        rHeight = Math.round(view.sWidth / width * height);
        rWidth = view.sWidth;
      } else {
        rWidth = Math.round(view.sHeight / height * width);
        rHeight = view.sHeight;
      }
      if (view.sWidth > rWidth) {
        startX = Math.round((view.sWidth - rWidth) / 2);
      }
      if (view.sHeight > rHeight) {
        startY = Math.round((view.sHeight - rHeight) / 2);
      }
      if (view.css && view.css.mode === 'scaleToFill') {
        this.ctx.drawImage(view.url, -(width / 2), -(height / 2), width, height);
      } else {
        this.ctx.drawImage(view.url, startX, startY, rWidth, rHeight, -(width / 2), -(height / 2), width, height);
      }
      this.ctx.restore();
      this._doBorder(view, width, height);
    }
  }, {
    key: "_fillAbsText",
    value: function _fillAbsText(view) {
      if (!view.text) {
        return;
      }
      this.ctx.save();
      var _this$_preProcess3 = this._preProcess(view),
        width = _this$_preProcess3.width,
        height = _this$_preProcess3.height,
        extra = _this$_preProcess3.extra;
      this.ctx.fillStyle = view.css.color || 'black';
      var lines = extra.lines,
        lineHeight = extra.lineHeight;
      var preLineLength = Math.round(view.text.length / lines);
      var start = 0;
      var alreadyCount = 0;
      var text = view.text.substr(start, alreadyCount);
      var measuredWith = this.ctx.measureText(text).width; // 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
      for (var i = 0; i < lines; ++i) {
        alreadyCount = preLineLength;

        // 如果已经到文本末尾，也不要进行该循环

        while (start + alreadyCount <= view.text.length && (width - measuredWith > view.css.fontSize.toPx() || measuredWith > width)) {
          if (measuredWith < width) {
            text = view.text.substr(start, ++alreadyCount);
          } else {
            if (text.length <= 1) {
              // 如果只有一个字符时，直接跳出循环
              break;
            }
            text = view.text.substr(start, --alreadyCount);
          }
          measuredWith = this.ctx.measureText(text).width;
        }
        start += text.length; // 如果是最后一行了，发现还有未绘制完的内容，则加...

        if (i === lines - 1 && start < view.text.length) {
          while (this.ctx.measureText("".concat(text, "...")).width > width) {
            if (text.length <= 1) {
              // 如果只有一个字符时，直接跳出循环
              break;
            }
            text = text.substring(0, text.length - 1);
          }
          text += '...';
          measuredWith = this.ctx.measureText(text).width;
        }
        this.ctx.setTextAlign(view.css.align ? view.css.align : 'left');
        var x = void 0;
        switch (view.css.align) {
          case 'center':
            x = 0;
            break;
          case 'right':
            x = width / 2;
            break;
          default:
            x = -(width / 2);
            break;
        }
        var y = -(height / 2) + (i === 0 ? view.css.fontSize.toPx() : view.css.fontSize.toPx() + i * lineHeight);
        if (view.css.textStyle === 'stroke') {
          this.ctx.strokeText(text, x, y, measuredWith);
        } else {
          this.ctx.fillText(text, x, y, measuredWith);
        }
        var fontSize = view.css.fontSize.toPx();
        if (view.css.textDecoration) {
          this.ctx.beginPath();
          if (/\bunderline\b/.test(view.css.textDecoration)) {
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + measuredWith, y);
          }
          if (/\boverline\b/.test(view.css.textDecoration)) {
            this.ctx.moveTo(x, y - fontSize);
            this.ctx.lineTo(x + measuredWith, y - fontSize);
          }
          if (/\bline-through\b/.test(view.css.textDecoration)) {
            this.ctx.moveTo(x, y - fontSize / 3);
            this.ctx.lineTo(x + measuredWith, y - fontSize / 3);
          }
          this.ctx.closePath();
          this.ctx.strokeStyle = view.css.color;
          this.ctx.stroke();
        }
      }
      this.ctx.restore();
      this._doBorder(view, width, height);
      return {
        measuredWith: measuredWith
      };
    }
  }, {
    key: "_drawAbsRect",
    value: function _drawAbsRect(view) {
      this.ctx.save();
      var _this$_preProcess4 = this._preProcess(view),
        width = _this$_preProcess4.width,
        height = _this$_preProcess4.height;
      this.ctx.fillStyle = view.css.color;
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      this.ctx.restore();
      this._doBorder(view, width, height);
    }
  }, {
    key: "_getAngle",
    value: function _getAngle(angle) {
      return Number(angle) * Math.PI / 180;
    }
  }]);
  return Painter;
}();
exports.default = Painter;

/***/ }),

/***/ 1399:
/*!***********************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/components/painter_uni/lib/qrcode.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
!function () {
  // alignment pattern
  var adelta = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28]; // version block

  var vpat = [0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69]; // final format bits with mask: level << 3 | mask

  var fmtword = [0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
  //L
  0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
  //M
  0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
  //Q
  0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b //H
  ]; // 4 per version: number of blocks 1,2; data width; ecc width

  var eccblocks = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30]; // Galois field log table

  var glog = [0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b, 0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71, 0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45, 0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6, 0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88, 0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40, 0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d, 0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57, 0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18, 0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e, 0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61, 0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2, 0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6, 0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a, 0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7, 0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf]; // Galios field exponent table

  var gexp = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26, 0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23, 0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1, 0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0, 0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2, 0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce, 0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc, 0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54, 0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73, 0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff, 0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41, 0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6, 0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09, 0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16, 0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00]; // Working buffers:
  // data input and ecc append, image working buffer, fixed part of image, run lengths for badness

  var strinbuf = [],
    eccbuf = [],
    qrframe = [],
    framask = [],
    rlens = []; // Control values - width is based on version, last 4 are from table.

  var version, width, neccblk1, neccblk2, datablkw, eccblkwid;
  var ecclevel = 2; // set bit to indicate cell in qrframe is immutable.  symmetric around diagonal

  function setmask(x, y) {
    var bt;
    if (x > y) {
      bt = x;
      x = y;
      y = bt;
    } // y*y = 1+3+5...

    bt = y;
    bt *= y;
    bt += y;
    bt >>= 1;
    bt += x;
    framask[bt] = 1;
  } // enter alignment pattern - black to qrframe, white to mask (later black frame merged to mask)

  function putalign(x, y) {
    var j;
    qrframe[x + width * y] = 1;
    for (j = -2; j < 2; j++) {
      qrframe[x + j + width * (y - 2)] = 1;
      qrframe[x - 2 + width * (y + j + 1)] = 1;
      qrframe[x + 2 + width * (y + j)] = 1;
      qrframe[x + j + 1 + width * (y + 2)] = 1;
    }
    for (j = 0; j < 2; j++) {
      setmask(x - 1, y + j);
      setmask(x + 1, y - j);
      setmask(x - j, y - 1);
      setmask(x + j, y + 1);
    }
  } //========================================================================
  // Reed Solomon error correction
  // exponentiation mod N

  function modnn(x) {
    while (x >= 255) {
      x -= 255;
      x = (x >> 8) + (x & 255);
    }
    return x;
  }
  var genpoly = []; // Calculate and append ECC data to data block.  Block is in strinbuf, indexes to buffers given.

  function appendrs(data, dlen, ecbuf, eclen) {
    var i, j, fb;
    for (i = 0; i < eclen; i++) {
      strinbuf[ecbuf + i] = 0;
    }
    for (i = 0; i < dlen; i++) {
      fb = glog[strinbuf[data + i] ^ strinbuf[ecbuf]];
      if (fb != 255) /* fb term is non-zero */
        for (j = 1; j < eclen; j++) {
          strinbuf[ecbuf + j - 1] = strinbuf[ecbuf + j] ^ gexp[modnn(fb + genpoly[eclen - j])];
        } else for (j = ecbuf; j < ecbuf + eclen; j++) {
        strinbuf[j] = strinbuf[j + 1];
      }
      strinbuf[ecbuf + eclen - 1] = fb == 255 ? 0 : gexp[modnn(fb + genpoly[0])];
    }
  } //========================================================================
  // Frame data insert following the path rules
  // check mask - since symmetrical use half.

  function ismasked(x, y) {
    var bt;
    if (x > y) {
      bt = x;
      x = y;
      y = bt;
    }
    bt = y;
    bt += y * y;
    bt >>= 1;
    bt += x;
    return framask[bt];
  } //========================================================================
  //  Apply the selected mask out of the 8.

  function applymask(m) {
    var x, y, r3x, r3y;
    switch (m) {
      case 0:
        for (y = 0; y < width; y++) {
          for (x = 0; x < width; x++) {
            if (!(x + y & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 1:
        for (y = 0; y < width; y++) {
          for (x = 0; x < width; x++) {
            if (!(y & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 2:
        for (y = 0; y < width; y++) {
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!r3x && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 3:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = r3y, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!r3x && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 4:
        for (y = 0; y < width; y++) {
          for (r3x = 0, r3y = y >> 1 & 1, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) {
              r3x = 0;
              r3y = !r3y;
            }
            if (!r3y && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 5:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!((x & y & 1) + !(!r3x | !r3y)) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 6:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!((x & y & 1) + (r3x && r3x == r3y) & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 7:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!((r3x && r3x == r3y) + (x + y & 1) & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
    }
    return;
  } // Badness coefficients.

  var N1 = 3,
    N2 = 3,
    N3 = 40,
    N4 = 10; // Using the table of the length of each run, calculate the amount of bad image 
  // - long runs or those that look like finders; called twice, once each for X and Y

  function badruns(length) {
    var i;
    var runsbad = 0;
    for (i = 0; i <= length; i++) {
      if (rlens[i] >= 5) runsbad += N1 + rlens[i] - 5;
    } // BwBBBwB as in finder

    for (i = 3; i < length - 1; i += 2) {
      if (rlens[i - 2] == rlens[i + 2] && rlens[i + 2] == rlens[i - 1] && rlens[i - 1] == rlens[i + 1] && rlens[i - 1] * 3 == rlens[i] // white around the black pattern? Not part of spec
      && (rlens[i - 3] == 0 // beginning
      || i + 3 > length // end
      || rlens[i - 3] * 3 >= rlens[i] * 4 || rlens[i + 3] * 3 >= rlens[i] * 4)) runsbad += N3;
    }
    return runsbad;
  } // Calculate how bad the masked image is - blocks, imbalance, runs, or finders.

  function badcheck() {
    var x, y, h, b, b1;
    var thisbad = 0;
    var bw = 0; // blocks of same color.

    for (y = 0; y < width - 1; y++) {
      for (x = 0; x < width - 1; x++) {
        if (qrframe[x + width * y] && qrframe[x + 1 + width * y] && qrframe[x + width * (y + 1)] && qrframe[x + 1 + width * (y + 1)] ||
        // all black
        !(qrframe[x + width * y] || qrframe[x + 1 + width * y] || qrframe[x + width * (y + 1)] || qrframe[x + 1 + width * (y + 1)]))
          // all white
          thisbad += N2;
      }
    } // X runs

    for (y = 0; y < width; y++) {
      rlens[0] = 0;
      for (h = b = x = 0; x < width; x++) {
        if ((b1 = qrframe[x + width * y]) == b) rlens[h]++;else rlens[++h] = 1;
        b = b1;
        bw += b ? 1 : -1;
      }
      thisbad += badruns(h);
    } // black/white imbalance

    if (bw < 0) bw = -bw;
    var big = bw;
    var count = 0;
    big += big << 2;
    big <<= 1;
    while (big > width * width) {
      big -= width * width, count++;
    }
    thisbad += count * N4; // Y runs

    for (x = 0; x < width; x++) {
      rlens[0] = 0;
      for (h = b = y = 0; y < width; y++) {
        if ((b1 = qrframe[x + width * y]) == b) rlens[h]++;else rlens[++h] = 1;
        b = b1;
      }
      thisbad += badruns(h);
    }
    return thisbad;
  }
  function genframe(instring) {
    var x, y, k, t, v, i, j, m; // find the smallest version that fits the string

    t = instring.length;
    version = 0;
    do {
      version++;
      k = (ecclevel - 1) * 4 + (version - 1) * 16;
      neccblk1 = eccblocks[k++];
      neccblk2 = eccblocks[k++];
      datablkw = eccblocks[k++];
      eccblkwid = eccblocks[k];
      k = datablkw * (neccblk1 + neccblk2) + neccblk2 - 3 + (version <= 9);
      if (t <= k) break;
    } while (version < 40); // FIXME - insure that it fits insted of being truncated

    width = 17 + 4 * version; // allocate, clear and setup data structures

    v = datablkw + (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;
    for (t = 0; t < v; t++) {
      eccbuf[t] = 0;
    }
    strinbuf = instring.slice(0);
    for (t = 0; t < width * width; t++) {
      qrframe[t] = 0;
    }
    for (t = 0; t < (width * (width + 1) + 1) / 2; t++) {
      framask[t] = 0;
    } // insert finders - black to frame, white to mask

    for (t = 0; t < 3; t++) {
      k = 0;
      y = 0;
      if (t == 1) k = width - 7;
      if (t == 2) y = width - 7;
      qrframe[y + 3 + width * (k + 3)] = 1;
      for (x = 0; x < 6; x++) {
        qrframe[y + x + width * k] = 1;
        qrframe[y + width * (k + x + 1)] = 1;
        qrframe[y + 6 + width * (k + x)] = 1;
        qrframe[y + x + 1 + width * (k + 6)] = 1;
      }
      for (x = 1; x < 5; x++) {
        setmask(y + x, k + 1);
        setmask(y + 1, k + x + 1);
        setmask(y + 5, k + x);
        setmask(y + x + 1, k + 5);
      }
      for (x = 2; x < 4; x++) {
        qrframe[y + x + width * (k + 2)] = 1;
        qrframe[y + 2 + width * (k + x + 1)] = 1;
        qrframe[y + 4 + width * (k + x)] = 1;
        qrframe[y + x + 1 + width * (k + 4)] = 1;
      }
    } // alignment blocks

    if (version > 1) {
      t = adelta[version];
      y = width - 7;
      for (;;) {
        x = width - 7;
        while (x > t - 3) {
          putalign(x, y);
          if (x < t) break;
          x -= t;
        }
        if (y <= t + 9) break;
        y -= t;
        putalign(6, y);
        putalign(y, 6);
      }
    } // single black

    qrframe[8 + width * (width - 8)] = 1; // timing gap - mask only

    for (y = 0; y < 7; y++) {
      setmask(7, y);
      setmask(width - 8, y);
      setmask(7, y + width - 7);
    }
    for (x = 0; x < 8; x++) {
      setmask(x, 7);
      setmask(x + width - 8, 7);
      setmask(x, width - 8);
    } // reserve mask-format area

    for (x = 0; x < 9; x++) {
      setmask(x, 8);
    }
    for (x = 0; x < 8; x++) {
      setmask(x + width - 8, 8);
      setmask(8, x);
    }
    for (y = 0; y < 7; y++) {
      setmask(8, y + width - 7);
    } // timing row/col

    for (x = 0; x < width - 14; x++) {
      if (x & 1) {
        setmask(8 + x, 6);
        setmask(6, 8 + x);
      } else {
        qrframe[8 + x + width * 6] = 1;
        qrframe[6 + width * (8 + x)] = 1;
      }
    } // version block

    if (version > 6) {
      t = vpat[version - 7];
      k = 17;
      for (x = 0; x < 6; x++) {
        for (y = 0; y < 3; y++, k--) {
          if (1 & (k > 11 ? version >> k - 12 : t >> k)) {
            qrframe[5 - x + width * (2 - y + width - 11)] = 1;
            qrframe[2 - y + width - 11 + width * (5 - x)] = 1;
          } else {
            setmask(5 - x, 2 - y + width - 11);
            setmask(2 - y + width - 11, 5 - x);
          }
        }
      }
    } // sync mask bits - only set above for white spaces, so add in black bits

    for (y = 0; y < width; y++) {
      for (x = 0; x <= y; x++) {
        if (qrframe[x + width * y]) setmask(x, y);
      }
    } // convert string to bitstream
    // 8 bit data to QR-coded 8 bit data (numeric or alphanum, or kanji not supported)

    v = strinbuf.length; // string to array

    for (i = 0; i < v; i++) {
      eccbuf[i] = strinbuf.charCodeAt(i);
    }
    strinbuf = eccbuf.slice(0); // calculate max string length

    x = datablkw * (neccblk1 + neccblk2) + neccblk2;
    if (v >= x - 2) {
      v = x - 2;
      if (version > 9) v--;
    } // shift and repack to insert length prefix

    i = v;
    if (version > 9) {
      strinbuf[i + 2] = 0;
      strinbuf[i + 3] = 0;
      while (i--) {
        t = strinbuf[i];
        strinbuf[i + 3] |= 255 & t << 4;
        strinbuf[i + 2] = t >> 4;
      }
      strinbuf[2] |= 255 & v << 4;
      strinbuf[1] = v >> 4;
      strinbuf[0] = 0x40 | v >> 12;
    } else {
      strinbuf[i + 1] = 0;
      strinbuf[i + 2] = 0;
      while (i--) {
        t = strinbuf[i];
        strinbuf[i + 2] |= 255 & t << 4;
        strinbuf[i + 1] = t >> 4;
      }
      strinbuf[1] |= 255 & v << 4;
      strinbuf[0] = 0x40 | v >> 4;
    } // fill to end with pad pattern

    i = v + 3 - (version < 10);
    while (i < x) {
      strinbuf[i++] = 0xec; // buffer has room    if (i == x)      break;

      strinbuf[i++] = 0x11;
    } // calculate and append ECC
    // calculate generator polynomial

    genpoly[0] = 1;
    for (i = 0; i < eccblkwid; i++) {
      genpoly[i + 1] = 1;
      for (j = i; j > 0; j--) {
        genpoly[j] = genpoly[j] ? genpoly[j - 1] ^ gexp[modnn(glog[genpoly[j]] + i)] : genpoly[j - 1];
      }
      genpoly[0] = gexp[modnn(glog[genpoly[0]] + i)];
    }
    for (i = 0; i <= eccblkwid; i++) {
      genpoly[i] = glog[genpoly[i]];
    } // use logs for genpoly[] to save calc step
    // append ecc to data buffer

    k = x;
    y = 0;
    for (i = 0; i < neccblk1; i++) {
      appendrs(y, datablkw, k, eccblkwid);
      y += datablkw;
      k += eccblkwid;
    }
    for (i = 0; i < neccblk2; i++) {
      appendrs(y, datablkw + 1, k, eccblkwid);
      y += datablkw + 1;
      k += eccblkwid;
    } // interleave blocks

    y = 0;
    for (i = 0; i < datablkw; i++) {
      for (j = 0; j < neccblk1; j++) {
        eccbuf[y++] = strinbuf[i + j * datablkw];
      }
      for (j = 0; j < neccblk2; j++) {
        eccbuf[y++] = strinbuf[neccblk1 * datablkw + i + j * (datablkw + 1)];
      }
    }
    for (j = 0; j < neccblk2; j++) {
      eccbuf[y++] = strinbuf[neccblk1 * datablkw + i + j * (datablkw + 1)];
    }
    for (i = 0; i < eccblkwid; i++) {
      for (j = 0; j < neccblk1 + neccblk2; j++) {
        eccbuf[y++] = strinbuf[x + i + j * eccblkwid];
      }
    }
    strinbuf = eccbuf; // pack bits into frame avoiding masked area.

    x = y = width - 1;
    k = v = 1; // up, minus

    /* inteleaved data and ecc codes */

    m = (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;
    for (i = 0; i < m; i++) {
      t = strinbuf[i];
      for (j = 0; j < 8; j++, t <<= 1) {
        if (0x80 & t) qrframe[x + width * y] = 1;
        do {
          // find next fill position
          if (v) x--;else {
            x++;
            if (k) {
              if (y != 0) y--;else {
                x -= 2;
                k = !k;
                if (x == 6) {
                  x--;
                  y = 9;
                }
              }
            } else {
              if (y != width - 1) y++;else {
                x -= 2;
                k = !k;
                if (x == 6) {
                  x--;
                  y -= 8;
                }
              }
            }
          }
          v = !v;
        } while (ismasked(x, y));
      }
    } // save pre-mask copy of frame

    strinbuf = qrframe.slice(0);
    t = 0; // best

    y = 30000; // demerit
    // for instead of while since in original arduino code
    // if an early mask was "good enough" it wouldn't try for a better one
    // since they get more complex and take longer.

    for (k = 0; k < 8; k++) {
      applymask(k); // returns black-white imbalance

      x = badcheck();
      if (x < y) {
        // current mask better than previous best?
        y = x;
        t = k;
      }
      if (t == 7) break; // don't increment i to a void redoing mask

      qrframe = strinbuf.slice(0); // reset for next pass
    }

    if (t != k)
      // redo best mask - none good enough, last wasn't t
      applymask(t); // add in final mask/ecclevel bytes

    y = fmtword[t + (ecclevel - 1 << 3)]; // low byte

    for (k = 0; k < 8; k++, y >>= 1) {
      if (y & 1) {
        qrframe[width - 1 - k + width * 8] = 1;
        if (k < 6) qrframe[8 + width * k] = 1;else qrframe[8 + width * (k + 1)] = 1;
      }
    } // high byte

    for (k = 0; k < 7; k++, y >>= 1) {
      if (y & 1) {
        qrframe[8 + width * (width - 7 + k)] = 1;
        if (k) qrframe[6 - k + width * 8] = 1;else qrframe[7 + width * 8] = 1;
      }
    }
    return qrframe;
  }
  var _canvas = null;
  var api = {
    get ecclevel() {
      return ecclevel;
    },
    set ecclevel(val) {
      ecclevel = val;
    },
    get size() {
      return _size;
    },
    set size(val) {
      _size = val;
    },
    get canvas() {
      return _canvas;
    },
    set canvas(el) {
      _canvas = el;
    },
    getFrame: function getFrame(string) {
      return genframe(string);
    },
    //这里的utf16to8(str)是对Text中的字符串进行转码，让其支持中文
    utf16to8: function utf16to8(str) {
      var out, i, len, c;
      out = "";
      len = str.length;
      for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x0001 && c <= 0x007F) {
          out += str.charAt(i);
        } else if (c > 0x07FF) {
          out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
          out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
          out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        } else {
          out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
          out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        }
      }
      return out;
    },
    /**
     * 新增$this参数，传入组件的this,兼容在组件中生成
     * @param bg 目前只能设置颜色值
     */
    draw: function draw(str, ctx, startX, startY, cavW, cavH, bg, color, $this, ecc) {
      var that = this;
      ecclevel = ecc || ecclevel;
      if (!ctx) {
        console.warn('No canvas provided to draw QR code in!');
        return;
      }
      var size = Math.min(cavW, cavH);
      str = that.utf16to8(str); //增加中文显示

      var frame = that.getFrame(str);
      var px = size / width;
      if (bg) {
        ctx.setFillStyle(bg);
        ctx.fillRect(startX, startY, cavW, cavW);
      }
      ctx.setFillStyle(color || 'black');
      for (var i = 0; i < width; i++) {
        for (var j = 0; j < width; j++) {
          if (frame[j * width + i]) {
            ctx.fillRect(startX + px * i, startY + px * j, px, px);
          }
        }
      }
    }
  };
  module.exports = {
    api: api
  }; // exports.draw = api;
}();

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1400:
/*!***************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/components/painter_uni/lib/downloader.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * LRU 文件存储，使用该 downloader 可以让下载的文件存储在本地，下次进入小程序后可以直接使用
 * 详细设计文档可查看 https://juejin.im/post/5b42d3ede51d4519277b6ce3
 */
var util = __webpack_require__(/*! ./util.js */ 1401);
var SAVED_FILES_KEY = 'savedFiles';
var KEY_TOTAL_SIZE = 'totalSize';
var KEY_PATH = 'path';
var KEY_TIME = 'time';
var KEY_SIZE = 'size'; // 可存储总共为 6M，目前小程序可允许的最大本地存储为 10M

var MAX_SPACE_IN_B = 6 * 1024 * 1024;
var savedFiles = {};
var Dowloader = /*#__PURE__*/function () {
  function Dowloader() {
    (0, _classCallCheck2.default)(this, Dowloader);
    // app 如果设置了最大存储空间，则使用 app 中的
    if (getApp().globalData.PAINTER_MAX_LRU_SPACE) {
      MAX_SPACE_IN_B = getApp().globalData.PAINTER_MAX_LRU_SPACE;
    }
    wx.getStorage({
      key: SAVED_FILES_KEY,
      success: function success(res) {
        if (res.data) {
          savedFiles = res.data;
        }
      }
    });
  }
  /**
   * 下载文件，会用 lru 方式来缓存文件到本地
   * @param {String} url 文件的 url
   */
  (0, _createClass2.default)(Dowloader, [{
    key: "download",
    value: function download(url) {
      return new Promise(function (resolve, reject) {
        if (!(url && util.isValidUrl(url))) {
          resolve(url);
          return;
        }
        var file = getFile(url);
        if (file) {
          // 检查文件是否正常，不正常需要重新下载
          wx.getSavedFileInfo({
            filePath: file[KEY_PATH],
            success: function success(res) {
              resolve(file[KEY_PATH]);
            },
            fail: function fail(error) {
              console.error("the file is broken, redownload it, ".concat(JSON.stringify(error)));
              downloadFile(url).then(function (path) {
                resolve(path);
              }, function () {
                reject();
              });
            }
          });
        } else {
          downloadFile(url).then(function (path) {
            resolve(path);
          }, function () {
            reject();
          });
        }
      });
    }
  }]);
  return Dowloader;
}();
exports.default = Dowloader;
function downloadFile(url) {
  return new Promise(function (resolve, reject) {
    wx.downloadFile({
      url: url,
      success: function success(res) {
        if (res.statusCode !== 200) {
          console.error("downloadFile ".concat(url, " failed res.statusCode is not 200"));
          reject();
          return;
        }
        var tempFilePath = res.tempFilePath;
        wx.getFileInfo({
          filePath: tempFilePath,
          success: function success(tmpRes) {
            var newFileSize = tmpRes.size;
            doLru(newFileSize).then(function () {
              saveFile(url, newFileSize, tempFilePath).then(function (filePath) {
                resolve(filePath);
              });
            }, function () {
              resolve(tempFilePath);
            });
          },
          fail: function fail(error) {
            // 文件大小信息获取失败，则此文件也不要进行存储
            console.error("getFileInfo ".concat(res.tempFilePath, " failed, ").concat(JSON.stringify(error)));
            resolve(res.tempFilePath);
          }
        });
      },
      fail: function fail(error) {
        console.error("downloadFile failed, ".concat(JSON.stringify(error), " "));
        reject();
      }
    });
  });
}
function saveFile(key, newFileSize, tempFilePath) {
  return new Promise(function (resolve, reject) {
    wx.saveFile({
      tempFilePath: tempFilePath,
      success: function success(fileRes) {
        var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
        savedFiles[key] = {};
        savedFiles[key][KEY_PATH] = fileRes.savedFilePath;
        savedFiles[key][KEY_TIME] = new Date().getTime();
        savedFiles[key][KEY_SIZE] = newFileSize;
        savedFiles['totalSize'] = newFileSize + totalSize;
        wx.setStorage({
          key: SAVED_FILES_KEY,
          data: savedFiles
        });
        resolve(fileRes.savedFilePath);
      },
      fail: function fail(error) {
        console.error("saveFile ".concat(key, " failed, then we delete all files, ").concat(JSON.stringify(error))); // 由于 saveFile 成功后，res.tempFilePath 处的文件会被移除，所以在存储未成功时，我们还是继续使用临时文件

        resolve(tempFilePath); // 如果出现错误，就直接情况本地的所有文件，因为你不知道是不是因为哪次lru的某个文件未删除成功

        reset();
      }
    });
  });
}
/**
 * 清空所有下载相关内容
 */

function reset() {
  wx.removeStorage({
    key: SAVED_FILES_KEY,
    success: function success() {
      wx.getSavedFileList({
        success: function success(listRes) {
          removeFiles(listRes.fileList);
        },
        fail: function fail(getError) {
          console.error("getSavedFileList failed, ".concat(JSON.stringify(getError)));
        }
      });
    }
  });
}
function doLru(size) {
  return new Promise(function (resolve, reject) {
    var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
    if (size + totalSize <= MAX_SPACE_IN_B) {
      resolve();
      return;
    } // 如果加上新文件后大小超过最大限制，则进行 lru

    var pathsShouldDelete = []; // 按照最后一次的访问时间，从小到大排序

    var allFiles = JSON.parse(JSON.stringify(savedFiles));
    delete allFiles[KEY_TOTAL_SIZE];
    var sortedKeys = Object.keys(allFiles).sort(function (a, b) {
      return allFiles[a][KEY_TIME] - allFiles[b][KEY_TIME];
    });
    var _iterator = _createForOfIteratorHelper(sortedKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sortedKey = _step.value;
        totalSize -= savedFiles[sortedKey].size;
        pathsShouldDelete.push(savedFiles[sortedKey][KEY_PATH]);
        delete savedFiles[sortedKey];
        if (totalSize + size < MAX_SPACE_IN_B) {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    savedFiles['totalSize'] = totalSize;
    wx.setStorage({
      key: SAVED_FILES_KEY,
      data: savedFiles,
      success: function success() {
        // 保证 storage 中不会存在不存在的文件数据
        if (pathsShouldDelete.length > 0) {
          removeFiles(pathsShouldDelete);
        }
        resolve();
      },
      fail: function fail(error) {
        console.error("doLru setStorage failed, ".concat(JSON.stringify(error)));
        reject();
      }
    });
  });
}
function removeFiles(pathsShouldDelete) {
  var _iterator2 = _createForOfIteratorHelper(pathsShouldDelete),
    _step2;
  try {
    var _loop = function _loop() {
      var pathDel = _step2.value;
      var delPath = pathDel;
      if ((0, _typeof2.default)(pathDel) === 'object') {
        delPath = pathDel.filePath;
      }
      wx.removeSavedFile({
        filePath: delPath,
        fail: function fail(error) {
          console.error("removeSavedFile ".concat(pathDel, " failed, ").concat(JSON.stringify(error)));
        }
      });
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function getFile(key) {
  if (!savedFiles[key]) {
    return;
  }
  savedFiles[key]['time'] = new Date().getTime();
  wx.setStorage({
    key: SAVED_FILES_KEY,
    data: savedFiles
  });
  return savedFiles[key];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 1401:
/*!*********************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/components/painter_uni/lib/util.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
function isValidUrl(url) {
  return /(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(url);
}
/**
 * 深度对比两个对象是否一致
 * from: https://github.com/epoberezkin/fast-deep-equal
 * @param  {Object} a 对象a
 * @param  {Object} b 对象b
 * @return {Boolean}   是否相同
 */

/* eslint-disable */

function equal(a, b) {
  if (a === b) return true;
  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i,
      length,
      key;
    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }
      return true;
    }
    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
module.exports = {
  isValidUrl: isValidUrl,
  equal: equal
};

/***/ }),

/***/ 1451:
/*!********************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/icon_gold_right4.png ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhoAAADkCAMAAADpYH1UAAAAUVBMVEUAAADJpnnJpnrOqHzgs5PJpnrKp3vOroPKpnrJpnnJpXrJpXnJpXrJpnvJpnnLp3rPqXzKp3rIpXnJpnnJpnnJpnrKpnrJp3nJqHzIpnrIpXkgEmE4AAAAGnRSTlMA+8IgBapIEHfe9uueiWY7GH/QtZGEXVIx7UoEyzsAAARhSURBVHja7NxZcloxEEBRwZsgxkzGgHv/C03lJ+WClhmSL3TOGm49SY1EgVRfIDUVSHUFUucCqVOB1K5AaiiQWhbIdFEgc5QGuUEapKaZNEitQxqk9tIgNYY0SM2lQWoMaZDpl9IgtQtpkDnPpEFmWoY0yAwhDTKHkAaZRUiDvAxpkDmENEhMQ0iDxHkZ0uBav5uFNLg2LiOkwZVxHiENLk3rfYQ0uNAdh1mENPirn7rzaTEso6r8D9Nm/b4aPub75dsseBH/GsW4WM2/ghdUntdvdnMfiddVntQt5r+CV/bkaWcevLrysP40WEZaUB60fX8LmlAe0h1sMJrxUBgrK0lDHgjDFqMt5U79pzAac/+v+TSm3KP7CJpTbusXjiUtKjdtTT7bVG4Zjbga5WBChcWEZ9LYWEwaVn4wOpm0rNQdbTOaVqoWQdNKzXvQtlKxChrnm0GFfQaPpHEMKInRqZU0jY1JF2kaW9Nx0jR6v6iRp/EZ8IctKBU2GlTYaFBhCso9aXQmGuRpeIlEnsYYkKXRe9fKN4Zd3EyjM+wiT2MI+MZHgwr3hKnw0eBGGoeALI2tETkXvDvhxzR61zTI0zgFXDDu4qc0JidX8jTWAWkaboSSp9EFXHFZmArrCfU0ekNy8jQ2AWkau4BrthpUGIVS4WESFaYaVLgvTIVdKNU0vgISZQrImIVS4RoPFZ4ZUOHsSoXL5FT4azcqTLyoKPuATPG3f+SKh9Dkios8v9m7s+y0gSCAogWa0InN4GAg7H+hyYdznKEKDPYXfe8a3pFarR6QBl4oGIbyNx+v5Ex5UTJRTs7vNUp+ylOwlIeCBYBULBsmZ7MBBVuUKNjYSMF2aAoOUaDg6BUKDmyi5pg3Cg6HpOBIWQoOoqbk+HoKLr2g4KocSi7YouBaPgou86TkCmAKLg4n8ZVp9DZFk6dhywFVGluT5eRpxP4MaRqd71fSNKwe5l/hsUGdhmkvEuGxQS7evZ4hTaN3GCBpGjYrUabhyDeqNDrT5SRpWEDMhTR6q0TJ04ithRvkacRo4os/0zDxRZaG4QZFGoYbZOJ/G7MbvKVhKEoiMoczxBuzolxJw74U8jSsIuY9Dc8NyjSMN0hE7eAbtmlxwWjuq2VxycacecPioq1/be2Ky/pXA45WxTWjl0qj4hcvFRJxXb/ypdKi+IjO3qUGxceM9sM2J37zqUKexnXdII6mxA26J3E0JG7S7X2sNCNutH02BdaIuFl/NOhoQtxjWpshfXxxp261NOx4bHG/frNberU8rvicaVw9LX+ceUDxFabN+vlp+L58mb95jDyMoE391J2Ou2GWBoXuMCykQW5av0iDwriUBoVxlga5freQBrnTLA1y0yANCntpUFhJg8JKGhT20qAwSIPcNEuD3GkhDXI7aZDrZ2mQG6VBYSkNcqM0KLxIg9xaGuSmhTTIDdIgd5AGuU4aFOaA1BCQ2gWkjgGpU0CqC/g5rICdYRSMAqyABQBLVjv/KnL8PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1452:
/*!*******************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/icon_gold_left4.png ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhoAAADkCAMAAADpYH1UAAAAUVBMVEUAAADJpnnOqHzYtY7JpnnJpnrJpnrJpnrJpnrJp3vJpnrNrYHJpXrJpnnKp3v/wMDJpXrKpnrLp3rPqXzIpXnJpnnKpnnJp3nKqHvJqHzIpXmlKD8oAAAAGnRSTlMA+iAH693FrY2BdxH2vUcCnl87GNClaFJKMbTU/wkAAAQZSURBVHja7NvJkdwwEEVBgDvZe/f0MvDfUMWcpMOnA5pMG14wCgWw9AWiQ4GoKxB9F4jeBaK1QPQsEI0FouaIQtZuBZI2F0hatQ8lau1VIKbxVSCm0c4FYhpTgZCGzwb7aYze85DTaO7Y2EmjerVBTqON9l7kNNp8KZDSaEuBmEbbCvyraYOs/bWYN8hptNk5hZxGG+03yGm0utqZE9L4MbprI6XxYxIHP1rw9TKPUlpU55v/U367tmt8ru/v7mAu/a0a/4k6jF/Tab4ut/tBGuwYput27qVBVqf13kuD7HjaOmmwY3odpEFW53cvDbJheUiD7Lh00iCr104aZPXZSYOsrr00yMaPNNgxd9IgO24XaZCdHtIgG87SYMd6kQbZ6SENsuEuDbLjRxpk9SYNdmzSYMdykQbZ9SINskUa7NikwY6bNMjqRxpkx7s0yIaHNMhOF2mQrdJgx1kaZMNDGmSnizTINmmQHTtpkM3SYMdHGmRjLw2yVRpktZMG2VMaZLWTBtlVGmS1kwbZIg2y40MaZIs0yIZeGmRvaZDN0iCrB2mQvaRBNkmDHZ00yDZpkJ2kQXbspUF2lwbZKg2ySRpktZcG2VkaZJs0yK7SIJukQTZIgx0HaZDdpUF2kwbZIg2yqzTIZmmQnaRBNkmD7EsaZKM0yAZp/GHvXpKbBgIoij7JP9lxYjshELz/hVLFBLBeFxMY5Zw13LK7W/2hm6SBNPCHgmEofzJ5ZcCSFwMWyhnweY0RH+XpbOVhyAZABmwbpnPYgDFHlKgcbGTEcWgalygw5uoVBlzYROWaNwZcDsmIK2WpXETNiOvr6Tx6wZCncmg8sMWYZ/moPObJkCeA6Twczn+13UiDaok0aM5v0qBaIg2aaZYG1TXSoJlmaVC9Rxo00ywNqmOkQbPbSIPqI9KgOUQaNOdZGlSnSIPm+SINmu1bpEHzEmnQHCMN+kBDGgwGGtKgOL9GGhTTR6RBc4s0aE6RBs0SadBcL9KgWS6RBsUpkQZr0y3SoDh/RBoU29dIg+L5LdKgOF4iDda2L4k0qH8m0mDtfLpEGqwd5kQarOw+EmmwMh03kQYr0/ucSINH03VOpMGj8zIn0uDRdnlLpMGD6fBtk0iDB/uvT0mkwR/Oz6c5iTT43bQ/vm6SSINftvvr6eVnFtLgPm13X/bPh+tye31K8Q/T2L0fv32fnzbhcxrNdm5z+NzuxZevT+HTK9Pgl8A6jZ0waGlMR6NOWhq774GSxsHok5rGcgmUNE6B3yiDv6SxBFoaB+MMaho7cxNqGpP1DHoax0BLY2d1nJ6GL2r0NPaBNT8aDNP4EqhpfA0U98lqF9X9EGjut0Bzd96Ebheo3gOVL2sMfAtUdmowYILCgLVQfgwHGF3FMwqwAwCHBD4ca9FI8wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1453:
/*!*****************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/yangshi04_yangshi02_right.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAByCAMAAAB+z3SaAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA300F59OgkWYTCu/EtkIdL4Fxz4kivgAAAcFJREFUeNrs2FF2gzAMRNHBJga7BGhm/3vtRw6WSGmaf81dwjsgy4aYDDEVYnaImSGmQLo8QrpESLeohklUja4NqmEKVaP7pmq4GKpxaIWqcUgDVeMpp4VUDSDXfS4jDf5R13m634aRIeCNlqYbQ8Gf1vLFaHAtzwMDwpX2CDInPqmRQn4X1zW2O8PCqxRvdhqc5YmR4aQuDA3eFmzZeltjD3uWHGC28DGIrkb/TXyNHHyAnmvEPlpfaiRKr7FF3kANngLfTTz9J79qNG0arsaD0mvkoC9d1zVmitXQ1HA1VorVKJReo2kN7bR5ebq8eoAeeQwqpdP56mkR9TREPb3zeDpSPF3ZPOhtwwHF4Ke9O8ZhEAiCIBjw/z8TIHHTKRJZ1RMs2Ya73RnvbL4pfkX9w3r68mTure3ljX447Qkngcsp8XKDEG6XhpvH5VY6TCws0yzLpFOYggsTkmF6NkxWL1P3YSMjbOuETa6w5Rc2QMN2cNgcD6kCIXEipJGEpJqQYhQSrkL6WUjGC6mJ30jULGmrJ23VpyGJV0qzBG/p7pL/H1ohlsaQpU1maBoqLVRLQ1lpr1uaDQ+tl6UR9RfXDTzBEll/Mvz/AAAAAElFTkSuQmCC"

/***/ }),

/***/ 1454:
/*!****************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/yangshi04_yangshi02_left.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAByCAMAAAB+z3SaAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA300F59PBkWwTCu+rnUIdL4FfMgC91wAAAZBJREFUeNrt3VuSwiAUAFEg77cj+9/rlFMRmvn2zz5L6NIYE7iELqhagqpHUPUMqo6gqvcyCjkFFXkMKrIfDsg5rkGlRt6Dao38E3TXMAfkP7vXDtTI0V+Wl/w2Ju9KQ6764/lYvjtJ/gp9HMZpPhdr0DCl1RqwHac1KM6dNaCfV2tATNag/bIGbMkaNHXWgHGxBgyXNSA+rAHxsgYMizVg7KwBkzUoWQO2yxqwW4OSNSCu1oDZGtB31oDZGhCtQac14LAGbKs1IFkDJmvAYA1arAGnNWC2BkzWgNEaMFgDojWgtwZZAzZr+E3xKuovrHdf3pn7r63yHz35tAd8Elj5lLjhG4SGb5fIN4/kW+nCFQv/uJqlcKVTy1VwhSskydWz5MpqcNU9uCOD3K0D7uSq3OUH7gAFdweDO8fJqQLkxAlyGgk5qebmFKOGE65uTj97czIeOTURPjNR02mrTuJ1SrMTvF+c7t5w8n/DUyEanhhCnibT8qQh8hSqhieUkafXkScbkqdekieifpyn5dIvDA4SWd7Yb68AAAAASUVORK5CYII="

/***/ }),

/***/ 1455:
/*!********************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/icon_gold_right3.png ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAADkCAMAAAAo2N9lAAAAUVBMVEUAAADJpnrdtZLJpnrKpnrJpnnJpnrKp3vOrYHJpnrJpXrJpXrNqXzJpnvOp33PqXzJpnrKp3rJp3rLp3rJpnnIpXnJpnnKpXnJqHvJpnvIpXn+VteJAAAAGnRSTlMA+QaueuyNRxHFvp4egyQY219PO9/QpWgxcv4O18YAAANZSURBVHja1NkJbqNAFEXRXwNQxAQzeOq3/4W2RdIt7DBYSqS6OSu4KteIDc4bXDK4xuBuBjcYXDS4i8F1xtbI2Hp6YIAHJgcPvAoeeIYHVoIH1vDASuxA38EDo9iBN8cOTJ3YgUHswFLswCh2YBQ7sBQ6MAWhA2+dyIE+OpEDq04CB1a1xA1M17OEDWz64CRgoE/NbYiXTqvsJ6SxLw8h1OdT4fTD7Ht8FQ91oRlQoB/fa6cnmMA2vi3GMQLTtdYKQKAfgtOq7IHHstCWzIFN6bQta2B72M/LGNhenDKwF/l3pyzsNcNJmdgrmqBsXryF52O7jm/KyfZUhbLaXbzKDP3z7gaOhbKzDZVTfrauJ/RtBP4Rgq0pxWArDoKAj5+Enn+rgb04sPvfRuBI6lsIPALOt61An/9+sB2Y/X61E1gJhj0B79gT8EtgFI7NNagdcCEwiMdmBgHNV8hJQOAt+jmwBa6Qh8CLkOgDKN4r6Ql5j57wnnHLgUfqAIo+gLKJx10D/wOfwh+415h5YMIukc/Aq7imwFpcdtcKDPpUegzkvTUfAz14DU+Bo8iwb5F/4JuMRJ+CAn5wewTfBSXua+kTfY3IjHuZnlgSG/wckVD/yy0BPzg/0HcZkR90E/Zt9Y6+T8vOYjPkp/0Z+kknY19Xf0Pg3+7uHQeBGIaiqPkUCI34FQj2v1GkkWhoKTgXr8DKTJzYsd/lPzG/Sfgwwwdq/izmHeSvW/yFlb/y80kTn3bqZ12g9IHHmUD5jS9g8iVgfJcUniHss6TwFGaXZxLPsfyDNh1oGk0VfFuKnNpFWqP45jI4+aw0OLpLmGmyZXOnTqM33yqvLmFoXMMfeDFP5NTQFRmtW4N//ugkP3wKFuNyA9Dcb9gbwvdlDHwhCF9KwxcjkZK8qiCOs4ZdUSZf1gqJh2lpNV+czpf38wUSf/+Z/0Ck05c5DQjFBqR2fbHigNxzQDA7IDkeEG0PyN4XwAEF9EIBXvGJ/ziK+I/vASqnFaDCOvi2s4qgyUB8ChikAkhqvXfaKC4fZhbAwflAvQCScOapO8hjMX2wqI9m5eG2Ph7YByzziOqZo+4gj0nnQfM+qv+wwR2cne7gVXdw0R2cy+B2H9z2g9ttcHsMbsvgdhjcti/jPDzQP+C34gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1456:
/*!*******************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/icon_gold_left3.png ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAADkCAMAAAAo2N9lAAAAVFBMVEUAAADJpnnYto/JpnrJpnnKpnrKp3vOrYHJpnrJpXrJpXrJpnvNqXzJpnvOp33PqXzJpXnKp3rJp3rLqHzJpnnIpXnKpXnLqHnJpnnJpnrJpnvIpXlnUqdIAAAAG3RSTlMA+Qer3XlHEcWfvoIeiiQY7V9PM+rQaD2Rs3KcH2jlAAADF0lEQVR42szXaWrsMBAAYbUt2/K+zJ66/z0fDC8w2f4FUnWCD5uWWqlK8rokb0ryTknekeQ1SV6f5OUkD/sYsyd31MkdIb9L4JrUwSWpA9pkDijJHPZPCJDNWysAY/IGQIi3Qp5l72nNM/GFx//uSRrvWVdr7ELA/Zd5qTbOMq9l4XnIh2LU3Xp8Kts2B75UXES+6XIVTQvfFvVueS/zY7lvjtPU/fXU8MvFli/lUffzfuuUwNe20jdtJQY+izLeKjMQIIZmUQMByrVzAyHqo1IDgW1e3UCI++QGQvSLGwhRL24gxFi5gZAPORAekxxINHIgDKscyLmVA2G0AxlWOZDzSQ4kWjmQ2OVAeLMDme1AejuQ2Q7kzQ5ktwOjlQOJkxzIeZUDGexARjuQ1g48r3Iggx1IYwfGJAfysAM57MBcyYGMdmAsciC1HRiLHEhvB8YkB3K3A2OVA5ntwK2SAznswNoOjE4O5GoHFjuQxQ5s7MDBDoxKDuRmB452YLEDo5IDae3Axg7s7cBiB252IJ0deLMDdztwtgN7O7C2Awc7sNiBFzsw24GbHRj/2ruDHARhKAjDY8SFJGrElXL/exrKjoQtfI8wJyAayms788/5gEf/i/mXhF9m+IX6qz8gPyzw4xY/sPIjP79p0red/MadP/rgD4/44zf9AJM/AuYP0flrCP0ih78K4y8T+etY/UKbtwTopgrelsIbe3RrFG8u0+15vMFRt4jyJlvdpswbvXWrPB820OMafOBFjwzpoSs+tqYH//ToJB8+1eO7egBaj5DrIXwdY8CDIHSUhg4j0XEuOhBHRwrhUCYda6WDwXS0mg6nw/F+OiARR0zqkE4cc4qDYnHULg4rxnHPODDbRo7j0HYae08XB8jVC2R5Rav/6Dep/+iut+Hz3L2MZrWC5hVDBUt88BokvEhKr+LSy8z0OrhHRNWpJPzFlF2YWKdYVK9m5ctt0Re4TsGyNh8sH7CPLP0HrFA0r1f1X9w1ugn+yM0a37E1KhWsa+qC6x5c8pzQNAQXPAnO0l/i4N+RRJ5VJ/0BhaqXg/9rXL0AAAAASUVORK5CYII="

/***/ }),

/***/ 1457:
/*!*****************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/yangshi03_yangshi01_right.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAB99N6NOgkRPwxGpCHS+6sYFxX8sasPAAAAFfSURBVGjerM+5cQNRDMBQk/zXnpIl9F+rE8caBUABbwY/cmGDywZvG3zb4JC9aDJYyOAug4ULRsrgwAV/AVRPBWOggpWIYNQOEhjrfo8GX4PrPOajZ+PbPp/Mzn8CeI4NsMA4EtDAeDUQwUoQwesJJlgbJhgTTHDtqODVUcE7UcErUcHVUcHYccGJCxYueG0y+MQFCxeMlMEXLhhNBg9kMGXwRAaHDMYmg4UMThvsMriQwdMGDxucNviwwW6DaYPNBrHBv2bN5AZgEAZgoUioqFL78f6z9gEtGYCHR0DktNP1Tz70YfOAPPUuwF2+TgDMLWD8irqNlg6oR5EZOOZxbiaLeSSeQ7t5rfiCW7ya/cujd71dRceLCBbE0GKWBIK0qCrBNC3uS0DSi0wX1BVj5wzGteh+g1zYoD82CxqrQsqx69ZwQxTKVWZEw66Do2JX6lGxnyVE05923PrzmPIC6ybF5SBmv8kAAAAASUVORK5CYII="

/***/ }),

/***/ 1458:
/*!****************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/static/image/yangshi03_yangshi01_left.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAB99N6NOgkRPwxGpCHS+6sYFxX8sasPAAAAFESURBVGjerMy3YQNBDABBAjj3lm77r1WhMkY7BcwjHrJlh7cdfu1w2GELOaTscLdDyg4z5JBhh7ztkLcdMkIOyZJD2CvcENr43ivE8LeW/TmPc0nhvz4r1BDYxumGQB7hhtA+4YaQJYfwuuSQreQQZsgh+5JD+iWH5C2H5CWH9CWH7CGHTDuk7HC75JCXHVJ2mCGHfOywhRxy2GHaIacdDjvcQg4pO5x22O2QZYenHR52OO3waYfdDtMOmx3y16yZ3AAMwkAQvArYcQ4l/RcbKQXw8mMaQEIctme2esHAb9nw1+bGP73Ef19OLwGTXkaj01uRg97OJb0lfuljheCjWZzw8XbCEcHmbMxiFxtV7Y7GfSE0MjWRsbNlx6L7hVwo0x9rQUNVSCa2hnvgKnPQdbDoSl30WMJoDR7t+Ks+Oh5TfSYf/L/F5WeCH+4AAAAASUVORK5CYII="

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "wxc6ebce156858e28f",
    appName: "金桔有品",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.8.12",
    uniRuntimeVersion: "3.8.12",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "wxc6ebce156858e28f",
      appName: "金桔有品",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"金桔有品","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 206:
/*!***************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/verify.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = isNull;
exports.regEmail = regEmail;
exports.regPhone = regPhone;
function regPhone(param) {
  var reg = new RegExp(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/);
  return !reg.test(param);
}

// 用途：检查输入字符串是否为空  空返回true,否则返回false
function isNull(param) {
  var rep = new RegExp(/\S/);
  return !rep.test(param);
}

// 校验邮箱是否合法
function regEmail(param) {
  var rep = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
  return !rep.test(param);
}

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"金桔有品","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"金桔有品","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"金桔有品","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"金桔有品","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!*********************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pages.json ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 31)();
module.exports = runtime;

/***/ }),

/***/ 31:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 32:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 33:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 34:
/*!****************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/public/disposeToken.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disposeScene = disposeScene;
exports.disposeToken = disposeToken;
exports.getUserOpenId = getUserOpenId;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _plugInCode = __webpack_require__(/*! ../plugInCode */ 35);
var oldSceneId = '';
var oldPath = '';
function disposeToken(_x, _x2) {
  return _disposeToken.apply(this, arguments);
} // 解析 scene
function _disposeToken() {
  _disposeToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(token, that) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 5;
              break;
            }
            that.$globleData.accessToken = token;
            uni.setStorageSync('accessToken', token);
            _context2.next = 5;
            return that.$http.bindOpenId({
              code: 'dsfjioerjioejf'
            });
          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _disposeToken.apply(this, arguments);
}
function disposeScene() {
  return _disposeScene.apply(this, arguments);
} // 获取用户openId
function _disposeScene() {
  _disposeScene = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var _param$query, _param$query2;
    var param,
      that,
      scene,
      url,
      sceneId,
      path,
      userId,
      _res,
      _res$dataInfo,
      _res2,
      _res2$dataInfo,
      _res3,
      _res3$dataInfo,
      _res4,
      _res4$dataInfo,
      res,
      _args3 = arguments;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            param = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
            that = _args3.length > 1 ? _args3[1] : undefined;
            debugger;
            scene = (param === null || param === void 0 ? void 0 : param.scene) || '';
            url = (param === null || param === void 0 ? void 0 : param.path) || '';
            sceneId = (param === null || param === void 0 ? void 0 : (_param$query = param.query) === null || _param$query === void 0 ? void 0 : _param$query.scene) || oldSceneId;
            path = [url || uni.getStorageSync('path') || ''];
            userId = (param === null || param === void 0 ? void 0 : (_param$query2 = param.query) === null || _param$query2 === void 0 ? void 0 : _param$query2.contactId) || '';
            if (!sceneId) {
              _context3.next = 28;
              break;
            }
            _context3.prev = 9;
            res = '';
            if (!path.includes('pagesA/shop/goodsDetail')) {
              _context3.next = 15;
              break;
            }
            _context3.next = 14;
            return that.$http.getScene({
              id: sceneId
            });
          case 14:
            res = _context3.sent;
          case 15:
            if (!(path.includes('pages/home/miniPage') || path.includes('pages/home/index'))) {
              _context3.next = 19;
              break;
            }
            _context3.next = 18;
            return that.$http.getMiniScene({
              id: sceneId
            });
          case 18:
            res = _context3.sent;
          case 19:
            oldSceneId = '';
            oldPath = '';
            this.$globleData.ditchParam = {
              channelCode: (_res = res) === null || _res === void 0 ? void 0 : (_res$dataInfo = _res.dataInfo) === null || _res$dataInfo === void 0 ? void 0 : _res$dataInfo.channelCode,
              channelFlag: (_res2 = res) === null || _res2 === void 0 ? void 0 : (_res2$dataInfo = _res2.dataInfo) === null || _res2$dataInfo === void 0 ? void 0 : _res2$dataInfo.channelFlag,
              channelName: (_res3 = res) === null || _res3 === void 0 ? void 0 : (_res3$dataInfo = _res3.dataInfo) === null || _res3$dataInfo === void 0 ? void 0 : _res3$dataInfo.channelName,
              userId: ((_res4 = res) === null || _res4 === void 0 ? void 0 : (_res4$dataInfo = _res4.dataInfo) === null || _res4$dataInfo === void 0 ? void 0 : _res4$dataInfo.contactId) || ''
            };
            _context3.next = 28;
            break;
          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](9);
            oldSceneId = sceneId;
            oldPath = url;
          case 28:
            this.$globleData.ditchParam.userId = this.$globleData.ditchParam.userId || userId;
            (0, _plugInCode.plugInCodeInit)(that.$globleData.userData, this.$globleData.ditchParam, scene);
          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[9, 24]]);
  }));
  return _disposeScene.apply(this, arguments);
}
function getUserOpenId(that) {
  wx.login({
    success: function () {
      var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var code, res, openId;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                code = _ref.code;
                _context.next = 3;
                return that.$http.getWechatOpenId({
                  code: code
                });
              case 3:
                res = _context.sent;
                openId = res === null || res === void 0 ? void 0 : res.dataInfo;
                that.$globleData.openId = openId;
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function success(_x3) {
        return _success.apply(this, arguments);
      }
      return success;
    }()
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 35:
/*!*******************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/plugInCode.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventPlugInCode = eventPlugInCode;
exports.plugInCodeInit = plugInCodeInit;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! ./serve/api/index */ 36));
var _requestParams = __webpack_require__(/*! ./requestParams */ 39);
var chainId = '';
var info = '';
// 访问方式，1搜索,2转发, 3海报，4二维码,5链接,6短链接
var intoChannel = 1;
// 插码统计
function plugInCodeInit() {
  return _plugInCodeInit.apply(this, arguments);
} // 插码事件
function _plugInCodeInit() {
  _plugInCodeInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var userInfo,
      ditchParam,
      scene,
      systemInfo,
      _yield$http$getMember,
      vipInfo,
      param,
      _yield$http$initPlugI,
      res,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userInfo = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            ditchParam = _args.length > 1 ? _args[1] : undefined;
            scene = _args.length > 2 ? _args[2] : undefined;
            scene = scene || uni.getStorageSync('scene');
            if (!(chainId && [1089, 1001].includes(scene))) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            uni.setStorageSync('scene', scene);
            if ([1036, 1058, 1065, 1082, 1167, 1194, 1008, 1007].includes(scene)) {
              intoChannel = 2;
            }
            if ([1047, 1048, 1049].includes(scene)) {
              intoChannel = 3;
            }
            if ([1179].includes(scene)) {
              intoChannel = 6;
            }
            if (ditchParam !== null && ditchParam !== void 0 && ditchParam.channelName) {
              if (intoChannel == 3) {
                intoChannel = 4;
              } else {
                intoChannel = 5;
              }
            }
            info = userInfo;
            systemInfo = uni.getSystemInfoSync();
            _context.next = 15;
            return _index.default.getMemberMemberInfo({
              phone: info.phoneNumber
            });
          case 15:
            _yield$http$getMember = _context.sent;
            vipInfo = _yield$http$getMember.dataInfo;
            param = {
              'headPortrait': (userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar) || '',
              //	否	string	用户头像
              'nickname': (userInfo === null || userInfo === void 0 ? void 0 : userInfo.nickName) || '',
              //	是	string	昵称
              'openId': (userInfo === null || userInfo === void 0 ? void 0 : userInfo.wxOpenId) || '',
              //	是	string	微信openid
              'membershipGrade': (vipInfo === null || vipInfo === void 0 ? void 0 : vipInfo.gradeName) || '',
              //	否	string	会员级别
              'userPhone': (userInfo === null || userInfo === void 0 ? void 0 : userInfo.phoneNumber) || '',
              //	是	string	用户手机号
              'userId': (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) || '',
              //	否	Long	用户id
              'loginIp': '',
              //	否	string	登录ip
              'loginAddress': '',
              //	否	string	登录地址
              'shopId': (_requestParams.globalParams === null || _requestParams.globalParams === void 0 ? void 0 : _requestParams.globalParams.shopId) || '',
              //	是	string	店铺id
              'appVersion': '21.11.30',
              //	否	string	应用版本
              'phoneBrand': systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.brand,
              //	否	string	设备品牌
              'phoneModel': (systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.model) || '',
              //	否	string	设备型号
              'phoneSystem': (systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.system) || '',
              //	否	string	设备操作系统及版本
              'appPlatform': 'miniapp',
              //	是	Long	应用平台名称：APP(app)，H5网页(h5)，小程序(miniapp)
              'platformVersion': (systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.SDKVersion) || '',
              //	否	string	平台版本号（微信版本号）
              'deviceId': (systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.deviceId) || '',
              //	否	string	设备id
              'channelName': (ditchParam === null || ditchParam === void 0 ? void 0 : ditchParam.channelName) || '金桔有品',
              'channelFlag': (ditchParam === null || ditchParam === void 0 ? void 0 : ditchParam.channelFlag) | '',
              'shareUserId': ditchParam === null || ditchParam === void 0 ? void 0 : ditchParam.userId,
              'intoChannel': intoChannel
            };
            _context.next = 20;
            return _index.default.initPlugInCode(param);
          case 20:
            _yield$http$initPlugI = _context.sent;
            res = _yield$http$initPlugI.dataInfo;
            chainId = res.chainId;
          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _plugInCodeInit.apply(this, arguments);
}
function eventPlugInCode() {
  var eventObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!chainId) {
    uni.setStorageSync('moduleDate', null);
    return;
  }
  var startTime = dateFormat('YYYY-mm-dd HH:MM:SS', eventObj === null || eventObj === void 0 ? void 0 : eventObj.enterPageTime);
  var endTime = dateFormat('YYYY-mm-dd HH:MM:SS', new Date());
  var timeDiff = getTimeDiff(eventObj === null || eventObj === void 0 ? void 0 : eventObj.enterPageTime, new Date());
  var moduleDate = uni.getStorageSync('moduleDate');
  var param = {
    'userId': info.id,
    'chainId': chainId,
    // 是	string	链路id
    'shopId': (_requestParams.globalParams === null || _requestParams.globalParams === void 0 ? void 0 : _requestParams.globalParams.shopId) || '',
    // 是	string	店铺id
    'goodsName': (eventObj === null || eventObj === void 0 ? void 0 : eventObj.goodsName) || (eventObj === null || eventObj === void 0 ? void 0 : eventObj.title) || '',
    // 是	string	商品名称/浏览详情
    'goodsId': (eventObj === null || eventObj === void 0 ? void 0 : eventObj.goodsId) || '',
    // 否	string	商品id
    'enterPageTime': startTime,
    // 是	string	页面进入时间 格式：YYYY-MM-DD HH:mm:ss
    'outPageTime': endTime,
    // 是	string	页面退出时间 格式：YYYY-MM-DD HH:mm:ss
    'browseTime': timeDiff,
    // 是	Long	浏览时长 秒
    'orderId': (eventObj === null || eventObj === void 0 ? void 0 : eventObj.orderId) || '',
    // 否	string	订单号
    'intoChannel': intoChannel,
    // 是	string	浏览渠道 1.公众号 2.小程序 3.用户分享 4.代理分享
    'eventSite': (eventObj === null || eventObj === void 0 ? void 0 : eventObj.title) || '其他',
    // 是	string	浏览类型：首页、分类、会员、购物车、我的、商品列表页、商品详情页、文章浏览
    'eventType': (eventObj === null || eventObj === void 0 ? void 0 : eventObj.type) || '5',
    // 是	string	动作类型/操作类型（1、加购，2、分享，3、下单，4、付款（此处下单付款指在购物车处），5、浏览,7,微页面点击）
    'sort': '1',
    // 是	string	排序号（按照每次进入浏览顺序依次排序记录）
    'extendField': (eventObj === null || eventObj === void 0 ? void 0 : eventObj.extendField) || '0',
    // 否	string	拓展字段
    'goodsNum': eventObj === null || eventObj === void 0 ? void 0 : eventObj.goodsNum,
    // 否   string  加购商品数量
    'jumpPage': moduleDate === null || moduleDate === void 0 ? void 0 : moduleDate.jumpPageName,
    // 否   string  下一页面名称
    'browseType': moduleDate === null || moduleDate === void 0 ? void 0 : moduleDate.moduleName // 否   string  微页面 浏览类型
  };

  _index.default.eventPlugInCode(param).catch(function (e) {
    console.log('插码失败', e);
  });
  uni.setStorageSync('moduleDate', null);
}

// 时间格式化
function dateFormat(fmt, date) {
  var ret;
  var opt = {
    "Y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "H+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
  }
  return fmt;
}
// 计算时间差
function getTimeDiff(start, end) {
  var startTime = (start === null || start === void 0 ? void 0 : start.getTime()) || 0;
  var endTime = (end === null || end === void 0 ? void 0 : end.getTime()) || 0;
  return Math.round((endTime - startTime) / 1000);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 36:
/*!************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/serve/api/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! ../http/request.js */ 37));
var _request2 = __webpack_require__(/*! ../http/request */ 37);
var _default = {
  // 文件上传
  uploadFile: function uploadFile(param) {
    var isShowLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return (0, _request2.uploadFile)(param, isShowLoad);
  },
  qryShare: function qryShare(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/myplan/qryshare', 'get');
  },
  myPlanList: function myPlanList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/myplan/page', 'get');
  },
  getOpenId: function getOpenId(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/getopenid', 'post');
  },
  login: function login(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/login', 'post');
  },
  refreshToken: function refreshToken(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/refreshtoken', 'post');
  },
  userInfoQuery: function userInfoQuery(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/customer/query', 'post');
  },
  updateUserInfo: function updateUserInfo(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/customer/update', 'post');
  },
  // 产看图库详情
  getGalleryDetail: function getGalleryDetail(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/myplan/qrydetail/gallery', 'get');
  },
  // 产看图库详情
  getCaseDetail: function getCaseDetail(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/myplan/qrydetail/case', 'get');
  },
  sendSms: function sendSms(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/customer/sendsms', 'post');
  },
  validateSms: function validateSms(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/customer/validatesms', 'post');
  },
  getUserInfo: function getUserInfo(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/customer/query', 'get');
  },
  bindShare: function bindShare(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/myplan/bind', 'post');
  },
  // 在线时长
  writeTime: function writeTime(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/analysis/onlinerecord/record', 'post', false);
  },
  // 微信小程序登录
  weChatLogin: function weChatLogin(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/noAuthLogin', 'get');
  },
  // 退出登录
  logout: function logout(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/logout', 'post', false);
  },
  /** 商品相关接口 */
  // 查看商品活动列表
  activeGoodsList: function activeGoodsList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/page', 'get');
  },
  // 查看已上架商品列表
  goodsList: function goodsList(param) {
    var isShowLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/page/onlyputon', 'get', isShowLoad);
  },
  // 反查商品组件的接口
  getGoodSMic: function getGoodSMic(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/queryByIds', 'POST');
  },
  // 查看商品
  checkGoods: function checkGoods(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/query', 'get');
  },
  // 树形商品分组
  goodsGroupTree: function goodsGroupTree(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/group/tree', 'get');
  },
  // 商品分类 生鲜店铺
  goodsClassify: function goodsClassify(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/classify/page', 'get');
  },
  /** 优化券 todo*/
  // 商品详情 - 可领取优惠券展示
  goodsCoupons: function goodsCoupons(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/coupons', 'get');
  },
  // 领取优惠券
  receiveCoupons: function receiveCoupons(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/coupon/receive', 'post');
  },
  // 优惠券id列表查询详情
  getCouponByIds: function getCouponByIds(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/coupon/info', 'get');
  },
  // 优惠券卡券
  couponList: function couponList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/coupon/list', 'get');
  },
  // 兑换优惠券
  couponExchange: function couponExchange(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/coupon/exchange', 'POST');
  },
  //查询优惠券详情
  couponByIdList: function couponByIdList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/coupon/id/list', 'get');
  },
  /** 商品收藏  */
  // 商品页显示是否收藏
  queryCollection: function queryCollection(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/product/collection/query', 'get');
  },
  // 添加收藏
  addCollection: function addCollection(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/product/collection/add', 'post');
  },
  // 取消收藏
  cancelCollection: function cancelCollection(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/product/collection/cancel', 'post');
  },
  // 我的收藏列表
  getCollectionList: function getCollectionList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/product/collection/page', 'get');
  },
  // 我的收藏删除
  delCollection: function delCollection(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/product/collection/delete', 'post');
  },
  /** 评论相关 */
  // 查看商品评价列表（分页）
  getReviewList: function getReviewList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/product/reviews/page', 'get');
  },
  // 发布评论
  productReviews: function productReviews(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/product/reviews/add', 'post');
  },
  /** 订单相关*/
  //个人中心查询订单数量
  getOrderNum: function getOrderNum(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/get/orderNum', 'post');
  },
  // 订单查询
  getOrderList: function getOrderList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/page', 'get');
  },
  // 订单详情
  getOrderDetail: function getOrderDetail(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/query', 'get');
  },
  // 订单算费
  calcuOrder: function calcuOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/get/price', 'post');
  },
  // 取消订单
  cancelOrder: function cancelOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/cancel', 'post');
  },
  // 删除订单
  deleteOrder: function deleteOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/delete', 'post');
  },
  // 确认收货
  confirmOrder: function confirmOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/confirm/goods', 'post');
  },
  // 延长收货
  extendReceive: function extendReceive(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/extend/receiving', 'post');
  },
  /** 地址管理 */
  // 收货地址 - 列表
  getAddressList: function getAddressList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/delivery/address/list', 'get');
  },
  // 收货地址 - 添加
  addAddress: function addAddress(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/delivery/address/add', 'post');
  },
  // 收货地址 - 编辑
  editAddress: function editAddress(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/delivery/address/update', 'post');
  },
  // 收货地址 - 删除
  delAddress: function delAddress(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/delivery/address/delete', 'post');
  },
  // 收货地址 - 省市区
  getArea: function getArea(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/delivery/address/area', 'get');
  },
  // 获取店铺自提列表
  getShopAddress: function getShopAddress(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/address/config/page', 'get');
  },
  // 多个商品查询共同自提地址
  getLiftAddress: function getLiftAddress(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/get/goods/adress', 'post');
  },
  /** 购物车相关 */
  // 购物车 - 列表
  cartList: function cartList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/cart/list', 'get');
  },
  // 购物车 - 精品推荐  del
  cartRecommend: function cartRecommend(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/cart/recommend', 'get');
  },
  // 购物车 - 删除
  cartDelete: function cartDelete(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/cart/delete', 'post');
  },
  // 购物车 - 跟新
  cartUpdate: function cartUpdate(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/cart/update', 'post');
  },
  // 购物车 - 添加
  cartAdd: function cartAdd(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/cart/add', 'post');
  },
  /** 订单相关 todo */
  // 创建订单
  createOrder: function createOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/create', 'post', true);
  },
  // 查询运费
  queryFare: function queryFare(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/fare/model/queryfare', 'post');
  },
  /** 支付相关 */
  // 微信支付
  payWxOrder: function payWxOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/pay/wx/unified/order', 'post', true);
  },
  /** 售后相关 */
  // 申请售后退货退款
  repairsApply: function repairsApply(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/repairs/apply', 'post');
  },
  // 查询售后订单列表
  afterList: function afterList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/repairs/page', 'get');
  },
  // 查询售后订单详情
  getRepairs: function getRepairs(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/repairs/get', 'get');
  },
  //微页面首页详情
  getMiniMainDetail: function getMiniMainDetail(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/page/ms/index', 'get');
  },
  // 根据id查微页面
  getMicPaege: function getMicPaege(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/page/ms/query', 'get');
  },
  // 取消售后订单
  repairsCancel: function repairsCancel(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/repairs/cancel', 'post');
  },
  // 删除售后订单
  deleteRefund: function deleteRefund(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/repairs/hide', 'post');
  },
  // 用户售后物流发货订单
  repairsExpress: function repairsExpress(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/repairs/express', 'post');
  },
  // 查询物流公司
  getCompanyList: function getCompanyList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/express/company/list', 'get');
  },
  //查看物流
  getLogistic: function getLogistic(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/express/package/list', 'get');
  },
  //微页面详情
  getMiniDetail: function getMiniDetail(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/page/ms/query', 'get');
  },
  // 微页面太阳码参数
  getMiniScene: function getMiniScene(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmin/scene/query', 'post');
  },
  //产看商品规格
  goodsSpecQuery: function goodsSpecQuery(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/spec/query', 'get');
  },
  /** 用户行为统计 */analysisAdd: function analysisAdd(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/analysis/onlinerecord/add', 'post');
  },
  analysisUpdate: function analysisUpdate(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/analysis/onlinerecord/update', 'post');
  },
  analysisDetailAdd: function analysisDetailAdd(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/add', 'post');
  },
  analysisDetailUpdate: function analysisDetailUpdate(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/update', 'post');
  },
  /** 图库 */
  // 卖点
  sellPointList: function sellPointList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/sellpoint/list', 'get');
  },
  // 新增浏览记录
  addBrowse: function addBrowse(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/browse/add', 'post');
  },
  /** 配置页面相关 */
  // 搜索 热词配置
  getHotWord: function getHotWord(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/hot/word/query', 'get');
  },
  // 个人信息微页面
  getMicroInfo: function getMicroInfo(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/personal/center/query', 'get');
  },
  //个人信息广告位
  getMicroPoster: function getMicroPoster(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/ad/space/query', 'get');
  },
  // 我的方案、我的优惠券的信息
  getProInfo: function getProInfo(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/menu/config/query', 'get');
  },
  // 分类微页面
  getCatList: function getCatList(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/custom/style/query', 'get');
  },
  // 底部导航
  navbarList: function navbarList(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/store/navigation/query', 'get');
  },
  // 根据用户id查询会员信息
  getMemberInfo: function getMemberInfo(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/grade/info', 'get');
  },
  // 根据用户手机号查询会员信息, 悬浮组件登录处是哟个
  getMemberMemberInfo: function getMemberMemberInfo(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/member/info', 'get');
  },
  // 会员中心查询
  getMemberCenter: function getMemberCenter(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/member/center/query', 'get');
  },
  /** 积分 */
  // 根据用户id查询会员信息 （用户Id不是必须的 token信息里面应当有）
  getIntegrateInfo: function getIntegrateInfo(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/integrate/info', 'get');
  },
  // 根据用户id查询赚积分攻略
  integrateEarn: function integrateEarn(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/integrate/earn', 'get');
  },
  /** 拼团 */
  //创建微信预支付
  payGroup: function payGroup(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/pay/group', 'POST', true);
  },
  // 付尾款
  payGroupEnd: function payGroupEnd(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/pay/group/end', 'POST', true);
  },
  //发起拼团
  groupCreate: function groupCreate(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/group/create', 'POST');
  },
  //参与拼团
  groupJoin: function groupJoin(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/group/join', 'POST');
  },
  //查看拼团详情
  getGroupMember: function getGroupMember(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/group/member/query', 'get');
  },
  // 第二件半价和买一赠一 详情
  getHalfGoodsInfo: function getHalfGoodsInfo(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/activity/goods/info', 'get');
  },
  //我的拼团列表
  myGroupList: function myGroupList(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/user/central/group', 'GET');
  },
  // 我的拼团取消订单
  groupCancelOrder: function groupCancelOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/group/order/cancel', 'POST');
  },
  // 我的拼团删除订单
  groupDeleteOrder: function groupDeleteOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/group/order/delete', 'POST');
  },
  //我的拼团详情
  groupDetail: function groupDetail(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/group/member/info', 'GET');
  },
  // 动态查询拼团列表信息
  groupActivity: function groupActivity(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/activity/queryByIds', 'GET');
  },
  // 分享商品获取积分
  shareGoods: function shareGoods(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/myplan/share/goods', 'GET');
  },
  // 规则算费
  getRulePrice: function getRulePrice(param) {
    return (0, _request.default)(param, '/goldenhome/ghgroup/wxmini/group/order/getPrice', 'post');
  },
  // 添加登录积分
  addIntegrate: function addIntegrate(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/addintegrate', 'post');
  },
  // 获取权益卡的列表
  getCardList: function getCardList(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/list', 'GET');
  },
  // 领取权益卡
  receiveCard: function receiveCard(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/receive', 'post');
  },
  // 兑换权益卡
  exchangeCard: function exchangeCard(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/exchange', 'post');
  },
  // 获取权益卡详情
  cardDetail: function cardDetail(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/info', 'GET');
  },
  // 购买权益卡下订单
  cardOrder: function cardOrder(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/create/order', 'POST');
  },
  //权益卡购买记录
  cardBuyHistory: function cardBuyHistory(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/purchase/record', 'get');
  },
  //权益卡数量
  cardNum: function cardNum(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/valid/count', 'get');
  },
  // 会员赠送商品
  zeroMeberCreatedOrder: function zeroMeberCreatedOrder(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/card/receive/giving/goods', 'POST');
  },
  /** 付费会员 */
  // 获取店铺的会员信息
  getPayMemberInfo: function getPayMemberInfo(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/card/info', 'get');
  },
  // 秒杀查询
  seckillGoodsInfo: function seckillGoodsInfo(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/seckill/goods/info', 'get');
  },
  // 购买付费会员下订单
  memberOrder: function memberOrder(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/card/create/order', 'POST');
  },
  // 会员空间
  memberBuySpace: function memberBuySpace(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/card/member/space', 'GET');
  },
  // 赠送商品下单
  givingGoodsOrder: function givingGoodsOrder(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/card/receive/giving/goods', 'POST');
  },
  // 查看优惠券、折扣商品分页
  getDiscountLists: function getDiscountLists(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/benefits/page', 'GET');
  },
  // 秒杀创建订单
  seckillCreatedOrder: function seckillCreatedOrder(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/goods/spike', 'post');
  },
  // 0元创建订单
  zeroCreatedOrder: function zeroCreatedOrder(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/benefits/card/receive/giving/goods', 'post');
  },
  // 限时创建订单
  discountCreatedOrder: function discountCreatedOrder(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/discount/order/add', 'post');
  },
  // 秒杀查询
  discountGoodsInfo: function discountGoodsInfo(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/discount/goods/info', 'get');
  },
  //秒杀列表
  getSecKillList: function getSecKillList(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/seckill/goods/list', 'POST');
  },
  //折扣列表
  getDiscountList: function getDiscountList(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/discount/goods/list', 'POST');
  },
  // 秒杀限时折扣算费
  activityOrderPrice: function activityOrderPrice(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/activity/price', 'POST');
  },
  // 买一赠一第二件半价算费
  halfOrderPrice: function halfOrderPrice(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/get/fee', 'POST');
  },
  // 买一赠一第二件创建订单
  halfOrderCreat: function halfOrderCreat(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/order/initialize', 'POST');
  },
  // 查询文章分页接口
  articlesPage: function articlesPage(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/articles/page', 'get');
  },
  //限时秒杀列表
  getLimitSecList: function getLimitSecList(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/seckill/goods/timeList', 'POST');
  },
  //限时秒杀列表
  getLimitDisList: function getLimitDisList(param) {
    return (0, _request.default)(param, '/goldenhome/seckill/wxmini/discount/goods/timeList', 'POST');
  },
  // 报名提交
  customerAddUser: function customerAddUser(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/customer/enrollrecord/addUser', 'POST');
  },
  // 分享配置信息查询
  shareQuery: function shareQuery(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/share/setting/query', 'GET');
  },
  /** 抽奖相关 */
  // 根据id查询抽奖活动详情
  lotteryQuery: function lotteryQuery(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/query', 'GET');
  },
  // 广播中奖消息
  lotteryBroadcast: function lotteryBroadcast(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/broadcast', 'GET');
  },
  // 抽奖
  lotteryBlindBox: function lotteryBlindBox(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/blindBox', 'post');
  },
  // 查看我的奖品
  lotteryMyPrize: function lotteryMyPrize(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/my/prize', 'GET');
  },
  // 查看我的赠品
  lotteryMyGive: function lotteryMyGive(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/my/givinggoods', 'GET');
  },
  // 查询抽奖机会次数
  lotteryQueryNumber: function lotteryQueryNumber(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/number/query', 'GET');
  },
  // 增加抽奖机会
  lotteryAddNumber: function lotteryAddNumber(param) {
    var isShowLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isShowMsg = arguments.length > 2 ? arguments[2] : undefined;
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/number/add', 'post', isShowLoading, isShowMsg);
  },
  // 现金购买抽奖机会
  lotteryBuyCash: function lotteryBuyCash(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/number/cash/buy', 'post');
  },
  // 获取指定商品详情
  specifyGoods: function specifyGoods(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/number/specify/goods', 'get');
  },
  // 领取赠品
  receiveGive: function receiveGive(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/receive/givinggoods', 'post');
  },
  // 根据订单id查询用户购买的商品是否增加抽奖机会
  getNumberByOrderId: function getNumberByOrderId(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/number/order/id', 'get');
  },
  // 分销人注册
  distributionRegister: function distributionRegister(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/register', 'POST');
  },
  // 银行卡列表
  bankList: function bankList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/bank', 'GET');
  },
  // 获取国际银行短信验证码
  bankGetCode: function bankGetCode(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/getCode', 'POST');
  },
  // 个人开户提交验证
  bankVerify: function bankVerify(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/verify', 'POST', true);
  },
  // 会员新增绑卡申请
  bankBinding: function bankBinding(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/bank/tiedCard', 'POST');
  },
  // 查询分销人信息
  distributorQuery: function distributorQuery(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/getInfo', 'post');
  },
  // 查询分销海报二维码
  posterCode: function posterCode(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/ma', 'GET');
  },
  // 查询分销高返利的商品
  highRebateGoods: function highRebateGoods(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/goods/page', 'GET');
  },
  // 已绑定银行信息列表
  bindBankList: function bindBankList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/bank/list', 'post');
  },
  // 会员新增绑卡验证
  bindBankVerify: function bindBankVerify(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/bank/verify', 'POST');
  },
  // 保存scene信息
  addScene: function addScene(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/addScene', 'POST');
  },
  //查询scene信息
  getScene: function getScene(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/people/getScene', 'GET');
  },
  //查可提现金额
  withDrawal: function withDrawal(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/query', 'post');
  },
  // 提现到银行卡
  debitCard: function debitCard(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/withdrawal', 'POST');
  },
  // 提现记录
  withdrawalRecord: function withdrawalRecord(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/record/page', 'post');
  },
  // 提现详情
  withdrawalDetail: function withdrawalDetail(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/queryWithdrawal', 'get');
  },
  // 查询返利列表
  rebateList: function rebateList(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/record/rebate/page', 'POST');
  },
  // 根据银行卡号查询银行信息
  binBankInfo: function binBankInfo(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmin/distribution/bank/binInfo', 'get');
  },
  // 查询个人返利明细-返利金额统计
  rebateAmount: function rebateAmount(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/query/rebateAmount', 'post');
  },
  // 提现详情
  withdrawDetail: function withdrawDetail(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/record/query/withdrawRecord', 'post');
  },
  // 查询返利详情
  getRebateInfo: function getRebateInfo(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/withdrawal/record/query/rebateInfo', 'post');
  },
  /** 直播 */
  // 根据直播间房间list查询房间列表
  queryRoomByIds: function queryRoomByIds(param) {
    return (0, _request.default)(param, '/goldenhome/gh/live/wxmini/room/modelQueryRoomByIds', 'POST');
  },
  // 分享直播添加
  shareLiveAdd: function shareLiveAdd(param) {
    return (0, _request.default)(param, '/goldenhome/gh/live/wxmini/share/add', 'POST');
  },
  //  商品浏览量增加接口
  liveViewTotalUp: function liveViewTotalUp(param) {
    return (0, _request.default)(param, '/goldenhome/gh/live/wxmini/product/viewTotalUp', 'get');
  },
  // 获取用户的弹窗信息
  memberPopup: function memberPopup(param) {
    return (0, _request.default)(param, '/goldenhome/member/wxmini/member/popup/window', 'get');
  },
  // 积分商品和优惠券反查接口
  goodsAndCouponByIds: function goodsAndCouponByIds(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/queryGoodsAndCouponByIds', 'post');
  },
  // 积分兑换优惠券
  redeemExchange: function redeemExchange(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/coupon/redeem-exchange', 'post');
  },
  /* 换货 */
  // 申请换货
  applySalesReturn: function applySalesReturn(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/submit', 'post');
  },
  // 换货申请查看
  seeSalesReturn: function seeSalesReturn(param, isLoading) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/query', 'get', isLoading);
  },
  // 换货申请修改
  updateSalesReturn: function updateSalesReturn(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/update', 'post', true);
  },
  // 退货
  salesReturn: function salesReturn(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/return', 'post');
  },
  // 确认退货
  confirmSales: function confirmSales(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/confirm', 'get', true);
  },
  // 积分商城退换货售后订单列表
  integralAfterSales: function integralAfterSales(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/page', 'GET');
  },
  // 积分商城退换货删除订单接口
  deleteIntegralAfterSales: function deleteIntegralAfterSales(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/hide', 'GET');
  },
  // 删除售后订单 /wxmini/swap/order/sales/hide
  delSalesOrder: function delSalesOrder(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/hide', 'get');
  },
  // 撤销换货申请
  repealSalesOrder: function repealSalesOrder(param) {
    return (0, _request.default)(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/repeal', 'get');
  },
  // 退货物流信息查询
  getIntegralLogistics: function getIntegralLogistics(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/my/express/package/integral/list', 'get');
  },
  /** 发票 */
  // 抬头添加
  addInvoiceHead: function addInvoiceHead(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/head/add', 'post', true);
  },
  // 发票抬头分页
  getInvoiceHeadPage: function getInvoiceHeadPage(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/head/page', 'get');
  },
  // 抬头查询
  getHeadById: function getHeadById(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/head/id', 'get', true);
  },
  // 发票抬头修改
  invoiceHeadUpdate: function invoiceHeadUpdate(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/head/update', 'get');
  },
  // 发票抬头历史
  orderHistoryPage: function orderHistoryPage(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/page', 'get');
  },
  // 获取开票详细信息
  invoiceDetail: function invoiceDetail(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/detail', 'get');
  },
  // 发票抬头修改
  invoiceUpdate: function invoiceUpdate(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/head/update', 'post');
  },
  // 企业发票抬头模糊查询
  fuzzyQuery: function fuzzyQuery(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/head/fuzzy/query', 'get');
  },
  // 获取企业税号
  headNameAndCode: function headNameAndCode(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/head/nameAndCode', 'get');
  },
  // 待开票列表
  makeOutInvoice: function makeOutInvoice(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/remain/list', 'get');
  },
  // 订单开发票
  invoiceIssue: function invoiceIssue(param) {
    return (0, _request.default)(param, '/goldenhome/invoice/wxmini/invoice/issue', 'POST');
  },
  /** 插码 */
  // 新增数据统计用户信息记录
  initPlugInCode: function initPlugInCode(param) {
    return (0, _request.default)(param, '/goldenhome/data/statistics/web/wxmini/init/userstatustics/add', 'post');
  },
  // 插码事件统计
  eventPlugInCode: function eventPlugInCode(param) {
    return (0, _request.default)(param, '/goldenhome/data/statistics/web/wxmini/browsing/datastatistics/add', 'post');
  },
  // 购物车下单
  cardCreatOrder: function cardCreatOrder(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/car/order/add', 'post');
  },
  // 购物车算费
  carOrderPrice: function carOrderPrice(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/car/order/get/price', 'post');
  },
  /** 赠品相关 */
  // 上传凭证
  uploadCertificate: function uploadCertificate(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/upload/certificate', 'post');
  },
  // 赠品详情
  giftInfo: function giftInfo(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/givinggoods/info', 'GET');
  },
  // 登入获取积分
  getMemberBenefitsPointsRule: function getMemberBenefitsPointsRule(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/getMemberBenefitsPointsRule', 'GET');
  },
  // 商品、优惠券绑定小程序用户
  lotteryBand: function lotteryBand(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/lottery/band', 'post');
  },
  // 根据商品id获取商品类目参数信息
  getGoodsCategoryInfo: function getGoodsCategoryInfo(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/goods/getGoodsCategoryInfo', 'get');
  },
  // 获取商品页详情
  getGoodsJson: function getGoodsJson(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/goods/page/id', 'get');
  }
};
exports.default = _default;

/***/ }),

/***/ 37:
/*!***************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/serve/http/request.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.uploadFile = uploadFile;
var _index = __webpack_require__(/*! ../../public/index.js */ 38);
var _requestParams = __webpack_require__(/*! ../../requestParams.js */ 39);
var _uniRequest = _interopRequireDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'uni-request'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
_requestParams.globalParams.accessToken = uni.getStorageSync('accessToken') || '';
// 过滤掉需要token的请求
var noLogin = ['/goldenhome/ghs/wxmini/analysis/onlinerecord/add', '/goldenhome/ghs/wxmini/my/delivery/address/list', '/goldenhome/ghs/wxmini/cart/list', '/goldenhome/ghs/wxmini/goods/page', '/goldenhome/ghs/wxmini/goods/query', '/goldenhome/member/wxmini/integrate/info', '/goldenhome/member/wxmini/member/grade/info', '/goldenhome/ghs/wxmini/myplan/share/goods', '/goldenhome/ghs/wxmini/auth/addintegrate', '/goldenhome/ghs/wxmini/my/coupon/list', '/goldenhome/member/wxmini/benefits/card/valid/count', '/goldenhome/ghs/wxmini/product/reviews/page', '/goldenhome/ghs/wxmini/auth/refreshtoken', '/goldenhome/member/wxmini/member/card/info', '/goldenhome/member/wxmini/member/member/info', '/goldenhome/ghs/wxmin/distribution/people/getInfo', '/goldenhome/gh/live/wxmini/share/add', '/goldenhome/member/wxmini/member/popup/window', '/goldenhome/member/wxmini/member/popup/window/test', '/goldenhome/ghs/wxmini/order/get/orderNum', '/goldenhome/data/statistics/web/wxmini/init/userstatustics/add', '/goldenhome/gh/advert/wxmini/advert/list', '/goldenhome/ghs/wxmini/jdz/auth/refreshtoken', 'goldenhome/ghs/wxmini/car/order/get/price', '/goldenhome/ghs/wxmini/auth/getMemberBenefitsPointsRule', '/goldenhome/gh/lottery/wxmini/convert/activity/list', '/goldenhome/ghs/wxmini/auth/queryOpenId'];
// 过滤报错提示的请求
var noHint = ['/goldenhome/ghs/wxmini/my/delivery/address/list', '/goldenhome/ghs/wxmini/analysis/onlinerecord/add', '/goldenhome/ghs/wxmini/analysis/onlinerecord/update', '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/add', '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/update', '/goldenhome/ghs/wxmini/cart/list', '/goldenhome/ghs/wxmini/browse/add', '/goldenhome/member/wxmini/integrate/info', '/goldenhome/member/wxmini/member/grade/info', '/goldenhome/ghs/wxmini/myplan/share/goods', 'goldenhome/ghs/wxmini/auth/addintegrate', '/goldenhome/ghs/wxmini/auth/addintegrate', '/goldenhome/ghs/wxmini/my/coupon/list', '/goldenhome/member/wxmini/benefits/card/valid/count', '/goldenhome/ghs/wxmini/product/reviews/page', '/goldenhome/ghs/wxmin/distribution/people/getInfo', '/goldenhome/gh/live/wxmini/share/add', '/goldenhome/gh/live/wxmini/product/viewTotalUp', '/goldenhome/member/wxmini/member/popup/window', '/goldenhome/ghs/wxmini/order/get/orderNum', '/goldenhome/invoice/wxmini/invoice/head/fuzzy/query', '/goldenhome/invoice/wxmini/invoice/head/nameAndCode', '/goldenhome/data/statistics/web/wxmini/init/userstatustics/add', '/goldenhome/data/statistics/web/wxmini/browsing/datastatistics/add', '/goldenhome/member/wxmini/member/member/info', '/goldenhome/ghs/wxmini/jdz/auth/refreshtoken', '/goldenhome/ghs/wxmini/car/order/get/price', '/goldenhome/ghs/wxmini/auth/getMemberBenefitsPointsRule', '/goldenhome/gh/lottery/wxmini/convert/activity/list', '/goldenhome/ghs/wxmini/auth/queryOpenId'];

// 请求loading的数量
var reqToastNum = 0;
var errorCount = 0;
var configData = _requestParams.globalParams;
var headerParam = configData.headerParam;
var pending = [];
_uniRequest.default.defaults.headers['Content-Type'] = 'application/json';
_uniRequest.default.defaults.timeout = 6000 * 10;
//请求拦截
_uniRequest.default.interceptors.request.use(function (req) {
  // 如果全局变量中没有 就从本地缓存中取
  if (!(_requestParams.globalParams !== null && _requestParams.globalParams !== void 0 && _requestParams.globalParams.accessToken)) {
    _requestParams.globalParams.accessToken = uni.getStorageSync('accessToken') || '';
  }
  headerParam.shopId = _requestParams.globalParams.shopId;
  headerParam.openId = (_requestParams.globalParams === null || _requestParams.globalParams === void 0 ? void 0 : _requestParams.globalParams.openId) || '';
  headerParam.timestamp = new Date().getTime();
  console.log(headerParam, '999999');
  req.headers['Common-Param'] = (0, _index.Encrypt)(JSON.stringify(headerParam));
  req.headers['Auth-Token'] = (_requestParams.globalParams === null || _requestParams.globalParams === void 0 ? void 0 : _requestParams.globalParams.accessToken) || '';
  return req;
}, function (err) {
  console.log('请求拦截报错', err);
  return err;
});
// 响应拦截
_uniRequest.default.interceptors.response.use(function (response) {
  console.log(response, '99999999999response');
  if (!response || response.status !== 200) {
    if (errorCount == 0) {
      uni.showModal({
        title: '温馨提示',
        content: '网络错误',
        showCancel: false
      });
      // return;
    }

    errorCount++;
  }
  return response;
}, function (err) {
  console.log('响应拦截报错', err);
  return;
});

/**
 * @param params  请求参数
 * @param url     请求地址
 * @param method  请求方式 post get
 * @returns {Promise<unknown>}
 * @constructor
 */
function Request(params, url, method) {
  var isShowLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var isShowMsg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var encrypt = configData.encrypt; //是否需要加密
  var paramCode = params;
  if (encrypt && params) {
    paramCode = {
      body: (0, _index.Encrypt)(JSON.stringify(params))
    };
  }
  return new Promise(function (resolve, reject) {
    if (!_requestParams.globalParams.accessToken && noLogin.includes(url)) {
      reject('');
      return;
    }
    if (isShowLoading) {
      reqToastNum = reqToastNum + 1;
      uni.showLoading({
        title: '',
        mask: true
      });
    }
    _uniRequest.default.request({
      url: configData.baseUrl + url,
      method: method ? method : 'POST',
      data: paramCode
    }).then(function (res) {
      if (!res) {
        reject(res);
        closeLoading();
        return;
      }
      if (encrypt && res.data && res.data.dataInfo) {
        //如果是加密的，就需要解密
        var dataInfo = (0, _index.Decrypt)(res.data.dataInfo);
        var resData = JSON.parse(dataInfo);
        res.data.dataInfo = resData;
      }
      // // 判断是否已经存在弹框
      // if(configData.hasShow){
      // 	resolve(res.data)
      // 	closeLoading();
      // 	return
      // }

      if (res.data.returnCode == 1003) {
        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        if (noLogin.includes(url)) {
          _requestParams.globalParams.accessToken = null;
          reject(res.data);
          return;
        }
        // 避免页面多次跳转
        if (!'/pages/login/index'.includes(page.route)) {
          return uni.navigateTo({
            url: '/pages/login/index'
          });
        }
        closeLoading();
        // configData.hasShow = false;
        // uni.showModal({
        // 	title: '温馨提示',
        // 	content: '登录失效，请重新登录',
        // 	showCancel: false,
        // 	success: (res) => {
        // 		if (res.confirm) {
        // 		}
        // 	}
        // })

        // reject(res.data)
        return;
      }
      if (res.data.returnCode != 1000 && !noHint.includes(url)) {
        console.log('000000000000000');
        // configData为true这不再显示弹窗(存在问题 可以参考loading优化)
        var filter = (res === null || res === void 0 ? void 0 : res.data.message) == '服务器正在维护' || (res === null || res === void 0 ? void 0 : res.data.message) == '不满足优惠券满减金额' ? false : true;
        filter && isShowMsg && !configData.hasShow && uni.showModal({
          title: '温馨提示',
          content: res.data.message || '未知错误',
          showCancel: false,
          success: function success(res) {
            configData.hasShow = false;
          }
        });
        configData.hasShow = true;
        reject(res.data);
        closeLoading();
        return;
      }
      closeLoading();
      resolve(res.data);
    }).catch(function (err) {
      console.log(err, 'err');
      closeLoading();
      reject(err);
    });
  });
}
// 上传文件
function uploadFile(file, isShowLoad) {
  if (isShowLoad) {
    uni.showLoading({
      title: '上传中',
      mask: true
    });
  }
  return new Promise(function (resolve, reject) {
    uni.uploadFile({
      url: configData.baseUrl + '/goldenhome/ghs/wxmini/upload',
      //仅为示例，非真实的接口地址
      filePath: file,
      name: 'file',
      success: function success(res) {
        resolve(JSON.parse(res.data));
      },
      fail: function fail(err) {
        uni.showToast({
          title: '上传失败',
          mask: true,
          duration: 2000,
          icon: "none"
        });
        reject(err.data);
      },
      complete: function complete() {
        if (isShowLoad) {
          uni.hideLoading();
        }
      }
    });
  });
}

// 清除loading弹窗
function closeLoading() {
  reqToastNum = reqToastNum - 1;
  if (reqToastNum <= 0) {
    uni.hideLoading();
  }
}
function _default(data, url, method) {
  var isShowLoad = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isShowMsg = arguments.length > 4 ? arguments[4] : undefined;
  return Request(data, url, method, isShowLoad, isShowMsg);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 38:
/*!*********************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/public/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decrypt = Decrypt;
exports.Encrypt = Encrypt;
exports.getBase64 = getBase64;
var _cryptoJs = _interopRequireDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'crypto-js/crypto-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
// 请求加密的 key  和 偏移向量
var REQ_KEY = _cryptoJs.default.enc.Utf8.parse('fb21f92598c745d192ef3dd7dad59cae');
var REQ_IV = _cryptoJs.default.enc.Utf8.parse('8f42f9081cb02d0e');

// 响应加密的 key  和 偏移向量
var RES_KEY = _cryptoJs.default.enc.Utf8.parse('062a6cfae5ae45f286b45440d5c25fcb');
var RES_IV = _cryptoJs.default.enc.Utf8.parse('f15b68acf3e3aa02');

//base64加密
function getBase64(params) {
  return _cryptoJs.default.enc.Base64.stringify(_cryptoJs.default.enc.Utf8.parse(params));
}

/**
 * 3DES加密 ：字符串 key iv 返回base64
 */
function Encrypt(word, keyStr, ivStr) {
  var key = REQ_KEY;
  var iv = REQ_IV;
  if (keyStr) {
    key = _cryptoJs.default.enc.Utf8.parse(keyStr);
  }
  if (ivStr) {
    iv = _cryptoJs.default.enc.Utf8.parse(ivStr);
  }
  var srcs = _cryptoJs.default.enc.Utf8.parse(word);
  var encrypted = _cryptoJs.default.AES.encrypt(srcs, key, {
    iv: iv,
    mode: _cryptoJs.default.mode.CBC,
    padding: _cryptoJs.default.pad.Pkcs7
  });
  return _cryptoJs.default.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * 3DES 解密 ：字符串 key iv  返回base64
 *
 */
function Decrypt(word, keyStr, ivStr) {
  var key = RES_KEY;
  var iv = RES_IV;
  if (keyStr) {
    key = _cryptoJs.default.enc.Utf8.parse(keyStr);
  }
  if (ivStr) {
    iv = _cryptoJs.default.enc.Utf8.parse(ivStr);
  }
  var base64 = _cryptoJs.default.enc.Base64.parse(word);
  var src = _cryptoJs.default.enc.Base64.stringify(base64);
  var decrypt = _cryptoJs.default.AES.decrypt(src, key, {
    iv: iv,
    mode: _cryptoJs.default.mode.CBC,
    padding: _cryptoJs.default.pad.Pkcs7
  });
  var decryptedStr = decrypt.toString(_cryptoJs.default.enc.Utf8);
  return decryptedStr.toString();
}

/***/ }),

/***/ 39:
/*!**********************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/requestParams.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalParams = void 0;
var globalParams = {
  // baseUrl: 'https://testsd.cicd.vpclub.cn', //开发环境
  // baseUrl: 'https://preresearch.vpclub.cn', //测试地环境
  baseUrl: 'https://jdz.g1999.com',
  //正式环境

  headerParam: {
    deviceType: 'wxminiapp',
    //  客户端设备类型，见下表
    version: '1.0.0',
    //  展示版本号，如：1.0.0
    versionCode: '10',
    //  构建版本号，如：10
    chainId: '',
    //  32位UUID，用于打通全平台链路追踪
    appId: 'wxc6ebce156858e28f' //  约定的客户端id
  },

  accessToken: '',
  //  用户凭证
  appletId: 'wxc6ebce156858e28f',
  //  区分是哪个小程序
  userData: null,
  //  用户网络数据
  distributor: null,
  //分销人信息
  hasLogin: false,
  //  用户是否登录，全局判断
  encrypt: false,
  //  接口是否需要加密
  startTime: '',
  //  进入页面的时间
  aspectRatio: '',
  //  屏幕高度/屏幕宽度
  timeCode: {},
  //  用来存放短信倒计时的时间
  analysisId: '',
  analysisDetailsId: '',
  CanteenName: '',
  PurchaserName: '',
  // distributionId:'',                               //分销商的id\
  // 设置请求公参 放到头部    418747464275722240  （测试） 426425925530288128 （生产）433733032805924864(测试生鲜)
  shopId: '426425925530288128',
  ditchParam: {} // 渠道分享参数
};
exports.globalParams = globalParams;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!********************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/public/getLoginIntegral.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoginIntegral = getLoginIntegral;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
function getLoginIntegral(_x) {
  return _getLoginIntegral.apply(this, arguments);
}
function _getLoginIntegral() {
  _getLoginIntegral = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(that) {
    var _res$browseTime, _yield$that$$http$get, res, time;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!that.$globleData.loginTime && uni.getStorageSync('accessToken'))) {
              _context.next = 9;
              break;
            }
            _context.next = 3;
            return that.$http.getMemberBenefitsPointsRule();
          case 3:
            _yield$that$$http$get = _context.sent;
            res = _yield$that$$http$get.dataInfo;
            time = (_res$browseTime = res === null || res === void 0 ? void 0 : res.browseTime) !== null && _res$browseTime !== void 0 ? _res$browseTime : null;
            if (!(time == null)) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return");
          case 8:
            that.$globleData.loginTime = setTimeout(function () {
              that.$http.addIntegrate();
              that.globalData.loginTime = null;
            }, parseInt(time) * 1000);
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getLoginIntegral.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 423:
/*!****************************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pages/home/components/pointsMall/mixin.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  computed: {
    couponType: function couponType() {
      return function (val) {
        if (val.couponType == 0) {
          return '满减券兑换卡';
        } else if (val.couponType == 1) {
          return '礼品券兑换卡';
        } else if (val.couponType == 2) {
          return '折扣券兑换卡';
        } else if (val.couponType == 3) {
          return '权益满减券兑换卡';
        } else if (val.couponType == 4) {
          return '权益折扣券兑换卡';
        }
      };
    },
    couponName: function couponName() {
      return function (val) {
        if (val.couponType == 0) {
          return '满减券';
        } else if (val.couponType == 1) {
          return '礼品券';
        } else if (val.couponType == 2) {
          return "\u6298\u6263\u5238";
        } else if (val.couponType == 3) {
          return '权益满减券';
        } else if (val.couponType == 4) {
          return '权益折扣券';
        }
      };
    },
    couponDesc: function couponDesc() {
      return function (val) {
        var money = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        if (val.couponFullMoney == '-1') {
          if (val.couponType == 2) {
            return "\u65E0\u95E8\u69DB\u4EAB\u53D7".concat(val.discountRatio, "\u6298\u6263");
          } else {
            return '无门槛';
          }
        } else {
          if (val.couponType == 2) {
            return "\u6EE1".concat(val.couponFullMoney / money, "\u4EAB\u53D7").concat(val.discountRatio, "\u6298\u6263");
          } else {
            return "\u6EE1".concat(val.couponFullMoney / money, "\u51CF").concat(val.couponAmount / money);
          }
        }
      };
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 43:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 44:
/*!**************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/mixin.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 33);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var noTokenUrl = ['/pages/webview/webview', '/pages/home/miniPage', '/pagesA/searchPage/index', '/pagesB/search/goodsList'];
var tabBarPage = ['/pages/home/index', '/pages/mine/index', '/pages/shop/shopCart', '/pages/scheme/index', '/pages/category/index'];
var _default = {
  data: function data() {
    return {
      shopId: '',
      pageInId: '',
      timer: null,
      timeFlag: false,
      orderSatutsList: [{
        type: 'ORDER_UNPAID',
        name: '待付款',
        color: '#EC4545'
      }, {
        type: 'ORDER_CANCEL',
        name: '已取消',
        color: '#999999'
      }, {
        type: 'ORDER_UN_ISSUE',
        name: '待发货',
        color: '#EC4545'
      }, {
        type: 'ORDER_LEFT_WAIT',
        name: '商品自提',
        color: '#EC4545'
      }, {
        type: 'ORDER_UN_RECEIVED',
        name: '待收货',
        color: '#EC4545'
      }, {
        type: 'ORDER_UN_EVALUATE',
        name: '待评价',
        color: '#EC4545'
      }, {
        type: 'ORDER_FINISH',
        name: '已完成',
        color: '#EC4545'
      }, {
        type: 'ORDER_CLOSE',
        name: '已关闭',
        color: '#EC4545'
      }],
      groupStatusList: [{
        type: 'ORDER_UNPAID',
        name: '待付款',
        color: '#E1544A'
      }, {
        type: 'ORDER_CANCEL',
        name: '已取消',
        color: '#E1544A'
      }, {
        type: 'GROUP_RUNNING',
        name: '拼团中',
        color: '#E1544A'
      }, {
        type: 'GROUP_SUCCESS',
        name: '拼团成功',
        color: '#E1544A'
      }, {
        type: 'GROUP_FAIL',
        name: '拼团失败',
        color: '#E1544A'
      }, {
        type: 'ORDER_PAY',
        name: '已付款',
        color: '#E1544A'
      }],
      timeObj: {},
      // 定时对象 里面存放倒计时间
      intervalIds: [],
      // 页面定时器id集合
      noClick: true,
      //防止多次点击的标识
      codeParam: {
        enterPageTime: '',
        outPageTime: '',
        type: '5'
      }
    };
  },
  onShow: function onShow() {
    this.codeParam.enterPageTime = new Date();
    this.enterInPage();
    this.shopId = this.$globleData.shopId;
  },
  // 页面隐藏
  onHide: function onHide() {
    this.quitPage();
    this.stopVideo();
    this.quitPageByCode();
    // this.clearIntervalIds()
  },
  // 页面销毁
  onUnload: function onUnload() {
    this.quitPage();
    this.stopVideo();
    this.quitPageByCode();
    this.clearIntervalIds();
    this.$store.commit('setTabIndex', 9999999);
  },
  // 针对组件的
  beforeDestroy: function beforeDestroy() {
    this.clearIntervalIds();
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(['setExchangeList'])), {}, {
    //   企业微信客服
    openCustomerShare: function openCustomerShare() {
      wx.openCustomerServiceChat({
        extInfo: {
          url: 'https://work.weixin.qq.com/kfid/kfc891015438789d94d?enc_scene=ENCFSHzHQRGr9prTzebDYRMkYFwuMzS9PU1auxrvLLUTMKR'
        },
        corpId: 'wxcb16cd7388152b05',
        success: function success(res) {
          console.log(res, 'chenggo');
        }
      });
    },
    // 分组公共方法
    groupingMethod: function groupingMethod() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var typeName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var comData = JSON.parse(JSON.stringify(data));
      var starArr = [];
      if (comData.length) {
        comData.forEach(function (v) {
          var _starArr$push;
          for (var i = 0; i < starArr.length; i++) {
            if (starArr[i][typeName] == v[typeName]) {
              starArr[i].info.push(v);
              return;
            }
          }
          starArr.push((_starArr$push = {}, (0, _defineProperty2.default)(_starArr$push, typeName, v[typeName]), (0, _defineProperty2.default)(_starArr$push, "info", [v]), _starArr$push));
        });
      }
      return starArr;
    },
    // 图片预览
    previewImage: function previewImage(current, urls) {
      getApp().globalData.preveImage = 'preveImage';
      uni.previewImage({
        current: current,
        urls: urls
      });
    },
    // 清除当前页面的定时器
    clearIntervalIds: function clearIntervalIds() {
      var _this$intervalIds;
      var len = ((_this$intervalIds = this.intervalIds) === null || _this$intervalIds === void 0 ? void 0 : _this$intervalIds.length) || 0;
      if (!len) {
        return;
      }
      var _iterator = _createForOfIteratorHelper(this.intervalIds),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;
          clearInterval(id);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    // 关闭当前正在播放的视频
    stopVideo: function stopVideo() {
      var obj = this.$store.state.videoPlay;
      if (obj) {
        obj.pause();
      }
    },
    // 自定义页面返回 (如果页面栈里面只有一个 就直接跳转到首页 否则返回上一一个页面)
    backPage: function backPage() {
      var pages = getCurrentPages() || [];
      if (pages.length <= 1) {
        uni.switchTab({
          url: '/pages/home/index'
        });
        return;
      }
      uni.navigateBack();
    },
    // 时间格式化
    dateFormat: function dateFormat(fmt, date) {
      var ret;
      var opt = {
        'Y+': date.getFullYear().toString(),
        // 年
        'm+': (date.getMonth() + 1).toString(),
        // 月
        'd+': date.getDate().toString(),
        // 日
        'H+': date.getHours().toString(),
        // 时
        'M+': date.getMinutes().toString(),
        // 分
        'S+': date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };

      for (var k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt);
        if (ret) {
          fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
        }
      }
      return fmt;
    },
    // 全局页面跳转
    goTo: function goTo(url) {
      var isTabBar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var isBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (tabBarPage.includes(url)) {
        isTabBar = true;
      }
      if (isTabBar) {
        uni.switchTab({
          url: url
        });
        return;
      }
      var res = this.getIsLogin(url);
      if (!res) {
        return;
      }
      if (isBack && !isTabBar) {
        uni.redirectTo({
          url: url
        });
        return;
      }
      uni.navigateTo({
        url: url
      });
    },
    // 是否登录
    getIsLogin: function getIsLogin() {
      var _this$$globleData;
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var token = ((_this$$globleData = this.$globleData) === null || _this$$globleData === void 0 ? void 0 : _this$$globleData.accessToken) || null;
      var list = noTokenUrl.filter(function (item) {
        if (url.indexOf(item) >= 0) {
          return true;
        }
        return false;
      });
      if (!token && !list.length) {
        uni.navigateTo({
          url: '/pages/login/index'
        });
        return false;
      }
      return true;
    },
    goBackPage: function goBackPage() {
      var backPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      uni.navigateBack({
        delta: backPage
      });
    },
    // 转换金额
    switchMoney: function switchMoney(money) {
      if (money) {
        return (parseFloat(money) / 100).toFixed(2);
      }
      if (money == 0) {
        return '0.00';
      }
      return money || '';
    },
    // 进入页面
    enterInPage: function enterInPage() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _res$dataInfo, res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.$globleData.analysisId) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.prev = 2;
                _context.next = 5;
                return _this.$http.analysisDetailAdd({
                  recordId: _this.$globleData.analysisId,
                  detailStartPage: _this.title || '其他'
                });
              case 5:
                res = _context.sent;
                _this.pageInId = (res === null || res === void 0 ? void 0 : (_res$dataInfo = res.dataInfo) === null || _res$dataInfo === void 0 ? void 0 : _res$dataInfo.id) || '';
                _context.next = 12;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.log('进入页面报错' + _context.t0);
              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    },
    // 埋点退出页面
    quitPageByCode: function quitPageByCode() {
      this.codeParam.title = this.title;
      this.$eventPlugInCode(this.codeParam);
    },
    // 退出页面
    quitPage: function quitPage() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.pageInId) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return _this2.$http.analysisDetailUpdate({
                  id: _this2.pageInId,
                  detailEndPage: _this2.title || '其他'
                });
              case 5:
                _context2.next = 10;
                break;
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](2);
                console.log('退出页面报错' + _context2.t0);
              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 7]]);
      }))();
    },
    // 点击微页跳转路径
    clickMic: function clickMic(type, id) {
      if (type == 'GOODS') {
        //商品
        if (!id) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false
          });
        }
        uni.navigateTo({
          url: '/pagesA/shop/goodsDetail?id=' + id
        });
      } else if (type == 'GOODS_GROUP') {
        //商品分类
        uni.navigateTo({
          url: '/pagesB/search/goodsList'
        });
      } else if (type == 'MSPAGE') {
        //微页

        if (!id) {
          return uni.showModal({
            title: '温馨提示',
            content: '页面跳转ID为空',
            showCancel: false
          });
        }
        uni.navigateTo({
          url: '/pages/home/miniPage?id=' + id
        });
      }
    },
    countdown: function countdown(end) {
      var day, hr, min, sec;
      var now = new Date().getTime() / 1000;
      var msec = parseInt(end) - now;
      if (msec > 0) {
        day = parseInt(msec / 24 / 60 / 60);
        hr = parseInt(msec / 60 / 60 % 24) < 10 ? '0' + parseInt(msec / 60 / 60 % 24) : parseInt(msec / 60 / 60 % 24);
        min = parseInt(msec / 60 % 60) < 10 ? '0' + parseInt(msec / 60 % 60) : parseInt(msec / 60 % 60);
        sec = parseInt(msec % 60) < 10 ? '0' + parseInt(msec % 60) : parseInt(msec % 60);
        // this.hr = hr > 9 ? hr : '0' + hr
        // this.min = min > 9 ? min : '0' + min
        // this.sec = sec > 9 ? sec : '0' + sec
      } else {
        return false;
      }
      return {
        day: day,
        hr: hr,
        min: min,
        sec: sec
      };
      // return day + '天' + hr + '时' + min + '分' + sec + '秒'
    },
    /**
    * time  必填 只支持时间戳
    * rulType 返回类型  day xx天xx时xx分  time 09:10:11 (后续扩展)  obj {day,hr,min,sec}
    *  isAll 是否
    *  callFun (倒计时结束回调事件)
    * */
    downTime: function downTime(time, key) {
      var _this3 = this;
      var rulType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
      var callFun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var isALl = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      if (!time) {
        return;
      }
      if (this.timeObj[key]) {
        return;
      }
      this.$set(this.timeObj, key, "--");
      var end = time;
      var interValId = setInterval(function () {
        var data = _this3.countdown(end);
        if (!data) {
          clearInterval(interValId);
          if (callFun) {
            callFun();
          }
          if (rulType == 'day') {
            _this3.$set(_this3.timeObj, key, '0天0时0分0秒');
            return;
          }
          _this3.$set(_this3.timeObj, key, '00:00:00');
          return;
        }
        if (rulType == 'day') {
          if (isALl) {
            _this3.$set(_this3.timeObj, key, "".concat(data.day, "\u5929").concat(data.hr, "\u65F6").concat(data.min, "\u5206").concat(data.sec, "\u79D2"));
          } else {
            if (data.day <= 0) {
              _this3.$set(_this3.timeObj, key, "".concat(data.hr, "\u65F6").concat(data.min, "\u5206").concat(data.sec, "\u79D2"));
            } else if (data.hr <= 0) {
              _this3.$set(_this3.timeObj, key, "".concat(data.min, "\u5206").concat(data.sec, "\u79D2"));
            } else {
              _this3.$set(_this3.timeObj, key, "".concat(data.day, "\u5929").concat(data.hr, "\u65F6").concat(data.min, "\u5206").concat(data.sec, "\u79D2"));
            }
          }
        }
        if (rulType == 'time') {
          var str = '';
          if (data.day) {
            str = str + "".concat(data.day, ":");
          }
          if (str.length > 0 || data.hr) {
            if (data.hr != '00') {
              str = str + "".concat(data.hr, ":");
            }
          }
          if (str.length > 0 || data.min) {
            str = str + "".concat(data.min, ":");
          }
          if (str.length > 0 || data.sec) {
            str = str + "".concat(data.sec);
          }
          _this3.$set(_this3.timeObj, key, str);
        }
        if (rulType == 'obj') {
          _this3.$set(_this3.timeObj, key, {
            day: data.day,
            hr: data.hr,
            min: data.min,
            sec: data.sec
          });
        }
      }, 1000);
      this.intervalIds.push(interValId);
      return null;
    },
    // 防止重复点击的 （节流2s）
    noMultipleClicks: function noMultipleClicks(methods) {
      var that = this;
      if (that.noClick) {
        that.noClick = false;
        methods();
        setTimeout(function () {
          that.noClick = true;
        }, 2000);
      } else {
        console.log('请稍后点击');
      }
    },
    tabbarChange: function tabbarChange(index) {
      var _this$tabbarInfo;
      this.$store.commit('setTabIndex', index);
      var routes = getCurrentPages(); // 获取当前打开过的页面路由数组
      var curRoute = routes[routes.length - 1].route; //获取当前页面路由
      if ((_this$tabbarInfo = this.tabbarInfo) !== null && _this$tabbarInfo !== void 0 && _this$tabbarInfo.navigationList) {
        var currentData = this.tabbarInfo.navigationList[index];
        console.log('currentData: ', currentData);
        if (curRoute == 'pages/home/miniPage' && currentData.jumpTargetValue == this.miniPageId) {
          return false;
        }
        if (!currentData.pagePath) {
          if (currentData.jumpTargetType == 'CATEGORYPAGE') {
            this.goTo('/pages/category/index', true);
          }
          if (currentData.jumpTargetType == 'MEMBER') {
            this.goTo('/pages/vipCenter/index', true);
          }
          if (currentData.jumpTargetType == 'SHOPPINGCAR') {
            this.goTo('/pages/shop/shopCart', true);
          }
          if (currentData.jumpTargetType == 'PERSONALCENTER') {
            this.goTo('/pages/mine/index', true);
          }
          if (currentData.jumpTargetType == 'MSPAGE') {
            this.goTo("/pages/home/miniPage?id=".concat(currentData.jumpTargetValue, "&tabbar=true"));
          }
          // 跳转第二件半价和买一赠一
          if (currentData.jumpTargetType == 'SECONDHALF' || currentData.jumpTargetType == 'SECONDFREE') {
            this.goTo("/pagesB/halfPrice/index?jumpPageType=".concat(currentData.jumpPageType));
          }
          // 赚取积分页面
          if (currentData.jumpTargetType == 'INTEGRAL') {
            this.goTo("/pagesA/myIntegral/getPoint");
          }
          // 我的方案页面
          if (currentData.jumpTargetType == 'MYPLAN') {
            this.goTo("/pages/scheme/index");
          }
          // 所有商品的页面
          if (currentData.jumpTargetType == 'ALLGOODS') {
            this.goTo("/pagesB/search/goodsList");
          }
        }
      }
    },
    // 兑换弹窗组件接收参数统一方法
    setAdvaerInfo: function setAdvaerInfo(val) {
      var _this4 = this;
      console.log('exchagne', val);
      this.exchageId = val.ids;
      var arr = JSON.parse(JSON.stringify(this.exchangeData.length ? this.exchangeData : this.exchangeInfo));
      if (this.exchageId == this.exchangeInfo.length) {
        //最后一个弹窗如果是windowRange: 1,//弹窗频次（1、每次打开2、每天第一次打开3、只出现一次将数据存到vuex 比如首页打开之后，分类就不会再弹，我就把enableWindow 改成2 不弹窗  其它类型就请求接口返回
        this.advaerFlag = {
          'Date': new Date()
        }; //广告类型弹窗启动的条件
      }

      var flag = arr.some(function (item) {
        return item.enableWindow == 1 && item.windowPlaces.includes(_this4.getRouter);
      });
      console.log('flag: ', flag);
      if (flag) {
        arr.forEach(function (item) {
          if (item.id == val.activityId && item.windowRange == 1) {
            //弹窗是每次打开的就会在其它的页面把弹窗enableWindow 为2，给关掉，并给这条数据加一个是缓存的数据标识
            item.enableWindow = 2;
            item.isCash = true; // 是否是每次弹窗缓存数据的标识
          }
        });
      }

      this.setExchangeList(arr);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)(['exchangeData'])), {}, {
    getRouter: function getRouter() {
      var pages = getCurrentPages(); //关于获取页面的官方文档https://uniapp.dcloud.io/api/window/window

      var currentPage = pages[pages.length - 1].route;
      if (currentPage == 'pages/home/index') {
        return '1';
      }
      if (currentPage == 'pages/category/index') {
        return '2';
      }
      if (currentPage == 'pages/vipCenter/index') {
        return '3';
      }
      if (currentPage == 'pages/shop/shopCart') {
        return '4';
      }
      if (currentPage == 'pages/mine/index') {
        return '5';
      }
      if (currentPage == 'pagesA/shop/goodsDetail') {
        return '6';
      }
      if (currentPage == 'pages/home/miniPage') {
        return '7';
      }
      return '';
    },
    tabbarIndex: function tabbarIndex() {},
    // 图片多个用，给开支取一个图片地址
    imgUrl: function imgUrl() {
      return function () {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        if (val && val.indexOf(',') > -1) {
          return val.split(',')[0];
        } else {
          return val;
        }
      };
    },
    // 优惠券过期时间显示
    getCouponTitle: function getCouponTitle() {
      return function () {
        var _obj$useEndTime3;
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var type = (obj === null || obj === void 0 ? void 0 : obj.useTimeType) || 0;
        if (type == 1) {
          var _obj$useEndTime;
          return "\u6709\u6548\u671F\u81F3".concat(obj === null || obj === void 0 ? void 0 : (_obj$useEndTime = obj.useEndTime) === null || _obj$useEndTime === void 0 ? void 0 : _obj$useEndTime.substring(0, 10));
        }
        if (type == 2) {
          if (obj !== null && obj !== void 0 && obj.useEndTime) {
            var _obj$useEndTime2;
            return "\u6709\u6548\u671F\u81F3".concat(obj === null || obj === void 0 ? void 0 : (_obj$useEndTime2 = obj.useEndTime) === null || _obj$useEndTime2 === void 0 ? void 0 : _obj$useEndTime2.substring(0, 10));
          }
          if ((obj === null || obj === void 0 ? void 0 : obj.receiveDaysAble) > 0) {
            return "\u9886\u53D6".concat(obj === null || obj === void 0 ? void 0 : obj.receiveDaysAble, "\u5929\u5185\u6709\u6548");
          }
          return '领取当天有效';
        }
        if (type == 3) {
          return "\u6C38\u4E45\u6709\u6548";
        }
        return obj !== null && obj !== void 0 && obj.receiveDaysAble ? "\u9886\u53D6".concat(obj === null || obj === void 0 ? void 0 : obj.receiveDaysAble, "\u5929\u5185\u53EF\u7528") : "\u6709\u6548\u671F\u81F3".concat(obj === null || obj === void 0 ? void 0 : (_obj$useEndTime3 = obj.useEndTime) === null || _obj$useEndTime3 === void 0 ? void 0 : _obj$useEndTime3.substring(0, 10));
      };
    },
    // 是否显示小时
    showCountHour: function showCountHour() {
      return function (val) {
        if (val) {
          var hr = parseInt(val / 60 / 60 % 24);
          if (hr <= 0) {
            return false;
          } else {
            return true;
          }
        }
      };
    },
    // 隐藏手机号
    hidePhone: function hidePhone() {
      return function (tel) {
        if (tel && tel.length == 11) {
          var reg = /^(\d{3})\d{4}(\d{4})$/;
          return tel.replace(reg, '$1****$2');
        }
        return tel;
      };
    },
    // 计算返回的积分
    maxPoint: function maxPoint() {
      var _this5 = this;
      return function () {
        var goodsInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var price = arguments.length > 1 ? arguments[1] : undefined;
        if (JSON.stringify(goodsInfo) == '{}') {
          return 0;
        }
        var point = 0;
        if (goodsInfo.returnPoints == 1) {
          //如果是返积分
          if (goodsInfo.returnPointsWay == 1) {
            //比例模式返回
            point = Math.floor(_this5.switchMoney(price) * Number(goodsInfo.returnPointsFormula) / 100);
          } else {
            point = goodsInfo.returnPointsFormula;
          }
        }
        return point;
      };
    },
    // 订单状态
    getOrderStatus: function getOrderStatus() {
      return function (type) {
        // 对计算属性进行传参
        var statusArr = this.orderSatutsList.filter(function (item) {
          return item.type == type;
        });
        return statusArr[0];
      };
    },
    // 拼团订单状态
    getGroupStatus: function getGroupStatus() {
      return function (type) {
        // 对计算属性进行传参
        var statusArr = this.groupStatusList.filter(function (item) {
          return item.type == type;
        });
        return statusArr[0];
      };
    },
    // 字符串切割
    strSplit: function strSplit() {
      return function () {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var length = arguments.length > 1 ? arguments[1] : undefined;
        if (name.length > length) {
          return name.substring(0, length) + '...';
        }
        return name;
      };
    },
    strSplitTwo: function strSplitTwo() {
      return function () {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var length = arguments.length > 1 ? arguments[1] : undefined;
        if (name.length > length) {
          return name.substring(0, length);
        }
        return name;
      };
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 45:
/*!**********************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/serve/autoApi.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _module2 = __webpack_require__(46);
function importAll() {
  var apiObj = _module2.keys().reduce(function (obj, key) {
    var _module;
    return _objectSpread(_objectSpread({}, obj), ((_module = _module2(key)) === null || _module === void 0 ? void 0 : _module.default) || _module2(key));
  }, {});
  return apiObj;
}
var _default = importAll();
exports.default = _default;

/***/ }),

/***/ 46:
/*!**************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/serve/api sync \.js$ ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./advert.js": 47,
	"./app.js": 48,
	"./exchange.js": 49,
	"./index.js": 36
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46;

/***/ }),

/***/ 47:
/*!*************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/serve/api/advert.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! ../http/request */ 37));
var _default = {
  // 广告
  getAdvert: function getAdvert(param) {
    return (0, _request.default)(param, '/goldenhome/gh/advert/wxmini/advert/list', 'GET');
  },
  // 获取悬浮导航装修数据
  getNavigation: function getNavigation(param) {
    return (0, _request.default)(param, '/goldenhome/decoration/wxmini/suspension/navigation/query', 'GET');
  }
};
exports.default = _default;

/***/ }),

/***/ 48:
/*!**********************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/serve/api/app.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! ../http/request */ 37));
var _default = {
  // 绑定openId
  bindOpenId: function bindOpenId(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/bindOpenid', 'post');
  },
  // h5跳小程序绑定openId
  getWechatOpenId: function getWechatOpenId(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/queryOpenId', 'post');
  },
  // 更改手机号
  changePhone: function changePhone(param) {
    return (0, _request.default)(param, '/goldenhome/ghs/wxmini/auth/replace', 'post');
  }
};
exports.default = _default;

/***/ }),

/***/ 49:
/*!***************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/common/serve/api/exchange.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! ../http/request */ 37));
// 兑换专区
var _default = {
  //用户兑换活动列表
  exchangeActionList: function exchangeActionList(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/convert/activity/list', 'post');
  },
  // 兑换弹窗记录
  exchangeRecord: function exchangeRecord(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/convert/window/record/add', 'post');
  },
  // 兑换专区类表
  exchangeZoonList: function exchangeZoonList(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/convert/goods/list', 'get');
  },
  // 兑换专区券类表
  exchangeCouponList: function exchangeCouponList(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/convert/ticket/list', 'get');
  },
  // 兑换专区商品详情
  exchangeDetail: function exchangeDetail(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/convert/goods/query', 'get');
  },
  // 兑换专区下单
  exchangeCreateOrder: function exchangeCreateOrder(param) {
    return (0, _request.default)(param, '/goldenhome/gh/lottery/wxmini/convert/goods/addOrder', 'post');
  }
};
exports.default = _default;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!*************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/store/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 33));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    showCausePopup: false,
    // 退款原因弹窗
    showSpecification: false,
    // 规格弹窗
    defaultAddress: null,
    // 默认地址
    selAddress: null,
    // 选择的地址
    selShopAddress: null,
    // 选择的门店地址
    videoPlay: null,
    // 小程序正在播放的视频
    joinGroupId: null,
    // 参团id
    showDistributor: false,
    // 分銷員分享弹窗
    vipPopupList: [],
    // 会员信息弹窗列表
    invoiceInfo: null,
    // 发票信息
    tabbarInfo: null,
    // 底部导航的数据
    tabIndex: 0,
    // 底部导航的索引
    splashData: null,
    // 闪屏广告
    exchangeData: [],
    //兑换数据
    exchangePoupShow: false //兑换券弹窗
  },

  mutations: {
    setShowCausePopup: function setShowCausePopup(state, value) {
      state.showCausePopup = value;
    },
    setShowDistributor: function setShowDistributor(state, value) {
      state.showDistributor = value;
    },
    setSpecification: function setSpecification(state, value) {
      state.showSpecification = value;
    },
    setDefaultAddress: function setDefaultAddress(state, value) {
      uni.setStorageSync('default-address', value);
      state.defaultAddress = value;
    },
    setSelAddress: function setSelAddress(state, value) {
      uni.setStorageSync('sel-address', value);
      state.selAddress = value;
    },
    setSelShopAddress: function setSelShopAddress(state, value) {
      state.selShopAddress = value;
    },
    setVideoPlay: function setVideoPlay(state, value) {
      state.videoPlay = value;
    },
    setJoinGroupId: function setJoinGroupId(state, value) {
      state.joinGroupId = value;
    },
    setVipPopupList: function setVipPopupList(state, value) {
      uni.setStorageSync('vipPopupList', value);
      state.vipPopupList = value;
    },
    setInvoiceInfo: function setInvoiceInfo(state, value) {
      state.invoiceInfo = value;
    },
    setTabbarList: function setTabbarList(state, value) {
      state.tabbarInfo = value;
    },
    setTabIndex: function setTabIndex(state, value) {
      state.tabIndex = value;
    },
    setSplashData: function setSplashData(state, value) {
      state.splashData = value;
    },
    setExchangeList: function setExchangeList(state, value) {
      console.log('00000000000000兑换', value);
      state.exchangeData = value;
    }
  },
  getters: {
    getDefaultAddress: function getDefaultAddress(state) {
      return state.selAddress || uni.getStorageSync('sel-address') || state.defaultAddress;
    },
    getVipPopupList: function getVipPopupList(state) {
      var _state$vipPopupList;
      if ((state === null || state === void 0 ? void 0 : (_state$vipPopupList = state.vipPopupList) === null || _state$vipPopupList === void 0 ? void 0 : _state$vipPopupList.length) > 0) {
        return state.vipPopupList;
      } else {
        return uni.getStorageSync('vipPopupList') || [];
      }
    },
    tabCurrent: function tabCurrent(state) {
      var tabbarInfo = state.tabbarInfo.navigationList;
      var routes = getCurrentPages(); // 获取当前打开过的页面路由数组
      var curRoute = routes[routes.length - 1].route; //获取当前页面路由
      if (tabbarInfo !== null && tabbarInfo !== void 0 && tabbarInfo.length) {
        for (var index = 0; index < tabbarInfo.length; index++) {
          var element = tabbarInfo[index];
          if (curRoute == 'pages/vipCenter/index' && element.jumpTargetType == "MEMBER") {
            return index;
          }
          if (curRoute == 'pages/category/index' && element.jumpTargetType == "CATEGORYPAGE") {
            return index;
          }
          if (curRoute == 'pages/shop/shopCart' && element.jumpTargetType == "SHOPPINGCAR") {
            return index;
          }
          if (curRoute == 'pages/mine/index' && element.jumpTargetType == "PERSONALCENTER") {
            return index;
          }
        }
      }
    }
  }
});
var _default = store;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 65:
/*!******************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pages/home/mixin.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _plugInCode = __webpack_require__(/*! ../../common/plugInCode */ 35);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var mapList = ['height', 'pagePadding', 'borderRadius'];
var mapValue = {
  'page-padding': 'padding'
};
var _default2 = {
  props: {
    dataInfo: {
      type: Object,
      default: function _default() {}
    },
    isZoom: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      pxToRpxScale: 0
    };
  },
  onReady: function onReady() {},
  created: function created() {
    var systemInfo = uni.getSystemInfoSync();
    // px转换到rpx的比例
    var pxToRpxScale = 750 / systemInfo.windowWidth;
    this.pxToRpxScale = pxToRpxScale;
  },
  computed: {
    formatStyle: function formatStyle() {
      var str = '';
      var val = JSON.parse(JSON.stringify(this.dataInfo));
      for (var i in val) {
        var name = '';
        var a = i.replace(/([A-Z])/g, "-$1").toLowerCase();
        a = mapValue[a] || a;
        // 单位转换
        if (mapList.includes(i) && !"".concat(val[i]).includes('%')) {
          val[i] = val[i] * 2 + 'rpx';
        }
        str = str + "".concat(a, ":").concat(val[i], ";");
      }
      return str;
    }
  },
  methods: {
    // rgab 转换
    colorRgb: function colorRgb(val, opacity) {
      // 16进制颜色值的正则
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      var color = val.toLowerCase();
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
        return "rgba(" + colorChange.join(",") + "," + opacity + ")";
      } else {
        return color;
      }
    },
    // 跳转页面
    jumpToPage: function jumpToPage() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      uni.setStorageSync('moduleDate', _objectSpread(_objectSpread({}, data), {}, {
        moduleName: this.moduleName
      }));
      // 商品
      if (data.jumpPageType == 'GOODS') {
        if (!data.jumpPageId) {
          this.$toast('页面跳转ID为空');
        }
        this.goTo("/pagesA/shop/goodsDetail?id=".concat(data.jumpPageId));
        return;
      }

      // 跳转第二件半价和买一赠一
      if (data.jumpPageType == 'SECONDHALF' || data.jumpPageType == 'SECONDFREE') {
        this.goTo("/pagesB/halfPrice/index?jumpPageType=".concat(data.jumpPageType));
        return;
      }
      // 商品分类
      if (data.jumpPageType == 'GOODS_GROUP') {
        this.goTo("/pagesB/search/goodsList?goodsGroupId=".concat(data.jumpPageId));
        return;
      }
      // 微页面
      if (['MSPAGE'].includes(data.jumpPageType)) {
        if (!data.jumpPageId) {
          this.$toast('页面跳转ID为空');
          return;
        }
        this.goTo("/pages/home/miniPage?id=".concat(data.jumpPageId));
        return;
      }
      // 文章咨询跳转
      if (data.jumpPageType == 'ARTICLES') {
        if ((data === null || data === void 0 ? void 0 : data.type) == 'MSPAGE') {
          if (!(data !== null && data !== void 0 && data.jumpPageData)) {
            this.$toast('页面跳转ID为空');
            return;
          }
          this.goTo("/pages/home/miniPage?id=".concat(data.jumpPageData));
          return;
        }
        if (!data.jumpPageUrl) {
          this.$toast('跳转路径不存在');
          return;
        }
        if ((data === null || data === void 0 ? void 0 : data.type) == 'WXMAID') {
          var _this$$globleData;
          if (!(data !== null && data !== void 0 && data.jumpPageData)) {
            this.$toast('跳转小程序APPID为空');
            return;
          }
          if (((_this$$globleData = this.$globleData) === null || _this$$globleData === void 0 ? void 0 : _this$$globleData.appletId) == data.jumpPageData) {
            this.goTo("".concat(data.jumpPageUrl));
            return;
          }
          uni.navigateToMiniProgram({
            appId: data.jumpPageData,
            path: data.jumpPageUrl,
            fail: function fail(res) {}
          });
          return;
        }
        if ((data === null || data === void 0 ? void 0 : data.type) == 'WEBVIEW') {
          this.goTo("/pages/webview/webview?url=".concat(data.jumpPageUrl));
          return;
        }
      }
      // 跳转其他小程序
      if (data.jumpPageType == 'WXMAID') {
        if (!data.jumpPageUrl) {
          this.$toast('跳转路径不存在');
          return;
        }
        if (!data.jumpPageId) {
          this.$toast('跳转小程序APPID为空');
          return;
        }
        uni.navigateToMiniProgram({
          appId: data.jumpPageId,
          path: data.jumpPageUrl,
          fail: function fail(res) {}
        });
        return;
      }
      // 跳转到申请定制 jumpPageType
      if (data.jumpPageType == 'REGISTER') {
        this.goTo("/pagesB/infoApply/index");
        return;
      }
      // 小程序跳转抽奖
      if (data.jumpPageType == 'lotteryPage') {
        if (!data.jumpPageId) {
          this.$toast('抽奖活动id为空');
          return;
        }
        this.goTo("/pagesC/raffle/index?activityId=".concat(data.jumpPageId));
        return;
      }
      // 跳转到积分攻略页面
      if (data.jumpPageType == 'INTEGRAL') {
        this.goTo("/pagesA/myIntegral/getPoint");
        return;
      }
      if (data.jumpPageType == 'CATEGORYPAGE') {
        this.goTo('/pages/category/index', true);
        return;
      }
      if (data.jumpPageType == 'MEMBER') {
        this.goTo('/pages/vipCenter/index', true);
        return;
      }
      if (data.jumpPageType == 'SHOPPINGCAR') {
        this.goTo('/pages/shop/shopCart', true);
        return;
      }
      if (data.jumpPageType == 'PERSONALCENTER') {
        this.goTo('/pages/mine/index', true);
        return;
      }
      // 跳转第二件半价和买一赠一
      if (data.jumpPageType == 'SECONDHALF' || data.jumpPageType == 'SECONDFREE') {
        this.goTo("/pagesB/halfPrice/index?jumpPageType=".concat(data.jumpPageType));
        return;
      }
      // 赚取积分页面
      if (data.jumpPageType == 'INTEGRAL') {
        this.goTo("/pagesA/myIntegral/getPoint");
        return;
      }
      // 我的方案页面
      if (data.jumpPageType == 'MYPLAN') {
        this.goTo("/pages/scheme/index");
        return;
      }
      // 所有商品的页面
      if (data.jumpPageType == 'ALLGOODS') {
        this.goTo("/pagesB/search/goodsList");
        return;
      }
      if (data.jumpPageType == 'HOMEPAGE') {
        this.goTo('/pages/home/index', true);
        return;
      }
      if (data.jumpPageType == "CATEGORYPAGE") {
        this.goTo('/pages/category/index', true);
        return;
      }
      if (data.jumpPageType == "MEMBER") {
        this.goTo('/pages/vipCenter/index', true);
        return;
        // data.midButton=true
      }

      if (data.jumpPageType == "SHOPPINGCAR") {
        this.goTo('/pages/shop/shopCart', true);
        return;
      }
      if (data.jumpPageType == "PERSONALCENTER") {
        this.goTo('/pages/mine/index', true);
        return;
      }
      if (data.jumpPageType == "SEARCHPAGE") {
        this.goTo('/pagesA/searchPage/index');
        return;
      }
      if (['18', '4', '6'].includes(data === null || data === void 0 ? void 0 : data.jumpPageType)) {
        this.goTo("/pages/webview/webview?url=".concat(data.jumpPageUrl));
        return;
      }
      if ((data === null || data === void 0 ? void 0 : data.jumpPageType) == 'BRAND') {
        this.goTo("/pagesB/search/goodsList?goodBrandId=".concat(data.jumpPageId));
        return;
      }
      uni.setStorageSync('moduleDate', null);
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 66:
/*!******************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pages/shareMixin.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  // 分享
  onShareAppMessage: function onShareAppMessage(e) {
    var _e$target, _e$target$dataset, _this$$globleData;
    getApp().globalData.preveImage = 'preveImage';
    var sharLiveData = (e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$dataset = _e$target.dataset) === null || _e$target$dataset === void 0 ? void 0 : _e$target$dataset.sharlivedata) || null;
    var userInfo = ((_this$$globleData = this.$globleData) === null || _this$$globleData === void 0 ? void 0 : _this$$globleData.userData) || {};
    if (sharLiveData) {
      var _this$$globleData2, _this$$globleData2$us;
      //直播间分享过来的
      var reqParam = {
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
        userId: (_this$$globleData2 = this.$globleData) === null || _this$$globleData2 === void 0 ? void 0 : (_this$$globleData2$us = _this$$globleData2.userData) === null || _this$$globleData2$us === void 0 ? void 0 : _this$$globleData2$us.id
      };
      try {
        this.$http.shareLiveAdd(reqParam);
      } catch (e) {
        console.log('页面分享报错');
      }
      var roomId = sharLiveData.roomId;
      var param = {
        userId: userInfo.id || '',
        roomId: roomId,
        wechatId: sharLiveData.anchorWechat
      };
      var customParams = encodeURIComponent(JSON.stringify(param));
      return {
        title: sharLiveData.name,
        imageUrl: sharLiveData.shareImgLocal || sharLiveData.shareImg,
        path: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(roomId, "&custom_params=").concat(customParams)
      };
    } else {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var path = page.route;
      if (this !== null && this !== void 0 && this.miniPageId) {
        try {
          this.$eventPlugInCode(_objectSpread(_objectSpread({}, this.codeParam), {}, {
            title: this.title,
            type: '2'
          }));
        } catch (error) {
          console.log(error);
        }
        path = "".concat(path, "?id=").concat(this.miniPageId);
      }
      return {
        title: getApp().globalData.shareMessage.shareTitle,
        imageUrl: getApp().globalData.shareMessage.imageAddr,
        path: path
      };
    }
  } // onShareTimeline() {
  // 	const pages = getCurrentPages();
  // 	const page = pages[pages.length - 1];
  // 	const path = page.route
  //     return {
  //         title: getApp().globalData.shareMessage.shareTitle,
  //         query: path,
  //         imageUrl: getApp().globalData.shareMessage.imageAddr,
  //     }
  //  }
};
exports.default = _default;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 77:
/*!*********************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pages/exchangeMixin.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 33);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      exchangeInfo: [],
      exchangeList: [],
      exchageId: 0
    };
  },
  onShow: function onShow() {
    if (this.exchangeData.length) {
      this.exchangeInfo = this.exchangeData;
    } else {
      this.getExchangeList();
    }
    this.exchageId = 0;
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(['exchangeData'])),
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(['setExchangeList'])), {}, {
    getExchangeList: function getExchangeList() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, _this$$globleData, _this$$globleData$use, _this$$globleData2, _this$$globleData2$us;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = {};
                _context.prev = 1;
                _context.next = 4;
                return _this.$http.exchangeActionList({
                  phoneNumber: (_this$$globleData = _this.$globleData) === null || _this$$globleData === void 0 ? void 0 : (_this$$globleData$use = _this$$globleData.userData) === null || _this$$globleData$use === void 0 ? void 0 : _this$$globleData$use.phoneNumber,
                  nickName: (_this$$globleData2 = _this.$globleData) === null || _this$$globleData2 === void 0 ? void 0 : (_this$$globleData2$us = _this$$globleData2.userData) === null || _this$$globleData2$us === void 0 ? void 0 : _this$$globleData2$us.nickName
                });
              case 4:
                res = _context.sent;
                _this.exchangeInfo = res.dataInfo;
                _this.exchangeInfo = _this.exchangeInfo.filter(function (item) {
                  item.time = new Date();
                  return item.enableWindow == 1;
                });
                // if(this.exchangeInfo.length){
                // 	this.comparData()
                // }
                _context.next = 11;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    },
    comparData: function comparData() {
      var _this$exchangeData, _this$exchangeData2, _this$exchangeData3, _this$exchangeData4, _this$exchangeData5;
      console.log('00000', this.exchangeData);
      if ((_this$exchangeData = this.exchangeData) !== null && _this$exchangeData !== void 0 && _this$exchangeData.length && ((_this$exchangeData2 = this.exchangeData) === null || _this$exchangeData2 === void 0 ? void 0 : _this$exchangeData2.length) == this.exchangeInfo.length) {
        var _iterator = _createForOfIteratorHelper(this.exchangeData),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var _iterator2 = _createForOfIteratorHelper(this.exchangeInfo),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var someItem = _step2.value;
                if (!item.isCash && item.id == someItem.id) {
                  item.enableWindow = someItem.enableWindow;
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
        this.exchangeInfo = this.exchangeData;
      }
      var arr = [];
      if ((_this$exchangeData3 = this.exchangeData) !== null && _this$exchangeData3 !== void 0 && _this$exchangeData3.length && (_this$exchangeData4 = this.exchangeData) !== null && _this$exchangeData4 !== void 0 && _this$exchangeData4.length && ((_this$exchangeData5 = this.exchangeData) === null || _this$exchangeData5 === void 0 ? void 0 : _this$exchangeData5.length) < this.exchangeInfo.length) {
        var ids = [];
        this.exchangeData.forEach(function (item) {
          ids.push(item.id);
        });
        arr = this.exchangeInfo.filter(function (item) {
          return ids.indexOf(item.id) < 0;
        });
        this.exchangeInfo = [].concat((0, _toConsumableArray2.default)(this.exchangeData), (0, _toConsumableArray2.default)(arr));
      }
    }
  })
};
exports.default = _default;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 829:
/*!******************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/components/adver/advertMixin.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var appId = "wx85062354b0263ff6";
var envVersion = 'release'; // develop开发版 trial	体验版 release 正式版
var _default = {
  methods: {
    // 页面点击
    pageClick: function pageClick(item) {
      var type = parseInt((item === null || item === void 0 ? void 0 : item.advertJumpUrlType) || 1);
      var id = (item === null || item === void 0 ? void 0 : item.advertJumpUrl) || '';
      var advertJumpUrl = item === null || item === void 0 ? void 0 : item.advertJumpWxminiId;
      if ([3, 4, 6, 17].includes(type)) {
        id = item === null || item === void 0 ? void 0 : item.advertJumpWxminiId;
        advertJumpUrl = (item === null || item === void 0 ? void 0 : item.advertJumpUrl) || '';
      }
      if ([1, 2, 10, 11, 15].includes(type)) {
        return;
      }
      if ([3].includes(type)) {
        this.goTo(advertJumpUrl);
        return;
      }
      if ([4, 6].includes(type)) {
        this.goTo("/pages/webview/webview?url=".concat(advertJumpUrl));
        return;
      }
      if ([5].includes(type)) {
        if (id == this.$globleData.appletId) {
          this.goTo("/".concat(advertJumpUrl));
          return;
        }
        uni.navigateToMiniProgram({
          appId: id,
          path: advertJumpUrl
        });
        return;
      }
      if ([7].includes(type)) {
        uni.navigateToMiniProgram({
          appId: appId,
          path: "pagesE/scheme/mapDepot?businessId=".concat(id),
          envVersion: envVersion
        });
        return;
      }
      if ([8].includes(type)) {
        uni.navigateToMiniProgram({
          appId: appId,
          path: "pagesE/scheme/case?id=".concat(id),
          envVersion: envVersion
        });
        return;
      }
      if ([9].includes(type)) {
        uni.navigateToMiniProgram({
          appId: appId,
          path: "pages/scheme/videoDetail?id=".concat(id),
          envVersion: envVersion
        });
        return;
      }
      if ([12].includes(type)) {
        this.goTo("/pagesA/shop/goodsDetail?id=".concat(id));
        return;
      }
      if ([13].includes(type)) {
        this.goTo("/pagesB/search/goodsList?goodsGroupId=".concat(id));
        return;
      }
      if ([14].includes(type)) {
        this.goTo("/pagesC/raffle/index?activityId=".concat(id));
        return;
      }
      if ([17].includes(type)) {
        uni.navigateTo({
          url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(id)
        });
        return;
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 912:
/*!***********************************************************************************************************!*\
  !*** /Users/liyaopeng/参考项目/store-decoration/store-decoration-uniapp/pages/home/components/goods/mixin.js ***!
  \***********************************************************************************************************/
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
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var systemInfo = uni.getSystemInfoSync();
// import mixin from '../../mixin.js'
var _default = {
  // mixins:[mixin],
  props: {
    dataInfo: {
      type: Object,
      default: null
    },
    catType: {
      //在分分类页面的商品的类型
      type: String,
      default: ""
    },
    leftWidth: {
      type: Number,
      default: 0
    },
    pageId: {
      type: String,
      default: ""
    }
    // loading:{
    // 	type:Boolean,
    // 	default:false
    // }
  },
  data: function data() {
    return {
      windowsWidth: systemInfo.windowWidth,
      pxToRpxScale: 0,
      list: [],
      current: 1,
      groupId: "",
      //商品分组id
      goodsList: [],
      pageSize: 0,
      //商品分组一页商品数
      groupSize: 20,
      //商品分组一页商品数
      skeletonLoading: true,
      //骨架屏显示
      moduleName: '商品'
    };
  },
  onReady: function onReady() {
    var systemInfo = uni.getSystemInfoSync();
    // px转换到rpx的比例
    var pxToRpxScale = 750 / systemInfo.windowWidth;
    this.pxToRpxScale = pxToRpxScale;
  },
  created: function created() {},
  watch: {
    pageId: {
      handler: function handler(newVal) {
        this.init();
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    imgUrl: function imgUrl() {
      return function () {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        if (val && val.indexOf(',') > -1) {
          return val.split(',')[0];
        } else {
          return val;
        }
      };
    },
    stylePadding: function stylePadding() {
      if (this.pxToRpxScale) {
        var _this$dataInfo;
        return {
          'padding': "0rpx ".concat(((_this$dataInfo = this.dataInfo) === null || _this$dataInfo === void 0 ? void 0 : _this$dataInfo.pagePadding) * this.pxToRpxScale, "rpx"),
          '--width': "".concat(this.imgWidth * this.pxToRpxScale, "rpx")
        };
      }
    },
    bgImgMode: function bgImgMode() {
      if (this.dataInfo.imgFill == '1') {
        //留白
        //图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'

        if (this.dataInfo.imgScale == '1') {
          return 'heightFix';
        } else {
          return 'aspectFit';
        }
      } else {
        return 'aspectFill';
      }
    },
    horizontalMode: function horizontalMode() {
      if (this.dataInfo.imgFill == '1') {
        //留白	if(this.dataInfo.imgScale == '2'  ){
        return 'aspectFit';
      } else {
        return 'aspectFill';
      }
    },
    wrapWidth: function wrapWidth() {
      return this.windowsWidth - Number(this.leftWidth);
    },
    imgWidth: function imgWidth() {
      if (this.dataInfo.listStyle == 0 || this.dataInfo.listStyle == 1 || this.dataInfo.listStyle == 2 || this.dataInfo.listStyle == 5) {
        // 根据不同的listStyle来计算出图片的宽度
        var length = 0;
        if (this.dataInfo.listStyle == 5) {
          //瀑布模式和一行两个的图片宽度是一样的
          length = 1;
        } else {
          length = Number(this.dataInfo.listStyle);
        }
        return (this.wrapWidth - this.dataInfo.pagePadding * 2 - this.dataInfo.imagePadding * length) / (length + 1);
      } else if (this.dataInfo.listStyle == 3) {
        return 196;
      } else if (this.dataInfo.listStyle == 4) {
        return 60;
      }
    },
    imgHeight: function imgHeight() {
      var height;
      if (this.dataInfo.imgScale == '0') {
        //图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
        if (this.dataInfo.listStyle == '4') {
          height = 3 * this.imgWidth / 2;
        } else {
          height = 2 * this.imgWidth / 3;
        }
      } else if (this.dataInfo.imgScale == '1') {
        height = this.imgWidth;
      } else if (this.dataInfo.imgScale == '2') {
        if (this.dataInfo.listStyle == '4') {
          height = 3 * this.imgWidth / 4;
        } else {
          height = 4 * this.imgWidth / 3;
        }
      } else if (this.dataInfo.imgScale == '3') {
        if (this.dataInfo.listStyle == '4') {
          height = 16 * this.imgWidth / 9;
        } else {
          height = 9 * this.imgWidth / 16;
        }
      }
      return height;
    },
    imageStyle: function imageStyle() {
      return {
        'width': this.imgWidth * this.pxToRpxScale + 'rpx',
        'height': this.imgHeight * this.pxToRpxScale + 'rpx'
      };
    },
    imageStyle1: function imageStyle1() {
      return {
        'width': this.imgHeight * this.pxToRpxScale + 'rpx',
        'height': this.imgWidth * this.pxToRpxScale + 'rpx',
        'padding': ' 10rpx'
      };
    },
    marginType: function marginType() {
      if (this.dataInfo.listStyle == '0') {
        //一行一个
        return 'marginTop';
      } else {
        return 'doubleMargin';
      }
    },
    endData: function endData() {
      return this.goodsList;
    },
    // 图片的留白
    smallImage: function smallImage() {
      var styObj = {
        'with': '100%',
        'height': '100%'
      };
      return styObj;
    }
  },
  methods: {
    init: function init() {
      var _this$dataInfo2, _this$dataInfo4;
      if (((_this$dataInfo2 = this.dataInfo) === null || _this$dataInfo2 === void 0 ? void 0 : _this$dataInfo2.shopListType) == 2) {
        var _this$dataInfo3, _this$list;
        //如果是商品分组
        this.list = ((_this$dataInfo3 = this.dataInfo) === null || _this$dataInfo3 === void 0 ? void 0 : _this$dataInfo3.shopList) || [];
        if ((_this$list = this.list) !== null && _this$list !== void 0 && _this$list.length) {
          this.groupId = this.list[0].id;
          if (this.list[0].showAllShop) {
            this.pageSize = 999999;
          } else {
            this.pageSize = this.list[0].shopNumber;
          }
        }
        this.getGroupList();
      } else if (((_this$dataInfo4 = this.dataInfo) === null || _this$dataInfo4 === void 0 ? void 0 : _this$dataInfo4.shopListType) == 1) {
        //商品
        if (this.dataInfo.checkType == '1') {
          var _this$dataInfo5, _this$dataInfo5$imgId;
          //商品的正常展示
          var ids = [];
          if (this.dataInfo.imageList.length) {
            this.dataInfo.imageList.forEach(function (item) {
              ids.push(item.id);
            });
          }
          this.dataInfo.imgIds = ids;
          if (this.dataInfo && (_this$dataInfo5 = this.dataInfo) !== null && _this$dataInfo5 !== void 0 && (_this$dataInfo5$imgId = _this$dataInfo5.imgIds) !== null && _this$dataInfo5$imgId !== void 0 && _this$dataInfo5$imgId.length) {
            this.getGoodsList();
          }
        }
        if (this.dataInfo.checkType == '2') {
          var _this$dataInfo6, _this$dataInfo6$image;
          //商品分类
          var _ids = [];
          if (this.dataInfo && (_this$dataInfo6 = this.dataInfo) !== null && _this$dataInfo6 !== void 0 && (_this$dataInfo6$image = _this$dataInfo6.imageList) !== null && _this$dataInfo6$image !== void 0 && _this$dataInfo6$image.length) {
            this.dataInfo.imageList.forEach(function (item) {
              _ids.push(item.id);
            });
          }
          this.groupTypeList(_ids[0]);
        }
      }
    },
    // 获取分组商品
    groupTypeList: function groupTypeList(groupId) {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _getApp$globalData$fr;
        var buyerType, _this$$globleData, param, _yield$_this$$http$go, res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buyerType = '';
                if ((_getApp$globalData$fr = getApp().globalData.freshShopId) !== null && _getApp$globalData$fr !== void 0 && _getApp$globalData$fr.includes(_this.$globleData.shopId)) {
                  buyerType = ((_this$$globleData = _this.$globleData) === null || _this$$globleData === void 0 ? void 0 : _this$$globleData.buyType) || '';
                }
                param = {
                  current: _this.current,
                  size: _this.groupSize,
                  goodsGroupId: groupId,
                  buyerType: buyerType
                };
                _context.next = 5;
                return _this.$http.goodsList(param);
              case 5:
                _yield$_this$$http$go = _context.sent;
                res = _yield$_this$$http$go.dataInfo;
                _this.goodsList = [].concat((0, _toConsumableArray2.default)(_this.goodsList), (0, _toConsumableArray2.default)((res === null || res === void 0 ? void 0 : res.records) || []));
                _this.dataInfo.imageList = _this.goodsList || [];
                _context.next = 11;
                return _this.loadingFalse();
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 商品列表
    getGoodsList: function getGoodsList() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _res$dataInfo, _res$dataInfo$dataInf;
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$http.getGoodSMic({
                  ids: _this2.dataInfo.imgIds
                });
              case 2:
                res = _context2.sent;
                _this2.dataInfo.imageList = (_res$dataInfo = res.dataInfo) === null || _res$dataInfo === void 0 ? void 0 : (_res$dataInfo$dataInf = _res$dataInfo.dataInfo) === null || _res$dataInfo$dataInf === void 0 ? void 0 : _res$dataInfo$dataInf.filter(Boolean).filter(function (item) {
                  if (item !== null && item !== void 0 && item.goodsStatus) {
                    return item.goodsStatus == 2;
                  }
                  return true;
                });
                _this2.goodsList = _this2.dataInfo.imageList;
                _context2.next = 7;
                return _this2.loadingFalse();
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    tabsChange: function tabsChange(index) {
      this.current = index;
      this.groupId = this.list[index].id;
      // 如果是showAllShop 是true的话pagesize就是全部
      if (this.list[index].showAllShop) {
        this.pageSize = 999999;
      } else {
        this.pageSize = this.list[index].shopNumber;
      }
      this.getGroupList();
    },
    loadingFalse: function loadingFalse() {
      this.skeletonLoading = false;
    },
    // 获取分组商品
    getGroupList: function getGroupList() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _getApp$globalData$fr2;
        var buyerType, _this3$$globleData, param, _yield$_this3$$http$g, res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                buyerType = '';
                if ((_getApp$globalData$fr2 = getApp().globalData.freshShopId) !== null && _getApp$globalData$fr2 !== void 0 && _getApp$globalData$fr2.includes(_this3.$globleData.shopId)) {
                  buyerType = ((_this3$$globleData = _this3.$globleData) === null || _this3$$globleData === void 0 ? void 0 : _this3$$globleData.buyType) || '';
                }
                param = {
                  current: 1,
                  size: _this3.pageSize,
                  goodsGroupId: _this3.groupId,
                  buyerType: buyerType
                };
                _context3.next = 5;
                return _this3.$http.goodsList(param);
              case 5:
                _yield$_this3$$http$g = _context3.sent;
                res = _yield$_this3$$http$g.dataInfo;
                _this3.goodsList = (res === null || res === void 0 ? void 0 : res.records) || [];
                _context3.next = 10;
                return _this3.loadingFalse();
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    jumpPage: function jumpPage(item) {
      this.goTo("/pagesA/shop/goodsDetail?id=".concat(item.id));
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map