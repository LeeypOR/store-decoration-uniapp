<template>
	<view class="">
		 <!-- <skeleton
		           :loading="loading"
				  :avatarSize="skeleton1.avatarSize"
				  :row="skeleton1.row"
				  :imgTitle="true"
		        > -->
		             <view   class="skeleton-imgTitle">
		             	<view  :class="headerData.config.formData.styleType=='2'?'wrap':''"
		             		:style="{'padding':headerData.config.formData.fillStyle=='2'?'20rpx':0,'margin':`0 ${headerData.config.formData.pagePadding*pxToRpxScale}rpx`}">

		             		<u-swiper  @click="imgClick" :title="true" :list="imgList"
		             			:height="headerData.config.formData.carouselHeight*pxToRpxScale"
		             			:mode="headerData.config.formData.pointer=='2'?'number':'round'"
		             			:border-radius="headerData.config.formData.borderType==2?'20':0"
		             			name="imageUrl"></u-swiper>
		             	</view>
		             </view>
		        <!-- </skeleton> -->


	</view>
</template>

<script>
	import mixin from '../mixin.js'
	// import skeleton from '@/components/J-skeleton.vue'
	export default {
		mixins: [mixin],
		// components:{
		// 	skeleton
		// },
		props: {
			headerData: {
				type: Object,
				default: () => {}
			}
		},
		created () {


		},
		watch: {
			'headerData.config.formData': {
				handler (val, olVal) {

					val.imageList.map(item => {
						item.title = item.imageTitle
					})

					this.imgList = val.imageList


				},
				deep: true,
				immediate: true
			},
			loading:{
				handler (val, olVal) {

				     this.skeletonLoading = val

				},
				deep: true,
				immediate: true
			}
		},
		data () {
			return {
        moduleName:'轮播组件',
				imgList: [],
				skeletonLoading:false,
				 skeleton1 : {
				        avatarSize: '52px',
				        row: 3,
				        showTitle: true,
				}
			};
		},
		methods: {
			imgClick (index) {
        this.jumpToPage(this.headerData.config.formData.imageList[index])
				// this.$emit('headerImg', )
			}
		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		box-shadow: 0 0 10rpx 3rpx #999;
	}
</style>
