<template>
<view>
	
		<view v-show="showCanvas" class="warp">
			<canvas canvas-id="k-canvas" :style="painterStyle + '' + customStyle"></canvas>
		    
		</view>
		


</view>
</template>

<script>
import Pen from './lib/pen';
import Downloader from './lib/downloader';
import _default from 'vuex';
const util = require("./lib/util.js");
const downloader = new Downloader(); // 最大尝试的绘制次数
// 最大尝试的绘制次数
const MAX_PAINT_COUNT = 5;
let screenK = 0.5;
function setStringPrototype() {
  /* eslint-disable no-extend-native */

  /**
   * 是否支持负数
   * @param {Boolean} minus 是否支持负数
   */
  String.prototype.toPx = function toPx(minus) {
    let reg;

    if (minus) {
      reg = /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g;
    } else {
      reg = /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g;
    }

    const results = reg.exec(this);

    if (!this || !results) {
      //   console.log(`The size: ${this} is illegal`);
      return 0;
    }

    const unit = results[2];
    const value = parseFloat(this);
    let res = 0;

    if (unit === 'rpx') {
      res = Math.round(value * screenK);
    } else if (unit === 'px') {
      res = value;
    }

    return res;
  };
}

export default {
  data() {
    return {
      picURL: '',
      showCanvas: false,
      painterStyle: ''
    };
  },

  components: {},
  props: {
    customStyle: {
      type: String,
      default:''
    },
    palette: {
      type: Object,
      default:()=>{}
    },
    posterData:{
      type:Object,
      default:()=>{}
    },
    // 启用脏检查，默认 false
    dirty: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    palette: {
      handler: function (newVal, oldVal) {
        if (this.isNeedRefresh(newVal, oldVal)) {
          this.paintCount = 0;
          this.startPaint();
        }
      },
      immediate: true,
      deep: true
    }
  },
  canvasWidthInPx: 0,
  canvasHeightInPx: 0,
  paintCount: 0,

  beforeMount() {
    setStringPrototype();
  },
  methods: {
    /**
     * 判断一个 object 是否为 空
     * @param {object} object
     */
    isEmpty(object) {
      for (const i in object) {
        return false;
      }

      return true;
    },

    isNeedRefresh(newVal, oldVal) {
      if (!newVal || this.isEmpty(newVal) || this.dirty && util.equal(newVal, oldVal)) {
        return false;
      }

      return true;
    },

    startPaint() {
      if (this.isEmpty(this.palette)) {
        return;
      }

      if (!(getApp().systemInfo && getApp().systemInfo.screenWidth)) {
        try {
          getApp().systemInfo = uni.getSystemInfoSync();
        } catch (e) {
          const error = `Painter get system info failed, ${JSON.stringify(e)}`;
          this.$emit('imgErr', {
            detail: {
              error: error
            }
          }); 

          return;
        }
      }
      screenK = getApp().systemInfo.screenWidth / 750;
      this.downloadImages().then(palette => {
        const {
          width,
          height
        } = palette;
        this.canvasWidthInPx = width.toPx();
        this.canvasHeightInPx = height.toPx();

        if (!width || !height) {
          //   console.log(`You should set width and height correctly for painter, width: ${width}, height: ${height}`);
          return;
        }
        
        this.painterStyle=`width:${width};height:${height};margin:'0 auto'`
        const ctx = wx.createCanvasContext('k-canvas', this);
        const pen = new Pen(ctx, palette,this.posterData);
        pen.paint(() => {
          this.saveImgToLocal();
        });
      });
    },

    downloadImages() {
      return new Promise((resolve, reject) => {
        let preCount = 0;
        let completeCount = 0;
        const paletteCopy = JSON.parse(JSON.stringify(this.palette));

        if (paletteCopy.background) {
          preCount++;
          downloader.download(paletteCopy.background).then(path => {
            paletteCopy.background = path;
            completeCount++;

            if (preCount === completeCount) {
              resolve(paletteCopy);
            }
          }, () => {
            completeCount++;

            if (preCount === completeCount) {
              resolve(paletteCopy);
            }
          });
        }

        if (paletteCopy.views) {
          let that = this;

          for (const view of paletteCopy.views) {
            if (view && view.type === 'image' && view.url) {
              preCount++;
              /* eslint-disable no-loop-func */

              downloader.download(view.url).then(path => {
                view.url = path;
                wx.getImageInfo({
                  src: view.url,
                  success: res => {
                    // 获得一下图片信息，供后续裁减使用
                    view.sWidth = res.width;
                    view.sHeight = res.height;
                  },
                  fail: error => {
                    // console.log(`imgDownloadErr failed, ${JSON.stringify(error)}`);
                    that.$emit('imgDownloadErr', {
                      detail: {
                        error: error
                      }
                    });
                  },
                  complete: () => {
                    completeCount++;

                    if (preCount === completeCount) {
                      resolve(paletteCopy);
                    }
                  }
                });
              }, () => {
                completeCount++;

                if (preCount === completeCount) {
                  resolve(paletteCopy);
                }
              });
            }
          }
        }

        if (preCount === 0) {
          resolve(paletteCopy);
        }
      });
    },

    saveImgToLocal() {
      const that = this;
      setTimeout(() => {
        wx.canvasToTempFilePath({
          canvasId: 'k-canvas',
          success: function (res) {
            that.getImageInfo(res.tempFilePath);
          },
          fail: function (error) {
            // console.log(`canvasToTempFilePath failed, ${JSON.stringify(error)}`);
            that.$emit('imgErr', {
              detail: {
                error: error
              }
            });
          }
        }, this);
      }, 300);
    },

    getImageInfo(filePath) {
      const that = this;
      wx.getImageInfo({
        src: filePath,
        success: infoRes => {
          if (that.paintCount > MAX_PAINT_COUNT) {
            const error = `The result is always fault, even we tried ${MAX_PAINT_COUNT} times`; // console.log(error);

            that.$emit('imgErr', {
              detail: {
                error: error
              }
            });
            return;
          } // 比例相符时才证明绘制成功，否则进行强制重绘制


          if (Math.abs((infoRes.width * that.canvasHeightInPx - that.canvasWidthInPx * infoRes.height) / (infoRes.height * that.canvasHeightInPx)) < 0.01) {
            that.$emit('imgOK', {
              detail: {
                path: filePath
              }
            });
          } else {
            that.startPaint();
          }

          that.paintCount++;
        },
        fail: error => {
          //   console.log(`getImageInfo failed, ${JSON.stringify(error)}`);
          that.$emit('imgErr', {
            detail: {
              error: error
            }
          });
        }
      });
    }

  }
};
</script>
<style lang="scss" scoped>
	.warp {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			.button-wrapper {
				position: fixed;
				bottom: 20rpx;
				z-index: 16;
				display: flex;
				width: 100%;
				height: 72rpx;
				justify-content: space-around;
			}
			
			.save-btn {
				z-index: 16;
				width: 40%;
				height: 100%;
				font-size: 30rpx;
				line-height: 72rpx;
				color: #fff;
				text-align: center;
				background: $uni-btn-color;
				border-radius: 45rpx;
				border-radius: 36rpx;
			}
			
			.cancel-btn {
				color: $uni-btn-color;
				background: #fff;
			}
			
			.canvas-close-btn {
				position: fixed;
				top: 30rpx;
				right: 0;
				z-index: 12;
				width: 60rpx;
				height: 60rpx;
				padding: 20rpx;
			}
		}
</style>
