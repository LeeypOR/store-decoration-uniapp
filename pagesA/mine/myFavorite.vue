<template>
  <view>
    <u-navbar :border-bottom="false" title="商品收藏" title-bold title-color="#191919" title-size="36" back-icon-color="#000000"></u-navbar>
    <template v-if="collectionList.length>0">
    <view class="edit-item u-flex">
      <text class="edit-item-title">共 {{ collectionList.length }}件宝贝</text>
      <text class="edit-item-btn" v-if="isEdit" @click="isEdit = false">完成</text>
      <text class="edit-item-btn" v-else @click="isEdit = true">编辑</text>
    </view>
    <u-checkbox-group shape="circle" @change="checkboxGroupChange">
      <view class="u-flex collect-box" v-for="item in collectionList">
        <u-checkbox @change="checkboxChange(item,index)" active-color="#D1B085" :value="item.isActive" :name="item.id" v-show="isEdit"></u-checkbox>
        <view class="g-goods u-flex u-flex-1" @click="checkboxChange(item,index)">
          <view class="goods-img-box">
            <image :src="item.picUrl"></image>
          </view>
           <view class="goods-detail u-flex">
            <view class="top-box">
              <view class="u-flex">
                <text class="goods-name u-line-1">{{item.goodsName}}</text>
                <text class="iconfont icon-closedicon" @click.stop="delGoods(item.id)" v-show="!isEdit"></text>
              </view>
            </view>
            <view class="bottom-box u-flex">
              <text class="goods-money">¥{{switchMoney(item.price)}}</text>
<!--              <text class="iconfont icon-app_icon_gouwuche" v-show="!isEdit"></text>-->
            </view>
          </view>
        </view>
      </view>
    </u-checkbox-group>
    </template>
    <no-data v-else type="noCollect"></no-data>
    <view class="bottom-height" v-if="isEdit"></view>
    <view class="bottom-btn-box u-flex" v-if="isEdit">
      <u-checkbox active-color="#D1B085" shape="circle" @change="selectAllChange" v-model="isSelectAll">
        <text class="sel-total">全选</text>
      </u-checkbox>
      <text class="cancel-collect-btn" @click="delCollection">取消收藏</text>
    </view>
  </view>
</template>

<script>
import Popup from "@/pagesA/components/popup";
import NoData from "../../components/noData";
export default {
  components:{NoData, Popup},
  data(){
    return {
      title:'我的收藏',
      isEdit:false,
      from:{
        current:1,
        size:999
      },
      collectionList:[],             // 收藏列表
      ids:[],                        // 选中的id
      isSelectAll:false,             //  是否全选
    }
  },
  onShow(){
    this.getCollectionList()
  },
  computed:{
    selectAll(){
      if(!this.isEdit){
        this.collectionList = this.collectionList.map(item => {item.isActive = false;return item})
        this.isSelectAll = false
        this.ids = []
      }
    }
  },
  methods:{
    // 选择全部状态 发送改变
    selectAllChange({value}){
      const ids = []
      this.collectionList = this.collectionList.map(item => {item.isActive = value;ids.push(item.id);return item})
      value ? this.ids = ids : this.ids = []

    },
    // 我的收藏列表
    async getCollectionList(){
      const {dataInfo : res} = await this.$http.getCollectionList(this.from)
      this.collectionList = (res?.records || []).map(item=>{
        item.isActive = false
        return item
      })
    },
    // 选项变动触发(不给默认值当前选中的不在返回列表中)
    checkboxGroupChange(detail){
      this.ids = detail || []
      this.collectionList = [...this.collectionList]
      if(this.ids && this.ids.length == this.collectionList.length){
        this.isSelectAll = true
        return
      }
      this.isSelectAll = false
    },
    // 多选点击触发
    checkboxChange(item,index){
      if(!this.isEdit){
        this.goTo(`/pagesA/shop/goodsDetail?id=${item.productId}`)
        return
      }
      item.isActive = !item.isActive
      if(item.isActive){
        this.ids.push(item.id)
      }else{
        this.ids = this.ids.filter(id => {
          if(id !== item.id) return true
        })
      }
      this.collectionList = [...this.collectionList]
      if(this.ids && this.ids.length == this.collectionList.length){
        this.isSelectAll = true
        return
      }
      this.isSelectAll = false
    },
    // 单个删除
    delGoods(id){
      if(id){
        this.ids = [id]
        this.delCollection()
      }
    },
    // 删除收藏
    async delCollection(){
      const ids = this.ids
      if(ids.length<=0){
        return
      }
      await this.$http.delCollection({ids:ids.join(',')})
      this.$toast('取消收藏成功')
      this.collectionList = this.collectionList.filter(item =>{
        if(ids.includes(item.id)){
          return false
        }
        return true
      })
      this.delIds = []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/static/css/goods.scss';
.edit-item{
  padding: 20rpx 30rpx;
  justify-content: space-between;
  .edit-item-title{
    font-size: 24rpx;
    color: #666666;
  }
  .edit-item-btn{
    font-size: 24rpx;
    color: #191919;
  }
}
.collect-box{
  background: #ffffff;
  padding-left: 30rpx;
}
.bottom-height{
  height: iphone-bottom(128rpx);
}
.bottom-btn-box{
  position: fixed;
  justify-content: space-between;
  width: 100%;
  bottom: 0;

  padding: 14rpx 30rpx iphone-bottom(14rpx) 30rpx;
  background: #FFFFFF;
  box-shadow: 0px -1px 0px 0px rgba(230,230,230,1);
  .cancel-collect-btn{
    display: inline-block;
    border-radius: 45rpx;
    padding: 15rpx 50rpx;
    background: #D1B085;

    font-size: 28rpx;
    font-weight: 600;
    color: #FFFFFF;
  }
}
.sel-total{
  margin-left: 20rpx;
  font-size: 28rpx;
  color: #666666;
  font-weight: 400;
}
/deep/.u-checkbox__label{
  margin-left: 0!important;
  margin-right: 0!important;
}
/deep/.no-data{
  z-index: 1!important;
  background-color: #ffffff;
}
</style>
