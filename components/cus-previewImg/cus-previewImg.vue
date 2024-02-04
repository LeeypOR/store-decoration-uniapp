<template>
	<view class="previewImg" v-if="showBox" @touchmove.stop.prevent>
		<view class="mask" @click="close">
			<swiper @change="changeSwiper" class="mask-swiper" :current="currentIndex" :circular="circular" :duration="duration">
				<swiper-item v-for="(src, i) in list" :key="i">
          <scroll-view scroll-y style="height: 100%">
            <view class="u-flex" style="height: 100%">
              <image class="mask-swiper-img" :src="src" mode="widthFix" />
            </view>
          </scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view class="pagebox" v-if="list.length>0">{{ Number(currentIndex) + 1 }} / {{ list.length }}</view>
	</view>
</template>

<script>
	export default {
		name: 'cus-previewImg',
		props: {
			list: {
				type: Array,
				required: true,
				default: () => {
					return [];
				}
			},
			circular: {
				type: Boolean,
				default: false
			},
			duration: {
				type: Number,
				default: 500
			}
		},
		data() {
			return {
				currentIndex: 0,
				showBox: false
			};
		},
		methods: {
			// 左右切换
			changeSwiper(e) {
				this.currentIndex = e.target.current;
			},
			open(current,index) {
				if (!current) return;
				this.currentIndex = this.list.indexOf(current)
        if(this.currentIndex ==-1){
          this.currentIndex = index
        }
				this.showBox = true;
			},
			close() {
				this.showBox = false;
				this.$emit('closePreviewImage',this.currentIndex)
			}
		}
	}
</script>

<style lang="scss" scoped>
@mixin full {
	width: 100%;
	height: 100%;
}

.previewImg {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999999;
	@include full;
	.mask {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
		z-index: 5;
		@include full;
		&-swiper {
			@include full;
			&-img {
				width: 100%;
        height: auto;
			}
		}
	}
	.pagebox{
		position: absolute;
		width: 100%;
		bottom: 20rpx;
		z-index: 6;
		color: #fff;
		text-align: center;
	}
}
</style>
