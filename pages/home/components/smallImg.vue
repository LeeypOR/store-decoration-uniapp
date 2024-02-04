 <template>
	<view>
		<scroll-view scroll-x="true">
			<view class="image-wrapper">
        <view class="box-card"
              v-for="(item, index) in smallImgData.config.formData.imageList"
              :class="smallImgData.config.formData.styleType=='2'?'wrap':''" :style="{'padding':smallImgData.config.formData.fillStyle=='2'?'20rpx':0,'margin':`0 ${smallImgData.config.formData.pagePadding*pxToRpxScale}rpx`}">
          <image @click="imgClick(item)" :src="item.imageUrl"
		  :class="smallImgData.config.formData.borderType ==2?'border-raduis':''"
		   :style="'height:'+ smallImgData.config.formData.carouselHeight*pxToRpxScale + 'rpx'+';'+'margin-right:'+smallImgData.config.formData.imagePadding*pxToRpxScale + 'rpx'" mode="heightFix" :key="index">
		   </image>
          <hot-area :hotAreaList="item.hotAreaConfigInfoList"></hot-area>
          <text class="img-title" v-if="item.imageTitle">{{item.imageTitle}}</text>
        </view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import hotArea from '../components/hotArea'
import mixin from '../mixin.js'
export default {
  components:{hotArea},
  mixins:[mixin],
  props: {
    smallImgData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      moduleName:'轮播组件',
    };
  },

  methods: {
    imgClick(item) {
      this.jumpToPage(item)
      // this.$emit('smallImg', item)
    }
  }
};
</script>

<style lang="scss" scoped>
	.image-wrapper {
		white-space: nowrap;
		image{
		  display: inline-block;
		}
		.border-raduis{
			border-radius: 14rpx;
		}
	}
  .box-card{
    display: inline-block;
    position: relative;
  }
  .wrap{
    box-shadow:  0 0 10rpx 3rpx #999;
  }
  .img-title{
    position: absolute;
    bottom: 10%;
    left:5%;
    display: inline-block;
    background: rgba(255, 255, 255, 0.6);
    padding: 2rpx 4rpx;
  }
</style>
