<template>
  <view>
    <u-modal
        v-model="cancelShow"
        :content="content"
        :title="title"
        show-cancel-button
        border-radius="20"
        :confirm-text="confrimText"
        @confirm='cancelConfirm'
        confirm-color="#FFFFFF"
        cancel-color="#D1B085">
    </u-modal>
  </view>
</template>

<script>
	export default {
		name:"popup",
		props:{
		  // 类容描述
			content:{
				type:String,
				default:''
			},
      // 标题
			title:{
				type:String,
				default:''
			},
      // 确定按钮 文字
			confrimText:{
				type:String,
				default:'确定'
			},
		},
		model:{
			prop:'cancelShow',
			event:'cancelConfirm'
		},
		data() {
			return {
				cancelShow: false,
				// content: '',
				// title: '',
				// confrimText: '',
			};
		},
		methods:{
		  // 暴露给外面的方法
			cancelConfirm(){
				this.$emit('confirm')
        this.hide()
			},
      // 显示弹窗
      show(){
        this.cancelShow = true
      },
      // 隐藏弹窗
      hide(){
        this.cancelShow = false
      }
		}
	}
</script>

<style>

</style>
