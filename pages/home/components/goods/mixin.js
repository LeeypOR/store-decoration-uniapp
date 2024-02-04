const systemInfo = uni.getSystemInfoSync();
// import mixin from '../../mixin.js'
export default {
    // mixins:[mixin],
    props:{
        dataInfo:{
            type:Object,
            default:null
        },
        catType:{ //在分分类页面的商品的类型
            type:String,
            default:""
        },
        leftWidth:{
            type:Number,
            default:0,
        },
        pageId: {
          type:String,
          default:""
        }
        // loading:{
        // 	type:Boolean,
        // 	default:false
        // }
    },
    data(){
        return{
            windowsWidth:systemInfo.windowWidth,
            pxToRpxScale:0,
            list:[],
            current: 1,
            groupId:"",//商品分组id
            goodsList:[],
            pageSize:0, //商品分组一页商品数
            groupSize:20, //商品分组一页商品数
            skeletonLoading:true ,//骨架屏显示
            moduleName:'商品',
        }
    },
    onReady() {
        const systemInfo = uni.getSystemInfoSync();
        // px转换到rpx的比例
        let pxToRpxScale = 750 / systemInfo.windowWidth;
        this.pxToRpxScale = pxToRpxScale

    },
    created() {



  },
  watch: {
    pageId: {
      handler (newVal) {


        this.init()

    },
    immediate: true,
    deep:true,
    }
    },
    computed:{
	  imgUrl(){
        return function(val=''){
          if(val && val.indexOf(',')>-1 ){
            return val.split(',')[0]
          }else{
            return val
          }
        }
	  },
	  stylePadding(){
		  if(this.pxToRpxScale){
			  return {
            'padding':`0rpx ${this.dataInfo?.pagePadding*this.pxToRpxScale}rpx`,
            '--width':`${this.imgWidth*this.pxToRpxScale}rpx`
          }
		  }
	  },
	  bgImgMode(){
		  if(this.dataInfo.imgFill=='1'){ //留白
		  //图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'

			  if(this.dataInfo.imgScale == '1'  ){
			  	 return 'heightFix'
			  }else{
				  return 'aspectFit'
			  }

		  }else{
			 return 'aspectFill'
		  }

	  },
	  horizontalMode(){
		  if(this.dataInfo.imgFill=='1'){ //留白	if(this.dataInfo.imgScale == '2'  ){
		  	return 'aspectFit'
		  }else{
		  	 return 'aspectFill'
		  }
	  },
	  wrapWidth(){
		  return this.windowsWidth-Number(this.leftWidth)
	  },
	  imgWidth(){
		  if(this.dataInfo.listStyle==0 || this.dataInfo.listStyle==1 ||this. dataInfo.listStyle==2|| this. dataInfo.listStyle==5){
                // 根据不同的listStyle来计算出图片的宽度
                let length = 0
                if(this.dataInfo.listStyle==5){ //瀑布模式和一行两个的图片宽度是一样的
                    length = 1
                }else{
                    length = Number(this.dataInfo.listStyle)
                }
			 return (this.wrapWidth-this.dataInfo.pagePadding*2-this.dataInfo.imagePadding*length)/(length+1)

		  }else if(this.dataInfo.listStyle==3){
			  return 196
		  }else if(this.dataInfo.listStyle==4){
			 return 60
		  }
	  }	,
	  imgHeight(){
		 let height

		 if(this.dataInfo.imgScale == '0'){//图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
        if(this.dataInfo.listStyle=='4'){
				 height = 3*this.imgWidth/2
			 }else{
                    height = 2*this.imgWidth/3
			 }

		 }else if(this.dataInfo.imgScale == '1'){
                height = this.imgWidth
		 }else if(this.dataInfo.imgScale == '2'){
			 if(this.dataInfo.listStyle=='4'){
                    height = 3*this.imgWidth/4
			 }else{
                    height = 4*this.imgWidth/3
			 }

		 }else if(this.dataInfo.imgScale == '3'){
			 if(this.dataInfo.listStyle=='4'){
                    height = 16*this.imgWidth/9
			 }else{
				    height = 9*this.imgWidth/16
			 }

		 }
		  return height
	  },
	  imageStyle(){
            return {
                'width':this.imgWidth*this.pxToRpxScale+'rpx',
                'height':this.imgHeight*this.pxToRpxScale+'rpx'
            }
	  },
	  imageStyle1(){
            return {
                'width':this.imgHeight*this.pxToRpxScale+'rpx',
                'height':this.imgWidth*this.pxToRpxScale+'rpx',
                'padding':' 10rpx'
            }
	  },
	  marginType(){
		  if(this.dataInfo.listStyle == '0'){//一行一个
		     return 'marginTop'
		  }else{
			 return 'doubleMargin'
		  }
	  },
	  endData(){
            return this.goodsList
	  },
	  // 图片的留白
	  smallImage(){
            let styObj = {
                'with':'100%',
                'height':'100%'
            }
            return styObj
	  },
    },
    methods: {
      init () {
        if(this.dataInfo?.shopListType == 2){ //如果是商品分组
          this.list = this.dataInfo?.shopList || []
          if(this.list?.length){
              this.groupId = this.list[0].id
              if(this.list[0].showAllShop){
                  this.pageSize = 999999
              }else{
        this.pageSize = this.list[0].shopNumber
              }
          }
          this.getGroupList()
      }else if (this.dataInfo?.shopListType == 1){ //商品
          if(this.dataInfo.checkType == '1'){ //商品的正常展示
              let ids = []
          if(this.dataInfo.imageList.length){
                  this.dataInfo.imageList.forEach(item=>{
                      ids.push(item.id)
                  })
            }
              this.dataInfo.imgIds = ids
              if(this.dataInfo && this.dataInfo?.imgIds?.length){
                  this.getGoodsList()
              }

          }
          if(this.dataInfo.checkType == '2'){ //商品分类
             let ids = []
              if(this.dataInfo && this.dataInfo?.imageList?.length){
                  this.dataInfo.imageList.forEach(item=>{
                      ids.push(item.id)
                  })
              }
              this.groupTypeList(ids[0])
          }
        }
      },
        // 获取分组商品
        async groupTypeList (groupId) {
            let buyerType =''
            if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){
                buyerType = this.$globleData?.buyType || ''
            }
            const param = {
                current:this.current,
                size:this.groupSize,
                goodsGroupId: groupId,
                buyerType
            }
            const {dataInfo:res} = await this.$http.goodsList(param)
            this.goodsList = [...this.goodsList,...res?.records || []]
            this.dataInfo.imageList = this.goodsList || []
            await this.loadingFalse()


        },
        // 商品列表
        async getGoodsList(){
            let res = await this.$http.getGoodSMic({ids:this.dataInfo.imgIds})

            this.dataInfo.imageList = res.dataInfo?.dataInfo?.filter(Boolean).filter(item=>{
                if(item?.goodsStatus ){
                    return item.goodsStatus == 2
                }
                return true
            })
            this.goodsList = this.dataInfo.imageList
            await this.loadingFalse()
        },
        tabsChange(index){
		   this.current = index
		   this.groupId = this.list[index].id
		   // 如果是showAllShop 是true的话pagesize就是全部
		   if(this.list[index].showAllShop){
			   this.pageSize = 999999
		   }else{
			   this.pageSize = this.list[index].shopNumber
		   }

		   this.getGroupList()
        },
        loadingFalse(){
            this.skeletonLoading = false;
        },
        // 获取分组商品
        async getGroupList () {
            let buyerType =''
            if(getApp().globalData.freshShopId?.includes(this.$globleData.shopId)){
                buyerType = this.$globleData?.buyType || ''
            }
            const param = {
                current:1,
                size:this.pageSize,
                goodsGroupId: this.groupId,
                buyerType
            }
            const {dataInfo:res} = await this.$http.goodsList(param)
            this.goodsList = res?.records || []
            await this.loadingFalse()
            // this.dataInfo.imageList = this.goodsList || []


        },
        jumpPage(item){
            this.goTo(`/pagesA/shop/goodsDetail?id=${item.id}`)
        }
    }
}
