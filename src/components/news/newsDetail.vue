<template>
	<div class="temp">
		<nav-bar title="新闻详情"></nav-bar>
		<div class="news-title">
			<h2>{{ newsDetail.title}}</h2>
			<div>
				<span>{{ newsDetail.click}}次点击</span>
				<span class="mui-pull-right">{{ newsDetail.add_time }}</span>	
			</div>
			<div><span>分类：民生经济</span></div>
		</div>

		<p>
			<img :src="newsDetail.img_url"/>
		</p>
		<div class="news-content">{{ newsDetail.zhaiyao }}</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				newsDetail:{},
			}
		},
		created(){
			// 获取路由参数
			let id = this.$route.query.id;
			// 拼接参数，发起请求
			this.$ajax.get('getnews/?id='+id)
			.then(res=>{
				console.log(res.data.message)
				this.newsDetail = res.data.message[0];
			})
			.catch(err=>{
				console.log(err);
			})
		}
	}
</script>
<style scoped>
	.news-title {padding:10px 20px;}
	.news-title h2{text-align: center;}
	img{width: 100%;}
	.news-content{text-indent: 2rem;}
</style>