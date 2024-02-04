<template>
  <view class="g-shop-card">
    <u-navbar :border-bottom="false" title="购物车" title-color="#191919" title-size="36" back-icon-color="#ffffff"></u-navbar>
    <view v-if="!finished">
      <shopcardSkeleton />
    </view>
    <view>
      <block v-show="cardIsNoNull">
        <u-checkbox-group active-color="#D1B085" shape="circle" @change="checkboxGroupChange">
      <view v-for="(val,key) in cardList" :key="key" class="shop-box">
        <!-- 买一赠一和第二件半价头部 -->
        <view v-if="[1,2].includes(val.activityType) && val.info.length" class="shop-head u-flex u-row-between">
          <view class="shop-head-left u-flex">
            <view class="activity-name">
              {{ activityName(val.activityType) }}
            </view>
            <view class="activity-text">活动进行中</view>
          </view>
          <view @click="checkMore(val.activityType)" class="shop-head-right u-flex">
            查看更多
            <text class="iconfont icon-arrow"></text>
          </view>
        </view>
        <!-- 生鲜店铺分类头部 -->
        <view v-if="['433733032805924864','461887105476845568'].includes(shopId) && val.info.length && val.goodsSupplierName" class="supplier-head u-flex ">
          <u-checkbox active-color="#D1B085" :disabled="classifyAbled(val)" :value="val.supplierAcitve" :name="key" shape="circle" @change="checkboxSupplierChange" />
          <image class="shop-img" src="../../static/image/app_icon_shop.png" />
          <view class="supplier-name">{{val.goodsSupplierName}}</view>
        </view>
        <block v-for="(item,index) in val.info" :key="index">
          <view class="u-flex">
            <u-checkbox :disabled="numDisabled(item)" :value="item.isActive" :name="item.id" @change="checkboxChange"></u-checkbox>
            <view class="g-goods u-flex u-flex-1">
              <view @click.stop="goDetail(item)" class="goods-img-box">
                <image :src="item.goodsImg"></image>
                <view v-if="item.goodsStatus!=2 || item.goodsStock <= 0">
                     <view class="mask-box"></view>
                    <view class="mask-title">{{item.goodsStatus==1?'仓库中':(item.goodsStatus==3?'已下架':item.goodsStatus==4?'已限购':'已售空')}}</view>
                </view>
              </view>
              <view class="goods-detail u-flex">
                <view class="top-box">
                  <view class="u-flex">
                    <text @click.stop="goDetail(item)" class="goods-name u-line-1">{{ item.goodsName }}</text>
                    <text @click="cartDelete(item.id,index,val.activityType,val.goodsSupplierName)" class="iconfont icon-closedicon"></text>
                  </view>
                  <view class="goods-spec u-flex" v-if=" item.goodsStock>0"
                        @click=" selGoodsSpec(item.goodsId,item.id,item.paymentWay,item.goodsSpecIds,item.goodsSpecValue)"
                  >
                    <text class="goods-spec-title">商品规格：</text>
                    <text class="goods-spec-details u-line-1">{{ item.goodsSpecValue || '统一规格' }}</text>
                    <image v-if="item.goodsSpecValue" src="@/static/image/icon_down.png"></image>
                  </view>
                </view>
                <view class="bottom-box u-flex" v-if="item.goodsStock==0">
                  <text class="reelect-title">请重新选择商品规格</text>
                  <text @click="selGoodsSpec(item.goodsId,item.id,item.paymentWay,item.goodsSpecIds,item.goodsSpecValue)" class="reelect-btn">重选</text>
                </view>
                <view class="bottom-box u-flex" v-else>
                   <view class="u-flex">
                       <text class="goods-money">¥{{ switchMoney(item.unitPrice) }}</text>
                        <image v-if="item.membersPrice" src="/static/image/vip_icon.png" class="vip-icon"></image>
                   </view>

                  <u-number-box
                      :long-press="false"
                      bg-color="#ECECEC"
                      :disabled="numDisabled(item,true)"
                      min="1"
                      :value="item.goodsAmount"
                      input-width="50"
                      :index="item.id"
                      @change="goodsNumChange"
                      :max="setMaxNum(item)"
                  >
                  </u-number-box>
                </view>
              </view>
            </view>
          </view>
          <!--活动商品-->
          <view class="activity-type-box u-flex" v-if="val.activityType==3 || val.activityType==4">
            <view class="bg-name">
              <view class="type-name u-flex">{{activityName(val.activityType)}}</view>
            </view>
            <view class="type-time u-flex">还剩
                <u-count-down separator="zh" font-size="24" color="#D1B085" separator-color="#D1B085" separator-size="24" :hide-zero-day="false" :timestamp="timestamps(val)"></u-count-down>后结束</view>
          </view>
        </block>
      </view>
    </u-checkbox-group>
    </block>
    <view class="no-data-card" v-if="finished && !cardIsNoNull">
      <image src="https://jdz.g1999.com/ghs/20210917/8b2abf0db9c948f5975b2848391d19fe.png"></image>
<!--      <text class="no-data-tip">您的购物车是空的</text>-->
      <text class="no-data-btn" @click="goCategory">去逛逛</text>
    </view>

    <guess-you-like></guess-you-like>

    <block v-if="cardList.length>0">
      <view style="height: 98rpx;margin-top: 24rpx"></view>
      <view class="shop-card-box u-flex" :style="{bottom:tabbarHeight+'px'}">
        <u-checkbox class="u-flex-1" active-color="#D1B085" v-model="isSelectAll" @change="selectAllChange" shape="circle"> <text class="sel-all">全选</text></u-checkbox>
        <view class="m-total-box">
          <view class="total-box u-flex">
            <text class="sel-num">已选{{selectLength}}件</text>
            <text class="num-title">合计：</text>
            <text class="cat-money">￥{{switchMoney(totalMoney)}}</text>
          </view>
          <view class="discounts-money">已优惠￥{{switchMoney(discountPrice)}}</view>
        </view>
        <text :class="{'btn-close-active':isClose}" class="btn-close" @click="goClose">去结算</text>
      </view>
    </block>
    <goods-spec-popup @addCart="specSel" :buycom="paymentWay" :goodsSpecIds="goodsSpecIds" :goodsId="goodsId" :btnState="btnState" :specList="specList" :goodsSpecList="goodsSpecList"></goods-spec-popup>
    </view>
    <fixed-navigation :fixTime="refresh" :location="4"></fixed-navigation>
    <my-tabbar class="mynabbaar" @change="tabbarChange" v-model="tabCurrent" :bg-color="tabbarInfo.backgroundColor" :list="tabbarInfo.navigationList"></my-tabbar>
    <view v-if="isPopup">
      <view v-for="(item,index) in exchangeInfo">
      <exchangeAdv v-if="index==0" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
       <view v-else>
         <exchangeAdv v-if="exchageId == index" :exchangeInfo="exchangeInfo" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
       </view>
    </view>
    </view>
    
  </view>
</template>

<script>
import GuessYouLike from "../../components/guessYouLike";
import GoodsSpecPopup from "../../components/goodsSpecPopup";
import shareMixin from '../shareMixin.js'
import shopcardSkeleton from './skeleton'
import {mapState}  from 'vuex'
import myTabbar  from '@/components/myTabbar'
import exchangeMixin  from '@/pages/exchangeMixin'
import  exchangeAdv  from "../../components/exchangeAdv";
import FixedNavigation from "../../components/fixedNavigation";


export default {
    name: "ShopCart",
    mixins:[shareMixin,exchangeMixin],
    components: {FixedNavigation, GoodsSpecPopup, GuessYouLike,shopcardSkeleton,myTabbar,exchangeAdv},
    data(){
        return {
            title:'购物车',
            cardList:[],
            isSelectAll:false,     // 是否全选
            totalMoney:0.00,       // 总金额
            discountPrice:'0.00',  //优惠金额
            btnState:4,             // 确定
            goodsId:'',
            specList:[],
            goodsSpecList:[],
            goodsNum:'',
            specIdList: [],
            goodsList: [],
            selId: "",
            paymentWay: 0,//后台设置的购买方式
            goodsSpecIds: '',
            finished:false,
            tabbarHeight:0,
            goodsSum:0,
            shopId:'',
            isPopup:true,
            refresh:''
            // tabCurrent:'',
        }
    },
    onReady(){
	   const query = uni.createSelectorQuery().in(this);
		  query.select('.mynabbaar').boundingClientRect(data => {
            this.tabbarHeight = data.height
	      // this.top =  data.height //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
		  }).exec()
    },
    onShow() {
        this.shopId = this.$globleData?.shopId
        this.isSelectAll = false
        this.init()
        this.isPopup = true
         this.refresh = new Date().getTime().toString()
    },
    onHide(){
       this.isPopup = false
    },
    computed:{
        tabCurrent:{
            get:function (){
                return this.$store.state.tabIndex
            },
            set:function(value){
                // this.$store.commit('setTabIndex',value)
            }
        },
        // 生鲜店分类勾选框是否禁用
        classifyAbled(){
            return (val)=>{
                let length =0
                val.info.forEach(item=>{
                    if(item.goodsStatus!=2 || item.goodsStock==0){
                        length++
                    }
                })
                // 如果分类下库存为零或者下架的分类的勾选框禁止勾选
                if(length == val.info.length){
                    return true
                }
                return false
            }
        },
        setMaxNum(){
            return (item)=>{
                if(item.enableLimit == 1 && [2,4].includes(item.goodsStatus) ){

                    let limitCount = item?.limitCount || 0;
                    let num = parseInt(item?.goodsBuyCount) || 0
                    let sum = (limitCount - num)
                    if(sum <=0 ||  item.goodsAmount>sum ){
                        item.goodsStatus = 4
                        return item.goodsAmount
                    }else{
                        item.goodsStatus = 2

                    }
                    return sum
                }
                if([2,4].includes(item.goodsStatus) ){
                    if(item.goodsAmount>item.goodsStock){
                        item.goodsStatus = 4
                        return item.goodsAmount
                    }else{
                        item.goodsStatus = 2
                    }
                }

                if(item?.goodsStock == 0 || item?.goodsStock > 0){
                    return item.goodsStock
                }

                return 1000000
            }
        },
        //   步进器是否禁用
        numDisabled(){
            return(val,isNumBox)=>{
                if([4].includes(val.goodsStatus) && isNumBox){
                    return false
                }
                if(![2].includes(val.goodsStatus)  || val.goodsStock==0){
                    return true
                }
                return false
            }
        },
        selectLength(){
            let length = 0
            console.log('this.goodsList: ', this.goodsList);
            if(this.goodsList.length>0){
                this.goodsList.forEach(item=>{

                    if(item.isActive){
                        length += item.goodsAmount
                    }
                })
                this.goodsSum = length
            }else{
                this.isSelectAll = false
            }

            return  length
        },
        // 购物车是否不为null
        ...mapState({
            tabbarInfo:state=>state.tabbarInfo
        }),
        cardIsNoNull(){
            if(this.cardList.length>0 && this.cardList[0].info?.length>0){
                return true
            }
            if(this.cardList.length<=0){
                return false
            }
            
            return false
        },
        activityName() {
            return (val) => {
                if (val == 1) {
                    return '第二件半价'
                }
                if (val == 2) {
                    return '买一赠一'
                }
                if(val == 3){
                    return '秒杀'
                }
                if(val == 4){
                    return '限时折扣'
                }
            }
        },
        timestamps(){
            return (val)=>{

                if(val.info.length){

                    let  timestamp =  new Date(val.info[0].endTime.replace(/-/g,'/')).getTime()/1000-new Date().getTime()/1000


                    return timestamp
                }

            }
        },
        // 是否去结算
        isClose() {
            if (this.selectLength > 0) {
                this.$u.debounce(this.orderPrice, 400)
                return true
            }
            this.totalMoney = 0
            this.discountPrice = 0
            return false
        },
    },
    methods:{
        async init(){
            await this.getCartList()

        },
        // 跳详情
        goDetail(item){
          this.goTo('/pagesA/shop/goodsDetail?id='+item.goodsId)
        },
        async orderPrice() {
            if (this.goodsList?.length) {
                let goodsOrderList = []
                this.goodsList.forEach(item => {
                    if (item.isActive) {
                        goodsOrderList.push(
                            {
                                activityId: item.activityId,
                                goodsId: item.goodsId,
                                skuId: item.goodsSpecIds,
                                goodsNum: item.goodsAmount,
                                activityType: item.activityType ? item.activityType : 0
                            }
                        )
                    }

                })
                const param = {
                    goodsOrderList: goodsOrderList,
                    isIntegral: 1,
                    enableCar: true,
                     buyerType:getApp().globalData.freshShopId.includes(this.$globleData.shopId)?this.$globleData.buyType:"",     //1.食堂 2.个人
                    canteenName:this.$globleData.CanteenName??'',
                    canteenBuyerName:this.$globleData.PurchaserName ?? ''
                }
                if(this.goodsSum<=0){
                    this.totalMoney = 0
                    this.discountPrice = 0
                    return
                }
                let res = await this.$http.carOrderPrice(param)
                // let res = await this.$http.halfOrderPrice(param)
                this.totalMoney = res.dataInfo?.orderActualPrice || '0.00'
                this.discountPrice = res.dataInfo?.priceDiscount || '0.00'
            } else {
                this.totalMoney = 0
                this.discountPrice = 0
            }
        },
	  //点击查看更多
	  checkMore(val){
		  if(val == 1){
			  this.goTo('/pagesB/halfPrice/index?jumpPageType=SECONDHALF')
		  }
		  if(val == 2){
			  this.goTo('/pagesB/halfPrice/index?jumpPageType=SECONDFREE')
		  }
	 },
        //弹窗确定按钮
        async specSel({ids,buyType}) {
            this.specIdList = ids
            const money = this.goodsSpecInfo()?.salePrice || ''
            const id = this.goodsSpecInfo()?.id || ''
            const name = this.getSpecName() || ''

            if (!money || !name || !id) {
                this.$toast('操作失败')
                return
            }
            await this.$http.cartUpdate({cartId: this.selId, goodsSpecIds: id})
            this.cardList = this.cardList?.map(item => {
                item?.info?.forEach(someItem => {
                    if (someItem.id == this.selId) {
                        someItem.unitPrice = money
                        someItem.goodsSpecValue = name
                        someItem.goodsImg = this.goodsSpecInfo()?.modelPicture || ''
                        someItem.buyType = buyType || 1
                        someItem.goodsStock = this.goodsSpecInfo()?.goodsInventory || ''
                        someItem.goodsSpecIds = id
                    }
                })
                return item
            })
            this.goodsList = this.goodsList?.map(someItem=>{
                if (someItem.id == this.selId) {
                    someItem.unitPrice = money
                    someItem.goodsSpecValue = name
                    someItem.goodsImg = this.goodsSpecInfo()?.modelPicture || ''
                    someItem.buyType = buyType || 1
                    someItem.goodsStock = this.goodsSpecInfo()?.goodsInventory || ''
                    someItem.goodsSpecIds = id
                }
                return someItem
            })
            this.orderPrice()
            this.$store.commit('setSpecification', false)
        },
        // 查询商品规格
        async selGoodsSpec(goodsId,id,paymentWay,goodsSpecIds,goodsSpecValue=""){
            if(!goodsSpecValue){
                return
            }
            if(!goodsId){
                return '商品不存在'
            }
            this.goodsSpecIds = goodsSpecIds
            this.paymentWay = paymentWay || 0
            this.selId = id
            const res = await this.$http.goodsSpecQuery({id:goodsId})
            this.goodsId = goodsId
            this.specList = res?.dataInfo?.goodsSpecList || []
            this.goodsSpecList = res?.dataInfo?.goodsSpecPropertiesList || []
            this.$store.commit('setSpecification', true)
        },
        // 获取购物车列表
        async getCartList() {
            try {
                const {dataInfo: res} = await this.$http.cartList()
                this.goodsList = (res || []).map((item) => {
                    console.log('res: ', res);
                    item.isActive = false
                    item.num = item.goodsAmount


                    return item
                })
                // let starArr = []
                if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){//生鲜店需要根据供应商做分组
                    this.cardList = this.groupingMethod(this.goodsList,'goodsSupplierName')

                }else{
                    // 根据活动类型进行分组
                    this.cardList = this.groupingMethod(this.goodsList,'activityType')
                }

                this.finished = true
            } catch (error) {
                this.finished = true
                this.cardList = []
                this.goodsList = []
            }
        },
        //data是要被分组的数据[]，key是分组依据的关键字
        getGroup(data,key){
            let groups={};
            data.forEach(c=>{
                let value=c[key];
                groups[value]=groups[value]||[];
                groups[value].push(c);
            });
            return groups;
        },
        // 购物删除
        async cartDelete(goodsId, index, activityType,goodsSupplierName) {
            await this.$http.cartDelete([goodsId])
            this.cardList.forEach((item) => {
                if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){
                    if (item.goodsSupplierName == goodsSupplierName) {
                        item.info.splice(index, 1)
                    }
                }else{
                    if (item.activityType == activityType) {
                        item.info.splice(index, 1)
                    }
                }

            })

            this.goodsList = this.goodsList?.filter((item)=>{
                if(item.id == goodsId){
                    return false
                }
                return true
            })
            console.log(this.cardList,'76666666666666666');
        },
        // 商品数量发生变化
        goodsNumChange({value,index}){
            console.log({value,index});
            let  goods = {}
            this.cardList.forEach(item=>{
                item.info.forEach(someItem=>{
                    if(someItem.id == index){
                        goods = someItem
                    }
                })
            })
            this.goodsList.forEach(item=>{
                if(item.id == index){
                    item.goodsAmount = value
                }
            })
            if(goods.goodsAmount == value) return
            console.log(value,'0000000000');
            this.$http.cartUpdate({cartId:goods.id,goodsAmount:value})
            goods.goodsAmount = value
            this.isClose  // 触发金额计算
        },
        // 监听整个选项的变化
        checkboxGroupChange(detail=[]){
            if(this.$globleData.shopId.includes(this.$globleData.shopId)){
                let length=0
                for (const item of this.goodsList) {//统计勾选数量
                    for (const someItem of detail) {
                        if(item.id == someItem){
                            length++
                        }
                    }
                }
                let sanpArr = this.goodsList.filter(item=>{//过滤掉下架的和库存为0 的数据
                    return item.goodsStatus==2 && item.goodsStock!=0
                })
                if(length==sanpArr.length){
                    this.isSelectAll = true
                    return
                }
                this.isSelectAll = false
            }else{
                console.log(detail,this.goodsList,'88888888888s');
                if(detail.length == this.goodsList.length){
                    this.isSelectAll = true
                    return
                }
                this.isSelectAll = false
            }
        },
        checkboxChange({value,name}){
            if(getApp().globalData.freshShopId.includes(this.$globleData.shopId)){
                this.cardList.map((item)=>{
                    let length = 0
                    item.info.forEach(subitem=>{//将cardList最外层加一个checkNum字段统计勾选的数量，分类下所有子类勾选上了，总分类就勾选上
                        if(subitem.id == name){
                            subitem.isActive  = value
                        }
                        if(subitem.isActive){
                            length += 1
                        }

                    })
                    item.checkNum= length
                })
                this.cardList.forEach(item=>{
                    let snapArr = item.info.filter(item=>{//将库存为0 和下架的过滤出来
                        return item.goodsStock!=0 && item.goodsStatus==2
                    })
                    if(item.checkNum == snapArr.length){
                        item.supplierAcitve = true
                    }else{
                        item.supplierAcitve = false
                    }
                })
            }else{
                this.cardList.map((item)=>{
                    item.info.forEach(subitem=>{
                        if(subitem.id == name){
                            subitem.isActive  = value
                        }
                    })

                })
            }
            this.goodsList = this.goodsList.map(item=>{
                if(item.id == name){
                    item.isActive  = value
                }
                return item
            })
        },
        // 监听 全选是否发生变化
        selectAllChange({value}) {

            this.cardList.forEach(item=>{
                item.info.forEach(sitem=>{
                    if(sitem.goodsStatus==2 && sitem.goodsStock!=0){
                        sitem.isActive = value
                    }else{
                        sitem.isActive = false
                    }
                })
                if(getApp().globalData.freshShopId?.includes(this.shopId)){
                    this.$set(item,'supplierAcitve',value)
                }

            })

            this.goodsList.forEach(item => {
                if(item.goodsStatus==2 && item.goodsStock!=0){
                    item.isActive = value
                }else{
                    item.isActive = false
                }

            })

        },
        // 去结算
        goClose(){
            let goodsList = this.goodsList.filter(item => {
                if(item.isActive){
                    return true
                }
                return false
            })
            if(goodsList.length == 0){

                this.$toast('你还没有选择商品哦')
                return
            }
            let arrList= JSON.parse(JSON.stringify(goodsList))
            console.log('goodsList: ', goodsList);
            this.goTo(`/pagesA/order/orderCenter?goodsList=${JSON.stringify(arrList)}&cart='true'`)
        },
        goCategory(){
            if(getApp().globalData.freshShopId.includes(this.shopId)) {

                this.goTo('/pages/home/index',true)
            }else{
                uni.switchTab({
                    url: '/pages/category/index'
                });
            }

        },
        goodsSpecInfo () {
            const str = this.specIdList.join(',')
            if (this.goodsSpecList && this.goodsSpecList.length > 0) {
                for(const item of this.goodsSpecList){
                    if(item.modelIds == str){
                        return item
                    }
                }
            }
            return {}
        },
        getSpecName () {
            let str = []
            for (const item of this.specList) {
                let arr = item.modelList || []
                for (const obj of arr)
                    if (this.specIdList.includes(obj.modelId)) {
                        str.push(obj.modelName)
                    }
            }
            return str.join('-')
        },
        // 生鲜店供应商checkbox事件
        checkboxSupplierChange(e){

            this.$set(this.cardList[e.name],'supplierAcitve',e.value)
            let strArr = this.cardList[e.name]
            strArr.info.forEach(item=>{
                this.$set(item,'isActive',e.value)
                this.goodsList.forEach(someitem => {
                    if(someitem.id==item.id){
                        someitem.isActive = item.isActive
                    }
                })
            })


        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/static/css/goods.scss';
g-shop-card{
  padding-bottom: 50rpx;
}
.no-data-card{
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  height: 630rpx;
  background: #FFFFFF;
  margin-bottom: 30rpx;
  position: relative;
  image{
    top: 50rpx;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 380rpx;
    height: 380rpx;
  }
  .no-data-tip {
    top: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24rpx;
    color: #999999;
    letter-spacing: 0;
    font-weight: 400;
    bottom: 240rpx;
  }
  .no-data-btn {

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    background: #d1b085;
    border-radius: 45rpx;
    bottom: 80rpx;

    padding: 15rpx 84rpx;
    font-size: 28rpx;
    color: #FFFFFF;
    font-weight: 600;
  }
}
.shop-box{
  margin: 20rpx 0;
  background: #ffffff;
  padding-left: 30rpx;
  .supplier-head{
    height: 72rpx;
    .shop-img{
      width: 60rpx;
      height: 51rpx;
      margin:0 10rpx 0 25rpx;
    }
    .supplier-name{
      font-size: 26rpx;
      color: #191919;
    }
  }

  .shop-head {
    width: 100%;
    height: 60rpx;
    padding: 0 30rpx 0 56rpx;
    .shop-head-left {
      .activity-name {
        padding: 4rpx 12rpx;
        background: #D1B085;
        border-radius: 4rpx;
        font-size: 24rpx;
        color: #FFFFFF;
      }
      .activity-text {
        font-size: 24rpx;
        color: #191919;
        margin-left: 44rpx;
      }
    }
    .shop-head-right {
      font-size: 24rpx;
      color: #999999;
    }
  }
  .shop-title-item{
    padding: 20rpx 0;
    .shop-name{
      margin-left: 6rpx;
      font-size: 24rpx;
      color: #191919;
    }
    .shop-logo{
       width: 28rpx;
       height: 28rpx;
    }
  }
}


.shop-card-box{
  z-index: 1000;
  width: 100%;
  padding: 14rpx 30rpx;
  position: fixed;
  // bottom: 0;
  background: #ffffff;
  .sel-all{
    margin-left: 20rpx;
    font-size: 24rpx;
    color: #191919;
  }
  .m-total-box{
    text-align: right;
    margin-right: 20rpx;
    .total-box{
      font-size: 24rpx;
      color: #191919;
      .sel-num{
        font-family: PingFangSC-Regular;
        font-size: 24rpx;
        color: #666666;
        letter-spacing: 0;
        font-weight: 400;
      }
      .num-title{
        font-family: PingFangSC-Regular;
        font-size: 24rpx;
        color: #191919;
        letter-spacing: 0;
        font-weight: 400;
      }
      .cat-money{
        font-family: PingFangSC-Medium;
        font-size: 30rpx;
        color: #191919;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
    .discounts-money{
      margin-top: 4rpx;
      font-family: PingFangSC-Regular;
      font-size: 22rpx;
      color: #D1B085;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
  .btn-close{
    display: inline-block;
    padding: 15rpx 64rpx;
    background: #999999;
    border-radius: 45rpx;

    font-size: 28rpx;
    font-weight: 600;
    color: #FFFFFF;
    &-active{
      background: $themeColor;
    }
  }
}
/deep/.u-checkbox__label{
  margin-left: 0!important;
  margin-right: 0!important;
}

// 新增活动样式
.activity-type-box{
  margin-right: 30rpx;
  padding-bottom: 14rpx;
  justify-content: flex-end;
  .bg-name{
    display: inline-block;
    background-image: linear-gradient(270deg,rgba(209,176,133,0.15) 100%,#FFFFFF 14%);
    .type-name{
      width: 120rpx;
      height: 46rpx;
      background: #D1B085;
      border-radius: 23rpx 0rpx 23rpx 23rpx;
      justify-content: center;
      overflow: hidden;

      font-family: PingFangSC-Regular;
      font-size: 24rpx;
      color: #FFFFFF;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
  .type-time{
    padding: 0 14rpx;
    height: 46rpx;
    background-image: linear-gradient(270deg, #FFFFFF 14%, rgba(209,176,133,0.15) 100%);
    border-radius: 0 23rpx 23rpx 0;

    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: $themeColor;
    letter-spacing: 0;
    font-weight: 400;
  }
}
</style>
