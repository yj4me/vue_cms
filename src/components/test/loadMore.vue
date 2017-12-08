<template>
	<div class="temp">
		<nav-bar title="我是测试用例"></nav-bar>
		<mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                 ref="loadmore" :auto-fill="isAutoFill">

		  <ul >
		    <li v-for="item in datas">哈哈</li>
		  </ul>
		</mt-loadmore>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				pageIndex:0,
				datas:[],
				allLoaded:false,//是否禁止上拉函数的调用，默认值是false
				isAutoFill:false,//页面一开始就自动调用一次loadmore
				
			}
		},
		created(){
			this.$ajax.get("getgoods?page="+this.pageIndex)
			.then(res=>{
				console.log(res.data.message);
				this.datas = res.data.message;
			})
		},
		methods:{
			
			loadBottom(){
				alert("滚动加载更多...");
			},
			loadmoreConcat(){
				this.$ajax.get("getgoods?page="+(++this.pageIndex))
				.then(res=>{
					this.datas = this.datas.concat(res.data.message);
					// 判断是否还有数据
					if(res.data.message.length != 10){
						this.allLoaded = true;// 若数据已全部获取完毕
					}
					// 通知上拉操作已经完结
					this.$refs.loadmore.onBottomLoaded();
				})
				.catch(err=>{
					console.log(err);
				})
			}
			
		}
	}
</script>
<style>
	#app{overflow: scroll;}
	ul{margin:0;padding:0;list-style: none;}
	li{
		height: 100px;
		background-color: pink;
		margin-bottom: 10px;
	}
</style>