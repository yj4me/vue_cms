<template>
	<div class="temp">
		<nav-bar title="新闻列表"></nav-bar>
	
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="data in datas" :key="data.id">
				<router-link :to="{name:'news.detail',query:{id:data.id}}">
					<img class="mui-media-object mui-pull-left" :src="data.img_url">
					<div class="mui-media-body">
						<span v-text="data.title"></span>
						<p>
							<span>点击数：{{ data.click }}</span>
							<span class="mui-pull-right">{{data.add_time}}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				datas:[],//新闻列表
			}
		},
		created(){
			this.$ajax.get("getnewslist")
			.then(res=>{
				console.log(res.data.message);
				this.datas = res.data.message;
			})
		}
	}
</script>
<style>
	
</style>