<template>
  <view>
    <u-navbar class="location-class" :border-bottom="false" title="填写订单" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
    <!--  门店自提  -->
    <view class="u-skeleton">

      <!--  我的地址  -->
      <view v-if="['433733032805924864','461887105476845568'].includes(shopId)" @click="deliveryShow = true" class="delivery-person">
          <view class="u-flex">
            <view class="name">
              提货人
            </view>
            <view class="concat">
              {{fixedDelivery.nickName?fixedDelivery.nickName:''}} {{fixedDelivery.phoneNumber?fixedDelivery.phoneNumber:''}}
            </view>
          </view>
          <view class="iconfont icon-arrow"></view>
      </view>
      <block>
        <view class="store-address-line"></view>
        <view class="pick-store u-flex u-row-between">
          <view class="pick-store-way-title">配送方式</view>
                <view class="u-flex" @click="showMoreArea">
                    <view v-if="addressType.length" class="pick-store-way">{{selectArea.label}}</view>
                    <text v-if="addressType.length>1" class=" iconfont icon-arrow"></text>
                </view>
        </view>
        <view class="store-address-line"></view>
      </block>
      <view class="address-card u-flex u-skeleton-rect" @click="selAddress">

        <view class="card-left" v-if="getDefaultAddress">
          {{addressCut}}
          <view class="left-top">
            <text class="left-user-name">{{ getDefaultAddress.userName || getDefaultAddress.contactName }}</text>
            <text class="left-user-phone">{{ getDefaultAddress.userPhone || getDefaultAddress.phone }}</text>
          </view>

          <view class="left-bottom">
            <text class="address-default" v-if="getDefaultAddress.defaultAddress && selectArea.value=='1'">默认</text>
            <!-- 自提 和定点配送 -->
            <text v-if="['2','3'].includes(selectArea.value)">{{ getDefaultAddress.fullAddress }}</text>
            <!-- 快递 -->
            <text v-if="selectArea.value=='1'">
              {{ `${getDefaultAddress.provinceName} ${getDefaultAddress.cityName} ${getDefaultAddress.districtName} ${getDefaultAddress.detailAddress}` }}
            </text>

          </view>
        </view>
        <view class="noAddress u-skeleton-rect" v-else>
          <view class="noAddress-top">暂未获取到收货地址</view>
          <view class="noAddress-bottom">请新建收货地址</view>
        </view>
        <text v-if="shopAddress.length>1" class="card-right iconfont icon-arrow"></text>
      </view>

      <!--  购买商品列表  -->
      <view v-if="groupGoods.length" style="margin-top: 20rpx">
        <view v-for="(val,index) in groupGoods" :key="index">
          <view v-if="val.goodsSupplierName" class="u-flex supplier">
            <image class="shop-img" src="~@/static/image/app_icon_shop.png" />
            <view class="supplier-name">{{val.goodsSupplierName}}</view>
          </view>
          <view class="g-goods u-flex " v-for="(item) in val.info" :key="item.id">
            <view class="goods-img-box u-skeleton-circle">
              <image :src="item.goodsImg"></image>
            </view>
            <view class="goods-detail u-flex ">
              <view class="top-box">
                <view class="u-flex u-skeleton-rect">
                  <text class="goods-name u-line-1">{{ item.goodsName ? item.goodsName : '' }}</text>
                </view>
                <view class="goods-spec u-flex u-skeleton-rect">
                  <text class="goods-spec-title">{{ item.goodsSpecValue ? '商品规格：' : '统一规格' }}</text>
                  <text class="goods-spec-details u-line-1">{{ item.goodsSpecValue ? item.goodsSpecValue : '' }}</text>
              </view>
              <view class="bottom-box u-flex">
                <view class="u-flex u-skeleton-rect" v-if="activeObj.activeType == 'ZP'">
                  <text class="goods-money">¥0.00</text>
                </view>
                <block v-else>
                  <!-- 积分显示 -->
                  <view class="u-flex u-skeleton-rect" v-if="[2,3].includes(goodsInfo.paymentWay)">
                    <text class="goods-money-integral" style="color: #D1B085;">{{getIntegralPrice}}</text>
                    <text class="goods-money-integral">{{goodsInfo.integralPrice+'积分'}}</text>
                  </view>
                   <!-- 会员价 -->
                  <view class="u-flex u-skeleton-rect"
                        v-else-if=" item.membersPrice && item.membersPrice != '0' && item.activityType<=0 && realPrice && realPrice.supportMemberPrice">
                    <text class="goods-money">¥{{ switchMoney(item.membersPrice) }}</text>
                    <image src="/pagesA/static/image/active/vip_icon.png" class="vip-icon"></image>
                  </view>
                  <view class="u-flex u-skeleton-rect" v-else>
                    <text class="goods-money">¥{{ switchMoney(item.unitPrice) }}</text>
                  </view>
                  <u-number-box
                      bg-color="#ECECEC"
                      :long-press="false"
                      min="1"
                      input-width="50"
                      :value="item.goodsAmount"
                      :index="item.id"
                      @change="edit"
                      :max="setMaxNum(item)"
                  >
                  </u-number-box>
                </block>
              </view>
              <view v-if="item.isAddressShow" class="is-show-address">
                当前商品暂不支持此地址配送
              </view>
            </view>
          </view>
        </view>

      </view>

      <!-- 计算详情  -->
      <view class="item-box" v-if="realPrice">
        <view class="item-card u-flex u-skeleton-rect">
          <text>商品金额</text>
          <view>
            <text v-if="getGoodsPrice" :class="{'active-color':feeType == 'JF'}">￥{{ getGoodsPrice }}</text>
            <text v-if="feeType == 'JF'">{{ goodsInfo.integralPrice * goodsInfo.goodsAmount }}积分</text>
          </view>
        </view>
        <view class="item-card u-flex u-skeleton-rect" v-if="feeType=='GZPT'">
          <text>预付款</text>
          <text>￥{{ switchMoney(realPrice.preSumPrice) || '--' }}</text>
        </view>
        <view v-if="feeType!='EZ'" class="item-card u-flex u-skeleton-rect">
          <text>运费</text>
          <text>￥{{getFreight}}{{ switchMoney(realPrice.frightPrice) || '--'}}</text>
        </view>
        <view class="item-card u-flex u-skeleton-rect" v-if="isShowContent">
          <text>优惠券</text>
          <view @click="useCoupons" class="coupon-right u-flex">
            <text style="font-weight: 600" v-if="couponId">-{{ switchMoney(realPrice.discountPrice) }}</text>
            <text style="font-weight: 600" v-else>{{ couponCount ? couponTitle : '不可用' }}</text>
            <text class="iconfont icon-arrow"></text>
          </view>
        </view>
		<!-- 权益卡零元购 -->
        <view class="item-card u-flex u-skeleton-rect" v-if="realPrice.priceDiscount>0 || feeType =='ZP'">
          <text>折扣</text>
          <text class="discount" style="font-weight: 600">-￥{{ realPrice.priceDiscount>0?switchMoney(realPrice.priceDiscount):getGoodsPrice }}</text>
        </view>
        <!-- 买一赠一、第二件半价优惠价格 -->
        <view class="item-card u-flex u-skeleton-rect" v-if="realPrice.activityPrice>0">
          <text>优惠</text>
          <text class="discount" style="font-weight: 600">-￥{{ switchMoney(realPrice.activityPrice) }}</text>
        </view>
        <!-- 零元赠送商品 -->
        <view class="item-card u-flex u-skeleton-rect" v-if="!['GZPT'].includes(feeType)">
          <text></text>
          <view class="item-card-total">
            <text class="u-m-r-10">合计:</text>
            <!-- 赠品只展示运费 -->
            <text v-if="['ZP','EZ'].includes(feeType)">￥{{ switchMoney(realPrice.frightPrice || 0) || 0 }}</text>
            <view style="display: inline-block;" v-else>
              <text v-if="getOrderMoney">￥{{getOrderMoney}}</text>
              <block v-if="['JF'].includes(feeType)">{{goodsInfo.integralPrice * goodsInfo.goodsAmount}}积分</block>
            </view>
          </view>
        </view>
      </view>
      <!--   发票   -->
      <view class="point u-skeleton-rect" @click="selInvoice" v-if="['PT'].includes(feeType) && realPrice.orderActualPrice>0 && goodsInfo.invoiceStatus == '1'">
        <view class="integral-left">开具发票</view>
        <view class="integral-right">
          <text class="right-text">{{invoiceInfo?invoiceInfo.buyerName:'填写发票信息'}}</text>
          <text class="iconfont icon-arrow"></text>
        </view>
      </view>
      <!--积分 -->
      <view v-if="realPrice.integralNum>0 && !isCart" class="point u-skeleton-rect">
        <view class="integral-left">积分</view>
        <view class="integral-right">
          <view class="text">{{ realPrice.integralNum }}积分可用</view>
          <image @click="changeIntegral('1')" v-if="isIntegral == 1" src="../static/image/icon_checkbox_default.png"></image>
          <image @click="changeIntegral('0')" v-if="isIntegral == 0" src="../static/image/icon_refund_successful_3x.png"></image>
        </view>
      </view>
      <!--  赠品规则  -->
      <view class="order-rule" v-if="activeObj.activeType == 'ZP' && activeObj.givingGoodsRemark">
        <view class=" u-flex" style="justify-content: space-between" @click="ruleShow=!ruleShow">
          <text class="rule-title">赠品规则</text>
          <text class="iconfont icon-arrow" :class="{'rule-active':ruleShow}"></text>
        </view>
        <view class="rule-detail" v-show="ruleShow">
          {{ activeObj.givingGoodsRemark }}
        </view>
      </view>
      <!-- 积分倍率和返积分的类型 -->
      <view v-if="merberData &&merberData.id && realPrice && realPrice.orderPrice" class="point-rate">
          <view class="point-left">
            <image :src="merberData.gradePicture"></image>
            <view class="point-name">
              {{merberData.gradeName}}{{memberType(realPrice)}}
            </view>
          </view>
          <view class="point-right">
             {{realPrice.integralRatio}}倍积分
          </view>
      </view>
      <!--  底部btn  -->
      <view class="bottom-btn-box-height"></view>
      <view class="bottom-btn-box u-flex ">
        <!--  积分展示    -->

        <view class="u-abso" v-if="['JF'].includes(feeType)" style="top:0;transform: translateY( -100%) translateX(-15px)">
          <integral-inform></integral-inform>
        </view>
        <text v-if="['ZP','EZ'].includes(feeType)" class="total-money u-skeleton-rect">
          <text>￥{{ switchMoney(realPrice.frightPrice || 0)}}</text>
        </text>
        <view v-else class="total-money u-skeleton-rect">
          <text class="red-text" v-if="['GZPT'].includes(feeType)">预付款：￥{{ switchMoney(realPrice.preSumPrice)}}</text>
          <text v-else-if="getOrderMoney">￥{{getOrderMoney}}</text>
          <block v-if="['JF'].includes(feeType)">{{ goodsInfo.integralPrice * goodsInfo.goodsAmount }}积分</block>
        </view>
        <view :class="['go-pay','u-skeleton-rect',{'pay-disable':!(getDefaultAddress&&getDefaultAddress.id)||isAddressClick}]" @click="noMultipleClicks(clickCreateOrder)" v-if="isClick ">
          <view class="">提交订单</view>
          <view v-if="realPrice && realPrice.returnIntegralNum>0 && feeType != 'ZP' " class="pay-point">
            确认收货可返{{ realPrice.returnIntegralNum}}积分
          </view>
        </view>
        <text class="go-pay-no u-skeleton-rect" v-else>创建中...</text>
      </view>
      <!--  优惠券弹窗  -->
      <u-popup
          v-model="show"
          closeable
          mode="bottom"
          height="70%"
          border-radius="30"
      >
        <view class="popup-content-coupon">
          <view class="coupon-top">
            <view class="popup-coupon-title">优惠券</view>
            <view class="popup-coupon-tab u-flex">
              <!-- isUseCoupon=true
               isUseCoupon=false -->
              <text :class="{'active':isUseCoupon}" @click="changeCoupon('1')">可用优惠券</text>
              <text :class="{'active':!isUseCoupon}" @click="changeCoupon('2')">不可用优惠券</text>
            </view>
          </view>
          <view class="coupon-top-height"></view>
          <view class="popup-coupon-box">
            <!-- v-model='selCoupon' -->
            <u-checkbox-group @change="checkboxGroupEvent">
              <view @click="radioChange(item,index)" class="popup-coupon-card u-flex " v-for="(item,index) in couponList"
                    :key="index">
                <view v-if="[2,4].includes(item.couponType)" class="coupon-card-money">
                  <view>{{ item.discountRatio }}折券</view>
                  <view v-if="item.mostDiscount!=-1" class="max-discount">
                    最多优惠{{ item.mostDiscount }}
                  </view>
                </view>
                <view v-else class="coupon-card-money">
                  <text>￥</text>
                  {{ item.couponAmount }}
                </view>
                <view class="coupon-card-describe u-flex">
                  <view class="coupon-describe-title u-line-1">{{strSplit(item.couponName,9)}}</view>
                  <view class="valid-time">{{getCouponTitle(item)}}</view>
                  <view class="coupon-effect" v-if="item.couponFullMoney !=-1">满{{ item.couponFullMoney }}可用</view>
                  <view class="coupon-effect" v-else>无门槛</view>
                </view>
                <view v-if="isUseCoupon">
                  <u-checkbox :value="item.isActive" :name="index" shape="circle" active-color="#E8B759"></u-checkbox>
                </view>
              </view>
            </u-checkbox-group>
          </view>
          <view class="btn-height" v-if="isUseCoupon"></view>
          <view class="bottom-btn u-flex" v-if="isUseCoupon">
            <text class="confirm" @click="confirm">确定</text>
          </view>
        </view>
      </u-popup>
      <u-select mode="single-column" confirm-color="#D1AB88" @confirm="changeArea" v-model="addressShow" :list="addressType"
      default-value="[0]"></u-select>

      <!--引用组件-->
      <u-skeleton :loading="loading" :animation="true" bgColor="#F5F5F5"></u-skeleton>
    </view>

    <u-popup v-model="deliveryShow " mode="center ">
        <view class="warp" @click="deliveryShow = false">
            <view class="rect" @tap.stop>
                <view class="title"> 修改提货人信息</view>
                <view class="u-flex u-p-l-30">
                    <view class="delivery-name">提货人</view>
                    <view class="input-wrap">
                        <input type="text" v-model="deliveryName" placeholder-class="delivery-placeholder" placeholder="请输入姓名" />
                    </view>
                </view>
            <view class="u-m-t-20 u-p-l-30 u-flex">
                <view class="delivery-name">手机号</view>
                <view class="input-wrap">
                    <input type="text" @blur="phoneChange" maxlength="11" v-model="deliveryPhone" placeholder-class="delivery-placeholder" placeholder="请输入手机号" />
                </view>
            </view>
        <view class="bottom u-flex">
            <view @click="deliveryCancle" class="bottom-left">
            取消
            </view>
            <view @click="deliveryConfirm" class=" bottom-left bottom-right">
            确认
            </view>
        </view>
            </view>
        </view>
    </u-popup>
  </view>
</view>
</template>

<script>
import { mapMutations , mapState} from 'vuex'
import IntegralInform from "../components/integralInform";
export default {
    components: {IntegralInform},
    data() {
        return {
            title: '填写订单',
            goodsInfo:{},
            show: false,
            switchValue: false,
            freight: 0,//运费
            couponList: [],
            goods: [],
            selCoupon: '123s',
            couponCount: '',
            couponId: '',
            isClick: true,
            getDefaultAddress: {},
            shopAddress: [],//多个商品查询共同自提地址
            integrateInfo: null,//积分信息
            sumReturnPoint: 0,//购买商品返回的总积分
            realPrice: {}, //订单实际价格的集合
            groupData: {},
            liftId: [], //多个商品id集合
            switchDisabled: false,//自提禁止切换
            liftInfo: [],//自提地址信息
            isIntegral: 1,//是否使用积分（0.是 1.否）
            activeObj: {},// 活动信息
            cardId: '',
            cardCouponGoodsIdList: null,
            cardData: {},
            zeroOrderId: "",//购买权益卡的订单id
            loading: true, // 是否显示骨架屏组件
            ruleShow: false, // 是否显示赠品规则
            shareParam:{},
	        couponTitle:'',//优惠券结算是的名称
            isUseCoupon: true,       // 是否可使用优惠券
            // 改版属性
            isShowContent:false,      // 是否使用优惠券
            isCart: false,            // 是否是购物车页面过来的
            // GWC（购物车）PT（普通）ZK（折扣）MS（秒杀）（买一赠一）（第二件半价）（积分+现金）（现金+固定积分）（纯积分）   // QY（权益）ZP（赠品）（拼团）（规则拼团）
            // PT (普通) ZP（赠品） GZPT（规则拼团）PTPT（普通拼团）JF（积分） EZ(老客户兑换)
            feeType:'PT',
            carUseCouponList:[],    // 购物可使用优惠券列表
            allCouponList:[],
            addressType:[],//下拉框选择的地址
            deliveryMode:[],//后台设定的收货地址类型 ['1','2','3'] 1 快递 2 自提 3 定点
            addressShow:false,
            selectArea:{},//选择的收货地址类型{ label:'门店自提',value:'2'}
            groupGoods:[],
            deliveryShow:false,
            fixedDelivery:{
                nickName:'',
                phoneNumber:''
            }, //定点配送提货人信息
            deliveryPhone:'',//提货人弹窗的电话
            deliveryName:'',//提货人弹窗的姓名
            shopId:'',
            bottomHeght:0,
            merberData:{}, //,
            isAddressClick:false,
            orderFromType:1
        }
    },
    onReady(){
        const query = uni.createSelectorQuery().in(this);
        query.select('.bottom-btn-box').boundingClientRect(data => {
            console.log('data,0',data);
            this.bottomHeght = data.height
	        }).exec();
    },
    onLoad(option){
        this.isCart = !!option?.cart
        this.goods =JSON.parse((option.goodsList || 'null')) || []
        console.log('this.goods: ', this.goods)
        let commonData = this.groupingMethod( this.goods,'goodsSupplierName')
        this.groupGoods = JSON.parse(JSON.stringify(commonData))
        console.log('this.groupGoods: ', this.groupGoods);
        console.log('this.goods: ', this.goods);
        if(this.goods.length){
            this.handleAddress()
        }
        // 购物车下单
        if(this.isCart){
            let list = this.goods.filter(item=>{
                if(!item.activityId && item.activityType<=0 && item.paymentWay<=0){
                    return true
                }
                return false
            })
            if(list.length>0){
                this.getCouponList()
                this.carUseCouponList = list
                return
            }

        }
        const goodsObj = this.goods[0] || {}
        this.goodsInfo = goodsObj
        // 全权益卡
        this.cardData = option.cardData ? JSON.parse(option.cardData) : null
        this.cardCouponGoodsIdList = option.cardCouponGoodsIdList ? JSON.parse((option.cardCouponGoodsIdList)) : null
        if(this.cardData){
            this.feeType = "ZP"
            return
        }

        // 用户分享信息
        this.shareParam = this.goods[0]?.shareParam || {}
        // 拼团
        if (goodsObj?.groupDataObj?.type) {
            const type = goodsObj.groupDataObj?.goodsType
            this.groupData = this.goods[0].groupDataObj || {}
            if (type == 1) {
                this.feeType = "PTPT"
            }
            if (type == 2) {
                this.feeType = "GZPT"
            }
            // if(this.groupData?.discountStatus ==1){
            //   this.getCouponList()
            // }
            return
        }
        // 活动(厨拼图和积分商城的所有活动)
        if (goodsObj?.activeObj?.activeType) {
            this.activeObj = goodsObj?.activeObj
            if (goodsObj?.activeObj?.activeType == 'ZP') {
                this.feeType = 'ZP'
            }
            // if(goodsObj?.activeObj?.enableCoupon ==1){
            //   this.getCouponList()
            // }
           if (goodsObj?.activeObj?.activeType == 'EZ') {
                this.feeType = 'EZ'
            }
            return
        }
        let paymentWay = goodsObj?.paymentWay || 0
        if([2,3].includes(paymentWay)){
            this.feeType = 'JF'
            return
        }
        if([0].includes(paymentWay) && goodsObj.activityType==0){
            this.getCouponList()
        }

    },
    onShow() {
        this.getPoint()
        // 是单个商品的
        this.liftId = []
        this.fixedDelivery = JSON.parse(JSON.stringify(this.$globleData.userData))
        this.goods.forEach(item => {
            this.liftId.push(item.goodsId)
        })
        this.isClick = true
        this.getLiftAddress()
        // this.fetchCouponList()
        this.getMemberLevel()
        console.log('this9999999999',this.getDefaultAddress);

    },

    onUnload() {
        this.$store.commit('setSelShopAddress', null)
        this.$store.commit('setSelAddress', null)
        this.setInvoiceInfo(null)
    },
    watch:{

    },
    computed: {
        memberType(){
          return (val)=>{
            // 会员权益类型1:开卡礼;2:赚积分;3:购物返积分;4:积分兑换;5:家居顾问;6:生日礼包;7:升级礼包;8:会员日,9:超省会员价;10:自定义权益
            if(val?.benefitType==1){
              return '(开卡礼)'
            }
            if(val?.benefitType==2){
              return '(赚积分)'
            }
            if(val?.benefitType==3){
              return '(购物返积分)'
            }
            if(val?.benefitType==4){
              return '(积分兑换)'
            }
            if(val?.benefitType==5){
              return '(家居顾问)'
            }

            if(val?.benefitType==6){
              return '(生日礼包)'
            }

            if(val?.benefitType==7){
              return '升级礼包'
            }

            if(val?.benefitType==8){
              return '(会员日)'
            }

            if(val?.benefitType==9){
              return '超省会员价'
            }

            if(val?.benefitType==10){
              return '(自定义权益)'
            }
            return ''
          }
        },
        ...mapState(['invoiceInfo']),
        // 是否可以开发票 只有普通订单和订单金额不为零的才开
        // 获取商品价格
        getGoodsPrice() {
            if (['ZP', 'GZPT', 'PTPT'].includes(this.feeType)) {
                if (this.goodsInfo) {
                    return this.switchMoney(this.goodsInfo.unitPrice * this.goodsInfo.goodsAmount)
                }
                return ''
            }
            if(['JF'].includes(this.feeType)){
                if(this.realPrice?.orderPrice>0){
                    return this.switchMoney(this.realPrice?.orderPrice)+'+'
                }
                return ''
            }
            if(['EZ'].includes(this.feeType)){
              return this.switchMoney(0)
            }
            return this.switchMoney(this.realPrice?.orderPrice)
        },
        // 获取订单金额
        getOrderMoney(){
            if(['JF'].includes(this.feeType)){
                if(this.realPrice?.orderActualPrice>0){
                    return this.switchMoney(this.realPrice?.orderActualPrice)+'+'
                }
                return ''
            }
            return this.switchMoney(this.realPrice?.orderActualPrice)
        },
        // 计步器是否禁用
        setMaxNum() {
            return ((item) => {
                if (['ZP', 'GZPT','EZ'].includes(this.feeType)) {
                    return 1
                }
                if (['PTPT'].includes(this.feeType)) {
                    const obj = this.groupData || {}
                    if (obj.limitBuyStatus == 1) {
                        if (obj?.limitBuyOrderNum) {
                            return obj?.limitBuyOrderNum
                        }
                        if (obj.limitBuyCountNum) {
                            return obj.limitBuyCountNum
                        }

                    }
                    return 100000
                }
                if(item.enableLimit == 1){
                    let limitCount = item?.limitCount || 1;
                    let num = parseInt(item?.goodsBuyCount) || 0
                    return (limitCount - num)
                }
                if(item?.goodsStock == 0 || item?.goodsStock > 0){
                    return item.goodsStock
                }
                return 9999
            })

        },
        addressCut() {
            if (this.selectArea?.value=='2' || this.selectArea?.value=='3') { //自提
                if (this.$store.state.selShopAddress) {
                    this.getDefaultAddress = this.$store.state.selShopAddress
                } else {
                    this.getDefaultAddress = this.shopAddress.length?this.shopAddress[0]:null
                }
            } else if(this.selectArea?.value=='1') { //快递
                if (this.$store.state.selAddress) {
                    this.getDefaultAddress = this.$store.state.selAddress
                } else {
                    this.getDefaultAddress = uni.getStorageSync('default-address') ? uni.getStorageSync('default-address') : null
                }
            }
            return ''
        },
        goodsPrice() {
            if(this.goodsInfo && this.goodsInfo?.paymentWay == 3){
                return ''
            }
            if([2].includes(this.goodsInfo?.paymentWay)){
                return `￥${this.switchMoney(this.goodsInfo?.unitPrice * this.goodsInfo?.goodsAmount)}+`
            }
            let sum =  this.goods.reduce((a, b) => {
                let price = b.unitPrice
                if (this.realPrice?.supportMemberPrice && b.membersPrice != '0') {
                    price = b.membersPrice || b.unitPrice
                }
                return a + (price * b.goodsAmount)
            }, 0)
            return this.switchMoney(sum || 0)
        },
        saleList() {
            if (!this.couponList) return
            return this.couponList.filter((item) => {
                return item.isActive == true
            })
        },
        salePrice() {
            if (this.saleList.length) {
                this.couponId = this.saleList[0].id
            } else {
                this.couponId = ''
		    this.couponTitle = `${this.couponCount}张可用`
            }
            return this.saleList.reduce((a, b) => {
                return Number(a) + Number(b.couponAmount)
            }, 0)
        },
        getFreight() {
            if (this.goods.length && this.getDefaultAddress?.id && this.feeType!='EZ') {
                this.calcuOrder()
            }else{
                this.loading = false
                this.realPrice.frightPrice =0
            }
            return ''
        },
        couponStatus() {
            if (this.isUseCoupon) {
                return '0'
            } else {
                return '1,2'
            }
        },
        getIntegralPrice() {
            if (this.goodsInfo?.paymentWay == 3) {
                return ''
            }
            if ([2].includes(this.goodsInfo?.paymentWay)) {
                return `￥${this.switchMoney(this.goodsInfo?.unitPrice || 0)}+`
            }
        }
    },
    methods:{
        // 提货人修改信息取消按钮弹窗
        deliveryCancle(){
            this.deliveryName =''
            this.deliveryPhone=''
            this.deliveryShow = false
        },
        // 提货人信息手机号验证
        phoneChange(e){
            console.log('shoujihao ',e);
            if(!this.$u.test.mobile(e.detail.value)){
                this.$toast('手机号格式输入有误，请重新输入')
                return
            }
        },
        // 提货人修改信息 确定弹窗
        deliveryConfirm(){
            if(!this.$u.test.mobile(this.deliveryPhone)){
                this.$toast('手机号格式输入有误，请重新输入')
                return
            }
            this.fixedDelivery.nickName = this.deliveryName?this.deliveryName:this.fixedDelivery.nickName
            this.fixedDelivery.phoneNumber = this.deliveryPhone?this.deliveryPhone:this.fixedDelivery.phoneNumber
            this.deliveryShow = false
        },
        // 自提和定点多个地址展示弹窗事件
        showMoreArea(){
            console.log('this.addressType: ', this.addressType);
            if(this.addressType?.length>1){
                this.addressShow = true

            }else{
                return
            }

        },
        // 自提、定点配送多个地址选择事件
        changeArea(e){
            this.selectArea = e[0]
            this.modalMethod()
            this.getLiftAddress()
        },
        // 处理收货地址的方式
        handleAddress(){
            this.goods.forEach(item=>{//将后台商品设置的配送方式转成数组形式['1','2','3'] 1 快递 2 自提 3 定点配送
                if(item.deliveryMode){
                    if(item.deliveryMode.indexOf(',')>-1){
                        this.deliveryMode=item.deliveryMode.split(',')
                    }else{
                        this.deliveryMode.push(item.deliveryMode)
                    }
                }
            })
            this.deliveryMode = [...new Set(this.deliveryMode)]
            this.deliveryMode.sort((a,b)=>{
                return a-b
            })
            let addressArr = [
                {
                    label:'快递邮寄',
                    value:'1'
                },
                {
                    label:'门店自提',
                    value:'2'
                },
                {
                    label:'定点配送',
                    value:'3'
                }
            ]
            addressArr.map(item=>{//将addressArr数组和配送方式的数组进行对比，将符合条件的筛选出来
                this.deliveryMode.forEach(someItem=>{
                    if(item.value==someItem){
                        this.addressType.push(item)
                    }
                })
            })
            console.log('this.addressTyp: ', this.addressType);
            // this.addressType=this.addressType.filter(item=>{//将门店自提并且后台返回自提门店地址为空的过滤出去
            //   if(item.value=='2' && this.shopAddress.length==0){
            //     return false
            //   }else{
            //      return true
            //   }

            // })
            this.selectArea = this.addressType[0]
        },
        // 商品地址配送地址不同提示的方法
        modalMethod(){
            if(this.selectArea?.value=='2'&& this.shopAddress?.length==0){
                uni.showModal({
                    title: '温馨提示',
                    content: '商品配送的地址不同，请分开进行购买',
                    showCancel: false,
                    success(){
                        uni.navigateBack()
                    }
                })
            }
        },
        ...mapMutations(['setInvoiceInfo']),
        // 请求使用优惠券
        getCouponList(){
            this.isShowContent = true
            this.$nextTick(()=>{
                this.fetchCouponList()
            })
        },
        // 跳转设置发票抬头页面
        selInvoice(){
            this.goTo(`/pagesD/invoice/addRise?type=2&invoiceInfo=${JSON.stringify(this.invoiceInfo)}`)
        },
        clickCreateOrder(){
            if(this.groupData?.type){
                this.requestSubscribeMessage()
                return
            }
            this.createOrder()
        },
        // 点击是否选中积分
        changeIntegral(val){
            if(val=='1'){
                this.isIntegral = 0
            }else{
                this.isIntegral = 1
            }
        },
        // 获取过个自提地址
        async getLiftAddress(){

            let param = {
                ids:this.liftId,
                deliveryMode:this.selectArea.value
            }
            const res = await this.$http.getLiftAddress(param)
            this.shopAddress = JSON.parse(JSON.stringify(res.dataInfo)) || []
            console.log('this.shopAddress: ', this.shopAddress);
            this.modalMethod()
        },
        // 获取积分
        async getPoint(){
            let param = {
                id: this.$globleData.userData.id
            }
            const res = await this.$http.getIntegrateInfo(param)
            this.integrateInfo = res?.dataInfo || {}
        },
      // 获取会员等级
        async getMemberLevel() {
            try {
                let res = await this.$http.getMemberInfo({ id: this.$globleData.userData.id })
                if (res.returnCode == 1000) {
                    if (res.dataInfo?.length) {
                        res.dataInfo.map((item) => {
                            if (item.currentGrade) {
                                this.merberData = item
                                console.log('this.merberData: ', this.merberData);
                            }
                        })

                    }
                } else{
                  this.merberData = {}
                }
            } catch (error) {
              this.merberData = {}
                console.log(error)
            }
        },
        selAddress() {


            if (this.selectArea?.value=='1') {//快递跳转
                this.goTo('/pagesA/shop/manageAddress')
                return
            }
            // 自提收货地址和定点配送跳转
            if(['2','3'].includes(this.selectArea?.value)){
                if(this.shopAddress.length<2){
                    return
                }
                this.goTo(`/pagesA/shop/businessAddress?shopAddress=${JSON.stringify(this.shopAddress)}&id=${this.getDefaultAddress.id}`)
            }

        },
        // 清空创建订单的购物车列表
        clearCartList(){
            if(!this.isCart){
                return
            }
            let ids = []
            for(let item of this.goods){
                ids.push(item.id)
            }
            this.$http.cartDelete(ids)
        },

        //查询优惠券列表
        async fetchCouponList() {
            let ids = JSON.parse(JSON.stringify(this.liftId))
            let goodsId
            if (ids.length > 1) {
                goodsId = ids.join(',')
            } else {
                goodsId = ids.toString()
            }
            let res = await this.$http.couponList({couponStatus: '0', goodsId})
            this.allCouponList = res.dataInfo
            this.useCoupon()
        },
        useCoupon(){
            if(this.allCouponList?.length<=0){
                return
            }
            let usableList = []       // 可用
            let noUsableList = []     // 不可用
            let list = this.carUseCouponList.length>0?this.carUseCouponList : this.goods
            let sum = list.reduce((a, b) => {
                let price = b.unitPrice
                if (this.realPrice?.supportMemberPrice && b.membersPrice != '0') {
                    price = b.membersPrice || b.unitPrice
                }
                return a + (price * b.goodsAmount)
            }, 0)
            sum = (sum/100).toFixed(2)
            this.allCouponList.map(item => {
                item.isActive = false
                // 商品价格必须大于使用优惠券的条件才显示可用的优惠券并且使用的时间必须要当前的时间在使用时间范围内
                if (item.useTimeType == 3 || sum >= item.couponFullMoney * 1 && new Date(item.useStartTime.replace(/-/g, '/')).getTime() <= new Date().getTime() && new Date(item.useEndTime?.replace(/-/g, '/')).getTime() >= new Date().getTime()) {
                    usableList.push(item)
                } else {
                    noUsableList.push(item)
                }
            })
            this.couponCount = usableList.length
            this.couponTitle = `${this.couponCount}张可用`
            if(this.isUseCoupon){
                this.couponList = usableList
                this.couponList.sort((a, b) => {
                    return (new Date(b.createDate.replace(/-/g, '/')).getTime() - new Date(a.createDate.replace(/-/g, '/')).getTime())
                })
                if (this.isShowContent && this.couponCount) {
                    this.couponList[0].isActive = true
                }
            }else{
                this.couponList = noUsableList
            }
        },
        // 普通支付
        async pay(obj){
            const {dataInfo: res} = await this.$http.payWxOrder({orderId:obj.orderId,orderPayType:7})
            this.payDispose(res,(obj.orderId || obj))
            return res
        },
        // 拼团支付
        async payGroup(obj){
            const {dataInfo: res} = await this.$http.payGroup({groupOrderId:obj.orderId})
            this.payDispose(res,obj.orderId)
        },
        // 支付回调
        payDispose(res,orderId){
            this.isClick = true
            const paySign = res?.paySign || ''
            // 如果获取失败 就直接跳转到订单待支付页面
            if(!paySign){
                // 跳转待支付页面
                this.goTo('/pagesA/mine/myOrder',false,true)
                return
            }
            let type = ['GZPT','PTPT'].includes(this.feeType)? 1:2  //1 拼团 2 普通
            // 成功 调起微信支付
            wx.requestPayment({
                timeStamp: res.timeStamp,
                nonceStr: res.nonceStr,
                package: res.packageValue,
                signType: res.signType,
                paySign: res.paySign,
                success: () => {
                    this.goTo(`/pagesA/shop/paySuccess?type=${type}&orderId=${orderId}&oderTypeId=${orderId}`, false, true)
                },
                fail: () => {
                    if (this.groupData?.type) {
                        this.goTo('/pagesB/myCollage/index', false, true)
                    } else {
                        this.goTo('/pagesA/mine/myOrder', false, true)
                    }
                }
            })
        },
        // 修改商品数量
        edit({value,index}){
            this.$u.debounce(()=>{
                this.goods.forEach(item=>{
                    if(item.id == index){
                        item.goodsAmount = value
                    }
                })
                // this.goods[index].goodsAmount = value
                this.useCoupon()
            }, 500)
        },
        //  订单算费
        async calcuOrder(){
            try {
                let liftType = 0  //0 是快递发货 1 到店自取
                if (this.selectArea?.value=='2') {

                    liftType = 1
                }
                if (this.selectArea?.value=='3') {

                    liftType = 2
                }
                const addressId = this.getDefaultAddress?.id || ''
                if(this.feeType == 'GZPT'){
                    const obj = this.goods[0]
                    // 1.自提 2 物流 3 定点自提
                    liftType = this.selectArea?.value=='1'?2:(this.selectArea?.value=='2'?1:3)
                    const param = {
                        goodsId: obj.goodsId,
                        skuId: obj.goodsSpecIds,
                        provinceCode: addressId,
                        activityId:this.groupData?.groupId,
                        liftType
                    }
                    let {dataInfo:res={}} = await this.$http.getRulePrice(param)
                    res.frightPrice = res.frieghtPrice
                    this.realPrice = res

                    this.loading = false;
                    return
                }
                if(this.feeType =='PTPT'){
                    liftType = this.selectArea?.value=='1'?2:(this.selectArea?.value=='2'?1:3)
                    const obj = this.goods[0]
                    const orderGoods = {
                        goodsId: obj.goodsId,
                        skuId: obj.goodsSpecIds ,
                        goodsNum: obj.goodsAmount,
                    }
                    let res = await this.$http.calcuOrder({
                        couponId:this.couponId,
                        liftType,
                        deliveryAddressId:addressId,
                        orderGoods:orderGoods,
                        groupActivityId:this.groupData.groupId
                    })
                    this.realPrice = res.dataInfo
                    this.loading = false;
                    return
                }
                const goodsOrderList = this.goods.map(item => {
                    return {
                        goodsId: item.goodsId,
                        skuId: item.goodsSpecIds ,
                        goodsNum: item.goodsAmount ,
                        activityType:item.activityType?item.activityType:'',
                        activityId:item.activityId
                    }
                })
                const param ={
                    couponId:this.couponId,
                    liftType,
                    deliveryAddressId:addressId,
                    goodsOrderList:goodsOrderList,
                    isIntegral:this.isIntegral,
                    enableCar: true,
                    buyerType:getApp().globalData.freshShopId.includes(this.$globleData.shopId)?this.$globleData.buyType:"",     //1.食堂 2.个人
                    canteenName:this.$globleData.CanteenName??'',
                    canteenBuyerName:this.$globleData.PurchaserName ?? ''
                }
                console.log('param: ', param);
                let res = await this.$http.carOrderPrice(param)
                if(res.returnCode==1000){
                  this.realPrice = res.dataInfo
                this.loading = false;
                let flagLength = 0
                  this.groupGoods.forEach(someItem=>{
                    someItem.info.forEach(item=>{
                      this.$set(item,'isAddressShow',false)

                      if(this.realPrice?.goodIds &&this.realPrice?.goodIds.length>0){
                        this.realPrice.goodIds.forEach(val=>{
                        if(item.goodsId==val){
                          this.$set(item,'isAddressShow',true)
                          flagLength++

                        }
                      })

                      }

                    })

                  })
                  if(flagLength>0){
                    this.isAddressClick = true
                  }else{
                    this.isAddressClick = false
                  }
                }else if(res.message=='不满足优惠券满减金额'){
                  uni.showModal({
                    title: '温馨提示',
                    content: res.message ,
                    showCancel: false,
                    success:()=> {
                        console.log('庆典');
                        console.log(this.couponList);

                        this.couponList[0].isActive = false
                        this.couponId = ''
                    }
                })
                }
                else{
                   uni.showModal({
                    title: '温馨提示',
                    content: res.message ,
                    showCancel: false,
                })
                
                }


            }catch (e){
                this.loading = false
                this.realPrice = {}
            }
        },
        //订阅消息
        requestSubscribeMessage(){
	    const that = this
            uni.requestSubscribeMessage({
                tmplIds: ['TqOEqGR5PsPv8O4regKKvLFD8sUudpgZnkGmQwl0LiQ','k-M34p7Ag0yADspXPoQbgjWE-DAhIo8YaQNv52iHPqA'],
                complete () {
                    that.createOrder()
                }
            })
        },
        //创建订单
        async createOrder() {

            let liftType =0  //0 是快递发货 1 到店自取 2 定点自提
            if(this.selectArea?.value == '2'){
                liftType = 1
            }
            if(this.selectArea?.value == '3'){
                liftType = 2
            }
            console.log('this.selectArea: ', this.selectArea);
            const feeType = this.feeType
            const isGroup = ['GZPT','PTPT'].includes(feeType)
            const addressId = this.getDefaultAddress?.id || ''
            if (!addressId || this.isAddressClick) {
                // this.$toast('请设置收货地址')
                return
            }
            // 商品抵扣积分大于商品就不让创建订单
            // if (this.isIntegral==0 && this.goodsPrice<this.realPrice.integralNum) {
            //   this.$toast('商品金额不能小于积分抵扣的金额')
            //   return
            //   }
            this.isClick = false
            try {
                let res = {}
                // 赠品下单
                if ('ZP'.includes(feeType)) {
                    if (this.cardData?.id) {
                        res = await this.zeroOrder(liftType, addressId)
                    } else {
                        liftType = this.selectArea?.value=='2' ? 2 : 1
                        let param = {
                            lotteryRecordId: this.activeObj.lotteryRecordId,
                            liftType: liftType,
                            deliveryAddressId: addressId,
                            orderFromType:this.orderFromType
                        }
                        res = await this.$http.receiveGive(param)
                    }
                } else if (isGroup) {
                    res = await this.groupOrderDispose(addressId)
                }else if('EZ'.includes(feeType)){
                  const goodsObj = this.goods[0] || {}
                  let param = {
                    activityId:goodsObj.activeObj.activeId,
                    liftType,
                    deliveryAddressId: addressId,
                    goodsSpecId:goodsObj.goodsSpecIds,
                    goodsId:goodsObj.goodsId,
                    userName: liftType==2?this.fixedDelivery.nickName:'',
                    userPhone:liftType==2?this.fixedDelivery.phoneNumber:'',
                    ticketId:'',
                    goodsName:goodsObj.goodsName,
                    goodsPicture:goodsObj.goodsImg,
                    orderFromType:this.orderFromType
                  }
                   res = await this.$http.exchangeCreateOrder(param)
                    let type = isGroup ? 1 : 2  //1 拼团 2 普通
                   this.goTo(`/pagesA/shop/paySuccess?type=${type}&oderTypeId=${res.dataInfo.orderId }&feeType=${feeType}`, false, true)
                        return
                  //  this.goTo(`/pagesA/order/waitPayment?orderId=${res.dataInfo.orderId ||''}&isCart=${this.isCart?1:0}`,false,true)
                  //   return
                } else {

                    res = await this.orderDispose(liftType, addressId)
                }
                // 创建成功 调用微信支付接口
                const orderId = res?.dataInfo || ''
                if (orderId) {
                    this.clearCartList()
                    let goodsId = this.isCart?'':this.goods[0].goodsId
                    let goodsName = this.isCart?'':this.goods[0].goodsName
                    // 下单埋点
                    try {
                        this.$eventPlugInCode({
                            ...this.codeParam,
                            goodsId,
                            goodsName,
                            title: '商品详情',
                            orderId: orderId.orderId || orderId || '',
                            type: '3',
                        })
                    } catch (error) {
                        console.log(error);
                    }

                    let needPay = res?.dataInfo?.needPay
                    let type = isGroup ? 1 : 2  //1 拼团 2 普通
                    if (needPay == false) {
                      this.$eventPlugInCode({
                        ...this.codeParam,
                        title: '商品详情',
                        goodsId,
                        goodsName,
                        orderId: orderId?.orderId || orderId || '',
                        type: this.isCart?'4':'6',
                        extendField:  0
                      })
                        this.goTo(`/pagesA/shop/paySuccess?type=${type}&oderTypeId=${orderId.orderId ||orderId}&feeType=${feeType}`, false, true)
                        return
                    }
                    if (this.groupData?.type) {
                        await this.payGroup(orderId)
                        return
                    }
                    this.goTo(`/pagesA/order/waitPayment?groupData=${JSON.stringify(this.groupData)}&cardData=${JSON.stringify(this.cardData)}&orderId=${orderId.orderId ||orderId}&isCart=${this.isCart?1:0}`,false,true)
                    return
                }
                this.isClick = true
                this.$toast('创建订单失败')
            } catch {
                this.isClick = true
            }
        },
        // 零元创建订单
        zeroOrder(liftType,addressId){
            let param = {
                cardId:this.cardData.id,
                liftType:liftType==0?1:2,
                deliveryAddressId:addressId,
                sellerNote: '',
                cardCouponGoodsIdList:[this.cardCouponGoodsIdList.id],
                orderId:this.cardData?.zeroOrderId?this.cardData?.zeroOrderId:'',
                orderFromType:this.orderFromType
            }
            if(this.cardData.zeroType == '2'){
                return  this.$http.zeroCreatedOrder(param)
            }
            if(this.cardData.zeroType == '1'){
                return  this.$http.zeroMeberCreatedOrder(param)
            }
        },
        // 普通订单处理
        orderDispose(liftType, addressId) {
            // 普通的订单
            const goodsOrderList = this.goods.map(item => {
                return {
                    goodsId: item.goodsId,
                    skuId: item.goodsSpecIds,
                    goodsNum: item.goodsAmount,
                    buyType: item.buyType || 1,
                    activityType: item.activityType,
                    activityId: item?.activityId || '',
                    channelCode:item?.channelCode || '',
                    channelFlag:item?.channelFlag || '',
                    channelName:item?.channelName || ''
                }
            })
            // let orderFromType = 1
            let orderType = ''
            let roomId = ''
            let shareManId = ''
            let vxNum = ''
            // 代表直播间
            if (this.shareParam?.roomId) {
                // orderFromType = 1
                roomId = this.shareParam.roomId
                const obj = this.$globleData.userData
                // 主播分享
                if (!this.shareParam?.userId) {
                    orderType = 'STUDIO_ORDER'
                    vxNum = 'weChart'
                }
                // 直播间下单
                else if (!this.shareParam?.userId || (this.shareParam?.userId == obj?.id)) {
                    orderType = 'STUDIO_ORDER'
                }
                // 分享下单
                else {
                    shareManId = this.shareParam.userId
                }
            } else { // 分销人分销
                shareManId = this.shareParam?.userId || ''
            }

            let disCoutPoint = this.isIntegral == 0 ? (this.realPrice.integralNum || 0) : 0
            const param = {
                deliveryAddressId: addressId,
                orderFromType: this.orderFromType,
                couponId: this.couponId,
                liftType: liftType,
                sellerNote: '',
                goodsOrderList: goodsOrderList,
                integralNum: disCoutPoint,
                shareManId: shareManId,
                orderType,
                roomId,
                vxNum: vxNum,
                userName:this.fixedDelivery.nickName,
                userPhone:this.fixedDelivery.phoneNumber,
                buyerType:getApp().globalData.freshShopId.includes(this.$globleData.shopId)?this.$globleData.buyType:"",     //1.食堂 2.个人
                canteenName:this.$globleData.CanteenName??'',
                canteenBuyerName:this.$globleData.PurchaserName ?? ''
            }
            if (this.invoiceInfo) {
                param.orderInvoiceRequest = this.invoiceInfo
            }
            return this.$http.cardCreatOrder(param)
        },
        // 拼团商品 订单创建处理
        async groupOrderDispose(addressId){
            const liftType = this.selectArea?.value=='2'?1:2
            const obj = this.goods[0]
            const orderGoods = {
                goodsId: obj.goodsId,
                skuId: obj.goodsSpecIds,
                goodsNum: obj.goodsAmount,
            }
            if(!this.groupData.isJoin){
                const param = {
                    deliveryAddressId: addressId,
                    couponId: this.couponId,
                    liftType: liftType,
                    orderGoods: orderGoods,
                    groupActivityId:this.groupData.groupId,
                    sellerNote:'',
                    orderFromType:this.orderFromType
                }
                return  this.$http.groupCreate(param)
            }else{
                let id = this.$store.state.joinGroupId
                if(!id){
                    this.$toast('不存在拼团')
                }
                const param = {
                    deliveryAddressId: addressId,
                    couponId: this.couponId,
                    liftType: liftType,
                    orderGoods: orderGoods,
                    groupId:id,
                    sellerNote:'',
                    orderFromType:this.orderFromType
                }
                return this.$http.groupJoin(param)
            }
        },
        // 打开优惠券
        useCoupons() {
            if (this.couponCount == 0) {
                this.show = false
            } else {
                this.show = true
            }
        },
        // 切换优惠券
        changeCoupon(type) {
            if (type == '1') {
                this.isUseCoupon = true
            } else {
                this.isUseCoupon = false
            }
            this.couponList = []
            this.useCoupon()
        },
        // 选择优惠券确定
        confirm(){
            this.show = false
        // this.calcuOrder()
        },
        // 优惠券选项改变 触发
        checkboxGroupEvent(list){
        },// 选中某个单选框时，由radio时触发
        radioChange(e, index) {
            if (e.isDisabled) return
            this.couponList.forEach((item, key) => {

                if (index == key) {
                    if (item.isActive) {
                        item.isActive = false
                    } else {

                        item.isActive = true
                    }
                } else {
                    item.isActive = false
                }
            })
            this.couponList = [...this.couponList]
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/static/css/goods.scss';
// 门店自提
.pick-store{
  padding: 30rpx;
  justify-content: space-between;
  background: #ffffff;
  .pick-store-title{
    font-size: 28rpx;
    color: #191919;
    font-weight: 500;
  }
  .pick-store-way-title{
    font-size: 28rpx;
    color: #191919;
    font-weight: 500;
  }
  .pick-store-way{
    font-size: 28rpx;
    font-weight: 500;
    color: #191919;
  }
}
// 分割线
.store-address-line{
  height: 2rpx;
}
.delivery-person{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    padding: 0 30rpx;
    background: #FFFFFF;
    margin-top: 20rpx;
    font-size: 32px;
    .name{
      font-size: 32rpx;
      font-weight: 500;
      color: #191919;
    }
    .concat{
      font-size: 28rpx;
      font-weight: 400;
      color: #666666;
      margin-left: 20rpx;
    }

  }
// 收货地址
.address-card{
  justify-content: space-between;
  padding: 36rpx 30rpx;
  background: #FFFFFF;

  .card-left {
    flex: 1;
    .left-top {
      margin-bottom: 16rpx;
      .left-user-name{
        display: inline-block;
        margin-right: 20rpx;
        font-size: 32rpx;
        color: #191919;
        font-weight: 500;
      }
      .left-user-phone{
        font-family: PingFangSC-Regular;
        font-size: 28rpx;
        color: #666666;
        font-weight: 400;
      }
    }
    .left-bottom{
      font-size: 30rpx;
      color: #191919;
      font-weight: 400;

      .address-default{
        margin-right: 10rpx;
        padding: 2rpx 16rpx;
        display: inline-block;
        background: rgba(255,78,0,0.40);

        border-radius: 2px;
        font-size: 24rpx;
        color: #FF4E00;
        line-height: 36rpx;
      }
    }
  }
  .card-right {
    margin-left: 86rpx;
    font-size: 36rpx;
  }
  .noAddress{
    font-family: PingFangSC-Medium, PingFang SC;
    &-top{
      font-size: 28rpx;
      font-weight: 400;
      color: #666666;
    }
    &-bottom{
      margin-top: 10rpx;
      font-size: 32rpx;
      font-weight: 500;
      color: #191919;
    }
  }
}


.item-box{
  margin-top: 20rpx;
  background: #FFFFFF;
  padding: 0 30rpx;
  .item-card{
    border-bottom:  2rpx solid #f8f8f8;
    justify-content: space-between;
    padding: 32rpx 0;
    font-size: 26rpx;
    color: #191919;
	.discount{
		color: #E1544A;
	}
    .coupon-right{
      color: #E1544A;
      text{
        &:nth-last-of-type(1){
            //margin-left: 14rpx;
        }
      }
    }
    .item-card-total{
      text{
        &:nth-last-of-type(1){
          color: #191919;;
          //margin-left: 14rpx;
        }
      }
    }
    &:last-of-type{
      border-bottom: none;
    }
  }
}
.point-rate{
	  height: 100rpx;
    margin-top: 20rpx;
	  width: 100%;
	  background:#ffffff;
    padding: 0 30rpx;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  font-size: 28rpx;
    .point-left{
      display: flex;
      align-items: center;
      image{
        width: 52rpx;
        height: 52rpx;
      }
      .point-name{
        color: #191919;
        padding-left: 10rpx;
      }
    }
    .point-right{
      color:$themeColor;
      font-weight: 600;
    }
  }
.bottom-btn-box{
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 9999;
  background: #ffffff;
  padding: 14rpx 30rpx calc(calc(env(safe-area-inset-bottom) / 2) + 14rpx) 50rpx;
  justify-content: space-between;
  .total-money{
    font-family: PingFangSC-Semibold;
    font-size: 32rpx;
    color: #E1544A;
    font-weight: 600;
	.addPoint{
		font-size: 28rpx;
		font-weight: 400;
		color: #999999;
	}
  }
  .go-pay{
    display: inline-block;
    padding: 15rpx 64rpx;
    background: #d1b085;
    border-radius: 45px;
    text-align: center;
    font-size: 28rpx;
    color: #FFFFFF;
    font-weight: 600;
    &.pay-disable{
      background: #999999;
    }
	.pay-point{
		font-size: 20rpx;
		font-weight: 400;
	}
  }
  .go-pay-no{
    display: inline-block;
    padding: 15rpx 64rpx;


    background: #999999;
    -webkit-border-radius: 45rpx;
    border-radius: 45rpx;
    font-size: 28rpx;
    font-weight: 600;
    color: #FFFFFF;
  }
}
.point{
	background: #FFFFFF;
	margin-top: 20rpx;
	height: 100rpx;
	padding: 30rpx;
	display: flex;
	justify-content: space-between;
	.integral-left{
		font-size: 28rpx;
		font-weight: 400;
		color: #191919;
	}
	.integral-right{
		display: flex;
		align-items: center;
		.text{
			font-size: 28rpx;
			font-weight: 400;
			color: #191919;
		}
    .right-text{
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
		image{
			margin-left: 20rpx;
			width: 34rpx;
			height: 34rpx;
		}
	}
}
.bottom-btn-box-height{
  margin-top: 30rpx;
  height: calc(calc(env(safe-area-inset-bottom) / 2) + 98rpx);
}

// 优惠券弹窗
.popup-content-coupon{
  height: 70vh;
  background: #F8F8F8;
  .coupon-top{
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .coupon-top-height{
    height: 190rpx;
  }
  .popup-coupon-title{
    padding: 30rpx 30rpx 25rpx;
    background: #ffffff;
    font-size: 32rpx;
    color: #191919;
    font-weight: 600;
  }
  .popup-coupon-tab{
    background: #ffffff;
     padding: 30rpx 30rpx 34rpx 25rpx;
     justify-content: space-around;
      text{
        padding: 0 24rpx;
        display: inline-block;
        font-size: 24rpx;
        color: #191919;
        letter-spacing: 0;
        font-weight: 400;
      }
      .active{
        font-size: 24rpx;
        color: #000000;
        font-weight: 600;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          width: 120rpx;
          height: 6rpx;
          background: #191919;
          border-radius: 3rpx;
          bottom: -12rpx;
          left: 50%;
          transform: translateX(-50%);
        }
      }
  }
  .popup-coupon-box{
    overflow-y: scroll;
    padding: 30rpx 30rpx 0;
    .popup-coupon-card{
      width: 100%;
      height: 190rpx;
      background-image:url('../../pagesA/static/image/icon_coupon_sel.png');
      background-size: 100%;
      background-repeat: no-repeat;
      margin-bottom: 30rpx;
      .coupon-card-money{
        padding: 30rpx 0rpx 30rpx;
		width: 30%;
        text-align: center;
        text{
          font-size: 34rpx;
          color: #2A2D4C;
          font-weight: 500;
        }
        font-size: 38rpx;
        color: #2A2D4C;
        font-weight: 500;
		.max-discount{
			font-size: 26rpx;
		}
      }
      .coupon-card-describe{
        width: 50%;
        height: 100%;
        margin-left: 54rpx;
        margin-right: 30rpx;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        padding: 30rpx 0;
        .coupon-describe-title{
          font-size: 28rpx;
          color: #FFFFFF;
          font-weight: 400;
          max-width: 360rpx;
        }
        .valid-time{
          margin-top: 10rpx;
          font-size: 24rpx;
          color: #FFFFFF;
          font-weight: 400;
        }
        .coupon-effect{
          margin-top: 16rpx;
          font-size: 22rpx;
          color: #ECDBA9;
          font-weight: 600;
        }
      }
    }
  }
  .bottom-btn{
    position: fixed;
    bottom: 0 ;
    padding: 14rpx 30rpx calc(calc(env(safe-area-inset-bottom) / 2) + 14rpx);
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px -1px 0px 0px rgba(230,230,230,1);
    justify-content: center;
    .confirm{
      display: inline-block;
      padding: 15rpx 247rpx;
      background: #D1B085;
      border-radius: 45rpx;

      font-size: 28rpx;
      color: #FFFFFF;
      text-align: center;
      font-weight: 600;
    }
  }
  .btn-height{
    height: calc(calc(env(safe-area-inset-bottom) / 2) + 98rpx);
  }
}


.bottom-btn-box{
  bottom: 0;
  position: fixed;
  width: 100%;
  background: #ffffff;
  padding: 14rpx 30rpx calc(calc(env(safe-area-inset-bottom) / 2) + 14rpx) 30rpx;
  .total-money{
    font-family: PingFangSC-Semibold;
    font-size: 32rpx;
    color: #191919;
    font-weight: 600;
  }
  .go-pay{
    display: inline-block;
    padding: 15rpx 64rpx;
    background: #d1b085;
    border-radius: 45px;

    font-size: 28rpx;
    color: #FFFFFF;
    font-weight: 600;
  }
}
.bottom-btn-box-height{
  margin-top: 30rpx;
  height: calc(calc(env(safe-area-inset-bottom) / 2) + 98rpx);
}

// /deep/.u-checkbox__label{
//   margin-left: 0!important;
//   margin-right: 0!important;
// }
/deep/.u-checkbox__icon-wrap--circle{
  background: #ffffff;
}
.red-text{
  font-size: 30rpx;
  color:#E1544A;
}
.order-rule{
  justify-content: space-between;
  margin-top: 20rpx;
  padding: 30rpx 40rpx 30rpx 30rpx;
  background: #ffffff;
  .rule-title{
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #191919;
  }
  .rule-detail{
    padding-top: 40rpx;
    background: #ffffff;

    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
  .rule-active{
    transform: rotate(90deg);
  }
}
// 兑换框
	.warp {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
      border: 1px solid transparent;
		}

		.rect {
			width: 600rpx;
      height: 458rpx;
      background: #FFFFFF;
      border-radius: 10rpx;
      display: flex;
      flex-direction: column;
			.title{
				font-size: 30rpx;
				text-align: center;
				padding: 40rpx 0 38rpx 0;
				font-weight: 600;
				color: #191919;
			}
      .delivery-name{
        font-size: 30rpx;
        color: #191919;
      }
      .input-wrap{
        width: 430rpx;
        height: 80rpx;
        background: #F5F5F5;
        border-radius: 14rpx;
        margin-left: 20rpx;
        input{
          height: 100%;
          padding-left: 20rpx;
        }
        /deep/.delivery-placeholder{
          font-size: 30rpx;
          font-weight: 400;
          color: #999999;
        }
      }
			.bottom{
        margin-top: 40rpx;
        border-top: 1rpx solid rgba(0, 0, 0, 0.14);
        flex: 1;
        .bottom-left{
          width: 49%;
          height: 100%;
          font-size: 34rpx;
          font-weight: 500;
          display: flex;
          color: #666666;
          justify-content: center;
          align-items: center;
        }
        .bottom-right{
          flex: 1;
          color: #D1AB88;
          border-left: 1rpx solid rgba(0, 0, 0, 0.14);
        }
      }
		}

/deep/.icon-arrow{
  font-size: 40rpx !important;
  color: #666666 !important;
}
.active-color{
  color: $themeColor;
}
</style>
