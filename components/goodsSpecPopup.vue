<template>
  <view>
     <cus-preview-img ref="cusPreviewImg" :list="urls" @closePreviewImage="changeSpec"></cus-preview-img>
     <!-- 规格弹窗 -->
  <u-popup v-model="show" mode="bottom" height="70%" border-radius="30" :z-index="9999999" closeable class="u-p-t-54">
    <view class="popup-content u-flex">
      <view class="shop-info u-flex" v-if="goodsInfo">
        <image class="goods-image" :src="goodsInfo.modelPicture" @click="viewImage"></image>
        <view class="shop-info-detail">
          <view v-if="![5, 6].includes(btnState)">
            <view class="shop-item">
              <view class="shop-info-pri">
                <u-parse :html="getPrice"></u-parse>
              </view>
              <view v-if="goodsInfo &&goodsInfo.membersPrice&& goodsInfo.membersPrice!='0'" class="membersPrice">
                <view>¥{{ switchMoney(goodsInfo.membersPrice)}}</view>
                <image src="../static/image/vip_icon.png" class="vip-icon"></image>
              </view>
            </view>
            
            <view v-if="getMarketPrice!='0'" class="shop-info-pri-del">¥{{ switchMoney(getMarketPrice) }}</view>
          </view>
          <view v-else>
            <view class="shop-info-pri">¥{{ switchMoney(goodsInfo.groupPrice ? goodsInfo.groupPrice : 0)}}</view>
            <view class="shop-info-pri-del">¥{{ switchMoney(goodsInfo.salePrice ? goodsInfo.salePrice : 0) }}</view>
          </view>
          <view v-if="paymentWay!=2" class="shop-info-num">库存数量: （{{ goodsInfo.goodsInventory }}）</view>
        </view>
      </view>
      <view class="u-flex-1" style="width: 100%; overflow-y: scroll; margin-bottom: 20rpx; height: 0">
        <scroll-view scroll-y="true" style="height: 100%">
          <view class="specification-card" v-for="(superiorModel, index) in newSpecList" :key="index">
            <view class="specification-card-title">{{ superiorModel.modelName }}</view>
            <view class="specification-card-detail">
              <!-- <scroll-view scroll-x="true" class="scroll-Box" >
              <view style="white-space: nowrap;">
                <image class="specification-card-detail-image" :class="{'image-active':item == 1}"
                  src="@/static/image/default.jpg" v-for="(item) in 10"></image>
              </view>
            </scroll-view> -->
              <text class="specification-card-detail-name" :class="[
                  selectSpec[superiorModel.modelName] == item.modelId ? 'name-active' : '',item.able ? '' : 'disabled',]"
                @click="goodsSpecClick(superiorModel.modelName, item.modelId, item.able)"
                v-for="(item, index1) in superiorModel.modelList"
                :key="index1">
                {{ item.modelName }}
              </text>
            </view>
          </view>
          <view class="specification-card" v-if="false">
            <view class="specification-card-title">购买方式</view>
            <text
              class="specification-card-detail-name"
              :class="[
                integralId == index ? 'name-active' : '',
                buycom == 0 && index == 1 ? 'disabled' : '',
              ]"
              v-for="(item, index) in integralList"
              :key="index"
              @click="changePointId(index, item)"
              >{{ item.name }}</text
            >
          </view>
          <view class="num-card u-flex" v-if="btnState != 4">
            <text class="buy-num">购买数量</text>
            <u-number-box
              input-width="50"
              :min="1"
              v-model="goodsNum"
              :max="setMaxNum"
              press-time="500"
             
            ></u-number-box>
          </view>
        </scroll-view>
      </view>
      <!--   积分展示   -->
      <integral-inform
        v-if="[2, 3].includes(paymentWay)"
        :useMoney="useMoney"
        :consume="goodsInfo.integralPrice"
      ></integral-inform>
      <view v-if="btnState < 5">
        <!--        <view class="btn-height"></view>-->
        <view class="bottom-btn u-flex" v-if="btnState != 4">
          <text v-if="btnState != 3" @click="addCart">加入购物车</text>
          <text v-if="btnState != 2 " :class="{ 'no-active': !isMoreNum }" @click="buyNow"
            >立即购买</text
          >
        </view>
        <view class="bottom-btn u-flex" v-else>
          <text @click="addCart">确定</text>
        </view>
      </view>
      <view class="bottom-btn u-flex" v-else-if="btnState == 5">
        <text @click="nowGroup" :class="{ 'no-active': !isMoreNum }">立即拼团</text>
      </view>
      <view class="bottom-btn u-flex" v-else-if="btnState == 6">
        <text @click="joinGroup" :class="{ 'no-active': !isMoreNum }">立即参团</text>
      </view>
      <view class="bottom-btn u-flex" v-else-if="btnState == 7">
        <text @click="removeCart" :class="{ 'no-active': !isMoreNum }">删除购物车</text>
      </view>
       <view class="bottom-btn u-flex" v-else-if="btnState == 8">
        <text @click="buyNow" :class="{ 'no-active': !isMoreNum }">立即兑换</text>
      </view>
    </view>
  </u-popup>
  </view>
 
</template>

<script>
import cusPreviewImg from './cus-previewImg/cus-previewImg'
export default {
    components: { cusPreviewImg },
    props: {
        paymentWay: {
            type: [String, Number],
            default: 0,
        },
        goodsId: {
            type: String,
            default: '',
        },
        // 5 拼团 其他的后面拓展  1:加入购物车和立即购买按钮 2:加入购物车按钮 3：立即购买按钮 4：确定按钮,6立即平团 8 兑换专区按钮
        btnState: {
            type: Number,
            default: 1,
        },
        // 商品规格
        specList: {
            type: Array,
            default: () => [],
        },
        // 商品规格选项
        goodsSpecList: {
            type: Array,
            default: () => [],
        },
        // goodsSpecInfo:{
        // 	type: Object,
        // 	default: null
        // },
        goodsSpecIds: {
            type: String,
            default: '',
        },
        buycom: {
            type: Number,
            default: 0,
        },
        // 拼团相关信息
        actionInfo: {
            type: Object,
            default: null,
        },
        // 活动相关信息
        activeInfo: {
            type: Object,
            default: null,
        },
        cardCount:{
            type:[Number,String],
            default:1
        },
        
    },
    data() {
        return {
            specIndex: 0, // 选中规格的索引
            // goodsSpecInfo: {},       ///
            newSpecList: [], // 这个是存放数据的用来判断是否选中
            skuList: [],
            selectSpec: {}, // 选择数据的对象 将已选的数据放在这个对象里面记录下来  用对象的好处在下面深拷贝处就能体验到了
            specNameList: [], // 规格名称集合
            goodsNum: 1,
            integralList: [
                //积分购买方式
                {
                    name: '现金',
                    buyType: 1,
                },
                {
                    name: '现金+积分',
                    buyType: 2,
                },
            ],
            integralId: 0, //选择积分购买方式的id,
            modelIds: '',
            buyType: 1,
            carId:'',//生鲜店加入购物车里面的Id
            makeShow: true,
            urls:[]
        }
    },
    
    watch: {
        specList: {
            handler(newVal) {
              
                // this.init()
                this.newSpecList = newVal || []
                console.log('this.newSpecList: ', this.newSpecList);
            },
            immediate: true,
            deep:true,
        },
        cardCount: {
            handler() {
                this.$nextTick(()=>{
                   
                    this.initGoodsNum()
                })
               
            },
            deep:true,
            immediate: true,
            
        },
        goodsSpecList: {
            handler(newVal) {
                newVal.forEach((item) => {
                    if (item.goodsInventory == 0 || item.groupPrice == -1) {
                        item.modelIds = ''
                    }
                })
                console.log('99999999999',this.cardCount);
                this.goodsNum = this.cardCount
                
                this.newGoodsSpecList = newVal || []
                console.log('this.newGoodsSpecList: ', this.newGoodsSpecList);
                if(newVal?.length){
                  this.init()
                }
                
            },
            immediate: true,
            deep:true
        },
        btnState:{
            handler (newVal,oldVal) {
                if(newVal != oldVal){
                    this.goodsNum = 1
                }
            },
            immediate: true
        }
    },
    computed: {
        useMoney(){
            if(this.paymentWay == 3){
                return ''
            }
            return this.switchMoney(this.goodsInfo?.salePrice || 0)
        },
		  // 判断是否有更多
        isMoreNum(){
            const num = this.goodsInfo?.goodsInventory || 0
            let goodsNum = this.goodsNum
            if(num >0 && goodsNum <= num){
                return true
            }
            return false
        },
		  // 获取划线价
		  getMarketPrice(){
            // if(!this.actionInfo && this.goodsInfo?.membersPrice && this.goodsInfo?.membersPrice != '0'){
            //     return this.goodsInfo?.salePrice || 0
            // }
            return this.goodsInfo?.marketPrice || 0
        },
		  // 设置步步进器数量
        setMaxNum(){
            let num = this.actionInfo?.type || null
            if(num ==2 && [5,6].includes(this.btnState)){
                return 1
            }
            
            if(this.goodsSpecList.length && this.specIndex>=0 &&  this.goodsNum>=this.goodsSpecList[this.specIndex].goodsInventory){
                return this.goodsSpecList[this.specIndex].goodsInventory
            }
            return 100000
        },
        // 显示积分购买 根据是否有活动id来判断
        showBuyWay() {
            if (!this.actionInfo) {
                return true
            }
            return false
        },
        show: {
            get: function () {
                return this.$store.state.showSpecification
            },
            set: function (value) {
                this.$store.commit('setSpecification', value)
            },
        },
        goodsInfo() {
            const list = this.goodsSpecList || []
            if (list.length >= this.specIndex) {
                return list[this.specIndex]
            }
        },
        // 展示积分
        getPrice() {
            const obj = this.goodsInfo
            let moneyArr = this.switchMoney(obj?.salePrice || 0).split('.')
          
            if ([2].includes(this.paymentWay)) {
                return `￥<text style="font-size:44rpx">${moneyArr[0]}</text>.<text style="font-size:30rpx">${moneyArr[1]}</text>+${obj?.integralPrice || 0}积分`
            }
            if (this.paymentWay == 3) {
                return `${obj?.integralPrice}积分`
            }
            // if (!obj?.groupPrice && obj?.membersPrice && obj?.membersPrice != '0') {
            //     return `￥${this.switchMoney(obj?.membersPrice || 0)}`
            // }
           
            return `¥<text style="font-size:44rpx">${moneyArr[0]}</text>.<text style="font-size:30rpx">${moneyArr[1]}</text>`
        },
    },
    mounted() {
    // this.init()
     
    },
    methods: {
        async initGoodsNum(){
          
            if(getApp().globalData.freshShopId.includes(this.$globleData.shopId)){
              try{
                  let carId =''
                  let res = await this.$http.cartList()
                  
                  let arr = this.isSelSpec()
                   console.log('arr: ', arr);
                  //  如果统一规格的就取规格数据里面的第一个里面的id,
                  let modelsId = arr.join(',')?arr.join(','):this.newGoodsSpecList[0].id

                  console.log('arr0000000000',arr.join(','));
                 
                  let dataInfo = res.dataInfo?? []
                  let num =0
               
                  let flagLength =0
                  dataInfo.forEach(item=>{
                    if( modelsId && (item.goodsSpecIds==modelsId || item.goodsModelIds == modelsId)){
                      num+=item.goodsAmount
                      carId = item.id
                    }else {
                      flagLength++
                    }
                  })
                  if(flagLength ==dataInfo?.length ){
                    num = 1
                  }
                  this.goodsNum = num
                  console.log('this.goodsNum = num: ', this.goodsNum);
                  this.carId = carId
                 
                  console.log('cardid', carId);
              }catch(e){
                //TODO handle the exception
              }
             
            }
        },
        async init() {
            this.$nextTick(() => {
                this.specIndex = this.initSpecIndex()
                this.selectSpec = {}
                this.skuList = []
                this.urls = []
                this.newSpecList.forEach((item) => {
                    this.$set(this.selectSpec, item.modelName, '')
                })
               
                this.initSelectSpec()
                this.goodsSpecList.forEach((item, index) => {
                    let obj = {
                        id: index,
                        specs: item?.modelIds?.split(',') || [],
                    }
                    this.skuList.push(obj)
                    this.urls.push(item.modelPicture)
                })
                // 将规格数据处理成我们视图所需要的数据类型
                this.newSpecList = this.newSpecList.map((item) => {
                    return {
                        modelName: item.modelName,
                        modelList: item.modelList.map((its) => {
                            return {
                                modelName: its.modelName,
                                modelId: its.modelId,
                                // 判断是否可以选择
                                able: this.isAble(item.modelName, its.modelId), // 注释的调试看逻辑代码 false
                            }
                        }),
                    }
                })
            })
            // this.initGoodsNum()
             
        },
        // 初始化规格信息
        initSpecIndex() {
            let index = 0
            const list = this.goodsSpecList || []
            for (let id = 0; id < list.length; id++) {
                if (this.goodsSpecIds) {
                    //购物车会有选择的规格id
                    if (list[id].id == this.goodsSpecIds && list[id].goodsInventory != 0) {
                        return id
                    }
                    if (list[id].goodsInventory != 0) {
                        index = id
                        return index
                    }
                } else {
                    if (list[id].goodsInventory != 0) {
                        index = id
                        return index
                    }
                }
            }
        },
        // 初始化 商品规格
        initSelectSpec() {
            const info = this.goodsSpecList[this.specIndex]
            let list = info?.modelIds?.split(',') || []
            let index = 0
            for (let val in this.selectSpec) {
                this.selectSpec[val] = list[index]
                index++
            }
        },
        // 判断规格是否可以被选择  核心函数 key当前的规格的title   value规格值
        isAble(key, value) {
            // 深拷贝 避免被影响
            var copySelectSpec = JSON.parse(JSON.stringify(this.selectSpec))
            // 用对象的好处就在这了 直接赋值当前验证项
            copySelectSpec[key] = value
            // 用数组的 some 方法 效率高 符合条件直接退出循环
            let flag = this.skuList.some((item) => {
                // 条件判断 核心逻辑判断
                let i = 0
                // 这个for in 循环的逻辑就对底子不深的人来说就看不懂了 原理就是循环已经选中的 和 正在当前对比的数据 和 所有的sku对比 只有当前验证的所有项满足sku中的规格或者其他规格为空时 即满足条件 稍微有点复杂 把注释的调试代码打开就调试下就可以看懂了
                for (let k in copySelectSpec) {
                    if (copySelectSpec[k] != '' && item.specs.includes(copySelectSpec[k])) {
                        i++
                    } else if (copySelectSpec[k] == '') {
                        i++
                    }
                }
                // 符合下面条件就退出了 不符合会一直循环知道循环结束没有符合的条件就 return false 了
                return i == this.newSpecList.length
            })
            return flag
        },
        // 点击事件
        goodsSpecClick(key, value, able) {
            if (!able) return
            if (this.selectSpec[key] === value) {
                this.selectSpec[key] = ''
            } else {
                this.selectSpec[key] = value
            }
            // 处理事件回调
            let arr = []
            for (let key in this.selectSpec) {
                arr.push(this.selectSpec[key])
                arr = arr.filter(Boolean)
                if (arr && arr.length == this.newSpecList.length) {
                    this.$emit('setSpecInfo', arr)
                }
            }
            // forEach循环改变原数组
            this.newSpecList.forEach((item) => {
                item.modelList.forEach((its) => {
                    its.able = this.isAble(item.modelName, its.modelId)
                })
            })
            this.selSpecIndex()
            this.initGoodsNum()
        },
        selSpecIndex() {
            let arr = []
            for (let key in this.selectSpec) {
                arr.push(this.selectSpec[key])
            }
            arr = arr.join(',')
            let index = 0
            for (let item of this.goodsSpecList) {
                if (item.modelIds == arr) {
                    this.specIndex = index
                }
                index++
            }
        },
        // 限购处理
        disposeNum() {
            let arr = this.isSelSpec()
            if (!arr) {
                return
            }
            const groupInfo = this.actionInfo || null
            if (!groupInfo) {
                this.$toast('活动商品不存在')
            }
            // 判断是否限购
            if (groupInfo.limitBuyStatus == 1) {
                if (groupInfo?.limitBuyCountNum && this.goodsNum > groupInfo.limitBuyCountNum) {
                    this.$toast('已超出限购数量')
                    return
                }
                if (groupInfo?.limitBuyOrderNum && this.goodsNum > groupInfo.limitBuyOrderNum) {
                    this.$toast(`单次购买商品不能超过${groupInfo.limitBuyOrderNum}件`)
                    return
                }
            }
            return arr
        },
        // 拼团
        joinGroup() {
            if (!this.isMoreNum) {
                return
            }
            const arr = this.disposeNum()
            if (!arr) return
            this.$emit('buyNow', {
                ids: arr,
                goodsNum: this.goodsNum,
                buyType: null,
                buycom: null,
                isGroup: true,
                isJoin: true,
            })
        },
        // 删除购物车
        removeCart(){
            
        },
        // 开团
        nowGroup() {
            if (!this.isMoreNum) {
                return
            }
            const arr = this.disposeNum()
            if (!arr) return
            this.$emit('buyNow', {
                ids: arr,
                goodsNum: this.goodsNum,
                buyType: null,
                buycom: null,
                isGroup: true,
            })
        },
        // 立即购买
        buyNow() {
            if (!this.isMoreNum) {
                return
            }
            let arr = this.isSelSpec()
            if (!arr) {
                return
            }
            if (this.activeInfo) {
                let res = this.disposeActive()
                if (!res) return
            }
            this.$emit('buyNow', {
                ids: arr,
                goodsNum: this.goodsNum,
                buyType: this.buyType,
                buycom: this.buycom,
            })
        },
        // 活动处理
        disposeActive() {
            let obj = this.activeInfo || {}
            if (obj.activityStatu == 1) {
                this.$toast('活动未开始')
                return
            }
            if (obj.activityStatu == 3) {
                this.$toast('活动已结束')
                return
            }
            if (obj.enableLimit == 1) {
                if (!((this.goodsNum || 1) <= obj.limitCount)) {
                    this.$toast('已达到最大购买数量' + obj.limitCount + '件')
                    return
                }
                // 剩余购买数量
                let num =
          obj?.seckillGoodsResponse?.goodsBuyCount || obj?.discountGoodsResponse?.goodsBuyCount || 0
                let count = obj?.limitCount - num
                if (!((this.goodsNum || 1) <= count)) {
                    this.$toast(`剩余购买数量${count > 0 ? count : 0}件`)
                    return
                }
            }
            return true
        },
        // 加入购物车
        async addCart() {
            let arr = this.isSelSpec()
            if (!arr) {
                return
            }

            if (this.activeInfo) {
                let res = this.disposeActive()
                if (!res) return
            }
            this.$emit('addCart', {
                ids: arr,
                goodsNum: this.goodsNum,
                buyType: this.buyType,
                buycom: this.buycom,
                carId:getApp().globalData.freshShopId.includes(this.$globleData.shopId)?this.carId:''
            })
        },
        // 是否选择规格
        isSelSpec() {
            let arr = []
            let msg = ''
            for (let key in this.selectSpec) {
                if (!this.selectSpec[key] && !msg) {
                    msg = key
                }
                arr.push(this.selectSpec[key])
            }
            arr = arr.filter(Boolean)
            if (arr && arr.length < this.newSpecList.length) {
                this.$toast(`请填写${msg}规格信息`)
                return null
            }
            return arr
        },
        // 点击积分购买方式
        changePointId(index, item) {
            if (this.buycom == 0) return
            this.integralId = index

            this.buyType = item.buyType
        },
          viewImage(){
          //  this.param = {
          //   current: this.specIndex,
          //   urls:this.urls,
          // }
          // uni.previewImage(this.param)
          let url = ''
          if(this.urls.length >=this.specIndex){
            url = this.urls[this.specIndex]
          }
          this.$nextTick(
              this.$refs.cusPreviewImg.open(url,this.specIndex)
          )
        },
        changeSpec(index){
          if(index == this.specIndex){
            return
          }
          this.specIndex = index
          this.initSelectSpec()
        }
    },
}
</script>

<style lang="scss" scoped>
// 弹窗内容
.popup-content {
  height: 70vh;
  padding: 20rpx 30rpx 0;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  .shop-info {
    width: 100%;
    padding-top: 30rpx;
    padding-bottom: 20rpx;
    background: #ffffff;

    .goods-image {
      width: 160rpx;
      height: 160rpx;
    }

    .shop-info-detail {
      margin-left: 30rpx;
      .shop-item{
        display: flex;
        align-items: flex-end;
      }
      .shop-info-pri {
        font-size: 36rpx;
        color: #e1544a;
        font-weight: 600;
      }
      .membersPrice{
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 28rpx;
        color: #333333;
        margin-left: 30rpx;
        .vip-icon{
          width: 52rpx;
          height: 28rpx;
          margin-left: 10rpx;
        }
      }
      .shop-info-pri-del {
        margin-top: 4rpx;
        font-size: 20rpx;
        color: #000000;
        text-decoration: line-through;
      }

      .shop-info-num {
        margin-top: 20rpx;
        font-size: 20rpx;
        color: #999999;
        font-weight: 400;
      }
    }
  }

  .specification-card {
    padding: 20rpx 0;
    border-bottom: 1px solid #e6e6e6;
    .name-active {
      background: rgba(232, 183, 89, 0.15);
      border-radius: 10rpx;
      border: 2rpx solid #e8b759;

      font-weight: 600;
      color: #e8b759;
      box-sizing: border-box;
    }
    &-title {
      font-size: 28rpx;
      font-weight: 600;
      color: #000000;
    }

    &-detail {
      &-name {
        display: inline-block;
        background: #f4f4f4;
        border-radius: 10rpx;
        padding: 16rpx 30rpx;

        font-size: 24rpx;
        color: #000000;
        margin-right: 20rpx;
        margin-top: 20rpx;
      }

      &-image {
        margin-right: 20rpx;
        margin-top: 20rpx;
        display: inline-block;
        width: 160rpx;
        height: 160rpx;
        border-radius: 4rpx;
        border: 2rpx solid #f4f4f4;
      }
      .image-active {
        border: 4rpx solid #e8b759;
      }
    }
    .disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }

  .num-card {
    padding-top: 30rpx;
    justify-content: space-between;

    .buy-num {
      font-size: 28rpx;
      color: #000000;
      font-weight: 600;
    }
  }

  .bottom-btn {
    //transform: translateX(-30rpx);
    //border-top: 1px solid #E6E6E6;
    padding-top: 14rpx;
    //position: fixed;
    width: 100vw;
    bottom: 0;
    padding-bottom: calc(calc(env(safe-area-inset-bottom) / 2) + 14rpx);
    background: #ffffff;
    z-index: 1000;
    justify-content: center;

    text {
      flex: 1;
      display: inline-block;
      padding: 15rpx 0;
      justify-content: center;

      text-align: center;
      background: #d1b085;
      border-radius: 45rpx;

      max-width: 600rpx;
      font-size: 28rpx;
      font-weight: 400;
      color: #ffffff;

      &:nth-last-of-type(2) {
        margin-right: 20rpx;
        background: #434343;
      }
    }
  }

  .btn-height {
    margin-top: 30rpx;
    height: calc(calc(env(safe-area-inset-bottom) / 2) + 98rpx);
  }

  .shop-info-height {
    height: 210rpx;
  }

  .active {
    background: rgba(236, 194, 69, 0.15) !important;
    border: 2rpx solid #d1b085 !important;
    color: #d1b085 !important;
  }
}
.no-active {
  background: #999999 !important;
}
</style>
