// 退款原因 仅退款
export const refundReason = [
    {
        name:'我不想要了',
        type:'',
        isActive:''
    },
    {
        name:'多拍/错拍/不想要',
        type:'',
        isActive:''
    },
    {
        name:'未按约定时间发货',
        type:'',
        isActive:''
    },
    {
        name:'其他',
        type:'',
        isActive:''
    }
]

// 退款原因 退货
export const salesReturnReason = [
    {
        name:'7天无理由退货',
        type:'',
        isActive:''
    },
    {
        name:'拍错/不喜欢/效果不好',
        type:'',
        isActive:''
    },
    {
        name:'大小尺寸与商品描叙不符',
        type:'',
        isActive:''
    },
    {
        name:'收到商品少件／破损或污渍',
        type:'',
        isActive:''
    },
    {
        name:'颜色／款式／描叙不符',
        type:'',
        isActive:''
    },
    {
        name:'其他',
        type:'',
        isActive:''
    }
]

export const refundDetailByType = {
    'TO_AUDIT-1': {
        title: '您已成功发起退款申请，请耐心等待商家处理',
        tip: [
            '商家同意或者超时未处理，系统将退款给您',
            '如果商家拒绝，您可以修改退款申请后再发起，商家会重新处理'
        ]
    },
    'REFUND_OF-1': {
        title: '您已成功发起退款申请，请耐心等待商家处理',
        tip: [
            '商家同意或者超时未处理，系统将退款给您',
            '如果商家拒绝，您可以修改退款申请后再发起，商家会重新处理'
        ]
    },
    'TO_AUDIT-2': {
        title: '您已成功发起退款申请，请耐心等待商家处理',
        tip: [
            '商家同意或者超时未处理，系统将退款给您',
            '如果商家拒绝，您可以修改退款申请后再发起，商家会重新处理',
            '如商家超时未处理，退货申请将达成，请按系统给出的退货地址 退货'
        ]
    },
    'WAITING_DELIVERY-2': {
        title: '商家已同意退货，请按照下方地址退货并填写物流信息',
        tip: [
            '未与商家协商一致，请勿使用到付或平邮，以免商家拒签货物',
            '请填写真实物流信息，逾期未填写，退货申请将被撤销'
        ]
    },
    'USER_CANCEL-1': {
        title: '因您撤销了退款申请，退款已关闭，交易将正常进行',
    },
    'USER_CANCEL-2': {
        title: '因您撤销了退款申请，退款已关闭，交易将正常进行',
    },
    'REFUND_OF-2': {
        title: '您已成功发起退款申请，请耐心等待商家处理',
        tip: [
            '商家同意或者超时未处理，系统将退款给您',
            '如果商家拒绝，您可以修改退款申请后再发起，商家会重新处理'
        ]
    },
    'REFUND_FINISH-1': {
        title: '商家已同意您的退款申请',
    },
    'REFUND_FINISH-2': {
        title: '商家已同意您的退款申请',
    },
    'TO_AUDIT-3':{
        title:'您已成功发起换货申请，请耐心等待商家处理',
        tip:[
            '商家同意或者超时未处理，系统将换货给您',
            '如果商家拒绝，您可以修改换货申请后再发起，商家会重新处理',
            '如商家超时未处理，换货申请将达成，请按系统给出的换货地址 退货'
        ]
    },
    'APPROVE_AUDIT-3':{
        title:'商家已同意换货，请按照下方地址退货并填写物流信息',
        tip:[
            '未与商家协商一致，请勿使用到付或平邮，以免商家拒签货物',
            '请填写真实物流信息，逾期未填写，退货申请将被撤销'
        ]
    },
    'EXCHANGE_GOODS_FINISH-3':{
        title:'换货商品已收到货',
    },
    'USER_CANCEL-3':{
        title:'用户自行取消',
    },
    'REVIEW_FAILED-3':{
        title:'商家审核不通过',
    },

}

export const refundState = {
    'TO_AUDIT-1': {
        index: 1,
        title: '请等待商家处理'
    },
    'REFUND_OF-1': {
        index: 1,
        title: '请等待商家处理'
    },
    'TO_AUDIT-2': {
        index: 1,
        title: '请等待商家处理'
    },
    'WAITING_DELIVERY-2': {
        index: 1,
        title: '商家已同意退货，请退货并填写物流信息'
    },
    'WAITING_GOODS-2': {
        index: 2,
        title: '商品退货中',
        isShowLogistics: true
    },
    'REFUND_OF-2':{
        index: 3,
        title:'请等待商家处理',
    },
    'TO_AUDIT-3':{
        index:1,
        title:'请等待商家处理'
    },
    'APPROVE_AUDIT-3':{
        index:1,
        title:'商家已同意换货，请退货并填写物流信息'
    },
    'BUYER_SEND_BACK-3':{
        index:2,
        title:'商品退货中',
        isShowLogistics: true
    },
    'RECEIVED_GOODS-3':{
        index:3,
        title:'商家寄回商品',
        isShowLogistics: true
    },
    'AGAIN_DELIVER_GOODS-3':{
        index:3,
        title:'商家寄回商品',
        isShowLogistics: true
    }
}
