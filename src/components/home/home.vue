<template>
	<div class="temp">
		<!--轮播图-->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(data,index) in datas" :key="index">
		  	<a :href="data.url"><img :src="data.img"></a>
		  </mt-swipe-item>
		</mt-swipe>

		<!--九宫格-->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
	                    </router-link>
                    </li> <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'pic.share'}">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图文分享</div>
	                    </router-link>
                    </li> <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'goods.list'}">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品展示</div>
	                    </router-link>
                    </li> <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:''}">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div>
	                    </router-link>
                    </li> <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:''}">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索资讯</div>
	                    </router-link>
                    </li> <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:''}">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div>
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
				datas:[],//轮播图列表
			}
		},created(){
			this.$ajax.get("getlunbo")
			.then(res=>{
				console.log(res.data.message);
				this.datas = res.data.message;
			})
		}
	}
</script>
<style scoped>
	.mint-swipe{
		height:140px;
	}
	.mint-swipe img{
		width: 100%;
		/*height:100%;*/

	}

	.mui-table-view.mui-grid-view.mui-grid-9{
		background-color: #fff;
		border:none;
		margin-top: 0;
	}
	.mui-table-view.mui-grid-view.mui-grid-9 li{
		border:none;
	}
	/*清除字体图标*/
	.mui-grid-view .mui-icon-home:before,.mui-grid-view .mui-icon-email:before,.mui-grid-view .mui-icon-chatbubble:before,
	.mui-grid-view .mui-icon-location:before,.mui-grid-view .mui-icon-search:before,.mui-grid-view .mui-icon-phone:before{
		content: ' ';
	}
	.mui-grid-view  .mui-icon{
		width:50px;
		height:50px;
	}
	.mui-grid-view .mui-icon-home{
		background: url(../../static/img/news.png);
		background-repeat: round;
	}
	.mui-grid-view .mui-icon-email{
		background: url(../../static/img/picShare.png);
		background-repeat: round;
	}
	.mui-grid-view .mui-icon-chatbubble{
		background: url(../../static/img/goodShow.png);
		background-repeat: round;
	}
	.mui-grid-view .mui-icon-location{
		background: url(../../static/img/feedback.png);
		background-repeat: round;
	}
	.mui-grid-view .mui-icon-search{
		background: url(../../static/img/search.png);
		background-repeat: round;
	}
	.mui-grid-view .mui-icon-phone{
		background: url(../../static/img/callme.png);
		background-repeat: round;
	}

</style>