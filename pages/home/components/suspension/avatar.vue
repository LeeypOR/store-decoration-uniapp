<template>
    <view>
        <!-- 1自定义内容 -->
        <image
            v-if="dataInfo.badgeType == 1"
            @click="action"
            :class="['g-suspension-img', shape == 'radius' ? 'imgRadius' : '']"
            :style="{
                width: pxToRpx(dataInfo.imgWidth),
                height: pxToRpx(dataInfo.imgWidth)
            }"
            :src="dataInfo.imageUrl"
            mode="aspectFill"
        ></image>
    </view>
</template>

<script>
import mixin from "../../mixin";
export default {
    mixins: [mixin],
    props:{
        dataInfo: {
            type: Object
        },
        // 图片形状
        shape: {
            type: String
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
        // 跳转配置链接
        action() {
            this.jumpToPage(this.dataInfo)
        },
    },
};
</script>

<style lang="scss" scoped>
/* 图片样式 */
.g-suspension-img {
    width: 120rpx;
    height: 120rpx;
}
.imgRadius {
    border-radius: 50%;
}
</style>
