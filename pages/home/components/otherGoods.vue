<template>
	<view>
		<view v-for="(item, index) in goodsImgData.config.formData.imageList" :key="index">
			<view class="item"
        :class="goodsImgData.config.formData.styleType=='2'?'wrap':''" :style="{'padding':goodsImgData.config.formData.fillStyle=='2'?'20rpx':0,'margin':`0 ${goodsImgData.config.formData.pagePadding*pxToRpxScale}rpx`}">
				<view v-if="item.imageType =='1'" @click="imgClick(item)">
					<image  :class="goodsImgData.config.formData.borderType ==2?'border-raduis':''"  :src="item.imageUrl" mode="widthFix"></image>
				</view>
				<view v-if="item.imageType =='2'">
					<image :src="item.imageUrl" mode="widthFix"></image>
<!--					<view @click="imgClick(btnItem)" class="btn-item" v-for="(btnItem, btnIndex) in item.hotAreaConfigInfoList" :key="btnIndex">-->
<!--						<view-->
<!--							class="btn"-->
<!--							:style="-->
<!--								'position:absolute;width:' +-->
<!--									btnItem.width.slice(0,-2) * pxToRpxScale +-->
<!--									'rpx;height:' +-->
<!--									btnItem.height.slice(0,-2) * pxToRpxScale +-->
<!--									'rpx;top:' +-->
<!--									btnItem.top.slice(0,-2) * pxToRpxScale +-->
<!--									'rpx;left:' +-->
<!--									btnItem.left.slice(0,-2) * pxToRpxScale +-->
<!--									'rpx'-->
<!--							"-->
<!--						>-->
<!--						</view>-->
<!--					</view>-->
				</view>
        <text class="img-title" v-if="item.imageTitle">{{item.imageTitle}}</text>
        <hot-area :hotAreaList="item.hotAreaConfigInfoList"></hot-area>
			</view>
		</view>
	</view>
</template>

<script>
import hotArea from '../components/hotArea'
import mixin from '../mixin.js'
export default {
  components:{hotArea},
  mixins:[mixin],
	props: {
		goodsImgData: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
      moduleName:'图文广告',
		};
	},

	methods: {
		imgClick(item) {
      this.jumpToPage(item)
			// this.$emit('goodsImg', item);
		}
	}
};
</script>

<style lang="scss" scoped>
image {
	display: inline-block;
	width: 100%;
}
.border-raduis{
	border-radius: 14rpx;
}

.item {
	position: relative;
  .img-title{
    position: absolute;
    bottom: 10%;
    left:5%;
    display: inline-block;
    background: rgba(255, 255, 255, 0.6);
    padding: 2rpx 4rpx;
  }
}
.wrap{
  box-shadow:  0 0 10rpx 3rpx #999;
}
</style>
