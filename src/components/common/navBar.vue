<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull0left" @click="goBack"></a>
			<h1 class="mui-title">{{ title }}</h1>
		</header>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:['title'],//声明接收父组件的参数
		methods:{
			goBack(){
				this.$router.go(-1);//根据浏览器纪录返回上一次浏览的界面
			}
		}
	}
</script>
<style scoped>
	.mui-bar.mui-bar-nav{
		position: relative;
	}
</style>