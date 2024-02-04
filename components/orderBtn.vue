<template>
  <view class="store-btn" :class="direction == 'column' ? 'store-btn-column' : ''">
    <view class="more-btn" v-if="direction != 'column' && list.length > 2">
      <view class="more-name" @click="showMoreBtn">更多</view>
      <view class="more-popUp" v-if="isMoreBtn">
        <view
          class="item-btn"
          v-for="(item, index) in list"
          v-if="index > 1"
          hover-class="viewHoveClass"
          @click="handelItem(item)"
        >
          {{ item.name }}
        </view>
      </view>
    </view>
    <view :class="direction != 'column' ? 'btn-list-box u-flex u-flex-1' : 'btn-change'">
      <view
        @click="handelItem(item)"
        v-for="(item, index) in list"
        :key="index"
        class="btn"
        v-if="direction == 'column' || index < 2"
        :class="direction == 'column' ? 'btn-column' : ''"
      >
        {{ item.name }}
      </view>
    </view>

    <u-modal
      v-model="cancelShow"
      :content="content"
      :title="title"
      show-cancel-button
      border-radius="20"
      :confirm-text="confrimText"
      @confirm="cancelConfirm"
      confirm-color="#FFFFFF"
      cancel-color="#D1B085"
    >
    </u-modal>
    <u-mask
      :show="isMoreBtn"
      @click="clearMoreBtn"
      :custom-style="{ background: 'rgba(0,0,0,0)' }"
    ></u-mask>
  </view>
</template>

<script>
import { comOrderStatus, groupStatusList, detailGroupList } from '@/common/data.js'

export default {
  props: {
    bntData: {
      type: Object,
      default: null,
    },
    direction: {
      type: String,
      default: '',
    },
    groupType: {
      type: String,
      default: 'common', //订单的类型common 普通，group 拼团
    },
  },
  created() {
    let pages = getCurrentPages()
    let page = pages[pages.length - 1]
    let currentPage = page.route

    this.routerPath = currentPage
  },
  watch: {
    bntData: {
      handler(newVal, oldVal) {
        this.newData = newVal
      },
      immediate: true,
    },
  },
  computed: {
    list() {
      let arr = []
      let orderType = ''
      if (this.groupType == 'common') {
        //如果是普通的订单
        if (this.newData.orderStatus) {
          orderType = this.newData.orderStatus
        } else {
          orderType = this.newData.orderGoodsList[0].orderStatus
        }

        comOrderStatus.forEach((item) => {
          //returnGoodsAuditStatus 1 已售后 0 没有售后
          if (orderType == 'ORDER_UN_ISSUE' || orderType == 'ORDER_LEFT_WAIT') {
            // 如果是申请退款了，就不应该展示退款的按钮 或者是购买的方式是paymentWay: 2(现金+固定积分) 3 (纯积分) 的话就不展示退款按钮
            console.log('getApp().globalData.freshShopId.includes(this.$globleData.shopId): ', getApp().globalData.freshShopId.includes(this.$globleData.shopId));
            if (
              (this.newData.returnGoodsAuditStatus == 1 && item.orderType == orderType) ||
              ((this.newData.paymentWay == 3 || this.newData.paymentWay == 2) &&
                item.orderType == orderType)
            ) { 
               arr = []
              
            } else if (
              this.newData.orderActualPrice != '0' &&
              this.newData.orderInvoiceId &&
              item.orderType == orderType
            ) {
              //如果有发表id,并且订单金额不为0 就展示查看发票历史
              arr = item.list
            } else {
              
              if (this.newData.orderActualPrice != '0' && item.orderType == orderType || getApp().globalData.freshShopId.includes(this.$globleData.shopId) && this.newData.orderActualPrice == '0' && item.orderType == orderType) {
                arr = item?.list?.filter((someItem) => {
                  return someItem.type == 'refund'
                })
              }
              
            }
          }
          //待评价类型和已完成的订单需要增加开具发票和发票历史
          else if (orderType == 'ORDER_FINISH' || orderType == 'ORDER_UN_EVALUATE') {
            if (
              this.newData.orderActualPrice != '0' &&
              !this.newData.orderInvoiceId &&
              item.orderType == orderType &&
              this.direction !== 'column'
            ) {
              //订单金额不为0并且没有订单发票的id有 展示开发票的按钮
              if (getApp().globalData.freshShopId?.includes(this.$globleData.shopId)) {
                //生鲜店 不开发票
                arr = item.list
              } else {
                arr = item.payList
              }
            } else if (this.newData.orderInvoiceId && item.orderType == orderType) {
              //有发票订单id的
              arr = item.srotList
            } else {
              if (item.orderType == orderType) {
                arr = item.list
              }
            }
            // 待收货状态
          } else if (orderType == 'ORDER_UN_RECEIVED') {
            // 订单不为0并且有发票id
            if (
              this.newData.orderActualPrice != '0' &&
              this.newData.orderInvoiceId &&
              item.orderType == orderType &&
              this.direction !== 'column'
            ) {
              if (this.newData.returnGoodsAuditStatus == 1) {
                //审核状态0 可以退款 1 已售后
                arr = item.list.filter((someitem) => {
                  if (someitem.type != 'confirm-received') {
                    return true
                  }
                })
              } else {
                arr = item.list
              }
            } else {
              if (item.orderType == orderType) {
                if (this.newData.returnGoodsAuditStatus == 1) {
                  arr = item?.list?.filter((someitem) => {
                    if (!['confirm-received', 'invoice-history'].includes(someitem.type)) {
                      return true
                    }
                  })
                } else {
                  arr = item?.list?.filter((someitem) => {
                    if (someitem.type != 'invoice-history') {
                      return true
                    }
                  })
                }
              }
            }
          } else {
            // 待支付
            if (item.orderType == orderType) {
              // 待支付的赠品订单要把去取消按钮去掉
              
              let orderTypes
              if (this.newData?.orderGoods?.length) {
                orderTypes = this.newData?.orderGoods[0]?.orderType
              } else {
                orderTypes = this.newData.orderGoodsList[0].orderStatus
              }
              if (orderType == 'ORDER_UNPAID' && orderTypes == 'LOTTERY_GIVING_GOODS_ORDER') {
                arr = item.list.filter((someItem) => {
                  return someItem.type != 'close'
                })
              } else {
                arr = item.list
              }
            }
          }
        })
      }
      if (this.groupType == 'group' && this.direction != 'column') {
        //如果是拼团并且是横向的按钮组
        orderType = this.newData.groupOrderStatus
        groupStatusList.forEach((item) => {
          if (item.orderType == orderType) {
            arr = item.list
          }
        })
      }
      if (this.groupType == 'group' && this.direction == 'column') {
        //如果是拼团并且是竖向的按钮组
        orderType = this.newData.groupOrderStatus
        detailGroupList.forEach((item) => {
          if (item.orderType == orderType) {
            if (orderType == 'GROUP_SUCCESS') {
              if (this.newData.endPayStatus == 1 || this.newData.groupActivityType == 1) {
                //付过尾款的不要付尾款按钮
                arr = item.filterList
              } else {
                arr = item.list
              }
            } else {
              arr = item.list
            }
          }
        })
      }
      const goodsType = (this.bntData?.orderGoods || this.bntData?.orderGoodsList || [])[0]
        ?.goodsType
      if (goodsType == 3) {
        arr = arr.filter((item) => {
          if (item.type != 'check-logistics') {
            return true
          }
        })
      }
      return arr
    },
  },
  data() {
    return {
      cancelShow: false,
      content: '',
      newData: null,
      title: '',
      confrimText: '',
      orderGoodsId: '',
      orderId: '',
      orderType: '',
      id: '',
      routerPath: '',
      isMoreBtn: false, // 显示更多按钮
    }
  },
  methods: {
    // 清除更多按钮
    clearMoreBtn() {
      this.isMoreBtn = false
    },
    // 显示跟多按钮
    showMoreBtn() {
      this.isMoreBtn = !this.isMoreBtn
    },
    handelItem(item) {
      if (this.isMoreBtn) {
        this.clearMoreBtn()
      }
      this.orderType = item.type
      // 普通订单
      if (this.groupType == 'common') {
        this.orderId = this.newData.orderId || this.newData.id

        if (this.newData.orderGoods) {
          this.orderGoodsId = this.newData.orderGoods[0].goodsId
          this.id = this.newData.orderGoods[0].id
        }
        if (this.newData.orderGoodsList) {
          this.orderGoodsId = this.newData.orderGoodsList[0].goodsId
          this.id = this.newData.orderGoodsList[0].id
        }
        if (item.type == 'close') {
          this.content = '确认取消订单？'
          this.title = '取消订单'
          this.confrimText = '确定'
          this.cancelShow = true
        } else if (item.type == 'pay') {
          this.cancelShow = false
          // this.noMultipleClicks(this.goPay)
          this.goTo('/pagesA/order/waitPayment?orderId=' + this.orderId)
        } else if (item.type == 'delete') {
          //
          this.content = '删除后订单不可恢复，无法处理您的售后问题，请慎重考虑'
          this.title = '确认是否进行删除？'
          this.confrimText = '删除'

          this.cancelShow = true
        } else if (item.type == 'refund') {
          //退款
          this.cancelShow = false

          this.goTo(
            `/pagesA/afterSales/refund?orderStatus=${
              this.newData.orderStatus
            }&detail=${JSON.stringify(
              this.newData?.orderGoods || this.newData?.orderGoodsList || []
            )}`
          )
        } else if (item.type == 'evaluate') {
          //评价
          this.cancelShow = false
          this.goTo(
            `/pagesA/order/publishComment?orderStatus=${
              this.newData.orderStatus
            }&detail=${JSON.stringify(
              this.newData?.orderGoods || this.newData?.orderGoodsList || []
            )}`
          )
        } else if (item.type == 'confirm-received') {
          //确认收货
          this.cancelShow = false
          this.$u.throttle(this.confirmOrder, 3000)
          
        } else if (item.type == 'but-again') {
          //再次购买
          this.cancelShow = false
          this.goTo(`/pagesA/shop/goodsDetail?id=${this.orderGoodsId}`)
        } else if (item.type == 'extend-received') {
          //延长收货
          this.cancelShow = false
          this.$u.throttle(this.extendRecieve, 3000)
          
        } else if (item.type == 'check-logistics') {
          //延长收货
          this.cancelShow = false
          this.goTo(`/pagesA/shop/logistic?orderId=${this.id}`)
        } else if (item.type == 'add-cart') {
          //添加购物城
          this.cancelShow = false
          
          this.$u.throttle(this.addCart, 3000)
        } else if (item.type == 'to-invoice') {
          //开具发票
          // this.goTo(`/pagesD/invoice/addRise?type=3&orderId=${this.orderId}&orderGoodsId=${this.id}`)
          this.goTo(`/pagesD/invoice/invoiceOrder`)
        } else if (item.type == 'invoice-history') {
          //开具发票历史
          this.goTo(
            `/pagesD/invoice/details?orderId=${
              this.newData?.orderInvoiceId || ''
            }&goodsList=${JSON.stringify(this.newData.orderGoods)}`
          )
        }
      }
      // 拼团订单
      if (this.groupType == 'group') {
        this.orderId = this.newData.groupOrderId
        if (item.type == 'detaile') {
          //查看详情
          this.goTo(`/pagesA/order/groupDetail?groupOrderId=${this.orderId}`)
        } else if (item.type == 'close') {
          //取消订单
          this.content = '确认取消订单？'
          this.title = '取消订单'
          this.confrimText = '确定'
          this.cancelShow = true
        } else if (item.type == 'delete') {
          this.content = '删除后订单不可恢复，无法处理您的售后问题，请慎重考虑'
          this.title = '确认是否进行删除？'
          this.confrimText = '删除'
          this.cancelShow = true
        } else if (item.type == 'pay') {
          this.cancelShow = false
          this.$u.debounce(this.goGroupPay, 2000)
        } else if (item.type == 'collage-again') {
          this.cancelShow = false
          //
          this.goTo(
            `/pagesA/shop/goodsDetail?id=${this.newData.goodsId}&activeId=${this.newData.groupActivityId}`
          )
        } else if (item.type == 'pay-endPay') {
          //付尾款
          this.cancelShow = false

          this.payEnd(this.newData.goodsOrderId)
        }
      }
    },
    // 付尾款
    payEnd(id) {
      this.noMultipleClicks(async () => {
        const { dataInfo: res } = await this.$http.payGroupEnd({ groupOrderId: id })
        this.payDispose(res)
      })
    },

    // 添加购物车
    async addCart() {
      let goodsId, goodsSpecIds, goodsAmount
      if (this.newData.orderGoods) {
        goodsId = this.newData.orderGoods[0].goodsId
        goodsSpecIds = this.newData.orderGoods[0].goodsClassificationId
        goodsAmount = this.newData.orderGoods[0].goodsNum
      } else {
        goodsId = this.newData.orderGoodsList[0].goodsId
        goodsSpecIds = this.newData.orderGoodsList[0].goodsClassificationId
        goodsAmount = this.newData.orderGoodsList[0].goodsNum
      }
      const param = {
        goodsId,
        goodsSpecIds,
        goodsAmount,
      }
      try {
        let res = await this.$http.cartAdd(param)
        if (res.returnCode == 1000) {
          this.$toast('添加购物车成功')
          this.goTo('/pages/shop/shopCart', true)
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 确认收货
    async confirmOrder() {
      try {
        let res = await this.$http.confirmOrder({
          orderGoodsId: this.id,
          liftType: 2,
        })
        if (res.returnCode == 1000) {
          this.$toast('确认收货成功')
          this.$parent.fetchOrderList()
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 延长收货
    async extendRecieve() {
      try {
        let res = await this.$http.extendReceive({
          orderGoodsId: this.id,
        })
        if (res.returnCode == 1000) {
          this.$toast('延长收货成功')
          this.$parent.fetchOrderList()
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 取消模态框确认按钮
    async cancelConfirm() {
      if (this.orderType == 'close') {
        if (this.groupType == 'common') {
          //普通订单取消
          try {
            let res = await this.$http.cancelOrder({
              orderId: this.orderId,
            })
            if (res.returnCode == 1000) {
              this.$toast('订单取消成功')
              this.$parent.page = 1
              this.$parent.fetchOrderList()
            }
          } catch (error) {
            console.log(error);
          }
        }

        if (this.groupType == 'group') {
          //拼团订单取消
          try {
            let res = await this.$http.groupCancelOrder({
              groupOrderId: this.orderId,
            })
            if (res.returnCode == 1000) {
              this.$toast('拼团订单取消成功')
              if (this.routerPath == 'pagesB/myCollage/index') {
                this.$parent.page = 1
                this.$parent.fetchOrderList()
              } else {
                this.goBackPage()
              }
            }
          } catch (error) {
            console.log(error);
            
          }
        }
      } else if (this.orderType == 'delete') {
        if (this.groupType == 'common') {
          //普通订单删除
          try {
            let res = await this.$http.deleteOrder({
              orderId: this.orderId,
              orderGoodsId: this.orderGoodsId,
            })
            if (res.returnCode == 1000) {
              this.$toast('订单删除成功')
              if (this.routerPath == 'pagesA/mine/myOrder') {
                this.$parent.page = 1
                this.$parent.fetchOrderList()
              } else {
                this.goBackPage()
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
        if (this.groupType == 'group') {
          //拼团订单删除

          try {
            let res = await this.$http.groupDeleteOrder({
              groupOrderId: this.orderId,
            })
            if (res.returnCode == 1000) {
              this.$toast('订单删除成功')
              if (this.routerPath == 'pagesB/myCollage/index') {
                this.$parent.page = 1
                this.$parent.fetchOrderList()
              } else {
                this.goBackPage()
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
    // 拼团订单支付
    async goGroupPay() {
      try {
        const { dataInfo: res } = await this.$http.payGroup({ groupOrderId: this.orderId })
        this.payDispose(res)
      } catch (error) {
        console.log(error);
      }
    },
    // 普通订单去支付
    async goPay() {
      try {
        let groupType = this.newData?.groupActivityType || null

        let type = groupType ? 1 : 2 //1 拼团 2 普通
        let orderPayType = getApp().globalData.freshShopId?.includes(this.$globleData.shopId) ? 4 : 7
        const { dataInfo: res } = await this.$http.payWxOrder({
          orderId: this.orderId,
          orderPayType,
        })

        // this.$eventPlugInCode({
        //   ...this.codeParam,
        //   title: '商品详情',
        //   orderId: this.orderId,
        //   type: '4',
        // })
        this.payDispose(res)
        return res
      } catch (error) {
        console.log(error);
      }
    },
    // 支付回调
    payDispose(res) {
      const paySign = res?.paySign || ''
      // 如果获取失败 就直接跳转到订单待支付页面
      if (!paySign) {
        // 跳转待支付页面
        this.goTo('/pagesB/myCollage/index', false, true)
        return
      }
      let groupType = this.newData?.groupActivityType || null
      let type = groupType ? 1 : 2 //1 拼团 2 普通
      // 成功 调起微信支付
      wx.requestPayment({
        timeStamp: res.timeStamp,
        nonceStr: res.nonceStr,
        package: res.packageValue,
        signType: res.signType,
        paySign: res.paySign,
        success: () => {
          this.goTo('/pagesA/shop/paySuccess?type=' + type)
        },
        fail: () => {
          // this.goTo('/pagesB/myCollage/index', false, true)
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.store-btn {
  margin-top: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn {
    min-width: 180rpx;
    padding: 15rpx 30rpx;
    margin-left: 20rpx;
    border: 1rpx solid $themeColor;
    border-radius: 45rpx;
    font-size: 28rpx;
    color: $themeColor;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-of-type {
      border: none;
      color: #ffffff;
      background: #d1b085;
      border-radius: 45px;
    }
  }

  .store-btn-yellow {
  }
}

.store-btn-column {
  display: flex;
  flex-direction: column-reverse;

  .btn-column {
    width: 690rpx;
    height: 90rpx;
    margin: 30rpx auto 0;
    border-radius: 45rpx;
    border: 2rpx solid #999999;
    border-radius: 45rpx;
    font-size: 28rpx;
    color: #666666;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;

    // &:first-of-type {
    // 	border: none;
    // 	color: #FFFFFF;
    // 	background: #E8B759;
    // }
    &:first-of-type {
      margin-bottom: 89rpx;
    }
  }
}
.more-btn {
  position: relative;
  // z-index: 99;
  .more-name {
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }

  .more-popUp {
    //padding-top:38rpx ;
    z-index: 100779;
    top: 64rpx;
    left: -4rpx;
    position: absolute;
    width: 260rpx;
    background: #ffffff;
    border-radius: 14rpx;
    box-shadow: 0px 4rpx 20rpx 0px rgba(0, 0, 0, 0.1);
    &:before {
      content: '';
      position: absolute;
      top: -20rpx;
      left: 20rpx;
      width: 0;
      height: 0;
      border-left: 14rpx solid transparent;
      border-right: 14rpx solid transparent;
      border-bottom: 20rpx solid rgba(255, 255, 255, 0.9);
      //border-bottom: 20rpx solid red;
    }
    .item-btn {
      padding: 20rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #191919;
      border-bottom: 2rpx solid #e9e9e9;
    }
  }
}

.btn-list-box {
  justify-content: flex-end;
}
.btn-change {
  display: flex;
  flex-direction: column-reverse;
}
.viewHoveClass {
  background: #f8f8f8;
}
</style>
