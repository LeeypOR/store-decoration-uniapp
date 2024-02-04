import request from '../http/request.js'
import {
    uploadFile
} from '../http/request'

export default {
    // 文件上传
    uploadFile(param, isShowLoad = true) {
        return uploadFile(param, isShowLoad)
    },
    qryShare(param) {
        return request(param, '/goldenhome/ghs/wxmini/myplan/qryshare', 'get')
    },
    myPlanList(param) {
        return request(param, '/goldenhome/ghs/wxmini/myplan/page', 'get')
    },
    getOpenId(param) {
        return request(param, '/goldenhome/ghs/wxmini/auth/getopenid', 'post')
    },
    login(param) {
        return request(param, '/goldenhome/ghs/wxmini/auth/login', 'post')
    },
    refreshToken(param) {
        return request(param, '/goldenhome/ghs/wxmini/auth/refreshtoken', 'post')
    },
    userInfoQuery(param) {
        return request(param, '/goldenhome/ghs/wxmini/customer/query', 'post')
    },
    updateUserInfo(param) {
        return request(param, '/goldenhome/ghs/wxmini/customer/update', 'post')
    },
    // 产看图库详情
    getGalleryDetail(param) {
        return request(param, '/goldenhome/ghs/wxmini/myplan/qrydetail/gallery', 'get')
    },
    // 产看图库详情
    getCaseDetail(param) {
        return request(param, '/goldenhome/ghs/wxmini/myplan/qrydetail/case', 'get')
    },
    sendSms(param) {
        return request(param, '/goldenhome/ghs/wxmini/customer/sendsms', 'post')
    },
    validateSms(param) {
        return request(param, '/goldenhome/ghs/wxmini/customer/validatesms', 'post')
    },
    getUserInfo(param) {
        return request(param, '/goldenhome/ghs/wxmini/customer/query', 'get')
    },
    bindShare(param) {
        return request(param, '/goldenhome/ghs/wxmini/myplan/bind', 'post')
    },
    // 在线时长
    writeTime(param) {
        return request(param, '/goldenhome/ghs/wxmini/analysis/onlinerecord/record', 'post', false)
    },
    // 微信小程序登录
    weChatLogin(param) {
        return request(param, '/goldenhome/ghs/wxmini/auth/noAuthLogin', 'get')
    },
    // 退出登录
    logout(param) {
        return request(param, '/goldenhome/ghs/wxmini/auth/logout', 'post', false)
    },
    /** 商品相关接口 */
    // 查看商品活动列表
    activeGoodsList(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/page', 'get')
    },
    // 查看已上架商品列表
    goodsList(param, isShowLoad = true) {
        return request(param, '/goldenhome/ghs/wxmini/goods/page/onlyputon', 'get', isShowLoad)
    },
    // 反查商品组件的接口
    getGoodSMic(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/queryByIds', 'POST')
    },
    // 查看商品
    checkGoods(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/query', 'get')
    },
    // 树形商品分组
    goodsGroupTree(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/group/tree', 'get')
    },
    // 商品分类 生鲜店铺
    goodsClassify(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/classify/page', 'get')
    },


    /** 优化券 todo*/
    // 商品详情 - 可领取优惠券展示
    goodsCoupons(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/coupons', 'get')
    },
    // 领取优惠券
    receiveCoupons(param) {
        return request(param, '/goldenhome/ghs/wxmini/coupon/receive', 'post')
    },
    // 优惠券id列表查询详情
    getCouponByIds(param) {
        return request(param, '/goldenhome/ghs/wxmini/coupon/info', 'get')
    },
    // 优惠券卡券
    couponList(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/coupon/list', 'get')
    },
    // 兑换优惠券
    couponExchange(param) {
        return request(param, '/goldenhome/ghs/wxmini/coupon/exchange', 'POST')
    },
    //查询优惠券详情
    couponByIdList(param) {
        return request(param, '/goldenhome/ghs/wxmini/coupon/id/list', 'get')
    },
    /** 商品收藏  */
    // 商品页显示是否收藏
    queryCollection(param) {
        return request(param, '/goldenhome/ghs/wxmini/product/collection/query', 'get')
    },
    // 添加收藏
    addCollection(param) {
        return request(param, '/goldenhome/ghs/wxmini/product/collection/add', 'post')
    },
    // 取消收藏
    cancelCollection(param) {
        return request(param, '/goldenhome/ghs/wxmini/product/collection/cancel', 'post')
    },
    // 我的收藏列表
    getCollectionList(param) {
        return request(param, '/goldenhome/ghs/wxmini/product/collection/page', 'get')
    },
    // 我的收藏删除
    delCollection(param) {
        return request(param, '/goldenhome/ghs/wxmini/product/collection/delete', 'post')
    },

    /** 评论相关 */
    // 查看商品评价列表（分页）
    getReviewList(param) {
        return request(param, '/goldenhome/ghs/wxmini/product/reviews/page', 'get')
    },
    // 发布评论
    productReviews(param) {
        return request(param, '/goldenhome/ghs/wxmini/product/reviews/add', 'post')
    },

    /** 订单相关*/
    //个人中心查询订单数量
    getOrderNum(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/get/orderNum', 'post')
    },
    // 订单查询
    getOrderList(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/page', 'get')
    },
    // 订单详情
    getOrderDetail(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/query', 'get')
    },
    // 订单算费
    calcuOrder(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/get/price', 'post')
    },
    // 取消订单
    cancelOrder(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/cancel', 'post')
    },
    // 删除订单
    deleteOrder(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/delete', 'post')
    },
    // 确认收货
    confirmOrder(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/confirm/goods', 'post')
    },
    // 延长收货
    extendReceive(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/extend/receiving', 'post')
    },
    /** 地址管理 */
    // 收货地址 - 列表
    getAddressList(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/delivery/address/list', 'get')
    },
    // 收货地址 - 添加
    addAddress(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/delivery/address/add', 'post')
    },
    // 收货地址 - 编辑
    editAddress(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/delivery/address/update', 'post')
    },
    // 收货地址 - 删除
    delAddress(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/delivery/address/delete', 'post')
    },
    // 收货地址 - 省市区
    getArea(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/delivery/address/area', 'get')
    },
    // 获取店铺自提列表
    getShopAddress(param) {
        return request(param, '/goldenhome/ghs/wxmini/address/config/page', 'get')
    },
    // 多个商品查询共同自提地址
    getLiftAddress(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/get/goods/adress', 'post')
    },

    /** 购物车相关 */
    // 购物车 - 列表
    cartList(param) {
        return request(param, '/goldenhome/ghs/wxmini/cart/list', 'get')
    },
    // 购物车 - 精品推荐  del
    cartRecommend(param) {
        return request(param, '/goldenhome/ghs/wxmini/cart/recommend', 'get')
    },
    // 购物车 - 删除
    cartDelete(param) {
        return request(param, '/goldenhome/ghs/wxmini/cart/delete', 'post')
    },
    // 购物车 - 跟新
    cartUpdate(param) {
        return request(param, '/goldenhome/ghs/wxmini/cart/update', 'post')
    },
    // 购物车 - 添加
    cartAdd(param) {
        return request(param, '/goldenhome/ghs/wxmini/cart/add', 'post')
    },
    /** 订单相关 todo */
    // 创建订单
    createOrder(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/create', 'post', true)
    },
    // 查询运费
    queryFare(param) {
        return request(param, '/goldenhome/ghs/wxmini/fare/model/queryfare', 'post')
    },
    /** 支付相关 */
    // 微信支付
    payWxOrder(param) {
        return request(param, '/goldenhome/ghs/wxmini/pay/wx/unified/order', 'post', true)
    },
    /** 售后相关 */
    // 申请售后退货退款
    repairsApply(param) {
        return request(param, '/goldenhome/ghs/wxmini/repairs/apply', 'post')
    },
    // 查询售后订单列表
    afterList(param) {
        return request(param, '/goldenhome/ghs/wxmini/repairs/page', 'get')
    },
    // 查询售后订单详情
    getRepairs(param) {
        return request(param, '/goldenhome/ghs/wxmini/repairs/get', 'get')
    },
    //微页面首页详情
    getMiniMainDetail(param) {
        return request(param, '/goldenhome/decoration/wxmini/page/ms/index', 'get')
    },
    // 根据id查微页面
    getMicPaege(param) {
        return request(param, '/goldenhome/decoration/wxmini/page/ms/query', 'get')
    },
    // 取消售后订单
    repairsCancel(param) {
        return request(param, '/goldenhome/ghs/wxmini/repairs/cancel', 'post')
    },
    // 删除售后订单
    deleteRefund(param) {
        return request(param, '/goldenhome/ghs/wxmini/repairs/hide', 'post')
    },
    // 用户售后物流发货订单
    repairsExpress(param) {
        return request(param, '/goldenhome/ghs/wxmini/repairs/express', 'post')
    },
    // 查询物流公司
    getCompanyList(param) {
        return request(param, '/goldenhome/ghs/wxmini/express/company/list', 'get')
    },
    //查看物流
    getLogistic(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/express/package/list', 'get')
    },
    //微页面详情
    getMiniDetail(param) {
        return request(param, '/goldenhome/decoration/wxmini/page/ms/query', 'get')
    },
    // 微页面太阳码参数
    getMiniScene(param) {
        return request(param, '/goldenhome/decoration/wxmin/scene/query', 'post')
    },
    //产看商品规格
    goodsSpecQuery(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/spec/query', 'get')
    },
    /** 用户行为统计 */
    analysisAdd(param) {
        return request(param, '/goldenhome/ghs/wxmini/analysis/onlinerecord/add', 'post')
    },
    analysisUpdate(param) {
        return request(param, '/goldenhome/ghs/wxmini/analysis/onlinerecord/update', 'post')
    },
    analysisDetailAdd(param) {
        return request(param, '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/add', 'post')
    },
    analysisDetailUpdate(param) {
        return request(param, '/goldenhome/ghs/wxmini/analysis/onlinerecorddetails/update', 'post')
    },
    /** 图库 */
    // 卖点
    sellPointList(param) {
        return request(param, '/goldenhome/ghs/wxmini/sellpoint/list', 'get')
    },
    // 新增浏览记录
    addBrowse(param) {
        return request(param, '/goldenhome/ghs/wxmini/browse/add', 'post')
    },

    /** 配置页面相关 */
    // 搜索 热词配置
    getHotWord(param) {
        return request(param, '/goldenhome/decoration/wxmini/hot/word/query', 'get')
    },
    // 个人信息微页面
    getMicroInfo(param) {
        return request(param, '/goldenhome/decoration/wxmini/personal/center/query', 'get')
    },
    //个人信息广告位
    getMicroPoster(param) {
        return request(param, '/goldenhome/decoration/wxmini/ad/space/query', 'get')
    },
    // 我的方案、我的优惠券的信息
    getProInfo(param) {
        return request(param, '/goldenhome/decoration/wxmini/menu/config/query', 'get')
    },
    // 分类微页面
    getCatList(param) {
        return request(param, '/goldenhome/decoration/wxmini/custom/style/query', 'get')
    },
    // 底部导航
    navbarList(param) {
        return request(param, '/goldenhome/decoration/wxmini/store/navigation/query', 'get')
    },
    // 根据用户id查询会员信息
    getMemberInfo(param) {
        return request(param, '/goldenhome/member/wxmini/member/grade/info', 'get')
    },
    // 根据用户手机号查询会员信息, 悬浮组件登录处是哟个
    getMemberMemberInfo(param) {
        return request(param, '/goldenhome/member/wxmini/member/member/info', 'get')
    },
    // 会员中心查询
    getMemberCenter(param) {
        return request(param, '/goldenhome/decoration/wxmini/member/center/query', 'get')
    },
    /** 积分 */
    // 根据用户id查询会员信息 （用户Id不是必须的 token信息里面应当有）
    getIntegrateInfo(param) {
        return request(param, '/goldenhome/member/wxmini/integrate/info', 'get')
    },
    // 根据用户id查询赚积分攻略
    integrateEarn(param) {
        return request(param, '/goldenhome/member/wxmini/integrate/earn', 'get')
    },
    /** 拼团 */
    //创建微信预支付
    payGroup(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/pay/group', 'POST', true)
    },
    // 付尾款
    payGroupEnd(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/pay/group/end', 'POST', true)
    },
    //发起拼团
    groupCreate(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/group/create', 'POST')
    },
    //参与拼团
    groupJoin(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/group/join', 'POST')
    },
    //查看拼团详情
    getGroupMember(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/group/member/query', 'get')
    },
    // 第二件半价和买一赠一 详情
    getHalfGoodsInfo(param) {
        return request(param, '/goldenhome/seckill/wxmini/activity/goods/info', 'get')
    },
    //我的拼团列表
    myGroupList(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/user/central/group', 'GET')
    },
    // 我的拼团取消订单
    groupCancelOrder(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/group/order/cancel', 'POST')
    },
    // 我的拼团删除订单
    groupDeleteOrder(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/group/order/delete', 'POST')
    },
    //我的拼团详情
    groupDetail(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/group/member/info', 'GET')
    },
    // 动态查询拼团列表信息
    groupActivity(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/activity/queryByIds', 'GET')
    },
    // 分享商品获取积分
    shareGoods(param) {
        return request(param, '/goldenhome/ghs/wxmini/myplan/share/goods', 'GET')
    },
    // 规则算费
    getRulePrice(param) {
        return request(param, '/goldenhome/ghgroup/wxmini/group/order/getPrice', 'post')
    },
    // 添加登录积分
    addIntegrate(param) {
        return request(param, '/goldenhome/ghs/wxmini/auth/addintegrate', 'post')
    },
    // 获取权益卡的列表
    getCardList(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/list', 'GET')
    },
    // 领取权益卡
    receiveCard(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/receive', 'post')
    },
    // 兑换权益卡
    exchangeCard(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/exchange', 'post')
    },
    // 获取权益卡详情
    cardDetail(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/info', 'GET')
    },
    // 购买权益卡下订单
    cardOrder(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/create/order', 'POST')
    },
    //权益卡购买记录
    cardBuyHistory(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/purchase/record', 'get')
    },
    //权益卡数量
    cardNum(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/valid/count', 'get')
    },
    // 会员赠送商品
    zeroMeberCreatedOrder(param) {
        return request(param, '/goldenhome/member/wxmini/member/card/receive/giving/goods', 'POST')
    },
    /** 付费会员 */
    // 获取店铺的会员信息
    getPayMemberInfo(param) {
        return request(param, '/goldenhome/member/wxmini/member/card/info', 'get')
    },
    // 秒杀查询
    seckillGoodsInfo(param) {
        return request(param, '/goldenhome/seckill/wxmini/seckill/goods/info', 'get')
    },
    // 购买付费会员下订单
    memberOrder(param) {
        return request(param, '/goldenhome/member/wxmini/member/card/create/order', 'POST')
    },
    // 会员空间
    memberBuySpace(param) {
        return request(param, '/goldenhome/member/wxmini/member/card/member/space', 'GET')
    },
    // 赠送商品下单
    givingGoodsOrder(param) {
        return request(param, '/goldenhome/member/wxmini/member/card/receive/giving/goods', 'POST')
    },
    // 查看优惠券、折扣商品分页
    getDiscountLists(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/benefits/page', 'GET')
    },
    // 秒杀创建订单
    seckillCreatedOrder(param) {
        return request(param, '/goldenhome/seckill/wxmini/goods/spike', 'post')
    },
    // 0元创建订单
    zeroCreatedOrder(param) {
        return request(param, '/goldenhome/member/wxmini/benefits/card/receive/giving/goods', 'post')
    },
    // 限时创建订单
    discountCreatedOrder(param) {
        return request(param, '/goldenhome/seckill/wxmini/discount/order/add', 'post')
    },
    // 秒杀查询
    discountGoodsInfo(param) {
        return request(param, '/goldenhome/seckill/wxmini/discount/goods/info', 'get')
    },
    //秒杀列表
    getSecKillList(param) {
        return request(param, '/goldenhome/seckill/wxmini/seckill/goods/list', 'POST')
    },
    //折扣列表
    getDiscountList(param) {
        return request(param, '/goldenhome/seckill/wxmini/discount/goods/list', 'POST')
    },
    // 秒杀限时折扣算费
    activityOrderPrice(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/activity/price', 'POST')
    },
    // 买一赠一第二件半价算费
    halfOrderPrice(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/get/fee', 'POST')
    },
    // 买一赠一第二件创建订单
    halfOrderCreat(param) {
        return request(param, '/goldenhome/ghs/wxmini/order/initialize', 'POST')
    },
    // 查询文章分页接口
    articlesPage(param) {
        return request(param, '/goldenhome/decoration/wxmini/articles/page', 'get')
    },
    //限时秒杀列表
    getLimitSecList(param) {
        return request(param, '/goldenhome/seckill/wxmini/seckill/goods/timeList', 'POST')

    },
    //限时秒杀列表
    getLimitDisList(param) {
        return request(param, '/goldenhome/seckill/wxmini/discount/goods/timeList', 'POST')
    },
    // 报名提交
    customerAddUser(param) {
        return request(param, '/goldenhome/ghs/wxmini/customer/enrollrecord/addUser', 'POST')
    },
    // 分享配置信息查询
    shareQuery(param) {
        return request(param, '/goldenhome/decoration/wxmini/share/setting/query', 'GET')
    },
    /** 抽奖相关 */
    // 根据id查询抽奖活动详情
    lotteryQuery(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/query', 'GET')
    },
    // 广播中奖消息
    lotteryBroadcast(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/broadcast', 'GET')
    },
    // 抽奖
    lotteryBlindBox(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/blindBox', 'post')
    },
    // 查看我的奖品
    lotteryMyPrize(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/my/prize', 'GET')
    },
    // 查看我的赠品
    lotteryMyGive(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/my/givinggoods', 'GET')
    },
    // 查询抽奖机会次数
    lotteryQueryNumber(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/number/query', 'GET')
    },
    // 增加抽奖机会
    lotteryAddNumber(param, isShowLoading = false, isShowMsg) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/number/add', 'post', isShowLoading, isShowMsg)
    },
    // 现金购买抽奖机会
    lotteryBuyCash(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/number/cash/buy', 'post')
    },
    // 获取指定商品详情
    specifyGoods(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/number/specify/goods', 'get')
    },
    // 领取赠品
    receiveGive(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/receive/givinggoods', 'post')
    },
    // 根据订单id查询用户购买的商品是否增加抽奖机会
    getNumberByOrderId(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/number/order/id', 'get')
    },
    // 分销人注册
    distributionRegister(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/register', 'POST')
    },
    // 银行卡列表
    bankList(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/bank', 'GET')
    },
    // 获取国际银行短信验证码
    bankGetCode(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/getCode', 'POST')
    },
    // 个人开户提交验证
    bankVerify(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/verify', 'POST', true)
    },
    // 会员新增绑卡申请
    bankBinding(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/bank/tiedCard', 'POST')
    },
    // 查询分销人信息
    distributorQuery(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/getInfo', 'post')
    },
    // 查询分销海报二维码
    posterCode(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/ma', 'GET')
    },
    // 查询分销高返利的商品
    highRebateGoods(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/goods/page', 'GET')
    },
    // 已绑定银行信息列表
    bindBankList(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/bank/list', 'post')
    },
    // 会员新增绑卡验证
    bindBankVerify(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/bank/verify', 'POST')
    },
    // 保存scene信息
    addScene(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/addScene', 'POST')
    },
    //查询scene信息
    getScene(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/people/getScene', 'GET')
    },
    //查可提现金额
    withDrawal(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/query', 'post')
    },
    // 提现到银行卡
    debitCard(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/withdrawal', 'POST')
    },
    // 提现记录
    withdrawalRecord(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/record/page', 'post')
    },
    // 提现详情
    withdrawalDetail(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/queryWithdrawal', 'get')
    },
    // 查询返利列表
    rebateList(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/record/rebate/page', 'POST')
    },
    // 根据银行卡号查询银行信息
    binBankInfo(param) {
        return request(param, '/goldenhome/ghs/wxmin/distribution/bank/binInfo', 'get')
    },
    // 查询个人返利明细-返利金额统计
    rebateAmount(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/query/rebateAmount', 'post')
    },
    // 提现详情
    withdrawDetail(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/record/query/withdrawRecord', 'post')
    },
    // 查询返利详情
    getRebateInfo(param) {
        return request(param, '/goldenhome/ghs/wxmini/withdrawal/record/query/rebateInfo', 'post')
    },
    /** 直播 */
    // 根据直播间房间list查询房间列表
    queryRoomByIds(param) {
        return request(param, '/goldenhome/gh/live/wxmini/room/modelQueryRoomByIds', 'POST')
    },
    // 分享直播添加
    shareLiveAdd(param) {
        return request(param, '/goldenhome/gh/live/wxmini/share/add', 'POST')
    },
    //  商品浏览量增加接口
    liveViewTotalUp(param) {
        return request(param, '/goldenhome/gh/live/wxmini/product/viewTotalUp', 'get')
    },
    // 获取用户的弹窗信息
    memberPopup(param) {
        return request(param, '/goldenhome/member/wxmini/member/popup/window', 'get')
    },
    // 积分商品和优惠券反查接口
    goodsAndCouponByIds(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/queryGoodsAndCouponByIds', 'post')
    },

    // 积分兑换优惠券
    redeemExchange(param) {
        return request(param, '/goldenhome/ghs/wxmini/coupon/redeem-exchange', 'post')
    },
    /* 换货 */
    // 申请换货
    applySalesReturn(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/submit', 'post')
    },
    // 换货申请查看
    seeSalesReturn(param, isLoading) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/query', 'get', isLoading)
    },
    // 换货申请修改
    updateSalesReturn(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/update', 'post', true)
    },
    // 退货
    salesReturn(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/return', 'post')
    },
    // 确认退货
    confirmSales(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/confirm', 'get', true)
    },
    // 积分商城退换货售后订单列表
    integralAfterSales(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/page', 'GET')
    },
    // 积分商城退换货删除订单接口
    deleteIntegralAfterSales(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/hide', 'GET')
    },
    // 删除售后订单 /wxmini/swap/order/sales/hide
    delSalesOrder(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/sales/hide', 'get')
    },
    // 撤销换货申请
    repealSalesOrder(param) {
        return request(param, '/goldenhome/gh/integral/mall/wxmini/swap/order/audit/repeal', 'get')
    },
    // 退货物流信息查询
    getIntegralLogistics(param) {
        return request(param, '/goldenhome/ghs/wxmini/my/express/package/integral/list', 'get')
    },
    /** 发票 */
    // 抬头添加
    addInvoiceHead(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/head/add', 'post', true)
    },
    // 发票抬头分页
    getInvoiceHeadPage(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/head/page', 'get')
    },
    // 抬头查询
    getHeadById(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/head/id', 'get', true)
    },
    // 发票抬头修改
    invoiceHeadUpdate(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/head/update', 'get')
    },
    // 发票抬头历史
    orderHistoryPage(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/page', 'get')
    },
    // 获取开票详细信息
    invoiceDetail(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/detail', 'get')
    },
    // 发票抬头修改
    invoiceUpdate(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/head/update', 'post')
    },
    // 企业发票抬头模糊查询
    fuzzyQuery(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/head/fuzzy/query', 'get')
    },
    // 获取企业税号
    headNameAndCode(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/head/nameAndCode', 'get')
    },
    // 待开票列表
    makeOutInvoice(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/remain/list', 'get')
    },
    // 订单开发票
    invoiceIssue(param) {
        return request(param, '/goldenhome/invoice/wxmini/invoice/issue', 'POST')
    },
    /** 插码 */
    // 新增数据统计用户信息记录
    initPlugInCode(param) {
        return request(param, '/goldenhome/data/statistics/web/wxmini/init/userstatustics/add', 'post')
    },
    // 插码事件统计
    eventPlugInCode(param) {
        return request(param, '/goldenhome/data/statistics/web/wxmini/browsing/datastatistics/add', 'post')
    },
    // 购物车下单
    cardCreatOrder(param) {
        return request(param, '/goldenhome/ghs/wxmini/car/order/add', 'post')
    },
    // 购物车算费
    carOrderPrice(param) {
        return request(param, '/goldenhome/ghs/wxmini/car/order/get/price', 'post')
    },
    /** 赠品相关 */
    // 上传凭证
    uploadCertificate(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/upload/certificate', 'post')
    },
    // 赠品详情
    giftInfo(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/givinggoods/info', 'GET')
    },
    // 登入获取积分
    getMemberBenefitsPointsRule(param) {
        return request(param, '/goldenhome/ghs/wxmini/auth/getMemberBenefitsPointsRule', 'GET')
    },
    // 商品、优惠券绑定小程序用户
    lotteryBand(param) {
        return request(param, '/goldenhome/gh/lottery/wxmini/lottery/band', 'post')
    },
    // 根据商品id获取商品类目参数信息
    getGoodsCategoryInfo(param) {
        return request(param, '/goldenhome/ghs/wxmini/goods/getGoodsCategoryInfo', 'get')
    },
    // 获取商品页详情
    getGoodsJson(param) {
        return request(param, '/goldenhome/decoration/wxmini/goods/page/id', 'get')
    }
}
