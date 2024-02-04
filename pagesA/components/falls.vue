<template>
  <view class="g-fails">
      <view class="u-flex left u-flex-1">
        <slot name="left" :left="left"></slot>
      </view>
      <view class="u-flex right u-flex-1">
        <slot name="right" :right="right"></slot>
      </view>
    {{setParam}}
  </view>
</template>

<script>
export default {
  props:{
    list:{
    type: Array,
    default:()=>[]
    }
  },
  computed:{
    setParam(){
      let index = 0
      this.left = []
      this.right = []
      for(let item of this.list || []){
        if(index%2 == 0){
          this.left.push(item)
        }
        if(index%2 != 0){
          this.right.push(item)
        }
        index = index+1
      }
      return ''
    }
  },
  data(){
    return {
      left:[],
      right:[]
    }
  }
}
</script>

<style scoped lang="scss">
.g-fails{
  width: 100%;
  display: flex;
}
.right,.left{
  flex-direction: column;
}
</style>