import { mapState, mapMutations } from 'vuex'
export default {

  data () {
    return {
      exchangeInfo: [],
      exchangeList: [],
      exchageId:0
    }

  },
  onShow () {
    if (this.exchangeData.length) {
      this.exchangeInfo = this.exchangeData
    } else {
      this.getExchangeList()
    }
	  this.exchageId =0
  },
  computed: {
    ...mapState(['exchangeData']),
  },
  methods: {
    ...mapMutations(['setExchangeList']),

    async getExchangeList () {
      let res ={}
      try{
         res = await this.$http.exchangeActionList({
        phoneNumber:this.$globleData?.userData?.phoneNumber,
        nickName:this.$globleData?.userData?.nickName
      })
        this.exchangeInfo = res.dataInfo
        this.exchangeInfo = this.exchangeInfo.filter(item=>{

          item.time = new Date()
          return item.enableWindow == 1
        })
		// if(this.exchangeInfo.length){
		// 	this.comparData()
		// }

      }catch(e){
        //TODO handle the exception
      }
	},
    comparData () {
      console.log('00000',this.exchangeData);

		if (this.exchangeData?.length && this.exchangeData?.length == this.exchangeInfo.length) {
		  for (let item of this.exchangeData) {
        for (let someItem of this.exchangeInfo) {
          if(!item.isCash && item.id==someItem.id){
          item.enableWindow = someItem.enableWindow
        }
      }
		  }
		  this.exchangeInfo = this.exchangeData

		}
		let arr =[]
		if(this.exchangeData?.length && this.exchangeData?.length && this.exchangeData?.length < this.exchangeInfo.length){


			let ids = []
			 this.exchangeData.forEach(item=>{
				ids.push(item.id)
			})
			arr = this.exchangeInfo.filter(item=>ids.indexOf(item.id)<0
			)
			this.exchangeInfo = [...this.exchangeData,...arr]
		}


	}

  }
}




