<template>
    <view>
        <!-- 4跳转微信公众号 -->
        <image
            v-if="dataInfo.badgeType == 4"
            :src="dataInfo.imageUrl"
            :style="{
                width: pxToRpx(dataInfo.imgWidth),
                height: pxToRpx(dataInfo.imgWidth)
            }"
            @click="goWXPage(dataInfo.publicLink)"
            mode="aspectFill"
        >
        </image>
    </view>
</template>

<script>
import mixin from "../../mixin";
export default {
    mixins: [mixin],
    props:{
        dataInfo: {
            type: Object
        }
    },
    data(){
        return {
          moduleName:'悬浮组件',
        }
    },
    computed:{ },
    methods: {
        pxToRpx(item) {
            let num = parseFloat(item) || 0;
            return num * 2 + "rpx";
        },
        // 跳转微信公众号文章链接
        goWXPage(url) {
            if(url) {
                this.goTo(`/pages/webview/webview?url=${url}`)
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>
