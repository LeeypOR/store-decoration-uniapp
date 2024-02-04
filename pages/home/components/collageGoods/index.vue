<template>
	<view>
		<view :class="['goods-container']"
			:style="{'padding':`0 ${dataInfo.pagePadding*pxToRpxScale}rpx`}">
			<view
				:class="[{'box-shandow':dataInfo.shopType == '1'},{'is-boderRaius':dataInfo.angleType == '1'},{'wrap-flex':dataInfo.listStyle=='1'}]"
				:style="[{'margin-top':dataInfo.imagePadding*pxToRpxScale+'rpx'},{'margin-right':dataInfo.listStyle==3?dataInfo.imagePadding*pxToRpxScale+'rpx':''},{'width':dataInfo.listStyle == '0'?imgWidth*pxToRpxScale+'rpx':'100%'}]"
				v-for="(item,index) in goodsList" :key="index"
				@click="jumpPage(item)">
				<view :style="[bgImage]" style="position: relative;">

          <view class="img " :style="[wrapImage]">
									<image mode="aspectFill" :style="[smallImage]" :class="[{'img-boderRaius':dataInfo.angleType == '1'&& dataInfo.imgFill !='1'}]"
										:src="imgUrl(item.goodsPictures)">
									</image>
									<!-- 成团人数 -->
									<view :style="[agglomerateStyle]" class="agglomerate">
										{{item.successMemberNum}}人已团
									</view>
									<!-- 商品角标 -->
									<view v-if="dataInfo.shopBadge"
										:class="[{'bage-3':dataInfo.badgeType==3},{'bage':dataInfo.badgeType==2},{'bage-1':dataInfo.badgeType==1}]"
										:style="[badgeStyle]">
										{{dataInfo.badgeType ==1?'畅销':(dataInfo.badgeType ==2?'火拼':'')}}
										<image mode="aspectFill" :src="dataInfo.badgeImgUrl"></image>
									</view>
             </view>
					    <text v-if="dataInfo.appearanceStyle ==2" :style="[iconLeft]" class="iconfont icon-icon_pintuan_jiaob_left"></text>
						<text v-if="dataInfo.appearanceStyle ==2" :style="[iconLeft]" class="iconfont icon-icon_pintuan_jiaob_right"></text>

          <!-- 拼团倒计时 大图模式 -->
          <view v-if="dataInfo.listStyle == '0' && dataInfo.countdownShow " class="mark-acitve" :style="[collageBg]">
            <view class="collage">
              拼团
            </view>
            <view class="count-down">
              <view class="count-text">
                {{ timeName(item) }}
              </view>
              <view style="position: absolute;transform: translateX(-999rpx)">
                {{ timeObj[`timing+${index}`] || downTime(getTime(item),`timing+${index}`, 'day', false) }}
              </view>
              <view class="time-big u-flex">

                {{ timeObj[`timing+${index}`] }}
              </view>

            </view>
          </view>

						 <!-- 详情模式 -->
						 <view :style="[collageBg]" v-if="dataInfo.listStyle == '1'&& dataInfo.countdownShow " class="mark-acitve-item">
						 	<view class="detail-mark">
						 		<view class="count-text" :class="dataInfo.showType == 1?'count-color':''">
						 			{{timeName(item)}}
						 		</view>
								<view style="position: absolute;transform: translateX(-999rpx)">{{timeObj[`timing+${index}`] || downTime(getTime(item),`timing+${index}`,'obj')}}</view>
								<view class="time u-flex">
								  {{timeObj[`timing+${index}`].day || 0}}天
								  <text class="time-span u-flex">{{timeObj[`timing+${index}`].hr || 0}}</text>:
								  <text class="time-span u-flex">{{timeObj[`timing+${index}`].min || 0}}</text>:
								  <text class="time-span u-flex">{{timeObj[`timing+${index}`].sec || 0}}</text>
								</view>

              </view>

						 </view>
					</view>

                <view :class="dataInfo.listStyle == '1'?'content-flex':''">
                	<view class="title-0 u-line-1" v-if="dataInfo.shopName"
                		:style="{'font-weight':dataInfo.titleThickness}">
                		<text class="num-group">{{item.completeNum}}人团</text><text>{{item.goodsName}}</text>
                	</view>
                	<view v-if="dataInfo.shopDescription" :class="dataInfo.listStyle == '0'?'desc-0':'desc-1'"
                		class=" u-line-1">
                		<!-- <text v-html="item.goodsSellingPoint"></text> -->
                		<u-parse :html="item.description"></u-parse>
                	</view>
                	<!-- <view v-if="dataInfo.shopDescription" class="sales">
                		已售：{{item.goodsSales || item.realSales?item.realSales:0}}件
                	</view> -->
                	<view class="price u-flex u-row-between u-col-center">
                		<view class="total">
                			<text :class="dataInfo.listStyle == '0'?'pic':'pic-1'">¥</text>
                			<text :class="dataInfo.listStyle == '0'?'price-num':'price-num-1'">{{switchMoney(item.prePayPrice)}}</text>
							<text class="discount">{{switchMoney(item.goodsSalePrice)}}</text>
                		</view>
                		<view v-if="dataInfo.shopBuyBtn && dataInfo.btnType == 1 "
                			class="cart u-flex u-row-center u-col-center">
                			<text class="iconfont icon-app_icon_gouwuche"></text>
                		</view>
                		<view v-if="dataInfo.shopBuyBtn && dataInfo.btnType == 2" class="buys-type"
                			:class="dataInfo.listStyle!='0'?'buys-type-2':''">
                			马上抢
                		</view>
                	</view>
                </view>

			</view>
		</view>

	</view>

</template>
<script>
	const systemInfo = uni.getSystemInfoSync();
	import mixin from '../../mixin.js'
	export default {
		mixins:[mixin],
		props: {
			catType: { //在分分类页面的商品的类型
				type: String,
				default: ""
			},
			dataInfo:{
				type:Object,
				default:null
			},
		},
		data () {
			return {
        moduleName:'拼团组件',
				goodsList:[],
				windowsWidth: systemInfo.windowWidth,
				pxToRpxScale: 0,

			}
		},

		created(){

			if(this.dataInfo.ids){
				 this.groupActivity()
			}
		},
		onReady () {
			const systemInfo = uni.getSystemInfoSync();
			// px转换到rpx的比例
			let pxToRpxScale = 750 / systemInfo.windowWidth;
			this.pxToRpxScale = pxToRpxScale

		},
		computed: {
      // 自定义模式背景图
      bgImage(){
          if(this.dataInfo.showType == 1 && this.dataInfo.backgroundImgUrl){ //自动应以莫惹是
				  let styObj ={
             'background':`url(${this.dataInfo.backgroundImgUrl} ) no-repeat`,
             'background-size':'cover'
				   }
           return styObj
				 }
      },
			imgUrl(){
				return function(val=''){
					if(val && val.indexOf(',')>-1 ){
						return val.split(',')[0]
					}else{
						return val
					}
				}
			},
			wrapWidth () {
				if (this.catType == 'TST') {
					return this.windowsWidth - 90
				} else {
					return this.windowsWidth
				}
			},
			imgWidth () {
				if (this.dataInfo.listStyle == 0) { //大图模式
					// 根据不同的listStyle来计算出图片的宽度
					if (this.catType == 'TST') {
						return (this.windowsWidth - 90 - this.dataInfo.pagePadding * 2)
					} else {
						return (this.windowsWidth - this.dataInfo.pagePadding * 2)
					}

				}else{ // 详情列表
					if (this.catType == 'TST') {
						return (this.windowsWidth - 90 - this.dataInfo.pagePadding * 2)*0.4
					} else {
						return (this.windowsWidth - this.dataInfo.pagePadding * 2)*0.4
					}
				}
			},
			imgHeight () {
				let height
				if(this.dataInfo.listStyle == 0){ //大图模式
					if (this.dataInfo.imgScale == '0') { //图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
						height = 2 * this.imgWidth / 3
					} else if (this.dataInfo.imgScale == '1') {
						height = this.imgWidth
					} else if (this.dataInfo.imgScale == '2') {
						height = 4 * this.imgWidth / 3
					} else if (this.dataInfo.imgScale == '3') {
						height = 9 * this.imgWidth / 16
					}
				}else{
					height = this.imgWidth
				}


				return height
			},
			// 拼团倒计时背景颜色
			collageBg(){
				let styObj = {}
				if(this.dataInfo.showType == 0){ //系统样式
					styObj = {'background':`${this.colorRgb(this.dataInfo.systembgColor,this.dataInfo.transparency/100)}`}
				}

				return styObj
			},
			// 拼团图片盒子的样式
			wrapImage(){
				let styObj = {}
				if(this.dataInfo.showType == 0){ //系统样式
				   styObj ={
            'width':this.imgWidth*this.pxToRpxScale+'rpx',
            'height':this.imgHeight*this.pxToRpxScale+'rpx',
            'border-left': `${this.dataInfo.strokeSize*this.pxToRpxScale}rpx solid ${this.colorRgb(this.dataInfo.systemborderColor,this.dataInfo.transparency/100)}`,
            'border-right': `${this.dataInfo.strokeSize*this.pxToRpxScale}rpx solid ${this.colorRgb(this.dataInfo.systemborderColor,this.dataInfo.transparency/100)}`,
            'border-top': `${this.dataInfo.strokeSize*this.pxToRpxScale}rpx solid ${this.colorRgb(this.dataInfo.systemborderColor,this.dataInfo.transparency/100)}`
				   }
				}else{
					styObj ={
						'width':this.imgWidth*this.pxToRpxScale+'rpx',
						'height':this.imgHeight*this.pxToRpxScale+'rpx',
						'padding':`${this.dataInfo.strokeSize*this.pxToRpxScale}rpx ${this.dataInfo.strokeSize*this.pxToRpxScale}rpx 0 `
					}
				}
				return styObj
			},
			// 拼团自定义图片透明度
			customizeImage(){
				let styObj = {
					'filter': `opacity(${this.dataInfo.transparency}%)`,
					'-webkit-filter': `opacity(${this.dataInfo.transparency}%)`
				}
				return styObj
			},
			// 图片的留白
			smallImage(){
				let styObj = {
					'with':'100%',
					'height':'100%'
				}
				// if(this.dataInfo.showType == 0){ //系统样式
					if(this.dataInfo.imgFill == '1'){ //图片留白
						if(this.dataInfo.imgScale == '0' ||this.dataInfo.imgScale == '3' ){//图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
							styObj = {
								'width':this.imgHeight*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
								'height':this.imgHeight*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
								'margin-left':(this.imgWidth-this.imgHeight-2*this.dataInfo.strokeSize)/2*this.pxToRpxScale +'rpx'
							}
						}
						if(this.dataInfo.imgScale == '2'  ){

							styObj = {
								'width':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
								'height':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
								'margin-top':(this.imgHeight-this.imgWidth-this.dataInfo.strokeSize)/2*this.pxToRpxScale +'rpx'
							}
						}
						if(this.dataInfo.imgScale == '1'  ){
							styObj = {
								'width':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
								'height':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
							}
						}
					}
				// }
				return styObj
			},
			// 人团人数的位置
			agglomerateStyle(){
				let styObj = {
					'left':'16rpx',
					'bottom': '20rpx'
				}
				if(this.dataInfo.showType == 0){ //系统样式
				    if(this.dataInfo.imgFill == '1'){ //图片留白
						if(this.dataInfo.imgScale == '0' ||this.dataInfo.imgScale == '3' ){//图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
							styObj = {
								'left':(this.imgWidth-this.imgHeight-2*this.dataInfo.strokeSize)/2*this.pxToRpxScale +16 +'rpx',
								'bottom': '20rpx'
							}
						}
						if(this.dataInfo.imgScale == '2' ){//图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
							styObj = {
								'left':'16rpx',
								'bottom': (this.imgHeight-this.imgWidth-this.dataInfo.strokeSize)/2*this.pxToRpxScale+20 +'rpx'
							}
						}
					}

				}else{
					styObj = {
						'left':(this.dataInfo.strokeSize)*this.pxToRpxScale+20 +'rpx',
						'bottom': '20rpx'
					}
				}
				return styObj
			},
			badgeStyle(){

				let styObj = {
					'top': '10rpx',
					'left': '10rpx'
				}
				if(this.dataInfo.showType == 0){ //系统样式
				 //    if(this.dataInfo.imgFill == '1'){ //图片留白
					// 	if(this.dataInfo.imgScale == '0' ||this.dataInfo.imgScale == '3' ){//图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
					// 		styObj = {
					// 			'left':(this.imgWidth-this.imgHeight-2*this.dataInfo.strokeSize)/2*this.pxToRpxScale +20 +'rpx',
					// 			'top': '20rpx'
					// 		}
					// 	}
					// 	if(this.dataInfo.imgScale == '2' ){//图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
					// 		styObj = {
					// 			'left':'20rpx',
					// 			'top': (this.imgHeight-this.imgWidth-this.dataInfo.strokeSize)/2*this.pxToRpxScale+20 +'rpx'
					// 		}
					// 	}
					// }

				}else{ //高级设置自定义图片
					styObj = {
						'left':(this.dataInfo.strokeSize)*this.pxToRpxScale+20 +'rpx',
						'top': (this.dataInfo.strokeSize)*this.pxToRpxScale+20 +'rpx'
					}
				}
				return styObj
			},
			iconLeft(){
				let styObj ={
					'color' :`${this.colorRgb(this.dataInfo.systemborderColor,this.dataInfo.transparency/100)}`
				}
				return styObj
			},
		},
		methods: {
      timeName(item){
          const staNum = new Date((item?.startTime?.replace(/-/g,'/'))).getTime()
				  const now = new Date().getTime()
				  const endNum = new Date((item?.endTime?.replace(/-/g,'/'))).getTime()
				  if(staNum > now){
					    return '距开始'
				  }
				  if(now>=staNum && now<=endNum){

					  if(this.dataInfo.listStyle == '1'){//小图模式
						 return '距结束'
					  }else{
						  return '距结束仅剩'
					  }
				  }
				  if( now>endNum){
					   return  '活动结束'
				  }
      },
      getTime(item){
				  const staNum = new Date((item?.startTime?.replace(/-/g,'/'))).getTime()
				  const now = new Date().getTime()
				  const endNum = new Date((item?.endTime?.replace(/-/g,'/'))).getTime()
				  if(staNum > now){
						return staNum /1000

				  }
				  if(now>=staNum && now<=endNum){
					   return endNum /1000
				  }
				  if( now>endNum){
					   return endNum /1000
				  }
			  },
			async groupActivity(){
				let res =await this.$http.groupActivity({ids:this.dataInfo.ids})
        const isSaleOut = this.dataInfo?.isSaleOut || false
				this.goodsList = (res?.dataInfo || []).filter(item =>{
				  let endTime =new Date(item.endTime.replace(/-/g, '/')).getTime()
          let newTiem = new Date().getTime()
				  if(endTime>newTiem && (item.goodsInventory || isSaleOut)){
				    return true
          }
          return false
        })
			},
             // 十六进制转换成rgb
			colorRgb(val,opacity){
				 // 16进制颜色值的正则
				  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
				  // 把颜色值变成小写
				  var color = val.toLowerCase();
				  if (reg.test(color)) {
				    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
				    if (color.length === 4) {
				      var colorNew = "#";
				      for (var i = 1; i < 4; i += 1) {
				        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
				      }
				      color = colorNew;
				    }
				    // 处理六位的颜色值，转为RGB
				    var colorChange = [];
				    for (var i = 1; i < 7; i += 2) {
				      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
				    }
				    return "rgba(" + colorChange.join(",") + ","+opacity+")";
				  } else {
				    return color;
				  }
			},
			jumpPage(item){
        uni.setStorageSync('moduleDate', {jumpPageName:item?.goodsName || '商品详情',moduleName:'拼团组件'});
				this.goTo(`/pagesA/shop/goodsDetail?id=${item.goodsId}&activeId=${item.id || '100000'}`)
			}
		},
	}
</script>
<style lang="scss" scoped>
	.goods-container {
		margin-bottom: 20rpx;
		width: 100%;

	}

	.box-shandow {
		box-shadow: 0 0 20rpx -3rpx #999;

	}

	.is-boderRaius {
		border-radius: 14px;
	}
    .wrap-flex{
		display: flex;

	}
	.scroll-item {
		display: inline-block;
		margin-bottom: 20rpx;
	}

    .content-flex{
		flex: 1;
		width: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	// 高级自定义拼团背景图片
	.customize-bg{
		position: absolute;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;

	}
	.mark-acitve {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 24rpx;
	    &-item{
			// position: absolute;
			// left: 0;
			// bottom: 0;
			width: 100%;
			padding: 0 12rpx;
			.detail-mark{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 8rpx 0;
				.time{
					font-size: 22rpx;
					color: #FFFFFF;
					font-weight: 500;

				}
			}
		}
		.collage {
			font-size: 40rpx;
			font-weight: 500;
			color: #FFFFFF;
		}

		.count-down {
			padding: 8rpx 0;
			.time-big{
				font-size: 24rpx;
				color: #FFFFFF;
				font-weight: 500;
			}

		}
	}
	.count-text {
		font-size: 24rpx;
		font-weight: 400;
		color: #FFFFFF;

	}
  .count-color{
    color:rgb(255, 140, 140)
  }

	.count-seconds {
		font-size: 24rpx;
		font-weight: 600;
		color: #FFFFFF;
	}
	.icon-icon_pintuan_jiaob_left{
		position: absolute;
		left: 0;
		font-size: 58rpx;
	}
	.icon-icon_pintuan_jiaob_right{
		position: absolute;
		right: 0;
		font-size: 58rpx;
	}
	.img {
		position: relative;
        .agglomerate{
        	position: absolute;
        	display: inline-block;
        	padding: 4rpx 16rpx;
        	border-radius: 4rpx;
        	background: rgba(0,0,0,.6);
        	font-size: 26rpx;
        	color: #FFFFFF;
        	line-height: 36rpx;
        }
        .bage {
        	position: absolute;
        	font-size: 20rpx;
        	text-align: center;
        	background: #191919;
        	padding: 0 16rpx;
        	border-radius: 0 40rpx 40rpx 0;
        	color: #fff;
        	height: 40rpx;
        	line-height: 40rpx;

        	&-3 {
        		position: absolute;
        		top: 16px;
        		left: 0;
        		width: 72rpx;
        		height: 72rpx;
        		background: rgba(154, 233, 255, 0.57);
        	}

        	&-1 {
        		position: absolute;
        		top: 16px;
        		left: 20rpx;
        		text-align: center;
        		width: 36rpx;
        		// height: 72rpx;
        		padding: 12rpx 8rpx 0 8rpx;
        		background: #D1B085;
        		border-radius: 6rpx;
        		opacity: 0.8;
        		font-size: 20rpx;
        		color: #FFFFFF;
        	}
        }
		image {
			width: 100%;
			height: 100%;
		}
	}
	.img-boderRaius {
		border-radius: 14px 14rpx 0 0;
	}

	.title {
		&-0 {
			padding: 16rpx 28rpx 0 28rpx;
			font-size: 32rpx;
            .num-group{
				display: inline-block;
				padding: 4rpx 16rpx;
				margin-right: 15rpx;
				background: rgba(255,68,68,.1);
				border-radius: 4rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #FF4444;
			}
		}
	}

	.desc {
		&-0 {
			padding: 10rpx 28rpx 0 28rpx;
			font-size: 28rpx;
			color: #999999;
		}

		&-1 {
			padding: 0 28rpx 0 28rpx;
			font-size: 26rpx;
			color: #999999;
		}

	}

	.sales {
		padding: 20rpx 0 0 30rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #999999;
	}

	.price {
		padding: 0 28rpx;
		height: 88rpx;

		.total {
			color: #191919;

			.pic {
				font-size: 32rpx;
			}

			.pic-1 {
				font-size: 24rpx;
			}

			.price-num {
				font-size: 40rpx;

			}
			.discount{
				font-size: 24rpx;
				color: #ccc;
				margin-left: 8rpx;
				text-decoration: line-through;
			}

			.price-num-1 {
				font-size: 28rpx;
			}
		}

		.cart {
			width: 52rpx;
			height: 50rpx;

			.icon-app_icon_gouwuche {
				// color: #FF4444;
				font-size: 40rpx;
			}
		}

		.buys-type {
			width: 140rpx;
			height: 52rpx;
			background: #191919;
			border-radius: 28rpx;
			font-size: 28rpx;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;

			&.buys-type-2 {
				width: 100rpx;
				height: 36rpx;
				font-size: 24rpx;
			}
		}
	}
</style>
