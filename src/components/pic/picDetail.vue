<template>
	<div class="temp">
		<nav-bar title="图片详情"></nav-bar>
		<div class="news-title">
			<h2>{{ picDetail.title}}</h2>
		</div>
		<p>
			<span class="mui-pull-right">时间：{{ picDetail.add_time}}</span>
			<span >阅读：{{ picDetail.read}}</span>
		</p>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(img,index) in imgs">
            	<img class="preview-img" :src="img.src" height="100" @click="$preview.open(index, imgs)">
            </li>
        </ul>
		
		<div class="news-content" v-html="picDetail.content"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				picDetail:{},
				imgs:[]
			}
		},
		created(){
			// 获取路由参数
			let id = this.$route.params.id;
			// 拼接参数，发起请求
			this.$ajax.get('getimages/?id='+id)
			.then(res=>{
				console.log(res.data.message)
				this.picDetail = res.data.message[0];
				for(let i=0;i<5;i++){
					this.imgs.push({"src":res.data.message[0].img_url});
				}
				this.imgs.forEach((ele)=>{
					ele.w = 600;
					ele.h = 600;

				})
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
	p{padding: 0 10px;}
	img{width: 100%;}
	.news-content{text-indent: 2rem;}
</style>