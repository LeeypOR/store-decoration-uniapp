<template>
  <view class="g-goods-head">
    <view class="shop-info">
      <view class="shop-name u-flex">
        <text class="u-line-2" style="margin-right: 50rpx">{{goodsInfo.goodsName}}</text>
        <view class="u-flex" style="flex-direction: column">
          <text @click="collect" class="iconfont " :class="!isCollection?'icon-app_icon_shoucang_moren':'icon-app_icon_shoucang_xuanzhong2'"></text>
          <view class="collect">收藏</view>
        </view>
      </view>
      <view class="shop-specific u-line-1">{{ goodsInfo.goodsSellingPoint ? goodsInfo.goodsSellingPoint : '' }}</view>
      <!--  <view class="shop-specific u-line-1">{{specName}}</view> -->
      <view class="u-flex " v-if="!activeType && !getGroupInfo.id" style="justify-content: space-between;margin-top: 24rpx">
        <view>
          <text class="selling-price" :class="{active:[2].includes(paymentWay)}">{{getPrice}}</text>
          <!-- 积分 -->
          <view v-if="[2].includes(paymentWay)" class="selling-price" style="display:inline-block;">+{{ specGoodsInfo.integralPrice }}</view>
          <text v-if="[2,3].includes(paymentWay)" class="integral">积分</text>
          <text class="lineation-price" v-if="equityDiscount && equityDiscount.salePrice">
            ￥{{ switchMoney(equityDiscount.salePrice) }}
          </text>
          <text v-else>
            <text class="lineation-price" v-if="specGoodsInfo && getMarkPrice">
              ￥{{ getMarkPrice }}
            </text>
          </text>
        </view>
        <view v-if="activeType!='ZP'" class="sell-num">已售{{ goodsInfo.goodsSales }}</view>
      </view>
     
      <view class="rule-item u-flex" v-else-if="activeInfo.remark || getGroupInfo.description" @click="show=true">
        <view>{{ ruleName || '拼团规则' }}</view>
        <text class="iconfont icon-arrow"></text>
      </view>
      <view class="rule-item u-flex" v-else-if="halfInfo.type" @click="show=true">
        <view>{{ halfInfo.type == 1 ? '第二件半价规则' : '买一赠一规则' }}</view>
        <text class="iconfont icon-arrow"></text>
      </view>
      <view style="margin-top: 9rpx;" class="rule-item u-flex"
            v-if="[2,3].includes(paymentWay) && !halfInfo.type && !activeInfo.remark && !getGroupInfo.description"
            @click="show=true">
        <view>积分兑换规则</view>
        <text class="iconfont icon-arrow"></text>
      </view>
    </view>
    <view class="coupon-box " v-if="couponsList.length>0 && activeType !='ZP'">
      <view class="u-flex">
        <view class="coupon-name">优惠</view>
        <view class="u-flex-1" style="overflow-x: scroll;white-space:nowrap">
          <view style="display: inline-block;" v-for="(item,index) in couponsList" :key="index">
            <text class="coupon-tip">{{ item.couponName }}</text>
          </view>
        </view>
        <image @click="getCoupons" src="/pagesA/static/image/icon_coupon.png"></image>
      </view>
      <view class="u-flex" @click="goHalf(halfInfo.type)" v-if="halfInfo.type">
        <view class="coupon-name">活动</view>
        <view class="half-name">{{ halfInfo.type == 1 ? '第二件半价' : '买一赠一' }}</view>
      </view>
    </view>
    <view class="see-more u-flex" v-if="moreName" @click="clickMore">
        <view class="u-flex">
          <image src="/pagesA/static/image/active/icon_clock.png"></image>
          <text class="item-name">{{ moreName }}</text>
        </view>
        <text class="iconfont icon-arrow"></text>
    </view>
    <view v-if="['433733032805924864','461887105476845568'].includes($globleData.shopId) && goodsInfo.goodsSupplierName" class="supplier">
        <image src="../../static/image/app_icon_shop.png" />
        <view>{{goodsInfo.goodsSupplierName?goodsInfo.goodsSupplierName:''}}</view>
    </view>
    <!--  规则弹窗  -->
    <u-popup v-model="show"
             mode="center"
             width="630rpx"
             border-radius="30"
             closeable>
      <view class="popup-box u-flex">
        <view class="head">{{ popupTitle}}</view>
        <view class="rule-describe u-flex-1">
			<scroll-view scroll-y="true" style="height: 100%;">
				<u-parse :html="activeInfo.remark || getGroupInfo.description || halfInfo.activityExplain || integralRule"></u-parse>
			</scroll-view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
	
export default {
    props: {
        halfInfo: {
            type: Object,
            default: null
        },
        // 商品信息
        goodsInfo:{
            type:Object,
            default:()=>{}
        },
        // 规格名称
        specName:{
            type:String,
            default:null
        },
        // 活动信息
        activeInfo: {
            type: Object,
            default: null
        },
        couponsList: {
            type: Array,
            default: () => []
        },
        specGoodsInfo: {
            type: Object,
            default: ()=>{}
        },
        activeType: {
            type: String,
            default: ""
        },
        groupInfo: {
            type: Object,
            default: ()=>{}
        },
        equityDiscount:{
            type: Object,
            default: ()=>{}
        },
        loading: {
            type: Boolean,
            default: false
        },
        isCollection: {
            type: Boolean,
            default: false
        },
        // 支付方式
        paymentWay: {
            type:[Number,String],
            default:0
        },
    },
    created() {
        console.log('--------------------',this.goodsInfo);
        
    },
    computed: {
        getGroupInfo(){
            if(this.groupInfo){
                return this.groupInfo
            }
            return {}
        },
        ruleName() {
            if (this.activeType == "MS") {
                return '秒杀规则'
            }
            if (this.activeType == "ZK") {
                return '秒杀规则'
            }
        },
        moreName(){
            if (this.activeType == "MS") {
                return '更多秒杀活动'
            }
            if (this.activeType == "ZK") {
                return '更多折扣活动'
            }
            return ''
        },
        getPrice(){
            if(this.activeType == 'ZP'){
                return '￥0'
            }
            if(this.paymentWay == 3){
                return  this.specGoodsInfo.integralPrice
            }
            if (this.equityDiscount && this.equityDiscount.discountPrice) { //权益卡折扣商品展示的价格
                return '￥' + this.switchMoney(this.equityDiscount.discountPrice)
            }
            if(this.goodsInfo?.goodsSpecPropertiesList.length>1){//如果有多个 价格展示价格区间
                let priceList = JSON.parse(JSON.stringify(this.goodsInfo?.goodsSpecPropertiesList))
                priceList.sort((a,b)=>{
                    return a.salePrice-b.salePrice
                })
                if(priceList[0].salePrice==priceList[priceList.length-1].salePrice){ //最低价和最高一样
                    return '￥' + this.switchMoney(priceList[0].salePrice)    
                }
                return '￥' + this.switchMoney(priceList[0].salePrice)+'-'+this.switchMoney(priceList[priceList.length-1].salePrice)
            }
            return '￥' + this.switchMoney(this.specGoodsInfo.salePrice)
        },
        getMarkPrice(){
            if(this.goodsInfo?.goodsSpecPropertiesList?.length>0){//如果有多个 价格展示价格区间
                let priceList = JSON.parse(JSON.stringify(this.goodsInfo?.goodsSpecPropertiesList))
                priceList.sort((a,b)=>{
                    return a.marketPrice-b.marketPrice
                })
                if(priceList[0].marketPrice==priceList[priceList.length-1].marketPrice){ //最低价和最高一样
                    if(priceList[0].marketPrice == 0){
                        return ''
                    }
                    return this.switchMoney(priceList[0].marketPrice)    
                }
                return this.switchMoney(priceList[0].marketPrice)+'-'+this.switchMoney(priceList[priceList.length-1].marketPrice)
            }
        },
        popupTitle(){
            if(this.halfInfo?.type == 1){
                return '第二件半价规则'
            }else if(this.halfInfo?.type == 2){
                return '买一赠一规则'
            }else if(this.paymentWay == 3|| this.paymentWay == 2){
                return '积分兑换规则'
            }else{
                return '秒杀规则'
            }

        }
    },

    data() {
        return {
            show: false,
            integralRule: `<p>1.兑换权益，仅限金桔有品实名账号进行使用；</p>
		<p>2.新疆、西藏、青海、甘肃、内蒙古、宁夏、台湾、香港、澳门等地区；疫情突发地区暂不支持发货；</p>
		<p>3.兑换结果以订单详情为准，可通过积分商城-兑换记录查看订单状况；</p>
		<p>4.优惠券、抵用券等权益产品，兑换之后通过我的-优惠券进行查看使用；</p>
		<p>5.积分一经使用不支持退还；</p>
		<p>6.若兑换的优惠权益（包含但不仅限于优惠券、抵用券、减免券等），在优惠权益使用之后的交易发生退款，仅退回用户实际支付金额，优惠权益不再补偿，兑换的积分不予退还；</p>
		<p>7.兑换的产品不允许退货，如遇质量问题可联系客服确认后进行换货；虚拟权益不支持退换。</p>
		<p>温馨提醒</p>
		<p>兑换的产品有限，先到先得，兑完为止。</p>`
        }
    },
    methods:{
        collect() {
            this.$emit('collection')
        },
        // 跳第二件半价和买一赠一的活列表
        goHalf(type) {
            if (type == 1) {
                this.goTo('/pagesB/halfPrice/index?jumpPageType=SECONDHALF')
            }
            if (type == 2) {
                this.goTo('/pagesB/halfPrice/index?jumpPageType=SECONDFREE')
            }
        },
        getCoupons() {
            this.$emit('getCoupons')
        },
        clickMore() {
            this.$toast('没有更多活动')
            if (this.activeType == "MS") {
                // todo
            }
            if (this.activeType == "ZK") {
                // todo
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.g-goods-head{
  position: relative;
  .shop-info {
    background-color: #ffffff;
    padding: 34rpx 30rpx 0 23rpx;
    .shop-name {
      font-size: 32rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #191919;
      justify-content: space-between;
    }
    .iconfont{
      font-size: 46rpx;
      color: #434343;
    }
    .collect{
      margin-top: 5rpx;
      font-family: PingFangSC-Regular;
      font-size: 20rpx;
      color: #434343;
      text-align: center;
    }
    .shop-specific {
      margin-top: 24rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #999999;
    }
    .selling-price{
      font-size: 36rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
      &.active{
        color: #D1B085;
      }
    }
    .integral{
      font-size: 24rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #191919;
    }
    .lineation-price{
      margin-left: 20rpx;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 33px;
      text-decoration:line-through
    }
    .sell-num{
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
    }
  }
  .active-bg-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

// 规则
.rule-item{
  border-top:1rpx solid #E6E6E6;
  padding: 20rpx 0;
  background-color: #ffffff;
  justify-content: space-between;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  .iconfont{
    color: #999999!important;
  }
}

// 优惠券
.coupon-box{
  margin-top: 20rpx;
  padding:0 30rpx;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: flex-start;
  .coupon-name{
    font-size: 24rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    margin-right: 30rpx;
  }
  .half-name{
    padding: 5rpx 20rpx;
    border-radius: 4rpx;
    border: 2rpx solid #D1B085;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rpx;
    color: #D1B085;
    margin-bottom: 10rpx;
  }
  .coupon-tip{
    margin-right: 20rpx;
    // margin-bottom: 30rpx;
    display: inline-block;
    background: rgba(209, 176, 133, 0.3);
    border-radius: 4rpx;
    padding: 4rpx 20rpx;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #D1B085;

  }
  image{
    width: 160rpx;
    height: 100rpx;
  }
}

.popup-box{
  padding: 40rpx 30rpx 30rpx 30rpx;
  width: 100%;
  flex-direction: column;
  height: 56vh;
  overflow: hidden;
  .head{
    font-family: PingFangSC-Medium, PingFang SC;
    font-size: 32rpx;
    font-weight: 500;
    color: #191919;
    padding-bottom: 24rpx;
  }
  .rule-describe{
    font-family: PingFangSC-Regular, PingFang SC;
    overflow-y: scroll;
    font-size: 28rpx;
    color: #191919;
    line-height: 45rpx;
    text-align: justify;
    letter-spacing: 3rpx;
    text-justify:kashida;
  }
}
// 查看跟多
.see-more{
  padding: 0 30rpx;
  height: 80rpx;
  margin: 20rpx 0;
  background: #ffffff;
  justify-content: space-between;
  image{
    width: 34rpx;
    height: 34rpx;
    margin-right: 20rpx;
  }
  .item-name{
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #191919;
  }
  .iconfont{
    font-size: 46rpx;
    color: #999999!important;
  }
}
// 生鲜供应商
.supplier{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100rpx;
    background: #FFFFFF;
    margin-top: 20rpx;
    image{
        width: 60rpx;
        height: 51rpx;
        margin-left: 35rpx;
    }
}
.icon-app_icon_shoucang_xuanzhong2{
  color: #D1B085!important;
}
</style>