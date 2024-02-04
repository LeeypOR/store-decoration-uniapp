<template>
    <view>
        <!-- 2显示会员信息 -->
        <view
            v-if="dataInfo.badgeType == 2"
            @click="goUserInfo"
            class="g-suspension-item"
            :class="[isRight ? 'g-suspension-item-reverse' :  '', flag===1 ? 'constant' : 'change']"
        >
            <view
                class="g-suspension-text u-flex-1"
                :style="{
                    'margin-left': isRight ?  '20rpx' : '',
                    'margin-right': !isRight ?  '20rpx' : '',
                }"
            >
                <p class="bigTitle u-line-1" :style="{ color: dataInfo.fontColor || dataInfo.color }">{{ nickName ? '欢迎回来，'+ nickName : '点击授权登录' }}</p>
                <p class="smallTitle u-line-1" :style="{ color: dataInfo.fontColor ||  dataInfo.color }">{{ nickName ?  `${gradeName}  | 今天是您入会第${memberDay}天`  : '请登录金桔有品商城' }}</p>
            </view>
            <image
                v-if="avatar"
                class="g-suspension-img"
                :src="avatar"
                mode="aspectFill"
            ></image>
            <image
                v-else
                class="g-suspension-img"
                src="@/static/image/default_avatar.png"
                mode="aspectFill"
            ></image>
        </view>
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
        isRight: {
            type: Boolean
        },
        flag: {
            type: Number,
            default: 0
        },
        // 会员信息
        nickName: {
            type: String
        },
        gradeName: {
            type: String
        },
      memberDay: {
        type: String
      },
      avatar: {
        type:String,
        default: ""
      }
    },
    data(){
        return {
          moduleName:'悬浮组件',
        }
    },
    computed:{ },
  methods: {
    goUserInfo() {
      this.$emit('goUserInfo')
    }
  },
};
</script>

<style lang="scss" scoped>
.g-suspension-item {
    padding: 0 20rpx;
    display: flex;
    align-items: center;
    /* 文字样式 */
    .g-suspension-text {
        text-align: left;
        .bigTitle {
            font-size: 32rpx;
            font-family: MicrosoftYaHei;
            line-height: 42rpx;
            height: 42rpx;
        }
        .smallTitle {
            margin-top: 10rpx;
            font-size: 24rpx;
            font-family: MicrosoftYaHei;
            line-height: 32rpx;
            height: 32rpx;
        }
    }
}
.g-suspension-item-reverse {
    flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
}
/* 不定宽样式 */
.change {
    max-width: 100%;
    height: 160rpx;
    .g-suspension-text {
        max-width: 570rpx;
    }
}
/* 固定宽高 */
.constant {
    width: 538rpx;
    justify-content: flex-end;
    .g-suspension-text {
        max-width: 358rpx;
        /* max-width: 374rpx; */
    }
}

/* 图片样式 */
.g-suspension-img {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
}
</style>
