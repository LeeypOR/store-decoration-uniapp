<template>
  <view>
    <advert-popup ref="advert" :dataInfo="advertInfo" :advaerInfo="advaerFlag" :location="location" @close="setVipInfo"></advert-popup>
    <vip-popup :dataInfo="vipInfo"></vip-popup>
    <view v-for="(item,index) in exchangeInfo">

       <exchangeAdv ref="exchangeAdv" :exchangeInfo="exchangeInfo" v-if="index==0" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
       <view v-else>
         <exchangeAdv ref="exchangeAdv" :exchangeInfo="exchangeInfo" v-if="exchageId == index" :dataInfo="item" :ids="index" @exchangeClose="setAdvaerInfo" />
       </view>
      
    </view>
  </view>
</template>

<script>
import { mapMutations,mapState  } from 'vuex'
import advertPopup from "./adver/advertPopup";
import vipPopup from "./vipPopup";
import  exchangeAdv  from "./exchangeAdv";
export default {
  components:{advertPopup,vipPopup,exchangeAdv},
  props:{
    refresh:{
      type:String,
      default:''
    },
    location:{
      type:[String,Number],
      default: ""
    }
  },
  computed:{
   ...mapState(['exchangeData']),
   
   
  },
 
  data(){
    return{
      vipInfo:'',
      advertInfo:[],
      advaerFlag:{},
      exchangeInfo:[],
      exchageId:0
    }
  },
  watch:{
    refresh:{
        handler() {
          if(this.refresh){
            this.getPopUpInfo()
          }
        },
        immediate: true
    }
  },
  methods: {
    ...mapMutations(['setVipPopupList','setExchangeList']),
    async getPopUpInfo() {
      let arr = []
      let data
      let res ={}
      try{
         res = await this.$http.exchangeActionList({
        phoneNumber:this.$globleData?.userData?.phoneNumber,
        nickName:this.$globleData?.userData?.nickName
      })
      
      }catch(e){
        //TODO handle the exception
      }
       let someData = new Promise((resolve)=>{
         if(this.exchangeData?.length>0){
           data =this.exchangeData
         }else{
           data = res?.dataInfo || []
         }
         
         data = data.filter(item=>{
          return item.enableWindow == 1
        })
        console.log('data: ', data);
        resolve(data)
      }) 
      arr.push(someData)
     
      // 会员弹窗
      arr.push(this.$http.memberPopup())
      
      // 广告弹窗
      arr.push(this.$http.getAdvert({advertType: 2,advertLocation:this.location}))
     
      const resList = await Promise.allSettled(arr)
      
      console.log('resList: ', resList);
      resList.forEach((item, index) => {
        if(index==0){ //兑换弹窗
          if(item.status == 'fulfilled'&&item?.value){
            this.exchangeInfo = item.value
            this.exchangeInfo.forEach(item=>{
              item.time = new Date()
            })
          }
         if(item.status == 'fulfilled'&& item?.value.length==0){
            this.advaerFlag = {'Date':new Date()}
          }
          
          
        }
        if (index == 1 && item.status == 'fulfilled') {
          const list = this.getVipPopupList || []
          if(item?.value?.dataInfo){
            this.setVipPopupList(list.concat(item?.value?.dataInfo || []))
          }
          return
        }
        if (index == 2) {
          if (item.status == 'fulfilled' && item?.value?.dataInfo?.length>0) {
            if(this.advertInfo.length>0 && !this.$refs.advert.show){
              this.setVipInfo()
              return
            }
            this.advertInfo = [...item?.value?.dataInfo]
            return
          }
          this.setVipInfo()
          return
        }
      })
    },

    setVipInfo() {
      this.vipInfo = {'Date':new Date()}
    },
    

  }
}
</script>

<style scoped>

</style>
