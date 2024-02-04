const comOrderStatus = [
  {
    orderType: 'ORDER_UNPAID', //待付款
    list: [
      {
        name: '取消订单',
        type: 'close',
      },
      {
        name: '去支付',
        type: 'pay',
      },
    ],
  },
  {
    orderType: 'ORDER_UN_ISSUE', //待发货
    list: [
      {
        name: '退款',
        type: 'refund',
      },
      {
        name: '查看开票历史',
        type: 'invoice-history',
      },
    ],
  },
  {
    orderType: 'ORDER_LEFT_WAIT', //待自提
    list: [
      {
        name: '退款',
        type: 'refund',
      },
      {
        name: '查看发票历史',
        type: 'invoice-history',
      },
    ],
    
  },
  {
    orderType: 'ORDER_CANCEL',
    list: [
      {
        name: '删除订单',
        type: 'delete',
      },
      {
        name: '再次购买',
        type: 'but-again',
      },
    ],
  },
  {
    orderType: 'ORDER_UN_RECEIVED', //待收貨
    list: [
      {
        name: '查看物流',
        type: 'check-logistics',
      },
      {
        name: '确认收货',
        type: 'confirm-received',
      },
      {
        name: '加入购物车',
        type: 'add-cart',
      },
      {
        name: '查看发票历史',
        type: 'invoice-history',
      },
    ],
  
  },
  {
    orderType: 'ORDER_UN_EVALUATE',//订单待评价
    list: [
        {
            name: '加入购物车',
            type: 'add-cart'
        },
        {
            name: '评价',
            type: 'evaluate'
        },
    ],
    payList: [
        {
            name: '加入购物车',
            type: 'add-cart'
        },
        {
            name: '评价',
            type: 'evaluate'
        },
        {
            name: '申请开票',
            type: 'to-invoice'
        },
    ],
    srotList: [
        {
            name: '加入购物车',
            type: 'add-cart'
        },
        {
            name: '评价',
            type: 'evaluate'
        },
        {
            name: '查看开票历史',
            type: 'invoice-history'
        }
    ],
},
{
    orderType: 'ORDER_FINISH', //订单已完成
    list:[],
    payList: [
        {
            name: '申请开票',
            type: 'to-invoice'
        },
    ],
    srotList: [
        {
            name: '查看开票历史',
            type: 'invoice-history'
        },
    ],
}
]
const groupStatusList = [
  {
    orderType: 'ORDER_UNPAID', //待付款
    list: [
      {
        name: '取消订单',
        type: 'close',
      },
      {
        name: '查看拼团详情',
        type: 'detaile',
      },
      {
        name: '去支付',
        type: 'pay',
      },
    ],
  },
  {
    orderType: 'ORDER_CANCEL',
    list: [
      {
        name: '删除订单',
        type: 'delete',
      },
      {
        name: '查看拼团详情',
        type: 'detaile',
      },
    ],
  },
  {
    orderType: 'GROUP_RUNNING', //拼团中
    list: [
      {
        name: '查看拼团详情',
        type: 'detaile',
      },
    ],
  },
  {
    orderType: 'GROUP_SUCCESS', //拼团成功
    list: [
      {
        name: '查看拼团详情',
        type: 'detaile',
      },
    ],
  },
  {
    orderType: 'GROUP_FAIL', //拼团失败
    list: [
      {
        name: '删除订单',
        type: 'delete',
      },
      {
        name: '查看拼团详情',
        type: 'detaile',
      },
    ],
  },
]
const detailGroupList = [
  {
    orderType: 'GROUP_RUNNING',
    list: [
      {
        name: '再次参团',
        type: 'collage-again',
      },
      // {
      // 	name: '邀请好友',
      // 	type: 'invite-friends'
      // }
    ],
  },
  {
    orderType: 'GROUP_SUCCESS',
    list: [
      {
        name: '再次拼团',
        type: 'collage-again',
      },
      {
        name: '付尾款',
        type: 'pay-endPay',
      },
    ],
    filterList: [
      {
        name: '再次拼团',
        type: 'collage-again',
      },
    ],
  },
  {
    orderType: 'ORDER_CANCEL',
    list: [
      {
        name: '删除订单',
        type: 'delete',
      },
      {
        name: '再次拼团',
        type: 'collage-again',
      },
    ],
  },
  {
    orderType: 'GROUP_FAIL',
    list: [
      {
        name: '删除订单',
        type: 'delete',
      },
      {
        name: '再次拼团',
        type: 'collage-again',
      },
    ],
  },
  {
    orderType: 'ORDER_UNPAID',
    list: [
      {
        name: '取消订单',
        type: 'close',
      },
      {
        name: '去支付',
        type: 'pay',
      },
    ],
  },
]
export { comOrderStatus, groupStatusList, detailGroupList }
