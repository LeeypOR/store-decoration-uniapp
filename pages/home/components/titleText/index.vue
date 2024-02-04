<!--

            title: '', // 标题
            describe: '', // 描述文字
            textAlign: 'left', // 显示位置
            titleSize: '16px', // 标题大小
            txtSize: '16px', // 描述大小
            titleThickness: 'normal', // 标题粗细
            txtThickness: 'normal', // 描述粗细
            titleColor: '#333333', // 标题颜色
            txtColor: '#999999', // 描述颜色
            bottomLine: false, // 底部分割线
            more: false, // 查看更多
            styleValue: 1, // 样式
            prompt: '查看更多', // 提示语
            jumpPageId: '', // 跳转链接Id
            jumpPageName: '', // 跳转链接name
            jumpPageType: ''// 跳转链接type
			text_titleSpace: 4 //标题与描述的间距
            titleSpace: '' //标题字间距


 -->
<template>
	<view  :class="['container',{'text-left':dataInfo.textAlign=='left'},
    {'text-center':dataInfo.textAlign=='right'}]">
    <view :class="{'border-show':dataInfo.bottomLine}">
      <view  class=" u-flex u-row-between " >
        <view class="title u-flex-1 u-skeleton-rect" :style="{'font-size':dataInfo.titleSize*2+'rpx','color':dataInfo.titleColor,
        'font-weight':dataInfo.titleThickness,'letter-spacing':dataInfo.titleSpace*2+'rpx','line-height':(dataInfo. titleSize)*2*(dataInfo.titleHeight)+'rpx',
         }">
          {{dataInfo.title}}
        </view>
        <view class="more u-skeleton-rect" @click="jumpToPage(dataInfo)" v-if="dataInfo.more && dataInfo.textAlign=='left'">
          <view :class="dataInfo.styleValue==1?'style-value':'class-value'" >
            <text v-if="dataInfo.styleValue == 1 ||dataInfo.styleValue == 2">{{dataInfo.prompt}}</text> <text v-if="dataInfo.styleValue==2 || dataInfo.styleValue==3" style="vertical-align: middle;" class="iconfont icon-arrow"></text>
          </view>
        </view>
      </view>
      <view class="desc u-skeleton-rect" :style="{'font-size':dataInfo.txtSize*2+'rpx','color':dataInfo.txtColor,
      'font-weight':dataInfo.txtThickness,'margin-top':dataInfo.text_titleSpace*2+'rpx',
      'letter-spacing':dataInfo.textSpace*2+'rpx','line-height':(dataInfo.txtSize)*2*(dataInfo.textHeight)+'rpx'
      }">
        {{dataInfo.describe}}
      </view>
    </view>

      <view @click="jumpToPage(dataInfo)" class="more u-skeleton-rect" v-if="dataInfo.more && dataInfo.textAlign=='center'">
        <view  :class="dataInfo.styleValue==1?'style-value':'class-value'">
          <text v-if="dataInfo.styleValue == 1 || dataInfo.styleValue == 2">{{dataInfo.prompt}}</text> <text v-if="dataInfo.styleValue==2 || dataInfo.styleValue==3" style="vertical-align: middle;" class="iconfont icon-arrow"></text>
        </view>
      </view>
		</view>
</template>

<script>
	import mixin from '../../mixin.js'
	export default{
		mixins:[mixin],
		props:{
			dataInfo:{
				type:Object,
				default:null
			}
		},
		created(){
		},
		data(){
			return{
        moduleName:'标题文本',
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding:  20rpx;
		text-align: center;

		&.text-center{
			text-align: center;
		}
		&.text-left{
			text-align: left;
		}
		.title{
		}
		.more{
			.style-value{
				color: rgb(1, 107, 255);
			}
			.class-value{
			    color: rgb(153, 153, 153);
			}
		}
	}
  .border-show{
    border-bottom: 1px solid rgb(153, 153, 153);
  }
</style>
