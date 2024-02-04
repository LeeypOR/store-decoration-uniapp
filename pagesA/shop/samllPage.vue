<!-- 图片广告 的组件 -->
<template>
  <view>
    <u-navbar class="location-class" :border-bottom="false" title="填写订单" title-bold title-color="#191919"
              title-size="36"
              back-icon-color="#000000">
    </u-navbar>
    <view class="my_banner" :style="{'padding-left': formData.pagePadding + 'rpx',
        'padding-right': formData.pagePadding + 'rpx'}">
      <view class="had_img_wrap" v-if="formData.imageList && formData.imageList.length">
        <!-- 1是一行一个 -->
        <view class="image_list" v-if="formData.type == '1'">
          <view class="image_item" v-for="(item, i) of formData.imageList" :key="i">
            <image  mode="widthFix" :style="{'border-radius':borderRdiusMap[formData.borderType],'box-shadow':boxShadowMap[formData.styleType],'margin-bottom':formData.imagePadding + 'px'}" class="image" :src="item.imageUrl || defaultImage" alt="" width="100%" />
          </view>
        </view>
        <!--2是 轮播 -->
        <!--      <a-carousel-->
        <!--          class="carousel"-->
        <!--          v-if="formData.type == '2'"-->
        <!--          autoplay-->
        <!--          effect="fade"-->
        <!--          :dots="formData.pointer === '1'"-->
        <!--      >-->
        <!--        <view class="image_wrap" v-for="(item, index) in formData.imageList" :key="index">-->
        <!--          &lt;!&ndash; <img style="pointer-events: none" :src="item.imageUrl  || defaultImage"/> &ndash;&gt;-->
        <!--          <view-->
        <!--              class="img_view"-->
        <!--              :style="{-->
        <!--							height: formData.carouselHeight + 'px',-->
        <!--							background: `url(${item.imageUrl || defaultImage}) no-repeat 0 0 / ${fillStyle}`,-->
        <!--						}"-->
        <!--          ></view>-->
        <!--          <view class="index_wrap" v-if="formData.pointer === '2'">-->
        <!--            <view class="current_index">{{ index + 1 }}</view>-->
        <!--            <view class="separator">/</view>-->
        <!--            <view class="total_index">{{ formData.imageList.length }}</view>-->
        <!--          </view>-->
        <!--        </view>-->
        <!--      </a-carousel>-->
        <!-- 3是小图滑动 -->
        <view class="image_sliding" v-if="formData.type == '3'">
          <view class="image_sliding_wrap" :style="{height: formData.carouselHeight + 'px',}">
            <img
                alt=""
                class="sliding_image"
                :style="imageSlidingPadding"
                v-for="(item, i) of formData.imageList"
                :key="i"
                :src="item.imageUrl || defaultImage"/>
          </view>
        </view>
      </view>

      <!-- <view class="my_banner-content" v-else :style="style"></view> -->
      <!--    <img class="default_content" v-else src="~@images/shop/icon_middle_modalbox_banner_default.png" alt="" />-->
    </view>
  </view>



</template>
<script>
export default {
  name: 'PictureAdvertisement',
  props: {
    item: {
      type: Object,
      default: {
        config: {
          "type": "1",
          "imageList": [
            {
              "imageType": "1",
              "imageUrl": "https://testsd.cicd.vpclub.cn/ghs/20210618/2021061817364725.png",
              "imageTitle": "单链接",
              "jumpPageId": "434448198052872193",
              "jumpPageName": "未分组",
              "hotAreaConfigInfoList": []
            },
            {
              "imageType": "2",
              "imageUrl": "https://testsd.cicd.vpclub.cn/ghs/20210618/2021061817365491.png",
              "imageTitle": "热区2个",
              "jumpPageId": "",
              "jumpPageName": "",
              "hotAreaConfigInfoList": [
                {
                  "top": "29px",
                  "left": "39px",
                  "width": "178px",
                  "height": "178px",
                  "sort": "1",
                  "id": "hot_area-1624008814140",
                  "jumpPageId": "434684077321224192",
                  "jumpPageName": "热门"
                },
                {
                  "top": "196px",
                  "left": "244px",
                  "width": "119px",
                  "height": "114px",
                  "sort": "2",
                  "id": "hot_area-1624008854428",
                  "jumpPageId": "2",
                  "jumpPageName": "新品上架"
                }
              ]
            }
          ],
          "styleType": "2",
          "borderType": "2",
          "fillStyle": "1",
          "pointer": "1",
          "pagePadding": 3,
          "imagePadding": 8,
          "carouselHeight": 200
        }
      }
    }
  },
  computed: {
    /**
     * 小图滑动的动态样式，包括：
     * 图片样式，常规/阴影。
     * 图片倒角，直角/圆角。
     * 图片间距，距离右边的margin、
     */
    // borderRdiusMap(){
    //   return () =>({
    //     '1': '0px',
    //     '2': '7px'
    //   })
    // },
    // boxShadowMap(){
    //   return () =>({
    //     '1': 'none',
    //     '2': '0 3px 16px rgb(0, 0,  0, 0.1)'
    //   })
    // },
    imageSlidingPadding () {
      const borderRdiusMap = {
        '1': '0px',
        '2': '7px'
      }
      const boxShadowMap = {
        '1': 'none',
        '2': '0 3px 16px rgb(0, 0,  0, 0.1)'
      }
      return {
        borderRadius: borderRdiusMap[this.formData.borderType],
        boxShadow: boxShadowMap[this.formData.styleType],
        marginRight: this.formData.imagePadding + 'px'
      }
    },
    fillStyle () {
      const fillStyleMap = {
        '1': 'cover',
        '2': 'contain'
      }
      return fillStyleMap[this.formData.fillStyle]
    },

    /**
     * 一行一个的动态样式，包括：
     * 图片样式，常规/阴影。
     * 图片倒角，直角/圆角。
     * 图片间距，距离下方的margin-bottom
     */
    oneLineImageStyle () {
      const borderRdiusMap = {
        '1': '0px',
        '2': '7px'
      }
      const boxShadowMap = {
        '1': 'none',
        '2': '0 3px 16px rgb(0, 0,  0, 0.1)'
      }
      return {
        borderRadius: borderRdiusMap[this.formData.borderType],
        boxShadow: boxShadowMap[this.formData.styleType],
        marginBottom: this.formData.imagePadding + 'px'
      }
    },
    // 传入的FitmentRight里配置的数据。
    formData () {
      let res = this.item.config || {}
      
      return res
    },
    /**
     * 3个模板的页面边距设置。
     */
    style () {
      return {
        paddingLeft: this.formData.pagePadding + 'px',
        paddingRight: this.formData.pagePadding + 'px'
        // marginBottom: this.formData.imagePadding + 'px'
        // margin-bottom:
        // paddingTop
        // borderRadius: this.formData.borderRadius
      }
    }
  },
  data () {
    return {
      borderRdiusMap: {
            '1': '0px',
            '2': '7px'
          },

      boxShadowMap : {
        '1': 'none',
        '2': '0 3px 16px rgb(0, 0,  0, 0.1)'
      }
      // defaultImage: require('@images/shop/icon_middle_modalbox_banner_default.png')
    }
  }
}
</script>
<style lang="scss" scoped>
.my_banner {
  width: 100%;
  overflow: hidden;
  .had_img_wrap {
    .image_list {
      .image_item {
        .image {
        }
      }
    }
    .carousel {
      .image_wrap {
        position: relative;
        .img_div {
        }
        // img {
        // }
        .index_wrap {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          width: 40px;
          height: 20px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          padding: 0 10px;
          .current_index {
          }
          .separator {
          }
          .total_index {
          }
        }
      }
    }
    // /deep/.ant-carousel .slick-slide {
    //   text-align: center;
    //   height: 160px;
    //   line-height: 160px;
    //   background: #364d79;
    //   overflow: hidden;
    // }
    .image_sliding {
      .image_sliding_wrap {
        display: flex;
        .sliding_image {
          height: 100%;
        }
      }
    }
  }
  .default_content {
    width: 100%;
    // width: 375px;
    // height: 200px;
  }
}
image{
  width: 100%;
}
</style>
