export default {
	computed:{
		couponType(){
			return (val)=>{
				if(val.couponType==0){
					return '满减券兑换卡'
				}else if(val.couponType==1){
					return '礼品券兑换卡'
				}else if(val.couponType==2){
					return '折扣券兑换卡'
				}else if(val.couponType==3){
					return '权益满减券兑换卡'
				}else if(val.couponType==4){
					return '权益折扣券兑换卡'
				}
				
			}
		},
		couponName(){
      return (val) => {
				if(val.couponType==0){
					return '满减券'
				}else if(val.couponType==1){
					return '礼品券'
				}else if(val.couponType==2){
					return `折扣券`
				}else if(val.couponType==3){
					return '权益满减券'
				}else if(val.couponType==4){
					return '权益折扣券'
				}
				
			}
		},
		couponDesc(){
			return (val,money=100)=>{
				if(val.couponFullMoney=='-1'){
				    if(val.couponType==2){
						return `无门槛享受${val.discountRatio}折扣`
					}else{
						return '无门槛'
					}
					
				}else {
					if(val.couponType==2){
						return `满${val.couponFullMoney/money}享受${val.discountRatio}折扣`
					}else{
						return `满${val.couponFullMoney/money}减${val.couponAmount/money}`
					}
				}
				
			}
		},
	}
}
