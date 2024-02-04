<template>
    <view class="kill" v-if="data[currentIndex]">
        <view  class="header">
            <!-- <u-navbar z-index="999999" class="location-class" :background="{background:'#00000000'}" :border-bottom="false" title=" "
                title-color="#000" title-size="36" back-icon-color="#fff" :custom-back="backPage"></u-navbar> -->
            <image class="bg" src="https://jdz.g1999.com/ghs/20210827/38450804526d4e1ba533f18ed82a50dc.png"></image>
            <image class="kill-image" src="/static/image/top_miaosha@2x.png"></image>
            <view class="bottom">
                <text v-if="data[currentIndex].activityStatu==1">距离本场开始还剩{{d}}天</text>
                <text v-if="data[currentIndex].activityStatu==2">距离本场结束还剩{{d}}天</text>
                <text v-if="data[currentIndex].activityStatu==3">本场活动已结束</text>
                <view class="count-wrapper">
                    <view class="countDown">{{padding(h)}}</view>:
                    <view class="countDown">{{padding(m)}}</view>:
                    <view class="countDown">{{padding(s)}}</view>
                </view>

            </view>
            <view class="status">
                <text v-if="data[currentIndex].activityStatu==1">即将开始</text>
                <text v-if="data[currentIndex].activityStatu==2">进行中</text>
                <text v-if="data[currentIndex].activityStatu==3">已结束</text>
            </view>
        </view>
        <view class="kill-list">
            <view
                class="list-head"
				v-if="data.length && data.length>1"
                :style="{'padding':`0 ${dataInfo.pagePadding*pxToRpxScale}rpx`}"
            >
                <view
                    class="head-item"
                    :class="{active:currentIndex==index}"
                    v-for="(item,index) in data"
                    :key="index"
                    @click="handleClick(index)"
                >
                    <text class="time">{{item.startDate.substring(11,16)}}</text>
                    <text class="status" v-if="item.activityStatu==1">即将开始</text>
                    <text class="status" v-if="item.activityStatu==2">进行中</text>
                    <text class="status" v-if="item.activityStatu==3">已结束</text>
                </view>
            </view>
            <view
                class="list-wrapper"
                :class="{bold:dataInfo.titleThickness=='bold'}"
                :style="{'padding':data.length<=1?`${dataInfo.pagePadding*pxToRpxScale}rpx`:`0 ${dataInfo.pagePadding*pxToRpxScale}rpx`}"
            >

                <view
                    class="list-item"
                    :class="[
                                {'box-shadow':dataInfo.shopType == '1'},
                                {'is-borderRadius':dataInfo.angleType == '1'},
                                {'wrap-flex':dataInfo.listStyle=='1'},
                                {'disable':data[currentIndex].activityStatu==1||data[currentIndex].activityStatu==3 || item.totalRemainStock==0}
                            ]"
                    :style="{'margin-bottom':dataInfo.imagePadding*pxToRpxScale+'rpx'}"
                    v-for="(item,index) in data[currentIndex].seckillGoodsResponses"
                    :key="index"
                    @click="goToDetail(item.id,item)"
                >
                    <view style="position:relative">

                        <image
                            class="bg-img"
                            :src="dataInfo.backgroundImgUrl"
                            v-if="dataInfo.showType==1"
                            :style="{'opacity':dataInfo.transparency/100}"
                        ></image>

                        <view class="image-wrapper"
                            :style="[wrapImage]"
                        >

                            <view class="img">
                                <text v-if="dataInfo.appearanceStyle ==2" :style="[iconLeft]"  class="iconfont icon-icon_pintuan_jiaob_left"></text>
						        <text v-if="dataInfo.appearanceStyle ==2" :style="[iconLeft]"  class="iconfont icon-icon_pintuan_jiaob_right"></text>
                                <image :style="[smallImage]" :src="item.goodsPicture" mode="aspectFill"></image>
                                <view class="mask" :class="{big:dataInfo.listStyle == '0'}" v-if="item.totalRemainStock==0&&data[currentIndex].activityStatu==2">已抢光</view>
                                <view class="mask" :class="{big:dataInfo.listStyle == '0'}" v-if="data[currentIndex].activityStatu==1">未开始</view>
                                <view class="mask" :class="{big:dataInfo.listStyle == '0'}" v-if="data[currentIndex].activityStatu==3">已结束</view>
                            </view>

                        </view>
                        <view :style="[collageBg]" v-if="dataInfo.listStyle == '0' && dataInfo.countdownShow "  class="mark-acitve">
                                    <view class="collage">
                                        秒杀
                                    </view>
                                    <view class="count-down">
                                        <view class="count-text">
                                            <text v-if="data[currentIndex].activityStatu==1">距开始</text>
                                            <text v-if="data[currentIndex].activityStatu==2">距结束</text>
                                            <text v-if="data[currentIndex].activityStatu==3">已结束</text>
                                        </view>
                                        <view class="count-seconds">
                                            {{padding(d)}}天{{padding(h)}}:{{padding(m)}}:{{padding(s)}}
                                        </view>
                                    </view>
                        </view>
                        <view :style="[collageBg]" v-if="dataInfo.listStyle == '1'&& dataInfo.countdownShow "  class="mark-acitve-item">
						 	<view class="detail-mark">
						 		<view class="count-text">
						 			<text v-if="data[currentIndex].activityStatu==1">距开始</text>
                                    <text v-if="data[currentIndex].activityStatu==2">距结束</text>
                                    <text v-if="data[currentIndex].activityStatu==3">已结束</text>
						 		</view>
						 		<view  class="count-seconds">
						 			{{padding(d)}}天{{padding(h)}}:{{padding(m)}}:{{padding(s)}}
						 		</view>
						 	</view>

						 </view>
                    </view>
                    <view class="info-wrapper" :class="{detail:dataInfo.listStyle==1}" >
                        <view class="info-head" v-if="dataInfo.shopName">
                            <view class="sale" >减{{item.discountPrice/100}}元</view>
                            <view class="title  u-line-1">{{item.goodsName}}</view>
                        </view>
                        <view class="desc u-line-1" v-if="dataInfo.shopDescription">{{item.goodsSellingPoint}}</view>
                        <view class="price-wrapper" :class="{mt10:dataInfo.listStyle==1}"  v-if="dataInfo.listStyle==1" >
                            <text v-if="dataInfo.seckillPrices">¥<text class="price-number">{{item.seckillPrice/100}}</text>起</text>
                            <text class="original" v-if="dataInfo.oldPrices">¥{{item.salePrice/100}}</text>
                        </view>

                        <view class="progress" v-if="dataInfo.listStyle==0">
                            <view class="progress-wrapper" v-if="dataInfo.progressBar">
                                <view class="progress-bar" :style="{'width':`${item.totalRemainStock*100/item.totalSeckillStock}%`}"></view>
                            </view>
                            <view class="left-goods" v-if="dataInfo.inventory">
                                <view class="content" >剩余{{item.totalRemainStock}}件</view>
                            </view>
                        </view>
                        <view class="bottom" :class="{spell:dataInfo.listStyle==1}">
                            <view class="price-wrapper " v-if="dataInfo.listStyle==0">
                                <text v-if="dataInfo.seckillPrices">秒杀价¥<text class="price-number">{{item.seckillPrice/100}}</text>起</text>
                                <text class="original" v-if="dataInfo.oldPrices">¥{{item.salePrice/100}}</text>
                            </view>
                            <view class="progress" v-if="dataInfo.listStyle==1">
                                <view class="left-goods" v-if="dataInfo.inventory">
                                        <view class="content" >剩余{{item.totalRemainStock}}件</view>
                                </view>
                                <view class="progress-wrapper" v-if="dataInfo.progressBar">
                                    <view class="progress-bar" :style="{'width':`${item.totalRemainStock*100/item.totalSeckillStock}%`}"></view>
                                </view>

                            </view>
                            <view class="shop-btn" v-if="dataInfo.shopBuyBtn" >
                                <text v-if="dataInfo.btnType==1" class="iconfont icon-app_icon_gouwuche"></text>
                                <view class="btn" v-else>{{dataInfo.shopBtnText}}</view>
                            </view>
                        </view>
                    </view>

                </view>

            </view>
        </view>

    </view>

</template>

<script>
import mixin from '@/common/mixin.js'

const systemInfo = uni.getSystemInfoSync();
export default {
    mixins:[mixin],
    props: {
        dataInfo:{
            type:Object,
            default:null
        },
    },
    data(){
        return {
            moduleName:'秒杀组件',
            windowsWidth: systemInfo.windowWidth,
            pxToRpxScale: 0,
            currentIndex:0,
            data:{},
            temp:null,
            d:0,
            h:0,
            m:0,
            s:0
        }
    },
    computed:{
        imgWidth () {
            if (this.dataInfo.listStyle == 0) { //大图模式
                // 根据不同的listStyle来计算出图片的宽度
                return (this.windowsWidth - this.dataInfo.pagePadding * 2)

            }else{ // 详情列表
                // return (this.windowsWidth - this.dataInfo.pagePadding * 2)*0.4
                return (this.windowsWidth - this.dataInfo.pagePadding * 2)*0.4
            }
        },
        imgHeight () {
            let height
            if(this.dataInfo.listStyle == 0){ //大图模式
                if (this.dataInfo.imgScale == '0') { //图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
                    height = 2 * (this.imgWidth-this.dataInfo.strokeSize) / 3
                } else if (this.dataInfo.imgScale == '1') {
                    height = this.imgWidth-this.dataInfo.strokeSize
                } else if (this.dataInfo.imgScale == '2') {
                    height = 4 * (this.imgWidth-this.dataInfo.strokeSize) / 3
                } else if (this.dataInfo.imgScale == '3') {
                    height = 9 * (this.imgWidth-this.dataInfo.strokeSize) / 16
                }
            }else{
                height = this.imgWidth-this.dataInfo.strokeSize
            }
            return height
        },
        wrapImage () {
            let obj = {
                width:this.imgWidth*this.pxToRpxScale +'rpx',
                height:this.imgHeight*this.pxToRpxScale+'rpx'
            }
            if(this.dataInfo.countdownShow==1){
                if(this.dataInfo.showType == 0)//系统样式
                    Object.assign(obj,{
                            background:`${this.colorRgb(this.dataInfo.systemborderColor,this.dataInfo.transparency/100)}`,
                            padding:this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                            paddingBottom:0
                        })
                if(this.dataInfo.showType == 1)//自定义样式
                    Object.assign(obj,{
                            padding:this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                            paddingBottom:0
                        })
            }
            return obj
        },
        collageBg(){
            let styObj = {}
            if(this.dataInfo.showType == 0){ //系统样式
                styObj = {'background':`${this.colorRgb(this.dataInfo.systembgColor,this.dataInfo.transparency/100)}`}
            }

            return styObj
        },
        smallImage(){
            let styObj = {
                'width':'100%',
                'height':'100%'
            }
                //系统样式
                if(this.dataInfo.imgFill == '1'){ //图片留白
                    if(this.dataInfo.imgScale == '0' ||this.dataInfo.imgScale == '3' ){//图片比例0 '3:2',1 '1:1',2 '3:4',3 '16:9'
                        styObj = {
                            'width':this.imgHeight*this.pxToRpxScale-this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                            'height':this.imgHeight*this.pxToRpxScale-this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                        }
                    }
                    if(this.dataInfo.imgScale == '2'  ){
                        styObj = {
                            'width':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                            'height':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                        }
                    }
                    // if(this.dataInfo.imgScale == '1'  ){
                    // 	styObj = {
                    // 		'width':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                    // 		'height':this.imgWidth*this.pxToRpxScale-2*this.dataInfo.strokeSize*this.pxToRpxScale+'rpx',
                    // 	}
                    // }
                }

            return styObj
        },
        iconLeft(){
            let styObj ={
                'color' :`${this.colorRgb(this.dataInfo.systemborderColor,this.dataInfo.transparency/100)}`
            }
            return styObj
        },
        list() {
            let arr=[]
            this.dataInfo.shopList.forEach((item,index)=>{

                arr.push({
                    activityId:item.id,
                    goodsIds:(this.dataInfo.imageList[index] || []).map((item)=>{
                        return item.id
                    })
                })
            })
            return arr
        },
        currentEndTime() {
			if(this.data[this.currentIndex]){
				if((this.data[this.currentIndex] ||[]).activityStatu==1){
				    return new Date((this.data[this.currentIndex]||[]).startDate.replace(/-/g,'/')).getTime()
				}else{
				    return new Date((this.data[this.currentIndex]||[]).endDate.replace(/-/g,'/')).getTime()
				}
			}

            //return new Date('2021-08-26 10:20:00').getTime()
        }
    },
    onReady () {
        const systemInfo = uni.getSystemInfoSync();
        // px转换到rpx的比例
        let pxToRpxScale = 750 / systemInfo.windowWidth;
        this.pxToRpxScale = pxToRpxScale
        this.getSecKillList()


    },
    destroyed() {
        clearInterval(this.temp);
    },
    methods:{
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
        handleClick(index){
            this.currentIndex = index

            this.getSecKillList()
        },
        async getSecKillList() {
            let res = await this.$http.getSecKillList(this.list)
            const dataList = res.dataInfo
            dataList.sort((a,b)=>{
                return a.startDate > b.startDate ? 1:-1
            })
            for(let item of dataList){
              let list = item?.seckillGoodsResponses || []
              list.sort((a,b)=>{
                return a.id > b.id ? -1:1
              })
              item.seckillGoodsResponses = list
            }
            this.data = dataList
            this.temp&&clearInterval(this.temp)
            this.time(this.currentEndTime)
        },
        time(endtime){
            this.temp = setInterval(()=>{
                this.countDown(endtime)
            },1000)
        },
        countDown(endtime) {
            let startTime = new Date().getTime();
            let leftTime = endtime-startTime;
            if(leftTime>0){

                this.d = parseInt(leftTime/1000/60/60/24);
                this.h = parseInt(leftTime/1000/60/60%24);
                this.m = parseInt(leftTime/1000/60%60);
                this.s = parseInt(leftTime/1000%60);

            }else{
                this.h = 0
                this.m = 0
                this.s = 0
                // this.getSecKillList()
                clearInterval(this.temp)
            }


        },
        padding(val){
            return val<10? ("0"+ val) : val
        },
        goToDetail(id,obj){
          uni.setStorageSync('moduleDate', {jumpPageName:obj?.goodsName || '商品详情',moduleName:'秒杀组件'});
          this.goTo(`/pagesA/shop/goodsDetail?id=${id}&activeType=MS&activeId=${this.data[this.currentIndex].activityId}`)
        }



    },

}
</script>

<style lang="scss" scoped>
.kill{
    width: 100%;
    // height: 100vh;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 278rpx;
    position: relative;
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .kill-image{
        position: absolute;
        width: 262rpx;
        height: 54rpx;
        top: 74rpx;
        left: 50%;
        transform: translateX(-50%);
    }
    .bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        background: rgba(209, 176, 133, 1);
        //padding-right: 30rpx;
        color: #fff;
        display: flex;
        justify-content: flex-end;
        .count-wrapper{
            display: flex;
            align-items: center;
            color: #191919;
            .countDown{
                width: 40rpx;
                height: 40rpx;
                margin: 0 8rpx;
                line-height: 40rpx;
                text-align: center;
                background: #191919;
                border-radius: 10rpx;
                color: #fff;
            }
        }

    }
    .status{
        width: 296rpx;
        height: 100rpx;
        line-height: 100rpx;
        padding-left: 72rpx;
        background: url('/static/image/qietu_jiaobiao@2x.png');
        position: absolute;
        left: 0;
        bottom: 0;
        background-size: 100% 100%;
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: bold;
        color: #191919;
    }
}
.kill-list{
    flex:1;
    display: flex;
    height: 0;
    flex-direction: column;
    .list-head{
        flex-shrink: 0;
        height: 165rpx;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.1);
        .head-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 120rpx;
            &.active{
                color: chocolate !important;
                background: #fff;
                border-radius: 10rpx;
            }
            .time{
                font-size: 36rpx;
                font-weight: 700;
            }
            .status{
                color: #999999;
                font-size: 20rpx;
            }
        }
    }
    .list-wrapper{
        // flex: 1;
        // overflow-y: scroll;
        background: rgba(0,0,0,0.1);
        .list-item{
            overflow: hidden;
            &.disable{
                pointer-events: none;
            }
            .bg-img{
                position: absolute;
                left: 0;
                z-index: -1;
                width: 100%;
                height: 100%;


            }
            .image-wrapper{

                .img{
                    width: 100%;
                    height: 100%;
                    background: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    .mask{
                        position:absolute;
                        width: 174rpx;
                        height: 174rpx;
                        background: rgba(25,25,25,0.5);
                        border-radius: 50%;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                        color: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 32rpx;
                        &.big{
                            width: 300rpx;
                            height: 300rpx;
                            font-size: 50rpx;
                        }
                    }
                }
                // image{
                //     width: 100%;
                //     height: 100%;
                // }
            }
            .info-wrapper{
                // width: 100%;
                background: #fff;
                padding: 20rpx 30rpx 10rpx;
                position: relative;
                min-height: 120rpx;
                &.detail{
                    flex: 1;
                    width: 0;
                }
                .info-head{
                    display: flex;
                    align-items: center;
                    .sale{
                        padding: 0 9rpx;
                        height: 36rpx;
                        background: #D1B085;
                        border-radius: 4rpx;
                        color: #fff;
                        font-size: 24rpx;
                        margin-right: 10rpx;
                    }
                    .title{
                        flex: 1;
                        width: 0;
                        font-size: 32rpx;
                        color: #191919;
                        // font-weight: 500;
                    }
                }
                .desc{
                    font-size: 28rpx;
                    // font-weight: 400;
                    color: #999;
                    margin-top: 8rpx;
                }


                .progress{
                    display: flex;
                    align-items: center;
                    margin-top: 24rpx;
                    width: 100%;
                    .progress-wrapper{
                        width: 77.78%;
                        background: rgba(209, 176, 133, 0.3);
                        border-radius: 10rpx;
                        height: 20rpx;
                        display: flex;
                        position: relative;
                        .progress-bar{
                            // width: 70%;
                            height: 100%;
                            border-radius: 10rpx;
                            background: rgba(209, 176, 133, 1);
                        }

                    }
                    .left-goods{
                        flex: 1;
                        .content{
                            color: rgba(209, 176, 133, 1);
                            padding-left: 40rpx;
                            zoom: 0.6;

                        }
                    }
                }
                .bottom{
                    display: flex;
                    height: 88rpx;
                    justify-content: space-between;
                    align-items: center;
                    &.spell{
                        position: absolute;
                        height: 88rpx;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        padding: 0 20rpx;
                        align-items: center;
                        .progress{
                            flex-direction: column;
                            align-items: flex-start;
                            margin-top: 0;
                            flex: 1;
                            .left-goods{
                                margin-bottom: 8rpx;
                                .content{
                                    font-size: 24rpx;
                                    color: #191919;
                                    zoom: 1;
                                    padding: 0;
                                }
                            }
                        }
                    }
                    .shop-btn{

                        text{
                            font-size: 40rpx;
                        }
                        .btn{
                            font-size: 24rpx;
                            padding:0 16rpx;
                            height: 56rpx;
                            line-height: 56rpx;
                            background: #d1b085;
                            color: #ffffff;
                            border-radius: 30rpx;
                        }

                    }
                }


            }

        }

    }
}
.box-shadow{
    box-shadow: 0 0 20rpx -3rpx #999;
}
.is-borderRadius{
    border-radius: 14rpx;
}
.wrap-flex{
    display: flex;
}
.mt10{
    margin-top: 10rpx !important;
}
.mt0{
    margin-top: 0;
}
.bold{
    font-weight: 700;
}
.mark-acitve {
    width: 100%;
    height: 80rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24rpx;
    color: #FFFFFF;
    &-item{
        color: #fff;
        width: 100%;
        height: 52rpx;
        padding: 0 20rpx;
		font-size: 24rpx;
        .detail-mark{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // padding: 8rpx 0;
        }
    }
    .collage {
        font-size: 40rpx;
        // font-weight: 500;

    }

    .count-down {
        padding: 8rpx 0;
    }
}
.icon-icon_pintuan_jiaob_left{
		position: absolute;
		left: 0;
        top: -2rpx;
		font-size: 58rpx;
	}
.icon-icon_pintuan_jiaob_right{
    position: absolute;
    right: 0;
    top: -2rpx;
    font-size: 58rpx;
}
.price-wrapper{
    .price-number{
        font-size: 40rpx;
    }
    .original{
        font-size: 24rpx;
        color: #999;
        text-decoration: line-through;
        margin-left: 20rpx;
    }
}

</style>
