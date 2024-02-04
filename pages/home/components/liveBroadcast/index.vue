<template>
	<view class="container" :style="{'padding':`0 ${dataInfo.pagePadding*pxToRpxScale}rpx`}" v-if="goodsList.length>0">
		<view class="title" v-if="dataInfo.listStyle !=3"></view>
		<scroll-view v-if="dataInfo.listStyle == '1' || dataInfo.listStyle == '2'" class="scroll-x" scroll-x="true">
			<!-- 第一种样式 -->
			<block v-if="dataInfo.listStyle == '1'">
				<view class="scroll-item">
					<goodLive v-if="dataInfo" :goodsList="goodsList" :dataInfo="dataInfo"></goodLive>
				</view>
				<view class="scroll-item" >
					<commonLive v-if="dataInfo" :goodsList="goodsList" :dataInfo="dataInfo"></commonLive>
				</view>
			</block>
			<!-- 第二种样式 -->
			<block v-if="dataInfo.listStyle == '2'">
				<view class="" >
					<commonLive v-if="dataInfo" :goodsList="goodsList" :dataInfo="dataInfo"></commonLive>
				</view>
			</block>
		</scroll-view>
		<block v-if="dataInfo.listStyle =='3'">
			<u-waterfall  v-model="goodsList" add-time="50">
				<template v-slot:left="{leftList}">
					<view style="margin-right:5% ;">
						<commonLive  :goodsList="leftList" :dataInfo="dataInfo"></commonLive>
					</view>
				</template>
        <template v-slot:right="{rightList}">
          <view style="margin-left:5% ;">
            <commonLive :goodsList="rightList" :dataInfo="dataInfo"></commonLive>
          </view>
        </template>
			</u-waterfall>
		</block>
	</view>
</template>

<script>
	import goodLive from './components/goodsLive.vue'
	import commonLive from './components/commonLive.vue'
	import mixin from '../../mixin.js'
	export default {
		mixins: [mixin],
		components: {
			goodLive,
			commonLive
		},
		data () {
			return {
        goodsList:[]
      }
		},
    mounted(){
      this.queryRoomByIds()
    },
    methods:{
      // 根据直播间房间list查询房间列表
      async queryRoomByIds(){
        const ids = this.dataInfo?.roomIdList || []
        if(ids.length<=0){
          return
        }
        let param = {"ids": ids}
        const res = await this.$http.queryRoomByIds(param)
        this.goodsList = res?.dataInfo?.records || []
      }
    }
	}
</script>

<style lang="scss" scoped>
	.container {
		.scroll-x {
			white-space: nowrap;
			width: 100%;
		}

		.title {
      height: 32rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: #191919;
      margin-bottom: 22rpx;
		}

		.scroll-item {
			display: inline-block;
			vertical-align: top;
		}

	}
</style>
