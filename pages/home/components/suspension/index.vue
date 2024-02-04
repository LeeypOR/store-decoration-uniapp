<template>
<view>
  <!-- 监听用户获取用户信息 -->
  {{getUserInfo || ''}}
    <!-- 样式一 -->
    <view
        v-if=" dataInfo.listStyle == '0' "
        class="g-suspension"
        :class=" isRight ? 'swiper_reverse' : '' "
        :style="{
            color: dataInfo.color,
            background: dataInfo.bgColor,
            position: formatSite,
            top: formatSite == 'fixed' ? (`${dataInfo.top + '%'};transform:translateY(-${dataInfo.top + '%'});z-index:9999999999999`) : (dataInfo.top+'px'),
            'margin-top': formatSite == 'fixed' ? '' : navbarHeight,
            left: !isRight ? dataInfo.correctLeft + '%' : '',
            right: isRight ? dataInfo.correctLeft + '%' : '',
        }"
    >
        <!-- 1自定义内容 -->
        <custom :dataInfo="dataInfo" :isRight="isRight" :flag="0" />
        <!-- 2显示会员信息 -->
        <member :dataInfo="dataInfo" :isRight="isRight" :flag="0" :avatar="avatar" :nickName="nickName" :gradeName="gradeName" :memberDay="memberDay" @goUserInfo="goUserInfo" />
    </view>

    <!-- 样式二 -->
    <view
        v-else-if=" dataInfo.listStyle == '1' "
        class="g-suspensionTwo"
        :style="{
            position: formatSite,
            top: formatSite == 'fixed' ? (`${dataInfo.top + '%'};transform:translateY(-${dataInfo.top + '%'});z-index:9999999999999`) : (dataInfo.top+'px'),
            'margin-top': formatSite == 'fixed' ? '' : navbarHeight,
            left: !isRight ? dataInfo.correctLeft + '%' : '',
            right: isRight ? dataInfo.correctLeft + '%' : '',
        }"
    >
        <!-- 1自定义内容 -->
        <avatar :dataInfo="dataInfo" shape="radius" />
    </view>

    <!-- 样式三 -->
    <view
        v-else-if=" dataInfo.listStyle == '2' "
        class="g-suspensionThree u-flex"
        :style="{
            position: formatSite,
            top: formatSite == 'fixed' ? (`${dataInfo.top + '%'};transform:translateY(-${dataInfo.top + '%'});z-index:9999999999999`) : (dataInfo.top+'px'),
            'margin-top': formatSite == 'fixed' ? '' : navbarHeight,
            left: !isRight ? dataInfo.correctLeft + '%' : '',
            right: isRight ? dataInfo.correctLeft + '%' : '',
            'background':'url('+ getThreeImg(isRight) +') no-repeat center center',
            'background-size': '100% 100%'
        }"
    >
        <!-- 1自定义内容 -->
        <avatar :dataInfo="dataInfo" shape="radius" />
    </view>

    <!-- 样式四 -->
    <view
        v-else-if=" dataInfo.listStyle == '3' "
        class="g-suspensionFour u-flex"
        :class=" isRight ? '' : '' "
        :style="{
            position: formatSite,
            top: formatSite == 'fixed' ? (`${dataInfo.top + '%'};transform:translateY(-${dataInfo.top + '%'});z-index:9999999999999`) : (dataInfo.top+'px'),
            'margin-top': formatSite == 'fixed' ? '' : navbarHeight,
            left: !isRight ? dataInfo.correctLeft + '%' : '',
            right: isRight ? dataInfo.correctLeft + '%' : '',
            'background': 'url('+ getFourImg(isRight) +') no-repeat center center',
            'background-size': '100% 100%',
        }"
    >
        <!-- 1自定义内容 -->
        <custom :dataInfo="dataInfo" :isRight="isRight" :flag="1" />
        <!-- 2显示会员信息 -->
        <member :dataInfo="dataInfo" :isRight="isRight" :flag="1" :avatar="avatar" :nickName="nickName" :gradeName="gradeName" :memberDay="memberDay" @goUserInfo="goUserInfo" />
    </view>

    <!-- 样式五 -->
    <view
        v-else-if=" dataInfo.listStyle == '4' "
        class="g-suspensionFive"
        :style="{
            position: formatSite,
            top: formatSite == 'fixed' ? (`${dataInfo.top + '%'};transform:translateY(-${dataInfo.top + '%'});z-index:9999999999999`): (dataInfo.top+'px'),
            'margin-top': formatSite == 'fixed' ? '' : navbarHeight,
            left: !isRight ? dataInfo.correctLeft + '%' : '',
            right: isRight ? dataInfo.correctLeft + '%' : '',
        }"
    >
        <!-- 1自定义内容 -->
        <avatar :dataInfo="dataInfo" />
        <!-- 3客服 -->
        <customer-service :dataInfo="dataInfo" />
        <!-- 4跳转微信公众号 -->
        <wechat-article :dataInfo="dataInfo" />
    </view>
</view>
</template>

<script>
const systemInfo = uni.getSystemInfoSync();
// 获取胶囊按钮的位置
// #ifdef MP-WEIXIN
const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
// #endif
import custom from "./custom.vue";
import member from "./member.vue";
import customerService from "./customerService.vue";
import wechatArticle from "./wechatArticle.vue";
import avatar from "./avatar.vue";
import mixin from "../../mixin";

export default {
    mixins: [mixin],
    props:{
        isLogin:{
            type:Boolean,
            default:false
        },
        userData:{
            type:[Object,String],
            default: null
        }
    },
    components: {
        custom, //1自定义内容
        member, //2显示会员信息
        customerService, //3客服
        wechatArticle, //4跳转微信公众号
        avatar, //头像
    },
    data() {
        return {
            moduleName:'悬浮组件',
            userInfo: {},
            nickName: '', //昵称
            gradeName: '', //会员等级
            memberDay: '', //入会天数
            avatar:'',   // 用户头像
        }
    },
    computed: {
        getFourImg(){
            return isRight=>{
                const obj = this.dataInfo || {}
                if(obj.backgroundColorType ==2){
                    if(isRight){
                        return require('@/static/image/icon_gold_right4.png')
                    }
                    return require('@/static/image/icon_gold_left4.png')
                }
                if(obj.backgroundColorType == 1){
                    if(isRight){
                        return require('@/static/image/yangshi04_yangshi02_right.png')
                    }
                    return require('@/static/image/yangshi04_yangshi02_left.png')
                }
                if(obj.backgroundColorType ==3){
                    if(obj.backgroundUrl){
                        return obj.backgroundUrl
                    }
                    // if(isRight){
                    //   return require('@/static/image/icon_default_right4.png')
                    // }
                    // return require('@/static/image/icon_default_left4.png')
                }
                return ''
            }

        },
        getThreeImg(){
            return isRight=>{
                const obj = this.dataInfo || {}
                if(obj.backgroundColorType ==2){
                    if(isRight){
                        return require('@/static/image/icon_gold_right3.png')
                    }
                    return require('@/static/image/icon_gold_left3.png')
                }
                if(obj.backgroundColorType == 1){
                    if(isRight){
                        return require('@/static/image/yangshi03_yangshi01_right.png')
                    }
                    return require('@/static/image/yangshi03_yangshi01_left.png')
                }
                if(obj.backgroundColorType ==3){
                    if(obj.backgroundUrl){
                        return obj.backgroundUrl
                    }
                    // if(isRight){
                    //   return require('@/static/image/icon_default_right3.png')
                    // }
                    // return require('@/static/image/icon_default_left3.png')
                }
                return ''
            }
        },
        getUserInfo(){
            if(this.dataInfo.listStyle == '3'){
                if(!this.userData?.id){
                    this.nickName = ''
                    this.gradeName = ''
                    this.memberDay =''
                    this.avatar = ''
                }else{
                    this.getInfo()
                }
            }
        },
        pxToRpx() {
            return (item) => {
                let num = parseFloat(item) || 0;
                return num * 2 + "rpx";
            };
        },
        // 定位
        formatSite() {
            let floatPosition = this.dataInfo.floatPosition
            if (floatPosition == '0' || floatPosition == '1') {
                return 'absolute'
            }
            if (floatPosition == '2' || floatPosition == '3') {
                return 'fixed'
            }
        },
        // 是否是靠右边的样式
        isRight() {
            let str = this.dataInfo.floatPosition
            if (str == '1' || str == '3') {
                return true
            }
        },
        navbarHeight() {
            let num = getApp().globalData.navbarHeight;
            let statusBarHeight = parseFloat(parseInt(num)) || 0;
            // #ifdef MP-WEIXIN
            const h1 = menuButtonInfo.height
            // #endif
            const h2 = systemInfo.statusBarHeight



            // return `-${((h1) * 2 + "rpx")}`;
            return '0'
        }

    },
    created() {
        this.userInfo = this.$globleData.userData
    //
    //
    },
    methods: {
    // 登录
        goUserInfo() {
            let url = '/pagesA/mine/userInfo'
            if (!this.userData?.id || !this.nickName) {
                url = '/pages/login/index'
            }
            this.goTo(url)
            // 因组件的生命周期不能监听登录数据的变化，此处故作轮询是否登录
            // const timer = setInterval(() => {
            //   if (this.userInfo.phoneNumber) {
            //     clearInterval(timer)
            //     this.getInfo()
            //   } else {
            //     this.userInfo = this.$globleData.userData
            //   }
            // }, 500)
        },
        async getInfo() {
            try {
                this.userInfo = this.$globleData.userData
                try{
			  let res = await this.$http.getMemberMemberInfo({phone: this.userInfo.phoneNumber})
                    this.avatar = this.userInfo?.avatar || ''
                    this.nickName = res.dataInfo?.nickName || ''
                    this.gradeName = res.dataInfo?.gradeName || ''
                    this.memberDay = res.dataInfo?.memberDay || ''
                }catch(e){
                    //TODO handle the exception
                }


            } catch (error) {
                console.log(error);
            }

        },
    },
};
</script>

<style lang="scss" scoped>
/* 样式一 */
.g-suspension {
    border-radius: 0rpx 100rpx 100rpx 0rpx;
    max-width: 100%;
    height: 160rpx;
    z-index: 998;
}

/* 样式二 */
.g-suspensionTwo {
    z-index: 998;
    background: transparent;
    width: 120rpx;
    height: 120rpx;
}
/* 样式三 */
.g-suspensionThree {
    width: 160rpx;
    height: 228rpx;
    justify-content: center;
    z-index: 998;
}
/* 样式四 */
.g-suspensionFour {
    width: 538rpx;
    height: 228rpx;
    justify-content: center;
    z-index: 998;
    color: #ffffff;
}
/* 样式五 */
.g-suspensionFive {
    z-index: 998;
    background: transparent;
}
/* 倒置 */
.swiper_reverse {
    border-radius: 100rpx 0 0 100rpx;
}
</style>
