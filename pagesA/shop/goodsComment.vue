<template>
  <view>
    <u-navbar class="location-class" :border-bottom="false" title="商品评价" title-bold title-color="#191919"
              title-size="36"
              back-icon-color="#000000">
    </u-navbar>
    <comment-list :commentList="commentList"></comment-list>
  </view>
</template>

<script>
import CommentList from "@/pagesA/components/commentList";
export default {
  components: { CommentList},
  data(){
    return{
      commentList:[],              //  评论数据
      from:{
        current: 1,
        size: 10,
        productId:''
      },
      goodsId:""
    }
  },
  onLoad(option){
    this.goodsId = option.id || ''
    this.getCommentList()
  },
  methods:{
    async getCommentList(){
      if(!this.goodsId){
        return
      }
      this.from.productId = this.goodsId
      const res = await this.$http.getReviewList(this.from)
      this.commentList = res?.dataInfo?.records || []
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
<style>
page{
  background: #f8f8f8;
}
</style>