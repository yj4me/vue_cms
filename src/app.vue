<template>
	<div>
		<!--头部-->
		<mt-header fixed title="信息管理系统"></mt-header>

		<!--内容-->
		<transition name="router" mode="out-in">
			<router-view></router-view>	
		</transition>
		

		<!--底部-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'vip'}">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'cart'}">
				<span class="mui-icon icon-gouwuche"><span class="mui-badge">{{ picNum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
import connect from './components/common/connect.js'
// 引入prodTools
import prodTools from './components/common/prodTools.js'
	// 先创建父组件,后创建子组件
	export default{
		data(){
			return{
				picNum:prodTools.getTotalCount(),
			}
		},
		created(){
			//这里的this是VueCompornent对象
			// 我们需要的是Vue$3(即new Vue())
			// let self = this;//箭头函数可以解决this指代问题
			// connect.$on('addShopcart',function(num){
			// 	console.log("接收到了");
			// 	self.picNum += num;
			// 	console.log(self.picNum);
			// })
			connect.$on('addShopcart',num=>{
				console.log("接收到了");
				this.picNum += num;
			})
		}
	}
</script>
<style scoped>
/*淡入淡出*/
	.router-enter-active,.router-leave-active{
		transition:opacity .5s
	}
	.router-enter,.router-leave-to{
		opacity: 0;
	}
</style>