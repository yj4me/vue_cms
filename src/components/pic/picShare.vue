<template>
	<div class="temp">
		<nav-bar title="图文分享"></nav-bar>
		<!-- 分类导航 -->
		<div class="pic-header">
			<ul>
				<li v-for="category in categories" :key="category.id">
					<a href="javascript:;" @click="loadImg(category.id)">{{category.title}}</a>
				</li>
				
			</ul>
		</div>
		<!-- 列表 -->
		<div class="photo-list">
			
			<ul>
				<li v-for="img in imgs">
					<router-link  :to="{name:'pic.detail',params:{id:img.id}}">
						<img v-lazy="img.img_url">
						<p>{{img.zhaiyao}}</p>
					</router-link>
				</li>
			</ul>
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				categories:[],
				imgs:[],
			}
		},
		created(){
			this.$ajax.get('getCategory')
			.then(res=>{
				console.log(res.data.message);

				this.categories = res.data.message;

				// 将全局添加到数组的第一个unshift
				this.categories.unshift({
					id:0,
					title:"所有"
				})
			})
			.catch(err=>{
				console.log(err);
			});

			// 将0作为参数，获取全部图片数据
			this.loadImg(0);
			
		},

		methods:{

			loadImg(id){
				this.$ajax.get('getimages/?cateId='+ id)
				.then(res=>{
					console.log(res.data.message);
					this.imgs = res.data.message;
				})
				.catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>
<style>
	.pic-header ul{
		/*强行不换行*/
		white-space: nowrap;
		overflow-x: auto;
		padding-left: 0;
		margin: 5px;
	}
	.pic-header li{
		list-style: none;
		display: inline-block;
		margin-left: 10px;
		height: 30px;
	}
	.photo-list ul{padding: 0;}
	.photo-list li{
		position: relative;
		list-style: none;
		margin: 0 10px 20px;
	}
	.photo-list li img{width: 100%;}
	.photo-list li p{position: absolute;width: 100%;padding: 10px 0;
		left: 0;bottom: 0;color: #fff;background-color: rgba(0,0,0,.4);}
	/*图片懒加载的样式*/
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
</style>